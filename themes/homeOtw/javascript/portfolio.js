(function() {


var app = angular.module('portfolio', []);

app.controller('PortfolioController', function() {
	this.project = afterclass;
		
});



var afterclass = {
	name: 'After Class',
	history: 'A long strin of history text',
	content: 'A maybe just as long string about content',
	image: 'image url? Page has to dl the image, so not quite sure how that works yet',
	github: 'this is a string',
	website: 'this is a string too'
}


})();