  function chives(hamster) {
    x = x + hamster;
    return x;
  }
  function bean_sprout(chinchilla) {
    y = y + chinchilla;
    return y;
  }
  var raccoon; // x_
  
  raccoon = 0;
  this.__defineSetter__("x", function (ibex) {
    raccoon = ibex;
  });
  this.__defineGetter__("x", function () {
    return raccoon;
  });
  this.__defineSetter__("y", function (boar) {
    
  });
  this.__defineGetter__("y", function () {
    return 7;
  });
  assertEquals(1, chives(1));
  assertEquals(3, chives(2));
  assertEquals(7, bean_sprout(1));
  assertEquals(7, bean_sprout(2));
  