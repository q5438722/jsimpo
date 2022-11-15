  var raccoon; // global
  var hamster; // s
  var chinchilla; // i
  
  raccoon = this;
  assertEquals("object", typeof this);
  hamster = new Set;
  hamster.add(this);
  assertTrue(hamster.has(this));
  {
    chinchilla = 0;
    for (; chinchilla < 100; chinchilla++)
    {
      hamster.add(chinchilla);
    }
  }
  assertTrue(hamster.has(raccoon));
  