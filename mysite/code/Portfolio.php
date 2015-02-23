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
		"getProject",
		"getProjects"
	);
	
	private static $url_handlers = array(
		'getproject/$ID' => 'getProject',
		'getProjects' => 'getProjects'
	);
	
	
	public function init() {
		parent::init();
	}
	
	public function getProjects($httpRequest) {
		
		$converter = new JSONDataFormatter();

		$input = Project::get(); //returns DataList
		//$projects = new DataList("Project");
	
		$projectsNArray = $input->toArray(); //returns array
		//$projectsArray = $projectsNArray->toArray();
		$projectsArrayList = ArrayList::create($projectsNArray); //returns ArrayList
		$newArrayList = new ArrayList();
		
		foreach ($projectsArrayList as $proj) {
			if ($imglink = $proj->Image()->Filename) {
				$proj->setField("imagepath", $imglink);
				$proj->testField = "tesing";
				$newArrayList->push($proj);
			} else {
				$proj->setField("imagepath", "missing");
				$newArrayList->push($proj);
			}
		}
				
		$result = $converter->convertDataObjectSet($newArrayList); // should return a valid JSON string
		
		return $result; 
	
	}

	public function getProject($httpRequest) {
		//$isGET = $httpRequest->isGET();
		//print_r($isGET);
		//$isAjax = $httpRequest->getHeaders();
		//print_r($isAjax);
		
		$project_id = $httpRequest->param('ID');
		$converter = new JSONDataFormatter();
		
		$project = Project::get()->filter(array(
			'ID' => $project_id ))->First();
		
		
		if ($imglink = $project->Image()->Filename) {
				$project->setField("imagepath", $imglink);
			} else {
				$project->setField("imagepath", "missing");
			}
		$project->setField("Content", $project->noHTML('Content'));
		$project->setField("Contribution", $project->noHTML('Contribution'));
			
		return $converter->convertDataObject($project);
	}
		
	public function generateJsonFeed($dataObject, $single){
		
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
		$data["project"]["Contribution"] = $dataObject->noHTML('Contribution');
		$data["project"]["github"] = $dataObject->GitHub;
		$data["project"]["website"] = $dataObject->Website;
		$data["project"]["image"] = $dataObject->Image()->Filename;
		
		$skills = $dataObject->Skills();
		foreach ($skills as $skill) {
			$data["project"]["Skills"][$skill->ID] = $skill->Name;
			
		}
		//$data["project"]["Skills"] = $dataObject->Image()->Filename;

		//$data["project"]["ContributionFeed"] = $dataObject->gitHubContributionFeed();
		if ($single = "single") {
			return $data;
		} else {
			return json_encode($data);

		}
 	}

	
	
}