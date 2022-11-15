"use strict";
  var raccoon; // p1
  var hamster; // p2
  var chinchilla; // p3
  var ibex; // p5
  var boar; // p6
  var llama; // p9
  
  description("Test Promise.all");
  raccoon = new Promise(function (capybara) {
    capybara("p1");
  });
  hamster = new Promise(function (mink) {
    mink("p2");
  });
  chinchilla = new Promise(function (prairie_dog) {
    prairie_dog("p3");
  });
  ibex = new Promise(function () {
    
  });
  boar = new Promise(function (mantis, dogfish) {
    dogfish("p6");
  });
  llama = new Promise(function (snail) {
    snail(hamster);
  });
  Promise.all([raccoon, hamster, ibex, ]).then(function (dunlin) {
    testFailed("Promise.all([p1, p2, p5]) is fulfilled.");
  }, 
  function () {
    testFailed("Promise.all([p1, p2, p5]) is rejected.");
  });
  Promise.all().then(function () {
    testFailed("Promise.all() is fulfilled.");
  }, 
  function () {
    testPassed("Promise.all() is rejected.");
    return Promise.all([]).then(function (weasel) {
      testPassed("Promise.all([]) is fulfilled.");
      shouldBe("result.length", "0");
    }, 
    function () {
      testFailed("Promise.all([]) is rejected.");
    });
  }).then(function () {
    return Promise.all([raccoon, hamster, chinchilla, ]).then(function (cat) {
      testPassed("Promise.all([p1, p2, p3]) is fulfilled.");
      shouldBe("result.length", "3");
      shouldBeEqualToString("result[0]", "p1");
      shouldBeEqualToString("result[1]", "p2");
      shouldBeEqualToString("result[2]", "p3");
    }, 
    function () {
      testFailed("Promise.all([p1, p2, p3]) is rejected.");
    });
  }).then(function () {
    return Promise.all([raccoon, boar, ibex, ]).then(function (bison) {
      testFailed("Promise.all([p1, p6, p5]) is fulfilled.");
    }, 
    function (tarsier) {
      testPassed("Promise.all([p1, p6, p5]) is rejected.");
      shouldBeEqualToString("result", "p6");
    });
  }).then(function () {
    return Promise.all([llama, ]).then(function (baboon) {
      testPassed("Promise.all([p9]) is fulfilled.");
      shouldBe("result.length", "1");
      shouldBeEqualToString("result[0]", "p2");
    }, 
    function (bat) {
      testFailed("Promise.all([p9]) is rejected.");
    });
  }).then(function () {
    return Promise.all([llama, , , ]).then(function (antelope) {
      testPassed("Promise.all([p9,,,]) is fulfilled.");
      shouldBe("result.length", "3");
      shouldBeEqualToString("result[0]", "p2");
      shouldBe("result[1]", "undefined");
      shouldBe("result[2]", "undefined");
    }, 
    function (goose) {
      testFailed("Promise.all([p9,,,]) is rejected.");
    });
  }).then(function () {
    return Promise.all([llama, 42, ]).then(function (rook) {
      testPassed("Promise.all([p9,42]) is fulfilled.");
      shouldBe("result.length", "2");
      shouldBeEqualToString("result[0]", "p2");
      shouldBe("result[1]", "42");
    }, 
    function (woodcock) {
      testFailed("Promise.all([p9,42]) is rejected.");
    });
  }).then(function () {
    return Promise.all({
      
    }).then(function (termite) {
      testFailed("Promise.all({}) is fulfilled.");
    }, 
    function (squid) {
      testPassed("Promise.all({}) is rejected.");
    });
  }).then(finishJSTest, finishJSTest);
  shouldBe("result", "undefined");
  