  var raccoon; // Class
  var hamster; // FileTypesManager
  var chinchilla; // GetFastValue
  var ibex; // ImageFile
  var boar; // IsPlainObject
  var llama; // JSONFile
  var capybara; // MultiFile
  var mink; // MultiAtlasFile
  
  raccoon = require("../../utils/Class");
  hamster = require("../FileTypesManager");
  chinchilla = require("../../utils/object/GetFastValue");
  ibex = require("./ImageFile.js");
  boar = require("../../utils/object/IsPlainObject");
  llama = require("./JSONFile.js");
  capybara = require("../MultiFile.js");
  mink = new raccoon({
    Extends : capybara,
    initialize : function e(prairie_dog, mantis, dogfish, snail, dunlin, termite, 
    squid) {
      var rook; // n
      var woodcock; // h
      
          if (boar(mantis))
      {
        rook = mantis;
        mantis = chinchilla(rook, "key");
        if (chinchilla(rook, "url", false))
        {
          dogfish = chinchilla(rook, "url");
        }
        else
        {
          dogfish = chinchilla(rook, "atlasURL");
        }
        termite = chinchilla(rook, "xhrSettings");
        snail = chinchilla(rook, "path");
        dunlin = chinchilla(rook, "baseURL");
        squid = chinchilla(rook, "textureXhrSettings");
      }
      woodcock = new llama(prairie_dog, mantis, dogfish, termite);
      capybara.call(this, prairie_dog, "multiatlas", mantis, [woodcock, ]);
      this.config.path = snail;
      this.config.baseURL = dunlin;
      this.config.textureXhrSettings = squid;
    },
    onFileComplete : function (antelope) {
      var goose; // t
      var baboon; // a
      var bat; // i
      var bison; // s
      var tarsier; // r
      var cat; // l
      var weasel; // u
      var beaver; // n
      var komodo_dragon; // h
      var armadillo; // f
      var woodpecker; // F
      var quelea; // v
      var butterfly; // o
      var oyster; // d
      var stingray; // g
      var dragonfly; // p
      
          goose = this.files.indexOf(antelope);
      if (goose !== -1)
      {
        this.pending--;
        if (antelope.type === "json" && antelope.data.hasOwnProperty("textures"))
        {
          baboon = antelope.data.textures;
          bat = this.config;
          bison = this.loader;
          tarsier = bison.baseURL;
          cat = bison.path;
          weasel = bison.prefix;
          beaver = chinchilla(bat, "baseURL", this.baseURL);
          komodo_dragon = chinchilla(bat, "path", this.path);
          armadillo = chinchilla(bat, "prefix", this.prefix);
          woodpecker = chinchilla(bat, "textureXhrSettings");
          bison.setBaseURL(beaver);
          bison.setPath(komodo_dragon);
          bison.setPrefix(armadillo);
          {
            quelea = 0;
            for (; quelea < baboon.length; quelea++)
            {
              butterfly = baboon[quelea].image;
              oyster = "MA" + this.multiKeyIndex + "_" + butterfly;
              stingray = new ibex(bison, oyster, butterfly, woodpecker);
              this.addToMultiFile(stingray);
              bison.addFile(stingray);
              if (baboon[quelea].normalMap)
              {
                dragonfly = new ibex(bison, oyster, baboon[quelea].normalMap, woodpecker);
                dragonfly.type = "normalMap";
                stingray.setLink(dragonfly);
                this.addToMultiFile(dragonfly);
                bison.addFile(dragonfly);
              }
            }
          }
          bison.setBaseURL(tarsier);
          bison.setPath(cat);
          bison.setPrefix(weasel);
        }
      }
    },
    addToCache : function () {
      var finch; // e
      var meerkat; // t
      var alligator; // a
      var kookabura; // i
      var human; // s
      var reindeer; // r
      var elk; // l
      var ape; // u
      var dinosaur; // n
      var kouprey; // h
      var echidna; // f
      
          if (this.isReadyToProcess())
      {
        finch = this.files[0];
        meerkat = [];
        alligator = [];
        kookabura = [];
        {
          human = 1;
          for (; human < this.files.length; human++)
          {
            reindeer = this.files[human];
            if (reindeer.type === "normalMap")
            {
              continue;
            }
            elk = reindeer.key.indexOf("_");
            ape = reindeer.key.substr(elk + 1);
            dinosaur = reindeer.data;
            {
              kouprey = 0;
              for (; kouprey < finch.data.textures.length; kouprey++)
              {
                echidna = finch.data.textures[kouprey];
                if (echidna.image === ape)
                {
                  alligator.push(dinosaur);
                  meerkat.push(echidna);
                  if (reindeer.linkFile)
                  {
                    kookabura.push(reindeer.linkFile.data);
                  }
                  break;
                }
              }
            }
          }
        }
        if (kookabura.length === 0)
        {
          kookabura = undefined;
        }
        this.loader.textureManager.addAtlasJSONArray(this.key, alligator, meerkat, kookabura);
        this.complete = true;
        for (human = 0; human < this.files.length; human++)
        {
          this.files[human].pendingDestroy();
        }
      }
    }
  });
  hamster.register("multiatlas", function (owl, gaur, locust, magpie, snake) {
    var hummingbird; // r
    var sheep; // l
    
      if (Array.isArray(owl))
    {
      sheep = 0;
      for (; sheep < owl.length; sheep++)
      {
        hummingbird = new mink(this, owl[sheep]);
        this.addFile(hummingbird.files);
      }
    }
    else
    {
      hummingbird = new mink(this, owl, gaur, locust, magpie, snake);
      this.addFile(hummingbird.files);
    }
    return this;
  });
  module.exports = mink;
  