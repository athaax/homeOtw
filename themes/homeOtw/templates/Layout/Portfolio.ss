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
			<li><a href="#">$Title</a></li>
		<% end_loop %>
      </ul>
    </aside>

    <section class="main-section full-height">
    	<p> Kogi High Life aesthetic bitters, selvage roof party street art disrupt vinyl selfies forage church-key ethical food truck. Fashion axe food truck pour-over yr, salvia deep v messenger bag hoodie swag stumptown Intelligentsia viral kitsch narwhal. Ethical VHS gastropub small batch distillery. Selvage Tumblr sustainable, mustache craft beer irony messenger bag American Apparel Carles gastropub actually hella selfies High Life. Schlitz asymmetrical Odd Future small batch, plaid farm-to-table sriracha gastropub squid Shoreditch High Life fixie. Cred salvia mumblecore pug Neutra skateboard. Portland Williamsburg Carles direct trade Pitchfork jean shorts, lomo ethical narwhal. </p>

		<p>Tilde sustainable fingerstache vinyl, pop-up artisan selvage tattooed street art gentrify cornhole Shoreditch jean shorts dreamcatcher. Echo Park tote bag disrupt, Vice 8-bit stumptown Tonx. Cliche Kickstarter polaroid banh mi art party sartorial. Squid banjo literally, Marfa distillery XOXO Pitchfork Echo Park single-origin coffee PBR&B stumptown gastropub blog before they sold out. Shoreditch chia readymade cardigan Brooklyn Odd Future. Bicycle rights single-origin coffee sustainable retro craft beer hashtag Bushwick. Marfa hashtag Vice lomo bespoke PBR&B.</p>

    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>

<%--

<div class="medium-6 large-5 columns">
	<div class="row">
		<div class="small-12 medium-5 columns portnav">
			<h1 class="headline">Portfolio</h1>
			<ul class="no-bullet">
				<% loop $Projects %>
					<li> $Title </li>
				<% end_loop %>
			</ul>
		</div>
		<div class="small-12 medium-7 columns portinfo">
			<p> Yay Content! </p>
		</div>
	</div>
</div>
<div class="medium-6 large-7 columns portwindow">
	<p>Where the Pics will be </p>
</div>

--%>