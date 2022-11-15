  var raccoon; // AngleBetweenPoints
  var hamster; // Body
  var chinchilla; // Clamp
  var ibex; // Class
  var boar; // Collider
  var llama; // CONST
  var capybara; // DistanceBetween
  var mink; // EventEmitter
  var prairie_dog; // Events
  var mantis; // FuzzyEqual
  var dogfish; // FuzzyGreaterThan
  var snail; // FuzzyLessThan
  var dunlin; // GetOverlapX
  var termite; // GetOverlapY
  var squid; // GetTilesWithinWorldXY
  var rook; // GetValue
  var woodcock; // MATH_CONST
  var antelope; // ProcessQueue
  var goose; // ProcessTileCallbacks
  var baboon; // Rectangle
  var bat; // RTree
  var bison; // SeparateTile
  var tarsier; // SeparateX
  var cat; // SeparateY
  var weasel; // Set
  var beaver; // StaticBody
  var komodo_dragon; // TileIntersectsBody
  var armadillo; // TransformMatrix
  var woodpecker; // Vector2
  var quelea; // Wrap
  var butterfly; // World
  
  raccoon = require("../../math/angle/BetweenPoints");
  hamster = require("./Body");
  chinchilla = require("../../math/Clamp");
  ibex = require("../../utils/Class");
  boar = require("./Collider");
  llama = require("./const");
  capybara = require("../../math/distance/DistanceBetween");
  mink = require("eventemitter3");
  prairie_dog = require("./events");
  mantis = require("../../math/fuzzy/Equal");
  dogfish = require("../../math/fuzzy/GreaterThan");
  snail = require("../../math/fuzzy/LessThan");
  dunlin = require("./GetOverlapX");
  termite = require("./GetOverlapY");
  squid = require("../../tilemaps/components/GetTilesWithinWorldXY");
  rook = require("../../utils/object/GetValue");
  woodcock = require("../../math/const");
  antelope = require("../../structs/ProcessQueue");
  goose = require("./tilemap/ProcessTileCallbacks");
  baboon = require("../../geom/rectangle/Rectangle");
  bat = require("../../structs/RTree");
  bison = require("./tilemap/SeparateTile");
  tarsier = require("./SeparateX");
  cat = require("./SeparateY");
  weasel = require("../../structs/Set");
  beaver = require("./StaticBody");
  komodo_dragon = require("./tilemap/TileIntersectsBody");
  armadillo = require("../../gameobjects/components/TransformMatrix");
  woodpecker = require("../../math/Vector2");
  quelea = require("../../math/Wrap");
  butterfly = new ibex({
    Extends : mink,
    initialize : function e(oyster, stingray) {
      mink.call(this);
      this.scene = oyster;
      this.bodies = new weasel;
      this.staticBodies = new weasel;
      this.pendingDestroy = new weasel;
      this.colliders = new antelope;
      this.gravity = new woodpecker(rook(stingray, "gravity.x", 0), rook(stingray, "gravity.y", 0));
      this.bounds = new baboon(rook(stingray, "x", 0), rook(stingray, "y", 0), rook(stingray, "width", oyster.sys.scale.width), 
      rook(stingray, "height", oyster.sys.scale.height));
      this.checkCollision = {
        up : rook(stingray, "checkCollision.up", true),
        down : rook(stingray, "checkCollision.down", true),
        left : rook(stingray, "checkCollision.left", true),
        right : rook(stingray, "checkCollision.right", true)
      };
      this.fps = rook(stingray, "fps", 60);
      this.fixedStep = rook(stingray, "fixedStep", true);
      this._elapsed = 0;
      this._frameTime = 1 / this.fps;
      this._frameTimeMS = 1000 * this._frameTime;
      this.stepsLastFrame = 0;
      this.timeScale = rook(stingray, "timeScale", 1);
      this.OVERLAP_BIAS = rook(stingray, "overlapBias", 4);
      this.TILE_BIAS = rook(stingray, "tileBias", 16);
      this.forceX = rook(stingray, "forceX", false);
      this.isPaused = rook(stingray, "isPaused", false);
      this._total = 0;
      this.drawDebug = rook(stingray, "debug", false);
      this.debugGraphic;
      this.defaults = {
        debugShowBody : rook(stingray, "debugShowBody", true),
        debugShowStaticBody : rook(stingray, "debugShowStaticBody", true),
        debugShowVelocity : rook(stingray, "debugShowVelocity", true),
        bodyDebugColor : rook(stingray, "debugBodyColor", 16711935),
        staticBodyDebugColor : rook(stingray, "debugStaticBodyColor", 255),
        velocityDebugColor : rook(stingray, "debugVelocityColor", 65280)
      };
      this.maxEntries = rook(stingray, "maxEntries", 16);
      this.useTree = rook(stingray, "useTree", true);
      this.tree = new bat(this.maxEntries);
      this.staticTree = new bat(this.maxEntries);
      this.treeMinMax = {
        minX : 0,
        minY : 0,
        maxX : 0,
        maxY : 0
      };
      this._tempMatrix = new armadillo;
      this._tempMatrix2 = new armadillo;
      if (this.drawDebug)
      {
        this.createDebugGraphic();
      }
    },
    enable : function (dragonfly, finch) {
      var meerkat; // t
      var alligator; // r
      var kookabura; // s
      var human; // a
      var reindeer; // l
      
          if (finch === undefined)
      {
        finch = llama.DYNAMIC_BODY;
      }
      if (! Array.isArray(dragonfly))
      {
        dragonfly = [dragonfly, ];
      }
      {
        meerkat = 0;
        for (; meerkat < dragonfly.length; meerkat++)
        {
          alligator = dragonfly[meerkat];
          if (alligator.isParent)
          {
            kookabura = alligator.getChildren();
            {
              human = 0;
              for (; human < kookabura.length; human++)
              {
                reindeer = kookabura[human];
                if (reindeer.isParent)
                {
                  this.enable(reindeer, finch);
                }
                else
                {
                  this.enableBody(reindeer, finch);
                }
              }
            }
          }
          else
          {
            this.enableBody(alligator, finch);
          }
        }
      }
    },
    enableBody : function (elk, ape) {
      if (ape === undefined)
      {
        ape = llama.DYNAMIC_BODY;
      }
      if (! elk.body)
      {
        if (ape === llama.DYNAMIC_BODY)
        {
          elk.body = new hamster(this, elk);
        }
        else
          if (ape === llama.STATIC_BODY)
          {
            elk.body = new beaver(this, elk);
          }
      }
      this.add(elk.body);
      return elk;
    },
    add : function (dinosaur) {
      if (dinosaur.physicsType === llama.DYNAMIC_BODY)
      {
        this.bodies.set(dinosaur);
      }
      else
        if (dinosaur.physicsType === llama.STATIC_BODY)
        {
          this.staticBodies.set(dinosaur);
          this.staticTree.insert(dinosaur);
        }
      dinosaur.enable = true;
      return dinosaur;
    },
    disable : function (kouprey) {
      var echidna; // i
      var owl; // t
      var gaur; // r
      var locust; // s
      var magpie; // a
      
          if (! Array.isArray(kouprey))
      {
        kouprey = [kouprey, ];
      }
      {
        echidna = 0;
        for (; echidna < kouprey.length; echidna++)
        {
          owl = kouprey[echidna];
          if (owl.isParent)
          {
            gaur = owl.getChildren();
            {
              locust = 0;
              for (; locust < gaur.length; locust++)
              {
                magpie = gaur[locust];
                if (magpie.isParent)
                {
                  this.disable(magpie);
                }
                else
                {
                  this.disableBody(magpie.body);
                }
              }
            }
          }
          else
          {
            this.disableBody(owl.body);
          }
        }
      }
    },
    disableBody : function (snake) {
      this.remove(snake);
      snake.enable = false;
    },
    remove : function (hummingbird) {
      if (hummingbird.physicsType === llama.DYNAMIC_BODY)
      {
        this.tree.remove(hummingbird);
        this.bodies.delete(hummingbird);
      }
      else
        if (hummingbird.physicsType === llama.STATIC_BODY)
        {
          this.staticBodies.delete(hummingbird);
          this.staticTree.remove(hummingbird);
        }
    },
    createDebugGraphic : function () {
      var sheep; // e
      
          sheep = this.scene.sys.add.graphics({
        x : 0,
        y : 0
      });
      sheep.setDepth(Number.MAX_VALUE);
      this.debugGraphic = sheep;
      this.drawDebug = true;
      return sheep;
    },
    setBounds : function (goldfinch, swan, oryx, turtle, cormorant, cattle, tiger, 
    lion) {
      this.bounds.setTo(goldfinch, swan, oryx, turtle);
      if (cormorant !== undefined)
      {
        this.setBoundsCollision(cormorant, cattle, tiger, lion);
      }
      return this;
    },
    setBoundsCollision : function (frog, skunk, lemur, goat) {
      if (frog === undefined)
      {
        frog = true;
      }
      if (skunk === undefined)
      {
        skunk = true;
      }
      if (lemur === undefined)
      {
        lemur = true;
      }
      if (goat === undefined)
      {
        goat = true;
      }
      this.checkCollision.left = frog;
      this.checkCollision.right = skunk;
      this.checkCollision.up = lemur;
      this.checkCollision.down = goat;
      return this;
    },
    pause : function () {
      this.isPaused = true;
      this.emit(prairie_dog.PAUSE);
      return this;
    },
    resume : function () {
      this.isPaused = false;
      this.emit(prairie_dog.RESUME);
      return this;
    },
    addCollider : function (wolf, gnat, quail, porpoise, chamois) {
      var otter; // a
      
          if (quail === undefined)
      {
        quail = null;
      }
      if (porpoise === undefined)
      {
        porpoise = null;
      }
      if (chamois === undefined)
      {
        chamois = quail;
      }
      otter = new boar(this, false, wolf, gnat, quail, porpoise, chamois);
      this.colliders.add(otter);
      return otter;
    },
    addOverlap : function (sand_dollar, jaguar, dugong, water_buffalo, sea_urchin) {
      var grouse; // a
      
          if (dugong === undefined)
      {
        dugong = null;
      }
      if (water_buffalo === undefined)
      {
        water_buffalo = null;
      }
      if (sea_urchin === undefined)
      {
        sea_urchin = dugong;
      }
      grouse = new boar(this, true, sand_dollar, jaguar, dugong, water_buffalo, 
      sea_urchin);
      this.colliders.add(grouse);
      return grouse;
    },
    removeCollider : function (sandpiper) {
      this.colliders.remove(sandpiper);
      return this;
    },
    setFPS : function (mule) {
      this.fps = mule;
      this._frameTime = 1 / this.fps;
      this._frameTimeMS = 1000 * this._frameTime;
      return this;
    },
    update : function (goldfish, caribou) {
      var raven; // t
      var ram; // r
      var salmon; // s
      var cheetah; // a
      var viper; // l
      var pheasant; // n
      var pony; // o
      var hawk; // h
      
          if (this.isPaused || this.bodies.size === 0)
      {
        return;
      }
      ram = this._frameTime;
      salmon = this._frameTimeMS * this.timeScale;
      this._elapsed += caribou;
      viper = this.bodies.entries;
      pheasant = this._elapsed >= salmon;
      if (! this.fixedStep)
      {
        ram = caribou * .001;
        pheasant = true;
        this._elapsed = 0;
      }
      for (raven = 0; raven < viper.length; raven++)
      {
        cheetah = viper[raven];
        if (cheetah.enable)
        {
          cheetah.preUpdate(pheasant, ram);
        }
      }
      if (pheasant)
      {
        this._elapsed -= salmon;
        this.stepsLastFrame = 1;
        if (this.useTree)
        {
          this.tree.clear();
          this.tree.load(viper);
        }
        pony = this.colliders.update();
        for (raven = 0; raven < pony.length; raven++)
        {
          hawk = pony[raven];
          if (hawk.active)
          {
            hawk.update();
          }
        }
        this.emit(prairie_dog.WORLD_STEP, ram);
      }
      while (this._elapsed >= salmon)
      {
        this._elapsed -= salmon;
        this.step(ram);
      }
    },
    step : function (spoonbill) {
      var swallow; // i
      var octopus; // t
      var newt; // r
      var caterpillar; // s
      var kingfisher; // a
      var nightingale; // l
      
          newt = this.bodies.entries;
      caterpillar = newt.length;
      for (swallow = 0; swallow < caterpillar; swallow++)
      {
        octopus = newt[swallow];
        if (octopus.enable)
        {
          octopus.update(spoonbill);
        }
      }
      if (this.useTree)
      {
        this.tree.clear();
        this.tree.load(newt);
      }
      kingfisher = this.colliders.update();
      for (swallow = 0; swallow < kingfisher.length; swallow++)
      {
        nightingale = kingfisher[swallow];
        if (nightingale.active)
        {
          nightingale.update();
        }
      }
      this.emit(prairie_dog.WORLD_STEP, spoonbill);
      this.stepsLastFrame++;
    },
    postUpdate : function () {
      var wombat; // e
      var crane; // i
      var chough; // t
      var goshawk; // r
      var monkey; // s
      var horse; // a
      var okapi; // l
      var worm; // n
      var hornet; // o
      var quetzal; // h
      
          chough = this.bodies.entries;
      goshawk = chough.length;
      monkey = this.bodies;
      horse = this.staticBodies;
      if (this.stepsLastFrame)
      {
        this.stepsLastFrame = 0;
        for (wombat = 0; wombat < goshawk; wombat++)
        {
          crane = chough[wombat];
          if (crane.enable)
          {
            crane.postUpdate();
          }
        }
      }
      if (this.drawDebug)
      {
        okapi = this.debugGraphic;
        okapi.clear();
        for (wombat = 0; wombat < goshawk; wombat++)
        {
          crane = chough[wombat];
          if (crane.willDrawDebug())
          {
            crane.drawDebug(okapi);
          }
        }
        chough = horse.entries;
        goshawk = chough.length;
        for (wombat = 0; wombat < goshawk; wombat++)
        {
          crane = chough[wombat];
          if (crane.willDrawDebug())
          {
            crane.drawDebug(okapi);
          }
        }
      }
      worm = this.pendingDestroy;
      if (worm.size > 0)
      {
        hornet = this.tree;
        quetzal = this.staticTree;
        chough = worm.entries;
        goshawk = chough.length;
        for (wombat = 0; wombat < goshawk; wombat++)
        {
          crane = chough[wombat];
          if (crane.physicsType === llama.DYNAMIC_BODY)
          {
            hornet.remove(crane);
            monkey.delete(crane);
          }
          else
            if (crane.physicsType === llama.STATIC_BODY)
            {
              quetzal.remove(crane);
              horse.delete(crane);
            }
          crane.world = undefined;
          crane.gameObject = undefined;
        }
        worm.clear();
      }
    },
    updateMotion : function (seahorse, chicken) {
      if (seahorse.allowRotation)
      {
        this.computeAngularVelocity(seahorse, chicken);
      }
      this.computeVelocity(seahorse, chicken);
    },
    computeAngularVelocity : function (mallard, aardvark) {
      var albatross; // t
      var cobra; // r
      var walrus; // s
      var pelican; // a
      var mosquito; // l
      
          albatross = mallard.angularVelocity;
      cobra = mallard.angularAcceleration;
      walrus = mallard.angularDrag;
      pelican = mallard.maxAngular;
      if (cobra)
      {
        albatross = albatross + cobra * aardvark;
      }
      else
        if (mallard.allowDrag && walrus)
        {
          walrus = walrus * aardvark;
          if (dogfish(albatross - walrus, 0, .1))
          {
            albatross = albatross - walrus;
          }
          else
            if (snail(albatross + walrus, 0, .1))
            {
              albatross = albatross + walrus;
            }
            else
            {
              albatross = 0;
            }
        }
      albatross = chinchilla(albatross, - pelican, pelican);
      mosquito = albatross - mallard.angularVelocity;
      mallard.angularVelocity += mosquito;
      mallard.rotation += mallard.angularVelocity * aardvark;
    },
    computeVelocity : function (trout, whale) {
      var cassowary; // t
      var guinea_fowl; // r
      var mouse; // s
      var wolverine; // a
      var koala; // l
      var giant_panda; // n
      var mongoose; // o
      var mandrill; // h
      var moose; // c
      var sea_lion; // u
      var leopard; // f
      var gerbil; // d
      
          cassowary = trout.velocity.x;
      guinea_fowl = trout.acceleration.x;
      mouse = trout.drag.x;
      wolverine = trout.maxVelocity.x;
      koala = trout.velocity.y;
      giant_panda = trout.acceleration.y;
      mongoose = trout.drag.y;
      mandrill = trout.maxVelocity.y;
      moose = trout.speed;
      sea_lion = trout.maxSpeed;
      leopard = trout.allowDrag;
      gerbil = trout.useDamping;
      if (trout.allowGravity)
      {
        cassowary = cassowary + (this.gravity.x + trout.gravity.x) * whale;
        koala = koala + (this.gravity.y + trout.gravity.y) * whale;
      }
      if (guinea_fowl)
      {
        cassowary = cassowary + guinea_fowl * whale;
      }
      else
        if (leopard && mouse)
        {
          if (gerbil)
          {
            mouse = Math.pow(mouse, whale);
            cassowary = cassowary * mouse;
            moose = Math.sqrt(cassowary * cassowary + koala * koala);
            if (mantis(moose, 0, .001))
            {
              cassowary = 0;
            }
          }
          else
          {
            mouse = mouse * whale;
            if (dogfish(cassowary - mouse, 0, .01))
            {
              cassowary = cassowary - mouse;
            }
            else
              if (snail(cassowary + mouse, 0, .01))
              {
                cassowary = cassowary + mouse;
              }
              else
              {
                cassowary = 0;
              }
          }
        }
      if (giant_panda)
      {
        koala = koala + giant_panda * whale;
      }
      else
        if (leopard && mongoose)
        {
          if (gerbil)
          {
            mongoose = Math.pow(mongoose, whale);
            koala = koala * mongoose;
            moose = Math.sqrt(cassowary * cassowary + koala * koala);
            if (mantis(moose, 0, .001))
            {
              koala = 0;
            }
          }
          else
          {
            mongoose = mongoose * whale;
            if (dogfish(koala - mongoose, 0, .01))
            {
              koala = koala - mongoose;
            }
            else
              if (snail(koala + mongoose, 0, .01))
              {
                koala = koala + mongoose;
              }
              else
              {
                koala = 0;
              }
          }
        }
      cassowary = chinchilla(cassowary, - wolverine, wolverine);
      koala = chinchilla(koala, - mandrill, mandrill);
      trout.velocity.set(cassowary, koala);
      if (sea_lion > -1 && moose > sea_lion)
      {
        trout.velocity.normalize().scale(sea_lion);
        moose = sea_lion;
      }
      trout.speed = moose;
    },
    separate : function (dog, vicuña, kangaroo, shark, wallaby, crow) {
      var eagle; // l
      var rail; // n
      var marten; // o
      var jay; // h
      var eland; // c
      var panther; // u
      var opossum; // f
      
          if (! crow && ! dog.enable || ! vicuña.enable || dog.checkCollision.none || vicuña.checkCollision.none || ! this.intersects(dog, vicuña))
      {
        return false;
      }
      if (kangaroo && kangaroo.call(shark, dog.gameObject, vicuña.gameObject) === false)
      {
        return false;
      }
      if (dog.isCircle && vicuña.isCircle)
      {
        return this.separateCircle(dog, vicuña, wallaby);
      }
      if (dog.isCircle !== vicuña.isCircle)
      {
        eagle = dog.isCircle ? vicuña : dog;
        rail = dog.isCircle ? dog : vicuña;
        marten = {
          x : eagle.x,
          y : eagle.y,
          right : eagle.right,
          bottom : eagle.bottom
        };
        jay = rail.center;
        if (jay.y < marten.y || jay.y > marten.bottom)
        {
          if (jay.x < marten.x || jay.x > marten.right)
          {
            return this.separateCircle(dog, vicuña, wallaby);
          }
        }
      }
      eland = false;
      panther = false;
      if (wallaby)
      {
        eland = tarsier(dog, vicuña, wallaby, this.OVERLAP_BIAS);
        panther = cat(dog, vicuña, wallaby, this.OVERLAP_BIAS);
      }
      else
        if (this.forceX || Math.abs(this.gravity.y + dog.gravity.y) < Math.abs(this.gravity.x + dog.gravity.x))
        {
          eland = tarsier(dog, vicuña, wallaby, this.OVERLAP_BIAS);
          if (this.intersects(dog, vicuña))
          {
            panther = cat(dog, vicuña, wallaby, this.OVERLAP_BIAS);
          }
        }
        else
        {
          panther = cat(dog, vicuña, wallaby, this.OVERLAP_BIAS);
          if (this.intersects(dog, vicuña))
          {
            eland = tarsier(dog, vicuña, wallaby, this.OVERLAP_BIAS);
          }
        }
      opossum = eland || panther;
      if (opossum)
      {
        if (wallaby)
        {
          if (dog.onOverlap || vicuña.onOverlap)
          {
            this.emit(prairie_dog.OVERLAP, dog.gameObject, vicuña.gameObject, 
            dog, 
            vicuña);
          }
        }
        else
          if (dog.onCollide || vicuña.onCollide)
          {
            this.emit(prairie_dog.COLLIDE, dog.gameObject, vicuña.gameObject, 
            dog, 
            vicuña);
          }
      }
      return opossum;
    },
    separateCircle : function (shrew, duck, cod, crab) {
      var bee; // s
      var wasp; // a
      var stork; // l
      var eel; // n
      var lapwing; // o
      var guinea_pig; // h
      var ibis; // c
      var camel; // u
      var lyrebird; // f
      var donkey; // d
      var clam; // v
      var grasshopper; // y
      
          dunlin(shrew, duck, false, crab);
      termite(shrew, duck, false, crab);
      bee = 0;
      if (shrew.isCircle !== duck.isCircle)
      {
        wasp = {
          x : duck.isCircle ? shrew.position.x : duck.position.x,
          y : duck.isCircle ? shrew.position.y : duck.position.y,
          right : duck.isCircle ? shrew.right : duck.right,
          bottom : duck.isCircle ? shrew.bottom : duck.bottom
        };
        stork = {
          x : shrew.isCircle ? shrew.center.x : duck.center.x,
          y : shrew.isCircle ? shrew.center.y : duck.center.y,
          radius : shrew.isCircle ? shrew.halfWidth : duck.halfWidth
        };
        if (stork.y < wasp.y)
        {
          if (stork.x < wasp.x)
          {
            bee = capybara(stork.x, stork.y, wasp.x, wasp.y) - stork.radius;
          }
          else
            if (stork.x > wasp.right)
            {
              bee = capybara(stork.x, stork.y, wasp.right, wasp.y) - stork.radius;
            }
        }
        else
          if (stork.y > wasp.bottom)
          {
            if (stork.x < wasp.x)
            {
              bee = capybara(stork.x, stork.y, wasp.x, wasp.bottom) - stork.radius;
            }
            else
              if (stork.x > wasp.right)
              {
                bee = capybara(stork.x, stork.y, wasp.right, wasp.bottom) - stork.radius;
              }
          }
        bee = bee * -1;
      }
      else
      {
        bee = shrew.halfWidth + duck.halfWidth - capybara(shrew.center.x, shrew.center.y, duck.center.x, duck.center.y);
      }
      shrew.overlapR = bee;
      duck.overlapR = bee;
      if (cod || bee === 0 || shrew.immovable && duck.immovable || shrew.customSeparateX || duck.customSeparateX)
      {
        if (bee !== 0 && (shrew.onOverlap || duck.onOverlap))
        {
          this.emit(prairie_dog.OVERLAP, shrew.gameObject, duck.gameObject, 
          shrew, 
          duck);
        }
        return bee !== 0;
      }
      eel = shrew.center.x - duck.center.x;
      lapwing = shrew.center.y - duck.center.y;
      guinea_pig = Math.sqrt(Math.pow(eel, 2) + Math.pow(lapwing, 2));
      ibis = (duck.center.x - shrew.center.x) / guinea_pig || 0;
      camel = (duck.center.y - shrew.center.y) / guinea_pig || 0;
      lyrebird = 2 * (shrew.velocity.x * ibis + shrew.velocity.y * camel - duck.velocity.x * ibis - duck.velocity.y * camel) / (shrew.mass + duck.mass);
      if (shrew.immovable || duck.immovable)
      {
        lyrebird = lyrebird * 2;
      }
      if (! shrew.immovable)
      {
        shrew.velocity.x = shrew.velocity.x - lyrebird / shrew.mass * ibis;
        shrew.velocity.y = shrew.velocity.y - lyrebird / shrew.mass * camel;
      }
      if (! duck.immovable)
      {
        duck.velocity.x = duck.velocity.x + lyrebird / duck.mass * ibis;
        duck.velocity.y = duck.velocity.y + lyrebird / duck.mass * camel;
      }
      if (! shrew.immovable && ! duck.immovable)
      {
        bee = bee / 2;
      }
      donkey = raccoon(shrew.center, duck.center);
      clam = (bee + woodcock.EPSILON) * Math.cos(donkey);
      grasshopper = (bee + woodcock.EPSILON) * Math.sin(donkey);
      if (! shrew.immovable)
      {
        shrew.x -= clam;
        shrew.y -= grasshopper;
        shrew.updateCenter();
      }
      if (! duck.immovable)
      {
        duck.x += clam;
        duck.y += grasshopper;
        duck.updateCenter();
      }
      shrew.velocity.x *= shrew.bounce.x;
      shrew.velocity.y *= shrew.bounce.y;
      duck.velocity.x *= duck.bounce.x;
      duck.velocity.y *= duck.bounce.y;
      if (shrew.onCollide || duck.onCollide)
      {
        this.emit(prairie_dog.COLLIDE, shrew.gameObject, duck.gameObject, 
        shrew, 
        duck);
      }
      return true;
    },
    intersects : function (gnu, mole) {
      if (gnu === mole)
      {
        return false;
      }
      if (! gnu.isCircle && ! mole.isCircle)
      {
        return ! (gnu.right <= mole.position.x || gnu.bottom <= mole.position.y || gnu.position.x >= mole.right || gnu.position.y >= mole.bottom);
      }
      else
        if (gnu.isCircle)
        {
          if (mole.isCircle)
          {
            return capybara(gnu.center.x, gnu.center.y, mole.center.x, mole.center.y) <= gnu.halfWidth + mole.halfWidth;
          }
          else
          {
            return this.circleBodyIntersects(gnu, mole);
          }
        }
        else
        {
          return this.circleBodyIntersects(mole, gnu);
        }
    },
    circleBodyIntersects : function (penguin, elephant) {
      var dove; // t
      var badger; // r
      var guanaco; // s
      var pig; // a
      
          dove = chinchilla(penguin.center.x, elephant.left, elephant.right);
      badger = chinchilla(penguin.center.y, elephant.top, elephant.bottom);
      guanaco = (penguin.center.x - dove) * (penguin.center.x - dove);
      pig = (penguin.center.y - badger) * (penguin.center.y - badger);
      return guanaco + pig <= penguin.halfWidth * penguin.halfWidth;
    },
    overlap : function (deer, gazelle, giraffe, rat, starling) {
      if (giraffe === undefined)
      {
        giraffe = null;
      }
      if (rat === undefined)
      {
        rat = null;
      }
      if (starling === undefined)
      {
        starling = giraffe;
      }
      return this.collideObjects(deer, gazelle, giraffe, rat, starling, true);
    },
    collide : function (emu, bear, kudu, fish, tapir) {
      if (kudu === undefined)
      {
        kudu = null;
      }
      if (fish === undefined)
      {
        fish = null;
      }
      if (tapir === undefined)
      {
        tapir = kudu;
      }
      return this.collideObjects(emu, bear, kudu, fish, tapir, false);
    },
    collideObjects : function (jellyfish, loris, coyote, stinkbug, toad, chimpanzee) {
      var louse; // l
      var turkey; // n
      var hyena; // o
      var sparrow; // h
      var hippopotamus; // c
      
          if (jellyfish.isParent && jellyfish.physicsType === undefined)
      {
        jellyfish = jellyfish.children.entries;
      }
      if (loris && loris.isParent && loris.physicsType === undefined)
      {
        loris = loris.children.entries;
      }
      hyena = Array.isArray(jellyfish);
      sparrow = Array.isArray(loris);
      this._total = 0;
      if (! hyena && ! sparrow)
      {
        this.collideHandler(jellyfish, loris, coyote, stinkbug, toad, chimpanzee);
      }
      else
        if (! hyena && sparrow)
        {
          for (louse = 0; louse < loris.length; louse++)
          {
            this.collideHandler(jellyfish, loris[louse], coyote, stinkbug, toad, chimpanzee);
          }
        }
        else
          if (hyena && ! sparrow)
          {
            if (! loris)
            {
              for (louse = 0; louse < jellyfish.length; louse++)
              {
                hippopotamus = jellyfish[louse];
                for (turkey = louse + 1; turkey < jellyfish.length; turkey++)
                {
                  if (louse === turkey)
                  {
                    continue;
                  }
                  this.collideHandler(hippopotamus, jellyfish[turkey], coyote, stinkbug, toad, 
                  chimpanzee);
                }
              }
            }
            else
            {
              for (louse = 0; louse < jellyfish.length; louse++)
              {
                this.collideHandler(jellyfish[louse], loris, coyote, stinkbug, toad, chimpanzee);
              }
            }
          }
          else
          {
            for (louse = 0; louse < jellyfish.length; louse++)
            {
              for (turkey = 0; turkey < loris.length; turkey++)
              {
                this.collideHandler(jellyfish[louse], loris[turkey], coyote, stinkbug, toad, 
                chimpanzee);
              }
            }
          }
      return this._total > 0;
    },
    collideHandler : function (cockroach, scorpion, squirrel, yak, gorilla, anteater) {
      if (scorpion === undefined && cockroach.isParent)
      {
        return this.collideGroupVsGroup(cockroach, cockroach, squirrel, yak, gorilla, anteater);
      }
      if (! cockroach || ! scorpion)
      {
        return false;
      }
      if (cockroach.body)
      {
        if (scorpion.body)
        {
          return this.collideSpriteVsSprite(cockroach, scorpion, squirrel, yak, gorilla, anteater);
        }
        else
          if (scorpion.isParent)
          {
            return this.collideSpriteVsGroup(cockroach, scorpion, squirrel, yak, gorilla, anteater);
          }
          else
            if (scorpion.isTilemap)
            {
              return this.collideSpriteVsTilemapLayer(cockroach, scorpion, squirrel, yak, gorilla, anteater);
            }
      }
      else
        if (cockroach.isParent)
        {
          if (scorpion.body)
          {
            return this.collideSpriteVsGroup(scorpion, cockroach, squirrel, yak, gorilla, anteater);
          }
          else
            if (scorpion.isParent)
            {
              return this.collideGroupVsGroup(cockroach, scorpion, squirrel, yak, gorilla, anteater);
            }
            else
              if (scorpion.isTilemap)
              {
                return this.collideGroupVsTilemapLayer(cockroach, scorpion, squirrel, yak, gorilla, anteater);
              }
        }
        else
          if (cockroach.isTilemap)
          {
            if (scorpion.body)
            {
              return this.collideSpriteVsTilemapLayer(scorpion, cockroach, squirrel, yak, gorilla, anteater);
            }
            else
              if (scorpion.isParent)
              {
                return this.collideGroupVsTilemapLayer(scorpion, cockroach, squirrel, yak, gorilla, anteater);
              }
          }
    },
    collideSpriteVsSprite : function (ant, spider, parrot, fox, elephant_seal, dotterel) {
      if (! ant.body || ! spider.body)
      {
        return false;
      }
      if (this.separate(ant.body, spider.body, fox, elephant_seal, dotterel))
      {
        if (parrot)
        {
          parrot.call(elephant_seal, ant, spider);
        }
        this._total++;
      }
      return true;
    },
    collideSpriteVsGroup : function (rhinoceros, falcon, pigeon, flamingo, jackal, fly) {
      var vulture; // l
      var lobster; // n
      var buffalo; // o
      var peafowl; // h
      var narwhal; // c
      var ferret; // u
      var ox; // f
      var polar_bear; // d
      
          vulture = rhinoceros.body;
      if (falcon.length === 0 || ! vulture || ! vulture.enable || vulture.checkCollision.none)
      {
        return;
      }
      if (this.useTree || falcon.physicsType === llama.STATIC_BODY)
      {
        narwhal = this.treeMinMax;
        narwhal.minX = vulture.left;
        narwhal.minY = vulture.top;
        narwhal.maxX = vulture.right;
        narwhal.maxY = vulture.bottom;
        ferret = falcon.physicsType === llama.DYNAMIC_BODY ? this.tree.search(narwhal) : this.staticTree.search(narwhal);
        buffalo = ferret.length;
        for (lobster = 0; lobster < buffalo; lobster++)
        {
          peafowl = ferret[lobster];
          if (vulture === peafowl || ! peafowl.enable || peafowl.checkCollision.none || ! falcon.contains(peafowl.gameObject))
          {
            continue;
          }
          if (this.separate(vulture, peafowl, flamingo, jackal, fly, true))
          {
            if (pigeon)
            {
              pigeon.call(jackal, vulture.gameObject, peafowl.gameObject);
            }
            this._total++;
          }
        }
      }
      else
      {
        ox = falcon.getChildren();
        polar_bear = falcon.children.entries.indexOf(rhinoceros);
        buffalo = ox.length;
        for (lobster = 0; lobster < buffalo; lobster++)
        {
          peafowl = ox[lobster].body;
          if (! peafowl || lobster === polar_bear || ! peafowl.enable)
          {
            continue;
          }
          if (this.separate(vulture, peafowl, flamingo, jackal, fly))
          {
            if (pigeon)
            {
              pigeon.call(jackal, vulture.gameObject, peafowl.gameObject);
            }
            this._total++;
          }
        }
      }
    },
    collideGroupVsTilemapLayer : function (crocodile, curlew, sardine, herring, red_panda, rabbit) {
      var zebra; // l
      var dolphin; // n
      var salamander; // o
      
          zebra = crocodile.getChildren();
      if (zebra.length === 0)
      {
        return false;
      }
      dolphin = false;
      {
        salamander = 0;
        for (; salamander < zebra.length; salamander++)
        {
          if (zebra[salamander].body)
          {
            if (this.collideSpriteVsTilemapLayer(zebra[salamander], curlew, sardine, herring, red_panda, 
            rabbit))
            {
              dolphin = true;
            }
          }
        }
      }
      return dolphin;
    },
    collideTiles : function (gull, alpaca, ostrich, manatee, red_deer) {
      if (! gull.body.enable || alpaca.length === 0)
      {
        return false;
      }
      else
      {
        return this.collideSpriteVsTilesHandler(gull, alpaca, ostrich, manatee, red_deer, false, false);
      }
    },
    overlapTiles : function (barracuda, hare, hedgehog, porcupine, seal) {
      if (! barracuda.body.enable || hare.length === 0)
      {
        return false;
      }
      else
      {
        return this.collideSpriteVsTilesHandler(barracuda, hare, hedgehog, porcupine, seal, true, false);
      }
    },
    collideSpriteVsTilemapLayer : function (lark, wren, partridge, heron, raccoon_1, hamster_1) {
      var chinchilla_1; // l
      var ibex_1; // n
      var boar_1; // o
      var llama_1; // h
      var capybara_1; // c
      var mink_1; // u
      var prairie_dog_1; // f
      var mantis_1; // d
      var dogfish_1; // v
      
          chinchilla_1 = lark.body;
      if (! chinchilla_1.enable || chinchilla_1.checkCollision.none)
      {
        return false;
      }
      ibex_1 = chinchilla_1.position.x;
      boar_1 = chinchilla_1.position.y;
      llama_1 = chinchilla_1.width;
      capybara_1 = chinchilla_1.height;
      mink_1 = wren.layer;
      if (mink_1.tileWidth > mink_1.baseTileWidth)
      {
        prairie_dog_1 = (mink_1.tileWidth - mink_1.baseTileWidth) * wren.scaleX;
        ibex_1 = ibex_1 - prairie_dog_1;
        llama_1 = llama_1 + prairie_dog_1;
      }
      if (mink_1.tileHeight > mink_1.baseTileHeight)
      {
        mantis_1 = (mink_1.tileHeight - mink_1.baseTileHeight) * wren.scaleY;
        capybara_1 = capybara_1 + mantis_1;
      }
      dogfish_1 = squid(ibex_1, boar_1, llama_1, capybara_1, null, wren.scene.cameras.main, 
      wren.layer);
      if (dogfish_1.length === 0)
      {
        return false;
      }
      else
      {
        return this.collideSpriteVsTilesHandler(lark, dogfish_1, partridge, heron, raccoon_1, hamster_1, 
        true);
      }
    },
    collideSpriteVsTilesHandler : function (snail_1, dunlin_1, termite_1, squid_1, rook_1, woodcock_1, 
    antelope_1) {
      var goose_1; // n
      var baboon_1; // o
      var bat_1; // h
      var bison_1; // c
      var tarsier_1; // u
      var cat_1; // f
      var weasel_1; // d
      
          goose_1 = snail_1.body;
      bat_1 = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
      };
      tarsier_1 = false;
      {
        cat_1 = 0;
        for (; cat_1 < dunlin_1.length; cat_1++)
        {
          baboon_1 = dunlin_1[cat_1];
          bison_1 = baboon_1.tilemapLayer;
          weasel_1 = bison_1.tileToWorldXY(baboon_1.x, baboon_1.y);
          bat_1.left = weasel_1.x;
          bat_1.top = weasel_1.y;
          if (baboon_1.baseHeight !== baboon_1.height)
          {
            bat_1.top -= (baboon_1.height - baboon_1.baseHeight) * bison_1.scaleY;
          }
          bat_1.right = bat_1.left + baboon_1.width * bison_1.scaleX;
          bat_1.bottom = bat_1.top + baboon_1.height * bison_1.scaleY;
          if (komodo_dragon(bat_1, goose_1) && (! squid_1 || squid_1.call(rook_1, snail_1, baboon_1)) && goose(baboon_1, snail_1) && (woodcock_1 || bison(cat_1, goose_1, baboon_1, bat_1, bison_1, this.TILE_BIAS, 
          antelope_1)))
          {
            this._total++;
            tarsier_1 = true;
            if (termite_1)
            {
              termite_1.call(rook_1, snail_1, baboon_1);
            }
            if (woodcock_1 && goose_1.onOverlap)
            {
              this.emit(prairie_dog.TILE_OVERLAP, snail_1, baboon_1, goose_1);
            }
            else
              if (goose_1.onCollide)
              {
                this.emit(prairie_dog.TILE_COLLIDE, snail_1, baboon_1, goose_1);
              }
          }
        }
      }
      return tarsier_1;
    },
    collideGroupVsGroup : function (beaver_1, komodo_dragon_1, armadillo_1, woodpecker_1, 
    quelea_1, 
    butterfly_1) {
      var oyster_1; // l
      var stingray_1; // n
      
          if (beaver_1.length === 0 || komodo_dragon_1.length === 0)
      {
        return;
      }
      oyster_1 = beaver_1.getChildren();
      {
        stingray_1 = 0;
        for (; stingray_1 < oyster_1.length; stingray_1++)
        {
          this.collideSpriteVsGroup(oyster_1[stingray_1], komodo_dragon_1, armadillo_1, woodpecker_1, 
          quelea_1, 
          butterfly_1);
        }
      }
    },
    wrap : function (dragonfly_1, finch_1) {
      if (dragonfly_1.body)
      {
        this.wrapObject(dragonfly_1, finch_1);
      }
      else
        if (dragonfly_1.getChildren)
        {
          this.wrapArray(dragonfly_1.getChildren(), finch_1);
        }
        else
          if (Array.isArray(dragonfly_1))
          {
            this.wrapArray(dragonfly_1, finch_1);
          }
          else
          {
            this.wrapObject(dragonfly_1, finch_1);
          }
    },
    wrapArray : function (meerkat_1, alligator_1) {
      var kookabura_1; // t
      
          {
        kookabura_1 = 0;
        for (; kookabura_1 < meerkat_1.length; kookabura_1++)
        {
          this.wrapObject(meerkat_1[kookabura_1], alligator_1);
        }
      }
    },
    wrapObject : function (human_1, reindeer_1) {
      if (reindeer_1 === undefined)
      {
        reindeer_1 = 0;
      }
      human_1.x = quelea(human_1.x, this.bounds.left - reindeer_1, this.bounds.right + reindeer_1);
      human_1.y = quelea(human_1.y, this.bounds.top - reindeer_1, this.bounds.bottom + reindeer_1);
    },
    shutdown : function () {
      this.tree.clear();
      this.staticTree.clear();
      this.bodies.clear();
      this.staticBodies.clear();
      this.colliders.destroy();
      this.removeAllListeners();
    },
    destroy : function () {
      this.shutdown();
      this.scene = null;
    }
  });
  module.exports = butterfly;
  