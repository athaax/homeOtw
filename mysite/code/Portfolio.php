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
		
		//print_r(gettype($dataObject));
 		$data = array();

		/* Get Dates in  an array for later */
		//$datesArray = array();
		//$dates = $event->Dates;
		/*
		foreach($dates as $dateNum => $date){
			$datesArray[$dateNum]["start_date"] = $date->StartDateTime->Format('Y-m-d');
			$datesArray[$dateNum]["start_time"] = $date->StartDateTime->Format('H:i:s');
			if(!empty($date->EndDateTime)){
				$datesArray[$dateNum]["end_date"] = $date->EndDateTime->Format('Y-m-d');
				$datesArray[$dateNum]["end_time"] = $date->EndDateTime->Format('H:i:s');
			}
			$datesArray[$dateNum]["all_day"] = $date->AllDay;
		}
		*/
		/*
		$venuesArray = array();
		$venues = $event->Venue;

		foreach($venues as $venueNum => $venue){
			$venuesArray[$venueNum]["id"] = $venue->ID;
			$venuesArray[$venueNum]["name"] = $venue->AltTitle ? $venue->AltTitle : $venue->Title;
			$venuesArray[$venueNum]["address"] = $venue->Address;
			$venuesArray[$venueNum]["info"] = $venue->Information;
			$venuesArray[$venueNum]["contact_email"] = $venue->Email;
			$venuesArray[$venueNum]["contact_phone"] = $venue->Phone;
			$venuesArray[$venueNum]["website_link"] = $venue->WebsiteURL;
			$venuesArray[$venueNum]["latitude"] = $venue->Lat;
			$venuesArray[$venueNum]["longitude"] = $venue->Lng;
		}

		$eventTypesArray = array();
		$eventTypes = $event->Types;

		if(!empty($eventTypes)){
			foreach($eventTypes as $eventTypeNum => $eventType){
				$eventTypesArray[$eventTypeNum]["id"] = $eventType->ID;
				$eventTypesArray[$eventTypeNum]["name"] = $eventType->Title;
				$eventTypesArray[$eventTypeNum]["info"] = $eventType->Information;
			}
		}

		$sponsorsArray = array();
	$sponsorsArray[0]["id"] = '';
	$sponsorsArray[0]["name"] = $event->Sponsor;
	$sponsorsArray[0]["info"] = '';
	$sponsorsArray[0]["website_link"] = '';
		
		$data["events"][$eventNum]["id"] = $event->ID;
		$data["events"][$eventNum]["name"] = $event->Title;
		$data["events"][$eventNum]["link"] = $event->LocalistLink;
		$data["events"][$eventNum]["more_info_link"] = $event->MoreInfoLink;
		$data["events"][$eventNum]["facebook_event_link"] = $event->FacebookEventLink;
		
		if(isset($event->Image)){
			$data["events"][$eventNum]["image"] = $event->Image->URL;
		}
		*/
		$data["project"]["Content"] = $dataObject->contentNoHtml();
		$data["project"]["id"] = $dataObject->ID;
		$data["project"]["title"] = $dataObject->Title;
		//$data["project"]["content"] = $dataObject->Content;
		$data["project"]["History"] = $dataObject->History;
		//strip_tags($data["project"]["History"]);
		$data["project"]["github"] = $dataObject->GitHub;
		$data["project"]["website"] = $dataObject->Website;
		//$data["project"]["image"] = $eventTypesArray;
		//unset($datesArray);

 		return json_encode($data);
 	}

	
}