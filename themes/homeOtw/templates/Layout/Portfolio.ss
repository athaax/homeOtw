<div class="full row">
  
<div class="off-canvas-wrap move-right" data-offcanvas>
  <div class="inner-wrap" ng-controller="PortfolioController as portfolio">
    <nav class="tab-bar">

      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section class="middle tab-bar-section">
	     
		<nav class="top-bar" data-topbar role="navigation">
		  <ul class="title-area inline-list">
		    <li class="nav-name">
		      <h1><a href="{$BaseHref}">Home</a></h1>
		    </li>
		    <li class="nav-name">
		      <h1><a href="{$BaseHref}portfolio">Portfolio</a></h1>
		    </li>
		    <%-- soon enough, soon enough...
		    <li class="nav-name">
		      <h1><a href="{$BaseHref}blog">Blog</a></h1>
		    </li>
		    --%>
		     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone 
		    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>-->
		  </ul>
		
		    <!-- Left Nav Section -->
		    <%-- 
		    <ul class="left">
		      <li><h1><a href="{$baseUrl}">$SiteConfig.Title</a></h1></li> 
		    </ul>
		    --%>
		  </section>
		</nav>

      </section>

    </nav>

    <aside class="left-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Portfolio</label></li>
        <% loop $Projects %>
			<li><a href="#" ng-click="getProject($ID)">$Title</a></li>
		<% end_loop %>
      </ul>
    </aside>

    <section class="main-section full-height" >

    	<div class="row" id="portfolio-body">

    		<div class="medium-5 columns">
	    		<section style="text-align: center;">
	  				<h1> {{project.project.title}} </h1>
	  				<ul class="button-group round" style="display: inline-block;">
	  					<li><a href="{{project.project.website}}" class="radius small button">View Live</a></li>
	  					<li><a href="{{project.project.github}}" class="radius small button">View on GitHub</a></li>
	  				</ul>
	    		</section>
          <section>
            <h2 class="headline"> Skills </h2>
            <ul class="skill-list">
	            <li ng-repeat="(key, value) in project.project.Skills">
            		<a ng-click="getSkill({{key}})" class="tiny button"> {{value}} </a>
	            </li>
            </ul>
          </section>
          <section>
            <h2 class="headline"> Background </h2>
            <p> {{project.project.Content}} </p>
          </section>
          <section>
            <h2 class="headline">Contributions</h2>
            <p> {{project.project.History}} </p>
          </section>
        </div>
        <div class="medium-7 columns">
    			<img src="{{project.project.image}}" alt="Image for {{project.project.title}}" />
        </div>

			</div>

      <%--
      <div class="row">
        <div class="small-12 columns">
          <ul class="inline-list">
            <li ng-repeat="commit in project.project.ContributionFeed">
                <!-- need plugin to render html... trying to keep this lightweight 
                ---- I want to display commits I've made on this project, however API is returning 
                ---- ALL commits made to this repo, and it's not coming back very atomically.
                ---- NOTE: I'm currently stripping content HTML tags in GitHubFeed.php
                -->
                <!--<div ng-bind-html-unsafe="commit.Content"></div>-->
                <!--<p>{{commit.ID}}</p>-->
                <div class="git panel" style="max-width: 200px;">
                  <p>{{commit.Content}}</p>
                  <p>Published at $PublishedAt.Format('g:ia \o\n l jS F Y')</p>
                </div>  
            </li>
          </ul>
        </div>    
      </div>
      --%>
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>

</div>