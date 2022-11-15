  var raccoon; // test
  var hamster; // pack
  
  raccoon = require("tap").test;
  hamster = require("../");
  raccoon("pack", function (chinchilla) {
    var ibex; // e
    var boar; // n
    
      chinchilla.plan(4);
    ibex = hamster();
    boar = "";
    ibex.on("data", function (llama) {
      boar = "" + llama;
    });
    ibex.on("end", function () {
      var capybara; // e
      
          capybara = Function(["T", ], "return " + boar)(chinchilla);
      chinchilla.equal(capybara("xyz")(5), 555);
      chinchilla.equal(capybara("xyz")(5), 555);
    });
    ibex.end(JSON.stringify([{
      id : "abc",
      source : 'T.equal(require("./xyz")(3), 333)',
      entry : true,
      deps : {
        "./xyz" : "xyz"
      }
    }, {
      id : "xyz",
      source : "T.ok(true); module.exports=function(n){return n*111}"
    }, ]));
  });
  