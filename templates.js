angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<div>\n  <ng-include src=\"\'assets/partials/big-announcement.html\'\">\n</div>\n");
$templateCache.put("assets/partials/app-footer.html","<div class=\"nav navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container\">\n    <company-footer></company-footer>\n    <p class=\"navbar-text pull-right\">\n      Copyright &#169; 2015\n      <i class=\"fa fa-github fa-lg\"></i>\n    </p>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/big-announcement.html","<div class=\"jumbotron\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\"><img class=\"auto-margin img-rounded\" style=\"margin-bottom: 5px\" src=\"images/logo-principal-trans.png\" ></img></div>\n    <div class=\"col-md-8\">\n      <div class=\"home-description\">\n        <p class=\"text-justify\"><strong>Plásticos Reforzados GABRES</strong>, es una empresa dedicada a la fabricación de productos en poliester reforzado con fibras de vidrio, especializada en Depósitos para almacenamiento de líquidos y  para tratamiento de Aguas.</p>\n        <p class=\"text-justify\">También realizamos trabajos de revestimiento e impermeabilización y piezas para las industrias náutica,  autopartes y de la construcción.</p>\n        <a class=\"btn btn-primary\" style=\"margin-bottom: 5px\" href=\"#!/products\">¡Conoce nuestros productos!</a>\n        <a class=\"btn btn-info\" style=\"margin-bottom: 5px\" href=\"#!/contact\">¡Contáctanos!</a>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/company-footer.html","<a class=\"navbar-text pull-left small-device\" href=\"#!/contact\">\n  <i class=\"fa fa-info-circle fa-lg\"></i>\n</a>\n<div class=\"navbar-text pull-left big-device\">\n  <a href=\"#!/contact\">\n    <i class=\"fa fa-info-circle fa-lg\"></i>\n  </a>\n  {{company.name}}\n  <a href=\"tel:{{company.phone}}\"><i class=\"fa fa-phone\"></i> {{company.phoneForShowing}}</a>\n  <a href=\"mailto:{{company.emailAddress}}\"><i class=\"fa fa-envelope\"></i> {{company.emailAddress}}</a>\n</div>\n");
$templateCache.put("assets/partials/contact-form.html","<div class=\"form-horizontal\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Contáctanos</h4>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"contact-name\" class=\"col-lg-2 control-label\">Nombre</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"contact-name\" placeholder=\"Nombre Completo\"></input>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-email\" class=\"col-lg-2 control-label\">Email</label>\n      <div class=\"col-lg-10\">\n        <input type=\"email\" class=\"form-control\" id=\"contact-email\" placeholder=\"my@email.address\"></input>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-message\" class=\"col-lg-2 control-label\">Consulta</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" id=\"contact-message\" rows=\"8\" placeholder=\"Mi consulta es...\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancelar</button>\n    <button class=\"btn btn-primary\" type=\"submit\">Enviar</button>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/contact.html","<div class=\"row\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3><i class=\"fa fa-info-circle fa-lg\"></i> Información de Contacto</h3>\n    </div>\n    <div class=\"panel-body\">\n      <h5><i class=\"fa fa-map-marker\"></i> Fábrica</h5>\n      <div class=\"container\">\n        <p>{{company.physicalAddress.street}}</p>\n        <p>{{company.physicalAddress.city}}</p>\n      </div>\n      <h5><i class=\"fa fa-inbox\"></i> Dirección Postal</h5>\n      <div class=\"container\">\n        <p>{{company.postalAddress.street}}</p>\n        <p>{{company.postalAddress.city}}</p>\n      </div>\n      <h5><i class=\"fa fa-phone\"></i> Teléfono</h5>\n      <div class=\"container\">\n	<p><a href=\"tel:{{company.phone}}\">{{company.phoneForShowing}}</a></p>\n      </div>\n      <h5><i class=\"fa fa-envelope\"></i> Email </h5>\n      <div class=\"container\">\n        <p><a href=\"mailto:{{company.emailAddress}}\">{{company.emailAddress}}</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/header-bar.html","<div class=\"nav navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <a href=\"#!/\">\n      <img class=\"navbar-logo\" style=\"vertical-align: middle;\" src=\"images/logo-g.png\"\n        height=\"30px\" width=\"36px\" ></img>\n    </a>\n    <a href=\"#!/\" class=\"navbar-brand big-device-brand\">{{company.name}}</a>\n    <menu-bar></menu-bar>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/links.html","<div id=\"e10\" class=\"cc118\">\r\n	<a href=\"http://www.redesperalta.es/\" target=\"_blank\">\r\n	<div><font size=\"4\">Redes Peralta</font></div></a>\r\n</div>\r\n<div id=\"e9\" class=\"cc118\">\r\n	<a href=\"http://www.higienetodo.com/\" target=\"_blank\">\r\n	<div><font size=\"4\">Higienetodo</font></div></a>\r\n</div>\r\n<div id=\"e8\" class=\"cc118\">\r\n	<a href=\"http://www.saniagua.com/\" target=\"_blank\">\r\n	<div><font size=\"4\">Saniagua</font></div></a>\r\n</div>\r\n<div id=\"e7\" class=\"cc118\">\r\n	<a href=\"http://www.commetal2009.com/\" target=\"_blank\">\r\n	<div><font size=\"4\">Commetal</font></div></a>\r\n</div>\r<div id=\"e15\" class=\"cc118\">\r	<a href=\"http://www.arandafontaneros.com/\" target=\"_blank\">\r	<div><font size=\"4\">Aranda fontaneros</font></div></a>\r</div>\r");
$templateCache.put("assets/partials/map.html","<div>\n  <div id=\"map\" class=\"img-rounded map\"></div>\n</div>\n");
$templateCache.put("assets/partials/menu-bar.html","<button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\" ng-init=\"isCollapsed = true\" ng-click=\"isCollapsed = !isCollapsed\">\n  <span class=\"icon-bar\"></span>\n  <span class=\"icon-bar\"></span>\n  <span class=\"icon-bar\"></span>\n</button>\n<div class=\"collapse navbar-collapse navHeaderCollapse\" collapse=\"isCollapsed\">\n  <ul class=\"nav navbar-nav navbar-right nav-pills\">\n    <li ng-repeat=\"item in menu.items\" ng-class=\"{ active: menu.isActive(item.path) }\" dropdown>\n      <a ng-show=\"menu.shouldShowSubitems(item)\" href=\"{{menu.pathFor(item)}}\"\n        target=\"{{menu.targetFor(item)}}\" class=\"dropdown-toggle\">\n          {{item.name}} <span class=\"caret\"></span></a>\n      <ul ng-show=\"menu.shouldShowSubitems(item)\" class=\"dropdown-menu\" >\n        <li ng-repeat=\"subitem in item.subitems\">\n          <a href=\"{{menu.pathFor(subitem)}}\" target=\"{{menu.targetFor(item)}}\">{{subitem.name}}</a>\n        </li>\n      </ul>\n      <a ng-hide=\"menu.shouldShowSubitems(item)\" href=\"{{menu.pathFor(item)}}\"\n        target=\"{{menu.targetFor(item)}}\">{{item.name}}</a>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("assets/partials/product-item.html","<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{product.name}}\n    <i ng-show=\"product.isMountable\" class=\"text-info fa fa-exclamation-circle\" popover=\"¡También se montan en obra!\" popover-trigger=\"mouseenter\"></i>\n  </h4>\n</div>\n<div class=\"modal-body\">\n  <p>{{product.description}}</p>\n  <div class=\"image-gallery\">\n    <carousel interval=\"5000\">\n      <slide ng-repeat=\"image in product.images\" active=\"image.active\">\n        <img class=\"img-rounded\" ng-src=\"{{image.url}}\" style=\"margin:auto;\">\n      </slide>\n    </carousel>\n  </div>\n  <h5 ng-show=\"product.characteristics\">Características</h5>\n  <ul>\n    <li ng-repeat=\"characteristic in product.characteristics\">\n      {{characteristic}}\n    </li>\n  </ul>\n  <h5 ng-show=\"product.accessories\">Accesorios incluídos</h5>\n  <ul>\n    <li ng-repeat=\"accessory in product.accessories\">\n      {{accessory}}\n    </li>\n  </ul>\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" ng-click=\"cancel()\">Cerrar</button>\n</div>\n");
$templateCache.put("assets/partials/product-items.html","<div>\n    <span ng-repeat=\"product in productCtrl.products\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <product-item></product-item>\n        </div>\n      </div>\n    </span>\n</div>\n");
$templateCache.put("assets/partials/product-line.html","<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><i class=\"fa fa-check-square-o\"></i> {{line.name}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"text-center\" ng-class=\"{ \'col-md-8\': lineCtrl.hasProducts(line) }\">\n      <p class=\"text-justify\">{{line.description}}</p>\n      <content template=\"{{line.content}}\"></content>\n      <div style=\"margin-bottom: 10px;\">\n        <carousel interval=\"5000\">\n          <slide ng-repeat=\"image in line.images\" active=\"image.active\">\n            <img class=\"img-rounded\" ng-src=\"{{image.url}}\" style=\"min-height: 300px; max-height: 300px; margin:0 auto;\">\n          </slide>\n        </carousel>\n      </div>\n    </div>\n    <div class=\"text-center\" ng-class=\"{ \'col-md-4\': lineCtrl.hasProducts(line) }\">\n      <div class=\"list-group\">\n        <a class=\"list-group-item\" ng-repeat=\"product in line.products\" ng-click=\"lineCtrl.open(product)\">\n	  <span class=\"pull-right\"><i class=\"fa fa-hand-o-up text-primary\" ></i></span>\n          <h5 class=\"list-group-item-heading\">{{product.name}}</h5>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/products.html","<div class=\"row\" scroll-spy>\n  <div class=\"col-md-3 list-group\">\n    <div id=\"sidebar\" class=\"affix product-lines\">\n      <a spy=\"{{line.id}}\" class=\"list-group-item\" ng-repeat=\"line in lineCtrl.allLines()\" >\n	<span class=\"pull-right\"><i class=\"fa fa-hand-o-up text-primary\" ></i></span>\n        <h5 class=\"list-group-item-heading\">{{line.name}}</h5>\n      </a>\n      <a class=\"btn btn-info btn-catalog-download\" href=\"images/gabres-catalogo-productos.pdf\"\n      target=\"_blank\">Descargar catálogo PDF</a>\n    </div>\n  </div>\n  <div class=\"col-md-9\">\n    <product-line id=\"{{line.id}}\" ng-repeat=\"line in lineCtrl.allLines()\"></product-line>\n  </div>\n</div>\n");
$templateCache.put("assets/partials/services.html","<a href=\"http://prgabres.com/instalaci%F3n%20dc%20y%20dr%20para%20superficie.pdf\" target=\"_blank\">\n  <div><font size=\"4\">Instalación Depósitos para superficie</font></div>\n</a>\n<a href=\"http://prgabres.com/instalaci%F3n%20de-00%20tapa%20plana.pdf\" target=\"_blank\">\n  <div><font size=\"4\">Instalación Depósitos verticales para enterrar </font></div>\n  <div><font size=\"4\">Tapa plana</font></div>\n</a>\n<a href=\"instalaci%F3n%20de-00%20tapa%20curva.pdf\" target=\"_blank\">\n	<div><font size=\"4\">Instalación Depósitos verticales para enterrar</font></div>\n	<div><font size=\"4\">Tapa curva</font></div>\n</a>\n<a href=\"instalaci%F3n%20dh.pdf\" target=\"_blank\">\n	<div><font size=\"4\">Instalación Depósitos&nbsp;horizontales</font><font size=\"4\">&nbsp;para enterrar</font></div>\n</a>\n<div><font size=\"4\">Instalaciones de equipos de tratamiento de aguas, consultar telefónicamente o por correo electrónico</font></div>\n<a href=\"http://prgabres.com/garant%EDa.pdf\" target=\"_blank\"><div><font size=\"4\">Garantías</font></div></a>\n\nHacemos reparaciones de todo tipo de productos de poliester y fibras de vidrio.\n");
$templateCache.put("template/accordion/accordion-group.html","<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{\'text-muted\': isDisabled}\">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n	  <div class=\"panel-body\" ng-transclude></div>\n  </div>\n</div>\n");
$templateCache.put("template/accordion/accordion.html","<div class=\"panel-group\" ng-transclude></div>\n");
$templateCache.put("template/carousel/carousel.html","<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n        <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n    </ol>\n    <div class=\"carousel-inner\" ng-transclude></div>\n    <a class=\"left carousel-control-1\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n    <a class=\"right carousel-control-1\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n</div>\n");
$templateCache.put("template/carousel/slide.html","<div ng-class=\"{\n    \'active\': leaving || (active &amp;&amp; !entering),\n    \'prev\': (next || active) &amp;&amp; direction==\'prev\',\n    \'next\': (next || active) &amp;&amp; direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }\" class=\"item text-center\" ng-transclude></div>\n");
$templateCache.put("template/modal/backdrop.html","<div class=\"modal-backdrop fade {{ backdropClass }}\"\n     ng-class=\"{in: animate}\"\n     ng-style=\"{\'z-index\': 1040 + (index && 1 || 0) + index*10}\"\n></div>\n");
$templateCache.put("template/modal/window.html","<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{\'z-index\': 1050 + index*10, display: \'block\'}\" ng-click=\"close($event)\">\n    <div class=\"modal-dialog\" ng-class=\"{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}\"><div class=\"modal-content\" ng-transclude></div></div>\n</div>\n");
$templateCache.put("template/popover/popover.html","<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n  <!-- ULTRAHACK - The template for the pop overs cannot be found, so we are adding them here :) - 05/07/14 -->\n  <div class=\"arrow\"></div>\n\n  <div class=\"popover-inner\">\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n      <div class=\"popover-content\" ng-bind=\"content\"></div>\n  </div>\n</div>\n");}]);