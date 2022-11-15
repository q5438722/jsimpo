const _0x2bca = [
    '494028nlTpdw',
    '58lWoKCJ',
    '125861xiYMqt',
    'path',
    'challenge\x20parser',
    'should\x20parse\x20a\x20simple\x20md\x20file',
    'resolve',
    '__fixtures__/simple.md',
    'should\x20parse\x20a\x20more\x20realistic\x20md\x20file',
    '__fixtures__/realistic.md',
    'toMatchSnapshot',
    'should\x20import\x20md\x20from\x20other\x20files',
    '__fixtures__/with-imports.md',
    '__fixtures__/with-frontmatter.md',
    'should\x20parse\x20gfm\x20strikethrough\x20and\x20frontmatter',
    'should\x20not\x20mix\x20other\x20YAML\x20with\x20the\x20frontmatter',
    'it\x20should\x20parse\x20video\x20questions',
    '__fixtures__/with-video-question.md',
    'it\x20should\x20not\x20parse\x20directives\x20we\x20do\x20not\x20use',
    '__fixtures__/with-directives.md',
    '1xPkWBP',
    '490904iEHNRZ',
    '114415RrizYi',
    '15dDRSKB',
    '703202pGkqzw',
    '73GyTqTs',
    '22035VwWfky',
    '25Ivtspc',
    '54167jLrHcY'
];
function _0x1c04(_0x5dbc86, _0x1aef79) {
    return _0x1c04 = function (_0x2bca85, _0x1c0455) {
        _0x2bca85 = _0x2bca85 - 0x15e;
        let _0x51fcc0 = _0x2bca[_0x2bca85];
        return _0x51fcc0;
    }, _0x1c04(_0x5dbc86, _0x1aef79);
}
const _0x588930 = _0x1c04;
(function (_0xa86e32, _0x466ce2) {
    const _0x3e1725 = _0x1c04;
    while (!![]) {
        try {
            const _0x406a64 = -parseInt(_0x3e1725(0x15e)) * parseInt(_0x3e1725(0x15f)) + -parseInt(_0x3e1725(0x160)) * parseInt(_0x3e1725(0x161)) + -parseInt(_0x3e1725(0x162)) + parseInt(_0x3e1725(0x163)) * -parseInt(_0x3e1725(0x164)) + -parseInt(_0x3e1725(0x165)) * parseInt(_0x3e1725(0x166)) + -parseInt(_0x3e1725(0x167)) + -parseInt(_0x3e1725(0x168)) * -parseInt(_0x3e1725(0x169));
            if (_0x406a64 === _0x466ce2)
                break;
            else
                _0xa86e32['push'](_0xa86e32['shift']());
        } catch (_0xc0532f) {
            _0xa86e32['push'](_0xa86e32['shift']());
        }
    }
}(_0x2bca, 0xe3bf1));
const path = require(_0x588930(0x16a)), {parseMD} = require('.');
describe(_0x588930(0x16b), () => {
    const _0x285db9 = _0x588930;
    it(_0x285db9(0x16c), async () => {
        const _0x1c7b55 = _0x285db9, _0x1f06e8 = await parseMD(path[_0x1c7b55(0x16d)](__dirname, _0x1c7b55(0x16e)));
        expect(_0x1f06e8)['toMatchSnapshot']();
    }), it(_0x285db9(0x16f), async () => {
        const _0x2ab83a = _0x285db9, _0x5a022a = await parseMD(path[_0x2ab83a(0x16d)](__dirname, _0x2ab83a(0x170)));
        expect(_0x5a022a)[_0x2ab83a(0x171)]();
    }), it(_0x285db9(0x172), async () => {
        const _0x214c1a = _0x285db9, _0x154955 = await parseMD(path[_0x214c1a(0x16d)](__dirname, _0x214c1a(0x173)));
        expect(_0x154955)[_0x214c1a(0x171)]();
    }), it('should\x20parse\x20frontmatter', async () => {
        const _0x35336b = _0x285db9, _0x5be0c4 = await parseMD(path[_0x35336b(0x16d)](__dirname, _0x35336b(0x174)));
        expect(_0x5be0c4)['toMatchSnapshot']();
    }), it(_0x285db9(0x175), async () => {
        const _0x2369f5 = _0x285db9, _0x2c1eb9 = await parseMD(path[_0x2369f5(0x16d)](__dirname, '__fixtures__/with-gfm.md'));
        expect(_0x2c1eb9)[_0x2369f5(0x171)]();
    }), it(_0x285db9(0x176), async () => {
        const _0x19499a = _0x285db9, _0x5c5026 = await parseMD(path[_0x19499a(0x16d)](__dirname, '__fixtures__/with-yaml.md'));
        expect(_0x5c5026)[_0x19499a(0x171)]();
    }), it(_0x285db9(0x177), async () => {
        const _0x58b6f3 = _0x285db9, _0x2d668e = await parseMD(path[_0x58b6f3(0x16d)](__dirname, _0x58b6f3(0x178)));
        expect(_0x2d668e)[_0x58b6f3(0x171)]();
    }), it(_0x285db9(0x179), async () => {
        const _0x351647 = _0x285db9, _0x36ebbf = await parseMD(path[_0x351647(0x16d)](__dirname, _0x351647(0x17a)));
        expect(_0x36ebbf)[_0x351647(0x171)]();
    });
});
