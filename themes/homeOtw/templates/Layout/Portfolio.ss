<div class="full row">
  
<div class="off-canvas-wrap move-right" data-offcanvas>
  <div class="inner-wrap" ng-controller="PortfolioController as portfolio">
    <nav class="tab-bar">

      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section class="middle tab-bar-section">
      <h1> Projects </h1>

      <%-- doesn not show? 
        <ul class="button-group">
          <li><h1><a href="#" class="white">Something</a></h1></li>
        </ul>
      --%>
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
  				<h1> {{project.project.title}} </h1>
  				<ul class="button-group">
  					<li><a href="{{project.project.website}}" class="radius small button">View Live</a></li>
  					<li><a href="{{project.project.github}}" class="radius small button">View on GitHub</a></li>
  				</ul>
          <section>
            <h2 class="headline"> Skills </h2>
            <ul class="button-group">
	            <li ng-repeat="skill in project.project.Skills">
            	<a style="margin-right: 3px;" ng-click="getSkill('{{ID}}')" class="tiny radius button"> {{skill}} </a>
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