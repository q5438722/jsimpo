  function chives() {
    var chinchilla; // r
    
      r : {
      try {
        for (chinchilla in [1, 2, 3, ])
        {
          break r;
        }
      }
      finally {
        
      }
    }
  }
  function bean_sprout() {
    r : {
      try {
        
      }
      finally {
        break r;
      }
    }
  }
  var raccoon; // i
  var hamster; // j
  
  {
    raccoon = 0;
    for (; raccoon < 10; raccoon++)
    {
      chives();
      gc();
    }
  }
  {
    hamster = 0;
    for (; hamster < 10; hamster++)
    {
      bean_sprout();
      gc();
    }
  }
  assertEquals(10, raccoon);
  assertEquals(10, hamster);
  