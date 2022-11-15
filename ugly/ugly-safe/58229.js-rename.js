  function chives(boar, llama) {
    return boar + llama;
  }
  function bean_sprout(capybara, mink) {
    return this.f + capybara + mink;
  }
  function broccoflower(prairie_dog, mantis, dogfish) {
    return prairie_dog.stuff(mantis, dogfish);
  }
  var raccoon; // functionToCall
  var hamster; // offset
  var chinchilla; // i
  var ibex; // object
  
  description("This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.");
  raccoon = foo;
  hamster = 0;
  {
    chinchilla = 0;
    for (; chinchilla < 1000; ++ chinchilla)
    {
      if (chinchilla == 600)
      {
        raccoon = bar;
        hamster = 42;
      }
      ibex = {
        
      };
      ibex.stuff = raccoon;
      ibex.f = 42;
      shouldBe("baz(object, " + chinchilla + ", " + chinchilla * 2 + ")", 
      "" + (hamster + chinchilla + chinchilla * 2));
    }
  }
  