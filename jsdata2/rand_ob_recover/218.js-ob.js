const {escapeHTML} = require(_0x5cfe96(272));
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
            'YeDNN': _0x36620a(273),
            'RHaDg': 'line_number',
            'WrkNV': 'true',
            'DAuhy': _0x36620a(274),
            'DIRFv': _0x36620a(275),
            'XjYMf': function (_0x9d017f, _0x42358d) {
                return _0x9d017f === _0x42358d;
            },
            'NcNYU': _0x36620a(276),
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
        }, _0x3cd50b = [], _0x3dd461 = _0x2246b0[_0x36620a(277)];
    let _0x58abbe, _0x17172a, _0xb90be6, _0x2045be = 103 * 12 + 2 * -4283 + -1 * -7331;
    const _0x5c888b = [];
    for (let _0x6f567f = 4636 + 2957 + 1 * -7593; _0x5316be['GFWIr'](_0x6f567f, _0x3dd461); _0x6f567f++) {
        const _0x3bd206 = _0x2246b0[_0x6f567f]['indexOf'](':');
        if (_0x5316be['pQMPl'](_0x3bd206, -(-370 + 20 * 141 + -2449))) {
            _0x3cd50b[_0x36620a(278)](_0x2246b0[_0x6f567f]);
            continue;
        }
        const _0x5677a1 = _0x2246b0[_0x6f567f]['slice'](383 * 3 + 317 * -23 + 6142, _0x3bd206), _0x571b7d = _0x2246b0[_0x6f567f][_0x36620a(279)](_0x3bd206 + (6842 + -4752 + 2089 * -1));
        switch (_0x5677a1) {
        case _0x5316be['YeDNN']:
            _0x58abbe = _0x571b7d;
            break;
        case _0x5316be[_0x36620a(280)]:
            _0x17172a = _0x5316be[_0x36620a(281)](_0x571b7d, _0x5316be[_0x36620a(282)]);
            break;
        case _0x5316be['DAuhy']:
            if (!isNaN(_0x571b7d))
                _0x2045be = +_0x571b7d;
            break;
        case _0x5316be[_0x36620a(283)]:
            _0xb90be6 = _0x5316be[_0x36620a(284)](_0x571b7d, _0x5316be['WrkNV']);
            break;
        case _0x5316be['NcNYU']: {
                for (const _0x31b1ec of _0x571b7d[_0x36620a(285)](',')) {
                    const _0x28bdb5 = _0x31b1ec[_0x36620a(286)]('-');
                    if (_0x28bdb5 !== -(-2969 + 2 * -3909 + 62 * 174)) {
                        let _0x5c98c5 = +_0x31b1ec['substr'](-1157 * -1 + 6272 + -391 * 19, _0x28bdb5), _0x355f4d = +_0x31b1ec[_0x36620a(287)](_0x5316be[_0x36620a(288)](_0x28bdb5, -166 * 48 + 8318 * 1 + -349));
                        if (Number[_0x36620a(289)](_0x5c98c5) || Number[_0x36620a(289)](_0x355f4d))
                            continue;
                        if (_0x5316be['GFWIr'](_0x355f4d, _0x5c98c5)) {
                            const _0x25e514 = _0x5c98c5;
                            _0x5c98c5 = _0x355f4d, _0x355f4d = _0x25e514;
                        }
                        for (; _0x5c98c5 <= _0x355f4d; _0x5c98c5++) {
                            _0x5c888b['push'](_0x5c98c5);
                        }
                    }
                    if (!_0x5316be[_0x36620a(290)](isNaN, _0x31b1ec))
                        _0x5c888b[_0x36620a(278)](+_0x31b1ec);
                }
                break;
            }
        default: {
                _0x3cd50b[_0x36620a(278)](_0x2246b0[_0x6f567f]);
            }
        }
    }
    const _0x27ce45 = _0x3cd50b[_0x36620a(291)](' ');
    let _0x44ff60, _0xb47f32 = '';
    if (_0x5316be[_0x36620a(292)](_0x44ff60 = _0x27ce45[_0x36620a(293)](rCaptionUrlTitle), null))
        _0xb47f32 = '<span>' + _0x44ff60[-6041 * -1 + -4520 + -16 * 95] + '</span><a href="' + _0x44ff60[1 * 5757 + -8544 + 2789] + '">' + _0x44ff60[-131 * -16 + -4219 + 2 * 1063] + _0x36620a(294);
    else {
        if (_0x5316be[_0x36620a(292)](_0x44ff60 = _0x27ce45[_0x36620a(293)](rCaptionUrl), null))
            _0xb47f32 = _0x36620a(295) + _0x44ff60[3926 + 83 * -41 + -522] + _0x36620a(296) + _0x44ff60[8465 + 1 * -6565 + 949 * -2] + _0x36620a(297);
        else
            _0x5316be[_0x36620a(298)](_0x44ff60 = _0x27ce45[_0x36620a(293)](rCaption), null) && (_0xb47f32 = _0x36620a(295) + _0x44ff60[422 + 1199 + -1621] + _0x36620a(299));
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
        _0x2a5e69 = _0x2a5e69 - (332 * 13 + 5280 + 4666 * -2);
        let _0x1a5463 = _0x5373[_0x2a5e69];
        return _0x1a5463;
    }, _0x530a(_0x5cd040, _0x5258da);
}
module[_0x5cfe96(300)] = _0x1ec1c1 => function _0x15039a(_0x2d77d9, _0x1b4b2f) {
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
            'APzfS': _0x28395f(301),
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
            'iuDte': _0x28395f(272),
            'tJfQX': function (_0x2bf61d, _0x52d7ef, _0x7f927f) {
                return _0x2bf61d(_0x52d7ef, _0x7f927f);
            },
            'AiulW': '&#125;'
        }, _0x74297d = _0x1ec1c1[_0x28395f(302)]['highlight'] || {}, _0x315246 = _0x1ec1c1[_0x28395f(302)][_0x28395f(303)] || {};
    if (!_0x74297d[_0x28395f(304)] && !_0x315246[_0x28395f(304)])
        return _0x28395f(305) + _0x4eb3ba[_0x28395f(306)](escapeHTML, _0x1b4b2f) + _0x28395f(307);
    let _0x2213fb, _0x29724c = !![];
    if (_0x4eb3ba[_0x28395f(308)](_0x2213fb = _0x2d77d9[_0x28395f(309)](_0x4bfd65 => _0x4bfd65['startsWith'](_0x28395f(310))), -(-2517 + -8066 + 10584))) {
        const _0x27d8d8 = _0x2d77d9[_0x2213fb], _0x4e4c8b = _0x27d8d8[_0x28395f(279)](1 * 4453 + 4656 + -9099);
        _0x29724c = _0x4eb3ba['rDyIB'](_0x4e4c8b, _0x4eb3ba[_0x28395f(311)]), _0x2d77d9['splice'](_0x2213fb, 4570 + 4349 + -8918);
    }
    if (!_0x29724c)
        return _0x28395f(305) + _0x4eb3ba['PAoel'](escapeHTML, _0x1b4b2f) + _0x28395f(307);
    const {
        lang: _0x26bf59,
        firstLine: _0x1ff0b9,
        caption: _0x181a87,
        line_number: _0x55afdc,
        mark: _0x4a5377,
        wrap: _0x3ab3d5
    } = _0x4eb3ba[_0x28395f(312)](parseArgs, _0x2d77d9);
    if (_0x315246['enable']) {
        const _0x3bf47d = {
            'lang': _0x26bf59,
            'firstLine': _0x1ff0b9,
            'caption': _0x181a87,
            'lineNumber': _0x4eb3ba[_0x28395f(313)](typeof _0x55afdc, _0x4eb3ba[_0x28395f(314)]) ? _0x55afdc : _0x315246[_0x28395f(315)],
            'mark': _0x4a5377,
            'tab': _0x315246[_0x28395f(316)],
            'isPreprocess': _0x315246['preprocess']
        };
        if (!prismHighlight)
            prismHighlight = _0x4eb3ba['kdYoP'](require, _0x4eb3ba[_0x28395f(317)])[_0x28395f(318)];
        _0x1b4b2f = prismHighlight(_0x1b4b2f, _0x3bf47d);
    } else {
        const _0x311977 = {
            'lang': _0x4eb3ba[_0x28395f(313)](typeof _0x26bf59, _0x28395f(319)) ? _0x26bf59 : '',
            'firstLine': _0x1ff0b9,
            'caption': _0x181a87,
            'gutter': _0x4eb3ba[_0x28395f(313)](typeof _0x55afdc, _0x4eb3ba[_0x28395f(314)]) ? _0x55afdc : _0x74297d[_0x28395f(315)],
            'hljs': _0x74297d[_0x28395f(320)],
            'mark': _0x4a5377,
            'tab': _0x74297d[_0x28395f(316)],
            'autoDetect': _0x74297d['auto_detect'],
            'wrap': _0x4eb3ba[_0x28395f(321)](typeof _0x3ab3d5, 'boolean') ? _0x3ab3d5 : _0x74297d[_0x28395f(275)]
        };
        if (!highlight)
            highlight = _0x4eb3ba['kdYoP'](require, _0x28395f(272))[_0x28395f(322)];
        _0x1b4b2f = _0x4eb3ba[_0x28395f(323)](highlight, _0x1b4b2f, _0x311977);
    }
    return _0x1b4b2f[_0x28395f(324)](/{/g, _0x28395f(325))[_0x28395f(324)](/}/g, _0x4eb3ba[_0x28395f(326)]);
};