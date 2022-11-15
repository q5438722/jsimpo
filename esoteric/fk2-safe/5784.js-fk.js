  function chives(ibex, boar) {
    if (hamster[ibex])
    {
      hamster[ibex].push(boar);
      return null;
    }
    else
    {
      hamster[ibex] = [boar, ];
      return bean_sprout(ibex);
    }
  }
  function bean_sprout(llama) {
    return chinchilla(function RES() {
      var capybara; // cbs
      var mink; // len
      var prairie_dog; // args
      var mantis; // i
      
          capybara = hamster[llama];
      mink = capybara.length;
      prairie_dog = broccoflower(arguments);
      try {
        {
          mantis = + [];
          for (; mantis < mink; mantis++)
          {
            capybara[mantis].apply(null, prairie_dog);
          }
        }
      }
      finally {
        if (capybara.length > mink)
        {
          capybara.splice(+ [], mink);
          process.nextTick(function () {
            RES.apply(null, prairie_dog);
          });
        }
        else
        {
          delete hamster[llama];
        }
      }
    });
  }
  function broccoflower(dogfish) {
    var snail; // length
    var dunlin; // array
    var termite; // i
    
      snail = dogfish.length;
    dunlin = [];
    {
      termite = + [];
      for (; termite < snail; termite++)
        dunlin[termite] = dogfish[termite];
    }
    return dunlin;
  }
  var raccoon; // wrappy
  var hamster; // reqs
  var chinchilla; // once
  
  raccoon = require('wrappy');
  hamster = Object.create(null);
  chinchilla = require('once');
  module.exports = raccoon(inflight);
  