'use strict';
function newFastRegExp() {
  return new RegExp(".");
}
function toSlowRegExp(providerUserData) {
  providerUserData["exec"] = 42;
}
let re = newFastRegExp();
const evil_nonstring = {
  [Symbol["toPrimitive"]]:() => {
    return toSlowRegExp(re);
  }
};
const empty_string = "";
String["prototype"]["replace"]["call"](evil_nonstring, re, empty_string);
re = newFastRegExp();
String["prototype"]["match"]["call"](evil_nonstring, re, empty_string);
re = newFastRegExp();
String["prototype"]["search"]["call"](evil_nonstring, re, empty_string);
re = newFastRegExp();
String["prototype"]["split"]["call"](evil_nonstring, re, empty_string);

