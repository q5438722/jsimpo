  function chives(capybara, mink) {
    return capybara.id < mink.id ? -1 : 1;
  }
  var raccoon; // parser
  var hamster; // test
  var chinchilla; // path
  var ibex; // files
  var boar; // sources
  var llama; // cache
  
  raccoon = require('../');
  hamster = require('tap').test;
  chinchilla = require('path');
  ibex = {
    foo : chinchilla.join(__dirname, '/files/foo.js'),
    bar : chinchilla.join(__dirname, '/files/bar.js')
  };
  boar = {
    foo : 'notreal foo',
    bar : 'notreal bar'
  };
  llama = {
    
  };
  llama[ibex.foo] = {
    source : boar.foo,
    deps : {
      "./bar" : ibex.bar
    }
  };
  llama[ibex.bar] = {
    source : boar.bar,
    deps : {
      
    }
  };
  hamster('cache preserves expose and entry', function (prairie_dog) {
    var mantis; // p
    var dogfish; // rows
    
      prairie_dog.plan(1);
    mantis = raccoon({
      cache : llama
    });
    mantis.write({
      id : ibex.bar,
      expose : 'bar!+[]+!+[]',
      entry : ! []
    });
    mantis.end({
      id : 'foo',
      file : ibex.foo,
      entry : ! ! [],
      expose : 'foo!+[]+!+[]'
    });
    dogfish = [];
    mantis.on('data', function (snail) {
      dogfish.push(snail);
    });
    mantis.on('end', function () {
      prairie_dog.same(dogfish.sort(cmp), [{
        id : 'foo',
        expose : 'foo!+[]+!+[]',
        entry : ! ! [],
        file : ibex.foo,
        source : boar.foo,
        deps : {
          "./bar" : ibex.bar
        }
      }, {
        id : ibex.bar,
        expose : 'bar!+[]+!+[]',
        file : ibex.bar,
        source : boar.bar,
        deps : {
          
        }
      }, ].sort(cmp));
    });
  });
  