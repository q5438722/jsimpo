const _0x2299 = [
    'zikGz',
    'yellow',
    '⚠\x20Nuxt\x20Warning',
    'ukJMW',
    '✖\x20Nuxt\x20Error',
    'red',
    'FyGwI',
    'rYrGb',
    '571gdMCNK',
    '998IYkrde',
    '4059JqSdSb',
    '211qBuMoY',
    '969021mFxFfe',
    '1146BtdQvh',
    '195LWYxjf',
    '669618BuxGZd',
    '4vpdPXt',
    '21805Iascra',
    '971424OEBhLe',
    'repeat',
    'isArray',
    'split',
    'length',
    'QlCSm',
    'aNtzg',
    'llCaK',
    'uxWMm',
    'replace',
    'grey',
    'green',
    'bold',
    'Nuxt\x20Message',
    'white',
    'round',
    'yoppB',
    'dFeEl',
    'join',
    'assign',
    'jMSqE',
    'mnKmf',
    'wJfFI'
];
(function (_0x1dcdb2, _0x1f76a9) {
    const _0xcc18a7 = _0x17d3;
    while (!![]) {
        try {
            const _0x4d8844 = -parseInt(_0xcc18a7(0x1d1)) * parseInt(_0xcc18a7(0x1d2)) + -parseInt(_0xcc18a7(0x1d3)) * -parseInt(_0xcc18a7(0x1d4)) + parseInt(_0xcc18a7(0x1d5)) + parseInt(_0xcc18a7(0x1d6)) * -parseInt(_0xcc18a7(0x1d7)) + parseInt(_0xcc18a7(0x1d8)) + -parseInt(_0xcc18a7(0x1d9)) * parseInt(_0xcc18a7(0x1da)) + -parseInt(_0xcc18a7(0x1db));
            if (_0x4d8844 === _0x1f76a9)
                break;
            else
                _0x1dcdb2['push'](_0x1dcdb2['shift']());
        } catch (_0x346624) {
            _0x1dcdb2['push'](_0x1dcdb2['shift']());
        }
    }
}(_0x2299, 0x831d1 + 0xd2d46 + -0xb8eeb));
import _0x3bcc9a from 'wrap-ansi';
import _0x344ff8 from 'chalk';
import _0x2978db from 'boxen';
import { maxCharsPerLine } from './constants';
export function indent(_0x4ec6e0, _0x4b5ff9 = '\x20') {
    const _0x2ce46e = _0x17d3;
    return _0x4b5ff9[_0x2ce46e(0x1dc)](_0x4ec6e0);
}
function _0x17d3(_0x8907cc, _0x4df957) {
    return _0x17d3 = function (_0x285d3b, _0x1637a7) {
        _0x285d3b = _0x285d3b - (0x23b4 + -0xaa0 + -0x1743);
        let _0x397c16 = _0x2299[_0x285d3b];
        return _0x397c16;
    }, _0x17d3(_0x8907cc, _0x4df957);
}
export function indentLines(_0x489e62, _0x21e9d7, _0x429eaa) {
    const _0x134e6e = _0x17d3, _0x42cbbb = {
            'xHRHN': function (_0x50737b, _0x292edb) {
                return _0x50737b(_0x292edb);
            },
            'QlCSm': function (_0x53032f, _0x3ab1d0) {
                return _0x53032f + _0x3ab1d0;
            },
            'aNtzg': function (_0x56a9bc, _0x5057b3) {
                return _0x56a9bc(_0x5057b3);
            },
            'llCaK': function (_0x9b2479, _0x19b8a6) {
                return _0x9b2479 + _0x19b8a6;
            }
        }, _0x548411 = Array[_0x134e6e(0x1dd)](_0x489e62) ? _0x489e62 : _0x489e62[_0x134e6e(0x1de)]('\x0a');
    let _0x4e901d = '';
    if (_0x548411[_0x134e6e(0x1df)]) {
        const _0xaa4fc9 = _0x42cbbb['xHRHN'](indent, _0x429eaa === undefined ? _0x21e9d7 : _0x429eaa);
        _0x4e901d = _0x42cbbb[_0x134e6e(0x1e0)](_0xaa4fc9, _0x548411['shift']());
    }
    if (_0x548411[_0x134e6e(0x1df)]) {
        const _0x35c5c5 = _0x42cbbb[_0x134e6e(0x1e1)](indent, _0x21e9d7);
        _0x4e901d += _0x42cbbb[_0x134e6e(0x1e2)]('\x0a', _0x548411['map'](_0x3f2da0 => _0x35c5c5 + _0x3f2da0)['join']('\x0a'));
    }
    return _0x4e901d;
}
export function foldLines(_0x340694, _0x29b09a, _0x4425f5, _0x38d8b5 = maxCharsPerLine()) {
    const _0x434a3a = _0x17d3, _0x50fb48 = {
            'NaCZQ': function (_0x43b50f, _0x21a5e5, _0x2edd99, _0x42260a) {
                return _0x43b50f(_0x21a5e5, _0x2edd99, _0x42260a);
            },
            'uxWMm': function (_0x298173, _0x1b3cfe, _0x2f12cf) {
                return _0x298173(_0x1b3cfe, _0x2f12cf);
            }
        };
    return _0x50fb48['NaCZQ'](indentLines, _0x50fb48[_0x434a3a(0x1e3)](_0x3bcc9a, _0x340694, _0x38d8b5), _0x29b09a, _0x4425f5);
}
export function colorize(_0x33cda8) {
    const _0x34138d = _0x17d3;
    return _0x33cda8[_0x34138d(0x1e4)](/\[[^ ]+]/g, _0x293f42 => _0x344ff8[_0x34138d(0x1e5)](_0x293f42))['replace'](/<[^ ]+>/g, _0x286b8a => _0x344ff8[_0x34138d(0x1e6)](_0x286b8a))[_0x34138d(0x1e4)](/ (-[-\w,]+)/g, _0x40624a => _0x344ff8[_0x34138d(0x1e7)](_0x40624a))[_0x34138d(0x1e4)](/`([^`]+)`/g, (_0x34b713, _0x5194bf) => _0x344ff8[_0x34138d(0x1e7)]['cyan'](_0x5194bf));
}
export function box(_0x2d9962, _0x2a24e9, _0x329f03) {
    const _0xc97274 = _0x17d3, _0x121df6 = {
            'yoppB': function (_0x19d969, _0x3de6f4) {
                return _0x19d969 + _0x3de6f4;
            },
            'dFeEl': _0xc97274(0x1e8),
            'sVdOX': function (_0x40269f) {
                return _0x40269f();
            },
            'jMSqE': _0xc97274(0x1e9),
            'UAMuQ': _0xc97274(0x1ea)
        };
    return _0x121df6[_0xc97274(0x1eb)](_0x2978db([
        _0x2a24e9 || _0x344ff8[_0xc97274(0x1e9)](_0x121df6[_0xc97274(0x1ec)]),
        '',
        _0x344ff8[_0xc97274(0x1e9)](foldLines(_0x2d9962, 0x1 * 0x1227 + 0x1 * -0xa8e + 0x799 * -0x1, -0x433 * 0x6 + -0xd * 0x7f + -0x1 * -0x1fa5, _0x121df6['sVdOX'](maxCharsPerLine)))
    ][_0xc97274(0x1ed)]('\x0a'), Object[_0xc97274(0x1ee)]({
        'borderColor': _0x121df6[_0xc97274(0x1ef)],
        'borderStyle': _0x121df6['UAMuQ'],
        'padding': 0x1,
        'margin': 0x1
    }, _0x329f03)), '\x0a');
}
export function successBox(_0x462fc9, _0x3d1c03) {
    const _0x3e5cb9 = _0x17d3, _0x1e6536 = {
            'rsowR': function (_0x37a5f7, _0x336597, _0x3daa31, _0x17663e) {
                return _0x37a5f7(_0x336597, _0x3daa31, _0x17663e);
            },
            'mnKmf': '✔\x20Nuxt\x20Success',
            'wJfFI': _0x3e5cb9(0x1e6)
        };
    return _0x1e6536['rsowR'](box, _0x462fc9, _0x3d1c03 || _0x344ff8['green'](_0x1e6536[_0x3e5cb9(0x1f0)]), { 'borderColor': _0x1e6536[_0x3e5cb9(0x1f1)] });
}
export function warningBox(_0x255cbd, _0x13360f) {
    const _0x3fd5b9 = _0x17d3, _0x19caf5 = {
            'zikGz': function (_0xb2bd0a, _0x28ec10, _0x388f14, _0x5634ad) {
                return _0xb2bd0a(_0x28ec10, _0x388f14, _0x5634ad);
            },
            'ukJMW': 'yellow'
        };
    return _0x19caf5[_0x3fd5b9(0x1f2)](box, _0x255cbd, _0x13360f || _0x344ff8[_0x3fd5b9(0x1f3)](_0x3fd5b9(0x1f4)), { 'borderColor': _0x19caf5[_0x3fd5b9(0x1f5)] });
}
export function errorBox(_0x4e07e6, _0x283d6c) {
    const _0xa0501 = _0x17d3, _0x30073e = {
            'BLglx': function (_0x929ecd, _0x1a1d9d, _0x592fa8, _0x54068d) {
                return _0x929ecd(_0x1a1d9d, _0x592fa8, _0x54068d);
            },
            'FyGwI': _0xa0501(0x1f6),
            'rYrGb': _0xa0501(0x1f7)
        };
    return _0x30073e['BLglx'](box, _0x4e07e6, _0x283d6c || _0x344ff8['red'](_0x30073e[_0xa0501(0x1f8)]), { 'borderColor': _0x30073e[_0xa0501(0x1f9)] });
}
export function fatalBox(_0x24759d, _0x18ef3c) {
    const _0x34e39e = _0x17d3, _0xf94ed8 = {
            'tbksP': function (_0x43ad71, _0x16435c, _0x574a1a) {
                return _0x43ad71(_0x16435c, _0x574a1a);
            },
            'JsWHA': '✖\x20Nuxt\x20Fatal\x20Error'
        };
    return _0xf94ed8['tbksP'](errorBox, _0x24759d, _0x18ef3c || _0x344ff8[_0x34e39e(0x1f7)](_0xf94ed8['JsWHA']));
}