const _0x3cfc = [
    'bold',
    'cyan',
    'white',
    'round',
    '✔\x20Nuxt\x20Success',
    '⚠\x20Nuxt\x20Warning',
    'yellow',
    '✖\x20Nuxt\x20Error',
    'red',
    '✖\x20Nuxt\x20Fatal\x20Error',
    '1mjJoGs',
    '1006939YNzpYY',
    '478243VNMPSR',
    '1830583kzcvxc',
    '1683187COtgfL',
    '1456899piOGWQ',
    '1144681cNdIFD',
    '631421mWwZDX',
    '2FJvuQF',
    'isArray',
    'split',
    'shift',
    'length',
    'join',
    'replace',
    'grey',
    'green'
];
(function (_0x1bfcb4, _0xe7e98e) {
    const _0x3ee9f5 = _0x209c;
    while (!![]) {
        try {
            const _0x48078b = parseInt(_0x3ee9f5(0xe4)) * -parseInt(_0x3ee9f5(0xe5)) + parseInt(_0x3ee9f5(0xe6)) + parseInt(_0x3ee9f5(0xe7)) + -parseInt(_0x3ee9f5(0xe8)) + parseInt(_0x3ee9f5(0xe9)) + parseInt(_0x3ee9f5(0xea)) + -parseInt(_0x3ee9f5(0xeb)) * parseInt(_0x3ee9f5(0xec));
            if (_0x48078b === _0xe7e98e)
                break;
            else
                _0x1bfcb4['push'](_0x1bfcb4['shift']());
        } catch (_0x4c2265) {
            _0x1bfcb4['push'](_0x1bfcb4['shift']());
        }
    }
}(_0x3cfc, 0xe9bfe));
import _0x1e4cf2 from 'wrap-ansi';
import _0x2f820f from 'chalk';
import _0x1b0276 from 'boxen';
import { maxCharsPerLine } from './constants';
export function indent(_0x35754b, _0x3a9bc2 = '\x20') {
    return _0x3a9bc2['repeat'](_0x35754b);
}
export function indentLines(_0x37ccbf, _0x4d94a0, _0x2be04d) {
    const _0x3eacc9 = _0x209c, _0x30590c = Array[_0x3eacc9(0xed)](_0x37ccbf) ? _0x37ccbf : _0x37ccbf[_0x3eacc9(0xee)]('\x0a');
    let _0x2db4ad = '';
    if (_0x30590c['length']) {
        const _0x45d1bd = indent(_0x2be04d === undefined ? _0x4d94a0 : _0x2be04d);
        _0x2db4ad = _0x45d1bd + _0x30590c[_0x3eacc9(0xef)]();
    }
    if (_0x30590c[_0x3eacc9(0xf0)]) {
        const _0x4d0267 = indent(_0x4d94a0);
        _0x2db4ad += '\x0a' + _0x30590c['map'](_0x275770 => _0x4d0267 + _0x275770)[_0x3eacc9(0xf1)]('\x0a');
    }
    return _0x2db4ad;
}
function _0x209c(_0x5391b8, _0x49c9fd) {
    return _0x209c = function (_0x3cfc3c, _0x209c96) {
        _0x3cfc3c = _0x3cfc3c - 0xe4;
        let _0x15a168 = _0x3cfc[_0x3cfc3c];
        return _0x15a168;
    }, _0x209c(_0x5391b8, _0x49c9fd);
}
export function foldLines(_0x2edbfc, _0x558d21, _0x26411c, _0x4d9189 = maxCharsPerLine()) {
    return indentLines(_0x1e4cf2(_0x2edbfc, _0x4d9189), _0x558d21, _0x26411c);
}
export function colorize(_0xcc7e73) {
    const _0xfba6cb = _0x209c;
    return _0xcc7e73[_0xfba6cb(0xf2)](/\[[^ ]+]/g, _0x4509df => _0x2f820f[_0xfba6cb(0xf3)](_0x4509df))[_0xfba6cb(0xf2)](/<[^ ]+>/g, _0x212d20 => _0x2f820f[_0xfba6cb(0xf4)](_0x212d20))['replace'](/ (-[-\w,]+)/g, _0x154aff => _0x2f820f[_0xfba6cb(0xf5)](_0x154aff))[_0xfba6cb(0xf2)](/`([^`]+)`/g, (_0x4cffb0, _0x488a7d) => _0x2f820f[_0xfba6cb(0xf5)][_0xfba6cb(0xf6)](_0x488a7d));
}
export function box(_0x334812, _0x5173f1, _0x3986f3) {
    const _0x5b1e80 = _0x209c;
    return _0x1b0276([
        _0x5173f1 || _0x2f820f[_0x5b1e80(0xf7)]('Nuxt\x20Message'),
        '',
        _0x2f820f['white'](foldLines(_0x334812, 0x0, 0x0, maxCharsPerLine()))
    ][_0x5b1e80(0xf1)]('\x0a'), Object['assign']({
        'borderColor': _0x5b1e80(0xf7),
        'borderStyle': _0x5b1e80(0xf8),
        'padding': 0x1,
        'margin': 0x1
    }, _0x3986f3)) + '\x0a';
}
export function successBox(_0x4199e8, _0x39e61b) {
    const _0x58dca6 = _0x209c;
    return box(_0x4199e8, _0x39e61b || _0x2f820f[_0x58dca6(0xf4)](_0x58dca6(0xf9)), { 'borderColor': _0x58dca6(0xf4) });
}
export function warningBox(_0x3c69a7, _0x1c5203) {
    const _0x2d4b03 = _0x209c;
    return box(_0x3c69a7, _0x1c5203 || _0x2f820f['yellow'](_0x2d4b03(0xfa)), { 'borderColor': _0x2d4b03(0xfb) });
}
export function errorBox(_0xb0c63f, _0xec9d1a) {
    const _0x47ac17 = _0x209c;
    return box(_0xb0c63f, _0xec9d1a || _0x2f820f['red'](_0x47ac17(0xfc)), { 'borderColor': _0x47ac17(0xfd) });
}
export function fatalBox(_0x37775d, _0xe3a9d4) {
    const _0x58f58f = _0x209c;
    return errorBox(_0x37775d, _0xe3a9d4 || _0x2f820f[_0x58f58f(0xfd)](_0x58f58f(0xfe)));
}
