  (function (raccoon) {
  "use strict";
    function chives(hamster, chinchilla, ibex, boar) {
      var llama; // i
      var capybara; // o
      var mink; // a
      var prairie_dog; // p
      
          if (chinchilla.flatdata === true)
      {
        llama = chinchilla.start || 0;
        capybara = typeof chinchilla.step === "number" ? chinchilla.step : 1;
        boar.pointsize = 2;
        {
          {
            mink = 0;
            prairie_dog = 0;
          }
          for (; mink < ibex.length; mink++, prairie_dog += 2)
          {
            boar.points[prairie_dog] = llama + mink * capybara;
            boar.points[prairie_dog + 1] = ibex[mink];
          }
        }
        if (boar.points !== undefined)
        {
          boar.points.length = ibex.length * 2;
        }
        else
        {
          boar.points = [];
        }
      }
    }
      raccoon.plot.plugins.push({
      init : function (mantis) {
        mantis.hooks.processRawData.push(n);
      },
      name : "flatdata",
      version : "0.0.2"
    });
  })(jQuery);
  