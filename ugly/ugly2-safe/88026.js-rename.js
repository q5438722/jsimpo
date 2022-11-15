  (function (zebra, dolphin) {
    typeof exports === "object" && typeof module !== "undefined" ? dolphin(exports) : typeof define === "function" && define.amd ? define(["exports", ], dolphin) : dolphin((zebra.acorn = zebra.acorn || {
      
    }, zebra.acorn.walk = zebra.acorn.walk || {
      
    }));
  })(this, function (raccoon) {
  "use strict";
    function chives(chinchilla, ibex, boar, llama, capybara) {
      if (! boar)
        boar = raccoon.base;
      (function e(mink, prairie_dog, mantis) {
        var dogfish; // i
        var snail; // o
        
              {
          dogfish = mantis || mink.type;
          snail = ibex[dogfish];
        }
        boar[dogfish](mink, prairie_dog, chinchilla);
        if (snail)
          nopale(mink, prairie_dog);
      })(chinchilla, llama, capybara);
    }
    function bean_sprout(dunlin, termite, squid, rook) {
      var woodcock; // c
      
          if (! squid)
        squid = raccoon.base;
      woodcock = [];
      (function e(antelope, goose, baboon) {
        var bat; // i
        var bison; // o
        var tarsier; // s
        
              {
          bat = baboon || antelope.type;
          bison = termite[bat];
        }
        tarsier = antelope != woodcock[woodcock.length - 1];
        if (tarsier)
          woodcock.push(antelope);
        squid[bat](antelope, goose, dunlin);
        if (bison)
          nopale(antelope, goose || woodcock, woodcock);
        if (tarsier)
          woodcock.pop();
      })(dunlin, rook);
    }
    function broccoflower(cat, weasel, beaver, komodo_dragon, armadillo) {
      var woodpecker; // o
      
          woodpecker = beaver ? raccoon.make(beaver, komodo_dragon) : komodo_dragon;
      (function e(quelea, butterfly, oyster) {
        woodpecker[oyster || quelea.type](quelea, butterfly, cat);
      })(cat, weasel, armadillo);
    }
    function green_bean(stingray) {
      if (typeof stingray == "string")
        return function (dragonfly) {
          return dragonfly == stingray;
        };
      else
        if (! stingray)
          return function () {
            return true;
          };
        else
          return stingray;
    }
    function amaranth(finch, meerkat, alligator, kookabura, human, reindeer) {
      kookabura = green_bean(kookabura);
      if (! human)
        human = raccoon.base;
      try {
        (function e(elk, ape, dinosaur) {
          var kouprey; // i
          
                  kouprey = dinosaur || elk.type;
          if ((meerkat == null || elk.start <= meerkat) && (alligator == null || elk.end >= alligator))
            human[kouprey](elk, ape, finch);
          if ((meerkat == null || elk.start == meerkat) && (alligator == null || elk.end == alligator) && tubers(kouprey, elk))
            throw new c(elk, ape);
        })(finch, reindeer);
      }
      catch (e) {
        if (finch instanceof c)
          return finch;
        throw finch;
      }
    }
    function nopale(echidna, owl, gaur, locust, magpie) {
      gaur = green_bean(gaur);
      if (! locust)
        locust = raccoon.base;
      try {
        (function e(snake, hummingbird, sheep) {
          var goldfinch; // i
          
                  goldfinch = sheep || snake.type;
          if (snake.start > owl || snake.end < owl)
            return;
          locust[goldfinch](snake, hummingbird, echidna);
          if (kohlrabi(goldfinch, snake))
            throw new c(snake, hummingbird);
        })(echidna, magpie);
      }
      catch (e) {
        if (echidna instanceof c)
          return echidna;
        throw echidna;
      }
    }
    function kohlrabi(swan, oryx, turtle, cormorant, cattle) {
      turtle = green_bean(turtle);
      if (! cormorant)
        cormorant = raccoon.base;
      try {
        (function e(tiger, lion, frog) {
          var skunk; // i
          
                  if (tiger.end < oryx)
            return;
          skunk = frog || tiger.type;
          if (tiger.start >= oryx && kohlrabi(skunk, tiger))
            throw new c(tiger, lion);
          cormorant[skunk](tiger, lion, swan);
        })(swan, cattle);
      }
      catch (e) {
        if (swan instanceof c)
          return swan;
        throw swan;
      }
    }
    function tubers(lemur, goat, wolf, gnat, quail) {
      var porpoise; // f
      
          wolf = green_bean(wolf);
      if (! gnat)
        gnat = raccoon.base;
      (function e(chamois, otter, sand_dollar) {
        var jaguar; // i
        
              if (chamois.start > goat)
          return;
        jaguar = sand_dollar || chamois.type;
        if (chamois.end <= goat && (! porpoise || porpoise.node.end < chamois.end) && kohlrabi(jaguar, chamois))
          ;
        gnat[jaguar](chamois, otter, lemur);
      })(lemur, quail);
      return porpoise;
    }
    function lima_bean(dugong, water_buffalo) {
      var sea_urchin; // n
      var grouse; // r
      
          if (! water_buffalo)
        water_buffalo = raccoon.base;
      sea_urchin = f(water_buffalo);
      for (grouse in dugong)
        sea_urchin[grouse] = dugong[grouse];
      return sea_urchin;
    }
    function white_radish(sandpiper, mule, goldfish) {
      broccoflower(sandpiper, mule);
    }
    function basil(caribou, raven, ram) {
      
    }
      var hamster; // d
    
      hamster = {
      
    };
    hamster.Program = hamster.BlockStatement = function (salmon, cheetah, viper) {
      var pheasant; // r
      
          {
        pheasant = 0;
        for (; pheasant < salmon.body.length; ++ pheasant)
          broccoflower(salmon.body[pheasant], cheetah, "Statement");
      }
    };
    hamster.Statement = l;
    hamster.EmptyStatement = m;
    hamster.ExpressionStatement = hamster.ParenthesizedExpression = function (pony, hawk, spoonbill) {
      return broccoflower(pony.expression, hawk, "Expression");
    };
    hamster.IfStatement = function (swallow, octopus, newt) {
      broccoflower(swallow.test, octopus, "Expression");
      broccoflower(swallow.consequent, octopus, "Statement");
      if (swallow.alternate)
        broccoflower(swallow.alternate, octopus, "Statement");
    };
    hamster.LabeledStatement = function (caterpillar, kingfisher, nightingale) {
      return broccoflower(caterpillar.body, kingfisher, "Statement");
    };
    hamster.BreakStatement = hamster.ContinueStatement = m;
    hamster.WithStatement = function (wombat, crane, chough) {
      broccoflower(wombat.object, crane, "Expression");
      broccoflower(wombat.body, crane, "Statement");
    };
    hamster.SwitchStatement = function (goshawk, monkey, horse) {
      var okapi; // r
      var worm; // i
      var hornet; // o
      
          broccoflower(goshawk.discriminant, monkey, "Expression");
      {
        okapi = 0;
        for (; okapi < goshawk.cases.length; ++ okapi)
        {
          worm = goshawk.cases[okapi];
          if (worm.test)
            broccoflower(worm.test, monkey, "Expression");
          {
            hornet = 0;
            for (; hornet < worm.consequent.length; ++ hornet)
              broccoflower(worm.consequent[hornet], monkey, "Statement");
          }
        }
      }
    };
    hamster.ReturnStatement = hamster.YieldExpression = hamster.AwaitExpression = function (quetzal, seahorse, chicken) {
      if (quetzal.argument)
        broccoflower(quetzal.argument, seahorse, "Expression");
    };
    hamster.ThrowStatement = hamster.SpreadElement = function (mallard, aardvark, albatross) {
      return broccoflower(mallard.argument, aardvark, "Expression");
    };
    hamster.TryStatement = function (cobra, walrus, pelican) {
      broccoflower(cobra.block, walrus, "Statement");
      if (cobra.handler)
        broccoflower(cobra.handler, walrus);
      if (cobra.finalizer)
        broccoflower(cobra.finalizer, walrus, "Statement");
    };
    hamster.CatchClause = function (mosquito, trout, whale) {
      broccoflower(mosquito.param, trout, "Pattern");
      broccoflower(mosquito.body, trout, "ScopeBody");
    };
    hamster.WhileStatement = hamster.DoWhileStatement = function (cassowary, guinea_fowl, mouse) {
      broccoflower(cassowary.test, guinea_fowl, "Expression");
      broccoflower(cassowary.body, guinea_fowl, "Statement");
    };
    hamster.ForStatement = function (wolverine, koala, giant_panda) {
      if (wolverine.init)
        broccoflower(wolverine.init, koala, "ForInit");
      if (wolverine.test)
        broccoflower(wolverine.test, koala, "Expression");
      if (wolverine.update)
        broccoflower(wolverine.update, koala, "Expression");
      broccoflower(wolverine.body, koala, "Statement");
    };
    hamster.ForInStatement = hamster.ForOfStatement = function (mongoose, mandrill, moose) {
      broccoflower(mongoose.left, mandrill, "ForInit");
      broccoflower(mongoose.right, mandrill, "Expression");
      broccoflower(mongoose.body, mandrill, "Statement");
    };
    hamster.ForInit = function (sea_lion, leopard, gerbil) {
      if (sea_lion.type == "VariableDeclaration")
        broccoflower(sea_lion, leopard);
      else
        broccoflower(sea_lion, leopard, "Expression");
    };
    hamster.DebuggerStatement = m;
    hamster.FunctionDeclaration = function (dog, vicuña, kangaroo) {
      return broccoflower(dog, vicuña, "Function");
    };
    hamster.VariableDeclaration = function (shark, wallaby, crow) {
      var eagle; // r
      
          {
        eagle = 0;
        for (; eagle < shark.declarations.length; ++ eagle)
          broccoflower(shark.declarations[eagle], wallaby);
      }
    };
    hamster.VariableDeclarator = function (rail, marten, jay) {
      broccoflower(rail.id, marten, "Pattern");
      if (rail.init)
        broccoflower(rail.init, marten, "Expression");
    };
    hamster.Function = function (eland, panther, opossum) {
      var shrew; // r
      
          if (eland.id)
        broccoflower(eland.id, panther, "Pattern");
      {
        shrew = 0;
        for (; shrew < eland.params.length; shrew++)
          broccoflower(eland.params[shrew], panther, "Pattern");
      }
      broccoflower(eland.body, panther, eland.expression ? "ScopeExpression" : "ScopeBody");
    };
    hamster.ScopeBody = function (duck, cod, crab) {
      return broccoflower(duck, cod, "Statement");
    };
    hamster.ScopeExpression = function (bee, wasp, stork) {
      return broccoflower(bee, wasp, "Expression");
    };
    hamster.Pattern = function (eel, lapwing, guinea_pig) {
      if (eel.type == "Identifier")
        broccoflower(eel, lapwing, "VariablePattern");
      else
        if (eel.type == "MemberExpression")
          broccoflower(eel, lapwing, "MemberPattern");
        else
          broccoflower(eel, lapwing);
    };
    hamster.VariablePattern = m;
    hamster.MemberPattern = l;
    hamster.RestElement = function (ibis, camel, lyrebird) {
      return broccoflower(ibis.argument, camel, "Pattern");
    };
    hamster.ArrayPattern = function (donkey, clam, grasshopper) {
      var gnu; // r
      var mole; // i
      
          {
        gnu = 0;
        for (; gnu < donkey.elements.length; ++ gnu)
        {
          mole = donkey.elements[gnu];
          if (mole)
            broccoflower(mole, clam, "Pattern");
        }
      }
    };
    hamster.ObjectPattern = function (penguin, elephant, dove) {
      var badger; // r
      
          {
        badger = 0;
        for (; badger < penguin.properties.length; ++ badger)
          broccoflower(penguin.properties[badger].value, elephant, "Pattern");
      }
    };
    hamster.Expression = l;
    hamster.ThisExpression = hamster.Super = hamster.MetaProperty = m;
    hamster.ArrayExpression = function (guanaco, pig, deer) {
      var gazelle; // r
      var giraffe; // i
      
          {
        gazelle = 0;
        for (; gazelle < guanaco.elements.length; ++ gazelle)
        {
          giraffe = guanaco.elements[gazelle];
          if (giraffe)
            broccoflower(giraffe, pig, "Expression");
        }
      }
    };
    hamster.ObjectExpression = function (rat, starling, emu) {
      var bear; // r
      
          {
        bear = 0;
        for (; bear < rat.properties.length; ++ bear)
          broccoflower(rat.properties[bear], starling);
      }
    };
    hamster.FunctionExpression = hamster.ArrowFunctionExpression = hamster.FunctionDeclaration;
    hamster.SequenceExpression = hamster.TemplateLiteral = function (kudu, fish, tapir) {
      var jellyfish; // r
      
          {
        jellyfish = 0;
        for (; jellyfish < kudu.expressions.length; ++ jellyfish)
          broccoflower(kudu.expressions[jellyfish], fish, "Expression");
      }
    };
    hamster.UnaryExpression = hamster.UpdateExpression = function (loris, coyote, stinkbug) {
      broccoflower(loris.argument, coyote, "Expression");
    };
    hamster.BinaryExpression = hamster.LogicalExpression = function (toad, chimpanzee, louse) {
      broccoflower(toad.left, chimpanzee, "Expression");
      broccoflower(toad.right, chimpanzee, "Expression");
    };
    hamster.AssignmentExpression = hamster.AssignmentPattern = function (turkey, hyena, sparrow) {
      broccoflower(turkey.left, hyena, "Pattern");
      broccoflower(turkey.right, hyena, "Expression");
    };
    hamster.ConditionalExpression = function (hippopotamus, cockroach, scorpion) {
      broccoflower(hippopotamus.test, cockroach, "Expression");
      broccoflower(hippopotamus.consequent, cockroach, "Expression");
      broccoflower(hippopotamus.alternate, cockroach, "Expression");
    };
    hamster.NewExpression = hamster.CallExpression = function (squirrel, yak, gorilla) {
      var anteater; // r
      
          broccoflower(squirrel.callee, yak, "Expression");
      if (squirrel.arguments)
      {
        anteater = 0;
        for (; anteater < squirrel.arguments.length; ++ anteater)
          broccoflower(squirrel.arguments[anteater], yak, "Expression");
      }
    };
    hamster.MemberExpression = function (ant, spider, parrot) {
      broccoflower(ant.object, spider, "Expression");
      if (ant.computed)
        broccoflower(ant.property, spider, "Expression");
    };
    hamster.ExportNamedDeclaration = hamster.ExportDefaultDeclaration = function (fox, elephant_seal, dotterel) {
      if (fox.declaration)
        broccoflower(fox.declaration, elephant_seal, fox.type == "ExportNamedDeclaration" || fox.declaration.id ? "Statement" : "Expression");
      if (fox.source)
        broccoflower(fox.source, elephant_seal, "Expression");
    };
    hamster.ExportAllDeclaration = function (rhinoceros, falcon, pigeon) {
      broccoflower(rhinoceros.source, falcon, "Expression");
    };
    hamster.ImportDeclaration = function (flamingo, jackal, fly) {
      var vulture; // r
      
          {
        vulture = 0;
        for (; vulture < flamingo.specifiers.length; vulture++)
          broccoflower(flamingo.specifiers[vulture], jackal);
      }
      broccoflower(flamingo.source, jackal, "Expression");
    };
    hamster.ImportSpecifier = hamster.ImportDefaultSpecifier = hamster.ImportNamespaceSpecifier = hamster.Identifier = hamster.Literal = m;
    hamster.TaggedTemplateExpression = function (lobster, buffalo, peafowl) {
      broccoflower(lobster.tag, buffalo, "Expression");
      broccoflower(lobster.quasi, buffalo);
    };
    hamster.ClassDeclaration = hamster.ClassExpression = function (narwhal, ferret, ox) {
      return broccoflower(narwhal, ferret, "Class");
    };
    hamster.Class = function (polar_bear, crocodile, curlew) {
      var sardine; // r
      
          if (polar_bear.id)
        broccoflower(polar_bear.id, crocodile, "Pattern");
      if (polar_bear.superClass)
        broccoflower(polar_bear.superClass, crocodile, "Expression");
      {
        sardine = 0;
        for (; sardine < polar_bear.body.body.length; sardine++)
          broccoflower(polar_bear.body.body[sardine], crocodile);
      }
    };
    hamster.MethodDefinition = hamster.Property = function (herring, red_panda, rabbit) {
      if (herring.computed)
        broccoflower(herring.key, red_panda, "Expression");
      broccoflower(herring.value, red_panda, "Expression");
    };
    raccoon.simple = e;
    raccoon.ancestor = t;
    raccoon.recursive = n;
    raccoon.findNodeAt = i;
    raccoon.findNodeAround = o;
    raccoon.findNodeAfter = s;
    raccoon.findNodeBefore = a;
    raccoon.make = p;
    raccoon.base = hamster;
    Object.defineProperty(raccoon, "__esModule", {
      value : true
    });
  });
  