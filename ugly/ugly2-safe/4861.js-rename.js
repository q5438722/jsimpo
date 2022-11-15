  function chives(boar) {
    var llama; // r
    var capybara; // n
    var mink; // t
    var prairie_dog; // o
    var mantis; // a
    var dogfish; // s
    
      llama = boar.split(" ");
    capybara = llama.length > 1 ? llama[0] : "=";
    mink = (llama.length > 1 ? llama[1] : llama[0]).split(".");
    {
      prairie_dog = 0;
      for (; prairie_dog < 3; ++ prairie_dog)
      {
        mantis = Number(raccoon[prairie_dog] || 0);
        dogfish = Number(mink[prairie_dog] || 0);
        if (mantis === dogfish)
        {
          continue;
        }
        if (capybara === "<")
        {
          return mantis < dogfish;
        }
        else
          if (capybara === ">=")
          {
            return mantis >= dogfish;
          }
          else
          {
            return false;
          }
      }
    }
    return capybara === ">=";
  }
  function bean_sprout(snail) {
    var dunlin; // r
    var termite; // n
    
      dunlin = snail.split(new RegExp(" ?&& ?", ""));
    if (dunlin.length === 0)
    {
      return false;
    }
    {
      termite = 0;
      for (; termite < dunlin.length; ++ termite)
      {
        if (! chives(dunlin[termite]))
        {
          return false;
        }
      }
    }
    return true;
  }
  function broccoflower(squid) {
    var rook; // r
    
      if (typeof squid === "boolean")
    {
      return squid;
    }
    if (squid && typeof squid === "object")
    {
      rook = 0;
      for (; rook < squid.length; ++ rook)
      {
        if (bean_sprout(squid[rook]))
        {
          return true;
        }
      }
      return false;
    }
    return bean_sprout(squid);
  }
  var raccoon; // current
  var hamster; // data
  var chinchilla; // core
  var ibex; // mod
  
  hamster = require("./core.json");
  chinchilla = {
    
  };
  for (ibex in hamster)
  {
    if (Object.prototype.hasOwnProperty.call(hamster, ibex))
    {
      chinchilla[ibex] = broccoflower(hamster[ibex]);
    }
  }
  module.exports = chinchilla;
  