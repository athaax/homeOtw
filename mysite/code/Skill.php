<?php
class Skill extends DataObject {

    private static $db = array(
        'Name' => 'Varchar'
    );
    
    private static $belongs_many_many = array(
        'Projects' => 'Project'
    );
    
	function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}

}