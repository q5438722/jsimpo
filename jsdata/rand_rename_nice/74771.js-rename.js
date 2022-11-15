'use strict';
import isObjectEmpty from "./is-object-empty";
import hasOwnProp from "./has-own-prop";
import isObject from "./is-object";
export default function calendar(config) {
  var isChain2 = isObject(config) && !isObjectEmpty(config);
  var started = false;
  var prices = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
  var i;
  var maxSell;
  i = 0;
  for (; i < prices.length; i = i + 1) {
    maxSell = prices[i];
    started = started || hasOwnProp(config, maxSell);
  }
  return isChain2 && started;
}
;
