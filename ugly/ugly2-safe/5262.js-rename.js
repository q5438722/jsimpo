  var raccoon; // mdeps
  var hamster; // test
  var chinchilla; // JSONStream
  var ibex; // packer
  var boar; // concat
  var llama; // path
  
  raccoon = require("../");
  hamster = require("tap").test;
  chinchilla = require("JSONStream");
  ibex = require("browser-pack");
  boar = require("concat-stream");
  llama = require("path");
  hamster("cycle", function (capybara) {
    var mink; // e
    var prairie_dog; // a
    
      capybara.plan(1);
    mink = raccoon();
    mink.end(llama.join(__dirname, "/cycle/main.js"));
    prairie_dog = ibex();
    mink.pipe(chinchilla.stringify()).pipe(prairie_dog).pipe(boar(function (mantis) {
      Function("console", mantis.toString("utf8"))({
        log : function (dogfish) {
          capybara.equal(dogfish, 333);
        }
      });
    }));
  });
  