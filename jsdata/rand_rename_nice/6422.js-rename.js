'use strict';
define(["../lang/toString"], function(String) {
  function SCxmlEvent(type, name, f) {
    type = String(type);
    name = String(name);
    return type.indexOf(name, f) !== -1;
  }
  return SCxmlEvent;
});

