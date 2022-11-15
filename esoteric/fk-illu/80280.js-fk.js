import { looseEqual } from 'uni-shared';

function setResult(data, k, v) {
  data[k] = v;
}

function diffElmData(newObj, oldObj) {
  var result;
  var key;
  var cur;
  var old;

  for (key in newObj) {
    cur = newObj[key];
    old = oldObj[key];
    if (!looseEqual(old, cur)) {
      (result || (result = Object.create(null)))[key] = cur;
    }
  }
  return result;
}

export function diff(newData, oldData, result) {
  var id;
  var cur;
  var old;

  for (id in newData) {
    cur = newData[id];
    old = oldData[id];
    if (!old) {
      result[id] = cur;
      continue;
    }
    const idObj = diffElmData(cur, old);

    idObj && setResult(result, id, idObj);
  }
  return result;
}
