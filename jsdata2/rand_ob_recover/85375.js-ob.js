var ArrayRemove = require(_0x14843a(405)), CameraEvents = require(_0x14843a(406)), Class = require(_0x14843a(407)), CONST = require(_0x14843a(408)), EventEmitter = require('eventemitter3'), Events = require(_0x14843a(409)), GameEvents = require(_0x14843a(410)), IsSizePowerOfTwo = require(_0x14843a(411)), Matrix4 = require(_0x14843a(412)), NOOP = require(_0x14843a(413)), PipelineManager = require(_0x14843a(414)), RenderTarget = require(_0x14843a(415)), ScaleEvents = require(_0x14843a(416)), TextureEvents = require(_0x14843a(417)), Utils = require('./Utils'), WebGLSnapshot = require(_0x14843a(418)), WebGLRenderer = new Class({
        'Extends': EventEmitter,
        'initialize': function WebGLRenderer(_0x1b567f) {
            var _0x175e80 = _0x14843a, _0x228039 = {
                    'gtqeJ': '11|12|21|36|35|26|27|30|42|31|15|48|49|16|40|32|52|17|1|23|14|20|57|33|9|46|54|55|41|0|8|22|45|34|24|43|4|3|44|18|13|7|28|39|19|6|5|47|51|38|25|50|53|29|2|56|37|10',
                    'Cdzwz': _0x175e80(419)
                }, _0x392377 = _0x228039[_0x175e80(420)][_0x175e80(421)]('|'), _0x238895 = -9 * -157 + 5 * 1447 + 1 * -8648;
            while (!![]) {
                switch (_0x392377[_0x238895++]) {
                case '0':
                    this['gl'] = null;
                    continue;
                case '1':
                    this['textureZero'];
                    continue;
                case '2':
                    this[_0x175e80(422)];
                    continue;
                case '3':
                    this[_0x175e80(423)] = null;
                    continue;
                case '4':
                    this[_0x175e80(424)] = -7434 + -5301 + 1 * 12735;
                    continue;
                case '5':
                    this['nextTypeMatch'] = ![];
                    continue;
                case '6':
                    this[_0x175e80(425)] = ![];
                    continue;
                case '7':
                    this[_0x175e80(426)] = {
                        'mask': null,
                        'camera': null
                    };
                    continue;
                case '8':
                    this[_0x175e80(427)] = null;
                    continue;
                case '9':
                    this[_0x175e80(428)] = ![];
                    continue;
                case '10':
                    this['init'](this[_0x175e80(429)]);
                    continue;
                case '11':
                    EventEmitter[_0x175e80(430)](this);
                    continue;
                case '12':
                    var _0x50e4ae = _0x1b567f[_0x175e80(429)];
                    continue;
                case '13':
                    this[_0x175e80(431)] = [];
                    continue;
                case '14':
                    this['currentFramebuffer'] = null;
                    continue;
                case '15':
                    this['blendModes'] = [];
                    continue;
                case '16':
                    this[_0x175e80(432)] = -1 * -604 + 236 + -210 * 4;
                    continue;
                case '17':
                    this[_0x175e80(433)];
                    continue;
                case '18':
                    this[_0x175e80(434)] = 2991 * -2 + -4018 + 100 * 100;
                    continue;
                case '19':
                    this[_0x175e80(435)] = '';
                    continue;
                case '20':
                    this[_0x175e80(436)] = [];
                    continue;
                case '21':
                    var _0x853287 = {
                        'alpha': _0x50e4ae[_0x175e80(437)],
                        'desynchronized': _0x50e4ae['desynchronized'],
                        'depth': ![],
                        'antialias': _0x50e4ae[_0x175e80(438)],
                        'premultipliedAlpha': _0x50e4ae[_0x175e80(439)],
                        'stencil': !![],
                        'failIfMajorPerformanceCaveat': _0x50e4ae['failIfMajorPerformanceCaveat'],
                        'powerPreference': _0x50e4ae[_0x175e80(440)],
                        'preserveDrawingBuffer': _0x50e4ae['preserveDrawingBuffer']
                    };
                    continue;
                case '22':
                    this[_0x175e80(441)] = null;
                    continue;
                case '23':
                    this[_0x175e80(442)];
                    continue;
                case '24':
                    this[_0x175e80(443)] = [];
                    continue;
                case '25':
                    this[_0x175e80(444)] = ![];
                    continue;
                case '26':
                    this['type'] = CONST[_0x175e80(445)];
                    continue;
                case '27':
                    this['pipelines'] = null;
                    continue;
                case '28':
                    this[_0x175e80(446)] = {
                        'mask': null,
                        'camera': null
                    };
                    continue;
                case '29':
                    this[_0x175e80(447)] = null;
                    continue;
                case '30':
                    this[_0x175e80(448)] = -58 * -127 + 818 * -7 + -1640;
                    continue;
                case '31':
                    this['canvas'] = _0x1b567f['canvas'];
                    continue;
                case '32':
                    this[_0x175e80(449)] = 3245 + -3041 + 4 * -51;
                    continue;
                case '33':
                    this[_0x175e80(450)] = Infinity;
                    continue;
                case '34':
                    this[_0x175e80(451)] = {};
                    continue;
                case '35':
                    this[_0x175e80(452)] = _0x1b567f;
                    continue;
                case '36':
                    this[_0x175e80(429)] = {
                        'clearBeforeRender': _0x50e4ae[_0x175e80(453)],
                        'antialias': _0x50e4ae[_0x175e80(454)],
                        'backgroundColor': _0x50e4ae[_0x175e80(455)],
                        'contextCreation': _0x853287,
                        'roundPixels': _0x50e4ae[_0x175e80(456)],
                        'maxTextures': _0x50e4ae[_0x175e80(449)],
                        'maxTextureSize': _0x50e4ae['maxTextureSize'],
                        'batchSize': _0x50e4ae[_0x175e80(457)],
                        'maxLights': _0x50e4ae[_0x175e80(458)],
                        'mipmapFilter': _0x50e4ae['mipmapFilter']
                    };
                    continue;
                case '37':
                    this[_0x175e80(459)] = -15 * -13 + 1198 * -1 + 1003;
                    continue;
                case '38':
                    this[_0x175e80(460)] = 3994 + 7721 + -11715;
                    continue;
                case '39':
                    this['glFuncMap'] = null;
                    continue;
                case '40':
                    this[_0x175e80(461)] = -7058 + 1 * -9598 + -16656 * -1;
                    continue;
                case '41':
                    this['contextRestoredHandler'] = NOOP;
                    continue;
                case '42':
                    this[_0x175e80(462)] = -6108 + -9435 + 15543;
                    continue;
                case '43':
                    this['compression'] = {
                        'ETC1': ![],
                        'PVRTC': ![],
                        'S3TC': ![]
                    };
                    continue;
                case '44':
                    this['whiteTexture'] = null;
                    continue;
                case '45':
                    this[_0x175e80(463)] = null;
                    continue;
                case '46':
                    this[_0x175e80(464)] = null;
                    continue;
                case '47':
                    this[_0x175e80(465)] = ![];
                    continue;
                case '48':
                    this[_0x175e80(466)] = ![];
                    continue;
                case '49':
                    this[_0x175e80(467)] = {
                        'x': 0,
                        'y': 0,
                        'width': 1,
                        'height': 1,
                        'getPixel': ![],
                        'callback': null,
                        'type': _0x228039[_0x175e80(468)],
                        'encoder': 0.92,
                        'isFramebuffer': ![],
                        'bufferWidth': 0,
                        'bufferHeight': 0
                    };
                    continue;
                case '50':
                    this[_0x175e80(469)] = [
                        9136 + 4935 + 14071 * -1,
                        5099 + -3 * -2385 + -12254,
                        -9608 + 6799 + 2809,
                        2033 + 3 * -2743 + 6196
                    ];
                    continue;
                case '51':
                    this[_0x175e80(470)] = null;
                    continue;
                case '52':
                    this['textureIndexes'];
                    continue;
                case '53':
                    this['isBooted'] = ![];
                    continue;
                case '54':
                    this[_0x175e80(471)] = [];
                    continue;
                case '55':
                    this[_0x175e80(472)] = NOOP;
                    continue;
                case '56':
                    this['projectionWidth'] = -8854 + 119 * 49 + 3023;
                    continue;
                case '57':
                    this[_0x175e80(473)] = null;
                    continue;
                }
                break;
            }
        },
        'init': function (_0x4976e1) {
            var _0x71f869 = _0x14843a, _0x4964c4 = {
                    'AnJBH': _0x71f869(474),
                    'LHppi': function (_0x29097f, _0x594908) {
                        return _0x29097f <= _0x594908;
                    },
                    'UapmF': function (_0x142fcc, _0x5d2e89) {
                        return _0x142fcc === _0x5d2e89;
                    },
                    'uAUar': function (_0x251ae3, _0x50b052) {
                        return _0x251ae3 + _0x50b052;
                    },
                    'OeSov': _0x71f869(475),
                    'YBPhi': _0x71f869(476),
                    'Dciox': function (_0x1e75d5, _0xc89b40) {
                        return _0x1e75d5 > _0xc89b40;
                    },
                    'WHrhF': function (_0x3b74fe, _0x46967d) {
                        return _0x3b74fe < _0x46967d;
                    },
                    'JmYUX': '1|0|4|5|2|3',
                    'MsWio': function (_0x41fd8d, _0x4fdb4e) {
                        return _0x41fd8d + _0x4fdb4e;
                    },
                    'qStzf': _0x71f869(477),
                    'tFUnQ': function (_0x101021, _0xc46f15) {
                        return _0x101021 + _0xc46f15;
                    },
                    'lSCeS': _0x71f869(478),
                    'rPixs': function (_0x4e1ae3, _0x2408d9) {
                        return _0x4e1ae3 + _0x2408d9;
                    },
                    'uaOnh': 'webglcontextlost',
                    'pTFlb': function (_0x54bf60, _0xc0738e) {
                        return _0x54bf60 > _0xc0738e;
                    },
                    'CAxNf': _0x71f869(479),
                    'NFhCt': _0x71f869(480),
                    'JOpxS': _0x71f869(481),
                    'vyohU': function (_0x17db8c, _0x468f47) {
                        return _0x17db8c + _0x468f47;
                    },
                    'QyHfC': _0x71f869(482),
                    'YUdTs': 'webgl',
                    'aTasb': _0x71f869(483),
                    'bJmtg': _0x71f869(484)
                }, _0x1274ce = _0x4964c4[_0x71f869(485)][_0x71f869(421)]('|'), _0x43be4b = 1 * -48 + 860 + -812;
            while (!![]) {
                switch (_0x1274ce[_0x43be4b++]) {
                case '0':
                    for (var _0x5bee34 = -254 * -3 + -5 * -849 + -5007; _0x4964c4[_0x71f869(486)](_0x5bee34, 1229 + -8939 + 7737); _0x5bee34++) {
                        this[_0x71f869(487)][_0x71f869(488)]({
                            'func': [
                                _0x15a989[_0x71f869(489)],
                                _0x15a989[_0x71f869(490)]
                            ],
                            'equation': _0x15a989[_0x71f869(491)]
                        });
                    }
                    continue;
                case '1':
                    this[_0x71f869(422)] = new Matrix4()[_0x71f869(492)]();
                    continue;
                case '2':
                    var _0x958f0b = this[_0x71f869(433)];
                    continue;
                case '3':
                    (!_0x4976e1[_0x71f869(449)] || _0x4964c4[_0x71f869(493)](_0x4976e1[_0x71f869(449)], -(3 * 1627 + -2615 + -2265))) && (_0x4976e1[_0x71f869(449)] = _0x15a989[_0x71f869(494)](_0x15a989[_0x71f869(495)]));
                    continue;
                case '4':
                    this[_0x71f869(470)] = _0x15a989[_0x4976e1[_0x71f869(470)]];
                    continue;
                case '5':
                    this['gl'] = _0x15a989;
                    continue;
                case '6':
                    this[_0x71f869(432)] = 9531 + -2 * 971 + -7588;
                    continue;
                case '7':
                    this[_0x71f869(461)]++;
                    continue;
                case '8':
                    var _0x705e72 = _0x4964c4[_0x71f869(496)](_0x4964c4[_0x71f869(497)], _0x305319);
                    continue;
                case '9':
                    var _0x1a0602 = _0x4964c4[_0x71f869(498)];
                    continue;
                case '10':
                    _0x15a989[_0x71f869(499)](_0x15a989[_0x71f869(500)]);
                    continue;
                case '11':
                    var _0x26236c = this;
                    continue;
                case '12':
                    this[_0x71f869(501)] = function () {
                        var _0x280bff = _0x71f869;
                        _0x26236c[_0x280bff(466)] = ![], _0x26236c[_0x280bff(502)](_0x26236c[_0x280bff(429)]), _0x26236c[_0x280bff(452)][_0x280bff(503)][_0x280bff(504)](GameEvents['CONTEXT_RESTORED'], _0x26236c);
                    };
                    continue;
                case '13':
                    this[_0x71f869(505)] = new PipelineManager(this);
                    continue;
                case '14':
                    this[_0x71f869(463)] = _0x4964c4['Dciox'](_0x2625f4['indexOf'](_0x15897f), -(-1 * 8135 + 4303 + 1 * 3833)) ? _0x15a989['getExtension'](_0x15897f) : null;
                    continue;
                case '15':
                    var _0x5869ba = this[_0x71f869(452)];
                    continue;
                case '16':
                    this[_0x71f869(487)][2145 + -9696 + -13 * -581][_0x71f869(506)] = [
                        _0x15a989[_0x71f869(507)],
                        _0x15a989[_0x71f869(490)]
                    ];
                    continue;
                case '17':
                    _0x5869ba[_0x71f869(508)][_0x71f869(509)](TextureEvents[_0x71f869(510)], this[_0x71f869(511)], this);
                    continue;
                case '18':
                    for (var _0x36ab05 = 3773 + 8629 + -12402; _0x4964c4[_0x71f869(512)](_0x36ab05, this[_0x71f869(449)]); _0x36ab05++) {
                        var _0xbf9858 = _0x4964c4['JmYUX'][_0x71f869(421)]('|'), _0x5686e0 = 59 * 61 + 1371 * 1 + -4970 * 1;
                        while (!![]) {
                            switch (_0xbf9858[_0x5686e0++]) {
                            case '0':
                                _0x15a989[_0x71f869(513)](_0x4964c4['MsWio'](_0x15a989[_0x71f869(514)], _0x36ab05));
                                continue;
                            case '1':
                                var _0x287353 = _0x15a989[_0x71f869(515)]();
                                continue;
                            case '2':
                                _0x958f0b[_0x36ab05] = _0x287353;
                                continue;
                            case '3':
                                this[_0x71f869(516)]['push'](_0x36ab05);
                                continue;
                            case '4':
                                _0x15a989[_0x71f869(517)](_0x15a989[_0x71f869(518)], _0x287353);
                                continue;
                            case '5':
                                _0x15a989[_0x71f869(519)](_0x15a989['TEXTURE_2D'], -5256 + -9654 + 14910, _0x15a989[_0x71f869(520)], -34 * -79 + 181 * -31 + -2926 * -1, -4 * -29 + 1 * -757 + 642, 3800 * 2 + -1 * 3750 + -3850, _0x15a989[_0x71f869(520)], _0x15a989[_0x71f869(521)], new Uint8Array([
                                    -14 * 607 + 5716 + 2782,
                                    8424 + -4431 * -2 + 8643 * -2,
                                    -9806 * 1 + 7863 + 2198,
                                    -587 * -3 + 5975 + 1 * -7481
                                ]));
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '19':
                    this[_0x71f869(443)][-8153 + 114 * -41 + -273 * -47] = _0x15a989[_0x71f869(522)];
                    continue;
                case '20':
                    var _0x15a989;
                    continue;
                case '21':
                    var _0x2625f4 = _0x15a989[_0x71f869(523)]();
                    continue;
                case '22':
                    this['blendModes'][-4132 + -7512 * -1 + 307 * -11][_0x71f869(506)] = [
                        _0x15a989[_0x71f869(489)],
                        _0x15a989[_0x71f869(524)]
                    ];
                    continue;
                case '23':
                    this[_0x71f869(443)][47 * -1 + 4572 + 4523 * -1] = _0x15a989[_0x71f869(521)];
                    continue;
                case '24':
                    this[_0x71f869(525)]['PVRTC'] = _0x15a989['getExtension'](_0x4964c4['MsWio'](_0x305319, _0x4964c4[_0x71f869(526)])) || _0x15a989[_0x71f869(527)](_0x4964c4[_0x71f869(528)](_0x705e72, 'pvrtc'));
                    continue;
                case '25':
                    _0x15a989[_0x71f869(529)](_0x17eabb[_0x71f869(530)], _0x17eabb[_0x71f869(531)], _0x17eabb[_0x71f869(532)], _0x17eabb[_0x71f869(533)]);
                    continue;
                case '26':
                    this[_0x71f869(449)] = Utils[_0x71f869(534)](_0x15a989, _0x4976e1[_0x71f869(449)]);
                    continue;
                case '27':
                    this[_0x71f869(535)] = {
                        'mat2': {
                            'func': _0x15a989[_0x71f869(536)],
                            'length': 1,
                            'matrix': !![]
                        },
                        'mat3': {
                            'func': _0x15a989[_0x71f869(537)],
                            'length': 1,
                            'matrix': !![]
                        },
                        'mat4': {
                            'func': _0x15a989[_0x71f869(538)],
                            'length': 1,
                            'matrix': !![]
                        },
                        '1f': {
                            'func': _0x15a989['uniform1f'],
                            'length': 1
                        },
                        '1fv': {
                            'func': _0x15a989['uniform1fv'],
                            'length': 1
                        },
                        '1i': {
                            'func': _0x15a989['uniform1i'],
                            'length': 1
                        },
                        '1iv': {
                            'func': _0x15a989[_0x71f869(539)],
                            'length': 1
                        },
                        '2f': {
                            'func': _0x15a989[_0x71f869(540)],
                            'length': 2
                        },
                        '2fv': {
                            'func': _0x15a989[_0x71f869(541)],
                            'length': 1
                        },
                        '2i': {
                            'func': _0x15a989[_0x71f869(542)],
                            'length': 2
                        },
                        '2iv': {
                            'func': _0x15a989[_0x71f869(543)],
                            'length': 1
                        },
                        '3f': {
                            'func': _0x15a989[_0x71f869(544)],
                            'length': 3
                        },
                        '3fv': {
                            'func': _0x15a989[_0x71f869(545)],
                            'length': 1
                        },
                        '3i': {
                            'func': _0x15a989[_0x71f869(546)],
                            'length': 3
                        },
                        '3iv': {
                            'func': _0x15a989[_0x71f869(547)],
                            'length': 1
                        },
                        '4f': {
                            'func': _0x15a989[_0x71f869(548)],
                            'length': 4
                        },
                        '4fv': {
                            'func': _0x15a989[_0x71f869(549)],
                            'length': 1
                        },
                        '4i': {
                            'func': _0x15a989[_0x71f869(550)],
                            'length': 4
                        },
                        '4iv': {
                            'func': _0x15a989[_0x71f869(551)],
                            'length': 1
                        }
                    };
                    continue;
                case '28':
                    _0x15a989['activeTexture'](_0x15a989[_0x71f869(552)]);
                    continue;
                case '29':
                    this[_0x71f869(487)][-335 + 6049 * 1 + -5713][_0x71f869(506)] = [
                        _0x15a989[_0x71f869(489)],
                        _0x15a989[_0x71f869(553)]
                    ];
                    continue;
                case '30':
                    return this;
                case '31':
                    this['glFormats'][46 * -179 + -267 * 5 + -1 * -9569] = _0x15a989[_0x71f869(554)];
                    continue;
                case '32':
                    this[_0x71f869(555)](CONST[_0x71f869(556)]['NORMAL']);
                    continue;
                case '33':
                    this[_0x71f869(525)]['S3TC'] = _0x15a989['getExtension'](_0x4964c4[_0x71f869(528)](_0x305319, _0x4964c4[_0x71f869(557)])) || _0x15a989[_0x71f869(527)](_0x4964c4[_0x71f869(558)](_0x705e72, _0x71f869(478)));
                    continue;
                case '34':
                    _0x5906f7[_0x71f869(559)](_0x4964c4[_0x71f869(560)], this[_0x71f869(472)], ![]);
                    continue;
                case '35':
                    this[_0x71f869(441)] = _0x4964c4[_0x71f869(561)](_0x2625f4[_0x71f869(562)](_0x1a0602), -(8659 * -1 + -2174 + 10834)) ? _0x15a989['getExtension'](_0x1a0602) : null;
                    continue;
                case '36':
                    var _0x305319 = _0x4964c4[_0x71f869(563)];
                    continue;
                case '37':
                    _0x5906f7[_0x71f869(559)](_0x4964c4[_0x71f869(564)], this[_0x71f869(501)], ![]);
                    continue;
                case '38':
                    this[_0x71f869(472)] = function (_0x484f9f) {
                        var _0x2b8779 = _0x71f869;
                        _0x26236c[_0x2b8779(466)] = !![], _0x26236c['game']['events']['emit'](GameEvents[_0x2b8779(565)], _0x26236c), _0x484f9f[_0x2b8779(566)]();
                    };
                    continue;
                case '39':
                    this[_0x71f869(525)][_0x71f869(567)] = _0x15a989[_0x71f869(527)](_0x305319 + _0x4964c4[_0x71f869(568)]) || _0x15a989['getExtension'](_0x4964c4[_0x71f869(569)](_0x705e72, _0x4964c4[_0x71f869(568)]));
                    continue;
                case '40':
                    var _0x15897f = _0x4964c4['QyHfC'];
                    continue;
                case '41':
                    this[_0x71f869(443)][1 * 8891 + 1076 + 4 * -2491] = _0x15a989[_0x71f869(570)];
                    continue;
                case '42':
                    this[_0x71f869(443)][-1 * -5449 + 3910 + -9358] = _0x15a989[_0x71f869(571)];
                    continue;
                case '43':
                    var _0x17eabb = _0x4976e1['backgroundColor'];
                    continue;
                case '44':
                    this['supportedExtensions'] = _0x2625f4;
                    continue;
                case '45':
                    this[_0x71f869(516)] = [];
                    continue;
                case '46':
                    _0x15a989['enable'](_0x15a989[_0x71f869(572)]);
                    continue;
                case '47':
                    _0x15a989[_0x71f869(499)](_0x15a989['CULL_FACE']);
                    continue;
                case '48':
                    _0x5869ba[_0x71f869(573)] = _0x15a989;
                    continue;
                case '49':
                    _0x5869ba['config']['context'] ? _0x15a989 = _0x5869ba[_0x71f869(429)][_0x71f869(573)] : _0x15a989 = _0x5906f7[_0x71f869(574)](_0x4964c4[_0x71f869(575)], _0x4976e1[_0x71f869(576)]) || _0x5906f7[_0x71f869(574)](_0x4964c4['aTasb'], _0x4976e1[_0x71f869(576)]);
                    continue;
                case '50':
                    if (Array[_0x71f869(577)](_0x958f0b))
                        for (var _0x29223 = 7556 + 3681 * -1 + -25 * 155; _0x4964c4[_0x71f869(512)](_0x5bee34, this['maxTextures']); _0x29223++) {
                            _0x15a989['deleteTexture'](_0x958f0b[_0x29223]);
                        }
                    else
                        _0x958f0b = new Array(this['maxTextures']);
                    continue;
                case '51':
                    if (!_0x15a989 || _0x15a989[_0x71f869(578)]()) {
                        this[_0x71f869(466)] = !![];
                        throw new Error(_0x4964c4[_0x71f869(579)]);
                    }
                    continue;
                case '52':
                    !_0x4976e1[_0x71f869(580)] && (_0x4976e1[_0x71f869(580)] = _0x15a989[_0x71f869(494)](_0x15a989[_0x71f869(581)]));
                    continue;
                case '53':
                    var _0x5906f7 = this['canvas'];
                    continue;
                case '54':
                    this[_0x71f869(487)][-598 + 9877 + 22 * -421] = {
                        'func': [
                            _0x15a989[_0x71f869(582)],
                            _0x15a989[_0x71f869(490)]
                        ],
                        'equation': _0x15a989[_0x71f869(583)]
                    };
                    continue;
                case '55':
                    this['tempTextures'] = _0x958f0b;
                    continue;
                }
                break;
            }
        },
        'boot': function () {
            var _0x5ef6cc = _0x14843a, _0x2764a8 = {
                    'dtQwC': '__WHITE',
                    'rdJeP': '__DEFAULT'
                }, _0x5249ce = _0x5ef6cc(584)[_0x5ef6cc(421)]('|'), _0x4a3109 = 72 * 73 + -3 * 2230 + 1434;
            while (!![]) {
                switch (_0x5249ce[_0x4a3109++]) {
                case '0':
                    this[_0x5ef6cc(585)] = _0x331b3f[_0x5ef6cc(508)]['getFrame'](_0x2764a8['dtQwC']);
                    continue;
                case '1':
                    _0x4bb076[_0x5ef6cc(586)](_0x4bb076[_0x5ef6cc(587)], null);
                    continue;
                case '2':
                    _0x4bb076[_0x5ef6cc(588)](_0x4bb076['SCISSOR_TEST']);
                    continue;
                case '3':
                    _0x331b3f[_0x5ef6cc(589)]['on'](ScaleEvents[_0x5ef6cc(590)], this[_0x5ef6cc(591)], this);
                    continue;
                case '4':
                    var _0x1d4b9d = this[_0x5ef6cc(505)];
                    continue;
                case '5':
                    _0x1d4b9d[_0x5ef6cc(511)](_0x331b3f['config'][_0x5ef6cc(592)]);
                    continue;
                case '6':
                    this[_0x5ef6cc(462)] = _0x118c24[_0x5ef6cc(462)];
                    continue;
                case '7':
                    var _0x331b3f = this['game'];
                    continue;
                case '8':
                    this[_0x5ef6cc(447)] = new RenderTarget(this, this[_0x5ef6cc(448)], this[_0x5ef6cc(462)], 88 * 7 + -251 * 16 + 1 * 3401, -1 * -877 + -88 * -61 + 1 * -6245, !![], !![]);
                    continue;
                case '9':
                    this[_0x5ef6cc(423)] = _0x331b3f[_0x5ef6cc(508)][_0x5ef6cc(593)](_0x2764a8[_0x5ef6cc(594)]);
                    continue;
                case '10':
                    var _0x118c24 = _0x331b3f[_0x5ef6cc(589)][_0x5ef6cc(595)];
                    continue;
                case '11':
                    this[_0x5ef6cc(448)] = _0x118c24[_0x5ef6cc(448)];
                    continue;
                case '12':
                    this['isBooted'] = !![];
                    continue;
                case '13':
                    this[_0x5ef6cc(596)](_0x118c24[_0x5ef6cc(448)], _0x118c24[_0x5ef6cc(462)]);
                    continue;
                case '14':
                    var _0x4bb076 = this['gl'];
                    continue;
                }
                break;
            }
        },
        'onResize': function (_0x51174d, _0x1c76d3) {
            var _0x49ba44 = _0x14843a, _0x55e701 = {
                    'HfhVW': function (_0x37b144, _0x838eff) {
                        return _0x37b144 !== _0x838eff;
                    }
                };
            (_0x55e701[_0x49ba44(597)](_0x1c76d3['width'], this['width']) || _0x55e701[_0x49ba44(597)](_0x1c76d3[_0x49ba44(462)], this['height'])) && this[_0x49ba44(596)](_0x1c76d3[_0x49ba44(448)], _0x1c76d3[_0x49ba44(462)]);
        },
        'beginCapture': function (_0x3e7ceb, _0x45f778) {
            var _0xc6bfac = _0x14843a, _0x5d0517 = {
                    'Nmhnr': '4|1|3|2|0',
                    'MWDvS': function (_0x5517d9, _0xc4c386) {
                        return _0x5517d9 === _0xc4c386;
                    }
                }, _0x9e4f76 = _0x5d0517[_0xc6bfac(598)][_0xc6bfac(421)]('|'), _0x3f1faf = -5460 + 5245 + 215;
            while (!![]) {
                switch (_0x9e4f76[_0x3f1faf++]) {
                case '0':
                    this[_0xc6bfac(599)]();
                    continue;
                case '1':
                    _0x5d0517[_0xc6bfac(600)](_0x45f778, undefined) && (_0x45f778 = this[_0xc6bfac(462)]);
                    continue;
                case '2':
                    this[_0xc6bfac(601)](_0x3e7ceb, _0x45f778);
                    continue;
                case '3':
                    this[_0xc6bfac(447)][_0xc6bfac(602)](!![], _0x3e7ceb, _0x45f778);
                    continue;
                case '4':
                    _0x5d0517['MWDvS'](_0x3e7ceb, undefined) && (_0x3e7ceb = this[_0xc6bfac(448)]);
                    continue;
                }
                break;
            }
        },
        'endCapture': function () {
            var _0x5d34e3 = _0x14843a;
            return this[_0x5d34e3(447)][_0x5d34e3(603)](!![]), this[_0x5d34e3(604)](), this[_0x5d34e3(447)];
        },
        'resize': function (_0x27d8dd, _0x40ca3b) {
            var _0xe24e42 = _0x14843a, _0x551dc5 = {
                    'eEKTc': _0xe24e42(605),
                    'GBBaO': function (_0x185cf6, _0x34087c) {
                        return _0x185cf6 - _0x34087c;
                    }
                }, _0x269048 = _0x551dc5[_0xe24e42(606)][_0xe24e42(421)]('|'), _0xb29e46 = 5 * 197 + 2702 * 1 + 3687 * -1;
            while (!![]) {
                switch (_0x269048[_0xb29e46++]) {
                case '0':
                    _0x5b808b[_0xe24e42(607)](4 * 1565 + -2084 * 2 + -2092 * 1, _0x551dc5['GBBaO'](_0x5b808b[_0xe24e42(424)], _0x40ca3b), _0x27d8dd, _0x40ca3b);
                    continue;
                case '1':
                    return this;
                case '2':
                    _0x5b808b[_0xe24e42(608)](1916 * 1 + -277 + -1639, -1 * -7801 + -26 * 257 + -1119, _0x27d8dd, _0x40ca3b);
                    continue;
                case '3':
                    this[_0xe24e42(448)] = _0x27d8dd;
                    continue;
                case '4':
                    this[_0xe24e42(469)][-7604 + 8498 + -892] = _0x27d8dd;
                    continue;
                case '5':
                    this[_0xe24e42(424)] = _0x5b808b[_0xe24e42(424)];
                    continue;
                case '6':
                    this['defaultScissor'][-8879 + -3903 + 12785] = _0x40ca3b;
                    continue;
                case '7':
                    this[_0xe24e42(601)](_0x27d8dd, _0x40ca3b);
                    continue;
                case '8':
                    var _0x5b808b = this['gl'];
                    continue;
                case '9':
                    this['emit'](Events[_0xe24e42(590)], _0x27d8dd, _0x40ca3b);
                    continue;
                case '10':
                    this['height'] = _0x40ca3b;
                    continue;
                }
                break;
            }
        },
        'getAspectRatio': function () {
            var _0x504d62 = _0x14843a, _0xcdb3a2 = {
                    'SGDsS': function (_0x1e669f, _0x526c48) {
                        return _0x1e669f / _0x526c48;
                    }
                };
            return _0xcdb3a2[_0x504d62(609)](this[_0x504d62(448)], this[_0x504d62(462)]);
        },
        'setProjectionMatrix': function (_0x1c8ce8, _0x632ca9) {
            var _0x55a272 = _0x14843a, _0x421b74 = {
                    'ulPTK': function (_0x52102e, _0x18facb) {
                        return _0x52102e !== _0x18facb;
                    }
                };
            return (_0x1c8ce8 !== this['projectionWidth'] || _0x421b74[_0x55a272(610)](_0x632ca9, this[_0x55a272(459)])) && (this['projectionWidth'] = _0x1c8ce8, this[_0x55a272(459)] = _0x632ca9, this[_0x55a272(422)]['ortho'](9631 * 1 + 84 * -1 + 9547 * -1, _0x1c8ce8, _0x632ca9, -4551 * 1 + 1 * 1318 + 3233, -(-4037 + -8975 + -7006 * -2), 1130 + -1 * -5497 + 1 * -5627)), this;
        },
        'resetProjectionMatrix': function () {
            var _0x44622b = _0x14843a;
            this[_0x44622b(611)] = this[_0x44622b(448)], this[_0x44622b(459)] = this[_0x44622b(462)], this[_0x44622b(422)][_0x44622b(612)](-64 * -39 + 4723 + -1 * 7219, this[_0x44622b(448)], this['height'], -7623 + -5942 + 13565 * 1, -(2 * -4591 + 1 * 1217 + 55 * 163), -1612 * -6 + 1 * 771 + 19 * -497);
        },
        'hasExtension': function (_0x2f9397) {
            var _0x5f31b1 = _0x14843a;
            return this[_0x5f31b1(427)] ? this['supportedExtensions'][_0x5f31b1(562)](_0x2f9397) : ![];
        },
        'getExtension': function (_0xe42ac1) {
            var _0x12a157 = _0x14843a, _0x556ae3 = {
                    'weLJm': function (_0x2bc525, _0x2be84c) {
                        return _0x2bc525 in _0x2be84c;
                    }
                };
            if (!this[_0x12a157(613)](_0xe42ac1))
                return null;
            return !_0x556ae3[_0x12a157(614)](_0xe42ac1, this[_0x12a157(451)]) && (this[_0x12a157(451)][_0xe42ac1] = this['gl'][_0x12a157(527)](_0xe42ac1)), this['extensions'][_0xe42ac1];
        },
        'flush': function () {
            var _0x2713e0 = _0x14843a;
            this[_0x2713e0(505)]['flush']();
        },
        'pushScissor': function (_0xff4f90, _0x475dfe, _0x4dcd71, _0x360c08, _0x253f90) {
            var _0x101c19 = _0x14843a, _0x177ea2 = {
                    'gmvhv': _0x101c19(615),
                    'uWhzU': function (_0x209a29, _0x5df0ae) {
                        return _0x209a29 === _0x5df0ae;
                    }
                }, _0x5df0e9 = _0x177ea2['gmvhv'][_0x101c19(421)]('|'), _0x1a29bf = -2133 + -3641 + 5774;
            while (!![]) {
                switch (_0x5df0e9[_0x1a29bf++]) {
                case '0':
                    return _0x2c0e3e;
                case '1':
                    this['setScissor'](_0xff4f90, _0x475dfe, _0x4dcd71, _0x360c08, _0x253f90);
                    continue;
                case '2':
                    _0x5a7475['push'](_0x2c0e3e);
                    continue;
                case '3':
                    var _0x5a7475 = this['scissorStack'];
                    continue;
                case '4':
                    this['currentScissor'] = _0x2c0e3e;
                    continue;
                case '5':
                    var _0x2c0e3e = [
                        _0xff4f90,
                        _0x475dfe,
                        _0x4dcd71,
                        _0x360c08
                    ];
                    continue;
                case '6':
                    _0x177ea2['uWhzU'](_0x253f90, undefined) && (_0x253f90 = this['drawingBufferHeight']);
                    continue;
                }
                break;
            }
        },
        'setScissor': function (_0x4df92c, _0x29f600, _0x4bedfa, _0x56ebca, _0x2ee6ff) {
            var _0x4ec71c = _0x14843a, _0x114b2e = {
                    'NNACK': _0x4ec71c(616),
                    'uNdFj': function (_0xe9eac8, _0x217d48) {
                        return _0xe9eac8 - _0x217d48;
                    },
                    'wxUnh': function (_0x4ebb90, _0x52a7a7) {
                        return _0x4ebb90 - _0x52a7a7;
                    },
                    'zJWxT': function (_0x3d7e64, _0x105609) {
                        return _0x3d7e64 === _0x105609;
                    },
                    'dawwj': function (_0x44e14c, _0x409124) {
                        return _0x44e14c && _0x409124;
                    },
                    'JtYCt': _0x4ec71c(617),
                    'TVQnC': function (_0x303f12, _0x47b1ed) {
                        return _0x303f12 !== _0x47b1ed;
                    },
                    'JIHHh': function (_0xf6ca37, _0x35ea5a) {
                        return _0xf6ca37 !== _0x35ea5a;
                    },
                    'aFDIG': function (_0x2e91da, _0x5e18e0) {
                        return _0x2e91da > _0x5e18e0;
                    }
                }, _0x46c5cc = _0x114b2e['NNACK']['split']('|'), _0x4c3154 = -5173 + 3263 * -1 + 703 * 12;
            while (!![]) {
                switch (_0x46c5cc[_0x4c3154++]) {
                case '0':
                    var _0x3338c1 = this['gl'];
                    continue;
                case '1':
                    _0x20b123 && (this[_0x4ec71c(618)](), _0x3338c1['scissor'](_0x4df92c, _0x114b2e[_0x4ec71c(619)](_0x114b2e[_0x4ec71c(620)](_0x2ee6ff, _0x29f600), _0x56ebca), _0x4bedfa, _0x56ebca));
                    continue;
                case '2':
                    _0x114b2e['zJWxT'](_0x2ee6ff, undefined) && (_0x2ee6ff = this['drawingBufferHeight']);
                    continue;
                case '3':
                    if (_0x114b2e['dawwj'](_0x23a1bd, _0x20b123)) {
                        var _0x4ed33b = _0x114b2e['JtYCt'][_0x4ec71c(421)]('|'), _0x584466 = 3 * -1082 + 654 + 2592;
                        while (!![]) {
                            switch (_0x4ed33b[_0x584466++]) {
                            case '0':
                                var _0x3e4f9d = _0x23a1bd[1 * -5224 + 2974 + 2250];
                                continue;
                            case '1':
                                var _0x573184 = _0x23a1bd[9 * 463 + -1927 + -2239];
                                continue;
                            case '2':
                                var _0x5cb215 = _0x23a1bd[-9152 + 35 * -205 + 16330];
                                continue;
                            case '3':
                                var _0x5751ed = _0x23a1bd[138 * -3 + -1 * -1459 + -7 * 149];
                                continue;
                            case '4':
                                _0x20b123 = _0x114b2e['TVQnC'](_0x3e4f9d, _0x4df92c) || _0x114b2e[_0x4ec71c(621)](_0x573184, _0x29f600) || _0x114b2e[_0x4ec71c(622)](_0x5751ed, _0x4bedfa) || _0x114b2e['JIHHh'](_0x5cb215, _0x56ebca);
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '4':
                    var _0x23a1bd = this['currentScissor'];
                    continue;
                case '5':
                    var _0x20b123 = _0x114b2e['aFDIG'](_0x4bedfa, 3443 + 2 * 2962 + -19 * 493) && _0x114b2e[_0x4ec71c(623)](_0x56ebca, 2830 + -151 * -7 + -3887);
                    continue;
                }
                break;
            }
        },
        'resetScissor': function () {
            var _0x21f049 = _0x14843a, _0x271c50 = {
                    'EnesW': function (_0x2ca8b7, _0x268ebe) {
                        return _0x2ca8b7 > _0x268ebe;
                    },
                    'TfRQC': function (_0xfe812c, _0xd9b837) {
                        return _0xfe812c > _0xd9b837;
                    },
                    'gqRGt': function (_0x50a60c, _0x1decc1) {
                        return _0x50a60c - _0x1decc1;
                    }
                }, _0x2332de = this['gl'];
            _0x2332de[_0x21f049(588)](_0x2332de['SCISSOR_TEST']);
            var _0x22d0b1 = this['currentScissor'];
            if (_0x22d0b1) {
                var _0x317e0e = _0x21f049(624)[_0x21f049(421)]('|'), _0x2438dd = -84 * 2 + 7 * 941 + -6419;
                while (!![]) {
                    switch (_0x317e0e[_0x2438dd++]) {
                    case '0':
                        var _0x488fb5 = _0x22d0b1[-7430 + 6257 + 1175];
                        continue;
                    case '1':
                        var _0x1cd8f8 = _0x22d0b1[4124 * 2 + 9275 + -17522];
                        continue;
                    case '2':
                        _0x271c50[_0x21f049(625)](_0x488fb5, 1 * -617 + 7626 + -1 * 7009) && _0x271c50[_0x21f049(626)](_0x45042a, -5417 + -1 * 6213 + 5815 * 2) && _0x2332de['scissor'](_0x3514f7, _0x271c50[_0x21f049(627)](_0x271c50[_0x21f049(627)](this[_0x21f049(424)], _0x1cd8f8), _0x45042a), _0x488fb5, _0x45042a);
                        continue;
                    case '3':
                        var _0x3514f7 = _0x22d0b1[-5779 + -569 + 529 * 12];
                        continue;
                    case '4':
                        var _0x45042a = _0x22d0b1[4517 + -2736 + -1778];
                        continue;
                    }
                    break;
                }
            }
        },
        'popScissor': function () {
            var _0x3ec4b1 = _0x14843a, _0x287ffc = {
                    'Kyqvq': function (_0xbfb5e1, _0x5d7996) {
                        return _0xbfb5e1 - _0x5d7996;
                    }
                }, _0x102322 = this[_0x3ec4b1(471)];
            _0x102322[_0x3ec4b1(628)]();
            var _0x3c81dc = _0x102322[_0x287ffc[_0x3ec4b1(629)](_0x102322[_0x3ec4b1(630)], -1672 + -3256 * 3 + 673 * 17)];
            _0x3c81dc && this[_0x3ec4b1(631)](_0x3c81dc[-5797 + -2 * 3137 + 12071], _0x3c81dc[-4752 + -5610 + 10363], _0x3c81dc[2 * -3329 + 8003 + -17 * 79], _0x3c81dc[385 * -22 + 7670 + 803]), this[_0x3ec4b1(464)] = _0x3c81dc;
        },
        'hasActiveStencilMask': function () {
            var _0x2d8357 = _0x14843a, _0x49bbfa = this[_0x2d8357(426)]['mask'], _0x4ab3f4 = this[_0x2d8357(446)]['mask'];
            return _0x49bbfa && _0x49bbfa['isStencil'] || _0x4ab3f4 && _0x4ab3f4[_0x2d8357(632)];
        },
        'resetViewport': function () {
            var _0xace2dc = _0x14843a, _0x639949 = this['gl'];
            _0x639949['viewport'](-575 * 6 + -1 * -4545 + -1095, -7933 * 1 + -9302 + 45 * 383, this['width'], this[_0xace2dc(462)]), this['drawingBufferHeight'] = _0x639949['drawingBufferHeight'];
        },
        'setBlendMode': function (_0x1aa9b0, _0x55e4c7) {
            var _0x29de1d = _0x14843a, _0x57c2d5 = {
                    'tpxij': _0x29de1d(633),
                    'neXgR': function (_0x586bba, _0x5c6919) {
                        return _0x586bba !== _0x5c6919;
                    },
                    'NVGOX': function (_0x237796, _0x98e841) {
                        return _0x237796 !== _0x98e841;
                    },
                    'nSTWW': _0x29de1d(634),
                    'zdciS': function (_0x422562, _0x1e740d) {
                        return _0x422562 > _0x1e740d;
                    },
                    'urfbr': function (_0x431434, _0x52a3db) {
                        return _0x431434 === _0x52a3db;
                    }
                }, _0x13847f = _0x57c2d5[_0x29de1d(635)][_0x29de1d(421)]('|'), _0x1d7aa8 = -1 * 9266 + 6165 + 7 * 443;
            while (!![]) {
                switch (_0x13847f[_0x1d7aa8++]) {
                case '0':
                    return ![];
                case '1':
                    if (_0x55e4c7 || _0x57c2d5['neXgR'](_0x1aa9b0, CONST[_0x29de1d(556)][_0x29de1d(636)]) && _0x57c2d5[_0x29de1d(637)](this['currentBlendMode'], _0x1aa9b0)) {
                        var _0x28aea0 = _0x57c2d5[_0x29de1d(638)][_0x29de1d(421)]('|'), _0x155a1a = -653 * 7 + -8818 + -13389 * -1;
                        while (!![]) {
                            switch (_0x28aea0[_0x155a1a++]) {
                            case '0':
                                return !![];
                            case '1':
                                _0x57c2d5['zdciS'](_0x4b4bcc[_0x29de1d(506)][_0x29de1d(630)], -2651 + 1 * -8255 + 10908) ? _0x3c5590[_0x29de1d(639)](_0x4b4bcc[_0x29de1d(506)][5906 + 33 * -49 + -4289], _0x4b4bcc[_0x29de1d(506)][-7717 + 82 * -83 + -2 * -7262], _0x4b4bcc[_0x29de1d(506)][2274 + 3544 * 1 + -5816], _0x4b4bcc[_0x29de1d(506)][-221 * -34 + 6496 + -69 * 203]) : _0x3c5590[_0x29de1d(640)](_0x4b4bcc[_0x29de1d(506)][-2760 + -6098 + -103 * -86], _0x4b4bcc[_0x29de1d(506)][9979 * 1 + -5703 + -4275]);
                                continue;
                            case '2':
                                _0x3c5590['enable'](_0x3c5590[_0x29de1d(572)]);
                                continue;
                            case '3':
                                this['flush']();
                                continue;
                            case '4':
                                this[_0x29de1d(450)] = _0x1aa9b0;
                                continue;
                            case '5':
                                _0x3c5590[_0x29de1d(641)](_0x4b4bcc['equation']);
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '2':
                    _0x57c2d5['urfbr'](_0x55e4c7, undefined) && (_0x55e4c7 = ![]);
                    continue;
                case '3':
                    var _0x3c5590 = this['gl'];
                    continue;
                case '4':
                    var _0x4b4bcc = this[_0x29de1d(487)][_0x1aa9b0];
                    continue;
                }
                break;
            }
        },
        'addBlendMode': function (_0x2c6b15, _0x4cec58) {
            var _0x3a5a16 = _0x14843a, _0xc0c9c7 = this[_0x3a5a16(487)][_0x3a5a16(488)]({
                    'func': _0x2c6b15,
                    'equation': _0x4cec58
                });
            return _0xc0c9c7 - (61 * 37 + -3042 + -2 * -393);
        },
        'updateBlendMode': function (_0x1bf359, _0x5c0e3f, _0x3f4149) {
            var _0x4ef02d = _0x14843a;
            return this[_0x4ef02d(487)][_0x1bf359] && (this[_0x4ef02d(487)][_0x1bf359]['func'] = _0x5c0e3f, _0x3f4149 && (this['blendModes'][_0x1bf359][_0x4ef02d(642)] = _0x3f4149)), this;
        },
        'removeBlendMode': function (_0x4a49f0) {
            var _0x34e3cf = _0x14843a, _0xbe9781 = {
                    'HmGiB': function (_0x587904, _0x172b82) {
                        return _0x587904 > _0x172b82;
                    }
                };
            return _0xbe9781['HmGiB'](_0x4a49f0, 8436 + 1611 + -85 * 118) && this['blendModes'][_0x4a49f0] && this['blendModes'][_0x34e3cf(643)](_0x4a49f0, -8077 * -1 + -8732 * 1 + -2 * -328), this;
        },
        'setBlankTexture': function () {
            var _0xe07d5b = _0x14843a;
            this['setTexture2D'](this['blankTexture'][_0xe07d5b(644)]);
        },
        'setTextureSource': function (_0x3bfb14) {
            var _0x264349 = _0x14843a, _0x480593 = {
                    'iipAx': _0x264349(645),
                    'aaxtS': function (_0x207107, _0x1fa627) {
                        return _0x207107 < _0x1fa627;
                    },
                    'oYpOJ': function (_0x8ea95f, _0x504ef8) {
                        return _0x8ea95f + _0x504ef8;
                    }
                }, _0x230449 = _0x480593[_0x264349(646)][_0x264349(421)]('|'), _0x1e4918 = -1528 + 8939 + -7411;
            while (!![]) {
                switch (_0x230449[_0x1e4918++]) {
                case '0':
                    return _0x3bfb14[_0x264349(647)];
                case '1':
                    var _0x14eb8c = this[_0x264349(432)];
                    continue;
                case '2':
                    if (this[_0x264349(505)][_0x264349(648)]())
                        return this['setTextureZero'](_0x3bfb14[_0x264349(644)], !![]), -5 * -1969 + -2819 + 1171 * -6;
                    continue;
                case '3':
                    _0x3bfb14[_0x264349(649)] < this[_0x264349(461)] && (_0x3bfb14[_0x264349(649)] = this[_0x264349(461)], _0x480593[_0x264349(650)](_0x14eb8c, this[_0x264349(449)]) ? (_0x3bfb14[_0x264349(647)] = _0x14eb8c, _0x269f29[_0x264349(513)](_0x480593[_0x264349(651)](_0x269f29[_0x264349(514)], _0x14eb8c)), _0x269f29[_0x264349(517)](_0x269f29[_0x264349(518)], _0x3bfb14[_0x264349(644)]), this['currentActiveTexture']++) : (this[_0x264349(618)](), this[_0x264349(461)]++, this[_0x264349(460)]++, _0x3bfb14['glIndexCounter'] = this['startActiveTexture'], _0x3bfb14[_0x264349(647)] = 5465 + -7967 + -2503 * -1, _0x269f29[_0x264349(513)](_0x269f29[_0x264349(552)]), _0x269f29['bindTexture'](_0x269f29[_0x264349(518)], _0x3bfb14['glTexture']), this['currentActiveTexture'] = 4 * -2039 + -313 * 23 + 15357));
                    continue;
                case '4':
                    this[_0x264349(444)] = ![];
                    continue;
                case '5':
                    var _0x269f29 = this['gl'];
                    continue;
                }
                break;
            }
        },
        'isNewNormalMap': function (_0x4df9cd, _0xaf119b) {
            var _0x456f31 = _0x14843a, _0x467200 = {
                    'pAOvJ': function (_0x1d8ea0, _0x212daa) {
                        return _0x1d8ea0 !== _0x212daa;
                    },
                    'qJfjy': function (_0x4d835f, _0x399330) {
                        return _0x4d835f !== _0x399330;
                    }
                };
            return _0x467200[_0x456f31(652)](this['textureZero'], _0x4df9cd) || _0x467200[_0x456f31(653)](this[_0x456f31(442)], _0xaf119b);
        },
        'setTextureZero': function (_0x2cc649, _0x39dee) {
            var _0x38a824 = _0x14843a, _0x17b6f1 = {
                    'KcwDH': function (_0x39982e, _0x2ebb90) {
                        return _0x39982e !== _0x2ebb90;
                    },
                    'fSbUA': _0x38a824(654)
                };
            if (_0x17b6f1[_0x38a824(655)](this[_0x38a824(656)], _0x2cc649)) {
                var _0x1a63af = _0x17b6f1['fSbUA'][_0x38a824(421)]('|'), _0x12226c = -172 * 12 + 4719 + -2655;
                while (!![]) {
                    switch (_0x1a63af[_0x12226c++]) {
                    case '0':
                        this['textureZero'] = _0x2cc649;
                        continue;
                    case '1':
                        _0xd9d57c[_0x38a824(517)](_0xd9d57c[_0x38a824(518)], _0x2cc649);
                        continue;
                    case '2':
                        _0x39dee && this['flush']();
                        continue;
                    case '3':
                        _0xd9d57c[_0x38a824(513)](_0xd9d57c['TEXTURE0']);
                        continue;
                    case '4':
                        var _0xd9d57c = this['gl'];
                        continue;
                    }
                    break;
                }
            }
        },
        'clearTextureZero': function () {
            this['textureZero'] = null;
        },
        'setNormalMap': function (_0x3985ff) {
            var _0x266de5 = _0x14843a, _0x1e75b8 = {
                    'MQaWN': function (_0x2ca5a3, _0xa0812) {
                        return _0x2ca5a3 !== _0xa0812;
                    },
                    'EmMhT': function (_0x3fcd17, _0x4b513f) {
                        return _0x3fcd17 === _0x4b513f;
                    }
                };
            if (_0x1e75b8['MQaWN'](this['normalTexture'], _0x3985ff)) {
                var _0x18d00b = this['gl'];
                _0x18d00b[_0x266de5(513)](_0x18d00b[_0x266de5(552)]), _0x18d00b[_0x266de5(517)](_0x18d00b[_0x266de5(518)], _0x3985ff), this[_0x266de5(442)] = _0x3985ff, _0x1e75b8[_0x266de5(657)](this['currentActiveTexture'], -909 + -7401 + 8311) && (this['currentActiveTexture'] = -291 + 660 + 367 * -1);
            }
        },
        'clearNormalMap': function () {
            var _0x54cf61 = _0x14843a;
            this[_0x54cf61(442)] = null, this[_0x54cf61(461)]++, this[_0x54cf61(432)] = 8122 + 166 * -31 + -2975, this[_0x54cf61(460)]++;
        },
        'unbindTextures': function () {
            var _0x5e0c56 = _0x14843a, _0x41ef2b = {
                    'CvxXO': _0x5e0c56(658),
                    'fDEKZ': function (_0x5bd49e, _0x3851f5) {
                        return _0x5bd49e + _0x3851f5;
                    }
                }, _0x220f3b = _0x41ef2b[_0x5e0c56(659)][_0x5e0c56(421)]('|'), _0x184d24 = -28 * 13 + 49 * -104 + 5460;
            while (!![]) {
                switch (_0x220f3b[_0x184d24++]) {
                case '0':
                    for (var _0x1270df = -2922 + 4334 + -1412; _0x1270df < _0x3cabed[_0x5e0c56(630)]; _0x1270df++) {
                        _0x230aa2[_0x5e0c56(513)](_0x41ef2b['fDEKZ'](_0x230aa2[_0x5e0c56(514)], _0x1270df)), _0x230aa2['bindTexture'](_0x230aa2['TEXTURE_2D'], null);
                    }
                    continue;
                case '1':
                    this[_0x5e0c56(461)]++;
                    continue;
                case '2':
                    this[_0x5e0c56(460)]++;
                    continue;
                case '3':
                    this['textureZero'] = null;
                    continue;
                case '4':
                    var _0x3cabed = this[_0x5e0c56(433)];
                    continue;
                case '5':
                    this[_0x5e0c56(432)] = -5 * -605 + 1066 + 2045 * -2;
                    continue;
                case '6':
                    var _0x230aa2 = this['gl'];
                    continue;
                case '7':
                    this[_0x5e0c56(442)] = null;
                    continue;
                }
                break;
            }
        },
        'resetTextures': function (_0x246bc5) {
            var _0x3b4a24 = _0x14843a, _0x4be9c4 = {
                    'QdUbD': _0x3b4a24(660),
                    'mhLBS': function (_0xc230fd, _0x271261) {
                        return _0xc230fd === _0x271261;
                    },
                    'EEbov': function (_0xffac4e, _0x2027ae) {
                        return _0xffac4e < _0x2027ae;
                    },
                    'NxIYi': function (_0x5c3552, _0x554e96) {
                        return _0x5c3552 + _0x554e96;
                    }
                }, _0x3c077e = _0x4be9c4[_0x3b4a24(661)]['split']('|'), _0xb1ddf5 = 1 * 5594 + -1 * 8782 + 3188;
            while (!![]) {
                switch (_0x3c077e[_0xb1ddf5++]) {
                case '0':
                    var _0x3a89a7 = this['tempTextures'];
                    continue;
                case '1':
                    this[_0x3b4a24(432)] = -443 * -16 + -2 * -2777 + -12641;
                    continue;
                case '2':
                    this[_0x3b4a24(442)] = null;
                    continue;
                case '3':
                    var _0x12df44 = this['gl'];
                    continue;
                case '4':
                    _0x4be9c4['mhLBS'](_0x246bc5, undefined) && (_0x246bc5 = ![]);
                    continue;
                case '5':
                    this[_0x3b4a24(461)]++;
                    continue;
                case '6':
                    this['flush']();
                    continue;
                case '7':
                    if (_0x246bc5) {
                        for (var _0x38c63 = 1215 + 1 * 251 + -1466; _0x4be9c4[_0x3b4a24(662)](_0x38c63, _0x3a89a7[_0x3b4a24(630)]); _0x38c63++) {
                            _0x12df44[_0x3b4a24(513)](_0x4be9c4[_0x3b4a24(663)](_0x12df44[_0x3b4a24(514)], _0x38c63)), _0x12df44['bindTexture'](_0x12df44['TEXTURE_2D'], _0x3a89a7[_0x38c63]);
                        }
                        _0x12df44[_0x3b4a24(513)](_0x12df44[_0x3b4a24(552)]), _0x12df44[_0x3b4a24(517)](_0x12df44[_0x3b4a24(518)], _0x3a89a7[1372 + 7 * 8 + -1427]), this[_0x3b4a24(444)] = !![];
                    } else
                        _0x12df44[_0x3b4a24(513)](_0x12df44[_0x3b4a24(514)]), _0x12df44[_0x3b4a24(517)](_0x12df44[_0x3b4a24(518)], _0x3a89a7[-8945 + -11 * -58 + -13 * -639]), _0x12df44['activeTexture'](_0x12df44[_0x3b4a24(552)]), _0x12df44[_0x3b4a24(517)](_0x12df44[_0x3b4a24(518)], _0x3a89a7[46 * -114 + 815 * 4 + 1985]);
                    continue;
                case '8':
                    if (this[_0x3b4a24(444)])
                        return;
                    continue;
                case '9':
                    this[_0x3b4a24(656)] = null;
                    continue;
                case '10':
                    this[_0x3b4a24(460)]++;
                    continue;
                }
                break;
            }
        },
        'setTexture2D': function (_0x2f45c9) {
            var _0x4a84c9 = _0x14843a, _0x41a51f = {
                    'irDPI': function (_0x10f839, _0x50c264) {
                        return _0x10f839 < _0x50c264;
                    },
                    'XzMKn': function (_0x474dcc, _0xc73028) {
                        return _0x474dcc + _0xc73028;
                    }
                };
            if (this[_0x4a84c9(505)][_0x4a84c9(648)]())
                return this['setTextureZero'](_0x2f45c9, !![]), 2905 + 346 * 2 + -3597;
            var _0x20e361 = this['gl'], _0x15f4bf = this[_0x4a84c9(432)];
            return _0x2f45c9[_0x4a84c9(649)] < this[_0x4a84c9(461)] && (_0x2f45c9[_0x4a84c9(649)] = this['startActiveTexture'], _0x41a51f['irDPI'](_0x15f4bf, this['maxTextures']) ? (_0x2f45c9[_0x4a84c9(647)] = _0x15f4bf, _0x20e361[_0x4a84c9(513)](_0x41a51f[_0x4a84c9(664)](_0x20e361['TEXTURE0'], _0x15f4bf)), _0x20e361[_0x4a84c9(517)](_0x20e361[_0x4a84c9(518)], _0x2f45c9), this['currentActiveTexture']++) : (this[_0x4a84c9(618)](), this['startActiveTexture']++, this[_0x4a84c9(460)]++, _0x2f45c9[_0x4a84c9(649)] = this[_0x4a84c9(461)], _0x2f45c9['glIndex'] = 3801 + -1 * -1164 + -4964, _0x20e361[_0x4a84c9(513)](_0x20e361[_0x4a84c9(552)]), _0x20e361[_0x4a84c9(517)](_0x20e361['TEXTURE_2D'], _0x2f45c9), this['currentActiveTexture'] = 3722 + -6120 + 2400)), this['isTextureClean'] = ![], _0x2f45c9[_0x4a84c9(647)];
        },
        'pushFramebuffer': function (_0x550c27, _0xef073b, _0x51f2a6, _0x4fab33) {
            var _0x19c000 = _0x14843a;
            if (_0x550c27 === this[_0x19c000(665)])
                return this;
            return this[_0x19c000(436)][_0x19c000(488)](_0x550c27), this[_0x19c000(666)](_0x550c27, _0xef073b, _0x51f2a6, _0x4fab33);
        },
        'setFramebuffer': function (_0x45250e, _0x4b36a5, _0x4b9f3d, _0x105162) {
            var _0x3c1900 = _0x14843a, _0x118da4 = {
                    'GzcNm': function (_0x52fae8, _0x2e72f) {
                        return _0x52fae8 === _0x2e72f;
                    }
                };
            _0x4b36a5 === undefined && (_0x4b36a5 = ![]);
            _0x4b9f3d === undefined && (_0x4b9f3d = ![]);
            _0x118da4[_0x3c1900(667)](_0x105162, undefined) && (_0x105162 = !![]);
            if (_0x45250e === this['currentFramebuffer'])
                return this;
            var _0xdcbaf = this['gl'], _0x57371f = this[_0x3c1900(448)], _0x408d13 = this[_0x3c1900(462)];
            return _0x45250e && _0x45250e[_0x3c1900(668)] && _0x105162 ? (_0x57371f = _0x45250e[_0x3c1900(668)]['width'], _0x408d13 = _0x45250e[_0x3c1900(668)][_0x3c1900(462)]) : this[_0x3c1900(618)](), _0xdcbaf[_0x3c1900(586)](_0xdcbaf[_0x3c1900(587)], _0x45250e), _0x105162 && _0xdcbaf[_0x3c1900(608)](-9903 + 1356 * -1 + 11259, 1 * -1451 + 1414 * -5 + -8521 * -1, _0x57371f, _0x408d13), _0x4b36a5 && (_0x45250e ? (this[_0x3c1900(424)] = _0x408d13, this['pushScissor'](1 * 1011 + 1 * 1521 + -2 * 1266, -8876 * -1 + 1 * 4917 + -13793, _0x57371f, _0x408d13)) : (this[_0x3c1900(424)] = this['height'], this[_0x3c1900(669)]())), this[_0x3c1900(665)] = _0x45250e, _0x4b9f3d && this[_0x3c1900(599)](), this;
        },
        'popFramebuffer': function (_0x5bbb0d, _0x152ed9, _0x3dff22) {
            var _0x4c18ff = _0x14843a, _0x283db4 = {
                    'xUAmU': _0x4c18ff(670),
                    'wbGYs': function (_0x943135, _0x453ab0) {
                        return _0x943135 - _0x453ab0;
                    },
                    'fYMKK': function (_0x1444c3, _0x415b23) {
                        return _0x1444c3 === _0x415b23;
                    }
                }, _0x257495 = _0x283db4['xUAmU'][_0x4c18ff(421)]('|'), _0x1db3fd = -1 * -9627 + 7847 + 2 * -8737;
            while (!![]) {
                switch (_0x257495[_0x1db3fd++]) {
                case '0':
                    var _0x6b1bf3 = _0x432761[_0x283db4[_0x4c18ff(671)](_0x432761['length'], -8441 + -5985 + 1 * 14427)];
                    continue;
                case '1':
                    _0x432761['pop']();
                    continue;
                case '2':
                    !_0x6b1bf3 && (_0x6b1bf3 = null);
                    continue;
                case '3':
                    this[_0x4c18ff(666)](_0x6b1bf3, _0x5bbb0d, _0x152ed9, _0x3dff22);
                    continue;
                case '4':
                    _0x3dff22 === undefined && (_0x3dff22 = !![]);
                    continue;
                case '5':
                    _0x5bbb0d === undefined && (_0x5bbb0d = ![]);
                    continue;
                case '6':
                    _0x283db4[_0x4c18ff(672)](_0x152ed9, undefined) && (_0x152ed9 = ![]);
                    continue;
                case '7':
                    return _0x6b1bf3;
                case '8':
                    var _0x432761 = this[_0x4c18ff(436)];
                    continue;
                }
                break;
            }
        },
        'setProgram': function (_0x2310d8) {
            var _0x170ea6 = _0x14843a, _0x26efa7 = {
                    'qRAam': function (_0x1db2b9, _0x2c441a) {
                        return _0x1db2b9 !== _0x2c441a;
                    }
                };
            if (_0x26efa7['qRAam'](_0x2310d8, this[_0x170ea6(473)]))
                return this[_0x170ea6(618)](), this['gl'][_0x170ea6(673)](_0x2310d8), this[_0x170ea6(473)] = _0x2310d8, !![];
            return ![];
        },
        'resetProgram': function () {
            var _0x1d6fd8 = _0x14843a;
            return this['gl']['useProgram'](this[_0x1d6fd8(473)]), this;
        },
        'createTextureFromSource': function (_0x55969a, _0x23a0c1, _0x2f92fc, _0x41f860) {
            var _0x57919d = _0x14843a, _0x2e6b62 = {
                    'gKxtX': function (_0x1f88e2, _0x2608c7) {
                        return _0x1f88e2 === _0x2608c7;
                    },
                    'LfCrT': _0x57919d(674)
                }, _0x36ca06 = this['gl'], _0x32bd5e = _0x36ca06[_0x57919d(675)], _0x57916a = _0x36ca06['NEAREST'], _0x1ea1e7 = _0x36ca06[_0x57919d(676)], _0x74c7a0 = null;
            _0x23a0c1 = _0x55969a ? _0x55969a[_0x57919d(448)] : _0x23a0c1, _0x2f92fc = _0x55969a ? _0x55969a[_0x57919d(462)] : _0x2f92fc;
            var _0x3b8285 = IsSizePowerOfTwo(_0x23a0c1, _0x2f92fc);
            return _0x3b8285 && (_0x1ea1e7 = _0x36ca06['REPEAT']), _0x41f860 === CONST[_0x57919d(677)][_0x57919d(678)] && this[_0x57919d(429)]['antialias'] && (_0x32bd5e = _0x3b8285 ? this[_0x57919d(470)] : _0x36ca06[_0x57919d(678)], _0x57916a = _0x36ca06[_0x57919d(678)]), !_0x55969a && _0x2e6b62[_0x57919d(679)](typeof _0x23a0c1, _0x2e6b62[_0x57919d(680)]) && typeof _0x2f92fc === _0x2e6b62[_0x57919d(680)] ? _0x74c7a0 = this[_0x57919d(681)](-2241 + -761 + 3002, _0x32bd5e, _0x57916a, _0x1ea1e7, _0x1ea1e7, _0x36ca06[_0x57919d(520)], null, _0x23a0c1, _0x2f92fc) : _0x74c7a0 = this[_0x57919d(681)](-1 * 2947 + -1704 + 4651, _0x32bd5e, _0x57916a, _0x1ea1e7, _0x1ea1e7, _0x36ca06[_0x57919d(520)], _0x55969a), _0x74c7a0;
        },
        'createTexture2D': function (_0x2be8bf, _0x555d07, _0xb6b629, _0xc36f0e, _0x4ee382, _0x310723, _0x39f290, _0x1210b9, _0xe872c7, _0x13ebb9, _0xe37ab3, _0x20de60) {
            var _0x28a9e4 = _0x14843a, _0x5c8f7d = {
                    'AJAQI': function (_0x1227c3, _0xffd4f5) {
                        return _0x1227c3 === _0xffd4f5;
                    },
                    'JjOYJ': function (_0xc0fc42, _0x529bcd) {
                        return _0xc0fc42 === _0x529bcd;
                    },
                    'kMVfE': function (_0x1a447d, _0x436589) {
                        return _0x1a447d === _0x436589;
                    }
                };
            _0x13ebb9 = _0x5c8f7d[_0x28a9e4(682)](_0x13ebb9, undefined) || _0x5c8f7d[_0x28a9e4(683)](_0x13ebb9, null) ? !![] : _0x13ebb9;
            _0xe37ab3 === undefined && (_0xe37ab3 = ![]);
            _0x5c8f7d['JjOYJ'](_0x20de60, undefined) && (_0x20de60 = ![]);
            var _0x52ba0f = this['gl'], _0x5ab2c1 = _0x52ba0f[_0x28a9e4(515)]();
            _0x52ba0f[_0x28a9e4(513)](_0x52ba0f[_0x28a9e4(514)]);
            var _0x4340da = _0x52ba0f['getParameter'](_0x52ba0f[_0x28a9e4(684)]);
            return _0x52ba0f[_0x28a9e4(517)](_0x52ba0f[_0x28a9e4(518)], _0x5ab2c1), _0x52ba0f[_0x28a9e4(685)](_0x52ba0f[_0x28a9e4(518)], _0x52ba0f['TEXTURE_MIN_FILTER'], _0x555d07), _0x52ba0f[_0x28a9e4(685)](_0x52ba0f[_0x28a9e4(518)], _0x52ba0f[_0x28a9e4(686)], _0xb6b629), _0x52ba0f[_0x28a9e4(685)](_0x52ba0f[_0x28a9e4(518)], _0x52ba0f[_0x28a9e4(687)], _0x4ee382), _0x52ba0f[_0x28a9e4(685)](_0x52ba0f['TEXTURE_2D'], _0x52ba0f[_0x28a9e4(688)], _0xc36f0e), _0x52ba0f[_0x28a9e4(689)](_0x52ba0f[_0x28a9e4(690)], _0x13ebb9), _0x52ba0f[_0x28a9e4(689)](_0x52ba0f[_0x28a9e4(691)], _0x20de60), _0x39f290 === null || _0x5c8f7d[_0x28a9e4(692)](_0x39f290, undefined) ? _0x52ba0f['texImage2D'](_0x52ba0f[_0x28a9e4(518)], _0x2be8bf, _0x310723, _0x1210b9, _0xe872c7, 416 * -15 + -891 + 7131, _0x310723, _0x52ba0f['UNSIGNED_BYTE'], null) : (!_0xe37ab3 && (_0x1210b9 = _0x39f290[_0x28a9e4(448)], _0xe872c7 = _0x39f290[_0x28a9e4(462)]), _0x52ba0f[_0x28a9e4(519)](_0x52ba0f['TEXTURE_2D'], _0x2be8bf, _0x310723, _0x310723, _0x52ba0f[_0x28a9e4(521)], _0x39f290)), IsSizePowerOfTwo(_0x1210b9, _0xe872c7) && _0x52ba0f['generateMipmap'](_0x52ba0f[_0x28a9e4(518)]), _0x4340da && _0x52ba0f['bindTexture'](_0x52ba0f[_0x28a9e4(518)], _0x4340da), _0x5ab2c1[_0x28a9e4(693)] = _0x13ebb9, _0x5ab2c1['isRenderTexture'] = ![], _0x5ab2c1[_0x28a9e4(448)] = _0x1210b9, _0x5ab2c1[_0x28a9e4(462)] = _0xe872c7, _0x5ab2c1[_0x28a9e4(647)] = -8962 * 1 + 8338 + 624, _0x5ab2c1[_0x28a9e4(649)] = -(-3681 + -9229 + 12911), _0x5ab2c1;
        },
        'createFramebuffer': function (_0x21bf47, _0x121272, _0x37b274, _0x3bee32) {
            var _0x7a828e = _0x14843a, _0xdf6484 = {
                    'djOao': function (_0x24b3b6, _0x4fceb9) {
                        return _0x24b3b6 !== _0x4fceb9;
                    },
                    'vWyTp': _0x7a828e(694),
                    'DIJaL': _0x7a828e(695),
                    'AzDEu': _0x7a828e(696),
                    'wqbyi': function (_0xa37901, _0xe8062e) {
                        return _0xa37901 + _0xe8062e;
                    },
                    'XSInq': 'Framebuffer status: '
                }, _0x955210 = this['gl'], _0x83314f = _0x955210[_0x7a828e(697)](), _0x4c6a32 = -9146 * -1 + -5027 * 1 + -1373 * 3;
            this['setFramebuffer'](_0x83314f);
            if (_0x3bee32) {
                var _0x3ec8fb = _0x955210[_0x7a828e(698)]();
                _0x955210[_0x7a828e(699)](_0x955210['RENDERBUFFER'], _0x3ec8fb), _0x955210[_0x7a828e(700)](_0x955210['RENDERBUFFER'], _0x955210[_0x7a828e(701)], _0x21bf47, _0x121272), _0x955210[_0x7a828e(702)](_0x955210[_0x7a828e(587)], _0x955210['DEPTH_STENCIL_ATTACHMENT'], _0x955210[_0x7a828e(703)], _0x3ec8fb);
            }
            _0x37b274['isRenderTexture'] = !![], _0x37b274[_0x7a828e(693)] = ![], _0x955210[_0x7a828e(704)](_0x955210[_0x7a828e(587)], _0x955210[_0x7a828e(705)], _0x955210['TEXTURE_2D'], _0x37b274, 2 * -1747 + -3300 * -1 + -194 * -1), _0x4c6a32 = _0x955210['checkFramebufferStatus'](_0x955210['FRAMEBUFFER']);
            if (_0xdf6484[_0x7a828e(706)](_0x4c6a32, _0x955210[_0x7a828e(707)])) {
                var _0x316cd6 = {
                    36054: _0xdf6484['vWyTp'],
                    36055: 'Missing Attachment',
                    36057: _0xdf6484[_0x7a828e(708)],
                    36061: _0xdf6484[_0x7a828e(709)]
                };
                throw new Error(_0xdf6484[_0x7a828e(710)](_0xdf6484[_0x7a828e(711)], _0x316cd6[_0x4c6a32]));
            }
            return _0x83314f[_0x7a828e(668)] = _0x37b274, this[_0x7a828e(666)](null), this[_0x7a828e(599)](), _0x83314f;
        },
        'createProgram': function (_0x2c1b5b, _0x1a5fde) {
            var _0x421176 = _0x14843a, _0x2ab63d = {
                    'FpPhr': function (_0x3b5973, _0x1da443) {
                        return _0x3b5973 + _0x1da443;
                    },
                    'HHPyU': 'Vertex Shader failed:\n',
                    'oExUD': _0x421176(712),
                    'vTIAM': 'Fragment Shader failed:\n'
                }, _0x47d044 = _0x421176(713)[_0x421176(421)]('|'), _0x51cc08 = 5490 + 73 * 40 + -8410;
            while (!![]) {
                switch (_0x47d044[_0x51cc08++]) {
                case '0':
                    var _0x767e69 = _0x350a8c[_0x421176(714)]();
                    continue;
                case '1':
                    if (!_0x350a8c[_0x421176(715)](_0x264292, _0x350a8c[_0x421176(716)]))
                        throw new Error(_0x2ab63d['FpPhr'](_0x2ab63d[_0x421176(717)], _0x350a8c[_0x421176(718)](_0x264292)));
                    continue;
                case '2':
                    _0x350a8c[_0x421176(673)](_0x767e69);
                    continue;
                case '3':
                    if (!_0x350a8c[_0x421176(719)](_0x767e69, _0x350a8c[_0x421176(720)]))
                        throw new Error(_0x2ab63d[_0x421176(721)] + _0x350a8c[_0x421176(722)](_0x767e69));
                    continue;
                case '4':
                    _0x350a8c[_0x421176(723)](_0xe82e4b);
                    continue;
                case '5':
                    _0x350a8c[_0x421176(724)](_0x767e69, _0x264292);
                    continue;
                case '6':
                    if (!_0x350a8c[_0x421176(715)](_0xe82e4b, _0x350a8c['COMPILE_STATUS']))
                        throw new Error(_0x2ab63d['vTIAM'] + _0x350a8c[_0x421176(718)](_0xe82e4b));
                    continue;
                case '7':
                    _0x350a8c[_0x421176(725)](_0x767e69);
                    continue;
                case '8':
                    _0x350a8c['attachShader'](_0x767e69, _0xe82e4b);
                    continue;
                case '9':
                    return _0x767e69;
                case '10':
                    _0x350a8c[_0x421176(726)](_0xe82e4b, _0x1a5fde);
                    continue;
                case '11':
                    var _0x264292 = _0x350a8c[_0x421176(727)](_0x350a8c[_0x421176(728)]);
                    continue;
                case '12':
                    _0x350a8c[_0x421176(726)](_0x264292, _0x2c1b5b);
                    continue;
                case '13':
                    _0x350a8c[_0x421176(723)](_0x264292);
                    continue;
                case '14':
                    var _0x350a8c = this['gl'];
                    continue;
                case '15':
                    var _0xe82e4b = _0x350a8c[_0x421176(727)](_0x350a8c[_0x421176(729)]);
                    continue;
                }
                break;
            }
        },
        'createVertexBuffer': function (_0x174acd, _0x5b404c) {
            var _0x537031 = _0x14843a, _0x31b9d2 = this['gl'], _0x2fa796 = _0x31b9d2[_0x537031(730)]();
            return _0x31b9d2[_0x537031(731)](_0x31b9d2[_0x537031(732)], _0x2fa796), _0x31b9d2[_0x537031(733)](_0x31b9d2[_0x537031(732)], _0x174acd, _0x5b404c), _0x31b9d2[_0x537031(731)](_0x31b9d2[_0x537031(732)], null), _0x2fa796;
        },
        'createIndexBuffer': function (_0x47b2bb, _0x2bba18) {
            var _0x2d184e = _0x14843a, _0x4eddee = { 'PLgOE': _0x2d184e(734) }, _0x24d5f0 = _0x4eddee[_0x2d184e(735)][_0x2d184e(421)]('|'), _0x42924f = -272 * 8 + -1 * -4943 + -2767 * 1;
            while (!![]) {
                switch (_0x24d5f0[_0x42924f++]) {
                case '0':
                    _0x425630['bufferData'](_0x425630['ELEMENT_ARRAY_BUFFER'], _0x47b2bb, _0x2bba18);
                    continue;
                case '1':
                    _0x425630[_0x2d184e(731)](_0x425630['ELEMENT_ARRAY_BUFFER'], null);
                    continue;
                case '2':
                    var _0x425630 = this['gl'];
                    continue;
                case '3':
                    var _0x4a0abe = _0x425630[_0x2d184e(730)]();
                    continue;
                case '4':
                    return _0x4a0abe;
                case '5':
                    _0x425630['bindBuffer'](_0x425630['ELEMENT_ARRAY_BUFFER'], _0x4a0abe);
                    continue;
                }
                break;
            }
        },
        'deleteTexture': function (_0xb6c428, _0x66b61d) {
            var _0x29a3da = _0x14843a;
            return _0x66b61d && this[_0x29a3da(599)](!![]), _0xb6c428 && this['gl'][_0x29a3da(736)](_0xb6c428), this;
        },
        'deleteFramebuffer': function (_0x4ba9ee) {
            var _0x714e4 = _0x14843a, _0x1aca44 = {
                    'msvlp': function (_0x174027, _0x35a2a2) {
                        return _0x174027 === _0x35a2a2;
                    }
                };
            return _0x4ba9ee && (this['gl'][_0x714e4(737)](_0x4ba9ee), ArrayRemove(this['fboStack'], _0x4ba9ee), _0x1aca44['msvlp'](this['currentFramebuffer'], _0x4ba9ee) && (this[_0x714e4(665)] = null)), this;
        },
        'deleteProgram': function (_0x1ae27d) {
            return _0x1ae27d && this['gl']['deleteProgram'](_0x1ae27d), this;
        },
        'deleteBuffer': function (_0x288aa2) {
            return this['gl']['deleteBuffer'](_0x288aa2), this;
        },
        'preRenderCamera': function (_0x303ab) {
            var _0x1ecfa7 = _0x14843a, _0x545bb5 = {
                    'CpzpN': _0x1ecfa7(738),
                    'rZdVp': function (_0x4a5f18, _0x1f8f89) {
                        return _0x4a5f18 > _0x1f8f89;
                    }
                }, _0x33b500 = _0x545bb5[_0x1ecfa7(739)][_0x1ecfa7(421)]('|'), _0x18c59e = 6200 + -1 * 4989 + -1211;
            while (!![]) {
                switch (_0x33b500[_0x18c59e++]) {
                case '0':
                    var _0x114702 = _0x303ab['height'];
                    continue;
                case '1':
                    var _0x272465 = _0x303ab[_0x1ecfa7(455)];
                    continue;
                case '2':
                    _0x303ab[_0x1ecfa7(504)](CameraEvents['PRE_RENDER'], _0x303ab);
                    continue;
                case '3':
                    _0x303ab[_0x1ecfa7(740)] && (this['currentCameraMask'][_0x1ecfa7(740)] = _0x303ab[_0x1ecfa7(740)], this[_0x1ecfa7(446)][_0x1ecfa7(741)] = _0x303ab[_0x1ecfa7(742)], _0x303ab[_0x1ecfa7(740)][_0x1ecfa7(743)](this, _0x303ab, _0x303ab['_maskCamera']));
                    continue;
                case '4':
                    var _0x5b2393 = _0x303ab['y'];
                    continue;
                case '5':
                    if (_0x545bb5[_0x1ecfa7(744)](_0x272465['alphaGL'], -8583 * -1 + -8907 + 324)) {
                        var _0x34e0f4 = this[_0x1ecfa7(505)][_0x1ecfa7(745)]();
                        _0x34e0f4[_0x1ecfa7(746)](_0x336391, _0x5b2393, _0x12416e, _0x114702, Utils['getTintFromFloats'](_0x272465[_0x1ecfa7(532)], _0x272465[_0x1ecfa7(531)], _0x272465[_0x1ecfa7(530)], -2961 + 2916 + 46), _0x272465[_0x1ecfa7(533)]);
                    }
                    continue;
                case '6':
                    var _0x12416e = _0x303ab[_0x1ecfa7(448)];
                    continue;
                case '7':
                    this[_0x1ecfa7(505)][_0x1ecfa7(747)](_0x303ab);
                    continue;
                case '8':
                    this[_0x1ecfa7(748)](_0x336391, _0x5b2393, _0x12416e, _0x114702);
                    continue;
                case '9':
                    var _0x336391 = _0x303ab['x'];
                    continue;
                }
                break;
            }
        },
        'getCurrentStencilMask': function () {
            var _0x2d9ed8 = _0x14843a, _0x3b0cb9 = {
                    'bDUpX': _0x2d9ed8(749),
                    'cpBiV': function (_0x294644, _0x4c9fe7) {
                        return _0x294644 > _0x4c9fe7;
                    },
                    'doiOT': function (_0x326c00, _0x2a0b7d) {
                        return _0x326c00 - _0x2a0b7d;
                    }
                }, _0x41958b = _0x3b0cb9['bDUpX'][_0x2d9ed8(421)]('|'), _0x2b4511 = -1 * 9839 + 2498 + 7341;
            while (!![]) {
                switch (_0x41958b[_0x2b4511++]) {
                case '0':
                    var _0x5b2a7a = null;
                    continue;
                case '1':
                    if (_0x3b0cb9['cpBiV'](_0x324dd3[_0x2d9ed8(630)], -7134 + -4625 * 1 + 11759))
                        _0x5b2a7a = _0x324dd3[_0x3b0cb9[_0x2d9ed8(750)](_0x324dd3[_0x2d9ed8(630)], -6495 + -3 * -930 + 3706)];
                    else
                        _0x5e5c8['mask'] && _0x5e5c8[_0x2d9ed8(740)][_0x2d9ed8(632)] && (_0x5b2a7a = _0x5e5c8);
                    continue;
                case '2':
                    return _0x5b2a7a;
                case '3':
                    var _0x5e5c8 = this[_0x2d9ed8(446)];
                    continue;
                case '4':
                    var _0x324dd3 = this[_0x2d9ed8(431)];
                    continue;
                }
                break;
            }
        },
        'postRenderCamera': function (_0x10fedf) {
            var _0x19701f = _0x14843a, _0x25aeec = { 'vYTXG': '7|2|1|5|0|6|3|4' }, _0x5782da = _0x25aeec[_0x19701f(751)][_0x19701f(421)]('|'), _0x5472f9 = 1115 + 1563 * -1 + 448;
            while (!![]) {
                switch (_0x5782da[_0x5472f9++]) {
                case '0':
                    this[_0x19701f(669)]();
                    continue;
                case '1':
                    if (_0x316a6a[_0x19701f(752)] || (_0x5508c4['isRunning'] || _0x5508c4[_0x19701f(753)])) {
                        var _0x5dcf26 = this[_0x19701f(505)][_0x19701f(745)]();
                        _0x316a6a[_0x19701f(754)](_0x5dcf26, Utils['getTintFromFloats']), _0x5508c4[_0x19701f(754)](_0x5dcf26, Utils[_0x19701f(755)]);
                    }
                    continue;
                case '2':
                    var _0x5508c4 = _0x10fedf[_0x19701f(756)];
                    continue;
                case '3':
                    this[_0x19701f(505)][_0x19701f(757)](_0x10fedf);
                    continue;
                case '4':
                    _0x10fedf[_0x19701f(504)](CameraEvents[_0x19701f(758)], _0x10fedf);
                    continue;
                case '5':
                    _0x10fedf[_0x19701f(759)] = ![];
                    continue;
                case '6':
                    _0x10fedf[_0x19701f(740)] && (this[_0x19701f(446)]['mask'] = null, _0x10fedf[_0x19701f(740)][_0x19701f(754)](this, _0x10fedf[_0x19701f(742)]));
                    continue;
                case '7':
                    var _0x316a6a = _0x10fedf[_0x19701f(760)];
                    continue;
                }
                break;
            }
        },
        'preRender': function () {
            var _0x373239 = _0x14843a, _0x3a3077 = {
                    'PcLbJ': function (_0x5b5e5c, _0x32a8de) {
                        return _0x5b5e5c | _0x32a8de;
                    },
                    'ObKWE': function (_0x33c3d7, _0xb64eab) {
                        return _0x33c3d7 | _0xb64eab;
                    }
                };
            if (this[_0x373239(466)])
                return;
            var _0x3dd4ee = this['gl'];
            _0x3dd4ee[_0x373239(586)](_0x3dd4ee[_0x373239(587)], null);
            if (this[_0x373239(429)][_0x373239(453)]) {
                var _0x45bc12 = this['config'][_0x373239(455)];
                _0x3dd4ee[_0x373239(529)](_0x45bc12[_0x373239(530)], _0x45bc12[_0x373239(531)], _0x45bc12[_0x373239(532)], _0x45bc12['alphaGL']), _0x3dd4ee[_0x373239(761)](_0x3a3077['PcLbJ'](_0x3a3077[_0x373239(762)](_0x3dd4ee[_0x373239(763)], _0x3dd4ee[_0x373239(764)]), _0x3dd4ee[_0x373239(765)]));
            }
            _0x3dd4ee[_0x373239(588)](_0x3dd4ee[_0x373239(766)]), this[_0x373239(464)] = this['defaultScissor'], this[_0x373239(471)]['length'] = -204 + 816 * 8 + 34 * -186, this[_0x373239(471)][_0x373239(488)](this[_0x373239(464)]), this[_0x373239(452)][_0x373239(767)][_0x373239(768)] && _0x3dd4ee['scissor'](1 * 7859 + -46 * -113 + -13057, this['drawingBufferHeight'] - this[_0x373239(462)], this[_0x373239(448)], this[_0x373239(462)]), this['currentMask'][_0x373239(740)] = null, this['currentCameraMask']['mask'] = null, this[_0x373239(431)][_0x373239(630)] = 9902 + 418 * -3 + 8 * -1081, this[_0x373239(460)] = -8037 + -1976 + 10013, this[_0x373239(504)](Events[_0x373239(769)]);
        },
        'render': function (_0x8a53d7, _0x2151d8, _0x4a3a4e) {
            var _0x3e1b12 = _0x14843a, _0x1c9571 = {
                    'UPXAN': _0x3e1b12(770),
                    'qgemk': function (_0x53b85e, _0x373905) {
                        return _0x53b85e === _0x373905;
                    },
                    'sSviO': function (_0x1e5d15, _0x207d9f) {
                        return _0x1e5d15 < _0x207d9f;
                    },
                    'AZAHI': function (_0x4da6e2, _0x2945c0) {
                        return _0x4da6e2 - _0x2945c0;
                    },
                    'UoNSS': function (_0xec5033, _0xd04c42) {
                        return _0xec5033 !== _0xd04c42;
                    },
                    'HrIeS': function (_0x1596d8, _0x209203) {
                        return _0x1596d8 !== _0x209203;
                    },
                    'iEkFg': function (_0x3e0a5c, _0x400e87) {
                        return _0x3e0a5c + _0x400e87;
                    }
                }, _0x429011 = _0x1c9571[_0x3e1b12(771)][_0x3e1b12(421)]('|'), _0xe9c942 = 107 * 1 + 8353 * -1 + -1178 * -7;
            while (!![]) {
                switch (_0x429011[_0xe9c942++]) {
                case '0':
                    this[_0x3e1b12(504)](Events[_0x3e1b12(772)], _0x8a53d7, _0x4a3a4e);
                    continue;
                case '1':
                    this[_0x3e1b12(435)] = '';
                    continue;
                case '2':
                    if (_0x1c9571['qgemk'](_0x402aaa, 1 * 6197 + 7155 + -13352)) {
                        this[_0x3e1b12(555)](CONST[_0x3e1b12(556)][_0x3e1b12(773)]), this[_0x3e1b12(774)](_0x4a3a4e);
                        return;
                    }
                    continue;
                case '3':
                    _0x3d7594[_0x3e1b12(740)] && _0x3d7594['mask']['postRenderWebGL'](this, _0x3d7594[_0x3e1b12(741)]);
                    continue;
                case '4':
                    var _0x3d7594 = this[_0x3e1b12(426)];
                    continue;
                case '5':
                    for (var _0x23a081 = -1 * -1145 + 3405 + -4550; _0x1c9571['sSviO'](_0x23a081, _0x402aaa); _0x23a081++) {
                        this[_0x3e1b12(465)] = _0x1c9571[_0x3e1b12(775)](_0x23a081, _0x1c9571[_0x3e1b12(776)](_0x402aaa, 608 * -2 + 800 + -1 * -417));
                        var _0x3dfac0 = _0x2151d8[_0x23a081], _0x540f72 = _0x3dfac0['mask'];
                        _0x3d7594 = this[_0x3e1b12(426)];
                        _0x3d7594[_0x3e1b12(740)] && _0x1c9571[_0x3e1b12(777)](_0x3d7594['mask'], _0x540f72) && _0x3d7594[_0x3e1b12(740)][_0x3e1b12(754)](this, _0x3d7594[_0x3e1b12(741)]);
                        _0x540f72 && _0x1c9571[_0x3e1b12(778)](_0x3d7594[_0x3e1b12(740)], _0x540f72) && _0x540f72[_0x3e1b12(743)](this, _0x3dfac0, _0x4a3a4e);
                        _0x3dfac0[_0x3e1b12(779)] !== this[_0x3e1b12(450)] && this[_0x3e1b12(555)](_0x3dfac0['blendMode']);
                        var _0x32d887 = _0x3dfac0[_0x3e1b12(780)];
                        _0x1c9571[_0x3e1b12(778)](_0x32d887, this['currentType']) && (this[_0x3e1b12(425)] = !![], this[_0x3e1b12(435)] = _0x32d887), !this[_0x3e1b12(465)] ? this['nextTypeMatch'] = _0x1c9571[_0x3e1b12(775)](_0x2151d8[_0x1c9571[_0x3e1b12(781)](_0x23a081, 8287 + -3464 + -4822 * 1)]['type'], this[_0x3e1b12(435)]) : this[_0x3e1b12(782)] = ![], _0x3dfac0[_0x3e1b12(783)](this, _0x3dfac0, _0x4a3a4e), this['newType'] = ![];
                    }
                    continue;
                case '6':
                    var _0x402aaa = _0x2151d8[_0x3e1b12(630)];
                    continue;
                case '7':
                    this['setBlendMode'](CONST['BlendModes'][_0x3e1b12(773)]);
                    continue;
                case '8':
                    if (this[_0x3e1b12(466)])
                        return;
                    continue;
                case '9':
                    _0x3d7594 = this['currentMask'];
                    continue;
                case '10':
                    this[_0x3e1b12(784)](_0x4a3a4e);
                    continue;
                case '11':
                    this['postRenderCamera'](_0x4a3a4e);
                    continue;
                }
                break;
            }
        },
        'postRender': function () {
            var _0x296ff1 = _0x14843a, _0x51f3b5 = {
                    'uOgzH': function (_0x34442c, _0x44ddd5, _0x15aad1) {
                        return _0x34442c(_0x44ddd5, _0x15aad1);
                    },
                    'SLVGF': function (_0x169d4f, _0x4f5c76) {
                        return _0x169d4f > _0x4f5c76;
                    }
                };
            if (this[_0x296ff1(466)])
                return;
            this['flush'](), this[_0x296ff1(504)](Events[_0x296ff1(758)]);
            var _0x65254f = this[_0x296ff1(467)];
            _0x65254f[_0x296ff1(785)] && (_0x51f3b5[_0x296ff1(786)](WebGLSnapshot, this[_0x296ff1(787)], _0x65254f), _0x65254f[_0x296ff1(785)] = null), _0x51f3b5[_0x296ff1(788)](this['textureFlush'], -4222 + -1981 * 1 + 6203) && (this[_0x296ff1(461)]++, this[_0x296ff1(432)] = -1409 * -1 + -786 * -12 + -10840);
        },
        'snapshot': function (_0x4ecb1f, _0x5a1b65, _0x125e90) {
            var _0x2437a6 = _0x14843a;
            return this[_0x2437a6(789)](7413 + -2 * 3403 + -607, -4763 * 1 + -9502 + 14265, this['gl'][_0x2437a6(790)], this['gl'][_0x2437a6(424)], _0x4ecb1f, _0x5a1b65, _0x125e90);
        },
        'snapshotArea': function (_0x2d989a, _0x3ac482, _0x249661, _0x59aa43, _0x51cec4, _0xfb6e2d, _0x5cfad7) {
            var _0x4ece0d = _0x14843a, _0x5b4b7a = { 'aJpIZ': _0x4ece0d(791) }, _0x58e30d = _0x5b4b7a[_0x4ece0d(792)][_0x4ece0d(421)]('|'), _0x1922f9 = 5169 + 6982 * 1 + -12151;
            while (!![]) {
                switch (_0x58e30d[_0x1922f9++]) {
                case '0':
                    _0x5153a4[_0x4ece0d(462)] = Math[_0x4ece0d(793)](_0x59aa43, this['gl'][_0x4ece0d(424)]);
                    continue;
                case '1':
                    var _0x5153a4 = this[_0x4ece0d(467)];
                    continue;
                case '2':
                    _0x5153a4['getPixel'] = ![];
                    continue;
                case '3':
                    _0x5153a4[_0x4ece0d(794)] = _0x5cfad7;
                    continue;
                case '4':
                    _0x5153a4['y'] = _0x3ac482;
                    continue;
                case '5':
                    _0x5153a4['x'] = _0x2d989a;
                    continue;
                case '6':
                    _0x5153a4[_0x4ece0d(780)] = _0xfb6e2d;
                    continue;
                case '7':
                    _0x5153a4['callback'] = _0x51cec4;
                    continue;
                case '8':
                    _0x5153a4['width'] = Math[_0x4ece0d(793)](_0x249661, this['gl'][_0x4ece0d(790)]);
                    continue;
                case '9':
                    return this;
                }
                break;
            }
        },
        'snapshotPixel': function (_0x46dbd5, _0x2e0030, _0x50d634) {
            var _0x5a8c82 = _0x14843a;
            return this[_0x5a8c82(789)](_0x46dbd5, _0x2e0030, 2673 + -5685 + 3013, 543 * -9 + 4913 * -2 + -14 * -1051, _0x50d634), this[_0x5a8c82(467)][_0x5a8c82(795)] = !![], this;
        },
        'snapshotFramebuffer': function (_0x7a62da, _0x3f0514, _0x551bd7, _0x1f0aeb, _0x47daf2, _0x25d107, _0x12c798, _0x6e0300, _0x3bcc54, _0x2ee78e, _0x230c57) {
            var _0x16a776 = _0x14843a, _0x2589df = {
                    'YmXNE': function (_0xfb8ac2, _0x6c0b6) {
                        return _0xfb8ac2 === _0x6c0b6;
                    },
                    'zDEfu': function (_0x478ffb, _0x32550d, _0x1b717a) {
                        return _0x478ffb(_0x32550d, _0x1b717a);
                    }
                };
            _0x2589df[_0x16a776(796)](_0x47daf2, undefined) && (_0x47daf2 = ![]);
            _0x2589df['YmXNE'](_0x25d107, undefined) && (_0x25d107 = 8352 + -1 * -5327 + -13679);
            _0x2589df['YmXNE'](_0x12c798, undefined) && (_0x12c798 = -1 * -7526 + -15 * -645 + -17201);
            _0x2589df['YmXNE'](_0x6e0300, undefined) && (_0x6e0300 = _0x3f0514);
            _0x2589df[_0x16a776(796)](_0x3bcc54, undefined) && (_0x3bcc54 = _0x551bd7);
            var _0x35aea9 = this[_0x16a776(665)];
            this['snapshotArea'](_0x25d107, _0x12c798, _0x6e0300, _0x3bcc54, _0x1f0aeb, _0x2ee78e, _0x230c57);
            var _0x1bebab = this[_0x16a776(467)];
            return _0x1bebab[_0x16a776(795)] = _0x47daf2, _0x1bebab[_0x16a776(797)] = !![], _0x1bebab[_0x16a776(798)] = _0x3f0514, _0x1bebab[_0x16a776(799)] = _0x551bd7, this[_0x16a776(666)](_0x7a62da), _0x2589df['zDEfu'](WebGLSnapshot, this[_0x16a776(787)], _0x1bebab), this[_0x16a776(666)](_0x35aea9), _0x1bebab[_0x16a776(785)] = null, _0x1bebab[_0x16a776(797)] = ![], this;
        },
        'canvasToTexture': function (_0x1b6be5, _0x2c6c91, _0x58a868, _0x1b1d16) {
            var _0x1f2670 = _0x14843a, _0xeb7890 = {
                    'HbEEW': function (_0x337e68, _0x1f9ce0) {
                        return _0x337e68 === _0x1f9ce0;
                    },
                    'qHqhN': function (_0x10d4ea, _0x57053c) {
                        return _0x10d4ea === _0x57053c;
                    }
                };
            return _0xeb7890[_0x1f2670(800)](_0x58a868, undefined) && (_0x58a868 = ![]), _0xeb7890[_0x1f2670(801)](_0x1b1d16, undefined) && (_0x1b1d16 = ![]), !_0x2c6c91 ? this[_0x1f2670(802)](_0x1b6be5, _0x58a868, _0x1b1d16) : this['updateCanvasTexture'](_0x1b6be5, _0x2c6c91, _0x1b1d16);
        },
        'createCanvasTexture': function (_0x3c9079, _0x14f08b, _0xc22785) {
            var _0x1a7ab9 = _0x14843a, _0x4ac4b3 = {
                    'GCquR': _0x1a7ab9(803),
                    'VJizD': function (_0x560553, _0x720f3) {
                        return _0x560553 === _0x720f3;
                    },
                    'qRXeM': function (_0xf87aeb, _0xdc53d3, _0x5bf828) {
                        return _0xf87aeb(_0xdc53d3, _0x5bf828);
                    }
                }, _0x543ca8 = _0x4ac4b3[_0x1a7ab9(804)]['split']('|'), _0x40bf77 = 1871 + 2680 + -4551;
            while (!![]) {
                switch (_0x543ca8[_0x40bf77++]) {
                case '0':
                    var _0x3c3c95 = this['gl'];
                    continue;
                case '1':
                    var _0xe419e = _0x3c3c95[_0x1a7ab9(675)];
                    continue;
                case '2':
                    var _0x48b1da = _0x3c9079[_0x1a7ab9(448)];
                    continue;
                case '3':
                    !_0x14f08b && _0x567b5e && (_0x43effb = _0x3c3c95[_0x1a7ab9(805)]);
                    continue;
                case '4':
                    var _0x992241 = _0x3c3c95[_0x1a7ab9(675)];
                    continue;
                case '5':
                    _0x4ac4b3[_0x1a7ab9(806)](_0xc22785, undefined) && (_0xc22785 = ![]);
                    continue;
                case '6':
                    _0x14f08b === undefined && (_0x14f08b = ![]);
                    continue;
                case '7':
                    var _0x567b5e = _0x4ac4b3[_0x1a7ab9(807)](IsSizePowerOfTwo, _0x48b1da, _0x454c4c);
                    continue;
                case '8':
                    this[_0x1a7ab9(429)][_0x1a7ab9(454)] && (_0xe419e = _0x567b5e ? this['mipmapFilter'] : _0x3c3c95[_0x1a7ab9(678)], _0x992241 = _0x3c3c95[_0x1a7ab9(678)]);
                    continue;
                case '9':
                    var _0x454c4c = _0x3c9079[_0x1a7ab9(462)];
                    continue;
                case '10':
                    return this[_0x1a7ab9(681)](-766 + 1712 + -2 * 473, _0xe419e, _0x992241, _0x43effb, _0x43effb, _0x3c3c95[_0x1a7ab9(520)], _0x3c9079, _0x48b1da, _0x454c4c, !![], ![], _0xc22785);
                case '11':
                    var _0x43effb = _0x3c3c95[_0x1a7ab9(676)];
                    continue;
                }
                break;
            }
        },
        'updateCanvasTexture': function (_0xeab478, _0x2a589b, _0x4a547f) {
            var _0x97a0eb = _0x14843a, _0x19a3a4 = {
                    'BKNng': function (_0xc21676, _0x1db50b) {
                        return _0xc21676 > _0x1db50b;
                    }
                };
            _0x4a547f === undefined && (_0x4a547f = ![]);
            var _0x6a4ee7 = this['gl'], _0x4c5ef4 = _0xeab478['width'], _0x1d6318 = _0xeab478[_0x97a0eb(462)];
            if (_0x19a3a4[_0x97a0eb(808)](_0x4c5ef4, -124 + 7366 + -7242) && _0x1d6318 > 1 * -6993 + 2946 * 2 + 1101) {
                var _0x3ca4b9 = _0x97a0eb(809)[_0x97a0eb(421)]('|'), _0x3aa801 = 1 * -9577 + 9375 * 1 + -2 * -101;
                while (!![]) {
                    switch (_0x3ca4b9[_0x3aa801++]) {
                    case '0':
                        var _0x42d715 = _0x6a4ee7[_0x97a0eb(494)](_0x6a4ee7[_0x97a0eb(684)]);
                        continue;
                    case '1':
                        _0x42d715 && _0x6a4ee7[_0x97a0eb(517)](_0x6a4ee7[_0x97a0eb(518)], _0x42d715);
                        continue;
                    case '2':
                        _0x6a4ee7['pixelStorei'](_0x6a4ee7[_0x97a0eb(691)], _0x4a547f);
                        continue;
                    case '3':
                        _0x6a4ee7['activeTexture'](_0x6a4ee7[_0x97a0eb(514)]);
                        continue;
                    case '4':
                        _0x6a4ee7[_0x97a0eb(517)](_0x6a4ee7[_0x97a0eb(518)], _0x2a589b);
                        continue;
                    case '5':
                        _0x2a589b[_0x97a0eb(448)] = _0x4c5ef4;
                        continue;
                    case '6':
                        _0x6a4ee7[_0x97a0eb(519)](_0x6a4ee7[_0x97a0eb(518)], -6070 + 1 * -7609 + 13679, _0x6a4ee7['RGBA'], _0x6a4ee7[_0x97a0eb(520)], _0x6a4ee7[_0x97a0eb(521)], _0xeab478);
                        continue;
                    case '7':
                        _0x6a4ee7[_0x97a0eb(689)](_0x6a4ee7[_0x97a0eb(690)], !![]);
                        continue;
                    case '8':
                        _0x2a589b[_0x97a0eb(462)] = _0x1d6318;
                        continue;
                    }
                    break;
                }
            }
            return _0x2a589b;
        },
        'createVideoTexture': function (_0xed0178, _0xd7ebbd, _0x46bc49) {
            var _0x16ad29 = _0x14843a, _0x21bad3 = {
                    'IEbnM': _0x16ad29(810),
                    'gDfnp': function (_0xdd521c, _0x8286c0, _0x364bbd) {
                        return _0xdd521c(_0x8286c0, _0x364bbd);
                    },
                    'RtGoY': function (_0x1183a0, _0xb79752) {
                        return _0x1183a0 === _0xb79752;
                    },
                    'gLwoz': function (_0x1a22a2, _0xebc07e) {
                        return _0x1a22a2 && _0xebc07e;
                    }
                }, _0x9c3ec7 = _0x21bad3[_0x16ad29(811)][_0x16ad29(421)]('|'), _0x1bacb3 = 1 * -3201 + -213 * 29 + 9378;
            while (!![]) {
                switch (_0x9c3ec7[_0x1bacb3++]) {
                case '0':
                    var _0x5be5d8 = _0x32893a['NEAREST'];
                    continue;
                case '1':
                    var _0x2e5223 = _0x21bad3['gDfnp'](IsSizePowerOfTwo, _0x5cf33b, _0xe9f0a);
                    continue;
                case '2':
                    var _0x59c32f = _0x32893a[_0x16ad29(675)];
                    continue;
                case '3':
                    _0x46bc49 === undefined && (_0x46bc49 = ![]);
                    continue;
                case '4':
                    return this[_0x16ad29(681)](777 * -12 + 927 + -8397 * -1, _0x59c32f, _0x5be5d8, _0x604d9c, _0x604d9c, _0x32893a[_0x16ad29(520)], _0xed0178, _0x5cf33b, _0xe9f0a, !![], !![], _0x46bc49);
                case '5':
                    var _0xe9f0a = _0xed0178['videoHeight'];
                    continue;
                case '6':
                    var _0x32893a = this['gl'];
                    continue;
                case '7':
                    var _0x604d9c = _0x32893a[_0x16ad29(676)];
                    continue;
                case '8':
                    var _0x5cf33b = _0xed0178['videoWidth'];
                    continue;
                case '9':
                    _0x21bad3[_0x16ad29(812)](_0xd7ebbd, undefined) && (_0xd7ebbd = ![]);
                    continue;
                case '10':
                    this['config'][_0x16ad29(454)] && (_0x59c32f = _0x2e5223 ? this[_0x16ad29(470)] : _0x32893a[_0x16ad29(678)], _0x5be5d8 = _0x32893a[_0x16ad29(678)]);
                    continue;
                case '11':
                    _0x21bad3['gLwoz'](!_0xd7ebbd, _0x2e5223) && (_0x604d9c = _0x32893a[_0x16ad29(805)]);
                    continue;
                }
                break;
            }
        },
        'updateVideoTexture': function (_0x2e1653, _0x3471a1, _0x18c654) {
            var _0x209237 = _0x14843a, _0x4d7d0b = {
                    'lvHDA': function (_0x56e9a9, _0x1d10e7) {
                        return _0x56e9a9 === _0x1d10e7;
                    },
                    'MYAbs': function (_0x2e44ff, _0x34b21f) {
                        return _0x2e44ff > _0x34b21f;
                    }
                };
            _0x4d7d0b['lvHDA'](_0x18c654, undefined) && (_0x18c654 = ![]);
            var _0x3518d4 = this['gl'], _0x1edf18 = _0x2e1653['videoWidth'], _0x372920 = _0x2e1653[_0x209237(813)];
            if (_0x4d7d0b['MYAbs'](_0x1edf18, -4882 + 5361 + -479) && _0x4d7d0b['MYAbs'](_0x372920, -13 * 584 + -2221 + 9813)) {
                var _0x4360ea = _0x209237(814)[_0x209237(421)]('|'), _0xb5246f = -9302 * 1 + -2229 * 3 + 15989;
                while (!![]) {
                    switch (_0x4360ea[_0xb5246f++]) {
                    case '0':
                        _0x457a45 && _0x3518d4[_0x209237(517)](_0x3518d4['TEXTURE_2D'], _0x457a45);
                        continue;
                    case '1':
                        var _0x457a45 = _0x3518d4['getParameter'](_0x3518d4[_0x209237(684)]);
                        continue;
                    case '2':
                        _0x3518d4[_0x209237(689)](_0x3518d4[_0x209237(691)], _0x18c654);
                        continue;
                    case '3':
                        _0x3518d4['texImage2D'](_0x3518d4[_0x209237(518)], -1 * -4113 + 8985 * 1 + 118 * -111, _0x3518d4[_0x209237(520)], _0x3518d4[_0x209237(520)], _0x3518d4[_0x209237(521)], _0x2e1653);
                        continue;
                    case '4':
                        _0x3471a1[_0x209237(462)] = _0x372920;
                        continue;
                    case '5':
                        _0x3518d4['activeTexture'](_0x3518d4[_0x209237(514)]);
                        continue;
                    case '6':
                        _0x3518d4['bindTexture'](_0x3518d4[_0x209237(518)], _0x3471a1);
                        continue;
                    case '7':
                        _0x3471a1[_0x209237(448)] = _0x1edf18;
                        continue;
                    }
                    break;
                }
            }
            return _0x3471a1;
        },
        'setTextureFilter': function (_0x7076ca, _0x541838) {
            var _0x188bba = _0x14843a, _0x943d60 = '1|5|3|6|2|0|4|8|7'[_0x188bba(421)]('|'), _0xf27ce6 = 603 + 2 * 3829 + -751 * 11;
            while (!![]) {
                switch (_0x943d60[_0xf27ce6++]) {
                case '0':
                    _0x30aa33[_0x188bba(685)](_0x30aa33['TEXTURE_2D'], _0x30aa33[_0x188bba(815)], _0x3a4f87);
                    continue;
                case '1':
                    var _0x30aa33 = this['gl'];
                    continue;
                case '2':
                    _0x30aa33[_0x188bba(517)](_0x30aa33[_0x188bba(518)], _0x7076ca);
                    continue;
                case '3':
                    _0x30aa33[_0x188bba(513)](_0x30aa33[_0x188bba(514)]);
                    continue;
                case '4':
                    _0x30aa33['texParameteri'](_0x30aa33[_0x188bba(518)], _0x30aa33['TEXTURE_MAG_FILTER'], _0x3a4f87);
                    continue;
                case '5':
                    var _0x3a4f87 = [
                        _0x30aa33['LINEAR'],
                        _0x30aa33['NEAREST']
                    ][_0x541838];
                    continue;
                case '6':
                    var _0x4b4c = _0x30aa33[_0x188bba(494)](_0x30aa33[_0x188bba(684)]);
                    continue;
                case '7':
                    return this;
                case '8':
                    _0x4b4c && _0x30aa33[_0x188bba(517)](_0x30aa33[_0x188bba(518)], _0x4b4c);
                    continue;
                }
                break;
            }
        },
        'getMaxTextureSize': function () {
            var _0xe095fe = _0x14843a;
            return this['config'][_0xe095fe(580)];
        },
        'destroy': function () {
            var _0x7d7f05 = _0x14843a, _0x32c742 = {
                    'dkZcG': _0x7d7f05(480),
                    'ANZLF': function (_0x57b75b, _0x90bb80) {
                        return _0x57b75b < _0x90bb80;
                    }
                };
            this[_0x7d7f05(787)]['removeEventListener'](_0x7d7f05(816), this[_0x7d7f05(472)], ![]), this[_0x7d7f05(787)]['removeEventListener'](_0x32c742['dkZcG'], this[_0x7d7f05(501)], ![]);
            var _0x17f775 = this['gl'], _0x496bc2 = this['tempTextures'];
            for (var _0x69c995 = -1 * -769 + -1 * -8180 + -8949; _0x32c742[_0x7d7f05(817)](_0x69c995, _0x496bc2[_0x7d7f05(630)]); _0x69c995++) {
                _0x17f775['deleteTexture'](_0x496bc2[_0x69c995]);
            }
            this[_0x7d7f05(505)][_0x7d7f05(818)](), this[_0x7d7f05(819)](), this[_0x7d7f05(436)] = [], this['maskStack'] = [], this['extensions'] = {}, this[_0x7d7f05(516)] = [], this['gl'] = null, this[_0x7d7f05(452)] = null, this['canvas'] = null, this[_0x7d7f05(466)] = !![], this[_0x7d7f05(426)] = null, this[_0x7d7f05(446)] = null;
        }
    });
module[_0x14843a(820)] = WebGLRenderer;