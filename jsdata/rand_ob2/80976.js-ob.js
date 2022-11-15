'use strict';
const _0x5c5f = [
    '284tbNofq',
    '178MPfLwf',
    '1024378sqWJXq',
    'mock',
    'npm-registry-fetch',
    '@lerna/otplease',
    'resolve',
    'freeze',
    'latest',
    'mockImplementation',
    'json',
    'npmDistTag.add()',
    'adds\x20a\x20dist-tag\x20for\x20a\x20given\x20package@version',
    'add',
    '@scope/some-pkg@1.0.1',
    'added-tag',
    'toEqual',
    '1.0.1',
    'toHaveBeenLastCalledWith',
    'objectContaining',
    'PUT',
    'stringify',
    'does\x20not\x20attempt\x20to\x20add\x20duplicate\x20of\x20existing\x20tag',
    'mockImplementationOnce',
    '1.0.0',
    'dupe-tag',
    'toHaveBeenCalled',
    'warn',
    'dist-tag',
    '@scope/some-pkg@dupe-tag\x20already\x20set\x20to\x201.0.1',
    'supports\x20npm\x20v6\x20opts.tag\x20fallback',
    'npmDistTag.remove()',
    'removes\x20an\x20existing\x20dist-tag\x20for\x20a\x20given\x20package',
    'removed-tag',
    'not',
    'toHaveProperty',
    '/-/package/@scope%2fsome-pkg/dist-tags/removed-tag',
    'DELETE',
    'does\x20not\x20attempt\x20removal\x20of\x20nonexistent\x20tag',
    'remove',
    'missing-tag',
    'info',
    '\x22missing-tag\x22\x20is\x20not\x20a\x20dist-tag\x20on\x20@scope/some-pkg',
    'npmDistTag.list()',
    'returns\x20dictionary\x20of\x20dist-tags',
    'should-be-removed',
    'list',
    '@scope/some-pkg',
    '/-/package/@scope%2fsome-pkg/dist-tags',
    '410838aldqFG',
    '430372qyCCss',
    '335674lNPOcS',
    '363360zhDsUp',
    '1RvnHRC',
    '6865wBZOnD'
];
const _0x5deb9f = _0x379f;
(function (_0x4bf940, _0xccab0) {
    const _0x1e8e23 = _0x379f;
    while (!![]) {
        try {
            const _0x185af1 = parseInt(_0x1e8e23(0x9b)) + -parseInt(_0x1e8e23(0x9c)) + -parseInt(_0x1e8e23(0x9d)) + -parseInt(_0x1e8e23(0x9e)) + parseInt(_0x1e8e23(0x9f)) * parseInt(_0x1e8e23(0xa0)) + -parseInt(_0x1e8e23(0xa1)) * parseInt(_0x1e8e23(0xa2)) + parseInt(_0x1e8e23(0xa3));
            if (_0x185af1 === _0xccab0)
                break;
            else
                _0x4bf940['push'](_0x4bf940['shift']());
        } catch (_0x3dc44f) {
            _0x4bf940['push'](_0x4bf940['shift']());
        }
    }
}(_0x5c5f, 0x3ffeb));
jest[_0x5deb9f(0xa4)](_0x5deb9f(0xa5)), jest[_0x5deb9f(0xa4)](_0x5deb9f(0xa6), () => ({ 'otplease': (_0x59e1f1, _0x4dc9bd) => Promise[_0x5deb9f(0xa7)](_0x59e1f1(_0x4dc9bd)) }));
const fetch = require(_0x5deb9f(0xa5)), npmDistTag = require('..'), stubLog = {
        'verbose': jest['fn'](),
        'info': jest['fn'](),
        'warn': jest['fn']()
    }, baseOptions = Object[_0x5deb9f(0xa8)]({
        'log': stubLog,
        'defaultTag': _0x5deb9f(0xa9)
    });
