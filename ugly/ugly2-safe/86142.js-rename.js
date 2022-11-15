  var raccoon; // BlitterRender
  var hamster; // Bob
  var chinchilla; // Class
  var ibex; // Components
  var boar; // Frame
  var llama; // GameObject
  var capybara; // List
  var mink; // Blitter
  
  raccoon = require("./BlitterRender");
  hamster = require("./Bob");
  chinchilla = require("../../utils/Class");
  ibex = require("../components");
  boar = require("../../textures/Frame");
  llama = require("../GameObject");
  capybara = require("../../structs/List");
  mink = new chinchilla({
    Extends : llama,
    Mixins : [ibex.Alpha, ibex.BlendMode, ibex.Depth, ibex.Mask, ibex.Pipeline, ibex.ScrollFactor, ibex.Size, ibex.Texture, ibex.Transform, ibex.Visible, raccoon, ],
    initialize : function e(prairie_dog, mantis, dogfish, snail, dunlin) {
      llama.call(this, prairie_dog, "Blitter");
      this.setTexture(snail, dunlin);
      this.setPosition(mantis, dogfish);
      this.initPipeline();
      this.children = new capybara;
      this.renderList = [];
      this.dirty = false;
    },
    create : function (termite, squid, rook, woodcock, antelope) {
      var goose; // s
      
          if (woodcock === undefined)
      {
        woodcock = true;
      }
      if (antelope === undefined)
      {
        antelope = this.children.length;
      }
      if (rook === undefined)
      {
        rook = this.frame;
      }
      else
        if (! (rook instanceof boar))
        {
          rook = this.texture.get(rook);
        }
      goose = new hamster(this, termite, squid, rook, woodcock);
      this.children.addAt(goose, antelope, false);
      this.dirty = true;
      return goose;
    },
    createFromCallback : function (baboon, bat, bison, tarsier) {
      var cat; // n
      var weasel; // s
      var beaver; // a
      
          cat = this.createMultiple(bat, bison, tarsier);
      {
        weasel = 0;
        for (; weasel < cat.length; weasel++)
        {
          beaver = cat[weasel];
          baboon.call(this, beaver, weasel);
        }
      }
      return cat;
    },
    createMultiple : function (komodo_dragon, armadillo, woodpecker) {
      var quelea; // n
      var butterfly; // s
      
          if (armadillo === undefined)
      {
        armadillo = this.frame.name;
      }
      if (woodpecker === undefined)
      {
        woodpecker = true;
      }
      if (! Array.isArray(armadillo))
      {
        armadillo = [armadillo, ];
      }
      quelea = [];
      butterfly = this;
      armadillo.forEach(function (oyster) {
        var stingray; // t
        
              {
          stingray = 0;
          for (; stingray < komodo_dragon; stingray++)
          {
            quelea.push(butterfly.create(0, 0, oyster, woodpecker));
          }
        }
      });
      return quelea;
    },
    childCanRender : function (dragonfly) {
      return dragonfly.visible && dragonfly.alpha > 0;
    },
    getRenderList : function () {
      if (this.dirty)
      {
        this.renderList = this.children.list.filter(this.childCanRender, this);
        this.dirty = false;
      }
      return this.renderList;
    },
    clear : function () {
      this.children.removeAll();
      this.dirty = true;
    },
    preDestroy : function () {
      this.children.destroy();
      this.renderList = [];
    }
  });
  module.exports = mink;
  