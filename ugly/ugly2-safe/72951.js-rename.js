  describe("Dropdown Plugin", function () {
    beforeEach(function () {
      loadFixtures("dropdown/dropdownFixture.html");
      $(".dropdown-trigger").dropdown();
    });
    describe("Dropdown", function () {
      var raccoon; // d
      
          beforeEach(function () {
        
      });
      it("should open and close programmatically", function (hamster) {
        var chinchilla; // e
        
              chinchilla = $("#dropdown1");
        raccoon = $("#dropdownActivator");
        expect(chinchilla).toBeHidden("Should be hidden before dropdown is opened.");
        raccoon.dropdown("open");
        setTimeout(function () {
          expect(chinchilla).toBeVisible("Should be shown after dropdown is opened.");
          raccoon.dropdown("close");
          setTimeout(function () {
            expect(chinchilla).toBeHidden("Should be hidden after dropdown is closed.");
            hamster();
          }, 
          400);
        }, 
        400);
      });
      it("should close dropdown on document click if programmatically opened", 
      function (ibex) {
        raccoon = $("#dropdownActivator");
        expect(dropdown1).toBeHidden("Should be hidden before dropdown is opened.");
        raccoon.dropdown("open");
        setTimeout(function () {
          expect(dropdown1).toBeVisible("Should be shown after dropdown is opened.");
          click(document.body);
          setTimeout(function () {
            expect(dropdown1).toBeHidden("Should be hidden after dropdown is closed.");
            ibex();
          }, 
          400);
        }, 
        400);
      });
      it("should bubble events correctly", function (boar) {
        var llama; // e
        
              llama = $("#dropdown2");
        raccoon = $("#dropdownBubble");
        expect(llama).toBeHidden("Should be hidden before dropdown is opened.");
        raccoon.find("i").click();
        setTimeout(function () {
          expect(llama).toBeVisible("Should be shown after dropdown is opened.");
          click(document.body);
          setTimeout(function () {
            expect(llama).toBeHidden("Should be hidden after dropdown is closed.");
            boar();
          }, 
          400);
        }, 
        400);
      });
      it("hovered should destroy itself", function (capybara) {
        var mink; // e
        
              mink = $("#dropdownDestroyTrigger");
        $(mink).dropdown("destroy");
        $(mink).dropdown({
          hover : true
        });
        expect(function () {
          $(mink).dropdown("destroy");
        }).not.toThrow();
        setTimeout(function () {
          capybara();
        }, 400);
      });
    });
  });
  