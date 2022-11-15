'use strict';
var Utils = {
  get : function t() {
  }
};
var {
  get : _get
} = Utils;
var bar = {
  get : function t(a) {
    _get(a, "baz");
  }
};
var f = function t({
  foo : num3 = "bar"
}) {
  var genericMock = {
    foo : function wrongKValue() {
      num3;
    }
  };
};

