<?php
class HomePage extends Page {

	private static $db = array(
		"Biography" => "HTMLText",
		"TwitterUser" => "Varchar",
		"NumberOfTweets" => "Varchar",
		"TwitterConsumerKey" => "Varchar",
		"TwitterConsumerSecret" => "Varchar",
		"TwitterAccessToken" => "Varchar",
		"TwitterAccessTokenSecret" => "Varchar"
		
	);

	private static $has_one = array(
		'Image' => 'Image',
	);
	
	function getCMSFields() {
		$fields = parent::getCMSFields();         
       	$fields->addFieldToTab('Root.Main', new HTMLEditorField('Biography'));
       	$fields->addFieldToTab('Root.Main', new UploadField('Image', 'Bio Image'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterUser', 'Twitter Handle'));
       	$fields->addFieldToTab('Root.Main', new TextField('NumberOfTweets', 'Number of Tweets'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterConsumerKey', 'Twitter Consumer Key'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterConsumerSecret', 'Twitter Consumer Secret'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterAccessToken', 'Twitter Access Token'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterAccessTokenSecret', 'Twitter Access Token Secret'));	

        return $fields;
	}


}
class HomePage_Controller extends Page_Controller {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	 
	private  static $allowed_actions = array (
	
	);
	
	
	public function init() {
		parent::init();

	}
	
	public function gitHubArray() {
		$html = file_get_contents('https://github.com/athaax.atom');
		$xml = simplexml_load_string($html);
		$json = json_encode($xml);
		$gitHubArray = json_decode($json, TRUE);
		return $gitHubArray;
	}
	
	public function parseGitHubFeed($gitHubArray) {
		
		$gitHubEntries = $gitHubArray['entry'];
		//print_r($gitHubEntries);
		$feed = new ArrayList();
		
		foreach ( $gitHubEntries as $entry ) {
			$GitHubItem = new GitHubItem();
			$feed->push( $GitHubItem->parseGitHubItem( $entry ) );
		}
				
		return $feed;
	}
	
	public function twitterFeed() {
		//session_start();
		//require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
		 
		$twitteruser = $this->TwitterUser;
		$notweets = $this->NumberOfTweets;
		$trimuser = "true";
		$consumerkey = $this->TwitterConsumerKey;
		$consumersecret = $this->TwitterConsumerSecret;
		$accesstoken = $this->TwitterAccessToken;
		$accesstokensecret = $this->TwitterAccessTokenSecret;
		 
		function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
		  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
		  return $connection;
		}
		 
		$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
		 
		$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets."&trim_user=".$trimuser);
		
		$tweetsJSON = json_encode($tweets);
		$tweetsArray = json_decode($tweetsJSON, TRUE);
		
		print_r($tweetsArray);
		return $tweetsArray;
	}
	
	public function parseTwitterFeed($twitterArray) {

		$feed = new ArrayList();
		
		foreach ( $twitterArray as $entry ) {
			$TwitterItem = new TwitterItem();
			$feed->push( $TwitterItem->parseTwitterItem( $entry ) );
		}
				
		return $feed;
	}
	
	public function homepageFeed() {
		$gitHub = $this->gitHubArray();
		$gitHubFeed = $this->parseGitHubFeed($gitHub);
		
		$twitter = $this->twitterFeed();
		$twitterFeed = $this->parseTwitterFeed($twitter);
		
		$homepageFeed = array();
		
		// migrating Feed objects like github commits and tweets to one ArrayList for sorting
		foreach ($gitHubFeed as $gitHubObject) {
			array_push($homepageFeed, $gitHubObject);
		}
		foreach ($twitterFeed as $twitterObject) {
			array_push($homepageFeed, $twitterObject);
		}
			
		// sorting items in feed for reverse-chronological order
		usort($homepageFeed, function($a, $b) {
			return strcmp($a->PublishedAt, $b->PublishedAt);
		});
		
		$feedArray = new ArrayList();
		foreach ($homepageFeed as $item) {
			$feedArray->push($item);
		}
	
		return $feedArray->reverse();
	}
	
	public function projects() {
		$projects = Project::get();
		return $projects;
	}
}