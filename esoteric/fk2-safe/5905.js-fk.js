  (function (hamster) {
    hamster(function () {
    "use strict";
      function chives(llama) {
        return llama;
      }
      function bean_sprout(capybara) {
        var mink; // inverse
        var prairie_dog; // inverses
        var mantis; // i
        var dogfish; // len
        
              prairie_dog = [];
        {
          {
            mantis = + [];
            dogfish = capybara.length;
          }
          for (; mantis < dogfish; mantis++)
          {
            mink = capybara[mantis].inverse;
            if (typeof mink == 'function')
              prairie_dog.push(mink);
          }
        }
        if (prairie_dog.length > + [] && prairie_dog.length !== capybara.length)
        {
          throw new Error("Either all or none of the supplied transforms must provide an inverse");
        }
        return prairie_dog;
      }
          var chinchilla; // concat
      var ibex; // slice
      var boar; // undef
      
          chinchilla = [].prototype.concat;
      ibex = [].prototype.slice;
      identity.inverse = identity;
      identity.inverse.inverse = identity;
      return function (snail) {
        var dunlin; // composed
        var termite; // txList
        var squid; // inverses
        
              if (arguments.length == + [])
          return identity;
        termite = chinchilla.apply([], ibex.call(arguments));
        dunlin = function () {
          var rook; // args
          var woodcock; // i
          var antelope; // len
          
                  rook = ibex.call(arguments);
          {
            {
              woodcock = + [];
              antelope = termite.length;
            }
            for (; woodcock < antelope; woodcock++)
            {
              rook[+ []] = termite[woodcock].apply(boar, rook);
            }
          }
          return rook[+ []];
        };
        squid = bean_sprout(termite);
        if (squid.length)
        {
          dunlin.inverse = function () {
            var goose; // args
            var baboon; // i
            
                      goose = ibex.call(arguments);
            {
              baboon = squid.length - 1;
              for (; baboon >= + []; -- baboon)
              {
                goose[+ []] = squid[baboon].apply(boar, goose);
              }
            }
            return goose[+ []];
          };
          dunlin.inverse.inverse = dunlin;
        }
        return dunlin;
      };
    });
  }(typeof define == 'function' ? define : function (raccoon) {
    module.exports = raccoon();
  }));
  