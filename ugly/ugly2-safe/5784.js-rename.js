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
    return chinchilla(function e() {
      var capybara; // r
      var mink; // n
      var prairie_dog; // l
      var mantis; // t
      
          capybara = hamster[llama];
      mink = capybara.length;
      prairie_dog = broccoflower(arguments);
      try {
        {
          mantis = 0;
          for (; mantis < mink; mantis++)
          {
            capybara[mantis].apply(null, prairie_dog);
          }
        }
      }
      finally {
        if (capybara.length > mink)
        {
          capybara.splice(0, mink);
          process.nextTick(function () {
            e.apply(null, prairie_dog);
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
    var snail; // r
    var dunlin; // n
    var termite; // l
    
      snail = dogfish.length;
    dunlin = [];
    {
      termite = 0;
      for (; termite < snail; termite++)
        dunlin[termite] = dogfish[termite];
    }
    return dunlin;
  }
  var raccoon; // wrappy
  var hamster; // reqs
  var chinchilla; // once
  
  raccoon = require("wrappy");
  hamster = Object.create(null);
  chinchilla = require("once");
  module.exports = raccoon(inflight);
  