'use strict';
module.exports = function(r) {
  try {
    var t = require(r + ".js");
  } catch (r) {
  }
  try {
    var c = require("" + r + ".js");
  } catch (r) {
  }
  try {
    var e = require("./" + r + ".js");
  } catch (r) {
  }
  try {
    var substitutorFn = require("./" + r);
  } catch (r) {
  }
  return {
    a : typeof t === "function",
    b : typeof c === "function",
    c : typeof e === "function",
    d : typeof substitutorFn === "function"
  };
};

