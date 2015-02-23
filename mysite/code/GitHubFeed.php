<?php
class GitHubFeed extends ActivityFeed {


	public function getGitHubFeed($gitHubArray = null) {
		
		if (empty($gitHubArray)) {
			$gitHubArray = $this->gitHubArray();
		} 
		
		$gitHubEntries = $gitHubArray['entry'];

		$feed = new ArrayList();
		
		foreach ( $gitHubEntries as $item ) {
			$feed->push( $this->parseGitHubItem( $item ) );
		}
		
		//$feed->toArray();
		//print_r($feed);
		return $feed;
	}

	public function gitHubArray($exactfeed = "https://github.com/athaax.atom") {
		$html = file_get_contents($exactfeed);
		$xml = simplexml_load_string($html);
		$json = json_encode($xml);
		$gitHubArray = json_decode($json, TRUE);
		
		//print_r($gitHubArray);
		return $gitHubArray;
	}

	public function parseGitHubItem($item){
	
		//print_r($item);
		$commit = new DataObject();
		$commit->Type = "GitHub";
		$commit->PublishedAt = new SS_DateTime();
		if (isset($item['published'])) {		
			$commit->PublishedAt->setValue($item['published']);
		} else {
			$commit->PublishedAt->setValue( time() );
		}

		$attributes = array(
			'ID' => 'id',
			'Updated' => 'updated',
			'Title' => 'title',
			'Content' => 'content'
			
		);
		
		foreach ($attributes as $key => $att) {		
			
			if (isset($item[$att])) {		
				$commit->$key = $item[$att];	
			}
		}
		
		// strip tags...ladaladida
		
		if (isset($commit->Content)) {
			$with = $commit->Content;
			$without = strip_tags($with);
			
			$commit->Content = $without;
		}

		return $commit;
	}

}