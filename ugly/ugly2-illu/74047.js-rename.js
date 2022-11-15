import baseDifference from "./.internal/baseDifference.js";import baseFlatten from "./.internal/baseFlatten.js";import isArrayLikeObject from "./isArrayLikeObject.js";import last from "./last.js";function differenceWith(e, ...r) {
  var t = last(r);
  if (isArrayLikeObject(t)) {
    t = undefined;
  }return isArrayLikeObject(e) ? baseDifference(e, baseFlatten(r, 1, isArrayLikeObject, true), undefined, t) : [];
}export default differenceWith;
