const path = require(_0x588930(362)), {parseMD} = require('.');
describe(_0x588930(363), () => {
    const _0x285db9 = _0x588930;
    it(_0x285db9(364), async () => {
        const _0x1c7b55 = _0x285db9, _0x1f06e8 = await parseMD(path[_0x1c7b55(365)](__dirname, _0x1c7b55(366)));
        expect(_0x1f06e8)['toMatchSnapshot']();
    }), it(_0x285db9(367), async () => {
        const _0x2ab83a = _0x285db9, _0x5a022a = await parseMD(path[_0x2ab83a(365)](__dirname, _0x2ab83a(368)));
        expect(_0x5a022a)[_0x2ab83a(369)]();
    }), it(_0x285db9(370), async () => {
        const _0x214c1a = _0x285db9, _0x154955 = await parseMD(path[_0x214c1a(365)](__dirname, _0x214c1a(371)));
        expect(_0x154955)[_0x214c1a(369)]();
    }), it('should parse frontmatter', async () => {
        const _0x35336b = _0x285db9, _0x5be0c4 = await parseMD(path[_0x35336b(365)](__dirname, _0x35336b(372)));
        expect(_0x5be0c4)['toMatchSnapshot']();
    }), it(_0x285db9(373), async () => {
        const _0x2369f5 = _0x285db9, _0x2c1eb9 = await parseMD(path[_0x2369f5(365)](__dirname, '__fixtures__/with-gfm.md'));
        expect(_0x2c1eb9)[_0x2369f5(369)]();
    }), it(_0x285db9(374), async () => {
        const _0x19499a = _0x285db9, _0x5c5026 = await parseMD(path[_0x19499a(365)](__dirname, '__fixtures__/with-yaml.md'));
        expect(_0x5c5026)[_0x19499a(369)]();
    }), it(_0x285db9(375), async () => {
        const _0x58b6f3 = _0x285db9, _0x2d668e = await parseMD(path[_0x58b6f3(365)](__dirname, _0x58b6f3(376)));
        expect(_0x2d668e)[_0x58b6f3(369)]();
    }), it(_0x285db9(377), async () => {
        const _0x351647 = _0x285db9, _0x36ebbf = await parseMD(path[_0x351647(365)](__dirname, _0x351647(378)));
        expect(_0x36ebbf)[_0x351647(369)]();
    });
});