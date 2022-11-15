const _0x3154 = [
    'not',
    'toBeTruthy',
    'config',
    './fixtures/skip-comment-config.js',
    'FOOBAR:',
    'output',
    '1260975ommbGW',
    '8hnsnFd',
    '24285bcVGLC',
    '227qcLLFo',
    '678jWSokg',
    '49300AWcMHU',
    '29ACQVxy',
    '1079249NexOKU',
    '200067NhPEat',
    '2CfhGEw',
    '338597sTqELN',
    'path',
    'lodash',
    'skip-comment',
    'defaultsDeep',
    'module',
    'error',
    'addPlugin',
    'executeOnFiles',
    'join',
    './fixtures/skip-comment-pass.js',
    'errorCount',
    'toBe',
    'skip\x20test\x20without\x20comment',
    './fixtures/skip-comment-fail.js',
    'messages',
    'message',
    'toContain',
    'NOTE:',
    'TODO:',
    'describe'
];
const _0x5ee08e = _0x3297;
(function (_0x324a9c, _0x213b4f) {
    const _0x1827d3 = _0x3297;
    while (!![]) {
        try {
            const _0x27e9f8 = -parseInt(_0x1827d3(0x16c)) + -parseInt(_0x1827d3(0x16d)) * parseInt(_0x1827d3(0x16e)) + -parseInt(_0x1827d3(0x16f)) * -parseInt(_0x1827d3(0x170)) + parseInt(_0x1827d3(0x171)) * parseInt(_0x1827d3(0x172)) + parseInt(_0x1827d3(0x173)) + parseInt(_0x1827d3(0x174)) + parseInt(_0x1827d3(0x175)) * -parseInt(_0x1827d3(0x176));
            if (_0x27e9f8 === _0x213b4f)
                break;
            else
                _0x324a9c['push'](_0x324a9c['shift']());
        } catch (_0x491a9a) {
            _0x324a9c['push'](_0x324a9c['shift']());
        }
    }
}(_0x3154, 0xb2569));
const path = require(_0x5ee08e(0x177)), CLIEngine = require('eslint')['CLIEngine'], plugin = require('..'), _ = require(_0x5ee08e(0x178)), ruleName = _0x5ee08e(0x179), pluginName = '__plugin__';
function execute(_0x155501, _0x50c6a6 = {}) {
    const _0x3f119f = _0x5ee08e, _0x4e8931 = _[_0x3f119f(0x17a)](_0x50c6a6, {
            'fix': !![],
            'config': {
                'parserOptions': {
                    'ecmaVersion': 0x7e2,
                    'sourceType': _0x3f119f(0x17b)
                }
            }
        }), _0x100904 = new CLIEngine({
            'parserOptions': {
                'ecmaVersion': 0x7e2,
                'sourceType': 'module'
            },
            'rules': { [pluginName + '/' + ruleName]: [_0x3f119f(0x17c)] },
            ..._0x4e8931,
            'ignore': ![],
            'useEslintrc': ![],
            'plugins': [pluginName]
        });
    _0x100904[_0x3f119f(0x17d)](pluginName, plugin);
    const _0x43fd79 = _0x100904[_0x3f119f(0x17e)]([path[_0x3f119f(0x17f)](__dirname, _0x155501)])['results'][0x0];
    return _0x43fd79;
}
function _0x3297(_0x3150d5, _0x3fb87) {
    return _0x3297 = function (_0x315416, _0x32975c) {
        _0x315416 = _0x315416 - 0x16c;
        let _0x4a93af = _0x3154[_0x315416];
        return _0x4a93af;
    }, _0x3297(_0x3150d5, _0x3fb87);
}
describe(_0x5ee08e(0x179), () => {
    const _0x269603 = _0x5ee08e;
    it('skip\x20test\x20with\x20comment', async () => {
        const _0x12bb75 = _0x3297, _0x300745 = _0x12bb75(0x180), _0x562f7b = execute(_0x300745, { 'fix': !![] });
        expect(_0x562f7b[_0x12bb75(0x181)])[_0x12bb75(0x182)](0x0);
    }), it(_0x269603(0x183), async () => {
        const _0x3ec792 = _0x269603, _0x4ca2fb = _0x3ec792(0x184), _0x13b01c = execute(_0x4ca2fb, { 'fix': !![] });
        expect(_0x13b01c[_0x3ec792(0x181)])['toBe'](0x3), expect(_0x13b01c[_0x3ec792(0x185)][0x0][_0x3ec792(0x186)])['toContain']('it'), expect(_0x13b01c[_0x3ec792(0x185)][0x0]['message'])[_0x3ec792(0x187)](_0x3ec792(0x188)), expect(_0x13b01c[_0x3ec792(0x185)][0x0]['message'])[_0x3ec792(0x187)](_0x3ec792(0x189)), expect(_0x13b01c['messages'][0x1]['message'])['toContain'](_0x3ec792(0x18a)), expect(_0x13b01c['messages'][0x1][_0x3ec792(0x186)])[_0x3ec792(0x187)]('NOTE:'), expect(_0x13b01c[_0x3ec792(0x185)][0x2]['message'])[_0x3ec792(0x187)]('context'), expect(_0x13b01c[_0x3ec792(0x185)][0x2][_0x3ec792(0x186)])[_0x3ec792(0x187)](_0x3ec792(0x188)), expect(_0x13b01c['output'])[_0x3ec792(0x18b)][_0x3ec792(0x18c)]();
    }), describe(_0x269603(0x18d), () => {
        const _0x231afa = _0x269603;
        it(_0x231afa(0x183), async () => {
            const _0xaa1420 = _0x231afa, _0x2cc117 = _0xaa1420(0x18e), _0x55b57f = execute(_0x2cc117, {
                    'fix': !![],
                    'rules': {
                        [pluginName + '/' + ruleName]: [
                            _0xaa1420(0x17c),
                            { 'commentTokens': ['FOOBAR:'] }
                        ]
                    }
                });
            expect(_0x55b57f[_0xaa1420(0x181)])[_0xaa1420(0x182)](0x1), expect(_0x55b57f[_0xaa1420(0x185)][0x0]['message'])[_0xaa1420(0x187)]('it'), expect(_0x55b57f[_0xaa1420(0x185)][0x0]['message'])['toContain'](_0xaa1420(0x18f)), expect(_0x55b57f[_0xaa1420(0x190)])['not'][_0xaa1420(0x18c)]();
        });
    });
});
