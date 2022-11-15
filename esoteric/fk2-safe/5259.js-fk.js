  function chives(capybara, mink) {
    return capybara.id < mink.id ? -1 : 1;
  }
  var raccoon; // parser
  var hamster; // test
  var chinchilla; // fs
  var ibex; // path
  var boar; // files
  var llama; // sources
  
  raccoon = require('../');
  hamster = require('tap').test;
  chinchilla = require('fs');
  ibex = require('path');
  boar = {
    main : ibex.join(__dirname, '/files/main.js'),
    foo : ibex.join(__dirname, '/files/foo.js'),
    bar : ibex.join(__dirname, '/files/bar.js')
  };
  llama = Object.keys(boar).reduce(function (prairie_dog, mantis) {
    prairie_dog[mantis] = chinchilla.readFileSync(boar[mantis], 'utf8');
    return prairie_dog;
  }, 
  {
    
  });
  hamster('deps', function (dogfish) {
    var snail; // p
    var dunlin; // rows
    
      dogfish.plan(1);
    snail = raccoon();
    snail.end({
      file : boar.main,
      entry : ! ! []
    });
    dunlin = [];
    snail.on('data', function (termite) {
      dunlin.push(termite);
    });
    snail.on('end', function () {
      dogfish.same(dunlin.sort(cmp), [{
        id : boar.main,
        file : boar.main,
        source : llama.main,
        entry : ! ! [],
        deps : {
          "./foo" : boar.foo
        }
      }, {
        id : boar.foo,
        file : boar.foo,
        source : llama.foo,
        deps : {
          "./bar" : boar.bar
        }
      }, {
        id : boar.bar,
        file : boar.bar,
        source : llama.bar,
        deps : {
          
        }
      }, ].sort(cmp));
    });
  });
  