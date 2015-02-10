(function() {

var app = angular.module('portfolio', ['ngRoute']);


//perf
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/homeOtw', {
        templateUrl: '../angularPartials/home.html',
        controller: 'HomeController'
      }).
      when('/homeOtw/portfolio/', {
        templateUrl: '../angularPartials/portfolio.html',
        controller: 'PortfolioController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.controller('PortfolioController', function($scope, $http) {
	window.MY_SCOPE = $scope;
	
	$scope.project;    
    $scope.getProject = function($projectID) {
    	//console.log($projectID);
    
    	$http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID).success(function(data, status, headers, config) {
    	$scope.project = data;
    	console.log('much success');
    	console.log(status);
        console.log(data);
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
		
	}
	
	init()
});


app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;

});



})();