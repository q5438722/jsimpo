'use strict';
(function($) {
  function isFocusable(selector, element) {
    QUnit.push($(selector).is(":focusable"), null, null, element + " - selector " + selector + " is focusable");
  }
  function isNotFocusable(selector, msg) {
    QUnit.push($(selector).length && !$(selector).is(":focusable"), null, null, msg + " - selector " + selector + " is not focusable");
  }
  function isTabbable(selector, msg) {
    QUnit.push($(selector).is(":tabbable"), null, null, msg + " - selector " + selector + " is tabbable");
  }
  function isNotTabbable(selector, msg) {
    QUnit.push($(selector).length && !$(selector).is(":tabbable"), null, null, msg + " - selector " + selector + " is not tabbable");
  }
  module("core - selectors");
  test("data", function() {
    function assertClassesRemoved(messageVisible) {
      ok(str.is(":data(test)"), messageVisible);
    }
    function appendIf(tag) {
      ok(!str.is(":data(test)"), tag);
    }
    expect(15);
    var str;
    str = $("<div>");
    appendIf("data never set");
    str = $("<div>").data("test", null);
    appendIf("data is null");
    str = $("<div>").data("test", true);
    assertClassesRemoved("data set to true");
    str = $("<div>").data("test", false);
    appendIf("data set to false");
    str = $("<div>").data("test", 0);
    appendIf("data set to 0");
    str = $("<div>").data("test", 1);
    assertClassesRemoved("data set to 1");
    str = $("<div>").data("test", "");
    appendIf("data set to empty string");
    str = $("<div>").data("test", "foo");
    assertClassesRemoved("data set to string");
    str = $("<div>").data("test", []);
    assertClassesRemoved("data set to empty array");
    str = $("<div>").data("test", [1]);
    assertClassesRemoved("data set to array");
    str = $("<div>").data("test", {});
    assertClassesRemoved("data set to empty object");
    str = $("<div>").data("test", {
      foo : "bar"
    });
    assertClassesRemoved("data set to object");
    str = $("<div>").data("test", new Date);
    assertClassesRemoved("data set to date");
    str = $("<div>").data("test", /test/);
    assertClassesRemoved("data set to regexp");
    str = $("<div>").data("test", function() {
    });
    assertClassesRemoved("data set to function");
  });
  test("focusable - visible, enabled elements", function() {
    expect(18);
    isNotFocusable("#formNoTabindex", "form");
    isFocusable("#formTabindex", "form with tabindex");
    isFocusable("#visibleAncestor-inputTypeNone", "input, no type");
    isFocusable("#visibleAncestor-inputTypeText", "input, type text");
    isFocusable("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");
    isFocusable("#visibleAncestor-inputTypeRadio", "input, type radio");
    isFocusable("#visibleAncestor-inputTypeButton", "input, type button");
    isNotFocusable("#visibleAncestor-inputTypeHidden", "input, type hidden");
    isFocusable("#visibleAncestor-button", "button");
    isFocusable("#visibleAncestor-select", "select");
    isFocusable("#visibleAncestor-textarea", "textarea");
    isFocusable("#visibleAncestor-object", "object");
    isFocusable("#visibleAncestor-anchorWithHref", "anchor with href");
    isNotFocusable("#visibleAncestor-anchorWithoutHref", "anchor without href");
    isNotFocusable("#visibleAncestor-span", "span");
    isNotFocusable("#visibleAncestor-div", "div");
    isFocusable("#visibleAncestor-spanWithTabindex", "span with tabindex");
    isFocusable("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
  });
  test("focusable - disabled elements", function() {
    expect(9);
    isNotFocusable("#disabledElement-inputTypeNone", "input, no type");
    isNotFocusable("#disabledElement-inputTypeText", "input, type text");
    isNotFocusable("#disabledElement-inputTypeCheckbox", "input, type checkbox");
    isNotFocusable("#disabledElement-inputTypeRadio", "input, type radio");
    isNotFocusable("#disabledElement-inputTypeButton", "input, type button");
    isNotFocusable("#disabledElement-inputTypeHidden", "input, type hidden");
    isNotFocusable("#disabledElement-button", "button");
    isNotFocusable("#disabledElement-select", "select");
    isNotFocusable("#disabledElement-textarea", "textarea");
  });
  test("focusable - hidden styles", function() {
    expect(8);
    isNotFocusable("#displayNoneAncestor-input", "input, display: none parent");
    isNotFocusable("#displayNoneAncestor-span", "span with tabindex, display: none parent");
    isNotFocusable("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");
    isNotFocusable("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");
    isNotFocusable("#displayNone-input", "input, display: none");
    isNotFocusable("#visibilityHidden-input", "input, visibility: hidden");
    isNotFocusable("#displayNone-span", "span with tabindex, display: none");
    isNotFocusable("#visibilityHidden-span", "span with tabindex, visibility: hidden");
  });
  test("focusable - natively focusable with various tabindex", function() {
    expect(4);
    isFocusable("#inputTabindex0", "input, tabindex 0");
    isFocusable("#inputTabindex10", "input, tabindex 10");
    isFocusable("#inputTabindex-1", "input, tabindex -1");
    isFocusable("#inputTabindex-50", "input, tabindex -50");
  });
  test("focusable - not natively focusable with various tabindex", function() {
    expect(4);
    isFocusable("#spanTabindex0", "span, tabindex 0");
    isFocusable("#spanTabindex10", "span, tabindex 10");
    isFocusable("#spanTabindex-1", "span, tabindex -1");
    isFocusable("#spanTabindex-50", "span, tabindex -50");
  });
  test("focusable - area elements", function() {
    isFocusable("#areaCoordsHref", "coords and href");
    isFocusable("#areaNoCoordsHref", "href but no coords");
    isNotFocusable("#areaNoImg", "not associated with an image");
  });
  test("tabbable - visible, enabled elements", function() {
    expect(18);
    isNotTabbable("#formNoTabindex", "form");
    isTabbable("#formTabindex", "form with tabindex");
    isTabbable("#visibleAncestor-inputTypeNone", "input, no type");
    isTabbable("#visibleAncestor-inputTypeText", "input, type text");
    isTabbable("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");
    isTabbable("#visibleAncestor-inputTypeRadio", "input, type radio");
    isTabbable("#visibleAncestor-inputTypeButton", "input, type button");
    isNotTabbable("#visibleAncestor-inputTypeHidden", "input, type hidden");
    isTabbable("#visibleAncestor-button", "button");
    isTabbable("#visibleAncestor-select", "select");
    isTabbable("#visibleAncestor-textarea", "textarea");
    isTabbable("#visibleAncestor-object", "object");
    isTabbable("#visibleAncestor-anchorWithHref", "anchor with href");
    isNotTabbable("#visibleAncestor-anchorWithoutHref", "anchor without href");
    isNotTabbable("#visibleAncestor-span", "span");
    isNotTabbable("#visibleAncestor-div", "div");
    isTabbable("#visibleAncestor-spanWithTabindex", "span with tabindex");
    isNotTabbable("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
  });
  test("tabbable - disabled elements", function() {
    expect(9);
    isNotTabbable("#disabledElement-inputTypeNone", "input, no type");
    isNotTabbable("#disabledElement-inputTypeText", "input, type text");
    isNotTabbable("#disabledElement-inputTypeCheckbox", "input, type checkbox");
    isNotTabbable("#disabledElement-inputTypeRadio", "input, type radio");
    isNotTabbable("#disabledElement-inputTypeButton", "input, type button");
    isNotTabbable("#disabledElement-inputTypeHidden", "input, type hidden");
    isNotTabbable("#disabledElement-button", "button");
    isNotTabbable("#disabledElement-select", "select");
    isNotTabbable("#disabledElement-textarea", "textarea");
  });
  test("tabbable - hidden styles", function() {
    expect(8);
    isNotTabbable("#displayNoneAncestor-input", "input, display: none parent");
    isNotTabbable("#displayNoneAncestor-span", "span with tabindex, display: none parent");
    isNotTabbable("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");
    isNotTabbable("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");
    isNotTabbable("#displayNone-input", "input, display: none");
    isNotTabbable("#visibilityHidden-input", "input, visibility: hidden");
    isNotTabbable("#displayNone-span", "span with tabindex, display: none");
    isNotTabbable("#visibilityHidden-span", "span with tabindex, visibility: hidden");
  });
  test("tabbable -  natively tabbable with various tabindex", function() {
    expect(4);
    isTabbable("#inputTabindex0", "input, tabindex 0");
    isTabbable("#inputTabindex10", "input, tabindex 10");
    isNotTabbable("#inputTabindex-1", "input, tabindex -1");
    isNotTabbable("#inputTabindex-50", "input, tabindex -50");
  });
  test("tabbable -  not natively tabbable with various tabindex", function() {
    expect(4);
    isTabbable("#spanTabindex0", "span, tabindex 0");
    isTabbable("#spanTabindex10", "span, tabindex 10");
    isNotTabbable("#spanTabindex-1", "span, tabindex -1");
    isNotTabbable("#spanTabindex-50", "span, tabindex -50");
  });
  test("tabbable - area elements", function() {
    isTabbable("#areaCoordsHref", "coords and href");
    isTabbable("#areaNoCoordsHref", "href but no coords");
    isNotTabbable("#areaNoImg", "not associated with an image");
  });
})(jQuery);

