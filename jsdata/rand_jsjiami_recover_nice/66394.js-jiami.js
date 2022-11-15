'use strict';
var crypto = require("crypto");
function sha1(data) {
  if (typeof Buffer["from"] === _0x489cb7["JyeEN"]) {
    if (Array["isArray"](data)) {
      data = Buffer["from"](data);
    } else {
      if (typeof data === _0x489cb7["KdWMX"]) {
        data = Buffer["from"](data, _0x489cb7["pTHUl"]);
      }
    }
  } else {
    if (Array["isArray"](data)) {
      data = new Buffer(data);
    } else {
      if (typeof data === "string") {
        if ("wBfzS" === _0x489cb7["GfPTs"]) {
          if (Array["isArray"](data)) {
            data = Buffer["from"](data);
          } else {
            if (typeof data === _0x489cb7["KdWMX"]) {
              data = Buffer["from"](data, "utf8");
            }
          }
        } else {
          data = new Buffer(data, "utf8");
        }
      }
    }
  }
  return crypto["createHash"](_0x489cb7["IomrU"])["update"](data)["digest"]();
}
module["exports"] = sha1;

