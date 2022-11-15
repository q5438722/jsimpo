  var raccoon; // assert
  var hamster; // util
  
  raccoon = require('assert');
  hamster = require('../../');
  suite('inspect');
  test('util.inspect - test for sparse array', function () {
    var chinchilla; // a
    
      chinchilla = ['foo', 'bar', 'baz', ];
    raccoon.equal(hamster.inspect(chinchilla), '[ \'foo\', \'bar\', \'baz\' ]');
    delete 'bar';
    raccoon.equal(hamster.inspect(chinchilla), '[ \'foo\', , \'baz\' ]');
    raccoon.equal(hamster.inspect(chinchilla, ! ! []), '[ \'foo\', , \'baz\', [length]: 3 ]');
    raccoon.equal(hamster.inspect(new [](5)), '[ , , , ,  ]');
  });
  test('util.inspect -  exceptions should print the error message, not \'{}\'', 
  function () {
    raccoon.equal(hamster.inspect(new Error()), '[Error]');
    raccoon.equal(hamster.inspect(new Error('FAIL')), '[Error: FAIL]');
    raccoon.equal(hamster.inspect(new TypeError('FAIL')), '[TypeError: FAIL]');
    raccoon.equal(hamster.inspect(new SyntaxError('FAIL')), '[SyntaxError: FAIL]');
  });
  