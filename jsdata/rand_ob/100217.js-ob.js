const _0x4163 = [
    'oiLIY',
    'FdhHO',
    '54955SjgLHr',
    '846994bXylPn',
    '53224xxduiY',
    '16bRMMRy',
    '81LOAwnu',
    '13985XDhGMn',
    '441653QwpvBQ',
    '12zmVllH',
    '15710SLdvnd',
    '491981pXMNqh',
    '2whXxrn',
    'split',
    'length',
    'tLOWJ',
    'UgQXj',
    'shift',
    'map',
    'join',
    'FKEUn',
    'grey',
    'replace',
    'green',
    'bold',
    'white',
    'Nuxt\x20Message',
    'flKFw',
    'assign',
    'ghhdW',
    'CMnCS',
    '✔\x20Nuxt\x20Success',
    'bUqUw',
    'uugRi',
    'mBmIL',
    'eeOGT',
    'yellow',
    '⚠\x20Nuxt\x20Warning',
    '✖\x20Nuxt\x20Error',
    'red',
    'eMlBu'
];
(function (_0x938277, _0x144432) {
    const _0x3ee8e2 = _0x3b8f;
    while (!![]) {
        try {
            const _0x26e687 = -parseInt(_0x3ee8e2(0x156)) + -parseInt(_0x3ee8e2(0x157)) + -parseInt(_0x3ee8e2(0x158)) * parseInt(_0x3ee8e2(0x159)) + -parseInt(_0x3ee8e2(0x15a)) * -parseInt(_0x3ee8e2(0x15b)) + parseInt(_0x3ee8e2(0x15c)) + parseInt(_0x3ee8e2(0x15d)) * -parseInt(_0x3ee8e2(0x15e)) + parseInt(_0x3ee8e2(0x15f)) * parseInt(_0x3ee8e2(0x160));
            if (_0x26e687 === _0x144432)
                break;
            else
                _0x938277['push'](_0x938277['shift']());
        } catch (_0x3fe3bd) {
            _0x938277['push'](_0x938277['shift']());
        }
    }
}(_0x4163, -0x1179ce + -0x9ceb * -0x1 + 0x1a447e));
import _0x417e89 from 'wrap-ansi';
import _0x729f44 from 'chalk';
import _0x54b2e9 from 'boxen';
function _0x3b8f(_0x387025, _0x195b47) {
    return _0x3b8f = function (_0x70fa28, _0x4b76b5) {
        _0x70fa28 = _0x70fa28 - (0x3 * -0x5a1 + -0x140d + 0x2646);
        let _0x331c12 = _0x4163[_0x70fa28];
        return _0x331c12;
    }, _0x3b8f(_0x387025, _0x195b47);
}
import { maxCharsPerLine } from './constants';
export function indent(_0x4e7274, _0x467084 = '\x20') {
    return _0x467084['repeat'](_0x4e7274);
}
export function indentLines(_0x13274b, _0x555c4c, _0x483c36) {
    const _0x272e79 = _0x3b8f, _0x49cdf3 = {
            'tLOWJ': function (_0x53c1b9, _0x1303d4) {
                return _0x53c1b9(_0x1303d4);
            },
            'qcyOQ': function (_0x44acf9, _0x4b37d6) {
                return _0x44acf9 === _0x4b37d6;
            },
            'UgQXj': function (_0x5888b4, _0xacf5f7) {
                return _0x5888b4 + _0xacf5f7;
            }
        }, _0x25446f = Array['isArray'](_0x13274b) ? _0x13274b : _0x13274b[_0x272e79(0x161)]('\x0a');
    let _0x11f885 = '';
    if (_0x25446f[_0x272e79(0x162)]) {
        const _0x5d3c64 = _0x49cdf3[_0x272e79(0x163)](indent, _0x49cdf3['qcyOQ'](_0x483c36, undefined) ? _0x555c4c : _0x483c36);
        _0x11f885 = _0x49cdf3[_0x272e79(0x164)](_0x5d3c64, _0x25446f[_0x272e79(0x165)]());
    }
    if (_0x25446f[_0x272e79(0x162)]) {
        const _0xf872a0 = indent(_0x555c4c);
        _0x11f885 += _0x49cdf3[_0x272e79(0x164)]('\x0a', _0x25446f[_0x272e79(0x166)](_0x1fef2f => _0xf872a0 + _0x1fef2f)[_0x272e79(0x167)]('\x0a'));
    }
    return _0x11f885;
}
export function foldLines(_0x5c787c, _0x4c7b98, _0x598963, _0x7391f5 = maxCharsPerLine()) {
    const _0x5acfd5 = _0x3b8f, _0x1e6421 = {
            'FKEUn': function (_0x1e4a7e, _0x17c18b, _0x512666, _0x5b15db) {
                return _0x1e4a7e(_0x17c18b, _0x512666, _0x5b15db);
            },
            'vELhO': function (_0x2aa9b3, _0x456888, _0x2defaa) {
                return _0x2aa9b3(_0x456888, _0x2defaa);
            }
        };
    return _0x1e6421[_0x5acfd5(0x168)](indentLines, _0x1e6421['vELhO'](_0x417e89, _0x5c787c, _0x7391f5), _0x4c7b98, _0x598963);
}
export function colorize(_0x25d20f) {
    const _0x2bb280 = _0x3b8f;
    return _0x25d20f['replace'](/\[[^ ]+]/g, _0x3de817 => _0x729f44[_0x2bb280(0x169)](_0x3de817))[_0x2bb280(0x16a)](/<[^ ]+>/g, _0x396007 => _0x729f44[_0x2bb280(0x16b)](_0x396007))['replace'](/ (-[-\w,]+)/g, _0x257e6b => _0x729f44['bold'](_0x257e6b))[_0x2bb280(0x16a)](/`([^`]+)`/g, (_0x21578a, _0x29b2d8) => _0x729f44[_0x2bb280(0x16c)]['cyan'](_0x29b2d8));
}
export function box(_0x37e13f, _0x64f941, _0x3494b4) {
    const _0x7ea957 = _0x3b8f, _0x4fbf67 = {
            'BifbO': function (_0x5090e3, _0x4e4e52) {
                return _0x5090e3 + _0x4e4e52;
            },
            'xaBGp': function (_0x4d3db9, _0x1ea284, _0x36dae1, _0x1232fa, _0x1ea3e6) {
                return _0x4d3db9(_0x1ea284, _0x36dae1, _0x1232fa, _0x1ea3e6);
            },
            'flKFw': function (_0x459cd8) {
                return _0x459cd8();
            },
            'ghhdW': _0x7ea957(0x16d),
            'CMnCS': 'round'
        };
    return _0x4fbf67['BifbO'](_0x54b2e9([
        _0x64f941 || _0x729f44[_0x7ea957(0x16d)](_0x7ea957(0x16e)),
        '',
        _0x729f44[_0x7ea957(0x16d)](_0x4fbf67['xaBGp'](foldLines, _0x37e13f, 0xf5f + -0x5 * 0x41b + -0x6e * -0xc, 0x15f2 + -0x216d + 0xb7b, _0x4fbf67[_0x7ea957(0x16f)](maxCharsPerLine)))
    ][_0x7ea957(0x167)]('\x0a'), Object[_0x7ea957(0x170)]({
        'borderColor': _0x4fbf67[_0x7ea957(0x171)],
        'borderStyle': _0x4fbf67[_0x7ea957(0x172)],
        'padding': 0x1,
        'margin': 0x1
    }, _0x3494b4)), '\x0a');
}
export function successBox(_0x4f0928, _0x1997d9) {
    const _0x4f832a = _0x3b8f, _0x5d1d52 = {
            'bUqUw': function (_0x1f8e5a, _0x575fb8, _0x562d3b, _0x574625) {
                return _0x1f8e5a(_0x575fb8, _0x562d3b, _0x574625);
            },
            'uugRi': _0x4f832a(0x173),
            'mBmIL': 'green'
        };
    return _0x5d1d52[_0x4f832a(0x174)](box, _0x4f0928, _0x1997d9 || _0x729f44[_0x4f832a(0x16b)](_0x5d1d52[_0x4f832a(0x175)]), { 'borderColor': _0x5d1d52[_0x4f832a(0x176)] });
}
export function warningBox(_0x162f39, _0x26bc70) {
    const _0x52da7b = _0x3b8f, _0x577dad = {
            'eeOGT': function (_0x25480e, _0x3c1e81, _0x3ed8ee, _0xac949c) {
                return _0x25480e(_0x3c1e81, _0x3ed8ee, _0xac949c);
            }
        };
    return _0x577dad[_0x52da7b(0x177)](box, _0x162f39, _0x26bc70 || _0x729f44[_0x52da7b(0x178)](_0x52da7b(0x179)), { 'borderColor': _0x52da7b(0x178) });
}
export function errorBox(_0x279c1b, _0x1c8525) {
    const _0x47a134 = _0x3b8f, _0x27daf9 = {
            'eMlBu': function (_0x35c4dc, _0x4653f8, _0x593e1d, _0x1ac22d) {
                return _0x35c4dc(_0x4653f8, _0x593e1d, _0x1ac22d);
            },
            'AtxFP': _0x47a134(0x17a),
            'XKnlQ': _0x47a134(0x17b)
        };
    return _0x27daf9[_0x47a134(0x17c)](box, _0x279c1b, _0x1c8525 || _0x729f44[_0x47a134(0x17b)](_0x27daf9['AtxFP']), { 'borderColor': _0x27daf9['XKnlQ'] });
}
export function fatalBox(_0x324256, _0x4cc433) {
    const _0x389412 = _0x3b8f, _0x4fc140 = {
            'oiLIY': function (_0x37bb76, _0x16fdd4, _0x1c9c78) {
                return _0x37bb76(_0x16fdd4, _0x1c9c78);
            },
            'FdhHO': '✖\x20Nuxt\x20Fatal\x20Error'
        };
    return _0x4fc140[_0x389412(0x17d)](errorBox, _0x324256, _0x4cc433 || _0x729f44['red'](_0x4fc140[_0x389412(0x17e)]));
}
