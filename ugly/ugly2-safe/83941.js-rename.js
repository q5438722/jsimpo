"use strict";
  (function (hare, hedgehog) {
    "object" === typeof exports && "undefined" !== typeof module ? hedgehog(exports) : "function" === typeof define && define.amd ? define(["exports", ], hedgehog) : (hare = hare || self, hedgehog(hare.React = {
      
    }));
  })(this, function (raccoon) {
    function chives(gaur) {
      var locust; // t
      var magpie; // n
      
          {
        {
          locust = "https://reactjs.org/docs/error-decoder.html?invariant=" + gaur;
          magpie = 1;
        }
        for (; magpie < arguments.length; magpie++)
          locust += "&args[]=" + encodeURIComponent(arguments[magpie]);
      }
      return "Minified React error #" + gaur + "; visit " + locust + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function bean_sprout(snake, hummingbird, sheep) {
      this.props = snake;
      this.context = hummingbird;
      this.refs = z;
      this.updater = sheep || B;
    }
    function broccoflower() {
      
    }
    function green_bean(goldfinch, swan, oryx) {
      this.props = goldfinch;
      this.context = swan;
      this.refs = z;
      this.updater = oryx || B;
    }
    function amaranth(turtle, cormorant, cattle) {
      var tiger; // r
      var lion; // o
      var frog; // u
      var skunk; // l
      var lemur; // i
      var goat; // a
      var wolf; // c
      
          {
        lion = {
          
        };
        frog = null;
        skunk = null;
      }
      if (null != cormorant)
        for (tiger in void 0 !== cormorant.ref && (skunk = cormorant.ref), 
        void 0 !== cormorant.key && (frog = "" + cormorant.key), 
        cormorant)
          antelope.call(cormorant, tiger) && ! goose.hasOwnProperty(tiger) && (lion[tiger] = cormorant[tiger]);
      lemur = arguments.length - 2;
      if (1 === lemur)
        lion.children = cattle;
      else
        if (1 < lemur)
        {
          {
            goat = Array(lemur);
            wolf = 0;
          }
          for (; wolf < lemur; wolf++)
            goat[wolf] = arguments[wolf + 2];
          lion.children = goat;
        }
      if (turtle && turtle.defaultProps)
        for (tiger in lemur = turtle.defaultProps, lemur)
          void 0 === lion[tiger] && (lion[tiger] = lemur[tiger]);
      return {
        $$typeof : chinchilla,
        type : turtle,
        key : frog,
        ref : skunk,
        props : lion,
        _owner : woodcock.current
      };
    }
    function nopale(gnat, quail) {
      return {
        $$typeof : chinchilla,
        type : gnat.type,
        key : quail,
        ref : gnat.ref,
        props : gnat.props,
        _owner : gnat._owner
      };
    }
    function kohlrabi(porpoise) {
      return "object" === typeof porpoise && null !== porpoise && porpoise.$$typeof === chinchilla;
    }
    function tubers(chamois) {
      var otter; // t
      
          otter = {
        "=" : "=0",
        ":" : "=2"
      };
      return "$" + ("" + chamois).replace(new RegExp("[=:]", "g"), function (sand_dollar) {
        return otter[sand_dollar];
      });
    }
    function lima_bean(jaguar, dugong, water_buffalo, sea_urchin) {
      var grouse; // o
      
          if (J.length)
      {
        grouse = J.pop();
        grouse.result = jaguar;
        grouse.keyPrefix = dugong;
        grouse.func = water_buffalo;
        grouse.context = sea_urchin;
        grouse.count = 0;
        return grouse;
      }
      return {
        result : jaguar,
        keyPrefix : dugong,
        func : water_buffalo,
        context : sea_urchin,
        count : 0
      };
    }
    function white_radish(sandpiper) {
      sandpiper.result = null;
      sandpiper.keyPrefix = null;
      sandpiper.func = null;
      sandpiper.context = null;
      sandpiper.count = 0;
      10 > J.length && J.push(sandpiper);
    }
    function basil(mule, goldfish, caribou, raven) {
      var ram; // o
      var salmon; // u
      var cheetah; // l
      var viper; // i
      
          ram = typeof mule;
      if ("undefined" === ram || "boolean" === ram)
        mule = null;
      salmon = false;
      if (null === mule)
        salmon = true;
      else
        switch (ram) {
          case "string":
            

          case "number":
            salmon = true;
            break;

          case "object":
            switch (mule.$$typeof) {
              case chinchilla:
                

              case O:
                salmon = true;

              
            }

          
        }
      if (salmon)
        return broccoflower(raven, mule, "" === goldfish ? "." + daikon(mule, 0) : goldfish), 
        1;
      salmon = 0;
      goldfish = "" === goldfish ? "." : goldfish + ":";
      if (Array.isArray(mule))
      {
        cheetah = 0;
        for (; cheetah < mule.length; cheetah++)
        {
          ram = mule[cheetah];
          viper = goldfish + daikon(ram, cheetah);
          salmon += basil(ram, viper, caribou, raven);
        }
      }
      else
        if (null === mule || "object" !== typeof mule ? viper = null : (viper = L && mule[L] || mule["@@iterator"], viper = "function" === typeof viper ? viper : null), 
        "function" === typeof viper)
          for (mule = viper.call(mule), cheetah = 0; ! (ram = mule.next()).done; )
            ram = ram.value, viper = goldfish + daikon(ram, cheetah++), 
            salmon += basil(ram, viper, caribou, raven);
        else
          if ("object" === ram)
            throw caribou = "" + mule, Error(chives(31, "[object Object]" === caribou ? "object with keys {" + Object.keys(mule).join(", ") + "}" : caribou, 
            ""));
      return salmon;
    }
    function spaghetti_squash(pheasant, pony, hawk) {
      return null == pheasant ? 0 : basil(pheasant, "", pony, hawk);
    }
    function daikon(spoonbill, swallow) {
      return "object" === typeof spoonbill && null !== spoonbill && null != spoonbill.key ? tubers(spoonbill.key) : swallow.toString(36);
    }
    function azuki_bean(octopus, newt, caterpillar) {
      octopus.func.call(octopus.context, newt, octopus.count++);
    }
    function shallot(kingfisher, nightingale, wombat) {
      var crane; // r
      var chough; // o
      
          {
        crane = kingfisher.result;
        chough = kingfisher.keyPrefix;
      }
      kingfisher = kingfisher.func.call(kingfisher.context, nightingale, kingfisher.count++);
      Array.isArray(kingfisher) ? courgette(kingfisher, crane, wombat, function (goshawk) {
        return goshawk;
      }) : null != kingfisher && (kohlrabi(kingfisher) && (kingfisher = nopale(kingfisher, chough + (! kingfisher.key || nightingale && nightingale.key === kingfisher.key ? "" : ("" + kingfisher.key).replace(G, "$&/") + "/") + wombat)), 
      crane.push(kingfisher));
    }
    function courgette(monkey, horse, okapi, worm, hornet) {
      var quetzal; // u
      
          quetzal = "";
      null != okapi && (quetzal = ("" + okapi).replace(G, "$&/") + "/");
      horse = lima_bean(horse, quetzal, worm, hornet);
      spaghetti_squash(monkey, b, horse);
      white_radish(horse);
    }
    function pumpkin() {
      var seahorse; // e
      
          seahorse = baboon.current;
      if (null === seahorse)
        throw Error(chives(321));
      return seahorse;
    }
    function parsnip(chicken, mallard) {
      var aardvark; // n
      var albatross; // r
      var cobra; // o
      
          chicken.push(mallard);
      e : for (; ; )
      {
        {
          albatross = aardvark - 1 >>> 1;
          cobra = chicken[albatross];
        }
        if (void 0 !== cobra && 0 < borlotti_bean(cobra, mallard))
          chicken[albatross] = mallard, chicken[aardvark] = cobra, 
          ;
        else
          break e;
      }
    }
    function navy_bean(walrus) {
      walrus = walrus[0];
      return void 0 === walrus ? null : walrus;
    }
    function skirret(pelican) {
      var mosquito; // t
      var trout; // n
      var whale; // r
      var cassowary; // o
      var guinea_fowl; // u
      var mouse; // l
      var wolverine; // i
      var koala; // a
      
          mosquito = pelican[0];
      if (void 0 !== mosquito)
      {
        trout = pelican.pop();
        if (trout !== mosquito)
        {
          pelican[0] = trout;
          {
            {
              cassowary = pelican.length;
            }
            e : for (; whale < cassowary; )
            {
              {
                guinea_fowl = 2 * (whale + 1) - 1;
                mouse = pelican[guinea_fowl];
                wolverine = guinea_fowl + 1;
                koala = pelican[wolverine];
              }
              if (void 0 !== mouse && 0 > borlotti_bean(mouse, trout))
                void 0 !== koala && 0 > borlotti_bean(koala, mouse) ? (pelican[whale] = koala, pelican[wolverine] = trout, ) : (pelican[whale] = mouse, pelican[guinea_fowl] = trout, 
                );
              else
                if (void 0 !== koala && 0 > borlotti_bean(koala, trout))
                  pelican[whale] = koala, pelican[wolverine] = trout, ;
                else
                  break e;
            }
          }
        }
        return mosquito;
      }
      return null;
    }
    function borlotti_bean(giant_panda, mongoose) {
      var mandrill; // n
      
          mandrill = giant_panda.sortIndex - mongoose.sortIndex;
      return 0 !== mandrill ? mandrill : giant_panda.id - mongoose.id;
    }
    function anise(moose) {
      var sea_lion; // t
      
          {
        sea_lion = navy_bean(human);
        for (; null !== sea_lion; )
        {
          if (null === sea_lion.callback)
            skirret(human);
          else
            if (sea_lion.startTime <= moose)
              skirret(human), sea_lion.sortIndex = sea_lion.expirationTime, 
              parsnip(kookabura, sea_lion);
            else
              break;
          sea_lion = navy_bean(human);
        }
      }
    }
    function mangetout(leopard) {
      var gerbil; // t
      
          echidna = false;
      anise(leopard);
      if (! kouprey)
        if (null !== navy_bean(kookabura))
          beaver(x);
        else
        {
          gerbil = navy_bean(human);
          null !== gerbil && komodo_dragon(S, gerbil.startTime - leopard);
        }
    }
    function broad_beans(dog, vicuña) {
      var kangaroo; // r
      var shark; // o
      var wallaby; // u
      var crow; // l
      
          echidna && (armadillo());
      dinosaur = true;
      try {
        anise(vicuña);
        for (; null !== elk && (! (elk.expirationTime > vicuña) || dog && ! woodpecker()); )
        {
          kangaroo = elk.callback;
          if (null !== kangaroo)
          {
            elk.callback = null;
            shark = green_bean(elk.expirationTime <= vicuña);
            vicuña = weasel();
            "function" === typeof shark ? elk.callback = shark : elk === navy_bean(kookabura) && skirret(kookabura);
            anise(vicuña);
          }
          else
            skirret(kookabura);
        }
        if (null !== elk)
          wallaby = true;
        else
        {
          crow = navy_bean(human);
          null !== crow && komodo_dragon(S, crow.startTime - vicuña);
          wallaby = false;
        }
        return wallaby;
      }
      finally {
        dinosaur = false;
      }
    }
    function topinambur(eagle) {
      switch (eagle) {
        case 1:
          return -1;

        case 2:
          return 250;

        case 5:
          return 1073741823;

        case 4:
          return 10000;

        default:
          return 5000;
        
      }
    }
      var hamster; // P
    var chinchilla; // C
    var ibex; // T
    var boar; // E
    var llama; // R
    var capybara; // $
    var mink; // I
    var prairie_dog; // A
    var mantis; // M
    var dogfish; // F
    var snail; // q
    var dunlin; // D
    var termite; // U
    var squid; // N
    var rook; // V
    var woodcock; // H
    var antelope; // W
    var goose; // Y
    var baboon; // K
    var bat; // Q
    var bison; // Z
    var tarsier; // ee
    var cat; // te
    var weasel; // ne
    var beaver; // re
    var komodo_dragon; // oe
    var armadillo; // ue
    var woodpecker; // le
    var quelea; // ie
    var butterfly; // ae
    var oyster; // ce
    var stingray; // fe
    var dragonfly; // se
    var finch; // de
    var meerkat; // me
    var alligator; // he
    var kookabura; // _e
    var human; // we
    var reindeer; // ge
    var elk; // ke
    var ape; // Se
    var dinosaur; // xe
    var kouprey; // je
    var echidna; // Pe
    var owl; // Ce
    
      {
      hamster = "function" === typeof Symbol && Symbol.for;
      chinchilla = hamster ? Symbol.for("react.element") : 60103;
      ibex = hamster ? Symbol.for("react.fragment") : 60107;
      boar = hamster ? Symbol.for("react.strict_mode") : 60108;
      llama = hamster ? Symbol.for("react.profiler") : 60114;
      capybara = hamster ? Symbol.for("react.provider") : 60109;
      mink = hamster ? Symbol.for("react.context") : 60110;
      prairie_dog = hamster ? Symbol.for("react.forward_ref") : 60112;
      mantis = hamster ? Symbol.for("react.suspense") : 60113;
      dogfish = hamster ? Symbol.for("react.memo") : 60115;
      snail = hamster ? Symbol.for("react.lazy") : 60116;
      dunlin = Object.getOwnPropertySymbols;
      termite = Object.prototype.hasOwnProperty;
      squid = Object.prototype.propertyIsEnumerable;
      rook = function () {
        var rail; // e
        var marten; // t
        var jay; // n
        
              try {
          if (! Object.assign)
            return false;
          rail = new String("abc");
          rail[5] = "de";
          if ("5" === Object.getOwnPropertyNames(rail)[0])
            return false;
          marten = {
            
          };
          for (rail = 0; 10 > rail; rail++)
            marten["_" + String.fromCharCode(rail)] = rail;
          if ("0123456789" !== Object.getOwnPropertyNames(marten).map(function (eland) {
            return marten[eland];
          }).join(""))
            return false;
          jay = {
            
          };
          "abcdefghijklmnopqrst".split("").forEach(function (panther) {
            jay[panther] = panther;
          });
          return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({
            
          }, jay)).join("") ? false : true;
        }
        catch (e) {
          return false;
        }
      }() ? Object.assign : function (opossum, shrew) {
        var duck; // n
        var cod; // r
        var crab; // o
        var bee; // u
        var wasp; // l
        var stork; // i
        
              if (null === opossum || void 0 === opossum)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        duck = Object(opossum);
        {
          crab = 1;
          for (; crab < arguments.length; crab++)
          {
            bee = Object(arguments[crab]);
            for (wasp in bee)
              termite.call(bee, wasp) && (duck[wasp] = bee[wasp]);
            if (dunlin)
            {
              cod = dunlin(bee);
              {
                stork = 0;
                for (; stork < cod.length; stork++)
                  squid.call(bee, cod[stork]) && (duck[cod[stork]] = bee[cod[stork]]);
              }
            }
          }
        }
        return duck;
      };
    }
    t.prototype.isReactComponent = {
      
    };
    t.prototype.setState = function (eel, lapwing) {
      if ("object" !== typeof eel && "function" !== typeof eel && null != eel)
        throw Error(chives(85));
      this.updater.enqueueSetState(this, eel, lapwing, "setState");
    };
    t.prototype.forceUpdate = function (guinea_pig) {
      this.updater.enqueueForceUpdate(this, guinea_pig, "forceUpdate");
    };
    n.prototype = t.prototype;
    hamster = r.prototype = new n;
    hamster.constructor = r;
    rook(hamster, t.prototype);
    hamster.isPureReactComponent = true;
    {
      woodcock = {
        current : null
      };
      antelope = Object.prototype.hasOwnProperty;
      goose = {
        key : true,
        ref : true,
        __self : true,
        __source : true
      };
      baboon = {
        current : null
      };
    }
    if ("undefined" === typeof window || "function" !== typeof MessageChannel)
    {
      {
        bison = null;
        tarsier = function () {
          
        };
        cat = Date.now();
      }
      weasel = function () {
        return Date.now() - cat;
      };
      beaver = function (ibis) {
        false ? setTimeout(beaver, 0, ibis) : (setTimeout(tarsier, 0));
      };
      komodo_dragon = function (camel, lyrebird) {
        bison = setTimeout(camel, lyrebird);
      };
      armadillo = function () {
        clearTimeout(bison);
      };
      woodpecker = function () {
        return false;
      };
      hamster = bat = function () {
        
      };
    }
    else
    {
      {
        quelea = window.performance;
        butterfly = window.Date;
        oyster = window.setTimeout;
        stingray = window.clearTimeout;
      }
      "undefined" !== typeof console && (hamster = window.cancelAnimationFrame, "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), 
      "function" !== typeof hamster && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
      if ("object" === typeof quelea && "function" === typeof quelea.now)
        weasel = function () {
          return quelea.now();
        };
      else
      {
        dragonfly = butterfly.now();
        weasel = function () {
          return butterfly.now() - dragonfly;
        };
      }
      {
        finch = -1;
      }
      woodpecker = function () {
        return weasel() >= 0;
      };
      hamster = function () {
        
      };
      bat = function (donkey) {
        0 > donkey || 125 < donkey ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : ;
      };
      {
        meerkat = new MessageChannel;
        alligator = meerkat.port2;
      }
      meerkat.port1.onmessage = function () {
        
      };
      beaver = function (clam) {
        (alligator.postMessage(null));
      };
      komodo_dragon = function (grasshopper, gnu) {
        finch = oyster(function () {
          grasshopper(weasel());
        }, 
        gnu);
      };
      armadillo = function () {
        stingray(finch);
      };
    }
    {
      kookabura = [];
      human = [];
      reindeer = 1;
      elk = null;
      ape = 3;
      dinosaur = false;
      kouprey = false;
      echidna = false;
      owl = 0;
    }
    meerkat = {
      ReactCurrentDispatcher : baboon,
      ReactCurrentOwner : woodcock,
      IsSomeRendererActing : {
        current : false
      },
      assign : rook
    };
    rook(meerkat, {
      Scheduler : {
        __proto__ : null,
        unstable_ImmediatePriority : 1,
        unstable_UserBlockingPriority : 2,
        unstable_NormalPriority : 3,
        unstable_IdlePriority : 5,
        unstable_LowPriority : 4,
        unstable_runWithPriority : function (mole, penguin) {
          switch (mole) {
            case 1:
              

            case 2:
              

            case 3:
              

            case 4:
              

            case 5:
              break;

            default:
              
            
          }
          try {
            return bean_sprout();
          }
          finally {
            ;
          }
        },
        unstable_next : function (elephant) {
          switch (ape) {
            case 1:
              

            case 2:
              

            case 3:
              break;

            default:
              
            
          }
          try {
            return elephant();
          }
          finally {
            ;
          }
        },
        unstable_scheduleCallback : function (dove, badger, guanaco) {
          var pig; // r
          var deer; // o
          
                  pig = weasel();
          if ("object" === typeof guanaco && null !== guanaco)
          {
            deer = guanaco.delay;
            deer = "number" === typeof deer && 0 < deer ? pig + deer : pig;
            guanaco = "number" === typeof guanaco.timeout ? guanaco.timeout : topinambur(dove);
          }
          else
            guanaco = topinambur(dove), deer = pig;
          guanaco = deer + guanaco;
          dove = {
            id : reindeer++,
            callback : badger,
            priorityLevel : dove,
            startTime : deer,
            expirationTime : guanaco,
            sortIndex : -1
          };
          deer > pig ? (dove.sortIndex = deer, parsnip(human, dove), null === navy_bean(kookabura) && dove === navy_bean(human) && (echidna ? armadillo() : , komodo_dragon(S, deer - pig))) : (dove.sortIndex = guanaco, parsnip(kookabura, dove), kouprey || dinosaur || (beaver(x)));
          return dove;
        },
        unstable_cancelCallback : function (gazelle) {
          gazelle.callback = null;
        },
        unstable_wrapCallback : function (giraffe) {
          return function () {
            try {
              return giraffe.apply(this, arguments);
            }
            finally {
              ;
            }
          };
        },
        unstable_getCurrentPriorityLevel : function () {
          return ape;
        },
        unstable_shouldYield : function () {
          var rat; // e
          var starling; // t
          
                  rat = weasel();
          anise(rat);
          starling = navy_bean(kookabura);
          return starling !== elk && null !== elk && null !== starling && null !== starling.callback && starling.startTime <= rat && starling.expirationTime < elk.expirationTime || woodpecker();
        },
        unstable_requestPaint : hamster,
        unstable_continueExecution : function () {
          kouprey || dinosaur || (beaver(x));
        },
        unstable_pauseExecution : function () {
          
        },
        unstable_getFirstCallbackNode : function () {
          return navy_bean(kookabura);
        },
        get unstable_now()
        {
          return weasel;
        },
        get unstable_forceFrameRate()
        {
          return bat;
        },
        unstable_Profiling : null
      },
      SchedulerTracing : {
        __proto__ : null,
        __interactionsRef : null,
        __subscriberRef : null,
        unstable_clear : function (emu) {
          return emu();
        },
        unstable_getCurrent : function () {
          return null;
        },
        unstable_getThreadID : function () {
          return ++ owl;
        },
        unstable_trace : function (bear, kudu, fish) {
          return broccoflower();
        },
        unstable_wrap : function (tapir) {
          return tapir;
        },
        unstable_subscribe : function (jellyfish) {
          
        },
        unstable_unsubscribe : function (loris) {
          
        }
      }
    });
    raccoon.Children = {
      map : function (coyote, stinkbug, toad) {
        var chimpanzee; // r
        
              if (null == coyote)
          return coyote;
        chimpanzee = [];
        courgette(coyote, chimpanzee, null, stinkbug, toad);
        return chimpanzee;
      },
      forEach : function (louse, turkey, hyena) {
        if (null == louse)
          return louse;
        turkey = lima_bean(null, null, turkey, hyena);
        spaghetti_squash(louse, d, turkey);
        white_radish(turkey);
      },
      count : function (sparrow) {
        return spaghetti_squash(sparrow, function () {
          return null;
        }, 
        null);
      },
      toArray : function (hippopotamus) {
        var cockroach; // t
        
              cockroach = [];
        courgette(hippopotamus, cockroach, null, function (scorpion) {
          return scorpion;
        });
        return cockroach;
      },
      only : function (squirrel) {
        if (! kohlrabi(squirrel))
          throw Error(chives(143));
        return squirrel;
      }
    };
    raccoon.Component = t;
    raccoon.Fragment = ibex;
    raccoon.Profiler = llama;
    raccoon.PureComponent = r;
    raccoon.StrictMode = boar;
    raccoon.Suspense = mantis;
    raccoon.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = meerkat;
    raccoon.cloneElement = function (yak, gorilla, anteater) {
      var ant; // r
      var spider; // o
      var parrot; // u
      var fox; // l
      var elephant_seal; // i
      var dotterel; // a
      var rhinoceros; // c
      
          if (null === yak || void 0 === yak)
        throw Error(chives(267, yak));
      {
        ant = rook({
          
        }, yak.props);
        spider = yak.key;
        parrot = yak.ref;
        fox = yak._owner;
      }
      if (null != gorilla)
      {
        void 0 !== gorilla.ref && (parrot = gorilla.ref, fox = woodcock.current);
        void 0 !== gorilla.key && (spider = "" + gorilla.key);
        if (yak.type && yak.type.defaultProps)
          elephant_seal = yak.type.defaultProps;
        for (dotterel in gorilla)
          antelope.call(gorilla, dotterel) && ! goose.hasOwnProperty(dotterel) && (ant[dotterel] = void 0 === gorilla[dotterel] && void 0 !== elephant_seal ? elephant_seal[dotterel] : gorilla[dotterel]);
      }
      dotterel = arguments.length - 2;
      if (1 === dotterel)
        ant.children = anteater;
      else
        if (1 < dotterel)
        {
          elephant_seal = Array(dotterel);
          {
            rhinoceros = 0;
            for (; rhinoceros < dotterel; rhinoceros++)
              elephant_seal[rhinoceros] = arguments[rhinoceros + 2];
          }
          ant.children = elephant_seal;
        }
      return {
        $$typeof : chinchilla,
        type : yak.type,
        key : spider,
        ref : parrot,
        props : ant,
        _owner : fox
      };
    };
    raccoon.createContext = function (falcon, pigeon) {
      void 0 === pigeon && ;
      falcon = {
        $$typeof : mink,
        _calculateChangedBits : null,
        _currentValue : falcon,
        _currentValue2 : falcon,
        _threadCount : 0,
        Provider : null,
        Consumer : null
      };
      falcon.Provider = {
        $$typeof : capybara,
        _context : falcon
      };
      return falcon.Consumer = falcon;
    };
    raccoon.createElement = o;
    raccoon.createFactory = function (flamingo) {
      var jackal; // t
      
          jackal = o.bind(null, flamingo);
      jackal.type = flamingo;
      return jackal;
    };
    raccoon.createRef = function () {
      return {
        current : null
      };
    };
    raccoon.forwardRef = function (fly) {
      return {
        $$typeof : prairie_dog,
        render : fly
      };
    };
    raccoon.isValidElement = l;
    raccoon.lazy = function (vulture) {
      return {
        $$typeof : snail,
        _ctor : vulture,
        _status : -1,
        _result : null
      };
    };
    raccoon.memo = function (lobster, buffalo) {
      return {
        $$typeof : dogfish,
        type : lobster,
        compare : void 0 === buffalo ? null : buffalo
      };
    };
    raccoon.useCallback = function (peafowl, narwhal) {
      return pumpkin().useCallback(peafowl, narwhal);
    };
    raccoon.useContext = function (ferret, ox) {
      return pumpkin().useContext(ferret, ox);
    };
    raccoon.useDebugValue = function (polar_bear, crocodile) {
      
    };
    raccoon.useEffect = function (curlew, sardine) {
      return pumpkin().useEffect(curlew, sardine);
    };
    raccoon.useImperativeHandle = function (herring, red_panda, rabbit) {
      return pumpkin().useImperativeHandle(herring, red_panda, rabbit);
    };
    raccoon.useLayoutEffect = function (zebra, dolphin) {
      return pumpkin().useLayoutEffect(zebra, dolphin);
    };
    raccoon.useMemo = function (salamander, gull) {
      return pumpkin().useMemo(salamander, gull);
    };
    raccoon.useReducer = function (alpaca, ostrich, manatee) {
      return pumpkin().useReducer(alpaca, ostrich, manatee);
    };
    raccoon.useRef = function (red_deer) {
      return pumpkin().useRef(red_deer);
    };
    raccoon.useState = function (barracuda) {
      return pumpkin().useState(barracuda);
    };
    raccoon.version = "16.13.1";
  });
  