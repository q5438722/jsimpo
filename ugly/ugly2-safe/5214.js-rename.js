"use strict";
  function chives(prairie_dog) {
    var mantis; // r
    
      mantis = hamster.fromSource(prairie_dog);
    return mantis ? mantis.toObject() : null;
  }
  function bean_sprout(dogfish) {
    return dogfish.sourcesContent && ! ! dogfish.sourcesContent[0];
  }
  function broccoflower(snail, dunlin) {
    this.generator = ibex({
      file : snail || "generated.js",
      sourceRoot : dunlin
    });
  }
  var raccoon; // path
  var hamster; // convert
  var chinchilla; // memoize
  var ibex; // createGenerator
  var boar; // pathIsAbsolute
  var llama; // mappingsFromMap
  var capybara; // protocolRx
  var mink; // rebaseRelativePath
  
  raccoon = require("path");
  hamster = require("convert-source-map");
  chinchilla = require("lodash.memoize");
  ibex = require("inline-source-map");
  boar = require("./lib/path-is-absolute");
  llama = require("./lib/mappings-from-map");
  capybara = new RegExp("^[a-z]+:\\/\\/", "");
  mink = chinchilla(function (termite, squid, rook) {
    var woodcock; // n
    
      if (! rook)
    {
      return rook;
    }
    woodcock = squid ? raccoon.join(squid, rook) : rook;
    woodcock = woodcock.replace(new RegExp("\\\\", "g"), "/");
    termite = termite.replace(new RegExp("\\\\", "g"), "/");
    if (termite === woodcock || boar(woodcock) || capybara.test(woodcock))
    {
      return woodcock;
    }
    return raccoon.join(raccoon.dirname(termite), woodcock).replace(new RegExp("\\\\", "g"), "/");
  }, 
  function (antelope, goose, baboon) {
    return antelope + "::" + goose + "::" + baboon;
  });
  Combiner.prototype._addGeneratedMap = function (bat, bison, tarsier) {
    this.generator.addGeneratedMappings(bat, bison, tarsier);
    this.generator.addSourceContent(bat, bison);
    return this;
  };
  Combiner.prototype._addExistingMap = function (cat, weasel, beaver, komodo_dragon) {
    var armadillo; // o
    var woodpecker; // a
    var quelea; // i
    
      armadillo = llama(beaver);
    {
      {
        woodpecker = 0;
        quelea = beaver.sources.length;
      }
      for (; woodpecker < quelea; woodpecker++)
      {
        if (! beaver.sourcesContent)
          continue;
        this.generator.addSourceContent(mink(cat, beaver.sourceRoot, beaver.sources[woodpecker]), 
        beaver.sourcesContent[woodpecker]);
      }
    }
    armadillo.forEach(function (butterfly) {
      this.generator.addMappings(mink(cat, null, butterfly.source), [butterfly, ], komodo_dragon);
    }, 
    this);
    return this;
  };
  Combiner.prototype.addFile = function (oyster, stingray) {
    var dragonfly; // t
    
      stingray = stingray || {
      
    };
    if (! stingray.hasOwnProperty("line"))
      stingray.line = 0;
    if (! stingray.hasOwnProperty("column"))
      stingray.column = 0;
    dragonfly = chives(oyster.source);
    return dragonfly && bean_sprout(dragonfly) ? this._addExistingMap(oyster.sourceFile, oyster.source, dragonfly, stingray) : this._addGeneratedMap(oyster.sourceFile, oyster.source, stingray);
  };
  Combiner.prototype.base64 = function () {
    return this.generator.base64Encode();
  };
  Combiner.prototype.comment = function () {
    return this.generator.inlineMappingUrl();
  };
  exports.create = function (finch, meerkat) {
    return new broccoflower(finch, meerkat);
  };
  exports.removeComments = function (alligator) {
    if (! alligator.replace)
      return alligator;
    return alligator.replace(hamster.commentRegex, "").replace(hamster.mapFileCommentRegex, "");
  };
  