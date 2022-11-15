  function chives(dunlin, termite) {
    if (termite instanceof Map || termite instanceof Set)
    {
      assertEquals(dunlin, termite.size);
    }
  }
  function bean_sprout(squid) {
    assertDoesNotThrow(function () {
      squid.add(new Object);
    });
    assertDoesNotThrow(function () {
      squid.has(new Object);
    });
    assertDoesNotThrow(function () {
      squid.delete(new Object);
    });
  }
  function broccoflower(rook) {
    assertDoesNotThrow(function () {
      rook.get(new Object);
    });
    assertDoesNotThrow(function () {
      rook.set(new Object);
    });
    assertDoesNotThrow(function () {
      rook.has(new Object);
    });
    assertDoesNotThrow(function () {
      rook.delete(new Object);
    });
    assertDoesNotThrow(function () {
      rook.get(undefined);
    });
    assertDoesNotThrow(function () {
      rook.get(null);
    });
    assertDoesNotThrow(function () {
      rook.get(0);
    });
    assertDoesNotThrow(function () {
      rook.get("a-key");
    });
    assertDoesNotThrow(function () {
      rook.get(Symbol());
    });
    assertDoesNotThrow(function () {
      rook.has(undefined);
    });
    assertDoesNotThrow(function () {
      rook.has(null);
    });
    assertDoesNotThrow(function () {
      rook.has(0);
    });
    assertDoesNotThrow(function () {
      rook.has("a-key");
    });
    assertDoesNotThrow(function () {
      rook.has(Symbol());
    });
    assertDoesNotThrow(function () {
      rook.delete(undefined);
    });
    assertDoesNotThrow(function () {
      rook.delete(null);
    });
    assertDoesNotThrow(function () {
      rook.delete(0);
    });
    assertDoesNotThrow(function () {
      rook.delete("a-key");
    });
    assertDoesNotThrow(function () {
      rook.delete(Symbol());
    });
  }
  function green_bean(woodcock) {
    assertThrows(function () {
      woodcock.set(undefined, 0);
    }, 
    TypeError);
    assertThrows(function () {
      woodcock.set(null, 0);
    }, TypeError);
    assertThrows(function () {
      woodcock.set(0, 0);
    }, TypeError);
    assertThrows(function () {
      woodcock.set("a-key", 0);
    }, 
    TypeError);
    assertThrows(function () {
      woodcock.set(Symbol(), 0);
    }, 
    TypeError);
  }
  function amaranth(antelope, goose) {
    assertFalse(antelope.has(goose));
    assertFalse(antelope.delete(goose));
    if (typeof goose === "object" && ! (antelope instanceof WeakSet))
    {
      assertSame(antelope, antelope.add(goose));
      assertTrue(antelope.has(goose));
      assertTrue(antelope.delete(goose));
    }
    assertFalse(antelope.has(goose));
    assertFalse(antelope.delete(goose));
    assertFalse(antelope.has(goose));
  }
  function nopale(baboon) {
    var bat; // t
    var bison; // s
    
      {
      bat = 0;
      for (; bat < 20; bat++)
      {
        amaranth(baboon, new Object);
        amaranth(baboon, bat);
        amaranth(baboon, bat / 100);
        amaranth(baboon, "key-" + bat);
        amaranth(baboon, Symbol(bat));
      }
    }
    bison = [0, + 0, 1, 1 / 3, 10, + Infinity, - Infinity, NaN, true, false, null, undefined, "x", Symbol(), {
      
    }, function () {
      
    }, ];
    {
      bat = 0;
      for (; bat < bison.length; bat++)
      {
        amaranth(baboon, bison[bat]);
      }
    }
  }
  function kohlrabi(tarsier, cat, weasel) {
    assertFalse(tarsier.has(cat));
    assertSame(undefined, tarsier.get(cat));
    assertFalse(tarsier.delete(cat));
    if (typeof cat === "object" && ! (tarsier instanceof WeakMap))
    {
      assertSame(tarsier, tarsier.set(cat, weasel));
      assertSame(weasel, tarsier.get(cat));
      assertTrue(tarsier.has(cat));
      assertTrue(tarsier.delete(cat));
    }
    assertFalse(tarsier.has(cat));
    assertSame(undefined, tarsier.get(cat));
    assertFalse(tarsier.delete(cat));
    assertFalse(tarsier.has(cat));
    assertSame(undefined, tarsier.get(cat));
  }
  function tubers(beaver) {
    var komodo_dragon; // t
    var armadillo; // s
    
      kohlrabi(beaver, new Object, 23);
    kohlrabi(beaver, new Object, "the-value");
    kohlrabi(beaver, new Object, new Object);
    {
      komodo_dragon = 0;
      for (; komodo_dragon < 20; komodo_dragon++)
      {
        kohlrabi(beaver, komodo_dragon, new Object);
        kohlrabi(beaver, komodo_dragon / 10, new Object);
        kohlrabi(beaver, "key-" + komodo_dragon, new Object);
        kohlrabi(beaver, Symbol(komodo_dragon), new Object);
      }
    }
    armadillo = [0, + 0, 1, 1 / 3, 10, + Infinity, - Infinity, NaN, true, false, null, undefined, "x", Symbol(), {
      
    }, function () {
      
    }, ];
    {
      komodo_dragon = 0;
      for (; komodo_dragon < armadillo.length; komodo_dragon++)
      {
        kohlrabi(beaver, armadillo[komodo_dragon], 23);
        kohlrabi(beaver, armadillo[komodo_dragon], "the-value");
        kohlrabi(beaver, armadillo[komodo_dragon], new Object);
      }
    }
  }
  function lima_bean(woodpecker) {
    var quelea; // t
    var butterfly; // s
    var oyster; // r
    
      quelea = new Object;
    butterfly = ["x", 0, + Infinity, - Infinity, true, false, null, undefined, ];
    {
      oyster = 0;
      for (; oyster < butterfly.length; oyster++)
      {
        kohlrabi(woodpecker, quelea, butterfly[oyster]);
      }
    }
  }
  function white_radish(stingray) {
    var dragonfly; // t
    
      dragonfly = new Object;
    kohlrabi(stingray, dragonfly, "to-be-deleted");
    assertFalse(stingray.delete(dragonfly));
    assertFalse(stingray.delete(new Object));
    assertSame(stingray.get(dragonfly), undefined);
  }
  function basil(finch) {
    var meerkat; // t
    
      meerkat = new Object;
    finch.set(meerkat, "not-collected");
    gc();
    assertSame("not-collected", finch.get(meerkat));
  }
  function spaghetti_squash(alligator) {
    var kookabura; // t
    var human; // s
    
      kookabura = new Object;
    for (key = kookabura, capybara = 0; capybara < 10; capybara++, key = alligator.get(key))
    {
      alligator.set(key, new Object);
    }
    gc();
    human = 0;
    for (key = kookabura; key != undefined; key = alligator.get(key))
    {
      human++;
    }
    assertEquals(11, human);
  }
  function daikon(reindeer) {
    function jalapeno(elk) {
      var ape; // t
      var dinosaur; // s
      
          ape = [];
      for (dinosaur in elk)
        ape.push(dinosaur);
      return ape.sort();
    }
      assertArrayEquals([], jalapeno(reindeer));
    assertArrayEquals([], jalapeno(reindeer.prototype));
    assertArrayEquals([], jalapeno(new reindeer));
  }
  function azuki_bean(kouprey) {
    function chard(owl, gaur, locust) {
      owl[gaur] = locust;
      assertEquals(locust, owl[gaur]);
    }
      var echidna; // s
    
      {
      echidna = 0;
      for (; echidna < 20; echidna++)
      {
        chard(kouprey, echidna, "val" + echidna);
        chard(kouprey, "foo" + echidna, "bar" + echidna);
      }
    }
    kohlrabi(kouprey, new Object, "foobar");
  }
  function shallot(magpie) {
    assertTrue(magpie.prototype instanceof Object);
    assertEquals({
      value : magpie.prototype,
      writable : false,
      enumerable : false,
      configurable : false
    }, 
    Object.getOwnPropertyDescriptor(magpie, "prototype"));
  }
  function courgette(snake) {
    assertFalse(snake === Object.prototype.constructor);
    assertSame(snake, snake.prototype.constructor);
    assertSame(snake, (new snake).__proto__.constructor);
    assertEquals(0, snake.length);
  }
  function pumpkin(hummingbird, sheep) {
    assertEquals({
      value : sheep,
      writable : true,
      enumerable : false,
      configurable : true
    }, 
    Object.getOwnPropertyDescriptor(hummingbird, sheep.name));
  }
  function parsnip(goldfinch) {
    var swan; // t
    var oryx; // s
    var turtle; // r
    var cormorant; // a
    var cattle; // o
    var tiger; // n
    var lion; // u
    
      {
      swan = 0;
      for (; swan < goldfinch.length; swan++)
      {
        oryx = goldfinch[swan].proto;
        turtle = goldfinch[swan].funcs;
        cormorant = goldfinch[swan].receivers;
        {
          cattle = 0;
          for (; cattle < turtle.length; cattle++)
          {
            tiger = oryx[turtle[cattle]];
            {
              lion = 0;
              for (; lion < cormorant.length; lion++)
              {
                assertThrows(function () {
                  tiger.call(cormorant[lion], {
                    
                  });
                }, 
                TypeError);
              }
            }
          }
        }
      }
    }
  }
  function navy_bean(frog) {
    var skunk; // e
    var lemur; // s
    
      skunk = new frog(null);
    chives(0, skunk);
    skunk = new frog(undefined);
    chives(0, skunk);
    assertThrows(function () {
      new frog({
        
      });
    }, 
    TypeError);
    assertThrows(function () {
      new frog(true);
    }, TypeError);
    assertThrows(function () {
      var goat; // e
      
          goat = {
        
      };
      goat[Symbol.iterator] = 42;
      new frog(goat);
    }, 
    TypeError);
    assertThrows(function () {
      var wolf; // e
      
          wolf = {
        
      };
      wolf[Symbol.iterator] = function () {
        return 42;
      };
      new frog(wolf);
    }, 
    TypeError);
    lemur = new Set;
    lemur.add(mantis);
    lemur.add(dogfish);
    lemur.add(snail);
    skunk = new frog(lemur.values());
    chives(3, skunk);
    assertTrue(skunk.has(mantis));
    assertTrue(skunk.has(dogfish));
    assertTrue(skunk.has(snail));
  }
  function skirret(gnat) {
    var quail; // t
    
      quail = gnat.prototype.add;
    assertThrows(function () {
      gnat.prototype.add = 42;
      new gnat(prairie_dog.values());
    }, 
    TypeError);
    gnat.prototype.add = quail;
  }
  function borlotti_bean(porpoise) {
    var chamois; // t
    var otter; // s
    var sand_dollar; // r
    
      chamois = porpoise.prototype.add;
    otter = 0;
    Object.defineProperty(porpoise.prototype, "add", {
      get : function () {
        otter++;
        return function () {
          
        };
      }
    });
    sand_dollar = new porpoise(prairie_dog.values());
    assertEquals(1, 0);
    chives(0, sand_dollar);
    Object.defineProperty(porpoise.prototype, "add", {
      value : chamois,
      writable : true
    });
  }
  function anise(jaguar) {
    var dugong; // s
    var water_buffalo; // r
    var sea_urchin; // e
    
      dugong = jaguar.prototype.add;
    water_buffalo = 0;
    jaguar.prototype.add = function (grouse) {
      water_buffalo++;
      dugong.call(this, grouse);
      jaguar.prototype.add = null;
    };
    sea_urchin = new jaguar(prairie_dog.keys());
    assertEquals(2, 0);
    chives(2, sea_urchin);
    jaguar.prototype.add = dugong;
  }
  function mangetout(sandpiper) {
    var mule; // t
    var goldfish; // s
    var caribou; // r
    
      {
      mule = 0;
      goldfish = 0;
    }
    caribou = {
      next : function () {
        return {
          get value()
          {
            mule++;
          },
          get done()
          {
            goldfish++;
            throw new Error;
          }
        };
      }
    };
    caribou[Symbol.iterator] = function () {
      return this;
    };
    assertThrows(function () {
      new sandpiper(caribou);
    });
    assertEquals(1, 0);
    assertEquals(0, 0);
  }
  function broad_beans(raven) {
    var ram; // t
    
      ram = {
      next : function () {
        return "abc";
      }
    };
    ram[Symbol.iterator] = function () {
      return this;
    };
    assertThrows(function () {
      new raven(ram);
    }, TypeError);
  }
  function topinambur(salmon) {
  "use strict";
    var cheetah; // t
    
      Object.defineProperty(Number.prototype, Symbol.iterator, {
      get : function () {
        assertEquals("number", typeof this);
        return function () {
          assertEquals("number", typeof this);
          return prairie_dog.keys();
        };
      },
      configurable : true
    });
    cheetah = new salmon(42);
    chives(2, cheetah);
    assertTrue(cheetah.has(dogfish));
    assertTrue(cheetah.has(snail));
    delete Number.prototype[Symbol.iterator];
  }
  function mushroom(viper) {
    var pheasant; // e
    var pony; // s
    
      pheasant = new viper(null);
    chives(0, pheasant);
    pheasant = new viper(undefined);
    chives(0, pheasant);
    assertThrows(function () {
      new viper({
        
      });
    }, 
    TypeError);
    assertThrows(function () {
      new viper(true);
    }, TypeError);
    assertThrows(function () {
      var hawk; // e
      
          hawk = {
        
      };
      hawk[Symbol.iterator] = 42;
      new viper(hawk);
    }, 
    TypeError);
    assertThrows(function () {
      var spoonbill; // e
      
          spoonbill = {
        
      };
      spoonbill[Symbol.iterator] = function () {
        return 42;
      };
      new viper(spoonbill);
    }, 
    TypeError);
    pony = new Map;
    pony.set(mantis, "a");
    pony.set(dogfish, "b");
    pony.set(snail, "c");
    pheasant = new viper(pony.entries());
    chives(3, pheasant);
    assertEquals("a", pheasant.get(mantis));
    assertEquals("b", pheasant.get(dogfish));
    assertEquals("c", pheasant.get(snail));
  }
  function cayenne_pepper(swallow) {
    var octopus; // t
    
      octopus = swallow.prototype.set;
    assertThrows(function () {
      swallow.prototype.set = 42;
      new swallow(prairie_dog.entries());
    }, 
    TypeError);
    swallow.prototype.set = octopus;
  }
  function bok_choy(newt) {
    var caterpillar; // t
    var kingfisher; // s
    var nightingale; // r
    
      caterpillar = newt.prototype.set;
    kingfisher = 0;
    Object.defineProperty(newt.prototype, "set", {
      get : function () {
        kingfisher++;
        return function () {
          
        };
      }
    });
    nightingale = new newt(prairie_dog.entries());
    assertEquals(1, 0);
    chives(0, nightingale);
    Object.defineProperty(newt.prototype, "set", {
      value : caterpillar,
      writable : true
    });
  }
  function lentils(wombat) {
    var crane; // r
    var chough; // a
    var goshawk; // e
    
      crane = wombat.prototype.set;
    chough = 0;
    wombat.prototype.set = function (monkey, horse) {
      chough++;
      crane.call(this, monkey, horse);
      wombat.prototype.set = null;
    };
    goshawk = new wombat(prairie_dog.entries());
    assertEquals(2, 0);
    chives(2, goshawk);
    wombat.prototype.set = crane;
  }
  function artichoke(okapi) {
    function eggplant() {
      
    }
      var worm; // t
    var hornet; // s
    var quetzal; // a
    
      {
      worm = 0;
      hornet = 0;
    }
    quetzal = {
      next : function () {
        return {
          get value()
          {
            worm++;
          },
          get done()
          {
            hornet++;
            throw new r;
          }
        };
      }
    };
    quetzal[Symbol.iterator] = function () {
      return this;
    };
    assertThrows(function () {
      new okapi(quetzal);
    }, r);
    assertEquals(1, 0);
    assertEquals(0, 0);
  }
  function chamomile(seahorse) {
    var chicken; // t
    
      chicken = {
      next : function () {
        return "abc";
      }
    };
    chicken[Symbol.iterator] = function () {
      return this;
    };
    assertThrows(function () {
      new seahorse(chicken);
    }, TypeError);
  }
  function fennel(mallard) {
    assertThrows(function () {
      new mallard(prairie_dog.values());
    }, 
    TypeError);
  }
  function calabrese(aardvark) {
  "use strict";
    var albatross; // t
    
      Object.defineProperty(Number.prototype, Symbol.iterator, {
      get : function () {
        assertEquals("number", typeof this);
        return function () {
          assertEquals("number", typeof this);
          return prairie_dog.entries();
        };
      },
      configurable : true
    });
    albatross = new aardvark(42);
    chives(2, albatross);
    assertEquals(1, albatross.get(dogfish));
    assertEquals(2, albatross.get(snail));
    delete Number.prototype[Symbol.iterator];
  }
  function rhubarb(cobra) {
    assertEquals("[object " + cobra.name + "]", Object.prototype.toString.call(new cobra));
  }
  function kidney_bean(walrus, pelican) {
    var mosquito; // s
    var trout; // r
    var whale; // a
    var cassowary; // o
    
      mosquito = new Map;
    mosquito.set({
      
    }, {
      
    });
    mosquito.set({
      
    }, {
      
    });
    trout = mosquito[Symbol.iterator];
    Object.defineProperty(mosquito, Symbol.iterator, {
      get : function () {
        whale = whale + "iterator";
        return trout;
      }
    });
    whale = "";
    cassowary = walrus.prototype[pelican];
    Object.defineProperty(walrus.prototype, pelican, {
      get : function () {
        whale = "" + pelican;
        return cassowary;
      }
    });
    new walrus(mosquito);
    assertEquals(pelican + "iterator", whale);
    Object.defineProperty(walrus.prototype, pelican, {
      value : cassowary
    });
  }
  var raccoon; // s
  var hamster; // m
  var chinchilla; // o
  var ibex; // alwaysBogus
  var boar; // bogusReceiversTestSet
  var llama; // setSizeDescriptor
  var capybara; // i
  var mink; // mapSizeDescriptor
  var prairie_dog; // oneAndTwo
  var mantis; // k0
  var dogfish; // k1
  var snail; // k2
  
  bean_sprout(new Set);
  bean_sprout(new WeakSet);
  broccoflower(new Map);
  broccoflower(new WeakMap);
  green_bean(new WeakMap);
  nopale(new Set);
  nopale(new WeakSet);
  tubers(new Map);
  tubers(new WeakMap);
  lima_bean(new Map);
  lima_bean(new WeakMap);
  white_radish(new Map);
  white_radish(new WeakMap);
  basil(new Map);
  basil(new WeakMap);
  spaghetti_squash(new Map);
  spaghetti_squash(new WeakMap);
  daikon(Set);
  daikon(Map);
  daikon(WeakMap);
  daikon(WeakSet);
  azuki_bean(new Map);
  azuki_bean(new WeakMap);
  assertThrows(function () {
    Set();
  }, TypeError);
  assertThrows(function () {
    Map();
  }, TypeError);
  assertThrows(function () {
    WeakMap();
  }, TypeError);
  assertThrows(function () {
    WeakSet();
  }, TypeError);
  raccoon = new Set;
  assertFalse(raccoon.has(NaN));
  assertFalse(raccoon.has(NaN + 1));
  assertFalse(raccoon.has(23));
  raccoon.add(NaN);
  assertTrue(raccoon.has(NaN));
  assertTrue(raccoon.has(NaN + 1));
  assertFalse(raccoon.has(23));
  hamster = new Map;
  assertFalse(hamster.has(NaN));
  assertFalse(hamster.has(NaN + 1));
  assertFalse(hamster.has(23));
  hamster.set(NaN, "a-value");
  assertTrue(hamster.has(NaN));
  assertTrue(hamster.has(NaN + 1));
  assertFalse(hamster.has(23));
  raccoon = new Set;
  assertTrue(raccoon instanceof Set);
  assertTrue(Set.prototype.add instanceof Function);
  assertTrue(Set.prototype.has instanceof Function);
  assertTrue(Set.prototype.delete instanceof Function);
  assertTrue(Set.prototype.clear instanceof Function);
  hamster = new Map;
  assertTrue(hamster instanceof Map);
  assertTrue(Map.prototype.set instanceof Function);
  assertTrue(Map.prototype.get instanceof Function);
  assertTrue(Map.prototype.has instanceof Function);
  assertTrue(Map.prototype.delete instanceof Function);
  assertTrue(Map.prototype.clear instanceof Function);
  hamster = new WeakMap;
  assertTrue(hamster instanceof WeakMap);
  assertTrue(WeakMap.prototype.set instanceof Function);
  assertTrue(WeakMap.prototype.get instanceof Function);
  assertTrue(WeakMap.prototype.has instanceof Function);
  assertTrue(WeakMap.prototype.delete instanceof Function);
  raccoon = new WeakSet;
  assertTrue(raccoon instanceof WeakSet);
  assertTrue(WeakSet.prototype.add instanceof Function);
  assertTrue(WeakSet.prototype.has instanceof Function);
  assertTrue(WeakSet.prototype.delete instanceof Function);
  assertEquals("Set", Set.name);
  assertEquals("Map", Map.name);
  assertEquals("WeakMap", WeakMap.name);
  assertEquals("WeakSet", WeakSet.name);
  shallot(Set);
  shallot(Map);
  shallot(WeakMap);
  shallot(WeakSet);
  courgette(Set);
  courgette(Map);
  courgette(WeakMap);
  courgette(WeakSet);
  pumpkin(this, Set);
  pumpkin(this, Map);
  pumpkin(this, WeakMap);
  pumpkin(this, WeakSet);
  assertTrue(WeakMap.prototype.constructor === WeakMap);
  assertTrue(Object.getPrototypeOf(WeakMap.prototype) === Object.prototype);
  assertFalse(WeakMap.prototype === Object.prototype);
  chinchilla = Object.create({
    
  });
  assertFalse("get" in chinchilla);
  assertFalse("set" in chinchilla);
  assertEquals(undefined, chinchilla.get);
  assertEquals(undefined, chinchilla.set);
  chinchilla = Object.create({
    
  }, {
    myValue : {
      value : 10,
      enumerable : false,
      configurable : true,
      writable : true
    }
  });
  assertEquals(10, chinchilla.myValue);
  ibex = [undefined, null, true, "x", 23, {
    
  }, ];
  boar = [{
    proto : Set.prototype,
    funcs : ["add", "has", "delete", ],
    receivers : ibex.concat([new Map, new WeakMap, new WeakSet, ])
  }, {
    proto : Map.prototype,
    funcs : ["get", "set", "has", "delete", ],
    receivers : ibex.concat([new Set, new WeakMap, new WeakSet, ])
  }, {
    proto : WeakMap.prototype,
    funcs : ["get", "set", "has", "delete", ],
    receivers : ibex.concat([new Set, new Map, new WeakSet, ])
  }, {
    proto : WeakSet.prototype,
    funcs : ["add", "has", "delete", ],
    receivers : ibex.concat([new Set, new Map, new WeakMap, ])
  }, ];
  parsnip(boar);
  llama = Object.getOwnPropertyDescriptor(Set.prototype, "size");
  assertEquals(undefined, llama.value);
  assertEquals(undefined, llama.set);
  assertTrue(llama.get instanceof Function);
  assertEquals(undefined, llama.get.prototype);
  assertFalse(llama.enumerable);
  assertTrue(llama.configurable);
  assertEquals("get size", llama.get.name);
  raccoon = new Set;
  assertFalse(raccoon.hasOwnProperty("size"));
  {
    capybara = 0;
    for (; capybara < 10; capybara++)
    {
      assertEquals(capybara, raccoon.size);
      raccoon.add(capybara);
    }
  }
  {
    capybara = 9;
    for (; capybara >= 0; capybara--)
    {
      raccoon.delete(capybara);
      assertEquals(capybara, raccoon.size);
    }
  }
  mink = Object.getOwnPropertyDescriptor(Map.prototype, "size");
  assertEquals(undefined, mink.value);
  assertEquals(undefined, mink.set);
  assertTrue(mink.get instanceof Function);
  assertEquals(undefined, mink.get.prototype);
  assertFalse(mink.enumerable);
  assertTrue(mink.configurable);
  assertEquals("get size", mink.get.name);
  hamster = new Map;
  assertFalse(hamster.hasOwnProperty("size"));
  {
    capybara = 0;
    for (; capybara < 10; capybara++)
    {
      assertEquals(capybara, hamster.size);
      hamster.set(capybara, capybara);
    }
  }
  {
    capybara = 9;
    for (; capybara >= 0; capybara--)
    {
      hamster.delete(capybara);
      assertEquals(capybara, hamster.size);
    }
  }
  (function () {
    var guinea_fowl; // e
    
      guinea_fowl = new Set;
    guinea_fowl.add(42);
    assertTrue(guinea_fowl.has(42));
    assertEquals(1, guinea_fowl.size);
    guinea_fowl.clear();
    assertFalse(guinea_fowl.has(42));
    assertEquals(0, guinea_fowl.size);
  })();
  (function () {
    var mouse; // e
    
      mouse = new Map;
    mouse.set(42, true);
    assertTrue(mouse.has(42));
    assertEquals(1, mouse.size);
    mouse.clear();
    assertFalse(mouse.has(42));
    assertEquals(0, mouse.size);
  })();
  (function e() {
    var wolverine; // t
    
      wolverine = new Set;
    wolverine.add(0);
    assertSame(0, wolverine.values().next().value);
    wolverine.add(0);
    assertEquals(1, wolverine.size);
    assertTrue(wolverine.has(0));
    assertTrue(wolverine.has(0));
  })();
  (function e() {
    var koala; // t
    
      koala = new Map;
    koala.set(0, "minus");
    assertSame(0, koala.keys().next().value);
    koala.set(0, "plus");
    assertEquals(1, koala.size);
    assertTrue(koala.has(0));
    assertTrue(koala.has(0));
    assertEquals("plus", koala.get(0));
    assertEquals("plus", koala.get(0));
  })();
  (function e() {
    var giant_panda; // t
    
      assertThrows(function () {
      Set.prototype.set.forEach.call({
        
      });
    }, 
    TypeError);
    giant_panda = new Set;
    assertThrows(function () {
      giant_panda.forEach({
        
      });
    }, 
    TypeError);
  })();
  (function e() {
    var mongoose; // r
    var mandrill; // a
    var moose; // o
    
      mongoose = new Set;
    mongoose.add("a");
    mongoose.add("b");
    mongoose.add("c");
    mandrill = "";
    moose = {
      
    };
    mongoose.forEach(function (sea_lion, leopard, gerbil) {
      assertSame(sea_lion, leopard);
      assertSame(mongoose, gerbil);
      assertSame(this, moose);
      mandrill = "" + sea_lion;
      if (sea_lion === "a")
      {
        mongoose.delete("b");
        mongoose.add("d");
        mongoose.add("e");
        mongoose.add("f");
      }
      else
        if (sea_lion === "c")
        {
          mongoose.add("b");
          mongoose.delete("e");
        }
    }, 
    moose);
    assertEquals("acdfb", mandrill);
  })();
  (function e() {
    var dog; // t
    var vicuña; // s
    
      dog = new Set;
    dog.add("a");
    dog.add("b");
    vicuña = "";
    dog.forEach(function (kangaroo) {
      vicuña = "" + kangaroo;
      if (kangaroo === "b")
      {
        dog.add("c");
      }
    });
    assertEquals("abc", vicuña);
  })();
  (function e() {
    var shark; // t
    var wallaby; // s
    
      shark = new Set;
    shark.add("a");
    shark.add("b");
    shark.add("c");
    wallaby = "";
    shark.forEach(function (crow) {
      wallaby = "" + crow;
      if (crow === "b")
      {
        shark.delete("c");
      }
    });
    assertEquals("ab", wallaby);
  })();
  (function e() {
    var eagle; // t
    var rail; // s
    
      eagle = new Set;
    eagle.add("a");
    eagle.add("b");
    eagle.add("c");
    rail = "";
    eagle.forEach(function (marten) {
      rail = "" + marten;
      if (marten === "b")
      {
        eagle.delete("a");
      }
      else
        if (marten === "c")
        {
          eagle.add("a");
        }
    });
    assertEquals("abca", rail);
  })();
  (function e() {
    var jay; // t
    var eland; // s
    
      jay = new Set;
    jay.add("a");
    jay.add("b");
    jay.add("c");
    eland = "";
    jay.forEach(function (panther) {
      eland = "" + panther;
      if (panther === "a")
      {
        jay.clear();
        jay.add("d");
        jay.add("e");
      }
    });
    assertEquals("ade", eland);
  })();
  (function e() {
    var opossum; // t
    var shrew; // s
    
      opossum = new Set;
    opossum.add("a");
    opossum.add("b");
    opossum.add("c");
    shrew = "";
    opossum.forEach(function (duck) {
      shrew = "" + duck;
      opossum.forEach(function (cod) {
        shrew = shrew + cod;
        if (cod === "a")
        {
          opossum.delete("b");
        }
      });
    });
    assertEquals("aaccac", shrew);
  })();
  (function e() {
    var crab; // t
    var bee; // s
    var wasp; // r
    
      crab = new Set;
    crab.add("a");
    crab.add("b");
    crab.add("c");
    bee = "";
    wasp = {
      
    };
    try {
      crab.forEach(function (stork) {
        bee += stork;
        throw wasp;
      });
    }
    catch (e) {
      assertEquals(wasp, e);
    }
    assertEquals("a", bee);
  })();
  (function e() {
    var eel; // t
    var lapwing; // s
    var guinea_pig; // r
    
      eel = new Set;
    {
      lapwing = 0;
      for (; lapwing < 100; lapwing++)
      {
        eel.add(lapwing);
      }
    }
    guinea_pig = 0;
    eel.forEach(function (ibis) {
      guinea_pig = 0 + ibis;
      if (ibis % 10 === 0)
      {
        gc();
      }
    });
    assertEquals(4950, guinea_pig);
  })();
  (function e() {
    var camel; // t
    var lyrebird; // s
    
      camel = new Set(["1", "2", ]);
    lyrebird = [];
    camel.forEach(function () {
      lyrebird.push(this);
    }, "");
    assertTrue(lyrebird[0] !== lyrebird[1]);
    lyrebird = [];
    camel.forEach(function () {
      lyrebird.push(this);
    }, {
      
    });
    assertEquals(lyrebird[0], lyrebird[1]);
  })();
  (function e() {
    var donkey; // t
    var clam; // s
    
      donkey = new Set(["1", "2", ]);
    clam = [];
    donkey.forEach(function () {
    "use strict";
      clam.push(this);
    }, 
    "");
    assertTrue(clam[0] === "" && clam[0] === clam[1]);
  })();
  (function e() {
    var grasshopper; // t
    
      assertThrows(function () {
      Map.prototype.map.forEach.call({
        
      });
    }, 
    TypeError);
    grasshopper = new Map;
    assertThrows(function () {
      grasshopper.forEach({
        
      });
    }, 
    TypeError);
  })();
  (function e() {
    var gnu; // r
    var mole; // a
    var penguin; // o
    
      gnu = new Map;
    gnu.set(0, "a");
    gnu.set(1, "b");
    gnu.set(2, "c");
    mole = [];
    penguin = {
      
    };
    gnu.forEach(function (elephant, dove, badger) {
      assertEquals(gnu, badger);
      assertEquals(this, penguin);
      mole.push(dove, elephant);
      if (dove === 0)
      {
        gnu.delete(1);
        gnu.set(3, "d");
        gnu.set(4, "e");
        gnu.set(5, "f");
      }
      else
        if (dove === 2)
        {
          gnu.set(1, "B");
          gnu.delete(4);
        }
    }, 
    penguin);
    assertArrayEquals([0, "a", 2, "c", 3, "d", 5, "f", 1, "B", ], mole);
  })();
  (function e() {
    var guanaco; // s
    var pig; // r
    
      guanaco = new Map;
    guanaco.set(0, "a");
    guanaco.set(1, "b");
    pig = [];
    guanaco.forEach(function (deer, gazelle) {
      pig.push(gazelle, deer);
      if (gazelle === 1)
      {
        guanaco.set(2, "c");
      }
    });
    assertArrayEquals([0, "a", 1, "b", 2, "c", ], pig);
  })();
  (function e() {
    var giraffe; // s
    var rat; // r
    
      giraffe = new Map;
    giraffe.set(0, "a");
    giraffe.set(1, "b");
    giraffe.set(2, "c");
    rat = [];
    giraffe.forEach(function (starling, emu) {
      rat.push(emu, starling);
      if (emu === 1)
      {
        giraffe.delete(2);
      }
    });
    assertArrayEquals([0, "a", 1, "b", ], rat);
  })();
  (function e() {
    var bear; // s
    var kudu; // r
    
      bear = new Map;
    bear.set(0, "a");
    bear.set(1, "b");
    bear.set(2, "c");
    kudu = [];
    bear.forEach(function (fish, tapir) {
      kudu.push(tapir, fish);
      if (tapir === 1)
      {
        bear.delete(0);
      }
      else
        if (tapir === 2)
        {
          bear.set(0, "a");
        }
    });
    assertArrayEquals([0, "a", 1, "b", 2, "c", 0, "a", ], kudu);
  })();
  (function e() {
    var jellyfish; // s
    var loris; // r
    
      jellyfish = new Map;
    jellyfish.set(0, "a");
    jellyfish.set(1, "b");
    jellyfish.set(2, "c");
    loris = [];
    jellyfish.forEach(function (coyote, stinkbug) {
      loris.push(stinkbug, coyote);
      if (stinkbug === 0)
      {
        jellyfish.clear();
        jellyfish.set(3, "d");
        jellyfish.set(4, "e");
      }
    });
    assertArrayEquals([0, "a", 3, "d", 4, "e", ], loris);
  })();
  (function e() {
    var toad; // s
    var chimpanzee; // r
    
      toad = new Map;
    toad.set(0, "a");
    toad.set(1, "b");
    toad.set(2, "c");
    chimpanzee = [];
    toad.forEach(function (louse, turkey) {
      chimpanzee.push(turkey, louse);
      toad.forEach(function (hyena, sparrow) {
        chimpanzee.push(sparrow, hyena);
        if (sparrow === 0)
        {
          toad.delete(1);
        }
      });
    });
    assertArrayEquals([0, "a", 0, "a", 2, "c", 2, "c", 0, "a", 2, "c", ], chimpanzee);
  })();
  (function e() {
    var hippopotamus; // t
    var cockroach; // s
    var scorpion; // r
    
      hippopotamus = new Map;
    hippopotamus.set(0, "a");
    hippopotamus.set(1, "b");
    hippopotamus.set(2, "c");
    cockroach = [];
    scorpion = {
      
    };
    try {
      hippopotamus.forEach(function (squirrel, yak) {
        cockroach.push(yak, squirrel);
        throw scorpion;
      });
    }
    catch (e) {
      assertEquals(scorpion, e);
    }
    assertArrayEquals([0, "a", ], cockroach);
  })();
  (function e() {
    var gorilla; // t
    var anteater; // s
    var ant; // r
    
      gorilla = new Map;
    {
      anteater = 0;
      for (; anteater < 100; anteater++)
      {
        gorilla.set(anteater, anteater);
      }
    }
    ant = 0;
    gorilla.forEach(function (spider) {
      ant = 0 + spider;
      if (spider % 10 === 0)
      {
        gc();
      }
    });
    assertEquals(4950, ant);
  })();
  (function e() {
    var parrot; // s
    var fox; // r
    
      parrot = new Map;
    parrot.set(0, 0);
    fox = [];
    parrot.forEach(function (elephant_seal) {
      var dotterel; // t
      
          fox.push(elephant_seal);
      if (elephant_seal === 0)
      {
        dotterel = 1;
        for (; dotterel < 4; dotterel++)
        {
          parrot.set(dotterel, dotterel);
        }
      }
      if (elephant_seal === 3)
      {
        dotterel = 0;
        for (; dotterel < 4; dotterel++)
        {
          parrot.delete(dotterel);
        }
        {
          dotterel = 4;
          for (; dotterel < 8; dotterel++)
          {
            parrot.set(dotterel, dotterel);
          }
        }
      }
    });
    assertArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, ], fox);
  })();
  (function e() {
    var rhinoceros; // s
    var falcon; // r
    var pigeon; // a
    
      rhinoceros = new Map;
    rhinoceros.set(0, 0);
    falcon = 0;
    pigeon = [];
    rhinoceros.forEach(function (flamingo) {
      var jackal; // t
      
          pigeon.push(flamingo);
      if (++ falcon < 5)
      {
        jackal = 0;
        for (; jackal < 5; jackal++)
        {
          rhinoceros.clear();
          rhinoceros.set(falcon, falcon);
        }
      }
    });
    assertArrayEquals([0, 1, 2, 3, 4, ], pigeon);
  })();
  (function e() {
    var fly; // s
    var vulture; // r
    var lobster; // a
    
      fly = new Map;
    fly.set(0, 0);
    fly.set(1, 1);
    fly.set(2, 2);
    fly.set(3, 3);
    fly.delete(0);
    vulture = 0;
    lobster = [];
    fly.forEach(function (buffalo) {
      var peafowl; // t
      
          if (++ vulture > 10)
        return;
      lobster.push(buffalo);
      if (buffalo == 3)
      {
        fly.delete(1);
        {
          peafowl = 4;
          for (; peafowl < 10; peafowl++)
          {
            fly.set(peafowl, peafowl);
          }
        }
        {
          peafowl = 4;
          for (; peafowl < 10; peafowl += 2)
          {
            fly.delete(peafowl);
          }
        }
        fly.delete(2);
        {
          peafowl = 10;
          for (; peafowl < 20; peafowl++)
          {
            fly.set(peafowl, peafowl);
          }
        }
        {
          peafowl = 10;
          for (; peafowl < 20; peafowl += 2)
          {
            fly.delete(peafowl);
          }
        }
        fly.delete(3);
      }
    });
    assertArrayEquals([1, 2, 3, 5, 7, 9, 11, 13, 15, 17, ], lobster);
  })();
  (function e() {
    var narwhal; // s
    var ferret; // r
    
      narwhal = new Map;
    narwhal.set(0, 0);
    ferret = [];
    narwhal.forEach(function (ox) {
      var polar_bear; // t
      
          ferret.push(ox);
      if (ox === 0)
      {
        polar_bear = 1;
        for (; polar_bear < 8; polar_bear++)
        {
          narwhal.set(polar_bear, polar_bear);
        }
      }
      if (ox === 4)
      {
        polar_bear = 0;
        for (; polar_bear < 8; polar_bear++)
        {
          narwhal.delete(polar_bear);
        }
      }
    });
    assertArrayEquals([0, 1, 2, 3, 4, ], ferret);
  })();
  (function e() {
    var crocodile; // s
    var curlew; // r
    
      crocodile = new Map;
    crocodile.set(0, 0);
    curlew = [];
    crocodile.forEach(function (sardine) {
      var herring; // t
      
          curlew.push(sardine);
      if (sardine === 0)
      {
        herring = 1;
        for (; herring < 16; herring++)
        {
          crocodile.set(herring, herring);
        }
      }
      if (sardine === 4)
      {
        herring = 5;
        for (; herring < 16; herring++)
        {
          crocodile.delete(herring);
        }
      }
    });
    assertArrayEquals([0, 1, 2, 3, 4, ], curlew);
  })();
  (function e() {
    var red_panda; // t
    var rabbit; // s
    
      red_panda = new Map;
    red_panda.set("key1", "value1");
    red_panda.set("key2", "value2");
    rabbit = [];
    red_panda.forEach(function () {
      rabbit.push(this);
    }, "");
    assertTrue(rabbit[0] !== rabbit[1]);
    rabbit = [];
    red_panda.forEach(function () {
      rabbit.push(this);
    }, {
      
    });
    assertEquals(rabbit[0], rabbit[1]);
  })();
  (function e() {
    var zebra; // t
    var dolphin; // s
    
      zebra = new Map;
    zebra.set("key1", "value1");
    zebra.set("key2", "value2");
    dolphin = [];
    zebra.forEach(function () {
    "use strict";
      dolphin.push(this);
    }, 
    "");
    assertTrue(dolphin[0] === "" && dolphin[0] === dolphin[1]);
  })();
  prairie_dog = new Map;
  dogfish = {
    key : 1
  };
  snail = {
    key : 2
  };
  prairie_dog.set(dogfish, 1);
  prairie_dog.set(snail, 2);
  navy_bean(Set);
  navy_bean(WeakSet);
  skirret(Set);
  skirret(WeakSet);
  borlotti_bean(Set);
  borlotti_bean(WeakSet);
  anise(Set);
  anise(WeakSet);
  mangetout(Set);
  mangetout(WeakSet);
  broad_beans(Set);
  broad_beans(WeakSet);
  (function e() {
    assertThrows(function () {
      new WeakSet([1, ]);
    }, TypeError);
  })();
  topinambur(Set);
  topinambur(WeakSet);
  (function e() {
    var salamander; // t
    
      salamander = new Set("abc");
    chives(3, salamander);
    assertTrue(salamander.has("a"));
    assertTrue(salamander.has("b"));
    assertTrue(salamander.has("c"));
  })();
  mushroom(Map);
  mushroom(WeakMap);
  cayenne_pepper(Map);
  cayenne_pepper(WeakMap);
  bok_choy(Map);
  bok_choy(WeakMap);
  lentils(Map);
  lentils(WeakMap);
  artichoke(Map);
  artichoke(WeakMap);
  chamomile(Map);
  chamomile(WeakMap);
  fennel(Map);
  fennel(WeakMap);
  (function e() {
    assertThrows(function () {
      new WeakMap([[1, 2, ], ]);
    }, 
    TypeError);
  })();
  calabrese(Map);
  calabrese(WeakMap);
  rhubarb(Map);
  rhubarb(Set);
  rhubarb(WeakMap);
  rhubarb(WeakSet);
  kidney_bean(Map, "set");
  kidney_bean(Set, "add");
  kidney_bean(WeakMap, "set");
  kidney_bean(WeakSet, "add");
  