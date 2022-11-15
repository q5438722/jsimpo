function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0xab4aea) {
    const _0x2ed877 = _0x402a;
    _0xab4aea[_0x2ed877(312)] = 5893 + 5381 * 1 + -5616 * 2;
}
let re = newFastRegExp();
const evil_nonstring = { [Symbol[_0x1ce52e(313)]]: () => toSlowRegExp(re) }, empty_string = '';
String['prototype']['replace'][_0x1ce52e(314)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x1ce52e(315)][_0x1ce52e(316)][_0x1ce52e(314)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x1ce52e(315)][_0x1ce52e(317)][_0x1ce52e(314)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x1ce52e(315)][_0x1ce52e(318)][_0x1ce52e(314)](evil_nonstring, re, empty_string);