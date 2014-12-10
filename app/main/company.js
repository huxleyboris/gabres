(function() {
  'use strict';

  angular.module('gabres-company', [])
    .constant('company', {
      name: 'Gabres S.L. - Plásticos Reforzados',
      shortName: 'Gabres S.L.',
      physicalAddress: {
        street: 'Finca La Ramona, 144 - Polígono "C"',
        city: '(03114)  BACAROT - ALICANTE'
      },
      postalAddress: {
        street: 'Apartado de Correo 5254',
        city: '(03080)  ALICANTE'
      },
      emailAddress: 'info@prgabres.com',
      phone: '965 105 963'
    });

})();
