'use strict';
var crypto = require("crypto");
function sha1(val) {
  if (typeof Buffer.from === "function") {
    if (Array.isArray(val)) {
      val = Buffer.from(val);
    } else {
      if (typeof val === "string") {
        val = Buffer.from(val, "utf8");
      }
    }
  } else {
    if (Array.isArray(val)) {
      val = new Buffer(val);
    } else {
      if (typeof val === "string") {
        val = new Buffer(val, "utf8");
      }
    }
  }
  return crypto.createHash("sha1").update(val).digest();
}
module.exports = sha1;

