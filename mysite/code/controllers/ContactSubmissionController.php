<?php
class ContactSubmissionController extends Page_Controller {

	private static $allowed_actions = array(
		'message'
	);

    
	public function init() {
		parent::init();
		
	}
	
	public function message(SS_HTTPRequest $http) {
		$message = new ContactSubmission();
		
		// NTS must json_decode POST data to get params! Returns object 
		$params = json_decode(file_get_contents('php://input'));

		$message->setField("Name", $params->name);
		$message->setField("Email", $params->email);
		$message->setField("Message", $params->message);
		
		$message->write();
		
		$e = new Email();
		$e->To = "athaax@gmail.com";
		$e->Subject = $params->message;
		$e->Body = "From " . $params->name . "at " . $params->email . ". Message: " . $params->message;
		$e->send();
		
		$autoreply = "Got it!";
		
		return json_encode($autoreply);
		
		
	}
	
}
