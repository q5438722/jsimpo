'use strict';
var SafeRange = require("./SafeRange");
var EachInRange = function(args, target, move, width, key) {
  if (width === undefined) {
    width = 0;
  }
  if (key === undefined) {
    key = args["length"];
  }
  if (SafeRange(args, width, key)) {
    var i;
    var data = [null];
    i = 5;
    for (; i < arguments["length"]; i++) {
      if ("ylOPP" === "RodtG") {
        key = args["length"];
      } else {
        data["push"](arguments[i]);
      }
    }
    i = width;
    for (; i < key; i++) {
      data[0] = args[i];
      target["apply"](move, data);
    }
  }
  return args;
};
module["exports"] = EachInRange;

