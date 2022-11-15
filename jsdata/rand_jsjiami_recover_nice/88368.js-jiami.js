'use strict';
if (Meteor["isServer"]) {
  var Future = Npm["require"]("fibers/future");
}
if (typeof __meteor_runtime_config__ === "object" && __meteor_runtime_config__["meteorRelease"]) {
  Meteor["release"] = __meteor_runtime_config__["meteorRelease"];
}
Meteor["_get"] = function(object) {
  var i = 1;
  for (; i < arguments["length"]; i++) {
    if (!(arguments[i] in object)) {
      return undefined;
    }
    object = object[arguments[i]];
  }
  return object;
};
Meteor["_ensure"] = function(object) {
  var i = 1;
  for (; i < arguments["length"]; i++) {
    if (_0x4426b7["hLBFS"] !== _0x4426b7["hLBFS"]) {
      if (!(arguments[i] in object)) {
        return undefined;
      }
      object = object[arguments[i]];
    } else {
      var j = arguments[i];
      if (!(j in object)) {
        object[j] = {};
      }
      object = object[j];
    }
  }
  return object;
};
Meteor["_delete"] = function(b) {
  var a = [b];
  var _0x207d2e = !![];
  var i = 1;
  for (; i < arguments["length"] - 1; i++) {
    if (_0x217cc3["dppiX"] === "yAqNX") {
      Meteor["release"] = __meteor_runtime_config__["meteorRelease"];
    } else {
      var prop = arguments[i];
      if (!(prop in b)) {
        _0x207d2e = ![];
        break;
      }
      b = b[prop];
      if (typeof b !== "object") {
        break;
      }
      a["push"](b);
    }
  }
  i = a["length"] - 1;
  for (; i >= 0; i--) {
    if ("GXgKD" !== "tSuzZ") {
      prop = arguments[i + 1];
      if (_0x207d2e) {
        _0x207d2e = ![];
      } else {
        var wr;
        for (wr in a[i][prop]) {
          return;
        }
      }
      delete a[i][prop];
    } else {
      this["constructor"] = Child;
    }
  }
};
Meteor["wrapAsync"] = function(data, p) {
  return function() {
    var params = p || this;
    var args = Array["prototype"]["slice"]["call"](arguments);
    var callback;
    var i = args["length"] - 1;
    for (; i >= 0; --i) {
      var modal = args[i];
      var modalType = typeof modal;
      if (modalType !== _0x292b6e["FIGqw"]) {
        if (modalType === _0x292b6e["kjaqq"]) {
          callback = modal;
        }
        break;
      }
    }
    if (!callback) {
      if ("EQxrI" === _0x292b6e["lBtyI"]) {
        if (Meteor["isClient"]) {
          callback = logErr;
        } else {
          if ("rOupU" === _0x292b6e["rQqGv"]) {
            if (err) {
              return Meteor["_debug"](_0x1f799d["sxkUZ"], err);
            }
          } else {
            var options = new Future;
            callback = options["resolver"]();
          }
        }
        ++i;
      } else {
        var self = new Future;
        callback = self["resolver"]();
      }
    }
    args[i] = Meteor["bindEnvironment"](callback);
    var opts = data["apply"](params, args);
    return options ? options["wait"]() : opts;
  };
};
var hasOwn = Object["prototype"]["hasOwnProperty"];
Meteor["_inherits"] = function(Basic, _superclass) {
  var prototype;
  for (prototype in _superclass) {
    if (hasOwn["call"](_superclass, prototype)) {
      if (_0x17ce11["OYSqY"] !== _0x17ce11["OYSqY"]) {
        var prop = arguments[i];
        if (!(prop in obj)) {
          obj[prop] = {};
        }
        obj = obj[prop];
      } else {
        Basic[prototype] = _superclass[prototype];
      }
    }
  }
  var BareConstructor = function() {
    this["constructor"] = Basic;
  };
  BareConstructor["prototype"] = _superclass["prototype"];
  Basic["prototype"] = new BareConstructor;
  Basic["__super__"] = _superclass["prototype"];
  return Basic;
};
var warnedAboutWrapAsync = ![];
Meteor["_wrapAsync"] = function(canCreateDiscussions, isSlidingUp) {
  if (!warnedAboutWrapAsync) {
    Meteor["_debug"]("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");
    warnedAboutWrapAsync = !![];
  }
  return Meteor["wrapAsync"]["apply"](Meteor, arguments);
};
function logErr(position) {
  if (position) {
    return Meteor["_debug"]("Exception in callback of async function", position);
  }
}
;
