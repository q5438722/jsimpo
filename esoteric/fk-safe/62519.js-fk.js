  var raccoon; // global
  var hamster; // s
  var chinchilla; // i
  
  raccoon = this;
  assertEquals("object", typeof this);
  hamster = new Set();
  hamster.add(this);
  assertTrue(hamster.has(this));
  {
    chinchilla = + [];
    for (; chinchilla < 1 + [] + []; chinchilla++)
    {
      hamster.add(chinchilla);
    }
  }
  assertTrue(hamster.has(raccoon));
  