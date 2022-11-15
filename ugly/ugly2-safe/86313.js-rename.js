  var raccoon; // AddToDOM
  var hamster; // CanvasPool
  var chinchilla; // Class
  var ibex; // Components
  var boar; // GameEvents
  var llama; // GameObject
  var capybara; // GetTextSize
  var mink; // GetValue
  var prairie_dog; // RemoveFromDOM
  var mantis; // TextRender
  var dogfish; // TextStyle
  var snail; // Text
  
  raccoon = require("../../dom/AddToDOM");
  hamster = require("../../display/canvas/CanvasPool");
  chinchilla = require("../../utils/Class");
  ibex = require("../components");
  boar = require("../../core/events");
  llama = require("../GameObject");
  capybara = require("./GetTextSize");
  mink = require("../../utils/object/GetValue");
  prairie_dog = require("../../dom/RemoveFromDOM");
  mantis = require("./TextRender");
  dogfish = require("./TextStyle");
  snail = new chinchilla({
    Extends : llama,
    Mixins : [ibex.Alpha, ibex.BlendMode, ibex.ComputedSize, ibex.Crop, ibex.Depth, ibex.Flip, ibex.GetBounds, ibex.Mask, ibex.Origin, ibex.Pipeline, ibex.ScrollFactor, ibex.Tint, ibex.Transform, ibex.Visible, mantis, ],
    initialize : function t(dunlin, termite, squid, rook, woodcock) {
      if (termite === undefined)
      {
        termite = 0;
      }
      if (squid === undefined)
      {
        squid = 0;
      }
      llama.call(this, dunlin, "Text");
      this.renderer = dunlin.sys.renderer;
      this.setPosition(termite, squid);
      this.setOrigin(0, 0);
      this.initPipeline();
      this.canvas = hamster.create(this);
      this.context = this.canvas.getContext("2d");
      this.style = new dogfish(this, woodcock);
      this.autoRound = true;
      this.splitRegExp = new RegExp("(?:\\r\\n|\\r|\\n)", "");
      this._text = undefined;
      this.padding = {
        left : 0,
        right : 0,
        top : 0,
        bottom : 0
      };
      this.width = 1;
      this.height = 1;
      this.lineSpacing = 0;
      this.dirty = false;
      if (this.style.resolution === 0)
      {
        this.style.resolution = 1;
      }
      this._crop = this.resetCropObject();
      this.texture = dunlin.sys.textures.addCanvas(null, this.canvas, true);
      this.frame = this.texture.get();
      this.frame.source.resolution = this.style.resolution;
      if (this.renderer && this.renderer.gl)
      {
        this.renderer.deleteTexture(this.frame.source.glTexture);
        this.frame.source.glTexture = null;
      }
      this.initRTL();
      this.setText(rook);
      if (woodcock && woodcock.padding)
      {
        this.setPadding(woodcock.padding);
      }
      if (woodcock && woodcock.lineSpacing)
      {
        this.setLineSpacing(woodcock.lineSpacing);
      }
      dunlin.sys.game.events.on(boar.CONTEXT_RESTORED, function () {
        this.dirty = true;
      }, 
      this);
    },
    initRTL : function () {
      if (! this.style.rtl)
      {
        return;
      }
      this.canvas.dir = "rtl";
      this.context.direction = "rtl";
      this.canvas.style.display = "none";
      raccoon(this.canvas, this.scene.sys.canvas);
      this.originX = 1;
    },
    runWordWrap : function (antelope) {
      var goose; // e
      var baboon; // i
      
          goose = this.style;
      if (goose.wordWrapCallback)
      {
        baboon = goose.wordWrapCallback.call(goose.wordWrapCallbackScope, antelope, this);
        if (Array.isArray(baboon))
        {
          baboon = baboon.join("\n");
        }
        return baboon;
      }
      else
        if (goose.wordWrapWidth)
        {
          if (goose.wordWrapUseAdvanced)
          {
            return this.advancedWordWrap(antelope, this.context, this.style.wordWrapWidth);
          }
          else
          {
            return this.basicWordWrap(antelope, this.context, this.style.wordWrapWidth);
          }
        }
        else
        {
          return antelope;
        }
    },
    advancedWordWrap : function (bat, bison, tarsier) {
      var cat; // s
      var weasel; // r
      var beaver; // n
      var komodo_dragon; // a
      var armadillo; // o
      var woodpecker; // h
      var quelea; // l
      var butterfly; // d
      var oyster; // u
      var stingray; // c
      var dragonfly; // f
      var finch; // p
      var meerkat; // v
      var alligator; // g
      var kookabura; // x
      var human; // y
      var reindeer; // m
      
          cat = "";
      weasel = bat.replace(new RegExp(" +", "gi"), " ").split(this.splitRegExp);
      {
        komodo_dragon = 0;
        for (; komodo_dragon < beaver; komodo_dragon++)
        {
          armadillo = weasel[komodo_dragon];
          woodpecker = "";
          armadillo = armadillo.replace(new RegExp("^ *|\\s*$", "gi"), "");
          quelea = bison.measureText(armadillo).width;
          if (quelea < tarsier)
          {
            cat += armadillo + "\n";
            continue;
          }
          oyster = armadillo.split(" ");
          {
            stingray = 0;
            for (; stingray < oyster.length; stingray++)
            {
              dragonfly = oyster[stingray];
              finch = dragonfly + " ";
              meerkat = bison.measureText(finch).width;
              if (meerkat > butterfly)
              {
                if (stingray === 0)
                {
                  alligator = finch;
                  while (alligator.length)
                  {
                    alligator = alligator.slice(0, -1);
                    meerkat = bison.measureText(alligator).width;
                    if (meerkat <= butterfly)
                    {
                      break;
                    }
                  }
                  if (! alligator.length)
                  {
                    throw new Error("This text's wordWrapWidth setting is less than a single character!");
                  }
                  kookabura = dragonfly.substr(alligator.length);
                  oyster[stingray] = kookabura;
                  woodpecker += alligator;
                }
                human = oyster[stingray].length ? stingray : stingray + 1;
                reindeer = oyster.slice(human).join(" ").replace(new RegExp("[ \\n]*$", "gi"), "");
                weasel[komodo_dragon + 1] = reindeer + " " + (weasel[komodo_dragon + 1] || "");
                break;
              }
              else
              {
                woodpecker += finch;
              }
            }
          }
          cat += woodpecker.replace(new RegExp("[ \\n]*$", "gi"), "") + "\n";
        }
      }
      cat = cat.replace(new RegExp("[\\s|\\n]*$", "gi"), "");
      return cat;
    },
    basicWordWrap : function (elk, ape, dinosaur) {
      var kouprey; // s
      var echidna; // r
      var owl; // n
      var gaur; // a
      var locust; // o
      var magpie; // h
      var snake; // l
      var hummingbird; // d
      var sheep; // u
      var goldfinch; // c
      var swan; // f
      var oryx; // p
      
          kouprey = "";
      echidna = elk.split(this.splitRegExp);
      owl = echidna.length - 1;
      gaur = ape.measureText(" ").width;
      {
        locust = 0;
        for (; locust <= owl; locust++)
        {
          snake = echidna[locust].split(" ");
          hummingbird = snake.length - 1;
          {
            sheep = 0;
            for (; sheep <= hummingbird; sheep++)
            {
              goldfinch = snake[sheep];
              swan = ape.measureText(goldfinch).width;
              oryx = swan;
              if (sheep < hummingbird)
              {
                oryx += gaur;
              }
              if (oryx > magpie)
              {
                if (sheep > 0)
                {
                  kouprey += "\n";
                }
              }
              kouprey += goldfinch;
              if (sheep < hummingbird)
              {
                kouprey += " ";
              }
              else
              {
                ;
              }
            }
          }
          if (locust < owl)
          {
            kouprey += "\n";
          }
        }
      }
      return kouprey;
    },
    getWrappedText : function (turtle) {
      var cormorant; // e
      
          if (turtle === undefined)
      {
        turtle = this._text;
      }
      this.style.syncFont(this.canvas, this.context);
      cormorant = this.runWordWrap(turtle);
      return cormorant.split(this.splitRegExp);
    },
    setText : function (cattle) {
      if (! cattle && cattle !== 0)
      {
        cattle = "";
      }
      if (Array.isArray(cattle))
      {
        cattle = cattle.join("\n");
      }
      if (cattle !== this._text)
      {
        this._text = cattle.toString();
        this.updateText();
      }
      return this;
    },
    setStyle : function (tiger) {
      return this.style.setStyle(tiger);
    },
    setFont : function (lion) {
      return this.style.setFont(lion);
    },
    setFontFamily : function (frog) {
      return this.style.setFontFamily(frog);
    },
    setFontSize : function (skunk) {
      return this.style.setFontSize(skunk);
    },
    setFontStyle : function (lemur) {
      return this.style.setFontStyle(lemur);
    },
    setFixedSize : function (goat, wolf) {
      return this.style.setFixedSize(goat, wolf);
    },
    setBackgroundColor : function (gnat) {
      return this.style.setBackgroundColor(gnat);
    },
    setFill : function (quail) {
      return this.style.setFill(quail);
    },
    setColor : function (porpoise) {
      return this.style.setColor(porpoise);
    },
    setStroke : function (chamois, otter) {
      return this.style.setStroke(chamois, otter);
    },
    setShadow : function (sand_dollar, jaguar, dugong, water_buffalo, sea_urchin, 
    grouse) {
      return this.style.setShadow(sand_dollar, jaguar, dugong, water_buffalo, sea_urchin, 
      grouse);
    },
    setShadowOffset : function (sandpiper, mule) {
      return this.style.setShadowOffset(sandpiper, mule);
    },
    setShadowColor : function (goldfish) {
      return this.style.setShadowColor(goldfish);
    },
    setShadowBlur : function (caribou) {
      return this.style.setShadowBlur(caribou);
    },
    setShadowStroke : function (raven) {
      return this.style.setShadowStroke(raven);
    },
    setShadowFill : function (ram) {
      return this.style.setShadowFill(ram);
    },
    setWordWrapWidth : function (salmon, cheetah) {
      return this.style.setWordWrapWidth(salmon, cheetah);
    },
    setWordWrapCallback : function (viper, pheasant) {
      return this.style.setWordWrapCallback(viper, pheasant);
    },
    setAlign : function (pony) {
      return this.style.setAlign(pony);
    },
    setResolution : function (hawk) {
      return this.style.setResolution(hawk);
    },
    setLineSpacing : function (spoonbill) {
      this.lineSpacing = spoonbill;
      return this.updateText();
    },
    setPadding : function (swallow, octopus, newt, caterpillar) {
      var kingfisher; // r
      var nightingale; // n
      var wombat; // a
      
          if (typeof swallow === "object")
      {
        kingfisher = swallow;
        nightingale = mink(kingfisher, "x", null);
        if (nightingale !== null)
        {
          swallow = nightingale;
          newt = nightingale;
        }
        else
        {
          swallow = mink(kingfisher, "left", 0);
          newt = mink(kingfisher, "right", swallow);
        }
        wombat = mink(kingfisher, "y", null);
        if (wombat !== null)
        {
          octopus = wombat;
          caterpillar = wombat;
        }
        else
        {
          octopus = mink(kingfisher, "top", 0);
          caterpillar = mink(kingfisher, "bottom", octopus);
        }
      }
      else
      {
        if (swallow === undefined)
        {
          swallow = 0;
        }
        if (octopus === undefined)
        {
          octopus = swallow;
        }
        if (newt === undefined)
        {
          newt = swallow;
        }
        if (caterpillar === undefined)
        {
          caterpillar = octopus;
        }
      }
      this.padding.left = swallow;
      this.padding.top = octopus;
      this.padding.right = newt;
      this.padding.bottom = caterpillar;
      return this.updateText();
    },
    setMaxLines : function (crane) {
      return this.style.setMaxLines(crane);
    },
    updateText : function () {
      var chough; // t
      var goshawk; // e
      var monkey; // i
      var horse; // s
      var okapi; // r
      var worm; // n
      var hornet; // a
      var quetzal; // o
      var seahorse; // h
      var chicken; // l
      var mallard; // d
      var aardvark; // u
      var albatross; // c
      var cobra; // f
      var walrus; // p
      var pelican; // v
      var mosquito; // g
      var trout; // x
      var whale; // y
      var cassowary; // m
      var guinea_fowl; // T
      var mouse; // w
      var wolverine; // S
      
          chough = this.canvas;
      goshawk = this.context;
      monkey = this.style;
      horse = monkey.resolution;
      okapi = monkey.metrics;
      monkey.syncFont(chough, goshawk);
      worm = this._text;
      if (monkey.wordWrapWidth || monkey.wordWrapCallback)
      {
        worm = this.runWordWrap(this._text);
      }
      hornet = worm.split(this.splitRegExp);
      quetzal = capybara(this, okapi, hornet);
      seahorse = this.padding;
      if (monkey.fixedWidth === 0)
      {
        this.width = quetzal.width + seahorse.left + seahorse.right;
        chicken = quetzal.width;
      }
      else
      {
        this.width = monkey.fixedWidth;
        chicken = this.width - seahorse.left - seahorse.right;
        if (chicken < quetzal.width)
        {
          chicken = quetzal.width;
        }
      }
      if (monkey.fixedHeight === 0)
      {
        this.height = quetzal.height + seahorse.top + seahorse.bottom;
      }
      else
      {
        this.height = monkey.fixedHeight;
      }
      mallard = this.width;
      aardvark = this.height;
      this.updateDisplayOrigin();
      mallard = mallard * horse;
      aardvark = aardvark * horse;
      mallard = Math.max(mallard, 1);
      aardvark = Math.max(aardvark, 1);
      if (chough.width !== mallard || chough.height !== aardvark)
      {
        chough.width = mallard;
        chough.height = aardvark;
        this.frame.setSize(mallard, aardvark);
        monkey.syncFont(chough, goshawk);
      }
      else
      {
        goshawk.clearRect(0, 0, mallard, aardvark);
      }
      goshawk.save();
      goshawk.scale(horse, horse);
      if (monkey.backgroundColor)
      {
        goshawk.fillStyle = monkey.backgroundColor;
        goshawk.fillRect(0, 0, mallard, aardvark);
      }
      monkey.syncStyle(chough, goshawk);
      goshawk.textBaseline = "alphabetic";
      goshawk.translate(seahorse.left, seahorse.top);
      {
        walrus = 0;
        for (; walrus < quetzal.lines; walrus++)
        {
          albatross = monkey.strokeThickness / 2;
          cobra = monkey.strokeThickness / 2 + walrus * quetzal.lineHeight + okapi.ascent;
          if (walrus > 0)
          {
            cobra += quetzal.lineSpacing * walrus;
          }
          if (monkey.rtl)
          {
            albatross = mallard - albatross;
          }
          else
            if (monkey.align === "right")
            {
              albatross += chicken - quetzal.lineWidths[walrus];
            }
            else
              if (monkey.align === "center")
              {
                albatross += (chicken - quetzal.lineWidths[walrus]) / 2;
              }
              else
                if (monkey.align === "justify")
                {
                  pelican = .85;
                  if (quetzal.lineWidths[walrus] / quetzal.width >= pelican)
                  {
                    mosquito = quetzal.width - quetzal.lineWidths[walrus];
                    trout = goshawk.measureText(" ").width;
                    whale = hornet[walrus].trim();
                    cassowary = whale.split(" ");
                    mosquito += (hornet[walrus].length - whale.length) * trout;
                    guinea_fowl = Math.floor(mosquito / trout);
                    mouse = 0;
                    while (guinea_fowl > 0)
                    {
                      cassowary[mouse] += " ";
                      mouse = (mouse + 1) % (cassowary.length - 1 || 1);
                      -- guinea_fowl;
                    }
                    hornet[walrus] = cassowary.join(" ");
                  }
                }
          if (this.autoRound)
          {
            albatross = Math.round(albatross);
            cobra = Math.round(cobra);
          }
          if (monkey.strokeThickness)
          {
            this.style.syncShadow(goshawk, monkey.shadowStroke);
            goshawk.strokeText(hornet[walrus], albatross, cobra);
          }
          if (monkey.color)
          {
            this.style.syncShadow(goshawk, monkey.shadowFill);
            goshawk.fillText(hornet[walrus], albatross, cobra);
          }
        }
      }
      goshawk.restore();
      if (this.renderer && this.renderer.gl)
      {
        this.frame.source.glTexture = this.renderer.canvasToTexture(chough, this.frame.source.glTexture, true);
        this.frame.glTexture = this.frame.source.glTexture;
      }
      this.dirty = true;
      wolverine = this.input;
      if (wolverine && ! wolverine.customHitArea)
      {
        wolverine.hitArea.width = this.width;
        wolverine.hitArea.height = this.height;
      }
      return this;
    },
    getTextMetrics : function () {
      return this.style.getTextMetrics();
    },
    text : {
      get : function () {
        return this._text;
      },
      set : function (koala) {
        this.setText(koala);
      }
    },
    toJSON : function () {
      var giant_panda; // t
      var mongoose; // e
      
          giant_panda = ibex.ToJSON(this);
      mongoose = {
        autoRound : this.autoRound,
        text : this._text,
        style : this.style.toJSON(),
        padding : {
          left : this.padding.left,
          right : this.padding.right,
          top : this.padding.top,
          bottom : this.padding.bottom
        }
      };
      giant_panda.data = mongoose;
      return giant_panda;
    },
    preDestroy : function () {
      if (this.style.rtl)
      {
        prairie_dog(this.canvas);
      }
      hamster.remove(this.canvas);
      this.texture.destroy();
    }
  });
  module.exports = snail;
  