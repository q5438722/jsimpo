var _0x37e0 = [
    'toBe',
    'should\x20add\x20a\x20menu',
    'getMenuTitle',
    'removeMenu',
    'addMenu\x20(with\x20reference)',
    'should\x20add\x20new\x20menu\x20in\x20last\x20position\x20of\x20list',
    'Custom1',
    'menu-unittest1',
    'getMenuPosition',
    'toBeGreaterThan',
    'should\x20add\x20new\x20menu\x20after\x20reference\x20menu',
    'first',
    'CustomAfter',
    'menu-unittest-after',
    'menu-unittest-first',
    'should\x20add\x20new\x20menu\x20before\x20reference\x20menu',
    'CustomLast',
    'last',
    'menu-unittest-before',
    'before',
    'menu-unittest-last',
    'should\x20add\x20new\x20menu\x20at\x20end\x20of\x20list\x20when\x20reference\x20menu\x20doesn\x27t\x20exist',
    'Custom4',
    'menu-unittest4',
    'after',
    'NONEXISTANT',
    'addMenuItem',
    'should\x20add\x20a\x20menu\x20item',
    'removeMenuItem',
    'should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed',
    'Brackets\x20Test\x20Command\x20Custom\x201',
    'Menu-test.command01',
    'should\x20add\x20a\x20menu\x20item\x20in\x20last\x20position\x20of\x20menu',
    'Brackets\x20Test\x20Command\x20Custom\x202',
    'Menu-test.command02',
    'should\x20add\x20a\x20menu\x20item\x20after\x20the\x20referenced\x20menu\x20item',
    'Menu-test.command03',
    'Brackets\x20Test\x20Command\x20Custom\x203',
    'should\x20add\x20a\x20menu\x20item\x20before\x20the\x20referenced\x20menu\x20item',
    'Brackets\x20Test\x20Command\x20Custom\x204',
    'Menu-test.command04',
    'should\x20add\x20a\x20menu\x20item\x20at\x20the\x20end\x20when\x20reference\x20menu\x20item\x20doesn\x27t\x20exist',
    'Menu-test.command05',
    'Brackets\x20Test\x20Command\x20Custom\x205',
    'should\x20add\x20menu\x20items\x20to\x20beginning\x20and\x20end\x20of\x20menu\x20section',
    'menuitem-sectiontest',
    'Command\x2010',
    'Menu-test.command10',
    'Command\x2011',
    'Menu-test.command11',
    'now',
    'Command\x2012',
    'Command\x2013',
    'Menu-test.command13',
    'Menu-test.command14',
    'Command\x2015',
    'Menu-test.command15',
    'lastInSection',
    'Command\x2016',
    'Menu-test.command16',
    'Command\x2017',
    'firstInSection',
    'Menu-test.command12',
    'should\x20remove\x20a\x20menu',
    'ERR_INVALID_PARAMS',
    'should\x20return\x20an\x20error\x20if\x20the\x20menu\x20can\x27t\x20be\x20found',
    'ERR_NOT_FOUND',
    'should\x20remove\x20a\x20menu\x20item',
    'calling\x20removeMenuItem',
    'calling\x20getMenuTitle',
    'should\x20return\x20an\x20error\x20if\x20the\x20menu\x20item\x20can\x27t\x20be\x20found',
    'foo',
    'getMenuItemState\x20setMenuItemState',
    'getMenuItemState',
    'setMenuItemState',
    'should\x20be\x20able\x20to\x20set\x20checked\x20state',
    'hello',
    'world',
    'should\x20be\x20able\x20to\x20set\x20menu\x20title',
    'New\x20Title',
    'setMenuTitle',
    'should\x20remove\x20placeholder\x20menu',
    '1048507CkAQRW',
    '921609uvgFRY',
    '386115nUDZut',
    '1804gknxcv',
    '410urvQPB',
    '263690LHKNDG',
    '1VIgQTw',
    '225158YavwHT',
    '4DXWybj',
    '316238gTsIWp',
    'utils/Global',
    'inBrowser',
    'placeholder',
    'MENU',
    'TEST',
    'test',
    'Item\x201',
    'should\x20have\x20a\x20brackets.app\x20namespace',
    'toBeTruthy',
    'app',
    'addMenu'
];
function _0x687a(_0x106a38, _0x334d02) {
    return _0x687a = function (_0x37e0e1, _0x687a74) {
        _0x37e0e1 = _0x37e0e1 - 0x1bd;
        var _0x5dd702 = _0x37e0[_0x37e0e1];
        return _0x5dd702;
    }, _0x687a(_0x106a38, _0x334d02);
}
(function (_0x4eb00b, _0x3d9b64) {
    var _0x54c754 = _0x687a;
    while (!![]) {
        try {
            var _0x1500d1 = parseInt(_0x54c754(0x1bd)) + -parseInt(_0x54c754(0x1be)) + parseInt(_0x54c754(0x1bf)) + -parseInt(_0x54c754(0x1c0)) * parseInt(_0x54c754(0x1c1)) + parseInt(_0x54c754(0x1c2)) * -parseInt(_0x54c754(0x1c3)) + -parseInt(_0x54c754(0x1c4)) * -parseInt(_0x54c754(0x1c5)) + parseInt(_0x54c754(0x1c6));
            if (_0x1500d1 === _0x3d9b64)
                break;
            else
                _0x4eb00b['push'](_0x4eb00b['shift']());
        } catch (_0x2e401c) {
            _0x4eb00b['push'](_0x4eb00b['shift']());
        }
    }
}(_0x37e0, 0xb1619), define(function (_0x3b678c, _0x5198b2, _0x20facd) {
    'use strict';
    var _0xd90b41 = _0x687a;
    _0x3b678c(_0xd90b41(0x1c7));
    if (brackets[_0xd90b41(0x1c8)])
        return;
    describe('Native\x20Menus', function () {
        var _0x586508 = _0xd90b41, _0x575f13 = _0x586508(0x1c9), _0xd6f7d2 = _0x586508(0x1ca), _0xe734ba = _0x586508(0x1cb), _0x508fab = _0x586508(0x1cc), _0x327a33 = _0x586508(0x1cd), _0x229be5 = 'item1';
        it(_0x586508(0x1ce), function () {
            var _0x2d3839 = _0x586508, _0x3bd25f = ![], _0x16868b = 0x0;
            expect(brackets['app'])[_0x2d3839(0x1cf)](), runs(function () {
                var _0x2b50da = _0x2d3839;
                brackets[_0x2b50da(0x1d0)][_0x2b50da(0x1d1)](_0xd6f7d2, _0x575f13, '', '', function (_0x5ba57a) {
                    _0x3bd25f = !![], _0x16868b = _0x5ba57a;
                });
            }), waitsFor(function () {
                return _0x3bd25f;
            }), expect(_0x16868b)[_0x2d3839(0x1d2)](0x0);
        }), describe(_0x586508(0x1d1), function () {
            var _0xa2b69 = _0x586508;
            it(_0xa2b69(0x1d3), function () {
                var _0x5cb981 = ![], _0x4dc2f0 = 0x0, _0x388727;
                runs(function () {
                    var _0x153ffe = _0x687a;
                    brackets['app'][_0x153ffe(0x1d4)](_0x508fab, function (_0x1da242) {
                        _0x5cb981 = !![], _0x4dc2f0 = _0x1da242;
                    });
                }), waitsFor(function () {
                    return _0x5cb981;
                }), runs(function () {
                    expect(_0x4dc2f0)['toBe'](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    var _0x102469 = _0x687a;
                    _0x5cb981 = ![], brackets[_0x102469(0x1d0)]['addMenu'](_0xe734ba, _0x508fab, '', '', function (_0x4f6e61) {
                        _0x5cb981 = !![], _0x4dc2f0 = _0x4f6e61;
                    });
                }), waitsFor(function () {
                    return _0x5cb981;
                }), runs(function () {
                    var _0x375bc2 = _0x687a;
                    expect(_0x4dc2f0)[_0x375bc2(0x1d2)](0x0);
                }), runs(function () {
                    var _0x348ab3 = _0x687a;
                    _0x5cb981 = ![], brackets[_0x348ab3(0x1d0)][_0x348ab3(0x1d4)](_0x508fab, function (_0x17a032, _0x4ba34b) {
                        _0x5cb981 = !![], _0x4dc2f0 = _0x17a032, _0x388727 = _0x4ba34b;
                    });
                }), waitsFor(function () {
                    return _0x5cb981;
                }), runs(function () {
                    var _0x419c29 = _0x687a;
                    expect(_0x4dc2f0)[_0x419c29(0x1d2)](0x0), expect(_0x388727)[_0x419c29(0x1d2)](_0xe734ba);
                }), runs(function () {
                    var _0xfb274b = _0x687a;
                    _0x5cb981 = ![], brackets[_0xfb274b(0x1d0)][_0xfb274b(0x1d5)](_0x508fab, function (_0x9669a3) {
                        _0x5cb981 = !![];
                    });
                }), waitsFor(function () {
                    return _0x5cb981;
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0xbfe130 = ![], _0x331664 = 0x0;
                runs(function () {
                    var _0x45b87e = _0x687a;
                    brackets[_0x45b87e(0x1d0)][_0x45b87e(0x1d1)](_0xe734ba, _0x508fab, 0x2a, '', function (_0x3dcbcc) {
                        _0xbfe130 = !![], _0x331664 = _0x3dcbcc;
                    });
                }), waitsFor(function () {
                    return _0xbfe130;
                }), runs(function () {
                    var _0x55ba00 = _0x687a;
                    expect(_0x331664)[_0x55ba00(0x1d2)](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe(_0x586508(0x1d6), function () {
            var _0x45fff8 = _0x586508, _0x160592 = ![], _0x3fc93b = 0x0, _0xc3feda, _0x2f3136 = -0x1;
            beforeEach(function () {
                runs(function () {
                    var _0x3e069c = _0x687a;
                    _0x160592 = ![], brackets[_0x3e069c(0x1d0)][_0x3e069c(0x1d1)](_0xe734ba, _0x508fab, '', '', function (_0x2e7ded) {
                        _0x160592 = !![], _0x3fc93b = _0x2e7ded;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x292381 = _0x687a;
                    expect(_0x3fc93b)[_0x292381(0x1d2)](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x5bf681 = _0x687a;
                    _0x160592 = ![], brackets[_0x5bf681(0x1d0)]['removeMenu'](_0x508fab, function (_0x4ab75e) {
                        _0x160592 = !![], _0x3fc93b = _0x4ab75e;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x44b906 = _0x687a;
                    expect(_0x3fc93b)[_0x44b906(0x1d2)](0x0);
                });
            }), it(_0x45fff8(0x1d7), function () {
                _0x3fc93b = 0x0, runs(function () {
                    var _0x317dbd = _0x687a;
                    _0x160592 = ![], brackets[_0x317dbd(0x1d0)][_0x317dbd(0x1d1)](_0x317dbd(0x1d8), _0x317dbd(0x1d9), '', '', function (_0x525f39) {
                        _0x160592 = !![], _0x3fc93b = _0x525f39;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x4532bd = _0x687a;
                    expect(_0x3fc93b)[_0x4532bd(0x1d2)](0x0);
                }), runs(function () {
                    var _0x5432de = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, brackets[_0x5432de(0x1d0)][_0x5432de(0x1da)](_0x5432de(0x1d9), function (_0x382d20, _0x52112c, _0x43e73c) {
                        _0x160592 = !![], _0x3fc93b = _0x382d20, _0xc3feda = _0x52112c, _0x2f3136 = _0x43e73c;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x4b418b = _0x687a;
                    expect(_0x3fc93b)[_0x4b418b(0x1d2)](0x0), expect(_0xc3feda)['toBe'](''), expect(_0x2f3136)[_0x4b418b(0x1db)](0x0);
                }), runs(function () {
                    var _0x28aa62 = _0x687a;
                    _0x160592 = ![], brackets['app'][_0x28aa62(0x1d5)](_0x28aa62(0x1d9), function (_0x546856) {
                        _0x160592 = !![], _0x3fc93b = _0x546856;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x57467f = _0x687a;
                    expect(_0x3fc93b)[_0x57467f(0x1d2)](0x0);
                });
            }), it(_0x45fff8(0x1dc), function () {
                var _0x16f89d = -0x1;
                _0x3fc93b = 0x0, runs(function () {
                    var _0x2064ea = _0x687a;
                    _0x160592 = ![], brackets[_0x2064ea(0x1d0)][_0x2064ea(0x1d1)]('CustomFirst', 'menu-unittest-first', _0x2064ea(0x1dd), '', function (_0x1c981c) {
                        _0x160592 = !![], _0x3fc93b = _0x1c981c;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    expect(_0x3fc93b)['toBe'](0x0);
                }), runs(function () {
                    var _0x2c96a5 = _0x687a;
                    _0x160592 = ![], brackets['app'][_0x2c96a5(0x1d1)](_0x2c96a5(0x1de), _0x2c96a5(0x1df), 'after', _0x2c96a5(0x1e0), function (_0x3580c1) {
                        _0x160592 = !![], _0x3fc93b = _0x3580c1;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x5448b7 = _0x687a;
                    expect(_0x3fc93b)[_0x5448b7(0x1d2)](0x0);
                }), runs(function () {
                    var _0x11271e = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, _0x16f89d = -0x1, brackets[_0x11271e(0x1d0)][_0x11271e(0x1da)](_0x11271e(0x1e0), function (_0x278cae, _0x12a5d1, _0x23e258) {
                        _0x160592 = !![], _0x3fc93b = _0x278cae, _0xc3feda = _0x12a5d1, _0x2f3136 = _0x23e258, _0x16f89d = _0x2f3136 + 0x1;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x5b5035 = _0x687a;
                    expect(_0x3fc93b)[_0x5b5035(0x1d2)](0x0), expect(_0xc3feda)['toBe']('');
                }), runs(function () {
                    var _0x3211f8 = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, brackets[_0x3211f8(0x1d0)][_0x3211f8(0x1da)]('menu-unittest-after', function (_0x125a2a, _0x169031, _0x25af3b) {
                        _0x160592 = !![], _0x3fc93b = _0x125a2a, _0xc3feda = _0x169031, _0x2f3136 = _0x25af3b;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x47f5a9 = _0x687a;
                    expect(_0x3fc93b)[_0x47f5a9(0x1d2)](0x0), expect(_0xc3feda)[_0x47f5a9(0x1d2)](''), expect(_0x2f3136)[_0x47f5a9(0x1d2)](_0x16f89d);
                }), runs(function () {
                    var _0x43e536 = _0x687a;
                    _0x160592 = ![], brackets[_0x43e536(0x1d0)]['removeMenu'](_0x43e536(0x1e0), function (_0x182b4b) {
                        _0x160592 = !![];
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x326738 = _0x687a;
                    _0x160592 = ![], brackets[_0x326738(0x1d0)]['removeMenu'](_0x326738(0x1df), function (_0x14862f) {
                        _0x160592 = !![];
                    });
                }), waitsFor(function () {
                    return _0x160592;
                });
            }), it(_0x45fff8(0x1e1), function () {
                var _0xa67530 = -0x1;
                _0x3fc93b = 0x0, runs(function () {
                    var _0x1ac368 = _0x687a;
                    _0x160592 = ![], brackets[_0x1ac368(0x1d0)][_0x1ac368(0x1d1)](_0x1ac368(0x1e2), 'menu-unittest-last', _0x1ac368(0x1e3), '', function (_0x2b73ca) {
                        _0x160592 = !![], _0x3fc93b = _0x2b73ca;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x235f1a = _0x687a;
                    expect(_0x3fc93b)[_0x235f1a(0x1d2)](0x0);
                }), runs(function () {
                    var _0x35a0ed = _0x687a;
                    _0x160592 = ![], brackets[_0x35a0ed(0x1d0)][_0x35a0ed(0x1d1)]('CustomBefore', _0x35a0ed(0x1e4), _0x35a0ed(0x1e5), _0x35a0ed(0x1e6), function (_0x25d0c7) {
                        _0x160592 = !![], _0x3fc93b = _0x25d0c7;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x403d64 = _0x687a;
                    expect(_0x3fc93b)[_0x403d64(0x1d2)](0x0);
                }), runs(function () {
                    var _0x2d7d18 = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, _0xa67530 = -0x1, brackets['app'][_0x2d7d18(0x1da)](_0x2d7d18(0x1e6), function (_0x2a1402, _0x10d2c5, _0x41f2ea) {
                        _0x160592 = !![], _0x3fc93b = _0x2a1402, _0xc3feda = _0x10d2c5, _0x2f3136 = _0x41f2ea, _0xa67530 = _0x2f3136 - 0x1;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x176b18 = _0x687a;
                    expect(_0x3fc93b)[_0x176b18(0x1d2)](0x0), expect(_0xc3feda)['toBe']('');
                }), runs(function () {
                    var _0x561a89 = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, brackets['app'][_0x561a89(0x1da)](_0x561a89(0x1e4), function (_0x18b7fc, _0xf12b1f, _0x22a034) {
                        _0x160592 = !![], _0x3fc93b = _0x18b7fc, _0xc3feda = _0xf12b1f, _0x2f3136 = _0x22a034;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x72386b = _0x687a;
                    expect(_0x3fc93b)['toBe'](0x0), expect(_0xc3feda)['toBe'](''), expect(_0x2f3136)[_0x72386b(0x1d2)](_0xa67530);
                }), runs(function () {
                    var _0x1b4c41 = _0x687a;
                    _0x160592 = ![], brackets['app']['removeMenu'](_0x1b4c41(0x1e6), function (_0x472e50) {
                        _0x160592 = !![];
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x179aab = _0x687a;
                    _0x160592 = ![], brackets[_0x179aab(0x1d0)][_0x179aab(0x1d5)]('menu-unittest-before', function (_0x206141) {
                        _0x160592 = !![];
                    });
                }), waitsFor(function () {
                    return _0x160592;
                });
            }), it(_0x45fff8(0x1e7), function () {
                _0x3fc93b = 0x0, runs(function () {
                    var _0xf7b2a1 = _0x687a;
                    _0x160592 = ![], brackets['app'][_0xf7b2a1(0x1d1)](_0xf7b2a1(0x1e8), _0xf7b2a1(0x1e9), _0xf7b2a1(0x1ea), _0xf7b2a1(0x1eb), function (_0x5b10c7) {
                        _0x160592 = !![], _0x3fc93b = _0x5b10c7;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x145ff5 = _0x687a;
                    expect(_0x3fc93b)[_0x145ff5(0x1d2)](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    var _0x2a21ce = _0x687a;
                    _0x160592 = ![], _0xc3feda = null, _0x2f3136 = -0x1, brackets[_0x2a21ce(0x1d0)][_0x2a21ce(0x1da)](_0x2a21ce(0x1e9), function (_0x2e5b77, _0x5143e1, _0x3a240f) {
                        _0x160592 = !![], _0x3fc93b = _0x2e5b77, _0xc3feda = _0x5143e1, _0x2f3136 = _0x3a240f;
                    });
                }), waitsFor(function () {
                    return _0x160592;
                }), runs(function () {
                    var _0x744f0 = _0x687a;
                    expect(_0x3fc93b)[_0x744f0(0x1d2)](0x0), expect(_0xc3feda)[_0x744f0(0x1d2)](''), expect(_0x2f3136)['toBeGreaterThan'](0x0);
                }), runs(function () {
                    _0x160592 = ![], brackets['app']['removeMenu']('menu-unittest4', function (_0x2644d5) {
                        _0x160592 = !![];
                    });
                }), waitsFor(function () {
                    return _0x160592;
                });
            });
        }), describe(_0x586508(0x1ec), function () {
            var _0x467529 = _0x586508, _0x5bc7f4 = ![], _0x11087a = 0x0, _0x5b4ced;
            beforeEach(function () {
                runs(function () {
                    var _0x5ac820 = _0x687a;
                    _0x5bc7f4 = ![], brackets[_0x5ac820(0x1d0)]['addMenu'](_0xe734ba, _0x508fab, '', '', function (_0x19cc51) {
                        _0x5bc7f4 = !![], _0x11087a = _0x19cc51;
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                }), runs(function () {
                    var _0x2ef313 = _0x687a;
                    expect(_0x11087a)[_0x2ef313(0x1d2)](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x41c685 = _0x687a;
                    _0x5bc7f4 = ![], brackets[_0x41c685(0x1d0)]['removeMenu'](_0x508fab, function (_0x47c177) {
                        _0x5bc7f4 = !![], _0x11087a = _0x47c177;
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                }), runs(function () {
                    var _0xda4be6 = _0x687a;
                    expect(_0x11087a)[_0xda4be6(0x1d2)](0x0);
                });
            }), it(_0x467529(0x1ed), function () {
                _0x11087a = 0x0, runs(function () {
                    var _0x4794d1 = _0x687a;
                    _0x5bc7f4 = ![], brackets['app'][_0x4794d1(0x1ec)](_0x508fab, _0x327a33, _0x229be5, '', '', '', '', function (_0x49a883) {
                        _0x5bc7f4 = !![], _0x11087a = _0x49a883;
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                }), runs(function () {
                    var _0x24a186 = _0x687a;
                    expect(_0x11087a)[_0x24a186(0x1d2)](0x0);
                }), runs(function () {
                    var _0x117099 = _0x687a;
                    _0x5bc7f4 = ![], brackets[_0x117099(0x1d0)][_0x117099(0x1d4)](_0x229be5, function (_0x6bcbd1, _0x598f71) {
                        _0x5bc7f4 = !![], _0x11087a = _0x6bcbd1, _0x5b4ced = _0x598f71;
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                }), runs(function () {
                    var _0x4683a3 = _0x687a;
                    expect(_0x11087a)[_0x4683a3(0x1d2)](0x0), expect(_0x5b4ced)[_0x4683a3(0x1d2)](_0x327a33), _0x5bc7f4 = ![], brackets[_0x4683a3(0x1d0)][_0x4683a3(0x1ee)](_0x229be5, function (_0x286db4) {
                        _0x5bc7f4 = !![];
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                });
            }), it(_0x467529(0x1ef), function () {
                runs(function () {
                    var _0x350ef7 = _0x687a;
                    _0x11087a = 0x0, _0x5bc7f4 = ![], brackets[_0x350ef7(0x1d0)][_0x350ef7(0x1ec)](_0x508fab, _0x327a33, _0x229be5, '', 0x2a, '', '', function (_0x7a2765) {
                        _0x5bc7f4 = !![], _0x11087a = _0x7a2765;
                    });
                }), waitsFor(function () {
                    return _0x5bc7f4;
                }), runs(function () {
                    expect(_0x11087a)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('addMenuItem\x20(with\x20reference)', function () {
            var _0x24ac4d = _0x586508, _0xea1b17 = ![], _0x30243c = 0x0, _0xc34ed7, _0x270d8a = null, _0x447625 = -0x1;
            beforeEach(function () {
                runs(function () {
                    var _0x198ee2 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x198ee2(0x1d0)]['addMenu'](_0xe734ba, _0x508fab, '', '', function (_0x38a862) {
                        _0xea1b17 = !![], _0x30243c = _0x38a862;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    expect(_0x30243c)['toBe'](0x0);
                }), runs(function () {
                    var _0x46d0e8 = _0x687a;
                    _0xea1b17 = ![], brackets['app'][_0x46d0e8(0x1ec)](_0x508fab, _0x327a33, _0x229be5, '', '', '', '', function (_0x4c12b0) {
                        _0xea1b17 = !![], _0x30243c = _0x4c12b0;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x13f0a3 = _0x687a;
                    expect(_0x30243c)[_0x13f0a3(0x1d2)](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x23f7dd = _0x687a;
                    _0xea1b17 = ![], brackets[_0x23f7dd(0x1d0)][_0x23f7dd(0x1ee)](_0x229be5, function (_0x23c3b8) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0xd73ec4 = _0x687a;
                    _0xea1b17 = ![], brackets[_0xd73ec4(0x1d0)][_0xd73ec4(0x1d5)](_0x508fab, function (_0xadbbf6) {
                        _0xea1b17 = !![], _0x30243c = _0xadbbf6;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x10cc80 = _0x687a;
                    expect(_0x30243c)[_0x10cc80(0x1d2)](0x0);
                });
            }), it('should\x20add\x20a\x20menu\x20item\x20in\x20first\x20position\x20of\x20menu', function () {
                _0x30243c = 0x0, runs(function () {
                    var _0x27f71e = _0x687a;
                    _0xea1b17 = ![], brackets[_0x27f71e(0x1d0)][_0x27f71e(0x1ec)](_0x508fab, _0x27f71e(0x1f0), _0x27f71e(0x1f1), '', '', _0x27f71e(0x1dd), '', function (_0x22e788) {
                        _0xea1b17 = !![], _0x30243c = _0x22e788;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x178688 = _0x687a;
                    expect(_0x30243c)[_0x178688(0x1d2)](0x0);
                }), runs(function () {
                    var _0x1d684b = _0x687a;
                    _0xea1b17 = ![], _0x270d8a = null, _0x447625 = -0x1, brackets[_0x1d684b(0x1d0)]['getMenuPosition'](_0x1d684b(0x1f1), function (_0x487e4b, _0x4b982b, _0x28f1fc) {
                        _0xea1b17 = !![], _0x30243c = _0x487e4b, _0x270d8a = _0x4b982b, _0x447625 = _0x28f1fc;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x159f7e = _0x687a;
                    expect(_0x30243c)[_0x159f7e(0x1d2)](0x0), expect(_0x270d8a)[_0x159f7e(0x1d2)](_0x508fab), expect(_0x447625)['toBe'](0x0);
                }), runs(function () {
                    var _0x8c566b = _0x687a;
                    _0xea1b17 = ![], brackets[_0x8c566b(0x1d0)][_0x8c566b(0x1d4)](_0x8c566b(0x1f1), function (_0x158a9f, _0xa119) {
                        _0xea1b17 = !![], _0x30243c = _0x158a9f, _0xc34ed7 = _0xa119;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x589034 = _0x687a;
                    expect(_0x30243c)[_0x589034(0x1d2)](0x0), expect(_0xc34ed7)[_0x589034(0x1d2)]('Brackets\x20Test\x20Command\x20Custom\x201');
                }), runs(function () {
                    var _0x30e413 = _0x687a;
                    _0xea1b17 = ![], brackets['app']['removeMenuItem'](_0x30e413(0x1f1), function (_0xb03bc9) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                });
            }), it(_0x24ac4d(0x1f2), function () {
                _0x30243c = 0x0, runs(function () {
                    var _0x1f58da = _0x687a;
                    _0xea1b17 = ![], brackets[_0x1f58da(0x1d0)]['addMenuItem'](_0x508fab, _0x1f58da(0x1f3), 'Menu-test.command02', '', '', _0x1f58da(0x1e3), '', function (_0x465740) {
                        _0xea1b17 = !![], _0x30243c = _0x465740;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    expect(_0x30243c)['toBe'](0x0);
                }), runs(function () {
                    var _0x3e13cc = _0x687a;
                    _0xea1b17 = ![], _0x270d8a = null, _0x447625 = -0x1, brackets[_0x3e13cc(0x1d0)][_0x3e13cc(0x1da)](_0x3e13cc(0x1f4), function (_0x164445, _0x239cda, _0x44eefc) {
                        _0xea1b17 = !![], _0x30243c = _0x164445, _0x270d8a = _0x239cda, _0x447625 = _0x44eefc;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x4bd65f = _0x687a;
                    expect(_0x30243c)[_0x4bd65f(0x1d2)](0x0), expect(_0x270d8a)[_0x4bd65f(0x1d2)](_0x508fab), expect(_0x447625)[_0x4bd65f(0x1d2)](0x1);
                }), runs(function () {
                    var _0x3e13ac = _0x687a;
                    _0xea1b17 = ![], brackets[_0x3e13ac(0x1d0)][_0x3e13ac(0x1d4)](_0x3e13ac(0x1f4), function (_0x3f850d, _0x2e89f5) {
                        _0xea1b17 = !![], _0x30243c = _0x3f850d, _0xc34ed7 = _0x2e89f5;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x4a9bc7 = _0x687a;
                    expect(_0x30243c)[_0x4a9bc7(0x1d2)](0x0), expect(_0xc34ed7)[_0x4a9bc7(0x1d2)]('Brackets\x20Test\x20Command\x20Custom\x202');
                }), runs(function () {
                    var _0x518c4d = _0x687a;
                    _0xea1b17 = ![], brackets[_0x518c4d(0x1d0)][_0x518c4d(0x1ee)](_0x518c4d(0x1f4), function (_0x461207) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                });
            }), it(_0x24ac4d(0x1f5), function () {
                _0x30243c = 0x0, runs(function () {
                    var _0x54de84 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x54de84(0x1d0)][_0x54de84(0x1ec)](_0x508fab, 'Brackets\x20Test\x20Command\x20Custom\x203', 'Menu-test.command03', '', '', _0x54de84(0x1ea), _0x229be5, function (_0x5376ad) {
                        _0xea1b17 = !![], _0x30243c = _0x5376ad;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x5b784d = _0x687a;
                    expect(_0x30243c)[_0x5b784d(0x1d2)](0x0);
                }), runs(function () {
                    var _0x4ccc16 = _0x687a;
                    _0xea1b17 = ![], _0x270d8a = null, _0x447625 = -0x1, brackets['app']['getMenuPosition'](_0x4ccc16(0x1f6), function (_0x1f5372, _0x3f5487, _0x190f69) {
                        _0xea1b17 = !![], _0x30243c = _0x1f5372, _0x270d8a = _0x3f5487, _0x447625 = _0x190f69;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x5a641a = _0x687a;
                    expect(_0x30243c)[_0x5a641a(0x1d2)](0x0), expect(_0x270d8a)['toBe'](_0x508fab), expect(_0x447625)[_0x5a641a(0x1d2)](0x1);
                }), runs(function () {
                    var _0x3605e7 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x3605e7(0x1d0)][_0x3605e7(0x1d4)](_0x3605e7(0x1f6), function (_0x221121, _0x4ac897) {
                        _0xea1b17 = !![], _0x30243c = _0x221121, _0xc34ed7 = _0x4ac897;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x48ab26 = _0x687a;
                    expect(_0x30243c)[_0x48ab26(0x1d2)](0x0), expect(_0xc34ed7)[_0x48ab26(0x1d2)](_0x48ab26(0x1f7));
                }), runs(function () {
                    var _0x3b8fde = _0x687a;
                    _0xea1b17 = ![], brackets[_0x3b8fde(0x1d0)][_0x3b8fde(0x1ee)](_0x3b8fde(0x1f6), function (_0x5ae2f3) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                });
            }), it(_0x24ac4d(0x1f8), function () {
                _0x30243c = 0x0, runs(function () {
                    var _0x385221 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x385221(0x1d0)]['addMenuItem'](_0x508fab, _0x385221(0x1f9), _0x385221(0x1fa), '', '', 'before', _0x229be5, function (_0x5e8548) {
                        _0xea1b17 = !![], _0x30243c = _0x5e8548;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x424e95 = _0x687a;
                    expect(_0x30243c)[_0x424e95(0x1d2)](0x0);
                }), runs(function () {
                    var _0x170454 = _0x687a;
                    _0xea1b17 = ![], _0x270d8a = null, _0x447625 = -0x1, brackets[_0x170454(0x1d0)]['getMenuPosition'](_0x170454(0x1fa), function (_0x1cf243, _0x25c70d, _0x4c0a43) {
                        _0xea1b17 = !![], _0x30243c = _0x1cf243, _0x270d8a = _0x25c70d, _0x447625 = _0x4c0a43;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0xb5a705 = _0x687a;
                    expect(_0x30243c)[_0xb5a705(0x1d2)](0x0), expect(_0x270d8a)['toBe'](_0x508fab), expect(_0x447625)['toBe'](0x0);
                }), runs(function () {
                    var _0xe94ec1 = _0x687a;
                    _0xea1b17 = ![], brackets['app'][_0xe94ec1(0x1d4)](_0xe94ec1(0x1fa), function (_0x4ba7c5, _0x1fb02e) {
                        _0xea1b17 = !![], _0x30243c = _0x4ba7c5, _0xc34ed7 = _0x1fb02e;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x4338a7 = _0x687a;
                    expect(_0x30243c)[_0x4338a7(0x1d2)](0x0), expect(_0xc34ed7)[_0x4338a7(0x1d2)](_0x4338a7(0x1f9));
                }), runs(function () {
                    var _0x54ec08 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x54ec08(0x1d0)][_0x54ec08(0x1ee)](_0x54ec08(0x1fa), function (_0x1046d4) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                });
            }), it(_0x24ac4d(0x1fb), function () {
                _0x30243c = 0x0, runs(function () {
                    var _0xe0c3c5 = _0x687a;
                    _0xea1b17 = ![], brackets[_0xe0c3c5(0x1d0)][_0xe0c3c5(0x1ec)](_0x508fab, 'Brackets\x20Test\x20Command\x20Custom\x205', 'Menu-test.command05', '', '', _0xe0c3c5(0x1e5), _0xe0c3c5(0x1eb), function (_0x4545f4) {
                        _0xea1b17 = !![], _0x30243c = _0x4545f4;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x18124d = _0x687a;
                    expect(_0x30243c)[_0x18124d(0x1d2)](brackets['fs']['ERR_NOT_FOUND']);
                }), runs(function () {
                    var _0x39389b = _0x687a;
                    _0xea1b17 = ![], _0x270d8a = null, _0x447625 = -0x1, brackets[_0x39389b(0x1d0)]['getMenuPosition'](_0x39389b(0x1fc), function (_0x52edc0, _0x4d72fa, _0x57a51f) {
                        _0xea1b17 = !![], _0x30243c = _0x52edc0, _0x270d8a = _0x4d72fa, _0x447625 = _0x57a51f;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x5cc350 = _0x687a;
                    expect(_0x30243c)[_0x5cc350(0x1d2)](0x0), expect(_0x270d8a)[_0x5cc350(0x1d2)](_0x508fab), expect(_0x447625)['toBe'](0x1);
                }), runs(function () {
                    var _0x1bce83 = _0x687a;
                    _0xea1b17 = ![], brackets[_0x1bce83(0x1d0)][_0x1bce83(0x1d4)](_0x1bce83(0x1fc), function (_0x1f249a, _0x1727e5) {
                        _0xea1b17 = !![], _0x30243c = _0x1f249a, _0xc34ed7 = _0x1727e5;
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                }), runs(function () {
                    var _0x4f91b6 = _0x687a;
                    expect(_0x30243c)[_0x4f91b6(0x1d2)](0x0), expect(_0xc34ed7)[_0x4f91b6(0x1d2)](_0x4f91b6(0x1fd));
                }), runs(function () {
                    var _0x1a128e = _0x687a;
                    _0xea1b17 = ![], brackets['app']['removeMenuItem'](_0x1a128e(0x1fc), function (_0x17f7ec) {
                        _0xea1b17 = !![];
                    });
                }), waitsFor(function () {
                    return _0xea1b17;
                });
            }), it(_0x24ac4d(0x1fe), function () {
                var _0xec2aaa = _0x24ac4d, _0x4860e8, _0x5a8ac0, _0x2e1610, _0x4591b3, _0x1312c7 = _0xec2aaa(0x1ff);
                runs(function () {
                    var _0x126852 = _0xec2aaa;
                    brackets[_0x126852(0x1d0)]['addMenu']('Section\x20Test', _0x126852(0x1ff), '', '', function (_0x386159) {
                    }), brackets[_0x126852(0x1d0)][_0x126852(0x1ec)](_0x1312c7, _0x126852(0x200), _0x126852(0x201), '', '', '', '', function (_0x5db0ed) {
                    }), brackets[_0x126852(0x1d0)][_0x126852(0x1ec)](_0x1312c7, _0x126852(0x202), _0x126852(0x203), '', '', '', '', function (_0x237b8d) {
                    }), brackets[_0x126852(0x1d0)][_0x126852(0x1ec)](_0x1312c7, '---', String(Date[_0x126852(0x204)]()), '', '', '', '', function (_0x44ab3c) {
                    }), brackets[_0x126852(0x1d0)][_0x126852(0x1ec)](_0x1312c7, _0x126852(0x205), 'Menu-test.command12', '', '', '', '', function (_0x576eaf) {
                    }), brackets[_0x126852(0x1d0)][_0x126852(0x1ec)](_0x1312c7, _0x126852(0x206), _0x126852(0x207), '', '', '', '', function (_0x1831ef) {
                    });
                }), runs(function () {
                    var _0x43ffd6 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x43ffd6(0x1d0)]['addMenuItem'](_0x1312c7, 'Command\x2014', _0x43ffd6(0x208), '', '', 'lastInSection', _0x43ffd6(0x201), function (_0x49ed72) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x49ed72;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x200f0c = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x200f0c(0x1d0)]['getMenuPosition'](_0x200f0c(0x208), function (_0x3df0f1, _0x346fed, _0x5eced5) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x3df0f1, _0x4591b3 = _0x346fed, _0x2e1610 = _0x5eced5;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x4dbba9 = _0xec2aaa;
                    expect(_0x5a8ac0)['toBe'](0x0), expect(_0x2e1610)[_0x4dbba9(0x1d2)](0x2);
                }), runs(function () {
                    var _0x4b9540 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x4b9540(0x1d0)][_0x4b9540(0x1ec)](_0x1312c7, _0x4b9540(0x209), _0x4b9540(0x20a), '', '', _0x4b9540(0x20b), _0x4b9540(0x207), function (_0x4388d6) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x4388d6;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x4b4764 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x4b4764(0x1d0)][_0x4b4764(0x1da)](_0x4b4764(0x20a), function (_0x4bff8f, _0x3ed94b, _0x43a5b1) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x4bff8f, _0x4591b3 = _0x3ed94b, _0x2e1610 = _0x43a5b1;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x2f6b09 = _0xec2aaa;
                    expect(_0x5a8ac0)[_0x2f6b09(0x1d2)](0x0), expect(_0x2e1610)[_0x2f6b09(0x1d2)](0x6);
                }), runs(function () {
                    var _0x381050 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x381050(0x1d0)]['addMenuItem'](_0x1312c7, _0x381050(0x20c), _0x381050(0x20d), '', '', 'firstInSection', _0x381050(0x203), function (_0x1661f0) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x1661f0;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x28b771 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x28b771(0x1d0)][_0x28b771(0x1da)](_0x28b771(0x20d), function (_0x5d840f, _0x1aa4cf, _0x38024d) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x5d840f, _0x4591b3 = _0x1aa4cf, _0x2e1610 = _0x38024d;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    expect(_0x5a8ac0)['toBe'](0x0), expect(_0x2e1610)['toBe'](0x0);
                }), runs(function () {
                    var _0x4ac464 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x4ac464(0x1d0)][_0x4ac464(0x1ec)](_0x1312c7, _0x4ac464(0x20e), 'Menu-test.command17', '', '', _0x4ac464(0x20f), _0x4ac464(0x210), function (_0xfd1b39) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0xfd1b39;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x55c932 = _0xec2aaa;
                    _0x4860e8 = ![], _0x5a8ac0 = 0x0, brackets[_0x55c932(0x1d0)][_0x55c932(0x1da)]('Menu-test.command17', function (_0x24e270, _0x5d52f2, _0xfe5e30) {
                        _0x4860e8 = !![], _0x5a8ac0 = _0x24e270, _0x4591b3 = _0x5d52f2, _0x2e1610 = _0xfe5e30;
                    });
                }), waitsFor(function () {
                    return _0x4860e8;
                }), runs(function () {
                    var _0x170d4a = _0xec2aaa;
                    expect(_0x5a8ac0)['toBe'](0x0), expect(_0x2e1610)[_0x170d4a(0x1d2)](0x5);
                }), runs(function () {
                    var _0x5b9e6c = _0xec2aaa;
                    brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)](_0x5b9e6c(0x201), function (_0x1e14e5) {
                    }), brackets[_0x5b9e6c(0x1d0)]['removeMenuItem'](_0x5b9e6c(0x203), function (_0x1e6c90) {
                    }), brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)]('Menu-test.command12', function (_0x3cce51) {
                    }), brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)](_0x5b9e6c(0x207), function (_0x2be206) {
                    }), brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)](_0x5b9e6c(0x208), function (_0x4e2f9a) {
                    }), brackets['app'][_0x5b9e6c(0x1ee)](_0x5b9e6c(0x20a), function (_0xac397d) {
                    }), brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)](_0x5b9e6c(0x20d), function (_0x479f70) {
                    }), brackets[_0x5b9e6c(0x1d0)][_0x5b9e6c(0x1ee)]('Menu-test.command17', function (_0x433952) {
                    }), brackets[_0x5b9e6c(0x1d0)]['removeMenu'](_0x1312c7, function (_0x4f4c67) {
                    });
                });
            });
        }), describe(_0x586508(0x1d5), function () {
            var _0x4726ac = _0x586508, _0x1f184d = ![], _0x41a677 = 0x0;
            it(_0x4726ac(0x211), function () {
                runs(function () {
                    var _0x34a637 = _0x687a;
                    brackets['app'][_0x34a637(0x1d1)](_0xe734ba, _0x508fab, '', '', function (_0x138392) {
                        _0x1f184d = !![], _0x41a677 = _0x138392;
                    });
                }), waitsFor(function () {
                    return _0x1f184d;
                }), runs(function () {
                    var _0x6a28f8 = _0x687a;
                    expect(_0x41a677)[_0x6a28f8(0x1d2)](0x0);
                }), runs(function () {
                    var _0x1665a6 = _0x687a;
                    _0x1f184d = ![], brackets[_0x1665a6(0x1d0)]['removeMenu'](_0x508fab, function (_0x1512e1) {
                        _0x1f184d = !![], _0x41a677 = _0x1512e1;
                    });
                }), waitsFor(function () {
                    return _0x1f184d;
                }), runs(function () {
                    var _0x1be0bc = _0x687a;
                    expect(_0x41a677)[_0x1be0bc(0x1d2)](0x0);
                });
            }), it(_0x4726ac(0x1ef), function () {
                _0x1f184d = ![], _0x41a677 = 0x0, runs(function () {
                    var _0x380aac = _0x687a;
                    brackets[_0x380aac(0x1d0)][_0x380aac(0x1d5)](0x2a, function (_0x227211) {
                        _0x1f184d = !![], _0x41a677 = _0x227211;
                    });
                }), waitsFor(function () {
                    return _0x1f184d;
                }), runs(function () {
                    var _0x48302b = _0x687a;
                    expect(_0x41a677)[_0x48302b(0x1d2)](brackets['fs'][_0x48302b(0x212)]);
                });
            }), it(_0x4726ac(0x213), function () {
                _0x1f184d = ![], _0x41a677 = 0x0, runs(function () {
                    var _0x409138 = _0x687a;
                    brackets[_0x409138(0x1d0)][_0x409138(0x1d5)](_0x508fab, function (_0x1cf780) {
                        _0x1f184d = !![], _0x41a677 = _0x1cf780;
                    });
                }), waitsFor(function () {
                    return _0x1f184d;
                }), runs(function () {
                    var _0x4c2a88 = _0x687a;
                    expect(_0x41a677)[_0x4c2a88(0x1d2)](brackets['fs'][_0x4c2a88(0x214)]);
                });
            });
        }), describe(_0x586508(0x1ee), function () {
            var _0x55b070 = _0x586508, _0x7e817f = _0x229be5 + '1';
            beforeEach(function () {
                var _0x100052 = ![], _0x258f7c = 0x0;
                runs(function () {
                    var _0x3ca9e9 = _0x687a;
                    brackets[_0x3ca9e9(0x1d0)]['addMenu'](_0xe734ba, _0x508fab, '', '', function (_0xb7269e) {
                        var _0x28821e = _0x3ca9e9;
                        _0xb7269e ? (_0x100052 = !![], _0x258f7c = _0xb7269e) : brackets['app'][_0x28821e(0x1ec)](_0x508fab, _0x327a33, _0x7e817f, '', '', '', '', function (_0x5f2099) {
                            _0x100052 = !![], _0x258f7c = _0x5f2099;
                        });
                    });
                }), waitsFor(function () {
                    return _0x100052;
                }), runs(function () {
                    expect(_0x258f7c)['toBe'](0x0);
                });
            }), afterEach(function () {
                var _0x629337 = ![], _0x33c835 = 0x0;
                runs(function () {
                    var _0x5da36f = _0x687a;
                    brackets[_0x5da36f(0x1d0)][_0x5da36f(0x1ee)](_0x7e817f, function (_0x4ba947) {
                        var _0x5734e1 = _0x5da36f;
                        brackets['app'][_0x5734e1(0x1d5)](_0x508fab, function (_0x3810cc) {
                            _0x629337 = !![], _0x33c835 = _0x3810cc;
                        });
                    });
                }), waitsFor(function () {
                    return _0x629337;
                }), runs(function () {
                    expect(_0x33c835)['toBe'](0x0);
                });
            }), it(_0x55b070(0x215), function () {
                var _0x127cf7 = _0x55b070, _0x4fd66f = ![], _0x2b0710 = 0x0;
                runs(function () {
                    var _0x2ba787 = _0x687a;
                    brackets[_0x2ba787(0x1d0)][_0x2ba787(0x1ee)](_0x7e817f, function (_0xd9760a) {
                        _0x4fd66f = !![], _0x2b0710 = _0xd9760a;
                    });
                }), waitsFor(function () {
                    return _0x4fd66f;
                }, _0x127cf7(0x216)), runs(function () {
                    var _0x2d5be6 = _0x127cf7;
                    expect(_0x2b0710)[_0x2d5be6(0x1d2)](0x0);
                }), runs(function () {
                    _0x4fd66f = ![], brackets['app']['getMenuTitle'](_0x7e817f, function (_0x71c468, _0x2947af) {
                        _0x4fd66f = !![], _0x2b0710 = _0x71c468;
                    });
                }), waitsFor(function () {
                    return _0x4fd66f;
                }, _0x127cf7(0x217)), runs(function () {
                    var _0x54daab = _0x127cf7;
                    expect(_0x2b0710)['toBe'](brackets['fs'][_0x54daab(0x214)]);
                });
            }), it(_0x55b070(0x1ef), function () {
                var _0x4c3f1e = _0x55b070, _0x5ac9b4 = ![], _0x41664b = 0x0;
                runs(function () {
                    var _0x1fee22 = _0x687a;
                    brackets[_0x1fee22(0x1d0)]['removeMenuItem'](0x2a, function (_0x3feadb) {
                        _0x5ac9b4 = !![], _0x41664b = _0x3feadb;
                    });
                }), waitsFor(function () {
                    return _0x5ac9b4;
                }, _0x4c3f1e(0x216)), runs(function () {
                    var _0x473f73 = _0x4c3f1e;
                    expect(_0x41664b)[_0x473f73(0x1d2)](brackets['fs'][_0x473f73(0x212)]);
                });
            }), it(_0x55b070(0x218), function () {
                var _0x4de354 = _0x55b070, _0x532567 = ![], _0x6d8a84 = 0x0;
                runs(function () {
                    var _0x4b4bcd = _0x687a;
                    brackets['app'][_0x4b4bcd(0x1ee)](_0x7e817f + _0x4b4bcd(0x219), function (_0x4780a8) {
                        _0x532567 = !![], _0x6d8a84 = _0x4780a8;
                    });
                }), waitsFor(function () {
                    return _0x532567;
                }, _0x4de354(0x216)), runs(function () {
                    var _0x5cdf3b = _0x4de354;
                    expect(_0x6d8a84)[_0x5cdf3b(0x1d2)](brackets['fs'][_0x5cdf3b(0x214)]);
                });
            });
        }), describe(_0x586508(0x21a), function () {
            var _0x22a0a4 = _0x586508, _0x26f23e = _0x229be5 + '2';
            beforeEach(function () {
                var _0x319854 = ![], _0x12629a = 0x0;
                runs(function () {
                    var _0x105313 = _0x687a;
                    brackets[_0x105313(0x1d0)][_0x105313(0x1d1)](_0xe734ba, _0x508fab, '', '', function (_0x1f4939) {
                        var _0x477779 = _0x105313;
                        _0x1f4939 ? (_0x319854 = !![], _0x12629a = _0x1f4939) : brackets[_0x477779(0x1d0)][_0x477779(0x1ec)](_0x508fab, _0x327a33, _0x26f23e, '', '', '', '', function (_0x303069) {
                            _0x319854 = !![], _0x12629a = _0x303069;
                        });
                    });
                }), waitsFor(function () {
                    return _0x319854;
                }), runs(function () {
                    var _0x2f81dc = _0x687a;
                    expect(_0x12629a)[_0x2f81dc(0x1d2)](0x0);
                });
            }), afterEach(function () {
                var _0x49ba80 = ![], _0x403d2e = 0x0;
                runs(function () {
                    var _0x274b8e = _0x687a;
                    brackets[_0x274b8e(0x1d0)][_0x274b8e(0x1ee)](_0x26f23e, function (_0x17ffb1) {
                        var _0x23c89c = _0x274b8e;
                        brackets['app'][_0x23c89c(0x1d5)](_0x508fab, function (_0x47958c) {
                            _0x49ba80 = !![], _0x403d2e = _0x47958c;
                        });
                    });
                }), waitsFor(function () {
                    return _0x49ba80;
                }), runs(function () {
                    expect(_0x403d2e)['toBe'](0x0);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20enabled\x20state', function () {
                var _0x3f6fb5 = ![], _0x31daf4 = ![], _0x31e228 = 0x0;
                runs(function () {
                    var _0x42c3ca = _0x687a;
                    brackets['app'][_0x42c3ca(0x21b)](_0x26f23e, function (_0x17992c, _0x2f79a6, _0x329888) {
                        _0x3f6fb5 = !![], _0x31daf4 = _0x2f79a6, _0x31e228 = _0x17992c;
                    });
                }), waitsFor(function () {
                    return _0x3f6fb5;
                }), runs(function () {
                    var _0x5f38b3 = _0x687a;
                    expect(_0x31e228)[_0x5f38b3(0x1d2)](0x0);
                }), runs(function () {
                    var _0x3493ee = _0x687a;
                    _0x3f6fb5 = ![], brackets[_0x3493ee(0x1d0)][_0x3493ee(0x21c)](_0x26f23e, ![], ![], function (_0x3d0c51) {
                        _0x3f6fb5 = !![], _0x31e228 = _0x3d0c51;
                    });
                }), waitsFor(function () {
                    return _0x3f6fb5;
                }), runs(function () {
                    var _0x417865 = _0x687a;
                    expect(_0x31e228)[_0x417865(0x1d2)](0x0);
                }), runs(function () {
                    var _0x1d18d1 = _0x687a;
                    _0x3f6fb5 = ![], brackets[_0x1d18d1(0x1d0)][_0x1d18d1(0x21b)](_0x26f23e, function (_0x27112a, _0x4b0f7b, _0x543dcf) {
                        _0x3f6fb5 = !![], _0x31daf4 = _0x4b0f7b, _0x31e228 = _0x27112a;
                    });
                }), waitsFor(function () {
                    return _0x3f6fb5;
                }), runs(function () {
                    var _0x24a857 = _0x687a;
                    expect(_0x31e228)[_0x24a857(0x1d2)](0x0), expect(_0x31daf4)[_0x24a857(0x1d2)](![]);
                });
            }), it(_0x22a0a4(0x21d), function () {
                var _0x1d5d38 = ![], _0x21865e = ![], _0x18659a = 0x0;
                runs(function () {
                    var _0x2ebc9a = _0x687a;
                    brackets['app'][_0x2ebc9a(0x21b)](_0x26f23e, function (_0x149801, _0x5b3e67, _0x2969fa) {
                        _0x1d5d38 = !![], _0x21865e = _0x2969fa, _0x18659a = _0x149801;
                    });
                }), waitsFor(function () {
                    return _0x1d5d38;
                }), runs(function () {
                    var _0x410d6b = _0x687a;
                    expect(_0x18659a)[_0x410d6b(0x1d2)](0x0), expect(_0x21865e)[_0x410d6b(0x1d2)](![]);
                }), runs(function () {
                    var _0x2f8a33 = _0x687a;
                    _0x1d5d38 = ![], brackets[_0x2f8a33(0x1d0)]['setMenuItemState'](_0x26f23e, !![], !![], function (_0x3ebef2) {
                        _0x1d5d38 = !![], _0x18659a = _0x3ebef2;
                    });
                }), waitsFor(function () {
                    return _0x1d5d38;
                }), runs(function () {
                    var _0x59349e = _0x687a;
                    expect(_0x18659a)[_0x59349e(0x1d2)](0x0);
                }), runs(function () {
                    var _0x39e4f3 = _0x687a;
                    _0x1d5d38 = ![], brackets[_0x39e4f3(0x1d0)][_0x39e4f3(0x21b)](_0x26f23e, function (_0xe4fb19, _0x1fce6c, _0x4bba85) {
                        _0x1d5d38 = !![], _0x21865e = _0x4bba85, _0x18659a = _0xe4fb19;
                    });
                }), waitsFor(function () {
                    return _0x1d5d38;
                }), runs(function () {
                    var _0x3d51a2 = _0x687a;
                    expect(_0x18659a)[_0x3d51a2(0x1d2)](0x0);
                });
            }), it(_0x22a0a4(0x1ef), function () {
                var _0x200879 = ![], _0x520954 = 0x0;
                runs(function () {
                    var _0x5c8f0d = _0x687a;
                    brackets['app'][_0x5c8f0d(0x21c)](_0x26f23e, _0x5c8f0d(0x21e), _0x5c8f0d(0x21f), function (_0x34aca4) {
                        _0x200879 = !![], _0x520954 = _0x34aca4;
                    });
                }), waitsFor(function () {
                    return _0x200879;
                }), runs(function () {
                    var _0x32d4cc = _0x687a;
                    expect(_0x520954)[_0x32d4cc(0x1d2)](brackets['fs'][_0x32d4cc(0x212)]);
                });
            });
        }), describe('getMenuTitle\x20setMenuTitle', function () {
            var _0x391b43 = _0x586508;
            beforeEach(function () {
                var _0x1dee7e = ![], _0x50a22e = 0x0;
                runs(function () {
                    var _0x3bbd3d = _0x687a;
                    brackets['app'][_0x3bbd3d(0x1d1)](_0xe734ba, _0x508fab, '', '', function (_0x31b67e) {
                        var _0x13e1fa = _0x3bbd3d;
                        _0x31b67e ? (_0x1dee7e = !![], _0x50a22e = _0x31b67e) : brackets['app'][_0x13e1fa(0x1ec)](_0x508fab, _0x327a33, _0x229be5, '', '', '', '', function (_0x21eae9) {
                            _0x1dee7e = !![], _0x50a22e = _0x21eae9;
                        });
                    });
                }), waitsFor(function () {
                    return _0x1dee7e;
                }), runs(function () {
                    var _0x37d5bc = _0x687a;
                    expect(_0x50a22e)[_0x37d5bc(0x1d2)](0x0);
                });
            }), afterEach(function () {
                var _0x5359f2 = ![], _0x5331f6 = 0x0;
                runs(function () {
                    var _0x2d1587 = _0x687a;
                    brackets[_0x2d1587(0x1d0)][_0x2d1587(0x1ee)](_0x229be5, function (_0x7115fe) {
                        var _0x26a829 = _0x2d1587;
                        _0x7115fe ? (_0x5359f2 = !![], _0x5331f6 = _0x7115fe) : brackets['app'][_0x26a829(0x1d5)](_0x508fab, function (_0x98c7af) {
                            _0x5359f2 = !![], _0x5331f6 = _0x98c7af;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5359f2;
                }), runs(function () {
                    var _0x181f21 = _0x687a;
                    expect(_0x5331f6)[_0x181f21(0x1d2)](0x0);
                });
            }), it(_0x391b43(0x220), function () {
                var _0x11ee1a = _0x391b43, _0x4ceca5 = _0x11ee1a(0x221), _0x11d9c4 = ![], _0x35d07a = 0x0, _0x59e1bd;
                runs(function () {
                    var _0x551330 = _0x11ee1a;
                    brackets[_0x551330(0x1d0)][_0x551330(0x1d4)](_0x508fab, function (_0x4c0e2c, _0x33b675) {
                        _0x11d9c4 = !![], _0x59e1bd = _0x33b675, _0x35d07a = _0x4c0e2c;
                    });
                }), waitsFor(function () {
                    return _0x11d9c4;
                }), runs(function () {
                    var _0x214d06 = _0x11ee1a;
                    expect(_0x35d07a)[_0x214d06(0x1d2)](0x0), expect(_0x59e1bd)[_0x214d06(0x1d2)](_0xe734ba);
                }), runs(function () {
                    var _0x582a80 = _0x11ee1a;
                    _0x11d9c4 = ![], brackets['app'][_0x582a80(0x222)](_0x508fab, _0x4ceca5, function (_0x3e0e12) {
                        _0x11d9c4 = !![], _0x35d07a = _0x3e0e12;
                    });
                }), waitsFor(function () {
                    return _0x11d9c4;
                }), runs(function () {
                    var _0x1ddb2f = _0x11ee1a;
                    expect(_0x35d07a)[_0x1ddb2f(0x1d2)](0x0);
                }), runs(function () {
                    var _0x3a075c = _0x11ee1a;
                    _0x11d9c4 = ![], brackets[_0x3a075c(0x1d0)][_0x3a075c(0x1d4)](_0x508fab, function (_0x26b29d, _0x2d04c1) {
                        _0x11d9c4 = !![], _0x59e1bd = _0x2d04c1, _0x35d07a = _0x26b29d;
                    });
                }), waitsFor(function () {
                    return _0x11d9c4;
                }), runs(function () {
                    var _0x25823c = _0x11ee1a;
                    expect(_0x35d07a)[_0x25823c(0x1d2)](0x0), expect(_0x59e1bd)[_0x25823c(0x1d2)](_0x4ceca5);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20menu\x20item\x20title', function () {
                var _0x3321cb = 'New\x20Item\x20Title', _0x147711 = ![], _0x578a5a = 0x0, _0x403f9b;
                runs(function () {
                    var _0x5e263c = _0x687a;
                    brackets['app'][_0x5e263c(0x1d4)](_0x229be5, function (_0x1838ce, _0x1dfca4) {
                        _0x147711 = !![], _0x403f9b = _0x1dfca4, _0x578a5a = _0x1838ce;
                    });
                }), waitsFor(function () {
                    return _0x147711;
                }), runs(function () {
                    var _0x3f7e04 = _0x687a;
                    expect(_0x578a5a)[_0x3f7e04(0x1d2)](0x0), expect(_0x403f9b)['toBe'](_0x327a33);
                }), runs(function () {
                    var _0x30a1da = _0x687a;
                    _0x147711 = ![], brackets[_0x30a1da(0x1d0)][_0x30a1da(0x222)](_0x229be5, _0x3321cb, function (_0x9ba5c5) {
                        _0x147711 = !![], _0x578a5a = _0x9ba5c5;
                    });
                }), waitsFor(function () {
                    return _0x147711;
                }), runs(function () {
                    var _0x83e9ac = _0x687a;
                    expect(_0x578a5a)[_0x83e9ac(0x1d2)](0x0);
                }), runs(function () {
                    var _0x1367d8 = _0x687a;
                    _0x147711 = ![], brackets[_0x1367d8(0x1d0)][_0x1367d8(0x1d4)](_0x229be5, function (_0x389065, _0x1cbc6b) {
                        _0x147711 = !![], _0x403f9b = _0x1cbc6b, _0x578a5a = _0x389065;
                    });
                }), waitsFor(function () {
                    return _0x147711;
                }), runs(function () {
                    var _0x2eae66 = _0x687a;
                    expect(_0x578a5a)[_0x2eae66(0x1d2)](0x0), expect(_0x403f9b)[_0x2eae66(0x1d2)](_0x3321cb);
                });
            }), it(_0x391b43(0x1ef), function () {
                var _0x10a0f9 = ![], _0x3ef9b1 = 0x0;
                runs(function () {
                    var _0x45fe1f = _0x687a;
                    brackets[_0x45fe1f(0x1d0)][_0x45fe1f(0x222)](_0x229be5, 0x2a, function (_0x210945) {
                        _0x10a0f9 = !![], _0x3ef9b1 = _0x210945;
                    });
                }), waitsFor(function () {
                    return _0x10a0f9;
                }), runs(function () {
                    var _0x128d12 = _0x687a;
                    expect(_0x3ef9b1)[_0x128d12(0x1d2)](brackets['fs'][_0x128d12(0x212)]);
                });
            });
        }), it(_0x586508(0x223), function () {
            var _0x3d9ff3 = _0x586508, _0x4e4a91 = ![], _0x231331 = 0x0;
            runs(function () {
                var _0x4615c2 = _0x687a;
                brackets['app'][_0x4615c2(0x1d5)](_0x575f13, function (_0x50cbd3) {
                    _0x4e4a91 = !![], _0x231331 = _0x50cbd3;
                });
            }), waitsFor(function () {
                return _0x4e4a91;
            }), expect(_0x231331)[_0x3d9ff3(0x1d2)](0x0);
        });
    });
}));
