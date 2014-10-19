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
	$scope.project = {
	name: 'After Class',
	history: 'A long strin of history text',
	content: 'A maybe just as long string about content',
	image: 'image url? Page has to dl the image, so not quite sure how that works yet',
	github: 'this is a string',
	website: 'this is a string too'
};	    
    $scope.getProject = function($projectID) {
    	console.log($projectID);
    
    	$http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID).success(function(data, status, headers, config) {
    	$scope.project = data;
        console.log(data);
    });
	    
    };
	
});






})();