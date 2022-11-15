'use strict';
module["exports"] = class QuickBase {
  constructor(options) {
    var frame = {};
    var callbackVals = frame["jTZSr"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this["spinner"]["classList"]["add"](frame["OWTQO"], frame["OiVPV"], frame["xJZxk"]);
          continue;
        case "1":
          this["element"]["classList"]["add"]("update-package-dependencies-status", frame["xJZxk"], frame["cgOHJ"]);
          continue;
        case "2":
          this["spinner"] = document["createElement"]("span");
          continue;
        case "3":
          this["element"] = document["createElement"]("update-package-dependencies-status");
          continue;
        case "4":
          this["element"]["appendChild"](this["spinner"]);
          continue;
        case "5":
          this["statusBar"] = options;
          continue;
      }
      break;
    }
  }
  ["attach"]() {
    this["tile"] = this["statusBar"]["addRightTile"]({
      "item" : this["element"]
    });
    this["tooltip"] = atom["tooltips"]["add"](this["element"], {
      "title" : "Updating package dependencies\u2026"
    });
  }
  ["detach"]() {
    if (this["tile"]) {
      this["tile"]["destroy"]();
    }
    if (this["tooltip"]) {
      this["tooltip"]["dispose"]();
    }
  }
};

