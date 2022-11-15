'use strict';
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports["Component"] = Component;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache() {
  var _0x31f734 = {};
  if (typeof WeakMap !== _0x31f734["UyfRV"]) {
    return null;
  }
  var attachmentsInProgress = new WeakMap;
  _getRequireWildcardCache = function() {
    return attachmentsInProgress;
  };
  return attachmentsInProgress;
}
function _interopRequireWildcard(obj) {
  if (obj && obj["__esModule"]) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default" : obj
    };
  }
  var attr = _getRequireWildcardCache();
  if (attr && attr["has"](obj)) {
    return attr["get"](obj);
  }
  var event = Object["defineProperty"] && Object["getOwnPropertyDescriptor"];
  var prop;
  for (prop in obj) {
    if (Object["prototype"]["hasOwnProperty"]["call"](obj, prop)) {
      if ("Jyfkq" !== _0x3e3e94["hjjXL"]) {
        Object["defineProperty"](_0x43a60a, prop, desc);
      } else {
        var desc = event ? Object["getOwnPropertyDescriptor"](obj, prop) : null;
        if (desc && (desc["get"] || desc["set"])) {
          Object["defineProperty"](_0x43a60a, prop, desc);
        } else {
          _0x43a60a[prop] = obj[prop];
        }
      }
    }
  }
  _0x43a60a["default"] = obj;
  if (attr) {
    attr["set"](obj, _0x43a60a);
  }
  return _0x43a60a;
}
function Component() {
  const [data, callback] = (0, _react["useState"])(0);
  const artistTrack = useIsDarkMode();
  const {
    foo : fooModule
  } = useFoo();
  (0, _react["useEffect"])(() => {
  }, []);
  const resize = () => {
    return callback(data + 1);
  };
  return _react["default"]["createElement"](_react["default"]["Fragment"], null, _react["default"]["createElement"]("div", null, _0x31a477["LwAMB"], artistTrack), _react["default"]["createElement"](_0x31a477["qQYEV"], null, _0x31a477["ciuDq"], data), _react["default"]["createElement"]("div", null, "Foo: ", fooModule), _react["default"]["createElement"](_0x31a477["YQKwN"], {
    "onClick" : resize
  }, _0x31a477["ipQfy"]));
}
function useIsDarkMode() {
  const [_0x24acad] = (0, _react["useState"])(![]);
  (0, _react["useEffect"])(function useEffectCreate() {
  }, []);
  return _0x24acad;
}
function useFoo() {
  var _0x3601b4 = {};
  (0, _react["useDebugValue"])(_0x3601b4["EssrQ"]);
  return {
    "foo" : !![]
  };
}
;
