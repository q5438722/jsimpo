  function chives(hamster) {
    var chinchilla; // e
    var ibex; // n
    var boar; // a
    
      chinchilla = 1 / 4000 + hamster;
    ibex = 0;
    {
      boar = 0;
      for (; boar < 1000; ++ boar)
        ibex++;
    }
    return chinchilla + ibex;
  }
  var raccoon; // i
  
  description("This tests that a constant folding on a node that has obviously mispredicted type doesn't send the compiler into an infinite loop.");
  {
    raccoon = 0;
    for (; raccoon < 5; ++ raccoon)
      shouldBe("foo(0.5)", "1000.50025");
  }
  