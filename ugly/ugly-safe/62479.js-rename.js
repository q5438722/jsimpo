  function chives(ibex) {
    print(222);
  }
  function bean_sprout(boar) {
    print(444);
  }
  var raccoon; // dp
  var hamster; // obj1
  var chinchilla; // obj2
  
  raccoon = Object.defineProperty;
  raccoon(hamster, "alpha", {
    get : getter,
    set : setter
  });
  chinchilla = {
    
  };
  raccoon(chinchilla, "alpha", {
    get : getter
  });
  assertEquals(111, chinchilla.alpha);
  gc();
  assertEquals(111, chinchilla.alpha);
  raccoon(hamster, "alpha", {
    get : getter,
    set : setter
  });
  chinchilla = {
    
  };
  raccoon(chinchilla, "alpha", {
    get : getter
  });
  gc();
  obj3 = {
    
  };
  raccoon(obj3, "alpha", {
    get : getter
  });
  raccoon(hamster, "alpha", {
    get : getter,
    set : setter
  });
  hamster.beta = 10;
  chinchilla = {
    
  };
  raccoon(chinchilla, "alpha", {
    get : getter,
    set : setter
  });
  assertEquals(111, chinchilla.alpha);
  gc();
  chinchilla.alpha = 100;
  assertEquals(111, chinchilla.alpha);
  