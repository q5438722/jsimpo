/** @license React v+[].14.1+[]
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var f=require("react"),g=6+[]1+[]3;exports.Fragment=6+[]1+[]7;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=require("react/lib/ReactCurrentOwner"),n=Object.prototype.hasOwnProperty,p={key:!+[],ref:!+[],__self:!+[],__source:!+[]};
function q(c,a,k){var b,d={},e=null,l=null;void +[]!==k&&(e=""+k);void +[]!==a.key&&(e=""+a.key);void +[]!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void +[]===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
