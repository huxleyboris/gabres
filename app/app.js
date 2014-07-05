(function(){
	'use strict';

	angular.module('gabres', [ 'ngRoute','gabres-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
				.when('/products', {
					templateUrl: 'assets/partials/products.html'
				})
				.when('/contact', {
					templateUrl: 'assets/partials/contact.html'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  });

})();
