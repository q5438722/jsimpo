  var raccoon; // test
  var hamster; // pack
  
  raccoon = require('tap').test;
  hamster = require('../');
  raccoon('pack', function (chinchilla) {
    var ibex; // p
    var boar; // src
    
      chinchilla.plan(4);
    ibex = hamster();
    boar = '';
    ibex.on('data', function (llama) {
      boar = '' + llama;
    });
    ibex.on('end', function () {
      var capybara; // r
      
          capybara = []["filter"](['T', ], 'return ' + boar)(chinchilla);
      chinchilla.equal(capybara('xyz')(5), 555);
      chinchilla.equal(capybara('xyz')(5), 555);
    });
    ibex.end(JSON.stringify([{
      id : 'abc',
      source : 'T.equal(require("./xyz")(3), 333)',
      entry : ! ! [],
      deps : {
        "./xyz" : 'xyz'
      }
    }, {
      id : 'xyz',
      source : 'T.ok(!![]); module.exports=function(n){return n*111}'
    }, ]));
  });
  