'use strict';
(function(win, factory) {
  if ("object" === typeof exports && "undefined" !== typeof module) {
    factory(exports);
  } else {
    if ("function" === typeof define && define.amd) {
      define(["exports"], factory);
    } else {
      win = win || self;
      factory(win.React = {});
    }
  }
})(this, function(self) {
  function replace(id) {
    var bibtex = "https://reactjs.org/docs/error-decoder.html?invariant=" + id;
    var i = 1;
    for (; i < arguments.length; i++) {
      bibtex = bibtex + ("&args[]=" + encodeURIComponent(arguments[i]));
    }
    return "Minified React error #" + id + "; visit " + bibtex + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  function ComponentDummy() {
  }
  function ReactPureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  function createElement(type, obj, elem) {
    var key;
    var data = {};
    var u = null;
    var ref = null;
    if (null != obj) {
      for (key in void 0 !== obj.ref && (ref = obj.ref), void 0 !== obj.key && (u = "" + obj.key), obj) {
        if (__hasProp.call(obj, key) && !ref.hasOwnProperty(key)) {
          data[key] = obj[key];
        }
      }
    }
    var values = arguments.length - 2;
    if (1 === values) {
      data.children = elem;
    } else {
      if (1 < values) {
        var a = Array(values);
        var i = 0;
        for (; i < values; i++) {
          a[i] = arguments[i + 2];
        }
        data.children = a;
      }
    }
    if (type && type.defaultProps) {
      for (key in values = type.defaultProps, values) {
        if (void 0 === data[key]) {
          data[key] = values[key];
        }
      }
    }
    return {
      $$typeof : REACT_ELEMENT_TYPE,
      type : type,
      key : u,
      ref : ref,
      props : data,
      _owner : ReactCurrentOwner.current
    };
  }
  function clone(data, t) {
    return {
      $$typeof : REACT_ELEMENT_TYPE,
      type : data.type,
      key : t,
      ref : data.ref,
      props : data.props,
      _owner : data._owner
    };
  }
  function keys(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function getValueOfBestMatchingHashEntry(hash) {
    var subwikiListsCache = {
      "=" : "=0",
      ":" : "=2"
    };
    return "$" + ("" + hash).replace(/[=:]/g, function(wikiId) {
      return subwikiListsCache[wikiId];
    });
  }
  function filter(model, keyPrefix, value, path) {
    if (pre_seek_l.length) {
      var options = pre_seek_l.pop();
      options.result = model;
      options.keyPrefix = keyPrefix;
      options.func = value;
      options.context = path;
      options.count = 0;
      return options;
    }
    return {
      result : model,
      keyPrefix : keyPrefix,
      func : value,
      context : path,
      count : 0
    };
  }
  function get(p) {
    p.result = null;
    p.keyPrefix = null;
    p.func = null;
    p.context = null;
    p.count = 0;
    if (10 > pre_seek_l.length) {
      pre_seek_l.push(p);
    }
  }
  function serialize(obj, name, callback, offset) {
    var type = typeof obj;
    if ("undefined" === type || "boolean" === type) {
      obj = null;
    }
    var result = false;
    if (null === obj) {
      result = true;
    } else {
      switch(type) {
        case "string":
        case "number":
          result = true;
          break;
        case "object":
          switch(obj.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case SYSendBoard:
              result = true;
          }
      }
    }
    if (result) {
      return callback(offset, obj, "" === name ? "." + f(obj, 0) : name), 1;
    }
    result = 0;
    name = "" === name ? "." : name + ":";
    if (Array.isArray(obj)) {
      var i = 0;
      for (; i < obj.length; i++) {
        type = obj[i];
        var path = name + f(type, i);
        result = result + serialize(type, path, callback, offset);
      }
    } else {
      if (null === obj || "object" !== typeof obj ? path = null : (path = key && obj[key] || obj["@@iterator"], path = "function" === typeof path ? path : null), "function" === typeof path) {
        obj = path.call(obj);
        i = 0;
        for (; !(type = obj.next()).done;) {
          type = type.value;
          path = name + f(type, i++);
          result = result + serialize(type, path, callback, offset);
        }
      } else {
        if ("object" === type) {
          throw callback = "" + obj, Error(replace(31, "[object Object]" === callback ? "object with keys {" + Object.keys(obj).join(", ") + "}" : callback, ""));
        }
      }
    }
    return result;
  }
  function callback(object, callback, val) {
    return null == object ? 0 : serialize(object, "", callback, val);
  }
  function f(a, v) {
    return "object" === typeof a && null !== a && null != a.key ? getValueOfBestMatchingHashEntry(a.key) : v.toString(36);
  }
  function c(s, color, n) {
    s.func.call(s.context, color, s.count++);
  }
  function run(data, p, cb) {
    var list = data.result;
    var url = data.keyPrefix;
    data = data.func.call(data.context, p, data.count++);
    if (Array.isArray(data)) {
      r(data, list, cb, function(p) {
        return p;
      });
    } else {
      if (null != data) {
        if (keys(data)) {
          data = clone(data, url + (!data.key || p && p.key === data.key ? "" : ("" + data.key).replace(REGEX_ESCAPE_EXPR, "$&/") + "/") + cb);
        }
        list.push(data);
      }
    }
  }
  function r(m, d, v, c, b) {
    var key = "";
    if (null != v) {
      key = ("" + v).replace(REGEX_ESCAPE_EXPR, "$&/") + "/";
    }
    d = filter(d, key, c, b);
    callback(m, run, d);
    get(d);
  }
  function removeHasDontEnumBug() {
    var source = level.current;
    if (null === source) {
      throw Error(replace(321));
    }
    return source;
  }
  function expect(data, k) {
    var index = data.length;
    data.push(k);
    e: for (;;) {
      var p = index - 1 >>> 1;
      var start = data[p];
      if (void 0 !== start && 0 < raise(start, k)) {
        data[p] = k;
        data[index] = start;
        index = p;
      } else {
        break e;
      }
    }
  }
  function extend(value) {
    value = value[0];
    return void 0 === value ? null : value;
  }
  function next(data) {
    var total = data[0];
    if (void 0 !== total) {
      var k = data.pop();
      if (k !== total) {
        data[0] = k;
        var index = 0;
        var sources = data.length;
        e: for (; index < sources;) {
          var i = 2 * (index + 1) - 1;
          var error = data[i];
          var p = i + 1;
          var start = data[p];
          if (void 0 !== error && 0 > raise(error, k)) {
            if (void 0 !== start && 0 > raise(start, error)) {
              data[index] = start;
              data[p] = k;
              index = p;
            } else {
              data[index] = error;
              data[i] = k;
              index = i;
            }
          } else {
            if (void 0 !== start && 0 > raise(start, k)) {
              data[index] = start;
              data[p] = k;
              index = p;
            } else {
              break e;
            }
          }
        }
      }
      return total;
    }
    return null;
  }
  function raise(a, b) {
    var n = a.sortIndex - b.sortIndex;
    return 0 !== n ? n : a.id - b.id;
  }
  function fn(value) {
    var options = extend(b);
    for (; null !== options;) {
      if (null === options.callback) {
        next(b);
      } else {
        if (options.startTime <= value) {
          next(b);
          options.sortIndex = options.expirationTime;
          expect(user, options);
        } else {
          break;
        }
      }
      options = extend(b);
    }
  }
  function draw(timeOffset) {
    Pe = false;
    fn(timeOffset);
    if (!inputWin) {
      if (null !== extend(user)) {
        inputWin = true;
        write(configure);
      } else {
        var frame = extend(b);
        if (null !== frame) {
          get(draw, frame.startTime - timeOffset);
        }
      }
    }
  }
  function configure(keys, max) {
    inputWin = false;
    if (Pe) {
      Pe = false;
      nudgePick();
    }
    winRef = true;
    var canvasWidth = width;
    try {
      fn(max);
      item = extend(user);
      for (; null !== item && (!(item.expirationTime > max) || keys && !configureFromObject());) {
        var callback = item.callback;
        if (null !== callback) {
          item.callback = null;
          width = item.priorityLevel;
          var cb = callback(item.expirationTime <= max);
          max = parseInt();
          if ("function" === typeof cb) {
            item.callback = cb;
          } else {
            if (item === extend(user)) {
              next(user);
            }
          }
          fn(max);
        } else {
          next(user);
        }
        item = extend(user);
      }
      if (null !== item) {
        var err = true;
      } else {
        var c = extend(b);
        if (null !== c) {
          get(draw, c.startTime - max);
        }
        err = false;
      }
      return err;
    } finally {
      item = null;
      width = canvasWidth;
      winRef = false;
    }
  }
  function find(prams) {
    switch(prams) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1E4;
      default:
        return 5E3;
    }
  }
  var condition = "function" === typeof Symbol && Symbol.for;
  var REACT_ELEMENT_TYPE = condition ? Symbol.for("react.element") : 60103;
  var SYSendBoard = condition ? Symbol.for("react.portal") : 60106;
  var description = condition ? Symbol.for("react.fragment") : 60107;
  var exitCode = condition ? Symbol.for("react.strict_mode") : 60108;
  var updateSynchronously = condition ? Symbol.for("react.profiler") : 60114;
  var TYPE_SYMBOL = condition ? Symbol.for("react.provider") : 60109;
  var t = condition ? Symbol.for("react.context") : 60110;
  var tree = condition ? Symbol.for("react.forward_ref") : 60112;
  var prefix = condition ? Symbol.for("react.suspense") : 60113;
  var title = condition ? Symbol.for("react.memo") : 60115;
  var handler = condition ? Symbol.for("react.lazy") : 60116;
  var key = "function" === typeof Symbol && Symbol.iterator;
  var ownSymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  var assign = function() {
    try {
      if (!Object.assign) {
        return false;
      }
      var str = new String("abc");
      str[5] = "de";
      if ("5" === Object.getOwnPropertyNames(str)[0]) {
        return false;
      }
      var context = {};
      str = 0;
      for (; 10 > str; str++) {
        context["_" + String.fromCharCode(str)] = str;
      }
      if ("0123456789" !== Object.getOwnPropertyNames(context).map(function(item_prereq) {
        return context[item_prereq];
      }).join("")) {
        return false;
      }
      var b = {};
      "abcdefghijklmnopqrst".split("").forEach(function(gid) {
        b[gid] = gid;
      });
      return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, b)).join("") ? false : true;
    } catch (e) {
      return false;
    }
  }() ? Object.assign : function(target, producer) {
    if (null === target || void 0 === target) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    var output = Object(target);
    var keys;
    var i = 1;
    for (; i < arguments.length; i++) {
      var obj = Object(arguments[i]);
      var key;
      for (key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          output[key] = obj[key];
        }
      }
      if (ownSymbols) {
        keys = ownSymbols(obj);
        var i = 0;
        for (; i < keys.length; i++) {
          if (propIsEnumerable.call(obj, keys[i])) {
            output[keys[i]] = obj[keys[i]];
          }
        }
      }
    }
    return output;
  };
  var ReactNoopUpdateQueue = {
    isMounted : function(id) {
      return false;
    },
    enqueueForceUpdate : function(publicInstance, callback, callerName) {
    },
    enqueueReplaceState : function(completeState, callback, callerName, selector) {
    },
    enqueueSetState : function(instance, partialState, callback, callerName) {
    }
  };
  var emptyObject = {};
  ReactComponent.prototype.isReactComponent = {};
  ReactComponent.prototype.setState = function(partialState, callback) {
    if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) {
      throw Error(replace(85));
    }
    this.updater.enqueueSetState(this, partialState, callback, "setState");
  };
  ReactComponent.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
  };
  ComponentDummy.prototype = ReactComponent.prototype;
  condition = ReactPureComponent.prototype = new ComponentDummy;
  condition.constructor = ReactPureComponent;
  assign(condition, ReactComponent.prototype);
  condition.isPureReactComponent = true;
  var ReactCurrentOwner = {
    current : null
  };
  var __hasProp = Object.prototype.hasOwnProperty;
  var ref = {
    key : true,
    ref : true,
    __self : true,
    __source : true
  };
  var REGEX_ESCAPE_EXPR = /\/+/g;
  var pre_seek_l = [];
  var level = {
    current : null
  };
  var workerSetPix;
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var jsonp = null;
    var timeout = null;
    var present = function() {
      if (null !== jsonp) {
        try {
          var display = parseInt();
          jsonp(true, display);
          jsonp = null;
        } catch (past) {
          throw setTimeout(present, 0), past;
        }
      }
    };
    var te = Date.now();
    var parseInt = function() {
      return Date.now() - te;
    };
    var write = function(callback) {
      if (null !== jsonp) {
        setTimeout(write, 0, callback);
      } else {
        jsonp = callback;
        setTimeout(present, 0);
      }
    };
    var get = function(fn, time) {
      timeout = setTimeout(fn, time);
    };
    var nudgePick = function() {
      clearTimeout(timeout);
    };
    var configureFromObject = function() {
      return false;
    };
    condition = workerSetPix = function() {
    };
  } else {
    var data = window.performance;
    var Date = window.Date;
    var setTimeout = window.setTimeout;
    var clearTimeout = window.clearTimeout;
    if ("undefined" !== typeof console) {
      condition = window.cancelAnimationFrame;
      if ("function" !== typeof window.requestAnimationFrame) {
        console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if ("function" !== typeof condition) {
        console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
    }
    if ("object" === typeof data && "function" === typeof data.now) {
      parseInt = function() {
        return data.now();
      };
    } else {
      var se = Date.now();
      parseInt = function() {
        return Date.now() - se;
      };
    }
    var pe = false;
    var fullText = null;
    var redrawTimeout = -1;
    var len = 5;
    var start = 0;
    configureFromObject = function() {
      return parseInt() >= start;
    };
    condition = function() {
    };
    workerSetPix = function(size) {
      if (0 > size || 125 < size) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
      } else {
        len = 0 < size ? Math.floor(1E3 / size) : 5;
      }
    };
    var channel = new MessageChannel;
    var port2 = channel.port2;
    channel.port1.onmessage = function() {
      if (null !== fullText) {
        var end = parseInt();
        start = end + len;
        try {
          if (fullText(true, end)) {
            port2.postMessage(null);
          } else {
            pe = false;
            fullText = null;
          }
        } catch (e) {
          throw port2.postMessage(null), e;
        }
      } else {
        pe = false;
      }
    };
    write = function(text) {
      fullText = text;
      if (!pe) {
        pe = true;
        port2.postMessage(null);
      }
    };
    get = function(cb, t) {
      redrawTimeout = setTimeout(function() {
        cb(parseInt());
      }, t);
    };
    nudgePick = function() {
      clearTimeout(redrawTimeout);
      redrawTimeout = -1;
    };
  }
  var user = [];
  var b = [];
  var nChanges = 1;
  var item = null;
  var width = 3;
  var winRef = false;
  var inputWin = false;
  var Pe = false;
  var Ce = 0;
  channel = {
    ReactCurrentDispatcher : level,
    ReactCurrentOwner : ReactCurrentOwner,
    IsSomeRendererActing : {
      current : false
    },
    assign : assign
  };
  assign(channel, {
    Scheduler : {
      __proto__ : null,
      unstable_ImmediatePriority : 1,
      unstable_UserBlockingPriority : 2,
      unstable_NormalPriority : 3,
      unstable_IdlePriority : 5,
      unstable_LowPriority : 4,
      unstable_runWithPriority : function(opt_width, opt_color) {
        switch(opt_width) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            opt_width = 3;
        }
        var canvasWidth = width;
        width = opt_width;
        try {
          return opt_color();
        } finally {
          width = canvasWidth;
        }
      },
      unstable_next : function(saveNotifs) {
        switch(width) {
          case 1:
          case 2:
          case 3:
            var canvasWidth = 3;
            break;
          default:
            canvasWidth = width;
        }
        var destWidth = width;
        width = canvasWidth;
        try {
          return saveNotifs();
        } finally {
          width = destWidth;
        }
      },
      unstable_scheduleCallback : function(a, fn, value) {
        var i = parseInt();
        if ("object" === typeof value && null !== value) {
          var len = value.delay;
          len = "number" === typeof len && 0 < len ? i + len : i;
          value = "number" === typeof value.timeout ? value.timeout : find(a);
        } else {
          value = find(a);
          len = i;
        }
        value = len + value;
        a = {
          id : nChanges++,
          callback : fn,
          priorityLevel : a,
          startTime : len,
          expirationTime : value,
          sortIndex : -1
        };
        if (len > i) {
          a.sortIndex = len;
          expect(b, a);
          if (null === extend(user) && a === extend(b)) {
            if (Pe) {
              nudgePick();
            } else {
              Pe = true;
            }
            get(draw, len - i);
          }
        } else {
          a.sortIndex = value;
          expect(user, a);
          if (!(inputWin || winRef)) {
            inputWin = true;
            write(configure);
          }
        }
        return a;
      },
      unstable_cancelCallback : function(receiver2) {
        receiver2.callback = null;
      },
      unstable_wrapCallback : function(CropAreaRectangle) {
        var canvasWidth = width;
        return function() {
          var destWidth = width;
          width = canvasWidth;
          try {
            return CropAreaRectangle.apply(this, arguments);
          } finally {
            width = destWidth;
          }
        };
      },
      unstable_getCurrentPriorityLevel : function() {
        return width;
      },
      unstable_shouldYield : function() {
        var end = parseInt();
        fn(end);
        var e = extend(user);
        return e !== item && null !== item && null !== e && null !== e.callback && e.startTime <= end && e.expirationTime < item.expirationTime || configureFromObject();
      },
      unstable_requestPaint : condition,
      unstable_continueExecution : function() {
        if (!(inputWin || winRef)) {
          inputWin = true;
          write(configure);
        }
      },
      unstable_pauseExecution : function() {
      },
      unstable_getFirstCallbackNode : function() {
        return extend(user);
      },
      get unstable_now() {
        return parseInt;
      },
      get unstable_forceFrameRate() {
        return workerSetPix;
      },
      unstable_Profiling : null
    },
    SchedulerTracing : {
      __proto__ : null,
      __interactionsRef : null,
      __subscriberRef : null,
      unstable_clear : function(saveNotifs) {
        return saveNotifs();
      },
      unstable_getCurrent : function() {
        return null;
      },
      unstable_getThreadID : function() {
        return ++Ce;
      },
      unstable_trace : function(data, linkedEntities, force) {
        return force();
      },
      unstable_wrap : function(canCreateDiscussions) {
        return canCreateDiscussions;
      },
      unstable_subscribe : function(canCreateDiscussions) {
      },
      unstable_unsubscribe : function(canCreateDiscussions) {
      }
    }
  });
  self.Children = {
    map : function(f, q, num) {
      if (null == f) {
        return f;
      }
      var list = [];
      r(f, list, null, q, num);
      return list;
    },
    forEach : function(array, d, b) {
      if (null == array) {
        return array;
      }
      d = filter(null, null, d, b);
      callback(array, c, d);
      get(d);
    },
    count : function(query) {
      return callback(query, function() {
        return null;
      }, null);
    },
    toArray : function(e) {
      var a = [];
      r(e, a, null, function(i) {
        return i;
      });
      return a;
    },
    only : function(obj) {
      if (!keys(obj)) {
        throw Error(replace(143));
      }
      return obj;
    }
  };
  self.Component = ReactComponent;
  self.Fragment = description;
  self.Profiler = updateSynchronously;
  self.PureComponent = ReactPureComponent;
  self.StrictMode = exitCode;
  self.Suspense = prefix;
  self.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = channel;
  self.cloneElement = function(element, props, children) {
    if (null === element || void 0 === element) {
      throw Error(replace(267, element));
    }
    var data = assign({}, element.props);
    var o = element.key;
    var ref = element.ref;
    var owner = element._owner;
    if (null != props) {
      if (void 0 !== props.ref) {
        ref = props.ref;
        owner = ReactCurrentOwner.current;
      }
      if (void 0 !== props.key) {
        o = "" + props.key;
      }
      if (element.type && element.type.defaultProps) {
        var values = element.type.defaultProps;
      }
      for (key in props) {
        if (__hasProp.call(props, key) && !ref.hasOwnProperty(key)) {
          data[key] = void 0 === props[key] && void 0 !== values ? values[key] : props[key];
        }
      }
    }
    var key = arguments.length - 2;
    if (1 === key) {
      data.children = children;
    } else {
      if (1 < key) {
        values = Array(key);
        var i = 0;
        for (; i < key; i++) {
          values[i] = arguments[i + 2];
        }
        data.children = values;
      }
    }
    return {
      $$typeof : REACT_ELEMENT_TYPE,
      type : element.type,
      key : o,
      ref : ref,
      props : data,
      _owner : owner
    };
  };
  self.createContext = function(context, width) {
    if (void 0 === width) {
      width = null;
    }
    context = {
      $$typeof : t,
      _calculateChangedBits : width,
      _currentValue : context,
      _currentValue2 : context,
      _threadCount : 0,
      Provider : null,
      Consumer : null
    };
    context.Provider = {
      $$typeof : TYPE_SYMBOL,
      _context : context
    };
    return context.Consumer = context;
  };
  self.createElement = createElement;
  self.createFactory = function(type) {
    var validatedFactory = createElement.bind(null, type);
    validatedFactory.type = type;
    return validatedFactory;
  };
  self.createRef = function() {
    return {
      current : null
    };
  };
  self.forwardRef = function(forwardRefFn) {
    return {
      $$typeof : tree,
      render : forwardRefFn
    };
  };
  self.isValidElement = keys;
  self.lazy = function(ctxt_alloc_param) {
    return {
      $$typeof : handler,
      _ctor : ctxt_alloc_param,
      _status : -1,
      _result : null
    };
  };
  self.memo = function(klass, key) {
    return {
      $$typeof : title,
      type : klass,
      compare : void 0 === key ? null : key
    };
  };
  self.useCallback = function(callback, request) {
    return removeHasDontEnumBug().useCallback(callback, request);
  };
  self.useContext = function(context, halRoles) {
    return removeHasDontEnumBug().useContext(context, halRoles);
  };
  self.useDebugValue = function(formatters, customFormatters) {
  };
  self.useEffect = function(e, skipFrames) {
    return removeHasDontEnumBug().useEffect(e, skipFrames);
  };
  self.useImperativeHandle = function(gid, image, posterUrl) {
    return removeHasDontEnumBug().useImperativeHandle(gid, image, posterUrl);
  };
  self.useLayoutEffect = function(e, skipFrames) {
    return removeHasDontEnumBug().useLayoutEffect(e, skipFrames);
  };
  self.useMemo = function(e, skipFrames) {
    return removeHasDontEnumBug().useMemo(e, skipFrames);
  };
  self.useReducer = function(gid, image, posterUrl) {
    return removeHasDontEnumBug().useReducer(gid, image, posterUrl);
  };
  self.useRef = function(e) {
    return removeHasDontEnumBug().useRef(e);
  };
  self.useState = function(state) {
    return removeHasDontEnumBug().useState(state);
  };
  self.version = "16.13.1";
});

