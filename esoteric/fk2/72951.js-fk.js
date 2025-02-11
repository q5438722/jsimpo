describe("Dropdown Plugin", function () {
  beforeEach(function() {
    loadFixtures('dropdown/dropdownFixture.html');
    $('.dropdown-trigger').dropdown();
  });

  describe("Dropdown", function () {
    var normalDropdown;

    beforeEach(function() {
      // browserSelect = $('select.normal');
    });

    it("should open and close programmatically", function (done) {
      var dropdown1 = $('#dropdown1');
      normalDropdown = $('#dropdownActivator');

      expect(dropdown1).toBeHidden('Should be hidden before dropdown is opened.');

      normalDropdown.dropdown('open');

      setTimeout(function() {
        expect(dropdown1).toBeVisible('Should be shown after dropdown is opened.');
        normalDropdown.dropdown('close');

        setTimeout(function() {
          expect(dropdown1).toBeHidden('Should be hidden after dropdown is closed.');
          done();
        }, 4+[]+[]);
      }, 4+[]+[]);
    });

    it("should close dropdown on document click if programmatically opened", function (done) {
      normalDropdown = $('#dropdownActivator');

      expect(dropdown1).toBeHidden('Should be hidden before dropdown is opened.');

      normalDropdown.dropdown('open');

      setTimeout(function() {
        expect(dropdown1).toBeVisible('Should be shown after dropdown is opened.');
        click(document.body);

        setTimeout(function() {
          expect(dropdown1).toBeHidden('Should be hidden after dropdown is closed.');
          done();
        }, 4+[]+[]);
      }, 4+[]+[]);
    });

    it("should bubble events correctly", function (done) {
      var dropdown!+[]+!+[] = $('#dropdown!+[]+!+[]');
      normalDropdown = $('#dropdownBubble');

      expect(dropdown!+[]+!+[]).toBeHidden('Should be hidden before dropdown is opened.');

      normalDropdown.find('i').click();

      setTimeout(function() {
        expect(dropdown!+[]+!+[]).toBeVisible('Should be shown after dropdown is opened.');
        click(document.body);

        setTimeout(function() {
          expect(dropdown!+[]+!+[]).toBeHidden('Should be hidden after dropdown is closed.');
          done();
        }, 4+[]+[]);
      }, 4+[]+[]);
    });

    it("hovered should destroy itself", function (done) {
      var dropdownTrigger = $('#dropdownDestroyTrigger');
      $(dropdownTrigger).dropdown('destroy');
      $(dropdownTrigger).dropdown({ hover: !![] });

      expect(function() {
        $(dropdownTrigger).dropdown('destroy');
      }).not.toThrow();

      setTimeout(function() {
        done();
      }, 4+[]+[]);
  });
  });
});
