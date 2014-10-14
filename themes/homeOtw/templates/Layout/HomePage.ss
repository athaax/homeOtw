<div class="large-12 columns">

	<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-3 xlarge-block-gride-4">
	<% loop projects() %>
		<li>
		$Title
		<img src="$Image.URL" />
		$Content.summary
		</li>
	<% end_loop %>


	<hr />
	
	<div class="row">
		<div class="large-7 medium-6 columns">
			<h4 class="headline"> Happenings 
				<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/github_png/GitHub-Mark-32px.png" /></a>
				<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_twitter.png" /></a>
				<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_pencil.png" /></a>
			</h4>
			<% loop $homepageFeed.limit(8) %>
				<% if $Type == 'Twitter' %>
					<div class="tweet panel">
						<p>$Tweet</p>
						<p>$PublishedAt.Format('g:ia \o\n l jS F Y')</p>
					</div>
				<% else_if $Type == 'GitHub' %>
					<div class="git panel">
						$Content
						<p>Published at $PublishedAt.Format('g:ia \o\n l jS F Y')</p>
					</div>
				<% end_if %>
			<% end_loop %>
		</div>
		<div class="large-5 medium-6 columns">
			<h4 class="headline"> Biography </h4>
			$Biography
			<img src="$Image.URL" />
		</div>
	</div>

</div>