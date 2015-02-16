<?php
class Project extends DataObject {

	private static $db = array(
		"Contribution" => "HTMLText",
		"GitHub" => "Varchar(100)",
		"RepoName" => "Varchar(100)",
		"Website" => "Varchar(100)"
	);

	private static $has_one = array(
		'Image' => 'Image'
	);
	
	private static $many_many = array(
        'Skills' => 'Skill'
    );
    
    private static $summary_fields = array(
	    "ID" => "ID",
	    "Title" => "Title",
	    "Created" => "Added"
    );
	
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		
		$skillsField = new GridField(
            'Skills',
            'Skills',
            $this->Skills(),
            GridFieldConfig_RelationEditor::create()
        );    
                  
        $fields->addFieldToTab('Root.Main', new TextField('GitHub', 'GitHub', 'Project Repo Link'));
        $fields->addFieldToTab('Root.Main', new TextField('RepoName', 'GitHub Repo Name'));
        $fields->addFieldToTab('Root.Main', new TextField('Website', 'Website', 'Project Live URL'));
        
        $fields->addFieldToTab('Root.Main', new UploadField('Image', 'Project Image'));	
        $fields->addFieldToTab('Root.Main', new HTMLEditorField('Contribution', "Contribution"));
        $fields->addFieldToTab('Root.Main', new HTMLEditorField('Content', "Project Background"));
        
		$fields->addFieldToTab('Root.Skills', $skillsField);

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