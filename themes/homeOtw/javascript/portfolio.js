(function() {

var app = angular.module('portfolio', ['ngRoute']);

//perf
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'themes/homeOtw/angularPartials/home.html',
        controller: 'HomeController'
      }).
      when('/portfolio', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolioCover.html',
        controller: 'PortfolioController'
      }).
      when('/portfolio/project', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolio.html',
        controller: 'PortfolioController'
      }).
      when('/about', {
        templateUrl: 'themes/homeOtw/angularPartials/catchall.html',
        controller: 'FindMeController'
      }).
      when('/security', {
        templateUrl: 'themes/homeOtw/angularPartials/login.html'
      }).
      otherwise({
         //redirectTo: '/#/'
      });
  }]);

app.controller('PortfolioController', function($scope, $http) {
	window.MY_SCOPE = $scope;
            $(document).foundation('equalizer', 'reflow');

    $scope.getProject = function($projectID) {
    	//console.log($projectID);
        $(document).foundation('equalizer', 'reflow');

    	$http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID).success(function(data, status, headers, config) {
    	$scope.project = data;
    	console.log('much success');
    	console.log(status);
        console.log(data);
        $(document).foundation('equalizer', 'reflow');


    }).error(function(data, status, headers, config) {
	    console.log('error');
    	console.log(status);
    	console.log(data);
        });
	};

    $scope.getProjects = function($projectID) {
        //console.log($projectID);
        //$(document).foundation('equalizer', 'reflow');

        $http.get('http://localhost:8888/homeotw/portfolio/getProjects/').success(function(data, status, headers, config) {
            $scope.projects = data;
            console.log('much success');
            console.log(status);
            window.open("data:text/json," + encodeURIComponent(data), "_blank");
            //newWindow.document.write(data);

        }).error(function(data, status, headers, config) {
            console.log('error');
            console.log(status);
            var newWindow = window.open();
            newWindow.document.write(data);
            });
        };



    
    $scope.getSkill = function($skillID) {
    	//console.log($projectID);
    
    	$http.get('http://localhost:8888/homeotw/portfolio/getSkill/' + $skillID).success(function(data, status, headers, config) {
    	$scope.project = data;
    	console.log('much success');
    	console.log(status);
        //console.log(data);
    }).error(function(data, status, headers, config) {
	    console.log('error');
    	console.log(status);
    	console.log(data);
    });
	    
    };

	
	var init = function() {
        $scope.getProjects();

	}
	
	init()
});


app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;
   // $(document).foundation();
    $(document).foundation('equalizer', 'reflow');
    $(".navButton").removeClass("active");
    $("#homeButton").addClass("active");
    window.loadScript('https://www.goodreads.com/review/custom_widget/3575393.currently-reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1424323252&widget_text_color=000000&widget_title_size=medium&widget_width=medium',
     function() {
        $(document).foundation('equalizer', 'reflow');
    });
   // check if all async requests are done. 





});

app.controller("FindMeController", function($scope, $http) {
    window.MY_SCOPE = $scope;
    $(document).foundation('tooltip', 'reflow');
    console.log('findmecalled');
    $(".navButton").removeClass("active");
    $("#aboutButton").addClass("active");
    $scope.getActivityFeed = function() {

        $http.get('http://localhost:8888/homeotw/api/getActivityFeed/twitter')
            .success( function(data, status, headers, config) {
                $scope.activityFeed = data;
                console.log(status);
                //var newWindow = window.open();
                //newWindow.document.write(data);
            })
            .error( function( data, status, headers, config) {
                console.log(status);
                //var newWindow = window.open();
                //newWindow.document.write(data);

            });
    };
    
    $scope.init = function() {

    }

    $scope.init();

});



})();