import baseClone from "./.internal/baseClone.js";const CLONE_SYMBOLS_FLAG = 4;
function clone(e) {
  return baseClone(e, CLONE_SYMBOLS_FLAG);
}export default clone;
