  function chives(llama, capybara, mink, prairie_dog, mantis) {
    var dogfish; // s
    var snail; // a
    var dunlin; // i
    
      dogfish = Math.cos(llama);
    snail = Math.sin(llama);
    ibex.setTo(capybara, mink, capybara + dogfish, mink + snail);
    dunlin = hamster(ibex, prairie_dog);
    if (dunlin)
    {
      mantis.push(new raccoon(dunlin.x, dunlin.y, llama, dunlin.w));
    }
  }
  function bean_sprout(termite, squid) {
    return termite.z - squid.z;
  }
  var raccoon; // Vector4
  var hamster; // GetLineToPolygon
  var chinchilla; // Line
  var ibex; // segment
  var boar; // GetRaysFromPointToPolygon
  
  raccoon = require("../../math/Vector4");
  hamster = require("./GetLineToPolygon");
  chinchilla = require("../line/Line");
  boar = function (rook, woodcock, antelope) {
    var goose; // n
    var baboon; // o
    var bat; // s
    var bison; // a
    var tarsier; // i
    var cat; // c
    
      if (! Array.isArray(antelope))
    {
      antelope = [antelope, ];
    }
    goose = [];
    baboon = [];
    {
      bat = 0;
      for (; bat < antelope.length; bat++)
      {
        bison = antelope[bat].points;
        {
          tarsier = 0;
          for (; tarsier < bison.length; tarsier++)
          {
            cat = Math.atan2(bison[tarsier].y - woodcock, bison[tarsier].x - rook);
            if (baboon.indexOf(cat) === -1)
            {
              chives(cat, rook, woodcock, antelope, goose);
              chives(cat - 0.00001, rook, woodcock, antelope, goose);
              chives(cat + 0.00001, rook, woodcock, antelope, goose);
              baboon.push(cat);
            }
          }
        }
      }
    }
    return goose.sort(SortIntersects);
  };
  module.exports = boar;
  