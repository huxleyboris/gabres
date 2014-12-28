(function() {
  'use strict';

  angular.module('gabres-routes', [])
    .constant('mainRoutes', [
      {
        name:'Inicio',
        path: '/',
        templateUrl: 'main/main.html'
      },
      {
        name: 'Productos',
        path: '/products',
        templateUrl: 'assets/partials/products.html',
        controller: 'ProductLinesController',
        controllerAlias: 'lineCtrl'
      },
      {
        name:'Catálogo',
        absolutePath: 'images/gabres-catalogo-productos.pdf',
        openInNewPage: true
      },
      {
        name: 'Contacto',
        path: '/contact',
        templateUrl: 'assets/partials/contact.html',
        controller: 'ContactController',
        controllerAlias: 'contactCtrl'
      }
    ]);

})();
