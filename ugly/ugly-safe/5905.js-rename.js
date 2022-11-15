  (function (hamster) {
    hamster(function () {
    "use strict";
      function chives(llama) {
        return llama;
      }
      function bean_sprout(capybara) {
        var mink; // r
        var prairie_dog; // e
        var mantis; // t
        var dogfish; // i
        
              prairie_dog = [];
        {
          {
            mantis = 0;
            dogfish = capybara.length;
          }
          for (; mantis < dogfish; mantis++)
          {
            mink = capybara[mantis].inverse;
            if (typeof mink == "function")
              prairie_dog.push(mink);
          }
        }
        if (prairie_dog.length > 0 && prairie_dog.length !== capybara.length)
        {
          throw new Error("Either all or none of the supplied transforms must provide an inverse");
        }
        return prairie_dog;
      }
          var chinchilla; // i
      var ibex; // o
      var boar; // f
      
          chinchilla = Array.prototype.concat;
      ibex = Array.prototype.slice;
      l.inverse = l;
      l.inverse.inverse = l;
      return function (snail) {
        var dunlin; // r
        var termite; // t
        var squid; // e
        
              if (arguments.length == 0)
          return l;
        termite = chinchilla.apply([], ibex.call(arguments));
        dunlin = function () {
          var rook; // n
          var woodcock; // r
          var antelope; // e
          
                  rook = ibex.call(arguments);
          {
            {
              woodcock = 0;
              antelope = termite.length;
            }
            for (; woodcock < antelope; woodcock++)
            {
              rook[0] = termite[woodcock].apply(boar, rook);
            }
          }
          return rook[0];
        };
        squid = bean_sprout(termite);
        if (squid.length)
        {
          dunlin.inverse = function () {
            var goose; // n
            var baboon; // r
            
                      goose = ibex.call(arguments);
            {
              baboon = squid.length - 1;
              for (; baboon >= 0; -- baboon)
              {
                goose[0] = squid[baboon].apply(boar, goose);
              }
            }
            return goose[0];
          };
          dunlin.inverse.inverse = dunlin;
        }
        return dunlin;
      };
    });
  })(typeof define == "function" ? define : function (raccoon) {
    module.exports = raccoon();
  });
  