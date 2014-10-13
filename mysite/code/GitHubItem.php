<?php
class GitHubItem extends TimelineItem {

	 
	public function parseGitHubItem($item){
		
		$this->ID = $item['id'];
		$this->Type = "GitHub";
		//$this->PublishedAt = new SS_DateTime();
		$this->PublishedAt = new SS_DateTime();
		$this->PublishedAt->setValue($item['published']);
		$this->Updated = $item['updated'];
		$this->Title = $item['title']; //Orginally called "Title", may have namespace issues though. 
		$this->Content = $item['content'];

		return $this;
	}

}