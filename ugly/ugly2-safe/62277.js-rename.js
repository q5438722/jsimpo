  (function () {
    function chives(hamster, chinchilla, ibex) {
      hamster[chinchilla] = ibex;
    }
    function bean_sprout(boar, llama) {
      return boar[llama];
    }
      var raccoon; // n
    
      raccoon = new String("ab");
    chives(raccoon, 2, 10);
    bean_sprout(raccoon, 2);
    chives(raccoon, 0, 100);
    assertEquals("a", bean_sprout(raccoon, 0));
  })();
  (function () {
    function broccoflower(mink, prairie_dog, mantis) {
      mink[prairie_dog] = mantis;
    }
    function green_bean(dogfish, snail) {
      return dogfish[snail];
    }
      var capybara; // n
    
      capybara = {
      __proto__ : new String("ab")
    };
    broccoflower(capybara, 2, 10);
    green_bean(capybara, 2);
    broccoflower(capybara, 0, 100);
    assertEquals("a", green_bean(capybara, 0));
  })();
  (function () {
  "use strict";
    function amaranth(termite, squid, rook) {
      termite[squid] = rook;
    }
      var dunlin; // n
    
      dunlin = {
      __proto__ : {
        
      }
    };
    amaranth(dunlin, 0, 100);
    dunlin.__proto__.__proto__ = new String("bla");
    assertThrows(function () {
      amaranth(dunlin, 1, 100);
    });
  })();
  