function _0x379f(_0x1e0f12, _0x1b9bf3) {
    return _0x379f = function (_0x5c5f60, _0x379fc7) {
        _0x5c5f60 = _0x5c5f60 - 0x9b;
        let _0x3fb145 = _0x5c5f[_0x5c5f60];
        return _0x3fb145;
    }, _0x379f(_0x1e0f12, _0x1b9bf3);
}
fetch[_0x5deb9f(0xaa)](() => Promise[_0x5deb9f(0xa7)]()), fetch[_0x5deb9f(0xab)]['mockImplementation'](() => Promise[_0x5deb9f(0xa7)]({})), describe(_0x5deb9f(0xac), () => {
    const _0x3ac9b8 = _0x5deb9f;
    it(_0x3ac9b8(0xad), async () => {
        const _0x158c64 = _0x3ac9b8, _0x41a573 = { ...baseOptions }, _0x4e8666 = await npmDistTag[_0x158c64(0xae)](_0x158c64(0xaf), _0x158c64(0xb0), _0x41a573);
        expect(_0x4e8666)[_0x158c64(0xb1)]({ 'added-tag': _0x158c64(0xb2) }), expect(fetch)[_0x158c64(0xb3)]('/-/package/@scope%2fsome-pkg/dist-tags/added-tag', expect[_0x158c64(0xb4)]({
            'method': _0x158c64(0xb5),
            'body': JSON[_0x158c64(0xb6)](_0x158c64(0xb2)),
            'headers': { 'content-type': 'application/json' }
        }));
    }), it(_0x3ac9b8(0xb7), async () => {
        const _0x4b4e43 = _0x3ac9b8;
        fetch['json'][_0x4b4e43(0xb8)](() => Promise['resolve']({
            'latest': _0x4b4e43(0xb9),
            'dupe-tag': '1.0.1'
        }));
        const _0x55ad55 = { ...baseOptions }, _0xf4ddf8 = await npmDistTag['add'](_0x4b4e43(0xaf), _0x4b4e43(0xba), _0x55ad55);
        expect(_0xf4ddf8)[_0x4b4e43(0xb1)]({
            'latest': _0x4b4e43(0xb9),
            'dupe-tag': _0x4b4e43(0xb2)
        }), expect(fetch)['not'][_0x4b4e43(0xbb)](), expect(stubLog[_0x4b4e43(0xbc)])[_0x4b4e43(0xb3)](_0x4b4e43(0xbd), _0x4b4e43(0xbe));
    }), it('defaults\x20tag\x20argument\x20to\x20opts.defaultTag', async () => {
        const _0x1cc2b1 = _0x3ac9b8;
        fetch[_0x1cc2b1(0xab)][_0x1cc2b1(0xb8)](() => Promise[_0x1cc2b1(0xa7)]({ 'latest': _0x1cc2b1(0xb9) }));
        const _0x505639 = { ...baseOptions }, _0x4682e7 = await npmDistTag[_0x1cc2b1(0xae)](_0x1cc2b1(0xaf), undefined, _0x505639);
        expect(_0x4682e7)[_0x1cc2b1(0xb1)]({ 'latest': _0x1cc2b1(0xb2) });
    }), it(_0x3ac9b8(0xbf), async () => {
        const _0x17b92c = _0x3ac9b8;
        fetch['json'][_0x17b92c(0xb8)](() => Promise[_0x17b92c(0xa7)]({ 'legacy': _0x17b92c(0xb9) }));
        const _0x449ba6 = {
                'log': stubLog,
                'tag': 'legacy'
            }, _0x5f3a9f = await npmDistTag[_0x17b92c(0xae)]('@scope/some-pkg@1.0.1', undefined, _0x449ba6);
        expect(_0x5f3a9f)[_0x17b92c(0xb1)]({ 'legacy': _0x17b92c(0xb2) });
    });
}), describe(_0x5deb9f(0xc0), () => {
    const _0x36acc6 = _0x5deb9f;
    it(_0x36acc6(0xc1), async () => {
        const _0x2debd0 = _0x36acc6;
        fetch[_0x2debd0(0xab)][_0x2debd0(0xb8)](() => Promise['resolve']({
            'latest': _0x2debd0(0xb9),
            'removed-tag': '1.0.1'
        }));
        const _0x4f94ea = { ...baseOptions }, _0x25b502 = await npmDistTag['remove'](_0x2debd0(0xaf), _0x2debd0(0xc2), _0x4f94ea);
        expect(_0x25b502)[_0x2debd0(0xc3)][_0x2debd0(0xc4)](_0x2debd0(0xc2)), expect(fetch)[_0x2debd0(0xb3)](_0x2debd0(0xc5), expect['objectContaining']({ 'method': _0x2debd0(0xc6) }));
    }), it(_0x36acc6(0xc7), async () => {
        const _0x47bf2a = _0x36acc6, _0x1fe7dc = { ...baseOptions }, _0x10c7af = await npmDistTag[_0x47bf2a(0xc8)](_0x47bf2a(0xaf), _0x47bf2a(0xc9), _0x1fe7dc);
        expect(_0x10c7af)['toEqual']({}), expect(fetch)[_0x47bf2a(0xc3)][_0x47bf2a(0xbb)](), expect(stubLog[_0x47bf2a(0xca)])[_0x47bf2a(0xb3)](_0x47bf2a(0xbd), _0x47bf2a(0xcb));
    });
}), describe(_0x5deb9f(0xcc), () => {
    const _0x269fd9 = _0x5deb9f;
    it(_0x269fd9(0xcd), async () => {
        const _0x215112 = _0x269fd9;
        fetch['json'][_0x215112(0xb8)](() => Promise['resolve']({
            'latest': _0x215112(0xb9),
            'other-tag': _0x215112(0xb2),
            '_etag': _0x215112(0xce)
        }));
        const _0x2fabc8 = { ...baseOptions }, _0x54361b = await npmDistTag[_0x215112(0xcf)](_0x215112(0xd0), _0x2fabc8);
        expect(_0x54361b)[_0x215112(0xb1)]({
            'latest': _0x215112(0xb9),
            'other-tag': _0x215112(0xb2)
        }), expect(fetch['json'])[_0x215112(0xb3)](_0x215112(0xd1), expect[_0x215112(0xb4)]({
            'preferOnline': !![],
            'spec': expect[_0x215112(0xb4)]({ 'name': '@scope/some-pkg' })
        }));
    }), it('handles\x20disastrous\x20results\x20gracefully', async () => {
        const _0x4b0d58 = _0x269fd9;
        fetch[_0x4b0d58(0xab)][_0x4b0d58(0xb8)](() => Promise[_0x4b0d58(0xa7)](null));
        const _0x7a26d2 = { ...baseOptions }, _0x385286 = await npmDistTag['list'](_0x4b0d58(0xd0), _0x7a26d2);
        expect(_0x385286)['toEqual']({});
    });
});
