<?php
class ContactSubmission extends DataObject {

	private static $db = array(
		'Name' => 'varchar(20)',
		'Email' => 'varchar(20)',
		'Message' => 'Text'
	);

	private static $has_one = array(
	
	);
	
	function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}

}
