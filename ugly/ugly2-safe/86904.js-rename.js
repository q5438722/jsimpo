  var raccoon; // ALIGN_CONST
  var hamster; // Axes
  var chinchilla; // Bodies
  var ibex; // Body
  var boar; // BodyBounds
  var llama; // Bounds
  var capybara; // Class
  var mink; // Composite
  var prairie_dog; // Composites
  var mantis; // Constraint
  var dogfish; // Detector
  var snail; // DistanceBetween
  var dunlin; // Factory
  var termite; // GetFastValue
  var squid; // GetValue
  var rook; // Grid
  var woodcock; // MatterAttractors
  var antelope; // MatterCollisionEvents
  var goose; // MatterLib
  var baboon; // MatterWrap
  var bat; // Merge
  var bison; // Pair
  var tarsier; // Pairs
  var cat; // Plugin
  var weasel; // PluginCache
  var beaver; // Query
  var komodo_dragon; // Resolver
  var armadillo; // SAT
  var woodpecker; // SceneEvents
  var quelea; // Svg
  var butterfly; // Vector
  var oyster; // Vertices
  var stingray; // World
  var dragonfly; // MatterPhysics
  
  raccoon = require("../../display/align/const");
  hamster = require("./lib/geometry/Axes");
  chinchilla = require("./lib/factory/Bodies");
  ibex = require("./lib/body/Body");
  boar = require("./BodyBounds");
  llama = require("./lib/geometry/Bounds");
  capybara = require("../../utils/Class");
  mink = require("./lib/body/Composite");
  prairie_dog = require("./lib/factory/Composites");
  mantis = require("./lib/constraint/Constraint");
  dogfish = require("./lib/collision/Detector");
  snail = require("../../math/distance/DistanceBetween");
  dunlin = require("./Factory");
  termite = require("../../utils/object/GetFastValue");
  squid = require("../../utils/object/GetValue");
  rook = require("./lib/collision/Grid");
  woodcock = require("./lib/plugins/MatterAttractors");
  antelope = require("./lib/plugins/MatterCollisionEvents");
  goose = require("./lib/core/Matter");
  baboon = require("./lib/plugins/MatterWrap");
  bat = require("../../utils/object/Merge");
  bison = require("./lib/collision/Pair");
  tarsier = require("./lib/collision/Pairs");
  cat = require("./lib/core/Plugin");
  weasel = require("../../plugins/PluginCache");
  beaver = require("./lib/collision/Query");
  komodo_dragon = require("./lib/collision/Resolver");
  armadillo = require("./lib/collision/SAT");
  woodpecker = require("../../scene/events");
  quelea = require("./lib/geometry/Svg");
  butterfly = require("./lib/geometry/Vector");
  oyster = require("./lib/geometry/Vertices");
  stingray = require("./World");
  dragonfly = new capybara({
    initialize : function t(finch) {
      this.scene = finch;
      this.systems = finch.sys;
      this.config = this.getConfig();
      this.world;
      this.add;
      this.bodyBounds;
      this.body = ibex;
      this.composite = mink;
      this.detector = dogfish;
      this.grid = rook;
      this.pair = bison;
      this.pairs = tarsier;
      this.query = beaver;
      this.resolver = komodo_dragon;
      this.sat = armadillo;
      this.constraint = mantis;
      this.bodies = chinchilla;
      this.composites = prairie_dog;
      this.axes = hamster;
      this.bounds = llama;
      this.svg = quelea;
      this.vector = butterfly;
      this.vertices = oyster;
      this.verts = oyster;
      this._tempVec2 = butterfly.create();
      if (squid(this.config, "plugins.collisionevents", true))
      {
        this.enableCollisionEventsPlugin();
      }
      if (squid(this.config, "plugins.attractors", false))
      {
        this.enableAttractorPlugin();
      }
      if (squid(this.config, "plugins.wrap", false))
      {
        this.enableWrapPlugin();
      }
      komodo_dragon._restingThresh = squid(this.config, "restingThresh", 4);
      komodo_dragon._restingThreshTangent = squid(this.config, "restingThreshTangent", 6);
      komodo_dragon._positionDampen = squid(this.config, "positionDampen", .9);
      komodo_dragon._positionWarming = squid(this.config, "positionWarming", .8);
      komodo_dragon._frictionNormalMultiplier = squid(this.config, "frictionNormalMultiplier", 5);
      finch.sys.events.once(woodpecker.BOOT, this.boot, this);
      finch.sys.events.on(woodpecker.START, this.start, this);
    },
    boot : function () {
      this.world = new stingray(this.scene, this.config);
      this.add = new dunlin(this.world);
      this.bodyBounds = new boar;
      this.systems.events.once(woodpecker.DESTROY, this.destroy, this);
    },
    start : function () {
      var meerkat; // t
      
          if (! this.world)
      {
        this.world = new stingray(this.scene, this.config);
        this.add = new dunlin(this.world);
      }
      meerkat = this.systems.events;
      meerkat.on(woodpecker.UPDATE, this.world.update, this.world);
      meerkat.on(woodpecker.POST_UPDATE, this.world.postUpdate, this.world);
      meerkat.once(woodpecker.SHUTDOWN, this.shutdown, this);
    },
    getConfig : function () {
      var alligator; // t
      var kookabura; // e
      var human; // i
      
          alligator = this.systems.game.config.physics;
      kookabura = this.systems.settings.physics;
      human = bat(termite(kookabura, "matter", {
        
      }), termite(alligator, "matter", {
        
      }));
      return human;
    },
    enableAttractorPlugin : function () {
      cat.register(woodcock);
      cat.use(goose, woodcock);
      return this;
    },
    enableWrapPlugin : function () {
      cat.register(baboon);
      cat.use(goose, baboon);
      return this;
    },
    enableCollisionEventsPlugin : function () {
      cat.register(antelope);
      cat.use(goose, antelope);
      return this;
    },
    pause : function () {
      return this.world.pause();
    },
    resume : function () {
      return this.world.resume();
    },
    set60Hz : function () {
      this.world.getDelta = this.world.update60Hz;
      this.world.autoUpdate = true;
      return this;
    },
    set30Hz : function () {
      this.world.getDelta = this.world.update30Hz;
      this.world.autoUpdate = true;
      return this;
    },
    step : function (reindeer, elk) {
      this.world.step(reindeer, elk);
    },
    containsPoint : function (ape, dinosaur, kouprey) {
      var echidna; // r
      var owl; // s
      
          ape = this.getMatterBodies(ape);
      echidna = butterfly.create(dinosaur, kouprey);
      owl = beaver.point(ape, echidna);
      return owl.length > 0 ? true : false;
    },
    intersectPoint : function (gaur, locust, magpie) {
      var snake; // r
      var hummingbird; // s
      var sheep; // o
      
          magpie = this.getMatterBodies(magpie);
      snake = butterfly.create(gaur, locust);
      hummingbird = [];
      sheep = beaver.point(magpie, snake);
      sheep.forEach(function (goldfinch) {
        if (hummingbird.indexOf(goldfinch) === -1)
        {
          hummingbird.push(goldfinch);
        }
      });
      return hummingbird;
    },
    intersectRect : function (swan, oryx, turtle, cormorant, cattle, tiger) {
      var lion; // n
      var frog; // a
      var skunk; // l
      
          if (cattle === undefined)
      {
        cattle = false;
      }
      tiger = this.getMatterBodies(tiger);
      lion = {
        min : {
          x : swan,
          y : oryx
        },
        max : {
          x : swan + turtle,
          y : oryx + cormorant
        }
      };
      frog = [];
      skunk = beaver.region(tiger, lion, cattle);
      skunk.forEach(function (lemur) {
        if (frog.indexOf(lemur) === -1)
        {
          frog.push(lemur);
        }
      });
      return frog;
    },
    intersectRay : function (goat, wolf, gnat, quail, porpoise, chamois) {
      var otter; // n
      var sand_dollar; // a
      var jaguar; // l
      
          if (porpoise === undefined)
      {
        porpoise = 1;
      }
      chamois = this.getMatterBodies(chamois);
      otter = [];
      sand_dollar = beaver.ray(chamois, butterfly.create(goat, wolf), butterfly.create(gnat, quail), 
      porpoise);
      {
        jaguar = 0;
        for (; jaguar < sand_dollar.length; jaguar++)
        {
          otter.push(sand_dollar[jaguar].body);
        }
      }
      return otter;
    },
    intersectBody : function (dugong, water_buffalo) {
      var sea_urchin; // i
      var grouse; // r
      var sandpiper; // s
      var mule; // o
      
          water_buffalo = this.getMatterBodies(water_buffalo);
      sea_urchin = [];
      grouse = beaver.collides(dugong, water_buffalo);
      {
        sandpiper = 0;
        for (; sandpiper < grouse.length; sandpiper++)
        {
          mule = grouse[sandpiper];
          if (mule.bodyA === dugong)
          {
            sea_urchin.push(mule.bodyB);
          }
          else
          {
            sea_urchin.push(mule.bodyA);
          }
        }
      }
      return sea_urchin;
    },
    overlap : function (goldfish, caribou, raven, ram, salmon) {
      var cheetah; // o
      var viper; // n
      var pheasant; // a
      var pony; // l
      var hawk; // u
      var spoonbill; // c
      var swallow; // h
      
          if (raven === undefined)
      {
        raven = null;
      }
      if (ram === undefined)
      {
        ram = null;
      }
      if (salmon === undefined)
      {
        salmon = raven;
      }
      if (! Array.isArray(goldfish))
      {
        goldfish = [goldfish, ];
      }
      goldfish = this.getMatterBodies(goldfish);
      caribou = this.getMatterBodies(caribou);
      cheetah = false;
      {
        viper = 0;
        for (; viper < goldfish.length; viper++)
        {
          pheasant = goldfish[viper];
          pony = beaver.collides(pheasant, caribou);
          {
            hawk = 0;
            for (; hawk < pony.length; hawk++)
            {
              spoonbill = pony[hawk];
              swallow = spoonbill.bodyA.id === pheasant.id ? spoonbill.bodyB : spoonbill.bodyA;
              if (! ram || ram.call(salmon, pheasant, swallow, spoonbill))
              {
                cheetah = true;
                if (raven)
                {
                  raven.call(salmon, pheasant, swallow, spoonbill);
                }
                else
                  if (! ram)
                  {
                    return true;
                  }
              }
            }
          }
        }
      }
      return cheetah;
    },
    setCollisionCategory : function (octopus, newt) {
      octopus = this.getMatterBodies(octopus);
      octopus.forEach(function (caterpillar) {
        caterpillar.collisionFilter.category = newt;
      });
      return this;
    },
    setCollisionGroup : function (kingfisher, nightingale) {
      kingfisher = this.getMatterBodies(kingfisher);
      kingfisher.forEach(function (wombat) {
        wombat.collisionFilter.group = nightingale;
      });
      return this;
    },
    setCollidesWith : function (crane, chough) {
      var goshawk; // i
      var monkey; // r
      
          crane = this.getMatterBodies(crane);
      goshawk = 0;
      if (! Array.isArray(chough))
      {
        goshawk = chough;
      }
      else
      {
        monkey = 0;
        for (; monkey < chough.length; monkey++)
        {
          goshawk |= chough[monkey];
        }
      }
      crane.forEach(function (horse) {
        horse.collisionFilter.mask = goshawk;
      });
      return this;
    },
    getMatterBodies : function (okapi) {
      var worm; // e
      var hornet; // i
      var quetzal; // r
      
          if (! okapi)
      {
        return this.world.getAllBodies();
      }
      if (! Array.isArray(okapi))
      {
        okapi = [okapi, ];
      }
      worm = [];
      {
        hornet = 0;
        for (; hornet < okapi.length; hornet++)
        {
          quetzal = okapi[hornet].hasOwnProperty("body") ? okapi[hornet].body : okapi[hornet];
          worm.push(quetzal);
        }
      }
      return worm;
    },
    setVelocity : function (seahorse, chicken, mallard) {
      var aardvark; // r
      
          seahorse = this.getMatterBodies(seahorse);
      aardvark = this._tempVec2;
      aardvark.x = chicken;
      aardvark.y = mallard;
      seahorse.forEach(function (albatross) {
        ibex.setVelocity(albatross, aardvark);
      });
      return this;
    },
    setVelocityX : function (cobra, walrus) {
      var pelican; // i
      
          cobra = this.getMatterBodies(cobra);
      pelican = this._tempVec2;
      pelican.x = walrus;
      cobra.forEach(function (mosquito) {
        pelican.y = mosquito.velocity.y;
        ibex.setVelocity(mosquito, pelican);
      });
      return this;
    },
    setVelocityY : function (trout, whale) {
      var cassowary; // i
      
          trout = this.getMatterBodies(trout);
      cassowary = this._tempVec2;
      cassowary.y = whale;
      trout.forEach(function (guinea_fowl) {
        cassowary.x = guinea_fowl.velocity.x;
        ibex.setVelocity(guinea_fowl, cassowary);
      });
      return this;
    },
    setAngularVelocity : function (mouse, wolverine) {
      mouse = this.getMatterBodies(mouse);
      mouse.forEach(function (koala) {
        ibex.setAngularVelocity(koala, wolverine);
      });
      return this;
    },
    applyForce : function (giant_panda, mongoose) {
      var mandrill; // i
      
          giant_panda = this.getMatterBodies(giant_panda);
      mandrill = this._tempVec2;
      giant_panda.forEach(function (moose) {
        mandrill.x = moose.position.x;
        mandrill.y = moose.position.y;
        ibex.applyForce(moose, mandrill, mongoose);
      });
      return this;
    },
    applyForceFromPosition : function (sea_lion, leopard, gerbil, dog) {
      var vicuña; // s
      
          sea_lion = this.getMatterBodies(sea_lion);
      vicuña = this._tempVec2;
      sea_lion.forEach(function (kangaroo) {
        if (dog === undefined)
        {
          dog = kangaroo.angle;
        }
        vicuña.x = gerbil * Math.cos(dog);
        vicuña.y = gerbil * Math.sin(dog);
        ibex.applyForce(kangaroo, leopard, vicuña);
      });
      return this;
    },
    applyForceFromAngle : function (shark, wallaby, crow) {
      var eagle; // r
      
          shark = this.getMatterBodies(shark);
      eagle = this._tempVec2;
      shark.forEach(function (rail) {
        if (crow === undefined)
        {
          crow = rail.angle;
        }
        eagle.x = wallaby * Math.cos(crow);
        eagle.y = wallaby * Math.sin(crow);
        ibex.applyForce(rail, {
          x : rail.position.x,
          y : rail.position.y
        }, 
        eagle);
      });
      return this;
    },
    getConstraintLength : function (marten) {
      var jay; // e
      var eland; // i
      var panther; // r
      var opossum; // s
      
          jay = marten.pointA.x;
      eland = marten.pointA.y;
      panther = marten.pointB.x;
      opossum = marten.pointB.y;
      if (marten.bodyA)
      {
        jay = jay + marten.bodyA.position.x;
        eland = eland + marten.bodyA.position.y;
      }
      if (marten.bodyB)
      {
        panther = panther + marten.bodyB.position.x;
        opossum = opossum + marten.bodyB.position.y;
      }
      return snail(jay, eland, panther, opossum);
    },
    alignBody : function (shrew, duck, cod, crab) {
      var bee; // s
      
          shrew = shrew.hasOwnProperty("body") ? shrew.body : shrew;
      switch (crab) {
        case raccoon.TOP_LEFT:
          

        case raccoon.LEFT_TOP:
          bee = this.bodyBounds.getTopLeft(shrew, duck, cod);
          break;

        case raccoon.TOP_CENTER:
          bee = this.bodyBounds.getTopCenter(shrew, duck, cod);
          break;

        case raccoon.TOP_RIGHT:
          

        case raccoon.RIGHT_TOP:
          bee = this.bodyBounds.getTopRight(shrew, duck, cod);
          break;

        case raccoon.LEFT_CENTER:
          bee = this.bodyBounds.getLeftCenter(shrew, duck, cod);
          break;

        case raccoon.CENTER:
          bee = this.bodyBounds.getCenter(shrew, duck, cod);
          break;

        case raccoon.RIGHT_CENTER:
          bee = this.bodyBounds.getRightCenter(shrew, duck, cod);
          break;

        case raccoon.LEFT_BOTTOM:
          

        case raccoon.BOTTOM_LEFT:
          bee = this.bodyBounds.getBottomLeft(shrew, duck, cod);
          break;

        case raccoon.BOTTOM_CENTER:
          bee = this.bodyBounds.getBottomCenter(shrew, duck, cod);
          break;

        case raccoon.BOTTOM_RIGHT:
          

        case raccoon.RIGHT_BOTTOM:
          bee = this.bodyBounds.getBottomRight(shrew, duck, cod);
          break;

        
      }
      if (bee)
      {
        ibex.setPosition(shrew, bee);
      }
      return this;
    },
    shutdown : function () {
      var wasp; // t
      
          wasp = this.systems.events;
      if (this.world)
      {
        wasp.off(woodpecker.UPDATE, this.world.update, this.world);
        wasp.off(woodpecker.POST_UPDATE, this.world.postUpdate, this.world);
      }
      wasp.off(woodpecker.SHUTDOWN, this.shutdown, this);
      if (this.add)
      {
        this.add.destroy();
      }
      if (this.world)
      {
        this.world.destroy();
      }
      this.add = null;
      this.world = null;
    },
    destroy : function () {
      this.shutdown();
      this.scene.sys.events.off(woodpecker.START, this.start, this);
      this.scene = null;
      this.systems = null;
    }
  });
  weasel.register("MatterPhysics", dragonfly, "matterPhysics");
  module.exports = dragonfly;
  