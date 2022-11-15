  var raccoon; // Detector
  var hamster; // SAT
  var chinchilla; // Pair
  var ibex; // Bounds
  
  raccoon = {
    
  };
  module.exports = raccoon;
  hamster = require('./SAT');
  chinchilla = require('./Pair');
  ibex = require('../geometry/Bounds');
  (function () {
    raccoon.collisions = function (boar, llama) {
      var capybara; // collisions
      var mink; // pairsTable
      var prairie_dog; // metrics
      var mantis; // i
      var dogfish; // bodyA
      var snail; // bodyB
      var dunlin; // j
      var termite; // partA
      var squid; // k
      var rook; // partB
      var woodcock; // pairId
      var antelope; // pair
      var goose; // previousCollision
      var baboon; // collision
      
          {
        capybara = [];
        mink = llama.pairs.table;
      }
      prairie_dog = llama.metrics;
      {
        mantis = + [];
        for (; mantis < boar.length; mantis++)
        {
          {
            dogfish = boar[mantis][+ []];
            snail = boar[mantis][1];
          }
          if ((dogfish.isStatic || dogfish.isSleeping) && (snail.isStatic || snail.isSleeping))
            continue;
          if (! raccoon.canCollide(dogfish.collisionFilter, snail.collisionFilter))
            continue;
          prairie_dog.midphaseTests += 1;
          if (ibex.overlaps(dogfish.bounds, snail.bounds))
          {
            dunlin = dogfish.parts.length > 1 ? 1 : + [];
            for (; dunlin < dogfish.parts.length; dunlin++)
            {
              termite = dogfish.parts[dunlin];
              {
                squid = snail.parts.length > 1 ? 1 : + [];
                for (; squid < snail.parts.length; squid++)
                {
                  rook = snail.parts[squid];
                  if ((termite === dogfish && rook === snail) || ibex.overlaps(termite.bounds, rook.bounds))
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
      if (bat.group === bison.group && bat.group !== + [])
        return bat.group > + [];
      return (bat.mask & bison.category) !== + [] && (bison.mask & bat.category) !== + [];
    };
  })();
  