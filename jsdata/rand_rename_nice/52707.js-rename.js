'use strict';
var util = require("util");
var Action = require("../action");
var c = require("../const");
var ActionAppend = module.exports = function ActionAppend(options) {
  options = options || {};
  if (this.nargs <= 0) {
    throw new Error("nargs for append actions must be > 0; if arg " + "strings are not supplying the value to append, " + "the append const action may be more appropriate");
  }
  if (!!this.constant && this.nargs !== c.OPTIONAL) {
    throw new Error("nargs must be OPTIONAL to supply const");
  }
  Action.call(this, options);
};
util.inherits(ActionAppend, Action);
ActionAppend.prototype.call = function(enduro_server, namespace, baseTimeOrLabel) {
  var i = (namespace[this.dest] || []).slice();
  i.push(baseTimeOrLabel);
  namespace.set(this.dest, i);
};

