(function(){
  'use strict';

  angular.module('gabres-main', ['ngRoute', 'ui.bootstrap', 'gabres-company'])
    .controller('ContactController', function($modal, company, $scope) {
      $scope.company = company;

      this.openDialog = function() {
        $modal.open({
          templateUrl: 'assets/partials/contact-form.html',
          size: 'lg'
        });
      };
    })
    .controller('ProductController', function($scope, $modalInstance, product) {
      $scope.product = product;

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
    })
    .controller('ProductLinesController', function($modal, lines, otherWorks) {
      this.open = function(product) {
        $modal.open({
          templateUrl: 'assets/partials/product-item.html',
          controller: 'ProductController',
          resolve: {
            product: function() {
              return product;
            }
          }
        });
      };

      this.allLines = function() {
        var copy = lines.slice(0);
        copy.push(otherWorks);
        return copy;
      };

      this.hasProducts = function(line) {
        return line.products && line.products.length > 0;
      };
    });

})();
