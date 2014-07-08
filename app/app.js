(function(){
	'use strict';

	angular.module('gabres', [ 'ngRoute','gabres-main','templates'])
	  .config(function ($routeProvider) {
	    $routeProvider
				.when('/products', {
					templateUrl: 'assets/partials/products.html',
					controller: 'ProductLinesController',
					controllerAs: 'lineCtrl'
				})
				.when('/contact', {
					templateUrl: 'assets/partials/contact.html',
					controller: 'ContactController',
					controllerAs: 'contactCtrl'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  });

})();
