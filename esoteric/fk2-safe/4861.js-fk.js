  function chives(boar) {
    var llama; // parts
    var capybara; // op
    var mink; // versionParts
    var prairie_dog; // i
    var mantis; // cur
    var dogfish; // ver
    
      llama = boar.split(' ');
    capybara = llama.length > 1 ? llama[+ []] : '=';
    mink = (llama.length > 1 ? llama[1] : llama[+ []]).split('.');
    {
      prairie_dog = + [];
      for (; prairie_dog < 3; ++ prairie_dog)
      {
        mantis = Number(raccoon[prairie_dog] || + []);
        dogfish = Number(mink[prairie_dog] || + []);
        if (mantis === dogfish)
        {
          continue;
        }
        if (capybara === '<')
        {
          return mantis < dogfish;
        }
        else
          if (capybara === '>=')
          {
            return mantis >= dogfish;
          }
          else
          {
            return ! [];
          }
      }
    }
    return capybara === '>=';
  }
  function bean_sprout(snail) {
    var dunlin; // specifiers
    var termite; // i
    
      dunlin = snail.split(new RegExp(" ?&& ?", ""));
    if (dunlin.length === + [])
    {
      return ! [];
    }
    {
      termite = + [];
      for (; termite < dunlin.length; ++ termite)
      {
        if (! chives(dunlin[termite]))
        {
          return ! [];
        }
      }
    }
    return ! ! [];
  }
  function broccoflower(squid) {
    var rook; // i
    
      if (typeof squid === 'boolean')
    {
      return squid;
    }
    if (squid && typeof squid === 'object')
    {
      rook = + [];
      for (; rook < squid.length; ++ rook)
      {
        if (bean_sprout(squid[rook]))
        {
          return ! ! [];
        }
      }
      return ! [];
    }
    return bean_sprout(squid);
  }
  var raccoon; // current
  var hamster; // data
  var chinchilla; // core
  var ibex; // mod
  
  hamster = require('./core.json');
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
  