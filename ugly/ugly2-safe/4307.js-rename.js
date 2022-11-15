  var raccoon; // browserify
  var hamster; // vm
  var chinchilla; // test
  var ibex; // fs
  
  raccoon = require("../");
  hamster = require("vm");
  chinchilla = require("tap").test;
  ibex = require("fs");
  chinchilla("stream", function (boar) {
    var llama; // r
    var capybara; // e
    
      boar.plan(2);
    llama = ibex.createReadStream(__dirname + "/stream/main.js");
    capybara = raccoon(llama, {
      basedir : __dirname + "/stream"
    });
    capybara.bundle(function (mink, prairie_dog) {
      hamster.runInNewContext(prairie_dog, {
        t : boar
      });
    });
  });
  