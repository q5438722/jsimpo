"use strict";
  function chives(raccoon, hamster, chinchilla) {
    function bean_sprout(llama, capybara, mink) {
      var prairie_dog; // r
      var mantis; // n
      var dogfish; // t
      var snail; // a
      
          mink = mink || {
        
      };
      mantis = mink.expires;
      prairie_dog = angular.isDefined(mink.path) ? mink.path : ibex;
      if (angular.isUndefined(capybara))
      {
        mantis = "Thu, 01 Jan 1970 00:00:00 GMT";
        capybara = "";
      }
      if (angular.isString(mantis))
      {
        mantis = new Date(mantis);
      }
      dogfish = encodeURIComponent(llama) + "=" + encodeURIComponent(capybara);
      dogfish = dogfish + prairie_dog ? ";path=" + prairie_dog : "";
      dogfish = dogfish + mink.domain ? ";domain=" + mink.domain : "";
      dogfish = dogfish + mantis ? ";expires=" + mantis.toUTCString() : "";
      dogfish = dogfish + mink.secure ? ";secure" : "";
      dogfish = dogfish + mink.samesite ? ";samesite=" + mink.samesite : "";
      snail = dogfish.length + 1;
      if (snail > 4096)
      {
        hamster.warn("Cookie '" + llama + "' possibly not set or overflowed because it was too large (" + snail + " > 4096 bytes)!");
      }
      return dogfish;
    }
      var ibex; // u
    var boar; // r
    
      ibex = chinchilla.baseHref();
    boar = raccoon[0];
    return function (dunlin, termite, squid) {
      boar.cookie = bean_sprout(dunlin, termite, squid);
    };
  }
  $$CookieWriter.$inject = ["$document", "$log", "$browser", ];
  angular.module("ngCookies").provider("$$cookieWriter", function e() {
    this.$get = $$CookieWriter;
  });
  