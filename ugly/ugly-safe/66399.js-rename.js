  function chives(hamster) {
    var chinchilla; // e
    
      chinchilla = [];
    hamster.replace(new RegExp("[a-fA-F0-9]{2}", "g"), function (ibex) {
      chinchilla.push(parseInt(ibex, 16));
    });
    return chinchilla;
  }
  function bean_sprout(boar) {
    var llama; // e
    var capybara; // t
    
      boar = unescape(encodeURIComponent(boar));
    llama = new Array(boar.length);
    {
      capybara = 0;
      for (; capybara < boar.length; capybara++)
      {
        llama[capybara] = boar.charCodeAt(capybara);
      }
    }
    return llama;
  }
  var raccoon; // bytesToUuid
  
  raccoon = require("./bytesToUuid");
  module.exports = function (mink, prairie_dog, mantis) {
    var dogfish; // e
    
      dogfish = function (snail, dunlin, termite, squid) {
      var rook; // n
      var woodcock; // o
      var antelope; // u
      
          rook = termite && squid || 0;
      if (typeof snail == "string")
        snail = bean_sprout(snail);
      if (typeof dunlin == "string")
        dunlin = chives(dunlin);
      if (! Array.isArray(snail))
        throw TypeError("value must be an array of bytes");
      if (! Array.isArray(dunlin) || dunlin.length !== 16)
        throw TypeError("namespace must be uuid string or an Array of 16 byte values");
      woodcock = mantis(dunlin.concat(snail));
      woodcock[6] = woodcock[6] & 15 | prairie_dog;
      woodcock[8] = woodcock[8] & 63 | 128;
      if (termite)
      {
        antelope = 0;
        for (; antelope < 16; ++ antelope)
        {
          termite[rook + antelope] = woodcock[antelope];
        }
      }
      return termite || raccoon(woodcock);
    };
    try {
      dogfish.name = mink;
    }
    catch (r) {
      
    }
    dogfish.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    dogfish.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    return dogfish;
  };
  