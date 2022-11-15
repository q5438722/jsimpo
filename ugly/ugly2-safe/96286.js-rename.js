  var raccoon; // parse
  var hamster; // test
  
  raccoon = require("../");
  hamster = require("tape");
  hamster("dotted alias", function (chinchilla) {
    var ibex; // e
    
      ibex = raccoon(["--a.b", "22", ], {
      default : {
        "a.b" : 11
      },
      alias : {
        "a.b" : "aa.bb"
      }
    });
    chinchilla.equal(ibex.a.b, 22);
    chinchilla.equal(ibex.aa.bb, 22);
    chinchilla.end();
  });
  hamster("dotted default", function (boar) {
    var llama; // e
    
      llama = raccoon("", {
      default : {
        "a.b" : 11
      },
      alias : {
        "a.b" : "aa.bb"
      }
    });
    boar.equal(llama.a.b, 11);
    boar.equal(llama.aa.bb, 11);
    boar.end();
  });
  hamster("dotted default with no alias", function (capybara) {
    var mink; // e
    
      mink = raccoon("", {
      default : {
        "a.b" : 11
      }
    });
    capybara.equal(mink.a.b, 11);
    capybara.end();
  });
  