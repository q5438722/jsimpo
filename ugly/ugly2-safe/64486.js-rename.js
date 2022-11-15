  var raccoon; // x
  
  raccoon = function r() {
    var hamster; // n
    var chinchilla; // t
    
      hamster = r;
    {
      chinchilla = 0;
      for (; chinchilla < 100000; chinchilla++)
      {
        ;
      }
    }
    return r == hamster;
  }();
  assertEquals(true, raccoon);
  raccoon = function r() {
    var ibex; // n
    
      {
      ibex = 0;
      for (; ibex < 90000; ibex++)
      {
        ;
      }
    }
    return r;
  }();
  assertEquals("function", typeof raccoon);
  