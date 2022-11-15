'use strict';
define(["../lang/toString"], function(String) {
  function translate(s, name, index) {
    s = String(s);
    name = String(name);
    return s["indexOf"](name, index) !== -1;
  }
  return translate;
});

