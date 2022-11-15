'use strict';
define(function start(data, config, candleSize) {
  function cb(e) {
    var now = later;
    var callbackVals = x[now(315)][now(316)]("|");
    var callbackCount = -4104 + 3742 + 362;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          if (e[now(317)]) {
            var rpm_traffic = e[now(317)][1061 * -1 + 1 * 7732 + -6671];
            val = val + x[now(318)](x[now(319)](x["fjXjA"](x[now(320)], rpm_traffic[now(321)]), ":"), rpm_traffic[now(322)]);
          }
          continue;
        case "1":
          var m = e[now(323)];
          continue;
        case "2":
          if (x["FPnrt"](m, now(324))) {
            m = x[now(325)];
          }
          continue;
        case "3":
          var val = now(326) + e[now(327)];
          continue;
        case "4":
          console[m](val);
          continue;
        case "5":
          if (e[now(328)]) {
            val = val + (x[now(329)](x[now(330)], e["url"]) + ")");
          }
          continue;
      }
      break;
    }
  }
  function fn(deps, node) {
    var getKey = later;
    id = node[getKey(331)];
    cb(id);
  }
  function scheduleNext(state, delay) {
    var toProperCase = later;
    if (id) {
      x[toProperCase(332)](cb, id);
    }
  }
  function setup(DSWMan, PWASet) {
  }
  function init() {
    return a["Console"]["enable"]();
  }
  function load() {
    var now = later;
    a["Console"]["on"](now(333), fn)["on"](x[now(334)], scheduleNext)["on"](x[now(335)], setup);
  }
  function restart() {
    var now = later;
    a["Console"][now(336)](x[now(337)]);
  }
  var later = _0x4bb0;
  var x = {
    "wEjep" : "1|2|3|5|0|4",
    "MKkAW" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ldagd" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "fjXjA" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "IdnFG" : later(309),
    "FPnrt" : function(name, initialValue) {
      return name === initialValue;
    },
    "KwGzF" : later(310),
    "qrSFm" : later(311),
    "XbuvR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sYFWD" : later(312),
    "FvohE" : later(313),
    "AlaUl" : ".ConsoleAgent"
  };
  var a = data(later(314));
  var id;
  config[later(338)] = init;
  config["load"] = load;
  config[later(339)] = restart;
});

