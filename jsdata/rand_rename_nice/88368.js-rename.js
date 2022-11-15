'use strict';
if (Meteor.isServer) {
  var Future = Npm.require("fibers/future");
}
if (typeof __meteor_runtime_config__ === "object" && __meteor_runtime_config__.meteorRelease) {
  Meteor.release = __meteor_runtime_config__.meteorRelease;
}
Meteor._get = function(obj) {
  var i = 1;
  for (; i < arguments.length; i++) {
    if (!(arguments[i] in obj)) {
      return undefined;
    }
    obj = obj[arguments[i]];
  }
  return obj;
};
Meteor._ensure = function(obj) {
  var i = 1;
  for (; i < arguments.length; i++) {
    var prop = arguments[i];
    if (!(prop in obj)) {
      obj[prop] = {};
    }
    obj = obj[prop];
  }
  return obj;
};
Meteor._delete = function(e) {
  var eventList = [e];
  var t = true;
  var index = 1;
  for (; index < arguments.length - 1; index++) {
    var i = arguments[index];
    if (!(i in e)) {
      t = false;
      break;
    }
    e = e[i];
    if (typeof e !== "object") {
      break;
    }
    eventList.push(e);
  }
  index = eventList.length - 1;
  for (; index >= 0; index--) {
    i = arguments[index + 1];
    if (t) {
      t = false;
    } else {
      var curAtom;
      for (curAtom in eventList[index][i]) {
        return;
      }
    }
    delete eventList[index][i];
  }
};
Meteor.wrapAsync = function(fn, context) {
  return function() {
    var thisArg = context || this;
    var args = Array.prototype.slice.call(arguments);
    var callback;
    var i = args.length - 1;
    for (; i >= 0; --i) {
      var data = args[i];
      var dataType = typeof data;
      if (dataType !== "undefined") {
        if (dataType === "function") {
          callback = data;
        }
        break;
      }
    }
    if (!callback) {
      if (Meteor.isClient) {
        callback = logErr;
      } else {
        var fut = new Future;
        callback = fut.resolver();
      }
      ++i;
    }
    args[i] = Meteor.bindEnvironment(callback);
    var result = fn.apply(thisArg, args);
    return fut ? fut.wait() : result;
  };
};
var hasOwn = Object.prototype.hasOwnProperty;
Meteor._inherits = function(Child, Parent) {
  var key;
  for (key in Parent) {
    if (hasOwn.call(Parent, key)) {
      Child[key] = Parent[key];
    }
  }
  var Middle = function() {
    this.constructor = Child;
  };
  Middle.prototype = Parent.prototype;
  Child.prototype = new Middle;
  Child.__super__ = Parent.prototype;
  return Child;
};
var warnedAboutWrapAsync = false;
Meteor._wrapAsync = function(fn, context) {
  if (!warnedAboutWrapAsync) {
    Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");
    warnedAboutWrapAsync = true;
  }
  return Meteor.wrapAsync.apply(Meteor, arguments);
};
function logErr(msg) {
  if (msg) {
    return Meteor._debug("Exception in callback of async function", msg);
  }
}
;
