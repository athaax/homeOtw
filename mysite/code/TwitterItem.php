<?php
class TwitterItem extends TimelineItem {

	 
	public function parseTwitterItem($item){

		// Attributes begin with capital letters and camel-cased for consistency
		$this->ID = $item['id'];
		$this->Type = "Twitter";
		//$this->PublishedAt = $this->getPublishedDateTime($item);
		//$this->PublishedAt = new SS_Datetime($item['created_at']); //called Published here for consistent sorting in homepageFeed().
		$this->PublishedAt = new SS_DateTime();
		$this->PublishedAt->setValue($item['created_at']);
		$this->Tweet = $item['text']; //tweet stored in 'text'
		$this->Source = $item['source'];
		$this->User = $item['user'];
		$this->Geo = $item['geo'];
		$this->Coordinates = $item['coordinates'];
		$this->RetweetCount = $item['retweet_count'];
		$this->FavoriteCount = $item['favorite_count'];

		return $this;
	}

}