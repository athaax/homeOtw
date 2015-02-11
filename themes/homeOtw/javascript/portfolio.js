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
      when('/portfolio/', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolioCover.html',
        controller: 'PortfolioController'
      }).
      when('/portfolio/project', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolio.html',
        controller: 'PortfolioController'
      }).
      when('/about', {
        templateUrl: 'themes/homeOtw/angularPartials/catchall.html',
        controller: 'StalkMeController'
      }).otherwise({
         redirectTo: '/#/'
      });
  }]);

app.controller('PortfolioController', function($scope, $http) {
	window.MY_SCOPE = $scope;
    
    $scope.$on('$routeChangeSuccess', function(event,current,previous) {
    });

	$scope.project;    
    $scope.getProject = function($projectID) {
    	//console.log($projectID);
    
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
		        $(document).foundation('equalizer', 'reflow');

	}
	
	init()
});


app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;

});

app.controller("StalkMeController", function($scope, $http) {
    window.MY_SCOPE = $scope;
 
    $scope.getHappenings = function() {
        $http.get('http://localhost:8888/homeotw/homepage/webActivityFeed')
            .success( function(data, status, headers, config) {

            })
            .error( function( data, status, headers, config) {

            });
    }

    $scope.getProject = function($projectID) {
        //console.log($projectID);
    
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
                $(document).foundation('equalizer', 'reflow');

    }
    
    init()
});



})();