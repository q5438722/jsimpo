const expect = require(_0x388c49(510))[_0x388c49(511)], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require(_0x388c49(512)), AwsProvider = require(_0x388c49(513)), runServerless = require(_0x388c49(514));
describe('#validate()', () => {
    const _0x1c1375 = _0x388c49, _0x5ee39c = {
            'Yexmu': _0x1c1375(515),
            'CifTT': function (_0x322a1f, _0x585416) {
                return _0x322a1f(_0x585416);
            },
            'bnBXI': _0x1c1375(516),
            'oLvAc': _0x1c1375(517),
            'rfVwJ': _0x1c1375(518),
            'GkSCX': function (_0x334a54, _0x5df9d9) {
                return _0x334a54(_0x5df9d9);
            },
            'Goaud': _0x1c1375(519),
            'PSJPG': 'AWS::Region',
            'taUYY': _0x1c1375(520),
            'xIrCJ': _0x1c1375(521),
            'yifcK': _0x1c1375(522),
            'ixyGk': _0x1c1375(523),
            'rsJJx': _0x1c1375(524),
            'BPgyN': _0x1c1375(525),
            'TtBVK': 'arn:',
            'NJXQW': _0x1c1375(526),
            'hNqNp': _0x1c1375(527),
            'UCBwG': function (_0x55a60c, _0x3aca1c) {
                return _0x55a60c(_0x3aca1c);
            },
            'JJFIf': _0x1c1375(528),
            'djoHa': _0x1c1375(529),
            'dtYmW': function (_0x434ec1, _0x594e1c, _0x31cd3f) {
                return _0x434ec1(_0x594e1c, _0x31cd3f);
            },
            'cJaZa': _0x1c1375(530),
            'vmfGC': function (_0x1a2c24, _0x944390, _0x3d60d0) {
                return _0x1a2c24(_0x944390, _0x3d60d0);
            },
            'XXsUO': _0x1c1375(531),
            'efgQt': 'should add authorizer config when authorizer is specified as a string',
            'PWyFu': 'should add authorizer config when authorizer is specified as a string with arn',
            'osimB': _0x1c1375(532),
            'WJTmQ': function (_0x370ead, _0x3a0d64, _0x7ebafe) {
                return _0x370ead(_0x3a0d64, _0x7ebafe);
            },
            'tYOgb': function (_0xc79a91, _0x36b809, _0xea89b0) {
                return _0xc79a91(_0x36b809, _0xea89b0);
            },
            'ZDlWf': _0x1c1375(533)
        };
    let _0x53005a, _0x440a25;
    _0x5ee39c['UCBwG'](beforeEach, () => {
        const _0x3036f0 = _0x1c1375, _0x4a7518 = {
                'stage': 'dev',
                'region': _0x5ee39c[_0x3036f0(534)]
            };
        _0x53005a = new Serverless(), _0x53005a[_0x3036f0(535)]('aws', new AwsProvider(_0x53005a, _0x4a7518)), _0x440a25 = new AwsCompileWebsocketsEvents(_0x53005a, _0x4a7518);
    }), _0x5ee39c['dtYmW'](it, _0x5ee39c[_0x1c1375(536)], () => {
        const _0x445a21 = _0x1c1375;
        _0x440a25[_0x445a21(537)][_0x445a21(538)]['functions'] = { 'first': { 'events': [{ 'websocket': _0x445a21(517) }] } };
        const _0x255d87 = _0x440a25[_0x445a21(539)]();
        _0x5ee39c[_0x445a21(540)](expect, _0x255d87[_0x445a21(541)])['to'][_0x445a21(542)][_0x445a21(543)]([{
                'functionName': _0x5ee39c[_0x445a21(544)],
                'route': _0x445a21(517)
            }]);
    }), _0x5ee39c[_0x1c1375(545)](it, _0x5ee39c[_0x1c1375(546)], () => {
        const _0x45dd14 = _0x1c1375;
        _0x440a25[_0x45dd14(537)]['service'][_0x45dd14(547)] = { 'first': { 'events': [{ 'websocket': { 'route': _0x5ee39c[_0x45dd14(548)] } }] } };
        const _0x5d099f = _0x440a25[_0x45dd14(539)]();
        _0x5ee39c['CifTT'](expect, _0x5d099f[_0x45dd14(541)])['to'][_0x45dd14(542)][_0x45dd14(543)]([{
                'functionName': _0x5ee39c[_0x45dd14(544)],
                'route': _0x5ee39c['oLvAc']
            }]);
    }), it(_0x5ee39c[_0x1c1375(549)], () => {
        const _0x2e6519 = _0x1c1375;
        _0x440a25[_0x2e6519(537)][_0x2e6519(538)][_0x2e6519(547)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x2e6519(548)],
                            'authorizer': _0x5ee39c[_0x2e6519(550)]
                        }
                    }]
            }
        };
        const _0x19545f = _0x440a25[_0x2e6519(539)]();
        _0x5ee39c['GkSCX'](expect, _0x19545f[_0x2e6519(541)])['to'][_0x2e6519(542)][_0x2e6519(543)]([{
                'functionName': _0x2e6519(516),
                'route': _0x2e6519(517),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x2e6519(551),
                                { 'Ref': 'AWS::Partition' },
                                _0x5ee39c[_0x2e6519(552)],
                                { 'Ref': _0x5ee39c[_0x2e6519(553)] },
                                _0x5ee39c['taUYY'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5ee39c[_0x2e6519(554)],
                                        _0x5ee39c['yifcK']
                                    ]
                                },
                                _0x5ee39c[_0x2e6519(555)]
                            ]
                        ]
                    },
                    'identitySource': [_0x5ee39c['rsJJx']],
                    'permission': _0x5ee39c[_0x2e6519(554)]
                }
            }]);
    }), _0x5ee39c['vmfGC'](it, _0x5ee39c[_0x1c1375(556)], () => {
        const _0x2b0123 = _0x1c1375;
        _0x440a25[_0x2b0123(537)][_0x2b0123(538)][_0x2b0123(547)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x2b0123(548)],
                            'authorizer': _0x5ee39c[_0x2b0123(557)]
                        }
                    }]
            }
        };
        const _0x302dcb = _0x440a25[_0x2b0123(539)]();
        expect(_0x302dcb[_0x2b0123(541)])['to']['deep']['equal']([{
                'functionName': _0x5ee39c['bnBXI'],
                'route': _0x5ee39c[_0x2b0123(548)],
                'authorizer': {
                    'name': _0x5ee39c[_0x2b0123(550)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5ee39c['TtBVK'],
                                { 'Ref': _0x5ee39c[_0x2b0123(558)] },
                                _0x5ee39c[_0x2b0123(552)],
                                { 'Ref': _0x2b0123(559) },
                                _0x5ee39c['taUYY'],
                                'arn:aws:auth',
                                _0x5ee39c[_0x2b0123(555)]
                            ]
                        ]
                    },
                    'identitySource': [_0x5ee39c[_0x2b0123(560)]],
                    'permission': _0x5ee39c[_0x2b0123(557)]
                }
            }]);
    }), _0x5ee39c[_0x1c1375(545)](it, _0x5ee39c[_0x1c1375(561)], () => {
        const _0x2deb20 = _0x1c1375;
        _0x440a25[_0x2deb20(537)][_0x2deb20(538)][_0x2deb20(547)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2deb20(517),
                            'authorizer': {
                                'name': _0x5ee39c[_0x2deb20(550)],
                                'identitySource': [
                                    _0x5ee39c[_0x2deb20(560)],
                                    _0x5ee39c[_0x2deb20(562)]
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x4e8cb8 = _0x440a25['validate']();
        expect(_0x4e8cb8[_0x2deb20(541)])['to']['deep'][_0x2deb20(543)]([{
                'functionName': _0x5ee39c[_0x2deb20(544)],
                'route': _0x2deb20(517),
                'authorizer': {
                    'name': _0x5ee39c[_0x2deb20(550)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5ee39c[_0x2deb20(563)],
                                { 'Ref': _0x5ee39c[_0x2deb20(558)] },
                                _0x5ee39c['Goaud'],
                                { 'Ref': _0x5ee39c[_0x2deb20(553)] },
                                _0x5ee39c['taUYY'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5ee39c['xIrCJ'],
                                        _0x5ee39c[_0x2deb20(564)]
                                    ]
                                },
                                _0x5ee39c[_0x2deb20(555)]
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5ee39c[_0x2deb20(560)],
                        _0x5ee39c[_0x2deb20(562)]
                    ],
                    'permission': _0x5ee39c[_0x2deb20(554)]
                }
            }]);
    }), _0x5ee39c['WJTmQ'](it, _0x1c1375(565), () => {
        const _0x350ab9 = _0x1c1375;
        _0x440a25[_0x350ab9(537)][_0x350ab9(538)][_0x350ab9(547)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x350ab9(548)],
                            'authorizer': {
                                'arn': _0x5ee39c[_0x350ab9(557)],
                                'identitySource': [
                                    _0x5ee39c[_0x350ab9(560)],
                                    _0x5ee39c['hNqNp']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x8de1c6 = _0x440a25['validate']();
        _0x5ee39c[_0x350ab9(566)](expect, _0x8de1c6['events'])['to'][_0x350ab9(542)][_0x350ab9(543)]([{
                'functionName': _0x5ee39c[_0x350ab9(544)],
                'route': _0x5ee39c[_0x350ab9(548)],
                'authorizer': {
                    'name': _0x5ee39c[_0x350ab9(550)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x350ab9(551),
                                { 'Ref': _0x5ee39c['NJXQW'] },
                                _0x5ee39c['Goaud'],
                                { 'Ref': _0x350ab9(559) },
                                _0x5ee39c[_0x350ab9(567)],
                                _0x5ee39c[_0x350ab9(557)],
                                _0x350ab9(523)
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x350ab9(524),
                        _0x5ee39c[_0x350ab9(562)]
                    ],
                    'permission': _0x5ee39c['BPgyN']
                }
            }]);
    }), _0x5ee39c['tYOgb'](it, 'should add routeResponse when routeResponseSelectionExpression is configured', () => {
        const _0x324086 = _0x1c1375;
        _0x440a25[_0x324086(537)][_0x324086(538)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c['oLvAc'],
                            'routeResponseSelectionExpression': _0x5ee39c[_0x324086(568)]
                        }
                    }]
            }
        };
        const _0x3fd616 = _0x440a25['validate']();
        expect(_0x3fd616[_0x324086(541)])['to'][_0x324086(542)]['equal']([{
                'functionName': _0x324086(516),
                'route': _0x5ee39c['oLvAc'],
                'routeResponseSelectionExpression': _0x324086(528)
            }]);
    }), it(_0x5ee39c[_0x1c1375(569)], () => {
        const _0x3c0ffb = _0x1c1375;
        _0x440a25[_0x3c0ffb(537)]['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0xe0aa8 = _0x440a25['validate']();
        _0x5ee39c[_0x3c0ffb(566)](expect, _0xe0aa8[_0x3c0ffb(541)])['to']['be']['an'](_0x5ee39c[_0x3c0ffb(570)])[_0x3c0ffb(571)]['length'](175 * -2 + -973 + 1323);
    });
}), describe(_0x388c49(572), () => {
    const _0x2a8662 = _0x388c49, _0x5619eb = {
            'rNmdr': 'authName',
            'cetND': _0x2a8662(573),
            'fZiZZ': _0x2a8662(574),
            'COtdh': _0x2a8662(575),
            'mzXwH': 'package',
            'OtVUq': function (_0x3c1905, _0x332c08) {
                return _0x3c1905(_0x332c08);
            },
            'YPQVH': _0x2a8662(576)
        };
    it(_0x5619eb[_0x2a8662(577)], async () => {
        const _0x533c3b = _0x2a8662, _0x461d3d = _0x5619eb['rNmdr'], {
                cfTemplate: _0xccf9f8,
                awsNaming: _0x5b69fe
            } = await runServerless({
                'fixture': _0x5619eb[_0x533c3b(578)],
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0x533c3b(579),
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x461d3d,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x5619eb[_0x533c3b(580)],
                                                        _0x5619eb['COtdh']
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x5619eb['mzXwH']
            }), _0x260509 = _0xccf9f8[_0x533c3b(581)], _0x482ab2 = _0x5b69fe;
        _0x5619eb[_0x533c3b(582)](expect, _0x260509[_0x482ab2[_0x533c3b(583)](_0x461d3d)])['to'][_0x533c3b(584)], _0x5619eb[_0x533c3b(582)](expect, _0x260509[_0x482ab2[_0x533c3b(583)](_0x461d3d)][_0x533c3b(585)][_0x533c3b(586)])['to'][_0x533c3b(542)][_0x533c3b(543)](_0x461d3d);
    });
});