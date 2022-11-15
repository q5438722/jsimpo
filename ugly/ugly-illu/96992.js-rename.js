const fs = require("fs");

const conf = require("../../../constants.js");

function find_extensions(r, f, a) {
  try {
    fs.accessSync(r, fs.constants.R_OK);
  } catch (e) {
    return;
  }if (fs.statSync(r).isDirectory() && r.indexOf("node_modules") == -1 && fs.statSync(r).mode & 4) {
    fs.readdirSync(r).forEach(e => {
      var s;
      if (Number.parseInt(r.lastIndexOf("/") + 1) === r.length) s = r + e;else s = r + "/" + e;if (fs.statSync(s).isDirectory()) find_extensions(s, f, a);else {
        var t = true;
        for (var n = 0; n < f.length; n++) if (f[n].test(e)) t = false;if (t) a.push(r + "/" + e);
      }
    });
  }
}module.exports.make_available_extension = function e(s, t) {
  if (typeof s == "object" && typeof t == "object") {
    const n = s.ext.split(",");
    // Unevaluable loop test expression
    for (var r = 0; r < n.length; r++) n[r] = "." + n[r];const f = [];
    // Unevaluable loop test expression
    for (var r = 0; r < n.length; r++) f[r] = new RegExp(n[r] + "$");find_extensions(process.cwd(), f, t);
  }
};
