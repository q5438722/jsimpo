const errors = require(_0x1edc86(165)), sinon = require(_0x1edc86(166)), Promise = require(_0x1edc86(167)), markdownToMobiledoc = require(_0x1edc86(168))[_0x1edc86(169)], helpers = require(_0x1edc86(170)), api = require(_0x1edc86(171));
helpers[_0x1edc86(172)] = helpers[_0x1edc86(173)], describe(_0x1edc86(174), function () {
    const _0x553bd4 = _0x1edc86, _0x4e11d2 = {
            'iMMPL': _0x553bd4(175),
            'EzRGu': function (_0x14b986, _0x1a8cf8) {
                return _0x14b986 > _0x1a8cf8;
            },
            'NkkUw': _0x553bd4(176),
            'xmIyr': _0x553bd4(177),
            'GkGIV': _0x553bd4(178),
            'afyGN': _0x553bd4(172),
            'JLjao': function (_0xea482d, _0x45c30b) {
                return _0xea482d(_0x45c30b);
            },
            'oVCSP': 'current',
            'cRwfh': _0x553bd4(179),
            'oYwBU': function (_0x5aa16a) {
                return _0x5aa16a();
            },
            'SOZTm': _0x553bd4(180),
            'WPLeM': 'published',
            'evYfQ': function (_0x8d07e1, _0x31089c, _0x4fec4d) {
                return _0x8d07e1(_0x31089c, _0x4fec4d);
            },
            'tOfjz': function (_0xd26308) {
                return _0xd26308();
            },
            'ZvMcI': _0x553bd4(181),
            'RWtYd': _0x553bd4(182),
            'vTtug': function (_0x2386bf) {
                return _0x2386bf();
            },
            'AQoVn': function (_0x1023cb, _0x3e7ddd) {
                return _0x1023cb(_0x3e7ddd);
            },
            'szsxk': 'post2',
            'jZuUE': _0x553bd4(183),
            'AJabv': '/previous/',
            'fpeVF': _0x553bd4(184),
            'SzCXO': function (_0x4452ef, _0x3adde8) {
                return _0x4452ef(_0x3adde8);
            },
            'OnNCQ': function (_0x3e5d1d, _0x5a4792) {
                return _0x3e5d1d > _0x5a4792;
            },
            'dVCWA': _0x553bd4(185),
            'WxVjJ': 'post 3',
            'lsbHW': 'preview',
            'Adaqe': function (_0x4f26d8) {
                return _0x4f26d8();
            },
            'xyJxJ': _0x553bd4(186),
            'fCkMw': 'primary_tag',
            'BKGVe': 'slug',
            'LCgjZ': function (_0x5dbba1) {
                return _0x5dbba1();
            },
            'jzYRc': _0x553bd4(187),
            'gcdhG': _0x553bd4(188),
            'YATSF': _0x553bd4(189),
            'pUTKX': function (_0x2f7e20, _0x5d4543) {
                return _0x2f7e20(_0x5d4543);
            },
            'GEUiF': function (_0x26ecc9, _0x2c8715, _0x3ed61b) {
                return _0x26ecc9(_0x2c8715, _0x3ed61b);
            },
            'rmcEW': 'shows \'if\' template with prev post data with primary_tag set',
            'YUbzH': function (_0x2c7d2a, _0x35a159, _0x1077ce) {
                return _0x2c7d2a(_0x35a159, _0x1077ce);
            },
            'zQCjM': _0x553bd4(190),
            'Mfpjd': _0x553bd4(191),
            'rsUiD': _0x553bd4(192),
            'nfNsz': _0x553bd4(193),
            'iaqqS': _0x553bd4(194),
            'nZKdk': function (_0x115679, _0x36135e) {
                return _0x115679(_0x36135e);
            },
            'EeJgr': function (_0x2e8a0e, _0x455c50, _0x227ae3) {
                return _0x2e8a0e(_0x455c50, _0x227ae3);
            },
            'JXtoF': 'should handle error from the API',
            'CnkDv': _0x553bd4(195),
            'rjWBP': 'canary',
            'xVfNO': function (_0xee2d34, _0x50a814) {
                return _0xee2d34(_0x50a814);
            },
            'JlYOb': function (_0x3d411d, _0x415ffc) {
                return _0x3d411d(_0x415ffc);
            },
            'keKwM': function (_0x3e6766, _0x12bedd, _0x4aaa4d) {
                return _0x3e6766(_0x12bedd, _0x4aaa4d);
            },
            'sDIoj': 'with valid post data - ',
            'eKZoU': _0x553bd4(196),
            'gQkwy': function (_0x100edd, _0x5511fe, _0x36833b) {
                return _0x100edd(_0x5511fe, _0x36833b);
            },
            'RamTZ': function (_0x70aff9, _0x1d398b, _0x467da5) {
                return _0x70aff9(_0x1d398b, _0x467da5);
            },
            'qByNi': _0x553bd4(197),
            'fuVrj': 'for unpublished post'
        }, _0x2e0e28 = _0x4e11d2[_0x553bd4(198)];
    let _0x420674, _0x407479;
    _0x4e11d2[_0x553bd4(199)](beforeEach, function () {
        const _0x55a699 = _0x553bd4;
        _0x420674 = {
            'root': {
                '_locals': { 'apiVersion': _0x2e0e28 },
                'context': [_0x4e11d2['iMMPL']]
            }
        }, sinon[_0x55a699(200)](api, 'postsPublic')['get'](() => {
            return { 'browse': _0x407479 };
        });
    }), _0x4e11d2[_0x553bd4(201)](afterEach, function () {
        sinon['restore']();
    }), _0x4e11d2[_0x553bd4(202)](describe, _0x4e11d2[_0x553bd4(203)], function () {
        const _0x41cae6 = _0x553bd4, _0x5c0318 = {
                'erNuY': function (_0x2e18f1, _0x2c7b8e) {
                    const _0x59e3ab = _0x8bfd;
                    return _0x4e11d2[_0x59e3ab(204)](_0x2e18f1, _0x2c7b8e);
                },
                'wxclL': _0x41cae6(181),
                'zwJuF': _0x4e11d2[_0x41cae6(205)],
                'IuCZh': _0x4e11d2[_0x41cae6(206)],
                'kXVLI': _0x4e11d2[_0x41cae6(207)],
                'VQiyh': _0x4e11d2[_0x41cae6(208)],
                'LaNwS': _0x41cae6(209),
                'fPYKy': function (_0x19bc0a, _0x33e8c6) {
                    const _0x189482 = _0x41cae6;
                    return _0x4e11d2[_0x189482(210)](_0x19bc0a, _0x33e8c6);
                },
                'CUtjl': _0x41cae6(211),
                'nkCPz': _0x4e11d2[_0x41cae6(212)],
                'jsEld': _0x41cae6(183)
            };
        _0x4e11d2['JLjao'](beforeEach, function () {
            const _0x1976d0 = _0x41cae6;
            _0x407479 = sinon[_0x1976d0(200)]()[_0x1976d0(213)](function (_0x431bd4) {
                const _0x4d2529 = _0x1976d0;
                if (_0x5c0318[_0x4d2529(214)](_0x431bd4[_0x4d2529(215)]['indexOf'](_0x5c0318['wxclL']), -(480 + -6602 + 6123)))
                    return Promise[_0x4d2529(216)]({
                        'posts': [{
                                'slug': '/next/',
                                'title': 'post 3'
                            }]
                    });
            });
        }), it(_0x4e11d2[_0x41cae6(217)], function (_0x223696) {
            const _0xaf56f6 = _0x41cae6, _0x56c82d = {
                    'KgbeJ': _0x5c0318[_0xaf56f6(218)],
                    'FZYwm': _0xaf56f6(219),
                    'UACWo': _0x5c0318[_0xaf56f6(220)],
                    'jvRaP': _0x5c0318[_0xaf56f6(221)]
                }, _0x25dfac = sinon[_0xaf56f6(222)](), _0x4ee511 = sinon['spy'](), _0x5be4af = {
                    'name': _0x5c0318[_0xaf56f6(223)],
                    'data': _0x420674,
                    'fn': _0x25dfac,
                    'inverse': _0x4ee511
                };
            helpers[_0xaf56f6(172)][_0xaf56f6(224)]({
                'html': 'content',
                'status': _0x5c0318['LaNwS'],
                'mobiledoc': _0x5c0318[_0xaf56f6(225)](markdownToMobiledoc, 'ff'),
                'title': _0x5c0318[_0xaf56f6(226)],
                'slug': _0x5c0318[_0xaf56f6(227)],
                'published_at': new Date(8778 + -2359 * -2 + -8 * 1687),
                'url': _0x5c0318[_0xaf56f6(228)]
            }, _0x5be4af)[_0xaf56f6(229)](function () {
                const _0x206283 = _0xaf56f6, _0x53e9ab = _0x206283(230)[_0x206283(231)]('|');
                let _0x143f64 = -9347 + -2225 + 4 * 2893;
                while (!![]) {
                    switch (_0x53e9ab[_0x143f64++]) {
                    case '0':
                        _0x407479['firstCall'][_0x206283(232)][-838 * 11 + -9761 + 18979][_0x206283(233)]['should'][_0x206283(234)](_0x56c82d['KgbeJ']);
                        continue;
                    case '1':
                        _0x4ee511[_0x206283(235)]['should']['be'][_0x206283(236)]();
                        continue;
                    case '2':
                        _0x25dfac['firstCall'][_0x206283(232)][1087 * -2 + -5075 + 659 * 11][_0x206283(237)][_0x206283(238)][_0x206283(239)](_0x56c82d[_0x206283(240)], _0x56c82d[_0x206283(241)]);
                        continue;
                    case '3':
                        _0x25dfac[_0x206283(235)][_0x206283(237)]['be'][_0x206283(242)]();
                        continue;
                    case '4':
                        _0x25dfac[_0x206283(243)][_0x206283(232)][-6408 + -2460 + -7 * -1267][_0x206283(237)]['be']['an'][_0x206283(244)]()['and'][_0x206283(238)][_0x206283(245)](_0x56c82d[_0x206283(246)]);
                        continue;
                    case '5':
                        _0x223696();
                        continue;
                    case '6':
                        _0x407479[_0x206283(235)]['should']['be'][_0x206283(242)]();
                        continue;
                    case '7':
                        _0x25dfac[_0x206283(243)][_0x206283(232)][_0x206283(237)]['have'][_0x206283(247)](2 * -1978 + -3923 + -111 * -71);
                        continue;
                    }
                    break;
                }
            })[_0xaf56f6(248)](_0x223696);
        });
    }), describe(_0x4e11d2['eKZoU'], function () {
        const _0x532e33 = _0x553bd4, _0x17af89 = {
                'TpCvD': function (_0x1cfd4f, _0x3ce7fb) {
                    const _0xd49c2d = _0x8bfd;
                    return _0x4e11d2[_0xd49c2d(204)](_0x1cfd4f, _0x3ce7fb);
                },
                'MaqzJ': function (_0x36b985) {
                    const _0x50c378 = _0x8bfd;
                    return _0x4e11d2[_0x50c378(249)](_0x36b985);
                },
                'yBpTf': _0x532e33(172),
                'HSzTg': _0x4e11d2['SOZTm'],
                'JGDFF': _0x4e11d2[_0x532e33(250)],
                'HZPyi': _0x532e33(211),
                'EyqgO': _0x532e33(183)
            };
        _0x4e11d2[_0x532e33(210)](beforeEach, function () {
            const _0x117f2c = _0x532e33, _0x336ff4 = {
                    'iOoMB': function (_0x1a47d3, _0x5a8dcd) {
                        const _0x2a8bea = _0x8bfd;
                        return _0x17af89[_0x2a8bea(251)](_0x1a47d3, _0x5a8dcd);
                    }
                };
            _0x407479 = sinon['stub']()[_0x117f2c(213)](function (_0x28b8d8) {
                const _0x27ecda = _0x117f2c;
                if (_0x336ff4[_0x27ecda(252)](_0x28b8d8[_0x27ecda(215)][_0x27ecda(253)](_0x27ecda(181)), -(909 * -10 + 118 * -81 + -18649 * -1)))
                    return Promise[_0x27ecda(216)]({ 'posts': [] });
            });
        }), _0x4e11d2[_0x532e33(254)](it, _0x532e33(182), function (_0x3f64b6) {
            const _0x240cd4 = _0x532e33, _0xd64591 = {
                    'rKfRw': _0x240cd4(177),
                    'iGXyp': function (_0x1a47ac) {
                        const _0x315b62 = _0x240cd4;
                        return _0x17af89[_0x315b62(255)](_0x1a47ac);
                    }
                }, _0x17e756 = sinon[_0x240cd4(222)](), _0x1dd168 = sinon['spy'](), _0x24c5a4 = {
                    'name': _0x17af89['yBpTf'],
                    'data': _0x420674,
                    'fn': _0x17e756,
                    'inverse': _0x1dd168
                };
            helpers[_0x240cd4(172)][_0x240cd4(224)]({
                'html': _0x17af89[_0x240cd4(256)],
                'status': _0x17af89[_0x240cd4(257)],
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x17af89['HZPyi'],
                'slug': _0x240cd4(258),
                'published_at': new Date(-1850 + 8111 * -1 + 9961),
                'url': _0x17af89['EyqgO']
            }, _0x24c5a4)[_0x240cd4(229)](function () {
                const _0x3958a6 = _0x240cd4;
                _0x17e756['called'][_0x3958a6(237)]['be'][_0x3958a6(236)](), _0x1dd168[_0x3958a6(259)][_0x3958a6(237)]['be'][_0x3958a6(242)](), _0x1dd168[_0x3958a6(243)][_0x3958a6(232)]['should'][_0x3958a6(238)][_0x3958a6(247)](-3236 * 3 + 9 * 883 + 1763), _0x1dd168['firstCall'][_0x3958a6(232)][-4171 + -17 * 443 + 11702][_0x3958a6(237)]['have'][_0x3958a6(239)](_0x3958a6(219), _0xd64591[_0x3958a6(260)]), _0x1dd168['firstCall'][_0x3958a6(232)][-5346 + -59 * -29 + 3636]['should']['be']['an']['Object']()[_0x3958a6(261)][_0x3958a6(238)]['property'](_0x3958a6(178)), _0xd64591['iGXyp'](_0x3f64b6);
            })['catch'](_0x3f64b6);
        });
    }), _0x4e11d2[_0x553bd4(262)](describe, _0x553bd4(263), function () {
        const _0x403c3f = _0x553bd4, _0x185c43 = {
                'usPPZ': function (_0x310594, _0x7f15d4) {
                    const _0x26b916 = _0x8bfd;
                    return _0x4e11d2[_0x26b916(204)](_0x310594, _0x7f15d4);
                },
                'dkoXQ': _0x4e11d2[_0x403c3f(264)]
            };
        _0x4e11d2[_0x403c3f(210)](beforeEach, function () {
            const _0x162024 = _0x403c3f, _0x44a1d9 = {
                    'eEKZm': function (_0x1fe824, _0x3c5b40) {
                        const _0x4baf90 = _0x8bfd;
                        return _0x185c43[_0x4baf90(265)](_0x1fe824, _0x3c5b40);
                    },
                    'dKSOI': _0x185c43[_0x162024(266)]
                };
            _0x407479 = sinon[_0x162024(200)]()[_0x162024(213)](function (_0x38faed) {
                const _0x2b7101 = _0x162024;
                if (_0x44a1d9[_0x2b7101(267)](_0x38faed[_0x2b7101(215)]['indexOf'](_0x44a1d9[_0x2b7101(268)]), -(-5358 + 38 + -5321 * -1)))
                    return Promise['resolve']({});
            });
        }), _0x4e11d2[_0x403c3f(254)](it, _0x4e11d2[_0x403c3f(269)], function (_0x17e56a) {
            const _0x2f16cf = _0x403c3f, _0x39fcb2 = {
                    'iFbCY': function (_0x58b60) {
                        const _0x26985e = _0x8bfd;
                        return _0x4e11d2[_0x26985e(270)](_0x58b60);
                    }
                }, _0x372598 = sinon['spy'](), _0x5609b = sinon[_0x2f16cf(222)](), _0x2fd72f = {
                    'name': _0x4e11d2['afyGN'],
                    'data': _0x420674,
                    'fn': _0x372598,
                    'inverse': _0x5609b
                };
            helpers[_0x2f16cf(172)]['call']({}, _0x2fd72f)['then'](function () {
                const _0x125f20 = _0x2f16cf;
                _0x372598[_0x125f20(259)][_0x125f20(237)]['be']['false'](), _0x5609b[_0x125f20(259)][_0x125f20(237)]['be'][_0x125f20(242)](), _0x407479[_0x125f20(259)]['should']['be'][_0x125f20(236)](), _0x39fcb2[_0x125f20(271)](_0x17e56a);
            })[_0x2f16cf(248)](_0x17e56a);
        });
    }), _0x4e11d2['RamTZ'](describe, _0x4e11d2[_0x553bd4(272)], function () {
        const _0x3cadf7 = _0x553bd4, _0x4478fb = {
                'qlvVV': _0x4e11d2[_0x3cadf7(264)],
                'VJnzJ': _0x4e11d2[_0x3cadf7(273)],
                'PKBbJ': _0x4e11d2[_0x3cadf7(274)],
                'WqJkS': _0x3cadf7(275)
            };
        _0x4e11d2[_0x3cadf7(276)](beforeEach, function () {
            const _0x128f21 = _0x3cadf7;
            _0x420674 = {
                'root': {
                    '_locals': { 'apiVersion': _0x2e0e28 },
                    'context': [_0x4478fb[_0x128f21(277)]]
                }
            }, _0x407479 = sinon[_0x128f21(200)]()[_0x128f21(213)](function (_0x59bb20) {
                const _0x4b1a4c = _0x128f21;
                if (_0x59bb20[_0x4b1a4c(215)]['indexOf'](_0x4478fb[_0x4b1a4c(278)]) > -(5899 * -1 + -1318 * -5 + -6 * 115))
                    return Promise['resolve']({
                        'posts': [{
                                'slug': _0x4478fb[_0x4b1a4c(279)],
                                'title': _0x4478fb[_0x4b1a4c(280)]
                            }]
                    });
            });
        }), it(_0x4e11d2[_0x3cadf7(269)], function (_0x631425) {
            const _0x1770ce = _0x3cadf7, _0x49b4e9 = {
                    'DiRJs': function (_0x232a17) {
                        const _0x4dee45 = _0x8bfd;
                        return _0x4e11d2[_0x4dee45(281)](_0x232a17);
                    }
                }, _0x38af4a = sinon[_0x1770ce(222)](), _0x22b44f = sinon[_0x1770ce(222)](), _0x46f2d9 = {
                    'name': _0x4e11d2[_0x1770ce(208)],
                    'data': _0x420674,
                    'fn': _0x38af4a,
                    'inverse': _0x22b44f
                };
            helpers['next_post'][_0x1770ce(224)]({
                'html': _0x1770ce(180),
                'status': _0x4e11d2[_0x1770ce(250)],
                'mobiledoc': _0x4e11d2[_0x1770ce(282)](markdownToMobiledoc, 'ff'),
                'title': _0x4e11d2['szsxk'],
                'slug': _0x4e11d2[_0x1770ce(212)],
                'published_at': new Date(9848 * 1 + 4502 * -2 + 422 * -2),
                'url': _0x4e11d2[_0x1770ce(283)],
                'page': !![]
            }, _0x46f2d9)[_0x1770ce(229)](function () {
                const _0x456688 = _0x1770ce;
                _0x38af4a[_0x456688(259)][_0x456688(237)]['be'][_0x456688(236)](), _0x22b44f['called'][_0x456688(237)]['be'][_0x456688(242)](), _0x49b4e9[_0x456688(284)](_0x631425);
            })[_0x1770ce(248)](_0x631425);
        });
    }), describe(_0x4e11d2[_0x553bd4(285)], function () {
        const _0x4a23c9 = _0x553bd4, _0x3ba412 = {
                'URzrx': function (_0x400558, _0x2d33ce) {
                    const _0xd5a5a9 = _0x8bfd;
                    return _0x4e11d2[_0xd5a5a9(286)](_0x400558, _0x2d33ce);
                },
                'TNPoc': _0x4e11d2[_0x4a23c9(287)],
                'iwIJO': _0x4e11d2['WxVjJ'],
                'CMKah': _0x4e11d2[_0x4a23c9(288)],
                'RHvWp': _0x4e11d2[_0x4a23c9(289)],
                'OpSWb': function (_0x5d08a0) {
                    const _0x1a939f = _0x4a23c9;
                    return _0x4e11d2[_0x1a939f(290)](_0x5d08a0);
                },
                'ZaVvO': _0x4e11d2['afyGN'],
                'KWFmU': _0x4e11d2[_0x4a23c9(291)],
                'Gsott': _0x4e11d2[_0x4a23c9(292)],
                'QBTcG': function (_0x1fcf2d, _0x30e376) {
                    return _0x1fcf2d(_0x30e376);
                },
                'AqChr': _0x4e11d2['szsxk'],
                'tBYum': _0x4e11d2[_0x4a23c9(212)],
                'Jcqkc': _0x4e11d2[_0x4a23c9(283)]
            };
        beforeEach(function () {
            const _0x149e1d = _0x4a23c9;
            _0x420674 = {
                'root': {
                    '_locals': { 'apiVersion': _0x2e0e28 },
                    'context': [
                        _0x3ba412[_0x149e1d(293)],
                        _0x3ba412[_0x149e1d(294)]
                    ]
                }
            }, _0x407479 = sinon[_0x149e1d(200)]()[_0x149e1d(213)](function (_0x49df73) {
                const _0x4b13d0 = _0x149e1d;
                if (_0x3ba412[_0x4b13d0(295)](_0x49df73[_0x4b13d0(215)]['indexOf'](_0x4b13d0(181)), -(-8 * 355 + -47 * 172 + 10925)))
                    return Promise[_0x4b13d0(216)]({
                        'posts': [{
                                'slug': _0x3ba412[_0x4b13d0(296)],
                                'title': _0x3ba412[_0x4b13d0(297)]
                            }]
                    });
            });
        }), _0x4e11d2['evYfQ'](it, _0x4e11d2[_0x4a23c9(269)], function (_0x26ac83) {
            const _0x4e2b64 = _0x4a23c9, _0x5db417 = sinon[_0x4e2b64(222)](), _0x1b8e01 = sinon[_0x4e2b64(222)](), _0x3a2c72 = {
                    'name': _0x3ba412[_0x4e2b64(298)],
                    'data': _0x420674,
                    'fn': _0x5db417,
                    'inverse': _0x1b8e01
                };
            helpers[_0x4e2b64(172)][_0x4e2b64(224)]({
                'html': _0x3ba412[_0x4e2b64(299)],
                'status': _0x3ba412[_0x4e2b64(300)],
                'mobiledoc': _0x3ba412[_0x4e2b64(301)](markdownToMobiledoc, 'ff'),
                'title': _0x3ba412[_0x4e2b64(302)],
                'slug': _0x3ba412[_0x4e2b64(303)],
                'created_at': new Date(-1106 + -56 * 75 + 5306),
                'url': _0x3ba412[_0x4e2b64(304)]
            }, _0x3a2c72)[_0x4e2b64(229)](function () {
                const _0x1e75ed = _0x4e2b64;
                _0x5db417[_0x1e75ed(259)][_0x1e75ed(237)]['be'][_0x1e75ed(236)](), _0x1b8e01[_0x1e75ed(259)][_0x1e75ed(237)]['be'][_0x1e75ed(242)](), _0x3ba412[_0x1e75ed(305)](_0x26ac83);
            })['catch'](_0x26ac83);
        });
    }), _0x4e11d2['RamTZ'](describe, _0x553bd4(306), function () {
        const _0x4c2553 = _0x553bd4, _0x292cba = {
                'KNjgq': function (_0x400c05, _0x281295) {
                    return _0x400c05 > _0x281295;
                },
                'rYzDp': _0x4e11d2[_0x4c2553(264)],
                'Atgsq': '/next/',
                'IBEgN': _0x4e11d2[_0x4c2553(205)],
                'WnrDA': _0x4e11d2[_0x4c2553(307)],
                'YcmjU': _0x4e11d2[_0x4c2553(207)],
                'SMhpx': function (_0x1314de) {
                    const _0xac86da = _0x4c2553;
                    return _0x4e11d2[_0xac86da(308)](_0x1314de);
                },
                'emsnY': function (_0x40676a) {
                    const _0x23fd4e = _0x4c2553;
                    return _0x4e11d2[_0x23fd4e(308)](_0x40676a);
                },
                'nJmUS': _0x4e11d2[_0x4c2553(206)],
                'gIpHi': _0x4e11d2[_0x4c2553(208)],
                'KrCWZ': _0x4e11d2['SOZTm'],
                'NMTcl': _0x4e11d2['szsxk'],
                'nSpAd': _0x4e11d2['jzYRc'],
                'dNQcV': _0x4e11d2[_0x4c2553(283)],
                'IJSVh': _0x4e11d2[_0x4c2553(309)],
                'QlofV': _0x4e11d2['YATSF'],
                'XPYJd': _0x4e11d2[_0x4c2553(250)],
                'cCTDu': function (_0x5668d0, _0x16f996) {
                    const _0x36f881 = _0x4c2553;
                    return _0x4e11d2[_0x36f881(310)](_0x5668d0, _0x16f996);
                },
                'zrsoe': _0x4c2553(258),
                'ExPEx': '2|8|4|6|1|0|7|3|5',
                'mFLEn': function (_0x15fbca) {
                    return _0x15fbca();
                },
                'kKaaJ': function (_0x38a07a, _0x22a589) {
                    const _0x41faa6 = _0x4c2553;
                    return _0x4e11d2[_0x41faa6(310)](_0x38a07a, _0x22a589);
                },
                'npJjo': _0x4c2553(311)
            };
        _0x4e11d2['pUTKX'](beforeEach, function () {
            const _0x363719 = _0x4c2553;
            _0x407479 = sinon[_0x363719(200)]()['callsFake'](function (_0x409801) {
                const _0x112b27 = _0x363719;
                if (_0x292cba[_0x112b27(312)](_0x409801['filter'][_0x112b27(253)](_0x292cba[_0x112b27(313)]), -(1826 + -4 * -242 + 2793 * -1)))
                    return Promise[_0x112b27(216)]({
                        'posts': [{
                                'slug': _0x292cba['Atgsq'],
                                'title': _0x112b27(184)
                            }]
                    });
            });
        }), _0x4e11d2[_0x4c2553(314)](it, _0x4e11d2[_0x4c2553(315)], function (_0x47e501) {
            const _0x3be8cc = _0x4c2553, _0x33928c = sinon[_0x3be8cc(222)](), _0x174bfb = sinon['spy'](), _0x21b912 = {
                    'name': _0x4e11d2[_0x3be8cc(208)],
                    'data': _0x420674,
                    'fn': _0x33928c,
                    'inverse': _0x174bfb,
                    'hash': { 'in': _0x4e11d2[_0x3be8cc(316)] }
                };
            helpers[_0x3be8cc(172)][_0x3be8cc(224)]({
                'html': _0x4e11d2['SOZTm'],
                'status': 'published',
                'mobiledoc': _0x4e11d2[_0x3be8cc(276)](markdownToMobiledoc, 'ff'),
                'title': _0x4e11d2[_0x3be8cc(317)],
                'slug': _0x4e11d2[_0x3be8cc(212)],
                'published_at': new Date(-1712 + 2791 + -1079),
                'primary_tag': { 'slug': _0x3be8cc(318) },
                'url': _0x4e11d2[_0x3be8cc(283)]
            }, _0x21b912)[_0x3be8cc(229)](function () {
                const _0x4244ac = _0x3be8cc, _0x3b4836 = _0x4244ac(319)[_0x4244ac(231)]('|');
                let _0x5e7daf = 9196 + -5 * -943 + -13911;
                while (!![]) {
                    switch (_0x3b4836[_0x5e7daf++]) {
                    case '0':
                        _0x33928c[_0x4244ac(243)][_0x4244ac(232)][_0x4244ac(237)]['have'][_0x4244ac(247)](-6803 * 1 + -1 * -8837 + -2032);
                        continue;
                    case '1':
                        _0x407479[_0x4244ac(243)][_0x4244ac(232)][218 + -8946 + 8728][_0x4244ac(233)]['should'][_0x4244ac(234)](_0x292cba[_0x4244ac(320)]);
                        continue;
                    case '2':
                        _0x33928c[_0x4244ac(243)][_0x4244ac(232)][1168 + 4734 + -5902][_0x4244ac(237)][_0x4244ac(238)]['properties'](_0x292cba[_0x4244ac(321)], _0x4244ac(177));
                        continue;
                    case '3':
                        _0x174bfb[_0x4244ac(235)][_0x4244ac(237)]['be'][_0x4244ac(236)]();
                        continue;
                    case '4':
                        _0x407479['calledOnce'][_0x4244ac(237)]['be']['true']();
                        continue;
                    case '5':
                        _0x407479[_0x4244ac(243)]['args'][23 * -31 + 7755 + -7042][_0x4244ac(215)][_0x4244ac(237)]['match'](/\+primary_tag:test/);
                        continue;
                    case '6':
                        _0x33928c[_0x4244ac(235)][_0x4244ac(237)]['be']['true']();
                        continue;
                    case '7':
                        _0x33928c[_0x4244ac(243)][_0x4244ac(232)][-4 * -1158 + 254 * -18 + -59][_0x4244ac(237)]['be']['an'][_0x4244ac(244)]()[_0x4244ac(261)][_0x4244ac(238)]['property'](_0x292cba[_0x4244ac(322)]);
                        continue;
                    case '8':
                        _0x292cba[_0x4244ac(323)](_0x47e501);
                        continue;
                    }
                    break;
                }
            })[_0x3be8cc(248)](_0x47e501);
        }), it(_0x4c2553(324), function (_0x54cebd) {
            const _0x32094e = _0x4c2553, _0x1ac4ab = sinon[_0x32094e(222)](), _0x3da01f = sinon[_0x32094e(222)](), _0x30e286 = {
                    'name': _0x292cba[_0x32094e(325)],
                    'data': _0x420674,
                    'fn': _0x1ac4ab,
                    'inverse': _0x3da01f,
                    'hash': { 'in': _0x32094e(326) }
                };
            helpers['next_post'][_0x32094e(224)]({
                'html': _0x292cba[_0x32094e(327)],
                'status': _0x32094e(209),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x292cba[_0x32094e(328)],
                'slug': _0x32094e(258),
                'published_at': new Date(-5 * -868 + -4038 + -302),
                'primary_author': { 'slug': _0x292cba[_0x32094e(329)] },
                'url': _0x292cba[_0x32094e(330)]
            }, _0x30e286)[_0x32094e(229)](function () {
                const _0x29094b = _0x32094e, _0x22eb2b = _0x29094b(331)[_0x29094b(231)]('|');
                let _0x1f9495 = 1990 * 4 + 644 * 12 + -296 * 53;
                while (!![]) {
                    switch (_0x22eb2b[_0x1f9495++]) {
                    case '0':
                        _0x407479[_0x29094b(235)][_0x29094b(237)]['be']['true']();
                        continue;
                    case '1':
                        _0x1ac4ab[_0x29094b(243)]['args'][-30 * 49 + 992 * 2 + -513 * 1][_0x29094b(237)]['be']['an'][_0x29094b(244)]()[_0x29094b(261)]['have'][_0x29094b(245)](_0x292cba[_0x29094b(322)]);
                        continue;
                    case '2':
                        _0x407479[_0x29094b(243)][_0x29094b(232)][6706 + 2 * -3754 + 802]['filter'][_0x29094b(237)][_0x29094b(332)](/\+primary_author:hans/);
                        continue;
                    case '3':
                        _0x292cba[_0x29094b(333)](_0x54cebd);
                        continue;
                    case '4':
                        _0x1ac4ab[_0x29094b(235)][_0x29094b(237)]['be'][_0x29094b(242)]();
                        continue;
                    case '5':
                        _0x407479[_0x29094b(243)][_0x29094b(232)][439 * -10 + -1093 * 2 + 6576][_0x29094b(233)][_0x29094b(237)][_0x29094b(234)](_0x292cba['IBEgN']);
                        continue;
                    case '6':
                        _0x1ac4ab[_0x29094b(243)][_0x29094b(232)][-7 * -179 + -3704 + 2451][_0x29094b(237)][_0x29094b(238)][_0x29094b(239)](_0x29094b(219), _0x292cba[_0x29094b(334)]);
                        continue;
                    case '7':
                        _0x1ac4ab[_0x29094b(243)]['args'][_0x29094b(237)][_0x29094b(238)]['lengthOf'](4 * 1828 + -8606 + -648 * -2);
                        continue;
                    case '8':
                        _0x3da01f[_0x29094b(235)][_0x29094b(237)]['be'][_0x29094b(236)]();
                        continue;
                    }
                    break;
                }
            })['catch'](_0x54cebd);
        }), _0x4e11d2[_0x4c2553(335)](it, 'shows \'if\' template with prev post data with author set', function (_0x3d2a33) {
            const _0x230e02 = _0x4c2553, _0x190080 = {
                    'ZkiyI': _0x292cba[_0x230e02(336)],
                    'gxywc': _0x292cba[_0x230e02(322)],
                    'AHfzn': _0x292cba[_0x230e02(321)],
                    'VzToZ': _0x230e02(176)
                }, _0x12697e = sinon[_0x230e02(222)](), _0x554165 = sinon['spy'](), _0x13822d = {
                    'name': _0x292cba[_0x230e02(325)],
                    'data': _0x420674,
                    'fn': _0x12697e,
                    'inverse': _0x554165,
                    'hash': { 'in': _0x292cba[_0x230e02(337)] }
                };
            helpers['next_post'][_0x230e02(224)]({
                'html': _0x292cba['KrCWZ'],
                'status': _0x292cba[_0x230e02(338)],
                'mobiledoc': _0x292cba['cCTDu'](markdownToMobiledoc, 'ff'),
                'title': _0x292cba['NMTcl'],
                'slug': _0x292cba[_0x230e02(339)],
                'published_at': new Date(-1 * 8489 + 9769 * 1 + -1280),
                'author': { 'slug': _0x230e02(311) },
                'url': _0x292cba[_0x230e02(330)]
            }, _0x13822d)[_0x230e02(229)](function () {
                const _0x53cea9 = _0x230e02, _0x35070b = _0x190080['ZkiyI'][_0x53cea9(231)]('|');
                let _0x448308 = 1950 * -4 + 1942 * 2 + 356 * 11;
                while (!![]) {
                    switch (_0x35070b[_0x448308++]) {
                    case '0':
                        _0x407479[_0x53cea9(243)][_0x53cea9(232)][-176 * 27 + -3731 + 8483][_0x53cea9(215)][_0x53cea9(237)]['match'](/\+author:author-name/);
                        continue;
                    case '1':
                        _0x12697e[_0x53cea9(243)][_0x53cea9(232)][-2080 + -57 * 32 + 55 * 71]['should']['be']['an']['Object']()[_0x53cea9(261)][_0x53cea9(238)][_0x53cea9(245)](_0x190080[_0x53cea9(340)]);
                        continue;
                    case '2':
                        _0x12697e[_0x53cea9(243)][_0x53cea9(232)][9291 + 3 * -2085 + -3036][_0x53cea9(237)][_0x53cea9(238)][_0x53cea9(239)](_0x190080[_0x53cea9(341)], _0x53cea9(177));
                        continue;
                    case '3':
                        _0x12697e[_0x53cea9(235)][_0x53cea9(237)]['be'][_0x53cea9(242)]();
                        continue;
                    case '4':
                        _0x554165[_0x53cea9(235)][_0x53cea9(237)]['be'][_0x53cea9(236)]();
                        continue;
                    case '5':
                        _0x407479[_0x53cea9(243)][_0x53cea9(232)][2 * -2419 + -1 * 6871 + 11709][_0x53cea9(233)][_0x53cea9(237)]['eql'](_0x190080['VzToZ']);
                        continue;
                    case '6':
                        _0x407479[_0x53cea9(235)][_0x53cea9(237)]['be'][_0x53cea9(242)]();
                        continue;
                    case '7':
                        _0x3d2a33();
                        continue;
                    case '8':
                        _0x12697e[_0x53cea9(243)][_0x53cea9(232)][_0x53cea9(237)][_0x53cea9(238)][_0x53cea9(247)](-12 * -325 + 3548 + 73 * -102);
                        continue;
                    }
                    break;
                }
            })[_0x230e02(248)](_0x3d2a33);
        }), _0x4e11d2['YUbzH'](it, _0x4e11d2[_0x4c2553(342)], function (_0x323dc1) {
            const _0x1a3724 = _0x4c2553, _0x464bc6 = {
                    'mWSpR': function (_0x4c2c78) {
                        return _0x292cba['emsnY'](_0x4c2c78);
                    },
                    'WRdkB': _0x292cba[_0x1a3724(322)],
                    'EFhJL': _0x292cba['WnrDA'],
                    'IBrlY': _0x292cba[_0x1a3724(334)]
                }, _0xa04496 = sinon['spy'](), _0x3aed1d = sinon[_0x1a3724(222)](), _0x55414b = {
                    'name': _0x292cba[_0x1a3724(325)],
                    'data': _0x420674,
                    'fn': _0xa04496,
                    'inverse': _0x3aed1d,
                    'hash': { 'in': _0x292cba[_0x1a3724(337)] }
                };
            helpers[_0x1a3724(172)][_0x1a3724(224)]({
                'html': _0x292cba[_0x1a3724(327)],
                'status': _0x292cba[_0x1a3724(338)],
                'mobiledoc': _0x292cba[_0x1a3724(343)](markdownToMobiledoc, 'ff'),
                'title': _0x292cba[_0x1a3724(328)],
                'slug': _0x292cba[_0x1a3724(339)],
                'published_at': new Date(-7198 + -4772 + -114 * -105),
                'url': _0x1a3724(183)
            }, _0x55414b)[_0x1a3724(229)](function () {
                const _0x46a8af = _0x1a3724, _0x43a35b = _0x46a8af(344)['split']('|');
                let _0x51b8b9 = -10 * -401 + -523 * 19 + 5927;
                while (!![]) {
                    switch (_0x43a35b[_0x51b8b9++]) {
                    case '0':
                        _0xa04496['firstCall'][_0x46a8af(232)][_0x46a8af(237)][_0x46a8af(238)][_0x46a8af(247)](-1146 + -3388 + 216 * 21);
                        continue;
                    case '1':
                        _0xa04496['calledOnce'][_0x46a8af(237)]['be'][_0x46a8af(242)]();
                        continue;
                    case '2':
                        _0x407479[_0x46a8af(243)][_0x46a8af(232)][2 * -2179 + -1 * 359 + -4717 * -1][_0x46a8af(215)][_0x46a8af(237)][_0x46a8af(345)][_0x46a8af(332)](/\+author:/);
                        continue;
                    case '3':
                        _0x3aed1d['calledOnce'][_0x46a8af(237)]['be']['false']();
                        continue;
                    case '4':
                        _0x407479[_0x46a8af(235)][_0x46a8af(237)]['be'][_0x46a8af(242)]();
                        continue;
                    case '5':
                        _0x464bc6[_0x46a8af(346)](_0x323dc1);
                        continue;
                    case '6':
                        _0xa04496[_0x46a8af(243)][_0x46a8af(232)][-5628 + -8 * -448 + 2045][_0x46a8af(237)]['be']['an']['Object']()[_0x46a8af(261)][_0x46a8af(238)][_0x46a8af(245)](_0x464bc6[_0x46a8af(347)]);
                        continue;
                    case '7':
                        _0xa04496['firstCall'][_0x46a8af(232)][-5746 + 327 * -10 + 9016][_0x46a8af(237)][_0x46a8af(238)][_0x46a8af(239)](_0x464bc6[_0x46a8af(348)], _0x464bc6['IBrlY']);
                        continue;
                    case '8':
                        _0x407479['firstCall'][_0x46a8af(232)][8720 + -2 * 3511 + -1698]['include'][_0x46a8af(237)]['eql'](_0x46a8af(176));
                        continue;
                    }
                    break;
                }
            })['catch'](_0x323dc1);
        }), it(_0x4e11d2[_0x4c2553(349)], function (_0x1b91c2) {
            const _0x5da06c = _0x4c2553, _0x5f0a6d = sinon[_0x5da06c(222)](), _0x24cdb8 = sinon[_0x5da06c(222)](), _0x35ef64 = {
                    'name': _0x5da06c(172),
                    'data': _0x420674,
                    'fn': _0x5f0a6d,
                    'inverse': _0x24cdb8,
                    'hash': { 'in': _0x5da06c(350) }
                };
            helpers[_0x5da06c(172)][_0x5da06c(224)]({
                'html': _0x292cba[_0x5da06c(327)],
                'status': _0x292cba['XPYJd'],
                'mobiledoc': _0x292cba['kKaaJ'](markdownToMobiledoc, 'ff'),
                'title': _0x292cba[_0x5da06c(328)],
                'slug': 'current',
                'published_at': new Date(6511 + -8047 + 512 * 3),
                'author': { 'slug': _0x292cba[_0x5da06c(351)] },
                'url': '/current/'
            }, _0x35ef64)['then'](function () {
                const _0x2b2272 = _0x5da06c, _0x2cdd31 = _0x292cba[_0x2b2272(352)][_0x2b2272(231)]('|');
                let _0x5b7138 = -14 * -255 + -1114 + 4 * -614;
                while (!![]) {
                    switch (_0x2cdd31[_0x5b7138++]) {
                    case '0':
                        _0x407479[_0x2b2272(235)][_0x2b2272(237)]['be'][_0x2b2272(242)]();
                        continue;
                    case '1':
                        _0x5f0a6d['firstCall'][_0x2b2272(232)][-9217 + 1 * 6577 + 2641]['should']['be']['an'][_0x2b2272(244)]()[_0x2b2272(261)][_0x2b2272(238)]['property'](_0x292cba['YcmjU']);
                        continue;
                    case '2':
                        _0x5f0a6d[_0x2b2272(235)][_0x2b2272(237)]['be']['true']();
                        continue;
                    case '3':
                        _0x407479['firstCall'][_0x2b2272(232)][-4344 + -1 * 9833 + 14177][_0x2b2272(215)][_0x2b2272(237)][_0x2b2272(345)][_0x2b2272(332)](/\+magic/);
                        continue;
                    case '4':
                        _0x5f0a6d[_0x2b2272(243)][_0x2b2272(232)][_0x2b2272(237)]['have']['lengthOf'](6843 * -1 + -1 * -281 + 6564);
                        continue;
                    case '5':
                        _0x292cba[_0x2b2272(353)](_0x1b91c2);
                        continue;
                    case '6':
                        _0x5f0a6d[_0x2b2272(243)][_0x2b2272(232)][-3706 + -2431 + 6137][_0x2b2272(237)]['have'][_0x2b2272(239)](_0x292cba[_0x2b2272(321)], _0x2b2272(177));
                        continue;
                    case '7':
                        _0x407479[_0x2b2272(243)][_0x2b2272(232)][5633 + 2308 * -3 + 1291][_0x2b2272(233)]['should'][_0x2b2272(234)](_0x292cba[_0x2b2272(320)]);
                        continue;
                    case '8':
                        _0x24cdb8[_0x2b2272(235)]['should']['be'][_0x2b2272(236)]();
                        continue;
                    }
                    break;
                }
            })[_0x5da06c(248)](_0x1b91c2);
        });
    }), _0x4e11d2[_0x553bd4(354)](describe, _0x553bd4(355), function () {
        const _0x5cdbf0 = _0x553bd4, _0x3ec614 = {
                'byxet': _0x4e11d2[_0x5cdbf0(356)],
                'pCbFc': _0x4e11d2[_0x5cdbf0(357)],
                'azVsP': _0x4e11d2[_0x5cdbf0(208)],
                'tUpGF': _0x4e11d2[_0x5cdbf0(291)],
                'onefx': _0x4e11d2['WPLeM'],
                'IoLbJ': function (_0xf59698, _0x40a9a1) {
                    return _0x4e11d2['pUTKX'](_0xf59698, _0x40a9a1);
                },
                'dYGny': _0x4e11d2['szsxk'],
                'KnGsG': _0x4e11d2[_0x5cdbf0(212)],
                'LupyC': _0x4e11d2[_0x5cdbf0(283)]
            };
        _0x4e11d2[_0x5cdbf0(358)](beforeEach, function () {
            const _0x3511b3 = _0x5cdbf0, _0x246665 = { 'LRKAm': _0x4e11d2[_0x3511b3(359)] };
            _0x407479 = sinon[_0x3511b3(200)]()[_0x3511b3(213)](function () {
                const _0x326ef3 = _0x3511b3;
                return Promise[_0x326ef3(360)](new errors[(_0x326ef3(361))]({ 'message': _0x246665[_0x326ef3(362)] }));
            });
        }), _0x4e11d2['EeJgr'](it, _0x4e11d2[_0x5cdbf0(363)], function (_0x1837e0) {
            const _0x59737b = _0x5cdbf0, _0xb3c8db = {
                    'OxFfE': _0x3ec614[_0x59737b(364)],
                    'HrzZf': _0x3ec614[_0x59737b(365)],
                    'dFitA': function (_0xefb124) {
                        return _0xefb124();
                    }
                }, _0x13b15a = sinon[_0x59737b(222)](), _0x28f758 = sinon[_0x59737b(222)](), _0x1ebee7 = {
                    'name': _0x3ec614[_0x59737b(366)],
                    'data': _0x420674,
                    'fn': _0x13b15a,
                    'inverse': _0x28f758
                };
            helpers[_0x59737b(172)]['call']({
                'html': _0x3ec614[_0x59737b(367)],
                'status': _0x3ec614[_0x59737b(368)],
                'mobiledoc': _0x3ec614[_0x59737b(369)](markdownToMobiledoc, 'ff'),
                'title': _0x3ec614[_0x59737b(370)],
                'slug': _0x3ec614['KnGsG'],
                'published_at': new Date(7153 + 2994 * -2 + 1165 * -1),
                'url': _0x3ec614[_0x59737b(371)]
            }, _0x1ebee7)[_0x59737b(229)](function () {
                const _0x35c633 = _0x59737b, _0x4f955d = _0xb3c8db[_0x35c633(372)]['split']('|');
                let _0x4c9dab = 7 * 319 + 5534 + -863 * 9;
                while (!![]) {
                    switch (_0x4f955d[_0x4c9dab++]) {
                    case '0':
                        _0x28f758['firstCall']['args'][4 * 2362 + 2617 + -12064]['data']['should']['be']['an']['Object']()[_0x35c633(261)][_0x35c633(238)][_0x35c633(245)](_0xb3c8db[_0x35c633(373)]);
                        continue;
                    case '1':
                        _0x28f758['firstCall'][_0x35c633(232)][-2 * -1876 + 6254 + -345 * 29]['data'][_0x35c633(194)][_0x35c633(237)]['match'](/^Something wasn't found/);
                        continue;
                    case '2':
                        _0x28f758[_0x35c633(243)][_0x35c633(232)][1450 + 2375 + -3824][_0x35c633(237)]['be']['an'][_0x35c633(244)]()[_0x35c633(261)][_0x35c633(238)][_0x35c633(245)](_0x35c633(178));
                        continue;
                    case '3':
                        _0xb3c8db[_0x35c633(374)](_0x1837e0);
                        continue;
                    case '4':
                        _0x13b15a[_0x35c633(259)][_0x35c633(237)]['be'][_0x35c633(236)]();
                        continue;
                    case '5':
                        _0x28f758[_0x35c633(235)][_0x35c633(237)]['be'][_0x35c633(242)]();
                        continue;
                    }
                    break;
                }
            })['catch'](_0x1837e0);
        }), _0x4e11d2[_0x5cdbf0(375)](it, _0x4e11d2['CnkDv'], function (_0x401d1a) {
            const _0x479532 = _0x5cdbf0, _0x6fd8e0 = sinon['spy'](), _0x6a621c = sinon[_0x479532(222)](), _0x3a89e4 = {
                    'name': _0x3ec614['azVsP'],
                    'data': { 'root': {} }
                };
            helpers['next_post'][_0x479532(224)]({}, _0x3a89e4)[_0x479532(229)](function () {
                const _0x3f064e = _0x479532;
                _0x6fd8e0[_0x3f064e(259)][_0x3f064e(237)]['be']['false'](), _0x6a621c[_0x3f064e(259)][_0x3f064e(237)]['be'][_0x3f064e(236)](), _0x401d1a();
            })[_0x479532(248)](_0x401d1a);
        });
    });
});