(function(){
	'use strict';

	angular.module('gabres', [ 'ngRoute','gabres-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
				.when('/products', {
					templateUrl: 'assets/partials/products.html',
					controller: 'ProductLinesController',
					controllerAs: 'lineCtrl'
				})
					.when('/products/1', {
						templateUrl: 'assets/partials/product-lines.html',
						controller: 'ProductController',
						controllerAs: 'productCtrl'
					})
				.when('/contact', {
					templateUrl: 'assets/partials/contact.html'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  });

})();
