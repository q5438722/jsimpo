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
  boar("rel", function (mink) {
    var prairie_dog; // r
    var mantis; // t
    var dogfish; // o
    var snail; // e
    var dunlin; // i
    
      mink.plan(5);
    prairie_dog = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    mantis = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    dogfish = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    snail = process.cwd();
    process.chdir("/tmp");
    dunlin = [prairie_dog, mantis, dogfish, ].join("/");
    raccoon(dunlin, capybara, function (termite) {
      mink.ifError(termite);
      ibex(dunlin, function (squid) {
        mink.ok(squid, "file created");
        chinchilla.stat(dunlin, function (rook, woodcock) {
          mink.ifError(rook);
          process.chdir(snail);
          mink.equal(woodcock.mode & llama, capybara);
          mink.ok(woodcock.isDirectory(), "target not a directory");
        });
      });
    });
  });
  