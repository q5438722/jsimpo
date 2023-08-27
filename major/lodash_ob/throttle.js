function _0xc62a() {
    const _0x6516ac = [
        '4562PcPcbs',
        '2959953CdJRPV',
        '4NjVxKy',
        '5bMWiYf',
        '5324748DSrnrK',
        '7756840liXHdQ',
        '2724608rIROAS',
        '6245568ljNTTA',
        '12718120jTCURN',
        'function',
        '3ptVlSE'
    ];
    _0xc62a = function () {
        return _0x6516ac;
    };
    return _0xc62a();
}
(function (_0x2b8745, _0x56f20b) {
    const _0x48defe = _0x4a48, _0x333c41 = _0x2b8745();
    while (!![]) {
        try {
            const _0x540135 = parseInt(_0x48defe(0x1bc)) / 0x1 * (-parseInt(_0x48defe(0x1bd)) / 0x2) + parseInt(_0x48defe(0x1be)) / 0x3 * (parseInt(_0x48defe(0x1bf)) / 0x4) + -parseInt(_0x48defe(0x1c0)) / 0x5 * (parseInt(_0x48defe(0x1c1)) / 0x6) + -parseInt(_0x48defe(0x1c2)) / 0x7 + -parseInt(_0x48defe(0x1c3)) / 0x8 + parseInt(_0x48defe(0x1c4)) / 0x9 + parseInt(_0x48defe(0x1c5)) / 0xa;
            if (_0x540135 === _0x56f20b)
                break;
            else
                _0x333c41['push'](_0x333c41['shift']());
        } catch (_0x3a2a7c) {
            _0x333c41['push'](_0x333c41['shift']());
        }
    }
}(_0xc62a, 0x94c8a));
import _0x3bddf2 from './debounce.js';
import _0x122582 from './isObject.js';
function _0x4a48(_0x3eff90, _0x1965ed) {
    const _0xc62af = _0xc62a();
    return _0x4a48 = function (_0x4a48c7, _0x189301) {
        _0x4a48c7 = _0x4a48c7 - 0x1bc;
        let _0x54dec0 = _0xc62af[_0x4a48c7];
        return _0x54dec0;
    }, _0x4a48(_0x3eff90, _0x1965ed);
}
function throttle(_0x562a96, _0x40f781, _0x3ae3c9) {
    const _0x3bb769 = _0x4a48;
    let _0xac2f9b = !![], _0x461b92 = !![];
    if (typeof _0x562a96 !== _0x3bb769(0x1c6))
        throw new TypeError('Expected\x20a\x20function');
    return _0x122582(_0x3ae3c9) && (_0xac2f9b = 'leading' in _0x3ae3c9 ? !!_0x3ae3c9['leading'] : _0xac2f9b, _0x461b92 = 'trailing' in _0x3ae3c9 ? !!_0x3ae3c9['trailing'] : _0x461b92), _0x3bddf2(_0x562a96, _0x40f781, {
        'leading': _0xac2f9b,
        'trailing': _0x461b92,
        'maxWait': _0x40f781
    });
}
export default throttle;
