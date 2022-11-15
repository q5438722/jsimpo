"use strict";
  var raccoon; // convert
  var hamster; // combine
  var chinchilla; // foo
  var ibex; // bar
  var boar; // fooComment
  var llama; // barComment
  var capybara; // fooFile
  var mink; // barFile
  var prairie_dog; // offset
  var mantis; // base64
  var dogfish; // sm
  
  raccoon = require("convert-source-map");
  hamster = require("..");
  chinchilla = {
    version : 3,
    file : "foo.js",
    sourceRoot : "",
    sources : ["foo.coffee", ],
    names : [],
    mappings : ";AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ",
    sourcesContent : ["console.log(require './bar.js')\n", ]
  };
  ibex = {
    version : 3,
    file : "bar.js",
    sourceRoot : "",
    sources : ["bar.coffee", ],
    names : [],
    mappings : ";AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ",
    sourcesContent : ["console.log(alert 'alerts suck')\n", ]
  };
  boar = raccoon.fromObject(chinchilla).toComment();
  llama = raccoon.fromObject(ibex).toComment();
  capybara = {
    source : '(function() {\n\n  console.log(require(\'./bar.js\'));\n\n}).call(this);\n\n' + boar,
    sourceFile : "foo.js"
  };
  mink = {
    source : '(function() {\n\n  console.log(alert(\'alerts suck\'));\n\n}).call(this);\n\n' + llama,
    sourceFile : "bar.js"
  };
  prairie_dog = {
    line : 2
  };
  mantis = hamster.create("bundle.js").addFile(capybara, prairie_dog).addFile(mink, {
    line : prairie_dog.line + 8
  }).base64();
  dogfish = raccoon.fromBase64(mantis).toObject();
  console.log("Combined source maps:\n", dogfish);
  console.log("\nMappings:\n", dogfish.mappings);
  