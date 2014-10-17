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
		"project"
	);
	
	
	public function init() {
		parent::init();
	}
	
	
	
	public function getProject( $id ) {
		$object = Project::get()->filter(array(
			'ID' => $id 
			));
			
		return $json_encode($object);

	}
	
}