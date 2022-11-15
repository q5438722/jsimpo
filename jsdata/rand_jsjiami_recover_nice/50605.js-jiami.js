'use strict';
(function(res) {
  function factory(databaseURL, options, next, data) {
    if (options["flatdata"] === !![]) {
      var callbackVals = _0x31f4bb["lmKfY"]["split"]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            var min = options["start"] || 0;
            continue;
          case "1":
            data["pointsize"] = 2;
            continue;
          case "2":
            var ti = typeof options["step"] === _0x31f4bb["IKlxp"] ? options["step"] : 1;
            continue;
          case "3":
            var i = 0;
            var j = 0;
            for (; i < next["length"]; i++, j = j + 2) {
              data["points"][j] = min + i * ti;
              data["points"][j + 1] = next[i];
            }
            continue;
          case "4":
            if (data["points"] !== undefined) {
              data["points"]["length"] = next["length"] * 2;
            } else {
              data["points"] = [];
            }
            continue;
        }
        break;
      }
    }
  }
  res["plot"]["plugins"]["push"]({
    "init" : function(serverConfig) {
      serverConfig["hooks"]["processRawData"]["push"](factory);
    },
    "name" : _0x31f4bb["GBGEZ"],
    "version" : _0x31f4bb["lAUbQ"]
  });
})(jQuery);

