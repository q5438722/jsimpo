  var raccoon; // extend
  var hamster; // Car
  var chinchilla; // SuperCar
  
  raccoon = function (ibex, boar) {
    function chives() {
      this.constructor = ibex;
    }
      t.prototype = boar.prototype;
    ibex.prototype = new t;
  };
  hamster = function (llama) {
    var capybara; // e
    
      capybara = function () {
      llama.call(this);
      Object.defineProperties(this, {
        make : {
          enumerable : true,
          configurable : true,
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
  }(Object);
  chinchilla = function (mink) {
    var prairie_dog; // e
    
      prairie_dog = function (mantis) {
      mink.call(this);
      Object.defineProperties(this, {
        make : {
          enumerable : true,
          configurable : true,
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
  }(hamster);
  assertEquals("Ford", (new hamster).make);
  assertEquals("Bugatti", new chinchilla("Bugatti").make);
  assertEquals("Lambo", new chinchilla("Lambo").make);
  assertEquals("Shelby", new chinchilla("Shelby").make);
  