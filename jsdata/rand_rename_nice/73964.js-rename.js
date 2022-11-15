'use strict';
import baseClone from "./.internal/baseClone.js";
const CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
export default clone;

