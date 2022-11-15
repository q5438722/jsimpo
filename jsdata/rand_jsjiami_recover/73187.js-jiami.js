const path = require('path');
const {parseMD} = require('.');
describe('challenge parser', () => {
    it('should parse a simple md file', async () => {
        const _0x5dd020 = await parseMD(path['resolve'](__dirname, '__fixtures__/simple.md'));
        expect(_0x5dd020)['toMatchSnapshot']();
    });
    it('should parse a more realistic md file', async () => {
        const _0x192db9 = await parseMD(path['resolve'](__dirname, '__fixtures__/realistic.md'));
        expect(_0x192db9)['toMatchSnapshot']();
    });
    it('should import md from other files', async () => {
        const _0x50af25 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-imports.md'));
        expect(_0x50af25)['toMatchSnapshot']();
    });
    it('should parse frontmatter', async () => {
        const _0x4414e6 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-frontmatter.md'));
        expect(_0x4414e6)['toMatchSnapshot']();
    });
    it('should parse gfm strikethrough and frontmatter', async () => {
        const _0x16f84e = await parseMD(path['resolve'](__dirname, '__fixtures__/with-gfm.md'));
        expect(_0x16f84e)['toMatchSnapshot']();
    });
    it('should not mix other YAML with the frontmatter', async () => {
        const _0x4b3841 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-yaml.md'));
        expect(_0x4b3841)['toMatchSnapshot']();
    });
    it('it should parse video questions', async () => {
        const _0x78d203 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-video-question.md'));
        expect(_0x78d203)['toMatchSnapshot']();
    });
    it('it should not parse directives we do not use', async () => {
        const _0x151a0d = await parseMD(path['resolve'](__dirname, '__fixtures__/with-directives.md'));
        expect(_0x151a0d)['toMatchSnapshot']();
    });
});