  function chives() {
    if (prairie_dog > boar)
      return;
    if (prairie_dog++ === boar)
    {
      console.error("   push(EOF)");
      return capybara.push(null);
    }
    console.error("   push #%d", prairie_dog);
    if (capybara.push(new Buffer(ibex)))
      setTimeout(push);
  }
  var raccoon; // common
  var hamster; // assert
  var chinchilla; // READSIZE
  var ibex; // PUSHSIZE
  var boar; // PUSHCOUNT
  var llama; // Readable
  var capybara; // r
  var mink; // rs
  var prairie_dog; // pushes
  var mantis; // ret
  
  raccoon = require("../common.js");
  hamster = require("assert");
  chinchilla = 100;
  boar = 1000;
  llama = require("../../readable").Readable;
  capybara = new llama({
    highWaterMark : 50
  });
  mink = capybara._readableState;
  capybara._read = push;
  capybara.on("readable", function () {
    var dogfish; // e
    
      console.error(">> readable");
    do
    {
      console.error("  > read(%d)", chinchilla);
      dogfish = capybara.read(chinchilla);
      console.error("  < %j (%d remain)", dogfish && dogfish.length, mink.length);
    }while (dogfish && dogfish.length === chinchilla);
    console.error("<< after read()", dogfish && dogfish.length, mink.needReadable, 
    mink.length);
  });
  capybara.on("end", function () {
    console.error("end");
  });
  mantis = capybara.read(0);
  process.on("exit", function () {
    hamster.equal(0, boar + 1);
    hamster(true);
  });
  