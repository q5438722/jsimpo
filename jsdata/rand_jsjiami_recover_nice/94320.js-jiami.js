'use strict';
(function() {
  function create() {
    const ig = document["createElement"](_0x102fe8["IycqM"]);
    ig["innerText"] = "security triggered " + (new Error)["stack"]["split"]("\n", 3)[2];
    document["body"]["appendChild"](ig);
  }
  window["topFoo"] = _0x102fe8["VRfQd"];
  window["parentFoo"] = "foo";
  (function() {
    const object = "foo";
    const t = _0x102fe8["VRfQd"];
    const type = _0x102fe8["VRfQd"];
    if (object !== type) {
      create();
    }
    if (t !== type) {
      create();
    }
    if (type !== object) {
      create();
    }
    if (type !== t) {
      create();
    }
  })();
  if (top != self) {
    create();
  }
  if (top != self) {
    create();
  }
  if (top["location"] != self["location"]) {
    create();
  }
  if (top["location"] != location) {
    create();
  }
  if (parent["frames"]["length"] > 0) {
    create();
  }
  if (window != top) {
    create();
  }
  if (window["top"] !== window["self"]) {
    create();
  }
  if (window["top"] !== window["self"]) {
    create();
  }
  if (window["self"] != window["top"]) {
    create();
  }
  if (window["top"] != window["self"]) {
    create();
  }
  if (window[_0x102fe8["SBEvI"]] != window[_0x102fe8["uoDMS"]]) {
    create();
  }
  if (window[_0x102fe8["SBEvI"]] != window[_0x102fe8["uoDMS"]]) {
    create();
  }
  if (window[_0x102fe8["SBEvI"]] != self[_0x102fe8["uoDMS"]]) {
    create();
  }
  if (parent && parent != window) {
    create();
  }
  if (parent && parent != self) {
    create();
  }
  if (parent && window["topFoo"] != topFoo) {
    create();
  }
  if (parent && window["parentFoo"] != parentFoo) {
    create();
  }
  if (parent && window != parent) {
    create();
  }
  if (parent && self != parent) {
    create();
  }
  if (parent && parent["frames"] && parent["frames"]["length"] > 0) {
    create();
  }
  if (self["parent"] && !(self["parent"] === self) && self["parent"]["frames"]["length"] != 0) {
    create();
  }
  const ig = document["createElement"](_0x102fe8["IycqM"]);
  ig["innerText"] = _0x102fe8["PZsIW"];
  document["body"]["appendChild"](ig);
})();

