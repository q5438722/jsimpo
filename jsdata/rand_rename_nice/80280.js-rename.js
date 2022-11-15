'use strict';
import{
  looseEqual as looseEqual
}from "uni-shared";
function callback(t, o, val) {
  t[o] = val;
}
function write(out, a) {
  let result;
  let key;
  let value;
  let val;
  for (key in out) {
    value = out[key];
    val = a[key];
    if (!looseEqual(val, value)) {
      callback(result || (result = Object.create(null)), key, value);
    }
  }
  return result;
}
function diff(array, map, time) {
  let idx;
  let color;
  let t;
  for (idx in array) {
    color = array[idx];
    t = map[idx];
    if (!t) {
      callback(time, idx, color);
      continue;
    }
    const _data = write(color, t);
    if (_data) {
      callback(time, idx, _data);
    }
  }
  return time;
}
export{
  diff as diff
};

