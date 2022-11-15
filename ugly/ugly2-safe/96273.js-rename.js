  exports.arrayToObject = function (raccoon) {
    var hamster; // e
    var chinchilla; // t
    var ibex; // n
    
      hamster = {
      
    };
    {
      {
        chinchilla = 0;
        ibex = raccoon.length;
      }
      for (; chinchilla < ibex; ++ chinchilla)
      {
        if (typeof raccoon[chinchilla] !== "undefined")
        {
          hamster[chinchilla] = raccoon[chinchilla];
        }
      }
    }
    return hamster;
  };
  exports.merge = function (boar, llama) {
    var capybara; // t
    var mink; // n
    var prairie_dog; // o
    var mantis; // f
    var dogfish; // u
    
      if (! llama)
    {
      return boar;
    }
    if (typeof llama !== "object")
    {
      if (Array.isArray(boar))
      {
        boar.push(llama);
      }
      else
      {
        boar[llama] = true;
      }
      return boar;
    }
    if (typeof boar !== "object")
    {
      boar = [boar, ].concat(llama);
      return boar;
    }
    if (Array.isArray(boar) && ! Array.isArray(llama))
    {
      boar = exports.arrayToObject(boar);
    }
    capybara = Object.keys(llama);
    {
      {
        mink = 0;
        prairie_dog = capybara.length;
      }
      for (; mink < prairie_dog; ++ mink)
      {
        mantis = capybara[mink];
        dogfish = llama[mantis];
        if (! boar[mantis])
        {
          boar[mantis] = dogfish;
        }
        else
        {
          boar[mantis] = exports.merge(boar[mantis], dogfish);
        }
      }
    }
    return boar;
  };
  exports.decode = function (snail) {
    try {
      return decodeURIComponent(snail.replace(new RegExp("\\+", "g"), " "));
    }
    catch (r) {
      return snail;
    }
  };
  exports.compact = function (dunlin, termite) {
    var squid; // t
    var rook; // n
    var woodcock; // o
    var antelope; // f
    var goose; // u
    var baboon; // c
    
      if (typeof dunlin !== "object" || dunlin === null)
    {
      return dunlin;
    }
    termite = termite || [];
    squid = termite.indexOf(dunlin);
    if (squid !== -1)
    {
      return termite[squid];
    }
    termite.push(dunlin);
    if (Array.isArray(dunlin))
    {
      rook = [];
      {
        {
          woodcock = 0;
          antelope = dunlin.length;
        }
        for (; woodcock < antelope; ++ woodcock)
        {
          if (typeof dunlin[woodcock] !== "undefined")
          {
            rook.push(dunlin[woodcock]);
          }
        }
      }
      return rook;
    }
    goose = Object.keys(dunlin);
    for (woodcock = 0, antelope = goose.length; woodcock < antelope; ++ woodcock)
    {
      baboon = goose[woodcock];
      dunlin[baboon] = exports.compact(dunlin[baboon], termite);
    }
    return dunlin;
  };
  exports.isRegExp = function (bat) {
    return Object.prototype.toString.call(bat) === "[object RegExp]";
  };
  exports.isBuffer = function (bison) {
    if (bison === null || typeof bison === "undefined")
    {
      return false;
    }
    return ! ! (bison.constructor && bison.constructor.isBuffer && bison.constructor.isBuffer(bison));
  };
  