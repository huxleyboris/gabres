(function() {
  'use strict';

  angular.module('gabres-directives', [])    
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
    .directive('product', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/product.html'
      };
    })
    .directive('productLine', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/product-line.html'
      };
    })
    .directive('headerBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/header-bar.html'
      };
    })
    .directive('scrollSpy', function($window) {
      return {
        restrict: 'A',
        controller: function($scope) {
          $scope.spies = [];

          this.addSpy = function(spyObj) {
            $scope.spies.push(spyObj);
          };
        },
        link: function(scope, elem, attrs) {
          var findElem = function(elem, spy) {
            var e = null;
            angular.forEach(elem.find('product-line'), function(obj, value) {
              if (spy.id === obj.id) {
                e = obj;
              }
            });
            return e;
          };

          var spyElems = [];

          scope.$watch('spies', function(spies) {

            angular.forEach(spies, function(spy, value) {
              if (!spyElems[spy.id]) {
                spyElems[spy.id] = findElem(elem, spy);
              }
            });
          });

          angular.element($window).bind('scroll', function() {
            var highlightSpy = null;

            // hack
            if (scope.spies.length === 0) {
              scope.$watch('spies', function(spies) {

                angular.forEach(spies, function(spy, value) {
                  if (!spyElems[spy.id]) {
                    spyElems[spy.id] = findElem(elem, spy);
                  }
                });
              });
            }

            angular.forEach(scope.spies, function(spy, value) {
              spy.out();

              spyElems[spy.id] = !spyElems[spy.id] ? findElem(elem, spy) : spyElems[spy.id];

              if (spyElems[spy.id]) {
                var pos = spyElems[spy.id].getBoundingClientRect().top;

                if (pos - $window.scrollY <= 0) {
                  spy.pos = pos;
                  highlightSpy = highlightSpy ? highlightSpy : spy;
                  if (highlightSpy.pos < spy.pos) {
                    highlightSpy = spy;
                  }
                }
              }
            });

            return highlightSpy !== null ? highlightSpy.in() : void 0;
          });
        }
      };
    })
    .directive('spy', function($location) {
      return {
        restrict: 'A',
        require: '^scrollSpy',
        link: function(scope, elem, attrs, scrollSpy) {
          elem.bind('click', function() {
            scope.$apply(function() {
              $location.hash(attrs.spy);
            });
          });

          scrollSpy.addSpy({
            id: attrs.spy,
            in: function() {
              elem.addClass('active');
            },
            out: function() {
              elem.removeClass('active');
            }
          });
        }
      };
    });
})();
