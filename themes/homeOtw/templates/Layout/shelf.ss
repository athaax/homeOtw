<div class=" row">
	<div class="medium-4 columns skill-coins">
		<div class=" ">
			<div class="skill-image"><img src="{$ThemeDir}/images/sublime.png" alt="sublime" class="text-center" /></div>
			<h3 class="text-center">Designer</h3>
		</div>

	</div>
	<div class="medium-4 columns">
				<div>
			<div class="skill-image"><img src="{$ThemeDir}/images/coda.png" alt="coda" /></div>
			<h3 class="text-center rust">Developer</h3>
		</div>
	</div>
	<div class="medium-4 columns">

	</div>
	<%--
  	<div class="medium-6 columns" id="intro" style="background: url(http://images.clipartof.com/small/11010-Orange-Man-With-An-Attitude-His-Arms-Crossed-Leaning-Against-A-Wall-Clipart-Illustration.jpg) no-repeat center center; -webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
  	background-size: cover;">
  		<h1> Testing</h1>
  	</div>
  	--%>
	
	
	
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




<div class=" row" >
	<div class="large-6 medium-6 biography columns">
		<h3 class="headline"> Biography </h3>
		<% with Biography %>
			$Content
		<%--<img src="$Image.URL" />--%>
		<% end_with %>
	</div>
	<div class="large-6 medium-6 happenings columns">
		<h3 class="headline"> Happenings 
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/github_png/GitHub-Mark-32px.png" /></a>
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_twitter.png" /></a>
			<a href="#"><img class="timeline-icon right" src="{$ThemeDir}/images/icons/circle_pencil.png" /></a>
		</h3>
		<% loop $webActivityFeed.limit(9) %>
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

<div class=" row">
	<%--
	<div class="large-12  columns">
		<h2 class="headline"> Portfolio </h2>
		<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3 xlarge-block-gride-4">
		<% loop projects().Limit(3) %>
			<li>
			<h3><a href="{$BaseHref}portfolio">$Title</a></h3>
			<a href="{$BaseHref}portfolio"> <img src="$Image.URL" /> </a>
			$Content.summary
			</li>
		<% end_loop %>
		</ul>
	</div>
	--%>
</div>

<div class=" row">
	<div class="large-12 columns">
		<h2 class="headline"> Contact </h2>
		<div class="row">
			<div class="large-4 columns">
				<h3>Email</h3>
				<div class="panel"> Jonathan-Solis@uiowa.edu</div>
			</div>
			<div class="large-4 columns">
				<h3>Direct</h3>
			</div>
			<div class="large-4 columns">
				<h3>Twitter</h3>
			</div>
		</div>
	</div>
</div>