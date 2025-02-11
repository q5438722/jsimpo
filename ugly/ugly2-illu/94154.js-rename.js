const debug = require("debug")("cypress:e2e");

module.exports = function (r, e) {
  debug("plugin file %s", __filename);debug("received config with browsers %o", e.browsers);if (!Array.isArray(e.browsers)) {
    throw new Error("Expected list of browsers in the config");
  }if (e.browsers.length === 0) {
    throw new Error("Expected at least 1 browser in the config");
  }const o = e.browsers.find(r => {
    return r.name === "electron";
  });
  if (!o) {
    throw new Error("List of browsers passed into plugins does not include Electron browser");
  }const s = { browsers: [e.browsers.find(r => {
      return r.name === "electron";
    })] };
  debug("returning only Electron browser from plugins %o", s);return s;
};
