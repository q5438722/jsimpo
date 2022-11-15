const path = require('path'), hash = require(_0x427b3f(469)), qs = require(_0x427b3f(470)), plugin = require('./plugin'), selectBlock = require(_0x427b3f(471)), loaderUtils = require(_0x427b3f(472)), {attrsToQuery} = require(_0x427b3f(473)), {parse} = require('@vue/component-compiler-utils'), genStylesCode = require(_0x427b3f(474)), {genHotReloadCode} = require(_0x427b3f(475)), genCustomBlocksCode = require(_0x427b3f(476)), componentNormalizerPath = require[_0x427b3f(477)]('./runtime/componentNormalizer'), {NS} = require(_0x427b3f(478));
let errorEmitted = ![], modules;
function loadTemplateCompiler(_0x4131cc) {
    const _0x5d1950 = _0x427b3f, _0x36da5d = {
            'olyeE': function (_0x33d01a, _0x6a6e3d) {
                return _0x33d01a(_0x6a6e3d);
            },
            'Bigaj': _0x5d1950(479),
            'NAQCV': function (_0x2eb328, _0x175326) {
                return _0x2eb328 + _0x175326;
            }
        };
    try {
        return _0x36da5d[_0x5d1950(480)](require, _0x36da5d[_0x5d1950(481)]);
    } catch (_0x227f33) {
        /version mismatch/[_0x5d1950(482)](_0x227f33['toString']()) ? _0x4131cc[_0x5d1950(483)](_0x227f33) : _0x4131cc['emitError'](new Error(_0x36da5d[_0x5d1950(484)]('[vue-loader] vue-template-compiler must be installed as a peer dependency, ', _0x5d1950(485))));
    }
}
function _0x41f0(_0x2803e4, _0x5cb7bb) {
    return _0x41f0 = function (_0x20181c, _0xaa2da4) {
        _0x20181c = _0x20181c - (9 * 17 + 6235 + -5927);
        let _0x5bd662 = _0x48b4[_0x20181c];
        return _0x5bd662;
    }, _0x41f0(_0x2803e4, _0x5cb7bb);
}
module['exports'] = function (_0x2da497) {
    const _0x24ea98 = _0x427b3f, _0x2d1299 = {
            'hfyDT': _0x24ea98(486),
            'roUIO': function (_0x4bf08d, _0x56820d) {
                return _0x4bf08d + _0x56820d;
            },
            'RehED': function (_0x40931a, _0x26b9b3) {
                return _0x40931a === _0x26b9b3;
            },
            'ZksoS': _0x24ea98(487),
            'fsSmO': function (_0x1e2415, _0x49d5c1) {
                return _0x1e2415(_0x49d5c1);
            },
            'LLZGo': function (_0x37b471, _0x4ada13) {
                return _0x37b471(_0x4ada13);
            },
            'dQBpi': _0x24ea98(488),
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
    !errorEmitted && !_0x3586b4[_0x2d1299[_0x24ea98(489)]] && !_0x3586b4[NS] && (_0x3586b4['emitError'](new Error(_0x2d1299['roUIO']('vue-loader was used without the corresponding plugin. ', _0x24ea98(490)))), errorEmitted = !![]);
    const _0xda201 = _0x353173 => loaderUtils[_0x24ea98(491)](_0x3586b4, _0x353173), {
            target: _0xa12fa0,
            request: _0x595280,
            minimize: _0x5a5917,
            sourceMap: _0x1afc32,
            rootContext: _0x2b73fb,
            resourcePath: _0x5f5ae3,
            resourceQuery: _0xbe0b66
        } = _0x3586b4, _0x1bf326 = _0xbe0b66[_0x24ea98(492)](7861 * -1 + -2 * 4927 + 172 * 103), _0x26025b = '&' + _0x1bf326, _0x1f2223 = qs[_0x24ea98(493)](_0x1bf326), _0x16d55b = loaderUtils[_0x24ea98(494)](_0x3586b4) || {}, _0x8dd059 = _0x2d1299['RehED'](_0xa12fa0, 'node'), _0x1c8d29 = !!_0x16d55b[_0x24ea98(495)], _0x138c15 = _0x16d55b[_0x24ea98(496)] || _0x5a5917 || _0x2d1299[_0x24ea98(497)](process[_0x24ea98(498)][_0x24ea98(499)], _0x2d1299[_0x24ea98(500)]), _0x377566 = path[_0x24ea98(501)](_0x5f5ae3), _0x45cc87 = _0x2b73fb || process['cwd'](), _0x5e3ee4 = path[_0x24ea98(502)](path[_0x24ea98(503)](_0x45cc87, _0x5f5ae3)), _0x5cf276 = _0x2d1299[_0x24ea98(504)](parse, {
            'source': _0x2da497,
            'compiler': _0x16d55b['compiler'] || _0x2d1299[_0x24ea98(504)](loadTemplateCompiler, _0x3586b4),
            'filename': _0x377566,
            'sourceRoot': _0x5e3ee4,
            'needMap': _0x1afc32,
            'isAppService': _0x16d55b[_0x24ea98(505)],
            'isAppView': _0x16d55b['isAppView'],
            'isAppNVue': _0x16d55b[_0x24ea98(506)]
        });
    if (_0x16d55b[_0x24ea98(507)]) {
        const _0x488f06 = /^win/['test'](process[_0x24ea98(508)]), _0x1ce2b2 = _0x523fc6 => _0x488f06 ? _0x523fc6[_0x24ea98(509)](/\\/g, '/') : _0x523fc6;
        !_0x16d55b[_0x24ea98(510)] && (_0x16d55b[_0x24ea98(510)] = {});
        _0x16d55b[_0x24ea98(510)]['autoComponentResourcePath'] = _0x1ce2b2(_0x5f5ae3);
        !modules && _0x16d55b[_0x24ea98(510)] && _0x16d55b[_0x24ea98(510)][_0x24ea98(511)] && (modules = _0x16d55b[_0x24ea98(510)][_0x24ea98(511)]);
        const _0x2d3196 = _0x2d1299[_0x24ea98(504)](_0x1ce2b2, _0x2d1299[_0x24ea98(512)](require, _0x2d1299[_0x24ea98(513)])[_0x24ea98(514)]);
        if (_0x2d1299['JsUgU'](_0x1ce2b2, this[_0x24ea98(515)])[_0x24ea98(516)](_0x2d3196) === -1201 * 2 + 2400 + 2)
            _0x5cf276[_0x24ea98(517)][_0x24ea98(518)] = -7512 + -13 * -226 + 4574, _0x16d55b[_0x24ea98(510)] && delete _0x16d55b[_0x24ea98(510)]['modules'];
        else
            _0x16d55b[_0x24ea98(510)] && (_0x16d55b[_0x24ea98(510)]['modules'] = modules);
    }
    if (_0x1f2223['type'])
        return _0x2d1299[_0x24ea98(519)](selectBlock, _0x5cf276, _0x3586b4, _0x1f2223, !!_0x16d55b[_0x24ea98(520)]);
    const _0x2c4196 = path['relative'](process[_0x24ea98(498)][_0x24ea98(521)] || _0x45cc87, _0x5f5ae3)[_0x24ea98(509)](/^(\.\.[\/\\])+/, ''), _0x2dd8f9 = _0x2d1299[_0x24ea98(522)](_0x2c4196[_0x24ea98(509)](/\\/g, '/'), _0xbe0b66), _0x577a91 = _0x2d1299['JsUgU'](hash, _0x138c15 ? _0x2d1299['roUIO'](_0x2dd8f9 + '\n', _0x2da497) : _0x2dd8f9), _0x2d3240 = _0x5cf276[_0x24ea98(517)][_0x24ea98(523)](_0x5280a4 => _0x5280a4['scoped']), _0x201177 = _0x5cf276[_0x24ea98(524)] && _0x5cf276[_0x24ea98(524)][_0x24ea98(525)]['functional'], _0x192f6c = _0x2d1299[_0x24ea98(526)](!_0x8dd059, !_0x138c15) && (_0x5cf276[_0x24ea98(527)] || _0x5cf276[_0x24ea98(524)]) && _0x16d55b[_0x24ea98(528)] !== ![];
    let _0x31377d, _0x35a966 = _0x24ea98(529), _0x33ee0d;
    if (_0x5cf276[_0x24ea98(524)]) {
        _0x31377d = _0x16d55b[_0x24ea98(506)] && !!(_0x5cf276[_0x24ea98(524)][_0x24ea98(525)] && _0x5cf276[_0x24ea98(524)][_0x24ea98(525)][_0x24ea98(530)]);
        const _0x27683c = _0x5cf276[_0x24ea98(524)][_0x24ea98(514)] || _0x5f5ae3, _0x3054cd = _0x24ea98(531) + _0x577a91, _0x57fb21 = _0x2d3240 ? _0x24ea98(532) : '', _0x24c910 = attrsToQuery(_0x5cf276[_0x24ea98(524)][_0x24ea98(525)]), _0x1b4676 = _0x24ea98(533) + _0x3054cd + _0x57fb21 + _0x24c910 + _0x26025b, _0x41e370 = _0x33ee0d = _0x2d1299['xPXaV'](_0xda201, _0x2d1299['roUIO'](_0x27683c, _0x1b4676));
        _0x35a966 = _0x24ea98(534) + _0x41e370;
    }
    let _0x3d311d = _0x24ea98(535);
    if (_0x5cf276[_0x24ea98(527)]) {
        const _0x424f60 = _0x5cf276['script'][_0x24ea98(514)] || _0x5f5ae3, _0x5dbb21 = _0x2d1299[_0x24ea98(536)](attrsToQuery, _0x5cf276[_0x24ea98(527)]['attrs'], 'js'), _0x53153b = '?vue&type=script' + _0x5dbb21 + _0x26025b, _0x379c8f = _0xda201(_0x2d1299[_0x24ea98(537)](_0x424f60, _0x53153b));
        _0x3d311d = _0x2d1299[_0x24ea98(537)]('import script from ' + _0x379c8f + '\n', 'export * from ' + _0x379c8f);
    }
    let _0x2c1d98 = _0x24ea98(538);
    if ((_0x16d55b[_0x24ea98(539)] || _0x16d55b[_0x24ea98(540)]) && _0x5cf276['renderjs']) {
        const _0x63a287 = _0x5cf276['renderjs'][_0x24ea98(514)] || _0x5f5ae3, _0x5a3eb0 = _0x2d1299[_0x24ea98(536)](attrsToQuery, _0x5cf276[_0x24ea98(541)][_0x24ea98(525)], 'js'), _0xbfa00 = _0x24ea98(542) + _0x5a3eb0 + _0x26025b, _0x8f23e7 = _0x2d1299[_0x24ea98(543)](_0xda201, _0x2d1299[_0x24ea98(537)](_0x63a287, _0xbfa00));
        _0x2c1d98 = _0x2d1299['oWciT'](_0x24ea98(544) + _0x8f23e7 + '\n', _0x24ea98(545) + _0x5cf276['renderjs'][_0x24ea98(525)][_0x24ea98(546)] + '\'\n') + ('export * from ' + _0x8f23e7);
    }
    let _0x366198 = '';
    !_0x16d55b[_0x24ea98(505)] && _0x5cf276[_0x24ea98(517)][_0x24ea98(518)] && (_0x366198 = _0x2d1299['PEUKY'](genStylesCode, _0x3586b4, _0x5cf276[_0x24ea98(517)], _0x577a91, _0x5f5ae3, _0xda201, _0x192f6c, _0x8dd059 || _0x1c8d29));
    let _0x397b13 = _0x2d1299['oWciT'](('\n' + _0x35a966 + '\n' + _0x2c1d98 + '\n' + _0x3d311d + '\n' + _0x366198 + _0x24ea98(547) + _0xda201('!' + componentNormalizerPath) + _0x24ea98(548) + (_0x201177 ? 'true' : _0x24ea98(549)) + _0x24ea98(550) + (_0x16d55b['isAppNVue'] ? _0x24ea98(551) : /injectStyles/[_0x24ea98(482)](_0x366198) ? 'injectStyles' : _0x24ea98(551)) + _0x24ea98(550) + (_0x2d3240 ? JSON['stringify'](_0x577a91) : _0x24ea98(551)) + _0x24ea98(550) + (_0x8dd059 ? JSON[_0x24ea98(552)](hash(_0x595280)) : _0x24ea98(551)) + _0x24ea98(550) + (_0x1c8d29 ? _0x24ea98(553) : _0x24ea98(549)) + _0x24ea98(554))[_0x24ea98(555)](), '\n');
    _0x5cf276[_0x24ea98(556)] && _0x5cf276[_0x24ea98(556)]['length'] && (_0x397b13 += _0x2d1299[_0x24ea98(557)](genCustomBlocksCode, _0x5cf276['customBlocks'], _0x5f5ae3, _0xbe0b66, _0xda201));
    _0x192f6c && (_0x397b13 += _0x2d1299[_0x24ea98(558)]('\n', _0x2d1299[_0x24ea98(559)](genHotReloadCode, _0x577a91, _0x201177, _0x33ee0d)));
    _0x16d55b[_0x24ea98(506)] && /injectStyles/[_0x24ea98(482)](_0x366198) && (_0x397b13 += _0x24ea98(560));
    if (!_0x138c15)
        _0x397b13 += _0x24ea98(561) + JSON['stringify'](_0x2c4196[_0x24ea98(509)](/\\/g, '/'));
    else
        _0x16d55b['exposeFilename'] && (_0x397b13 += _0x24ea98(561) + JSON[_0x24ea98(552)](_0x377566));
    return _0x31377d && (_0x397b13 += _0x24ea98(562)), _0x397b13 += _0x24ea98(563), _0x397b13;
}, module[_0x427b3f(564)][_0x427b3f(565)] = plugin;