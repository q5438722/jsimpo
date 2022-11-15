  (function (raccoon) {
    function chives(hamster, chinchilla) {
      QUnit.push(raccoon(hamster).is(":focusable"), null, null, chinchilla + " - selector " + hamster + " is focusable");
    }
    function bean_sprout(ibex, boar) {
      QUnit.push(raccoon(ibex).length && ! raccoon(ibex).is(":focusable"), 
      null, 
      null, 
      boar + " - selector " + ibex + " is not focusable");
    }
    function broccoflower(llama, capybara) {
      QUnit.push(raccoon(llama).is(":tabbable"), null, null, capybara + " - selector " + llama + " is tabbable");
    }
    function green_bean(mink, prairie_dog) {
      QUnit.push(raccoon(mink).length && ! raccoon(mink).is(":tabbable"), 
      null, 
      null, 
      prairie_dog + " - selector " + mink + " is not tabbable");
    }
      module("core - selectors");
    test("data", function () {
      function amaranth(dogfish) {
        ok(mantis.is(":data(test)"), dogfish);
      }
      function nopale(snail) {
        ok(! mantis.is(":data(test)"), snail);
      }
          var mantis; // e
      
          expect(15);
      mantis = raccoon("<div>");
      nopale("data never set");
      mantis = raccoon("<div>").data("test", null);
      nopale("data is null");
      mantis = raccoon("<div>").data("test", true);
      amaranth("data set to true");
      mantis = raccoon("<div>").data("test", false);
      nopale("data set to false");
      mantis = raccoon("<div>").data("test", 0);
      nopale("data set to 0");
      mantis = raccoon("<div>").data("test", 1);
      amaranth("data set to 1");
      mantis = raccoon("<div>").data("test", "");
      nopale("data set to empty string");
      mantis = raccoon("<div>").data("test", "foo");
      amaranth("data set to string");
      mantis = raccoon("<div>").data("test", []);
      amaranth("data set to empty array");
      mantis = raccoon("<div>").data("test", [1, ]);
      amaranth("data set to array");
      mantis = raccoon("<div>").data("test", {
        
      });
      amaranth("data set to empty object");
      mantis = raccoon("<div>").data("test", {
        foo : "bar"
      });
      amaranth("data set to object");
      mantis = raccoon("<div>").data("test", new Date);
      amaranth("data set to date");
      mantis = raccoon("<div>").data("test", new RegExp("test", ""));
      amaranth("data set to regexp");
      mantis = raccoon("<div>").data("test", function () {
        
      });
      amaranth("data set to function");
    });
    test("focusable - visible, enabled elements", function () {
      expect(18);
      bean_sprout("#formNoTabindex", "form");
      chives("#formTabindex", "form with tabindex");
      chives("#visibleAncestor-inputTypeNone", "input, no type");
      chives("#visibleAncestor-inputTypeText", "input, type text");
      chives("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");
      chives("#visibleAncestor-inputTypeRadio", "input, type radio");
      chives("#visibleAncestor-inputTypeButton", "input, type button");
      bean_sprout("#visibleAncestor-inputTypeHidden", "input, type hidden");
      chives("#visibleAncestor-button", "button");
      chives("#visibleAncestor-select", "select");
      chives("#visibleAncestor-textarea", "textarea");
      chives("#visibleAncestor-object", "object");
      chives("#visibleAncestor-anchorWithHref", "anchor with href");
      bean_sprout("#visibleAncestor-anchorWithoutHref", "anchor without href");
      bean_sprout("#visibleAncestor-span", "span");
      bean_sprout("#visibleAncestor-div", "div");
      chives("#visibleAncestor-spanWithTabindex", "span with tabindex");
      chives("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
    });
    test("focusable - disabled elements", function () {
      expect(9);
      bean_sprout("#disabledElement-inputTypeNone", "input, no type");
      bean_sprout("#disabledElement-inputTypeText", "input, type text");
      bean_sprout("#disabledElement-inputTypeCheckbox", "input, type checkbox");
      bean_sprout("#disabledElement-inputTypeRadio", "input, type radio");
      bean_sprout("#disabledElement-inputTypeButton", "input, type button");
      bean_sprout("#disabledElement-inputTypeHidden", "input, type hidden");
      bean_sprout("#disabledElement-button", "button");
      bean_sprout("#disabledElement-select", "select");
      bean_sprout("#disabledElement-textarea", "textarea");
    });
    test("focusable - hidden styles", function () {
      expect(8);
      bean_sprout("#displayNoneAncestor-input", "input, display: none parent");
      bean_sprout("#displayNoneAncestor-span", "span with tabindex, display: none parent");
      bean_sprout("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");
      bean_sprout("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");
      bean_sprout("#displayNone-input", "input, display: none");
      bean_sprout("#visibilityHidden-input", "input, visibility: hidden");
      bean_sprout("#displayNone-span", "span with tabindex, display: none");
      bean_sprout("#visibilityHidden-span", "span with tabindex, visibility: hidden");
    });
    test("focusable - natively focusable with various tabindex", 
    function () {
      expect(4);
      chives("#inputTabindex0", "input, tabindex 0");
      chives("#inputTabindex10", "input, tabindex 10");
      chives("#inputTabindex-1", "input, tabindex -1");
      chives("#inputTabindex-50", "input, tabindex -50");
    });
    test("focusable - not natively focusable with various tabindex", 
    function () {
      expect(4);
      chives("#spanTabindex0", "span, tabindex 0");
      chives("#spanTabindex10", "span, tabindex 10");
      chives("#spanTabindex-1", "span, tabindex -1");
      chives("#spanTabindex-50", "span, tabindex -50");
    });
    test("focusable - area elements", function () {
      chives("#areaCoordsHref", "coords and href");
      chives("#areaNoCoordsHref", "href but no coords");
      bean_sprout("#areaNoImg", "not associated with an image");
    });
    test("tabbable - visible, enabled elements", function () {
      expect(18);
      green_bean("#formNoTabindex", "form");
      broccoflower("#formTabindex", "form with tabindex");
      broccoflower("#visibleAncestor-inputTypeNone", "input, no type");
      broccoflower("#visibleAncestor-inputTypeText", "input, type text");
      broccoflower("#visibleAncestor-inputTypeCheckbox", "input, type checkbox");
      broccoflower("#visibleAncestor-inputTypeRadio", "input, type radio");
      broccoflower("#visibleAncestor-inputTypeButton", "input, type button");
      green_bean("#visibleAncestor-inputTypeHidden", "input, type hidden");
      broccoflower("#visibleAncestor-button", "button");
      broccoflower("#visibleAncestor-select", "select");
      broccoflower("#visibleAncestor-textarea", "textarea");
      broccoflower("#visibleAncestor-object", "object");
      broccoflower("#visibleAncestor-anchorWithHref", "anchor with href");
      green_bean("#visibleAncestor-anchorWithoutHref", "anchor without href");
      green_bean("#visibleAncestor-span", "span");
      green_bean("#visibleAncestor-div", "div");
      broccoflower("#visibleAncestor-spanWithTabindex", "span with tabindex");
      green_bean("#visibleAncestor-divWithNegativeTabindex", "div with tabindex");
    });
    test("tabbable - disabled elements", function () {
      expect(9);
      green_bean("#disabledElement-inputTypeNone", "input, no type");
      green_bean("#disabledElement-inputTypeText", "input, type text");
      green_bean("#disabledElement-inputTypeCheckbox", "input, type checkbox");
      green_bean("#disabledElement-inputTypeRadio", "input, type radio");
      green_bean("#disabledElement-inputTypeButton", "input, type button");
      green_bean("#disabledElement-inputTypeHidden", "input, type hidden");
      green_bean("#disabledElement-button", "button");
      green_bean("#disabledElement-select", "select");
      green_bean("#disabledElement-textarea", "textarea");
    });
    test("tabbable - hidden styles", function () {
      expect(8);
      green_bean("#displayNoneAncestor-input", "input, display: none parent");
      green_bean("#displayNoneAncestor-span", "span with tabindex, display: none parent");
      green_bean("#visibilityHiddenAncestor-input", "input, visibility: hidden parent");
      green_bean("#visibilityHiddenAncestor-span", "span with tabindex, visibility: hidden parent");
      green_bean("#displayNone-input", "input, display: none");
      green_bean("#visibilityHidden-input", "input, visibility: hidden");
      green_bean("#displayNone-span", "span with tabindex, display: none");
      green_bean("#visibilityHidden-span", "span with tabindex, visibility: hidden");
    });
    test("tabbable -  natively tabbable with various tabindex", 
    function () {
      expect(4);
      broccoflower("#inputTabindex0", "input, tabindex 0");
      broccoflower("#inputTabindex10", "input, tabindex 10");
      green_bean("#inputTabindex-1", "input, tabindex -1");
      green_bean("#inputTabindex-50", "input, tabindex -50");
    });
    test("tabbable -  not natively tabbable with various tabindex", 
    function () {
      expect(4);
      broccoflower("#spanTabindex0", "span, tabindex 0");
      broccoflower("#spanTabindex10", "span, tabindex 10");
      green_bean("#spanTabindex-1", "span, tabindex -1");
      green_bean("#spanTabindex-50", "span, tabindex -50");
    });
    test("tabbable - area elements", function () {
      broccoflower("#areaCoordsHref", "coords and href");
      broccoflower("#areaNoCoordsHref", "href but no coords");
      green_bean("#areaNoImg", "not associated with an image");
    });
  })(jQuery);
  