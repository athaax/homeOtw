<?php
class TwitterFeed extends ActivityFeed {

	private static $db = array(
	"TwitterUser" => "Varchar",
	"NumberOfTweets" => "Varchar",
	"TwitterConsumerKey" => "Varchar",
	"TwitterConsumerSecret" => "Varchar",
	"TwitterAccessToken" => "Varchar",
	"TwitterAccessTokenSecret" => "Varchar"
	);
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();         
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterUser', 'Twitter Handle'));
       	$fields->addFieldToTab('Root.Main', new TextField('NumberOfTweets', 'Number of Tweets'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterConsumerKey', 'Twitter Consumer Key'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterConsumerSecret', 'Twitter Consumer Secret'));
       	$fields->addFieldToTab('Root.Main', new TextField('TwitterAccessToken', 'Twitter Access Token'));
      	$fields->addFieldToTab('Root.Main', new TextField('TwitterAccessTokenSecret', 'Twitter Access Token Secret'));	

        return $fields;
	}
	

	// twitter functions 
	
	public function getTwitterFeed() {

		$twitterArray = $this->twitterArray();
		$feed = new ArrayList();
		
		foreach ( $twitterArray as $item ) {
			$feed->push( $this->parseTwitterItem( $item ) );
		}
				
		return $feed;
	}
	
	public function twitterArray() {
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
		 
		$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="
			.$twitteruser."&count=".$notweets."&trim_user=".$trimuser);
		
		$tweetsJSON = json_encode($tweets);
		$tweetsArray = json_decode($tweetsJSON, TRUE);
		
		//print_r($tweetsArray);
		return $tweetsArray;
	}

	public function parseTwitterItem($item){
	
		$tweet = new DataObject();

		// Attributes begin with capital letters and camel-cased for consistency
		$tweet->ID = $item['id'];
		$tweet->Type = "Twitter";
		//$tweet->PublishedAt = $this->getPublishedDateTime($item);
		//$tweet->PublishedAt = new SS_Datetime($item['created_at']); //called Published here for consistent sorting in homepageFeed().
		$tweet->PublishedAt = new SS_DateTime();
		$tweet->PublishedAt->setValue($item['created_at']);
		$tweet->Tweet = $item['text']; //tweet stored in 'text'
		$tweet->Source = $item['source'];
		$tweet->User = $item['user'];
		$tweet->Geo = $item['geo'];
		$tweet->Coordinates = $item['coordinates'];
		$tweet->RetweetCount = $item['retweet_count'];
		$tweet->FavoriteCount = $item['favorite_count'];

		return $tweet;
	}
	
}