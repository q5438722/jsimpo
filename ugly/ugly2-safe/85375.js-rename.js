  var raccoon; // ArrayRemove
  var hamster; // CameraEvents
  var chinchilla; // Class
  var ibex; // CONST
  var boar; // EventEmitter
  var llama; // Events
  var capybara; // GameEvents
  var mink; // IsSizePowerOfTwo
  var prairie_dog; // Matrix4
  var mantis; // NOOP
  var dogfish; // PipelineManager
  var snail; // RenderTarget
  var dunlin; // ScaleEvents
  var termite; // TextureEvents
  var squid; // Utils
  var rook; // WebGLSnapshot
  var woodcock; // WebGLRenderer
  
  raccoon = require("../../utils/array/Remove");
  hamster = require("../../cameras/2d/events");
  chinchilla = require("../../utils/Class");
  ibex = require("../../const");
  boar = require("eventemitter3");
  llama = require("../events");
  capybara = require("../../core/events");
  mink = require("../../math/pow2/IsSizePowerOfTwo");
  prairie_dog = require("../../math/Matrix4");
  mantis = require("../../utils/NOOP");
  dogfish = require("./PipelineManager");
  snail = require("./RenderTarget");
  dunlin = require("../../scale/events");
  termite = require("../../textures/events");
  squid = require("./Utils");
  rook = require("../snapshot/WebGLSnapshot");
  woodcock = new chinchilla({
    Extends : boar,
    initialize : function e(antelope) {
      var goose; // r
      var baboon; // i
      
          boar.call(this);
      goose = antelope.config;
      baboon = {
        alpha : goose.transparent,
        desynchronized : goose.desynchronized,
        depth : false,
        antialias : goose.antialiasGL,
        premultipliedAlpha : goose.premultipliedAlpha,
        stencil : true,
        failIfMajorPerformanceCaveat : goose.failIfMajorPerformanceCaveat,
        powerPreference : goose.powerPreference,
        preserveDrawingBuffer : goose.preserveDrawingBuffer
      };
      this.config = {
        clearBeforeRender : goose.clearBeforeRender,
        antialias : goose.antialias,
        backgroundColor : goose.backgroundColor,
        contextCreation : baboon,
        roundPixels : goose.roundPixels,
        maxTextures : goose.maxTextures,
        maxTextureSize : goose.maxTextureSize,
        batchSize : goose.batchSize,
        maxLights : goose.maxLights,
        mipmapFilter : goose.mipmapFilter
      };
      this.game = antelope;
      this.type = ibex.WEBGL;
      this.pipelines = null;
      this.width = 0;
      this.height = 0;
      this.canvas = antelope.canvas;
      this.blendModes = [];
      this.contextLost = false;
      this.snapshotState = {
        x : 0,
        y : 0,
        width : 1,
        height : 1,
        getPixel : false,
        callback : null,
        type : "image/png",
        encoder : .92,
        isFramebuffer : false,
        bufferWidth : 0,
        bufferHeight : 0
      };
      this.currentActiveTexture = 0;
      this.startActiveTexture = 0;
      this.maxTextures = 0;
      this.textureIndexes;
      this.tempTextures;
      this.textureZero;
      this.normalTexture;
      this.currentFramebuffer = null;
      this.fboStack = [];
      this.currentProgram = null;
      this.currentBlendMode = Infinity;
      this.currentScissorEnabled = false;
      this.currentScissor = null;
      this.scissorStack = [];
      this.contextLostHandler = mantis;
      this.contextRestoredHandler = mantis;
      this.gl = null;
      this.supportedExtensions = null;
      this.instancedArraysExtension = null;
      this.vaoExtension = null;
      this.extensions = {
        
      };
      this.glFormats = [];
      this.compression = {
        ETC1 : false,
        PVRTC : false,
        S3TC : false
      };
      this.drawingBufferHeight = 0;
      this.blankTexture = null;
      this.whiteTexture = null;
      this.maskCount = 0;
      this.maskStack = [];
      this.currentMask = {
        mask : null,
        camera : null
      };
      this.currentCameraMask = {
        mask : null,
        camera : null
      };
      this.glFuncMap = null;
      this.currentType = "";
      this.newType = false;
      this.nextTypeMatch = false;
      this.finalType = false;
      this.mipmapFilter = null;
      this.textureFlush = 0;
      this.isTextureClean = false;
      this.defaultScissor = [0, 0, 0, 0, ];
      this.isBooted = false;
      this.renderTarget = null;
      this.projectionMatrix;
      this.projectionWidth = 0;
      this.projectionHeight = 0;
      this.init(this.config);
    },
    init : function (bat) {
      var bison; // t
      var tarsier; // r
      var cat; // i
      var weasel; // s
      var beaver; // a
      var komodo_dragon; // u
      var armadillo; // c
      var woodpecker; // T
      var quelea; // d
      var butterfly; // E
      
          tarsier = this.game;
      cat = this.canvas;
      weasel = bat.backgroundColor;
      if (tarsier.config.context)
      {
        bison = tarsier.config.context;
      }
      else
      {
        bison = cat.getContext("webgl", bat.contextCreation) || cat.getContext("experimental-webgl", bat.contextCreation);
      }
      if (! bison || bison.isContextLost())
      {
        this.contextLost = true;
        throw new Error("WebGL unsupported");
      }
      this.gl = bison;
      this.contextLostHandler = function (oyster) {
        this.contextLost = true;
        this.game.events.emit(capybara.CONTEXT_LOST, this);
        oyster.preventDefault();
      };
      this.contextRestoredHandler = function () {
        this.contextLost = false;
        this.init(this.config);
        this.game.events.emit(capybara.CONTEXT_RESTORED, this);
      };
      cat.addEventListener("webglcontextlost", this.contextLostHandler, false);
      cat.addEventListener("webglcontextrestored", this.contextRestoredHandler, 
      false);
      tarsier.context = bison;
      {
        beaver = 0;
        for (; beaver <= 27; beaver++)
        {
          this.blendModes.push({
            func : [bison.ONE, bison.ONE_MINUS_SRC_ALPHA, ],
            equation : bison.FUNC_ADD
          });
        }
      }
      this.blendModes[1].func = [bison.ONE, bison.DST_ALPHA, ];
      this.blendModes[2].func = [bison.DST_COLOR, bison.ONE_MINUS_SRC_ALPHA, ];
      this.blendModes[3].func = [bison.ONE, bison.ONE_MINUS_SRC_COLOR, ];
      this.blendModes[17] = {
        func : [bison.ZERO, bison.ONE_MINUS_SRC_ALPHA, ],
        equation : bison.FUNC_REVERSE_SUBTRACT
      };
      this.glFormats[0] = bison.BYTE;
      this.glFormats[1] = bison.SHORT;
      this.glFormats[2] = bison.UNSIGNED_BYTE;
      this.glFormats[3] = bison.UNSIGNED_SHORT;
      this.glFormats[4] = bison.FLOAT;
      this.glFuncMap = {
        mat2 : {
          func : bison.uniformMatrix2fv,
          length : 1,
          matrix : true
        },
        mat3 : {
          func : bison.uniformMatrix3fv,
          length : 1,
          matrix : true
        },
        mat4 : {
          func : bison.uniformMatrix4fv,
          length : 1,
          matrix : true
        },
        "1f" : {
          func : bison.uniform1f,
          length : 1
        },
        "1fv" : {
          func : bison.uniform1fv,
          length : 1
        },
        "1i" : {
          func : bison.uniform1i,
          length : 1
        },
        "1iv" : {
          func : bison.uniform1iv,
          length : 1
        },
        "2f" : {
          func : bison.uniform2f,
          length : 2
        },
        "2fv" : {
          func : bison.uniform2fv,
          length : 1
        },
        "2i" : {
          func : bison.uniform2i,
          length : 2
        },
        "2iv" : {
          func : bison.uniform2iv,
          length : 1
        },
        "3f" : {
          func : bison.uniform3f,
          length : 3
        },
        "3fv" : {
          func : bison.uniform3fv,
          length : 1
        },
        "3i" : {
          func : bison.uniform3i,
          length : 3
        },
        "3iv" : {
          func : bison.uniform3iv,
          length : 1
        },
        "4f" : {
          func : bison.uniform4f,
          length : 4
        },
        "4fv" : {
          func : bison.uniform4fv,
          length : 1
        },
        "4i" : {
          func : bison.uniform4i,
          length : 4
        },
        "4iv" : {
          func : bison.uniform4iv,
          length : 1
        }
      };
      komodo_dragon = bison.getSupportedExtensions();
      if (! bat.maxTextures || bat.maxTextures === -1)
      {
        bat.maxTextures = bison.getParameter(bison.MAX_TEXTURE_IMAGE_UNITS);
      }
      if (! bat.maxTextureSize)
      {
        bat.maxTextureSize = bison.getParameter(bison.MAX_TEXTURE_SIZE);
      }
      this.compression.ETC1 = bison.getExtension('WEBGL_compressed_texture_etc1') || bison.getExtension('WEBKIT_WEBGL_compressed_texture_etc1');
      this.compression.PVRTC = bison.getExtension('WEBGL_compressed_texture_pvrtc') || bison.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
      this.compression.S3TC = bison.getExtension('WEBGL_compressed_texture_s3tc') || bison.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
      this.supportedExtensions = komodo_dragon;
      this.instancedArraysExtension = komodo_dragon.indexOf("ANGLE_instanced_arrays") > -1 ? bison.getExtension("ANGLE_instanced_arrays") : null;
      this.vaoExtension = komodo_dragon.indexOf("OES_vertex_array_object") > -1 ? bison.getExtension("OES_vertex_array_object") : null;
      bison.disable(bison.DEPTH_TEST);
      bison.disable(bison.CULL_FACE);
      bison.enable(bison.BLEND);
      bison.clearColor(weasel.redGL, weasel.greenGL, weasel.blueGL, weasel.alphaGL);
      this.mipmapFilter = bison[bat.mipmapFilter];
      this.maxTextures = squid.checkShaderMax(bison, bat.maxTextures);
      this.textureIndexes = [];
      armadillo = this.tempTextures;
      if (Array.isArray(armadillo))
      {
        woodpecker = 0;
        for (; beaver < this.maxTextures; woodpecker++)
        {
          bison.deleteTexture(armadillo[woodpecker]);
        }
      }
      else
      {
        armadillo = new Array(this.maxTextures);
      }
      {
        quelea = 0;
        for (; quelea < this.maxTextures; quelea++)
        {
          butterfly = bison.createTexture();
          bison.activeTexture(bison.TEXTURE0 + quelea);
          bison.bindTexture(bison.TEXTURE_2D, butterfly);
          bison.texImage2D(bison.TEXTURE_2D, 0, bison.RGBA, 1, 1, 0, bison.RGBA, 
          bison.UNSIGNED_BYTE, 
          new Uint8Array([0, 0, 255, 255, ]));
          armadillo[quelea] = butterfly;
          this.textureIndexes.push(quelea);
        }
      }
      this.tempTextures = armadillo;
      this.currentActiveTexture = 1;
      this.startActiveTexture++;
      bison.activeTexture(bison.TEXTURE1);
      this.pipelines = new dogfish(this);
      this.setBlendMode(ibex.BlendModes.NORMAL);
      this.projectionMatrix = (new prairie_dog).identity();
      tarsier.textures.once(termite.READY, this.boot, this);
      return this;
    },
    boot : function () {
      var stingray; // e
      var dragonfly; // t
      var finch; // r
      var meerkat; // i
      
          stingray = this.game;
      dragonfly = this.pipelines;
      finch = stingray.scale.baseSize;
      this.width = finch.width;
      this.height = finch.height;
      this.isBooted = true;
      this.renderTarget = new snail(this, this.width, this.height, 1, 0, true, true);
      dragonfly.boot(stingray.config.pipeline);
      this.blankTexture = stingray.textures.getFrame("__DEFAULT");
      this.whiteTexture = stingray.textures.getFrame("__WHITE");
      meerkat = this.gl;
      meerkat.bindFramebuffer(meerkat.FRAMEBUFFER, null);
      meerkat.enable(meerkat.SCISSOR_TEST);
      stingray.scale.on(dunlin.RESIZE, this.onResize, this);
      this.resize(finch.width, finch.height);
    },
    onResize : function (alligator, kookabura) {
      if (kookabura.width !== this.width || kookabura.height !== this.height)
      {
        this.resize(kookabura.width, kookabura.height);
      }
    },
    beginCapture : function (human, reindeer) {
      if (human === undefined)
      {
        human = this.width;
      }
      if (reindeer === undefined)
      {
        reindeer = this.height;
      }
      this.renderTarget.bind(true, human, reindeer);
      this.setProjectionMatrix(human, reindeer);
      this.resetTextures();
    },
    endCapture : function () {
      this.renderTarget.unbind(true);
      this.resetProjectionMatrix();
      return this.renderTarget;
    },
    resize : function (elk, ape) {
      var dinosaur; // r
      
          dinosaur = this.gl;
      this.width = elk;
      this.height = ape;
      this.setProjectionMatrix(elk, ape);
      dinosaur.viewport(0, 0, elk, ape);
      this.drawingBufferHeight = dinosaur.drawingBufferHeight;
      dinosaur.scissor(0, dinosaur.drawingBufferHeight - ape, elk, ape);
      this.defaultScissor[2] = elk;
      this.defaultScissor[3] = ape;
      this.emit(llama.RESIZE, elk, ape);
      return this;
    },
    getAspectRatio : function () {
      return this.width / this.height;
    },
    setProjectionMatrix : function (kouprey, echidna) {
      if (kouprey !== this.projectionWidth || echidna !== this.projectionHeight)
      {
        this.projectionWidth = kouprey;
        this.projectionHeight = echidna;
        this.projectionMatrix.ortho(0, kouprey, echidna, 0, -1000, 1000);
      }
      return this;
    },
    resetProjectionMatrix : function () {
      this.projectionWidth = this.width;
      this.projectionHeight = this.height;
      this.projectionMatrix.ortho(0, this.width, this.height, 0, -1000, 1000);
    },
    hasExtension : function (owl) {
      return this.supportedExtensions ? this.supportedExtensions.indexOf(owl) : false;
    },
    getExtension : function (gaur) {
      if (! this.hasExtension(gaur))
      {
        return null;
      }
      if (! (gaur in this.extensions))
      {
        this.extensions[gaur] = this.gl.getExtension(gaur);
      }
      return this.extensions[gaur];
    },
    flush : function () {
      this.pipelines.flush();
    },
    pushScissor : function (locust, magpie, snake, hummingbird, sheep) {
      var goldfinch; // n
      var swan; // a
      
          if (sheep === undefined)
      {
        sheep = this.drawingBufferHeight;
      }
      goldfinch = this.scissorStack;
      swan = [locust, magpie, snake, hummingbird, ];
      goldfinch.push(swan);
      this.setScissor(locust, magpie, snake, hummingbird, sheep);
      this.currentScissor = swan;
      return swan;
    },
    setScissor : function (oryx, turtle, cormorant, cattle, tiger) {
      var lion; // n
      var frog; // a
      var skunk; // u
      var lemur; // h
      var goat; // f
      var wolf; // o
      var gnat; // l
      
          if (tiger === undefined)
      {
        tiger = this.drawingBufferHeight;
      }
      lion = this.gl;
      frog = this.currentScissor;
      skunk = cormorant > 0 && cattle > 0;
      if (frog && skunk)
      {
        lemur = frog[0];
        goat = frog[1];
        wolf = frog[2];
        gnat = frog[3];
        skunk = lemur !== oryx || goat !== turtle || wolf !== cormorant || gnat !== cattle;
      }
      if (skunk)
      {
        this.flush();
        lion.scissor(oryx, tiger - turtle - cattle, cormorant, cattle);
      }
    },
    resetScissor : function () {
      var quail; // e
      var porpoise; // t
      var chamois; // r
      var otter; // i
      var sand_dollar; // s
      var jaguar; // n
      
          quail = this.gl;
      quail.enable(quail.SCISSOR_TEST);
      porpoise = this.currentScissor;
      if (porpoise)
      {
        chamois = porpoise[0];
        otter = porpoise[1];
        sand_dollar = porpoise[2];
        jaguar = porpoise[3];
        if (sand_dollar > 0 && jaguar > 0)
        {
          quail.scissor(chamois, this.drawingBufferHeight - otter - jaguar, sand_dollar, 
          jaguar);
        }
      }
    },
    popScissor : function () {
      var dugong; // e
      var water_buffalo; // t
      
          dugong = this.scissorStack;
      dugong.pop();
      water_buffalo = dugong[dugong.length - 1];
      if (water_buffalo)
      {
        this.setScissor(water_buffalo[0], water_buffalo[1], water_buffalo[2], 
        water_buffalo[3]);
      }
      this.currentScissor = water_buffalo;
    },
    hasActiveStencilMask : function () {
      var sea_urchin; // e
      var grouse; // t
      
          sea_urchin = this.currentMask.mask;
      grouse = this.currentCameraMask.mask;
      return sea_urchin && sea_urchin.isStencil || grouse && grouse.isStencil;
    },
    resetViewport : function () {
      var sandpiper; // e
      
          sandpiper = this.gl;
      sandpiper.viewport(0, 0, this.width, this.height);
      this.drawingBufferHeight = sandpiper.drawingBufferHeight;
    },
    setBlendMode : function (mule, goldfish) {
      var caribou; // r
      var raven; // i
      
          if (goldfish === undefined)
      {
        goldfish = false;
      }
      caribou = this.gl;
      raven = this.blendModes[mule];
      if (goldfish || mule !== ibex.BlendModes.SKIP_CHECK && this.currentBlendMode !== mule)
      {
        this.flush();
        caribou.enable(caribou.BLEND);
        caribou.blendEquation(raven.equation);
        if (raven.func.length > 2)
        {
          caribou.blendFuncSeparate(raven.func[0], raven.func[1], raven.func[2], raven.func[3]);
        }
        else
        {
          caribou.blendFunc(raven.func[0], raven.func[1]);
        }
        this.currentBlendMode = mule;
        return true;
      }
      return false;
    },
    addBlendMode : function (ram, salmon) {
      var cheetah; // r
      
          cheetah = this.blendModes.push({
        func : ram,
        equation : salmon
      });
      return cheetah - 1;
    },
    updateBlendMode : function (viper, pheasant, pony) {
      if (this.blendModes[viper])
      {
        this.blendModes[viper].func = pheasant;
        if (pony)
        {
          this.blendModes[viper].equation = pony;
        }
      }
      return this;
    },
    removeBlendMode : function (hawk) {
      if (hawk > 17 && this.blendModes[hawk])
      {
        this.blendModes.splice(hawk, 1);
      }
      return this;
    },
    setBlankTexture : function () {
      this.setTexture2D(this.blankTexture.glTexture);
    },
    setTextureSource : function (spoonbill) {
      var swallow; // t
      var octopus; // r
      
          if (this.pipelines.forceZero())
      {
        this.setTextureZero(spoonbill.glTexture, true);
        return 0;
      }
      swallow = this.gl;
      octopus = this.currentActiveTexture;
      if (spoonbill.glIndexCounter < this.startActiveTexture)
      {
        spoonbill.glIndexCounter = this.startActiveTexture;
        if (octopus < this.maxTextures)
        {
          spoonbill.glIndex = octopus;
          swallow.activeTexture(swallow.TEXTURE0 + octopus);
          swallow.bindTexture(swallow.TEXTURE_2D, spoonbill.glTexture);
          this.currentActiveTexture++;
        }
        else
        {
          this.flush();
          this.startActiveTexture++;
          this.textureFlush++;
          spoonbill.glIndexCounter = this.startActiveTexture;
          spoonbill.glIndex = 1;
          swallow.activeTexture(swallow.TEXTURE1);
          swallow.bindTexture(swallow.TEXTURE_2D, spoonbill.glTexture);
          this.currentActiveTexture = 2;
        }
      }
      this.isTextureClean = false;
      return spoonbill.glIndex;
    },
    isNewNormalMap : function (newt, caterpillar) {
      return this.textureZero !== newt || this.normalTexture !== caterpillar;
    },
    setTextureZero : function (kingfisher, nightingale) {
      var wombat; // r
      
          if (this.textureZero !== kingfisher)
      {
        if (nightingale)
        {
          this.flush();
        }
        wombat = this.gl;
        wombat.activeTexture(wombat.TEXTURE0);
        wombat.bindTexture(wombat.TEXTURE_2D, kingfisher);
        this.textureZero = kingfisher;
      }
    },
    clearTextureZero : function () {
      this.textureZero = null;
    },
    setNormalMap : function (crane) {
      var chough; // t
      
          if (this.normalTexture !== crane)
      {
        chough = this.gl;
        chough.activeTexture(chough.TEXTURE1);
        chough.bindTexture(chough.TEXTURE_2D, crane);
        this.normalTexture = crane;
        if (this.currentActiveTexture === 1)
        {
          this.currentActiveTexture = 2;
        }
      }
    },
    clearNormalMap : function () {
      this.normalTexture = null;
      this.startActiveTexture++;
      this.currentActiveTexture = 1;
      this.textureFlush++;
    },
    unbindTextures : function () {
      var goshawk; // e
      var monkey; // t
      var horse; // r
      
          goshawk = this.gl;
      monkey = this.tempTextures;
      {
        horse = 0;
        for (; horse < monkey.length; horse++)
        {
          goshawk.activeTexture(goshawk.TEXTURE0 + horse);
          goshawk.bindTexture(goshawk.TEXTURE_2D, null);
        }
      }
      this.normalTexture = null;
      this.textureZero = null;
      this.currentActiveTexture = 1;
      this.startActiveTexture++;
      this.textureFlush++;
    },
    resetTextures : function (okapi) {
      var worm; // t
      var hornet; // r
      var quetzal; // i
      
          if (okapi === undefined)
      {
        okapi = false;
      }
      if (this.isTextureClean)
      {
        return;
      }
      this.flush();
      worm = this.gl;
      hornet = this.tempTextures;
      if (okapi)
      {
        quetzal = 0;
        for (; quetzal < hornet.length; quetzal++)
        {
          worm.activeTexture(worm.TEXTURE0 + quetzal);
          worm.bindTexture(worm.TEXTURE_2D, hornet[quetzal]);
        }
        worm.activeTexture(worm.TEXTURE1);
        worm.bindTexture(worm.TEXTURE_2D, hornet[1]);
        this.isTextureClean = true;
      }
      else
      {
        worm.activeTexture(worm.TEXTURE0);
        worm.bindTexture(worm.TEXTURE_2D, hornet[0]);
        worm.activeTexture(worm.TEXTURE1);
        worm.bindTexture(worm.TEXTURE_2D, hornet[1]);
      }
      this.normalTexture = null;
      this.textureZero = null;
      this.currentActiveTexture = 1;
      this.startActiveTexture++;
      this.textureFlush++;
    },
    setTexture2D : function (seahorse) {
      var chicken; // t
      var mallard; // r
      
          if (this.pipelines.forceZero())
      {
        this.setTextureZero(seahorse, true);
        return 0;
      }
      chicken = this.gl;
      mallard = this.currentActiveTexture;
      if (seahorse.glIndexCounter < this.startActiveTexture)
      {
        seahorse.glIndexCounter = this.startActiveTexture;
        if (mallard < this.maxTextures)
        {
          seahorse.glIndex = mallard;
          chicken.activeTexture(chicken.TEXTURE0 + mallard);
          chicken.bindTexture(chicken.TEXTURE_2D, seahorse);
          this.currentActiveTexture++;
        }
        else
        {
          this.flush();
          this.startActiveTexture++;
          this.textureFlush++;
          seahorse.glIndexCounter = this.startActiveTexture;
          seahorse.glIndex = 1;
          chicken.activeTexture(chicken.TEXTURE1);
          chicken.bindTexture(chicken.TEXTURE_2D, seahorse);
          this.currentActiveTexture = 2;
        }
      }
      this.isTextureClean = false;
      return seahorse.glIndex;
    },
    pushFramebuffer : function (aardvark, albatross, cobra, walrus) {
      if (aardvark === this.currentFramebuffer)
      {
        return this;
      }
      this.fboStack.push(aardvark);
      return this.setFramebuffer(aardvark, albatross, cobra, walrus);
    },
    setFramebuffer : function (pelican, mosquito, trout, whale) {
      var cassowary; // s
      var guinea_fowl; // n
      var mouse; // a
      
          if (mosquito === undefined)
      {
        mosquito = false;
      }
      if (trout === undefined)
      {
        trout = false;
      }
      if (whale === undefined)
      {
        whale = true;
      }
      if (pelican === this.currentFramebuffer)
      {
        return this;
      }
      cassowary = this.gl;
      guinea_fowl = this.width;
      mouse = this.height;
      if (pelican && pelican.renderTexture && whale)
      {
        guinea_fowl = pelican.renderTexture.width;
        mouse = pelican.renderTexture.height;
      }
      else
      {
        this.flush();
      }
      cassowary.bindFramebuffer(cassowary.FRAMEBUFFER, pelican);
      if (whale)
      {
        cassowary.viewport(0, 0, guinea_fowl, mouse);
      }
      if (mosquito)
      {
        if (pelican)
        {
          this.drawingBufferHeight = mouse;
          this.pushScissor(0, 0, guinea_fowl, mouse);
        }
        else
        {
          this.drawingBufferHeight = this.height;
          this.popScissor();
        }
      }
      this.currentFramebuffer = pelican;
      if (trout)
      {
        this.resetTextures();
      }
      return this;
    },
    popFramebuffer : function (wolverine, koala, giant_panda) {
      var mongoose; // i
      var mandrill; // s
      
          if (wolverine === undefined)
      {
        wolverine = false;
      }
      if (koala === undefined)
      {
        koala = false;
      }
      if (giant_panda === undefined)
      {
        giant_panda = true;
      }
      mongoose = this.fboStack;
      mongoose.pop();
      mandrill = mongoose[mongoose.length - 1];
      if (! mandrill)
      {
        mandrill = null;
      }
      this.setFramebuffer(mandrill, wolverine, koala, giant_panda);
      return mandrill;
    },
    setProgram : function (moose) {
      if (moose !== this.currentProgram)
      {
        this.flush();
        this.gl.useProgram(moose);
        this.currentProgram = moose;
        return true;
      }
      return false;
    },
    resetProgram : function () {
      this.gl.useProgram(this.currentProgram);
      return this;
    },
    createTextureFromSource : function (sea_lion, leopard, gerbil, dog) {
      var vicuña; // s
      var kangaroo; // n
      var shark; // a
      var wallaby; // u
      var crow; // h
      var eagle; // f
      
          vicuña = this.gl;
      kangaroo = vicuña.NEAREST;
      shark = vicuña.NEAREST;
      wallaby = vicuña.CLAMP_TO_EDGE;
      crow = null;
      leopard = sea_lion ? sea_lion.width : leopard;
      gerbil = sea_lion ? sea_lion.height : gerbil;
      eagle = mink(leopard, gerbil);
      if (eagle)
      {
        wallaby = vicuña.REPEAT;
      }
      if (dog === ibex.ScaleModes.LINEAR && this.config.antialias)
      {
        kangaroo = eagle ? this.mipmapFilter : vicuña.LINEAR;
        shark = vicuña.LINEAR;
      }
      if (! sea_lion && typeof leopard === "number" && typeof gerbil === "number")
      {
        crow = this.createTexture2D(0, kangaroo, shark, wallaby, wallaby, vicuña.RGBA, null, 
        leopard, 
        gerbil);
      }
      else
      {
        crow = this.createTexture2D(0, kangaroo, shark, wallaby, wallaby, vicuña.RGBA, sea_lion);
      }
      return crow;
    },
    createTexture2D : function (rail, marten, jay, eland, panther, opossum, shrew, duck, 
    cod, 
    crab, 
    bee, 
    wasp) {
      var stork; // c
      var eel; // T
      var lapwing; // d
      
          crab = crab === undefined || crab === null ? true : crab;
      if (bee === undefined)
      {
        bee = false;
      }
      if (wasp === undefined)
      {
        wasp = false;
      }
      stork = this.gl;
      eel = stork.createTexture();
      stork.activeTexture(stork.TEXTURE0);
      lapwing = stork.getParameter(stork.TEXTURE_BINDING_2D);
      stork.bindTexture(stork.TEXTURE_2D, eel);
      stork.texParameteri(stork.TEXTURE_2D, stork.TEXTURE_MIN_FILTER, marten);
      stork.texParameteri(stork.TEXTURE_2D, stork.TEXTURE_MAG_FILTER, jay);
      stork.texParameteri(stork.TEXTURE_2D, stork.TEXTURE_WRAP_S, panther);
      stork.texParameteri(stork.TEXTURE_2D, stork.TEXTURE_WRAP_T, eland);
      stork.pixelStorei(stork.UNPACK_PREMULTIPLY_ALPHA_WEBGL, crab);
      stork.pixelStorei(stork.UNPACK_FLIP_Y_WEBGL, wasp);
      if (shrew === null || shrew === undefined)
      {
        stork.texImage2D(stork.TEXTURE_2D, rail, opossum, duck, cod, 0, opossum, 
        stork.UNSIGNED_BYTE, 
        null);
      }
      else
      {
        if (! bee)
        {
          duck = shrew.width;
          cod = shrew.height;
        }
        stork.texImage2D(stork.TEXTURE_2D, rail, opossum, opossum, stork.UNSIGNED_BYTE, 
        shrew);
      }
      if (mink(duck, cod))
      {
        stork.generateMipmap(stork.TEXTURE_2D);
      }
      if (lapwing)
      {
        stork.bindTexture(stork.TEXTURE_2D, lapwing);
      }
      eel.isAlphaPremultiplied = crab;
      eel.isRenderTexture = false;
      eel.width = duck;
      eel.height = cod;
      eel.glIndex = 0;
      eel.glIndexCounter = -1;
      return eel;
    },
    createFramebuffer : function (guinea_pig, ibis, camel, lyrebird) {
      var donkey; // s
      var clam; // n
      var grasshopper; // a
      var gnu; // u
      var mole; // h
      
          donkey = this.gl;
      clam = donkey.createFramebuffer();
      grasshopper = 0;
      this.setFramebuffer(clam);
      if (lyrebird)
      {
        gnu = donkey.createRenderbuffer();
        donkey.bindRenderbuffer(donkey.RENDERBUFFER, gnu);
        donkey.renderbufferStorage(donkey.RENDERBUFFER, donkey.DEPTH_STENCIL, guinea_pig, 
        ibis);
        donkey.framebufferRenderbuffer(donkey.FRAMEBUFFER, donkey.DEPTH_STENCIL_ATTACHMENT, 
        donkey.RENDERBUFFER, 
        gnu);
      }
      camel.isRenderTexture = true;
      camel.isAlphaPremultiplied = false;
      donkey.framebufferTexture2D(donkey.FRAMEBUFFER, donkey.COLOR_ATTACHMENT0, donkey.TEXTURE_2D, 
      camel, 
      0);
      grasshopper = donkey.checkFramebufferStatus(donkey.FRAMEBUFFER);
      if (grasshopper !== donkey.FRAMEBUFFER_COMPLETE)
      {
        mole = {
          36054 : "Incomplete Attachment",
          36055 : "Missing Attachment",
          36057 : "Incomplete Dimensions",
          36061 : "Framebuffer Unsupported"
        };
        throw new Error("Framebuffer status: " + mole[grasshopper]);
      }
      clam.renderTexture = camel;
      this.setFramebuffer(null);
      this.resetTextures();
      return clam;
    },
    createProgram : function (penguin, elephant) {
      var dove; // r
      var badger; // i
      var guanaco; // s
      var pig; // n
      
          dove = this.gl;
      badger = dove.createProgram();
      guanaco = dove.createShader(dove.VERTEX_SHADER);
      pig = dove.createShader(dove.FRAGMENT_SHADER);
      dove.shaderSource(guanaco, penguin);
      dove.shaderSource(pig, elephant);
      dove.compileShader(guanaco);
      dove.compileShader(pig);
      if (! dove.getShaderParameter(guanaco, dove.COMPILE_STATUS))
      {
        throw new Error("Vertex Shader failed:\n" + dove.getShaderInfoLog(guanaco));
      }
      if (! dove.getShaderParameter(pig, dove.COMPILE_STATUS))
      {
        throw new Error("Fragment Shader failed:\n" + dove.getShaderInfoLog(pig));
      }
      dove.attachShader(badger, guanaco);
      dove.attachShader(badger, pig);
      dove.linkProgram(badger);
      if (! dove.getProgramParameter(badger, dove.LINK_STATUS))
      {
        throw new Error("Link Program failed:\n" + dove.getProgramInfoLog(badger));
      }
      dove.useProgram(badger);
      return badger;
    },
    createVertexBuffer : function (deer, gazelle) {
      var giraffe; // r
      var rat; // i
      
          giraffe = this.gl;
      rat = giraffe.createBuffer();
      giraffe.bindBuffer(giraffe.ARRAY_BUFFER, rat);
      giraffe.bufferData(giraffe.ARRAY_BUFFER, deer, gazelle);
      giraffe.bindBuffer(giraffe.ARRAY_BUFFER, null);
      return rat;
    },
    createIndexBuffer : function (starling, emu) {
      var bear; // r
      var kudu; // i
      
          bear = this.gl;
      kudu = bear.createBuffer();
      bear.bindBuffer(bear.ELEMENT_ARRAY_BUFFER, kudu);
      bear.bufferData(bear.ELEMENT_ARRAY_BUFFER, starling, emu);
      bear.bindBuffer(bear.ELEMENT_ARRAY_BUFFER, null);
      return kudu;
    },
    deleteTexture : function (fish, tapir) {
      if (tapir)
      {
        this.resetTextures(true);
      }
      if (fish)
      {
        this.gl.deleteTexture(fish);
      }
      return this;
    },
    deleteFramebuffer : function (jellyfish) {
      if (jellyfish)
      {
        this.gl.deleteFramebuffer(jellyfish);
        raccoon(this.fboStack, jellyfish);
        if (this.currentFramebuffer === jellyfish)
        {
          this.currentFramebuffer = null;
        }
      }
      return this;
    },
    deleteProgram : function (loris) {
      if (loris)
      {
        this.gl.deleteProgram(loris);
      }
      return this;
    },
    deleteBuffer : function (coyote) {
      this.gl.deleteBuffer(coyote);
      return this;
    },
    preRenderCamera : function (stinkbug) {
      var toad; // t
      var chimpanzee; // r
      var louse; // i
      var turkey; // s
      var hyena; // n
      var sparrow; // a
      
          toad = stinkbug.x;
      chimpanzee = stinkbug.y;
      louse = stinkbug.width;
      turkey = stinkbug.height;
      hyena = stinkbug.backgroundColor;
      stinkbug.emit(hamster.PRE_RENDER, stinkbug);
      this.pipelines.preBatchCamera(stinkbug);
      this.pushScissor(toad, chimpanzee, louse, turkey);
      if (stinkbug.mask)
      {
        this.currentCameraMask.mask = stinkbug.mask;
        this.currentCameraMask.camera = stinkbug._maskCamera;
        stinkbug.mask.preRenderWebGL(this, stinkbug, stinkbug._maskCamera);
      }
      if (hyena.alphaGL > 0)
      {
        sparrow = this.pipelines.setMulti();
        sparrow.drawFillRect(toad, chimpanzee, louse, turkey, squid.getTintFromFloats(hyena.blueGL, hyena.greenGL, hyena.redGL, 1), 
        hyena.alphaGL);
      }
    },
    getCurrentStencilMask : function () {
      var hippopotamus; // e
      var cockroach; // t
      var scorpion; // r
      
          hippopotamus = null;
      cockroach = this.maskStack;
      scorpion = this.currentCameraMask;
      if (cockroach.length > 0)
      {
        hippopotamus = cockroach[cockroach.length - 1];
      }
      else
        if (scorpion.mask && scorpion.mask.isStencil)
        {
          hippopotamus = scorpion;
        }
      return hippopotamus;
    },
    postRenderCamera : function (squirrel) {
      var yak; // t
      var gorilla; // r
      var anteater; // i
      
          yak = squirrel.flashEffect;
      gorilla = squirrel.fadeEffect;
      if (yak.isRunning || (gorilla.isRunning || gorilla.isComplete))
      {
        anteater = this.pipelines.setMulti();
        yak.postRenderWebGL(anteater, squid.getTintFromFloats);
        gorilla.postRenderWebGL(anteater, squid.getTintFromFloats);
      }
      squirrel.dirty = false;
      this.popScissor();
      if (squirrel.mask)
      {
        this.currentCameraMask.mask = null;
        squirrel.mask.postRenderWebGL(this, squirrel._maskCamera);
      }
      this.pipelines.postBatchCamera(squirrel);
      squirrel.emit(hamster.POST_RENDER, squirrel);
    },
    preRender : function () {
      var ant; // e
      var spider; // t
      
          if (this.contextLost)
      {
        return;
      }
      ant = this.gl;
      ant.bindFramebuffer(ant.FRAMEBUFFER, null);
      if (this.config.clearBeforeRender)
      {
        spider = this.config.backgroundColor;
        ant.clearColor(spider.redGL, spider.greenGL, spider.blueGL, spider.alphaGL);
        ant.clear(ant.COLOR_BUFFER_BIT | ant.DEPTH_BUFFER_BIT | ant.STENCIL_BUFFER_BIT);
      }
      ant.enable(ant.SCISSOR_TEST);
      this.currentScissor = this.defaultScissor;
      this.scissorStack.length = 0;
      this.scissorStack.push(this.currentScissor);
      if (this.game.scene.customViewports)
      {
        ant.scissor(0, this.drawingBufferHeight - this.height, this.width, 
        this.height);
      }
      this.currentMask.mask = null;
      this.currentCameraMask.mask = null;
      this.maskStack.length = 0;
      this.textureFlush = 0;
      this.emit(llama.PRE_RENDER);
    },
    render : function (parrot, fox, elephant_seal) {
      var dotterel; // i
      var rhinoceros; // s
      var falcon; // n
      var pigeon; // a
      var flamingo; // u
      var jackal; // h
      
          if (this.contextLost)
      {
        return;
      }
      dotterel = fox.length;
      this.emit(llama.RENDER, parrot, elephant_seal);
      this.preRenderCamera(elephant_seal);
      if (dotterel === 0)
      {
        this.setBlendMode(ibex.BlendModes.NORMAL);
        this.postRenderCamera(elephant_seal);
        return;
      }
      this.currentType = "";
      rhinoceros = this.currentMask;
      {
        falcon = 0;
        for (; falcon < dotterel; falcon++)
        {
          this.finalType = falcon === dotterel - 1;
          pigeon = fox[falcon];
          flamingo = pigeon.mask;
          rhinoceros = this.currentMask;
          if (rhinoceros.mask && rhinoceros.mask !== flamingo)
          {
            rhinoceros.mask.postRenderWebGL(this, rhinoceros.camera);
          }
          if (flamingo && rhinoceros.mask !== flamingo)
          {
            flamingo.preRenderWebGL(this, pigeon, elephant_seal);
          }
          if (pigeon.blendMode !== this.currentBlendMode)
          {
            this.setBlendMode(pigeon.blendMode);
          }
          jackal = pigeon.type;
          if (jackal !== this.currentType)
          {
            this.newType = true;
            this.currentType = jackal;
          }
          if (! this.finalType)
          {
            this.nextTypeMatch = fox[falcon + 1].type === this.currentType;
          }
          else
          {
            this.nextTypeMatch = false;
          }
          pigeon.renderWebGL(this, pigeon, elephant_seal);
          this.newType = false;
        }
      }
      rhinoceros = this.currentMask;
      if (rhinoceros.mask)
      {
        rhinoceros.mask.postRenderWebGL(this, rhinoceros.camera);
      }
      this.setBlendMode(ibex.BlendModes.NORMAL);
      this.postRenderCamera(elephant_seal);
    },
    postRender : function () {
      var fly; // e
      
          if (this.contextLost)
      {
        return;
      }
      this.flush();
      this.emit(llama.POST_RENDER);
      fly = this.snapshotState;
      if (fly.callback)
      {
        rook(this.canvas, fly);
        fly.callback = null;
      }
      if (this.textureFlush > 0)
      {
        this.startActiveTexture++;
        this.currentActiveTexture = 1;
      }
    },
    snapshot : function (vulture, lobster, buffalo) {
      return this.snapshotArea(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight, 
      vulture, 
      lobster, 
      buffalo);
    },
    snapshotArea : function (peafowl, narwhal, ferret, ox, polar_bear, crocodile, 
    curlew) {
      var sardine; // u
      
          sardine = this.snapshotState;
      sardine.callback = polar_bear;
      sardine.type = crocodile;
      sardine.encoder = curlew;
      sardine.getPixel = false;
      sardine.x = peafowl;
      sardine.y = narwhal;
      sardine.width = Math.min(ferret, this.gl.drawingBufferWidth);
      sardine.height = Math.min(ox, this.gl.drawingBufferHeight);
      return this;
    },
    snapshotPixel : function (herring, red_panda, rabbit) {
      this.snapshotArea(herring, red_panda, 1, 1, rabbit);
      this.snapshotState.getPixel = true;
      return this;
    },
    snapshotFramebuffer : function (zebra, dolphin, salamander, gull, alpaca, ostrich, manatee, 
    red_deer, 
    barracuda, 
    hare, 
    hedgehog) {
      var porcupine; // l
      var seal; // c
      
          if (alpaca === undefined)
      {
        alpaca = false;
      }
      if (ostrich === undefined)
      {
        ostrich = 0;
      }
      if (manatee === undefined)
      {
        manatee = 0;
      }
      if (red_deer === undefined)
      {
        red_deer = dolphin;
      }
      if (barracuda === undefined)
      {
        barracuda = salamander;
      }
      porcupine = this.currentFramebuffer;
      this.snapshotArea(ostrich, manatee, red_deer, barracuda, gull, hare, hedgehog);
      seal = this.snapshotState;
      seal.getPixel = alpaca;
      seal.isFramebuffer = true;
      seal.bufferWidth = dolphin;
      seal.bufferHeight = salamander;
      this.setFramebuffer(zebra);
      rook(this.canvas, seal);
      this.setFramebuffer(porcupine);
      seal.callback = null;
      seal.isFramebuffer = false;
      return this;
    },
    canvasToTexture : function (lark, wren, partridge, heron) {
      if (partridge === undefined)
      {
        partridge = false;
      }
      if (heron === undefined)
      {
        heron = false;
      }
      if (! wren)
      {
        return this.createCanvasTexture(lark, partridge, heron);
      }
      else
      {
        return this.updateCanvasTexture(lark, wren, heron);
      }
    },
    createCanvasTexture : function (raccoon_1, hamster_1, chinchilla_1) {
      var ibex_1; // i
      var boar_1; // s
      var llama_1; // n
      var capybara_1; // a
      var mink_1; // u
      var prairie_dog_1; // h
      var mantis_1; // f
      
          if (hamster_1 === undefined)
      {
        hamster_1 = false;
      }
      if (chinchilla_1 === undefined)
      {
        chinchilla_1 = false;
      }
      ibex_1 = this.gl;
      boar_1 = ibex_1.NEAREST;
      llama_1 = ibex_1.NEAREST;
      capybara_1 = raccoon_1.width;
      mink_1 = raccoon_1.height;
      prairie_dog_1 = ibex_1.CLAMP_TO_EDGE;
      mantis_1 = mink(capybara_1, mink_1);
      if (! hamster_1 && mantis_1)
      {
        prairie_dog_1 = ibex_1.REPEAT;
      }
      if (this.config.antialias)
      {
        boar_1 = mantis_1 ? this.mipmapFilter : ibex_1.LINEAR;
        llama_1 = ibex_1.LINEAR;
      }
      return this.createTexture2D(0, boar_1, llama_1, prairie_dog_1, prairie_dog_1, ibex_1.RGBA, 
      raccoon_1, 
      capybara_1, 
      mink_1, 
      true, 
      false, 
      chinchilla_1);
    },
    updateCanvasTexture : function (dogfish_1, snail_1, dunlin_1) {
      var termite_1; // i
      var squid_1; // s
      var rook_1; // n
      var woodcock_1; // a
      
          if (dunlin_1 === undefined)
      {
        dunlin_1 = false;
      }
      termite_1 = this.gl;
      squid_1 = dogfish_1.width;
      rook_1 = dogfish_1.height;
      if (squid_1 > 0 && rook_1 > 0)
      {
        termite_1.activeTexture(termite_1.TEXTURE0);
        woodcock_1 = termite_1.getParameter(termite_1.TEXTURE_BINDING_2D);
        termite_1.bindTexture(termite_1.TEXTURE_2D, snail_1);
        termite_1.pixelStorei(termite_1.UNPACK_FLIP_Y_WEBGL, dunlin_1);
        termite_1.pixelStorei(termite_1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        termite_1.texImage2D(termite_1.TEXTURE_2D, 0, termite_1.RGBA, termite_1.RGBA, 
        termite_1.UNSIGNED_BYTE, 
        dogfish_1);
        snail_1.width = squid_1;
        snail_1.height = rook_1;
        if (woodcock_1)
        {
          termite_1.bindTexture(termite_1.TEXTURE_2D, woodcock_1);
        }
      }
      return snail_1;
    },
    createVideoTexture : function (antelope_1, goose_1, baboon_1) {
      var bat_1; // i
      var bison_1; // s
      var tarsier_1; // n
      var cat_1; // a
      var weasel_1; // u
      var beaver_1; // h
      var komodo_dragon_1; // f
      
          if (goose_1 === undefined)
      {
        goose_1 = false;
      }
      if (baboon_1 === undefined)
      {
        baboon_1 = false;
      }
      bat_1 = this.gl;
      bison_1 = bat_1.NEAREST;
      tarsier_1 = bat_1.NEAREST;
      cat_1 = antelope_1.videoWidth;
      weasel_1 = antelope_1.videoHeight;
      beaver_1 = bat_1.CLAMP_TO_EDGE;
      komodo_dragon_1 = mink(cat_1, weasel_1);
      if (! goose_1 && komodo_dragon_1)
      {
        beaver_1 = bat_1.REPEAT;
      }
      if (this.config.antialias)
      {
        bison_1 = komodo_dragon_1 ? this.mipmapFilter : bat_1.LINEAR;
        tarsier_1 = bat_1.LINEAR;
      }
      return this.createTexture2D(0, bison_1, tarsier_1, beaver_1, beaver_1, bat_1.RGBA, 
      antelope_1, 
      cat_1, 
      weasel_1, 
      true, 
      true, 
      baboon_1);
    },
    updateVideoTexture : function (armadillo_1, woodpecker_1, quelea_1) {
      var butterfly_1; // i
      var oyster_1; // s
      var stingray_1; // n
      var dragonfly_1; // a
      
          if (quelea_1 === undefined)
      {
        quelea_1 = false;
      }
      butterfly_1 = this.gl;
      oyster_1 = armadillo_1.videoWidth;
      stingray_1 = armadillo_1.videoHeight;
      if (oyster_1 > 0 && stingray_1 > 0)
      {
        butterfly_1.activeTexture(butterfly_1.TEXTURE0);
        dragonfly_1 = butterfly_1.getParameter(butterfly_1.TEXTURE_BINDING_2D);
        butterfly_1.bindTexture(butterfly_1.TEXTURE_2D, woodpecker_1);
        butterfly_1.pixelStorei(butterfly_1.UNPACK_FLIP_Y_WEBGL, quelea_1);
        butterfly_1.texImage2D(butterfly_1.TEXTURE_2D, 0, butterfly_1.RGBA, butterfly_1.RGBA, 
        butterfly_1.UNSIGNED_BYTE, 
        armadillo_1);
        woodpecker_1.width = oyster_1;
        woodpecker_1.height = stingray_1;
        if (dragonfly_1)
        {
          butterfly_1.bindTexture(butterfly_1.TEXTURE_2D, dragonfly_1);
        }
      }
      return woodpecker_1;
    },
    setTextureFilter : function (finch_1, meerkat_1) {
      var alligator_1; // r
      var kookabura_1; // i
      var human_1; // s
      
          alligator_1 = this.gl;
      kookabura_1 = [alligator_1.LINEAR, alligator_1.NEAREST, ][meerkat_1];
      alligator_1.activeTexture(alligator_1.TEXTURE0);
      human_1 = alligator_1.getParameter(alligator_1.TEXTURE_BINDING_2D);
      alligator_1.bindTexture(alligator_1.TEXTURE_2D, finch_1);
      alligator_1.texParameteri(alligator_1.TEXTURE_2D, alligator_1.TEXTURE_MIN_FILTER, 
      kookabura_1);
      alligator_1.texParameteri(alligator_1.TEXTURE_2D, alligator_1.TEXTURE_MAG_FILTER, 
      kookabura_1);
      if (human_1)
      {
        alligator_1.bindTexture(alligator_1.TEXTURE_2D, human_1);
      }
      return this;
    },
    getMaxTextureSize : function () {
      return this.config.maxTextureSize;
    },
    destroy : function () {
      var reindeer_1; // e
      var elk_1; // t
      var ape_1; // r
      
          this.canvas.removeEventListener("webglcontextlost", this.contextLostHandler, false);
      this.canvas.removeEventListener("webglcontextrestored", this.contextRestoredHandler, 
      false);
      reindeer_1 = this.gl;
      elk_1 = this.tempTextures;
      {
        ape_1 = 0;
        for (; ape_1 < elk_1.length; ape_1++)
        {
          reindeer_1.deleteTexture(elk_1[ape_1]);
        }
      }
      this.pipelines.destroy();
      this.removeAllListeners();
      this.fboStack = [];
      this.maskStack = [];
      this.extensions = {
        
      };
      this.textureIndexes = [];
      this.gl = null;
      this.game = null;
      this.canvas = null;
      this.contextLost = true;
      this.currentMask = null;
      this.currentCameraMask = null;
    }
  });
  module.exports = woodcock;
  