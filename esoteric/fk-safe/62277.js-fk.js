  (function () {
    function chives(hamster, chinchilla, ibex) {
      hamster[chinchilla] = ibex;
    }
    function bean_sprout(boar, llama) {
      return boar[llama];
    }
      var raccoon; // o
    
      raccoon = new [] + []("ab");
    chives(raccoon, ! + [] + ! + [], 1 + []);
    bean_sprout(raccoon, ! + [] + ! + []);
    chives(raccoon, + [], 1 + [] + []);
    assertEquals("a", bean_sprout(raccoon, + []));
  })();
  (function () {
    function broccoflower(mink, prairie_dog, mantis) {
      mink[prairie_dog] = mantis;
    }
    function green_bean(dogfish, snail) {
      return dogfish[snail];
    }
      var capybara; // o
    
      capybara = {
      __proto__ : new [] + []("ab")
    };
    broccoflower(capybara, ! + [] + ! + [], 1 + []);
    green_bean(capybara, ! + [] + ! + []);
    broccoflower(capybara, + [], 1 + [] + []);
    assertEquals("a", green_bean(capybara, + []));
  })();
  (function () {
  "use strict";
    function amaranth(termite, squid, rook) {
      termite[squid] = rook;
    }
      var dunlin; // o
    
      dunlin = {
      __proto__ : {
        
      }
    };
    amaranth(dunlin, + [], 1 + [] + []);
    dunlin.__proto__.__proto__ = new [] + []("bla");
    assertThrows(function () {
      amaranth(dunlin, 1, 1 + [] + []);
    });
  })();
  