function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0x23128a) {
    _0x23128a['exec'] = 42;
}
let re = newFastRegExp();
const evil_nonstring = { [Symbol[_0x364fd3(506)]]: () => toSlowRegExp(re) }, empty_string = '';
String[_0x364fd3(507)][_0x364fd3(508)]['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x364fd3(507)]['match']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x364fd3(507)][_0x364fd3(509)][_0x364fd3(510)](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype'][_0x364fd3(511)][_0x364fd3(510)](evil_nonstring, re, empty_string);