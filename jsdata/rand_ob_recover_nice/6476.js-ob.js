'use strict';
define([_0x1e0c98(138), _0x1e0c98(139)], function(value) {
  var obj = {
    "pRxVu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "HHSHT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "CwxVE" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "pzBZF" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "ailnG" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "VOgrZ" : function(name, initialValue) {
      return name === initialValue;
    },
    "spPeF" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    }
  };
  var window = /^\d+$/;
  var token = /([^\[\]]+)|(\[\])/g;
  var self = /([^?#]*)(#.*)?$/;
  var req = function(url) {
    var encodeURIComponent = _0x1332;
    return decodeURIComponent(url[encodeURIComponent(140)](/\+/g, " "));
  };
  return value["extend"](value, {
    "deparam" : function(params) {
      var decode = _0x1332;
      var name = {};
      var i;
      var value_var;
      return params && self[decode(141)](params) && (i = params[decode(142)]("&"), value[decode(143)](i, function(layoutSets) {
        var decodeURIComponent = decode;
        var data = layoutSets["split"]("=");
        var context = obj[decodeURIComponent(144)](req, data[decodeURIComponent(145)]());
        var value = obj["HHSHT"](req, data[decodeURIComponent(146)]("="));
        var options = name;
        if (context) {
          data = context["match"](token);
          var name = -495 * 10 + 1753 + 3197;
          var deep = obj[decodeURIComponent(147)](data[decodeURIComponent(148)], -3505 + 5 * -1979 + -4467 * -3);
          for (; obj["pzBZF"](name, deep); name++) {
            if (!options[data[name]]) {
              options[data[name]] = window["test"](data[obj[decodeURIComponent(149)](name, -1 * -1091 + -4667 + 49 * 73)]) || obj[decodeURIComponent(150)](data[obj["spPeF"](name, -2679 + -2244 * 3 + 9412)], "[]") ? [] : {};
            }
            options = options[data[name]];
          }
          value_var = data[decodeURIComponent(151)]();
          if (value_var === "[]") {
            options["push"](value);
          } else {
            options[value_var] = value;
          }
        }
      })), name;
    }
  }), value;
});

