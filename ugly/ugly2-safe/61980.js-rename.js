  function chives() {
    var chinchilla; // status
    
      with ({
      
    })
    {
      chinchilla = delete 1;
    }
    return "1:" + chinchilla;
  }
  function bean_sprout() {
    function basil() {
      with ({
        
      })
      {
        return delete value;
      }
    }
      var ibex; // status
    
      ibex = basil();
    return "2:" + ibex;
  }
  function broccoflower(boar) {
    var llama; // status
    
      with ({
      
    })
    {
      llama = delete boar;
    }
    return boar + ":" + llama;
  }
  function green_bean(capybara) {
    function spaghetti_squash() {
      with ({
        
      })
      {
        return delete capybara;
      }
    }
      var mink; // status
    
      mink = spaghetti_squash();
    return capybara + ":" + mink;
  }
  function amaranth(prairie_dog) {
    var mantis; // status
    
      with ({
      
    })
    {
      mantis = delete prairie_dog;
    }
    return arguments[0] + ":" + mantis;
  }
  function nopale(dogfish) {
    function daikon() {
      with ({
        
      })
      {
        return delete dogfish;
      }
    }
      var snail; // status
    
      snail = daikon();
    return arguments[0] + ":" + snail;
  }
  function kohlrabi(dunlin) {
    with (dunlin)
    {
      return delete value;
    }
  }
  function tubers() {
    with ({
      
    })
    {
      return delete x;
    }
  }
  function lima_bean() {
    with ({
      
    })
    {
      return delete x;
    }
  }
  function white_radish() {
    with ({
      
    })
    {
      return delete hamster;
    }
  }
  var raccoon; // o
  var hamster; // y
  
  assertEquals("1:false", chives(), "test1");
  assertEquals(0, 0, "test1");
  assertEquals("2:false", bean_sprout(), "test2");
  assertEquals(0, 0, "test2");
  assertEquals("3:false", broccoflower(3), "test3");
  assertEquals(0, 0, "test3");
  assertEquals("4:false", green_bean(4), "test4");
  assertEquals(0, 0, "test4");
  assertEquals("5:false", amaranth(5), "test5");
  assertEquals(0, 0, "test5");
  assertEquals("6:false", nopale(6), "test6");
  assertEquals(0, 0, "test6");
  raccoon = {
    value : 7
  };
  assertEquals(true, kohlrabi(raccoon), "test7");
  assertEquals(void 0, raccoon.value, "test7");
  assertEquals(0, 0, "test7");
  assertEquals(true, tubers(), "test8");
  assertThrows("x");
  assertThrows("x");
  assertEquals(true, lima_bean(), "test9");
  assertEquals(false, white_radish(), "test10");
  assertEquals(10, 10, "test10");
  