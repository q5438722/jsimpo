'use strict';
define(function(require, canCreateDiscussions, n) {
  var SpecRunnerUtils = require("spec/SpecRunnerUtils");
  describe("SpecRunnerUtils", function() {
    describe("simulateKeyEvent", function() {
      var mockElement;
      var e;
      beforeEach(function() {
        mockElement = SpecRunnerUtils.createMockElement();
        mockElement.on("keydown", function(tmp) {
          e = tmp;
        });
      });
      afterEach(function() {
        mockElement.remove();
        e = null;
      });
      it("should create and dispatch a key event to an element", function() {
        SpecRunnerUtils.simulateKeyEvent(82, "keydown", mockElement[0]);
        expect(e.keyCode).toEqual(82);
        expect(e.which).toEqual(82);
        expect(e.charCode).toEqual(82);
      });
      it("should create and dispatch a key event with modifiers to an element", function() {
        var modifiers = {
          ctrlKey : true,
          altKey : true
        };
        SpecRunnerUtils.simulateKeyEvent(82, "keydown", mockElement[0], modifiers);
        expect(e.keyCode).toEqual(82);
        expect(e.which).toEqual(82);
        expect(e.charCode).toEqual(82);
        expect(e.ctrlKey).toEqual(true);
        expect(e.altKey).toEqual(true);
      });
    });
  });
});

