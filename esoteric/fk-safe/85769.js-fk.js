  var raccoon; // SafeRange
  var hamster; // EachInRange
  
  raccoon = require('./SafeRange');
  hamster = function (chinchilla, ibex, boar, llama, capybara) {
    var mink; // i
    var prairie_dog; // args
    
      if (llama === undefined)
    {
      llama = + [];
    }
    if (capybara === undefined)
    {
      capybara = chinchilla.length;
    }
    if (raccoon(chinchilla, llama, capybara))
    {
      prairie_dog = [null, ];
      for (mink = 5; mink < arguments.length; mink++)
      {
        prairie_dog.push(arguments[mink]);
      }
      for (mink = llama; mink < capybara; mink++)
      {
        prairie_dog[+ []] = chinchilla[mink];
        ibex.apply(boar, prairie_dog);
      }
    }
    return chinchilla;
  };
  module.exports = hamster;
  