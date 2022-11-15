define(function (_0x207748, _0x425350, _0x374d2e) {
    'use strict';
    _0x207748('utils/Global');
    if (brackets['inBrowser'])
        return;
    describe('Native\x20Menus', function () {
        var _0x64773c = 'placeholder', _0xfc082e = 'MENU', _0x2ce85d = 'TEST', _0x4941b3 = 'test', _0x515b50 = 'Item\x201', _0x4aee91 = 'item1';
        it('should\x20have\x20a\x20brackets.app\x20namespace', function () {
            var _0x400fe1 = ![], _0x3a6673 = -0xea7 + -0x2d4 * -0x1 + 0x3 * 0x3f1;
            expect(brackets['app'])['toBeTruthy'](), runs(function () {
                brackets['app']['addMenu'](_0xfc082e, _0x64773c, '', '', function (_0x1e5412) {
                    _0x400fe1 = !![], _0x3a6673 = _0x1e5412;
                });
            }), waitsFor(function () {
                return _0x400fe1;
            }), expect(_0x3a6673)['toBe'](-0x1a18 * 0x1 + -0x3f3 + 0x1e0b);
        }), describe('addMenu', function () {
            it('should\x20add\x20a\x20menu', function () {
                var _0x45aaa9 = ![], _0x7b7c6c = 0x943 + -0x1d3 * -0x5 + 0x16a * -0xd, _0x22c4e0;
                runs(function () {
                    brackets['app']['getMenuTitle'](_0x4941b3, function (_0x4e048f) {
                        _0x45aaa9 = !![], _0x7b7c6c = _0x4e048f;
                    });
                }), waitsFor(function () {
                    return _0x45aaa9;
                }), runs(function () {
                    expect(_0x7b7c6c)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    _0x45aaa9 = ![], brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x592296) {
                        _0x45aaa9 = !![], _0x7b7c6c = _0x592296;
                    });
                }), waitsFor(function () {
                    return _0x45aaa9;
                }), runs(function () {
                    expect(_0x7b7c6c)['toBe'](0x165a + -0x2 * 0x143 + -0x13d4);
                }), runs(function () {
                    _0x45aaa9 = ![], brackets['app']['getMenuTitle'](_0x4941b3, function (_0x5f037e, _0x4fc16c) {
                        _0x45aaa9 = !![], _0x7b7c6c = _0x5f037e, _0x22c4e0 = _0x4fc16c;
                    });
                }), waitsFor(function () {
                    return _0x45aaa9;
                }), runs(function () {
                    expect(_0x7b7c6c)['toBe'](0x43 * 0x23 + 0xe36 * -0x2 + -0x1343 * -0x1), expect(_0x22c4e0)['toBe'](_0x2ce85d);
                }), runs(function () {
                    _0x45aaa9 = ![], brackets['app']['removeMenu'](_0x4941b3, function (_0x4859b5) {
                        _0x45aaa9 = !![];
                    });
                }), waitsFor(function () {
                    return _0x45aaa9;
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0x14356a = ![], _0x4aa19f = -0x659 + -0x19 * 0x167 + -0x32 * -0xd4;
                runs(function () {
                    brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, -0xa74 * 0x3 + -0xc9 * -0x14 + 0xfd2, '', function (_0x3d4f2c) {
                        _0x14356a = !![], _0x4aa19f = _0x3d4f2c;
                    });
                }), waitsFor(function () {
                    return _0x14356a;
                }), runs(function () {
                    expect(_0x4aa19f)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('addMenu\x20(with\x20reference)', function () {
            var _0x270af0 = ![], _0x35db41 = 0x21b + -0x9c8 + 0x5 * 0x189, _0x40a451, _0x3f48b0 = -(0x27c + -0x7d * -0x27 + -0x227 * 0xa);
            beforeEach(function () {
                runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x2bc418) {
                        _0x270af0 = !![], _0x35db41 = _0x2bc418;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x1f8c + -0x279 * -0x3 + -0xd5 * -0x1d);
                });
            }), afterEach(function () {
                runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu'](_0x4941b3, function (_0x2c12eb) {
                        _0x270af0 = !![], _0x35db41 = _0x2c12eb;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x11c * 0x1a + -0x155b + -0x77d);
                });
            }), it('should\x20add\x20new\x20menu\x20in\x20last\x20position\x20of\x20list', function () {
                _0x35db41 = -0xb * 0x3b + -0x237c + 0x2605, runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('Custom1', 'menu-unittest1', '', '', function (_0x586bcf) {
                        _0x270af0 = !![], _0x35db41 = _0x586bcf;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x77 * -0x39 + 0x960 + 0x5b5 * 0x3);
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(0xa25 + -0x1c89 + 0x1265), brackets['app']['getMenuPosition']('menu-unittest1', function (_0x200513, _0x399b69, _0x17e0a6) {
                        _0x270af0 = !![], _0x35db41 = _0x200513, _0x40a451 = _0x399b69, _0x3f48b0 = _0x17e0a6;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x17 * 0x65 + -0x12a0 + 0x1bb3), expect(_0x40a451)['toBe'](''), expect(_0x3f48b0)['toBeGreaterThan'](0x7 * -0x89 + -0xbde + -0xf9d * -0x1);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest1', function (_0x5d3f71) {
                        _0x270af0 = !![], _0x35db41 = _0x5d3f71;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x239d + -0xa6 * 0x3b + -0x49df * -0x1);
                });
            }), it('should\x20add\x20new\x20menu\x20after\x20reference\x20menu', function () {
                var _0x2403b3 = -(-0x1 * -0x1235 + 0x1ca4 + -0x2 * 0x176c);
                _0x35db41 = 0x1e68 + -0x1ec3 + -0xd * -0x7, runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('CustomFirst', 'menu-unittest-first', 'first', '', function (_0x30f7e9) {
                        _0x270af0 = !![], _0x35db41 = _0x30f7e9;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x15d5 + 0x259 * -0x5 + 0x10c9 * 0x2);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('CustomAfter', 'menu-unittest-after', 'after', 'menu-unittest-first', function (_0x8d6659) {
                        _0x270af0 = !![], _0x35db41 = _0x8d6659;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x435 * 0x1 + 0x16a * 0x19 + -0x278f);
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(0x13 * 0xd3 + -0x10fe + 0x3 * 0x72), _0x2403b3 = -(-0xf17 * -0x2 + 0x49 * 0x1 + -0x1e76), brackets['app']['getMenuPosition']('menu-unittest-first', function (_0xb607b0, _0x2e0c99, _0x55c58f) {
                        _0x270af0 = !![], _0x35db41 = _0xb607b0, _0x40a451 = _0x2e0c99, _0x3f48b0 = _0x55c58f, _0x2403b3 = _0x3f48b0 + (0x26 + -0x1 * -0x12e3 + 0x2a * -0x74);
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x1 * 0x13a5 + 0x1d85 + -0x9e0), expect(_0x40a451)['toBe']('');
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(-0x43 * -0x5c + -0x89 + 0xbc5 * -0x2), brackets['app']['getMenuPosition']('menu-unittest-after', function (_0x3235cc, _0x196692, _0xd0c506) {
                        _0x270af0 = !![], _0x35db41 = _0x3235cc, _0x40a451 = _0x196692, _0x3f48b0 = _0xd0c506;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x15d8 + -0x319 * 0x5 + -0x1 * 0x65b), expect(_0x40a451)['toBe'](''), expect(_0x3f48b0)['toBe'](_0x2403b3);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest-first', function (_0x1f6ea9) {
                        _0x270af0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest-after', function (_0x2fb851) {
                        _0x270af0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                });
            }), it('should\x20add\x20new\x20menu\x20before\x20reference\x20menu', function () {
                var _0x3fe8c8 = -(0x1e * 0x128 + 0x256a * -0x1 + -0x1 * -0x2bb);
                _0x35db41 = -0x224 * -0x8 + -0xc3f + 0x1 * -0x4e1, runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('CustomLast', 'menu-unittest-last', 'last', '', function (_0x53b16b) {
                        _0x270af0 = !![], _0x35db41 = _0x53b16b;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x1fcd + -0x792 + -0x183b);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('CustomBefore', 'menu-unittest-before', 'before', 'menu-unittest-last', function (_0x360a1e) {
                        _0x270af0 = !![], _0x35db41 = _0x360a1e;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x20d2 + 0xf82 + -0x4 * -0x454);
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(-0x681 * 0x6 + -0x7 * 0x45b + -0x1 * -0x4584), _0x3fe8c8 = -(-0x1 * 0x1025 + 0x20d9 + 0x13 * -0xe1), brackets['app']['getMenuPosition']('menu-unittest-last', function (_0x285f76, _0x48d28e, _0x20ff31) {
                        _0x270af0 = !![], _0x35db41 = _0x285f76, _0x40a451 = _0x48d28e, _0x3f48b0 = _0x20ff31, _0x3fe8c8 = _0x3f48b0 - (0x1 * -0xc5e + 0x1b85 + 0x115 * -0xe);
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x5c + 0x1 * -0xbf + 0x11b), expect(_0x40a451)['toBe']('');
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(-0x5a8 * 0x2 + 0x1 * 0x1f65 + -0x1414), brackets['app']['getMenuPosition']('menu-unittest-before', function (_0x129c12, _0x1c4168, _0xfb97bd) {
                        _0x270af0 = !![], _0x35db41 = _0x129c12, _0x40a451 = _0x1c4168, _0x3f48b0 = _0xfb97bd;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](0x26 * 0x5f + -0x1f4f * 0x1 + 0x371 * 0x5), expect(_0x40a451)['toBe'](''), expect(_0x3f48b0)['toBe'](_0x3fe8c8);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest-last', function (_0x1c1a1a) {
                        _0x270af0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest-before', function (_0x59ff80) {
                        _0x270af0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                });
            }), it('should\x20add\x20new\x20menu\x20at\x20end\x20of\x20list\x20when\x20reference\x20menu\x20doesn\x27t\x20exist', function () {
                _0x35db41 = 0x34 * 0x8b + 0x6 * 0x4bb + -0x389e, runs(function () {
                    _0x270af0 = ![], brackets['app']['addMenu']('Custom4', 'menu-unittest4', 'after', 'NONEXISTANT', function (_0x5de4f2) {
                        _0x270af0 = !![], _0x35db41 = _0x5de4f2;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    _0x270af0 = ![], _0x40a451 = null, _0x3f48b0 = -(0x7b2 + -0x1b0f * 0x1 + 0x135e), brackets['app']['getMenuPosition']('menu-unittest4', function (_0x41d366, _0x26c6c9, _0x22257e) {
                        _0x270af0 = !![], _0x35db41 = _0x41d366, _0x40a451 = _0x26c6c9, _0x3f48b0 = _0x22257e;
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                }), runs(function () {
                    expect(_0x35db41)['toBe'](-0x7c5 + 0x197a * 0x1 + -0x3 * 0x5e7), expect(_0x40a451)['toBe'](''), expect(_0x3f48b0)['toBeGreaterThan'](-0x1b59 * -0x1 + 0x1603 + -0xa2 * 0x4e);
                }), runs(function () {
                    _0x270af0 = ![], brackets['app']['removeMenu']('menu-unittest4', function (_0x897c7d) {
                        _0x270af0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x270af0;
                });
            });
        }), describe('addMenuItem', function () {
            var _0x5a42ea = ![], _0x1dd485 = -0x1e85 + 0x1 * 0x2621 + -0x79c, _0x2d416d;
            beforeEach(function () {
                runs(function () {
                    _0x5a42ea = ![], brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x49cc60) {
                        _0x5a42ea = !![], _0x1dd485 = _0x49cc60;
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                }), runs(function () {
                    expect(_0x1dd485)['toBe'](-0x1 * 0x1795 + -0x1982 + 0x3117);
                });
            }), afterEach(function () {
                runs(function () {
                    _0x5a42ea = ![], brackets['app']['removeMenu'](_0x4941b3, function (_0x4e3ca6) {
                        _0x5a42ea = !![], _0x1dd485 = _0x4e3ca6;
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                }), runs(function () {
                    expect(_0x1dd485)['toBe'](0x241 + -0x1 * 0x165 + 0x1 * -0xdc);
                });
            }), it('should\x20add\x20a\x20menu\x20item', function () {
                _0x1dd485 = 0x1c95 + -0xaf5 + -0x11a0, runs(function () {
                    _0x5a42ea = ![], brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x4aee91, '', '', '', '', function (_0x3db77a) {
                        _0x5a42ea = !![], _0x1dd485 = _0x3db77a;
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                }), runs(function () {
                    expect(_0x1dd485)['toBe'](0x232f + -0x51e + 0xb3 * -0x2b);
                }), runs(function () {
                    _0x5a42ea = ![], brackets['app']['getMenuTitle'](_0x4aee91, function (_0x2396a1, _0x2f51b6) {
                        _0x5a42ea = !![], _0x1dd485 = _0x2396a1, _0x2d416d = _0x2f51b6;
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                }), runs(function () {
                    expect(_0x1dd485)['toBe'](0x13c * 0x16 + 0xbd5 + -0xcff * 0x3), expect(_0x2d416d)['toBe'](_0x515b50), _0x5a42ea = ![], brackets['app']['removeMenuItem'](_0x4aee91, function (_0x2659a4) {
                        _0x5a42ea = !![];
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                runs(function () {
                    _0x1dd485 = 0x5 * -0x373 + -0x166d + 0x27ac, _0x5a42ea = ![], brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x4aee91, '', -0xde * 0x11 + -0x21a1 + 0x3089, '', '', function (_0x167e26) {
                        _0x5a42ea = !![], _0x1dd485 = _0x167e26;
                    });
                }), waitsFor(function () {
                    return _0x5a42ea;
                }), runs(function () {
                    expect(_0x1dd485)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('addMenuItem\x20(with\x20reference)', function () {
            var _0x4d6bf0 = ![], _0x24fde5 = -0x56c + 0x1cd7 + -0x221 * 0xb, _0xdc57e0, _0x3eaab7 = null, _0xd7f8e1 = -(-0x6 * -0x604 + 0x263 * -0x3 + 0x7 * -0x422);
            beforeEach(function () {
                runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x5e65b7) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x5e65b7;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x3 * -0x43f + 0x11d8 + -0x51b);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x4aee91, '', '', '', '', function (_0x25360d) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x25360d;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x551 + 0x495 + -0x9e6);
                });
            }), afterEach(function () {
                runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem'](_0x4aee91, function (_0x53e204) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenu'](_0x4941b3, function (_0x15d6ee) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x15d6ee;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x37 * -0x8b + 0x7ff + -0x25dc * 0x1);
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20in\x20first\x20position\x20of\x20menu', function () {
                _0x24fde5 = -0x6ea + 0x951 + -0x267, runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, 'Brackets\x20Test\x20Command\x20Custom\x201', 'Menu-test.command01', '', '', 'first', '', function (_0x49a25f) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x49a25f;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x1f7e + 0x413 * 0x7 + 0x1 * 0x2f9);
                }), runs(function () {
                    _0x4d6bf0 = ![], _0x3eaab7 = null, _0xd7f8e1 = -(0x2564 + -0x28d * 0x7 + 0x3e8 * -0x5), brackets['app']['getMenuPosition']('Menu-test.command01', function (_0x438f77, _0x154c26, _0x15e31f) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x438f77, _0x3eaab7 = _0x154c26, _0xd7f8e1 = _0x15e31f;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x5 * -0x535 + -0x8 * -0x2e7 + 0x67 * 0x7), expect(_0x3eaab7)['toBe'](_0x4941b3), expect(_0xd7f8e1)['toBe'](-0x1a6 + 0x1 * 0x745 + -0x59f);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['getMenuTitle']('Menu-test.command01', function (_0x52e8f0, _0x12ef82) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x52e8f0, _0xdc57e0 = _0x12ef82;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x1697 + 0x1a06 + 0x125 * -0x3), expect(_0xdc57e0)['toBe']('Brackets\x20Test\x20Command\x20Custom\x201');
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem']('Menu-test.command01', function (_0x2eb4c7) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20in\x20last\x20position\x20of\x20menu', function () {
                _0x24fde5 = 0x15c * 0x1b + -0x20b * -0xe + -0x283 * 0x1a, runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, 'Brackets\x20Test\x20Command\x20Custom\x202', 'Menu-test.command02', '', '', 'last', '', function (_0x587179) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x587179;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0xede + 0x119 * 0x17 + -0x281d);
                }), runs(function () {
                    _0x4d6bf0 = ![], _0x3eaab7 = null, _0xd7f8e1 = -(-0x18de + -0x2282 + 0x699 * 0x9), brackets['app']['getMenuPosition']('Menu-test.command02', function (_0x4c2204, _0x40adf7, _0x208ceb) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x4c2204, _0x3eaab7 = _0x40adf7, _0xd7f8e1 = _0x208ceb;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x1012 * -0x2 + 0x1c82 + 0x3ca6 * -0x1), expect(_0x3eaab7)['toBe'](_0x4941b3), expect(_0xd7f8e1)['toBe'](0x1a4b + -0x13f8 + 0x652 * -0x1);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['getMenuTitle']('Menu-test.command02', function (_0x4913c6, _0x662b1a) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x4913c6, _0xdc57e0 = _0x662b1a;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x191f + -0x1e9e * -0x1 + -0x37bd), expect(_0xdc57e0)['toBe']('Brackets\x20Test\x20Command\x20Custom\x202');
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem']('Menu-test.command02', function (_0x341b41) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20after\x20the\x20referenced\x20menu\x20item', function () {
                _0x24fde5 = -0x2677 * -0x1 + -0x187b + -0xdfc, runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, 'Brackets\x20Test\x20Command\x20Custom\x203', 'Menu-test.command03', '', '', 'after', _0x4aee91, function (_0xb59c19) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0xb59c19;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0xf * -0x90 + -0x1452 + 0xbe2);
                }), runs(function () {
                    _0x4d6bf0 = ![], _0x3eaab7 = null, _0xd7f8e1 = -(-0x2555 + -0x1881 + 0x3dd7), brackets['app']['getMenuPosition']('Menu-test.command03', function (_0x50276f, _0x57daf5, _0x57ba83) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x50276f, _0x3eaab7 = _0x57daf5, _0xd7f8e1 = _0x57ba83;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x5 * -0x163 + -0x1 * 0xa0 + -0x64f), expect(_0x3eaab7)['toBe'](_0x4941b3), expect(_0xd7f8e1)['toBe'](-0x1 * 0x201d + -0x2 * -0x27a + 0x1 * 0x1b2a);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['getMenuTitle']('Menu-test.command03', function (_0x4bd029, _0x44f02e) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x4bd029, _0xdc57e0 = _0x44f02e;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x1d * 0x107 + 0x1 * -0x3b + -0x1d90), expect(_0xdc57e0)['toBe']('Brackets\x20Test\x20Command\x20Custom\x203');
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem']('Menu-test.command03', function (_0x2784f7) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20before\x20the\x20referenced\x20menu\x20item', function () {
                _0x24fde5 = -0x172a + 0x15c * 0x13 + 0xb * -0x3e, runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, 'Brackets\x20Test\x20Command\x20Custom\x204', 'Menu-test.command04', '', '', 'before', _0x4aee91, function (_0x43dcf2) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x43dcf2;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x1 * -0x9d5 + -0x2 * -0x337 + -0x1043);
                }), runs(function () {
                    _0x4d6bf0 = ![], _0x3eaab7 = null, _0xd7f8e1 = -(-0x25ee + 0x1823 + 0xdcc), brackets['app']['getMenuPosition']('Menu-test.command04', function (_0x11aa8b, _0xcf4d6f, _0x33e240) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x11aa8b, _0x3eaab7 = _0xcf4d6f, _0xd7f8e1 = _0x33e240;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0xf98 + -0x1634 + 0x69c), expect(_0x3eaab7)['toBe'](_0x4941b3), expect(_0xd7f8e1)['toBe'](-0x1aae + 0x2582 + -0xad4);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['getMenuTitle']('Menu-test.command04', function (_0x5b3d99, _0x1deb1a) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x5b3d99, _0xdc57e0 = _0x1deb1a;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0x3 * -0x56e + -0x25d1 + 0x361b), expect(_0xdc57e0)['toBe']('Brackets\x20Test\x20Command\x20Custom\x204');
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem']('Menu-test.command04', function (_0xd0323b) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20at\x20the\x20end\x20when\x20reference\x20menu\x20item\x20doesn\x27t\x20exist', function () {
                _0x24fde5 = -0x6a3 + 0x4aa * 0x1 + 0x1 * 0x1f9, runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['addMenuItem'](_0x4941b3, 'Brackets\x20Test\x20Command\x20Custom\x205', 'Menu-test.command05', '', '', 'before', 'NONEXISTANT', function (_0x26b701) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x26b701;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    _0x4d6bf0 = ![], _0x3eaab7 = null, _0xd7f8e1 = -(0x648 + 0x20e7 + -0x272e), brackets['app']['getMenuPosition']('Menu-test.command05', function (_0x5277d7, _0x36ed2b, _0x1dbb93) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x5277d7, _0x3eaab7 = _0x36ed2b, _0xd7f8e1 = _0x1dbb93;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](-0x1 * -0x2221 + -0x133 * -0x11 + -0x3 * 0x122c), expect(_0x3eaab7)['toBe'](_0x4941b3), expect(_0xd7f8e1)['toBe'](0x2600 + -0x2 * -0x737 + -0x346d);
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['getMenuTitle']('Menu-test.command05', function (_0x5aa701, _0x33f557) {
                        _0x4d6bf0 = !![], _0x24fde5 = _0x5aa701, _0xdc57e0 = _0x33f557;
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                }), runs(function () {
                    expect(_0x24fde5)['toBe'](0xa82 * -0x3 + 0x33a + -0x713 * -0x4), expect(_0xdc57e0)['toBe']('Brackets\x20Test\x20Command\x20Custom\x205');
                }), runs(function () {
                    _0x4d6bf0 = ![], brackets['app']['removeMenuItem']('Menu-test.command05', function (_0x5ec14f) {
                        _0x4d6bf0 = !![];
                    });
                }), waitsFor(function () {
                    return _0x4d6bf0;
                });
            }), it('should\x20add\x20menu\x20items\x20to\x20beginning\x20and\x20end\x20of\x20menu\x20section', function () {
                var _0x1137e4, _0x2acc45, _0x36e317, _0x516bc9, _0x43dbd1 = 'menuitem-sectiontest';
                runs(function () {
                    brackets['app']['addMenu']('Section\x20Test', 'menuitem-sectiontest', '', '', function (_0x1f9de0) {
                    }), brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2010', 'Menu-test.command10', '', '', '', '', function (_0x3a0296) {
                    }), brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2011', 'Menu-test.command11', '', '', '', '', function (_0x36418e) {
                    }), brackets['app']['addMenuItem'](_0x43dbd1, '---', String(Date['now']()), '', '', '', '', function (_0x5a8774) {
                    }), brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2012', 'Menu-test.command12', '', '', '', '', function (_0x4f2f49) {
                    }), brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2013', 'Menu-test.command13', '', '', '', '', function (_0x3c24e4) {
                    });
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0xa * -0x3f + 0xa * 0x1a5 + -0xdfc, brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2014', 'Menu-test.command14', '', '', 'lastInSection', 'Menu-test.command10', function (_0x4cd010) {
                        _0x1137e4 = !![], _0x2acc45 = _0x4cd010;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = -0x1eee + 0x24c9 + 0x5db * -0x1, brackets['app']['getMenuPosition']('Menu-test.command14', function (_0x4c953d, _0x1fd815, _0x3916ea) {
                        _0x1137e4 = !![], _0x2acc45 = _0x4c953d, _0x516bc9 = _0x1fd815, _0x36e317 = _0x3916ea;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    expect(_0x2acc45)['toBe'](0x26ec + 0x906 + -0x169 * 0x22), expect(_0x36e317)['toBe'](0x5e6 * -0x1 + 0x167 * 0x9 + 0x23d * -0x3);
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0x5 * -0x425 + 0x1271 * 0x1 + 0x2 * 0x124, brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2015', 'Menu-test.command15', '', '', 'lastInSection', 'Menu-test.command13', function (_0x12f5ef) {
                        _0x1137e4 = !![], _0x2acc45 = _0x12f5ef;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0x10bc + 0x2c0 * -0xb + -0xad * -0x14, brackets['app']['getMenuPosition']('Menu-test.command15', function (_0x3aaa9d, _0xf4460d, _0x5c7db0) {
                        _0x1137e4 = !![], _0x2acc45 = _0x3aaa9d, _0x516bc9 = _0xf4460d, _0x36e317 = _0x5c7db0;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    expect(_0x2acc45)['toBe'](0xb * 0x257 + 0x971 * -0x1 + 0x7 * -0x254), expect(_0x36e317)['toBe'](-0xafc * 0x1 + -0x2 * -0x994 + -0x826);
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0xa70 + 0x10 * 0x106 + -0x210 * 0xd, brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2016', 'Menu-test.command16', '', '', 'firstInSection', 'Menu-test.command11', function (_0x4ceba6) {
                        _0x1137e4 = !![], _0x2acc45 = _0x4ceba6;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0x1ef6 * 0x1 + 0x95 * -0x1 + -0x1e61, brackets['app']['getMenuPosition']('Menu-test.command16', function (_0xb5d003, _0x12499b, _0x5571b6) {
                        _0x1137e4 = !![], _0x2acc45 = _0xb5d003, _0x516bc9 = _0x12499b, _0x36e317 = _0x5571b6;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    expect(_0x2acc45)['toBe'](-0x359 * -0x7 + -0x1363 + -0x40c), expect(_0x36e317)['toBe'](-0x2661 + 0xd86 + 0x18db);
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = -0x202b + 0x1392 + 0xc99 * 0x1, brackets['app']['addMenuItem'](_0x43dbd1, 'Command\x2017', 'Menu-test.command17', '', '', 'firstInSection', 'Menu-test.command12', function (_0x331413) {
                        _0x1137e4 = !![], _0x2acc45 = _0x331413;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    _0x1137e4 = ![], _0x2acc45 = 0x1a26 * -0x1 + 0x59 + -0x529 * -0x5, brackets['app']['getMenuPosition']('Menu-test.command17', function (_0x3d6abe, _0x3206a8, _0x216211) {
                        _0x1137e4 = !![], _0x2acc45 = _0x3d6abe, _0x516bc9 = _0x3206a8, _0x36e317 = _0x216211;
                    });
                }), waitsFor(function () {
                    return _0x1137e4;
                }), runs(function () {
                    expect(_0x2acc45)['toBe'](0x1532 + 0x215c + -0x1b47 * 0x2), expect(_0x36e317)['toBe'](0xf5f + -0x19e2 + 0x8 * 0x151);
                }), runs(function () {
                    brackets['app']['removeMenuItem']('Menu-test.command10', function (_0x1e68c7) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command11', function (_0x4fb106) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command12', function (_0x34df19) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command13', function (_0x59261e) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command14', function (_0x3f17ab) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command15', function (_0x3810b9) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command16', function (_0x28d74d) {
                    }), brackets['app']['removeMenuItem']('Menu-test.command17', function (_0x2fa72d) {
                    }), brackets['app']['removeMenu'](_0x43dbd1, function (_0x4e9fec) {
                    });
                });
            });
        }), describe('removeMenu', function () {
            var _0x29ee6f = ![], _0x495533 = -0x80 * -0xa + 0x1e4 * -0xe + 0x1578;
            it('should\x20remove\x20a\x20menu', function () {
                runs(function () {
                    brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x6c3139) {
                        _0x29ee6f = !![], _0x495533 = _0x6c3139;
                    });
                }), waitsFor(function () {
                    return _0x29ee6f;
                }), runs(function () {
                    expect(_0x495533)['toBe'](0x121f + 0x2188 + -0x33a7);
                }), runs(function () {
                    _0x29ee6f = ![], brackets['app']['removeMenu'](_0x4941b3, function (_0x410322) {
                        _0x29ee6f = !![], _0x495533 = _0x410322;
                    });
                }), waitsFor(function () {
                    return _0x29ee6f;
                }), runs(function () {
                    expect(_0x495533)['toBe'](0x2112 + 0xce9 + -0x2dfb * 0x1);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                _0x29ee6f = ![], _0x495533 = 0x3 * 0x773 + 0x58d + -0xdf3 * 0x2, runs(function () {
                    brackets['app']['removeMenu'](-0x3 * -0x43b + -0x2c5 * 0x2 + -0x6fd, function (_0x2471be) {
                        _0x29ee6f = !![], _0x495533 = _0x2471be;
                    });
                }), waitsFor(function () {
                    return _0x29ee6f;
                }), runs(function () {
                    expect(_0x495533)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20the\x20menu\x20can\x27t\x20be\x20found', function () {
                _0x29ee6f = ![], _0x495533 = -0xe2a + -0x92a + -0x4 * -0x5d5, runs(function () {
                    brackets['app']['removeMenu'](_0x4941b3, function (_0x331244) {
                        _0x29ee6f = !![], _0x495533 = _0x331244;
                    });
                }), waitsFor(function () {
                    return _0x29ee6f;
                }), runs(function () {
                    expect(_0x495533)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                });
            });
        }), describe('removeMenuItem', function () {
            var _0x1fce45 = _0x4aee91 + '1';
            beforeEach(function () {
                var _0x467ab9 = ![], _0x1fb3f8 = -0x7be + -0x1308 + 0x1ac6;
                runs(function () {
                    brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x468d07) {
                        _0x468d07 ? (_0x467ab9 = !![], _0x1fb3f8 = _0x468d07) : brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x1fce45, '', '', '', '', function (_0x109549) {
                            _0x467ab9 = !![], _0x1fb3f8 = _0x109549;
                        });
                    });
                }), waitsFor(function () {
                    return _0x467ab9;
                }), runs(function () {
                    expect(_0x1fb3f8)['toBe'](-0x164 * 0x12 + -0x85b * -0x1 + -0x10ad * -0x1);
                });
            }), afterEach(function () {
                var _0x1cfb84 = ![], _0x7640bc = 0x146 + -0x1e18 + 0x1f * 0xee;
                runs(function () {
                    brackets['app']['removeMenuItem'](_0x1fce45, function (_0x2a253c) {
                        brackets['app']['removeMenu'](_0x4941b3, function (_0x212f4f) {
                            _0x1cfb84 = !![], _0x7640bc = _0x212f4f;
                        });
                    });
                }), waitsFor(function () {
                    return _0x1cfb84;
                }), runs(function () {
                    expect(_0x7640bc)['toBe'](0xdac + 0x13a1 + -0x214d);
                });
            }), it('should\x20remove\x20a\x20menu\x20item', function () {
                var _0x2f5068 = ![], _0x58b272 = -0x1b * -0x8 + 0x18d3 + -0x19ab;
                runs(function () {
                    brackets['app']['removeMenuItem'](_0x1fce45, function (_0x126f2b) {
                        _0x2f5068 = !![], _0x58b272 = _0x126f2b;
                    });
                }), waitsFor(function () {
                    return _0x2f5068;
                }, 'calling\x20removeMenuItem'), runs(function () {
                    expect(_0x58b272)['toBe'](-0x20da + -0x1 * 0x42a + 0x2504);
                }), runs(function () {
                    _0x2f5068 = ![], brackets['app']['getMenuTitle'](_0x1fce45, function (_0x1d7bcb, _0x424b98) {
                        _0x2f5068 = !![], _0x58b272 = _0x1d7bcb;
                    });
                }), waitsFor(function () {
                    return _0x2f5068;
                }, 'calling\x20getMenuTitle'), runs(function () {
                    expect(_0x58b272)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0x7fc6bb = ![], _0x11b69d = 0x1d6 + -0x9 * 0x18d + 0xc1f * 0x1;
                runs(function () {
                    brackets['app']['removeMenuItem'](0x6 * 0x467 + 0x1 * 0x8c + -0x1acc, function (_0x48639b) {
                        _0x7fc6bb = !![], _0x11b69d = _0x48639b;
                    });
                }), waitsFor(function () {
                    return _0x7fc6bb;
                }, 'calling\x20removeMenuItem'), runs(function () {
                    expect(_0x11b69d)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20the\x20menu\x20item\x20can\x27t\x20be\x20found', function () {
                var _0x446c18 = ![], _0x40e941 = -0xffd * -0x1 + 0x1d21 + 0xf * -0x302;
                runs(function () {
                    brackets['app']['removeMenuItem'](_0x1fce45 + 'foo', function (_0x3b3f3b) {
                        _0x446c18 = !![], _0x40e941 = _0x3b3f3b;
                    });
                }), waitsFor(function () {
                    return _0x446c18;
                }, 'calling\x20removeMenuItem'), runs(function () {
                    expect(_0x40e941)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                });
            });
        }), describe('getMenuItemState\x20setMenuItemState', function () {
            var _0x35faed = _0x4aee91 + '2';
            beforeEach(function () {
                var _0x577c6f = ![], _0x170201 = -0x1c1 * 0x16 + -0x112 * 0x4 + 0x2ade;
                runs(function () {
                    brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x467c21) {
                        _0x467c21 ? (_0x577c6f = !![], _0x170201 = _0x467c21) : brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x35faed, '', '', '', '', function (_0x20ab9e) {
                            _0x577c6f = !![], _0x170201 = _0x20ab9e;
                        });
                    });
                }), waitsFor(function () {
                    return _0x577c6f;
                }), runs(function () {
                    expect(_0x170201)['toBe'](-0x3 * -0x7e7 + -0x97d + -0xe38);
                });
            }), afterEach(function () {
                var _0x5a77cb = ![], _0x5d58fc = 0x3 * 0x4ae + -0xe8b + 0x2b * 0x3;
                runs(function () {
                    brackets['app']['removeMenuItem'](_0x35faed, function (_0x136f8f) {
                        brackets['app']['removeMenu'](_0x4941b3, function (_0xfcedb9) {
                            _0x5a77cb = !![], _0x5d58fc = _0xfcedb9;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5a77cb;
                }), runs(function () {
                    expect(_0x5d58fc)['toBe'](-0xfca + -0xfe3 + 0x1fad);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20enabled\x20state', function () {
                var _0x46d493 = ![], _0x300e8b = ![], _0xebcac9 = -0x1c36 * -0x1 + -0x4e9 + -0x5 * 0x4a9;
                runs(function () {
                    brackets['app']['getMenuItemState'](_0x35faed, function (_0xd79b66, _0x370dbe, _0xcf1f6c) {
                        _0x46d493 = !![], _0x300e8b = _0x370dbe, _0xebcac9 = _0xd79b66;
                    });
                }), waitsFor(function () {
                    return _0x46d493;
                }), runs(function () {
                    expect(_0xebcac9)['toBe'](0xa6 * 0x31 + -0xe1f + -0x11a7);
                }), runs(function () {
                    _0x46d493 = ![], brackets['app']['setMenuItemState'](_0x35faed, ![], ![], function (_0x42b089) {
                        _0x46d493 = !![], _0xebcac9 = _0x42b089;
                    });
                }), waitsFor(function () {
                    return _0x46d493;
                }), runs(function () {
                    expect(_0xebcac9)['toBe'](0x765 + -0x1877 + -0x26 * -0x73);
                }), runs(function () {
                    _0x46d493 = ![], brackets['app']['getMenuItemState'](_0x35faed, function (_0x116891, _0x3c33d5, _0x583012) {
                        _0x46d493 = !![], _0x300e8b = _0x3c33d5, _0xebcac9 = _0x116891;
                    });
                }), waitsFor(function () {
                    return _0x46d493;
                }), runs(function () {
                    expect(_0xebcac9)['toBe'](-0x9ee * -0x1 + -0x125 * -0xd + -0x18cf), expect(_0x300e8b)['toBe'](![]);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20checked\x20state', function () {
                var _0x5f30a8 = ![], _0x2c666a = ![], _0x669e3b = 0x2 * -0x773 + -0x1f81 + -0x7 * -0x6a1;
                runs(function () {
                    brackets['app']['getMenuItemState'](_0x35faed, function (_0x2d0c10, _0x361e4b, _0x3aa7e0) {
                        _0x5f30a8 = !![], _0x2c666a = _0x3aa7e0, _0x669e3b = _0x2d0c10;
                    });
                }), waitsFor(function () {
                    return _0x5f30a8;
                }), runs(function () {
                    expect(_0x669e3b)['toBe'](-0x19 * -0x147 + 0x5f1 + -0x25e0), expect(_0x2c666a)['toBe'](![]);
                }), runs(function () {
                    _0x5f30a8 = ![], brackets['app']['setMenuItemState'](_0x35faed, !![], !![], function (_0x3b7ae8) {
                        _0x5f30a8 = !![], _0x669e3b = _0x3b7ae8;
                    });
                }), waitsFor(function () {
                    return _0x5f30a8;
                }), runs(function () {
                    expect(_0x669e3b)['toBe'](-0x1c62 + -0x7d8 + -0x121d * -0x2);
                }), runs(function () {
                    _0x5f30a8 = ![], brackets['app']['getMenuItemState'](_0x35faed, function (_0x527e25, _0x5429bf, _0x5a3089) {
                        _0x5f30a8 = !![], _0x2c666a = _0x5a3089, _0x669e3b = _0x527e25;
                    });
                }), waitsFor(function () {
                    return _0x5f30a8;
                }), runs(function () {
                    expect(_0x669e3b)['toBe'](-0x2c8 + 0x6e2 + -0x41a);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0x4c2d8b = ![], _0x6a6168 = 0xe0b + 0x4 * 0x268 + -0x17ab;
                runs(function () {
                    brackets['app']['setMenuItemState'](_0x35faed, 'hello', 'world', function (_0x13e1c9) {
                        _0x4c2d8b = !![], _0x6a6168 = _0x13e1c9;
                    });
                }), waitsFor(function () {
                    return _0x4c2d8b;
                }), runs(function () {
                    expect(_0x6a6168)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('getMenuTitle\x20setMenuTitle', function () {
            beforeEach(function () {
                var _0x3324c9 = ![], _0x13bb08 = 0x6e9 * -0x1 + -0x197c + 0x2065;
                runs(function () {
                    brackets['app']['addMenu'](_0x2ce85d, _0x4941b3, '', '', function (_0x5dda62) {
                        _0x5dda62 ? (_0x3324c9 = !![], _0x13bb08 = _0x5dda62) : brackets['app']['addMenuItem'](_0x4941b3, _0x515b50, _0x4aee91, '', '', '', '', function (_0x5e9c2f) {
                            _0x3324c9 = !![], _0x13bb08 = _0x5e9c2f;
                        });
                    });
                }), waitsFor(function () {
                    return _0x3324c9;
                }), runs(function () {
                    expect(_0x13bb08)['toBe'](-0x1 * 0x149a + 0x226a + -0x11 * 0xd0);
                });
            }), afterEach(function () {
                var _0x30b1a9 = ![], _0x41e1e5 = 0x5 * 0xc5 + 0x2547 + -0x2920;
                runs(function () {
                    brackets['app']['removeMenuItem'](_0x4aee91, function (_0x480b76) {
                        _0x480b76 ? (_0x30b1a9 = !![], _0x41e1e5 = _0x480b76) : brackets['app']['removeMenu'](_0x4941b3, function (_0x32bbda) {
                            _0x30b1a9 = !![], _0x41e1e5 = _0x32bbda;
                        });
                    });
                }), waitsFor(function () {
                    return _0x30b1a9;
                }), runs(function () {
                    expect(_0x41e1e5)['toBe'](0xc7 + 0x2 * 0x1083 + -0x21cd);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20menu\x20title', function () {
                var _0x143caa = 'New\x20Title', _0x3b8f51 = ![], _0x5e7e71 = -0x1f * -0x1 + -0x937 + 0x918, _0x4ec0b5;
                runs(function () {
                    brackets['app']['getMenuTitle'](_0x4941b3, function (_0x409046, _0x545bbd) {
                        _0x3b8f51 = !![], _0x4ec0b5 = _0x545bbd, _0x5e7e71 = _0x409046;
                    });
                }), waitsFor(function () {
                    return _0x3b8f51;
                }), runs(function () {
                    expect(_0x5e7e71)['toBe'](-0x1eef + 0xefe + -0x7 * -0x247), expect(_0x4ec0b5)['toBe'](_0x2ce85d);
                }), runs(function () {
                    _0x3b8f51 = ![], brackets['app']['setMenuTitle'](_0x4941b3, _0x143caa, function (_0x21ca1a) {
                        _0x3b8f51 = !![], _0x5e7e71 = _0x21ca1a;
                    });
                }), waitsFor(function () {
                    return _0x3b8f51;
                }), runs(function () {
                    expect(_0x5e7e71)['toBe'](0x1 * -0x104b + -0x1757 + 0x27a2);
                }), runs(function () {
                    _0x3b8f51 = ![], brackets['app']['getMenuTitle'](_0x4941b3, function (_0x3aac45, _0x2111eb) {
                        _0x3b8f51 = !![], _0x4ec0b5 = _0x2111eb, _0x5e7e71 = _0x3aac45;
                    });
                }), waitsFor(function () {
                    return _0x3b8f51;
                }), runs(function () {
                    expect(_0x5e7e71)['toBe'](0x2077 * -0x1 + 0x7c + -0x1 * -0x1ffb), expect(_0x4ec0b5)['toBe'](_0x143caa);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20menu\x20item\x20title', function () {
                var _0x59483e = 'New\x20Item\x20Title', _0x294340 = ![], _0x1c18fb = 0x12a4 * -0x2 + -0x2 * -0xeaf + 0x7ea, _0x30e63b;
                runs(function () {
                    brackets['app']['getMenuTitle'](_0x4aee91, function (_0x52eaac, _0x4a3d6a) {
                        _0x294340 = !![], _0x30e63b = _0x4a3d6a, _0x1c18fb = _0x52eaac;
                    });
                }), waitsFor(function () {
                    return _0x294340;
                }), runs(function () {
                    expect(_0x1c18fb)['toBe'](-0x5 * -0x3ad + 0x1169 + -0x23ca), expect(_0x30e63b)['toBe'](_0x515b50);
                }), runs(function () {
                    _0x294340 = ![], brackets['app']['setMenuTitle'](_0x4aee91, _0x59483e, function (_0x386c4d) {
                        _0x294340 = !![], _0x1c18fb = _0x386c4d;
                    });
                }), waitsFor(function () {
                    return _0x294340;
                }), runs(function () {
                    expect(_0x1c18fb)['toBe'](-0x24 * 0xee + -0x119 * -0x19 + -0x607 * -0x1);
                }), runs(function () {
                    _0x294340 = ![], brackets['app']['getMenuTitle'](_0x4aee91, function (_0x45d166, _0x3439e4) {
                        _0x294340 = !![], _0x30e63b = _0x3439e4, _0x1c18fb = _0x45d166;
                    });
                }), waitsFor(function () {
                    return _0x294340;
                }), runs(function () {
                    expect(_0x1c18fb)['toBe'](0x240 + 0x199b + -0x1bdb), expect(_0x30e63b)['toBe'](_0x59483e);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0x170e8f = ![], _0x47eb74 = 0x2 * -0x10c9 + -0xcb * 0x17 + 0x33cf;
                runs(function () {
                    brackets['app']['setMenuTitle'](_0x4aee91, -0x1d5f + 0x1508 + -0x137 * -0x7, function (_0xc5c087) {
                        _0x170e8f = !![], _0x47eb74 = _0xc5c087;
                    });
                }), waitsFor(function () {
                    return _0x170e8f;
                }), runs(function () {
                    expect(_0x47eb74)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), it('should\x20remove\x20placeholder\x20menu', function () {
            var _0x20fad6 = ![], _0x26c6f3 = 0x189 * 0x13 + 0x6 * 0x2c0 + -0x2dab;
            runs(function () {
                brackets['app']['removeMenu'](_0x64773c, function (_0x43c96f) {
                    _0x20fad6 = !![], _0x26c6f3 = _0x43c96f;
                });
            }), waitsFor(function () {
                return _0x20fad6;
            }), expect(_0x26c6f3)['toBe'](0x349 * -0x6 + -0x2 * -0xff5 + -0xc34);
        });
    });
});
