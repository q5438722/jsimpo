  var raccoon; // ArrayUtils
  var hamster; // BlendModes
  var chinchilla; // Class
  var ibex; // Components
  var boar; // Events
  var llama; // GameObject
  var capybara; // Rectangle
  var mink; // Render
  var prairie_dog; // Union
  var mantis; // Vector2
  var dogfish; // Container
  
  raccoon = require("../../utils/array");
  hamster = require("../../renderer/BlendModes");
  chinchilla = require("../../utils/Class");
  ibex = require("../components");
  boar = require("../events");
  llama = require("../GameObject");
  capybara = require("../../geom/rectangle/Rectangle");
  mink = require("./ContainerRender");
  prairie_dog = require("../../geom/rectangle/Union");
  mantis = require("../../math/Vector2");
  dogfish = new chinchilla({
    Extends : llama,
    Mixins : [ibex.AlphaSingle, ibex.BlendMode, ibex.ComputedSize, ibex.Depth, ibex.Mask, ibex.Pipeline, ibex.Transform, ibex.Visible, mink, ],
    initialize : function t(snail, dunlin, termite, squid) {
      llama.call(this, snail, "Container");
      this.list = [];
      this.exclusive = true;
      this.maxSize = -1;
      this.position = 0;
      this.localTransform = new ibex.TransformMatrix;
      this.tempTransformMatrix = new ibex.TransformMatrix;
      this._sortKey = "";
      this._sysEvents = snail.sys.events;
      this.scrollFactorX = 1;
      this.scrollFactorY = 1;
      this.initPipeline();
      this.setPosition(dunlin, termite);
      this.clearAlpha();
      this.setBlendMode(hamster.SKIP_CHECK);
      if (squid)
      {
        this.add(squid);
      }
    },
    originX : {
      get : function () {
        return .5;
      }
    },
    originY : {
      get : function () {
        return .5;
      }
    },
    displayOriginX : {
      get : function () {
        return this.width * .5;
      }
    },
    displayOriginY : {
      get : function () {
        return this.height * .5;
      }
    },
    setExclusive : function (rook) {
      if (rook === undefined)
      {
        rook = true;
      }
      this.exclusive = rook;
      return this;
    },
    getBounds : function (woodcock) {
      var antelope; // i
      var goose; // e
      var baboon; // r
      var bat; // n
      var bison; // s
      var tarsier; // o
      var cat; // l
      
          if (woodcock === undefined)
      {
        woodcock = new capybara;
      }
      woodcock.setTo(this.x, this.y, 0, 0);
      if (this.parentContainer)
      {
        antelope = this.parentContainer.getBoundsTransformMatrix();
        goose = antelope.transformPoint(this.x, this.y);
        woodcock.setTo(goose.x, goose.y, 0, 0);
      }
      if (this.list.length > 0)
      {
        baboon = this.list;
        bat = new capybara;
        woodcock.setEmpty();
        {
          tarsier = 0;
          for (; tarsier < baboon.length; tarsier++)
          {
            cat = baboon[tarsier];
            if (cat.getBounds)
            {
              cat.getBounds(bat);
              if (! bison)
              {
                woodcock.setTo(bat.x, bat.y, bat.width, bat.height);
              }
              else
              {
                prairie_dog(bat, woodcock, woodcock);
              }
            }
          }
        }
      }
      return woodcock;
    },
    addHandler : function (weasel) {
      weasel.once(boar.DESTROY, this.remove, this);
      if (this.exclusive)
      {
        if (weasel.parentContainer)
        {
          weasel.parentContainer.remove(weasel);
        }
        weasel.removeFromDisplayList();
        weasel.parentContainer = this;
      }
    },
    removeHandler : function (beaver) {
      beaver.off(boar.DESTROY, this.remove);
      if (this.exclusive)
      {
        beaver.parentContainer = null;
        beaver.addToDisplayList();
      }
    },
    pointToContainer : function (komodo_dragon, armadillo) {
      var woodpecker; // e
      
          if (armadillo === undefined)
      {
        armadillo = new mantis;
      }
      if (this.parentContainer)
      {
        this.parentContainer.pointToContainer(komodo_dragon, armadillo);
      }
      else
      {
        armadillo = new mantis(komodo_dragon.x, komodo_dragon.y);
      }
      woodpecker = this.tempTransformMatrix;
      woodpecker.applyITRS(this.x, this.y, this.rotation, this.scaleX, this.scaleY);
      woodpecker.invert();
      woodpecker.transformPoint(komodo_dragon.x, komodo_dragon.y, armadillo);
      return armadillo;
    },
    getBoundsTransformMatrix : function () {
      return this.getWorldTransformMatrix(this.tempTransformMatrix, this.localTransform);
    },
    add : function (quelea) {
      raccoon.Add(this.list, quelea, this.maxSize, this.addHandler, this);
      return this;
    },
    addAt : function (butterfly, oyster) {
      raccoon.AddAt(this.list, butterfly, oyster, this.maxSize, this.addHandler, 
      this);
      return this;
    },
    getAt : function (stingray) {
      return this.list[stingray];
    },
    getIndex : function (dragonfly) {
      return this.list.indexOf(dragonfly);
    },
    sort : function (finch, meerkat) {
      if (! finch)
      {
        return this;
      }
      if (meerkat === undefined)
      {
        meerkat = function (alligator, kookabura) {
          return alligator[finch] - kookabura[finch];
        };
      }
      raccoon.StableSort(this.list, meerkat);
      return this;
    },
    getByName : function (human) {
      return raccoon.GetFirst(this.list, "name", human);
    },
    getRandom : function (reindeer, elk) {
      return raccoon.GetRandom(this.list, reindeer, elk);
    },
    getFirst : function (ape, dinosaur, kouprey, echidna) {
      return raccoon.GetFirst(this.list, ape, dinosaur, kouprey, echidna);
    },
    getAll : function (owl, gaur, locust, magpie) {
      return raccoon.GetAll(this.list, owl, gaur, locust, magpie);
    },
    count : function (snake, hummingbird, sheep, goldfinch) {
      return raccoon.CountAllMatching(this.list, snake, hummingbird, sheep, goldfinch);
    },
    swap : function (swan, oryx) {
      raccoon.Swap(this.list, swan, oryx);
      return this;
    },
    moveTo : function (turtle, cormorant) {
      raccoon.MoveTo(this.list, turtle, cormorant);
      return this;
    },
    moveAbove : function (cattle, tiger) {
      raccoon.MoveAbove(this.list, cattle, tiger);
      return this;
    },
    moveBelow : function (lion, frog) {
      raccoon.MoveBelow(this.list, lion, frog);
      return this;
    },
    remove : function (skunk, lemur) {
      var goat; // e
      var wolf; // r
      
          goat = raccoon.Remove(this.list, skunk, this.removeHandler, this);
      if (lemur && goat)
      {
        if (! Array.isArray(goat))
        {
          goat = [goat, ];
        }
        {
          wolf = 0;
          for (; wolf < goat.length; wolf++)
          {
            goat[wolf].destroy();
          }
        }
      }
      return this;
    },
    removeAt : function (gnat, quail) {
      var porpoise; // e
      
          porpoise = raccoon.RemoveAt(this.list, gnat, this.removeHandler, this);
      if (quail && porpoise)
      {
        porpoise.destroy();
      }
      return this;
    },
    removeBetween : function (chamois, otter, sand_dollar) {
      var jaguar; // r
      var dugong; // n
      
          jaguar = raccoon.RemoveBetween(this.list, chamois, otter, this.removeHandler, this);
      if (sand_dollar)
      {
        dugong = 0;
        for (; dugong < jaguar.length; dugong++)
        {
          jaguar[dugong].destroy();
        }
      }
      return this;
    },
    removeAll : function (water_buffalo) {
      var sea_urchin; // i
      var grouse; // e
      
          sea_urchin = raccoon.RemoveBetween(this.list, 0, this.list.length, this.removeHandler, this);
      if (water_buffalo)
      {
        grouse = 0;
        for (; grouse < sea_urchin.length; grouse++)
        {
          sea_urchin[grouse].destroy();
        }
      }
      return this;
    },
    bringToTop : function (sandpiper) {
      raccoon.BringToTop(this.list, sandpiper);
      return this;
    },
    sendToBack : function (mule) {
      raccoon.SendToBack(this.list, mule);
      return this;
    },
    moveUp : function (goldfish) {
      raccoon.MoveUp(this.list, goldfish);
      return this;
    },
    moveDown : function (caribou) {
      raccoon.MoveDown(this.list, caribou);
      return this;
    },
    reverse : function () {
      this.list.reverse();
      return this;
    },
    shuffle : function () {
      raccoon.Shuffle(this.list);
      return this;
    },
    replace : function (raven, ram, salmon) {
      var cheetah; // r
      
          cheetah = raccoon.Replace(this.list, raven, ram);
      if (cheetah)
      {
        this.addHandler(ram);
        this.removeHandler(raven);
        if (salmon)
        {
          raven.destroy();
        }
      }
      return this;
    },
    exists : function (viper) {
      return this.list.indexOf(viper) > -1;
    },
    setAll : function (pheasant, pony, hawk, spoonbill) {
      raccoon.SetAll(this.list, pheasant, pony, hawk, spoonbill);
      return this;
    },
    each : function (swallow, octopus) {
      var newt; // e
      var caterpillar; // r
      var kingfisher; // n
      var nightingale; // s
      
          newt = [null, ];
      kingfisher = this.list.slice();
      nightingale = kingfisher.length;
      for (caterpillar = 2; caterpillar < arguments.length; caterpillar++)
      {
        newt.push(arguments[caterpillar]);
      }
      for (caterpillar = 0; caterpillar < nightingale; caterpillar++)
      {
        newt[0] = kingfisher[caterpillar];
        swallow.apply(octopus, newt);
      }
      return this;
    },
    iterate : function (wombat, crane) {
      var chough; // e
      var goshawk; // r
      
          chough = [null, ];
      for (goshawk = 2; goshawk < arguments.length; goshawk++)
      {
        chough.push(arguments[goshawk]);
      }
      for (goshawk = 0; goshawk < this.list.length; goshawk++)
      {
        chough[0] = this.list[goshawk];
        wombat.apply(crane, chough);
      }
      return this;
    },
    setScrollFactor : function (monkey, horse, okapi) {
      if (horse === undefined)
      {
        horse = monkey;
      }
      if (okapi === undefined)
      {
        okapi = false;
      }
      this.scrollFactorX = monkey;
      this.scrollFactorY = horse;
      if (okapi)
      {
        raccoon.SetAll(this.list, "scrollFactorX", monkey);
        raccoon.SetAll(this.list, "scrollFactorY", horse);
      }
      return this;
    },
    length : {
      get : function () {
        return this.list.length;
      }
    },
    first : {
      get : function () {
        this.position = 0;
        if (this.list.length > 0)
        {
          return this.list[0];
        }
        else
        {
          return null;
        }
      }
    },
    last : {
      get : function () {
        if (this.list.length > 0)
        {
          this.position = this.list.length - 1;
          return this.list[this.position];
        }
        else
        {
          return null;
        }
      }
    },
    next : {
      get : function () {
        if (this.position < this.list.length)
        {
          this.position++;
          return this.list[this.position];
        }
        else
        {
          return null;
        }
      }
    },
    previous : {
      get : function () {
        if (this.position > 0)
        {
          this.position--;
          return this.list[this.position];
        }
        else
        {
          return null;
        }
      }
    },
    preDestroy : function () {
      this.removeAll(! ! this.exclusive);
      this.localTransform.destroy();
      this.tempTransformMatrix.destroy();
      this.list = [];
    }
  });
  module.exports = dogfish;
  