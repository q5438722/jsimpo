'use strict';
jest['mock']('npm-registry-fetch'), jest['mock']('@lerna/otplease', () => ({ 'otplease': (_0x4660ca, _0xc568c4) => Promise['resolve'](_0x4660ca(_0xc568c4)) }));
const fetch = require('npm-registry-fetch'), npmDistTag = require('..'), stubLog = {
        'verbose': jest['fn'](),
        'info': jest['fn'](),
        'warn': jest['fn']()
    }, baseOptions = Object['freeze']({
        'log': stubLog,
        'defaultTag': 'latest'
    });
fetch['mockImplementation'](() => Promise['resolve']()), fetch['json']['mockImplementation'](() => Promise['resolve']({})), describe('npmDistTag.add()', () => {
    it('adds\x20a\x20dist-tag\x20for\x20a\x20given\x20package@version', async () => {
        const _0x251b4f = { ...baseOptions }, _0x398b47 = await npmDistTag['add']('@scope/some-pkg@1.0.1', 'added-tag', _0x251b4f);
        expect(_0x398b47)['toEqual']({ 'added-tag': '1.0.1' }), expect(fetch)['toHaveBeenLastCalledWith']('/-/package/@scope%2fsome-pkg/dist-tags/added-tag', expect['objectContaining']({
            'method': 'PUT',
            'body': JSON['stringify']('1.0.1'),
            'headers': { 'content-type': 'application/json' }
        }));
    }), it('does\x20not\x20attempt\x20to\x20add\x20duplicate\x20of\x20existing\x20tag', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'dupe-tag': '1.0.1'
        }));
        const _0x3c393f = { ...baseOptions }, _0x1b2ecb = await npmDistTag['add']('@scope/some-pkg@1.0.1', 'dupe-tag', _0x3c393f);
        expect(_0x1b2ecb)['toEqual']({
            'latest': '1.0.0',
            'dupe-tag': '1.0.1'
        }), expect(fetch)['not']['toHaveBeenCalled'](), expect(stubLog['warn'])['toHaveBeenLastCalledWith']('dist-tag', '@scope/some-pkg@dupe-tag\x20already\x20set\x20to\x201.0.1');
    }), it('defaults\x20tag\x20argument\x20to\x20opts.defaultTag', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({ 'latest': '1.0.0' }));
        const _0x157eaf = { ...baseOptions }, _0x32bdb3 = await npmDistTag['add']('@scope/some-pkg@1.0.1', undefined, _0x157eaf);
        expect(_0x32bdb3)['toEqual']({ 'latest': '1.0.1' });
    }), it('supports\x20npm\x20v6\x20opts.tag\x20fallback', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({ 'legacy': '1.0.0' }));
        const _0x137ede = {
                'log': stubLog,
                'tag': 'legacy'
            }, _0x35e06c = await npmDistTag['add']('@scope/some-pkg@1.0.1', undefined, _0x137ede);
        expect(_0x35e06c)['toEqual']({ 'legacy': '1.0.1' });
    });
}), describe('npmDistTag.remove()', () => {
    it('removes\x20an\x20existing\x20dist-tag\x20for\x20a\x20given\x20package', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'removed-tag': '1.0.1'
        }));
        const _0x7003b0 = { ...baseOptions }, _0x1353c5 = await npmDistTag['remove']('@scope/some-pkg@1.0.1', 'removed-tag', _0x7003b0);
        expect(_0x1353c5)['not']['toHaveProperty']('removed-tag'), expect(fetch)['toHaveBeenLastCalledWith']('/-/package/@scope%2fsome-pkg/dist-tags/removed-tag', expect['objectContaining']({ 'method': 'DELETE' }));
    }), it('does\x20not\x20attempt\x20removal\x20of\x20nonexistent\x20tag', async () => {
        const _0x3e6e30 = { ...baseOptions }, _0x151720 = await npmDistTag['remove']('@scope/some-pkg@1.0.1', 'missing-tag', _0x3e6e30);
        expect(_0x151720)['toEqual']({}), expect(fetch)['not']['toHaveBeenCalled'](), expect(stubLog['info'])['toHaveBeenLastCalledWith']('dist-tag', '\x22missing-tag\x22\x20is\x20not\x20a\x20dist-tag\x20on\x20@scope/some-pkg');
    });
}), describe('npmDistTag.list()', () => {
    it('returns\x20dictionary\x20of\x20dist-tags', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'other-tag': '1.0.1',
            '_etag': 'should-be-removed'
        }));
        const _0x2e4234 = { ...baseOptions }, _0x12a3b5 = await npmDistTag['list']('@scope/some-pkg', _0x2e4234);
        expect(_0x12a3b5)['toEqual']({
            'latest': '1.0.0',
            'other-tag': '1.0.1'
        }), expect(fetch['json'])['toHaveBeenLastCalledWith']('/-/package/@scope%2fsome-pkg/dist-tags', expect['objectContaining']({
            'preferOnline': !![],
            'spec': expect['objectContaining']({ 'name': '@scope/some-pkg' })
        }));
    }), it('handles\x20disastrous\x20results\x20gracefully', async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve'](null));
        const _0x58e5bc = { ...baseOptions }, _0x70917f = await npmDistTag['list']('@scope/some-pkg', _0x58e5bc);
        expect(_0x70917f)['toEqual']({});
    });
});
