<div class="off-canvas-wrap move-right" data-offcanvas>
  <div class="inner-wrap" ng-controller="PortfolioController as portfolio">
    <nav class="tab-bar">
      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section class="middle tab-bar-section">
      <h1> Projects </h1>
      <%-- doesn't show? 
        <ul class="inline-list">
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
    	<div class="row hide" id="portfolio-body">
    		<div class="medium-5 columns">
				<h1> {{project.project.title}} </h1>
        <a href="{{project.project.website}}" class="button"> View Live </a>
        <a href="{{project.project.github}}" class="button"> View on GitHub </a>
				<p> {{project.project.Content}} </p>
				<p> {{project.History}} </p>
        <p> {{project.project.History}} </p>
    		</div>
    		<div class="medium-7 columns">
				<% loop projects().Limit(1) %>
					<img src="{{project.project.image}}" alt="Image for {{project.project.title}}" />
				<% end_loop %>
			</div>
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>