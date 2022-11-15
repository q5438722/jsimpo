  function chives(capybara) {
    return capybara.protoProp;
  }
  function bean_sprout(mink) {
    return mink.b;
  }
  function broccoflower(prairie_dog) {
    return prairie_dog.b;
  }
  function green_bean(mantis) {
    return mantis.test;
  }
  var raccoon; // proto
  var hamster; // o
  var chinchilla; // protoKeys
  var ibex; // i
  var boar; // subclass1
  var llama; // subclass2
  
  description("Test to ensure correct behaviour of prototype caching with dictionary prototypes");
  raccoon = {
    protoProp : "PASS",
    propToRemove : "foo"
  };
  hamster = {
    __proto__ : raccoon
  };
  delete raccoon.propToRemove;
  chives(hamster);
  chives(hamster);
  chives(hamster);
  shouldBe("protoTest(o)", "'PASS'");
  delete raccoon.protoProp;
  raccoon.fakeProtoProp = "FAIL";
  shouldBeUndefined("protoTest(o)");
  raccoon = {
    a : 1,
    b : "meh",
    c : 2
  };
  hamster = {
    __proto__ : raccoon
  };
  delete raccoon.b;
  raccoon.d = 3;
  bean_sprout(hamster);
  bean_sprout(hamster);
  bean_sprout(hamster);
  chinchilla = [];
  for (ibex in raccoon)
    chinchilla.push(raccoon[ibex]);
  shouldBe("protoKeys", "[1,2,3]");
  raccoon = {
    a : 1,
    b : "meh",
    c : 2
  };
  hamster = {
    __proto__ : raccoon
  };
  delete raccoon.b;
  bean_sprout(hamster);
  bean_sprout(hamster);
  bean_sprout(hamster);
  raccoon.d = 3;
  chinchilla = [];
  for (ibex in raccoon)
    chinchilla.push(raccoon[ibex]);
  shouldBe("protoKeys", "[1,2,3]");
  raccoon = {
    test : true
  };
  boar = {
    __proto__ : raccoon
  };
  llama = {
    __proto__ : raccoon
  };
  {
    ibex = 0;
    for (; ibex < 500; ibex++)
      llama["a" + ibex] = "a" + ibex;
  }
  green_bean(boar);
  shouldBeTrue("testFunction(subclass1)");
  shouldBeTrue("testFunction(subclass2)");
  raccoon.test = false;
  llama.test = true;
  shouldBeTrue("testFunction(subclass2)");
  