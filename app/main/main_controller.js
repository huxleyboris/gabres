(function(){
  'use strict';

  angular.module('gabres-main', ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html'
      });
    })
    .controller('ProductController', function($scope, $modalInstance, product) {
      $scope.product = product;

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
    })
    .controller('ProductLinesController', function($modal) {
      this.open = function(product) {
        $modal.open({
          templateUrl: 'assets/partials/product.html',
          controller: 'ProductController',
          resolve: {
            product: function() {
              return product;
            }
          }
        });
      };

      this.lines = [
        {
          name: 'Almacenamiento de Líquidos',
          description: 'Disponemos de diversos modelos de depósitos abarcando todas las necesidades del instalador:\nCilíndricos, rectangulares, especiales bajo rampa, horizontales con pies de soporte, para enterrar, etc.\nTrabajamos a medida, es decir, con cualquier diámetro y altura según disponibilidad de espacio.\nUtilizando el tipo de resina adecuado para cada caso fabricamos depósitos para contención de agua potable, sistemas contraincendios, combustibles, químicos, abonos y productos alimenticios en general.\nRealizamos montaje de depósitos en el lugar final donde irán instalados con nuestros equipos de profesionales. (ver en Servicios -> Montaje en obra).',
          images: [
            { url: 'http://prgabres.com/pruebaa002002.jpg' }
          ],
          products: [
            {
              name: 'DC - Cilíndrico vertical de superficie',
              description: 'Una descripción del producto',
              isMountable: true,
              images: [
                { url: 'http://prgabres.com/pruebaa004001.jpg' }
              ],
              characteristics: [
               'Su diseño cilíndrico les dota de una excelente resistencia a la presión hidrostática',
               'Su superficie interior lisa facilita una perfecta limpieza',
               'Fabricados con RESINAS DE USO ALIMENTICIO cuando se requiere almacenar agua potable',
               'Todas las medidas y volúmenes hasta 75.000 litros'
              ],
              accessories: [
                'Tapa de registro en la parte superior',
                'Boca hombre hermética en el lateral',
                'Tomas de entrada, salida y rebosadero',
                'Cinta de nivel'
              ]
            },
            {
              name:'DC - Cilíndrico vertical para enterrar',
              isMountable: false,
              images: [
                { url: 'http://prgabres.com/pruebaa008002.jpg'},
                { url: 'http://prgabres.com/pruebaa008001.jpg'}
              ],
              characteristics: [
                'Con tapa plana en el caso de construir una losa de hormigón armado para permitir tránsito',
                'Con tapa curva para el caso de no poner losa',
                'Refuerzos extra para poder soterrarlos',
                'Las mismas características que los de superficie'
              ],
              accessories: [
                'Tapa de registro',
                'Tomas de entrada, salida y rebosadero',
                'Ganchos de carga'
              ]
            },
            {
              name: 'DH - Cilíndrico horizontal para enterrar',
              isMountable: false,
              images: [
                { url: 'http://prgabres.com/pruebaa010001.jpg'}
              ],
              characteristics: [
                'Las mismas características que los de superficie vertical'
              ],
              accessories: [
                'Tapa de registro',
                'Tomas de entrada, salida y rebosadero',
                'Ganchos de carga'
              ]
            },
            {
              name: 'DHS - Cilíndrico horizontal para superficie',
              isMountable: false,
              images: [
                { url: 'http://prgabres.com/pruebaa009001.jpg' }
              ],
              characteristics: [
                'Indicados para el caso de espacio reducido',
                'Las mismas características que los de superficie vertical'
              ],
              accessories: [
                'Tapa de registro',
                'Tomas de entrada, salida y rebosadero',
                'Ganchos de carga',
                'Pies de soporte'
              ]
            },
            {
              name: 'DR - Rectangular y otros',
              isMountable: true,
              images: [
                { url: 'http://prgabres.com/pruebaa006002.jpg' },
                { url: 'http://prgabres.com/pruebaa006001.jpg' }
              ],
              characteristics: [
                'Su diseño permite aprovechar cualquier espacio: rincones, bajo escaleras, bajo rampas',
                'Su superficie interior lisa facilita una perfecta limpieza',
                'Fabricados con RESINAS DE USO ALIMENTICIO cuando se requiere almacenar agua potable',
                'Todas las medidas y volúmenes hasta 30.000 litros',
                'Con refuerzos internos de hierro recubiertos entrecruzados'
              ],
              accessories: [
                'Tapa de registro en la parte superior',
                'Boca hombre hermética en el lateral',
                'Tomas de entrada, salida y rebosadero',
                'Cinta de nivel'
              ]
            },
            {
              name: 'AC / AR - Arqueta acometida saneamiento',
              isMountable: false,
              images: [
                { url: 'http://prgabres.com/pruebaa007002.jpg' },
                { url: 'http://prgabres.com/pruebaa007001.jpg' }
              ],
              characteristics: [
                'Medidas standard cilíndricas: 0,90 mts. de diámetro y 1,20 mts de alto',
                'Medidas standard rectangulares: 0,90 x 0,90 x 1,20 mts de alto y 1,00 x 1,00 x 1,00 mts. de alto',
                'Medidas especiales: Debido a la complejidad de la instalación, en ciertos casos es conveniente y/o necesario cambiar el sitio de la(s) entrada(s) y salida. Para ello está la opción de hacerlas a medida. Se entregan ciegas y a la medida solicitada para que el instalador la conecte. Luego se sellan las tomas tanto de entrada como de salida con poliester y fibras de vidrio IN SITU.',
                'Nota: La toma de salida está centrada y a 600 mm. del fondo, en cara anterior (según normativa), y la toma de entrada centrada a 950 mm. en la cara posterior.'
              ],
              accessories: [
                'Cuello de registro',
                'Toma de entrada de 160 mm. de diámetro',
                'Toma de salida de 200 mm. de diámetro'
              ]
            }
          ]
        },
        {
          name: 'Tratamiento de Aguas',
          description: 'Sistemas de depuración para aguas residuales de uso doméstico con el objetivo de conseguir una calidad de vertido dentro de los parámentros establecidos por la normativa europea.',
          images: [
            { url: 'http://prgabres.com/pruebaa004001.jpg' }
          ]
        },
        {
          name: 'Revestimientos / Impermeabilización',
          description: 'Revestimiento e impermeabilización de piscinas de obra, jardineras, aljibes, fosas de ascensor, fuentes, interiores de furgonetas, cuartos de ducha,  cubiertas, naves industriales, etc.\nCaracterísticas:\n- Rapidez en la ejecución.\n- Mínimo mantenimiento.\n- Fácil de limpiar.\n- Distintos colores.',
          images: [
            { url: 'http://prgabres.com/pruebaa004001.jpg' }
          ]
        },
        {
          name: 'Línea Náutica',
          description: 'Canoas, kayacs y diferentes accesorios y piezas forman parte de nuestra producción.\nRealizamos también reparaciones de cascos y cubiertas.',
          images: [
            { url: 'http://prgabres.com/pruebaa004001.jpg' }
          ]
        }
      ];

      this.otherWorks = {
        name: 'Trabajos Especiales',
        description: 'Chapas para techos, canalones, encofrados para la construcción, maceteros, cachas de motos de competición, cubas para la cria de tortugas o algas, etc. Además de pequeñas producciones en serie. Todo en poliester y fibras de vidrio. ¡Consúltenos!'
      };
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
    });


})();
