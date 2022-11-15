"use strict";
  function chives(goose, baboon, bat, bison, tarsier, cat, weasel, beaver) {
    var komodo_dragon; // u
    var armadillo; // c
    
      if (! goose)
    {
      goose = void 0;
      if (void 0 === baboon)
        goose = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else
      {
        {
          komodo_dragon = [bat, bison, tarsier, cat, weasel, beaver, ];
          armadillo = 0;
        }
        goose = Error(baboon.replace(new RegExp("%s", "g"), function () {
          return komodo_dragon[armadillo++];
        }));
        goose.name = "Invariant Violation";
      }
      goose.framesToPop = 1;
      throw goose;
    }
  }
  function bean_sprout(woodpecker) {
    var quelea; // t
    var butterfly; // n
    var oyster; // r
    
      {
      {
        quelea = arguments.length - 1;
        butterfly = "https://reactjs.org/docs/error-decoder.html?invariant=" + woodpecker;
        oyster = 0;
      }
      for (; oyster < quelea; oyster++)
        butterfly += "&args[]=" + encodeURIComponent(arguments[oyster + 1]);
    }
    chives(false, "Minified React error #" + woodpecker + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", 
    butterfly);
  }
  function broccoflower(stingray) {
    var dragonfly; // t
    var finch; // n
    
      {
      dragonfly = stingray._dispatchListeners;
      finch = stingray._dispatchInstances;
    }
    Array.isArray(dragonfly) ? bean_sprout("103") : void 0;
    stingray.currentTarget = dragonfly ? boar(finch) : null;
    dragonfly = dragonfly ? green_bean(stingray) : null;
    stingray.currentTarget = null;
    stingray._dispatchListeners = null;
    stingray._dispatchInstances = null;
    return dragonfly;
  }
  function green_bean(meerkat) {
    do
    {
      meerkat = meerkat.return;
    }while (meerkat && 5 !== meerkat.tag);
    return meerkat ? meerkat : null;
  }
  function amaranth(alligator, kookabura, human) {
    var reindeer; // o
    
      {
      reindeer = [];
      for (; alligator; )
        reindeer.push(alligator), alligator = green_bean(alligator);
    }
    for (alligator = reindeer.length; 0 < alligator--; )
      kookabura(reindeer[alligator], "captured", human);
    for (alligator = 0; alligator < reindeer.length; alligator++)
      kookabura(reindeer[alligator], "bubbled", human);
  }
  function nopale(elk, ape) {
    null == ape ? bean_sprout("30") : void 0;
    if (null == elk)
      return ape;
    if (Array.isArray(elk))
    {
      if (Array.isArray(ape))
        return elk.push.apply(elk, ape), elk;
      elk.push(ape);
      return elk;
    }
    return Array.isArray(ape) ? [elk, ].concat(ape) : [elk, ape, ];
  }
  function kohlrabi(dinosaur, kouprey, echidna) {
    Array.isArray(dinosaur) ? dinosaur.forEach(kouprey, echidna) : dinosaur && kouprey.call(echidna, dinosaur);
  }
  function tubers(owl, gaur) {
    var locust; // r
    var magpie; // o
    
      locust = owl.stateNode;
    if (! locust)
      return null;
    magpie = chinchilla(locust);
    if (! magpie)
      return null;
    locust = magpie[gaur];
    e : switch (gaur) {
      case "onClick":
        

      case "onClickCapture":
        

      case "onDoubleClick":
        

      case "onDoubleClickCapture":
        

      case "onMouseDown":
        

      case "onMouseDownCapture":
        

      case "onMouseMove":
        

      case "onMouseMoveCapture":
        

      case "onMouseUp":
        

      case "onMouseUpCapture":
        (magpie = ! magpie.disabled) || (owl = owl.type, magpie = ! ("button" === owl || "input" === owl || "select" === owl || "textarea" === owl));
        owl = ! magpie;
        break e;

      default:
        owl = false;
      
    }
    if (owl)
      return null;
    locust && "function" !== typeof locust ? bean_sprout("231", gaur, typeof locust) : void 0;
    return locust;
  }
  function lima_bean(snake, hummingbird, sheep) {
    if (hummingbird = tubers(snake, sheep.dispatchConfig.phasedRegistrationNames[hummingbird]))
      sheep._dispatchListeners = nopale(sheep._dispatchListeners, hummingbird), 
      sheep._dispatchInstances = nopale(sheep._dispatchInstances, snake);
  }
  function white_radish(goldfinch) {
    goldfinch && goldfinch.dispatchConfig.phasedRegistrationNames && amaranth(goldfinch._targetInst, z, goldfinch);
  }
  function basil(swan) {
    var oryx; // n
    
      if (swan && swan.dispatchConfig.phasedRegistrationNames)
    {
      oryx = swan._targetInst;
      oryx = oryx ? green_bean(oryx) : null;
      amaranth(oryx, z, swan);
    }
  }
  function spaghetti_squash(turtle) {
    var cormorant; // t
    var cattle; // n
    
      if (turtle && turtle.dispatchConfig.registrationName)
    {
      cormorant = turtle._targetInst;
      if (cormorant && turtle && turtle.dispatchConfig.registrationName)
      {
        cattle = tubers(cormorant, turtle.dispatchConfig.registrationName);
        cattle && (turtle._dispatchListeners = nopale(turtle._dispatchListeners, cattle), 
        turtle._dispatchInstances = nopale(turtle._dispatchInstances, cormorant));
      }
    }
  }
  function daikon(tiger, lion, frog, skunk) {
    var lemur; // o
    
      this.dispatchConfig = tiger;
    this._targetInst = lion;
    this.nativeEvent = frog;
    tiger = this.constructor.Interface;
    for (lemur in tiger)
      tiger.hasOwnProperty(lemur) && ((lion = tiger[lemur]) ? this[lemur] = green_bean(frog) : "target" === lemur ? this.target = skunk : this[lemur] = frog[lemur]);
    this.isDefaultPrevented = (null != frog.defaultPrevented ? frog.defaultPrevented : false === frog.returnValue) ? B : C;
    this.isPropagationStopped = C;
    return this;
  }
  function azuki_bean(goat, wolf, gnat, quail) {
    var porpoise; // o
    
      if (this.eventPool.length)
    {
      porpoise = this.eventPool.pop();
      this.call(porpoise, goat, wolf, gnat, quail);
      return porpoise;
    }
    return new this(goat, wolf, gnat, quail);
  }
  function shallot(chamois) {
    chamois instanceof this ? void 0 : bean_sprout("279");
    chamois.destructor();
    10 > this.eventPool.length && this.eventPool.push(chamois);
  }
  function courgette(otter) {
    otter.eventPool = [];
    otter.getPooled = ea;
    otter.release = fa;
  }
  function pumpkin(sand_dollar) {
    return "touchstart" === sand_dollar || "mousedown" === sand_dollar;
  }
  function parsnip(jaguar) {
    return "touchmove" === jaguar || "mousemove" === jaguar;
  }
  function navy_bean(dugong) {
    return "touchend" === dugong || "touchcancel" === dugong || "mouseup" === dugong;
  }
  function skirret(water_buffalo) {
    return water_buffalo.timeStamp || water_buffalo.timestamp;
  }
  function borlotti_bean(sea_urchin) {
    sea_urchin = sea_urchin.identifier;
    null == sea_urchin ? bean_sprout("138") : void 0;
    return sea_urchin;
  }
  function anise(grouse) {
    var sandpiper; // t
    var mule; // n
    
      {
      sandpiper = borlotti_bean(grouse);
      mule = mantis[sandpiper];
    }
    mule ? (mule.touchActive = true, mule.startPageX = grouse.pageX, 
    mule.startPageY = grouse.pageY, 
    mule.startTimeStamp = skirret(grouse), 
    mule.currentPageX = grouse.pageX, 
    mule.currentPageY = grouse.pageY, 
    mule.currentTimeStamp = skirret(grouse), 
    mule.previousPageX = grouse.pageX, 
    mule.previousPageY = grouse.pageY, 
    mule.previousTimeStamp = skirret(grouse)) : (mule = {
      touchActive : true,
      startPageX : grouse.pageX,
      startPageY : grouse.pageY,
      startTimeStamp : skirret(grouse),
      currentPageX : grouse.pageX,
      currentPageY : grouse.pageY,
      currentTimeStamp : skirret(grouse),
      previousPageX : grouse.pageX,
      previousPageY : grouse.pageY,
      previousTimeStamp : skirret(grouse)
    }, 
    mantis[sandpiper] = mule);
    dogfish.mostRecentTimeStamp = skirret(grouse);
  }
  function mangetout(goldfish) {
    var caribou; // t
    
      caribou = mantis[borlotti_bean(goldfish)];
    caribou ? (caribou.touchActive = true, caribou.previousPageX = caribou.currentPageX, 
    caribou.previousPageY = caribou.currentPageY, 
    caribou.previousTimeStamp = caribou.currentTimeStamp, 
    caribou.currentPageX = goldfish.pageX, 
    caribou.currentPageY = goldfish.pageY, 
    caribou.currentTimeStamp = skirret(goldfish), 
    dogfish.mostRecentTimeStamp = skirret(goldfish)) : console.error("Cannot record touch move without a touch start.\nTouch Move: %s\n", 
    "Touch Bank: %s", 
    topinambur(goldfish), 
    mushroom());
  }
  function broad_beans(raven) {
    var ram; // t
    
      ram = mantis[borlotti_bean(raven)];
    ram ? (ram.touchActive = false, ram.previousPageX = ram.currentPageX, 
    ram.previousPageY = ram.currentPageY, 
    ram.previousTimeStamp = ram.currentTimeStamp, 
    ram.currentPageX = raven.pageX, 
    ram.currentPageY = raven.pageY, 
    ram.currentTimeStamp = skirret(raven), 
    dogfish.mostRecentTimeStamp = skirret(raven)) : console.error("Cannot record touch end without a touch start.\nTouch End: %s\n", 
    "Touch Bank: %s", 
    topinambur(raven), 
    mushroom());
  }
  function topinambur(salmon) {
    return JSON.stringify({
      identifier : salmon.identifier,
      pageX : salmon.pageX,
      pageY : salmon.pageY,
      timestamp : skirret(salmon)
    });
  }
  function mushroom() {
    var cheetah; // e
    
      cheetah = JSON.stringify(mantis.slice(0, 20));
    20 < mantis.length && (cheetah = cheetah + " (original size: " + mantis.length + ")");
    return cheetah;
  }
  function cayenne_pepper(viper, pheasant) {
    null == pheasant ? bean_sprout("29") : void 0;
    return null == viper ? pheasant : Array.isArray(viper) ? viper.concat(pheasant) : Array.isArray(pheasant) ? [viper, ].concat(pheasant) : [viper, pheasant, ];
  }
  function bok_choy(pony, hawk) {
    var spoonbill; // n
    
      spoonbill = dunlin;
    if (null !== rook.GlobalResponderHandler)
      rook.GlobalResponderHandler.onChange(spoonbill, pony, hawk);
  }
  var raccoon; // k
  var hamster; // l
  var chinchilla; // n
  var ibex; // p
  var boar; // q
  var llama; // F
  var capybara; // J
  var mink; // K
  var prairie_dog; // L
  var mantis; // M
  var dogfish; // N
  var snail; // S
  var dunlin; // U
  var termite; // V
  var squid; // Y
  var rook; // X
  var woodcock; // Z
  var antelope; // ka
  
  {
    raccoon = require("react-dom");
    hamster = require("object-assign");
  }
  hamster(D.prototype, {
    preventDefault : function () {
      var swallow; // e
      
          this.defaultPrevented = true;
      swallow = this.nativeEvent;
      swallow && (swallow.preventDefault ? swallow.preventDefault() : "unknown" !== typeof swallow.returnValue && (swallow.returnValue = false), 
      this.isDefaultPrevented = B);
    },
    stopPropagation : function () {
      var octopus; // e
      
          octopus = this.nativeEvent;
      octopus && (octopus.stopPropagation ? octopus.stopPropagation() : "unknown" !== typeof octopus.cancelBubble && (octopus.cancelBubble = true), 
      this.isPropagationStopped = B);
    },
    persist : function () {
      this.isPersistent = B;
    },
    isPersistent : C,
    destructor : function () {
      var newt; // e
      var caterpillar; // t
      
          newt = this.constructor.Interface;
      for (caterpillar in newt)
        this[caterpillar] = null;
      this.nativeEvent = this._targetInst = this.dispatchConfig = null;
      this.isPropagationStopped = this.isDefaultPrevented = C;
      this._dispatchInstances = this._dispatchListeners = null;
    }
  });
  D.Interface = {
    type : null,
    target : null,
    currentTarget : function () {
      return null;
    },
    eventPhase : null,
    bubbles : null,
    cancelable : null,
    timeStamp : function (kingfisher) {
      return kingfisher.timeStamp || Date.now();
    },
    defaultPrevented : null,
    isTrusted : null
  };
  D.extend = function (nightingale) {
    function lentils() {
      
    }
    function artichoke() {
      return r.apply(this, arguments);
    }
      var wombat; // o
    
      t.prototype = this.prototype;
    wombat = new t;
    hamster(wombat, chinchilla.prototype);
    chinchilla.prototype = wombat;
    chinchilla.prototype.constructor = chinchilla;
    chinchilla.Interface = hamster({
      
    }, this.Interface, nightingale);
    chinchilla.extend = this.extend;
    courgette(chinchilla);
    return chinchilla;
  };
  courgette(D);
  llama = D.extend({
    touchHistory : function () {
      return null;
    }
  });
  {
    capybara = ["touchstart", "mousedown", ];
    mink = ["touchmove", "mousemove", ];
    prairie_dog = ["touchcancel", "touchend", "mouseup", ];
    mantis = [];
    dogfish = {
      touchBank : mantis,
      numberActiveTouches : 0,
      indexOfSingleActiveTouch : -1,
      mostRecentTimeStamp : 0
    };
  }
  snail = {
    recordTouchTrack : function (crane, chough) {
      if (parsnip(crane))
        chough.changedTouches.forEach(ia);
      else
        if (pumpkin(crane))
          chough.changedTouches.forEach(ha), dogfish.numberActiveTouches = chough.touches.length, 
          1 === dogfish.numberActiveTouches && (dogfish.indexOfSingleActiveTouch = chough.touches[0].identifier);
        else
          if (navy_bean(crane) && (chough.changedTouches.forEach(ja), dogfish.numberActiveTouches = chough.touches.length, 
          1 === dogfish.numberActiveTouches))
            for (crane = 0; crane < mantis.length; crane++)
              if (chough = mantis[crane], null != chough && chough.touchActive)
              {
                dogfish.indexOfSingleActiveTouch = crane;
                break;
              }
    },
    touchHistory : dogfish
  };
  {
    dunlin = null;
    termite = 0;
  }
  {
    squid = {
      startShouldSetResponder : {
        phasedRegistrationNames : {
          bubbled : "onStartShouldSetResponder",
          captured : "onStartShouldSetResponderCapture"
        },
        dependencies : capybara
      },
      scrollShouldSetResponder : {
        phasedRegistrationNames : {
          bubbled : "onScrollShouldSetResponder",
          captured : "onScrollShouldSetResponderCapture"
        },
        dependencies : ["scroll", ]
      },
      selectionChangeShouldSetResponder : {
        phasedRegistrationNames : {
          bubbled : "onSelectionChangeShouldSetResponder",
          captured : "onSelectionChangeShouldSetResponderCapture"
        },
        dependencies : ["selectionchange", ]
      },
      moveShouldSetResponder : {
        phasedRegistrationNames : {
          bubbled : "onMoveShouldSetResponder",
          captured : "onMoveShouldSetResponderCapture"
        },
        dependencies : mink
      },
      responderStart : {
        registrationName : "onResponderStart",
        dependencies : capybara
      },
      responderMove : {
        registrationName : "onResponderMove",
        dependencies : mink
      },
      responderEnd : {
        registrationName : "onResponderEnd",
        dependencies : prairie_dog
      },
      responderRelease : {
        registrationName : "onResponderRelease",
        dependencies : prairie_dog
      },
      responderTerminationRequest : {
        registrationName : "onResponderTerminationRequest",
        dependencies : []
      },
      responderGrant : {
        registrationName : "onResponderGrant",
        dependencies : []
      },
      responderReject : {
        registrationName : "onResponderReject",
        dependencies : []
      },
      responderTerminate : {
        registrationName : "onResponderTerminate",
        dependencies : []
      }
    };
    rook = {
      _getResponder : function () {
        return null;
      },
      eventTypes : squid,
      extractEvents : function (goshawk, monkey, horse, okapi) {
        var worm; // i
        var hornet; // s
        var quetzal; // u
        var seahorse; // c
        var chicken; // l
        
              if (pumpkin(goshawk))
          termite = 1;
        else
          if (navy_bean(goshawk))
            -- termite;
        snail.recordTouchTrack(goshawk, horse);
        if (monkey && ("scroll" === goshawk && ! horse.responderIgnoreScroll || 0 < termite && "selectionchange" === goshawk || pumpkin(goshawk) || parsnip(goshawk)))
        {
          worm = pumpkin(goshawk) ? squid.startShouldSetResponder : parsnip(goshawk) ? squid.moveShouldSetResponder : "selectionchange" === goshawk ? squid.selectionChangeShouldSetResponder : squid.scrollShouldSetResponder;
          hornet = monkey;
          monkey = hornet === null;
          hornet = llama.getPooled(worm, hornet, horse, okapi);
          hornet.touchHistory = snail.touchHistory;
          monkey ? kohlrabi(hornet, da) : kohlrabi(hornet, ca);
          e : {
            worm = hornet._dispatchListeners;
            monkey = hornet._dispatchInstances;
            if (Array.isArray(worm))
              for (quetzal = 0; quetzal < worm.length && ! hornet.isPropagationStopped(); quetzal++)
              {
                if (worm[quetzal](hornet, monkey[quetzal]))
                {
                  worm = monkey[quetzal];
                  break e;
                }
              }
            else
              if (worm && worm(hornet, monkey))
              {
                worm = monkey;
                break e;
              }
            worm = null;
          }
          hornet._dispatchInstances = null;
          hornet._dispatchListeners = null;
          hornet.isPersistent() || hornet.constructor.release(hornet);
          null && null !== dunlin ? (hornet = void 0, monkey = llama.getPooled(squid.responderGrant, null, horse, okapi), 
          monkey.touchHistory = snail.touchHistory, 
          kohlrabi(monkey, A), 
          quetzal = true === broccoflower(monkey), 
          dunlin ? (seahorse = llama.getPooled(squid.responderTerminationRequest, dunlin, horse, okapi), 
          seahorse.touchHistory = snail.touchHistory, 
          kohlrabi(seahorse, A), 
          chicken = ! seahorse._dispatchListeners || broccoflower(seahorse), 
          seahorse.isPersistent() || seahorse.constructor.release(seahorse), 
          chicken ? (seahorse = llama.getPooled(squid.responderTerminate, dunlin, horse, okapi), 
          seahorse.touchHistory = snail.touchHistory, 
          kohlrabi(seahorse, A), 
          hornet = cayenne_pepper(hornet, [monkey, seahorse, ]), 
          bok_choy(null, quetzal)) : (worm = llama.getPooled(squid.responderReject, null, horse, okapi), 
          worm.touchHistory = snail.touchHistory, 
          kohlrabi(worm, A), 
          hornet = cayenne_pepper(hornet, worm))) : (hornet = cayenne_pepper(hornet, monkey), bok_choy(worm, quetzal)), 
          worm = hornet) : worm = null;
        }
        else
          worm = null;
        hornet = dunlin && pumpkin(goshawk);
        monkey = dunlin && parsnip(goshawk);
        quetzal = dunlin && navy_bean(goshawk);
        if (hornet = hornet ? squid.responderStart : monkey ? squid.responderMove : quetzal ? squid.responderEnd : null)
          hornet = llama.getPooled(hornet, dunlin, horse, okapi), 
          hornet.touchHistory = snail.touchHistory, 
          kohlrabi(hornet, A), 
          worm = cayenne_pepper(worm, hornet);
        hornet = dunlin && "touchcancel" === goshawk;
        if (goshawk = dunlin && ! hornet && navy_bean(goshawk))
          e : {
            if ((goshawk = horse.touches) && 0 !== goshawk.length)
              for (monkey = 0; monkey < goshawk.length; monkey++)
                if (quetzal = goshawk[monkey].target, null !== quetzal && void 0 !== quetzal && 0 !== quetzal)
                {
                  seahorse = ibex(quetzal);
                  t : {
                    for (quetzal = dunlin; seahorse; )
                    {
                      if (quetzal === seahorse || quetzal === seahorse.alternate)
                      {
                        quetzal = true;
                        break t;
                      }
                      seahorse = green_bean(seahorse);
                    }
                    quetzal = false;
                  }
                  if (quetzal)
                  {
                    goshawk = false;
                    break e;
                  }
                }
            goshawk = true;
          }
        if (goshawk = hornet ? squid.responderTerminate : goshawk ? squid.responderRelease : null)
          horse = llama.getPooled(goshawk, dunlin, horse, okapi), 
          horse.touchHistory = snail.touchHistory, 
          kohlrabi(horse, A), 
          worm = cayenne_pepper(worm, horse), 
          bok_choy(null);
        return worm;
      },
      GlobalResponderHandler : null,
      injection : {
        injectGlobalResponderHandler : function (mallard) {
          rook.GlobalResponderHandler = mallard;
        }
      }
    };
    woodcock = raccoon.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events;
    antelope = woodcock[3];
  }
  module.exports = {
    ResponderEventPlugin : rook,
    ResponderTouchHistoryStore : snail,
    injectEventPluginsByName : antelope
  };
  