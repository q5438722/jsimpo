'use strict';
var k = require("react-dom");
var l = require("object-assign");
function aa(e, key, mapping, key_prefix, clean, categories, categoriesTitleHtml, categoryHtml) {
  if (!e) {
    e = void 0;
    if (void 0 === key) {
      e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var callbackVals = [mapping, key_prefix, clean, categories, categoriesTitleHtml, categoryHtml];
      var callbackCount = 0;
      e = Error(key.replace(/%s/g, function() {
        return callbackVals[callbackCount++];
      }));
      e.name = "Invariant Violation";
    }
    e.framesToPop = 1;
    throw e;
  }
}
function m(data) {
  var ncells = arguments.length - 1;
  var value = "https://reactjs.org/docs/error-decoder.html?invariant=" + data;
  var index = 0;
  for (; index < ncells; index++) {
    value = value + ("&args[]=" + encodeURIComponent(arguments[index + 1]));
  }
  aa(false, "Minified React error #" + data + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", value);
}
var n = null;
var p = null;
var q = null;
function r(d) {
  var r = d._dispatchListeners;
  var name = d._dispatchInstances;
  if (Array.isArray(r)) {
    m("103");
  } else {
    void 0;
  }
  d.currentTarget = r ? q(name) : null;
  r = r ? r(d) : null;
  d.currentTarget = null;
  d._dispatchListeners = null;
  d._dispatchInstances = null;
  return r;
}
function t(value) {
  do {
    value = value.return;
  } while (value && 5 !== value.tag);
  return value ? value : null;
}
function v(key, fn, value) {
  var obj = [];
  for (; key;) {
    obj.push(key);
    key = t(key);
  }
  key = obj.length;
  for (; 0 < key--;) {
    fn(obj[key], "captured", value);
  }
  key = 0;
  for (; key < obj.length; key++) {
    fn(obj[key], "bubbled", value);
  }
}
function w(n, a) {
  if (null == a) {
    m("30");
  } else {
    void 0;
  }
  if (null == n) {
    return a;
  }
  if (Array.isArray(n)) {
    if (Array.isArray(a)) {
      return n.push.apply(n, a), n;
    }
    n.push(a);
    return n;
  }
  return Array.isArray(a) ? [n].concat(a) : [n, a];
}
function x(a, b, c) {
  if (Array.isArray(a)) {
    a.forEach(b, c);
  } else {
    if (a) {
      b.call(c, a);
    }
  }
}
function y(value, name) {
  var i = value.stateNode;
  if (!i) {
    return null;
  }
  var s = n(i);
  if (!s) {
    return null;
  }
  i = s[name];
  e: {
    switch(name) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
        if (!(s = !s.disabled)) {
          value = value.type;
          s = !("button" === value || "input" === value || "select" === value || "textarea" === value);
        }
        value = !s;
        break e;
      default:
        value = false;
    }
  }
  if (value) {
    return null;
  }
  if (i && "function" !== typeof i) {
    m("231", name, typeof i);
  } else {
    void 0;
  }
  return i;
}
function z(n, t, event) {
  if (t = y(n, event.dispatchConfig.phasedRegistrationNames[t])) {
    event._dispatchListeners = w(event._dispatchListeners, t);
    event._dispatchInstances = w(event._dispatchInstances, n);
  }
}
function ca(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    v(event._targetInst, z, event);
  }
}
function da(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var n = event._targetInst;
    n = n ? t(n) : null;
    v(n, z, event);
  }
}
function A(event) {
  if (event && event.dispatchConfig.registrationName) {
    var element = event._targetInst;
    if (element && event && event.dispatchConfig.registrationName) {
      var previous = y(element, event.dispatchConfig.registrationName);
      if (previous) {
        event._dispatchListeners = w(event._dispatchListeners, previous);
        event._dispatchInstances = w(event._dispatchInstances, element);
      }
    }
  }
}
function B() {
  return true;
}
function C() {
  return false;
}
function D(key, s, args, seconds) {
  this.dispatchConfig = key;
  this._targetInst = s;
  this.nativeEvent = args;
  key = this.constructor.Interface;
  var name;
  for (name in key) {
    if (key.hasOwnProperty(name)) {
      if (s = key[name]) {
        this[name] = s(args);
      } else {
        if ("target" === name) {
          this.target = seconds;
        } else {
          this[name] = args[name];
        }
      }
    }
  }
  this.isDefaultPrevented = (null != args.defaultPrevented ? args.defaultPrevented : false === args.returnValue) ? B : C;
  this.isPropagationStopped = C;
  return this;
}
l(D.prototype, {
  preventDefault : function() {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        if ("unknown" !== typeof event.returnValue) {
          event.returnValue = false;
        }
      }
      this.isDefaultPrevented = B;
    }
  },
  stopPropagation : function() {
    var event = this.nativeEvent;
    if (event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        if ("unknown" !== typeof event.cancelBubble) {
          event.cancelBubble = true;
        }
      }
      this.isPropagationStopped = B;
    }
  },
  persist : function() {
    this.isPersistent = B;
  },
  isPersistent : C,
  destructor : function() {
    var Interface = this.constructor.Interface;
    var propName;
    for (propName in Interface) {
      this[propName] = null;
    }
    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = C;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
D.Interface = {
  type : null,
  target : null,
  currentTarget : function() {
    return null;
  },
  eventPhase : null,
  bubbles : null,
  cancelable : null,
  timeStamp : function(event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented : null,
  isTrusted : null
};
D.extend = function(Interface) {
  function F() {
  }
  function Class() {
    return Super.apply(this, arguments);
  }
  var Super = this;
  F.prototype = Super.prototype;
  var o = new F;
  l(o, Class.prototype);
  Class.prototype = o;
  Class.prototype.constructor = Class;
  Class.Interface = l({}, Super.Interface, Interface);
  Class.extend = Super.extend;
  E(Class);
  return Class;
};
E(D);
function ea(a, d, callback, triggerOnInit) {
  if (this.eventPool.length) {
    var callConfig = this.eventPool.pop();
    this.call(callConfig, a, d, callback, triggerOnInit);
    return callConfig;
  }
  return new this(a, d, callback, triggerOnInit);
}
function fa(b) {
  if (b instanceof this) {
    void 0;
  } else {
    m("279");
  }
  b.destructor();
  if (10 > this.eventPool.length) {
    this.eventPool.push(b);
  }
}
function E(value) {
  value.eventPool = [];
  value.getPooled = ea;
  value.release = fa;
}
var F = D.extend({
  touchHistory : function() {
    return null;
  }
});
function G(a) {
  return "touchstart" === a || "mousedown" === a;
}
function H(a) {
  return "touchmove" === a || "mousemove" === a;
}
function I(b) {
  return "touchend" === b || "touchcancel" === b || "mouseup" === b;
}
var J = ["touchstart", "mousedown"];
var K = ["touchmove", "mousemove"];
var L = ["touchcancel", "touchend", "mouseup"];
var M = [];
var N = {
  touchBank : M,
  numberActiveTouches : 0,
  indexOfSingleActiveTouch : -1,
  mostRecentTimeStamp : 0
};
function O(touch) {
  return touch.timeStamp || touch.timestamp;
}
function P(value) {
  value = value.identifier;
  if (null == value) {
    m("138");
  } else {
    void 0;
  }
  return value;
}
function ha(touch) {
  var i = P(touch);
  var touchTrack = M[i];
  if (touchTrack) {
    touchTrack.touchActive = true;
    touchTrack.startPageX = touch.pageX;
    touchTrack.startPageY = touch.pageY;
    touchTrack.startTimeStamp = O(touch);
    touchTrack.currentPageX = touch.pageX;
    touchTrack.currentPageY = touch.pageY;
    touchTrack.currentTimeStamp = O(touch);
    touchTrack.previousPageX = touch.pageX;
    touchTrack.previousPageY = touch.pageY;
    touchTrack.previousTimeStamp = O(touch);
  } else {
    touchTrack = {
      touchActive : true,
      startPageX : touch.pageX,
      startPageY : touch.pageY,
      startTimeStamp : O(touch),
      currentPageX : touch.pageX,
      currentPageY : touch.pageY,
      currentTimeStamp : O(touch),
      previousPageX : touch.pageX,
      previousPageY : touch.pageY,
      previousTimeStamp : O(touch)
    };
    M[i] = touchTrack;
  }
  N.mostRecentTimeStamp = O(touch);
}
function ia(touch) {
  var touchTrack = M[P(touch)];
  if (touchTrack) {
    touchTrack.touchActive = true;
    touchTrack.previousPageX = touchTrack.currentPageX;
    touchTrack.previousPageY = touchTrack.currentPageY;
    touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
    touchTrack.currentPageX = touch.pageX;
    touchTrack.currentPageY = touch.pageY;
    touchTrack.currentTimeStamp = O(touch);
    N.mostRecentTimeStamp = O(touch);
  } else {
    console.error("Cannot record touch move without a touch start.\nTouch Move: %s\n", "Touch Bank: %s", Q(touch), R());
  }
}
function ja(touch) {
  var touchTrack = M[P(touch)];
  if (touchTrack) {
    touchTrack.touchActive = false;
    touchTrack.previousPageX = touchTrack.currentPageX;
    touchTrack.previousPageY = touchTrack.currentPageY;
    touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
    touchTrack.currentPageX = touch.pageX;
    touchTrack.currentPageY = touch.pageY;
    touchTrack.currentTimeStamp = O(touch);
    N.mostRecentTimeStamp = O(touch);
  } else {
    console.error("Cannot record touch end without a touch start.\nTouch End: %s\n", "Touch Bank: %s", Q(touch), R());
  }
}
function Q(touch) {
  return JSON.stringify({
    identifier : touch.identifier,
    pageX : touch.pageX,
    pageY : touch.pageY,
    timestamp : O(touch)
  });
}
function R() {
  var val = JSON.stringify(M.slice(0, 20));
  if (20 < M.length) {
    val = val + (" (original size: " + M.length + ")");
  }
  return val;
}
var S = {
  recordTouchTrack : function(i, c) {
    if (H(i)) {
      c.changedTouches.forEach(ia);
    } else {
      if (G(i)) {
        c.changedTouches.forEach(ha);
        N.numberActiveTouches = c.touches.length;
        if (1 === N.numberActiveTouches) {
          N.indexOfSingleActiveTouch = c.touches[0].identifier;
        }
      } else {
        if (I(i) && (c.changedTouches.forEach(ja), N.numberActiveTouches = c.touches.length, 1 === N.numberActiveTouches)) {
          i = 0;
          for (; i < M.length; i++) {
            if (c = M[i], null != c && c.touchActive) {
              N.indexOfSingleActiveTouch = i;
              break;
            }
          }
        }
      }
    }
  },
  touchHistory : N
};
function T(fn, value) {
  if (null == value) {
    m("29");
  } else {
    void 0;
  }
  return null == fn ? value : Array.isArray(fn) ? fn.concat(value) : Array.isArray(value) ? [fn].concat(value) : [fn, value];
}
var U = null;
var V = 0;
function W(val, name) {
  var input = U;
  U = val;
  if (null !== X.GlobalResponderHandler) {
    X.GlobalResponderHandler.onChange(input, val, name);
  }
}
var Y = {
  startShouldSetResponder : {
    phasedRegistrationNames : {
      bubbled : "onStartShouldSetResponder",
      captured : "onStartShouldSetResponderCapture"
    },
    dependencies : J
  },
  scrollShouldSetResponder : {
    phasedRegistrationNames : {
      bubbled : "onScrollShouldSetResponder",
      captured : "onScrollShouldSetResponderCapture"
    },
    dependencies : ["scroll"]
  },
  selectionChangeShouldSetResponder : {
    phasedRegistrationNames : {
      bubbled : "onSelectionChangeShouldSetResponder",
      captured : "onSelectionChangeShouldSetResponderCapture"
    },
    dependencies : ["selectionchange"]
  },
  moveShouldSetResponder : {
    phasedRegistrationNames : {
      bubbled : "onMoveShouldSetResponder",
      captured : "onMoveShouldSetResponderCapture"
    },
    dependencies : K
  },
  responderStart : {
    registrationName : "onResponderStart",
    dependencies : J
  },
  responderMove : {
    registrationName : "onResponderMove",
    dependencies : K
  },
  responderEnd : {
    registrationName : "onResponderEnd",
    dependencies : L
  },
  responderRelease : {
    registrationName : "onResponderRelease",
    dependencies : L
  },
  responderTerminationRequest : {
    registrationName : "onResponderTerminationRequest",
    dependencies : []
  },
  responderGrant : {
    registrationName : "onResponderGrant",
    dependencies : []
  },
  responderReject : {
    registrationName : "onResponderReject",
    dependencies : []
  },
  responderTerminate : {
    registrationName : "onResponderTerminate",
    dependencies : []
  }
};
var X = {
  _getResponder : function() {
    return U;
  },
  eventTypes : Y,
  extractEvents : function(b, value, options, context) {
    if (G(b)) {
      V = V + 1;
    } else {
      if (I(b)) {
        if (0 <= V) {
          --V;
        } else {
          return console.error("Ended a touch event which was not counted in `trackedTouchCount`."), null;
        }
      }
    }
    S.recordTouchTrack(b, options);
    if (value && ("scroll" === b && !options.responderIgnoreScroll || 0 < V && "selectionchange" === b || G(b) || H(b))) {
      var callback = G(b) ? Y.startShouldSetResponder : H(b) ? Y.moveShouldSetResponder : "selectionchange" === b ? Y.selectionChangeShouldSetResponder : Y.scrollShouldSetResponder;
      if (U) {
        e: {
          var e = U;
          var i = 0;
          var a = e;
          for (; a; a = t(a)) {
            i++;
          }
          a = 0;
          var type = value;
          for (; type; type = t(type)) {
            a++;
          }
          for (; 0 < i - a;) {
            e = t(e);
            i--;
          }
          for (; 0 < a - i;) {
            value = t(value);
            a--;
          }
          for (; i--;) {
            if (e === value || e === value.alternate) {
              break e;
            }
            e = t(e);
            value = t(value);
          }
          e = null;
        }
      } else {
        e = value;
      }
      value = e === U;
      e = F.getPooled(callback, e, options, context);
      e.touchHistory = S.touchHistory;
      if (value) {
        x(e, da);
      } else {
        x(e, ca);
      }
      e: {
        callback = e._dispatchListeners;
        value = e._dispatchInstances;
        if (Array.isArray(callback)) {
          i = 0;
          for (; i < callback.length && !e.isPropagationStopped(); i++) {
            if (callback[i](e, value[i])) {
              callback = value[i];
              break e;
            }
          }
        } else {
          if (callback && callback(e, value)) {
            callback = value;
            break e;
          }
        }
        callback = null;
      }
      e._dispatchInstances = null;
      e._dispatchListeners = null;
      if (!e.isPersistent()) {
        e.constructor.release(e);
      }
      if (callback && callback !== U) {
        e = void 0;
        value = F.getPooled(Y.responderGrant, callback, options, context);
        value.touchHistory = S.touchHistory;
        x(value, A);
        i = true === r(value);
        if (U) {
          a = F.getPooled(Y.responderTerminationRequest, U, options, context);
          a.touchHistory = S.touchHistory;
          x(a, A);
          type = !a._dispatchListeners || r(a);
          if (!a.isPersistent()) {
            a.constructor.release(a);
          }
          if (type) {
            a = F.getPooled(Y.responderTerminate, U, options, context);
            a.touchHistory = S.touchHistory;
            x(a, A);
            e = T(e, [value, a]);
            W(callback, i);
          } else {
            callback = F.getPooled(Y.responderReject, callback, options, context);
            callback.touchHistory = S.touchHistory;
            x(callback, A);
            e = T(e, callback);
          }
        } else {
          e = T(e, value);
          W(callback, i);
        }
        callback = e;
      } else {
        callback = null;
      }
    } else {
      callback = null;
    }
    e = U && G(b);
    value = U && H(b);
    i = U && I(b);
    if (e = e ? Y.responderStart : value ? Y.responderMove : i ? Y.responderEnd : null) {
      e = F.getPooled(e, U, options, context);
      e.touchHistory = S.touchHistory;
      x(e, A);
      callback = T(callback, e);
    }
    e = U && "touchcancel" === b;
    if (b = U && !e && I(b)) {
      e: {
        if ((b = options.touches) && 0 !== b.length) {
          value = 0;
          for (; value < b.length; value++) {
            if (i = b[value].target, null !== i && void 0 !== i && 0 !== i) {
              a = p(i);
              t: {
                i = U;
                for (; a;) {
                  if (i === a || i === a.alternate) {
                    i = true;
                    break t;
                  }
                  a = t(a);
                }
                i = false;
              }
              if (i) {
                b = false;
                break e;
              }
            }
          }
        }
        b = true;
      }
    }
    if (b = e ? Y.responderTerminate : b ? Y.responderRelease : null) {
      options = F.getPooled(b, U, options, context);
      options.touchHistory = S.touchHistory;
      x(options, A);
      callback = T(callback, options);
      W(null);
    }
    return callback;
  },
  GlobalResponderHandler : null,
  injection : {
    injectGlobalResponderHandler : function(GlobalResponderHandler) {
      X.GlobalResponderHandler = GlobalResponderHandler;
    }
  }
};
var Z = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events;
var ka = Z[3];
var la = Z[0];
var ma = Z[1];
n = Z[2];
p = la;
q = ma;
module.exports = {
  ResponderEventPlugin : X,
  ResponderTouchHistoryStore : S,
  injectEventPluginsByName : ka
};

