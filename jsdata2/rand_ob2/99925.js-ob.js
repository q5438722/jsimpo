const _0x1b98 = [
    'background:\x20#2E495E;border-radius:\x200.5em;color:\x20white;font-weight:\x20bold;padding:\x202px\x200.5em;',
    'toHaveBeenCalled',
    'toHaveBeenCalledWith',
    '250608jJhziD',
    '7249oUEEQO',
    '6SRzAyl',
    '344440uApkoS',
    '371169clmxzN',
    '6997zIfleE',
    '6huFpYN',
    '547262Xxjbbw',
    '811755vLhjMS',
    'http://localhost:',
    'basic\x20dev',
    'basic',
    '.nuxt-dev',
    'test-app.js',
    'test-app.[contenthash].js',
    'test-[name].[contenthash].js',
    '@scoped/packageA',
    'vue.test.js',
    'modern-test',
    'normal-test',
    'find',
    'test',
    'exclude',
    '.vue',
    '.css',
    'use',
    'length',
    'logs',
    'log',
    'This\x20is\x20a\x20test\x20ssr\x20log',
    'collapsed',
    'ready',
    'build',
    'listen',
    'Check\x20build:done\x20hook\x20called',
    'toBe',
    'Config:\x20build.transpile',
    'vue-test',
    'node_modules/test.js',
    'normalize',
    'node_modules/vue-test',
    'node_modules/vue.test.js',
    'node_modules/@scoped/packageA/src/index.js',
    'node_modules/@scoped/packageB/src/index.js',
    'Config:\x20build.filenames',
    'filename',
    'chunkFilename',
    'toBeCalledWith',
    'Notice:\x20Please\x20do\x20not\x20use\x20contenthash\x20in\x20dev\x20mode\x20to\x20prevent\x20memory\x20leak',
    'Config:\x20build.loaders',
    'keys',
    'toHaveProperty',
    'file',
    'fontUrl',
    'imgUrl',
    'vue',
    'cssModules',
    'sass',
    'scss',
    'stylus',
    'vueStyle',
    'modules',
    'localIdentName',
    '[hash:base64:6]',
    'options',
    'Config:\x20preset-env\x20and\x20cssnano\x20are\x20at\x20then\x20end\x20of\x20postcss\x20plugins',
    'plugins',
    'map',
    'toEqual',
    'postcss-url',
    'nuxt-test',
    'cssnano',
    '/stateless',
    'server',
    'body',
    'toContain',
    '<h1>My\x20component!</h1>',
    '__hook_render_routeDone__',
    'close',
    '/__open-in-editor\x20(open-in-editor)',
    '/__open-in-editor?file=pages/index.vue',
    '/__open-in-editor\x20should\x20return\x20error\x20(open-in-editor)',
    '/__open-in-editor?file=',
    'toMatchObject',
    'launch-editor-middleware:\x20required\x20query\x20param\x20\x22file\x22\x20is\x20missing.',
    'renderAndGetWindow',
    '/error',
    'rejects',
    'toThrow',
    '/error\x20should\x20return\x20json\x20format\x20error\x20(Youch)',
    'application/json',
    'text/json;\x20charset=utf-8',
    '/\x20should\x20display\x20ssr\x20log\x20in\x20collapsed\x20group',
    'VirtualConsole',
    'groupEnd'
];
const _0x3833c4 = _0xab71;
(function (_0x46ede1, _0xc359a8) {
    const _0x439639 = _0xab71;
    while (!![]) {
        try {
            const _0x1d7366 = -parseInt(_0x439639(0x92)) + -parseInt(_0x439639(0x93)) * -parseInt(_0x439639(0x94)) + parseInt(_0x439639(0x95)) + parseInt(_0x439639(0x96)) + -parseInt(_0x439639(0x97)) * -parseInt(_0x439639(0x98)) + parseInt(_0x439639(0x99)) + -parseInt(_0x439639(0x9a));
            if (_0x1d7366 === _0xc359a8)
                break;
            else
                _0x46ede1['push'](_0x46ede1['shift']());
        } catch (_0x5f24b1) {
            _0x46ede1['push'](_0x46ede1['shift']());
        }
    }
}(_0x1b98, 0x45d20));
function _0xab71(_0x52f20d, _0x1fddf0) {
    return _0xab71 = function (_0x1b9851, _0xab71a4) {
        _0x1b9851 = _0x1b9851 - 0x92;
        let _0x551327 = _0x1b98[_0x1b9851];
        return _0x551327;
    }, _0xab71(_0x52f20d, _0x1fddf0);
}
import _0x60c545 from 'path';
import _0x4f12e2 from 'jsdom';
import _0x5ea6d0 from 'consola';
import {
    Builder,
    BundleBuilder,
    getPort,
    loadFixture,
    Nuxt,
    rp,
    waitFor
} from '../utils';
let port;
const url = _0x55b4e7 => _0x3833c4(0x9b) + port + _0x55b4e7;
let nuxt = null, builder = null, transpile = null, output = null, loadersOptions, vueLoader, postcssLoader;
describe(_0x3833c4(0x9c), () => {
    const _0x3c9690 = _0x3833c4;
    beforeAll(async () => {
        const _0x22501c = _0xab71, _0x5453f5 = await loadFixture(_0x22501c(0x9d), {
                'dev': !![],
                'debug': !![],
                'buildDir': _0x22501c(0x9e),
                'build': {
                    'filenames': {
                        'app': ({isDev: _0x2074c9}) => {
                            const _0x1c0bff = _0x22501c;
                            return _0x2074c9 ? _0x1c0bff(0x9f) : _0x1c0bff(0xa0);
                        },
                        'chunk': _0x22501c(0xa1)
                    },
                    'transpile': [
                        _0x22501c(0xa2),
                        '@scoped\x5cpackageB',
                        _0x22501c(0xa3),
                        /vue-test/,
                        ({isModern: _0x261a2d}) => _0x261a2d ? _0x22501c(0xa4) : _0x22501c(0xa5)
                    ],
                    'loaders': { 'cssModules': { 'modules': { 'localIdentName': '[hash:base64:6]' } } },
                    'extend'({
                        module: {rules: _0x173435},
                        output: _0x49243f
                    }, {
                        isClient: _0x469919,
                        loaders: _0x143ab3
                    }) {
                        const _0x36bebe = _0x22501c;
                        if (_0x469919) {
                            const _0x500f10 = _0x173435[_0x36bebe(0xa6)](_0x882082 => _0x882082[_0x36bebe(0xa7)]['test']('.jsx'));
                            transpile = _0x507de2 => !_0x500f10[_0x36bebe(0xa8)](_0x507de2), output = _0x49243f, loadersOptions = _0x143ab3, vueLoader = _0x173435[_0x36bebe(0xa6)](_0x30368d => _0x30368d[_0x36bebe(0xa7)][_0x36bebe(0xa7)](_0x36bebe(0xa9)));
                            const _0x5d771b = _0x173435[_0x36bebe(0xa6)](_0x4443c1 => _0x4443c1['test'][_0x36bebe(0xa7)](_0x36bebe(0xaa)))['oneOf'][0x0][_0x36bebe(0xab)];
                            postcssLoader = _0x5d771b[_0x5d771b[_0x36bebe(0xac)] - 0x1];
                        }
                    }
                },
                'hooks': {
                    'vue-renderer:ssr:context': ({nuxt: _0x1e08d7}) => {
                        const _0xf2487a = _0x22501c;
                        _0x1e08d7[_0xf2487a(0xad)] = [{
                                'type': _0xf2487a(0xae),
                                'args': [_0xf2487a(0xaf)]
                            }];
                    }
                },
                'render': { 'ssrLog': _0x22501c(0xb0) }
            });
        nuxt = new Nuxt(_0x5453f5), await nuxt[_0x22501c(0xb1)](), builder = new Builder(nuxt, BundleBuilder), await builder[_0x22501c(0xb2)](), await waitFor(0x7d0), port = await getPort(), await nuxt['server'][_0x22501c(0xb3)](port, 'localhost');
    }), test(_0x3c9690(0xb4), () => {
        const _0x4987d6 = _0x3c9690;
        expect(builder['__hook_built_called__'])[_0x4987d6(0xb5)](!![]);
    }), test(_0x3c9690(0xb6), () => {
        const _0x2c1af4 = _0x3c9690;
        expect(transpile(_0x2c1af4(0xb7)))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545['normalize'](_0x2c1af4(0xb8))))[_0x2c1af4(0xb5)](![]), expect(transpile(_0x60c545[_0x2c1af4(0xb9)](_0x2c1af4(0xba))))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545[_0x2c1af4(0xb9)](_0x2c1af4(0xbb))))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545[_0x2c1af4(0xb9)]('node_modules/test.vue.js')))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545[_0x2c1af4(0xb9)](_0x2c1af4(0xbc))))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545[_0x2c1af4(0xb9)](_0x2c1af4(0xbd))))[_0x2c1af4(0xb5)](!![]), expect(transpile(_0x60c545['normalize']('node_modules/normal-test')))[_0x2c1af4(0xb5)](!![]);
    }), test(_0x3c9690(0xbe), () => {
        const _0x3eb40e = _0x3c9690;
        expect(output[_0x3eb40e(0xbf)])['toBe'](_0x3eb40e(0x9f)), expect(output[_0x3eb40e(0xc0)])[_0x3eb40e(0xb5)]('test-[name].[contenthash].js'), expect(_0x5ea6d0['warn'])[_0x3eb40e(0xc1)](_0x3eb40e(0xc2));
    }), test(_0x3c9690(0xc3), () => {
        const _0x466ea5 = _0x3c9690;
        expect(Object[_0x466ea5(0xc4)](loadersOptions))['toHaveLength'](0xc), expect(loadersOptions)[_0x466ea5(0xc5)](_0x466ea5(0xc6), _0x466ea5(0xc7), _0x466ea5(0xc8), 'pugPlain', _0x466ea5(0xc9), 'css', _0x466ea5(0xca), 'less', _0x466ea5(0xcb), _0x466ea5(0xcc), _0x466ea5(0xcd), _0x466ea5(0xce));
        const {
            cssModules: _0x58ab88,
            vue: _0x1ddbdb
        } = loadersOptions;
        expect(_0x58ab88[_0x466ea5(0xcf)][_0x466ea5(0xd0)])['toBe'](_0x466ea5(0xd1)), expect(vueLoader[_0x466ea5(0xd2)])[_0x466ea5(0xb5)](_0x1ddbdb);
    }), test(_0x3c9690(0xd3), () => {
        const _0x30d65e = _0x3c9690, _0x3332f7 = postcssLoader['options'][_0x30d65e(0xd4)][_0x30d65e(0xd5)](_0xf62aa4 => {
                return _0xf62aa4['postcssPlugin'];
            });
        expect(_0x3332f7)[_0x30d65e(0xd6)]([
            'postcss-import',
            _0x30d65e(0xd7),
            _0x30d65e(0xd8),
            'postcss-preset-env',
            _0x30d65e(0xd9)
        ]);
    }), test(_0x3c9690(0xda), async () => {
        const _0x142c75 = _0x3c9690, _0x3663da = await nuxt[_0x142c75(0xdb)]['renderAndGetWindow'](url(_0x142c75(0xda))), _0x55775e = _0x3663da['document'][_0x142c75(0xdc)]['innerHTML'];
        expect(_0x55775e)[_0x142c75(0xdd)](_0x142c75(0xde)), expect(nuxt[_0x142c75(0xdf)])[_0x142c75(0xb5)](_0x142c75(0xda)), _0x3663da[_0x142c75(0xe0)]();
    }), test(_0x3c9690(0xe1), async () => {
        const _0x309617 = _0x3c9690, {body: _0x25066c} = await rp(url(_0x309617(0xe2)));
        expect(_0x25066c)['toBe']('');
    }), test(_0x3c9690(0xe3), async () => {
        const _0x3718a8 = _0x3c9690;
        await expect(rp(url(_0x3718a8(0xe4))))['rejects'][_0x3718a8(0xe5)]({
            'response': {
                'statusCode': 0x1f4,
                'body': _0x3718a8(0xe6)
            }
        });
    }), test('/error\x20should\x20return\x20error\x20stack\x20trace\x20(Youch)', async () => {
        const _0x958079 = _0x3c9690;
        await expect(nuxt[_0x958079(0xdb)][_0x958079(0xe7)](url(_0x958079(0xe8))))[_0x958079(0xe9)][_0x958079(0xea)]('Resource\x20was\x20not\x20loaded.\x20Status:\x20500');
    }), test(_0x3c9690(0xeb), async () => {
        const _0x2cf821 = _0x3c9690, _0x231333 = { 'headers': { 'accept': _0x2cf821(0xec) } };
        await expect(rp(url(_0x2cf821(0xe8)), _0x231333))[_0x2cf821(0xe9)][_0x2cf821(0xe5)]({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': _0x2cf821(0xed) }
            }
        });
    }), test(_0x3c9690(0xee), async () => {
        const _0xb7e11e = _0x3c9690, _0x434f0 = new _0x4f12e2[(_0xb7e11e(0xef))](), _0x1d5324 = jest['fn'](), _0x5454a4 = jest['fn'](), _0xe9949f = jest['fn']();
        _0x434f0['on']('groupCollapsed', _0x1d5324), _0x434f0['on'](_0xb7e11e(0xf0), _0x5454a4), _0x434f0['on'](_0xb7e11e(0xae), _0xe9949f), await nuxt[_0xb7e11e(0xdb)][_0xb7e11e(0xe7)](url('/'), { 'virtualConsole': _0x434f0 }), expect(_0x1d5324)['toHaveBeenCalledWith']('%cNuxt\x20SSR', _0xb7e11e(0xf1)), expect(_0x5454a4)[_0xb7e11e(0xf2)](), expect(_0xe9949f)[_0xb7e11e(0xf3)]('This\x20is\x20a\x20test\x20ssr\x20log');
    }), afterAll(async () => {
        await builder['close']();
    });
});
