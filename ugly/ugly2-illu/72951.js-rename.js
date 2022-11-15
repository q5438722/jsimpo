describe("Dropdown Plugin", function () {
  beforeEach(function () {
    loadFixtures("dropdown/dropdownFixture.html");$(".dropdown-trigger").dropdown();
  });describe("Dropdown", function () {
    var d;
    beforeEach(function () {});it("should open and close programmatically", function (o) {
      const e = $("#dropdown1");
      d = $("#dropdownActivator");expect(e).toBeHidden("Should be hidden before dropdown is opened.");d.dropdown("open");setTimeout(function () {
        expect(e).toBeVisible("Should be shown after dropdown is opened.");d.dropdown("close");setTimeout(function () {
          expect(e).toBeHidden("Should be hidden after dropdown is closed.");o();
        }, 400);
      }, 400);
    });it("should close dropdown on document click if programmatically opened", function (o) {
      d = $("#dropdownActivator");expect(dropdown1).toBeHidden("Should be hidden before dropdown is opened.");d.dropdown("open");setTimeout(function () {
        expect(dropdown1).toBeVisible("Should be shown after dropdown is opened.");click(document.body);setTimeout(function () {
          expect(dropdown1).toBeHidden("Should be hidden after dropdown is closed.");o();
        }, 400);
      }, 400);
    });it("should bubble events correctly", function (o) {
      const e = $("#dropdown2");
      d = $("#dropdownBubble");expect(e).toBeHidden("Should be hidden before dropdown is opened.");d.find("i").click();setTimeout(function () {
        expect(e).toBeVisible("Should be shown after dropdown is opened.");click(document.body);setTimeout(function () {
          expect(e).toBeHidden("Should be hidden after dropdown is closed.");o();
        }, 400);
      }, 400);
    });it("hovered should destroy itself", function (o) {
      const e = $("#dropdownDestroyTrigger");
      $(e).dropdown("destroy");$(e).dropdown({ hover: true });expect(function () {
        $(e).dropdown("destroy");
      }).not.toThrow();setTimeout(function () {
        o();
      }, 400);
    });
  });
});
