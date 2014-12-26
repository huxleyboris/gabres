(function() {
  'use strict';

  angular.module('gabres-company', [])
    .constant('company', {
      name: 'Gabres S.L. - Plásticos Reforzados',
      shortName: 'Gabres S.L.',
      physicalAddress: {
        street: 'Partida de Algorós',
        city: 'ELCHE - ALICANTE'
      },
      postalAddress: {
        street: 'Apartado de Correo 5254',
        city: '(03080) ALICANTE'
      },
      emailAddress: 'info@prgabres.com',
      phone: '965 105 963'
    });

})();
