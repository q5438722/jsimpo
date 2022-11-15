const _0x28fe = [
    '1jiESnD',
    '124aKqShM',
    '1901PJRxfm',
    '165527qDRipF',
    '1CjMJch',
    '8113fudhdP',
    '12SCOSlS',
    '473963OkqZXr',
    'name',
    'AsyncFunction',
    'now',
    'Timed\x20out\x20waiting\x20on\x20',
    'Timed\x20out\x20waiting\x20for\x20\x27',
    'emitterEventPromise',
    'timeoutPromise',
    '13NECOyx',
    '17444AcePzJ',
    '401AXhUNB',
    '331fiOibj',
    '231769oihWil'
];
const _0x4eb3f4 = _0xde9f;
(function (_0x295471, _0x348c1e) {
    const _0x31779b = _0xde9f;
    while (!![]) {
        try {
            const _0x4cd0ec = parseInt(_0x31779b(0x8a)) * -parseInt(_0x31779b(0x8b)) + -parseInt(_0x31779b(0x8c)) * -parseInt(_0x31779b(0x8d)) + parseInt(_0x31779b(0x8e)) * -parseInt(_0x31779b(0x8f)) + -parseInt(_0x31779b(0x90)) * -parseInt(_0x31779b(0x91)) + parseInt(_0x31779b(0x92)) * -parseInt(_0x31779b(0x93)) + parseInt(_0x31779b(0x94)) * -parseInt(_0x31779b(0x95)) + parseInt(_0x31779b(0x96));
            if (_0x4cd0ec === _0x348c1e)
                break;
            else
                _0x295471['push'](_0x295471['shift']());
        } catch (_0x1fda15) {
            _0x295471['push'](_0x295471['shift']());
        }
    }
}(_0x28fe, 0x1d8a2));
async function conditionPromise(_0x23403e, _0x3387ca = 'anonymous\x20condition') {
    const _0xb9cfea = _0xde9f, _0x1adf4f = Date['now']();
    while (!![]) {
        await timeoutPromise(0x64);
        if (_0x23403e['constructor'][_0xb9cfea(0x97)] !== _0xb9cfea(0x98) && _0x23403e())
            return;
        else {
            if (await _0x23403e())
                return;
        }
        if (Date[_0xb9cfea(0x99)]() - _0x1adf4f > 0x1388)
            throw new Error(_0xb9cfea(0x9a) + _0x3387ca);
    }
}
function timeoutPromise(_0x549a49) {
    return new Promise(_0x219233 => {
        global['setTimeout'](_0x219233, _0x549a49);
    });
}
function emitterEventPromise(_0xb78cec, _0x52e633, _0x5061b9 = 0x3a98) {
    return new Promise((_0x81f0b0, _0xdf1e60) => {
        const _0x2fa312 = setTimeout(() => {
            const _0x3d2f1a = _0xde9f;
            _0xdf1e60(new Error(_0x3d2f1a(0x9b) + _0x52e633 + '\x27\x20event'));
        }, _0x5061b9);
        _0xb78cec['once'](_0x52e633, () => {
            clearTimeout(_0x2fa312), _0x81f0b0();
        });
    });
}
function _0xde9f(_0x48a67a, _0x2d3448) {
    return _0xde9f = function (_0x28fe87, _0xde9fad) {
        _0x28fe87 = _0x28fe87 - 0x8a;
        let _0x3cd0ef = _0x28fe[_0x28fe87];
        return _0x3cd0ef;
    }, _0xde9f(_0x48a67a, _0x2d3448);
}
exports['conditionPromise'] = conditionPromise, exports[_0x4eb3f4(0x9c)] = emitterEventPromise, exports[_0x4eb3f4(0x9d)] = timeoutPromise;
