import * as _0x41fbd0 from './config';
describe('when\x20working\x20with\x20site\x20config', function () {
    beforeEach(() => {
        _0x41fbd0['setSiteConfig']({});
    }), it('should\x20set\x20site\x20config\x20and\x20config\x20properly', function () {
        let _0x17052d = {
            'foo': 'bar',
            'bar': 0x0
        };
        _0x41fbd0['setSiteConfig'](_0x17052d);
        let _0x45a925 = _0x41fbd0['getSiteConfig'](), _0xd8bfa5 = _0x41fbd0['getConfig']();
        expect(_0x45a925['foo'])['toEqual'](_0x17052d['foo']), expect(_0x45a925['bar'])['toEqual'](_0x17052d['bar']), expect(_0x45a925)['toEqual'](_0xd8bfa5);
    }), it('should\x20respect\x20secure\x20keys\x20when\x20applying\x20directives', function () {
        let _0x37a595 = {
            'foo': 'bar',
            'bar': 'cant-be-changed',
            'secure': [
                ..._0x41fbd0['defaultConfig']['secure'],
                'bar'
            ]
        };
        _0x41fbd0['setSiteConfig'](_0x37a595);
        const _0x3291af = {
                'foo': 'baf',
                'bar': 'should-not-be-allowed'
            }, _0x1a23b0 = _0x41fbd0['updateCurrentConfig'](_0x37a595, [_0x3291af]);
        expect(_0x1a23b0['foo'])['toEqual'](_0x3291af['foo']), expect(_0x1a23b0['bar'])['toBe'](_0x37a595['bar']);
    }), it('should\x20set\x20reset\x20config\x20properly', function () {
        let _0xa33540 = {
            'foo': 'bar',
            'bar': 0x0
        };
        _0x41fbd0['setSiteConfig'](_0xa33540);
        let _0x2c6c1d = { 'foo': 'baf' };
        _0x41fbd0['setConfig'](_0x2c6c1d);
        let _0x1b4cda = _0x41fbd0['getConfig']();
        expect(_0x1b4cda['foo'])['toEqual'](_0x2c6c1d['foo']), _0x41fbd0['reset']();
        let _0x4182e3 = _0x41fbd0['getConfig']();
        expect(_0x4182e3['foo'])['toEqual'](_0xa33540['foo']);
        let _0x2a2c00 = _0x41fbd0['getSiteConfig']();
        expect(_0x2a2c00['foo'])['toEqual'](_0xa33540['foo']);
    }), it('should\x20set\x20global\x20reset\x20config\x20properly', function () {
        let _0x16e363 = {
            'foo': 'bar',
            'bar': 0x0
        };
        _0x41fbd0['setSiteConfig'](_0x16e363);
        let _0x2dc403 = _0x41fbd0['getSiteConfig']();
        expect(_0x2dc403['foo'])['toEqual'](_0x16e363['foo']);
        let _0x6625fa = _0x41fbd0['getConfig']();
        expect(_0x6625fa['foo'])['toEqual'](_0x16e363['foo']), _0x41fbd0['setConfig']({ 'foobar': 'bar0' });
        let _0x18dbdd = _0x41fbd0['getConfig']();
        expect(_0x18dbdd['foobar'])['toEqual']('bar0'), _0x41fbd0['reset']();
        let _0x467ac5 = _0x41fbd0['getConfig']();
        expect(_0x467ac5['foobar'])['toBeUndefined']();
    });
});
