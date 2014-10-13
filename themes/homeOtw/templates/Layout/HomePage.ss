<div class="large-12 columns">

	<% loop projects() %>
		$Title
		$Content
		$History
		$GitHub
		$Website
	
	
	<% end_loop %>





	<hr />
	
	<div class="row">
		<div class="large-7 medium-6 columns">
			<h4 class="headline"> Happenings 
				<a href="#"><img class="timeline-icon" src="{$ThemeDir}/images/icons/github_png/GitHub-Mark-32px.png" /></a>
				<a href="#"><img class="timeline-icon" src="{$ThemeDir}/images/icons/circle_twitter.png" /></a>
				<a href="#"><img class="timeline-icon" src="{$ThemeDir}/images/icons/circle_pencil.png" /></a>
			</h4>
			<% loop $homepageFeed.limit(8) %>		
				$Content
				$PublishedAt.Format('g:ia \o\n l jS F Y')
				<br>
				<br>
			<% end_loop %>
		</div>
		<div class="large-5 medium-6 columns">
			<h4 class="headline"> Biography </h4>
			$Biography
			<img src="$Image.URL" />
		</div>
	</div>

</div>