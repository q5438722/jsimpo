import _0x2c24be from 'path';
import _0x85a0cf from 'jsdom';
import _0x3b9020 from 'consola';
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
const url = _0x2250f4 => 'http://localhost:' + port + _0x2250f4;
let nuxt = null, builder = null, transpile = null, output = null, loadersOptions, vueLoader, postcssLoader;
describe('basic\x20dev', () => {
    const _0x4d4a08 = {
        'tadUy': 'test-app.js',
        'mUMfd': 'test-app.[contenthash].js',
        'ccCqV': function (_0x53af26, _0x26520d) {
            return _0x53af26 - _0x26520d;
        },
        'IaffA': 'log',
        'VTwfM': 'This\x20is\x20a\x20test\x20ssr\x20log',
        'caEfb': function (_0x1aa4bb, _0x524429, _0x1524eb) {
            return _0x1aa4bb(_0x524429, _0x1524eb);
        },
        'PSFJU': 'basic',
        'gjgzn': '.nuxt-dev',
        'jLHkC': 'test-[name].[contenthash].js',
        'oZBbM': '@scoped/packageA',
        'QQGVU': '@scoped\x5cpackageB',
        'VaSFj': 'vue.test.js',
        'Usska': '[hash:base64:6]',
        'eaEhN': 'collapsed',
        'GooYV': function (_0x551bf5, _0x23b694) {
            return _0x551bf5(_0x23b694);
        },
        'UraJV': function (_0x45ebba) {
            return _0x45ebba();
        },
        'GLzwJ': 'localhost',
        'UNosu': function (_0x3e5cb1, _0x4885c6) {
            return _0x3e5cb1(_0x4885c6);
        },
        'MpmuB': '3|7|4|0|2|1|6|5',
        'jhaFb': function (_0x583dd2, _0x301f5d) {
            return _0x583dd2(_0x301f5d);
        },
        'TLmyz': 'node_modules/vue.test.js',
        'qjaAQ': function (_0x5706f8, _0x4d7e6c) {
            return _0x5706f8(_0x4d7e6c);
        },
        'txnlG': 'node_modules/@scoped/packageA/src/index.js',
        'GlwwZ': function (_0x48020b, _0xbd698d) {
            return _0x48020b(_0xbd698d);
        },
        'Octdq': 'node_modules/test.vue.js',
        'eNJhl': function (_0x1aaf5e, _0x932663) {
            return _0x1aaf5e(_0x932663);
        },
        'OlfSl': 'vue-test',
        'zrVrh': 'node_modules/vue-test',
        'CorgV': function (_0x3cba9d, _0x35714c) {
            return _0x3cba9d(_0x35714c);
        },
        'HLSWa': function (_0x22dff2, _0x22fd80) {
            return _0x22dff2(_0x22fd80);
        },
        'DMZmB': 'node_modules/normal-test',
        'fiBIU': function (_0x305e07, _0x41f34f) {
            return _0x305e07(_0x41f34f);
        },
        'AAMpw': 'node_modules/@scoped/packageB/src/index.js',
        'zEZDZ': function (_0x49a079, _0x44e06b) {
            return _0x49a079(_0x44e06b);
        },
        'sXGIU': function (_0x31ef8d, _0x1a5e72) {
            return _0x31ef8d(_0x1a5e72);
        },
        'wiOjz': 'node_modules/test.js',
        'uRHIJ': function (_0x172ef3, _0x4495b2) {
            return _0x172ef3(_0x4495b2);
        },
        'eJFcC': function (_0x4627ca, _0x1a4215) {
            return _0x4627ca(_0x1a4215);
        },
        'AEqfh': 'Notice:\x20Please\x20do\x20not\x20use\x20contenthash\x20in\x20dev\x20mode\x20to\x20prevent\x20memory\x20leak',
        'VzRcl': function (_0x11cd93, _0x1b90c1) {
            return _0x11cd93(_0x1b90c1);
        },
        'gWGDA': 'file',
        'ODwqC': 'fontUrl',
        'GRdLl': 'imgUrl',
        'Ndace': 'pugPlain',
        'LLyGO': 'vue',
        'TpkFi': 'css',
        'SYSnA': 'cssModules',
        'kXNnl': 'less',
        'sOmYp': 'sass',
        'NgbbP': 'scss',
        'LNUrc': 'stylus',
        'HsGxp': 'vueStyle',
        'bVyWt': function (_0x3de1a3, _0x31c6ca) {
            return _0x3de1a3(_0x31c6ca);
        },
        'AIzSs': function (_0x6e2286, _0x5551cf) {
            return _0x6e2286(_0x5551cf);
        },
        'LnjxY': 'postcss-import',
        'msFqR': 'postcss-url',
        'RGKwp': 'nuxt-test',
        'yNLQs': 'postcss-preset-env',
        'UtVoZ': 'cssnano',
        'GGQIQ': '/stateless',
        'OwuSR': function (_0x1fba89, _0x496431) {
            return _0x1fba89(_0x496431);
        },
        'cHdtp': '<h1>My\x20component!</h1>',
        'XtDtE': function (_0x104b58, _0x48b043) {
            return _0x104b58(_0x48b043);
        },
        'JIvrd': function (_0xa72d0c, _0x4aa857) {
            return _0xa72d0c(_0x4aa857);
        },
        'tNcZG': '/__open-in-editor?file=pages/index.vue',
        'wCMiF': function (_0x3eeb2d, _0x1da415) {
            return _0x3eeb2d(_0x1da415);
        },
        'cRGay': '/__open-in-editor?file=',
        'xXXkG': 'launch-editor-middleware:\x20required\x20query\x20param\x20\x22file\x22\x20is\x20missing.',
        'HBsVJ': function (_0x467e06, _0x2673bc) {
            return _0x467e06(_0x2673bc);
        },
        'MGgmZ': '/error',
        'XEbie': 'Resource\x20was\x20not\x20loaded.\x20Status:\x20500',
        'mRUfA': 'application/json',
        'QymQo': 'text/json;\x20charset=utf-8',
        'czhkH': 'groupCollapsed',
        'DNCqh': 'groupEnd',
        'OmxuX': function (_0x557ce0, _0x1231ff) {
            return _0x557ce0(_0x1231ff);
        },
        'XCglU': '%cNuxt\x20SSR',
        'BEpLt': 'background:\x20#2E495E;border-radius:\x200.5em;color:\x20white;font-weight:\x20bold;padding:\x202px\x200.5em;',
        'QIdNM': function (_0x573c73, _0x2b6588) {
            return _0x573c73(_0x2b6588);
        },
        'MxQlP': function (_0x37a176, _0x4db7fd, _0x513340) {
            return _0x37a176(_0x4db7fd, _0x513340);
        },
        'vfGlH': 'Check\x20build:done\x20hook\x20called',
        'YcbGp': 'Config:\x20build.transpile',
        'Gnpyw': function (_0x4a04bf, _0x2b5e89, _0x4a39b9) {
            return _0x4a04bf(_0x2b5e89, _0x4a39b9);
        },
        'vnqWw': 'Config:\x20build.filenames',
        'JcCDT': function (_0x16f5ef, _0x588231, _0x4eb748) {
            return _0x16f5ef(_0x588231, _0x4eb748);
        },
        'CzMGl': 'Config:\x20build.loaders',
        'wwrqU': 'Config:\x20preset-env\x20and\x20cssnano\x20are\x20at\x20then\x20end\x20of\x20postcss\x20plugins',
        'wwCHX': function (_0x3148cc, _0x2c1291, _0x4a9cc3) {
            return _0x3148cc(_0x2c1291, _0x4a9cc3);
        },
        'WVVCb': '/__open-in-editor\x20(open-in-editor)',
        'nsZFF': '/__open-in-editor\x20should\x20return\x20error\x20(open-in-editor)',
        'YLoek': function (_0x1b060, _0x1212e2, _0x2bc66e) {
            return _0x1b060(_0x1212e2, _0x2bc66e);
        },
        'wAaXe': '/error\x20should\x20return\x20error\x20stack\x20trace\x20(Youch)',
        'vTVOf': function (_0x3932f1, _0x5c31dc, _0x5d5c6a) {
            return _0x3932f1(_0x5c31dc, _0x5d5c6a);
        },
        'TXvnt': '/error\x20should\x20return\x20json\x20format\x20error\x20(Youch)',
        'llPeQ': '/\x20should\x20display\x20ssr\x20log\x20in\x20collapsed\x20group'
    };
    _0x4d4a08['QIdNM'](beforeAll, async () => {
        const _0x8eb61e = {
                'Fsdvj': _0x4d4a08['IaffA'],
                'SBRSy': _0x4d4a08['VTwfM']
            }, _0x4e00c9 = await _0x4d4a08['caEfb'](loadFixture, _0x4d4a08['PSFJU'], {
                'dev': !![],
                'debug': !![],
                'buildDir': _0x4d4a08['gjgzn'],
                'build': {
                    'filenames': {
                        'app': ({isDev: _0x390ef2}) => {
                            return _0x390ef2 ? _0x4d4a08['tadUy'] : _0x4d4a08['mUMfd'];
                        },
                        'chunk': _0x4d4a08['jLHkC']
                    },
                    'transpile': [
                        _0x4d4a08['oZBbM'],
                        _0x4d4a08['QQGVU'],
                        _0x4d4a08['VaSFj'],
                        /vue-test/,
                        ({isModern: _0x5efc11}) => _0x5efc11 ? 'modern-test' : 'normal-test'
                    ],
                    'loaders': { 'cssModules': { 'modules': { 'localIdentName': _0x4d4a08['Usska'] } } },
                    'extend'({
                        module: {rules: _0x58a45e},
                        output: _0x3b9a18
                    }, {
                        isClient: _0x3ed41f,
                        loaders: _0x129aca
                    }) {
                        if (_0x3ed41f) {
                            const _0x3cf9ef = _0x58a45e['find'](_0x22545d => _0x22545d['test']['test']('.jsx'));
                            transpile = _0x30a842 => !_0x3cf9ef['exclude'](_0x30a842), output = _0x3b9a18, loadersOptions = _0x129aca, vueLoader = _0x58a45e['find'](_0x52f4d6 => _0x52f4d6['test']['test']('.vue'));
                            const _0x4216c7 = _0x58a45e['find'](_0x55fa6c => _0x55fa6c['test']['test']('.css'))['oneOf'][0x0]['use'];
                            postcssLoader = _0x4216c7[_0x4d4a08['ccCqV'](_0x4216c7['length'], 0x1)];
                        }
                    }
                },
                'hooks': {
                    'vue-renderer:ssr:context': ({nuxt: _0x3d447b}) => {
                        _0x3d447b['logs'] = [{
                                'type': _0x8eb61e['Fsdvj'],
                                'args': [_0x8eb61e['SBRSy']]
                            }];
                    }
                },
                'render': { 'ssrLog': _0x4d4a08['eaEhN'] }
            });
        nuxt = new Nuxt(_0x4e00c9), await nuxt['ready'](), builder = new Builder(nuxt, BundleBuilder), await builder['build'](), await _0x4d4a08['GooYV'](waitFor, 0x7d0), port = await _0x4d4a08['UraJV'](getPort), await nuxt['server']['listen'](port, _0x4d4a08['GLzwJ']);
    }), _0x4d4a08['MxQlP'](test, _0x4d4a08['vfGlH'], () => {
        _0x4d4a08['UNosu'](expect, builder['__hook_built_called__'])['toBe'](!![]);
    }), _0x4d4a08['MxQlP'](test, _0x4d4a08['YcbGp'], () => {
        const _0x4f37d9 = _0x4d4a08['MpmuB']['split']('|');
        let _0x231b17 = 0x0;
        while (!![]) {
            switch (_0x4f37d9[_0x231b17++]) {
            case '0':
                _0x4d4a08['UNosu'](expect, _0x4d4a08['jhaFb'](transpile, _0x2c24be['normalize'](_0x4d4a08['TLmyz'])))['toBe'](!![]);
                continue;
            case '1':
                _0x4d4a08['qjaAQ'](expect, _0x4d4a08['qjaAQ'](transpile, _0x2c24be['normalize'](_0x4d4a08['txnlG'])))['toBe'](!![]);
                continue;
            case '2':
                _0x4d4a08['qjaAQ'](expect, _0x4d4a08['GlwwZ'](transpile, _0x2c24be['normalize'](_0x4d4a08['Octdq'])))['toBe'](!![]);
                continue;
            case '3':
                _0x4d4a08['eNJhl'](expect, _0x4d4a08['eNJhl'](transpile, _0x4d4a08['OlfSl']))['toBe'](!![]);
                continue;
            case '4':
                _0x4d4a08['eNJhl'](expect, _0x4d4a08['eNJhl'](transpile, _0x2c24be['normalize'](_0x4d4a08['zrVrh'])))['toBe'](!![]);
                continue;
            case '5':
                _0x4d4a08['CorgV'](expect, _0x4d4a08['HLSWa'](transpile, _0x2c24be['normalize'](_0x4d4a08['DMZmB'])))['toBe'](!![]);
                continue;
            case '6':
                _0x4d4a08['fiBIU'](expect, _0x4d4a08['fiBIU'](transpile, _0x2c24be['normalize'](_0x4d4a08['AAMpw'])))['toBe'](!![]);
                continue;
            case '7':
                _0x4d4a08['zEZDZ'](expect, _0x4d4a08['sXGIU'](transpile, _0x2c24be['normalize'](_0x4d4a08['wiOjz'])))['toBe'](![]);
                continue;
            }
            break;
        }
    }), _0x4d4a08['Gnpyw'](test, _0x4d4a08['vnqWw'], () => {
        _0x4d4a08['sXGIU'](expect, output['filename'])['toBe'](_0x4d4a08['tadUy']), _0x4d4a08['uRHIJ'](expect, output['chunkFilename'])['toBe'](_0x4d4a08['jLHkC']), _0x4d4a08['eJFcC'](expect, _0x3b9020['warn'])['toBeCalledWith'](_0x4d4a08['AEqfh']);
    }), _0x4d4a08['JcCDT'](test, _0x4d4a08['CzMGl'], () => {
        _0x4d4a08['eJFcC'](expect, Object['keys'](loadersOptions))['toHaveLength'](0xc), _0x4d4a08['VzRcl'](expect, loadersOptions)['toHaveProperty'](_0x4d4a08['gWGDA'], _0x4d4a08['ODwqC'], _0x4d4a08['GRdLl'], _0x4d4a08['Ndace'], _0x4d4a08['LLyGO'], _0x4d4a08['TpkFi'], _0x4d4a08['SYSnA'], _0x4d4a08['kXNnl'], _0x4d4a08['sOmYp'], _0x4d4a08['NgbbP'], _0x4d4a08['LNUrc'], _0x4d4a08['HsGxp']);
        const {
            cssModules: _0x2a5488,
            vue: _0xd73ee8
        } = loadersOptions;
        _0x4d4a08['bVyWt'](expect, _0x2a5488['modules']['localIdentName'])['toBe'](_0x4d4a08['Usska']), _0x4d4a08['bVyWt'](expect, vueLoader['options'])['toBe'](_0xd73ee8);
    }), _0x4d4a08['JcCDT'](test, _0x4d4a08['wwrqU'], () => {
        const _0x1efad3 = postcssLoader['options']['plugins']['map'](_0x3623e9 => {
            return _0x3623e9['postcssPlugin'];
        });
        _0x4d4a08['AIzSs'](expect, _0x1efad3)['toEqual']([
            _0x4d4a08['LnjxY'],
            _0x4d4a08['msFqR'],
            _0x4d4a08['RGKwp'],
            _0x4d4a08['yNLQs'],
            _0x4d4a08['UtVoZ']
        ]);
    }), _0x4d4a08['wwCHX'](test, _0x4d4a08['GGQIQ'], async () => {
        const _0x313f31 = await nuxt['server']['renderAndGetWindow'](_0x4d4a08['AIzSs'](url, _0x4d4a08['GGQIQ'])), _0x37ae2e = _0x313f31['document']['body']['innerHTML'];
        _0x4d4a08['OwuSR'](expect, _0x37ae2e)['toContain'](_0x4d4a08['cHdtp']), _0x4d4a08['XtDtE'](expect, nuxt['__hook_render_routeDone__'])['toBe'](_0x4d4a08['GGQIQ']), _0x313f31['close']();
    }), _0x4d4a08['wwCHX'](test, _0x4d4a08['WVVCb'], async () => {
        const {body: _0x10e6af} = await _0x4d4a08['JIvrd'](rp, _0x4d4a08['JIvrd'](url, _0x4d4a08['tNcZG']));
        _0x4d4a08['JIvrd'](expect, _0x10e6af)['toBe']('');
    }), _0x4d4a08['wwCHX'](test, _0x4d4a08['nsZFF'], async () => {
        await _0x4d4a08['JIvrd'](expect, _0x4d4a08['wCMiF'](rp, _0x4d4a08['wCMiF'](url, _0x4d4a08['cRGay'])))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'body': _0x4d4a08['xXXkG']
            }
        });
    }), _0x4d4a08['YLoek'](test, _0x4d4a08['wAaXe'], async () => {
        await _0x4d4a08['wCMiF'](expect, nuxt['server']['renderAndGetWindow'](_0x4d4a08['HBsVJ'](url, _0x4d4a08['MGgmZ'])))['rejects']['toThrow'](_0x4d4a08['XEbie']);
    }), _0x4d4a08['vTVOf'](test, _0x4d4a08['TXvnt'], async () => {
        const _0x2300ee = { 'headers': { 'accept': _0x4d4a08['mRUfA'] } };
        await _0x4d4a08['HBsVJ'](expect, _0x4d4a08['caEfb'](rp, _0x4d4a08['HBsVJ'](url, _0x4d4a08['MGgmZ']), _0x2300ee))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': _0x4d4a08['QymQo'] }
            }
        });
    }), _0x4d4a08['vTVOf'](test, _0x4d4a08['llPeQ'], async () => {
        const _0x1227d7 = new _0x85a0cf['VirtualConsole'](), _0x1e1ae0 = jest['fn'](), _0x5d2e72 = jest['fn'](), _0x4166ff = jest['fn']();
        _0x1227d7['on'](_0x4d4a08['czhkH'], _0x1e1ae0), _0x1227d7['on'](_0x4d4a08['DNCqh'], _0x5d2e72), _0x1227d7['on'](_0x4d4a08['IaffA'], _0x4166ff), await nuxt['server']['renderAndGetWindow'](_0x4d4a08['HBsVJ'](url, '/'), { 'virtualConsole': _0x1227d7 }), _0x4d4a08['OmxuX'](expect, _0x1e1ae0)['toHaveBeenCalledWith'](_0x4d4a08['XCglU'], _0x4d4a08['BEpLt']), _0x4d4a08['OmxuX'](expect, _0x5d2e72)['toHaveBeenCalled'](), _0x4d4a08['OmxuX'](expect, _0x4166ff)['toHaveBeenCalledWith'](_0x4d4a08['VTwfM']);
    }), _0x4d4a08['QIdNM'](afterAll, async () => {
        await builder['close']();
    });
});
