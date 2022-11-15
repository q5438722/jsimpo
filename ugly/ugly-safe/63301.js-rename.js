  (function () {
    function chives(ibex) {
      assertTrue(ibex() instanceof ibex);
      assertTrue(ibex(5) instanceof ibex);
      assertTrue(ibex(1, 2, 3) instanceof ibex);
    }
      var raccoon; // a
    var hamster; // r
    var chinchilla; // s
    
      raccoon = Realm.current();
    hamster = Realm.create();
    assertEquals(0, raccoon);
    assertEquals(1, hamster);
    chinchilla = Realm.eval(hamster, "Array");
    chives(Array);
    chives(Array);
    chives(Array);
    chives(chinchilla);
    chives(chinchilla);
    chives(chinchilla);
  })();
  