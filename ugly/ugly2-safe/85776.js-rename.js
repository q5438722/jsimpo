  var raccoon; // SafeRange
  var hamster; // CountAllMatching
  
  raccoon = require("./SafeRange");
  hamster = function (chinchilla, ibex, boar, llama, capybara) {
    var mink; // i
    var prairie_dog; // t
    var mantis; // u
    
      if (llama === undefined)
    {
      llama = 0;
    }
    if (capybara === undefined)
    {
      capybara = chinchilla.length;
    }
    mink = 0;
    if (raccoon(chinchilla, llama, capybara))
    {
      prairie_dog = llama;
      for (; prairie_dog < capybara; prairie_dog++)
      {
        mantis = chinchilla[prairie_dog];
        if (mantis[ibex] === boar)
        {
          mink++;
        }
      }
    }
    return mink;
  };
  module.exports = hamster;
  