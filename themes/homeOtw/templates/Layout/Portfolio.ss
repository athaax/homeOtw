<div class="off-canvas-wrap" data-offcanvas>
  <div class="inner-wrap" ng-controller="PortfolioController as portfolio">
    <nav class="tab-bar">
      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section class="middle tab-bar-section">
        <h1 class="title">Foundation</h1>
      </section>

      <section class="right-small">
        <a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>
    </nav>

    <aside class="left-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Portfolio</label></li>
        <% loop $Projects %>
			<li><button href="$ID" ng-click="getProject($ID)">$Title</button></li>
		<% end_loop %>
      </ul>
    </aside>

    <section class="main-section full-height" >
    	<div class="row">
    		<div class="medium-5 columns">
				<p> {{project.project.title}} </p>
        <p> {{project.project.website}} </p>
        <p> {{project.project.github}} </p>
				<p> {{project.project.Content}} </p>
				<p> {{project.History}} </p>
        <p> {{project.project.History}} </p>
    		</div>
    		<div class="medium-7 columns">
				<% loop projects().Limit(1) %>
					<img src="{{portfolio.project.image}}" />
				<% end_loop %>
			</div>
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>