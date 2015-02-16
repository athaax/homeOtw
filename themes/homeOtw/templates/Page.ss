<!doctype html>
<html class="no-js" lang="$ContentLocale.ATT" dir="$i18nScriptDirection.ATT" ng-app="portfolio" >
<head>
	<% base_tag %>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> - $SiteConfig.Title</title>
	<meta name="description" content="$MetaDescription.ATT" />
	<%--http://ogp.me/--%>
	<meta property="og:site_name" content="$SiteConfig.Title.ATT" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="$Title.ATT" />
	<meta property="og:description" content="$MetaDescription.ATT" />
	<meta property="og:url" content="$AbsoluteLink.ATT" />
	<link rel="icon" type="image/png" href="$ThemeDir/favicon.ico?ver=2" />
	<%--See [Requirements](http://doc.silverstripe.org/framework/en/reference/requirements) for loading from controller--%>
	<link rel="stylesheet" href="$ThemeDir/css/app.css" />
	<link rel="stylesheet" href="$ThemeDir/css/MetroJs.css" />


</head>
<body class="$ClassName.ATT">

	<%--
	<% if $ClassName != "Portfolio" %>  
	<header class="header contain-to-grid" role="banner">
		include TopBar 
	</header>
	<% end_if %>
	--%>

	<% include FullContainer %>
	


	<%--Login Modal--%>
	<%--
	<div id="login-form-modal" class="reveal-modal medium" data-reveal>
		<h2>Login</h2>
		$LoginForm
		<a class="close-reveal-modal">&#215;</a>
	</div>
	--%>

	<%--See [Requirements](http://doc.silverstripe.org/framework/en/reference/requirements) for loading from controller--%>
	<script src="$ThemeDir/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="$ThemeDir/bower_components/foundation/js/foundation.min.js"></script>
	<%--<script src="$ThemeDir/javascript/MetroJS.min.js"></script>--%>

	<script src="{$ThemeDir}/bower_components/angular/angular.js"></script>
	<script src="{$ThemeDir}/bower_components/angular-route/angular-route.js"></script>

	<script src="$ThemeDir/build/build-src.js"></script>


</body>
</html>
