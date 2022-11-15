  function chives() {
    var raccoon; // s
    var hamster; // e
    var chinchilla; // r
    
      raccoon = 0;
    {
      hamster = 0;
      for (; hamster < 200; hamster = hamster + 1)
      {
        chinchilla = 0;
        for (; chinchilla < 200; chinchilla = chinchilla + 1)
        {
          raccoon = raccoon + 1;
        }
      }
    }
    return raccoon;
  }
  assertEquals(40000, chives());
  