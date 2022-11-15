"use strict";
const ngCloakDirective = ngDirective({ compile: function (e, i) {
    i.$set("ngCloak", undefined);e.removeClass("ng-cloak");
  } });
