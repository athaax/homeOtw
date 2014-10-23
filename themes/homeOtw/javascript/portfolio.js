(function() {

var app = angular.module('portfolio', ['ngRoute']);
/*
app.config(function ($routeProvider) {
	$routeProvider.when('/',
		{
			templateUrl: "portfolio.html",
			controller: "PortfolioController"	
			
		}
	);
});
*/
app.controller('PortfolioController', function($scope, $http) {
	$scope.project;    
    $scope.getProject = function($projectID) {
    	//console.log($projectID);
    
    	$http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID).success(function(data, status, headers, config) {
    	$scope.project = data;
        console.log(data);
    });
	    
    };
	
});






})();