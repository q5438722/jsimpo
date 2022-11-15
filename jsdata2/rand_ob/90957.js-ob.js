const _0x5707 = [
    '../prepare/cache',
    'mock',
    'mockImplementationOnce',
    'initial-run',
    'gatsby-ssr',
    'RNoIv',
    'mockReset',
    'does\x20nothing\x20if\x20the\x20pathname\x20has\x20no\x20cached\x20assets',
    'hDsBA',
    'TnwnL',
    'not',
    'toHaveBeenCalled',
    '/foo',
    '/path/to/font.otf',
    'https://foo.bar/path/to/another.ttf',
    'https://foo.baz/path/to/another/font.woff',
    'calls',
    'toMatchSnapshot',
    'GcHwO',
    'YodAF',
    'accepts\x20string\x20`crossOrigin`\x20in\x20plugin\x20config',
    'https://foo.bar/path/to/font.otf',
    'use-credentials',
    'xRuXt',
    'accepts\x20function\x20`crossOrigin`\x20in\x20plugin\x20config',
    'kNdII',
    'xMSJs',
    '/bar',
    'HhiBY',
    'UOdOM',
    'generates\x20<link>\x20tags\x20with\x20`crossorigin`\x20`anonymous`\x20prop\x20for\x20self-hosted\x20fonts',
    '/font.otf',
    'tSABP',
    '212945EGHRcM',
    '607BPHTDw',
    '52pVXgYb',
    '3WnbkDy',
    '100472lpyFbt',
    '186420CDfLpm',
    '362012zlslxy',
    '724417TLweRk',
    '814559Kkqgcf',
    '1ZoVsSx'
];
const _0x443d71 = _0x5ca7;
(function (_0x51416b, _0x44bd96) {
    const _0x37014f = _0x5ca7;
    while (!![]) {
        try {
            const _0x576d94 = parseInt(_0x37014f(0x183)) + parseInt(_0x37014f(0x184)) * parseInt(_0x37014f(0x185)) + -parseInt(_0x37014f(0x186)) * -parseInt(_0x37014f(0x187)) + parseInt(_0x37014f(0x188)) + -parseInt(_0x37014f(0x189)) + -parseInt(_0x37014f(0x18a)) + parseInt(_0x37014f(0x18b)) * parseInt(_0x37014f(0x18c));
            if (_0x576d94 === _0x44bd96)
                break;
            else
                _0x51416b['push'](_0x51416b['shift']());
        } catch (_0x11e3df) {
            _0x51416b['push'](_0x51416b['shift']());
        }
    }
}(_0x5707, 0x51230 + -0x4295d + -0x6 * -0x104fc));
const {load: loadCache} = require(_0x443d71(0x18d)), {onRenderBody} = require('../gatsby-ssr');
function _0x5ca7(_0x3d3567, _0x2eef82) {
    return _0x5ca7 = function (_0x497403, _0x4462e4) {
        _0x497403 = _0x497403 - (0x21e2 * -0x1 + 0x5b6 + -0x9e5 * -0x3);
        let _0x4f4b4d = _0x5707[_0x497403];
        return _0x4f4b4d;
    }, _0x5ca7(_0x3d3567, _0x2eef82);
}
jest[_0x443d71(0x18e)](_0x443d71(0x18d), () => {
    return { 'load': jest['fn']() };
});
const setCachedAssets = _0x25f232 => loadCache[_0x443d71(0x18f)](() => {
    const _0x3f38b8 = _0x443d71;
    return {
        'timestamp': 0x0,
        'hash': _0x3f38b8(0x190),
        'assets': _0x25f232
    };
});
describe(_0x443d71(0x191), () => {
    const _0x3a9211 = _0x443d71, _0x5719dc = {
            'CSBWX': function (_0x3ca797, _0x498d62) {
                return _0x3ca797(_0x498d62);
            },
            'hDsBA': function (_0x5264c4, _0x4d0092, _0x31170c) {
                return _0x5264c4(_0x4d0092, _0x31170c);
            },
            'TnwnL': function (_0x31455a, _0xf4b064) {
                return _0x31455a(_0xf4b064);
            },
            'BAkNj': function (_0x3bc09f, _0x3d7ec9) {
                return _0x3bc09f(_0x3d7ec9);
            },
            'GcHwO': function (_0x226fc4, _0xe3150c) {
                return _0x226fc4(_0xe3150c);
            },
            'YodAF': function (_0x129704, _0x295606, _0x5053ba) {
                return _0x129704(_0x295606, _0x5053ba);
            },
            'xRuXt': function (_0x9b8c5f, _0x4964ae, _0x449a97) {
                return _0x9b8c5f(_0x4964ae, _0x449a97);
            },
            'tSABP': function (_0x9e9831, _0x13bf03) {
                return _0x9e9831(_0x13bf03);
            },
            'RNoIv': function (_0x543386, _0x41554e) {
                return _0x543386(_0x41554e);
            },
            'nThBC': function (_0x1083fe, _0x362859, _0x384f06) {
                return _0x1083fe(_0x362859, _0x384f06);
            }
        }, _0x4ae1b4 = jest['fn']();
    _0x5719dc[_0x3a9211(0x192)](afterEach, () => {
        const _0xe862f8 = _0x3a9211;
        _0x4ae1b4[_0xe862f8(0x193)]();
    }), _0x5719dc['xRuXt'](it, _0x3a9211(0x194), () => {
        const _0x5d4f1d = _0x3a9211;
        _0x5719dc['CSBWX'](setCachedAssets, {}), _0x5719dc[_0x5d4f1d(0x195)](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': '/foo'
        }, {}), _0x5719dc[_0x5d4f1d(0x196)](expect, _0x4ae1b4)[_0x5d4f1d(0x197)][_0x5d4f1d(0x198)]();
    }), it('generates\x20a\x20<link>\x20tag\x20for\x20each\x20asset', () => {
        const _0x12c717 = _0x3a9211;
        _0x5719dc['BAkNj'](setCachedAssets, {
            [_0x12c717(0x199)]: {
                [_0x12c717(0x19a)]: !![],
                [_0x12c717(0x19b)]: !![],
                [_0x12c717(0x19c)]: !![]
            }
        }), _0x5719dc['hDsBA'](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': _0x12c717(0x199)
        }, {}), expect(_0x4ae1b4[_0x12c717(0x18e)][_0x12c717(0x19d)][-0xc8e + -0x2601 + -0x739 * -0x7][-0x1559 + 0x1e81 + 0x2 * -0x494])[_0x12c717(0x19e)]();
    }), describe('generates\x20<link>\x20tags\x20with\x20`crossorigin`\x20prop\x20for\x20external\x20fonts', () => {
        const _0x18f3c5 = _0x3a9211, _0x3a35af = {
                'xMSJs': function (_0x42dd18, _0x1234fd) {
                    const _0x1e4307 = _0x5ca7;
                    return _0x5719dc[_0x1e4307(0x19f)](_0x42dd18, _0x1234fd);
                },
                'kNdII': function (_0x50ce75, _0x2d65fa, _0x26ea96) {
                    return _0x50ce75(_0x2d65fa, _0x26ea96);
                },
                'HhiBY': function (_0x4fddfb, _0x190ca2) {
                    return _0x4fddfb(_0x190ca2);
                },
                'UOdOM': function (_0x5a8a0c, _0x3099f3) {
                    const _0x10be0f = _0x5ca7;
                    return _0x5719dc[_0x10be0f(0x19f)](_0x5a8a0c, _0x3099f3);
                }
            };
        _0x5719dc[_0x18f3c5(0x1a0)](it, _0x18f3c5(0x1a1), () => {
            const _0x57f73e = _0x18f3c5;
            _0x5719dc['BAkNj'](setCachedAssets, { [_0x57f73e(0x199)]: { [_0x57f73e(0x1a2)]: !![] } }), _0x5719dc['hDsBA'](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x57f73e(0x199)
            }, { 'crossOrigin': _0x57f73e(0x1a3) }), _0x5719dc['BAkNj'](expect, _0x4ae1b4['mock'][_0x57f73e(0x19d)][-0x256a + -0x24da + 0x4a44][0xa2f + 0xb7c + -0x15ab])['toMatchSnapshot']();
        }), _0x5719dc[_0x18f3c5(0x1a4)](it, _0x18f3c5(0x1a5), () => {
            const _0x2a71bb = _0x18f3c5, _0x5f49a5 = { 'crossOrigin': _0x493566 => _0x493566 === '/foo' ? ![] : 'use-credentials' };
            _0x3a35af['xMSJs'](setCachedAssets, { [_0x2a71bb(0x199)]: { [_0x2a71bb(0x1a2)]: !![] } }), _0x3a35af[_0x2a71bb(0x1a6)](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x2a71bb(0x199)
            }, _0x5f49a5), _0x3a35af[_0x2a71bb(0x1a7)](setCachedAssets, { [_0x2a71bb(0x1a8)]: { ['https://foo.bar/path/to/another.woff']: !![] } }), _0x3a35af[_0x2a71bb(0x1a6)](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x2a71bb(0x1a8)
            }, _0x5f49a5), _0x3a35af[_0x2a71bb(0x1a9)](expect, _0x4ae1b4['mock']['calls'][0x1 * -0x2528 + -0x2b7 * 0x1 + 0x3b * 0xad][0xbc2 + 0x189 + -0x29 * 0x53])['toMatchSnapshot'](), _0x3a35af[_0x2a71bb(0x1aa)](expect, _0x4ae1b4[_0x2a71bb(0x18e)][_0x2a71bb(0x19d)][0x6ad + -0x2141 * -0x1 + -0x27ed][-0x1537 + -0x121f + 0x2756])[_0x2a71bb(0x19e)]();
        });
    }), _0x5719dc['nThBC'](it, _0x3a9211(0x1ab), () => {
        const _0x480c1b = _0x3a9211;
        setCachedAssets({ [_0x480c1b(0x199)]: { [_0x480c1b(0x1ac)]: !![] } }), _0x5719dc[_0x480c1b(0x1ad)](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': _0x480c1b(0x199)
        }), expect(_0x4ae1b4[_0x480c1b(0x18e)][_0x480c1b(0x19d)][-0x7e2 * 0x4 + 0x10 * -0x6e + 0x2668][-0x7 * -0x27d + -0x9fa + 0x5 * -0x17d])[_0x480c1b(0x19e)]();
    });
});
