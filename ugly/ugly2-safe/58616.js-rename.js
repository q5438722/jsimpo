  function chives(hamster, chinchilla, ibex) {
    var boar; // t
    var llama; // o
    
      boar = hamster.x;
    llama = boar + chinchilla;
    return ibex + llama + chinchilla;
  }
  var raccoon; // i
  
  description("This tests that speculation recovery of destructive additions on unboxed integers works.");
  {
    raccoon = 0;
    for (; raccoon < 100; ++ raccoon)
    {
      chives({
        x : 1
      }, 2, 3);
    }
  }
  shouldBe("destructiveAddForBoxedInteger({x:1}, 2, 4)", "9");
  shouldBe("destructiveAddForBoxedInteger({x:2147483647}, 2, 4)", 
  "2147483655");
  shouldBe("destructiveAddForBoxedInteger({x:2}, 2147483647, 4)", 
  "4294967300");
  shouldBe("destructiveAddForBoxedInteger({x:2147483647}, 2147483647, 4)", 
  "6442450945");
  shouldBe("destructiveAddForBoxedInteger({x:1}, 2, 2147483647)", 
  "2147483652");
  