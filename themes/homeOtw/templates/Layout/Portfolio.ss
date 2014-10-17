<div class="off-canvas-wrap" data-offcanvas>
  <div class="inner-wrap">
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
			<li><a href="/homeOtw/portfolio/project/$ID">$Title</a></li>
		<% end_loop %>
			<li><a href="/homeOtw/portfolio/project/">Testing</a></li>
      </ul>
    </aside>

    <section class="main-section full-height" ng-controller="PortfolioController as portfolio">
    	<div class="row">
    		<div class="medium-5 columns">
				<p> {{portfolio.project.name}} </p>
				<p> {{portfolio.project.content}} </p>
				<p> {{portfolio.project.history}} </p>
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