  var raccoon; // ArcadeImage
  var hamster; // ArcadeSprite
  var chinchilla; // Class
  var ibex; // CONST
  var boar; // PhysicsGroup
  var llama; // StaticPhysicsGroup
  var capybara; // Factory
  
  raccoon = require("./ArcadeImage");
  hamster = require("./ArcadeSprite");
  chinchilla = require("../../utils/Class");
  ibex = require("./const");
  boar = require("./PhysicsGroup");
  llama = require("./StaticPhysicsGroup");
  capybara = new chinchilla({
    initialize : function s(mink) {
      this.world = mink;
      this.scene = mink.scene;
      this.sys = mink.scene.sys;
    },
    collider : function (prairie_dog, mantis, dogfish, snail, dunlin) {
      return this.world.addCollider(prairie_dog, mantis, dogfish, snail, dunlin);
    },
    overlap : function (termite, squid, rook, woodcock, antelope) {
      return this.world.addOverlap(termite, squid, rook, woodcock, antelope);
    },
    existing : function (goose, baboon) {
      var bat; // t
      
          bat = baboon ? ibex.STATIC_BODY : ibex.DYNAMIC_BODY;
      this.world.enableBody(goose, bat);
      return goose;
    },
    staticImage : function (bison, tarsier, cat, weasel) {
      var beaver; // r
      
          beaver = new raccoon(this.scene, bison, tarsier, cat, weasel);
      this.sys.displayList.add(beaver);
      this.world.enableBody(beaver, ibex.STATIC_BODY);
      return beaver;
    },
    image : function (komodo_dragon, armadillo, woodpecker, quelea) {
      var butterfly; // r
      
          butterfly = new raccoon(this.scene, komodo_dragon, armadillo, woodpecker, quelea);
      this.sys.displayList.add(butterfly);
      this.world.enableBody(butterfly, ibex.DYNAMIC_BODY);
      return butterfly;
    },
    staticSprite : function (oyster, stingray, dragonfly, finch) {
      var meerkat; // r
      
          meerkat = new hamster(this.scene, oyster, stingray, dragonfly, finch);
      this.sys.displayList.add(meerkat);
      this.sys.updateList.add(meerkat);
      this.world.enableBody(meerkat, ibex.STATIC_BODY);
      return meerkat;
    },
    sprite : function (alligator, kookabura, human, reindeer) {
      var elk; // r
      
          elk = new hamster(this.scene, alligator, kookabura, human, reindeer);
      this.sys.displayList.add(elk);
      this.sys.updateList.add(elk);
      this.world.enableBody(elk, ibex.DYNAMIC_BODY);
      return elk;
    },
    staticGroup : function (ape, dinosaur) {
      return this.sys.updateList.add(new llama(this.world, this.world.scene, ape, dinosaur));
    },
    group : function (kouprey, echidna) {
      return this.sys.updateList.add(new boar(this.world, this.world.scene, kouprey, echidna));
    },
    destroy : function () {
      this.world = null;
      this.scene = null;
      this.sys = null;
    }
  });
  module.exports = capybara;
  