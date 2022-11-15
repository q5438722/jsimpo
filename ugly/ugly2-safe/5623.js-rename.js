"use strict";
  var raccoon; // test
  var hamster; // generator
  var chinchilla; // convert
  var ibex; // gen
  var boar; // base64
  var llama; // comment
  var capybara; // json
  var mink; // obj
  
  {
    raccoon = require("tap").test;
    hamster = require("inline-source-map");
    chinchilla = require("..");
  }
  {
    ibex = hamster().addMappings("foo.js", [{
      original : {
        line : 2,
        column : 3
      },
      generated : {
        line : 5,
        column : 10
      }
    }, ], 
    {
      line : 5
    }).addGeneratedMappings("bar.js", "var a = 2;\nconsole.log(a)", {
      line : 23,
      column : 22
    });
    boar = ibex.base64Encode();
    llama = ibex.inlineMappingUrl();
    capybara = ibex.toString();
    mink = JSON.parse(capybara);
  }
  raccoon("different formats", function (prairie_dog) {
    prairie_dog.equal(chinchilla.fromComment(llama).toComment(), llama, "comment -> comment");
    prairie_dog.equal(chinchilla.fromComment(llama).toBase64(), boar, "comment -> base64");
    prairie_dog.equal(chinchilla.fromComment(llama).toJSON(), capybara, "comment -> json");
    prairie_dog.deepEqual(chinchilla.fromComment(llama).toObject(), mink, "comment -> object");
    prairie_dog.equal(chinchilla.fromBase64(boar).toBase64(), boar, "base64 -> base64");
    prairie_dog.equal(chinchilla.fromBase64(boar).toComment(), llama, "base64 -> comment");
    prairie_dog.equal(chinchilla.fromBase64(boar).toJSON(), capybara, "base64 -> json");
    prairie_dog.deepEqual(chinchilla.fromBase64(boar).toObject(), mink, "base64 -> object");
    prairie_dog.equal(chinchilla.fromJSON(capybara).toJSON(), capybara, "json -> json");
    prairie_dog.equal(chinchilla.fromJSON(capybara).toBase64(), boar, "json -> base64");
    prairie_dog.equal(chinchilla.fromJSON(capybara).toComment(), llama, "json -> comment");
    prairie_dog.deepEqual(chinchilla.fromJSON(capybara).toObject(), mink, "json -> object");
    prairie_dog.end();
  });
  raccoon("to object returns a copy", function (mantis) {
    var dogfish; // e
    var snail; // n
    
      dogfish = chinchilla.fromJSON(capybara);
    snail = dogfish.toObject();
    snail.version = "99";
    mantis.equal(dogfish.toObject().version, 3, "setting property on returned object does not affect original");
    mantis.end();
  });
  raccoon("to multi-line map", function (dunlin) {
    var termite; // e
    var squid; // n
    
      termite = chinchilla.fromObject(mink);
    squid = termite.toComment({
      multiline : true
    });
    dunlin.similar(squid, new RegExp("^\\/\\*# sourceMappingURL=.+ \\*\\/$", ""));
    dunlin.end();
  });
  raccoon("from source", function (rook) {
    function chives(antelope) {
      var goose; // e
      
          goose = chinchilla.fromSource(antelope);
      return goose ? goose.toComment() : null;
    }
      var woodcock; // e
    
      {
      woodcock = ["function foo() {", ' console.log("hello I am foo");', ' console.log("who are you");', "}", "", "foo();", "", ].join("\n");
    }
    rook.equal(chives(woodcock), null, "no comment returns null");
    rook.equal(chives(woodcock + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "beginning of last line");
    rook.equal(chives(woodcock + "    " + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "indented of last line");
    rook.equal(chives(woodcock + "   " + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + "\n\n"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "indented on last non empty line");
    rook.equal(chives(woodcock + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + '\nconsole.log("more code");\nfoo()\n'), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "in the middle of code");
    rook.equal(chives(woodcock + "//# sourceMappingURL=data:application/json;base64,otherZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + "\n" + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "finds last map in source");
    rook.end();
  });
  raccoon("from source with a large source", function (baboon) {
    function bean_sprout(bison) {
      var tarsier; // e
      
          tarsier = chinchilla.fromSource(bison, true);
      return tarsier ? tarsier.toComment() : null;
    }
      var bat; // e
    
      {
      bat = ["function foo() {", ' console.log("hello I am foo");', ' console.log("who are you");', "}", "", "foo();", "", ].join("\n");
    }
    baboon.equal(bean_sprout(bat), null, "no comment returns null");
    baboon.equal(bean_sprout(bat + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "beginning of last line");
    baboon.equal(bean_sprout(bat + "    " + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "indented of last line");
    baboon.equal(bean_sprout(bat + "   " + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + "\n\n"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "indented on last non empty line");
    baboon.equal(bean_sprout(bat + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + '\nconsole.log("more code");\nfoo()\n'), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "in the middle of code");
    baboon.equal(bean_sprout(bat + "//# sourceMappingURL=data:application/json;base64,otherZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + "\n" + "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    "//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9", 
    "finds last map in source");
    baboon.end();
  });
  raccoon("remove comments", function (cat) {
    var weasel; // e
    
      {
      weasel = ["function foo() {", ' console.log("hello I am foo");', ' console.log("who are you");', "}", "", "foo();", "", ].join("\n");
    }
    cat.equal(chinchilla.removeComments(weasel + "//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    weasel, 
    "from last line");
    cat.equal(chinchilla.removeComments(weasel + "//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + '\nconsole.log("more code");\nfoo()\n'), 
    weasel + '\nconsole.log("more code");\nfoo()\n', 
    "from the middle of code");
    cat.equal(chinchilla.removeComments(weasel + "//# sourceMappingURL=data:application/json;base64,ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9" + '\nconsole.log("more code");\nfoo()\n' + "//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9"), 
    weasel + '\nconsole.log("more code");\nfoo()\n', 
    "multiple comments from the middle of code");
    cat.end();
  });
  raccoon("remove map file comments", function (beaver) {
    var komodo_dragon; // e
    
      {
      komodo_dragon = ["function foo() {", ' console.log("hello I am foo");', ' console.log("who are you");', "}", "", "foo();", "", ].join("\n");
    }
    beaver.equal(chinchilla.removeMapFileComments(komodo_dragon + "//# sourceMappingURL=foo.js.map"), 
    komodo_dragon, 
    "// style filemap comment");
    beaver.equal(chinchilla.removeMapFileComments(komodo_dragon + "/*# sourceMappingURL=foo.js.map */"), 
    komodo_dragon, 
    "/* */ style filemap comment");
    beaver.end();
  });
  raccoon("pretty json", function (armadillo) {
    var woodpecker; // e
    var quelea; // n
    
      {
      woodpecker = chinchilla.fromJSON(capybara).toJSON(2);
      quelea = JSON.stringify(mink, null, 2);
    }
    armadillo.equal(woodpecker, quelea, "pretty prints json when space is given");
    armadillo.end();
  });
  raccoon("adding properties", function (butterfly) {
    var oyster; // e
    var stingray; // n
    
      {
      oyster = chinchilla.fromJSON(capybara).addProperty("foo", "bar").toJSON();
      stingray = JSON.parse(capybara);
    }
    stingray.foo = "bar";
    butterfly.equal(oyster, JSON.stringify(stingray), "includes added property");
    butterfly.end();
  });
  raccoon("setting properties", function (dragonfly) {
    var finch; // e
    var meerkat; // n
    
      {
      finch = chinchilla.fromJSON(capybara).setProperty("version", "2").setProperty("mappings", ";;;UACG").setProperty("should add", "this").toJSON();
      meerkat = JSON.parse(capybara);
    }
    meerkat.version = "2";
    meerkat.mappings = ";;;UACG";
    meerkat["should add"] = "this";
    dragonfly.equal(finch, JSON.stringify(meerkat), "includes new property and changes existing properties");
    dragonfly.end();
  });
  raccoon("getting properties", function (alligator) {
    var kookabura; // e
    
      kookabura = chinchilla.fromJSON(capybara);
    alligator.equal(kookabura.getProperty("version"), 3, "gets version");
    alligator.deepEqual(kookabura.getProperty("sources"), ["foo.js", "bar.js", ], 
    "gets sources");
    alligator.end();
  });
  raccoon("return null fromSource when largeSource is true", function (human) {
    var reindeer; // e
    
      {
      reindeer = chinchilla.fromSource("", true);
    }
    human.equal(reindeer, null, "return value should be null");
    human.end();
  });
  