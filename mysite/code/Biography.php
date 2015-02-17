<?php
class Biography extends Page {

	private static $db = array(
		"Name" => "Varchar(55)"

	);

	private static $has_one = array(
		'Image' => 'Image'
	);
	
	private static $summary_fields = array(
		'Biography.Name' => 'Bio Name',
		'Biography.Biography' => 'Bio Bio'
	);
	
	function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$fields->addFieldToTab('Root.Main', new TextField('Name', 'Name'), 'Content');
       	$fields->addFieldToTab('Root.Main', new UploadField('Image', 'Bio Image'));

        return $fields;
	}


}
class Biography_Controller extends Page_Controller {

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
	

	
}