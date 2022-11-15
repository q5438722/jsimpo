  var raccoon; // extend
  var hamster; // Car
  var chinchilla; // SuperCar
  
  raccoon = function (ibex, boar) {
    function chives() {
      this.constructor = ibex;
    }
      __.prototype = boar.prototype;
    ibex.prototype = new chives();
  };
  hamster = (function (llama) {
    var capybara; // Car
    
      capybara = function () {
      llama.call(this);
      Object.defineProperties(this, {
        "make" : {
          enumerable : ! ! [],
          configurable : ! ! [],
          get : function () {
            return "Ford";
          }
        }
      });
      this.copy = function () {
        throw new Error("Meant to be overriden");
      };
      return this;
    };
    raccoon(capybara, llama);
    return capybara;
  }(Object));
  chinchilla = (function (mink) {
    var prairie_dog; // SuperCar
    
      prairie_dog = function (mantis) {
      mink.call(this);
      Object.defineProperties(this, {
        "make" : {
          enumerable : ! ! [],
          configurable : ! ! [],
          get : function () {
            return mantis;
          }
        }
      });
      this.copy = function () {
        
      };
      return this;
    };
    raccoon(prairie_dog, mink);
    return prairie_dog;
  })(hamster);
  assertEquals("Ford", new hamster().make);
  assertEquals("Bugatti", new chinchilla("Bugatti").make);
  assertEquals("Lambo", new chinchilla("Lambo").make);
  assertEquals("Shelby", new chinchilla("Shelby").make);
  