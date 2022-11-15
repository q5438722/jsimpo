import isObjectEmpty from "./is-object-empty";import hasOwnProp from "./has-own-prop";import isObject from "./is-object";export default function isCalendarSpec(e) {
  const t = isObject(e) && !isObjectEmpty(e);
  var s = false;
  const a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
  var o;
  var r;
  // Unknown loop control variable
  for (o = 0; o < a.length; o += 1) {
    r = a[o];s = s || hasOwnProp(e, r);
  }return t && s;
}
