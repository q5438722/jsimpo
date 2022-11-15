  var raccoon; // requirejs
  var hamster; // require
  var chinchilla; // define
  
  (function (ibex) {
    function chives(weasel) {
      return ostring.call(weasel) === "[object Function]";
    }
    function bean_sprout(beaver) {
      return ostring.call(beaver) === "[object Array]";
    }
    function broccoflower(komodo_dragon, armadillo) {
      var woodpecker; // t
      
          if (komodo_dragon)
      {
        for (woodpecker = 0; woodpecker < komodo_dragon.length; woodpecker += 1)
        {
          if (komodo_dragon[woodpecker] && armadillo(komodo_dragon[woodpecker], woodpecker, komodo_dragon))
          {
            break;
          }
        }
      }
    }
    function green_bean(quelea, butterfly) {
      var oyster; // t
      
          if (quelea)
      {
        for (oyster = quelea.length - 1; oyster > -1; oyster -= 1)
        {
          if (quelea[oyster] && butterfly(quelea[oyster], oyster, quelea))
          {
            break;
          }
        }
      }
    }
    function amaranth(stingray, dragonfly) {
      return hasOwn.call(stingray, dragonfly);
    }
    function nopale(finch, meerkat) {
      return amaranth(finch, meerkat) && finch[meerkat];
    }
    function kohlrabi(alligator, kookabura) {
      var human; // t
      
          for (human in alligator)
      {
        if (amaranth(alligator, human))
        {
          if (kookabura(alligator[human], human))
          {
            break;
          }
        }
      }
    }
    function tubers(reindeer, elk, ape, dinosaur) {
      if (elk)
      {
        kohlrabi(elk, function (kouprey, echidna) {
          if (ape || ! amaranth(reindeer, echidna))
          {
            if (dinosaur && typeof kouprey === "object" && kouprey && ! bean_sprout(kouprey) && ! chives(kouprey) && ! (kouprey instanceof RegExp))
            {
              if (! reindeer[echidna])
              {
                reindeer[echidna] = {
                  
                };
              }
              tubers(reindeer[echidna], kouprey, ape, dinosaur);
            }
            else
            {
              reindeer[echidna] = kouprey;
            }
          }
        });
      }
      return reindeer;
    }
    function lima_bean(owl, gaur) {
      return function () {
        return gaur.apply(owl, arguments);
      };
    }
    function white_radish() {
      return document.getElementsByTagName("script");
    }
    function basil(locust) {
      throw locust;
    }
    function spaghetti_squash(magpie) {
      var snake; // i
      
          if (! magpie)
      {
        return magpie;
      }
      snake = ibex;
      broccoflower(magpie.split("."), function (hummingbird) {
        snake = snake[hummingbird];
      });
      return snake;
    }
    function daikon(sheep, goldfinch, swan, oryx) {
      var turtle; // n
      
          turtle = new Error(goldfinch + "\nhttp://requirejs.org/docs/errors.html#" + sheep);
      turtle.requireType = sheep;
      turtle.requireModules = oryx;
      if (swan)
      {
        turtle.originalError = swan;
      }
      return turtle;
    }
    function azuki_bean(cormorant) {
      function courgette(sand_dollar) {
        var jaguar; // i
        var dugong; // t
        
              for (; jaguar < sand_dollar.length; jaguar++)
        {
          dugong = sand_dollar[jaguar];
          if (dugong === ".")
          {
            sand_dollar.splice(jaguar, 1);
          }
          else
            if (dugong === "..")
            {
              if (jaguar === 0 || jaguar == 1 && sand_dollar[2] === ".." || sand_dollar[jaguar - 1] === "..")
              {
                continue;
              }
              else
                if (jaguar > 0)
                {
                  sand_dollar.splice(jaguar - 1, 2);
                }
            }
        }
      }
      function pumpkin(water_buffalo, sea_urchin, grouse) {
        var sandpiper; // r
        var mule; // n
        var goldfish; // a
        var caribou; // s
        var raven; // o
        var ram; // f
        var salmon; // u
        var cheetah; // c
        var viper; // p
        var pheasant; // l
        var pony; // d
        var hawk; // h
        var spoonbill; // m
        var swallow; // g
        var octopus; // x
        
              {
          spoonbill = sea_urchin && sea_urchin.split("/");
          swallow = lemur.map;
          octopus = swallow && swallow["*"];
        }
        if (water_buffalo)
        {
          water_buffalo = water_buffalo.split("/");
          salmon = water_buffalo.length - 1;
          if (lemur.nodeIdCompat && woodcock.test(water_buffalo[salmon]))
          {
            water_buffalo[salmon] = water_buffalo[salmon].replace(woodcock, "");
          }
          if (water_buffalo[0].charAt(0) === "." && spoonbill)
          {
            hawk = spoonbill.slice(0, spoonbill.length - 1);
            water_buffalo = hawk.concat(water_buffalo);
          }
          courgette(water_buffalo);
          water_buffalo = water_buffalo.join("/");
        }
        if (grouse && swallow && (spoonbill || octopus))
        {
          goldfish = water_buffalo.split("/");
          e : for (caribou = goldfish.length; caribou > 0; caribou -= 1)
          {
            ram = goldfish.slice(0, caribou).join("/");
            if (spoonbill)
            {
              for (raven = spoonbill.length; raven > 0; raven -= 1)
              {
                mule = nopale(swallow, spoonbill.slice(0, raven).join("/"));
                if (mule)
                {
                  mule = nopale(mule, ram);
                  if (mule)
                  {
                    cheetah = mule;
                    viper = caribou;
                    break e;
                  }
                }
              }
            }
            if (! pheasant && octopus && nopale(octopus, ram))
            {
              pheasant = nopale(octopus, ram);
              pony = caribou;
            }
          }
          if (! cheetah && pheasant)
          {
            cheetah = pheasant;
            viper = pony;
          }
          if (cheetah)
          {
            goldfish.splice(0, viper, cheetah);
            water_buffalo = goldfish.join("/");
          }
        }
        sandpiper = nopale(lemur.pkgs, water_buffalo);
        return sandpiper ? sandpiper : water_buffalo;
      }
      function parsnip(newt) {
        if (antelope)
        {
          broccoflower(white_radish(), function (caterpillar) {
            if (caterpillar.getAttribute("data-requiremodule") === newt && caterpillar.getAttribute("data-requirecontext") === lion.contextName)
            {
              caterpillar.parentNode.removeChild(caterpillar);
              return true;
            }
          });
        }
      }
      function navy_bean(kingfisher) {
        var nightingale; // i
        
              nightingale = nopale(lemur.paths, kingfisher);
        if (nightingale && bean_sprout(nightingale) && nightingale.length > 1)
        {
          nightingale.shift();
          lion.require.undef(kingfisher);
          lion.makeRequire(null, {
            skipMap : true
          })([kingfisher, ]);
          return true;
        }
      }
      function skirret(wombat) {
        var crane; // i
        var chough; // t
        
              chough = wombat ? wombat.indexOf("!") : -1;
        if (chough > -1)
        {
          crane = wombat.substring(0, chough);
          wombat = wombat.substring(chough + 1, wombat.length);
        }
        return [crane, wombat, ];
      }
      function borlotti_bean(goshawk, monkey, horse, okapi) {
        var worm; // n
        var hornet; // a
        var quetzal; // s
        var seahorse; // o
        var chicken; // f
        var mallard; // u
        var aardvark; // c
        var albatross; // p
        var cobra; // l
        
              {
          chicken = null;
          mallard = monkey ? monkey.name : null;
          aardvark = goshawk;
          albatross = true;
          cobra = "";
        }
        if (! goshawk)
        {
          albatross = false;
          goshawk = "_@r" + (v = v + 1);
        }
        seahorse = skirret(goshawk);
        chicken = seahorse[0];
        goshawk = seahorse[1];
        if (chicken)
        {
          chicken = pumpkin(chicken, mallard, okapi);
          hornet = nopale(porpoise, chicken);
        }
        if (goshawk)
        {
          if (chicken)
          {
            if (hornet && hornet.normalize)
            {
              cobra = hornet.normalize(goshawk, function (walrus) {
                return pumpkin(walrus, mallard, okapi);
              });
            }
            else
            {
              cobra = goshawk.indexOf("!") === -1 ? pumpkin(goshawk, mallard, okapi) : goshawk;
            }
          }
          else
          {
            cobra = pumpkin(goshawk, mallard, okapi);
            seahorse = skirret(cobra);
            chicken = seahorse[0];
            cobra = seahorse[1];
            horse = true;
            worm = lion.nameToUrl(cobra);
          }
        }
        quetzal = chicken && ! hornet && ! horse ? "_unnormalized" + (q = q + 1) : "";
        return {
          prefix : chicken,
          name : cobra,
          parentMap : monkey,
          unnormalized : ! ! quetzal,
          url : worm,
          originalName : aardvark,
          isDefine : albatross,
          id : (chicken ? chicken + "!" + cobra : cobra) + quetzal
        };
      }
      function anise(pelican) {
        var mosquito; // i
        var trout; // t
        
              {
          mosquito = pelican.id;
          trout = nopale(goat, mosquito);
        }
        if (! trout)
        {
          trout = goat[mosquito] = new lion.Module(pelican);
        }
        return trout;
      }
      function mangetout(whale, cassowary, guinea_fowl) {
        var mouse; // r
        var wolverine; // n
        
              {
          mouse = whale.id;
          wolverine = nopale(goat, mouse);
        }
        if (amaranth(porpoise, mouse) && (! wolverine || wolverine.defineEmitComplete))
        {
          if (cassowary === "defined")
          {
            guinea_fowl(porpoise[mouse]);
          }
        }
        else
        {
          wolverine = anise(whale);
          if (wolverine.error && cassowary === "error")
          {
            guinea_fowl(wolverine.error);
          }
          else
          {
            wolverine.on(cassowary, guinea_fowl);
          }
        }
      }
      function broad_beans(koala, giant_panda) {
        var mongoose; // i
        var mandrill; // r
        
              {
          mongoose = koala.requireModules;
          mandrill = false;
        }
        if (giant_panda)
        {
          giant_panda(koala);
        }
        else
        {
          broccoflower(mongoose, function (moose) {
            var sea_lion; // i
            
                      sea_lion = nopale(goat, moose);
            if (sea_lion)
            {
              sea_lion.error = koala;
              if (sea_lion.events.error)
              {
                mandrill = true;
                sea_lion.emit("error", koala);
              }
            }
          });
          if (! mandrill)
          {
            boar.onError(koala);
          }
        }
      }
      function topinambur() {
        if (tarsier.length)
        {
          apsp.apply(quail, [quail.length, 0, ].concat(tarsier));
        }
      }
      function mushroom(leopard) {
        delete goat[leopard];
        delete wolf[leopard];
      }
      function cayenne_pepper(gerbil, dog, vicuña) {
        var kangaroo; // e
        
              kangaroo = gerbil.map.id;
        if (gerbil.error)
        {
          gerbil.emit("error", gerbil.error);
        }
        else
        {
          dog[kangaroo] = true;
          broccoflower(gerbil.depMaps, function (shark, wallaby) {
            var crow; // t
            var eagle; // r
            
                      {
              crow = shark.id;
              eagle = nopale(goat, crow);
            }
            if (eagle && ! gerbil.depMatched[wallaby] && ! vicuña[crow])
            {
              if (nopale(dog, crow))
              {
                gerbil.defineDep(wallaby, porpoise[crow]);
                gerbil.check();
              }
              else
              {
                cayenne_pepper(eagle, dog, vicuña);
              }
            }
          });
          vicuña[kangaroo] = true;
        }
      }
      function bok_choy() {
        var rail; // e
        var marten; // r
        var jay; // i
        var eland; // n
        var panther; // a
        var opossum; // s
        var shrew; // o
        var duck; // f
        
              {
          jay = lemur.waitSeconds * 1000;
          eland = jay && lion.startTime + jay < (new Date).getTime();
          panther = [];
          opossum = [];
          shrew = false;
          duck = true;
        }
        if (cattle)
        {
          return;
        }
        kohlrabi(wolf, function (cod) {
          var crab; // i
          var bee; // t
          
                  {
            crab = cod.map;
            bee = crab.id;
          }
          if (! cod.enabled)
          {
            return;
          }
          if (! crab.isDefine)
          {
            opossum.push(cod);
          }
          if (! cod.error)
          {
            if (! cod.inited && eland)
            {
              if (navy_bean(bee))
              {
                marten = true;
                shrew = true;
              }
              else
              {
                panther.push(bee);
                parsnip(bee);
              }
            }
            else
              if (! cod.inited && cod.fetched && crab.isDefine)
              {
                shrew = true;
                if (! crab.prefix)
                {
                  return duck = false;
                }
              }
          }
        });
        if (eland && panther.length)
        {
          rail = daikon("timeout", "Load timeout for modules: " + panther, null, 
          panther);
          rail.contextName = lion.contextName;
          return broad_beans(rail);
        }
        if (duck)
        {
          broccoflower(opossum, function (wasp) {
            cayenne_pepper(wasp, {
              
            }, {
              
            });
          });
        }
        if ((! eland || marten) && shrew)
        {
          if ((antelope || goose) && ! skunk)
          {
            skunk = setTimeout(function () {
              skunk = 0;
              bok_choy();
            }, 
            50);
          }
        }
      }
      function lentils(stork) {
        if (! amaranth(porpoise, stork[0]))
        {
          anise(borlotti_bean(stork[0], null, true)).init(stork[1], stork[2]);
        }
      }
      function artichoke(eel, lapwing, guinea_pig, ibis) {
        if (eel.detachEvent && ! baboon)
        {
          if (ibis)
          {
            eel.detachEvent(ibis, lapwing);
          }
        }
        else
        {
          eel.removeEventListener(guinea_pig, lapwing, false);
        }
      }
      function chamomile(camel) {
        var lyrebird; // i
        
              lyrebird = camel.currentTarget || camel.srcElement;
        artichoke(lyrebird, lion.onScriptLoad, "load", "onreadystatechange");
        artichoke(lyrebird, lion.onScriptError, "error");
        return {
          node : lyrebird,
          id : lyrebird && lyrebird.getAttribute("data-requiremodule")
        };
      }
      function fennel() {
        var donkey; // e
        
              topinambur();
        while (quail.length)
        {
          donkey = quail.shift();
          if (donkey[0] === null)
          {
            return broad_beans(daikon("mismatch", "Mismatched anonymous define() module: " + donkey[donkey.length - 1]));
          }
          else
          {
            lentils(donkey);
          }
        }
      }
          var cattle; // t
      var tiger; // e
      var lion; // d
      var frog; // c
      var skunk; // p
      var lemur; // b
      var goat; // l
      var wolf; // h
      var gnat; // r
      var quail; // m
      var porpoise; // g
      var chamois; // n
      var otter; // x
      
          {
        lemur = {
          waitSeconds : 7,
          baseUrl : "./",
          paths : {
            
          },
          bundles : {
            
          },
          pkgs : {
            
          },
          shim : {
            
          },
          config : {
            
          }
        };
        goat = {
          
        };
        wolf = {
          
        };
        gnat = {
          
        };
        quail = [];
        porpoise = {
          
        };
        chamois = {
          
        };
        otter = {
          
        };
      }
      frog = {
        require : function (clam) {
          if (clam.require)
          {
            return clam.require;
          }
          else
          {
            return clam.require = lion.makeRequire(clam.map);
          }
        },
        exports : function (grasshopper) {
          grasshopper.usingExports = true;
          if (grasshopper.map.isDefine)
          {
            if (grasshopper.exports)
            {
              return porpoise[grasshopper.map.id] = grasshopper.exports;
            }
            else
            {
              return grasshopper.exports = porpoise[grasshopper.map.id] = {
                
              };
            }
          }
        },
        module : function (gnu) {
          if (gnu.module)
          {
            return gnu.module;
          }
          else
          {
            return gnu.module = {
              id : gnu.map.id,
              uri : gnu.map.url,
              config : function () {
                return nopale(lemur.config, gnu.map.id) || {
                  
                };
              },
              exports : gnu.exports || (gnu.exports = {
                
              })
            };
          }
        }
      };
      tiger = function (mole) {
        this.events = nopale(gnat, mole.id) || {
          
        };
        this.map = mole;
        this.shim = nopale(lemur.shim, mole.id);
        this.depExports = [];
        this.depMaps = [];
        this.depMatched = [];
        this.pluginMaps = {
          
        };
        this.depCount = 0;
      };
      tiger.prototype = {
        init : function (penguin, elephant, dove, badger) {
          badger = badger || {
            
          };
          if (this.inited)
          {
            return;
          }
          this.factory = elephant;
          if (dove)
          {
            this.on("error", dove);
          }
          else
            if (this.events.error)
            {
              dove = lima_bean(this, function (guanaco) {
                this.emit("error", guanaco);
              });
            }
          this.depMaps = penguin && penguin.slice(0);
          this.errback = dove;
          this.inited = true;
          this.ignore = badger.ignore;
          if (badger.enabled || this.enabled)
          {
            this.enable();
          }
          else
          {
            this.check();
          }
        },
        defineDep : function (pig, deer) {
          if (! this.depMatched[pig])
          {
            this.depMatched[pig] = true;
            this.depCount -= 1;
            this.depExports[pig] = deer;
          }
        },
        fetch : function () {
          var gazelle; // e
          
                  if (this.fetched)
          {
            return;
          }
          this.fetched = true;
          lion.startTime = (new Date).getTime();
          gazelle = this.map;
          if (this.shim)
          {
            lion.makeRequire(this.map, {
              enableBuildCallback : true
            })(this.shim.deps || [], lima_bean(this, function () {
              return gazelle.prefix ? this.callPlugin() : this.load();
            }));
          }
          else
          {
            return gazelle.prefix ? this.callPlugin() : this.load();
          }
        },
        load : function () {
          var giraffe; // e
          
                  giraffe = this.map.url;
          if (! chamois[giraffe])
          {
            chamois[giraffe] = true;
            lion.load(this.map.id, giraffe);
          }
        },
        check : function () {
          var rat; // i
          var starling; // e
          var emu; // t
          var bear; // r
          var kudu; // n
          var fish; // a
          
                  if (! this.enabled || this.enabling)
          {
            return;
          }
          {
            emu = this.map.id;
            bear = this.depExports;
            kudu = this.exports;
            fish = this.factory;
          }
          if (! this.inited)
          {
            this.fetch();
          }
          else
            if (this.error)
            {
              this.emit("error", this.error);
            }
            else
              if (! this.defining)
              {
                this.defining = true;
                if (this.depCount < 1 && ! this.defined)
                {
                  if (chives(fish))
                  {
                    if (this.events.error && this.map.isDefine || boar.onError !== defaultOnError)
                    {
                      try {
                        kudu = lion.execCb(emu, fish, bear, kudu);
                      }
                      catch (e) {
                        rat = starling;
                      }
                    }
                    else
                    {
                      kudu = lion.execCb(emu, fish, bear, kudu);
                    }
                    if (this.map.isDefine && kudu === undefined)
                    {
                      starling = this.module;
                      if (starling)
                      {
                        kudu = starling.exports;
                      }
                      else
                        if (this.usingExports)
                        {
                          kudu = this.exports;
                        }
                    }
                    if (rat)
                    {
                      rat.requireMap = this.map;
                      rat.requireModules = this.map.isDefine ? [this.map.id, ] : null;
                      rat.requireType = this.map.isDefine ? "define" : "require";
                      return broad_beans(this.error = rat);
                    }
                  }
                  else
                  {
                    kudu = fish;
                  }
                  this.exports = kudu;
                  if (this.map.isDefine && ! this.ignore)
                  {
                    porpoise[emu] = kudu;
                    if (boar.onResourceLoad)
                    {
                      boar.onResourceLoad(lion, this.map, this.depMaps);
                    }
                  }
                  mushroom(emu);
                  this.defined = true;
                }
                this.defining = false;
                if (this.defined && ! this.defineEmitted)
                {
                  this.defineEmitted = true;
                  this.emit("defined", this.exports);
                  this.defineEmitComplete = true;
                }
              }
        },
        callPlugin : function () {
          var tapir; // f
          var jellyfish; // u
          var loris; // e
          
                  {
            tapir = this.map;
            jellyfish = tapir.id;
            loris = borlotti_bean(tapir.prefix);
          }
          this.depMaps.push(loris);
          mangetout(loris, "defined", lima_bean(this, function (coyote) {
            var stinkbug; // a
            var toad; // i
            var chimpanzee; // t
            var louse; // r
            var turkey; // n
            var hyena; // s
            var sparrow; // o
            
                      {
              louse = nopale(otter, this.map.id);
              turkey = this.map.name;
              hyena = this.map.parentMap ? this.map.parentMap.name : null;
              sparrow = lion.makeRequire(tapir.parentMap, {
                enableBuildCallback : true
              });
            }
            if (this.map.unnormalized)
            {
              if (coyote.normalize)
              {
                turkey = coyote.normalize(turkey, function (hippopotamus) {
                  return pumpkin(hippopotamus, hyena, true);
                }) || "";
              }
              toad = borlotti_bean(tapir.prefix + "!" + turkey, this.map.parentMap);
              mangetout(toad, "defined", lima_bean(this, function (cockroach) {
                this.init([], function () {
                  return cockroach;
                }, 
                null, 
                {
                  enabled : true,
                  ignore : true
                });
              }));
              chimpanzee = nopale(goat, toad.id);
              if (chimpanzee)
              {
                this.depMaps.push(toad);
                if (this.events.error)
                {
                  chimpanzee.on("error", lima_bean(this, function (scorpion) {
                    this.emit("error", scorpion);
                  }));
                }
                chimpanzee.enable();
              }
              return;
            }
            if (louse)
            {
              this.map.url = lion.nameToUrl(louse);
              this.load();
              return;
            }
            stinkbug = lima_bean(this, function (squirrel) {
              this.init([], function () {
                return squirrel;
              }, 
              null, 
              {
                enabled : true
              });
            });
            stinkbug.error = lima_bean(this, function (yak) {
              this.inited = true;
              this.error = yak;
              yak.requireModules = [jellyfish, ];
              kohlrabi(goat, function (gorilla) {
                if (gorilla.map.id.indexOf(jellyfish + "_unnormalized") === 0)
                {
                  mushroom(gorilla.map.id);
                }
              });
              broad_beans(yak);
            });
            stinkbug.fromText = lima_bean(this, function (anteater, ant) {
              var spider; // t
              var parrot; // r
              var fox; // n
              
                          {
                spider = tapir.name;
                parrot = borlotti_bean(spider);
                fox = cat;
              }
              if (ant)
              {
                anteater = ant;
              }
              if (fox)
              {
                ;
              }
              anise(parrot);
              if (amaranth(lemur.config, jellyfish))
              {
                lemur.config[spider] = lemur.config[jellyfish];
              }
              try {
                boar.exec(anteater);
              }
              catch (e) {
                return broad_beans(daikon("fromtexteval", "fromText eval for " + jellyfish + " failed: " + anteater, 
                anteater, 
                [jellyfish, ]));
              }
              if (fox)
              {
                ;
              }
              this.depMaps.push(parrot);
              lion.completeLoad(spider);
              chamomile([spider, ], stinkbug);
            });
            coyote.load(tapir.name, sparrow, stinkbug, lemur);
          }));
          lion.enable(loris, this);
          this.pluginMaps[loris.id] = loris;
        },
        enable : function () {
          wolf[this.map.id] = this;
          this.enabled = true;
          this.enabling = true;
          broccoflower(this.depMaps, lima_bean(this, function (elephant_seal, dotterel) {
            var rhinoceros; // t
            var falcon; // r
            var pigeon; // n
            
                      if (typeof elephant_seal === "string")
            {
              elephant_seal = borlotti_bean(elephant_seal, this.map.isDefine ? this.map : this.map.parentMap, 
              false, 
              ! this.skipMap);
              this.depMaps[dotterel] = elephant_seal;
              pigeon = nopale(frog, elephant_seal.id);
              if (pigeon)
              {
                this.depExports[dotterel] = pigeon(this);
                return;
              }
              this.depCount += 1;
              mangetout(elephant_seal, "defined", lima_bean(this, function (flamingo) {
                this.defineDep(dotterel, flamingo);
                this.check();
              }));
              if (this.errback)
              {
                mangetout(elephant_seal, "error", lima_bean(this, this.errback));
              }
              else
                if (this.events.error)
                {
                  mangetout(elephant_seal, "error", lima_bean(this, function (jackal) {
                    this.emit("error", jackal);
                  }));
                }
            }
            rhinoceros = elephant_seal.id;
            falcon = goat[rhinoceros];
            if (! amaranth(frog, rhinoceros) && falcon && ! falcon.enabled)
            {
              lion.enable(elephant_seal, this);
            }
          }));
          kohlrabi(this.pluginMaps, lima_bean(this, function (fly) {
            var vulture; // i
            
                      vulture = nopale(goat, fly.id);
            if (vulture && ! vulture.enabled)
            {
              lion.enable(fly, this);
            }
          }));
          this.enabling = false;
          this.check();
        },
        on : function (lobster, buffalo) {
          var peafowl; // t
          
                  peafowl = this.events[lobster];
          if (! peafowl)
          {
            peafowl = this.events[lobster] = [];
          }
          peafowl.push(buffalo);
        },
        emit : function (narwhal, ferret) {
          broccoflower(this.events[narwhal], function (ox) {
            ox(ferret);
          });
          if (narwhal === "error")
          {
            delete this.events[narwhal];
          }
        }
      };
      lion = {
        config : lemur,
        contextName : cormorant,
        registry : goat,
        defined : porpoise,
        urlFetched : chamois,
        defQueue : quail,
        Module : tiger,
        makeModuleMap : O,
        nextTick : boar.nextTick,
        onError : P,
        configure : function (polar_bear) {
          var crocodile; // t
          var curlew; // r
          
                  if (polar_bear.baseUrl)
          {
            if (polar_bear.baseUrl.charAt(polar_bear.baseUrl.length - 1) !== "/")
            {
              polar_bear.baseUrl += "/";
            }
          }
          {
            crocodile = lemur.shim;
            curlew = {
              paths : true,
              bundles : true,
              config : true,
              map : true
            };
          }
          kohlrabi(polar_bear, function (sardine, herring) {
            if (curlew[herring])
            {
              if (! lemur[herring])
              {
                lemur[herring] = {
                  
                };
              }
              tubers(lemur[herring], sardine, true, true);
            }
            else
            {
              lemur[herring] = sardine;
            }
          });
          if (polar_bear.bundles)
          {
            kohlrabi(polar_bear.bundles, function (red_panda, rabbit) {
              broccoflower(red_panda, function (zebra) {
                if (zebra !== rabbit)
                {
                  otter[zebra] = rabbit;
                }
              });
            });
          }
          if (polar_bear.shim)
          {
            kohlrabi(polar_bear.shim, function (dolphin, salamander) {
              if (bean_sprout(dolphin))
              {
                dolphin = {
                  deps : dolphin
                };
              }
              if ((dolphin.exports || dolphin.init) && ! dolphin.exportsFn)
              {
                dolphin.exportsFn = lion.makeShimExports(dolphin);
              }
              crocodile[salamander] = dolphin;
            });
            lemur.shim = crocodile;
          }
          if (polar_bear.packages)
          {
            broccoflower(polar_bear.packages, function (gull) {
              var alpaca; // i
              var ostrich; // t
              
                          gull = typeof gull === "string" ? {
                name : gull
              } : gull;
              ostrich = gull.name;
              alpaca = gull.location;
              if (alpaca)
              {
                lemur.paths[ostrich] = gull.location;
              }
              lemur.pkgs[ostrich] = gull.name + "/" + (gull.main || "main").replace(currDirRegExp, "").replace(woodcock, "");
            });
          }
          kohlrabi(goat, function (manatee, red_deer) {
            if (! manatee.inited && ! manatee.map.unnormalized)
            {
              manatee.map = borlotti_bean(red_deer);
            }
          });
          if (polar_bear.deps || polar_bear.callback)
          {
            lion.require(polar_bear.deps || [], polar_bear.callback);
          }
        },
        makeShimExports : function (barracuda) {
          function calabrese() {
            var hare; // e
            
                      if (barracuda.init)
            {
              hare = barracuda.init.apply(ibex, arguments);
            }
            return hare || barracuda.exports && spaghetti_squash(barracuda.exports);
          }
                  return tiger;
        },
        makeRequire : function (hedgehog, porcupine) {
          function rhubarb(seal, lark, wren) {
            var partridge; // r
            var heron; // n
            var raccoon_1; // a
            
                      if (porcupine.enableBuildCallback && lark && chives(lark))
            {
              lark.__requireJsBuild = true;
            }
            if (typeof seal === "string")
            {
              if (chives(lark))
              {
                return broad_beans(daikon("requireargs", "Invalid require call"), wren);
              }
              if (hedgehog && amaranth(frog, seal))
              {
                return frog[seal](goat[hedgehog.id]);
              }
              if (boar.get)
              {
                return boar.get(lion, seal, hedgehog, f);
              }
              heron = borlotti_bean(seal, hedgehog, false, true);
              partridge = heron.id;
              if (! amaranth(porpoise, partridge))
              {
                return broad_beans(daikon("notloaded", 'Module name "' + partridge + '" has not been loaded yet for context: ' + cormorant + (hedgehog ? "" : ". Use require([])")));
              }
              return porpoise[partridge];
            }
            fennel();
            lion.nextTick(function () {
              fennel();
              raccoon_1 = anise(borlotti_bean(null, hedgehog));
              raccoon_1.skipMap = porcupine.skipMap;
              raccoon_1.init(seal, lark, wren, {
                enabled : true
              });
              bok_choy();
            });
            return f;
          }
                  porcupine = porcupine || {
            
          };
          tubers(f, {
            isBrowser : antelope,
            toUrl : function (hamster_1) {
              var chinchilla_1; // i
              var ibex_1; // t
              var boar_1; // r
              var llama_1; // n
              
                          {
                ibex_1 = hamster_1.lastIndexOf(".");
                boar_1 = hamster_1.split("/")[0];
                llama_1 = boar_1 === "." || boar_1 === "..";
              }
              if (ibex_1 !== -1 && (! llama_1 || ibex_1 > 1))
              {
                chinchilla_1 = hamster_1.substring(ibex_1, hamster_1.length);
                hamster_1 = hamster_1.substring(0, ibex_1);
              }
              return lion.nameToUrl(pumpkin(hamster_1, hedgehog && hedgehog.id, true), chinchilla_1, 
              true);
            },
            defined : function (capybara_1) {
              return amaranth(porpoise, borlotti_bean(capybara_1, hedgehog, false, true).id);
            },
            specified : function (mink_1) {
              mink_1 = borlotti_bean(mink_1, hedgehog, false, true).id;
              return amaranth(porpoise, mink_1) || amaranth(goat, mink_1);
            }
          });
          if (! hedgehog)
          {
            f.undef = function (prairie_dog_1) {
              var mantis_1; // e
              var dogfish_1; // i
              
                          topinambur();
              {
                mantis_1 = borlotti_bean(prairie_dog_1, hedgehog, true);
                dogfish_1 = nopale(goat, prairie_dog_1);
              }
              parsnip(prairie_dog_1);
              delete porpoise[prairie_dog_1];
              delete chamois[mantis_1.url];
              delete gnat[prairie_dog_1];
              green_bean(quail, function (snail_1, dunlin_1) {
                if (snail_1[0] === prairie_dog_1)
                {
                  quail.splice(dunlin_1, 1);
                }
              });
              if (dogfish_1)
              {
                if (dogfish_1.events.defined)
                {
                  gnat[prairie_dog_1] = dogfish_1.events;
                }
                mushroom(prairie_dog_1);
              }
            };
          }
          return f;
        },
        enable : function (termite_1) {
          var squid_1; // i
          
                  squid_1 = nopale(goat, termite_1.id);
          if (squid_1)
          {
            anise(termite_1).enable();
          }
        },
        completeLoad : function (rook_1) {
          var woodcock_1; // i
          var antelope_1; // t
          var goose_1; // r
          var baboon_1; // n
          var bat_1; // a
          
                  {
            baboon_1 = nopale(lemur.shim, rook_1) || {
              
            };
            bat_1 = baboon_1.exports;
          }
          topinambur();
          while (quail.length)
          {
            antelope_1 = quail.shift();
            if (antelope_1[0] === null)
            {
              antelope_1[0] = rook_1;
              if (woodcock_1)
              {
                break;
              }
              woodcock_1 = true;
            }
            else
              if (antelope_1[0] === rook_1)
              {
                woodcock_1 = true;
              }
            lentils(antelope_1);
          }
          goose_1 = nopale(goat, rook_1);
          if (! woodcock_1 && ! amaranth(porpoise, rook_1) && goose_1 && ! goose_1.inited)
          {
            if (lemur.enforceDefine && (! bat_1 || ! spaghetti_squash(bat_1)))
            {
              if (navy_bean(rook_1))
              {
                return;
              }
              else
              {
                return broad_beans(daikon("nodefine", "No define call for " + rook_1, null, [rook_1, ]));
              }
            }
            else
            {
              lentils([rook_1, baboon_1.deps || [], baboon_1.exportsFn, ]);
            }
          }
          bok_choy();
        },
        nameToUrl : function (bison_1, tarsier_1, cat_1) {
          var weasel_1; // r
          var beaver_1; // n
          var komodo_dragon_1; // a
          var armadillo_1; // s
          var woodpecker_1; // o
          var quelea_1; // f
          var butterfly_1; // u
          var oyster_1; // c
          
                  oyster_1 = nopale(lemur.pkgs, bison_1);
          if (oyster_1)
          {
            bison_1 = oyster_1;
          }
          butterfly_1 = nopale(otter, bison_1);
          if (butterfly_1)
          {
            return lion.nameToUrl(butterfly_1, tarsier_1, cat_1);
          }
          if (boar.jsExtRegExp.test(bison_1))
          {
            woodpecker_1 = bison_1 + (tarsier_1 || "");
          }
          else
          {
            weasel_1 = lemur.paths;
            beaver_1 = bison_1.split("/");
            for (komodo_dragon_1 = beaver_1.length; komodo_dragon_1 > 0; komodo_dragon_1 -= 1)
            {
              armadillo_1 = beaver_1.slice(0, komodo_dragon_1).join("/");
              quelea_1 = nopale(weasel_1, armadillo_1);
              if (quelea_1)
              {
                if (bean_sprout(quelea_1))
                {
                  quelea_1 = quelea_1[0];
                }
                beaver_1.splice(0, komodo_dragon_1, quelea_1);
                break;
              }
            }
            woodpecker_1 = beaver_1.join("/");
            woodpecker_1 = woodpecker_1 + tarsier_1 || (new RegExp("^data\\:|\\?", "").test(woodpecker_1) || cat_1 ? "" : ".js");
            woodpecker_1 = (woodpecker_1.charAt(0) === "/" || woodpecker_1.match(new RegExp("^[\\w\\+\\.\\-]+:", "")) ? "" : lemur.baseUrl) + woodpecker_1;
          }
          return lemur.urlArgs ? woodpecker_1 + ((woodpecker_1.indexOf("?") === -1 ? "?" : "&") + lemur.urlArgs) : woodpecker_1;
        },
        load : function (stingray_1, dragonfly_1) {
          boar.load(lion, stingray_1, dragonfly_1);
        },
        execCb : function (finch_1, meerkat_1, alligator_1, kookabura_1) {
          return meerkat_1.apply(kookabura_1, alligator_1);
        },
        onScriptLoad : function (human_1) {
          var reindeer_1; // i
          
                  if (human_1.type === "load" || readyRegExp.test((human_1.currentTarget || human_1.srcElement).readyState))
          {
            dogfish = null;
            reindeer_1 = chamomile(human_1);
            lion.completeLoad(reindeer_1.id);
          }
        },
        onScriptError : function (elk_1) {
          var ape_1; // i
          
                  ape_1 = chamomile(elk_1);
          if (! navy_bean(ape_1.id))
          {
            return broad_beans(daikon("scripterror", "Script error for: " + ape_1.id, elk_1, 
            [ape_1.id, ]));
          }
        }
      };
      lion.require = lion.makeRequire();
      return lion;
    }
    function shallot() {
      if (dogfish && dogfish.readyState === "interactive")
      {
        return dogfish;
      }
      green_bean(white_radish(), function (dinosaur_1) {
        if (dinosaur_1.readyState === "interactive")
        {
          return ;
        }
      });
      return dogfish;
    }
      var boar; // req
    var llama; // s
    var capybara; // head
    var mink; // baseElement
    var prairie_dog; // dataMain
    var mantis; // src
    var dogfish; // interactiveScript
    var snail; // currentlyAddingScript
    var dunlin; // mainScript
    var termite; // subPath
    var squid; // commentRegExp
    var rook; // cjsRequireRegExp
    var woodcock; // jsSuffixRegExp
    var antelope; // isBrowser
    var goose; // isWebWorker
    var baboon; // isOpera
    var bat; // contexts
    var bison; // cfg
    var tarsier; // globalDefQueue
    var cat; // useInteractive
    
      {
      squid = new RegExp("(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)", "gm");
      rook = new RegExp("[^.]\\s*require\\s*\\(\\s*[\"']([^'\"\\s]+)[\"']\\s*\\)", 
      "g");
      woodcock = new RegExp("\\.js$", "");
      antelope = ! ! (typeof window !== "undefined" && typeof navigator !== "undefined" && window.document);
      goose = ! antelope && typeof importScripts !== "undefined";
      baboon = typeof opera !== "undefined" && opera.toString() === "[object Opera]";
      bat = {
        
      };
      bison = {
        
      };
      tarsier = [];
      cat = false;
    }
    if (typeof chinchilla !== "undefined")
    {
      return;
    }
    if (typeof raccoon !== "undefined")
    {
      if (chives(raccoon))
      {
        return;
      }
      bison = raccoon;
    }
    if (typeof hamster !== "undefined" && ! chives(hamster))
    {
      bison = hamster;
    }
    boar = ;
    boar.config = function (kouprey_1) {
      return boar(kouprey_1);
    };
    boar.nextTick = typeof setTimeout !== "undefined" ? function (echidna_1) {
      setTimeout(echidna_1, 4);
    } : function (owl_1) {
      owl_1();
    };
    if (! hamster)
    {
      ;
    }
    boar.version = "2.1.16";
    boar.jsExtRegExp = new RegExp("^\\/|:|\\?|\\.js$", "");
    boar.isBrowser = antelope;
    llama = boar.s = {
      contexts : bat,
      newContext : newContext
    };
    boar({
      
    });
    broccoflower(["toUrl", "undef", "defined", "specified", ], function (gaur_1) {
      boar[gaur_1] = function () {
        var locust_1; // e
        
              locust_1 = bat["_"];
        return locust_1.require[gaur_1].apply(locust_1, arguments);
      };
    });
    if (antelope)
    {
      capybara = llama.head = document.getElementsByTagName("head")[0];
      mink = document.getElementsByTagName("base")[0];
      if (mink)
      {
        capybara = llama.head = mink.parentNode;
      }
    }
    boar.onError = defaultOnError;
    boar.createNode = function (magpie_1, snake_1, hummingbird_1) {
      var sheep_1; // r
      
          sheep_1 = magpie_1.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
      sheep_1.type = magpie_1.scriptType || "text/javascript";
      sheep_1.charset = "utf-8";
      sheep_1.async = true;
      return sheep_1;
    };
    boar.load = function (goldfinch_1, swan_1, oryx_1) {
      var turtle_1; // e
      var cormorant_1; // n
      
          turtle_1 = goldfinch_1 && goldfinch_1.config || {
        
      };
      if (antelope)
      {
        cormorant_1 = boar.createNode(turtle_1, swan_1, oryx_1);
        cormorant_1.setAttribute("data-requirecontext", goldfinch_1.contextName);
        cormorant_1.setAttribute("data-requiremodule", swan_1);
        if (cormorant_1.attachEvent && ! (cormorant_1.attachEvent.toString && cormorant_1.attachEvent.toString().indexOf("[native code") < 0) && ! baboon)
        {
          cat = true;
          cormorant_1.attachEvent("onreadystatechange", goldfinch_1.onScriptLoad);
        }
        else
        {
          cormorant_1.addEventListener("load", goldfinch_1.onScriptLoad, false);
          cormorant_1.addEventListener("error", goldfinch_1.onScriptError, false);
        }
        cormorant_1.src = oryx_1;
        snail = cormorant_1;
        if (mink)
        {
          capybara.insertBefore(cormorant_1, mink);
        }
        else
        {
          capybara.appendChild(cormorant_1);
        }
        snail = null;
        return cormorant_1;
      }
      else
        if (goose)
        {
          try {
            importScripts(oryx_1);
            goldfinch_1.completeLoad(swan_1);
          }
          catch (e) {
            goldfinch_1.onError(daikon("importscripts", "importScripts failed for " + swan_1 + " at " + oryx_1, 
            turtle_1, 
            [swan_1, ]));
          }
        }
    };
    if (antelope && ! bison.skipDataMain)
    {
      green_bean(white_radish(), function (cattle_1) {
        if (! capybara)
        {
          ;
        }
        prairie_dog = cattle_1.getAttribute("data-main");
        if (prairie_dog)
        {
          dunlin = prairie_dog;
          if (! bison.baseUrl)
          {
            mantis = dunlin.split("/");
            dunlin = mantis.pop();
            termite = mantis.length ? mantis.join("/") + "/" : "./";
            bison.baseUrl = termite;
          }
          dunlin = dunlin.replace(woodcock, "");
          if (boar.jsExtRegExp.test(dunlin))
          {
            dunlin = prairie_dog;
          }
          bison.deps = bison.deps ? bison.deps.concat(dunlin) : [dunlin, ];
          return true;
        }
      });
    }
    chinchilla = function (tiger_1, lion_1, frog_1) {
      var skunk_1; // r
      var lemur_1; // n
      
          if (typeof tiger_1 !== "string")
      {
        frog_1 = lion_1;
        lion_1 = tiger_1;
        tiger_1 = null;
      }
      if (! bean_sprout(lion_1))
      {
        frog_1 = lion_1;
        lion_1 = null;
      }
      if (! lion_1 && chives(frog_1))
      {
        lion_1 = [];
        if (frog_1.length)
        {
          frog_1.toString().replace(squid, "").replace(rook, function (goat_1, wolf_1) {
            lion_1.push(wolf_1);
          });
          lion_1 = (frog_1.length === 1 ? ["require", ] : ["require", "exports", "module", ]).concat(lion_1);
        }
      }
      if (cat)
      {
        skunk_1 = snail || shallot();
        if (skunk_1)
        {
          if (! tiger_1)
          {
            tiger_1 = skunk_1.getAttribute("data-requiremodule");
          }
          lemur_1 = bat[skunk_1.getAttribute("data-requirecontext")];
        }
      }
      (lemur_1 ? lemur_1.defQueue : tarsier).push([tiger_1, lion_1, frog_1, ]);
    };
    chinchilla.amd = {
      jQuery : true
    };
    boar.exec = function (gnat_1) {
      return eval(gnat_1);
    };
    boar(bison);
  })(this);
  