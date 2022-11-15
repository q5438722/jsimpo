'use strict';
Object.defineProperty(exports, "__esModule", {
  value : true
});
exports.Component = Component;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") {
    return null;
  }
  var attachmentsInProgress = new WeakMap;
  _getRequireWildcardCache = function() {
    return attachmentsInProgress;
  };
  return attachmentsInProgress;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default : obj
    };
  }
  var this_ = _getRequireWildcardCache();
  if (this_ && this_.has(obj)) {
    return this_.get(obj);
  }
  var newObj = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  var key;
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var descriptor = a ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (descriptor && (descriptor.get || descriptor.set)) {
        Object.defineProperty(newObj, key, descriptor);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (this_) {
    this_.set(obj, newObj);
  }
  return newObj;
}
function Component() {
  const [removeMessage, some] = (0, _react.useState)(0);
  const displayables = useIsDarkMode();
  const {
    foo : actionEles
  } = useFoo();
  (0, _react.useEffect)(() => {
  }, []);
  const isCoreMode = () => {
    return some(removeMessage + 1);
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, "Dark mode? ", displayables), _react.default.createElement("div", null, "Count: ", removeMessage), _react.default.createElement("div", null, "Foo: ", actionEles), _react.default.createElement("button", {
    onClick : isCoreMode
  }, "Update count"));
}
function useIsDarkMode() {
  const [e] = (0, _react.useState)(false);
  (0, _react.useEffect)(function e() {
  }, []);
  return e;
}
function useFoo() {
  (0, _react.useDebugValue)("foo");
  return {
    foo : true
  };
}
;
