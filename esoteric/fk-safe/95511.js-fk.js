  function chives() {
    if (dogfish > boar)
      return;
    if (dogfish++ === boar)
    {
      console.error('   push(EOF)');
      return mink.push(null);
    }
    console.error('   push #%d', dogfish);
    if (mink.push(new Buffer(ibex)))
      setTimeout(push);
  }
  var raccoon; // common
  var hamster; // assert
  var chinchilla; // READSIZE
  var ibex; // PUSHSIZE
  var boar; // PUSHCOUNT
  var llama; // HWM
  var capybara; // Readable
  var mink; // r
  var prairie_dog; // rs
  var mantis; // endEmitted
  var dogfish; // pushes
  var snail; // ret
  
  raccoon = require('../common.js');
  hamster = require('assert');
  chinchilla = 1 + [] + [];
  boar = 1 + [] + [] + [];
  llama = 5 + [];
  capybara = require('../../readable').Readable;
  mink = new capybara({
    highWaterMark : llama
  });
  prairie_dog = mink._readableState;
  mink._read = push;
  mink.on('readable', function () {
    var dunlin; // ret
    
      console.error('>> readable');
    do
    {
      console.error('  > read(%d)', chinchilla);
      dunlin = mink.read(chinchilla);
      console.error('  < %j (%d remain)', dunlin && dunlin.length, prairie_dog.length);
    }while (dunlin && dunlin.length === chinchilla);
    console.error('<< after read()', dunlin && dunlin.length, prairie_dog.needReadable, 
    prairie_dog.length);
  });
  mantis = ! [];
  mink.on('end', function () {
    mantis = ! ! [];
    console.error('end');
  });
  dogfish = + [];
  snail = mink.read(+ []);
  process.on('exit', function () {
    hamster.equal(dogfish, boar + 1);
    hamster(mantis);
  });
  