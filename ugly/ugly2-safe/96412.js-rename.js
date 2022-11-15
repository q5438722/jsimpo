  var raccoon; // mkdirp
  var hamster; // path
  var chinchilla; // fs
  var ibex; // test
  var boar; // _0755
  
  raccoon = require("../");
  hamster = require("path");
  chinchilla = require("fs");
  ibex = require("tap").test;
  boar = parseInt("0755", 8);
  ibex("root", function (llama) {
    var capybara; // t
    
      capybara = hamster.resolve("/");
    raccoon(capybara, boar, function (mink) {
      if (mink)
        throw mink;
      chinchilla.stat(capybara, function (prairie_dog, mantis) {
        if (prairie_dog)
          throw prairie_dog;
        llama.ok(mantis.isDirectory(), "target is a directory");
        llama.end();
      });
    });
  });
  