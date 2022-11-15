  var raccoon; // test
  var hamster; // through
  
  raccoon = require('tape');
  hamster = require('../');
  raccoon('end before close', function (chinchilla) {
    var ibex; // ts
    var boar; // ended
    var llama; // closed
    
      ibex = hamster();
    ibex.autoDestroy = ! [];
    {
      boar = ! [];
      llama = ! [];
    }
    ibex.on('end', function () {
      chinchilla.ok(! llama);
      boar = ! ! [];
    });
    ibex.on('close', function () {
      chinchilla.ok(boar);
    });
    ibex.write(1);
    ibex.write(! + [] + ! + []);
    ibex.write(3);
    ibex.end();
    chinchilla.ok(boar);
    chinchilla.notOk(llama);
    ibex.destroy();
    chinchilla.ok(llama);
    chinchilla.end();
  });
  