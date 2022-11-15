const {load: loadCache} = require('../prepare/cache');
const {onRenderBody} = require('../gatsby-ssr');
jest['mock']('../prepare/cache', () => {
    return { 'load': jest['fn']() };
});
const setCachedAssets = _0x507c1e => loadCache['mockImplementationOnce'](() => {
    return {
        'timestamp': 0,
        'hash': 'initial-run',
        'assets': _0x507c1e
    };
});
describe('gatsby-ssr', () => {
    const _0x5c4a8d = jest['fn']();
    afterEach(() => {
        if ('nTNma' === 'vueCG') {
            setCachedAssets({ ['/foo']: { ['https://foo.bar/path/to/font.otf']: !![] } });
            onRenderBody({
                'setHeadComponents': _0x5c4a8d,
                'pathname': '/foo'
            }, { 'crossOrigin': 'use-credentials' });
            expect(_0x5c4a8d['mock']['calls'][0][0])['toMatchSnapshot']();
        } else {
            _0x5c4a8d['mockReset']();
        }
    });
    it('does nothing if the pathname has no cached assets', () => {
        setCachedAssets({});
        onRenderBody({
            'setHeadComponents': _0x5c4a8d,
            'pathname': '/foo'
        }, {});
        expect(_0x5c4a8d)['not']['toHaveBeenCalled']();
    });
    it('generates a <link> tag for each asset', () => {
        setCachedAssets({
            ['/foo']: {
                ['/path/to/font.otf']: !![],
                ['https://foo.bar/path/to/another.ttf']: !![],
                ['https://foo.baz/path/to/another/font.woff']: !![]
            }
        });
        onRenderBody({
            'setHeadComponents': _0x5c4a8d,
            'pathname': '/foo'
        }, {});
        expect(_0x5c4a8d['mock']['calls'][0][0])['toMatchSnapshot']();
    });
    describe('generates <link> tags with `crossorigin` prop for external fonts', () => {
        it('accepts string `crossOrigin` in plugin config', () => {
            setCachedAssets({ ['/foo']: { ['https://foo.bar/path/to/font.otf']: !![] } });
            onRenderBody({
                'setHeadComponents': _0x5c4a8d,
                'pathname': '/foo'
            }, { 'crossOrigin': 'use-credentials' });
            expect(_0x5c4a8d['mock']['calls'][0][0])['toMatchSnapshot']();
        });
        it('accepts function `crossOrigin` in plugin config', () => {
            if ('sorIF' !== 'hVNuB') {
                const _0x5aeac3 = { 'crossOrigin': _0x12b0b0 => _0x12b0b0 === '/foo' ? ![] : 'use-credentials' };
                setCachedAssets({ ['/foo']: { ['https://foo.bar/path/to/font.otf']: !![] } });
                _0xe134df['CFsvp'](onRenderBody, {
                    'setHeadComponents': _0x5c4a8d,
                    'pathname': '/foo'
                }, _0x5aeac3);
                setCachedAssets({ ['/bar']: { ['https://foo.bar/path/to/another.woff']: !![] } });
                _0xe134df['CFsvp'](onRenderBody, {
                    'setHeadComponents': _0x5c4a8d,
                    'pathname': '/bar'
                }, _0x5aeac3);
                expect(_0x5c4a8d['mock']['calls'][0][0])['toMatchSnapshot']();
                expect(_0x5c4a8d['mock']['calls'][1][0])['toMatchSnapshot']();
            } else {
                setCachedAssets({});
                onRenderBody({
                    'setHeadComponents': _0x5c4a8d,
                    'pathname': '/foo'
                }, {});
                expect(_0x5c4a8d)['not']['toHaveBeenCalled']();
            }
        });
    });
    it('generates <link> tags with `crossorigin` `anonymous` prop for self-hosted fonts', () => {
        if ('LwEqq' !== 'jyovR') {
            setCachedAssets({ ['/foo']: { ['/font.otf']: !![] } });
            onRenderBody({
                'setHeadComponents': _0x5c4a8d,
                'pathname': '/foo'
            });
            expect(_0x5c4a8d['mock']['calls'][0][0])['toMatchSnapshot']();
        } else {
            return { 'load': jest['fn']() };
        }
    });
});