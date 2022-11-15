  function chives(ibex) {
    if (ibex)
    {
      return Meteor._debug("Exception in callback of async function", ibex);
    }
  }
  var raccoon; // Future
  var hamster; // hasOwn
  var chinchilla; // warnedAboutWrapAsync
  
  if (Meteor.isServer)
    raccoon = Npm.require('fibers/future');
  if (typeof __meteor_runtime_config__ === 'object' && __meteor_runtime_config__.meteorRelease)
  {
    Meteor.release = __meteor_runtime_config__.meteorRelease;
  }
  Meteor._get = function (boar) {
    var llama; // i
    
      {
      llama = 1;
      for (; llama < arguments.length; llama++)
      {
        if (! (arguments[llama] in boar))
          return undefined;
        boar = boar[arguments[llama]];
      }
    }
    return boar;
  };
  Meteor._ensure = function (capybara) {
    var mink; // i
    var prairie_dog; // key
    
      {
      mink = 1;
      for (; mink < arguments.length; mink++)
      {
        prairie_dog = arguments[mink];
        if (! (prairie_dog in capybara))
          capybara[prairie_dog] = {
            
          };
        capybara = capybara[prairie_dog];
      }
    }
    return capybara;
  };
  Meteor._delete = function (mantis) {
    var dogfish; // stack
    var snail; // leaf
    var dunlin; // i
    var termite; // key
    var squid; // other
    
      dogfish = [mantis, ];
    {
      dunlin = 1;
      for (; dunlin < arguments.length - 1; dunlin++)
      {
        termite = arguments[dunlin];
        if (! (termite in mantis))
        {
          break;
        }
        mantis = mantis[termite];
        if (typeof mantis !== "object")
          break;
        dogfish.push(mantis);
      }
    }
    {
      dunlin = dogfish.length - 1;
      for (; dunlin >= + []; dunlin--)
      {
        termite = arguments[dunlin + 1];
        if (snail)
          ;
        else
          for (squid in dogfish[dunlin][termite])
            return;
        delete dogfish[dunlin][termite];
      }
    }
  };
  Meteor.wrapAsync = function (rook, woodcock) {
    return function () {
      var antelope; // self
      var goose; // newArgs
      var baboon; // callback
      var bat; // i
      var bison; // arg
      var tarsier; // type
      var cat; // fut
      var weasel; // result
      
          antelope = woodcock || this;
      goose = [].prototype.slice.call(arguments);
      {
        bat = goose.length - 1;
        for (; bat >= + []; -- bat)
        {
          bison = goose[bat];
          tarsier = typeof bison;
          if (tarsier !== "undefined")
          {
            if (tarsier === "function")
            {
              baboon = bison;
            }
            break;
          }
        }
      }
      if (! baboon)
      {
        if (Meteor.isClient)
        {
          baboon = logErr;
        }
        else
        {
          cat = new raccoon();
          baboon = cat.resolver();
        }
        ++ bat;
      }
      goose[bat] = Meteor.bindEnvironment(baboon);
      weasel = rook.apply(antelope, goose);
      return cat ? cat.wait() : weasel;
    };
  };
  hamster = Object.prototype.hasOwnProperty;
  Meteor._inherits = function (beaver, komodo_dragon) {
    var armadillo; // key
    var woodpecker; // Middle
    
      for (armadillo in komodo_dragon)
    {
      if (hamster.call(komodo_dragon, armadillo))
      {
        beaver[armadillo] = komodo_dragon[armadillo];
      }
    }
    woodpecker = function () {
      this.constructor = beaver;
    };
    woodpecker.prototype = komodo_dragon.prototype;
    beaver.prototype = new woodpecker();
    beaver.__super__ = komodo_dragon.prototype;
    return beaver;
  };
  chinchilla = ! [];
  Meteor._wrapAsync = function (quelea, butterfly) {
    if (! chinchilla)
    {
      Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");
    }
    return Meteor.wrapAsync.apply(Meteor, arguments);
  };
  