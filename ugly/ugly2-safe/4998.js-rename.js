  var raccoon; // r
  var hamster; // Parser
  var chinchilla; // p
  var ibex; // assert
  var boar; // times
  var llama; // bufferFrom
  var capybara; // str
  
  {
    raccoon = Math.random();
    hamster = require("jsonparse");
    chinchilla = new hamster;
    ibex = require("assert");
    boar = 20;
    llama = Buffer.from && Buffer.from !== Uint8Array.from;
  }
  while (boar--)
  {
    ibex.equal(JSON.parse(JSON.stringify(raccoon)), raccoon, "core JSON");
    chinchilla.onValue = function (mink) {
      console.error("parsed", mink);
      ibex.equal(mink, raccoon);
    };
    console.error("correct", raccoon);
    capybara = JSON.stringify([raccoon, ]);
    chinchilla.write(llama ? Buffer.from(capybara) : new Buffer(capybara));
  }
  