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
        // subitems: [
        //     {name:'Almacenamiento de Líquidos'},
        //     {name:'Tratamiento de Aguas'},
        //     {name:'Revestimientos'},
        //     {name:'Línea Náutica'},
        //     {name:'Trabajos Especiales'}
        //   ]},
      },
      {
        name:'Servicios',
        path: '/services',
        // templateUrl: 'assets/partials/services.html',
      },
      {
        name:'Galería',
        path: '/gallery'
      },
      {
        name:'Enlaces',
        path: '/links'
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
