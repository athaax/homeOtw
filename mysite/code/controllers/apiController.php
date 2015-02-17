<?php
class API_Controller extends Page_Controller {

	private static $allowed_actions = array(
		'getActivityFeed',
		'getProject'
	);

	private static $url_handlers = array(
       // 'inbox/markAsRead' => 'markAsRead'
       //'markAsRead' => 'markAsRead',  
       //'ReplyForm' => 'ReplyForm' 
       'getActivityFeed' => 'getActivityFeed'     
    );
    
	public function init() {
		parent::init();
		
	}
	
	public function index(){
		//$member = Member::currentUser();
		
	
		/*
		$messages = $member->Messages();
		
		$Data = array (
			"Messages" => $messages
		);

		//print_r($messages);
		//print_r(gettype($inbox));
		return $this->customise($Data)->renderWith(array('Inbox', 'Page'));
		*/
		//return $this->renderWith(array('Inbox', 'Page'));

	
		
		//$this->redirect('security/login');
		
	}
	
	public function getActivityFeed($activity) {
		$params = $activity->params();
		$IDparam = $params['ID'];
		$data = new ArrayList();
		if ($IDparam == "twitter") {
			if ($twitterFeed = TwitterFeed::get()->First()) {
				$t = $twitterFeed->getTwitterFeed();
				foreach ($t as $twitterObject) {
					$mapped = $twitterObject->toMap();
					//print_r(gettype($mapped));
					$data->push($mapped);
				}
			}
		} elseif ($activity == "github") {
			//
		} else {
			//
		}
		$arraydata = $data->toArray();
		print_r($arraydata);
		return json_encode($arraydata);
	}

	public function generateJsonFeed(ArrayList $ArrayList){
		
		$data = array();
		
		foreach($ArrayList as $object) {

			if (gettype($object) == 'object') {
				//print_r("<br>");
				//print_r($object);
				//print_r("<br>");
				//$DOname = $object->Type;
				//print_r($DOname);
				//$keys = array();
				$j = Convert::raw2json($object);
				print_r($j);
				//print_r($keys);
				/*
				foreach($keys as $key => $field) {
			 		$data[$DOname][$field] = $object->$field;
 				}
 				*/
			} else {
				foreach($items as $item) {
					//$this->generateJsonFeed($item);
				}
			}
		}
		
 		return json_encode($ArrayList);
 	}

}
