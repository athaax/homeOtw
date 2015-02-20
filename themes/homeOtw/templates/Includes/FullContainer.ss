<div class="off-canvas-wrap" data-offcanvas>
	<div id="login-form-modal" class="reveal-modal medium" data-reveal>
		<h2>Login</h2>
		$LoginForm
		<a class="close-reveal-modal">&#215;</a>
	</div>
  	<div class="inner-wrap push-bottom" >

	  	<nav class="top-bar" data-topbar role="navigation">
		  	<ul class="title-area">
				<li class="name">
				  <!-- <h1><a href="#">My Site</a></h1> -->
				</li>
				 <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
				<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
		  	</ul>

		 	<section class="top-bar-section">
				<!-- Right Nav Section -->
				<ul class="right">
					<li class="navButton" id="workButton"><a >Work</a></li>
					<li class="navButton" id="aboutButton"><a href="#about">Find Me</a></li>
				  	<li class="navButton" id="homeButton"><a href="#/">Jonathan</a></li>

					<li class="has-dropdown hide-for-medium-up">
						<a href="#">Jonathan</a>
						<ul class="dropdown">
						  <li><a >Portfolio</a></li>
						  <li class="left-off-canvas-toggle" href=""><a>Find Me</a></li>
						</ul>
					</li>

				</ul>

				<!-- Left Nav Section -->
				<ul class="left">
				  <li><a href="#">Left Nav Button</a></li>
				</ul>
	 		</section>
		</nav>
  		<!--
	    <nav class="tab-bar" >

	      <section class="left-small">
	        <a class="left-off-canvas-toggle menu-icon" href=""><span></span></a>
	      </section>

	      <section class="middle tab-bar-section">
	
				
			  	<ul class="title-area inline-list right show-for-medium-up">
				    <li class="nav-name">
				      <h1><a href="#/">Jonathan</a></h1>
				    </li>
				    <li class="nav-name">
				      <h1><a href="#" class="left-off-canvas-toggle" ng-click="">Portfolio</a></h1>
				    </li>
				    <li class="nav-name">
				      <h1><a href="#about">Find Me</a></h1>
				    </li>
			  	</ul>



	      </section>


	    </nav>
		-->
	    <aside class="left-off-canvas-menu">
	      <ul class="off-canvas-list" ng-controller="PortfolioController as portfolio">
	        <li><label>Portfolio </label></li>
	        <% loop $Projects %>
				<%--<li><a href="#" ng-click="getProject($ID)">$Title</a></li>--%>
	          <li><a href="#portfolio/project" ng-click="getProject($ID)">$Image</a></li>
			<% end_loop %>

	      </ul>
	      <hr>
	    </aside>

	    <section class="main-section full-height" >
	    	<div class="full row translucent">
	    		<div class="small-12 columns ">
	   				<ng-view> </ng-view>

	    		</div>
	    	</div>


	    </section>

	    <a class="exit-off-canvas"></a>

	</div> <%-- end of inner canvas --%>
	<br>
  	<footer id="footer" class="footer" role="contentinfo">
		<div class="full row">
			<div class="small-8 medium-6 large-7 columns ">
				<% include Breadcrumbs %>
			</div>
			<div class="small-4 medium-6 large-5 hide-for-small-only columns">
				<ul class="breadcrumbs">
					<li class="right"><a data-reveal-id="login-form-modal">&copy;</a> $Now.Year $SiteConfig.Title</li>
				</ul>
			</div>
		</div>
	</footer>

</div> <%-- end off-canvas-wrap --%>
