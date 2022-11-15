'use strict';
var ngCloakDirective = ngDirective({
  compile : function(elem, attr) {
    attr.$set("ngCloak", undefined);
    elem.removeClass("ng-cloak");
  }
});

