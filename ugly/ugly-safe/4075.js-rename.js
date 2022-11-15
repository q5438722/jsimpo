  define(["./core", "./var/strundefined", "./var/rnotwhite", "./var/hasOwn", "./var/slice", "./event/support", "./data/var/data_priv", "./core/init", "./data/accepts", "./selector", ], 
  function (raccoon, hamster, chinchilla, ibex, boar, llama, capybara) {
    function chives() {
      return true;
    }
    function bean_sprout() {
      return false;
    }
    function broccoflower() {
      try {
        return document.activeElement;
      }
      catch (e) {
        
      }
    }
      var mink; // s
    var prairie_dog; // l
    var mantis; // g
    var dogfish; // T
    
      {
      mink = new RegExp("^key", "");
      prairie_dog = new RegExp("^(?:mouse|pointer|contextmenu)|click", "");
      mantis = new RegExp("^(?:focusinfocus|focusoutblur)$", "");
      dogfish = new RegExp("^([^.]*)(?:\\.(.+)|)$", "");
    }
    raccoon.event = {
      global : {
        
      },
      add : function (snail, dunlin, termite, squid, rook) {
        var woodcock; // a
        var antelope; // o
        var goose; // s
        var baboon; // l
        var bat; // f
        var bison; // u
        var tarsier; // p
        var cat; // c
        var weasel; // d
        var beaver; // h
        var komodo_dragon; // g
        var armadillo; // v
        
              armadillo = capybara.get(snail);
        if (! armadillo)
        {
          return;
        }
        if (termite.handler)
        {
          woodcock = termite;
          termite = woodcock.handler;
          rook = woodcock.selector;
        }
        if (! termite.guid)
        {
          termite.guid = raccoon.guid++;
        }
        if (! (baboon = armadillo.events))
        {
          baboon = armadillo.events = {
            
          };
        }
        if (! (antelope = armadillo.handle))
        {
          antelope = armadillo.handle = function (woodpecker) {
            return typeof raccoon !== hamster && raccoon.event.triggered !== woodpecker.type ? raccoon.event.dispatch.apply(snail, arguments) : undefined;
          };
        }
        dunlin = (dunlin || "").match(chinchilla) || ["", ];
        bat = dunlin.length;
        while (bat--)
        {
          goose = dogfish.exec(dunlin[bat]) || [];
          weasel = komodo_dragon = goose[1];
          beaver = (goose[2] || "").split(".").sort();
          if (! weasel)
          {
            continue;
          }
          tarsier = raccoon.event.special[weasel] || {
            
          };
          weasel = (rook ? tarsier.delegateType : tarsier.bindType) || weasel;
          tarsier = raccoon.event.special[weasel] || {
            
          };
          bison = raccoon.extend({
            type : weasel,
            origType : komodo_dragon,
            data : squid,
            handler : termite,
            guid : termite.guid,
            selector : rook,
            needsContext : rook && raccoon.expr.match.needsContext.test(rook),
            namespace : beaver.join(".")
          }, 
          woodcock);
          if (! (cat = baboon[weasel]))
          {
            cat = baboon[weasel] = [];
            cat.delegateCount = 0;
            if (! tarsier.setup || tarsier.setup.call(snail, squid, beaver, antelope) === false)
            {
              if (snail.addEventListener)
              {
                snail.addEventListener(weasel, antelope, false);
              }
            }
          }
          if (tarsier.add)
          {
            tarsier.add.call(snail, bison);
            if (! bison.handler.guid)
            {
              bison.handler.guid = termite.guid;
            }
          }
          if (rook)
          {
            cat.splice(cat.delegateCount++, 0, bison);
          }
          else
          {
            cat.push(bison);
          }
          raccoon.event.global[weasel] = true;
        }
      },
      remove : function (quelea, butterfly, oyster, stingray, dragonfly) {
        var finch; // a
        var meerkat; // o
        var alligator; // s
        var kookabura; // l
        var human; // f
        var reindeer; // u
        var elk; // p
        var ape; // c
        var dinosaur; // d
        var kouprey; // h
        var echidna; // g
        var owl; // v
        
              owl = capybara.hasData(quelea) && capybara.get(quelea);
        if (! owl || ! (kookabura = owl.events))
        {
          return;
        }
        butterfly = (butterfly || "").match(chinchilla) || ["", ];
        human = butterfly.length;
        while (human--)
        {
          alligator = dogfish.exec(butterfly[human]) || [];
          dinosaur = echidna = alligator[1];
          kouprey = (alligator[2] || "").split(".").sort();
          if (! dinosaur)
          {
            for (dinosaur in kookabura)
            {
              raccoon.event.remove(quelea, dinosaur + butterfly[human], oyster, stingray, 
              true);
            }
            continue;
          }
          elk = raccoon.event.special[dinosaur] || {
            
          };
          dinosaur = (stingray ? elk.delegateType : elk.bindType) || dinosaur;
          ape = kookabura[dinosaur] || [];
          alligator = alligator[2] && new RegExp("(^|\\.)" + kouprey.join("\\.(?:.*\\.|)") + "(\\.|$)");
          meerkat = finch = ape.length;
          while (finch--)
          {
            reindeer = ape[finch];
            if ((dragonfly || echidna === reindeer.origType) && (! oyster || oyster.guid === reindeer.guid) && (! alligator || alligator.test(reindeer.namespace)) && (! stingray || stingray === reindeer.selector || stingray === "**" && reindeer.selector))
            {
              ape.splice(finch, 1);
              if (reindeer.selector)
              {
                ape.delegateCount--;
              }
              if (elk.remove)
              {
                elk.remove.call(quelea, reindeer);
              }
            }
          }
          if (meerkat && ! ape.length)
          {
            if (! elk.teardown || elk.teardown.call(quelea, kouprey, owl.handle) === false)
            {
              raccoon.removeEvent(quelea, dinosaur, owl.handle);
            }
            delete kookabura[dinosaur];
          }
        }
        if (raccoon.isEmptyObject(kookabura))
        {
          delete owl.handle;
          capybara.remove(quelea, "events");
        }
      },
      trigger : function (gaur, locust, magpie, snake) {
        var hummingbird; // r
        var sheep; // a
        var goldfinch; // o
        var swan; // s
        var oryx; // l
        var turtle; // f
        var cormorant; // u
        var cattle; // p
        var tiger; // c
        var lion; // d
        
              {
          cattle = [magpie || document, ];
          tiger = ibex.call(gaur, "type") ? gaur.type : gaur;
          lion = ibex.call(gaur, "namespace") ? gaur.namespace.split(".") : [];
        }
        sheep = goldfinch = magpie = magpie || document;
        if (magpie.nodeType === 3 || magpie.nodeType === 8)
        {
          return;
        }
        if (mantis.test(tiger + raccoon.event.triggered))
        {
          return;
        }
        if (tiger.indexOf(".") >= 0)
        {
          lion = tiger.split(".");
          tiger = lion.shift();
          lion.sort();
        }
        oryx = tiger.indexOf(":") < 0 && "on" + tiger;
        gaur = gaur[raccoon.expando] ? gaur : new raccoon.Event(tiger, typeof gaur === "object" && gaur);
        gaur.isTrigger = snake ? 2 : 3;
        gaur.namespace = lion.join(".");
        gaur.namespace_re = gaur.namespace ? new RegExp("(^|\\.)" + lion.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        gaur.result = undefined;
        if (! gaur.target)
        {
          gaur.target = magpie;
        }
        locust = locust == null ? [gaur, ] : raccoon.makeArray(locust, [gaur, ]);
        cormorant = raccoon.event.special[tiger] || {
          
        };
        if (! snake && cormorant.trigger && cormorant.trigger.apply(magpie, locust) === false)
        {
          return;
        }
        if (! snake && ! cormorant.noBubble && ! raccoon.isWindow(magpie))
        {
          swan = cormorant.delegateType || tiger;
          if (! mantis.test(swan + tiger))
          {
            sheep = sheep.parentNode;
          }
          for (; sheep; sheep = sheep.parentNode)
          {
            cattle.push(sheep);
            goldfinch = sheep;
          }
          if (goldfinch === (magpie.ownerDocument || document))
          {
            cattle.push(goldfinch.defaultView || goldfinch.parentWindow || window);
          }
        }
        hummingbird = 0;
        while ((sheep = cattle[hummingbird++]) && ! gaur.isPropagationStopped())
        {
          gaur.type = hummingbird > 1 ? swan : cormorant.bindType || tiger;
          turtle = (capybara.get(sheep, "events") || {
            
          })[gaur.type] && capybara.get(sheep, "handle");
          if (turtle)
          {
            turtle.apply(sheep, locust);
          }
          turtle = oryx && sheep[oryx];
          if (turtle && turtle.apply && raccoon.acceptData(sheep))
          {
            gaur.result = turtle.apply(sheep, locust);
            if (gaur.result === false)
            {
              gaur.preventDefault();
            }
          }
        }
        gaur.type = tiger;
        if (! snake && ! gaur.isDefaultPrevented())
        {
          if ((! cormorant._default || cormorant._default.apply(cattle.pop(), locust) === false) && raccoon.acceptData(magpie))
          {
            if (oryx && raccoon.isFunction(magpie[tiger]) && ! raccoon.isWindow(magpie))
            {
              goldfinch = magpie[oryx];
              if (goldfinch)
              {
                magpie[oryx] = null;
              }
              raccoon.event.triggered = tiger;
              magpie[tiger]();
              raccoon.event.triggered = undefined;
              if (goldfinch)
              {
                magpie[oryx] = goldfinch;
              }
            }
          }
        }
        return gaur.result;
      },
      dispatch : function (frog) {
        var skunk; // t
        var lemur; // n
        var goat; // i
        var wolf; // r
        var gnat; // a
        var quail; // o
        var porpoise; // s
        var chamois; // l
        var otter; // f
        
              frog = raccoon.event.fix(frog);
        {
          quail = [];
          porpoise = boar.call(arguments);
          chamois = (capybara.get(this, "events") || {
            
          })[frog.type] || [];
          otter = raccoon.event.special[frog.type] || {
            
          };
        }
        porpoise[0] = frog;
        frog.delegateTarget = this;
        if (otter.preDispatch && otter.preDispatch.call(this, frog) === false)
        {
          return;
        }
        quail = raccoon.event.handlers.call(this, frog, chamois);
        skunk = 0;
        while ((wolf = quail[skunk++]) && ! frog.isPropagationStopped())
        {
          frog.currentTarget = wolf.elem;
          lemur = 0;
          while ((gnat = wolf.handlers[lemur++]) && ! frog.isImmediatePropagationStopped())
          {
            if (! frog.namespace_re || frog.namespace_re.test(gnat.namespace))
            {
              frog.handleObj = gnat;
              frog.data = gnat.data;
              goat = ((raccoon.event.special[gnat.origType] || {
                
              }).handle || gnat.handler).apply(wolf.elem, porpoise);
              if (goat !== undefined)
              {
                if ((frog.result = goat) === false)
                {
                  frog.preventDefault();
                  frog.stopPropagation();
                }
              }
            }
          }
        }
        if (otter.postDispatch)
        {
          otter.postDispatch.call(this, frog);
        }
        return frog.result;
      },
      handlers : function (sand_dollar, jaguar) {
        var dugong; // n
        var water_buffalo; // i
        var sea_urchin; // r
        var grouse; // a
        var sandpiper; // o
        var mule; // s
        var goldfish; // l
        
              {
          sandpiper = [];
          mule = jaguar.delegateCount;
          goldfish = sand_dollar.target;
        }
        if (mule && goldfish.nodeType && (! sand_dollar.button || sand_dollar.type !== "click"))
        {
          for (; goldfish !== this; goldfish = goldfish.parentNode || this)
          {
            if (goldfish.disabled !== true || sand_dollar.type !== "click")
            {
              water_buffalo = [];
              for (dugong = 0; dugong < mule; dugong++)
              {
                grouse = jaguar[dugong];
                sea_urchin = grouse.selector + " ";
                if (water_buffalo[sea_urchin] === undefined)
                {
                  water_buffalo[sea_urchin] = grouse.needsContext ? raccoon(sea_urchin, this).index(goldfish) >= 0 : raccoon.find(sea_urchin, this, null, [goldfish, ]).length;
                }
                if (water_buffalo[sea_urchin])
                {
                  water_buffalo.push(grouse);
                }
              }
              if (water_buffalo.length)
              {
                sandpiper.push({
                  elem : goldfish,
                  handlers : water_buffalo
                });
              }
            }
          }
        }
        if (mule < jaguar.length)
        {
          sandpiper.push({
            elem : this,
            handlers : jaguar.slice(mule)
          });
        }
        return sandpiper;
      },
      props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks : {
        
      },
      keyHooks : {
        props : "char charCode key keyCode".split(" "),
        filter : function (caribou, raven) {
          if (caribou.which == null)
          {
            caribou.which = raven.charCode != null ? raven.charCode : raven.keyCode;
          }
          return caribou;
        }
      },
      mouseHooks : {
        props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter : function (ram, salmon) {
          var cheetah; // n
          var viper; // i
          var pheasant; // r
          var pony; // a
          
                  pony = salmon.button;
          if (ram.pageX == null && salmon.clientX != null)
          {
            cheetah = ram.target.ownerDocument || document;
            viper = cheetah.documentElement;
            pheasant = cheetah.body;
            ram.pageX = salmon.clientX + (viper && viper.scrollLeft || pheasant && pheasant.scrollLeft || 0) - (viper && viper.clientLeft || pheasant && pheasant.clientLeft || 0);
            ram.pageY = salmon.clientY + (viper && viper.scrollTop || pheasant && pheasant.scrollTop || 0) - (viper && viper.clientTop || pheasant && pheasant.clientTop || 0);
          }
          if (! ram.which && pony !== undefined)
          {
            ram.which = pony & 1 ? 1 : pony & 2 ? 3 : pony & 4 ? 2 : 0;
          }
          return ram;
        }
      },
      fix : function (hawk) {
        var spoonbill; // t
        var swallow; // n
        var octopus; // i
        var newt; // r
        var caterpillar; // a
        var kingfisher; // o
        
              if (hawk[raccoon.expando])
        {
          return hawk;
        }
        {
          newt = hawk.type;
          caterpillar = hawk;
          kingfisher = this.fixHooks[newt];
        }
        if (! kingfisher)
        {
          this.fixHooks[newt] = kingfisher = prairie_dog.test(newt) ? this.mouseHooks : mink.test(newt) ? this.keyHooks : {
            
          };
        }
        octopus = kingfisher.props ? this.props.concat(kingfisher.props) : this.props;
        hawk = new raccoon.Event(caterpillar);
        spoonbill = octopus.length;
        while (spoonbill--)
        {
          swallow = octopus[spoonbill];
          hawk[swallow] = caterpillar[swallow];
        }
        if (! hawk.target)
        {
          hawk.target = document;
        }
        if (hawk.target.nodeType === 3)
        {
          hawk.target = hawk.target.parentNode;
        }
        return kingfisher.filter ? kingfisher.filter(hawk, caterpillar) : hawk;
      },
      special : {
        load : {
          noBubble : true
        },
        focus : {
          trigger : function () {
            if (this !== broccoflower() && this.focus)
            {
              this.focus();
              return false;
            }
          },
          delegateType : "focusin"
        },
        blur : {
          trigger : function () {
            if (this === broccoflower() && this.blur)
            {
              this.blur();
              return false;
            }
          },
          delegateType : "focusout"
        },
        click : {
          trigger : function () {
            if (this.type === "checkbox" && this.click && raccoon.nodeName(this, "input"))
            {
              this.click();
              return false;
            }
          },
          _default : function (nightingale) {
            return raccoon.nodeName(nightingale.target, "a");
          }
        },
        beforeunload : {
          postDispatch : function (wombat) {
            if (wombat.result !== undefined && wombat.originalEvent)
            {
              wombat.originalEvent.returnValue = wombat.result;
            }
          }
        }
      },
      simulate : function (crane, chough, goshawk, monkey) {
        var horse; // r
        
              horse = raccoon.extend(new raccoon.Event, goshawk, {
          type : crane,
          isSimulated : true,
          originalEvent : {
            
          }
        });
        if (monkey)
        {
          raccoon.event.trigger(horse, null, chough);
        }
        else
        {
          raccoon.event.dispatch.call(chough, horse);
        }
        if (horse.isDefaultPrevented())
        {
          goshawk.preventDefault();
        }
      }
    };
    raccoon.removeEvent = function (okapi, worm, hornet) {
      if (okapi.removeEventListener)
      {
        okapi.removeEventListener(worm, hornet, false);
      }
    };
    raccoon.Event = function (quetzal, seahorse) {
      if (! (this instanceof raccoon.Event))
      {
        return new raccoon.Event(quetzal, seahorse);
      }
      if (quetzal && quetzal.type)
      {
        this.originalEvent = quetzal;
        this.type = quetzal.type;
        this.isDefaultPrevented = quetzal.defaultPrevented || quetzal.defaultPrevented === undefined && quetzal.returnValue === false ? n : f;
      }
      else
      {
        this.type = quetzal;
      }
      if (seahorse)
      {
        raccoon.extend(this, seahorse);
      }
      this.timeStamp = quetzal && quetzal.timeStamp || raccoon.now();
      this[raccoon.expando] = true;
    };
    raccoon.Event.prototype = {
      isDefaultPrevented : f,
      isPropagationStopped : f,
      isImmediatePropagationStopped : f,
      preventDefault : function () {
        var chicken; // e
        
              chicken = this.originalEvent;
        this.isDefaultPrevented = n;
        if (chicken && chicken.preventDefault)
        {
          chicken.preventDefault();
        }
      },
      stopPropagation : function () {
        var mallard; // e
        
              mallard = this.originalEvent;
        this.isPropagationStopped = n;
        if (mallard && mallard.stopPropagation)
        {
          mallard.stopPropagation();
        }
      },
      stopImmediatePropagation : function () {
        var aardvark; // e
        
              aardvark = this.originalEvent;
        this.isImmediatePropagationStopped = n;
        if (aardvark && aardvark.stopImmediatePropagation)
        {
          aardvark.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    raccoon.each({
      mouseenter : "mouseover",
      mouseleave : "mouseout",
      pointerenter : "pointerover",
      pointerleave : "pointerout"
    }, 
    function (albatross, cobra) {
      raccoon.event.special[albatross] = {
        delegateType : cobra,
        bindType : cobra,
        handle : function (walrus) {
          var pelican; // t
          var mosquito; // i
          var trout; // r
          
                  {
            mosquito = walrus.relatedTarget;
            trout = walrus.handleObj;
          }
          if (! mosquito || mosquito !== this && ! raccoon.contains(this, mosquito))
          {
            walrus.type = trout.origType;
            pelican = trout.handler.apply(this, arguments);
            walrus.type = cobra;
          }
          return pelican;
        }
      };
    });
    if (! llama.focusinBubbles)
    {
      raccoon.each({
        focus : "focusin",
        blur : "focusout"
      }, 
      function (whale, cassowary) {
        var guinea_fowl; // r
        
              guinea_fowl = function (mouse) {
          raccoon.event.simulate(cassowary, mouse.target, raccoon.event.fix(mouse), true);
        };
        raccoon.event.special[cassowary] = {
          setup : function () {
            var wolverine; // e
            var koala; // t
            
                      {
              wolverine = this.ownerDocument || this;
              koala = capybara.access(wolverine, cassowary);
            }
            if (! koala)
            {
              wolverine.addEventListener(whale, guinea_fowl, true);
            }
            capybara.access(wolverine, cassowary, (koala || 0) + 1);
          },
          teardown : function () {
            var giant_panda; // e
            var mongoose; // t
            
                      {
              giant_panda = this.ownerDocument || this;
              mongoose = capybara.access(giant_panda, cassowary) - 1;
            }
            if (! mongoose)
            {
              giant_panda.removeEventListener(whale, guinea_fowl, true);
              capybara.remove(giant_panda, cassowary);
            }
            else
            {
              capybara.access(giant_panda, cassowary, mongoose);
            }
          }
        };
      });
    }
    raccoon.fn.extend({
      on : function (mandrill, moose, sea_lion, leopard, gerbil) {
        var dog; // a
        var vicuña; // o
        
              if (typeof mandrill === "object")
        {
          if (typeof moose !== "string")
          {
            sea_lion = sea_lion || moose;
            moose = undefined;
          }
          for (vicuña in mandrill)
          {
            this.on(vicuña, moose, sea_lion, mandrill[vicuña], gerbil);
          }
          return this;
        }
        if (sea_lion == null && leopard == null)
        {
          leopard = moose;
          sea_lion = moose = undefined;
        }
        else
          if (leopard == null)
          {
            if (typeof moose === "string")
            {
              leopard = sea_lion;
              sea_lion = undefined;
            }
            else
            {
              leopard = sea_lion;
              sea_lion = moose;
              moose = undefined;
            }
          }
        if (leopard === false)
        {
          leopard = f;
        }
        else
          if (! leopard)
          {
            return this;
          }
        if (gerbil === 1)
        {
          dog = leopard;
          leopard = function (kangaroo) {
            raccoon().off(kangaroo);
            return dog.apply(this, arguments);
          };
          leopard.guid = dog.guid || (dog.guid = raccoon.guid++);
        }
        return this.each(function () {
          raccoon.event.add(this, mandrill, leopard, sea_lion, moose);
        });
      },
      one : function (shark, wallaby, crow, eagle) {
        return this.on(shark, wallaby, crow, eagle, 1);
      },
      off : function (rail, marten, jay) {
        var eland; // i
        var panther; // r
        
              if (rail && rail.preventDefault && rail.handleObj)
        {
          eland = rail.handleObj;
          raccoon(rail.delegateTarget).off(eland.namespace ? eland.origType + "." + eland.namespace : eland.origType, 
          eland.selector, 
          eland.handler);
          return this;
        }
        if (typeof rail === "object")
        {
          for (panther in rail)
          {
            this.off(panther, marten, rail[panther]);
          }
          return this;
        }
        if (marten === false || typeof marten === "function")
        {
          jay = marten;
          marten = undefined;
        }
        if (jay === false)
        {
          jay = f;
        }
        return this.each(function () {
          raccoon.event.remove(this, rail, jay, marten);
        });
      },
      trigger : function (opossum, shrew) {
        return this.each(function () {
          raccoon.event.trigger(opossum, shrew, this);
        });
      },
      triggerHandler : function (duck, cod) {
        var crab; // n
        
              crab = this[0];
        if (crab)
        {
          return raccoon.event.trigger(duck, cod, crab, true);
        }
      }
    });
    return raccoon;
  });
  