  var raccoon; // Class
  var hamster; // Clamp
  var chinchilla; // Components
  var ibex; // GameObject
  var boar; // GetBitmapTextSize
  var llama; // ParseFromAtlas
  var capybara; // ParseXMLBitmapFont
  var mink; // Rectangle
  var prairie_dog; // Render
  var mantis; // BitmapText
  
  raccoon = require("../../../utils/Class");
  hamster = require("../../../math/Clamp");
  chinchilla = require("../../components");
  ibex = require("../../GameObject");
  boar = require("../GetBitmapTextSize");
  llama = require("../ParseFromAtlas");
  capybara = require("../ParseXMLBitmapFont");
  mink = require("../../../geom/rectangle/Rectangle");
  prairie_dog = require("./BitmapTextRender");
  mantis = new raccoon({
    Extends : ibex,
    Mixins : [chinchilla.Alpha, chinchilla.BlendMode, chinchilla.Depth, chinchilla.Mask, chinchilla.Origin, chinchilla.Pipeline, chinchilla.ScrollFactor, chinchilla.Texture, chinchilla.Tint, chinchilla.Transform, chinchilla.Visible, prairie_dog, ],
    initialize : function t(dogfish, snail, dunlin, termite, squid, rook, woodcock) {
      var antelope; // h
      
          if (squid === undefined)
      {
        squid = "";
      }
      if (woodcock === undefined)
      {
        woodcock = 0;
      }
      ibex.call(this, dogfish, "BitmapText");
      this.font = termite;
      antelope = this.scene.sys.cache.bitmapFont.get(termite);
      if (! antelope)
      {
        console.warn("Invalid BitmapText key: " + termite);
      }
      this.fontData = antelope.data;
      this._text = "";
      this._fontSize = rook || this.fontData.size;
      this._letterSpacing = 0;
      this._align = woodcock;
      this._bounds = boar();
      this._dirty = true;
      this._maxWidth = 0;
      this.wordWrapCharCode = 32;
      this.charColors = [];
      this.dropShadowX = 0;
      this.dropShadowY = 0;
      this.dropShadowColor = 0;
      this.dropShadowAlpha = .5;
      this.fromAtlas = antelope.fromAtlas;
      this.setTexture(antelope.texture, antelope.frame);
      this.setPosition(snail, dunlin);
      this.setOrigin(0, 0);
      this.initPipeline();
      this.setText(squid);
    },
    setLeftAlign : function () {
      this._align = mantis.ALIGN_LEFT;
      this._dirty = true;
      return this;
    },
    setCenterAlign : function () {
      this._align = mantis.ALIGN_CENTER;
      this._dirty = true;
      return this;
    },
    setRightAlign : function () {
      this._align = mantis.ALIGN_RIGHT;
      this._dirty = true;
      return this;
    },
    setFontSize : function (goose) {
      this._fontSize = goose;
      this._dirty = true;
      return this;
    },
    setLetterSpacing : function (baboon) {
      if (baboon === undefined)
      {
        baboon = 0;
      }
      this._letterSpacing = baboon;
      this._dirty = true;
      return this;
    },
    setText : function (bat) {
      if (! bat && bat !== 0)
      {
        bat = "";
      }
      if (Array.isArray(bat))
      {
        bat = bat.join("\n");
      }
      if (bat !== this.text)
      {
        this._text = bat.toString();
        this._dirty = true;
        this.updateDisplayOrigin();
      }
      return this;
    },
    setDropShadow : function (bison, tarsier, cat, weasel) {
      if (bison === undefined)
      {
        bison = 0;
      }
      if (tarsier === undefined)
      {
        tarsier = 0;
      }
      if (cat === undefined)
      {
        cat = 0;
      }
      if (weasel === undefined)
      {
        weasel = .5;
      }
      this.dropShadowX = bison;
      this.dropShadowY = tarsier;
      this.dropShadowColor = cat;
      this.dropShadowAlpha = weasel;
      return this;
    },
    setCharacterTint : function (beaver, komodo_dragon, armadillo, woodpecker, quelea, 
    butterfly, 
    oyster) {
      var stingray; // o
      var dragonfly; // h
      var finch; // u
      var meerkat; // f
      var alligator; // d
      var kookabura; // l
      
          if (beaver === undefined)
      {
        beaver = 0;
      }
      if (komodo_dragon === undefined)
      {
        komodo_dragon = 1;
      }
      if (armadillo === undefined)
      {
        armadillo = false;
      }
      if (woodpecker === undefined)
      {
        woodpecker = -1;
      }
      if (quelea === undefined)
      {
        quelea = woodpecker;
        butterfly = woodpecker;
        oyster = woodpecker;
      }
      stingray = this.text.length;
      if (komodo_dragon === -1)
      {
        komodo_dragon = stingray;
      }
      if (beaver < 0)
      {
        beaver = stingray + beaver;
      }
      beaver = hamster(beaver, 0, stingray - 1);
      dragonfly = hamster(beaver + komodo_dragon, beaver, stingray);
      finch = this.charColors;
      {
        meerkat = beaver;
        for (; meerkat < dragonfly; meerkat++)
        {
          alligator = finch[meerkat];
          if (woodpecker === -1)
          {
            finch[meerkat] = null;
          }
          else
          {
            kookabura = armadillo ? 1 : 0;
            if (alligator)
            {
              alligator.tintEffect = kookabura;
              alligator.tintTL = woodpecker;
              alligator.tintTR = quelea;
              alligator.tintBL = butterfly;
              alligator.tintBR = oyster;
            }
            else
            {
              finch[meerkat] = {
                tintEffect : kookabura,
                tintTL : woodpecker,
                tintTR : quelea,
                tintBL : butterfly,
                tintBR : oyster
              };
            }
          }
        }
      }
      return this;
    },
    setWordTint : function (human, reindeer, elk, ape, dinosaur, kouprey, echidna) {
      var owl; // o
      var gaur; // h
      var locust; // u
      var magpie; // f
      var snake; // d
      var hummingbird; // l
      
          if (reindeer === undefined)
      {
        reindeer = 1;
      }
      owl = this.getTextBounds();
      gaur = owl.words;
      locust = typeof human === "number";
      magpie = 0;
      {
        snake = 0;
        for (; snake < gaur.length; snake++)
        {
          hummingbird = gaur[snake];
          if (locust && snake === human || ! locust && hummingbird.word === human)
          {
            this.setCharacterTint(hummingbird.i, hummingbird.word.length, elk, ape, dinosaur, 
            kouprey, 
            echidna);
            magpie++;
            if (magpie === reindeer)
            {
              return this;
            }
          }
        }
      }
      return this;
    },
    getTextBounds : function (sheep) {
      var goldfinch; // i
      
          goldfinch = this._bounds;
      if (this._dirty || sheep || this.scaleX !== goldfinch.scaleX || this.scaleY !== goldfinch.scaleY)
      {
        boar(this, sheep, true, goldfinch);
        this._dirty = false;
      }
      return goldfinch;
    },
    getCharacterAt : function (swan, oryx, turtle) {
      var cormorant; // n
      var cattle; // r
      var tiger; // s
      var lion; // a
      var frog; // o
      var skunk; // h
      
          cormorant = this.getLocalPoint(swan, oryx, null, turtle);
      cattle = this.getTextBounds();
      tiger = cattle.characters;
      lion = new mink;
      {
        frog = 0;
        for (; frog < tiger.length; frog++)
        {
          skunk = tiger[frog];
          lion.setTo(skunk.x, skunk.t, skunk.r - skunk.x, skunk.b);
          if (lion.contains(cormorant.x, cormorant.y))
          {
            return skunk;
          }
        }
      }
      return null;
    },
    updateDisplayOrigin : function () {
      this._dirty = true;
      this.getTextBounds(false);
      return this;
    },
    setFont : function (lemur, goat, wolf) {
      var gnat; // n
      
          if (goat === undefined)
      {
        goat = this._fontSize;
      }
      if (wolf === undefined)
      {
        wolf = this._align;
      }
      if (lemur !== this.font)
      {
        gnat = this.scene.sys.cache.bitmapFont.get(lemur);
        if (gnat)
        {
          this.font = lemur;
          this.fontData = gnat.data;
          this._fontSize = goat;
          this._align = wolf;
          this.fromAtlas = gnat.fromAtlas === true;
          this.setTexture(gnat.texture, gnat.frame);
          boar(this, false, true, this._bounds);
        }
      }
      return this;
    },
    setMaxWidth : function (quail, porpoise) {
      this._maxWidth = quail;
      this._dirty = true;
      if (porpoise !== undefined)
      {
        this.wordWrapCharCode = porpoise;
      }
      return this;
    },
    align : {
      set : function (chamois) {
        this._align = chamois;
        this._dirty = true;
      },
      get : function () {
        return this._align;
      }
    },
    text : {
      set : function (otter) {
        this.setText(otter);
      },
      get : function () {
        return this._text;
      }
    },
    fontSize : {
      set : function (sand_dollar) {
        this._fontSize = sand_dollar;
        this._dirty = true;
      },
      get : function () {
        return this._fontSize;
      }
    },
    letterSpacing : {
      set : function (jaguar) {
        this._letterSpacing = jaguar;
        this._dirty = true;
      },
      get : function () {
        return this._letterSpacing;
      }
    },
    maxWidth : {
      set : function (dugong) {
        this._maxWidth = dugong;
        this._dirty = true;
      },
      get : function () {
        return this._maxWidth;
      }
    },
    width : {
      get : function () {
        this.getTextBounds(false);
        return this._bounds.global.width;
      }
    },
    height : {
      get : function () {
        this.getTextBounds(false);
        return this._bounds.global.height;
      }
    },
    toJSON : function () {
      var water_buffalo; // t
      var sea_urchin; // i
      
          water_buffalo = chinchilla.ToJSON(this);
      sea_urchin = {
        font : this.font,
        text : this.text,
        fontSize : this.fontSize,
        letterSpacing : this.letterSpacing,
        align : this.align
      };
      water_buffalo.data = sea_urchin;
      return water_buffalo;
    },
    preDestroy : function () {
      this.charColors.length = 0;
      this._bounds = null;
      this.fontData = null;
    }
  });
  mantis.ALIGN_LEFT = 0;
  mantis.ALIGN_CENTER = 1;
  mantis.ALIGN_RIGHT = 2;
  mantis.ParseFromAtlas = llama;
  mantis.ParseXMLBitmapFont = capybara;
  module.exports = mantis;
  