<?php
class Portfolio extends Page {

	private static $db = array(

	);

	private static $has_one = array(
	);
	
	private static $many_many = array(
    );
	
	function getCMSFields() {
		$fields = parent::getCMSFields();
		
        return $fields;
	}


}
class Portfolio_Controller extends Page_Controller {

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
		"getProject"
	);
	
	private static $url_handlers = array(
		'getproject/$ID' => 'getProject'
	);
	
	
	public function init() {
		parent::init();
	}
	
	
	
	public function getProject($httpRequest) {
		//$isGET = $httpRequest->isGET();
		//print_r($isGET);
		//$isAjax = $httpRequest->getHeaders();
		//print_r($isAjax);
		
		$project_id = $httpRequest->param('ID');
		$project = Project::get()->filter(array(
			'ID' => $project_id
			))->First();
		
		//print_r(gettype($project));
 		return $this->generateJsonFeed($project);

	}
	
	public function generateJsonFeed($dataObject){
		
		/*
		* TODO:
		* Rewrite this function to accept calls for skills and other dataobjects
		* related to Portfolio
		* ALSO: fix gitHubContributionFeed
		*/
		
 		$data = array();

		$data["project"]["Content"] = $dataObject->noHTML('Content');
		$data["project"]["id"] = $dataObject->ID;
		$data["project"]["title"] = $dataObject->Title;
		$data["project"]["History"] = $dataObject->noHTML('History');
		$data["project"]["github"] = $dataObject->GitHub;
		$data["project"]["website"] = $dataObject->Website;
		$data["project"]["image"] = $dataObject->Image()->Filename;
		
		$skills = $dataObject->Skills();
		foreach ($skills as $skill) {
			$data["project"]["Skills"][$skill->ID] = $skill->Name;
			
		}
		//$data["project"]["Skills"] = $dataObject->Image()->Filename;

		//$data["project"]["ContributionFeed"] = $dataObject->gitHubContributionFeed();

 		return json_encode($data);
 	}

	
}