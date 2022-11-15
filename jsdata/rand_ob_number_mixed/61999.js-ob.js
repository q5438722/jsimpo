function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0x1b5873) {
    _0x1b5873['exec'] = 0x1663 + 0x2023 + -0x365c;
}
let re = newFastRegExp();
const evil_nonstring = { [Symbol['toPrimitive']]: () => toSlowRegExp(re) }, empty_string = '';
String['prototype']['replace']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype']['match']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype']['search']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype']['split']['call'](evil_nonstring, re, empty_string);
