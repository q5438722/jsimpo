'use strict';
(function(data) {
  function createComponent(callback, settings, args, params) {
    var parseInt = camelize;
    if (self["fUdWb"](settings[parseInt(252)], !![])) {
      var callbackVals = self["yHKFQ"][parseInt(253)]("|");
      var callbackCount = 6300 + -7718 + 1418 * 1;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            var oldV = self[parseInt(254)](typeof settings[parseInt(255)], self["IjjFp"]) ? settings[parseInt(255)] : -6287 + -2960 + 1156 * 8;
            continue;
          case "1":
            var form = settings[parseInt(256)] || -1810 + 1 * 6241 + -4431;
            continue;
          case "2":
            if (self[parseInt(257)](params["points"], undefined)) {
              params[parseInt(258)][parseInt(259)] = self[parseInt(260)](args[parseInt(259)], 82 * 49 + 6133 * 1 + -10149);
            } else {
              params["points"] = [];
            }
            continue;
          case "3":
            params["pointsize"] = -7165 * -1 + -1 * 3149 + 669 * -6;
            continue;
          case "4":
            var i = -6646 + -4 * 2246 + 10 * 1563;
            var index = -122 * 73 + 9181 + -5 * 55;
            for (; self["OWSWM"](i, args[parseInt(259)]); i++, index = index + (1 * -9649 + -1135 + -1 * -10786)) {
              params[parseInt(258)][index] = self["dMZTI"](form, self[parseInt(261)](i, oldV));
              params[parseInt(258)][self[parseInt(262)](index, 25 * 340 + 7193 * 1 + -15692)] = args[i];
            }
            continue;
        }
        break;
      }
    }
  }
  var camelize = _0x570c;
  var self = {
    "fUdWb" : function(name, initialValue) {
      return name === initialValue;
    },
    "yHKFQ" : camelize(250),
    "fZLNZ" : function(name, initialValue) {
      return name === initialValue;
    },
    "IjjFp" : "number",
    "BeYvM" : function(value, joiner) {
      return value !== joiner;
    },
    "KDgXy" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "OWSWM" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "dMZTI" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "SMvMT" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "eQoTH" : camelize(251)
  };
  data[camelize(263)]["plugins"]["push"]({
    "init" : function(serverConfig) {
      var parseStoreDir = camelize;
      serverConfig["hooks"][parseStoreDir(264)][parseStoreDir(265)](createComponent);
    },
    "name" : camelize(252),
    "version" : self[camelize(266)]
  });
})(jQuery);
