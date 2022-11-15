const _0x20e7 = [
    'node_modules/vue-test',
    'node_modules/test.vue.js',
    'node_modules/@scoped/packageB/src/index.js',
    'node_modules/normal-test',
    'Notice:\x20Please\x20do\x20not\x20use\x20contenthash\x20in\x20dev\x20mode\x20to\x20prevent\x20memory\x20leak',
    'file',
    'fontUrl',
    'imgUrl',
    'vue',
    'less',
    'sass',
    'stylus',
    'cssnano',
    '/stateless',
    '<h1>My\x20component!</h1>',
    '/__open-in-editor?file=pages/index.vue',
    'launch-editor-middleware:\x20required\x20query\x20param\x20\x22file\x22\x20is\x20missing.',
    'Resource\x20was\x20not\x20loaded.\x20Status:\x20500',
    '/error',
    'text/json;\x20charset=utf-8',
    'groupCollapsed',
    '%cNuxt\x20SSR',
    'This\x20is\x20a\x20test\x20ssr\x20log',
    'Check\x20build:done\x20hook\x20called',
    'Config:\x20build.loaders',
    '/__open-in-editor\x20should\x20return\x20error\x20(open-in-editor)',
    '/\x20should\x20display\x20ssr\x20log\x20in\x20collapsed\x20group',
    'NAuRm',
    'wuvCI',
    'log',
    'KtSWv',
    'CHtxR',
    'test-app.[contenthash].js',
    'YQCFR',
    '@scoped/packageA',
    'GDiKU',
    'modern-test',
    'normal-test',
    'kLSsq',
    'find',
    'test',
    '.jsx',
    'exclude',
    '.css',
    'oneOf',
    'use',
    'length',
    'logs',
    'bukGO',
    'bDzrG',
    'listen',
    'eyptg',
    'SSkID',
    'rdcje',
    'toBe',
    'xByWc',
    'WpySL',
    'xgcmL',
    'ihHBF',
    'djuDa',
    'normalize',
    'eRAJj',
    'anzoe',
    'GMEvU',
    'neOQg',
    'MTjmv',
    'VOpIg',
    'pGGrr',
    'VABHl',
    'filename',
    'CgeOf',
    'chunkFilename',
    'dMbFz',
    'warn',
    'toBeCalledWith',
    'hwJep',
    'sCkcn',
    'toHaveLength',
    'kMrkO',
    'toHaveProperty',
    'FTGcN',
    'VknhW',
    'uerLo',
    'XJOEv',
    'mtYlf',
    'modules',
    'options',
    'wJFlZ',
    'plugins',
    'map',
    'postcssPlugin',
    'toEqual',
    'postcss-import',
    'yPRAn',
    'cBiZm',
    'YCWtE',
    'kSUtn',
    'xHMgB',
    'server',
    'renderAndGetWindow',
    'qzpHZ',
    'document',
    'body',
    'innerHTML',
    'toContain',
    'mUqOZ',
    '__hook_render_routeDone__',
    'eJMHe',
    '/__open-in-editor\x20(open-in-editor)',
    'rejects',
    'toMatchObject',
    'mOQyE',
    'mvtoS',
    'cgNcf',
    'toThrow',
    'EgKSm',
    'oQVpY',
    'dquSU',
    'LyCni',
    'QKzfx',
    'groupEnd',
    'GXxsZ',
    'background:\x20#2E495E;border-radius:\x200.5em;color:\x20white;font-weight:\x20bold;padding:\x202px\x200.5em;',
    'toHaveBeenCalled',
    'toHaveBeenCalledWith',
    'PbAze',
    '381761BmpVFZ',
    '170949Eikktv',
    '3WHTBUr',
    '18jeEdcd',
    '54182ylObOR',
    '3VGxODF',
    '207689kVQeGC',
    '973518DJERbE',
    '19857WoSpiT',
    '166943lomUOd',
    '1YjzzXS',
    'http://localhost:',
    'basic\x20dev',
    'test-app.js',
    'test-[name].[contenthash].js',
    '@scoped\x5cpackageB',
    'vue.test.js',
    'localhost',
    'node_modules/test.js'
];
const _0x15fb5c = _0x26ec;
(function (_0x16f2c9, _0x47c28d) {
    const _0x89df48 = _0x26ec;
    while (!![]) {
        try {
            const _0xbd7d5e = -parseInt(_0x89df48(0x127)) + -parseInt(_0x89df48(0x128)) * -parseInt(_0x89df48(0x129)) + -parseInt(_0x89df48(0x12a)) * parseInt(_0x89df48(0x12b)) + parseInt(_0x89df48(0x12c)) * parseInt(_0x89df48(0x12d)) + parseInt(_0x89df48(0x12e)) + parseInt(_0x89df48(0x12f)) + -parseInt(_0x89df48(0x130)) * parseInt(_0x89df48(0x131));
            if (_0xbd7d5e === _0x47c28d)
                break;
            else
                _0x16f2c9['push'](_0x16f2c9['shift']());
        } catch (_0x2642a9) {
            _0x16f2c9['push'](_0x16f2c9['shift']());
        }
    }
}(_0x20e7, 0x1 * 0xde77f + -0x20fb * 0x7e + -0x80b8 * -0x17));
import _0x7f8cc0 from 'path';
import _0x292aeb from 'jsdom';
import _0x554b6a from 'consola';
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
const url = _0x129e67 => _0x15fb5c(0x132) + port + _0x129e67;
let nuxt = null, builder = null, transpile = null, output = null, loadersOptions, vueLoader, postcssLoader;
function _0x26ec(_0x221819, _0x3b9448) {
    return _0x26ec = function (_0x4677f7, _0x298c9f) {
        _0x4677f7 = _0x4677f7 - (0x1b7f + -0x20dd + 0x685 * 0x1);
        let _0x467e50 = _0x20e7[_0x4677f7];
        return _0x467e50;
    }, _0x26ec(_0x221819, _0x3b9448);
}
describe(_0x15fb5c(0x133), () => {
    const _0x25f9b2 = _0x15fb5c, _0x2b638c = {
            'wuvCI': _0x25f9b2(0x134),
            'KtSWv': 'basic',
            'ulqYH': '.nuxt-dev',
            'YQCFR': _0x25f9b2(0x135),
            'VVLTh': _0x25f9b2(0x136),
            'GDiKU': _0x25f9b2(0x137),
            'kLSsq': '[hash:base64:6]',
            'WXWHp': function (_0x163bf1, _0x13c026) {
                return _0x163bf1(_0x13c026);
            },
            'bDzrG': function (_0x9d7c9d) {
                return _0x9d7c9d();
            },
            'eyptg': _0x25f9b2(0x138),
            'WpySL': function (_0x47f38a, _0x5169f5) {
                return _0x47f38a(_0x5169f5);
            },
            'xgcmL': function (_0x4f9f1d, _0x4f9047) {
                return _0x4f9f1d(_0x4f9047);
            },
            'ihHBF': _0x25f9b2(0x139),
            'djuDa': function (_0x2423a9, _0x456ba6) {
                return _0x2423a9(_0x456ba6);
            },
            'anzoe': function (_0x45b0fd, _0xbec85f) {
                return _0x45b0fd(_0xbec85f);
            },
            'eRAJj': _0x25f9b2(0x13a),
            'WqVDN': _0x25f9b2(0x13b),
            'GMEvU': function (_0x3dc0ae, _0xa8e724) {
                return _0x3dc0ae(_0xa8e724);
            },
            'imOBP': 'node_modules/@scoped/packageA/src/index.js',
            'neOQg': function (_0x213651, _0x60bd1f) {
                return _0x213651(_0x60bd1f);
            },
            'MTjmv': function (_0x2c0f64, _0x5c99a0) {
                return _0x2c0f64(_0x5c99a0);
            },
            'VOpIg': _0x25f9b2(0x13c),
            'pGGrr': _0x25f9b2(0x13d),
            'CgeOf': function (_0xd8cb81, _0x3f25f3) {
                return _0xd8cb81(_0x3f25f3);
            },
            'dMbFz': function (_0x2dfe94, _0x3cf209) {
                return _0x2dfe94(_0x3cf209);
            },
            'maarn': _0x25f9b2(0x13e),
            'kMrkO': function (_0x5b9d9d, _0x50bd77) {
                return _0x5b9d9d(_0x50bd77);
            },
            'FTGcN': _0x25f9b2(0x13f),
            'VknhW': _0x25f9b2(0x140),
            'uerLo': _0x25f9b2(0x141),
            'DbTZN': _0x25f9b2(0x142),
            'FUimu': 'cssModules',
            'XJOEv': _0x25f9b2(0x143),
            'UgARk': _0x25f9b2(0x144),
            'mtYlf': _0x25f9b2(0x145),
            'OGweg': 'vueStyle',
            'yPRAn': 'postcss-url',
            'EefhZ': 'nuxt-test',
            'cBiZm': 'postcss-preset-env',
            'YCWtE': _0x25f9b2(0x146),
            'qzpHZ': function (_0x5aa35b, _0x964dd6) {
                return _0x5aa35b(_0x964dd6);
            },
            'xHMgB': _0x25f9b2(0x147),
            'mUqOZ': _0x25f9b2(0x148),
            'xybbR': _0x25f9b2(0x149),
            'bjPjk': '/__open-in-editor?file=',
            'mOQyE': _0x25f9b2(0x14a),
            'cgNcf': function (_0x3bb324, _0x468e4f) {
                return _0x3bb324(_0x468e4f);
            },
            'EgKSm': _0x25f9b2(0x14b),
            'oQVpY': 'application/json',
            'SSkID': function (_0x31891f, _0x422730, _0x35f5a0) {
                return _0x31891f(_0x422730, _0x35f5a0);
            },
            'GXxsZ': function (_0x49bc65, _0x5c502b) {
                return _0x49bc65(_0x5c502b);
            },
            'dquSU': _0x25f9b2(0x14c),
            'XELvc': _0x25f9b2(0x14d),
            'QKzfx': _0x25f9b2(0x14e),
            'rMoVQ': 'log',
            'NAuRm': function (_0x3a3d62, _0x2d9b84) {
                return _0x3a3d62(_0x2d9b84);
            },
            'SZumM': _0x25f9b2(0x14f),
            'PbAze': _0x25f9b2(0x150),
            'rdcje': _0x25f9b2(0x151),
            'xByWc': function (_0x106a33, _0x45949e, _0xb418fd) {
                return _0x106a33(_0x45949e, _0xb418fd);
            },
            'VABHl': 'Config:\x20build.filenames',
            'hwJep': function (_0x3fa000, _0x168864, _0x3a4458) {
                return _0x3fa000(_0x168864, _0x3a4458);
            },
            'sCkcn': _0x25f9b2(0x152),
            'wJFlZ': 'Config:\x20preset-env\x20and\x20cssnano\x20are\x20at\x20then\x20end\x20of\x20postcss\x20plugins',
            'kSUtn': function (_0x238c81, _0x210e60, _0x53d232) {
                return _0x238c81(_0x210e60, _0x53d232);
            },
            'eJMHe': function (_0x485f41, _0x15b9c3, _0x5a403f) {
                return _0x485f41(_0x15b9c3, _0x5a403f);
            },
            'SFuqE': _0x25f9b2(0x153),
            'mvtoS': '/error\x20should\x20return\x20error\x20stack\x20trace\x20(Youch)',
            'pzPAK': function (_0x29da66, _0x34492b, _0x2d7ac0) {
                return _0x29da66(_0x34492b, _0x2d7ac0);
            },
            'LyCni': _0x25f9b2(0x154),
            'LtzlA': function (_0x4b51e9, _0x512888) {
                return _0x4b51e9(_0x512888);
            }
        };
    _0x2b638c[_0x25f9b2(0x155)](beforeAll, async () => {
        const _0x241885 = _0x25f9b2, _0xf7e44d = {
                'CHtxR': _0x2b638c[_0x241885(0x156)],
                'bukGO': _0x241885(0x157)
            }, _0x2631e3 = await loadFixture(_0x2b638c[_0x241885(0x158)], {
                'dev': !![],
                'debug': !![],
                'buildDir': _0x2b638c['ulqYH'],
                'build': {
                    'filenames': {
                        'app': ({isDev: _0x107142}) => {
                            const _0x66a03d = _0x241885;
                            return _0x107142 ? _0xf7e44d[_0x66a03d(0x159)] : _0x66a03d(0x15a);
                        },
                        'chunk': _0x2b638c[_0x241885(0x15b)]
                    },
                    'transpile': [
                        _0x241885(0x15c),
                        _0x2b638c['VVLTh'],
                        _0x2b638c[_0x241885(0x15d)],
                        /vue-test/,
                        ({isModern: _0x4d2258}) => _0x4d2258 ? _0x241885(0x15e) : _0x241885(0x15f)
                    ],
                    'loaders': { 'cssModules': { 'modules': { 'localIdentName': _0x2b638c[_0x241885(0x160)] } } },
                    'extend'({
                        module: {rules: _0xa8c3a5},
                        output: _0x4b98c6
                    }, {
                        isClient: _0x119d60,
                        loaders: _0x2f284c
                    }) {
                        const _0x3b0c52 = _0x241885;
                        if (_0x119d60) {
                            const _0x12b03b = _0xa8c3a5[_0x3b0c52(0x161)](_0x47984d => _0x47984d[_0x3b0c52(0x162)][_0x3b0c52(0x162)](_0x3b0c52(0x163)));
                            transpile = _0x197ff6 => !_0x12b03b[_0x3b0c52(0x164)](_0x197ff6), output = _0x4b98c6, loadersOptions = _0x2f284c, vueLoader = _0xa8c3a5[_0x3b0c52(0x161)](_0x1797da => _0x1797da[_0x3b0c52(0x162)][_0x3b0c52(0x162)]('.vue'));
                            const _0x2c4fa9 = _0xa8c3a5[_0x3b0c52(0x161)](_0x2f930f => _0x2f930f[_0x3b0c52(0x162)][_0x3b0c52(0x162)](_0x3b0c52(0x165)))[_0x3b0c52(0x166)][0x6c4 + -0x38b * -0x1 + 0x1d * -0x5b][_0x3b0c52(0x167)];
                            postcssLoader = _0x2c4fa9[_0x2c4fa9[_0x3b0c52(0x168)] - (0xbd4 * -0x1 + -0x3d * -0x37 + -0x146)];
                        }
                    }
                },
                'hooks': {
                    'vue-renderer:ssr:context': ({nuxt: _0x2d02f5}) => {
                        const _0x537fbc = _0x241885;
                        _0x2d02f5[_0x537fbc(0x169)] = [{
                                'type': _0xf7e44d[_0x537fbc(0x16a)],
                                'args': [_0x537fbc(0x150)]
                            }];
                    }
                },
                'render': { 'ssrLog': 'collapsed' }
            });
        nuxt = new Nuxt(_0x2631e3), await nuxt['ready'](), builder = new Builder(nuxt, BundleBuilder), await builder['build'](), await _0x2b638c['WXWHp'](waitFor, 0x1f67 + -0x1314 + 0x21 * -0x23), port = await _0x2b638c[_0x241885(0x16b)](getPort), await nuxt['server'][_0x241885(0x16c)](port, _0x2b638c[_0x241885(0x16d)]);
    }), _0x2b638c[_0x25f9b2(0x16e)](test, _0x2b638c[_0x25f9b2(0x16f)], () => {
        const _0x331208 = _0x25f9b2;
        expect(builder['__hook_built_called__'])[_0x331208(0x170)](!![]);
    }), _0x2b638c[_0x25f9b2(0x171)](test, 'Config:\x20build.transpile', () => {
        const _0x4efa57 = _0x25f9b2;
        _0x2b638c['WpySL'](expect, _0x2b638c[_0x4efa57(0x172)](transpile, 'vue-test'))[_0x4efa57(0x170)](!![]), expect(_0x2b638c[_0x4efa57(0x173)](transpile, _0x7f8cc0['normalize'](_0x2b638c[_0x4efa57(0x174)])))[_0x4efa57(0x170)](![]), _0x2b638c[_0x4efa57(0x175)](expect, _0x2b638c['anzoe'](transpile, _0x7f8cc0[_0x4efa57(0x176)](_0x2b638c[_0x4efa57(0x177)])))['toBe'](!![]), _0x2b638c['anzoe'](expect, transpile(_0x7f8cc0['normalize']('node_modules/vue.test.js')))['toBe'](!![]), expect(_0x2b638c[_0x4efa57(0x178)](transpile, _0x7f8cc0[_0x4efa57(0x176)](_0x2b638c['WqVDN'])))['toBe'](!![]), _0x2b638c['anzoe'](expect, _0x2b638c[_0x4efa57(0x179)](transpile, _0x7f8cc0[_0x4efa57(0x176)](_0x2b638c['imOBP'])))[_0x4efa57(0x170)](!![]), _0x2b638c[_0x4efa57(0x17a)](expect, _0x2b638c[_0x4efa57(0x17b)](transpile, _0x7f8cc0[_0x4efa57(0x176)](_0x2b638c[_0x4efa57(0x17c)])))[_0x4efa57(0x170)](!![]), _0x2b638c[_0x4efa57(0x17b)](expect, _0x2b638c[_0x4efa57(0x17b)](transpile, _0x7f8cc0[_0x4efa57(0x176)](_0x2b638c[_0x4efa57(0x17d)])))['toBe'](!![]);
    }), _0x2b638c[_0x25f9b2(0x171)](test, _0x2b638c[_0x25f9b2(0x17e)], () => {
        const _0x132e47 = _0x25f9b2;
        expect(output[_0x132e47(0x17f)])[_0x132e47(0x170)](_0x2b638c[_0x132e47(0x156)]), _0x2b638c[_0x132e47(0x180)](expect, output[_0x132e47(0x181)])[_0x132e47(0x170)](_0x132e47(0x135)), _0x2b638c[_0x132e47(0x182)](expect, _0x554b6a[_0x132e47(0x183)])[_0x132e47(0x184)](_0x2b638c['maarn']);
    }), _0x2b638c[_0x25f9b2(0x185)](test, _0x2b638c[_0x25f9b2(0x186)], () => {
        const _0x2b22dd = _0x25f9b2;
        _0x2b638c['kMrkO'](expect, Object['keys'](loadersOptions))[_0x2b22dd(0x187)](0x14 * 0xc5 + -0xfe + -0xe5a), _0x2b638c[_0x2b22dd(0x188)](expect, loadersOptions)[_0x2b22dd(0x189)](_0x2b638c[_0x2b22dd(0x18a)], _0x2b638c[_0x2b22dd(0x18b)], _0x2b638c[_0x2b22dd(0x18c)], 'pugPlain', _0x2b638c['DbTZN'], 'css', _0x2b638c['FUimu'], _0x2b638c[_0x2b22dd(0x18d)], _0x2b638c['UgARk'], 'scss', _0x2b638c[_0x2b22dd(0x18e)], _0x2b638c['OGweg']);
        const {
            cssModules: _0x312b53,
            vue: _0x4ff286
        } = loadersOptions;
        expect(_0x312b53[_0x2b22dd(0x18f)]['localIdentName'])['toBe'](_0x2b638c[_0x2b22dd(0x160)]), _0x2b638c[_0x2b22dd(0x188)](expect, vueLoader[_0x2b22dd(0x190)])[_0x2b22dd(0x170)](_0x4ff286);
    }), _0x2b638c[_0x25f9b2(0x185)](test, _0x2b638c[_0x25f9b2(0x191)], () => {
        const _0x4499e0 = _0x25f9b2, _0x191a55 = postcssLoader['options'][_0x4499e0(0x192)][_0x4499e0(0x193)](_0x3ed47b => {
                const _0x15d1c3 = _0x4499e0;
                return _0x3ed47b[_0x15d1c3(0x194)];
            });
        expect(_0x191a55)[_0x4499e0(0x195)]([
            _0x4499e0(0x196),
            _0x2b638c[_0x4499e0(0x197)],
            _0x2b638c['EefhZ'],
            _0x2b638c[_0x4499e0(0x198)],
            _0x2b638c[_0x4499e0(0x199)]
        ]);
    }), _0x2b638c[_0x25f9b2(0x19a)](test, _0x2b638c[_0x25f9b2(0x19b)], async () => {
        const _0x2c306f = _0x25f9b2, _0x52b3d2 = await nuxt[_0x2c306f(0x19c)][_0x2c306f(0x19d)](_0x2b638c[_0x2c306f(0x19e)](url, _0x2b638c['xHMgB'])), _0x35be06 = _0x52b3d2[_0x2c306f(0x19f)][_0x2c306f(0x1a0)][_0x2c306f(0x1a1)];
        _0x2b638c[_0x2c306f(0x19e)](expect, _0x35be06)[_0x2c306f(0x1a2)](_0x2b638c[_0x2c306f(0x1a3)]), expect(nuxt[_0x2c306f(0x1a4)])[_0x2c306f(0x170)](_0x2c306f(0x147)), _0x52b3d2['close']();
    }), _0x2b638c[_0x25f9b2(0x1a5)](test, _0x25f9b2(0x1a6), async () => {
        const _0x16580c = _0x25f9b2, {body: _0x265acd} = await _0x2b638c['qzpHZ'](rp, _0x2b638c[_0x16580c(0x19e)](url, _0x2b638c['xybbR']));
        expect(_0x265acd)[_0x16580c(0x170)]('');
    }), _0x2b638c[_0x25f9b2(0x1a5)](test, _0x2b638c['SFuqE'], async () => {
        const _0x35f2f2 = _0x25f9b2;
        await _0x2b638c[_0x35f2f2(0x19e)](expect, rp(_0x2b638c[_0x35f2f2(0x19e)](url, _0x2b638c['bjPjk'])))[_0x35f2f2(0x1a7)][_0x35f2f2(0x1a8)]({
            'response': {
                'statusCode': 0x1f4,
                'body': _0x2b638c[_0x35f2f2(0x1a9)]
            }
        });
    }), _0x2b638c[_0x25f9b2(0x1a5)](test, _0x2b638c[_0x25f9b2(0x1aa)], async () => {
        const _0x4bfebe = _0x25f9b2;
        await _0x2b638c[_0x4bfebe(0x19e)](expect, nuxt[_0x4bfebe(0x19c)][_0x4bfebe(0x19d)](_0x2b638c[_0x4bfebe(0x1ab)](url, _0x4bfebe(0x14c))))[_0x4bfebe(0x1a7)][_0x4bfebe(0x1ac)](_0x2b638c[_0x4bfebe(0x1ad)]);
    }), _0x2b638c[_0x25f9b2(0x1a5)](test, '/error\x20should\x20return\x20json\x20format\x20error\x20(Youch)', async () => {
        const _0x12c5c9 = _0x25f9b2, _0x190ca7 = { 'headers': { 'accept': _0x2b638c[_0x12c5c9(0x1ae)] } };
        await _0x2b638c[_0x12c5c9(0x1ab)](expect, _0x2b638c['SSkID'](rp, _0x2b638c['GXxsZ'](url, _0x2b638c[_0x12c5c9(0x1af)]), _0x190ca7))[_0x12c5c9(0x1a7)][_0x12c5c9(0x1a8)]({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': _0x2b638c['XELvc'] }
            }
        });
    }), _0x2b638c['pzPAK'](test, _0x2b638c[_0x25f9b2(0x1b0)], async () => {
        const _0x4ac601 = _0x25f9b2, _0x485fdc = new _0x292aeb['VirtualConsole'](), _0x29a145 = jest['fn'](), _0x49b821 = jest['fn'](), _0x599f4a = jest['fn']();
        _0x485fdc['on'](_0x2b638c[_0x4ac601(0x1b1)], _0x29a145), _0x485fdc['on'](_0x4ac601(0x1b2), _0x49b821), _0x485fdc['on'](_0x2b638c['rMoVQ'], _0x599f4a), await nuxt[_0x4ac601(0x19c)][_0x4ac601(0x19d)](_0x2b638c[_0x4ac601(0x1b3)](url, '/'), { 'virtualConsole': _0x485fdc }), _0x2b638c[_0x4ac601(0x155)](expect, _0x29a145)['toHaveBeenCalledWith'](_0x2b638c['SZumM'], _0x4ac601(0x1b4)), expect(_0x49b821)[_0x4ac601(0x1b5)](), expect(_0x599f4a)[_0x4ac601(0x1b6)](_0x2b638c[_0x4ac601(0x1b7)]);
    }), _0x2b638c['LtzlA'](afterAll, async () => {
        await builder['close']();
    });
});
