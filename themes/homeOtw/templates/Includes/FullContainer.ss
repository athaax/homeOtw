<div class="full-main full  typography" role="main">
		  
		<div class="off-canvas-wrap" data-offcanvas>
		  <div class="inner-wrap" ng-controller="PortfolioController as portfolio">
		    <nav class="tab-bar" >

		      <section class="left-small">
		        <a class="left-off-canvas-toggle menu-icon" href=""><span></span></a>
		      </section>

		      <section class="middle tab-bar-section">
			     
				<nav class="top-bar" data-topbar role="navigation">
				  <ul class="title-area inline-list">
				    <li class="nav-name">
				      <h1><a href="#/">Jonathan</a></h1>
				    </li>
				    <li class="nav-name">
				      <h1><a href="#" class="left-off-canvas-toggle" ng-click="">Portfolio</a></h1>
				    </li>
				    <li class="nav-name">
				      <h1><a href="#about">Find Me</a></h1>
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
					<%--<li><a href="#" ng-click="getProject($ID)">$Title</a></li>--%>
		          <li><a href="#portfolio/project" ng-click="getProject($ID)">$Image</a></li>
				<% end_loop %>

		      </ul>
		      <hr>
		    </aside>

		    <section class="main-section full-height" >

		   		<ng-view> </ng-view>

		    </section>

		  	<a class="exit-off-canvas"></a>

		  </div>
		  <footer id="footer" class="footer" role="contentinfo">
			<div class="full row">
				<div class="small-8 medium-6 large-7 columns ">
					<% include Breadcrumbs %>
				</div>
				<div class="small-4 medium-6 large-5 hide-for-small-only columns">
					<ul class="breadcrumbs">
						<li class="right">&copy; $Now.Year $SiteConfig.Title</li>
					</ul>
				</div>
			</div>
		</footer>
		</div>
		
</div>