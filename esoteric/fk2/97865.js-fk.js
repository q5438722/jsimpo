"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !![]
});
exports.default = useTheme;
exports.ThemeContext = void +[];

var _react = require("react");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
const ThemeContext = /*#__PURE__*/(+[], _react.createContext)('bright');
exports.ThemeContext = ThemeContext;

function useTheme() {
  const theme = (+[], _react.useContext)(ThemeContext);
  (+[], _react.useDebugValue)(theme);
  return theme;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ!+[]+!+[]ZXJzaW9uIjozLCJzZWN+[]aW9ucyI6W3sib!+[]+!+[]Zmc!+[]+!+[]V+[]Ijp7ImxpbmUiOjAsImNvbHVtbiI6MH+[]sIm1hcCI6eyJ!+[]+!+[]ZXJzaW9uIjozLCJzb3VyY!+[]+!+[]VzIjpbInVzZVRoZW1lLmpzIl+[]sIm5hbWVzIjpbIlRoZW1lQ!+[]+!+[]9udGV4dCIsInVzZVRoZW1lIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O+[]FBU+[]E7O+[]FBVEE7Ozs7Ozs7O+[]FBV+[]8sTUFBTUEsWUFBWSxnQkFBRywwQkFBYyxRQUFkLENBQXJCOzs7QUFFUSxTQUFTQyxRQUFULEdBQW9CO+[]FBQ!+[]+!+[]pDLFFBQU1DLEtBQUssR+[]FBRyx1QkFBV+[]YsWUFBWCxDQUFkO+[]FBQ+[]EsNEJBQWNFLEtBQWQ7QUFDQSxTQUFPQSxLQUFQO+[]FBQ+[]QiLCJzb3VyY!+[]+!+[]VzQ!+[]+!+[]9udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb!+[]+!+[]ssIEluYy4gYW5kIGl+[]cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc!+[]+!+[]91cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb!+[]+!+[]9+[]IGRpcmVjdG9yeSBvZiB+[]aGlzIHNvdXJjZSB+[]cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J+[]IHtjcmVhdGVDb!+[]+!+[]5+[]ZXh+[]LCB1c!+[]+!+[]VDb!+[]+!+[]5+[]ZXh+[]LCB1c!+[]+!+[]VEZWJ1Z1ZhbHVlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb!+[]+!+[]5zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb!+[]+!+[]5+[]ZXh+[]KCdicmlnaHQnKTtcblxuZXhwb3J+[]IGRlZmF1bHQgZnVuY3Rpb!+[]+!+[]4gdXNlVGhlbWUoKSB7XG4gIGNvbnN+[]IHRoZW1lID+[]gdXNlQ!+[]+!+[]9udGV4dChUaGVtZUNvbnRleHQpO1xuICB1c!+[]+!+[]VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgcmV+[]dXJuIHRoZW1lO1xufVxuIl19fV19