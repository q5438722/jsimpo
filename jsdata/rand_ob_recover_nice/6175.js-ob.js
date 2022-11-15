'use strict';
var app = app || {};
(function() {
  var index = _0x28a8;
  var a = {
    "WKpWN" : index(177),
    "eePbL" : index(178),
    "JOpiG" : index(179),
    "bjUUn" : "reset",
    "HaLML" : index(180),
    "gdypo" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "xIvLy" : '[href="#/',
    "IsROo" : function(require, load, callback) {
      return require(load, callback);
    },
    "cEJtc" : index(181),
    "JvDQs" : index(182),
    "npqPd" : function(value, joiner) {
      return value !== joiner;
    },
    "GSkTJ" : index(183),
    "sNHZX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tZEhj" : index(184),
    "evZtw" : index(185),
    "kVDGF" : index(186)
  };
  var callbackVals = index(187)[index(188)]("|");
  var callbackCount = 6911 * -1 + -8715 * 1 + -1202 * -13;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        var next = function(message, name) {
          var start = index;
          var service_obj = {
            "YrFrb" : function(data, fn) {
              var _getBaseClassName = _0x28a8;
              return global[_getBaseClassName(189)](data, fn);
            }
          };
          return [][start(190)][start(191)](document[start(192)](name), function(status) {
            var end = start;
            return service_obj[end(193)](status, message);
          });
        };
        continue;
      case "1":
        continue;
      case "2":
        var global = {
          "MkysB" : function(name, initialValue) {
            return name === initialValue;
          },
          "lixKF" : a[index(194)],
          "xoomk" : a["eePbL"],
          "QbviI" : index(195),
          "CbKvC" : a[index(196)],
          "QBRGx" : a[index(197)],
          "LFUOG" : index(198),
          "EOjvJ" : index(199),
          "valDp" : a["HaLML"],
          "qyymG" : index(200),
          "edcHi" : function(b, pt) {
            var lastIndex = index;
            return a[lastIndex(201)](b, pt);
          },
          "QnoAg" : a[index(202)],
          "zQVbv" : function(event, t, g) {
            var lastIndex = index;
            return a[lastIndex(203)](event, t, g);
          },
          "Zwrde" : function(event, t, g) {
            var lastIndex = index;
            return a[lastIndex(203)](event, t, g);
          },
          "eGJQa" : a[index(204)],
          "fdRXO" : a[index(205)],
          "IpNXb" : function(b, pt) {
            var lastIndex = index;
            return a[lastIndex(206)](b, pt);
          }
        };
        continue;
      case "3":
        app["AppView"] = Backbone[index(207)][index(208)]({
          "el" : a[index(209)],
          "statsTemplate" : a[index(210)](microtemplate, document["querySelector"](a[index(211)])["innerHTML"]),
          "events" : {
            "keypress .new-todo" : index(212),
            "click .clear-completed" : a[index(213)],
            "click .toggle-all" : a[index(214)]
          },
          "initialize" : function() {
            var init = index;
            this[init(215)] = this["$"](global["lixKF"])[init(216)](182 * 15 + -283 * 24 + 4062);
            this[init(217)] = this["$"](global[init(218)])[init(216)](-1555 + -9466 + -1 * -11021);
            this["footer"] = this["$"](global[init(219)])["item"](-195 * -50 + -9453 + -297);
            this[init(220)] = this["$"](init(221))[init(216)](-6189 * 1 + -348 * -22 + -1467);
            this[init(222)](app[init(223)], global[init(224)], this[init(225)]);
            this[init(222)](app["todos"], global["QBRGx"], this[init(226)]);
            this[init(222)](app["todos"], global[init(227)], this[init(228)]);
            this["listenTo"](app[init(223)], global[init(229)], this[init(230)]);
            this[init(222)](app[init(223)], global["valDp"], this["render"]);
            app[init(223)][init(231)]({
              "reset" : !![]
            });
          },
          "render" : function() {
            var init = index;
            var checked = app[init(223)][init(232)]()[init(233)];
            var remaining = app[init(223)]["remaining"]()[init(233)];
            var customization = global[init(234)](global[init(234)](global["QnoAg"], app[init(235)] || ""), '"]');
            if (app[init(223)]["length"]) {
              global[init(236)](set, this["main"], !![]);
              global[init(236)](set, this[init(237)], !![]);
              this[init(237)][init(238)] = this[init(239)]({
                "completed" : checked,
                "remaining" : remaining
              });
              []["forEach"][init(191)](this["$"](init(240)), function(obj) {
                var parseInt = init;
                obj[parseInt(241)][parseInt(242)](global[parseInt(243)]);
                if (next(obj, customization)) {
                  obj[parseInt(241)][parseInt(179)](global[parseInt(243)]);
                }
              });
            } else {
              global["Zwrde"](set, this["main"], ![]);
              set(this[init(237)], ![]);
            }
            this[init(215)][init(244)] = !remaining;
          },
          "addOne" : function(dirent) {
            var first = index;
            var xs = new (app[first(245)])({
              "model" : dirent
            });
            document[first(246)](global["eGJQa"])[first(247)](xs[first(248)]()["el"]);
          },
          "addAll" : function() {
            var setupViewportArea = index;
            this["$"](global[setupViewportArea(249)])[setupViewportArea(216)](-22 * 87 + -44 * -2 + 1826)[setupViewportArea(238)] = "";
            app["todos"]["forEach"](this["addOne"], this);
          },
          "filterOne" : function(myPreferences) {
            var getPreferenceKey = index;
            myPreferences[getPreferenceKey(250)](global[getPreferenceKey(251)]);
          },
          "filterAll" : function() {
            var at = index;
            app[at(223)][at(252)](this["filterOne"], this);
          },
          "newAttributes" : function() {
            var at = index;
            return {
              "title" : this["input"][at(253)][at(254)](),
              "order" : app[at(223)][at(255)](),
              "completed" : ![]
            };
          },
          "createOnEnter" : function(event) {
            var _getBaseClassName = index;
            if (global[_getBaseClassName(256)](event["which"], ENTER_KEY) || !this["input"][_getBaseClassName(253)][_getBaseClassName(254)]()) {
              return;
            }
            app[_getBaseClassName(223)][_getBaseClassName(257)](this[_getBaseClassName(258)]());
            this["input"][_getBaseClassName(253)] = "";
          },
          "clearCompleted" : function() {
            var filter = index;
            return app[filter(223)][filter(232)]()[filter(252)](function(myPreferences) {
              var getPreferenceKey = filter;
              myPreferences[getPreferenceKey(259)]();
            }), ![];
          },
          "toggleAllComplete" : function() {
            var at = index;
            var checked = this["allCheckbox"]["checked"];
            app[at(223)][at(252)](function(options) {
              options["save"]({
                "completed" : checked
              });
            });
          }
        });
        continue;
      case "4":
        var set = function(receiver, value) {
          var toPythonCase = index;
          receiver[toPythonCase(260)][toPythonCase(261)] = value ? "" : "none";
        };
        continue;
    }
    break;
  }
})();

