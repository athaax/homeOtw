<?php
class Project extends Page {

	private static $db = array(
		"History" => "HTMLText",
		"GitHub" => "Varchar(100)",
		"Website" => "Varchar(100)"
	);

	private static $has_one = array(
		'Image' => 'Image'
	);
	
	private static $many_many = array(
        'Skills' => 'Skill'
    );
	
	function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$skillsField = new GridField(
            'Skills',
            'Skills',
            $this->Skills(),
            GridFieldConfig_RelationEditor::create()
        );              
        $fields->addFieldToTab('Root.Skills', $skillsField);
        $fields->addFieldToTab('Root.Main', new TextField('GitHub', 'GitHub', 'Project Repo Link'), "Content");
        $fields->addFieldToTab('Root.Main', new TextField('Website', 'Website', 'Project Live URL'), "Content");
       	$fields->addFieldToTab('Root.Main', new HTMLEditorField('History'));
       	$fields->addFieldToTab('Root.Main', new HTMLEditorField('History'));
       	$fields->addFieldToTab('Root.Main', new UploadField('Image', 'Project Image'));	


        return $fields;
	}

	public function RenderedImage(){

		$absolutePath = Director::baseFolder();
		$name = $this->URLSegment;
		$imagePath = $absolutePath.'/themes/homeOtw/images/projects/'.$name.'.png';

		if(file_exists($imagePath)){
			$image = '<img src="themes/homeOtw/images/projects/'.$name.'.png" />';
			return $image;
		}else{
			return false;
		}

	}

}
class Project_Controller extends Page_Controller {

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