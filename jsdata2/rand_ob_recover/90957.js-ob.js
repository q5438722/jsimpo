const {load: loadCache} = require(_0x443d71(397)), {onRenderBody} = require('../gatsby-ssr');
function _0x5ca7(_0x3d3567, _0x2eef82) {
    return _0x5ca7 = function (_0x497403, _0x4462e4) {
        _0x497403 = _0x497403 - (8674 * -1 + 1462 + -2533 * -3);
        let _0x4f4b4d = _0x5707[_0x497403];
        return _0x4f4b4d;
    }, _0x5ca7(_0x3d3567, _0x2eef82);
}
jest[_0x443d71(398)](_0x443d71(397), () => {
    return { 'load': jest['fn']() };
});
const setCachedAssets = _0x25f232 => loadCache[_0x443d71(399)](() => {
    const _0x3f38b8 = _0x443d71;
    return {
        'timestamp': 0,
        'hash': _0x3f38b8(400),
        'assets': _0x25f232
    };
});
describe(_0x443d71(401), () => {
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
    _0x5719dc[_0x3a9211(402)](afterEach, () => {
        const _0xe862f8 = _0x3a9211;
        _0x4ae1b4[_0xe862f8(403)]();
    }), _0x5719dc['xRuXt'](it, _0x3a9211(404), () => {
        const _0x5d4f1d = _0x3a9211;
        _0x5719dc['CSBWX'](setCachedAssets, {}), _0x5719dc[_0x5d4f1d(405)](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': '/foo'
        }, {}), _0x5719dc[_0x5d4f1d(406)](expect, _0x4ae1b4)[_0x5d4f1d(407)][_0x5d4f1d(408)]();
    }), it('generates a <link> tag for each asset', () => {
        const _0x12c717 = _0x3a9211;
        _0x5719dc['BAkNj'](setCachedAssets, {
            [_0x12c717(409)]: {
                [_0x12c717(410)]: !![],
                [_0x12c717(411)]: !![],
                [_0x12c717(412)]: !![]
            }
        }), _0x5719dc['hDsBA'](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': _0x12c717(409)
        }, {}), expect(_0x4ae1b4[_0x12c717(398)][_0x12c717(413)][-3214 + -9729 + -1849 * -7][-5465 + 7809 + 2 * -1172])[_0x12c717(414)]();
    }), describe('generates <link> tags with `crossorigin` prop for external fonts', () => {
        const _0x18f3c5 = _0x3a9211, _0x3a35af = {
                'xMSJs': function (_0x42dd18, _0x1234fd) {
                    const _0x1e4307 = _0x5ca7;
                    return _0x5719dc[_0x1e4307(415)](_0x42dd18, _0x1234fd);
                },
                'kNdII': function (_0x50ce75, _0x2d65fa, _0x26ea96) {
                    return _0x50ce75(_0x2d65fa, _0x26ea96);
                },
                'HhiBY': function (_0x4fddfb, _0x190ca2) {
                    return _0x4fddfb(_0x190ca2);
                },
                'UOdOM': function (_0x5a8a0c, _0x3099f3) {
                    const _0x10be0f = _0x5ca7;
                    return _0x5719dc[_0x10be0f(415)](_0x5a8a0c, _0x3099f3);
                }
            };
        _0x5719dc[_0x18f3c5(416)](it, _0x18f3c5(417), () => {
            const _0x57f73e = _0x18f3c5;
            _0x5719dc['BAkNj'](setCachedAssets, { [_0x57f73e(409)]: { [_0x57f73e(418)]: !![] } }), _0x5719dc['hDsBA'](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x57f73e(409)
            }, { 'crossOrigin': _0x57f73e(419) }), _0x5719dc['BAkNj'](expect, _0x4ae1b4['mock'][_0x57f73e(413)][-9578 + -9434 + 19012][2607 + 2940 + -5547])['toMatchSnapshot']();
        }), _0x5719dc[_0x18f3c5(420)](it, _0x18f3c5(421), () => {
            const _0x2a71bb = _0x18f3c5, _0x5f49a5 = { 'crossOrigin': _0x493566 => _0x493566 === '/foo' ? ![] : 'use-credentials' };
            _0x3a35af['xMSJs'](setCachedAssets, { [_0x2a71bb(409)]: { [_0x2a71bb(418)]: !![] } }), _0x3a35af[_0x2a71bb(422)](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x2a71bb(409)
            }, _0x5f49a5), _0x3a35af[_0x2a71bb(423)](setCachedAssets, { [_0x2a71bb(424)]: { ['https://foo.bar/path/to/another.woff']: !![] } }), _0x3a35af[_0x2a71bb(422)](onRenderBody, {
                'setHeadComponents': _0x4ae1b4,
                'pathname': _0x2a71bb(424)
            }, _0x5f49a5), _0x3a35af[_0x2a71bb(425)](expect, _0x4ae1b4['mock']['calls'][1 * -9512 + -695 * 1 + 59 * 173][3010 + 393 + -41 * 83])['toMatchSnapshot'](), _0x3a35af[_0x2a71bb(426)](expect, _0x4ae1b4[_0x2a71bb(398)][_0x2a71bb(413)][1709 + -8513 * -1 + -10221][-5431 + -4639 + 10070])[_0x2a71bb(414)]();
        });
    }), _0x5719dc['nThBC'](it, _0x3a9211(427), () => {
        const _0x480c1b = _0x3a9211;
        setCachedAssets({ [_0x480c1b(409)]: { [_0x480c1b(428)]: !![] } }), _0x5719dc[_0x480c1b(429)](onRenderBody, {
            'setHeadComponents': _0x4ae1b4,
            'pathname': _0x480c1b(409)
        }), expect(_0x4ae1b4[_0x480c1b(398)][_0x480c1b(413)][-2018 * 4 + 16 * -110 + 9832][-7 * -637 + -2554 + 5 * -381])[_0x480c1b(414)]();
    });
});