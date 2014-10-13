<?php
class TimelineItem extends DataObject {


	 /*
	 public function getPublishedDateTime($item){
		//$eventInstances = $rawEvent['event_instances'];
		//$eventInstancesArray = new ArrayList();
		
		$dateTime = new TimelineItemDatetime();

		$dateTime->PublishedAt = new SS_Datetime();
		$dateTime->EndDateTime = new SS_Datetime();

			$dateTime->StartDateTime->setValue($eventInstances[$i]['event_instance']['start']);
			//print_r('end date: '.$dateTime->EndDateTime);
			if(isset($eventInstances[$i]['event_instance']['end'])){
				$dateTime->EndDateTime->setValue($eventInstances[$i]['event_instance']['end']);
			}

			if((!$dateTime->StartDateTime->InPast()) || $dateTime->StartDateTime->IsToday() ){
				$eventInstancesArray->push($dateTime);
			}
		}
		return $eventInstancesArray;
	}
	*/

}