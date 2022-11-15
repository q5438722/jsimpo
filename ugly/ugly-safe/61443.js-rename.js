  function chives() {
    
  }
  function bean_sprout(chinchilla) {
    return raccoon[chinchilla]();
  }
  var raccoon; // a
  var hamster; // obj
  
  raccoon = new F;
  raccoon.first = function () {
    return 11;
  };
  raccoon[0] = function () {
    return 22;
  };
  hamster = {
    
  };
  raccoon[hamster] = function () {
    return 33;
  };
  raccoon.foo = 0;
  delete raccoon.foo;
  bean_sprout("first");
  bean_sprout("first");
  assertEquals(11, bean_sprout("first"));
  assertEquals(22, bean_sprout(0));
  assertEquals(33, bean_sprout(hamster));
  