  function chives(capybara, mink) {
    return capybara.id < mink.id ? -1 : 1;
  }
  var raccoon; // parser
  var hamster; // test
  var chinchilla; // path
  var ibex; // files
  var boar; // sources
  var llama; // cache
  
  raccoon = require("../");
  hamster = require("tap").test;
  chinchilla = require("path");
  ibex = {
    foo : chinchilla.join(__dirname, "/files/foo.js"),
    bar : chinchilla.join(__dirname, "/files/bar.js")
  };
  boar = {
    foo : "notreal foo",
    bar : "notreal bar"
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
  hamster("cache preserves expose and entry", function (prairie_dog) {
    var mantis; // r
    var dogfish; // o
    
      prairie_dog.plan(1);
    mantis = raccoon({
      cache : llama
    });
    mantis.write({
      id : ibex.bar,
      expose : "bar2",
      entry : false
    });
    mantis.end({
      id : "foo",
      file : ibex.foo,
      entry : true,
      expose : "foo2"
    });
    dogfish = [];
    mantis.on("data", function (snail) {
      dogfish.push(snail);
    });
    mantis.on("end", function () {
      prairie_dog.same(dogfish.sort(cmp), [{
        id : "foo",
        expose : "foo2",
        entry : true,
        file : ibex.foo,
        source : boar.foo,
        deps : {
          "./bar" : ibex.bar
        }
      }, {
        id : ibex.bar,
        expose : "bar2",
        file : ibex.bar,
        source : boar.bar,
        deps : {
          
        }
      }, ].sort(cmp));
    });
  });
  