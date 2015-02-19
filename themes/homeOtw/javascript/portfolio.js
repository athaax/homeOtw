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
		//$(document).foundation('equalizer', 'reflow');
        $(document).foundation('equalizer', 'reflow');

	}
	
	init()
});


app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;

});

app.controller("FindMeController", function($scope, $http) {
    window.MY_SCOPE = $scope;
    $(document).foundation('tooltip', 'reflow');
    console.log('findmecalled');
   
    /*
    $scope.tweets = [
        {
            content: "this is a tweet",
            published: "12/14/84"
        },
        {
            content: "this is a tBETTER weet",
            published: "0999914/84"
        }

    ]
    */

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