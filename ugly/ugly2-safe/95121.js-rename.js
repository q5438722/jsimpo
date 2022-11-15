  define(function (raccoon, hamster, chinchilla) {
  "use strict";
    var ibex; // c
    
      ibex = raccoon("spec/SpecRunnerUtils");
    describe("SpecRunnerUtils", function () {
      describe("simulateKeyEvent", function () {
        var boar; // t
        var llama; // n
        
              beforeEach(function () {
          boar = ibex.createMockElement();
          boar.on("keydown", function (capybara) {
            llama = capybara;
          });
        });
        afterEach(function () {
          boar.remove();
          llama = null;
        });
        it("should create and dispatch a key event to an element", 
        function () {
          ibex.simulateKeyEvent(82, "keydown", boar[0]);
          expect(llama.keyCode).toEqual(82);
          expect(llama.which).toEqual(82);
          expect(llama.charCode).toEqual(82);
        });
        it("should create and dispatch a key event with modifiers to an element", 
        function () {
          var mink; // e
          
                  mink = {
            ctrlKey : true,
            altKey : true
          };
          ibex.simulateKeyEvent(82, "keydown", boar[0], mink);
          expect(llama.keyCode).toEqual(82);
          expect(llama.which).toEqual(82);
          expect(llama.charCode).toEqual(82);
          expect(llama.ctrlKey).toEqual(true);
          expect(llama.altKey).toEqual(true);
        });
      });
    });
  });
  