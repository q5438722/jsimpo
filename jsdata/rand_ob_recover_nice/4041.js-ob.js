'use strict';
+function(jQuery) {
  function update(option) {
    var now = target;
    var item = {
      "hzHUp" : $["wjuzT"],
      "vuUMZ" : function(elems, name) {
        return $["khDqE"](elems, name);
      },
      "eUybp" : now(192),
      "onRSq" : $["JzxLZ"],
      "DSCgX" : function(elems, name) {
        var mat = now;
        return $[mat(193)](elems, name);
      },
      "bhBZA" : $[now(194)]
    };
    return this[now(195)](function() {
      var parseInt = now;
      var callbackVals = item[parseInt(196)][parseInt(197)]("|");
      var callbackCount = 1548 * 2 + 14 * 235 + -6386;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            var inputList = jQuery(this);
            continue;
          case "1":
            var options = item[parseInt(198)](typeof option, item[parseInt(199)]) && option;
            continue;
          case "2":
            var data = inputList[parseInt(170)](item[parseInt(200)]);
            continue;
          case "3":
            if (item["DSCgX"](option, item[parseInt(201)])) {
              data[parseInt(152)]();
            } else {
              if (option) {
                data[parseInt(164)](option);
              }
            }
            continue;
          case "4":
            if (!data) {
              inputList[parseInt(170)](item[parseInt(200)], data = new Button(this, options));
            }
            continue;
        }
        break;
      }
    });
  }
  var target = _0x176e;
  var $ = {
    "ViBFV" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zOtpY" : target(140),
    "ZqXJy" : "disabled",
    "rHuwL" : target(141),
    "KnLoa" : target(142),
    "rKPWt" : target(143),
    "wMFHs" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "fASon" : "resetText",
    "khDqE" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "HhIEi" : target(144),
    "IrYNy" : target(145),
    "OCOUe" : target(146),
    "mhKsr" : target(147),
    "SWTSW" : target(148),
    "vWErg" : "active",
    "hrKCl" : target(149),
    "wjuzT" : target(150),
    "JzxLZ" : target(151),
    "WxFpJ" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "lFHHi" : target(152),
    "dusoY" : target(153),
    "EJSRD" : target(154),
    "dFpRp" : target(155),
    "ihTqp" : target(156),
    "IxzFc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fVLLj" : target(157)
  };
  var Button = function(_overFrame, _outFrame) {
    var getStyles = target;
    this["$element"] = $[getStyles(158)](jQuery, _overFrame);
    this["options"] = jQuery[getStyles(159)]({}, Button[getStyles(160)], _outFrame);
    this["isLoading"] = ![];
  };
  Button[target(161)] = $[target(162)];
  Button[target(160)] = {
    "loadingText" : $[target(163)]
  };
  Button["prototype"][target(164)] = function(i) {
    var now = target;
    var cols = {
      "guSZR" : $[now(165)]
    };
    var received_data = $["ZqXJy"];
    var substrings = this[now(166)];
    var f = substrings["is"]($[now(167)]) ? $[now(168)] : now(169);
    var params = substrings[now(170)]();
    i = i + $[now(171)];
    if ($[now(172)](params[now(173)], null)) {
      substrings[now(170)]($["fASon"], substrings[f]());
    }
    substrings[f]($[now(174)](params[i], null) ? this["options"][i] : params[i]);
    setTimeout(jQuery[now(175)](function() {
      var parseInt = now;
      if (i == cols[parseInt(176)]) {
        this[parseInt(177)] = !![];
        substrings[parseInt(178)](received_data)[parseInt(179)](received_data, received_data);
      } else {
        if (this[parseInt(177)]) {
          this[parseInt(177)] = ![];
          substrings[parseInt(180)](received_data)["removeAttr"](received_data);
        }
      }
    }, this), -3708 + 1812 + -8 * -237);
  };
  Button[target(181)][target(152)] = function() {
    var now = target;
    var _0x587fdc = !![];
    var rpm_traffic = this["$element"][now(182)]($[now(183)]);
    if (rpm_traffic[now(184)]) {
      var rpm_traffic = this[now(166)][now(185)]($[now(167)]);
      if ($[now(174)](rpm_traffic[now(186)]($["IrYNy"]), $["OCOUe"])) {
        if (rpm_traffic[now(186)]($[now(187)]) && this[now(166)][now(188)]("active")) {
          _0x587fdc = ![];
        } else {
          rpm_traffic[now(185)]($["SWTSW"])[now(180)]($[now(189)]);
        }
      }
      if (_0x587fdc) {
        rpm_traffic[now(186)]($[now(187)], !this[now(166)][now(188)]($[now(189)]))["trigger"]($[now(190)]);
      }
    }
    if (_0x587fdc) {
      this[now(166)][now(191)]($[now(189)]);
    }
  };
  var obj = jQuery["fn"]["button"];
  jQuery["fn"][target(202)] = update;
  jQuery["fn"][target(202)][target(203)] = Button;
  jQuery["fn"][target(202)][target(204)] = function() {
    var now = target;
    return jQuery["fn"][now(202)] = obj, this;
  };
  $[target(205)](jQuery, document)["on"](target(206), $[target(207)], function(e) {
    var p = target;
    var element = jQuery(e[p(208)]);
    if (!element[p(188)]($[p(209)])) {
      element = element[p(182)]($[p(210)]);
    }
    update[p(211)](element, $[p(194)]);
    e["preventDefault"]();
  });
}(jQuery);

