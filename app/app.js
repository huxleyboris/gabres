(function(){
	'use strict';

	angular.module('gabres', [ 'ngRoute','gabres-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
				.when('/products', {
					templateUrl: 'assets/partials/products.html',
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
