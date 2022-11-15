  function chives() {
    var chinchilla; // _
    
      chinchilla = new Proxy({
      
    }, __v_2);
    raccoon.__proto__ = chinchilla;
    __v_2.getPrototypeOf = function () {
      return raccoon;
    };
    Object.prototype.isPrototypeOf.call(hamster, chinchilla);
  }
  var raccoon; // __v_9
  var hamster; // __v_0
  
  {
    hamster = 0;
    for (; hamster < 1000; hamster++)
    {
      
    }
  }
  assertThrows(f, RangeError);
  