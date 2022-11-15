const {load: loadCache} = require(_0x44eb7c(429)), {onRenderBody} = require(_0x44eb7c(430));
jest[_0x44eb7c(431)]('../prepare/cache', () => {
    return { 'load': jest['fn']() };
});
const setCachedAssets = _0x2e3549 => loadCache['mockImplementationOnce'](() => {
    return {
        'timestamp': 0,
        'hash': 'initial-run',
        'assets': _0x2e3549
    };
});
describe(_0x44eb7c(432), () => {
    const _0x1660bd = _0x44eb7c, _0x486cfa = jest['fn']();
    afterEach(() => {
        _0x486cfa['mockReset']();
    }), it('does nothing if the pathname has no cached assets', () => {
        const _0x11fe34 = _0x513f;
        setCachedAssets({}), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x11fe34(433)
        }, {}), expect(_0x486cfa)[_0x11fe34(434)]['toHaveBeenCalled']();
    }), it(_0x1660bd(435), () => {
        const _0x9845c1 = _0x1660bd;
        setCachedAssets({
            [_0x9845c1(433)]: {
                ['/path/to/font.otf']: !![],
                [_0x9845c1(436)]: !![],
                ['https://foo.baz/path/to/another/font.woff']: !![]
            }
        }), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x9845c1(433)
        }, {}), expect(_0x486cfa[_0x9845c1(431)][_0x9845c1(437)][0][0])[_0x9845c1(438)]();
    }), describe(_0x1660bd(439), () => {
        const _0x36448b = _0x1660bd;
        it(_0x36448b(440), () => {
            const _0x30ab39 = _0x36448b;
            setCachedAssets({ ['/foo']: { [_0x30ab39(441)]: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x30ab39(433)
            }, { 'crossOrigin': 'use-credentials' }), expect(_0x486cfa['mock']['calls'][0][0])[_0x30ab39(438)]();
        }), it('accepts function `crossOrigin` in plugin config', () => {
            const _0x4f2cec = _0x36448b, _0x5f560b = { 'crossOrigin': _0x5781c8 => _0x5781c8 === _0x4f2cec(433) ? ![] : _0x4f2cec(442) };
            setCachedAssets({ [_0x4f2cec(433)]: { ['https://foo.bar/path/to/font.otf']: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x4f2cec(433)
            }, _0x5f560b), setCachedAssets({ [_0x4f2cec(443)]: { [_0x4f2cec(444)]: !![] } }), onRenderBody({
                'setHeadComponents': _0x486cfa,
                'pathname': _0x4f2cec(443)
            }, _0x5f560b), expect(_0x486cfa[_0x4f2cec(431)][_0x4f2cec(437)][0][0])['toMatchSnapshot'](), expect(_0x486cfa[_0x4f2cec(431)][_0x4f2cec(437)][1][0])[_0x4f2cec(438)]();
        });
    }), it(_0x1660bd(445), () => {
        const _0x4cff14 = _0x1660bd;
        setCachedAssets({ [_0x4cff14(433)]: { [_0x4cff14(446)]: !![] } }), onRenderBody({
            'setHeadComponents': _0x486cfa,
            'pathname': _0x4cff14(433)
        }), expect(_0x486cfa[_0x4cff14(431)][_0x4cff14(437)][0][0])[_0x4cff14(438)]();
    });
});