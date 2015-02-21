
	<div id="login-form-modal" class="reveal-modal medium" data-reveal>
		<h2>Login</h2>
		$LoginForm
		<a class="close-reveal-modal">&#215;</a>
	</div>
		<%--
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
		--%>
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
		<%--
	    <aside class="left-off-canvas-menu">
	      <ul class="off-canvas-list" ng-controller="PortfolioController as portfolio">
	        <li><label>Portfolio </label></li>
	        <% loop $Projects %>
				<%--<li><a href="#" ng-click="getProject($ID)">$Title</a></li>- -%>
	          <li><a href="#portfolio/project" ng-click="getProject($ID)">$Image</a></li>
			<% end_loop %>

	      </ul>
	      <hr>
	    </aside>
	    --%>
	    <%-- begin main-section --%>
	    <section class="main-section full-height" >
	    	<main class="full row ">
	    		<div class="small-12 column" id="main-column">

	   				<div class="row tb-padding lr-padding heading diamonds">
						<div class="medium-12 columns">
							<div class="row" style="max-width: 1200px; margin: 0 auto;">
								<div class="medium-8 columns">
								    <section class="">
									    <h4>Hello</h4>
							  			<p>I'm Jonathan, I'm a front and back-end web developer. I aim for neat code and clean design. I love building on the web, I think it's the best way to tap into the richness of the information age. Making rich apps that are beautiful, useful, and user-friendly is my goal.  </p> 
							  			<p>I graduated from the University of Iowa in 2014 with a B.A. in English and Informatics with a cognate in Human-Computer interaction. I spent about a year and half as an intern web developer there, where I worked on a suite of university websites, both programming and pixel-pushing. I also spent some time doing journalism. Turns out, English and journalism lend themselves well to web development, where communication, writing, analysis, and research are important to making robust web <i>solutions</i>. 
							  			</p>
								    </section>
							  
								</div>

								<div class="medium-4 columns">
									<div class="shadow">
										<img src="http://md.studentlife.uiowa.edu/assets/Uploads/_resampled/SetWidth760-7O9A9541.jpg" />
									</div>
									<%--
									<div id="gr_custom_widget_1424323252" class="">
										<!-- widget -->
									</div>		
									--%>  
								</div>
							</div>
						</div>
					</div>

	   				<ng-view> </ng-view>

	   				<div class=" row " style="min-height: 100px;">
						<div class="small-5 small-centered columns  ">
							
							<blockquote class="goodquote">
							  	<div id="gr_quote_body" class="text-shadow">
									<!-- quote -->
								</div>
								<script src="https://www.goodreads.com/quotes/widget/3575393-jonathan-solis?v=2" type="text/javascript"></script>
								<div style="text-align: right;"><a href="https://www.goodreads.com/quotes" style="color: #382110; text-decoration: none; font-size: 10px;">Quotes</a></div>
								</div>
							</blockquote>
						
						</div>
						<br>
					</div>

					

	    		</div>
	    	</main>


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
