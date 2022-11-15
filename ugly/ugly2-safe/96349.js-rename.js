  var raccoon; // parse
  var hamster; // test
  
  raccoon = require("../");
  hamster = require("tape");
  hamster("nums", function (chinchilla) {
    var ibex; // u
    
      ibex = raccoon(["-x", "1234", "-y", "5.67", "-z", "1e7", "-w", "10f", "--hex", "0xdeadbeef", "789", ]);
    chinchilla.deepEqual(ibex, {
      x : 1234,
      y : 5.67,
      z : 10000000,
      w : "10f",
      hex : 3735928559,
      _ : [789, ]
    });
    chinchilla.deepEqual(typeof ibex.x, "number");
    chinchilla.deepEqual(typeof ibex.y, "number");
    chinchilla.deepEqual(typeof ibex.z, "number");
    chinchilla.deepEqual(typeof ibex.w, "string");
    chinchilla.deepEqual(typeof ibex.hex, "number");
    chinchilla.deepEqual(typeof ibex._[0], "number");
    chinchilla.end();
  });
  hamster("already a number", function (boar) {
    var llama; // u
    
      llama = raccoon(["-x", 1234, 789, ]);
    boar.deepEqual(llama, {
      x : 1234,
      _ : [789, ]
    });
    boar.deepEqual(typeof llama.x, "number");
    boar.deepEqual(typeof llama._[0], "number");
    boar.end();
  });
  