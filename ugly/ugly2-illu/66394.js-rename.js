"use strict";

const crypto = require("crypto");

function sha1(r) {
  if (typeof Buffer.from === "function") {
    if (Array.isArray(r)) {
      r = Buffer.from(r);
    } else if (typeof r === "string") {
      r = Buffer.from(r, "utf8");
    }
  } else {
    if (Array.isArray(r)) {
      r = new Buffer(r);
    } else if (typeof r === "string") {
      r = new Buffer(r, "utf8");
    }
  }return crypto.createHash("sha1").update(r).digest();
}module.exports = sha1;