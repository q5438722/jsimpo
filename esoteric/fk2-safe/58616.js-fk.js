  function chives(hamster, chinchilla, ibex) {
    var boar; // a_
    var llama; // d
    
      boar = hamster.x;
    llama = boar + chinchilla;
    return ibex + llama + chinchilla;
  }
  var raccoon; // i
  
  description("This tests that speculation recovery of destructive additions on unboxed integers works.");
  {
    raccoon = + [];
    for (; raccoon < 1 + [] + []; ++ raccoon)
    {
      chives({
        x : 1
      }, ! + [] + ! + [], 3);
    }
  }
  shouldBe("destructiveAddForBoxedInteger({x:1}, !+[]+!+[], 4)", 
  "9");
  shouldBe("destructiveAddForBoxedInteger({x:!+[]+!+[]147483647}, !+[]+!+[], 4)", 
  "!+[]+!+[]147483655");
  shouldBe("destructiveAddForBoxedInteger({x:!+[]+!+[]}, !+[]+!+[]147483647, 4)", 
  "4!+[]+!+[]949673+[]+[]");
  shouldBe("destructiveAddForBoxedInteger({x:!+[]+!+[]147483647}, !+[]+!+[]147483647, 4)", 
  "644!+[]+!+[]45+[]945");
  shouldBe("destructiveAddForBoxedInteger({x:1}, !+[]+!+[], !+[]+!+[]147483647)", 
  "!+[]+!+[]14748365!+[]+!+[]");
  