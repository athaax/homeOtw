<div class="full row" id="intro" style="background: url({$ThemeDir}/images/header1.png) no-repeat center center; -webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
  	background-size: cover;">

	
	
	
	<%--
	<% with Biography %>
	<div class="large-6 columns" id="tumblr-box" style="background: url($Image.URL) no-repeat center center; -webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
  	background-size: cover;">
  	<% end_with %>

  	<h1>Image</h2>

	</div>
	<div class="large-6 columns" id="intro-blurb">
		<h1> Hello, I'm Jonathan </h1>
		<p>
			Nascent full-stack web developer,
			I enjoy the space between technology,
			creativity, art, literature, and old-fashioned
			well-engineered <span>utility</span>
		</p>

		<div data-magellan-expedition="fixed">
		  <div class="row">
		    <div class="small-4 columns" data-magellan-arrival="Bio"><a class="small button" href="#build">Bio</a></div>
		    <div class="small-4 columns"  data-magellan-arrival="Portfolio"><a class="small button" href="#haps">Portfolio</a></div>
		    <div class="small-4 columns"  data-magellan-arrival="Blog"><a class="small button" href="#blog">Blog</a></div>
		  </div>
		</div>

	</div>
	--%>
</div>

<div class="fat row">
	<div class="medium-4 columns">

	</div>
	<div class="medium-4 columns">

	</div>
	<div class="medium-4 columns">


	</div>
</div>

<div class="fat row" data-magellan-destination="haps">
	<div class="large-6 medium-6 columns">
		<h3 class="headline"> Biography </h3>
		<% with Biography %>
			$Content
		<%--<img src="$Image.URL" />--%>
		<% end_with %>
	</div>
	<div class="large-6 medium-6  columns">
		<h3 class="headline"> Happenings 
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/github_png/GitHub-Mark-32px.png" /></a>
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_twitter.png" /></a>
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_pencil.png" /></a>
		</h3>
		<% loop $webActivityFeed.limit(3) %>
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

</div>

<div class="fat row">
	<div class="large-12  columns">
		<h2 class="headline"> Portfolio </h2>
		<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-3 xlarge-block-gride-4">
		<% loop projects().Limit(3) %>
			<li>
			<h3>$Title</h3>
			<img src="$Image.URL" />
			$Content.summary
			</li>
		<% end_loop %>
		</ul>
	</div>
<div>