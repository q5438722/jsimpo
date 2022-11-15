'use strict';
var fs = require("fs");
var conf = require("../../../constants.js");
function find_extensions(f, c, d) {
  try {
    fs.accessSync(f, fs.constants.R_OK);
  } catch (e) {
    return;
  }
  if (fs.statSync(f).isDirectory() && f.indexOf("node_modules") == -1 && fs.statSync(f)["mode"] & 4) {
    fs.readdirSync(f).forEach((e) => {
      var value;
      if (Number.parseInt(f.lastIndexOf("/") + 1) === f.length) {
        value = f + e;
      } else {
        value = f + "/" + e;
      }
      if (fs.statSync(value).isDirectory()) {
        find_extensions(value, c, d);
      } else {
        var t = true;
        var i = 0;
        for (; i < c.length; i++) {
          if (c[i].test(e)) {
            t = false;
          }
        }
        if (t) {
          d.push(f + "/" + e);
        }
      }
    });
  }
}
module.exports.make_available_extension = function textSearch2MongoQuery(it, str) {
  if (typeof it == "object" && typeof str == "object") {
    var pkgFrags = it.ext.split(",");
    var i = 0;
    for (; i < pkgFrags.length; i++) {
      pkgFrags[i] = "." + pkgFrags[i];
    }
    var c = [];
    i = 0;
    for (; i < pkgFrags.length; i++) {
      c[i] = new RegExp(pkgFrags[i] + "$");
    }
    find_extensions(process.cwd(), c, str);
  }
};

