  function chives(chinchilla) {
    if (chinchilla)
    {
      return Meteor._debug("Exception in callback of async function", chinchilla);
    }
  }
  var raccoon; // Future
  var hamster; // hasOwn
  
  if (Meteor.isServer)
    raccoon = Npm.require("fibers/future");
  if (typeof __meteor_runtime_config__ === "object" && __meteor_runtime_config__.meteorRelease)
  {
    Meteor.release = __meteor_runtime_config__.meteorRelease;
  }
  Meteor._get = function (ibex) {
    var boar; // r
    
      {
      boar = 1;
      for (; boar < arguments.length; boar++)
      {
        if (! (arguments[boar] in ibex))
          return undefined;
        ibex = ibex[arguments[boar]];
      }
    }
    return ibex;
  };
  Meteor._ensure = function (llama) {
    var capybara; // r
    var mink; // t
    
      {
      capybara = 1;
      for (; capybara < arguments.length; capybara++)
      {
        mink = arguments[capybara];
        if (! (mink in llama))
          llama[mink] = {
            
          };
        llama = llama[mink];
      }
    }
    return llama;
  };
  Meteor._delete = function (prairie_dog) {
    var mantis; // r
    var dogfish; // t
    var snail; // n
    var dunlin; // o
    var termite; // a
    
      mantis = [prairie_dog, ];
    {
      snail = 1;
      for (; snail < arguments.length - 1; snail++)
      {
        dunlin = arguments[snail];
        if (! (dunlin in prairie_dog))
        {
          break;
        }
        prairie_dog = prairie_dog[dunlin];
        if (typeof prairie_dog !== "object")
          break;
        mantis.push(prairie_dog);
      }
    }
    {
      snail = mantis.length - 1;
      for (; snail >= 0; snail--)
      {
        dunlin = arguments[snail + 1];
        if (dogfish)
          ;
        else
          for (termite in mantis[snail][dunlin])
            return;
        delete mantis[snail][dunlin];
      }
    }
  };
  Meteor.wrapAsync = function (squid, rook) {
    return function () {
      var woodcock; // e
      var antelope; // r
      var goose; // t
      var baboon; // n
      var bat; // o
      var bison; // a
      var tarsier; // i
      var cat; // f
      
          woodcock = rook || this;
      antelope = Array.prototype.slice.call(arguments);
      {
        baboon = antelope.length - 1;
        for (; baboon >= 0; -- baboon)
        {
          bat = antelope[baboon];
          bison = typeof bat;
          if (bison !== "undefined")
          {
            if (bison === "function")
            {
              goose = bat;
            }
            break;
          }
        }
      }
      if (! goose)
      {
        if (Meteor.isClient)
        {
          goose = logErr;
        }
        else
        {
          tarsier = new raccoon;
          goose = tarsier.resolver();
        }
        ++ baboon;
      }
      antelope[baboon] = Meteor.bindEnvironment(goose);
      cat = squid.apply(woodcock, antelope);
      return tarsier ? tarsier.wait() : cat;
    };
  };
  hamster = Object.prototype.hasOwnProperty;
  Meteor._inherits = function (weasel, beaver) {
    var komodo_dragon; // t
    var armadillo; // n
    
      for (komodo_dragon in beaver)
    {
      if (hamster.call(beaver, komodo_dragon))
      {
        weasel[komodo_dragon] = beaver[komodo_dragon];
      }
    }
    armadillo = function () {
      this.constructor = weasel;
    };
    armadillo.prototype = beaver.prototype;
    weasel.prototype = new armadillo;
    weasel.__super__ = beaver.prototype;
    return weasel;
  };
  Meteor._wrapAsync = function (woodpecker, quelea) {
    Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");
    return Meteor.wrapAsync.apply(Meteor, arguments);
  };
  