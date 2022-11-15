  var raccoon; // SafeRange
  var hamster; // CountAllMatching
  
  raccoon = require('./SafeRange');
  hamster = function (chinchilla, ibex, boar, llama, capybara) {
    var mink; // total
    var prairie_dog; // i
    var mantis; // child
    
      if (llama === undefined)
    {
      llama = + [];
    }
    if (capybara === undefined)
    {
      capybara = chinchilla.length;
    }
    mink = + [];
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
  