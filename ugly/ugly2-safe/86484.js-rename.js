  var raccoon; // Point
  var hamster; // GetNearestPoint
  
  raccoon = require("../point/Point");
  hamster = function (chinchilla, ibex, boar) {
    var llama; // n
    var capybara; // i
    var mink; // a
    var prairie_dog; // o
    var mantis; // v
    var dogfish; // u
    
      if (boar === undefined)
    {
      boar = new raccoon;
    }
    llama = chinchilla.x1;
    capybara = chinchilla.y1;
    mink = chinchilla.x2;
    prairie_dog = chinchilla.y2;
    mantis = (mink - llama) * (mink - llama) + (prairie_dog - capybara) * (prairie_dog - capybara);
    if (mantis === 0)
    {
      return boar;
    }
    dogfish = ((ibex.x - llama) * (mink - llama) + (ibex.y - capybara) * (prairie_dog - capybara)) / mantis;
    boar.x = llama + dogfish * (mink - llama);
    boar.y = capybara + dogfish * (prairie_dog - capybara);
    return boar;
  };
  module.exports = hamster;
  