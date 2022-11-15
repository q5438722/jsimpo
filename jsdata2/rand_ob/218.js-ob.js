'use strict';
const _0x5373 = [
    '<pre><code>',
    'PAoel',
    '</code></pre>',
    'stMkK',
    'findIndex',
    'highlight:',
    'APzfS',
    'NrfaA',
    'FmQRT',
    'pwbsX',
    'line_number',
    'tab_replace',
    'iuDte',
    'prismHighlight',
    'undefined',
    'hljs',
    'rDyIB',
    'highlight',
    'tJfQX',
    'replace',
    '&#123;',
    'AiulW',
    '709584uTlaBF',
    '878418LJzWco',
    '695111VoBhZj',
    '660505DVPHxo',
    '1cKIDaz',
    '236454PdffuP',
    '549479kkYDva',
    '1472964aRZlzq',
    'hexo-util',
    'lang',
    'first_line',
    'wrap',
    'mark',
    'length',
    'push',
    'slice',
    'RHaDg',
    'pQMPl',
    'WrkNV',
    'DIRFv',
    'XjYMf',
    'split',
    'indexOf',
    'substr',
    'gJpHw',
    'isNaN',
    'WxhGu',
    'join',
    'EUWBW',
    'match',
    '</a>',
    '<span>',
    '</span><a\x20href=\x22',
    '\x22>link</a>',
    'ElGVr',
    '</span>',
    'exports',
    'true',
    'config',
    'prismjs',
    'enable'
];
const _0x5cfe96 = _0x530a;
(function (_0x2bd7c7, _0xdbe863) {
    const _0x52830f = _0x530a;
    while (!![]) {
        try {
            const _0x1ae3ec = -parseInt(_0x52830f(0x108)) + -parseInt(_0x52830f(0x109)) + -parseInt(_0x52830f(0x10a)) + -parseInt(_0x52830f(0x10b)) * -parseInt(_0x52830f(0x10c)) + parseInt(_0x52830f(0x10d)) + parseInt(_0x52830f(0x10e)) + parseInt(_0x52830f(0x10f));
            if (_0x1ae3ec === _0xdbe863)
                break;
            else
                _0x2bd7c7['push'](_0x2bd7c7['shift']());
        } catch (_0xc84c2) {
            _0x2bd7c7['push'](_0x2bd7c7['shift']());
        }
    }
}(_0x5373, 0x12087f + -0x2bf67 * -0x3 + -0x263 * 0x6f1));
const {escapeHTML} = require(_0x5cfe96(0x110));
let highlight, prismHighlight;
const rCaptionUrlTitle = /(\S[\S\s]*)\s+(https?:\/\/\S+)\s+(.+)/i, rCaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/\S+)/i, rCaption = /\S[\S\s]*/;
function parseArgs(_0x2246b0) {
    const _0x36620a = _0x5cfe96, _0x5316be = {
            'GFWIr': function (_0x580b8d, _0x2c2d9f) {
                return _0x580b8d < _0x2c2d9f;
            },
            'pQMPl': function (_0x496d8f, _0x57771c) {
                return _0x496d8f === _0x57771c;
            },
            'YeDNN': _0x36620a(0x111),
            'RHaDg': 'line_number',
            'WrkNV': 'true',
            'DAuhy': _0x36620a(0x112),
            'DIRFv': _0x36620a(0x113),
            'XjYMf': function (_0x9d017f, _0x42358d) {
                return _0x9d017f === _0x42358d;
            },
            'NcNYU': _0x36620a(0x114),
            'gJpHw': function (_0x1a3cb7, _0x17e427) {
                return _0x1a3cb7 + _0x17e427;
            },
            'WxhGu': function (_0x4f1813, _0x362c3e) {
                return _0x4f1813(_0x362c3e);
            },
            'EUWBW': function (_0x433f0a, _0x3209c9) {
                return _0x433f0a != _0x3209c9;
            },
            'ElGVr': function (_0x21cda0, _0x1b475f) {
                return _0x21cda0 != _0x1b475f;
            }
        }, _0x3cd50b = [], _0x3dd461 = _0x2246b0[_0x36620a(0x115)];
    let _0x58abbe, _0x17172a, _0xb90be6, _0x2045be = 0x67 * 0xc + 0x2 * -0x10bb + -0x1 * -0x1ca3;
    const _0x5c888b = [];
    for (let _0x6f567f = 0x121c + 0xb8d + 0x1 * -0x1da9; _0x5316be['GFWIr'](_0x6f567f, _0x3dd461); _0x6f567f++) {
        const _0x3bd206 = _0x2246b0[_0x6f567f]['indexOf'](':');
        if (_0x5316be['pQMPl'](_0x3bd206, -(-0x172 + 0x14 * 0x8d + -0x991))) {
            _0x3cd50b[_0x36620a(0x116)](_0x2246b0[_0x6f567f]);
            continue;
        }
        const _0x5677a1 = _0x2246b0[_0x6f567f]['slice'](0x17f * 0x3 + 0x13d * -0x17 + 0x17fe, _0x3bd206), _0x571b7d = _0x2246b0[_0x6f567f][_0x36620a(0x117)](_0x3bd206 + (0x1aba + -0x1290 + 0x829 * -0x1));
        switch (_0x5677a1) {
        case _0x5316be['YeDNN']:
            _0x58abbe = _0x571b7d;
            break;
        case _0x5316be[_0x36620a(0x118)]:
            _0x17172a = _0x5316be[_0x36620a(0x119)](_0x571b7d, _0x5316be[_0x36620a(0x11a)]);
            break;
        case _0x5316be['DAuhy']:
            if (!isNaN(_0x571b7d))
                _0x2045be = +_0x571b7d;
            break;
        case _0x5316be[_0x36620a(0x11b)]:
            _0xb90be6 = _0x5316be[_0x36620a(0x11c)](_0x571b7d, _0x5316be['WrkNV']);
            break;
        case _0x5316be['NcNYU']: {
                for (const _0x31b1ec of _0x571b7d[_0x36620a(0x11d)](',')) {
                    const _0x28bdb5 = _0x31b1ec[_0x36620a(0x11e)]('-');
                    if (_0x28bdb5 !== -(-0xb99 + 0x2 * -0xf45 + 0x3e * 0xae)) {
                        let _0x5c98c5 = +_0x31b1ec['substr'](-0x485 * -0x1 + 0x1880 + -0x187 * 0x13, _0x28bdb5), _0x355f4d = +_0x31b1ec[_0x36620a(0x11f)](_0x5316be[_0x36620a(0x120)](_0x28bdb5, -0xa6 * 0x30 + 0x207e * 0x1 + -0x15d));
                        if (Number[_0x36620a(0x121)](_0x5c98c5) || Number[_0x36620a(0x121)](_0x355f4d))
                            continue;
                        if (_0x5316be['GFWIr'](_0x355f4d, _0x5c98c5)) {
                            const _0x25e514 = _0x5c98c5;
                            _0x5c98c5 = _0x355f4d, _0x355f4d = _0x25e514;
                        }
                        for (; _0x5c98c5 <= _0x355f4d; _0x5c98c5++) {
                            _0x5c888b['push'](_0x5c98c5);
                        }
                    }
                    if (!_0x5316be[_0x36620a(0x122)](isNaN, _0x31b1ec))
                        _0x5c888b[_0x36620a(0x116)](+_0x31b1ec);
                }
                break;
            }
        default: {
                _0x3cd50b[_0x36620a(0x116)](_0x2246b0[_0x6f567f]);
            }
        }
    }
    const _0x27ce45 = _0x3cd50b[_0x36620a(0x123)]('\x20');
    let _0x44ff60, _0xb47f32 = '';
    if (_0x5316be[_0x36620a(0x124)](_0x44ff60 = _0x27ce45[_0x36620a(0x125)](rCaptionUrlTitle), null))
        _0xb47f32 = '<span>' + _0x44ff60[-0x1799 * -0x1 + -0x11a8 + -0x10 * 0x5f] + '</span><a\x20href=\x22' + _0x44ff60[0x1 * 0x167d + -0x2160 + 0xae5] + '\x22>' + _0x44ff60[-0x83 * -0x10 + -0x107b + 0x2 * 0x427] + _0x36620a(0x126);
    else {
        if (_0x5316be[_0x36620a(0x124)](_0x44ff60 = _0x27ce45[_0x36620a(0x125)](rCaptionUrl), null))
            _0xb47f32 = _0x36620a(0x127) + _0x44ff60[0xf56 + 0x53 * -0x29 + -0x20a] + _0x36620a(0x128) + _0x44ff60[0x2111 + 0x1 * -0x19a5 + 0x3b5 * -0x2] + _0x36620a(0x129);
        else
            _0x5316be[_0x36620a(0x12a)](_0x44ff60 = _0x27ce45[_0x36620a(0x125)](rCaption), null) && (_0xb47f32 = _0x36620a(0x127) + _0x44ff60[0x1a6 + 0x4af + -0x655] + _0x36620a(0x12b));
    }
    return {
        'lang': _0x58abbe,
        'firstLine': _0x2045be,
        'caption': _0xb47f32,
        'line_number': _0x17172a,
        'mark': _0x5c888b,
        'wrap': _0xb90be6
    };
}
function _0x530a(_0x5cd040, _0x5258da) {
    return _0x530a = function (_0x2a5e69, _0x44568e) {
        _0x2a5e69 = _0x2a5e69 - (0x14c * 0xd + 0x14a0 + 0x123a * -0x2);
        let _0x1a5463 = _0x5373[_0x2a5e69];
        return _0x1a5463;
    }, _0x530a(_0x5cd040, _0x5258da);
}
module[_0x5cfe96(0x12c)] = _0x1ec1c1 => function _0x15039a(_0x2d77d9, _0x1b4b2f) {
    const _0x28395f = _0x5cfe96, _0x4eb3ba = {
            'PAoel': function (_0x41f693, _0x5dc2d4) {
                return _0x41f693(_0x5dc2d4);
            },
            'stMkK': function (_0x1451b2, _0x45939a) {
                return _0x1451b2 !== _0x45939a;
            },
            'rDyIB': function (_0xa093c6, _0x186a8c) {
                return _0xa093c6 === _0x186a8c;
            },
            'APzfS': _0x28395f(0x12d),
            'NrfaA': function (_0x268aab, _0x35dc97) {
                return _0x268aab(_0x35dc97);
            },
            'FmQRT': function (_0x562170, _0x20d061) {
                return _0x562170 !== _0x20d061;
            },
            'pwbsX': 'undefined',
            'kdYoP': function (_0x28bef2, _0x5759f7) {
                return _0x28bef2(_0x5759f7);
            },
            'iuDte': _0x28395f(0x110),
            'tJfQX': function (_0x2bf61d, _0x52d7ef, _0x7f927f) {
                return _0x2bf61d(_0x52d7ef, _0x7f927f);
            },
            'AiulW': '&#125;'
        }, _0x74297d = _0x1ec1c1[_0x28395f(0x12e)]['highlight'] || {}, _0x315246 = _0x1ec1c1[_0x28395f(0x12e)][_0x28395f(0x12f)] || {};
    if (!_0x74297d[_0x28395f(0x130)] && !_0x315246[_0x28395f(0x130)])
        return _0x28395f(0x131) + _0x4eb3ba[_0x28395f(0x132)](escapeHTML, _0x1b4b2f) + _0x28395f(0x133);
    let _0x2213fb, _0x29724c = !![];
    if (_0x4eb3ba[_0x28395f(0x134)](_0x2213fb = _0x2d77d9[_0x28395f(0x135)](_0x4bfd65 => _0x4bfd65['startsWith'](_0x28395f(0x136))), -(-0x9d5 + -0x1f82 + 0x2958))) {
        const _0x27d8d8 = _0x2d77d9[_0x2213fb], _0x4e4c8b = _0x27d8d8[_0x28395f(0x117)](0x1 * 0x1165 + 0x1230 + -0x238b);
        _0x29724c = _0x4eb3ba['rDyIB'](_0x4e4c8b, _0x4eb3ba[_0x28395f(0x137)]), _0x2d77d9['splice'](_0x2213fb, 0x11da + 0x10fd + -0x22d6);
    }
    if (!_0x29724c)
        return _0x28395f(0x131) + _0x4eb3ba['PAoel'](escapeHTML, _0x1b4b2f) + _0x28395f(0x133);
    const {
        lang: _0x26bf59,
        firstLine: _0x1ff0b9,
        caption: _0x181a87,
        line_number: _0x55afdc,
        mark: _0x4a5377,
        wrap: _0x3ab3d5
    } = _0x4eb3ba[_0x28395f(0x138)](parseArgs, _0x2d77d9);
    if (_0x315246['enable']) {
        const _0x3bf47d = {
            'lang': _0x26bf59,
            'firstLine': _0x1ff0b9,
            'caption': _0x181a87,
            'lineNumber': _0x4eb3ba[_0x28395f(0x139)](typeof _0x55afdc, _0x4eb3ba[_0x28395f(0x13a)]) ? _0x55afdc : _0x315246[_0x28395f(0x13b)],
            'mark': _0x4a5377,
            'tab': _0x315246[_0x28395f(0x13c)],
            'isPreprocess': _0x315246['preprocess']
        };
        if (!prismHighlight)
            prismHighlight = _0x4eb3ba['kdYoP'](require, _0x4eb3ba[_0x28395f(0x13d)])[_0x28395f(0x13e)];
        _0x1b4b2f = prismHighlight(_0x1b4b2f, _0x3bf47d);
    } else {
        const _0x311977 = {
            'lang': _0x4eb3ba[_0x28395f(0x139)](typeof _0x26bf59, _0x28395f(0x13f)) ? _0x26bf59 : '',
            'firstLine': _0x1ff0b9,
            'caption': _0x181a87,
            'gutter': _0x4eb3ba[_0x28395f(0x139)](typeof _0x55afdc, _0x4eb3ba[_0x28395f(0x13a)]) ? _0x55afdc : _0x74297d[_0x28395f(0x13b)],
            'hljs': _0x74297d[_0x28395f(0x140)],
            'mark': _0x4a5377,
            'tab': _0x74297d[_0x28395f(0x13c)],
            'autoDetect': _0x74297d['auto_detect'],
            'wrap': _0x4eb3ba[_0x28395f(0x141)](typeof _0x3ab3d5, 'boolean') ? _0x3ab3d5 : _0x74297d[_0x28395f(0x113)]
        };
        if (!highlight)
            highlight = _0x4eb3ba['kdYoP'](require, _0x28395f(0x110))[_0x28395f(0x142)];
        _0x1b4b2f = _0x4eb3ba[_0x28395f(0x143)](highlight, _0x1b4b2f, _0x311977);
    }
    return _0x1b4b2f[_0x28395f(0x144)](/{/g, _0x28395f(0x145))[_0x28395f(0x144)](/}/g, _0x4eb3ba[_0x28395f(0x146)]);
};
