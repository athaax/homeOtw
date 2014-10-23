<?php
class GitHubFeed extends ActivityFeed {


	public function getGitHubFeed() {
		
		$gitHubArray = $this->gitHubArray();
		
		$gitHubEntries = $gitHubArray['entry'];
		$feed = new ArrayList();
		
		foreach ( $gitHubEntries as $item ) {
			$feed->push( $this->parseGitHubItem( $item ) );
		}
		
		return $feed;
	}

	public function gitHubArray() {
		$html = file_get_contents('https://github.com/athaax.atom');
		$xml = simplexml_load_string($html);
		$json = json_encode($xml);
		$gitHubArray = json_decode($json, TRUE);
		
		//print_r($gitHubArray);
		return $gitHubArray;
	}

	public function parseGitHubItem($item){
	
		$commit = new DataObject();
		
		$commit->ID = $item['id'];
		$commit->Type = "GitHub";
		//commit->PublishedAt = new SS_DateTime();
		$commit->PublishedAt = new SS_DateTime();
		$commit->PublishedAt->setValue($item['published']);
		//commit->Updated = $item['updated'];
		$commit->Title = $item['title']; //Orginally called "Title", may have namespace issues though. 
		$commit->Content = $item['content'];

		return $commit;
	}

}