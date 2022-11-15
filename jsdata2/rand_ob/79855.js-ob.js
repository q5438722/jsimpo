const _0x48b4 = [
    'var\x20render,\x20staticRenderFns,\x20recyclableRender,\x20components',
    'recyclable',
    '&id=',
    '&scoped=true',
    '?vue&type=template',
    'import\x20{\x20render,\x20staticRenderFns,\x20recyclableRender,\x20components\x20}\x20from\x20',
    'var\x20script\x20=\x20{}',
    'DtHMp',
    'skVZq',
    'var\x20renderjs',
    'isAppView',
    'isH5',
    'renderjs',
    '?vue&type=renderjs',
    'qcLem',
    'import\x20renderjs\x20from\x20',
    'renderjs.__module\x20=\x20\x27',
    'module',
    '\x0a\x0a/*\x20normalize\x20component\x20*/\x0aimport\x20normalizer\x20from\x20',
    '\x0avar\x20component\x20=\x20normalizer(\x0a\x20\x20script,\x0a\x20\x20render,\x0a\x20\x20staticRenderFns,\x0a\x20\x20',
    'false',
    ',\x0a\x20\x20',
    'null',
    'stringify',
    'true',
    ',\x0a\x20\x20components,\x0a\x20\x20renderjs\x0a)\x0a\x20\x20',
    'trim',
    'customBlocks',
    'ggZkS',
    'YRHEO',
    'WBSGg',
    '\x0ainjectStyles.call(component)',
    '\x0acomponent.options.__file\x20=\x20',
    '\x0arecyclableRender\x20&&\x20(component.options[\x22@render\x22]\x20=\x20recyclableRender)',
    '\x0aexport\x20default\x20component.exports',
    'exports',
    'VueLoaderPlugin',
    '32346JLYKHD',
    '2109RggVvN',
    '1oYHrdQ',
    '102436nntRsM',
    '374792eVXrnB',
    '121644piLfnL',
    '370492NcmTqA',
    '442377GhFptU',
    'hash-sum',
    'querystring',
    './select',
    'loader-utils',
    './codegen/utils',
    './codegen/styleInjection',
    './codegen/hotReload',
    './codegen/customBlocks',
    'resolve',
    './plugin',
    'vue-template-compiler',
    'olyeE',
    'Bigaj',
    'test',
    'emitError',
    'NAQCV',
    'or\x20a\x20compatible\x20compiler\x20implementation\x20must\x20be\x20passed\x20via\x20options.',
    'thread-loader',
    'production',
    '@dcloudio/uni-h5/path',
    'hfyDT',
    'Make\x20sure\x20to\x20include\x20VueLoaderPlugin\x20in\x20your\x20webpack\x20config.',
    'stringifyRequest',
    'slice',
    'parse',
    'getOptions',
    'shadowMode',
    'productionMode',
    'RehED',
    'env',
    'NODE_ENV',
    'ZksoS',
    'basename',
    'dirname',
    'relative',
    'fsSmO',
    'isAppService',
    'isAppNVue',
    'isH5TreeShaking',
    'platform',
    'replace',
    'compilerOptions',
    'modules',
    'LLZGo',
    'dQBpi',
    'src',
    'resourcePath',
    'indexOf',
    'styles',
    'length',
    'vpzLS',
    'appendExtension',
    'UNI_INPUT_DIR',
    'roUIO',
    'some',
    'template',
    'attrs',
    'wIlNU',
    'script',
    'hotReload'
];
const _0x427b3f = _0x41f0;
(function (_0x2cbe1f, _0x376cdc) {
    const _0x4da688 = _0x41f0;
    while (!![]) {
        try {
            const _0x1746cf = parseInt(_0x4da688(0x1cd)) + -parseInt(_0x4da688(0x1ce)) + parseInt(_0x4da688(0x1cf)) * -parseInt(_0x4da688(0x1d0)) + parseInt(_0x4da688(0x1d1)) + -parseInt(_0x4da688(0x1d2)) + -parseInt(_0x4da688(0x1d3)) + parseInt(_0x4da688(0x1d4));
            if (_0x1746cf === _0x376cdc)
                break;
            else
                _0x2cbe1f['push'](_0x2cbe1f['shift']());
        } catch (_0x5b0f93) {
            _0x2cbe1f['push'](_0x2cbe1f['shift']());
        }
    }
}(_0x48b4, -0xbb3 + 0x75a * -0xa9 + 0x8c1bf));
const path = require('path'), hash = require(_0x427b3f(0x1d5)), qs = require(_0x427b3f(0x1d6)), plugin = require('./plugin'), selectBlock = require(_0x427b3f(0x1d7)), loaderUtils = require(_0x427b3f(0x1d8)), {attrsToQuery} = require(_0x427b3f(0x1d9)), {parse} = require('@vue/component-compiler-utils'), genStylesCode = require(_0x427b3f(0x1da)), {genHotReloadCode} = require(_0x427b3f(0x1db)), genCustomBlocksCode = require(_0x427b3f(0x1dc)), componentNormalizerPath = require[_0x427b3f(0x1dd)]('./runtime/componentNormalizer'), {NS} = require(_0x427b3f(0x1de));
let errorEmitted = ![], modules;
function loadTemplateCompiler(_0x4131cc) {
    const _0x5d1950 = _0x427b3f, _0x36da5d = {
            'olyeE': function (_0x33d01a, _0x6a6e3d) {
                return _0x33d01a(_0x6a6e3d);
            },
            'Bigaj': _0x5d1950(0x1df),
            'NAQCV': function (_0x2eb328, _0x175326) {
                return _0x2eb328 + _0x175326;
            }
        };
    try {
        return _0x36da5d[_0x5d1950(0x1e0)](require, _0x36da5d[_0x5d1950(0x1e1)]);
    } catch (_0x227f33) {
        /version mismatch/[_0x5d1950(0x1e2)](_0x227f33['toString']()) ? _0x4131cc[_0x5d1950(0x1e3)](_0x227f33) : _0x4131cc['emitError'](new Error(_0x36da5d[_0x5d1950(0x1e4)]('[vue-loader]\x20vue-template-compiler\x20must\x20be\x20installed\x20as\x20a\x20peer\x20dependency,\x20', _0x5d1950(0x1e5))));
    }
}
function _0x41f0(_0x2803e4, _0x5cb7bb) {
    return _0x41f0 = function (_0x20181c, _0xaa2da4) {
        _0x20181c = _0x20181c - (0x9 * 0x11 + 0x185b + -0x1727);
        let _0x5bd662 = _0x48b4[_0x20181c];
        return _0x5bd662;
    }, _0x41f0(_0x2803e4, _0x5cb7bb);
}
module['exports'] = function (_0x2da497) {
    const _0x24ea98 = _0x427b3f, _0x2d1299 = {
            'hfyDT': _0x24ea98(0x1e6),
            'roUIO': function (_0x4bf08d, _0x56820d) {
                return _0x4bf08d + _0x56820d;
            },
            'RehED': function (_0x40931a, _0x26b9b3) {
                return _0x40931a === _0x26b9b3;
            },
            'ZksoS': _0x24ea98(0x1e7),
            'fsSmO': function (_0x1e2415, _0x49d5c1) {
                return _0x1e2415(_0x49d5c1);
            },
            'LLZGo': function (_0x37b471, _0x4ada13) {
                return _0x37b471(_0x4ada13);
            },
            'dQBpi': _0x24ea98(0x1e8),
            'JsUgU': function (_0x275141, _0x47a772) {
                return _0x275141(_0x47a772);
            },
            'vpzLS': function (_0xb4a396, _0x5e58b8, _0x13d5a9, _0xcb18bc, _0x54af68) {
                return _0xb4a396(_0x5e58b8, _0x13d5a9, _0xcb18bc, _0x54af68);
            },
            'wIlNU': function (_0x340eca, _0x1d4c48) {
                return _0x340eca && _0x1d4c48;
            },
            'xPXaV': function (_0x45e2d8, _0x379a99) {
                return _0x45e2d8(_0x379a99);
            },
            'DtHMp': function (_0x274ddd, _0x53f26c, _0x2cf601) {
                return _0x274ddd(_0x53f26c, _0x2cf601);
            },
            'skVZq': function (_0x58a8a1, _0xdba3f6) {
                return _0x58a8a1 + _0xdba3f6;
            },
            'qcLem': function (_0x42061d, _0x21494d) {
                return _0x42061d(_0x21494d);
            },
            'oWciT': function (_0x3b84a5, _0x3fdff1) {
                return _0x3b84a5 + _0x3fdff1;
            },
            'PEUKY': function (_0x4cdc72, _0x5ad5f2, _0x21d06e, _0x60f05d, _0x3df228, _0x2094c0, _0x41202d, _0x142060) {
                return _0x4cdc72(_0x5ad5f2, _0x21d06e, _0x60f05d, _0x3df228, _0x2094c0, _0x41202d, _0x142060);
            },
            'ggZkS': function (_0x52c862, _0x22a699, _0x2a1070, _0x2f21a2, _0x398e6a) {
                return _0x52c862(_0x22a699, _0x2a1070, _0x2f21a2, _0x398e6a);
            },
            'YRHEO': function (_0x315877, _0x4254eb) {
                return _0x315877 + _0x4254eb;
            },
            'WBSGg': function (_0x4f1a42, _0x112a10, _0x119791, _0x15ef4f) {
                return _0x4f1a42(_0x112a10, _0x119791, _0x15ef4f);
            }
        }, _0x3586b4 = this;
    !errorEmitted && !_0x3586b4[_0x2d1299[_0x24ea98(0x1e9)]] && !_0x3586b4[NS] && (_0x3586b4['emitError'](new Error(_0x2d1299['roUIO']('vue-loader\x20was\x20used\x20without\x20the\x20corresponding\x20plugin.\x20', _0x24ea98(0x1ea)))), errorEmitted = !![]);
    const _0xda201 = _0x353173 => loaderUtils[_0x24ea98(0x1eb)](_0x3586b4, _0x353173), {
            target: _0xa12fa0,
            request: _0x595280,
            minimize: _0x5a5917,
            sourceMap: _0x1afc32,
            rootContext: _0x2b73fb,
            resourcePath: _0x5f5ae3,
            resourceQuery: _0xbe0b66
        } = _0x3586b4, _0x1bf326 = _0xbe0b66[_0x24ea98(0x1ec)](0x1eb5 * -0x1 + -0x2 * 0x133f + 0xac * 0x67), _0x26025b = '&' + _0x1bf326, _0x1f2223 = qs[_0x24ea98(0x1ed)](_0x1bf326), _0x16d55b = loaderUtils[_0x24ea98(0x1ee)](_0x3586b4) || {}, _0x8dd059 = _0x2d1299['RehED'](_0xa12fa0, 'node'), _0x1c8d29 = !!_0x16d55b[_0x24ea98(0x1ef)], _0x138c15 = _0x16d55b[_0x24ea98(0x1f0)] || _0x5a5917 || _0x2d1299[_0x24ea98(0x1f1)](process[_0x24ea98(0x1f2)][_0x24ea98(0x1f3)], _0x2d1299[_0x24ea98(0x1f4)]), _0x377566 = path[_0x24ea98(0x1f5)](_0x5f5ae3), _0x45cc87 = _0x2b73fb || process['cwd'](), _0x5e3ee4 = path[_0x24ea98(0x1f6)](path[_0x24ea98(0x1f7)](_0x45cc87, _0x5f5ae3)), _0x5cf276 = _0x2d1299[_0x24ea98(0x1f8)](parse, {
            'source': _0x2da497,
            'compiler': _0x16d55b['compiler'] || _0x2d1299[_0x24ea98(0x1f8)](loadTemplateCompiler, _0x3586b4),
            'filename': _0x377566,
            'sourceRoot': _0x5e3ee4,
            'needMap': _0x1afc32,
            'isAppService': _0x16d55b[_0x24ea98(0x1f9)],
            'isAppView': _0x16d55b['isAppView'],
            'isAppNVue': _0x16d55b[_0x24ea98(0x1fa)]
        });
    if (_0x16d55b[_0x24ea98(0x1fb)]) {
        const _0x488f06 = /^win/['test'](process[_0x24ea98(0x1fc)]), _0x1ce2b2 = _0x523fc6 => _0x488f06 ? _0x523fc6[_0x24ea98(0x1fd)](/\\/g, '/') : _0x523fc6;
        !_0x16d55b[_0x24ea98(0x1fe)] && (_0x16d55b[_0x24ea98(0x1fe)] = {});
        _0x16d55b[_0x24ea98(0x1fe)]['autoComponentResourcePath'] = _0x1ce2b2(_0x5f5ae3);
        !modules && _0x16d55b[_0x24ea98(0x1fe)] && _0x16d55b[_0x24ea98(0x1fe)][_0x24ea98(0x1ff)] && (modules = _0x16d55b[_0x24ea98(0x1fe)][_0x24ea98(0x1ff)]);
        const _0x2d3196 = _0x2d1299[_0x24ea98(0x1f8)](_0x1ce2b2, _0x2d1299[_0x24ea98(0x200)](require, _0x2d1299[_0x24ea98(0x201)])[_0x24ea98(0x202)]);
        if (_0x2d1299['JsUgU'](_0x1ce2b2, this[_0x24ea98(0x203)])[_0x24ea98(0x204)](_0x2d3196) === -0x4b1 * 0x2 + 0x960 + 0x2)
            _0x5cf276[_0x24ea98(0x205)][_0x24ea98(0x206)] = -0x1d58 + -0xd * -0xe2 + 0x11de, _0x16d55b[_0x24ea98(0x1fe)] && delete _0x16d55b[_0x24ea98(0x1fe)]['modules'];
        else
            _0x16d55b[_0x24ea98(0x1fe)] && (_0x16d55b[_0x24ea98(0x1fe)]['modules'] = modules);
    }
    if (_0x1f2223['type'])
        return _0x2d1299[_0x24ea98(0x207)](selectBlock, _0x5cf276, _0x3586b4, _0x1f2223, !!_0x16d55b[_0x24ea98(0x208)]);
    const _0x2c4196 = path['relative'](process[_0x24ea98(0x1f2)][_0x24ea98(0x209)] || _0x45cc87, _0x5f5ae3)[_0x24ea98(0x1fd)](/^(\.\.[\/\\])+/, ''), _0x2dd8f9 = _0x2d1299[_0x24ea98(0x20a)](_0x2c4196[_0x24ea98(0x1fd)](/\\/g, '/'), _0xbe0b66), _0x577a91 = _0x2d1299['JsUgU'](hash, _0x138c15 ? _0x2d1299['roUIO'](_0x2dd8f9 + '\x0a', _0x2da497) : _0x2dd8f9), _0x2d3240 = _0x5cf276[_0x24ea98(0x205)][_0x24ea98(0x20b)](_0x5280a4 => _0x5280a4['scoped']), _0x201177 = _0x5cf276[_0x24ea98(0x20c)] && _0x5cf276[_0x24ea98(0x20c)][_0x24ea98(0x20d)]['functional'], _0x192f6c = _0x2d1299[_0x24ea98(0x20e)](!_0x8dd059, !_0x138c15) && (_0x5cf276[_0x24ea98(0x20f)] || _0x5cf276[_0x24ea98(0x20c)]) && _0x16d55b[_0x24ea98(0x210)] !== ![];
    let _0x31377d, _0x35a966 = _0x24ea98(0x211), _0x33ee0d;
    if (_0x5cf276[_0x24ea98(0x20c)]) {
        _0x31377d = _0x16d55b[_0x24ea98(0x1fa)] && !!(_0x5cf276[_0x24ea98(0x20c)][_0x24ea98(0x20d)] && _0x5cf276[_0x24ea98(0x20c)][_0x24ea98(0x20d)][_0x24ea98(0x212)]);
        const _0x27683c = _0x5cf276[_0x24ea98(0x20c)][_0x24ea98(0x202)] || _0x5f5ae3, _0x3054cd = _0x24ea98(0x213) + _0x577a91, _0x57fb21 = _0x2d3240 ? _0x24ea98(0x214) : '', _0x24c910 = attrsToQuery(_0x5cf276[_0x24ea98(0x20c)][_0x24ea98(0x20d)]), _0x1b4676 = _0x24ea98(0x215) + _0x3054cd + _0x57fb21 + _0x24c910 + _0x26025b, _0x41e370 = _0x33ee0d = _0x2d1299['xPXaV'](_0xda201, _0x2d1299['roUIO'](_0x27683c, _0x1b4676));
        _0x35a966 = _0x24ea98(0x216) + _0x41e370;
    }
    let _0x3d311d = _0x24ea98(0x217);
    if (_0x5cf276[_0x24ea98(0x20f)]) {
        const _0x424f60 = _0x5cf276['script'][_0x24ea98(0x202)] || _0x5f5ae3, _0x5dbb21 = _0x2d1299[_0x24ea98(0x218)](attrsToQuery, _0x5cf276[_0x24ea98(0x20f)]['attrs'], 'js'), _0x53153b = '?vue&type=script' + _0x5dbb21 + _0x26025b, _0x379c8f = _0xda201(_0x2d1299[_0x24ea98(0x219)](_0x424f60, _0x53153b));
        _0x3d311d = _0x2d1299[_0x24ea98(0x219)]('import\x20script\x20from\x20' + _0x379c8f + '\x0a', 'export\x20*\x20from\x20' + _0x379c8f);
    }
    let _0x2c1d98 = _0x24ea98(0x21a);
    if ((_0x16d55b[_0x24ea98(0x21b)] || _0x16d55b[_0x24ea98(0x21c)]) && _0x5cf276['renderjs']) {
        const _0x63a287 = _0x5cf276['renderjs'][_0x24ea98(0x202)] || _0x5f5ae3, _0x5a3eb0 = _0x2d1299[_0x24ea98(0x218)](attrsToQuery, _0x5cf276[_0x24ea98(0x21d)][_0x24ea98(0x20d)], 'js'), _0xbfa00 = _0x24ea98(0x21e) + _0x5a3eb0 + _0x26025b, _0x8f23e7 = _0x2d1299[_0x24ea98(0x21f)](_0xda201, _0x2d1299[_0x24ea98(0x219)](_0x63a287, _0xbfa00));
        _0x2c1d98 = _0x2d1299['oWciT'](_0x24ea98(0x220) + _0x8f23e7 + '\x0a', _0x24ea98(0x221) + _0x5cf276['renderjs'][_0x24ea98(0x20d)][_0x24ea98(0x222)] + '\x27\x0a') + ('export\x20*\x20from\x20' + _0x8f23e7);
    }
    let _0x366198 = '';
    !_0x16d55b[_0x24ea98(0x1f9)] && _0x5cf276[_0x24ea98(0x205)][_0x24ea98(0x206)] && (_0x366198 = _0x2d1299['PEUKY'](genStylesCode, _0x3586b4, _0x5cf276[_0x24ea98(0x205)], _0x577a91, _0x5f5ae3, _0xda201, _0x192f6c, _0x8dd059 || _0x1c8d29));
    let _0x397b13 = _0x2d1299['oWciT'](('\x0a' + _0x35a966 + '\x0a' + _0x2c1d98 + '\x0a' + _0x3d311d + '\x0a' + _0x366198 + _0x24ea98(0x223) + _0xda201('!' + componentNormalizerPath) + _0x24ea98(0x224) + (_0x201177 ? 'true' : _0x24ea98(0x225)) + _0x24ea98(0x226) + (_0x16d55b['isAppNVue'] ? _0x24ea98(0x227) : /injectStyles/[_0x24ea98(0x1e2)](_0x366198) ? 'injectStyles' : _0x24ea98(0x227)) + _0x24ea98(0x226) + (_0x2d3240 ? JSON['stringify'](_0x577a91) : _0x24ea98(0x227)) + _0x24ea98(0x226) + (_0x8dd059 ? JSON[_0x24ea98(0x228)](hash(_0x595280)) : _0x24ea98(0x227)) + _0x24ea98(0x226) + (_0x1c8d29 ? _0x24ea98(0x229) : _0x24ea98(0x225)) + _0x24ea98(0x22a))[_0x24ea98(0x22b)](), '\x0a');
    _0x5cf276[_0x24ea98(0x22c)] && _0x5cf276[_0x24ea98(0x22c)]['length'] && (_0x397b13 += _0x2d1299[_0x24ea98(0x22d)](genCustomBlocksCode, _0x5cf276['customBlocks'], _0x5f5ae3, _0xbe0b66, _0xda201));
    _0x192f6c && (_0x397b13 += _0x2d1299[_0x24ea98(0x22e)]('\x0a', _0x2d1299[_0x24ea98(0x22f)](genHotReloadCode, _0x577a91, _0x201177, _0x33ee0d)));
    _0x16d55b[_0x24ea98(0x1fa)] && /injectStyles/[_0x24ea98(0x1e2)](_0x366198) && (_0x397b13 += _0x24ea98(0x230));
    if (!_0x138c15)
        _0x397b13 += _0x24ea98(0x231) + JSON['stringify'](_0x2c4196[_0x24ea98(0x1fd)](/\\/g, '/'));
    else
        _0x16d55b['exposeFilename'] && (_0x397b13 += _0x24ea98(0x231) + JSON[_0x24ea98(0x228)](_0x377566));
    return _0x31377d && (_0x397b13 += _0x24ea98(0x232)), _0x397b13 += _0x24ea98(0x233), _0x397b13;
}, module[_0x427b3f(0x234)][_0x427b3f(0x235)] = plugin;
