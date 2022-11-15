function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0x2d7fe7) {
    const _0x36e2db = _0x2f4c;
    _0x2d7fe7[_0x36e2db(404)] = -4602 + -1 * 3267 + 7911;
}
let re = newFastRegExp();
const evil_nonstring = { [Symbol[_0x58adc7(405)]]: () => toSlowRegExp(re) }, empty_string = '';
String[_0x58adc7(406)]['replace']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype'][_0x58adc7(407)][_0x58adc7(408)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x58adc7(406)][_0x58adc7(409)]['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x58adc7(406)][_0x58adc7(410)][_0x58adc7(408)](evil_nonstring, re, empty_string);