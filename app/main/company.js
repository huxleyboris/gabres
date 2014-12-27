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
    })
    .constant('lines', [
      {
        id: 'almacenamiento-liquidos',
        name: 'Almacenamiento de Líquidos',
        description: 'Disponemos de diversos modelos de depósitos abarcando todas las necesidades del instalador:\nCilíndricos, rectangulares, especiales bajo rampa, horizontales con pies de soporte, para enterrar, etc.\nTrabajamos a medida, es decir, con cualquier diámetro y altura según disponibilidad de espacio.\nUtilizando el tipo de resina adecuado para cada caso fabricamos depósitos para contención de agua potable, sistemas contraincendios, combustibles, químicos, abonos y productos alimenticios en general.\nRealizamos montaje de depósitos en el lugar final donde irán instalados con nuestros equipos de profesionales. (ver en Servicios -> Montaje en obra).',
        images: [
          { url: 'images/almacenamiento-liquidos.jpg' }
        ],
        products: [
        {
          name: 'DC - Cilíndrico vertical de superficie',
          isMountable: true,
          images: [
            { url: 'images/cilindro-vertical-superficie.jpg' }
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
            { url: 'images/cilindro-vertical-enterrar-1.jpg'},
            { url: 'images/cilindro-vertical-enterrar-2.jpg'}
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
            { url: 'images/cilindro-horizontal-enterrar.jpg'}
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
            { url: 'images/cilindro-horizontal-superficie.jpg' }
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
            { url: 'images/rectangular-y-otros-1.jpg' },
            { url: 'images/rectangular-y-otros-2.jpg' }
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
            { url: 'images/arqueta-acometida-saneamiento-1.jpg' },
            { url: 'images/arqueta-acometida-saneamiento-2.jpg' }
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
        id: 'tratamiento-aguas',
        name: 'Tratamiento de Aguas',
        description: 'Sistemas de depuración para aguas residuales de uso doméstico con el objetivo de conseguir una calidad de vertido dentro de los parámentros establecidos por la normativa europea.',
        images: [
          { url: 'images/tratamiento-aguas-1.jpg' },
          { url: 'images/tratamiento-aguas-2.jpg' },
          { url: 'images/tratamiento-aguas-3.jpg' }
        ],
        products: [
        {
          name: 'DDBA - Fosa séptica Decantador - Digestor',
          isMountable: false,
          images: [
          ],
          description: 'Están especialmente indicadas para tratar aguas fecales de instalaciones en las que no sea necesaria una gran cantidad de vertido.' +
            ' Consta de dos compartimientos, en el primero los sedimentos decantan hacia el fondo, pasando el agua al segundo compartimiento, el digestor, donde las bacterias anacrobias, sin presencia de oxígeno, se encargan de metabolizar la materia orgánica aún presente.' +
            ' Son en general depósitos cilíndricos horizontales para enterrar.',
          characteristics: [
          ],
          accessories: [
          ]
        },
        {
          name: 'DDBB - Fosa séptica Decantador - Digestor con filtros biológicos',
          description: 'Es el mismo sistema que el anterior al que se le añade un tercer compartimiento donde se encuentra el relleno plástico que actúa como filtro.' +
            ' Este sistema es muy utilizado y cumple con la Ley de Aguas RD 606/2003.' +
            ' Están especialmente indicados para tratar las aguas fecales de pequeñas comunidades.'
        },
        {
          name: 'OX - Depuradora de oxidación total',
          images: [
            { url: 'images/depuradora-oxidacion-total.jpg' }
          ],
          description: 'Es un sistema de depuración más eficiente, con aportación de aire para la descomposición biológica de la materia orgánica.'+
            ' Cumplen con la normativa actual de vertido RD 606/2003. Así como la normativa europea, directiva de consejo 91/271/CEE.'+
            ' Funciona descomponiendo la materia orgánica gracias a la aportación de aire y a la generación de microorganismos aerobios.',
          characteristics: [
            'Reactor biológico (creación y mantenimiento de biomasa)',
            'Aireación prolongada (oxidación total)',
            'Decantador (clarificación del agua)',
            'Recirculación del fango',
            'Tiempo de funcionamiento prolongado',
            'Rendimiento: 90 - 95 % en DBO5 - DQO',
            'Mínimo mantenimiento',
            'Exenta de olores.',
            'Excelente calidad de vertido'
          ],
          accessories: [
            'Bomba de aire',
            'Tomas de entrada y salida',
            'Temporizador',
            'Panel de control (opcional)'
          ]
        },
        {
          name: 'SGD - Separador de grasas',
          description: 'Es un elemento esencial en el tratamiento de aguas residuales que pueden contener un aoprte considerable de grasas. (Por ejemplo: grasa de origen animal, aceites vegetales, detergentes, etc.).' +
            ' Las grasas se separan del agua gracias a la diferencia de densidades. Es por eso que el agua se recoge de la parte intermedia del depósito, a fin de evitar la salida de las grasas.' +
            ' Pueden ser fabricados sobre depósitos cilíndricos horizontales como verticales, dependiendo del volúmen a tratar.'
        },
        {
          name: 'SGE - Desarenador',
          description: 'Están indicados como depósitos para recogida de aguas pluviales y como pretratamiento para aguas que luego se tratarán en separadores de hidrocarburos.'+
            ' Funcionan por decantación, los sólidos son retenidos en el primer compartimiento del depósito.'+
            ' Se pueden combinar en el mismo depósito el Separador de grasas y el Desarenador, según conveniencia.'
        },
        ]
      },
      {
        id: 'revestimientos-impermeabilizacion',
        name: 'Revestimientos / Impermeabilización',
        // description: 'Revestimiento e impermeabilización de piscinas de obra, jardineras, aljibes, fosas de ascensor, fuentes, interiores de furgonetas, cuartos de ducha,  cubiertas, naves industriales, etc.\nCaracterísticas:\n- Rapidez en la ejecución.\n- Mínimo mantenimiento.\n- Fácil de limpiar.\n- Distintos colores.',
        content: '<p class="text-justify">Revestimiento e impermeabilización de piscinas de obra, jardineras, aljibes, fosas de ascensor, fuentes, interiores de furgonetas, cuartos de ducha, cubiertas, naves industriales, etc.</p><p class="text-left"><b>Características:</b><ul class="text-left"><li>Rapidez en la ejecución</li><li>Mínimo mantenimiento</li><li>Fácil de limpiar</li><li>Distintos colores</li></ul></p>',
        images: [
          { url: 'images/revestimientos-impermeabilizacion-1.jpg' },
          { url: 'images/revestimientos-impermeabilizacion-2.jpg' },
          { url: 'images/revestimientos-impermeabilizacion-3.jpg' }
        ]
      },
      {
        id: 'linea-nautica',
        name: 'Línea Náutica',
        //description: 'Canoas, kayacs y diferentes accesorios y piezas forman parte de nuestra producción.\nRealizamos también reparaciones de cascos y cubiertas.',
        content: '<p class="text-justify">Canoas, kayacs y diferentes accesorios y piezas forman parte de nuestra producción.</p><p class="text-justify">Realizamos también reparaciones de cascos y cubiertas.</p>',
        images: [
          { url: 'images/linea-nautica-1.jpg' },
          { url: 'images/linea-nautica-2.jpg' },
          { url: 'images/linea-nautica-3.jpg' }
        ]
      }
    ])
    .constant('otherWorks', {
      id: 'trabajos-especiales',
      name: 'Trabajos Especiales',
      //description: 'Chapas para techos, canalones, encofrados para la construcción, maceteros, cachas de motos de competición, cubas para la cria de tortugas o algas, etc. Además de pequeñas producciones en serie. Todo en poliester y fibras de vidrio. ¡Consúltenos!'
      content: '<p class="text-justify">Chapas para techos, canalones, encofrados para la construcción, maceteros, cachas de motos de competición, cubas para la cria de tortugas o algas, etc. Además de pequeñas producciones en serie.</p><p class="text-justify">Todo en poliester y fibras de vidrio.</p><p class="text-center"><strong>¡Consúltenos!</strong></p>',
      images: [
        { url: 'images/trabajos-especiales-1.jpg' },
        { url: 'images/trabajos-especiales-2.jpg' }
      ]
    });

})();
