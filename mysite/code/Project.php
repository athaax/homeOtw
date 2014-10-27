<?php
class Project extends Page {

	private static $db = array(
		"History" => "HTMLText",
		"GitHub" => "Varchar(100)",
		"RepoName" => "Varchar(100)",
		"Website" => "Varchar(100)"
		// using these fields as handles to HTMLText datatypes without the HTML.
		//"HistoryClean" => "Text",
		//"ContentClean" => "Text"
		//Trying to get these fields written so they stay current
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
        $fields->addFieldToTab('Root.Main', new TextField('RepoName', 'GitHub Repo Name'), "Content");
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
	
	public function noHTML($field) {
		$content = new ViewableData();
		$withHtml = $this->$field;
		return strip_tags($withHtml);
	}
	
	public function gitHubContributionFeed() {
		$author = 'athaax';
		$repo = $this->RepoName;
		
		$ghFeed = new GitHubFeed();
		//syntax for api feed of project commits filtering by author
		$ghArray = $ghFeed->gitHubArray('https://github.com/' . $repo .'/commits/master.atom?author=' . $author);
		$ghList = $ghFeed->getGitHubFeed($ghArray);
		
		$ghNestedArray = $ghList->toNestedArray();
		
		//print_r(gettype($ghList));
		
		return $ghNestedArray;
		
	}

}