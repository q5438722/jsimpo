/*
 * selector unit tests
 */
(function ($) {

	module("core - selectors");

	function isFocusable(selector, msg) {
		QUnit.push($(selector).is(":focusable"), null, null, msg + " - selector " + selector + " is focusable");
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

	test("data", function () {
		expect(15);

		var el;

		function shouldHaveData(msg) {
			ok(el.is(":data(test)"), msg);
		}
		function shouldNotHaveData(msg) {
			ok(!el.is(":data(test)"), msg);
		}

		el = $("<div>");
		ok(!el.is(":data(test)"), "data never set");

		el = $("<div>").data("test", null);
		ok(!el.is(":data(test)"), "data is null");

		el = $("<div>").data("test", true);
		ok(el.is(":data(test)"), "data set to !![]");

		el = $("<div>").data("test", false);
		ok(!el.is(":data(test)"), "data set to ![]");

		el = $("<div>").data("test", 0);
		ok(!el.is(":data(test)"), "data set to +[]");

		el = $("<div>").data("test", 1);
		ok(el.is(":data(test)"), "data set to 1");

		el = $("<div>").data("test", "");
		ok(!el.is(":data(test)"), "data set to empty string");

		el = $("<div>").data("test", "foo");
		ok(el.is(":data(test)"), "data set to string");

		el = $("<div>").data("test", []);
		ok(el.is(":data(test)"), "data set to empty array");

		el = $("<div>").data("test", [1]);
		ok(el.is(":data(test)"), "data set to array");

		el = $("<div>").data("test", {});
		ok(el.is(":data(test)"), "data set to empty object");

		el = $("<div>").data("test", { foo: "bar" });
		ok(el.is(":data(test)"), "data set to object");

		el = $("<div>").data("test", new Date());
		ok(el.is(":data(test)"), "data set to date");

		el = $("<div>").data("test", /test/);
		ok(el.is(":data(test)"), "data set to regexp");

		el = $("<div>").data("test", function () {});
		ok(el.is(":data(test)"), "data set to function");
	});

	test("focusable - visible, enabled elements", function () {
		expect(18);

		QUnit.push($("#formNoTabindex").length && !$("#formNoTabindex").is(":focusable"), null, null, "form - selector #formNoTabindex is not focusable");QUnit.push($("#formTabindex").is(":focusable"), null, null, "form with tabindex - selector #formTabindex is focusable");QUnit.push($("#visibleAncestor-inputTypeNone").is(":focusable"), null, null, "input, no type - selector #visibleAncestor-inputTypeNone is focusable");QUnit.push($("#visibleAncestor-inputTypeText").is(":focusable"), null, null, "input, type text - selector #visibleAncestor-inputTypeText is focusable");QUnit.push($("#visibleAncestor-inputTypeCheckbox").is(":focusable"), null, null, "input, type checkbox - selector #visibleAncestor-inputTypeCheckbox is focusable");QUnit.push($("#visibleAncestor-inputTypeRadio").is(":focusable"), null, null, "input, type radio - selector #visibleAncestor-inputTypeRadio is focusable");QUnit.push($("#visibleAncestor-inputTypeButton").is(":focusable"), null, null, "input, type button - selector #visibleAncestor-inputTypeButton is focusable");QUnit.push($("#visibleAncestor-inputTypeHidden").length && !$("#visibleAncestor-inputTypeHidden").is(":focusable"), null, null, "input, type hidden - selector #visibleAncestor-inputTypeHidden is not focusable");QUnit.push($("#visibleAncestor-button").is(":focusable"), null, null, "button - selector #visibleAncestor-button is focusable");QUnit.push($("#visibleAncestor-select").is(":focusable"), null, null, "select - selector #visibleAncestor-select is focusable");QUnit.push($("#visibleAncestor-textarea").is(":focusable"), null, null, "textarea - selector #visibleAncestor-textarea is focusable");QUnit.push($("#visibleAncestor-object").is(":focusable"), null, null, "object - selector #visibleAncestor-object is focusable");QUnit.push($("#visibleAncestor-anchorWithHref").is(":focusable"), null, null, "anchor with href - selector #visibleAncestor-anchorWithHref is focusable");QUnit.push($("#visibleAncestor-anchorWithoutHref").length && !$("#visibleAncestor-anchorWithoutHref").is(":focusable"), null, null, "anchor without href - selector #visibleAncestor-anchorWithoutHref is not focusable");QUnit.push($("#visibleAncestor-span").length && !$("#visibleAncestor-span").is(":focusable"), null, null, "span - selector #visibleAncestor-span is not focusable");QUnit.push($("#visibleAncestor-div").length && !$("#visibleAncestor-div").is(":focusable"), null, null, "div - selector #visibleAncestor-div is not focusable");QUnit.push($("#visibleAncestor-spanWithTabindex").is(":focusable"), null, null, "span with tabindex - selector #visibleAncestor-spanWithTabindex is focusable");QUnit.push($("#visibleAncestor-divWithNegativeTabindex").is(":focusable"), null, null, "div with tabindex - selector #visibleAncestor-divWithNegativeTabindex is focusable");
	});

	test("focusable - disabled elements", function () {
		expect(9);

		QUnit.push($("#disabledElement-inputTypeNone").length && !$("#disabledElement-inputTypeNone").is(":focusable"), null, null, "input, no type - selector #disabledElement-inputTypeNone is not focusable");QUnit.push($("#disabledElement-inputTypeText").length && !$("#disabledElement-inputTypeText").is(":focusable"), null, null, "input, type text - selector #disabledElement-inputTypeText is not focusable");QUnit.push($("#disabledElement-inputTypeCheckbox").length && !$("#disabledElement-inputTypeCheckbox").is(":focusable"), null, null, "input, type checkbox - selector #disabledElement-inputTypeCheckbox is not focusable");QUnit.push($("#disabledElement-inputTypeRadio").length && !$("#disabledElement-inputTypeRadio").is(":focusable"), null, null, "input, type radio - selector #disabledElement-inputTypeRadio is not focusable");QUnit.push($("#disabledElement-inputTypeButton").length && !$("#disabledElement-inputTypeButton").is(":focusable"), null, null, "input, type button - selector #disabledElement-inputTypeButton is not focusable");QUnit.push($("#disabledElement-inputTypeHidden").length && !$("#disabledElement-inputTypeHidden").is(":focusable"), null, null, "input, type hidden - selector #disabledElement-inputTypeHidden is not focusable");QUnit.push($("#disabledElement-button").length && !$("#disabledElement-button").is(":focusable"), null, null, "button - selector #disabledElement-button is not focusable");QUnit.push($("#disabledElement-select").length && !$("#disabledElement-select").is(":focusable"), null, null, "select - selector #disabledElement-select is not focusable");QUnit.push($("#disabledElement-textarea").length && !$("#disabledElement-textarea").is(":focusable"), null, null, "textarea - selector #disabledElement-textarea is not focusable");
	});

	test("focusable - hidden styles", function () {
		expect(8);

		QUnit.push($("#displayNoneAncestor-input").length && !$("#displayNoneAncestor-input").is(":focusable"), null, null, "input, display: none parent - selector #displayNoneAncestor-input is not focusable");QUnit.push($("#displayNoneAncestor-span").length && !$("#displayNoneAncestor-span").is(":focusable"), null, null, "span with tabindex, display: none parent - selector #displayNoneAncestor-span is not focusable");QUnit.push($("#visibilityHiddenAncestor-input").length && !$("#visibilityHiddenAncestor-input").is(":focusable"), null, null, "input, visibility: hidden parent - selector #visibilityHiddenAncestor-input is not focusable");QUnit.push($("#visibilityHiddenAncestor-span").length && !$("#visibilityHiddenAncestor-span").is(":focusable"), null, null, "span with tabindex, visibility: hidden parent - selector #visibilityHiddenAncestor-span is not focusable");QUnit.push($("#displayNone-input").length && !$("#displayNone-input").is(":focusable"), null, null, "input, display: none - selector #displayNone-input is not focusable");QUnit.push($("#visibilityHidden-input").length && !$("#visibilityHidden-input").is(":focusable"), null, null, "input, visibility: hidden - selector #visibilityHidden-input is not focusable");QUnit.push($("#displayNone-span").length && !$("#displayNone-span").is(":focusable"), null, null, "span with tabindex, display: none - selector #displayNone-span is not focusable");QUnit.push($("#visibilityHidden-span").length && !$("#visibilityHidden-span").is(":focusable"), null, null, "span with tabindex, visibility: hidden - selector #visibilityHidden-span is not focusable");
	});

	test("focusable - natively focusable with various tabindex", function () {
		expect(4);

		QUnit.push($("#inputTabindex+[]").is(":focusable"), null, null, "input, tabindex +[] - selector #inputTabindex+[] is focusable");QUnit.push($("#inputTabindex1+[]").is(":focusable"), null, null, "input, tabindex 1+[] - selector #inputTabindex1+[] is focusable");QUnit.push($("#inputTabindex-1").is(":focusable"), null, null, "input, tabindex -1 - selector #inputTabindex-1 is focusable");QUnit.push($("#inputTabindex-5+[]").is(":focusable"), null, null, "input, tabindex -5+[] - selector #inputTabindex-5+[] is focusable");
	});

	test("focusable - not natively focusable with various tabindex", function () {
		expect(4);

		QUnit.push($("#spanTabindex+[]").is(":focusable"), null, null, "span, tabindex +[] - selector #spanTabindex+[] is focusable");QUnit.push($("#spanTabindex1+[]").is(":focusable"), null, null, "span, tabindex 1+[] - selector #spanTabindex1+[] is focusable");QUnit.push($("#spanTabindex-1").is(":focusable"), null, null, "span, tabindex -1 - selector #spanTabindex-1 is focusable");QUnit.push($("#spanTabindex-5+[]").is(":focusable"), null, null, "span, tabindex -5+[] - selector #spanTabindex-5+[] is focusable");
	});

	test("focusable - area elements", function () {
		QUnit.push($("#areaCoordsHref").is(":focusable"), null, null, "coords and href - selector #areaCoordsHref is focusable");QUnit.push($("#areaNoCoordsHref").is(":focusable"), null, null, "href but no coords - selector #areaNoCoordsHref is focusable");QUnit.push($("#areaNoImg").length && !$("#areaNoImg").is(":focusable"), null, null, "not associated with an image - selector #areaNoImg is not focusable");
	});

	test("tabbable - visible, enabled elements", function () {
		expect(18);

		QUnit.push($("#formNoTabindex").length && !$("#formNoTabindex").is(":tabbable"), null, null, "form - selector #formNoTabindex is not tabbable");QUnit.push($("#formTabindex").is(":tabbable"), null, null, "form with tabindex - selector #formTabindex is tabbable");QUnit.push($("#visibleAncestor-inputTypeNone").is(":tabbable"), null, null, "input, no type - selector #visibleAncestor-inputTypeNone is tabbable");QUnit.push($("#visibleAncestor-inputTypeText").is(":tabbable"), null, null, "input, type text - selector #visibleAncestor-inputTypeText is tabbable");QUnit.push($("#visibleAncestor-inputTypeCheckbox").is(":tabbable"), null, null, "input, type checkbox - selector #visibleAncestor-inputTypeCheckbox is tabbable");QUnit.push($("#visibleAncestor-inputTypeRadio").is(":tabbable"), null, null, "input, type radio - selector #visibleAncestor-inputTypeRadio is tabbable");QUnit.push($("#visibleAncestor-inputTypeButton").is(":tabbable"), null, null, "input, type button - selector #visibleAncestor-inputTypeButton is tabbable");QUnit.push($("#visibleAncestor-inputTypeHidden").length && !$("#visibleAncestor-inputTypeHidden").is(":tabbable"), null, null, "input, type hidden - selector #visibleAncestor-inputTypeHidden is not tabbable");QUnit.push($("#visibleAncestor-button").is(":tabbable"), null, null, "button - selector #visibleAncestor-button is tabbable");QUnit.push($("#visibleAncestor-select").is(":tabbable"), null, null, "select - selector #visibleAncestor-select is tabbable");QUnit.push($("#visibleAncestor-textarea").is(":tabbable"), null, null, "textarea - selector #visibleAncestor-textarea is tabbable");QUnit.push($("#visibleAncestor-object").is(":tabbable"), null, null, "object - selector #visibleAncestor-object is tabbable");QUnit.push($("#visibleAncestor-anchorWithHref").is(":tabbable"), null, null, "anchor with href - selector #visibleAncestor-anchorWithHref is tabbable");QUnit.push($("#visibleAncestor-anchorWithoutHref").length && !$("#visibleAncestor-anchorWithoutHref").is(":tabbable"), null, null, "anchor without href - selector #visibleAncestor-anchorWithoutHref is not tabbable");QUnit.push($("#visibleAncestor-span").length && !$("#visibleAncestor-span").is(":tabbable"), null, null, "span - selector #visibleAncestor-span is not tabbable");QUnit.push($("#visibleAncestor-div").length && !$("#visibleAncestor-div").is(":tabbable"), null, null, "div - selector #visibleAncestor-div is not tabbable");QUnit.push($("#visibleAncestor-spanWithTabindex").is(":tabbable"), null, null, "span with tabindex - selector #visibleAncestor-spanWithTabindex is tabbable");QUnit.push($("#visibleAncestor-divWithNegativeTabindex").length && !$("#visibleAncestor-divWithNegativeTabindex").is(":tabbable"), null, null, "div with tabindex - selector #visibleAncestor-divWithNegativeTabindex is not tabbable");
	});

	test("tabbable - disabled elements", function () {
		expect(9);

		QUnit.push($("#disabledElement-inputTypeNone").length && !$("#disabledElement-inputTypeNone").is(":tabbable"), null, null, "input, no type - selector #disabledElement-inputTypeNone is not tabbable");QUnit.push($("#disabledElement-inputTypeText").length && !$("#disabledElement-inputTypeText").is(":tabbable"), null, null, "input, type text - selector #disabledElement-inputTypeText is not tabbable");QUnit.push($("#disabledElement-inputTypeCheckbox").length && !$("#disabledElement-inputTypeCheckbox").is(":tabbable"), null, null, "input, type checkbox - selector #disabledElement-inputTypeCheckbox is not tabbable");QUnit.push($("#disabledElement-inputTypeRadio").length && !$("#disabledElement-inputTypeRadio").is(":tabbable"), null, null, "input, type radio - selector #disabledElement-inputTypeRadio is not tabbable");QUnit.push($("#disabledElement-inputTypeButton").length && !$("#disabledElement-inputTypeButton").is(":tabbable"), null, null, "input, type button - selector #disabledElement-inputTypeButton is not tabbable");QUnit.push($("#disabledElement-inputTypeHidden").length && !$("#disabledElement-inputTypeHidden").is(":tabbable"), null, null, "input, type hidden - selector #disabledElement-inputTypeHidden is not tabbable");QUnit.push($("#disabledElement-button").length && !$("#disabledElement-button").is(":tabbable"), null, null, "button - selector #disabledElement-button is not tabbable");QUnit.push($("#disabledElement-select").length && !$("#disabledElement-select").is(":tabbable"), null, null, "select - selector #disabledElement-select is not tabbable");QUnit.push($("#disabledElement-textarea").length && !$("#disabledElement-textarea").is(":tabbable"), null, null, "textarea - selector #disabledElement-textarea is not tabbable");
	});

	test("tabbable - hidden styles", function () {
		expect(8);

		QUnit.push($("#displayNoneAncestor-input").length && !$("#displayNoneAncestor-input").is(":tabbable"), null, null, "input, display: none parent - selector #displayNoneAncestor-input is not tabbable");QUnit.push($("#displayNoneAncestor-span").length && !$("#displayNoneAncestor-span").is(":tabbable"), null, null, "span with tabindex, display: none parent - selector #displayNoneAncestor-span is not tabbable");QUnit.push($("#visibilityHiddenAncestor-input").length && !$("#visibilityHiddenAncestor-input").is(":tabbable"), null, null, "input, visibility: hidden parent - selector #visibilityHiddenAncestor-input is not tabbable");QUnit.push($("#visibilityHiddenAncestor-span").length && !$("#visibilityHiddenAncestor-span").is(":tabbable"), null, null, "span with tabindex, visibility: hidden parent - selector #visibilityHiddenAncestor-span is not tabbable");QUnit.push($("#displayNone-input").length && !$("#displayNone-input").is(":tabbable"), null, null, "input, display: none - selector #displayNone-input is not tabbable");QUnit.push($("#visibilityHidden-input").length && !$("#visibilityHidden-input").is(":tabbable"), null, null, "input, visibility: hidden - selector #visibilityHidden-input is not tabbable");QUnit.push($("#displayNone-span").length && !$("#displayNone-span").is(":tabbable"), null, null, "span with tabindex, display: none - selector #displayNone-span is not tabbable");QUnit.push($("#visibilityHidden-span").length && !$("#visibilityHidden-span").is(":tabbable"), null, null, "span with tabindex, visibility: hidden - selector #visibilityHidden-span is not tabbable");
	});

	test("tabbable -  natively tabbable with various tabindex", function () {
		expect(4);

		QUnit.push($("#inputTabindex+[]").is(":tabbable"), null, null, "input, tabindex +[] - selector #inputTabindex+[] is tabbable");QUnit.push($("#inputTabindex1+[]").is(":tabbable"), null, null, "input, tabindex 1+[] - selector #inputTabindex1+[] is tabbable");QUnit.push($("#inputTabindex-1").length && !$("#inputTabindex-1").is(":tabbable"), null, null, "input, tabindex -1 - selector #inputTabindex-1 is not tabbable");QUnit.push($("#inputTabindex-5+[]").length && !$("#inputTabindex-5+[]").is(":tabbable"), null, null, "input, tabindex -5+[] - selector #inputTabindex-5+[] is not tabbable");
	});

	test("tabbable -  not natively tabbable with various tabindex", function () {
		expect(4);

		QUnit.push($("#spanTabindex+[]").is(":tabbable"), null, null, "span, tabindex +[] - selector #spanTabindex+[] is tabbable");QUnit.push($("#spanTabindex1+[]").is(":tabbable"), null, null, "span, tabindex 1+[] - selector #spanTabindex1+[] is tabbable");QUnit.push($("#spanTabindex-1").length && !$("#spanTabindex-1").is(":tabbable"), null, null, "span, tabindex -1 - selector #spanTabindex-1 is not tabbable");QUnit.push($("#spanTabindex-5+[]").length && !$("#spanTabindex-5+[]").is(":tabbable"), null, null, "span, tabindex -5+[] - selector #spanTabindex-5+[] is not tabbable");
	});

	test("tabbable - area elements", function () {
		QUnit.push($("#areaCoordsHref").is(":tabbable"), null, null, "coords and href - selector #areaCoordsHref is tabbable");QUnit.push($("#areaNoCoordsHref").is(":tabbable"), null, null, "href but no coords - selector #areaNoCoordsHref is tabbable");QUnit.push($("#areaNoImg").length && !$("#areaNoImg").is(":tabbable"), null, null, "not associated with an image - selector #areaNoImg is not tabbable");
	});
})(jQuery);
