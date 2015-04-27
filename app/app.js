(function() {
	'use strict';

	var initializeMainRoutes = function(routes, routeProvider) {
		angular.forEach(routes, function(route, value) {
			routeProvider.when(route.path, {
				templateUrl: route.templateUrl,
				controller: route.controller,
				controllerAs: route.controllerAlias
			});
		});
	};

	angular.module('gabres', ['ngRoute', 'gabres-routes', 'gabres-main', 'gabres-directives', 'templates'])
	  .config(function ($routeProvider, $locationProvider, mainRoutes) {

           $locationProvider.hashPrefix('!');

	   initializeMainRoutes(mainRoutes, $routeProvider);

	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });

})();
