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
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Click me"));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ!+[]+!+[]ZXJzaW9uIjozLCJzZWN+[]aW9ucyI6W3sib!+[]+!+[]Zmc!+[]+!+[]V+[]Ijp7ImxpbmUiOjAsImNvbHVtbiI6MH+[]sIm1hcCI6eyJ!+[]+!+[]ZXJzaW9uIjozLCJzb3VyY!+[]+!+[]VzIjpbIkV4YW1wbGUuanMiXSwibmFtZXMiOlsiQ!+[]+!+[]9tcG9uZW5+[]IiwiY!+[]+!+[]91bnQiLCJzZXRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBOzs7Ozs7QUFUQTs7Ozs7Ozs7QUFXTyxTQUFTQSxTQUFULEdBQXFCO+[]FBQzFCLFFBQU+[]sQ+[]FBQ+[]MsS+[]FBRCxFQUFRQyxRQUFSLElBQW9CLHFCQUFTLENBQVQsQ+[]FBMUI7QUFFQSxzQkFDRSx1REFDRSx3REFBZ+[]JELEtBQWhCLFdBREYsZUFFRTtBQUFRLElBQUEsT+[]FBTyxFQUFFLE1BQU1DLFFBQVEsQ+[]FBQ+[]QsS+[]FBSyxHQUFHLENBQVQ7QUFBL+[]IsZ+[]JBRkYsQ+[]FERjtBQU1EIiwic!+[]+!+[]91cmNlc+[]NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY!+[]+!+[]Vib!+[]+!+[]9rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb!+[]+!+[]RlIGlzIGxpY!+[]+!+[]Vuc!+[]+!+[]VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB+[]aGVcbiAqIExJQ+[]VOU+[]UgZmlsZSBpbiB+[]aGUgcm9vdCBkaXJlY3Rvcnkgb!+[]+!+[]YgdGhpcyBzb3VyY!+[]+!+[]UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBSZWFjdCwge3VzZVN+[]YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb!+[]+!+[]1wb!+[]+!+[]5lbnQoKSB7XG4gIGNvbnN+[]IFtjb3VudCwgc!+[]+!+[]V+[]Q!+[]+!+[]91bnRdID+[]gdXNlU3RhdGUoMCk7XG5cbiAgcmV+[]dXJuIChcbiAgICA8ZGl!+[]+!+[]PlxuICAgICAgPHA+WW91IGNsaWNrZWQge!+[]+!+[]NvdW5+[]fSB+[]aW1lczwvcD5cbiAgICAgIDxidXR+[]b!+[]+!+[]4gb!+[]+!+[]5DbGljaz17KCkgPT4gc!+[]+!+[]V+[]Q!+[]+!+[]91bnQoY!+[]+!+[]91bnQgKyAxKX+[]+Q!+[]+!+[]xpY!+[]+!+[]sgbWU8L!+[]+!+[]J1dHRvbj5cbiAgICA8L!+[]+!+[]Rpdj5cbiAgKTtcbn1cbiJdLCJ4X3JlYWN+[]X3NvdXJjZXMiOltbeyJuYW1lcyI6WyI8bm8taG9vaz4iLCJjb3VudCJdLCJtYXBwaW5ncyI6IkNBQUQ7YTRCQ+[]EsQVdEQSJ9XV19fV19