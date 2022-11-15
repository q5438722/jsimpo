define(function (_0x50e704, _0x103ab2, _0x30f0c7) {
    'use strict';
    var _0x116ed2 = _0x1bc1;
    _0x50e704(_0x116ed2(234));
    if (brackets['inBrowser'])
        return;
    describe('Native Menus', function () {
        var _0xfb2d85 = _0x116ed2, _0x835543 = _0xfb2d85(235), _0x42c2ce = 'MENU', _0x141488 = 'TEST', _0x4b93dc = _0xfb2d85(236), _0x116602 = _0xfb2d85(237), _0x432c26 = 'item1';
        it(_0xfb2d85(238), function () {
            var _0x4e94df = _0xfb2d85, _0x3eb6fc = ![], _0x284a3e = 0;
            expect(brackets[_0x4e94df(239)])[_0x4e94df(240)](), runs(function () {
                var _0x35551d = _0x4e94df;
                brackets[_0x35551d(239)][_0x35551d(241)](_0x42c2ce, _0x835543, '', '', function (_0x408366) {
                    _0x3eb6fc = !![], _0x284a3e = _0x408366;
                });
            }), waitsFor(function () {
                return _0x3eb6fc;
            }), expect(_0x284a3e)[_0x4e94df(242)](0);
        }), describe(_0xfb2d85(241), function () {
            var _0x5d6714 = _0xfb2d85;
            it(_0x5d6714(243), function () {
                var _0x40f55f = ![], _0x305f94 = 0, _0x3213ab;
                runs(function () {
                    var _0x16297e = _0x1bc1;
                    brackets[_0x16297e(239)][_0x16297e(244)](_0x4b93dc, function (_0x3709fe) {
                        _0x40f55f = !![], _0x305f94 = _0x3709fe;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x138d15 = _0x1bc1;
                    expect(_0x305f94)[_0x138d15(242)](brackets['fs'][_0x138d15(245)]);
                }), runs(function () {
                    var _0x5dd40d = _0x1bc1;
                    _0x40f55f = ![], brackets[_0x5dd40d(239)]['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x221992) {
                        _0x40f55f = !![], _0x305f94 = _0x221992;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x1bf39d = _0x1bc1;
                    expect(_0x305f94)[_0x1bf39d(242)](0);
                }), runs(function () {
                    var _0x3db747 = _0x1bc1;
                    _0x40f55f = ![], brackets['app'][_0x3db747(244)](_0x4b93dc, function (_0x3478ed, _0x200b69) {
                        _0x40f55f = !![], _0x305f94 = _0x3478ed, _0x3213ab = _0x200b69;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x23cf1c = _0x1bc1;
                    expect(_0x305f94)[_0x23cf1c(242)](0), expect(_0x3213ab)[_0x23cf1c(242)](_0x141488);
                }), runs(function () {
                    var _0xb58edd = _0x1bc1;
                    _0x40f55f = ![], brackets['app'][_0xb58edd(246)](_0x4b93dc, function (_0x20273c) {
                        _0x40f55f = !![];
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                });
            }), it(_0x5d6714(247), function () {
                var _0x2dc8e7 = ![], _0x462f94 = 0;
                runs(function () {
                    var _0x37cca0 = _0x1bc1;
                    brackets['app'][_0x37cca0(241)](_0x141488, _0x4b93dc, 42, '', function (_0x9ac2a4) {
                        _0x2dc8e7 = !![], _0x462f94 = _0x9ac2a4;
                    });
                }), waitsFor(function () {
                    return _0x2dc8e7;
                }), runs(function () {
                    var _0x47e7d9 = _0x1bc1;
                    expect(_0x462f94)[_0x47e7d9(242)](brackets['fs'][_0x47e7d9(248)]);
                });
            });
        }), describe(_0xfb2d85(249), function () {
            var _0xdcc690 = _0xfb2d85, _0x24758d = ![], _0xc81218 = 0, _0x83628c, _0x496bf6 = -1;
            beforeEach(function () {
                runs(function () {
                    var _0x27da92 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x27da92(239)][_0x27da92(241)](_0x141488, _0x4b93dc, '', '', function (_0x5ce7eb) {
                        _0x24758d = !![], _0xc81218 = _0x5ce7eb;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x3933a4 = _0x1bc1;
                    expect(_0xc81218)[_0x3933a4(242)](0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x37ca1d = _0x1bc1;
                    _0x24758d = ![], brackets[_0x37ca1d(239)][_0x37ca1d(246)](_0x4b93dc, function (_0x51d2eb) {
                        _0x24758d = !![], _0xc81218 = _0x51d2eb;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x44e2ab = _0x1bc1;
                    expect(_0xc81218)[_0x44e2ab(242)](0);
                });
            }), it(_0xdcc690(250), function () {
                _0xc81218 = 0, runs(function () {
                    var _0x152147 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x152147(239)][_0x152147(241)]('Custom1', _0x152147(251), '', '', function (_0x2c329a) {
                        _0x24758d = !![], _0xc81218 = _0x2c329a;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x22e78a = _0x1bc1;
                    expect(_0xc81218)[_0x22e78a(242)](0);
                }), runs(function () {
                    var _0x4da8ca = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, brackets[_0x4da8ca(239)][_0x4da8ca(252)](_0x4da8ca(251), function (_0x1026ec, _0x5d876f, _0x2429e6) {
                        _0x24758d = !![], _0xc81218 = _0x1026ec, _0x83628c = _0x5d876f, _0x496bf6 = _0x2429e6;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x37d1c9 = _0x1bc1;
                    expect(_0xc81218)[_0x37d1c9(242)](0), expect(_0x83628c)[_0x37d1c9(242)](''), expect(_0x496bf6)[_0x37d1c9(253)](0);
                }), runs(function () {
                    var _0x1beb45 = _0x1bc1;
                    _0x24758d = ![], brackets['app']['removeMenu'](_0x1beb45(251), function (_0x55872e) {
                        _0x24758d = !![], _0xc81218 = _0x55872e;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x5151a8 = _0x1bc1;
                    expect(_0xc81218)[_0x5151a8(242)](0);
                });
            }), it(_0xdcc690(254), function () {
                var _0x153bb5 = -1;
                _0xc81218 = 0, runs(function () {
                    var _0x442a17 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x442a17(239)][_0x442a17(241)](_0x442a17(255), _0x442a17(256), 'first', '', function (_0x3cb5b2) {
                        _0x24758d = !![], _0xc81218 = _0x3cb5b2;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x20850e = _0x1bc1;
                    expect(_0xc81218)[_0x20850e(242)](0);
                }), runs(function () {
                    var _0x49b7fc = _0x1bc1;
                    _0x24758d = ![], brackets[_0x49b7fc(239)][_0x49b7fc(241)](_0x49b7fc(257), 'menu-unittest-after', 'after', _0x49b7fc(256), function (_0x300495) {
                        _0x24758d = !![], _0xc81218 = _0x300495;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x582a18 = _0x1bc1;
                    expect(_0xc81218)[_0x582a18(242)](0);
                }), runs(function () {
                    var _0x2b790d = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, _0x153bb5 = -1, brackets[_0x2b790d(239)][_0x2b790d(252)](_0x2b790d(256), function (_0x5bc1e9, _0x219800, _0x99afdd) {
                        _0x24758d = !![], _0xc81218 = _0x5bc1e9, _0x83628c = _0x219800, _0x496bf6 = _0x99afdd, _0x153bb5 = _0x496bf6 + 1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x248979 = _0x1bc1;
                    expect(_0xc81218)['toBe'](0), expect(_0x83628c)[_0x248979(242)]('');
                }), runs(function () {
                    var _0x244b75 = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, brackets[_0x244b75(239)][_0x244b75(252)](_0x244b75(258), function (_0x26a07e, _0x405aad, _0x3b4f84) {
                        _0x24758d = !![], _0xc81218 = _0x26a07e, _0x83628c = _0x405aad, _0x496bf6 = _0x3b4f84;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0xdfcc40 = _0x1bc1;
                    expect(_0xc81218)[_0xdfcc40(242)](0), expect(_0x83628c)[_0xdfcc40(242)](''), expect(_0x496bf6)['toBe'](_0x153bb5);
                }), runs(function () {
                    var _0x4f3a12 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x4f3a12(239)]['removeMenu']('menu-unittest-first', function (_0x1e9b3b) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x3d39f8 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x3d39f8(239)][_0x3d39f8(246)](_0x3d39f8(258), function (_0x10c484) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            }), it(_0xdcc690(259), function () {
                var _0x103376 = -1;
                _0xc81218 = 0, runs(function () {
                    var _0x5ecb09 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x5ecb09(239)][_0x5ecb09(241)]('CustomLast', 'menu-unittest-last', 'last', '', function (_0x4a6663) {
                        _0x24758d = !![], _0xc81218 = _0x4a6663;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    expect(_0xc81218)['toBe'](0);
                }), runs(function () {
                    var _0x48762e = _0x1bc1;
                    _0x24758d = ![], brackets['app'][_0x48762e(241)](_0x48762e(260), _0x48762e(261), _0x48762e(262), _0x48762e(263), function (_0x56321d) {
                        _0x24758d = !![], _0xc81218 = _0x56321d;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x26fe51 = _0x1bc1;
                    expect(_0xc81218)[_0x26fe51(242)](0);
                }), runs(function () {
                    var _0x57de4b = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, _0x103376 = -1, brackets[_0x57de4b(239)][_0x57de4b(252)](_0x57de4b(263), function (_0x468140, _0x53670b, _0x4cddfe) {
                        _0x24758d = !![], _0xc81218 = _0x468140, _0x83628c = _0x53670b, _0x496bf6 = _0x4cddfe, _0x103376 = _0x496bf6 - 1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x4eb916 = _0x1bc1;
                    expect(_0xc81218)[_0x4eb916(242)](0), expect(_0x83628c)['toBe']('');
                }), runs(function () {
                    var _0xbe1735 = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, brackets[_0xbe1735(239)][_0xbe1735(252)](_0xbe1735(261), function (_0x35472f, _0x5c5a7b, _0x4d232f) {
                        _0x24758d = !![], _0xc81218 = _0x35472f, _0x83628c = _0x5c5a7b, _0x496bf6 = _0x4d232f;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x20fb83 = _0x1bc1;
                    expect(_0xc81218)[_0x20fb83(242)](0), expect(_0x83628c)['toBe'](''), expect(_0x496bf6)[_0x20fb83(242)](_0x103376);
                }), runs(function () {
                    var _0x1d07dc = _0x1bc1;
                    _0x24758d = ![], brackets[_0x1d07dc(239)][_0x1d07dc(246)](_0x1d07dc(263), function (_0x1012f6) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x1fda51 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x1fda51(239)]['removeMenu']('menu-unittest-before', function (_0x133bd3) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            }), it(_0xdcc690(264), function () {
                _0xc81218 = 0, runs(function () {
                    var _0x9a66f7 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x9a66f7(239)][_0x9a66f7(241)](_0x9a66f7(265), 'menu-unittest4', _0x9a66f7(266), _0x9a66f7(267), function (_0xebc43e) {
                        _0x24758d = !![], _0xc81218 = _0xebc43e;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x450231 = _0x1bc1;
                    expect(_0xc81218)[_0x450231(242)](brackets['fs'][_0x450231(245)]);
                }), runs(function () {
                    var _0x321b4c = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -1, brackets[_0x321b4c(239)][_0x321b4c(252)](_0x321b4c(268), function (_0x511bfc, _0x35d013, _0x1b7fe1) {
                        _0x24758d = !![], _0xc81218 = _0x511bfc, _0x83628c = _0x35d013, _0x496bf6 = _0x1b7fe1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x5b7b72 = _0x1bc1;
                    expect(_0xc81218)[_0x5b7b72(242)](0), expect(_0x83628c)[_0x5b7b72(242)](''), expect(_0x496bf6)[_0x5b7b72(253)](0);
                }), runs(function () {
                    var _0x58257b = _0x1bc1;
                    _0x24758d = ![], brackets['app']['removeMenu'](_0x58257b(268), function (_0x1ef60d) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            });
        }), describe(_0xfb2d85(269), function () {
            var _0xd67442 = _0xfb2d85, _0x2b2143 = ![], _0x4c8479 = 0, _0x4325ac;
            beforeEach(function () {
                runs(function () {
                    var _0x33ee3f = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x33ee3f(239)][_0x33ee3f(241)](_0x141488, _0x4b93dc, '', '', function (_0x30cb6a) {
                        _0x2b2143 = !![], _0x4c8479 = _0x30cb6a;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x3bfc71 = _0x1bc1;
                    expect(_0x4c8479)[_0x3bfc71(242)](0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x35498a = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x35498a(239)][_0x35498a(246)](_0x4b93dc, function (_0xf82780) {
                        _0x2b2143 = !![], _0x4c8479 = _0xf82780;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0xde3320 = _0x1bc1;
                    expect(_0x4c8479)[_0xde3320(242)](0);
                });
            }), it(_0xd67442(270), function () {
                _0x4c8479 = 0, runs(function () {
                    _0x2b2143 = ![], brackets['app']['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x2abe3f) {
                        _0x2b2143 = !![], _0x4c8479 = _0x2abe3f;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x1c0b70 = _0x1bc1;
                    expect(_0x4c8479)[_0x1c0b70(242)](0);
                }), runs(function () {
                    var _0x33c875 = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x33c875(239)][_0x33c875(244)](_0x432c26, function (_0x410b99, _0x2af8d5) {
                        _0x2b2143 = !![], _0x4c8479 = _0x410b99, _0x4325ac = _0x2af8d5;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x5eaf61 = _0x1bc1;
                    expect(_0x4c8479)['toBe'](0), expect(_0x4325ac)[_0x5eaf61(242)](_0x116602), _0x2b2143 = ![], brackets[_0x5eaf61(239)][_0x5eaf61(271)](_0x432c26, function (_0x518b01) {
                        _0x2b2143 = !![];
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                });
            }), it(_0xd67442(247), function () {
                runs(function () {
                    var _0x187bd9 = _0x1bc1;
                    _0x4c8479 = 0, _0x2b2143 = ![], brackets[_0x187bd9(239)]['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', 42, '', '', function (_0x4a953e) {
                        _0x2b2143 = !![], _0x4c8479 = _0x4a953e;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x182d15 = _0x1bc1;
                    expect(_0x4c8479)[_0x182d15(242)](brackets['fs'][_0x182d15(248)]);
                });
            });
        }), describe(_0xfb2d85(272), function () {
            var _0x2e45b = _0xfb2d85, _0x39fddb = ![], _0x2a330d = 0, _0x3373e5, _0x4c496e = null, _0x55b883 = -1;
            beforeEach(function () {
                runs(function () {
                    var _0x3414ae = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x3414ae(239)][_0x3414ae(241)](_0x141488, _0x4b93dc, '', '', function (_0x16ef11) {
                        _0x39fddb = !![], _0x2a330d = _0x16ef11;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0);
                }), runs(function () {
                    var _0x36de23 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x36de23(239)]['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x4453a5) {
                        _0x39fddb = !![], _0x2a330d = _0x4453a5;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x31df22 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x31df22(239)][_0x31df22(271)](_0x432c26, function (_0x7f6737) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x2f7a9b = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2f7a9b(239)]['removeMenu'](_0x4b93dc, function (_0x54b3f3) {
                        _0x39fddb = !![], _0x2a330d = _0x54b3f3;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0);
                });
            }), it(_0x2e45b(273), function () {
                _0x2a330d = 0, runs(function () {
                    var _0x31e211 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x31e211(239)][_0x31e211(269)](_0x4b93dc, 'Brackets Test Command Custom 1', _0x31e211(274), '', '', 'first', '', function (_0x2d20c0) {
                        _0x39fddb = !![], _0x2a330d = _0x2d20c0;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x1b0f04 = _0x1bc1;
                    expect(_0x2a330d)[_0x1b0f04(242)](0);
                }), runs(function () {
                    var _0x3a7a39 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -1, brackets[_0x3a7a39(239)][_0x3a7a39(252)](_0x3a7a39(274), function (_0x45c367, _0x54fd7a, _0x14c180) {
                        _0x39fddb = !![], _0x2a330d = _0x45c367, _0x4c496e = _0x54fd7a, _0x55b883 = _0x14c180;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x54bfb8 = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0), expect(_0x4c496e)[_0x54bfb8(242)](_0x4b93dc), expect(_0x55b883)['toBe'](0);
                }), runs(function () {
                    var _0x3b51fd = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x3b51fd(239)][_0x3b51fd(244)](_0x3b51fd(274), function (_0x402281, _0x35a5de) {
                        _0x39fddb = !![], _0x2a330d = _0x402281, _0x3373e5 = _0x35a5de;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x204d10 = _0x1bc1;
                    expect(_0x2a330d)[_0x204d10(242)](0), expect(_0x3373e5)[_0x204d10(242)](_0x204d10(275));
                }), runs(function () {
                    var _0x2dd80c = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2dd80c(239)][_0x2dd80c(271)](_0x2dd80c(274), function (_0x3e0bc9) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(276), function () {
                _0x2a330d = 0, runs(function () {
                    var _0x4d593f = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x4d593f(239)][_0x4d593f(269)](_0x4b93dc, _0x4d593f(277), _0x4d593f(278), '', '', 'last', '', function (_0xb52cd6) {
                        _0x39fddb = !![], _0x2a330d = _0xb52cd6;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x276459 = _0x1bc1;
                    expect(_0x2a330d)[_0x276459(242)](0);
                }), runs(function () {
                    var _0x38cace = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -1, brackets[_0x38cace(239)][_0x38cace(252)](_0x38cace(278), function (_0x49d2a1, _0x528e54, _0x1a71af) {
                        _0x39fddb = !![], _0x2a330d = _0x49d2a1, _0x4c496e = _0x528e54, _0x55b883 = _0x1a71af;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x403c04 = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0), expect(_0x4c496e)[_0x403c04(242)](_0x4b93dc), expect(_0x55b883)['toBe'](1);
                }), runs(function () {
                    var _0x2dd904 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2dd904(239)]['getMenuTitle']('Menu-test.command02', function (_0x107ae4, _0x511fb1) {
                        _0x39fddb = !![], _0x2a330d = _0x107ae4, _0x3373e5 = _0x511fb1;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x52190c = _0x1bc1;
                    expect(_0x2a330d)[_0x52190c(242)](0), expect(_0x3373e5)['toBe'](_0x52190c(277));
                }), runs(function () {
                    var _0x5994c2 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x5994c2(239)]['removeMenuItem']('Menu-test.command02', function (_0x142d66) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(279), function () {
                _0x2a330d = 0, runs(function () {
                    var _0x104c1a = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x104c1a(239)][_0x104c1a(269)](_0x4b93dc, _0x104c1a(280), _0x104c1a(281), '', '', _0x104c1a(266), _0x432c26, function (_0x349c1a) {
                        _0x39fddb = !![], _0x2a330d = _0x349c1a;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x5f274a = _0x1bc1;
                    expect(_0x2a330d)[_0x5f274a(242)](0);
                }), runs(function () {
                    var _0x4a9136 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -1, brackets[_0x4a9136(239)]['getMenuPosition']('Menu-test.command03', function (_0x20fe7d, _0x1c2769, _0x4ab4d) {
                        _0x39fddb = !![], _0x2a330d = _0x20fe7d, _0x4c496e = _0x1c2769, _0x55b883 = _0x4ab4d;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x584362 = _0x1bc1;
                    expect(_0x2a330d)[_0x584362(242)](0), expect(_0x4c496e)[_0x584362(242)](_0x4b93dc), expect(_0x55b883)[_0x584362(242)](1);
                }), runs(function () {
                    var _0x356c8a = _0x1bc1;
                    _0x39fddb = ![], brackets['app'][_0x356c8a(244)](_0x356c8a(281), function (_0x55b74e, _0x25b689) {
                        _0x39fddb = !![], _0x2a330d = _0x55b74e, _0x3373e5 = _0x25b689;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x499c00 = _0x1bc1;
                    expect(_0x2a330d)[_0x499c00(242)](0), expect(_0x3373e5)['toBe']('Brackets Test Command Custom 3');
                }), runs(function () {
                    var _0x140619 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x140619(239)][_0x140619(271)]('Menu-test.command03', function (_0x40688c) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(282), function () {
                _0x2a330d = 0, runs(function () {
                    var _0x1a2754 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x1a2754(239)][_0x1a2754(269)](_0x4b93dc, _0x1a2754(283), _0x1a2754(284), '', '', _0x1a2754(262), _0x432c26, function (_0x2da44c) {
                        _0x39fddb = !![], _0x2a330d = _0x2da44c;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x3ef9b7 = _0x1bc1;
                    expect(_0x2a330d)[_0x3ef9b7(242)](0);
                }), runs(function () {
                    var _0x25c939 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -1, brackets['app'][_0x25c939(252)](_0x25c939(284), function (_0x4fe530, _0x1a98e0, _0x189f35) {
                        _0x39fddb = !![], _0x2a330d = _0x4fe530, _0x4c496e = _0x1a98e0, _0x55b883 = _0x189f35;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x326a3b = _0x1bc1;
                    expect(_0x2a330d)[_0x326a3b(242)](0), expect(_0x4c496e)[_0x326a3b(242)](_0x4b93dc), expect(_0x55b883)[_0x326a3b(242)](0);
                }), runs(function () {
                    var _0x3d6050 = _0x1bc1;
                    _0x39fddb = ![], brackets['app'][_0x3d6050(244)](_0x3d6050(284), function (_0x499132, _0x1c9ddd) {
                        _0x39fddb = !![], _0x2a330d = _0x499132, _0x3373e5 = _0x1c9ddd;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x5e1327 = _0x1bc1;
                    expect(_0x2a330d)[_0x5e1327(242)](0), expect(_0x3373e5)[_0x5e1327(242)]('Brackets Test Command Custom 4');
                }), runs(function () {
                    var _0xd7a25c = _0x1bc1;
                    _0x39fddb = ![], brackets['app']['removeMenuItem'](_0xd7a25c(284), function (_0x2e5560) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(285), function () {
                _0x2a330d = 0, runs(function () {
                    var _0x4f0af2 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x4f0af2(239)]['addMenuItem'](_0x4b93dc, _0x4f0af2(286), _0x4f0af2(287), '', '', _0x4f0af2(262), 'NONEXISTANT', function (_0x2f2eae) {
                        _0x39fddb = !![], _0x2a330d = _0x2f2eae;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x399a1c = _0x1bc1;
                    expect(_0x2a330d)['toBe'](brackets['fs'][_0x399a1c(245)]);
                }), runs(function () {
                    var _0x41009c = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -1, brackets[_0x41009c(239)][_0x41009c(252)](_0x41009c(287), function (_0x9ed6b5, _0x5a15e6, _0x507276) {
                        _0x39fddb = !![], _0x2a330d = _0x9ed6b5, _0x4c496e = _0x5a15e6, _0x55b883 = _0x507276;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x2bafce = _0x1bc1;
                    expect(_0x2a330d)[_0x2bafce(242)](0), expect(_0x4c496e)[_0x2bafce(242)](_0x4b93dc), expect(_0x55b883)[_0x2bafce(242)](1);
                }), runs(function () {
                    var _0x1d1b05 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x1d1b05(239)]['getMenuTitle'](_0x1d1b05(287), function (_0x338c3d, _0x9cb79c) {
                        _0x39fddb = !![], _0x2a330d = _0x338c3d, _0x3373e5 = _0x9cb79c;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x122a6c = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0), expect(_0x3373e5)['toBe'](_0x122a6c(286));
                }), runs(function () {
                    var _0x590fb0 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x590fb0(239)][_0x590fb0(271)](_0x590fb0(287), function (_0x1ebd27) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(288), function () {
                var _0x33c062 = _0x2e45b, _0x574ce0, _0x557c89, _0x5d3fc3, _0x9b1444, _0x1c592f = _0x33c062(289);
                runs(function () {
                    var _0x597451 = _0x33c062;
                    brackets[_0x597451(239)][_0x597451(241)](_0x597451(290), _0x597451(289), '', '', function (_0x20309a) {
                    }), brackets[_0x597451(239)]['addMenuItem'](_0x1c592f, 'Command 10', _0x597451(291), '', '', '', '', function (_0x2b2698) {
                    }), brackets[_0x597451(239)][_0x597451(269)](_0x1c592f, _0x597451(292), 'Menu-test.command11', '', '', '', '', function (_0x2c8ffe) {
                    }), brackets[_0x597451(239)]['addMenuItem'](_0x1c592f, _0x597451(293), String(Date['now']()), '', '', '', '', function (_0x409053) {
                    }), brackets['app']['addMenuItem'](_0x1c592f, _0x597451(294), _0x597451(295), '', '', '', '', function (_0x180d7f) {
                    }), brackets['app'][_0x597451(269)](_0x1c592f, _0x597451(296), _0x597451(297), '', '', '', '', function (_0x3807e9) {
                    });
                }), runs(function () {
                    var _0x2ede79 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets[_0x2ede79(239)][_0x2ede79(269)](_0x1c592f, _0x2ede79(298), _0x2ede79(299), '', '', _0x2ede79(300), _0x2ede79(291), function (_0x348af1) {
                        _0x574ce0 = !![], _0x557c89 = _0x348af1;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x460cf8 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets[_0x460cf8(239)][_0x460cf8(252)](_0x460cf8(299), function (_0x464822, _0x3881d8, _0x3250d8) {
                        _0x574ce0 = !![], _0x557c89 = _0x464822, _0x9b1444 = _0x3881d8, _0x5d3fc3 = _0x3250d8;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x8518ab = _0x33c062;
                    expect(_0x557c89)[_0x8518ab(242)](0), expect(_0x5d3fc3)[_0x8518ab(242)](2);
                }), runs(function () {
                    var _0x328001 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets['app'][_0x328001(269)](_0x1c592f, 'Command 15', _0x328001(301), '', '', _0x328001(300), _0x328001(297), function (_0x27f89b) {
                        _0x574ce0 = !![], _0x557c89 = _0x27f89b;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4a39bb = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets[_0x4a39bb(239)]['getMenuPosition'](_0x4a39bb(301), function (_0x29c04c, _0x489e78, _0x84bcdc) {
                        _0x574ce0 = !![], _0x557c89 = _0x29c04c, _0x9b1444 = _0x489e78, _0x5d3fc3 = _0x84bcdc;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x1c8669 = _0x33c062;
                    expect(_0x557c89)[_0x1c8669(242)](0), expect(_0x5d3fc3)['toBe'](6);
                }), runs(function () {
                    var _0x41e3aa = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets[_0x41e3aa(239)][_0x41e3aa(269)](_0x1c592f, _0x41e3aa(302), _0x41e3aa(303), '', '', _0x41e3aa(304), _0x41e3aa(305), function (_0x4eaaa5) {
                        _0x574ce0 = !![], _0x557c89 = _0x4eaaa5;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x5c1247 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets['app']['getMenuPosition'](_0x5c1247(303), function (_0x169557, _0x570b8c, _0x3c2657) {
                        _0x574ce0 = !![], _0x557c89 = _0x169557, _0x9b1444 = _0x570b8c, _0x5d3fc3 = _0x3c2657;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4c5e1e = _0x33c062;
                    expect(_0x557c89)[_0x4c5e1e(242)](0), expect(_0x5d3fc3)[_0x4c5e1e(242)](0);
                }), runs(function () {
                    var _0x563197 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets['app']['addMenuItem'](_0x1c592f, _0x563197(306), _0x563197(307), '', '', _0x563197(304), 'Menu-test.command12', function (_0x1e0749) {
                        _0x574ce0 = !![], _0x557c89 = _0x1e0749;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x33fd3b = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0, brackets[_0x33fd3b(239)][_0x33fd3b(252)]('Menu-test.command17', function (_0x134da0, _0x580d55, _0x330bfe) {
                        _0x574ce0 = !![], _0x557c89 = _0x134da0, _0x9b1444 = _0x580d55, _0x5d3fc3 = _0x330bfe;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4a5b95 = _0x33c062;
                    expect(_0x557c89)[_0x4a5b95(242)](0), expect(_0x5d3fc3)[_0x4a5b95(242)](5);
                }), runs(function () {
                    var _0x2c576c = _0x33c062;
                    brackets[_0x2c576c(239)][_0x2c576c(271)](_0x2c576c(291), function (_0x4d9eba) {
                    }), brackets[_0x2c576c(239)][_0x2c576c(271)](_0x2c576c(305), function (_0x3593f9) {
                    }), brackets[_0x2c576c(239)]['removeMenuItem'](_0x2c576c(295), function (_0x35d7a0) {
                    }), brackets[_0x2c576c(239)]['removeMenuItem']('Menu-test.command13', function (_0x4076aa) {
                    }), brackets['app'][_0x2c576c(271)](_0x2c576c(299), function (_0x47e21b) {
                    }), brackets[_0x2c576c(239)]['removeMenuItem'](_0x2c576c(301), function (_0x1aa562) {
                    }), brackets[_0x2c576c(239)][_0x2c576c(271)](_0x2c576c(303), function (_0x3eef89) {
                    }), brackets[_0x2c576c(239)]['removeMenuItem'](_0x2c576c(307), function (_0x536707) {
                    }), brackets['app'][_0x2c576c(246)](_0x1c592f, function (_0x2bd42e) {
                    });
                });
            });
        }), describe(_0xfb2d85(246), function () {
            var _0xacd1f1 = _0xfb2d85, _0x38068e = ![], _0x164991 = 0;
            it(_0xacd1f1(308), function () {
                runs(function () {
                    var _0x5e8df0 = _0x1bc1;
                    brackets[_0x5e8df0(239)]['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x56af7c) {
                        _0x38068e = !![], _0x164991 = _0x56af7c;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x4408cf = _0x1bc1;
                    expect(_0x164991)[_0x4408cf(242)](0);
                }), runs(function () {
                    var _0x5d5927 = _0x1bc1;
                    _0x38068e = ![], brackets['app'][_0x5d5927(246)](_0x4b93dc, function (_0xf526e) {
                        _0x38068e = !![], _0x164991 = _0xf526e;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x527fe1 = _0x1bc1;
                    expect(_0x164991)[_0x527fe1(242)](0);
                });
            }), it(_0xacd1f1(247), function () {
                _0x38068e = ![], _0x164991 = 0, runs(function () {
                    var _0x58c871 = _0x1bc1;
                    brackets[_0x58c871(239)]['removeMenu'](42, function (_0x276ca5) {
                        _0x38068e = !![], _0x164991 = _0x276ca5;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x244b50 = _0x1bc1;
                    expect(_0x164991)[_0x244b50(242)](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it(_0xacd1f1(309), function () {
                _0x38068e = ![], _0x164991 = 0, runs(function () {
                    var _0x38c192 = _0x1bc1;
                    brackets[_0x38c192(239)][_0x38c192(246)](_0x4b93dc, function (_0x563b70) {
                        _0x38068e = !![], _0x164991 = _0x563b70;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x5c4bae = _0x1bc1;
                    expect(_0x164991)[_0x5c4bae(242)](brackets['fs'][_0x5c4bae(245)]);
                });
            });
        }), describe('removeMenuItem', function () {
            var _0x3f07a6 = _0xfb2d85, _0x282a79 = _0x432c26 + '1';
            beforeEach(function () {
                var _0x5f2331 = ![], _0xdfaecc = 0;
                runs(function () {
                    brackets['app']['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x5c04c5) {
                        var _0x3081d8 = _0x1bc1;
                        _0x5c04c5 ? (_0x5f2331 = !![], _0xdfaecc = _0x5c04c5) : brackets[_0x3081d8(239)]['addMenuItem'](_0x4b93dc, _0x116602, _0x282a79, '', '', '', '', function (_0xe39ff7) {
                            _0x5f2331 = !![], _0xdfaecc = _0xe39ff7;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5f2331;
                }), runs(function () {
                    var _0x612b3 = _0x1bc1;
                    expect(_0xdfaecc)[_0x612b3(242)](0);
                });
            }), afterEach(function () {
                var _0x127fe3 = ![], _0x3cd2aa = 0;
                runs(function () {
                    var _0x122b03 = _0x1bc1;
                    brackets[_0x122b03(239)][_0x122b03(271)](_0x282a79, function (_0x19ed20) {
                        var _0x114746 = _0x122b03;
                        brackets[_0x114746(239)][_0x114746(246)](_0x4b93dc, function (_0x4710f1) {
                            _0x127fe3 = !![], _0x3cd2aa = _0x4710f1;
                        });
                    });
                }), waitsFor(function () {
                    return _0x127fe3;
                }), runs(function () {
                    var _0x24f93d = _0x1bc1;
                    expect(_0x3cd2aa)[_0x24f93d(242)](0);
                });
            }), it(_0x3f07a6(310), function () {
                var _0x54e677 = _0x3f07a6, _0x3f697b = ![], _0x2b1399 = 0;
                runs(function () {
                    var _0x54d53a = _0x1bc1;
                    brackets[_0x54d53a(239)][_0x54d53a(271)](_0x282a79, function (_0xa9b551) {
                        _0x3f697b = !![], _0x2b1399 = _0xa9b551;
                    });
                }), waitsFor(function () {
                    return _0x3f697b;
                }, 'calling removeMenuItem'), runs(function () {
                    var _0x17c6bc = _0x1bc1;
                    expect(_0x2b1399)[_0x17c6bc(242)](0);
                }), runs(function () {
                    var _0x1657ec = _0x1bc1;
                    _0x3f697b = ![], brackets[_0x1657ec(239)][_0x1657ec(244)](_0x282a79, function (_0x14e193, _0x5962db) {
                        _0x3f697b = !![], _0x2b1399 = _0x14e193;
                    });
                }), waitsFor(function () {
                    return _0x3f697b;
                }, _0x54e677(311)), runs(function () {
                    var _0x125272 = _0x54e677;
                    expect(_0x2b1399)[_0x125272(242)](brackets['fs'][_0x125272(245)]);
                });
            }), it('should return an error if invalid parameters are passed', function () {
                var _0x3ba697 = _0x3f07a6, _0x1d0827 = ![], _0x579292 = 0;
                runs(function () {
                    var _0x4e180e = _0x1bc1;
                    brackets['app'][_0x4e180e(271)](42, function (_0x4a97e1) {
                        _0x1d0827 = !![], _0x579292 = _0x4a97e1;
                    });
                }), waitsFor(function () {
                    return _0x1d0827;
                }, _0x3ba697(312)), runs(function () {
                    expect(_0x579292)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it(_0x3f07a6(313), function () {
                var _0x38e425 = _0x3f07a6, _0x370778 = ![], _0xe64b0f = 0;
                runs(function () {
                    var _0x769ada = _0x1bc1;
                    brackets[_0x769ada(239)]['removeMenuItem'](_0x282a79 + _0x769ada(314), function (_0x574f73) {
                        _0x370778 = !![], _0xe64b0f = _0x574f73;
                    });
                }), waitsFor(function () {
                    return _0x370778;
                }, _0x38e425(312)), runs(function () {
                    var _0x2d9eda = _0x38e425;
                    expect(_0xe64b0f)[_0x2d9eda(242)](brackets['fs'][_0x2d9eda(245)]);
                });
            });
        }), describe('getMenuItemState setMenuItemState', function () {
            var _0x3e4920 = _0xfb2d85, _0x5112f2 = _0x432c26 + '2';
            beforeEach(function () {
                var _0x497708 = ![], _0x29dbfc = 0;
                runs(function () {
                    var _0x46f25a = _0x1bc1;
                    brackets[_0x46f25a(239)][_0x46f25a(241)](_0x141488, _0x4b93dc, '', '', function (_0x334244) {
                        var _0x12fccc = _0x46f25a;
                        _0x334244 ? (_0x497708 = !![], _0x29dbfc = _0x334244) : brackets[_0x12fccc(239)]['addMenuItem'](_0x4b93dc, _0x116602, _0x5112f2, '', '', '', '', function (_0x1f2b37) {
                            _0x497708 = !![], _0x29dbfc = _0x1f2b37;
                        });
                    });
                }), waitsFor(function () {
                    return _0x497708;
                }), runs(function () {
                    expect(_0x29dbfc)['toBe'](0);
                });
            }), afterEach(function () {
                var _0x63c780 = ![], _0x1caf10 = 0;
                runs(function () {
                    var _0x118ada = _0x1bc1;
                    brackets[_0x118ada(239)][_0x118ada(271)](_0x5112f2, function (_0x9f7c1c) {
                        var _0x89da94 = _0x118ada;
                        brackets[_0x89da94(239)][_0x89da94(246)](_0x4b93dc, function (_0x525c89) {
                            _0x63c780 = !![], _0x1caf10 = _0x525c89;
                        });
                    });
                }), waitsFor(function () {
                    return _0x63c780;
                }), runs(function () {
                    var _0x3add00 = _0x1bc1;
                    expect(_0x1caf10)[_0x3add00(242)](0);
                });
            }), it('should be able to set enabled state', function () {
                var _0x579902 = ![], _0x462410 = ![], _0xbfc0e0 = 0;
                runs(function () {
                    var _0x5898dd = _0x1bc1;
                    brackets[_0x5898dd(239)]['getMenuItemState'](_0x5112f2, function (_0x1d1054, _0x48ebd5, _0x4aee00) {
                        _0x579902 = !![], _0x462410 = _0x48ebd5, _0xbfc0e0 = _0x1d1054;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x4ad18a = _0x1bc1;
                    expect(_0xbfc0e0)[_0x4ad18a(242)](0);
                }), runs(function () {
                    var _0x32cf77 = _0x1bc1;
                    _0x579902 = ![], brackets[_0x32cf77(239)]['setMenuItemState'](_0x5112f2, ![], ![], function (_0x23efdc) {
                        _0x579902 = !![], _0xbfc0e0 = _0x23efdc;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x13a53f = _0x1bc1;
                    expect(_0xbfc0e0)[_0x13a53f(242)](0);
                }), runs(function () {
                    var _0x4f59b3 = _0x1bc1;
                    _0x579902 = ![], brackets['app'][_0x4f59b3(315)](_0x5112f2, function (_0x106f08, _0x43e978, _0x523e91) {
                        _0x579902 = !![], _0x462410 = _0x43e978, _0xbfc0e0 = _0x106f08;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x5a7da6 = _0x1bc1;
                    expect(_0xbfc0e0)[_0x5a7da6(242)](0), expect(_0x462410)[_0x5a7da6(242)](![]);
                });
            }), it(_0x3e4920(316), function () {
                var _0xaedef9 = ![], _0x318472 = ![], _0x2aa376 = 0;
                runs(function () {
                    var _0x5320ee = _0x1bc1;
                    brackets[_0x5320ee(239)][_0x5320ee(315)](_0x5112f2, function (_0x5780e3, _0x11e262, _0x992f57) {
                        _0xaedef9 = !![], _0x318472 = _0x992f57, _0x2aa376 = _0x5780e3;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x190740 = _0x1bc1;
                    expect(_0x2aa376)[_0x190740(242)](0), expect(_0x318472)[_0x190740(242)](![]);
                }), runs(function () {
                    var _0x15e202 = _0x1bc1;
                    _0xaedef9 = ![], brackets['app'][_0x15e202(317)](_0x5112f2, !![], !![], function (_0x35ea7d) {
                        _0xaedef9 = !![], _0x2aa376 = _0x35ea7d;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x5813f4 = _0x1bc1;
                    expect(_0x2aa376)[_0x5813f4(242)](0);
                }), runs(function () {
                    var _0x23419a = _0x1bc1;
                    _0xaedef9 = ![], brackets['app'][_0x23419a(315)](_0x5112f2, function (_0xb943d6, _0x583f9a, _0x27f412) {
                        _0xaedef9 = !![], _0x318472 = _0x27f412, _0x2aa376 = _0xb943d6;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x413b2d = _0x1bc1;
                    expect(_0x2aa376)[_0x413b2d(242)](0);
                });
            }), it(_0x3e4920(247), function () {
                var _0x216527 = ![], _0x246d09 = 0;
                runs(function () {
                    var _0x439dea = _0x1bc1;
                    brackets[_0x439dea(239)][_0x439dea(317)](_0x5112f2, _0x439dea(318), _0x439dea(319), function (_0x54f844) {
                        _0x216527 = !![], _0x246d09 = _0x54f844;
                    });
                }), waitsFor(function () {
                    return _0x216527;
                }), runs(function () {
                    var _0x42cba8 = _0x1bc1;
                    expect(_0x246d09)[_0x42cba8(242)](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('getMenuTitle setMenuTitle', function () {
            var _0x279c81 = _0xfb2d85;
            beforeEach(function () {
                var _0x5563c9 = ![], _0xf555aa = 0;
                runs(function () {
                    var _0x29f8de = _0x1bc1;
                    brackets[_0x29f8de(239)][_0x29f8de(241)](_0x141488, _0x4b93dc, '', '', function (_0x228008) {
                        var _0x54c23d = _0x29f8de;
                        _0x228008 ? (_0x5563c9 = !![], _0xf555aa = _0x228008) : brackets['app'][_0x54c23d(269)](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x51c8bf) {
                            _0x5563c9 = !![], _0xf555aa = _0x51c8bf;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5563c9;
                }), runs(function () {
                    var _0x4e0b28 = _0x1bc1;
                    expect(_0xf555aa)[_0x4e0b28(242)](0);
                });
            }), afterEach(function () {
                var _0x55bc5b = ![], _0x4bbf98 = 0;
                runs(function () {
                    var _0x510643 = _0x1bc1;
                    brackets[_0x510643(239)][_0x510643(271)](_0x432c26, function (_0x570977) {
                        var _0x4a3674 = _0x510643;
                        _0x570977 ? (_0x55bc5b = !![], _0x4bbf98 = _0x570977) : brackets[_0x4a3674(239)]['removeMenu'](_0x4b93dc, function (_0x5ce93d) {
                            _0x55bc5b = !![], _0x4bbf98 = _0x5ce93d;
                        });
                    });
                }), waitsFor(function () {
                    return _0x55bc5b;
                }), runs(function () {
                    var _0x286b73 = _0x1bc1;
                    expect(_0x4bbf98)[_0x286b73(242)](0);
                });
            }), it(_0x279c81(320), function () {
                var _0x595953 = _0x279c81, _0x43e3c2 = _0x595953(321), _0x16bbbe = ![], _0x1af054 = 0, _0x58dff0;
                runs(function () {
                    var _0x4bb52a = _0x595953;
                    brackets[_0x4bb52a(239)][_0x4bb52a(244)](_0x4b93dc, function (_0x3455a2, _0x7b2962) {
                        _0x16bbbe = !![], _0x58dff0 = _0x7b2962, _0x1af054 = _0x3455a2;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0x2b0279 = _0x595953;
                    expect(_0x1af054)[_0x2b0279(242)](0), expect(_0x58dff0)[_0x2b0279(242)](_0x141488);
                }), runs(function () {
                    var _0x209353 = _0x595953;
                    _0x16bbbe = ![], brackets[_0x209353(239)][_0x209353(322)](_0x4b93dc, _0x43e3c2, function (_0x2a52fc) {
                        _0x16bbbe = !![], _0x1af054 = _0x2a52fc;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0xe44b52 = _0x595953;
                    expect(_0x1af054)[_0xe44b52(242)](0);
                }), runs(function () {
                    var _0x46b842 = _0x595953;
                    _0x16bbbe = ![], brackets[_0x46b842(239)][_0x46b842(244)](_0x4b93dc, function (_0x1aec8c, _0x438c35) {
                        _0x16bbbe = !![], _0x58dff0 = _0x438c35, _0x1af054 = _0x1aec8c;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0x42adea = _0x595953;
                    expect(_0x1af054)[_0x42adea(242)](0), expect(_0x58dff0)[_0x42adea(242)](_0x43e3c2);
                });
            }), it('should be able to set menu item title', function () {
                var _0x4157c9 = _0x279c81, _0x14d2ad = _0x4157c9(323), _0x48d1a5 = ![], _0x2552bd = 0, _0x45f363;
                runs(function () {
                    var _0x20ffc1 = _0x4157c9;
                    brackets[_0x20ffc1(239)][_0x20ffc1(244)](_0x432c26, function (_0x4aa5cd, _0x1d8c62) {
                        _0x48d1a5 = !![], _0x45f363 = _0x1d8c62, _0x2552bd = _0x4aa5cd;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0xebbf6d = _0x4157c9;
                    expect(_0x2552bd)[_0xebbf6d(242)](0), expect(_0x45f363)[_0xebbf6d(242)](_0x116602);
                }), runs(function () {
                    var _0x2dbab5 = _0x4157c9;
                    _0x48d1a5 = ![], brackets[_0x2dbab5(239)][_0x2dbab5(322)](_0x432c26, _0x14d2ad, function (_0x1f28a3) {
                        _0x48d1a5 = !![], _0x2552bd = _0x1f28a3;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0x18ad36 = _0x4157c9;
                    expect(_0x2552bd)[_0x18ad36(242)](0);
                }), runs(function () {
                    var _0x328acd = _0x4157c9;
                    _0x48d1a5 = ![], brackets[_0x328acd(239)][_0x328acd(244)](_0x432c26, function (_0x47231d, _0xe80eea) {
                        _0x48d1a5 = !![], _0x45f363 = _0xe80eea, _0x2552bd = _0x47231d;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0x3f786c = _0x4157c9;
                    expect(_0x2552bd)[_0x3f786c(242)](0), expect(_0x45f363)[_0x3f786c(242)](_0x14d2ad);
                });
            }), it(_0x279c81(247), function () {
                var _0x5e05ea = ![], _0x5f2add = 0;
                runs(function () {
                    var _0x30e15e = _0x1bc1;
                    brackets[_0x30e15e(239)][_0x30e15e(322)](_0x432c26, 42, function (_0x3f1c79) {
                        _0x5e05ea = !![], _0x5f2add = _0x3f1c79;
                    });
                }), waitsFor(function () {
                    return _0x5e05ea;
                }), runs(function () {
                    expect(_0x5f2add)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), it(_0xfb2d85(324), function () {
            var _0x1adbe1 = ![], _0x3bff22 = 0;
            runs(function () {
                var _0x478dad = _0x1bc1;
                brackets[_0x478dad(239)][_0x478dad(246)](_0x835543, function (_0x5c120d) {
                    _0x1adbe1 = !![], _0x3bff22 = _0x5c120d;
                });
            }), waitsFor(function () {
                return _0x1adbe1;
            }), expect(_0x3bff22)['toBe'](0);
        });
    });
});