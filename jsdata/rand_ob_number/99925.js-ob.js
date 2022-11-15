import _0x2e5533 from 'path';
import _0x25f6b7 from 'jsdom';
import _0x14a495 from 'consola';
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
const url = _0x91b239 => 'http://localhost:' + port + _0x91b239;
let nuxt = null, builder = null, transpile = null, output = null, loadersOptions, vueLoader, postcssLoader;
describe('basic\x20dev', () => {
    beforeAll(async () => {
        const _0x52554e = await loadFixture('basic', {
            'dev': !![],
            'debug': !![],
            'buildDir': '.nuxt-dev',
            'build': {
                'filenames': {
                    'app': ({isDev: _0xf59df9}) => {
                        return _0xf59df9 ? 'test-app.js' : 'test-app.[contenthash].js';
                    },
                    'chunk': 'test-[name].[contenthash].js'
                },
                'transpile': [
                    '@scoped/packageA',
                    '@scoped\x5cpackageB',
                    'vue.test.js',
                    /vue-test/,
                    ({isModern: _0x16f070}) => _0x16f070 ? 'modern-test' : 'normal-test'
                ],
                'loaders': { 'cssModules': { 'modules': { 'localIdentName': '[hash:base64:6]' } } },
                'extend'({
                    module: {rules: _0x18d3ec},
                    output: _0x53462b
                }, {
                    isClient: _0x224721,
                    loaders: _0x1f7d78
                }) {
                    if (_0x224721) {
                        const _0x4e49d3 = _0x18d3ec['find'](_0x42c981 => _0x42c981['test']['test']('.jsx'));
                        transpile = _0x2f8ba2 => !_0x4e49d3['exclude'](_0x2f8ba2), output = _0x53462b, loadersOptions = _0x1f7d78, vueLoader = _0x18d3ec['find'](_0x3fb5f7 => _0x3fb5f7['test']['test']('.vue'));
                        const _0x322599 = _0x18d3ec['find'](_0xf9adb6 => _0xf9adb6['test']['test']('.css'))['oneOf'][0x1d * -0x13 + -0x249b + 0x26c2]['use'];
                        postcssLoader = _0x322599[_0x322599['length'] - (0x110c + 0x1ca2 + 0x427 * -0xb)];
                    }
                }
            },
            'hooks': {
                'vue-renderer:ssr:context': ({nuxt: _0x4b8dd6}) => {
                    _0x4b8dd6['logs'] = [{
                            'type': 'log',
                            'args': ['This\x20is\x20a\x20test\x20ssr\x20log']
                        }];
                }
            },
            'render': { 'ssrLog': 'collapsed' }
        });
        nuxt = new Nuxt(_0x52554e), await nuxt['ready'](), builder = new Builder(nuxt, BundleBuilder), await builder['build'](), await waitFor(0x1956 + 0x102f * 0x2 + -0x31e4), port = await getPort(), await nuxt['server']['listen'](port, 'localhost');
    }), test('Check\x20build:done\x20hook\x20called', () => {
        expect(builder['__hook_built_called__'])['toBe'](!![]);
    }), test('Config:\x20build.transpile', () => {
        expect(transpile('vue-test'))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/test.js')))['toBe'](![]), expect(transpile(_0x2e5533['normalize']('node_modules/vue-test')))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/vue.test.js')))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/test.vue.js')))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/@scoped/packageA/src/index.js')))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/@scoped/packageB/src/index.js')))['toBe'](!![]), expect(transpile(_0x2e5533['normalize']('node_modules/normal-test')))['toBe'](!![]);
    }), test('Config:\x20build.filenames', () => {
        expect(output['filename'])['toBe']('test-app.js'), expect(output['chunkFilename'])['toBe']('test-[name].[contenthash].js'), expect(_0x14a495['warn'])['toBeCalledWith']('Notice:\x20Please\x20do\x20not\x20use\x20contenthash\x20in\x20dev\x20mode\x20to\x20prevent\x20memory\x20leak');
    }), test('Config:\x20build.loaders', () => {
        expect(Object['keys'](loadersOptions))['toHaveLength'](0x75b + -0x26e0 + -0x1f91 * -0x1), expect(loadersOptions)['toHaveProperty']('file', 'fontUrl', 'imgUrl', 'pugPlain', 'vue', 'css', 'cssModules', 'less', 'sass', 'scss', 'stylus', 'vueStyle');
        const {
            cssModules: _0xd15351,
            vue: _0x32aa7d
        } = loadersOptions;
        expect(_0xd15351['modules']['localIdentName'])['toBe']('[hash:base64:6]'), expect(vueLoader['options'])['toBe'](_0x32aa7d);
    }), test('Config:\x20preset-env\x20and\x20cssnano\x20are\x20at\x20then\x20end\x20of\x20postcss\x20plugins', () => {
        const _0x1d4de5 = postcssLoader['options']['plugins']['map'](_0x40da8a => {
            return _0x40da8a['postcssPlugin'];
        });
        expect(_0x1d4de5)['toEqual']([
            'postcss-import',
            'postcss-url',
            'nuxt-test',
            'postcss-preset-env',
            'cssnano'
        ]);
    }), test('/stateless', async () => {
        const _0x514cad = await nuxt['server']['renderAndGetWindow'](url('/stateless')), _0x53a609 = _0x514cad['document']['body']['innerHTML'];
        expect(_0x53a609)['toContain']('<h1>My\x20component!</h1>'), expect(nuxt['__hook_render_routeDone__'])['toBe']('/stateless'), _0x514cad['close']();
    }), test('/__open-in-editor\x20(open-in-editor)', async () => {
        const {body: _0x37be71} = await rp(url('/__open-in-editor?file=pages/index.vue'));
        expect(_0x37be71)['toBe']('');
    }), test('/__open-in-editor\x20should\x20return\x20error\x20(open-in-editor)', async () => {
        await expect(rp(url('/__open-in-editor?file=')))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'body': 'launch-editor-middleware:\x20required\x20query\x20param\x20\x22file\x22\x20is\x20missing.'
            }
        });
    }), test('/error\x20should\x20return\x20error\x20stack\x20trace\x20(Youch)', async () => {
        await expect(nuxt['server']['renderAndGetWindow'](url('/error')))['rejects']['toThrow']('Resource\x20was\x20not\x20loaded.\x20Status:\x20500');
    }), test('/error\x20should\x20return\x20json\x20format\x20error\x20(Youch)', async () => {
        const _0x347fd8 = { 'headers': { 'accept': 'application/json' } };
        await expect(rp(url('/error'), _0x347fd8))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': 'text/json;\x20charset=utf-8' }
            }
        });
    }), test('/\x20should\x20display\x20ssr\x20log\x20in\x20collapsed\x20group', async () => {
        const _0x12b8b3 = new _0x25f6b7['VirtualConsole'](), _0x493ff9 = jest['fn'](), _0x2c6c6b = jest['fn'](), _0x2c61b0 = jest['fn']();
        _0x12b8b3['on']('groupCollapsed', _0x493ff9), _0x12b8b3['on']('groupEnd', _0x2c6c6b), _0x12b8b3['on']('log', _0x2c61b0), await nuxt['server']['renderAndGetWindow'](url('/'), { 'virtualConsole': _0x12b8b3 }), expect(_0x493ff9)['toHaveBeenCalledWith']('%cNuxt\x20SSR', 'background:\x20#2E495E;border-radius:\x200.5em;color:\x20white;font-weight:\x20bold;padding:\x202px\x200.5em;'), expect(_0x2c6c6b)['toHaveBeenCalled'](), expect(_0x2c61b0)['toHaveBeenCalledWith']('This\x20is\x20a\x20test\x20ssr\x20log');
    }), afterAll(async () => {
        await builder['close']();
    });
});
