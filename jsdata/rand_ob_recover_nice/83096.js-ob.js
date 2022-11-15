'use strict';
function _0x5983(totalExpectedResults, entrySelector) {
  return _0x5983 = function(state, value) {
    state = state - (-6702 + 2944 * 2 + -1 * -1069);
    var processorState = _0x6b3e[state];
    return processorState;
  }, _0x5983(totalExpectedResults, entrySelector);
}
var isArray;
var isObject;
var isDefined;
var noop;
var ngRouteModule = angular[_0x4a4e03(263)](_0x4a4e03(264), [])[_0x4a4e03(265)]({
  "angularVersion" : _0x4a4e03(266)
})["provider"](_0x4a4e03(267), $RouteProvider)[_0x4a4e03(268)](instantiateRoute);
var $routeMinErr = angular[_0x4a4e03(269)](_0x4a4e03(264));
var isEagerInstantiationEnabled;
function $RouteProvider() {
  function test(target, rule) {
    var _expectMatchArray = getFrameType;
    return angular[_expectMatchArray(283)](Object[_expectMatchArray(284)](target), rule);
  }
  var getFrameType = _0x4a4e03;
  var view = {
    "MtCXw" : getFrameType(270),
    "FwIjA" : function(require, load, callback) {
      return require(load, callback);
    },
    "MRqHE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "nDXJe" : function(name, initialValue) {
      return name === initialValue;
    },
    "AYZsE" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "VfUNt" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "AqQwj" : getFrameType(271),
    "bQYEH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fhNAn" : function(saveNotifs) {
      return saveNotifs();
    },
    "OJOgE" : getFrameType(272),
    "vlfNO" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "yFXOH" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "BdNJu" : function(geom0, geom1) {
      return geom0 && geom1;
    },
    "AbOWb" : function(value, joiner) {
      return value !== joiner;
    },
    "MeVlP" : function(value, joiner) {
      return value !== joiner;
    },
    "kOJgY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "vhGcU" : function(require, load, callback) {
      return require(load, callback);
    },
    "aWgoE" : function(require, load, callback) {
      return require(load, callback);
    },
    "FTRhq" : "Tried updating route with no current route",
    "iVknF" : function(saveNotifs) {
      return saveNotifs();
    },
    "xHSGK" : function(beforeZero, afterZero) {
      return beforeZero || afterZero;
    },
    "UvdEU" : function(name, initialValue) {
      return name === initialValue;
    },
    "FtYYh" : getFrameType(267),
    "hrHny" : function(require, load, callback) {
      return require(load, callback);
    },
    "hHbeD" : function(name, initialValue) {
      return name === initialValue;
    },
    "vyCgD" : getFrameType(273),
    "PnUrG" : getFrameType(274),
    "iMyJL" : getFrameType(275),
    "BWeky" : getFrameType(276),
    "LCVNQ" : "$routeParams",
    "LVgjG" : "$injector",
    "isQTm" : getFrameType(277),
    "YcdOi" : getFrameType(278),
    "XgMvN" : getFrameType(279)
  };
  isArray = angular[getFrameType(280)];
  isObject = angular[getFrameType(281)];
  isDefined = angular["isDefined"];
  noop = angular[getFrameType(282)];
  var routes = {};
  this["when"] = function(path, value) {
    var propertyDataviewSetter = getFrameType;
    var callbackVals = view[propertyDataviewSetter(285)][propertyDataviewSetter(286)]("|");
    var callbackCount = -8699 + 1573 + 7126;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          if (angular[propertyDataviewSetter(287)](routeCopy["caseInsensitiveMatch"])) {
            routeCopy[propertyDataviewSetter(288)] = this[propertyDataviewSetter(288)];
          }
          continue;
        case "1":
          return this;
        case "2":
          if (angular[propertyDataviewSetter(287)](routeCopy[propertyDataviewSetter(289)])) {
            routeCopy[propertyDataviewSetter(289)] = !![];
          }
          continue;
        case "3":
          if (angular[propertyDataviewSetter(287)](routeCopy[propertyDataviewSetter(290)])) {
            routeCopy[propertyDataviewSetter(290)] = !![];
          }
          continue;
        case "4":
          routes[path] = angular[propertyDataviewSetter(283)](routeCopy, {
            "originalPath" : path
          }, path && view[propertyDataviewSetter(291)](routeToRegExp, path, routeCopy));
          continue;
        case "5":
          var routeCopy = view[propertyDataviewSetter(292)](shallowCopy, value);
          continue;
        case "6":
          if (path) {
            var appName = view[propertyDataviewSetter(293)](path[view["AYZsE"](path[propertyDataviewSetter(294)], 5 * -1465 + 217 * 1 + 7109)], "/") ? path[propertyDataviewSetter(295)](-5851 * -1 + -9397 * -1 + 8 * -1906, path[propertyDataviewSetter(294)] - (303 * -12 + -49 * 82 + 1 * 7655)) : view[propertyDataviewSetter(296)](path, "/");
            routes[appName] = angular[propertyDataviewSetter(283)]({
              "originalPath" : path,
              "redirectTo" : path
            }, view[propertyDataviewSetter(291)](routeToRegExp, appName, routeCopy));
          }
          continue;
      }
      break;
    }
  };
  this[getFrameType(288)] = ![];
  this[getFrameType(297)] = function(params) {
    var propertyDataviewSetter = getFrameType;
    return view[propertyDataviewSetter(293)](typeof params, view[propertyDataviewSetter(298)]) && (params = {
      "redirectTo" : params
    }), this[propertyDataviewSetter(299)](null, params), this;
  };
  isEagerInstantiationEnabled = !![];
  this[getFrameType(300)] = function eagerInstantiationEnabled(enabled) {
    if (view["bQYEH"](isDefined, enabled)) {
      return isEagerInstantiationEnabled = enabled, this;
    }
    return isEagerInstantiationEnabled;
  };
  this[getFrameType(301)] = [view["iMyJL"], view[getFrameType(302)], view[getFrameType(303)], "$q", view[getFrameType(304)], view[getFrameType(305)], view[getFrameType(306)], view["XgMvN"], function(self, formats, mmCoreSplitViewBlock, result, fns, toArray, f_arr, scope) {
    function normalize(num, args) {
      var parseInt = propertyDataviewSetter;
      var callbackVals = view["OJOgE"]["split"]("|");
      var callbackCount = -36 * -66 + -375 + -2001;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            if (!args[parseInt(328)]) {
              return null;
            }
            continue;
          case "1":
            return ret;
          case "2":
            var output = args[parseInt(329)];
            var ret = {};
            continue;
          case "3":
            var key = 13 * 333 + 1 * 5969 + -1 * 10297;
            var value = r[parseInt(294)];
            for (; view["vlfNO"](key, value); ++key) {
              var item = output[view[parseInt(330)](key, -1 * -1777 + 576 * 10 + -12 * 628)];
              var value = r[key];
              if (view[parseInt(331)](item, value)) {
                ret[item[parseInt(332)]] = value;
              }
            }
            continue;
          case "4":
            if (!r) {
              return null;
            }
            continue;
          case "5":
            var r = args["regexp"][parseInt(333)](num);
            continue;
        }
        break;
      }
    }
    function next(event) {
      var translate = propertyDataviewSetter;
      var item = options["current"];
      value = map["zgpmf"](e);
      ret = update(value, item);
      if (!ret && map[translate(334)](item, value)) {
        if (self[translate(335)](map[translate(336)], value, item)["defaultPrevented"]) {
          if (event) {
            event[translate(337)]();
          }
        }
      }
    }
    function get() {
      var snakeCase = propertyDataviewSetter;
      var headersReceivedFilteringFns = {
        "lQpRo" : function(name, val) {
          var keyFn = _0x5983;
          return map[keyFn(338)](name, val);
        },
        "YAOSa" : snakeCase(339),
        "bHwbu" : map[snakeCase(340)]
      };
      var params = options[snakeCase(319)];
      var data = value;
      if (ret) {
        params[snakeCase(321)] = data["params"];
        angular[snakeCase(341)](params["params"], mmCoreSplitViewBlock);
        self["$broadcast"](snakeCase(342), params);
      } else {
        if (data || params) {
          withType = ![];
          options[snakeCase(319)] = data;
          var params = result[snakeCase(343)](data);
          scope[snakeCase(344)](map[snakeCase(340)]);
          params[snakeCase(345)](response)["then"](callback)[snakeCase(345)](function(canCreateDiscussions) {
            var _storage_get = snakeCase;
            var instance = {
              "KSpDF" : function(details, isPrivate) {
                return headersReceivedFilteringFns["lQpRo"](details, isPrivate);
              },
              "vSNND" : headersReceivedFilteringFns["YAOSa"]
            };
            return canCreateDiscussions && params[_storage_get(345)](x)["then"](function(responseTasks) {
              var camelize = _storage_get;
              if (instance[camelize(346)](data, options[camelize(319)])) {
                if (data) {
                  data[camelize(347)] = responseTasks;
                  angular[camelize(341)](data["params"], mmCoreSplitViewBlock);
                }
                self[camelize(335)](instance[camelize(348)], data, params);
              }
            });
          })["catch"](function(callback) {
            var toKey = snakeCase;
            if (map["dZHMB"](data, options[toKey(319)])) {
              self[toKey(335)](toKey(349), data, params, callback);
            }
          })["finally"](function() {
            var attrGetter = snakeCase;
            scope[attrGetter(350)](noop, headersReceivedFilteringFns["bHwbu"]);
          });
        }
      }
    }
    function response(options) {
      var parseInt = propertyDataviewSetter;
      var data = {
        "route" : options,
        "hasRedirection" : ![]
      };
      if (options) {
        if (options[parseInt(351)]) {
          if (angular["isString"](options[parseInt(351)])) {
            data["path"] = map[parseInt(352)](init, options[parseInt(351)], options[parseInt(321)]);
            data["search"] = options[parseInt(321)];
            data[parseInt(353)] = !![];
          } else {
            var data = formats[parseInt(322)]();
            var originalEvent = formats[parseInt(325)]();
            var buffer = options[parseInt(351)](options[parseInt(354)], data, originalEvent);
            if (angular[parseInt(355)](buffer)) {
              data["url"] = buffer;
              data[parseInt(353)] = !![];
            }
          }
        } else {
          if (options[parseInt(356)]) {
            return result[parseInt(343)](fns[parseInt(357)](options[parseInt(356)]))[parseInt(345)](function(expiresAt) {
              var getRefreshTokenKey = parseInt;
              return angular[getRefreshTokenKey(355)](expiresAt) && (data[getRefreshTokenKey(358)] = expiresAt, data[getRefreshTokenKey(353)] = !![]), data;
            });
          }
        }
      }
      return data;
    }
    function callback(data) {
      var parseInt = propertyDataviewSetter;
      var coolie = !![];
      if (view[parseInt(359)](data["route"], options[parseInt(319)])) {
        coolie = ![];
      } else {
        if (data[parseInt(353)]) {
          var value = formats[parseInt(358)]();
          var target = data[parseInt(358)];
          if (target) {
            formats[parseInt(358)](target)[parseInt(360)]();
          } else {
            target = formats[parseInt(322)](data[parseInt(322)])["search"](data[parseInt(325)])[parseInt(360)]()[parseInt(358)]();
          }
          if (view[parseInt(361)](target, value)) {
            coolie = ![];
          }
        }
      }
      return coolie;
    }
    function x(value) {
      var parseInt = propertyDataviewSetter;
      if (value) {
        var callbackVals = "3|4|0|1|2"["split"]("|");
        var callbackCount = 47 * -24 + 5870 + 1 * -4742;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              var res = view[parseInt(362)](event, value);
              continue;
            case "1":
              if (angular["isDefined"](res)) {
                args[parseInt(363)] = res;
              }
              continue;
            case "2":
              return result[parseInt(364)](args);
            case "3":
              var args = angular[parseInt(283)]({}, value[parseInt(343)]);
              continue;
            case "4":
              angular[parseInt(365)](args, function(value, key) {
                var mergeCommonModules = parseInt;
                args[key] = angular[mergeCommonModules(366)](value) ? fns[mergeCommonModules(367)](value) : fns[mergeCommonModules(357)](value, null, null, key);
              });
              continue;
          }
          break;
        }
      }
    }
    function event(values) {
      var parseInt = propertyDataviewSetter;
      var node;
      var value;
      if (angular[parseInt(355)](node = values[parseInt(368)])) {
        if (angular[parseInt(369)](node)) {
          node = view[parseInt(362)](node, values[parseInt(321)]);
        }
      } else {
        if (angular[parseInt(355)](value = values[parseInt(370)])) {
          if (angular[parseInt(369)](value)) {
            value = view[parseInt(362)](value, values[parseInt(321)]);
          }
          if (angular[parseInt(355)](value)) {
            values[parseInt(371)] = f_arr[parseInt(372)](value);
            node = toArray(value);
          }
        }
      }
      return node;
    }
    function e() {
      var getFrameType = propertyDataviewSetter;
      var options = {
        "OTHcl" : function(require, load, callback) {
          return require(load, callback);
        }
      };
      var params;
      var values;
      return angular["forEach"](routes, function(data, canCreateDiscussions) {
        var parseInt = _0x5983;
        if (!values && (params = normalize(formats[parseInt(322)](), data))) {
          values = options[parseInt(373)](test, data, {
            "params" : angular[parseInt(283)]({}, formats[parseInt(325)](), params),
            "pathParams" : params
          });
          values[parseInt(320)] = data;
        }
      }), values || routes[null] && view[getFrameType(374)](test, routes[null], {
        "params" : {},
        "pathParams" : {}
      });
    }
    function update(obj, params) {
      var decodeURIComponent = propertyDataviewSetter;
      return !withType && obj && params && map[decodeURIComponent(375)](obj["$$route"], params[decodeURIComponent(320)]) && (!obj[decodeURIComponent(290)] || !obj[decodeURIComponent(289)] && angular["equals"](obj["pathParams"], params["pathParams"]));
    }
    function init(tid, map) {
      var accountHandler = propertyDataviewSetter;
      var a = [];
      return angular[accountHandler(365)]((tid || "")[accountHandler(286)](":"), function(b, canCreateDiscussions) {
        var parseInt = accountHandler;
        if (canCreateDiscussions === -9168 + -6357 + 15525) {
          a["push"](b);
        } else {
          var callbackVals = map[parseInt(376)][parseInt(286)]("|");
          var callbackCount = 8444 * -1 + -4 * 1669 + 15120;
          for (; !![];) {
            switch(callbackVals[callbackCount++]) {
              case "0":
                a[parseInt(377)](map[parentOfParent]);
                continue;
              case "1":
                delete map[parentOfParent];
                continue;
              case "2":
                a[parseInt(377)](parentNode[1 * 5156 + 989 + -6143] || "");
                continue;
              case "3":
                var parentNode = b["match"](/(\w+)(?:[?*])?(.*)/);
                continue;
              case "4":
                var parentOfParent = parentNode[127 * -29 + 1024 * -2 + 5732 * 1];
                continue;
            }
            break;
          }
        }
      }), a["join"]("");
    }
    var propertyDataviewSetter = getFrameType;
    var map = {
      "jptjV" : function(currentValue, value, littleEndian) {
        var getFrameType = _0x5983;
        return view[getFrameType(307)](currentValue, value, littleEndian);
      },
      "qEpVA" : function(currentValue, value, littleEndian) {
        var getFrameType = _0x5983;
        return view[getFrameType(307)](currentValue, value, littleEndian);
      },
      "JTMEg" : propertyDataviewSetter(308),
      "ONNFd" : view["FTRhq"],
      "zgpmf" : function(byteOffset) {
        var getFrameType = propertyDataviewSetter;
        return view[getFrameType(309)](byteOffset);
      },
      "EaEye" : function(currentValue, value) {
        var getFrameType = propertyDataviewSetter;
        return view[getFrameType(310)](currentValue, value);
      },
      "rVQHP" : propertyDataviewSetter(311),
      "dZHMB" : function(currentValue, value) {
        var getFrameType = propertyDataviewSetter;
        return view[getFrameType(312)](currentValue, value);
      },
      "ZxGKU" : function(name, initialValue) {
        return name === initialValue;
      },
      "NZGug" : view[propertyDataviewSetter(313)],
      "cIfeJ" : function(currentValue, value, littleEndian) {
        var getFrameType = propertyDataviewSetter;
        return view[getFrameType(314)](currentValue, value, littleEndian);
      },
      "iJNRG" : function(currentValue, value) {
        return view["hHbeD"](currentValue, value);
      },
      "XquMB" : view[propertyDataviewSetter(315)]
    };
    var withType = ![];
    var value;
    var ret;
    var options = {
      "routes" : routes,
      "reload" : function() {
        var updateChinachu = propertyDataviewSetter;
        var full = {
          "BZthb" : function(byteOffset) {
            var getFrameType = _0x5983;
            return view[getFrameType(316)](byteOffset);
          }
        };
        withType = !![];
        var event = {
          "defaultPrevented" : ![],
          "preventDefault" : function selectRow() {
            var getHintDisplay = _0x5983;
            this[getHintDisplay(317)] = !![];
            withType = ![];
          }
        };
        self[updateChinachu(318)](function() {
          var display_dic_buttons = updateChinachu;
          next(event);
          if (!event[display_dic_buttons(317)]) {
            full["BZthb"](get);
          }
        });
      },
      "updateParams" : function(value) {
        var parseInt = propertyDataviewSetter;
        if (this[parseInt(319)] && this[parseInt(319)][parseInt(320)]) {
          value = angular[parseInt(283)]({}, this[parseInt(319)][parseInt(321)], value);
          formats[parseInt(322)](map[parseInt(323)](init, this[parseInt(319)][parseInt(320)][parseInt(324)], value));
          formats[parseInt(325)](value);
        } else {
          throw map["qEpVA"]($routeMinErr, map[parseInt(326)], map["ONNFd"]);
        }
      }
    };
    self[propertyDataviewSetter(327)]("$locationChangeStart", next);
    self[propertyDataviewSetter(327)](view["PnUrG"], get);
    return options;
  }];
}
instantiateRoute[_0x4a4e03(378)] = [_0x4a4e03(379)];
function instantiateRoute(component) {
  var get = _0x4a4e03;
  var data = {
    "lqsXk" : get(267)
  };
  if (isEagerInstantiationEnabled) {
    component[get(367)](data[get(380)]);
  }
}
;
