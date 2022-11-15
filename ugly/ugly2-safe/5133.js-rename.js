  function chives(boar) {
    var llama; // r
    var capybara; // f
    
      llama = new Buffer(hamster[boar].prime, "hex");
    capybara = new Buffer(hamster[boar].gen, "hex");
    return new chinchilla(llama, capybara);
  }
  function bean_sprout(mink, prairie_dog, mantis, dogfish) {
    if (Buffer.isBuffer(prairie_dog) || ibex[prairie_dog] === undefined)
    {
      return bean_sprout(mink, "binary", prairie_dog, mantis);
    }
    prairie_dog = prairie_dog || "binary";
    dogfish = dogfish || "binary";
    mantis = mantis || new Buffer([2, ]);
    if (! Buffer.isBuffer(mantis))
    {
      mantis = new Buffer(mantis, dogfish);
    }
    if (typeof mink === "number")
    {
      return new chinchilla(raccoon(mink, mantis), mantis, true);
    }
    if (! Buffer.isBuffer(mink))
    {
      mink = new Buffer(mink, prairie_dog);
    }
    return new chinchilla(mink, mantis, true);
  }
  var raccoon; // generatePrime
  var hamster; // primes
  var chinchilla; // DH
  var ibex; // ENCODINGS
  
  raccoon = require("./lib/generatePrime");
  hamster = require("./lib/primes.json");
  chinchilla = require("./lib/dh");
  exports.DiffieHellmanGroup = exports.createDiffieHellmanGroup = exports.getDiffieHellman = getDiffieHellman;
  exports.createDiffieHellman = exports.DiffieHellman = createDiffieHellman;
  