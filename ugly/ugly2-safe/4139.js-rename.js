  "undefined" == typeof WeakMap && ! function () {
    var raccoon; // r
    var hamster; // e
    var chinchilla; // t
    
      {
      raccoon = Object.defineProperty;
      hamster = Date.now() % 1000000000;
      chinchilla = function () {
        this.name = "__st" + (1000000000 * Math.random() >>> 0) + (hamster++ + "__");
      };
    }
    chinchilla.prototype = {
      set : function (ibex, boar) {
        var llama; // n
        
              llama = ibex[this.name];
        return llama && llama[0] === ibex ? llama[1] = boar : raccoon(ibex, this.name, {
          value : [ibex, boar, ],
          writable : true
        }), 
        this;
      },
      get : function (capybara) {
        var mink; // t
        
              return (mink = capybara[this.name]) && mink[0] === capybara ? mink[1] : void 0;
      },
      delete : function (prairie_dog) {
        var mantis; // t
        
              mantis = prairie_dog[this.name];
        return mantis && mantis[0] === prairie_dog ? (mantis[0] = mantis[1] = void 0, true) : false;
      },
      has : function (dogfish) {
        var snail; // t
        
              snail = dogfish[this.name];
        return snail ? snail[0] === dogfish : false;
      }
    }, 
    window.WeakMap = chinchilla;
  }(), 
  function (dunlin) {
    function chives(baboon) {
      E.push(baboon), g || (termite(t));
    }
    function bean_sprout(bat) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(bat) || bat;
    }
    function broccoflower() {
      var bison; // e
      
          bison = E;
      bison.sort(function (tarsier, cat) {
        return tarsier.uid_ - cat.uid_;
      });
      bison.forEach(function (weasel) {
        var beaver; // t
        
              beaver = weasel.takeRecords();
        green_bean(weasel), beaver.length && (weasel.callback_(beaver, weasel), );
      }), 
      broccoflower();
    }
    function green_bean(komodo_dragon) {
      komodo_dragon.nodes_.forEach(function (armadillo) {
        var woodpecker; // t
        
              woodpecker = squid.get(armadillo);
        woodpecker && woodpecker.forEach(function (quelea) {
          quelea.observer === komodo_dragon && quelea.removeTransientObservers();
        });
      });
    }
    function amaranth(butterfly, oyster) {
      var stingray; // n
      var dragonfly; // r
      var finch; // o
      var meerkat; // i
      var alligator; // a
      var kookabura; // s
      
          {
        stingray = butterfly;
        for (; stingray; stingray = stingray.parentNode)
        {
          dragonfly = squid.get(stingray);
          if (dragonfly)
          {
            finch = 0;
            for (; finch < dragonfly.length; finch++)
            {
              {
                meerkat = dragonfly[finch];
                alligator = meerkat.options;
              }
              if (stingray === butterfly || alligator.subtree)
              {
                kookabura = broccoflower(alligator);
                kookabura && meerkat.enqueue(kookabura);
              }
            }
          }
        }
      }
    }
    function nopale(human) {
      this.callback_ = human, this.nodes_ = [], this.records_ = [], 
      this.uid_ = ++ _;
    }
    function kohlrabi(reindeer, elk) {
      this.type = reindeer, this.target = elk, this.addedNodes = [], 
      this.removedNodes = [], 
      this.previousSibling = null, 
      this.nextSibling = null, 
      this.attributeName = null, 
      this.attributeNamespace = null, 
      this.oldValue = null;
    }
    function tubers(ape) {
      var dinosaur; // t
      
          dinosaur = new kohlrabi(ape.type, ape.target);
      return dinosaur.addedNodes = ape.addedNodes.slice(), dinosaur.removedNodes = ape.removedNodes.slice(), 
      dinosaur.previousSibling = ape.previousSibling, 
      dinosaur.nextSibling = ape.nextSibling, 
      dinosaur.attributeName = ape.attributeName, 
      dinosaur.attributeNamespace = ape.attributeNamespace, 
      dinosaur.oldValue = ape.oldValue, 
      dinosaur;
    }
    function lima_bean(kouprey, echidna) {
      return antelope = new kohlrabi(kouprey, echidna);
    }
    function white_radish(owl) {
      return goose ? goose : (goose = tubers(antelope), goose.oldValue = owl, goose);
    }
    function basil() {
      
    }
    function spaghetti_squash(gaur) {
      return gaur === goose || gaur === antelope;
    }
    function daikon(locust, magpie) {
      return locust === magpie ? locust : goose && spaghetti_squash(locust) ? goose : null;
    }
    function azuki_bean(snake, hummingbird, sheep) {
      this.observer = snake, this.target = hummingbird, this.options = sheep, 
      this.transientObservedNodes = [];
    }
      var termite; // f
    var squid; // v
    var rook; // w
    var woodcock; // b
    var antelope; // y
    var goose; // L
    
      if (! dunlin.JsMutationObserver)
    {
      squid = new WeakMap;
      if (new RegExp("Trident|Edge", "").test(navigator.userAgent))
        ;
      else
        if (window.setImmediate)
          ;
        else
        {
          {
            rook = [];
            woodcock = String(Math.random());
          }
          window.addEventListener("message", function (goldfinch) {
            var swan; // t
            
                      if (goldfinch.data === woodcock)
            {
              swan = rook;
              swan.forEach(function (oryx) {
                oryx();
              });
            }
          }), 
          ;
        }
      n.prototype = {
        observe : function (turtle, cormorant) {
          var cattle; // n
          var tiger; // r
          var lion; // o
          
                  if (turtle = bean_sprout(turtle), ! cormorant.childList && ! cormorant.attributes && ! cormorant.characterData || cormorant.attributeOldValue && ! cormorant.attributes || cormorant.attributeFilter && cormorant.attributeFilter.length && ! cormorant.attributes || cormorant.characterDataOldValue && ! cormorant.characterData)
            throw new SyntaxError;
          cattle = squid.get(turtle);
          cattle || squid.set(turtle, cattle = []);
          {
            lion = 0;
            for (; lion < cattle.length; lion++)
              if (cattle[lion].observer === this)
              {
                tiger = cattle[lion], tiger.removeListeners(), tiger.options = cormorant;
                break;
              }
          }
          tiger || (tiger = new azuki_bean(this, turtle, cormorant), cattle.push(tiger), 
          this.nodes_.push(turtle)), 
          tiger.addListeners();
        },
        disconnect : function () {
          this.nodes_.forEach(function (frog) {
            var skunk; // t
            var lemur; // n
            var goat; // r
            
                      {
              {
                skunk = squid.get(frog);
                lemur = 0;
              }
              for (; lemur < skunk.length; lemur++)
              {
                goat = skunk[lemur];
                if (goat.observer === this)
                {
                  goat.removeListeners(), skunk.splice(lemur, 1);
                  break;
                }
              }
            }
          }, 
          this), 
          this.records_ = [];
        },
        takeRecords : function () {
          var wolf; // e
          
                  wolf = this.records_;
          return this.records_ = [], wolf;
        }
      };
      u.prototype = {
        enqueue : function (gnat) {
          var quail; // t
          var porpoise; // n
          var chamois; // r
          var otter; // o
          
                  {
            quail = this.observer.records_;
            porpoise = quail.length;
          }
          if (quail.length > 0)
          {
            {
              chamois = quail[porpoise - 1];
              otter = daikon(chamois, gnat);
            }
            if (otter)
              return void (quail[porpoise - 1] = otter);
          }
          else
            chives(this.observer);
          quail[porpoise] = gnat;
        },
        addListeners : function () {
          this.addListeners_(this.target);
        },
        addListeners_ : function (sand_dollar) {
          var jaguar; // t
          
                  jaguar = this.options;
          jaguar.attributes && sand_dollar.addEventListener("DOMAttrModified", this, true), 
          jaguar.characterData && sand_dollar.addEventListener("DOMCharacterDataModified", this, true), 
          jaguar.childList && sand_dollar.addEventListener("DOMNodeInserted", this, true), 
          (jaguar.childList || jaguar.subtree) && sand_dollar.addEventListener("DOMNodeRemoved", this, true);
        },
        removeListeners : function () {
          this.removeListeners_(this.target);
        },
        removeListeners_ : function (dugong) {
          var water_buffalo; // t
          
                  water_buffalo = this.options;
          water_buffalo.attributes && dugong.removeEventListener("DOMAttrModified", this, true), 
          water_buffalo.characterData && dugong.removeEventListener("DOMCharacterDataModified", this, true), 
          water_buffalo.childList && dugong.removeEventListener("DOMNodeInserted", this, true), 
          (water_buffalo.childList || water_buffalo.subtree) && dugong.removeEventListener("DOMNodeRemoved", this, true);
        },
        addTransientObserver : function (sea_urchin) {
          var grouse; // t
          
                  if (sea_urchin !== this.target)
          {
            this.addListeners_(sea_urchin), this.transientObservedNodes.push(sea_urchin);
            grouse = squid.get(sea_urchin);
            grouse || squid.set(sea_urchin, grouse = []), grouse.push(this);
          }
        },
        removeTransientObservers : function () {
          var sandpiper; // e
          
                  sandpiper = this.transientObservedNodes;
          this.transientObservedNodes = [], sandpiper.forEach(function (mule) {
            var goldfish; // t
            var caribou; // n
            
                      this.removeListeners_(mule);
            {
              {
                goldfish = squid.get(mule);
                caribou = 0;
              }
              for (; caribou < goldfish.length; caribou++)
                if (goldfish[caribou] === this)
                {
                  goldfish.splice(caribou, 1);
                  break;
                }
            }
          }, 
          this);
        },
        handleEvent : function (raven) {
          var ram; // t
          var salmon; // n
          var cheetah; // r
          var viper; // o
          var pheasant; // i
          var pony; // a
          var hawk; // s
          var spoonbill; // d
          var swallow; // c
          var octopus; // u
          
                  switch (raven.stopImmediatePropagation(), raven.type) {
            case "DOMAttrModified":
              {
                ram = raven.attrName;
                salmon = raven.relatedNode.namespaceURI;
                cheetah = raven.target;
                viper = new lima_bean("attributes", cheetah);
              }
              viper.attributeName = ram, viper.attributeNamespace = salmon;
              pheasant = raven.attrChange === MutationEvent.ADDITION ? null : raven.prevValue;
              amaranth(cheetah, function (newt) {
                return ! newt.attributes || newt.attributeFilter && newt.attributeFilter.length && -1 === newt.attributeFilter.indexOf(ram) && -1 === newt.attributeFilter.indexOf(salmon) ? void 0 : newt.attributeOldValue ? white_radish(pheasant) : viper;
              });
              break;

            case "DOMCharacterDataModified":
              {
                cheetah = raven.target;
                viper = lima_bean("characterData", cheetah);
                pheasant = raven.prevValue;
              }
              amaranth(cheetah, function (caterpillar) {
                return caterpillar.characterData ? caterpillar.characterDataOldValue ? white_radish(pheasant) : viper : void 0;
              });
              break;

            case "DOMNodeRemoved":
              this.addTransientObserver(raven.target);

            case "DOMNodeInserted":
              spoonbill = raven.target;
              "DOMNodeInserted" === raven.type ? (pony = [spoonbill, ], hawk = []) : (pony = [], hawk = [spoonbill, ]);
              {
                swallow = spoonbill.previousSibling;
                octopus = spoonbill.nextSibling;
                viper = lima_bean("childList", raven.target.parentNode);
              }
              viper.addedNodes = pony, viper.removedNodes = hawk, viper.previousSibling = swallow, 
              viper.nextSibling = octopus, 
              amaranth(raven.relatedNode, function (kingfisher) {
                return kingfisher.childList ? viper : void 0;
              });

            
          }
          basil();
        }
      }, 
      dunlin.JsMutationObserver = n, 
      dunlin.MutationObserver || (dunlin.MutationObserver = n, n._isPolyfilled = true);
    }
  }(self), 
  function (nightingale) {
  "use strict";
    var wombat; // t
    var crane; // n
    var chough; // r
    var goshawk; // o
    var monkey; // i
    
      if (! window.performance)
    {
      wombat = Date.now();
      window.performance = {
        now : function () {
          return Date.now() - wombat;
        }
      };
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = function () {
      var horse; // t
      
          horse = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return horse ? function (okapi) {
        return horse(function () {
          okapi(performance.now());
        });
      } : function (worm) {
        return window.setTimeout(worm, 1000 / 60);
      };
    }()), 
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (hornet) {
        clearTimeout(hornet);
      };
    }());
    crane = function () {
      var quetzal; // e
      
          quetzal = document.createEvent("Event");
      return quetzal.initEvent("foo", true, true), quetzal.preventDefault(), 
      quetzal.defaultPrevented;
    }();
    if (! crane)
    {
      chough = Event.prototype.preventDefault;
      Event.prototype.preventDefault = function () {
        this.cancelable && (chough.call(this), Object.defineProperty(this, "defaultPrevented", {
          get : function () {
            return true;
          }
        }));
      };
    }
    goshawk = new RegExp("Trident", "").test(navigator.userAgent);
    if ((! window.CustomEvent || goshawk && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (seahorse, chicken) {
      var mallard; // n
      
          chicken = chicken || {
        
      };
      mallard = document.createEvent("CustomEvent");
      return mallard.initCustomEvent(seahorse, Boolean(chicken.bubbles), Boolean(chicken.cancelable), 
      chicken.detail), 
      mallard;
    }, 
    window.CustomEvent.prototype = window.Event.prototype), 
    ! window.Event || goshawk && "function" != typeof window.Event)
    {
      monkey = window.Event;
      window.Event = function (aardvark, albatross) {
        var cobra; // n
        
              albatross = albatross || {
          
        };
        cobra = document.createEvent("Event");
        return cobra.initEvent(aardvark, Boolean(albatross.bubbles), Boolean(albatross.cancelable)), 
        cobra;
      }, 
      window.Event.prototype = monkey.prototype;
    }
  }(window.WebComponents), 
  window.HTMLImports = window.HTMLImports || {
    flags : {
      
    }
  }, 
  function (walrus) {
    function shallot(wolverine, koala) {
      koala = koala || cassowary, pumpkin(function () {
        navy_bean(wolverine, koala);
      }, 
      koala);
    }
    function courgette(giant_panda) {
      return "complete" === giant_panda.readyState || giant_panda.readyState === w;
    }
    function pumpkin(mongoose, mandrill) {
      var moose; // n
      
          if (courgette(mandrill))
        mongoose && mongoose();
      else
      {
        moose = function () {
          ("complete" === mandrill.readyState || mandrill.readyState === w) && (mandrill.removeEventListener(b, moose), pumpkin(mongoose, mandrill));
        };
        mandrill.addEventListener(b, moose);
      }
    }
    function parsnip(sea_lion) {
      sea_lion.target.__loaded = true;
    }
    function navy_bean(leopard, gerbil) {
      function broad_beans() {
        vicuña == kangaroo && leopard && leopard({
          allImports : dog,
          loadedImports : pelican,
          errorImports : mosquito
        });
      }
      function topinambur(crow) {
        parsnip(crow), pelican.push(this), vicuña++, broad_beans();
      }
      function mushroom(eagle) {
        mosquito.push(this), vicuña++, broad_beans();
      }
          var dog; // i
      var vicuña; // a
      var kangaroo; // s
      var shark; // u
      var wallaby; // l
      
          {
        dog = gerbil.querySelectorAll("link[rel=import]");
        vicuña = 0;
        kangaroo = dog.length;
      }
      if (kangaroo)
      {
        wallaby = 0;
        for (; kangaroo > wallaby && (shark = dog[wallaby]); wallaby++)
          skirret(shark) ? (vicuña++, broad_beans()) : (shark.addEventListener("load", r), shark.addEventListener("error", o));
      }
      else
        broad_beans();
    }
    function skirret(rail) {
      return mosquito ? rail.__loaded || rail["import"] && "loading" !== rail["import"].readyState : rail.__importParsed;
    }
    function borlotti_bean(marten) {
      var jay; // t
      var eland; // n
      var panther; // r
      
          {
        {
          eland = 0;
          panther = marten.length;
        }
        for (; panther > eland && (jay = marten[eland]); eland++)
          anise(jay) && mangetout(jay);
      }
    }
    function anise(opossum) {
      return "link" === opossum.localName && "import" === opossum.rel;
    }
    function mangetout(shrew) {
      var duck; // t
      
          duck = shrew["import"];
      duck ? parsnip({
        target : shrew
      }) : (shrew.addEventListener("load", h), shrew.addEventListener("error", h));
    }
      var pelican; // d
    var mosquito; // c
    var trout; // u
    var whale; // l
    var cassowary; // p
    var guinea_fowl; // f
    var mouse; // v
    
      {
      pelican = "import";
      mosquito = Boolean("import" in document.createElement("link"));
      trout = Boolean(window.ShadowDOMPolyfill);
      whale = function (cod) {
        return trout ? window.ShadowDOMPolyfill.wrapIfNeeded(cod) : cod;
      };
      cassowary = whale(document);
      guinea_fowl = {
        get : function () {
          var crab; // e
          
                  crab = window.HTMLImports.currentScript || document.currentScript || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
          return whale(crab);
        },
        configurable : true
      };
    }
    Object.defineProperty(document, "_currentScript", guinea_fowl), 
    Object.defineProperty(cassowary, "_currentScript", guinea_fowl);
    {
      mouse = new RegExp("Trident", "").test(navigator.userAgent);
    }
    mosquito && (new MutationObserver(function (bee) {
      var wasp; // t
      var stork; // n
      var eel; // r
      
          {
        {
          stork = 0;
          eel = bee.length;
        }
        for (; eel > stork && (wasp = bee[stork]); stork++)
          wasp.addedNodes && borlotti_bean(wasp.addedNodes);
      }
    }).observe(document.head, {
      childList : true
    }), 
    function () {
      var lapwing; // e
      var guinea_pig; // t
      var ibis; // n
      var camel; // r
      
          if ("loading" === document.readyState)
      {
        {
          guinea_pig = document.querySelectorAll("link[rel=import]");
          ibis = 0;
          camel = guinea_pig.length;
        }
        for (; camel > ibis && (lapwing = guinea_pig[ibis]); ibis++)
          mangetout(lapwing);
      }
    }()), 
    shallot(function (lyrebird) {
      var donkey; // t
      
          window.HTMLImports.ready = true, window.HTMLImports.readyTime = (new Date).getTime();
      donkey = cassowary.createEvent("CustomEvent");
      donkey.initCustomEvent("HTMLImportsLoaded", true, true, lyrebird), 
      cassowary.dispatchEvent(donkey);
    }), 
    walrus.IMPORT_LINK_TYPE = pelican, 
    walrus.useNative = mosquito, 
    walrus.rootDocument = cassowary, 
    walrus.whenReady = t, 
    walrus.isIE = mouse;
  }(window.HTMLImports), 
  function (clam) {
    var grasshopper; // n
    var gnu; // e
    var mole; // r
    
      {
      grasshopper = [];
      gnu = function (penguin) {
        grasshopper.push(penguin);
      };
      mole = function () {
        grasshopper.forEach(function (elephant) {
          elephant(clam);
        });
      };
    }
    clam.addModule = gnu, clam.initializeModules = mole;
  }(window.HTMLImports), 
  window.HTMLImports.addModule(function (dove) {
    var badger; // o
    var guanaco; // i
    var pig; // t
    
      {
      badger = new RegExp("(url\\()([^)]*)(\\))", "g");
      guanaco = new RegExp("(@import[\\s]+(?!url\\())([^;]*)(;)", "g");
      pig = {
        resolveUrlsInStyle : function (deer, gazelle) {
          var giraffe; // n
          var rat; // r
          
                  {
            giraffe = deer.ownerDocument;
            rat = giraffe.createElement("a");
          }
          return deer.textContent = this.resolveUrlsInCssText(deer.textContent, gazelle, rat), 
          deer;
        },
        resolveUrlsInCssText : function (starling, emu, bear) {
          var kudu; // r
          
                  kudu = this.replaceUrls(starling, bear, emu, badger);
          return kudu = this.replaceUrls(kudu, bear, emu, guanaco);
        },
        replaceUrls : function (fish, tapir, jellyfish, loris) {
          return fish.replace(loris, function (coyote, stinkbug, toad, chimpanzee) {
            var louse; // o
            
                      louse = toad.replace(new RegExp("[\"']", "g"), "");
            return jellyfish && (louse = new URL(louse, jellyfish).href), 
            tapir.href = louse, 
            louse = tapir.href, 
            stinkbug + "'" + louse + "'" + chimpanzee;
          });
        }
      };
    }
    dove.path = pig;
  }), 
  window.HTMLImports.addModule(function (turkey) {
    var hyena; // a
    
      hyena = {
      async : true,
      ok : function (sparrow) {
        return sparrow.status >= 200 && sparrow.status < 300 || 304 === sparrow.status || 0 === sparrow.status;
      },
      load : function (hippopotamus, cockroach, scorpion) {
        var squirrel; // i
        
              squirrel = new XMLHttpRequest;
        return (turkey.flags.debug || turkey.flags.bust) && (hippopotamus = hippopotamus + "?" + Math.random()), 
        squirrel.open("GET", hippopotamus, hyena.async), 
        squirrel.addEventListener("readystatechange", function (yak) {
          var gorilla; // t
          var anteater; // n
          
                  if (4 === squirrel.readyState)
          {
            gorilla = null;
            try {
              anteater = squirrel.getResponseHeader("Location");
              anteater && (gorilla = "/" === anteater.substr(0, 1) ? location.origin + anteater : anteater);
            }
            catch (e) {
              console.error(yak.message);
            }
            cockroach.call(scorpion, ! hyena.ok(squirrel) && squirrel, squirrel.response || squirrel.responseText, 
            gorilla);
          }
        }), 
        squirrel.send(), 
        squirrel;
      },
      loadDocument : function (ant, spider, parrot) {
        this.load(ant, spider, parrot).responseType = "document";
      }
    };
    turkey.xhr = hyena;
  }), 
  window.HTMLImports.addModule(function (fox) {
    var elephant_seal; // a
    var dotterel; // s
    var rhinoceros; // t
    
      {
      elephant_seal = fox.xhr;
      dotterel = fox.flags;
      rhinoceros = function (falcon, pigeon) {
        this.cache = {
          
        }, this.onload = falcon, 
        this.oncomplete = pigeon, 
        this.inflight = 0, 
        this.pending = {
          
        };
      };
    }
    rhinoceros.prototype = {
      addNodes : function (flamingo) {
        var jackal; // t
        var fly; // n
        var vulture; // r
        
              this.inflight += flamingo.length;
        {
          {
            fly = 0;
            vulture = flamingo.length;
          }
          for (; vulture > fly && (jackal = flamingo[fly]); fly++)
            this.require(jackal);
        }
        this.checkDone();
      },
      addNode : function (lobster) {
        this.inflight++, this.require(lobster), this.checkDone();
      },
      require : function (buffalo) {
        var peafowl; // t
        
              peafowl = buffalo.src || buffalo.href;
        buffalo.__nodeUrl = peafowl, this.dedupe(peafowl, buffalo) || this.fetch(peafowl, buffalo);
      },
      dedupe : function (narwhal, ferret) {
        if (this.pending[narwhal])
          return this.pending[narwhal].push(ferret), true;
        return this.cache[narwhal] ? (this.onload(narwhal, ferret, this.cache[narwhal]), this.tail(), 
        true) : (this.pending[narwhal] = [ferret, ], false);
      },
      fetch : function (ox, polar_bear) {
        var crocodile; // e
        var curlew; // t
        var sardine; // n
        var herring; // i
        
              if (dotterel.load && console.log("fetch", ox, polar_bear), 
        ox)
          if (ox.match(new RegExp("^data:", "")))
          {
            {
              crocodile = ox.split(",");
              curlew = crocodile[0];
              sardine = crocodile[1];
            }
            sardine = curlew.indexOf(";base64") > -1 ? atob(sardine) : decodeURIComponent(sardine), 
            setTimeout(function () {
              this.receive(ox, polar_bear, null, sardine);
            }.bind(this), 
            0);
          }
          else
          {
            herring = function (red_panda, rabbit, zebra) {
              this.receive(ox, polar_bear, red_panda, rabbit, zebra);
            }.bind(this);
            elephant_seal.load(ox, herring);
          }
        else
          setTimeout(function () {
            this.receive(ox, polar_bear, {
              error : "href must be specified"
            }, 
            null);
          }.bind(this), 
          0);
      },
      receive : function (dolphin, salamander, gull, alpaca, ostrich) {
        var manatee; // i
        var red_deer; // a
        var barracuda; // s
        var hare; // d
        
              this.cache[dolphin] = alpaca;
        {
          {
            red_deer = this.pending[dolphin];
            barracuda = 0;
            hare = red_deer.length;
          }
          for (; hare > barracuda && (manatee = red_deer[barracuda]); barracuda++)
            this.onload(dolphin, manatee, alpaca, gull, ostrich), 
            this.tail();
        }
        this.pending[dolphin] = null;
      },
      tail : function () {
        -- this.inflight, this.checkDone();
      },
      checkDone : function () {
        this.inflight || this.oncomplete();
      }
    }, 
    fox.Loader = rhinoceros;
  }), 
  window.HTMLImports.addModule(function (hedgehog) {
    var porcupine; // t
    
      porcupine = function (seal) {
      this.addCallback = seal, this.mo = new MutationObserver(this.handler.bind(this));
    };
    porcupine.prototype = {
      handler : function (lark) {
        var wren; // t
        var partridge; // n
        var heron; // r
        
              {
          {
            partridge = 0;
            heron = lark.length;
          }
          for (; heron > partridge && (wren = lark[partridge]); partridge++)
            "childList" === wren.type && wren.addedNodes.length && this.addedNodes(wren.addedNodes);
        }
      },
      addedNodes : function (raccoon_1) {
        var hamster_1; // t
        var chinchilla_1; // n
        var ibex_1; // r
        
              this.addCallback && this.addCallback(raccoon_1);
        {
          {
            chinchilla_1 = 0;
            ibex_1 = raccoon_1.length;
          }
          for (; ibex_1 > chinchilla_1 && (hamster_1 = raccoon_1[chinchilla_1]); chinchilla_1++)
            hamster_1.children && hamster_1.children.length && this.addedNodes(hamster_1.children);
        }
      },
      observe : function (boar_1) {
        this.mo.observe(boar_1, {
          childList : true,
          subtree : true
        });
      }
    }, 
    hedgehog.Observer = porcupine;
  }), 
  window.HTMLImports.addModule(function (llama_1) {
    function cayenne_pepper(dunlin_1) {
      return "link" === dunlin_1.localName && dunlin_1.rel === mantis_1;
    }
    function bok_choy(termite_1) {
      var squid_1; // t
      
          squid_1 = lentils(termite_1);
      return "data:text/javascript;charset=utf-8," + encodeURIComponent(squid_1);
    }
    function lentils(rook_1) {
      return rook_1.textContent + artichoke(rook_1);
    }
    function artichoke(woodcock_1) {
      var antelope_1; // t
      var goose_1; // n
      var baboon_1; // r
      
          antelope_1 = woodcock_1.ownerDocument;
      antelope_1.__importedScripts = antelope_1.__importedScripts || 0;
      {
        goose_1 = woodcock_1.ownerDocument.baseURI;
        baboon_1 = antelope_1.__importedScripts ? "-" + antelope_1.__importedScripts : "";
      }
      return antelope_1.__importedScripts++, "\n//# sourceURL=" + goose_1 + baboon_1 + ".js\n";
    }
    function chamomile(bat_1) {
      var bison_1; // t
      
          bison_1 = bat_1.ownerDocument.createElement("style");
      return bison_1.textContent = bat_1.textContent, s.resolveUrlsInStyle(bison_1), 
      bison_1;
    }
      var capybara_1; // d
    var mink_1; // c
    var prairie_dog_1; // u
    var mantis_1; // l
    var dogfish_1; // e
    var snail_1; // h
    
      {
      capybara_1 = llama_1.rootDocument;
      mink_1 = llama_1.flags;
      prairie_dog_1 = llama_1.isIE;
      mantis_1 = llama_1.IMPORT_LINK_TYPE;
      dogfish_1 = "link[rel=" + mantis_1 + "]";
      snail_1 = {
        documentSelectors : dogfish_1,
        importsSelectors : [dogfish_1, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]', ].join(","),
        map : {
          link : "parseLink",
          script : "parseScript",
          style : "parseStyle"
        },
        dynamicElements : [],
        parseNext : function () {
          var tarsier_1; // e
          
                  tarsier_1 = this.nextToParse();
          tarsier_1 && this.parse(tarsier_1);
        },
        parse : function (cat_1) {
          var weasel_1; // t
          
                  if (this.isParsed(cat_1))
            return void (mink_1.parse && console.log("[%s] is already parsed", cat_1.localName));
          weasel_1 = this[this.map[cat_1.localName]];
          weasel_1 && (this.markParsing(cat_1), weasel_1.call(this, cat_1));
        },
        parseDynamic : function (beaver_1, komodo_dragon_1) {
          this.dynamicElements.push(beaver_1), komodo_dragon_1 || this.parseNext();
        },
        markParsing : function (armadillo_1) {
          mink_1.parse && console.log("parsing", armadillo_1), 
          this.parsingElement = armadillo_1;
        },
        markParsingComplete : function (woodpecker_1) {
          woodpecker_1.__importParsed = true, this.markDynamicParsingComplete(woodpecker_1), 
          woodpecker_1.__importElement && (woodpecker_1.__importElement.__importParsed = true, this.markDynamicParsingComplete(woodpecker_1.__importElement)), 
          this.parsingElement = null, 
          mink_1.parse && console.log("completed", woodpecker_1);
        },
        markDynamicParsingComplete : function (quelea_1) {
          var butterfly_1; // t
          
                  butterfly_1 = this.dynamicElements.indexOf(quelea_1);
          butterfly_1 >= 0 && this.dynamicElements.splice(butterfly_1, 1);
        },
        parseImport : function (oyster_1) {
          var stingray_1; // t
          
                  if (oyster_1["import"] = oyster_1.__doc, window.HTMLImports.__importsParsingHook && window.HTMLImports.__importsParsingHook(oyster_1), 
          oyster_1["import"] && (oyster_1["import"].__importParsed = true), 
          this.markParsingComplete(oyster_1), 
          oyster_1.__resource && ! oyster_1.__error ? oyster_1.dispatchEvent(new CustomEvent("load", {
            bubbles : false
          })) : oyster_1.dispatchEvent(new CustomEvent("error", {
            bubbles : false
          })), 
          oyster_1.__pending)
          {
            for (; oyster_1.__pending.length; )
              stingray_1 = oyster_1.__pending.shift(), stingray_1 && artichoke({
                target : oyster_1
              });
          }
          this.parseNext();
        },
        parseLink : function (dragonfly_1) {
          cayenne_pepper(dragonfly_1) ? this.parseImport(dragonfly_1) : (dragonfly_1.href = dragonfly_1.href, this.parseGeneric(dragonfly_1));
        },
        parseStyle : function (finch_1) {
          var meerkat_1; // t
          
                  meerkat_1 = finch_1;
          finch_1 = chamomile(finch_1), meerkat_1.__appliedElement = finch_1, 
          finch_1.__importElement = meerkat_1, 
          this.parseGeneric(finch_1);
        },
        parseGeneric : function (alligator_1) {
          this.trackElement(alligator_1), this.addElementToDocument(alligator_1);
        },
        rootImportForElement : function (kookabura_1) {
          var human_1; // t
          
                  {
            human_1 = kookabura_1;
            for (; human_1.ownerDocument.__importLink; )
              human_1 = human_1.ownerDocument.__importLink;
          }
          return human_1;
        },
        addElementToDocument : function (reindeer_1) {
          var elk_1; // t
          
                  elk_1 = this.rootImportForElement(reindeer_1.__importElement || reindeer_1);
          elk_1.parentNode.insertBefore(reindeer_1, elk_1);
        },
        trackElement : function (ape_1, dinosaur_1) {
          var kouprey_1; // o
          var echidna_1; // e
          var owl_1; // i
          var gaur_1; // a
          var locust_1; // s
          var magpie_1; // d
          
                  {
            kouprey_1 = function (snake_1) {
              ape_1.removeEventListener("load", kouprey_1), ape_1.removeEventListener("error", kouprey_1), 
              dinosaur_1 && dinosaur_1(snake_1), 
              this.markParsingComplete(ape_1), 
              this.parseNext();
            };
          }
          if (ape_1.addEventListener("load", kouprey_1), ape_1.addEventListener("error", kouprey_1), 
          prairie_dog_1 && "style" === ape_1.localName)
          {
            echidna_1 = false;
            if (-1 == ape_1.textContent.indexOf("@import"))
              echidna_1 = true;
            else
              if (ape_1.sheet)
              {
                echidna_1 = true;
                {
                  {
                    gaur_1 = ape_1.sheet.cssRules;
                    locust_1 = gaur_1 ? gaur_1.length : 0;
                    magpie_1 = 0;
                  }
                  for (; locust_1 > magpie_1 && (owl_1 = gaur_1[magpie_1]); magpie_1++)
                    owl_1.type === CSSRule.IMPORT_RULE && (echidna_1 = echidna_1 && Boolean(owl_1.styleSheet));
                }
              }
            echidna_1 && setTimeout(function () {
              ape_1.dispatchEvent(new CustomEvent("load", {
                bubbles : false
              }));
            });
          }
        },
        parseScript : function (hummingbird_1) {
          var sheep_1; // t
          
                  sheep_1 = document.createElement("script");
          sheep_1.__importElement = hummingbird_1, sheep_1.src = hummingbird_1.src ? hummingbird_1.src : bok_choy(hummingbird_1), 
          llama_1.currentScript = hummingbird_1, 
          this.trackElement(sheep_1, function (goldfinch_1) {
            sheep_1.parentNode && sheep_1.parentNode.removeChild(sheep_1), 
            llama_1.currentScript = null;
          }), 
          this.addElementToDocument(sheep_1);
        },
        nextToParse : function () {
          return this._mayParse = [], ! this.parsingElement && (this.nextToParseInDoc(capybara_1) || this.nextToParseDynamic());
        },
        nextToParseInDoc : function (swan_1, oryx_1) {
          var turtle_1; // n
          var cormorant_1; // r
          var cattle_1; // o
          var tiger_1; // i
          
                  if (swan_1 && this._mayParse.indexOf(swan_1) < 0)
          {
            this._mayParse.push(swan_1);
            {
              {
                cormorant_1 = swan_1.querySelectorAll(this.parseSelectorsForNode(swan_1));
                cattle_1 = 0;
                tiger_1 = cormorant_1.length;
              }
              for (; tiger_1 > cattle_1 && (turtle_1 = cormorant_1[cattle_1]); cattle_1++)
                if (! this.isParsed(turtle_1))
                  return this.hasResource(turtle_1) ? cayenne_pepper(turtle_1) ? this.nextToParseInDoc(turtle_1.__doc, turtle_1) : turtle_1 : void 0;
            }
          }
          return oryx_1;
        },
        nextToParseDynamic : function () {
          return this.dynamicElements[0];
        },
        parseSelectorsForNode : function (lion_1) {
          var frog_1; // t
          
                  frog_1 = lion_1.ownerDocument || lion_1;
          return frog_1 === capybara_1 ? this.documentSelectors : this.importsSelectors;
        },
        isParsed : function (skunk_1) {
          return skunk_1.__importParsed;
        },
        needsDynamicParsing : function (lemur_1) {
          return this.dynamicElements.indexOf(lemur_1) >= 0;
        },
        hasResource : function (goat_1) {
          return cayenne_pepper(goat_1) && void 0 === goat_1.__doc ? false : true;
        }
      };
    }
    llama_1.parser = snail_1, llama_1.IMPORT_SELECTOR = dogfish_1;
  }), 
  window.HTMLImports.addModule(function (wolf_1) {
    function fennel(sea_urchin_1) {
      return calabrese(sea_urchin_1, c);
    }
    function calabrese(grouse_1, sandpiper_1) {
      return "link" === grouse_1.localName && grouse_1.getAttribute("rel") === sandpiper_1;
    }
    function rhubarb(mule_1) {
      return ! ! Object.getOwnPropertyDescriptor(mule_1, "baseURI");
    }
    function kidney_bean(goldfish_1, caribou_1) {
      var raven_1; // n
      var ram_1; // r
      var salmon_1; // o
      
          raven_1 = document.implementation.createHTMLDocument(c);
      raven_1._URL = caribou_1;
      ram_1 = raven_1.createElement("base");
      ram_1.setAttribute("href", caribou_1), raven_1.baseURI || rhubarb(raven_1) || Object.defineProperty(raven_1, "baseURI", {
        value : caribou_1
      });
      salmon_1 = raven_1.createElement("meta");
      return salmon_1.setAttribute("charset", "utf-8"), raven_1.head.appendChild(salmon_1), 
      raven_1.head.appendChild(ram_1), 
      raven_1.body.innerHTML = goldfish_1, 
      window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(raven_1), 
      raven_1;
    }
      var gnat_1; // d
    var quail_1; // n
    var porpoise_1; // r
    var chamois_1; // o
    var otter_1; // u
    var sand_dollar_1; // l
    var jaguar_1; // h
    var dugong_1; // m
    var water_buffalo_1; // p
    
      {
      gnat_1 = wolf_1.flags;
      quail_1 = wolf_1.IMPORT_SELECTOR;
      porpoise_1 = wolf_1.rootDocument;
      chamois_1 = wolf_1.Loader;
      otter_1 = wolf_1.Observer;
      sand_dollar_1 = wolf_1.parser;
      jaguar_1 = {
        documents : {
          
        },
        documentPreloadSelectors : quail_1,
        importsPreloadSelectors : [quail_1, ].join(","),
        loadNode : function (cheetah_1) {
          dugong_1.addNode(cheetah_1);
        },
        loadSubtree : function (viper_1) {
          var pheasant_1; // t
          
                  pheasant_1 = this.marshalNodes(viper_1);
          dugong_1.addNodes(pheasant_1);
        },
        marshalNodes : function (pony_1) {
          return pony_1.querySelectorAll(this.loadSelectorsForNode(pony_1));
        },
        loadSelectorsForNode : function (hawk_1) {
          var spoonbill_1; // t
          
                  spoonbill_1 = hawk_1.ownerDocument || hawk_1;
          return spoonbill_1 === porpoise_1 ? this.documentPreloadSelectors : this.importsPreloadSelectors;
        },
        loaded : function (swallow_1, octopus_1, newt_1, caterpillar_1, kingfisher_1) {
          var nightingale_1; // i
          
                  if (gnat_1.load && console.log("loaded", swallow_1, octopus_1), 
          octopus_1.__resource = newt_1, 
          octopus_1.__error = caterpillar_1, 
          fennel(octopus_1))
          {
            nightingale_1 = this.documents[swallow_1];
            void 0 === nightingale_1 && (nightingale_1 = caterpillar_1 ? null : kidney_bean(newt_1, kingfisher_1 || swallow_1), 
            nightingale_1 && (nightingale_1.__importLink = octopus_1, this.bootDocument(nightingale_1)), 
            this.documents[swallow_1] = nightingale_1), 
            octopus_1.__doc = nightingale_1;
          }
          sand_dollar_1.parseNext();
        },
        bootDocument : function (wombat_1) {
          this.loadSubtree(wombat_1), this.observer.observe(wombat_1), 
          sand_dollar_1.parseNext();
        },
        loadedAll : function () {
          sand_dollar_1.parseNext();
        }
      };
      dugong_1 = new chamois_1(jaguar_1.loaded.bind(jaguar_1), jaguar_1.loadedAll.bind(jaguar_1));
    }
    if (jaguar_1.observer = new otter_1, ! document.baseURI)
    {
      water_buffalo_1 = {
        get : function () {
          var crane_1; // e
          
                  crane_1 = document.querySelector("base");
          return crane_1 ? crane_1.href : window.location.href;
        },
        configurable : true
      };
      Object.defineProperty(document, "baseURI", water_buffalo_1), 
      Object.defineProperty(porpoise_1, "baseURI", water_buffalo_1);
    }
    wolf_1.importer = jaguar_1, wolf_1.importLoader = dugong_1;
  }), 
  window.HTMLImports.addModule(function (chough_1) {
    var goshawk_1; // s
    var monkey_1; // d
    var horse_1; // t
    
      {
      goshawk_1 = chough_1.parser;
      monkey_1 = chough_1.importer;
      horse_1 = {
        added : function (okapi_1) {
          var worm_1; // t
          var hornet_1; // n
          var quetzal_1; // r
          var seahorse_1; // o
          var chicken_1; // i
          var mallard_1; // a
          
                  {
            {
              chicken_1 = 0;
              mallard_1 = okapi_1.length;
            }
            for (; mallard_1 > chicken_1 && (seahorse_1 = okapi_1[chicken_1]); chicken_1++)
              worm_1 || (worm_1 = seahorse_1.ownerDocument, hornet_1 = goshawk_1.isParsed(worm_1)), 
              quetzal_1 = this.shouldLoadNode(seahorse_1), 
              quetzal_1 && monkey_1.loadNode(seahorse_1), 
              this.shouldParseNode(seahorse_1) && hornet_1 && goshawk_1.parseDynamic(seahorse_1, quetzal_1);
          }
        },
        shouldLoadNode : function (aardvark_1) {
          return 1 === aardvark_1.nodeType && n.call(aardvark_1, monkey_1.loadSelectorsForNode(aardvark_1));
        },
        shouldParseNode : function (albatross_1) {
          return 1 === albatross_1.nodeType && n.call(albatross_1, goshawk_1.parseSelectorsForNode(albatross_1));
        }
      };
    }
    monkey_1.observer.addCallback = horse_1.added.bind(horse_1);
  }), 
  function (cobra_1) {
    function jalapeno() {
      window.HTMLImports.importer.bootDocument(r);
    }
      var walrus_1; // n
    
      walrus_1 = cobra_1.initializeModules;
    cobra_1.isIE;
    if (! cobra_1.useNative)
    {
      walrus_1();
      "complete" === document.readyState || "interactive" === document.readyState && ! window.attachEvent ? jalapeno() : document.addEventListener("DOMContentLoaded", t);
    }
  }(window.HTMLImports);
  