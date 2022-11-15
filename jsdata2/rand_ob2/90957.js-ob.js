const _0x5c75 = [
    'https://foo.bar/path/to/font.otf',
    'use-credentials',
    '/bar',
    'https://foo.bar/path/to/another.woff',
    'generates\x20<link>\x20tags\x20with\x20`crossorigin`\x20`anonymous`\x20prop\x20for\x20self-hosted\x20fonts',
    '/font.otf',
    '282KfALSx',
    '599kTEUPR',
    '1047992qthhMr',
    '10380NqfYex',
    '152oNvrGV',
    '1564132DmQDMf',
    '558508zirfPq',
    '1353710WwArju',
    '1YwlyYR',
    '10334zFhkSI',
    '697tadmCw',
    '../prepare/cache',
    '../gatsby-ssr',
    'mock',
    'gatsby-ssr',
    '/foo',
    'not',
    'generates\x20a\x20<link>\x20tag\x20for\x20each\x20asset',
    'https://foo.bar/path/to/another.ttf',
    'calls',
    'toMatchSnapshot',
    'generates\x20<link>\x20tags\x20with\x20`crossorigin`\x20prop\x20for\x20external\x20fonts',
    'accepts\x20string\x20`crossOrigin`\x20in\x20plugin\x20config'
];
const _0x44eb7c = _0x513f;
function _0x513f(_0x258e13, _0x5b2919) {
    return _0x513f = function (_0x5c750a, _0x513f6e) {
        _0x5c750a = _0x5c750a - 0x1a2;
        let _0x3f8f03 = _0x5c75[_0x5c750a];
        return _0x3f8f03;
    }, _0x513f(_0x258e13, _0x5b2919);
}
(function (_0x39118d, _0x386779) {
    const _0x1d343d = _0x513f;
    while (!![]) {
        try {
            const _0xab87b8 = parseInt(_0x1d343d(0x1a2)) * -parseInt(_0x1d343d(0x1a3)) + -parseInt(_0x1d343d(0x1a4)) + parseInt(_0x1d343d(0x1a5)) * -parseInt(_0x1d343d(0x1a6)) + -parseInt(_0x1d343d(0x1a7)) + -parseInt(_0x1d343d(0x1a8)) + parseInt(_0x1d343d(0x1a9)) * -parseInt(_0x1d343d(0x1aa)) + -parseInt(_0x1d343d(0x1ab)) * -parseInt(_0x1d343d(0x1ac));
            if (_0xab87b8 === _0x386779)
                break;
            else
                _0x39118d['push'](_0x39118d['shift']());
        } catch (_0x503ec9) {
            _0x39118d['push'](_0x39118d['shift']());
        }
    }
}(_0x5c75, 0xe37c2));
const {load: loadCache} = require(_0x44eb7c(0x1ad)), {onRenderBody} = require(_0x44eb7c(0x1ae));
jest[_0x44eb7c(0x1af)]('../prepare/cache', () => {
    return { 'load': jest['fn']() };
});
const setCachedAssets = _0x2e3549 => loadCache['mockImplementationOnce'](() => {
    return {
        'timestamp': 0x0,
        'hash': 'initial-run',
        'assets': _0x2e3549
    };
});
describe(_0x44eb7c(0x1b0), () => {
    const _0x1660bd = _0x44eb7c, _0x486cfa = jest['fn']();
    afterEach(() => {
        _0x486cfa['mockReset']();
    }), it('does\x20nothing\x20if\x20the\x20pathname\x20has\x20no\x20cached\x20assets', () => {
        const _0x11fe34 = _0x513f;
        setCachedAssets({}), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x11fe34(0x1b1)
        }, {}), expect(_0x486cfa)[_0x11fe34(0x1b2)]['toHaveBeenCalled']();
    }), it(_0x1660bd(0x1b3), () => {
        const _0x9845c1 = _0x1660bd;
        setCachedAssets({
            [_0x9845c1(0x1b1)]: {
                ['/path/to/font.otf']: !![],
                [_0x9845c1(0x1b4)]: !![],
                ['https://foo.baz/path/to/another/font.woff']: !![]
            }
        }), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x9845c1(0x1b1)
        }, {}), expect(_0x486cfa[_0x9845c1(0x1af)][_0x9845c1(0x1b5)][0x0][0x0])[_0x9845c1(0x1b6)]();
    }), describe(_0x1660bd(0x1b7), () => {
        const _0x36448b = _0x1660bd;
        it(_0x36448b(0x1b8), () => {
            const _0x30ab39 = _0x36448b;
            setCachedAssets({ ['/foo']: { [_0x30ab39(0x1b9)]: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x30ab39(0x1b1)
            }, { 'crossOrigin': 'use-credentials' }), expect(_0x486cfa['mock']['calls'][0x0][0x0])[_0x30ab39(0x1b6)]();
        }), it('accepts\x20function\x20`crossOrigin`\x20in\x20plugin\x20config', () => {
            const _0x4f2cec = _0x36448b, _0x5f560b = { 'crossOrigin': _0x5781c8 => _0x5781c8 === _0x4f2cec(0x1b1) ? ![] : _0x4f2cec(0x1ba) };
            setCachedAssets({ [_0x4f2cec(0x1b1)]: { ['https://foo.bar/path/to/font.otf']: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x4f2cec(0x1b1)
            }, _0x5f560b), setCachedAssets({ [_0x4f2cec(0x1bb)]: { [_0x4f2cec(0x1bc)]: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x4f2cec(0x1bb)
            }, _0x5f560b), expect(_0x486cfa[_0x4f2cec(0x1af)][_0x4f2cec(0x1b5)][0x0][0x0])['toMatchSnapshot'](), expect(_0x486cfa[_0x4f2cec(0x1af)][_0x4f2cec(0x1b5)][0x1][0x0])[_0x4f2cec(0x1b6)]();
        });
    }), it(_0x1660bd(0x1bd), () => {
        const _0x4cff14 = _0x1660bd;
        setCachedAssets({ [_0x4cff14(0x1b1)]: { [_0x4cff14(0x1be)]: !![] } }), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x4cff14(0x1b1)
        }), expect(_0x486cfa[_0x4cff14(0x1af)][_0x4cff14(0x1b5)][0x0][0x0])[_0x4cff14(0x1b6)]();
    });
});
