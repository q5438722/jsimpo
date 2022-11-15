"use strict";
  function chives(boar, llama) {
    var capybara; // t
    
      capybara = "<" + boar + ">";
    "string" === typeof llama.children && (capybara = capybara + llama.children);
    return Buffer.from(capybara + ("</" + boar + ">"), "utf8");
  }
  function bean_sprout(mink) {
    var prairie_dog; // e
    var mantis; // t
    
      {
      prairie_dog = mink.destination;
      mantis = mink.completedChunks;
    }
    mink.completedChunks = [];
    prairie_dog.cork();
    try {
      for (mink = 0; mink < mantis.length; mink++)
        prairie_dog.write(mantis[mink]);
    }
    finally {
      prairie_dog.uncork();
    }
    prairie_dog.end();
  }
  function broccoflower(dogfish) {
    dogfish.flowing = true;
    setImmediate(function () {
      var snail; // n
      var dunlin; // t
      
          snail = dogfish.children;
      dogfish.children = null;
      if (! snail || snail.$$typeof === raccoon)
      {
        dunlin = snail.type;
        snail = snail.props;
        "string" === typeof dunlin && (dogfish.completedChunks.push(chives(dunlin, snail)), 
        dogfish.flowing && bean_sprout(dogfish), 
        dunlin = dogfish.destination, 
        "function" === typeof dunlin.flush && dunlin.flush());
      }
    });
  }
  function green_bean(termite, squid) {
    return function () {
      squid.flowing = false;
      bean_sprout(squid);
    };
  }
  var raccoon; // e
  var hamster; // k
  var chinchilla; // l
  var ibex; // m
  
  {
    hamster = {
      pipeToNodeWritable : function (rook, woodcock) {
        rook = {
          destination : woodcock,
          children : rook,
          completedChunks : [],
          flowing : false
        };
        woodcock.on("drain", green_bean(woodcock, rook));
        broccoflower(rook);
      }
    };
    chinchilla = {
      default : hamster
    };
    ibex = chinchilla && hamster || chinchilla;
  }
  module.exports = ibex.default || ibex;
  