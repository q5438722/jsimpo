  var raccoon; // Detector
  var hamster; // SAT
  var chinchilla; // Pair
  var ibex; // Bounds
  
  raccoon = {
    
  };
  module.exports = raccoon;
  hamster = require("./SAT");
  chinchilla = require("./Pair");
  ibex = require("../geometry/Bounds");
  (function () {
    raccoon.collisions = function (boar, llama) {
      var capybara; // o
      var mink; // i
      var prairie_dog; // t
      var mantis; // s
      var dogfish; // a
      var snail; // n
      var dunlin; // l
      var termite; // u
      var squid; // c
      var rook; // p
      var woodcock; // d
      var antelope; // v
      var goose; // f
      var baboon; // g
      
          {
        capybara = [];
        mink = llama.pairs.table;
      }
      prairie_dog = llama.metrics;
      {
        mantis = 0;
        for (; mantis < boar.length; mantis++)
        {
          {
            dogfish = boar[mantis][0];
            snail = boar[mantis][1];
          }
          if ((dogfish.isStatic || dogfish.isSleeping) && (snail.isStatic || snail.isSleeping))
            continue;
          if (! raccoon.canCollide(dogfish.collisionFilter, snail.collisionFilter))
            continue;
          prairie_dog.midphaseTests += 1;
          if (ibex.overlaps(dogfish.bounds, snail.bounds))
          {
            dunlin = dogfish.parts.length > 1 ? 1 : 0;
            for (; dunlin < dogfish.parts.length; dunlin++)
            {
              termite = dogfish.parts[dunlin];
              {
                squid = snail.parts.length > 1 ? 1 : 0;
                for (; squid < snail.parts.length; squid++)
                {
                  rook = snail.parts[squid];
                  if (termite === dogfish && rook === snail || ibex.overlaps(termite.bounds, rook.bounds))
                  {
                    {
                      woodcock = chinchilla.id(termite, rook);
                      antelope = mink[woodcock];
                    }
                    if (antelope && antelope.isActive)
                    {
                      goose = antelope.collision;
                    }
                    else
                    {
                      goose = null;
                    }
                    baboon = hamster.collides(termite, rook, goose);
                    prairie_dog.narrowphaseTests += 1;
                    if (baboon.reused)
                      prairie_dog.narrowReuseCount += 1;
                    if (baboon.collided)
                    {
                      capybara.push(baboon);
                      prairie_dog.narrowDetections += 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return capybara;
    };
    raccoon.canCollide = function (bat, bison) {
      if (bat.group === bison.group && bat.group !== 0)
        return bat.group > 0;
      return (bat.mask & bison.category) !== 0 && (bison.mask & bat.category) !== 0;
    };
  })();
  