(function(){
  'use strict';

  angular.module('gabres-main',['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html'
      });
    })
    .controller('MainController', function() {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })
    .directive('menuBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/menu-bar.html',
        controllerAs: 'menu',
        controller: function() {
          this.items = [
            {name:'Inicio'},
            {name:'Productos', subitems: [
              {name:'Almacenamiento de Líquidos'},
              {name:'Tratamiento de Aguas'},
              {name:'Revestimientos'},
              {name:'Línea Náutica'},
              {name:'Trabajos Especiales'}
            ]},
            {name:'Servicios'},
            {name:'Galería'},
            {name:'Enlaces'},
            {name:'Contacto'}
          ];

          this.shouldShowSubitems = function(item) {
            return item.subitems && item.subitems.length > 0;
          };
        }
      };
    })
    .directive('appFooter', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/app-footer.html'
      };
    })
    .directive('headerBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/header-bar.html'
      };
    });


})();
