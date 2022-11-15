(function (n) {
  module("core - selectors");function t(t, e) {
    QUnit.push(n(t).is(":focusable"), null, null, e + " - selector " + t + " is focusable");
  }function e(t, e) {
    QUnit.push(n(t).length && !n(t).is(":focusable"), null, null, e + " - selector " + t + " is not focusable");
  }function i(t, e) {
    QUnit.push(n(t).is(":tabbable"), null, null, e + " - selector " + t + " is tabbable");
  }function a(t, e) {
    QUnit.push(n(t).length && !n(t).is(":tabbable"), null, null, e + " - selector " + t + " is not tabbable");
  }test("data", function () {
    expect(15);var e;
    function t(t) {
      ok(e.is(":data(test)"), t);
    }function i(t) {
      ok(!e.is(":data(test)"), t);
    }e = n("<div>");i("data never set");e = n("<div>").data("test", null);i("data is null");e = n("<div>").data("test", true);t("data set to true");e = n("<div>").data("test", false);i("data set to false");e = n("<div>").data("test", 0);i("data set to 0");e = n("<div>").data("test", 1);t("data set to 1");e = n("<div>").data("test", "");i("data set to empty string");e = n("<div>").data("test", "foo");t("data set to string");e = n("<div>").data("test", []);t("data set to empty array");e = n("<div>").data("test", [1]);t("data set to array");e = n("<div>").data("test", {});t("data set to empty object");e = n("<div>").data("test", { foo: "bar" });t("data set to object");e = n("<div>").data("test", new Date());t("data set to date");e = n("<div>").data("test", /test/);t("data set to regexp");e = n("<div>").data("test", function () {});t("data set to function");
  });test("focusable - visible, enabled elements", function () {
    expect(18);e("#formNoTabindex", "form");t("#formTabindex", "form with tabindex");t("#visibleAncestor-inputTypeNone", "input, no type");t("#visibleAncestor-inputTypeText", "input, type text");t("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");t("#visibleAncestor-inputTypeRadio", "input, type radio");t("#visibleAncestor-inputTypeButton", "input, type button");e("#visibleAncestor-inputTypeHidden", "input, type hidden");t("#visibleAncestor-button", "button");t("#visibleAncestor-select", "select");t("#visibleAncestor-textarea", "textarea");t("#visibleAncestor-object", "object");t("#visibleAncestor-anchorWithHref", "anchor with href");e("#visibleAncestor-anchorWithoutHref", "anchor without href");e("#visibleAncestor-span", "span");e("#visibleAncestor-div", "div");t("#visibleAncestor-spanWithTabindex", "span with tabindex");t("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
  });test("focusable - disabled elements", function () {
    expect(9);e("#disabledElement-inputTypeNone", "input, no type");e("#disabledElement-inputTypeText", "input, type text");e("#disabledElement-inputTypeCheckbox", "input, type checkbox");e("#disabledElement-inputTypeRadio", "input, type radio");e("#disabledElement-inputTypeButton", "input, type button");e("#disabledElement-inputTypeHidden", "input, type hidden");e("#disabledElement-button", "button");e("#disabledElement-select", "select");e("#disabledElement-textarea", "textarea");
  });test("focusable - hidden styles", function () {
    expect(8);e("#displayNoneAncestor-input", "input, display: none parent");e("#displayNoneAncestor-span", "span with tabindex, display: none parent");e("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");e("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");e("#displayNone-input", "input, display: none");e("#visibilityHidden-input", "input, visibility: hidden");e("#displayNone-span", "span with tabindex, display: none");e("#visibilityHidden-span", "span with tabindex, visibility: hidden");
  });test("focusable - natively focusable with various tabindex", function () {
    expect(4);t("#inputTabindex0", "input, tabindex 0");t("#inputTabindex10", "input, tabindex 10");t("#inputTabindex-1", "input, tabindex -1");t("#inputTabindex-50", "input, tabindex -50");
  });test("focusable - not natively focusable with various tabindex", function () {
    expect(4);t("#spanTabindex0", "span, tabindex 0");t("#spanTabindex10", "span, tabindex 10");t("#spanTabindex-1", "span, tabindex -1");t("#spanTabindex-50", "span, tabindex -50");
  });test("focusable - area elements", function () {
    t("#areaCoordsHref", "coords and href");t("#areaNoCoordsHref", "href but no coords");e("#areaNoImg", "not associated with an image");
  });test("tabbable - visible, enabled elements", function () {
    expect(18);a("#formNoTabindex", "form");i("#formTabindex", "form with tabindex");i("#visibleAncestor-inputTypeNone", "input, no type");i("#visibleAncestor-inputTypeText", "input, type text");i("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");i("#visibleAncestor-inputTypeRadio", "input, type radio");i("#visibleAncestor-inputTypeButton", "input, type button");a("#visibleAncestor-inputTypeHidden", "input, type hidden");i("#visibleAncestor-button", "button");i("#visibleAncestor-select", "select");i("#visibleAncestor-textarea", "textarea");i("#visibleAncestor-object", "object");i("#visibleAncestor-anchorWithHref", "anchor with href");a("#visibleAncestor-anchorWithoutHref", "anchor without href");a("#visibleAncestor-span", "span");a("#visibleAncestor-div", "div");i("#visibleAncestor-spanWithTabindex", "span with tabindex");a("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
  });test("tabbable - disabled elements", function () {
    expect(9);a("#disabledElement-inputTypeNone", "input, no type");a("#disabledElement-inputTypeText", "input, type text");a("#disabledElement-inputTypeCheckbox", "input, type checkbox");a("#disabledElement-inputTypeRadio", "input, type radio");a("#disabledElement-inputTypeButton", "input, type button");a("#disabledElement-inputTypeHidden", "input, type hidden");a("#disabledElement-button", "button");a("#disabledElement-select", "select");a("#disabledElement-textarea", "textarea");
  });test("tabbable - hidden styles", function () {
    expect(8);a("#displayNoneAncestor-input", "input, display: none parent");a("#displayNoneAncestor-span", "span with tabindex, display: none parent");a("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");a("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");a("#displayNone-input", "input, display: none");a("#visibilityHidden-input", "input, visibility: hidden");a("#displayNone-span", "span with tabindex, display: none");a("#visibilityHidden-span", "span with tabindex, visibility: hidden");
  });test("tabbable -  natively tabbable with various tabindex", function () {
    expect(4);i("#inputTabindex0", "input, tabindex 0");i("#inputTabindex10", "input, tabindex 10");a("#inputTabindex-1", "input, tabindex -1");a("#inputTabindex-50", "input, tabindex -50");
  });test("tabbable -  not natively tabbable with various tabindex", function () {
    expect(4);i("#spanTabindex0", "span, tabindex 0");i("#spanTabindex10", "span, tabindex 10");a("#spanTabindex-1", "span, tabindex -1");a("#spanTabindex-50", "span, tabindex -50");
  });test("tabbable - area elements", function () {
    i("#areaCoordsHref", "coords and href");i("#areaNoCoordsHref", "href but no coords");a("#areaNoImg", "not associated with an image");
  });
})(jQuery);
