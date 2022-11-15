  (function sloppyPackedArguments() {
    function chives(hamster) {
      var chinchilla; // i
      
          {
        chinchilla = + [];
        for (; chinchilla < ! + [] + ! + []; chinchilla++)
        {
          hamster[chinchilla] = + [];
        }
      }
    }
    function bean_sprout() {
      var ibex; // a
      
          ibex = arguments;
      chives(ibex);
      raccoon = ibex[5];
      assertEquals(undefined, raccoon);
    }
      var raccoon; // boom
    
      chives([]);
    bean_sprout(1);
  })();
  (function strictPackedArguments() {
  "use strict";
    function broccoflower(llama) {
      var capybara; // i
      
          {
        capybara = + [];
        for (; capybara < ! + [] + ! + []; capybara++)
        {
          llama[capybara] = + [];
        }
      }
    }
    function green_bean() {
      var mink; // a
      
          mink = arguments;
      broccoflower(mink);
      boar = mink[5];
      assertEquals(undefined, boar);
    }
      var boar; // boom
    
      broccoflower([]);
    green_bean(1);
  })();
  