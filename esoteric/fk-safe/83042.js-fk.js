"use strict";
  var raccoon; // ngCloakDirective
  
  raccoon = ngDirective({
    compile : function (hamster, chinchilla) {
      chinchilla.$set('ngCloak', undefined);
      hamster.removeClass('ng-cloak');
    }
  });
  