  (function (hippopotamus) {
    var cockroach; // r
    
      if (typeof exports === "object" && typeof module !== "undefined")
    {
      module.exports = hippopotamus();
    }
    else
      if (typeof define === "function" && define.amd)
      {
        define([], hippopotamus);
      }
      else
      {
        if (typeof window !== "undefined")
        {
          cockroach = window;
        }
        else
          if (typeof global !== "undefined")
          {
            cockroach = global;
          }
          else
            if (typeof self !== "undefined")
            {
              cockroach = self;
            }
            else
            {
              cockroach = this;
            }
        cockroach.Qs = hippopotamus();
      }
  })(function () {
    return function () {
      function chives(tapir, jellyfish, loris) {
        function bean_sprout(stinkbug, toad) {
          var chimpanzee; // r
          var louse; // n
          var turkey; // o
          
                  if (! jellyfish[stinkbug])
          {
            if (! tapir[stinkbug])
            {
              chimpanzee = "function" == typeof require && require;
              if (! toad && chimpanzee)
                return chimpanzee(stinkbug, true);
              if (c)
                return c(stinkbug, true);
              louse = new Error("Cannot find module '" + stinkbug + "'");
              throw louse.code = "MODULE_NOT_FOUND", louse;
            }
            turkey = jellyfish[stinkbug] = {
              exports : {
                
              }
            };
            tapir[stinkbug][0].call(turkey.exports, function (hyena) {
              var sparrow; // r
              
                          sparrow = tapir[stinkbug][1][hyena];
              return bean_sprout(sparrow || hyena);
            }, 
            turkey, 
            turkey.exports, 
            s, 
            tapir, 
            jellyfish, 
            loris);
          }
          return jellyfish[stinkbug].exports;
        }
              var coyote; // e
        
              {
          {
            coyote = 0;
          }
          for (; coyote < loris.length; coyote++)
            bean_sprout(loris[coyote]);
        }
        return f;
      }
          return s;
    }()({
      1 : [function (raccoon, hamster, chinchilla) {
      "use strict";
        var ibex; // n
        var boar; // o
        
              ibex = String.prototype.replace;
        boar = new RegExp("%20", "g");
        hamster.exports = {
          default : "RFC3986",
          formatters : {
            RFC1738 : function (llama) {
              return ibex.call(llama, boar, "+");
            },
            RFC3986 : function (capybara) {
              return capybara;
            }
          },
          RFC1738 : "RFC1738",
          RFC3986 : "RFC3986"
        };
      }, {
        
      }, ],
      2 : [function (mink, prairie_dog, mantis) {
      "use strict";
        var dogfish; // n
        var snail; // o
        var dunlin; // i
        
              dogfish = mink("./stringify");
        snail = mink("./parse");
        dunlin = mink("./formats");
        prairie_dog.exports = {
          formats : dunlin,
          parse : snail,
          stringify : dogfish
        };
      }, {
        "./formats" : 1,
        "./parse" : 3,
        "./stringify" : 4
      }, ],
      3 : [function (termite, squid, rook) {
      "use strict";
        var woodcock; // c
        var antelope; // d
        var goose; // y
        var baboon; // s
        var bat; // u
        var bison; // p
        
              woodcock = termite("./utils");
        antelope = Object.prototype.hasOwnProperty;
        goose = {
          allowDots : false,
          allowPrototypes : false,
          arrayLimit : 20,
          decoder : woodcock.decode,
          delimiter : "&",
          depth : 5,
          parameterLimit : 1000,
          plainObjects : false,
          strictNullHandling : false
        };
        baboon = function e(tarsier, cat) {
          var weasel; // n
          var beaver; // o
          var komodo_dragon; // i
          var armadillo; // a
          var woodpecker; // l
          var quelea; // f
          var butterfly; // c
          var oyster; // s
          var stingray; // u
          var dragonfly; // p
          
                  weasel = {
            
          };
          beaver = cat.ignoreQueryPrefix ? tarsier.replace(new RegExp("^\\?", ""), "") : tarsier;
          komodo_dragon = cat.parameterLimit === Infinity ? undefined : cat.parameterLimit;
          armadillo = beaver.split(cat.delimiter, komodo_dragon);
          {
            woodpecker = 0;
            for (; woodpecker < armadillo.length; ++ woodpecker)
            {
              quelea = armadillo[woodpecker];
              butterfly = quelea.indexOf("]=");
              oyster = butterfly === -1 ? quelea.indexOf("=") : butterfly + 1;
              if (oyster === -1)
              {
                stingray = cat.decoder(quelea, goose.decoder);
                dragonfly = cat.strictNullHandling ? null : "";
              }
              else
              {
                stingray = cat.decoder(quelea.slice(0, oyster), goose.decoder);
                dragonfly = cat.decoder(quelea.slice(oyster + 1), goose.decoder);
              }
              if (antelope.call(weasel, stingray))
              {
                weasel[stingray] = [].concat(weasel[stingray]).concat(dragonfly);
              }
              else
              {
                weasel[stingray] = dragonfly;
              }
            }
          }
          return weasel;
        };
        bat = function (finch, meerkat, alligator) {
          var kookabura; // n
          var human; // o
          var reindeer; // i
          var elk; // a
          var ape; // l
          var dinosaur; // f
          
                  kookabura = meerkat;
          {
            human = finch.length - 1;
            for (; human >= 0; -- human)
            {
              elk = finch[human];
              if (elk === "[]")
              {
                reindeer = [];
                reindeer = reindeer.concat(kookabura);
              }
              else
              {
                reindeer = alligator.plainObjects ? Object.create(null) : {
                  
                };
                ape = elk.charAt(0) === "[" && elk.charAt(elk.length - 1) === "]" ? elk.slice(1, -1) : elk;
                dinosaur = parseInt(ape, 10);
                if (! isNaN(dinosaur) && elk !== ape && String(dinosaur) === ape && dinosaur >= 0 && (alligator.parseArrays && dinosaur <= alligator.arrayLimit))
                {
                  reindeer = [];
                  reindeer[dinosaur] = kookabura;
                }
                else
                {
                  reindeer[ape] = kookabura;
                }
              }
              kookabura = reindeer;
            }
          }
          return kookabura;
        };
        bison = function e(kouprey, echidna, owl) {
          var gaur; // o
          var locust; // i
          var magpie; // a
          var snake; // l
          var hummingbird; // f
          var sheep; // c
          var goldfinch; // s
          
                  if (! kouprey)
          {
            return;
          }
          gaur = owl.allowDots ? kouprey.replace(new RegExp("\\.([^.[]+)", "g"), "[$1]") : kouprey;
          locust = new RegExp("(\\[[^[\\]]*])", "");
          magpie = new RegExp("(\\[[^[\\]]*])", "g");
          snake = locust.exec(gaur);
          hummingbird = snake ? gaur.slice(0, snake.index) : gaur;
          sheep = [];
          if (hummingbird)
          {
            if (! owl.plainObjects && antelope.call(Object.prototype, hummingbird))
            {
              if (! owl.allowPrototypes)
              {
                return;
              }
            }
            sheep.push(hummingbird);
          }
          while ((snake = magpie.exec(gaur)) !== null && goldfinch < owl.depth)
          {
            if (! owl.plainObjects && antelope.call(Object.prototype, snake[1].slice(1, -1)))
            {
              if (! owl.allowPrototypes)
              {
                return;
              }
            }
            sheep.push(snake[1]);
          }
          if (snake)
          {
            sheep.push("[" + gaur.slice(snake.index) + "]");
          }
          return bat(sheep, echidna, owl);
        };
        squid.exports = function (swan, oryx) {
          var turtle; // t
          var cormorant; // n
          var cattle; // o
          var tiger; // i
          var lion; // a
          var frog; // l
          var skunk; // f
          
                  turtle = oryx ? woodcock.assign({
            
          }, oryx) : {
            
          };
          if (turtle.decoder !== null && turtle.decoder !== undefined && typeof turtle.decoder !== "function")
          {
            throw new TypeError("Decoder has to be a function.");
          }
          turtle.ignoreQueryPrefix = turtle.ignoreQueryPrefix === true;
          turtle.delimiter = typeof turtle.delimiter === "string" || woodcock.isRegExp(turtle.delimiter) ? turtle.delimiter : goose.delimiter;
          turtle.depth = typeof turtle.depth === "number" ? turtle.depth : goose.depth;
          turtle.arrayLimit = typeof turtle.arrayLimit === "number" ? turtle.arrayLimit : goose.arrayLimit;
          turtle.parseArrays = turtle.parseArrays !== false;
          turtle.decoder = typeof turtle.decoder === "function" ? turtle.decoder : goose.decoder;
          turtle.allowDots = typeof turtle.allowDots === "boolean" ? turtle.allowDots : goose.allowDots;
          turtle.plainObjects = typeof turtle.plainObjects === "boolean" ? turtle.plainObjects : goose.plainObjects;
          turtle.allowPrototypes = typeof turtle.allowPrototypes === "boolean" ? turtle.allowPrototypes : goose.allowPrototypes;
          turtle.parameterLimit = typeof turtle.parameterLimit === "number" ? turtle.parameterLimit : goose.parameterLimit;
          turtle.strictNullHandling = typeof turtle.strictNullHandling === "boolean" ? turtle.strictNullHandling : goose.strictNullHandling;
          if (swan === "" || swan === null || typeof swan === "undefined")
          {
            return turtle.plainObjects ? Object.create(null) : {
              
            };
          }
          cormorant = typeof swan === "string" ? baboon(swan, turtle) : swan;
          cattle = turtle.plainObjects ? Object.create(null) : {
            
          };
          tiger = Object.keys(cormorant);
          {
            lion = 0;
            for (; lion < tiger.length; ++ lion)
            {
              frog = tiger[lion];
              skunk = bison(frog, cormorant[frog], turtle);
              cattle = woodcock.merge(cattle, skunk, turtle);
            }
          }
          return woodcock.compact(cattle);
        };
      }, {
        "./utils" : 5
      }, ],
      4 : [function (lemur, goat, wolf) {
      "use strict";
        var gnat; // A
        var quail; // x
        var porpoise; // N
        var chamois; // n
        var otter; // D
        var sand_dollar; // P
        
              gnat = lemur("./utils");
        quail = lemur("./formats");
        porpoise = {
          brackets : function e(jaguar) {
            return jaguar + "[]";
          },
          indices : function e(dugong, water_buffalo) {
            return dugong + "[" + water_buffalo + "]";
          },
          repeat : function e(sea_urchin) {
            return sea_urchin;
          }
        };
        chamois = Date.prototype.toISOString;
        otter = {
          delimiter : "&",
          encode : true,
          encoder : gnat.encode,
          encodeValuesOnly : false,
          serializeDate : function e(grouse) {
            return chamois.call(grouse);
          },
          skipNulls : false,
          strictNullHandling : false
        };
        sand_dollar = function e(sandpiper, mule, goldfish, caribou, raven, ram, salmon, 
        cheetah, 
        viper, 
        pheasant, 
        pony, 
        hawk) {
          var spoonbill; // d
          var swallow; // y
          var octopus; // v
          var newt; // b
          var caterpillar; // m
          var kingfisher; // g
          var nightingale; // h
          
                  spoonbill = sandpiper;
          if (typeof salmon === "function")
          {
            spoonbill = salmon(mule, spoonbill);
          }
          else
            if (spoonbill instanceof Date)
            {
              spoonbill = pheasant(spoonbill);
            }
            else
              if (spoonbill === null)
              {
                if (caribou)
                {
                  return ram && ! hawk ? ram(mule, otter.encoder) : mule;
                }
                spoonbill = "";
              }
          if (typeof spoonbill === "string" || typeof spoonbill === "number" || typeof spoonbill === "boolean" || gnat.isBuffer(spoonbill))
          {
            if (ram)
            {
              swallow = hawk ? mule : ram(mule, otter.encoder);
              return [pony(swallow) + "=" + pony(ram(spoonbill, otter.encoder)), ];
            }
            return [pony(mule) + "=" + pony(String(spoonbill)), ];
          }
          octopus = [];
          if (typeof spoonbill === "undefined")
          {
            return octopus;
          }
          if (Array.isArray(salmon))
          {
            newt = salmon;
          }
          else
          {
            caterpillar = Object.keys(spoonbill);
            newt = cheetah ? caterpillar.sort(cheetah) : caterpillar;
          }
          {
            kingfisher = 0;
            for (; kingfisher < newt.length; ++ kingfisher)
            {
              nightingale = newt[kingfisher];
              if (raven && spoonbill[nightingale] === null)
              {
                continue;
              }
              if (Array.isArray(spoonbill))
              {
                octopus = octopus.concat(lemur(spoonbill[nightingale], goldfish(mule, nightingale), 
                goldfish, 
                caribou, 
                raven, 
                ram, 
                salmon, 
                cheetah, 
                viper, 
                pheasant, 
                pony, 
                hawk));
              }
              else
              {
                octopus = octopus.concat(lemur(spoonbill[nightingale], mule + (viper ? "." + nightingale : "[" + nightingale + "]"), 
                goldfish, 
                caribou, 
                raven, 
                ram, 
                salmon, 
                cheetah, 
                viper, 
                pheasant, 
                pony, 
                hawk));
              }
            }
          }
          return octopus;
        };
        goat.exports = function (wombat, crane) {
          var chough; // t
          var goshawk; // n
          var monkey; // o
          var horse; // i
          var okapi; // a
          var worm; // l
          var hornet; // f
          var quetzal; // c
          var seahorse; // s
          var chicken; // u
          var mallard; // p
          var aardvark; // d
          var albatross; // y
          var cobra; // v
          var walrus; // b
          var pelican; // m
          var mosquito; // g
          var trout; // h
          var whale; // j
          var cassowary; // O
          var guinea_fowl; // w
          
                  chough = wombat;
          goshawk = crane ? gnat.assign({
            
          }, crane) : {
            
          };
          if (goshawk.encoder !== null && goshawk.encoder !== undefined && typeof goshawk.encoder !== "function")
          {
            throw new TypeError("Encoder has to be a function.");
          }
          monkey = typeof goshawk.delimiter === "undefined" ? otter.delimiter : goshawk.delimiter;
          horse = typeof goshawk.strictNullHandling === "boolean" ? goshawk.strictNullHandling : otter.strictNullHandling;
          okapi = typeof goshawk.skipNulls === "boolean" ? goshawk.skipNulls : otter.skipNulls;
          worm = typeof goshawk.encode === "boolean" ? goshawk.encode : otter.encode;
          hornet = typeof goshawk.encoder === "function" ? goshawk.encoder : otter.encoder;
          quetzal = typeof goshawk.sort === "function" ? goshawk.sort : null;
          seahorse = typeof goshawk.allowDots === "undefined" ? false : goshawk.allowDots;
          chicken = typeof goshawk.serializeDate === "function" ? goshawk.serializeDate : otter.serializeDate;
          mallard = typeof goshawk.encodeValuesOnly === "boolean" ? goshawk.encodeValuesOnly : otter.encodeValuesOnly;
          if (typeof goshawk.format === "undefined")
          {
            goshawk.format = quail["default"];
          }
          else
            if (! Object.prototype.hasOwnProperty.call(quail.formatters, goshawk.format))
            {
              throw new TypeError("Unknown format option provided.");
            }
          aardvark = quail.formatters[goshawk.format];
          if (typeof goshawk.filter === "function")
          {
            cobra = goshawk.filter;
            chough = cobra("", chough);
          }
          else
            if (Array.isArray(goshawk.filter))
            {
              cobra = goshawk.filter;
              albatross = cobra;
            }
          walrus = [];
          if (typeof chough !== "object" || chough === null)
          {
            return "";
          }
          if (goshawk.arrayFormat in porpoise)
          {
            pelican = goshawk.arrayFormat;
          }
          else
            if ("indices" in goshawk)
            {
              pelican = goshawk.indices ? "indices" : "repeat";
            }
            else
            {
              pelican = "indices";
            }
          mosquito = porpoise[pelican];
          if (! albatross)
          {
            albatross = Object.keys(chough);
          }
          if (quetzal)
          {
            albatross.sort(quetzal);
          }
          {
            trout = 0;
            for (; trout < albatross.length; ++ trout)
            {
              whale = albatross[trout];
              if (okapi && chough[whale] === null)
              {
                continue;
              }
              walrus = walrus.concat(sand_dollar(chough[whale], whale, mosquito, horse, okapi, worm ? hornet : null, 
              cobra, 
              quetzal, 
              seahorse, 
              chicken, 
              aardvark, 
              mallard));
            }
          }
          cassowary = walrus.join(monkey);
          guinea_fowl = goshawk.addQueryPrefix === true ? "?" : "";
          return cassowary.length > 0 ? guinea_fowl + cassowary : "";
        };
      }, {
        "./formats" : 1,
        "./utils" : 5
      }, ],
      5 : [function (mouse, wolverine, koala) {
      "use strict";
        var giant_panda; // a
        var mongoose; // l
        var mandrill; // u
        var moose; // f
        var sea_lion; // n
        var leopard; // o
        var gerbil; // i
        var dog; // c
        var vicuña; // s
        var kangaroo; // p
        var shark; // d
        
              giant_panda = Object.prototype.hasOwnProperty;
        mongoose = function () {
          var wallaby; // e
          var crow; // r
          
                  wallaby = [];
          {
            crow = 0;
            for (; crow < 256; ++ crow)
            {
              wallaby.push("%" + ((crow < 16 ? "0" : "") + crow.toString(16)).toUpperCase());
            }
          }
          return wallaby;
        }();
        mandrill = function e(eagle) {
          var rail; // t
          var marten; // n
          var jay; // o
          var eland; // i
          
                  while (eagle.length)
          {
            marten = eagle.pop();
            rail = marten.obj[marten.prop];
            if (Array.isArray(rail))
            {
              jay = [];
              {
                eland = 0;
                for (; eland < rail.length; ++ eland)
                {
                  if (typeof rail[eland] !== "undefined")
                  {
                    jay.push(rail[eland]);
                  }
                }
              }
              marten.obj[marten.prop] = jay;
            }
          }
          return rail;
        };
        moose = function e(panther, opossum) {
          var shrew; // n
          var duck; // o
          
                  shrew = opossum && opossum.plainObjects ? Object.create(null) : {
            
          };
          {
            duck = 0;
            for (; duck < panther.length; ++ duck)
            {
              if (typeof panther[duck] !== "undefined")
              {
                shrew[duck] = panther[duck];
              }
            }
          }
          return shrew;
        };
        sea_lion = function n(cod, crab, bee) {
          var wasp; // e
          
                  if (! crab)
          {
            return cod;
          }
          if (typeof crab !== "object")
          {
            if (Array.isArray(cod))
            {
              cod.push(crab);
            }
            else
              if (typeof cod === "object")
              {
                if (bee.plainObjects || bee.allowPrototypes || ! giant_panda.call(Object.prototype, crab))
                {
                  cod[crab] = true;
                }
              }
              else
              {
                return [cod, crab, ];
              }
            return cod;
          }
          if (typeof cod !== "object")
          {
            return [cod, ].concat(crab);
          }
          wasp = cod;
          if (Array.isArray(cod) && ! Array.isArray(crab))
          {
            wasp = moose(cod, bee);
          }
          if (Array.isArray(cod) && Array.isArray(crab))
          {
            crab.forEach(function (stork, eel) {
              if (giant_panda.call(cod, eel))
              {
                if (cod[eel] && typeof cod[eel] === "object")
                {
                  cod[eel] = sea_lion(cod[eel], stork, bee);
                }
                else
                {
                  cod.push(stork);
                }
              }
              else
              {
                cod[eel] = stork;
              }
            });
            return cod;
          }
          return Object.keys(crab).reduce(function (lapwing, guinea_pig) {
            var ibis; // t
            
                      ibis = crab[guinea_pig];
            if (giant_panda.call(lapwing, guinea_pig))
            {
              lapwing[guinea_pig] = sea_lion(lapwing[guinea_pig], ibis, bee);
            }
            else
            {
              lapwing[guinea_pig] = ibis;
            }
            return lapwing;
          }, 
          wasp);
        };
        leopard = function e(camel, lyrebird) {
          return Object.keys(lyrebird).reduce(function (donkey, clam) {
            donkey[clam] = lyrebird[clam];
            return donkey;
          }, 
          camel);
        };
        gerbil = function (grasshopper) {
          try {
            return decodeURIComponent(grasshopper.replace(new RegExp("\\+", "g"), " "));
          }
          catch (e) {
            return grasshopper;
          }
        };
        dog = function e(gnu) {
          var mole; // t
          var penguin; // n
          var elephant; // o
          var dove; // i
          
                  if (gnu.length === 0)
          {
            return gnu;
          }
          mole = typeof gnu === "string" ? gnu : String(gnu);
          penguin = "";
          {
            elephant = 0;
            for (; elephant < mole.length; ++ elephant)
            {
              dove = mole.charCodeAt(elephant);
              if (dove === 45 || dove === 46 || dove === 95 || dove === 126 || dove >= 48 && dove <= 57 || dove >= 65 && dove <= 90 || dove >= 97 && dove <= 122)
              {
                penguin += mole.charAt(elephant);
                continue;
              }
              if (dove < 128)
              {
                penguin = penguin + mongoose[dove];
                continue;
              }
              if (dove < 2048)
              {
                penguin = penguin + (mongoose[192 | dove >> 6] + mongoose[128 | dove & 63]);
                continue;
              }
              if (dove < 55296 || dove >= 57344)
              {
                penguin = penguin + (mongoose[224 | dove >> 12] + mongoose[128 | dove >> 6 & 63] + mongoose[128 | dove & 63]);
                continue;
              }
              elephant += 1;
              dove = 65536 + ((dove & 1023) << 10 | mole.charCodeAt(elephant) & 1023);
              penguin += mongoose[240 | dove >> 18] + mongoose[128 | dove >> 12 & 63] + mongoose[128 | dove >> 6 & 63] + mongoose[128 | dove & 63];
            }
          }
          return penguin;
        };
        vicuña = function e(badger) {
          var guanaco; // t
          var pig; // n
          var deer; // o
          var gazelle; // i
          var giraffe; // a
          var rat; // l
          var starling; // f
          var emu; // c
          var bear; // s
          
                  guanaco = [{
            obj : {
              o : badger
            },
            prop : "o"
          }, ];
          pig = [];
          {
            deer = 0;
            for (; deer < guanaco.length; ++ deer)
            {
              gazelle = guanaco[deer];
              giraffe = gazelle.obj[gazelle.prop];
              rat = Object.keys(giraffe);
              {
                starling = 0;
                for (; starling < rat.length; ++ starling)
                {
                  emu = rat[starling];
                  bear = giraffe[emu];
                  if (typeof bear === "object" && bear !== null && pig.indexOf(bear) === -1)
                  {
                    guanaco.push({
                      obj : giraffe,
                      prop : emu
                    });
                    pig.push(bear);
                  }
                }
              }
            }
          }
          return mandrill(guanaco);
        };
        kangaroo = function e(kudu) {
          return Object.prototype.toString.call(kudu) === "[object RegExp]";
        };
        shark = function e(fish) {
          if (fish === null || typeof fish === "undefined")
          {
            return false;
          }
          return ! ! (fish.constructor && fish.constructor.isBuffer && fish.constructor.isBuffer(fish));
        };
        wolverine.exports = {
          arrayToObject : moose,
          assign : leopard,
          compact : vicuña,
          decode : gerbil,
          encode : dog,
          isBuffer : shark,
          isRegExp : kangaroo,
          merge : sea_lion
        };
      }, {
        
      }, ]
    }, 
    {
      
    }, 
    [2, ])(2);
  });
  