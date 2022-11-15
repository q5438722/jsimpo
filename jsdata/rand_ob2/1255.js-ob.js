const _0x22cd = [
    'emitterEventPromise',
    '795038kuQqOg',
    '456502peXMCz',
    '3gxjcjL',
    '3104YySSHy',
    '127VqjTNR',
    '480949QxJYsT',
    '1ZszFhN',
    '2188BEkweW',
    '76fOIbLo',
    '17897ufRMWC',
    '5GtVuew',
    '196855RFlwKa',
    'now',
    'constructor',
    'name',
    'AsyncFunction',
    'Timed\x20out\x20waiting\x20on\x20',
    'setTimeout',
    'Timed\x20out\x20waiting\x20for\x20\x27',
    '\x27\x20event',
    'once',
    'conditionPromise'
];
const _0x283457 = _0x4da6;
function _0x4da6(_0xc010fb, _0x3cde24) {
    return _0x4da6 = function (_0x22cd4a, _0x4da63e) {
        _0x22cd4a = _0x22cd4a - 0x19b;
        let _0x4aa97d = _0x22cd[_0x22cd4a];
        return _0x4aa97d;
    }, _0x4da6(_0xc010fb, _0x3cde24);
}
(function (_0xb726de, _0x5c8fdd) {
    const _0x1511ff = _0x4da6;
    while (!![]) {
        try {
            const _0x2975fa = parseInt(_0x1511ff(0x19b)) + -parseInt(_0x1511ff(0x19c)) * -parseInt(_0x1511ff(0x19d)) + -parseInt(_0x1511ff(0x19e)) * -parseInt(_0x1511ff(0x19f)) + parseInt(_0x1511ff(0x1a0)) * parseInt(_0x1511ff(0x1a1)) + -parseInt(_0x1511ff(0x1a2)) + -parseInt(_0x1511ff(0x1a3)) * parseInt(_0x1511ff(0x1a4)) + parseInt(_0x1511ff(0x1a5)) * -parseInt(_0x1511ff(0x1a6));
            if (_0x2975fa === _0x5c8fdd)
                break;
            else
                _0xb726de['push'](_0xb726de['shift']());
        } catch (_0x78ba46) {
            _0xb726de['push'](_0xb726de['shift']());
        }
    }
}(_0x22cd, 0xa934a));
async function conditionPromise(_0x3aa844, _0x25a90a = 'anonymous\x20condition') {
    const _0x54d2e6 = _0x4da6, _0x55a3fd = Date[_0x54d2e6(0x1a7)]();
    while (!![]) {
        await timeoutPromise(0x64);
        if (_0x3aa844[_0x54d2e6(0x1a8)][_0x54d2e6(0x1a9)] !== _0x54d2e6(0x1aa) && _0x3aa844())
            return;
        else {
            if (await _0x3aa844())
                return;
        }
        if (Date[_0x54d2e6(0x1a7)]() - _0x55a3fd > 0x1388)
            throw new Error(_0x54d2e6(0x1ab) + _0x25a90a);
    }
}
function timeoutPromise(_0x5bf0d3) {
    return new Promise(_0x471c92 => {
        const _0x4f2041 = _0x4da6;
        global[_0x4f2041(0x1ac)](_0x471c92, _0x5bf0d3);
    });
}
function emitterEventPromise(_0x52a313, _0x21af88, _0x561d7c = 0x3a98) {
    return new Promise((_0x58c6b1, _0xf857d4) => {
        const _0x339e84 = _0x4da6, _0x2dd67b = setTimeout(() => {
                const _0x7060cf = _0x4da6;
                _0xf857d4(new Error(_0x7060cf(0x1ad) + _0x21af88 + _0x7060cf(0x1ae)));
            }, _0x561d7c);
        _0x52a313[_0x339e84(0x1af)](_0x21af88, () => {
            clearTimeout(_0x2dd67b), _0x58c6b1();
        });
    });
}
exports[_0x283457(0x1b0)] = conditionPromise, exports[_0x283457(0x1b1)] = emitterEventPromise, exports['timeoutPromise'] = timeoutPromise;
