"use strict";
  function chives(llama, capybara, mink) {
    var prairie_dog; // r
    
      console.log(llama);
    prairie_dog = new ibex.Suite;
    Object.keys(capybara).forEach(function (mantis) {
      prairie_dog.add(mantis, function () {
        capybara[mantis].apply(null, mink);
      });
    });
    prairie_dog.on("cycle", function (dogfish) {
      console.log(String(dogfish.target));
    }).on("complete", function () {
      console.log("Fastest is " + this.filter("fastest").map("name"));
    });
    return prairie_dog;
  }
  var raccoon; // oN
  var hamster; // es6Repeat
  var chinchilla; // current
  var ibex; // Benchmark
  var boar; // fns
  
  raccoon = require("./O(n)");
  hamster = require("./es6Repeat");
  chinchilla = require("../");
  ibex = require("benchmark");
  boar = {
    "O(n)" : raccoon,
    "ES6 Repeat" : hamster,
    Current : chinchilla
  };
  chives("-> pad 100 spaces to str of len 4", boar, ["abcd", 104, " ", ]).run();
  chives("-> pad 10 spaces to str of len 4", boar, ["abcd", 14, " ", ]).run();
  chives("-> pad 9 spaces to str of len 4", boar, ["abcd", 13, " ", ]).run();
  chives("-> pad 100 to str of len 100", boar, ["0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789", 200, " ", ]).run();
  chives("-> pad 10 to str of len 100", boar, ["0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789", 110, " ", ]).run();
  chives("-> pad 9 to str of len 100", boar, ["0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789", 109, " ", ]).run();
  