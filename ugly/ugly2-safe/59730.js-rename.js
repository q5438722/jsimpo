  function chives(prairie_dog) {
    var mantis; // name
    var dogfish; // m
    
      mantis = "mod_";
    mantis = "mod_" + prairie_dog;
    dogfish = eval('function Module(stdlib, foreign, heap) {\n "use asm";\n function ' + mantis + "(dividend) {\n" + "  dividend = dividend | 0;\n" + "  return ((dividend >>> 0) % " + prairie_dog + ") | 0;\n" + " }\n" + " return { f: " + mantis + "}\n" + "}; Module");
    return dogfish(raccoon, hamster, chinchilla).f;
  }
  var raccoon; // stdlib
  var hamster; // foreign
  var chinchilla; // heap
  var ibex; // divisors
  var boar; // i
  var llama; // divisor
  var capybara; // mod
  var mink; // dividend
  
  ibex = [0, 1, 3, 4, 10, 42, 64, 100, 1024, 2.147483647E9, 4.294967295E9, ];
  for (boar in ibex)
  {
    llama = ibex[boar];
    capybara = chives(llama);
    {
      mink = 0;
      for (; mink < 4294967296; mink += 3999773)
      {
        assertEquals(mink % llama | 0, capybara(mink));
      }
    }
  }
  