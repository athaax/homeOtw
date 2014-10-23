<?php
class ActivityFeed extends DataObject {
	
	public function webActivityFeed() {
	
		// feeds, each one has to be dealt with a little differently
		$gitHubFeed = new GitHubFeed(); // no tokens needed
		$twitterFeed = TwitterFeed::get()->First(); // only one...
		
		$g = $gitHubFeed->getGitHubFeed();
		$t = $twitterFeed->getTwitterFeed();
		
		$activityFeed = array();
		
		// migrating Feed objects like github commits and tweets to one ArrayList for sorting
		foreach ($g as $gitHubObject) {
			array_push($activityFeed, $gitHubObject);
		}
		foreach ($t as $twitterObject) {
			array_push($activityFeed, $twitterObject);
		}
			
		// sorting items in feed for reverse-chronological order
		usort($activityFeed, function($a, $b) {
			return strcmp($a->PublishedAt, $b->PublishedAt);
		});
		
		$feedArray = new ArrayList();
		foreach ($activityFeed as $item) {
			$feedArray->push($item);
		}
	
		return $feedArray->reverse();
	}


}