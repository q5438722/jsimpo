function newFastRegExp() {
  return new RegExp(".");
}function toSlowRegExp(e) {
  e.exec = 42;
}var re = newFastRegExp();
const evil_nonstring = { [Symbol.toPrimitive]: () => toSlowRegExp(re) };
const empty_string = "";
String.prototype.replace.call(evil_nonstring, re, empty_string);re = newFastRegExp();String.prototype.match.call(evil_nonstring, re, empty_string);re = newFastRegExp();String.prototype.search.call(evil_nonstring, re, empty_string);re = newFastRegExp();String.prototype.split.call(evil_nonstring, re, empty_string);
