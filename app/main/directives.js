(function() {
  'use strict';

  angular.module('gabres-directives', ['gabres-routes', 'gabres-company'])
    .directive('menuBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/menu-bar.html',
        controllerAs: 'menu',
        controller: function(mainRoutes, $location) {
          this.items = mainRoutes;

          this.shouldShowSubitems = function(item) {
            return item.subitems && item.subitems.length > 0;
          };

          this.isActive = function (viewLocation) {
            return viewLocation === $location.path();
          };
        }
      };
    })
    .directive('appFooter', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/app-footer.html',
        controller: function($scope, company) {
          $scope.company = company;
        }
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

            // hack - if the array is empty, we'll try to reinitialize it,
            // as the content may have been dynamic and thus not captured before
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

                if (pos - $window.scrollY <= 10) {
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
    })
    .directive('content', function($compile) {
      var linker = function(scope, element, attrs) {
        element.html(attrs.template).show();
        $compile(element.contents())(scope);
      };

      return {
          restrict: 'E',
          replace: true,
          link: linker,
          scope: {
              content:'='
          }
      };
    })
    .directive('map', function() {
      return {
        restrict: 'E',
        templateUrl: 'assets/partials/map.html',
        controller: function ($scope) {

          var location = {
            lat: 38.3193894,
            long: -0.5553162,
            city: 'Gabres S.L.',
            desc: 'Plásticos Reforzados'
          };

          var mapOptions = {
              zoom: 16,
              center: new google.maps.LatLng(location.lat, location.long),
              mapTypeId: google.maps.MapTypeId.HYBRID
          };

          $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

          $scope.markers = [];

          var infoWindow = new google.maps.InfoWindow();

          var createMarker = function (info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });

            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
              infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);
          };

          createMarker(location);

          $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          };
        }
      };
    });
})();
