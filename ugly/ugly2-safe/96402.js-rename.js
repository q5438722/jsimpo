  var raccoon; // mkdirp
  var hamster; // path
  var chinchilla; // fs
  var ibex; // exists
  var boar; // test
  var llama; // _0777
  var capybara; // _0755
  
  raccoon = require("../");
  hamster = require("path");
  chinchilla = require("fs");
  ibex = chinchilla.exists || hamster.exists;
  boar = require("tap").test;
  llama = parseInt("0777", 8);
  capybara = parseInt("0755", 8);
  boar("sync perm", function (mink) {
    var prairie_dog; // r
    
      mink.plan(4);
    prairie_dog = "/tmp/" + (Math.random() * 1073741824).toString(16) + ".json";
    raccoon.sync(prairie_dog, capybara);
    ibex(prairie_dog, function (mantis) {
      mink.ok(mantis, "file created");
      chinchilla.stat(prairie_dog, function (dogfish, snail) {
        mink.ifError(dogfish);
        mink.equal(snail.mode & llama, capybara);
        mink.ok(snail.isDirectory(), "target not a directory");
      });
    });
  });
  boar("sync root perm", function (dunlin) {
    dunlin.plan(3);
    raccoon.sync("/tmp", capybara);
    ibex("/tmp", function (termite) {
      dunlin.ok(termite, "file created");
      chinchilla.stat("/tmp", function (squid, rook) {
        dunlin.ifError(squid);
        dunlin.ok("/tmp".isDirectory(), "target not a directory");
      });
    });
  });
  