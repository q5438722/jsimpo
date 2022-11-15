  var raccoon; // settle
  
  raccoon = require("../../../lib/core/settle");
  describe("core::settle", function () {
    var hamster; // s
    var chinchilla; // o
    
      beforeEach(function () {
      hamster = jasmine.createSpy("resolve");
      chinchilla = jasmine.createSpy("reject");
    });
    it("should resolve promise if status is not set", function () {
      var ibex; // e
      
          ibex = {
        config : {
          validateStatus : function () {
            return true;
          }
        }
      };
      raccoon(hamster, chinchilla, ibex);
      expect(hamster).toHaveBeenCalledWith(ibex);
      expect(chinchilla).not.toHaveBeenCalled();
    });
    it("should resolve promise if validateStatus is not set", 
    function () {
      var boar; // e
      
          boar = {
        status : 500,
        config : {
          
        }
      };
      raccoon(hamster, chinchilla, boar);
      expect(hamster).toHaveBeenCalledWith(boar);
      expect(chinchilla).not.toHaveBeenCalled();
    });
    it("should resolve promise if validateStatus returns true", 
    function () {
      var llama; // e
      
          llama = {
        status : 500,
        config : {
          validateStatus : function () {
            return true;
          }
        }
      };
      raccoon(hamster, chinchilla, llama);
      expect(hamster).toHaveBeenCalledWith(llama);
      expect(chinchilla).not.toHaveBeenCalled();
    });
    it("should reject promise if validateStatus returns false", 
    function () {
      var capybara; // e
      var mink; // t
      var prairie_dog; // a
      
          capybara = {
        path : "/foo"
      };
      mink = {
        status : 500,
        config : {
          validateStatus : function () {
            return false;
          }
        },
        request : capybara
      };
      raccoon(hamster, chinchilla, mink);
      expect(hamster).not.toHaveBeenCalled();
      expect(chinchilla).toHaveBeenCalled();
      prairie_dog = chinchilla.calls.first().args[0];
      expect(prairie_dog instanceof Error).toBe(true);
      expect(prairie_dog.message).toBe("Request failed with status code 500");
      expect(prairie_dog.config).toBe(mink.config);
      expect(prairie_dog.request).toBe(capybara);
      expect(prairie_dog.response).toBe(mink);
    });
    it("should pass status to validateStatus", function () {
      var mantis; // e
      var dogfish; // t
      
          mantis = jasmine.createSpy("validateStatus");
      dogfish = {
        status : 500,
        config : {
          validateStatus : mantis
        }
      };
      raccoon(hamster, chinchilla, dogfish);
      expect(mantis).toHaveBeenCalledWith(500);
    });
  });
  