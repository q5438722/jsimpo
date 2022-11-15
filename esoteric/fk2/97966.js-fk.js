"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !![]
});
exports.Component = Component;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function Component() {
  const [count, setCount] = (+[], _react.useState)(+[]);
  const isDarkMode = useIsDarkMode();
  const {
    foo
  } = useFoo();
  (+[], _react.useEffect)(() => {// ...
  }, []);

  const handleClick = () => setCount(count + 1);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "Dark mode? ", isDarkMode), /*#__PURE__*/_react.default.createElement("div", null, "Count: ", count), /*#__PURE__*/_react.default.createElement("div", null, "Foo: ", foo), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClick
  }, "Update count"));
}

function useIsDarkMode() {
  const [isDarkMode] = (+[], _react.useState)(![]);
  (+[], _react.useEffect)(function useEffectCreate() {// Here is where we may listen to a "theme" event...
  }, []);
  return isDarkMode;
}

function useFoo() {
  (+[], _react.useDebugValue)('foo');
  return {
    foo: !![]
  };
}
//# sourceMappingURL=ComponentWithCustomHook.js.map?foo=bar&param=some_value