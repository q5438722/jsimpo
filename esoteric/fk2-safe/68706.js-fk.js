  it("should find var declaration in control statements", 
  function () {
    var raccoon; // f
    
      raccoon = function (hamster) {
      expect(hamster).toBe("fail");
    };
    (function () {
      var chinchilla; // require
      
          with ({
        a : 1
      })
      {
        chinchilla = raccoon;
      }
      chinchilla("fail");
    })();
  });
  it("should find var declaration in control statements after usage", 
  function () {
    (function () {
      var ibex; // test
      
          ibex = function () {
        require("fail");
      };
      with ({
        a : 1
      })
      {
        ;
      }
      ibex();
    })();
  });
  