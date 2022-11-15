const path = require('path'), {parseMD} = require('.');
describe('challenge\x20parser', () => {
    it('should\x20parse\x20a\x20simple\x20md\x20file', async () => {
        const _0x28bf6c = await parseMD(path['resolve'](__dirname, '__fixtures__/simple.md'));
        expect(_0x28bf6c)['toMatchSnapshot']();
    }), it('should\x20parse\x20a\x20more\x20realistic\x20md\x20file', async () => {
        const _0x2398e6 = await parseMD(path['resolve'](__dirname, '__fixtures__/realistic.md'));
        expect(_0x2398e6)['toMatchSnapshot']();
    }), it('should\x20import\x20md\x20from\x20other\x20files', async () => {
        const _0x4a2455 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-imports.md'));
        expect(_0x4a2455)['toMatchSnapshot']();
    }), it('should\x20parse\x20frontmatter', async () => {
        const _0x3eb685 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-frontmatter.md'));
        expect(_0x3eb685)['toMatchSnapshot']();
    }), it('should\x20parse\x20gfm\x20strikethrough\x20and\x20frontmatter', async () => {
        const _0x34104a = await parseMD(path['resolve'](__dirname, '__fixtures__/with-gfm.md'));
        expect(_0x34104a)['toMatchSnapshot']();
    }), it('should\x20not\x20mix\x20other\x20YAML\x20with\x20the\x20frontmatter', async () => {
        const _0x431407 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-yaml.md'));
        expect(_0x431407)['toMatchSnapshot']();
    }), it('it\x20should\x20parse\x20video\x20questions', async () => {
        const _0x52abdc = await parseMD(path['resolve'](__dirname, '__fixtures__/with-video-question.md'));
        expect(_0x52abdc)['toMatchSnapshot']();
    }), it('it\x20should\x20not\x20parse\x20directives\x20we\x20do\x20not\x20use', async () => {
        const _0x1534a9 = await parseMD(path['resolve'](__dirname, '__fixtures__/with-directives.md'));
        expect(_0x1534a9)['toMatchSnapshot']();
    });
});
