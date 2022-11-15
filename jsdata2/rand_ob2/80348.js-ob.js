const _0x5ba6 = [
    '1vKGNCm',
    '548623AnYpMc',
    '2048206nPYILQ',
    'webview',
    'postMessageToUniNView',
    'UniAppSubNVue',
    '$consumeMessage',
    'forEach',
    '__uniapp_mask_id',
    '__uniapp_mask',
    'uni-tabview',
    'setMask',
    'getWebviewById',
    'show',
    'setStyle',
    'none',
    'apply',
    'close',
    'Unable\x20to\x20find\x20SubNVue,\x20id=',
    '$processed',
    'mask',
    'call',
    'currentWebview',
    '360045dLgnpe',
    '288649KXVyrE',
    '2jFkCoN',
    '3606VEfhsZ',
    '1WowZRB',
    '717584MuepVA',
    '218KltafK',
    '2062OwHWaR'
];
(function (_0x2d8f65, _0x2510e3) {
    const _0x577c85 = _0x1061;
    while (!![]) {
        try {
            const _0x3c943d = -parseInt(_0x577c85(0x18d)) + -parseInt(_0x577c85(0x18e)) * -parseInt(_0x577c85(0x18f)) + parseInt(_0x577c85(0x190)) + parseInt(_0x577c85(0x191)) * -parseInt(_0x577c85(0x192)) + parseInt(_0x577c85(0x193)) * -parseInt(_0x577c85(0x194)) + parseInt(_0x577c85(0x195)) * -parseInt(_0x577c85(0x196)) + parseInt(_0x577c85(0x197));
            if (_0x3c943d === _0x2510e3)
                break;
            else
                _0x2d8f65['push'](_0x2d8f65['shift']());
        } catch (_0x3902f9) {
            _0x2d8f65['push'](_0x2d8f65['shift']());
        }
    }
}(_0x5ba6, 0x8717e));
import { requireNativePlugin } from './require-native-plugin';
function _0x1061(_0x21fbaf, _0x4ed43f) {
    return _0x1061 = function (_0x5ba687, _0x10619e) {
        _0x5ba687 = _0x5ba687 - 0x18d;
        let _0x4a1984 = _0x5ba6[_0x5ba687];
        return _0x4a1984;
    }, _0x1061(_0x21fbaf, _0x4ed43f);
}
function wrapper(_0x1aae5a) {
    const _0x56f154 = _0x1061;
    _0x1aae5a['$processed'] = !![], _0x1aae5a['postMessage'] = function (_0x357624) {
        const _0x1011d9 = _0x1061;
        plus[_0x1011d9(0x198)][_0x1011d9(0x199)]({
            'type': _0x1011d9(0x19a),
            'data': _0x357624
        }, _0x1aae5a['id']);
    };
    let _0x1156e3 = [];
    _0x1aae5a['onMessage'] = function (_0x2390af) {
        _0x1156e3['push'](_0x2390af);
    }, _0x1aae5a[_0x56f154(0x19b)] = function (_0x44025b) {
        const _0x457032 = _0x56f154;
        _0x1156e3[_0x457032(0x19c)](_0x203cb6 => _0x203cb6(_0x44025b));
    };
    if (!_0x1aae5a[_0x56f154(0x19d)])
        return;
    const _0x1b6ccc = _0x1aae5a[_0x56f154(0x19e)], _0x26d07f = _0x1aae5a['__uniapp_mask_id'] === '0' ? {
            'setStyle'({mask: _0x360de4}) {
                const _0x346f68 = _0x56f154;
                requireNativePlugin(_0x346f68(0x19f))[_0x346f68(0x1a0)]({ 'color': _0x360de4 });
            }
        } : plus[_0x56f154(0x198)][_0x56f154(0x1a1)](_0x1aae5a[_0x56f154(0x19d)]), _0x1b119e = _0x1aae5a[_0x56f154(0x1a2)], _0x3ea6fe = _0x1aae5a['hide'], _0x56987e = _0x1aae5a['close'], _0x5c4179 = function () {
            const _0x231fb5 = _0x56f154;
            _0x26d07f[_0x231fb5(0x1a3)]({ 'mask': _0x1b6ccc });
        }, _0x35d2ba = function () {
            const _0x17e6a5 = _0x56f154;
            _0x26d07f[_0x17e6a5(0x1a3)]({ 'mask': _0x17e6a5(0x1a4) });
        };
    _0x1aae5a[_0x56f154(0x1a2)] = function (..._0x228b0d) {
        const _0x145873 = _0x56f154;
        return _0x5c4179(), _0x1b119e[_0x145873(0x1a5)](_0x1aae5a, _0x228b0d);
    }, _0x1aae5a['hide'] = function (..._0x288f28) {
        const _0x5de07b = _0x56f154;
        return _0x35d2ba(), _0x3ea6fe[_0x5de07b(0x1a5)](_0x1aae5a, _0x288f28);
    }, _0x1aae5a[_0x56f154(0x1a6)] = function (..._0x5e5dde) {
        return _0x35d2ba(), _0x1156e3 = [], _0x56987e['apply'](_0x1aae5a, _0x5e5dde);
    };
}
export function getSubNVueById(_0x20f1c5) {
    const _0x225e10 = _0x1061, _0x1b22d2 = plus['webview'][_0x225e10(0x1a1)](_0x20f1c5);
    if (_0x1b22d2 === null || _0x1b22d2 === undefined)
        throw new Error(_0x225e10(0x1a7) + _0x20f1c5);
    _0x1b22d2 && !_0x1b22d2[_0x225e10(0x1a8)] && wrapper(_0x1b22d2);
    const _0x561b9f = _0x1b22d2[_0x225e10(0x1a3)];
    var _0x2a7d15 = plus[_0x225e10(0x198)][_0x225e10(0x1a1)](_0x1b22d2[_0x225e10(0x19d)]);
    return _0x1b22d2[_0x225e10(0x1a3)] = function (_0x409710) {
        const _0x429e7e = _0x225e10;
        _0x409710 && _0x409710[_0x429e7e(0x1a9)] && (_0x2a7d15 && _0x2a7d15['setStyle']({ 'mask': _0x409710['mask'] }), delete _0x409710[_0x429e7e(0x1a9)]), _0x561b9f[_0x429e7e(0x1aa)](this, _0x409710);
    }, _0x1b22d2;
}
export function getCurrentSubNVue() {
    const _0x2ac1d8 = _0x1061;
    return getSubNVueById(plus[_0x2ac1d8(0x198)][_0x2ac1d8(0x1ab)]()['id']);
}
