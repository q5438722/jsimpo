const _0x4548 = [
    '1GRKXqj',
    '108097SUhKmv',
    '800518YTlCyZ',
    'toPrimitive',
    'prototype',
    'replace',
    'search',
    'call',
    'split',
    '48071thRYgW',
    '235201pppcSu',
    '105823PuYRUT',
    '452492VRjktN',
    '99531dkHtjV'
];
function _0x4b60(_0x394669, _0x210f02) {
    return _0x4b60 = function (_0x45481f, _0x4b6028) {
        _0x45481f = _0x45481f - 0x1f2;
        let _0x30206e = _0x4548[_0x45481f];
        return _0x30206e;
    }, _0x4b60(_0x394669, _0x210f02);
}
const _0x364fd3 = _0x4b60;
(function (_0x2b7a61, _0x21f12e) {
    const _0x34244d = _0x4b60;
    while (!![]) {
        try {
            const _0xfa21d2 = parseInt(_0x34244d(0x1f2)) + -parseInt(_0x34244d(0x1f3)) + parseInt(_0x34244d(0x1f4)) + -parseInt(_0x34244d(0x1f5)) + -parseInt(_0x34244d(0x1f6)) + -parseInt(_0x34244d(0x1f7)) * -parseInt(_0x34244d(0x1f8)) + parseInt(_0x34244d(0x1f9));
            if (_0xfa21d2 === _0x21f12e)
                break;
            else
                _0x2b7a61['push'](_0x2b7a61['shift']());
        } catch (_0x2122c4) {
            _0x2b7a61['push'](_0x2b7a61['shift']());
        }
    }
}(_0x4548, 0x43355));
function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0x23128a) {
    _0x23128a['exec'] = 0x2a;
}
let re = newFastRegExp();
const evil_nonstring = { [Symbol[_0x364fd3(0x1fa)]]: () => toSlowRegExp(re) }, empty_string = '';
String[_0x364fd3(0x1fb)][_0x364fd3(0x1fc)]['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x364fd3(0x1fb)]['match']['call'](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0x364fd3(0x1fb)][_0x364fd3(0x1fd)][_0x364fd3(0x1fe)](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype'][_0x364fd3(0x1ff)][_0x364fd3(0x1fe)](evil_nonstring, re, empty_string);
