var _0x4382 = [
    'Command\x2012',
    'Menu-test.command12',
    'Command\x2013',
    'Menu-test.command13',
    'Command\x2014',
    'Menu-test.command14',
    'lastInSection',
    'Menu-test.command15',
    'Command\x2016',
    'Menu-test.command16',
    'firstInSection',
    'Menu-test.command11',
    'Command\x2017',
    'Menu-test.command17',
    'should\x20remove\x20a\x20menu',
    'should\x20return\x20an\x20error\x20if\x20the\x20menu\x20can\x27t\x20be\x20found',
    'should\x20remove\x20a\x20menu\x20item',
    'calling\x20getMenuTitle',
    'calling\x20removeMenuItem',
    'should\x20return\x20an\x20error\x20if\x20the\x20menu\x20item\x20can\x27t\x20be\x20found',
    'foo',
    'getMenuItemState',
    'should\x20be\x20able\x20to\x20set\x20checked\x20state',
    'setMenuItemState',
    'hello',
    'world',
    'should\x20be\x20able\x20to\x20set\x20menu\x20title',
    'New\x20Title',
    'setMenuTitle',
    'New\x20Item\x20Title',
    'should\x20remove\x20placeholder\x20menu',
    '355537ZkuPhr',
    '483188cgtgNj',
    '535180jUngHX',
    '1uMLIaQ',
    '863047pvaNhD',
    '549202VdjnwH',
    '65547oaQfvF',
    '6EtneSC',
    '1IDZXPX',
    '1879562THhxUn',
    'utils/Global',
    'placeholder',
    'test',
    'Item\x201',
    'should\x20have\x20a\x20brackets.app\x20namespace',
    'app',
    'toBeTruthy',
    'addMenu',
    'toBe',
    'should\x20add\x20a\x20menu',
    'getMenuTitle',
    'ERR_NOT_FOUND',
    'removeMenu',
    'should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed',
    'ERR_INVALID_PARAMS',
    'addMenu\x20(with\x20reference)',
    'should\x20add\x20new\x20menu\x20in\x20last\x20position\x20of\x20list',
    'menu-unittest1',
    'getMenuPosition',
    'toBeGreaterThan',
    'should\x20add\x20new\x20menu\x20after\x20reference\x20menu',
    'CustomFirst',
    'menu-unittest-first',
    'CustomAfter',
    'menu-unittest-after',
    'should\x20add\x20new\x20menu\x20before\x20reference\x20menu',
    'CustomBefore',
    'menu-unittest-before',
    'before',
    'menu-unittest-last',
    'should\x20add\x20new\x20menu\x20at\x20end\x20of\x20list\x20when\x20reference\x20menu\x20doesn\x27t\x20exist',
    'Custom4',
    'after',
    'NONEXISTANT',
    'menu-unittest4',
    'addMenuItem',
    'should\x20add\x20a\x20menu\x20item',
    'removeMenuItem',
    'addMenuItem\x20(with\x20reference)',
    'should\x20add\x20a\x20menu\x20item\x20in\x20first\x20position\x20of\x20menu',
    'Menu-test.command01',
    'Brackets\x20Test\x20Command\x20Custom\x201',
    'should\x20add\x20a\x20menu\x20item\x20in\x20last\x20position\x20of\x20menu',
    'Brackets\x20Test\x20Command\x20Custom\x202',
    'Menu-test.command02',
    'should\x20add\x20a\x20menu\x20item\x20after\x20the\x20referenced\x20menu\x20item',
    'Brackets\x20Test\x20Command\x20Custom\x203',
    'Menu-test.command03',
    'should\x20add\x20a\x20menu\x20item\x20before\x20the\x20referenced\x20menu\x20item',
    'Brackets\x20Test\x20Command\x20Custom\x204',
    'Menu-test.command04',
    'should\x20add\x20a\x20menu\x20item\x20at\x20the\x20end\x20when\x20reference\x20menu\x20item\x20doesn\x27t\x20exist',
    'Brackets\x20Test\x20Command\x20Custom\x205',
    'Menu-test.command05',
    'should\x20add\x20menu\x20items\x20to\x20beginning\x20and\x20end\x20of\x20menu\x20section',
    'menuitem-sectiontest',
    'Section\x20Test',
    'Menu-test.command10',
    'Command\x2011',
    '---'
];
function _0x1bc1(_0x4c25f7, _0x177fa4) {
    return _0x1bc1 = function (_0x43828c, _0x1bc18d) {
        _0x43828c = _0x43828c - 0xe0;
        var _0xd84f5c = _0x4382[_0x43828c];
        return _0xd84f5c;
    }, _0x1bc1(_0x4c25f7, _0x177fa4);
}
(function (_0xb8f445, _0x40e2c6) {
    var _0x190bc3 = _0x1bc1;
    while (!![]) {
        try {
            var _0x3c6ab0 = -parseInt(_0x190bc3(0xe0)) + parseInt(_0x190bc3(0xe1)) + -parseInt(_0x190bc3(0xe2)) + parseInt(_0x190bc3(0xe3)) * -parseInt(_0x190bc3(0xe4)) + -parseInt(_0x190bc3(0xe5)) + -parseInt(_0x190bc3(0xe6)) * -parseInt(_0x190bc3(0xe7)) + -parseInt(_0x190bc3(0xe8)) * -parseInt(_0x190bc3(0xe9));
            if (_0x3c6ab0 === _0x40e2c6)
                break;
            else
                _0xb8f445['push'](_0xb8f445['shift']());
        } catch (_0x3115f9) {
            _0xb8f445['push'](_0xb8f445['shift']());
        }
    }
}(_0x4382, 0x6e9ca), define(function (_0x50e704, _0x103ab2, _0x30f0c7) {
    'use strict';
    var _0x116ed2 = _0x1bc1;
    _0x50e704(_0x116ed2(0xea));
    if (brackets['inBrowser'])
        return;
    describe('Native\x20Menus', function () {
        var _0xfb2d85 = _0x116ed2, _0x835543 = _0xfb2d85(0xeb), _0x42c2ce = 'MENU', _0x141488 = 'TEST', _0x4b93dc = _0xfb2d85(0xec), _0x116602 = _0xfb2d85(0xed), _0x432c26 = 'item1';
        it(_0xfb2d85(0xee), function () {
            var _0x4e94df = _0xfb2d85, _0x3eb6fc = ![], _0x284a3e = 0x0;
            expect(brackets[_0x4e94df(0xef)])[_0x4e94df(0xf0)](), runs(function () {
                var _0x35551d = _0x4e94df;
                brackets[_0x35551d(0xef)][_0x35551d(0xf1)](_0x42c2ce, _0x835543, '', '', function (_0x408366) {
                    _0x3eb6fc = !![], _0x284a3e = _0x408366;
                });
            }), waitsFor(function () {
                return _0x3eb6fc;
            }), expect(_0x284a3e)[_0x4e94df(0xf2)](0x0);
        }), describe(_0xfb2d85(0xf1), function () {
            var _0x5d6714 = _0xfb2d85;
            it(_0x5d6714(0xf3), function () {
                var _0x40f55f = ![], _0x305f94 = 0x0, _0x3213ab;
                runs(function () {
                    var _0x16297e = _0x1bc1;
                    brackets[_0x16297e(0xef)][_0x16297e(0xf4)](_0x4b93dc, function (_0x3709fe) {
                        _0x40f55f = !![], _0x305f94 = _0x3709fe;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x138d15 = _0x1bc1;
                    expect(_0x305f94)[_0x138d15(0xf2)](brackets['fs'][_0x138d15(0xf5)]);
                }), runs(function () {
                    var _0x5dd40d = _0x1bc1;
                    _0x40f55f = ![], brackets[_0x5dd40d(0xef)]['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x221992) {
                        _0x40f55f = !![], _0x305f94 = _0x221992;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x1bf39d = _0x1bc1;
                    expect(_0x305f94)[_0x1bf39d(0xf2)](0x0);
                }), runs(function () {
                    var _0x3db747 = _0x1bc1;
                    _0x40f55f = ![], brackets['app'][_0x3db747(0xf4)](_0x4b93dc, function (_0x3478ed, _0x200b69) {
                        _0x40f55f = !![], _0x305f94 = _0x3478ed, _0x3213ab = _0x200b69;
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                }), runs(function () {
                    var _0x23cf1c = _0x1bc1;
                    expect(_0x305f94)[_0x23cf1c(0xf2)](0x0), expect(_0x3213ab)[_0x23cf1c(0xf2)](_0x141488);
                }), runs(function () {
                    var _0xb58edd = _0x1bc1;
                    _0x40f55f = ![], brackets['app'][_0xb58edd(0xf6)](_0x4b93dc, function (_0x20273c) {
                        _0x40f55f = !![];
                    });
                }), waitsFor(function () {
                    return _0x40f55f;
                });
            }), it(_0x5d6714(0xf7), function () {
                var _0x2dc8e7 = ![], _0x462f94 = 0x0;
                runs(function () {
                    var _0x37cca0 = _0x1bc1;
                    brackets['app'][_0x37cca0(0xf1)](_0x141488, _0x4b93dc, 0x2a, '', function (_0x9ac2a4) {
                        _0x2dc8e7 = !![], _0x462f94 = _0x9ac2a4;
                    });
                }), waitsFor(function () {
                    return _0x2dc8e7;
                }), runs(function () {
                    var _0x47e7d9 = _0x1bc1;
                    expect(_0x462f94)[_0x47e7d9(0xf2)](brackets['fs'][_0x47e7d9(0xf8)]);
                });
            });
        }), describe(_0xfb2d85(0xf9), function () {
            var _0xdcc690 = _0xfb2d85, _0x24758d = ![], _0xc81218 = 0x0, _0x83628c, _0x496bf6 = -0x1;
            beforeEach(function () {
                runs(function () {
                    var _0x27da92 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x27da92(0xef)][_0x27da92(0xf1)](_0x141488, _0x4b93dc, '', '', function (_0x5ce7eb) {
                        _0x24758d = !![], _0xc81218 = _0x5ce7eb;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x3933a4 = _0x1bc1;
                    expect(_0xc81218)[_0x3933a4(0xf2)](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x37ca1d = _0x1bc1;
                    _0x24758d = ![], brackets[_0x37ca1d(0xef)][_0x37ca1d(0xf6)](_0x4b93dc, function (_0x51d2eb) {
                        _0x24758d = !![], _0xc81218 = _0x51d2eb;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x44e2ab = _0x1bc1;
                    expect(_0xc81218)[_0x44e2ab(0xf2)](0x0);
                });
            }), it(_0xdcc690(0xfa), function () {
                _0xc81218 = 0x0, runs(function () {
                    var _0x152147 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x152147(0xef)][_0x152147(0xf1)]('Custom1', _0x152147(0xfb), '', '', function (_0x2c329a) {
                        _0x24758d = !![], _0xc81218 = _0x2c329a;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x22e78a = _0x1bc1;
                    expect(_0xc81218)[_0x22e78a(0xf2)](0x0);
                }), runs(function () {
                    var _0x4da8ca = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, brackets[_0x4da8ca(0xef)][_0x4da8ca(0xfc)](_0x4da8ca(0xfb), function (_0x1026ec, _0x5d876f, _0x2429e6) {
                        _0x24758d = !![], _0xc81218 = _0x1026ec, _0x83628c = _0x5d876f, _0x496bf6 = _0x2429e6;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x37d1c9 = _0x1bc1;
                    expect(_0xc81218)[_0x37d1c9(0xf2)](0x0), expect(_0x83628c)[_0x37d1c9(0xf2)](''), expect(_0x496bf6)[_0x37d1c9(0xfd)](0x0);
                }), runs(function () {
                    var _0x1beb45 = _0x1bc1;
                    _0x24758d = ![], brackets['app']['removeMenu'](_0x1beb45(0xfb), function (_0x55872e) {
                        _0x24758d = !![], _0xc81218 = _0x55872e;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x5151a8 = _0x1bc1;
                    expect(_0xc81218)[_0x5151a8(0xf2)](0x0);
                });
            }), it(_0xdcc690(0xfe), function () {
                var _0x153bb5 = -0x1;
                _0xc81218 = 0x0, runs(function () {
                    var _0x442a17 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x442a17(0xef)][_0x442a17(0xf1)](_0x442a17(0xff), _0x442a17(0x100), 'first', '', function (_0x3cb5b2) {
                        _0x24758d = !![], _0xc81218 = _0x3cb5b2;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x20850e = _0x1bc1;
                    expect(_0xc81218)[_0x20850e(0xf2)](0x0);
                }), runs(function () {
                    var _0x49b7fc = _0x1bc1;
                    _0x24758d = ![], brackets[_0x49b7fc(0xef)][_0x49b7fc(0xf1)](_0x49b7fc(0x101), 'menu-unittest-after', 'after', _0x49b7fc(0x100), function (_0x300495) {
                        _0x24758d = !![], _0xc81218 = _0x300495;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x582a18 = _0x1bc1;
                    expect(_0xc81218)[_0x582a18(0xf2)](0x0);
                }), runs(function () {
                    var _0x2b790d = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, _0x153bb5 = -0x1, brackets[_0x2b790d(0xef)][_0x2b790d(0xfc)](_0x2b790d(0x100), function (_0x5bc1e9, _0x219800, _0x99afdd) {
                        _0x24758d = !![], _0xc81218 = _0x5bc1e9, _0x83628c = _0x219800, _0x496bf6 = _0x99afdd, _0x153bb5 = _0x496bf6 + 0x1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x248979 = _0x1bc1;
                    expect(_0xc81218)['toBe'](0x0), expect(_0x83628c)[_0x248979(0xf2)]('');
                }), runs(function () {
                    var _0x244b75 = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, brackets[_0x244b75(0xef)][_0x244b75(0xfc)](_0x244b75(0x102), function (_0x26a07e, _0x405aad, _0x3b4f84) {
                        _0x24758d = !![], _0xc81218 = _0x26a07e, _0x83628c = _0x405aad, _0x496bf6 = _0x3b4f84;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0xdfcc40 = _0x1bc1;
                    expect(_0xc81218)[_0xdfcc40(0xf2)](0x0), expect(_0x83628c)[_0xdfcc40(0xf2)](''), expect(_0x496bf6)['toBe'](_0x153bb5);
                }), runs(function () {
                    var _0x4f3a12 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x4f3a12(0xef)]['removeMenu']('menu-unittest-first', function (_0x1e9b3b) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x3d39f8 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x3d39f8(0xef)][_0x3d39f8(0xf6)](_0x3d39f8(0x102), function (_0x10c484) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            }), it(_0xdcc690(0x103), function () {
                var _0x103376 = -0x1;
                _0xc81218 = 0x0, runs(function () {
                    var _0x5ecb09 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x5ecb09(0xef)][_0x5ecb09(0xf1)]('CustomLast', 'menu-unittest-last', 'last', '', function (_0x4a6663) {
                        _0x24758d = !![], _0xc81218 = _0x4a6663;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    expect(_0xc81218)['toBe'](0x0);
                }), runs(function () {
                    var _0x48762e = _0x1bc1;
                    _0x24758d = ![], brackets['app'][_0x48762e(0xf1)](_0x48762e(0x104), _0x48762e(0x105), _0x48762e(0x106), _0x48762e(0x107), function (_0x56321d) {
                        _0x24758d = !![], _0xc81218 = _0x56321d;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x26fe51 = _0x1bc1;
                    expect(_0xc81218)[_0x26fe51(0xf2)](0x0);
                }), runs(function () {
                    var _0x57de4b = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, _0x103376 = -0x1, brackets[_0x57de4b(0xef)][_0x57de4b(0xfc)](_0x57de4b(0x107), function (_0x468140, _0x53670b, _0x4cddfe) {
                        _0x24758d = !![], _0xc81218 = _0x468140, _0x83628c = _0x53670b, _0x496bf6 = _0x4cddfe, _0x103376 = _0x496bf6 - 0x1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x4eb916 = _0x1bc1;
                    expect(_0xc81218)[_0x4eb916(0xf2)](0x0), expect(_0x83628c)['toBe']('');
                }), runs(function () {
                    var _0xbe1735 = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, brackets[_0xbe1735(0xef)][_0xbe1735(0xfc)](_0xbe1735(0x105), function (_0x35472f, _0x5c5a7b, _0x4d232f) {
                        _0x24758d = !![], _0xc81218 = _0x35472f, _0x83628c = _0x5c5a7b, _0x496bf6 = _0x4d232f;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x20fb83 = _0x1bc1;
                    expect(_0xc81218)[_0x20fb83(0xf2)](0x0), expect(_0x83628c)['toBe'](''), expect(_0x496bf6)[_0x20fb83(0xf2)](_0x103376);
                }), runs(function () {
                    var _0x1d07dc = _0x1bc1;
                    _0x24758d = ![], brackets[_0x1d07dc(0xef)][_0x1d07dc(0xf6)](_0x1d07dc(0x107), function (_0x1012f6) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x1fda51 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x1fda51(0xef)]['removeMenu']('menu-unittest-before', function (_0x133bd3) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            }), it(_0xdcc690(0x108), function () {
                _0xc81218 = 0x0, runs(function () {
                    var _0x9a66f7 = _0x1bc1;
                    _0x24758d = ![], brackets[_0x9a66f7(0xef)][_0x9a66f7(0xf1)](_0x9a66f7(0x109), 'menu-unittest4', _0x9a66f7(0x10a), _0x9a66f7(0x10b), function (_0xebc43e) {
                        _0x24758d = !![], _0xc81218 = _0xebc43e;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x450231 = _0x1bc1;
                    expect(_0xc81218)[_0x450231(0xf2)](brackets['fs'][_0x450231(0xf5)]);
                }), runs(function () {
                    var _0x321b4c = _0x1bc1;
                    _0x24758d = ![], _0x83628c = null, _0x496bf6 = -0x1, brackets[_0x321b4c(0xef)][_0x321b4c(0xfc)](_0x321b4c(0x10c), function (_0x511bfc, _0x35d013, _0x1b7fe1) {
                        _0x24758d = !![], _0xc81218 = _0x511bfc, _0x83628c = _0x35d013, _0x496bf6 = _0x1b7fe1;
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                }), runs(function () {
                    var _0x5b7b72 = _0x1bc1;
                    expect(_0xc81218)[_0x5b7b72(0xf2)](0x0), expect(_0x83628c)[_0x5b7b72(0xf2)](''), expect(_0x496bf6)[_0x5b7b72(0xfd)](0x0);
                }), runs(function () {
                    var _0x58257b = _0x1bc1;
                    _0x24758d = ![], brackets['app']['removeMenu'](_0x58257b(0x10c), function (_0x1ef60d) {
                        _0x24758d = !![];
                    });
                }), waitsFor(function () {
                    return _0x24758d;
                });
            });
        }), describe(_0xfb2d85(0x10d), function () {
            var _0xd67442 = _0xfb2d85, _0x2b2143 = ![], _0x4c8479 = 0x0, _0x4325ac;
            beforeEach(function () {
                runs(function () {
                    var _0x33ee3f = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x33ee3f(0xef)][_0x33ee3f(0xf1)](_0x141488, _0x4b93dc, '', '', function (_0x30cb6a) {
                        _0x2b2143 = !![], _0x4c8479 = _0x30cb6a;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x3bfc71 = _0x1bc1;
                    expect(_0x4c8479)[_0x3bfc71(0xf2)](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x35498a = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x35498a(0xef)][_0x35498a(0xf6)](_0x4b93dc, function (_0xf82780) {
                        _0x2b2143 = !![], _0x4c8479 = _0xf82780;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0xde3320 = _0x1bc1;
                    expect(_0x4c8479)[_0xde3320(0xf2)](0x0);
                });
            }), it(_0xd67442(0x10e), function () {
                _0x4c8479 = 0x0, runs(function () {
                    _0x2b2143 = ![], brackets['app']['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x2abe3f) {
                        _0x2b2143 = !![], _0x4c8479 = _0x2abe3f;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x1c0b70 = _0x1bc1;
                    expect(_0x4c8479)[_0x1c0b70(0xf2)](0x0);
                }), runs(function () {
                    var _0x33c875 = _0x1bc1;
                    _0x2b2143 = ![], brackets[_0x33c875(0xef)][_0x33c875(0xf4)](_0x432c26, function (_0x410b99, _0x2af8d5) {
                        _0x2b2143 = !![], _0x4c8479 = _0x410b99, _0x4325ac = _0x2af8d5;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x5eaf61 = _0x1bc1;
                    expect(_0x4c8479)['toBe'](0x0), expect(_0x4325ac)[_0x5eaf61(0xf2)](_0x116602), _0x2b2143 = ![], brackets[_0x5eaf61(0xef)][_0x5eaf61(0x10f)](_0x432c26, function (_0x518b01) {
                        _0x2b2143 = !![];
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                });
            }), it(_0xd67442(0xf7), function () {
                runs(function () {
                    var _0x187bd9 = _0x1bc1;
                    _0x4c8479 = 0x0, _0x2b2143 = ![], brackets[_0x187bd9(0xef)]['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', 0x2a, '', '', function (_0x4a953e) {
                        _0x2b2143 = !![], _0x4c8479 = _0x4a953e;
                    });
                }), waitsFor(function () {
                    return _0x2b2143;
                }), runs(function () {
                    var _0x182d15 = _0x1bc1;
                    expect(_0x4c8479)[_0x182d15(0xf2)](brackets['fs'][_0x182d15(0xf8)]);
                });
            });
        }), describe(_0xfb2d85(0x110), function () {
            var _0x2e45b = _0xfb2d85, _0x39fddb = ![], _0x2a330d = 0x0, _0x3373e5, _0x4c496e = null, _0x55b883 = -0x1;
            beforeEach(function () {
                runs(function () {
                    var _0x3414ae = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x3414ae(0xef)][_0x3414ae(0xf1)](_0x141488, _0x4b93dc, '', '', function (_0x16ef11) {
                        _0x39fddb = !![], _0x2a330d = _0x16ef11;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0x0);
                }), runs(function () {
                    var _0x36de23 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x36de23(0xef)]['addMenuItem'](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x4453a5) {
                        _0x39fddb = !![], _0x2a330d = _0x4453a5;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0x0);
                });
            }), afterEach(function () {
                runs(function () {
                    var _0x31df22 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x31df22(0xef)][_0x31df22(0x10f)](_0x432c26, function (_0x7f6737) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x2f7a9b = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2f7a9b(0xef)]['removeMenu'](_0x4b93dc, function (_0x54b3f3) {
                        _0x39fddb = !![], _0x2a330d = _0x54b3f3;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    expect(_0x2a330d)['toBe'](0x0);
                });
            }), it(_0x2e45b(0x111), function () {
                _0x2a330d = 0x0, runs(function () {
                    var _0x31e211 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x31e211(0xef)][_0x31e211(0x10d)](_0x4b93dc, 'Brackets\x20Test\x20Command\x20Custom\x201', _0x31e211(0x112), '', '', 'first', '', function (_0x2d20c0) {
                        _0x39fddb = !![], _0x2a330d = _0x2d20c0;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x1b0f04 = _0x1bc1;
                    expect(_0x2a330d)[_0x1b0f04(0xf2)](0x0);
                }), runs(function () {
                    var _0x3a7a39 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -0x1, brackets[_0x3a7a39(0xef)][_0x3a7a39(0xfc)](_0x3a7a39(0x112), function (_0x45c367, _0x54fd7a, _0x14c180) {
                        _0x39fddb = !![], _0x2a330d = _0x45c367, _0x4c496e = _0x54fd7a, _0x55b883 = _0x14c180;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x54bfb8 = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0x0), expect(_0x4c496e)[_0x54bfb8(0xf2)](_0x4b93dc), expect(_0x55b883)['toBe'](0x0);
                }), runs(function () {
                    var _0x3b51fd = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x3b51fd(0xef)][_0x3b51fd(0xf4)](_0x3b51fd(0x112), function (_0x402281, _0x35a5de) {
                        _0x39fddb = !![], _0x2a330d = _0x402281, _0x3373e5 = _0x35a5de;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x204d10 = _0x1bc1;
                    expect(_0x2a330d)[_0x204d10(0xf2)](0x0), expect(_0x3373e5)[_0x204d10(0xf2)](_0x204d10(0x113));
                }), runs(function () {
                    var _0x2dd80c = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2dd80c(0xef)][_0x2dd80c(0x10f)](_0x2dd80c(0x112), function (_0x3e0bc9) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(0x114), function () {
                _0x2a330d = 0x0, runs(function () {
                    var _0x4d593f = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x4d593f(0xef)][_0x4d593f(0x10d)](_0x4b93dc, _0x4d593f(0x115), _0x4d593f(0x116), '', '', 'last', '', function (_0xb52cd6) {
                        _0x39fddb = !![], _0x2a330d = _0xb52cd6;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x276459 = _0x1bc1;
                    expect(_0x2a330d)[_0x276459(0xf2)](0x0);
                }), runs(function () {
                    var _0x38cace = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -0x1, brackets[_0x38cace(0xef)][_0x38cace(0xfc)](_0x38cace(0x116), function (_0x49d2a1, _0x528e54, _0x1a71af) {
                        _0x39fddb = !![], _0x2a330d = _0x49d2a1, _0x4c496e = _0x528e54, _0x55b883 = _0x1a71af;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x403c04 = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0x0), expect(_0x4c496e)[_0x403c04(0xf2)](_0x4b93dc), expect(_0x55b883)['toBe'](0x1);
                }), runs(function () {
                    var _0x2dd904 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x2dd904(0xef)]['getMenuTitle']('Menu-test.command02', function (_0x107ae4, _0x511fb1) {
                        _0x39fddb = !![], _0x2a330d = _0x107ae4, _0x3373e5 = _0x511fb1;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x52190c = _0x1bc1;
                    expect(_0x2a330d)[_0x52190c(0xf2)](0x0), expect(_0x3373e5)['toBe'](_0x52190c(0x115));
                }), runs(function () {
                    var _0x5994c2 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x5994c2(0xef)]['removeMenuItem']('Menu-test.command02', function (_0x142d66) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(0x117), function () {
                _0x2a330d = 0x0, runs(function () {
                    var _0x104c1a = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x104c1a(0xef)][_0x104c1a(0x10d)](_0x4b93dc, _0x104c1a(0x118), _0x104c1a(0x119), '', '', _0x104c1a(0x10a), _0x432c26, function (_0x349c1a) {
                        _0x39fddb = !![], _0x2a330d = _0x349c1a;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x5f274a = _0x1bc1;
                    expect(_0x2a330d)[_0x5f274a(0xf2)](0x0);
                }), runs(function () {
                    var _0x4a9136 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -0x1, brackets[_0x4a9136(0xef)]['getMenuPosition']('Menu-test.command03', function (_0x20fe7d, _0x1c2769, _0x4ab4d) {
                        _0x39fddb = !![], _0x2a330d = _0x20fe7d, _0x4c496e = _0x1c2769, _0x55b883 = _0x4ab4d;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x584362 = _0x1bc1;
                    expect(_0x2a330d)[_0x584362(0xf2)](0x0), expect(_0x4c496e)[_0x584362(0xf2)](_0x4b93dc), expect(_0x55b883)[_0x584362(0xf2)](0x1);
                }), runs(function () {
                    var _0x356c8a = _0x1bc1;
                    _0x39fddb = ![], brackets['app'][_0x356c8a(0xf4)](_0x356c8a(0x119), function (_0x55b74e, _0x25b689) {
                        _0x39fddb = !![], _0x2a330d = _0x55b74e, _0x3373e5 = _0x25b689;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x499c00 = _0x1bc1;
                    expect(_0x2a330d)[_0x499c00(0xf2)](0x0), expect(_0x3373e5)['toBe']('Brackets\x20Test\x20Command\x20Custom\x203');
                }), runs(function () {
                    var _0x140619 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x140619(0xef)][_0x140619(0x10f)]('Menu-test.command03', function (_0x40688c) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(0x11a), function () {
                _0x2a330d = 0x0, runs(function () {
                    var _0x1a2754 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x1a2754(0xef)][_0x1a2754(0x10d)](_0x4b93dc, _0x1a2754(0x11b), _0x1a2754(0x11c), '', '', _0x1a2754(0x106), _0x432c26, function (_0x2da44c) {
                        _0x39fddb = !![], _0x2a330d = _0x2da44c;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x3ef9b7 = _0x1bc1;
                    expect(_0x2a330d)[_0x3ef9b7(0xf2)](0x0);
                }), runs(function () {
                    var _0x25c939 = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -0x1, brackets['app'][_0x25c939(0xfc)](_0x25c939(0x11c), function (_0x4fe530, _0x1a98e0, _0x189f35) {
                        _0x39fddb = !![], _0x2a330d = _0x4fe530, _0x4c496e = _0x1a98e0, _0x55b883 = _0x189f35;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x326a3b = _0x1bc1;
                    expect(_0x2a330d)[_0x326a3b(0xf2)](0x0), expect(_0x4c496e)[_0x326a3b(0xf2)](_0x4b93dc), expect(_0x55b883)[_0x326a3b(0xf2)](0x0);
                }), runs(function () {
                    var _0x3d6050 = _0x1bc1;
                    _0x39fddb = ![], brackets['app'][_0x3d6050(0xf4)](_0x3d6050(0x11c), function (_0x499132, _0x1c9ddd) {
                        _0x39fddb = !![], _0x2a330d = _0x499132, _0x3373e5 = _0x1c9ddd;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x5e1327 = _0x1bc1;
                    expect(_0x2a330d)[_0x5e1327(0xf2)](0x0), expect(_0x3373e5)[_0x5e1327(0xf2)]('Brackets\x20Test\x20Command\x20Custom\x204');
                }), runs(function () {
                    var _0xd7a25c = _0x1bc1;
                    _0x39fddb = ![], brackets['app']['removeMenuItem'](_0xd7a25c(0x11c), function (_0x2e5560) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(0x11d), function () {
                _0x2a330d = 0x0, runs(function () {
                    var _0x4f0af2 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x4f0af2(0xef)]['addMenuItem'](_0x4b93dc, _0x4f0af2(0x11e), _0x4f0af2(0x11f), '', '', _0x4f0af2(0x106), 'NONEXISTANT', function (_0x2f2eae) {
                        _0x39fddb = !![], _0x2a330d = _0x2f2eae;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x399a1c = _0x1bc1;
                    expect(_0x2a330d)['toBe'](brackets['fs'][_0x399a1c(0xf5)]);
                }), runs(function () {
                    var _0x41009c = _0x1bc1;
                    _0x39fddb = ![], _0x4c496e = null, _0x55b883 = -0x1, brackets[_0x41009c(0xef)][_0x41009c(0xfc)](_0x41009c(0x11f), function (_0x9ed6b5, _0x5a15e6, _0x507276) {
                        _0x39fddb = !![], _0x2a330d = _0x9ed6b5, _0x4c496e = _0x5a15e6, _0x55b883 = _0x507276;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x2bafce = _0x1bc1;
                    expect(_0x2a330d)[_0x2bafce(0xf2)](0x0), expect(_0x4c496e)[_0x2bafce(0xf2)](_0x4b93dc), expect(_0x55b883)[_0x2bafce(0xf2)](0x1);
                }), runs(function () {
                    var _0x1d1b05 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x1d1b05(0xef)]['getMenuTitle'](_0x1d1b05(0x11f), function (_0x338c3d, _0x9cb79c) {
                        _0x39fddb = !![], _0x2a330d = _0x338c3d, _0x3373e5 = _0x9cb79c;
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                }), runs(function () {
                    var _0x122a6c = _0x1bc1;
                    expect(_0x2a330d)['toBe'](0x0), expect(_0x3373e5)['toBe'](_0x122a6c(0x11e));
                }), runs(function () {
                    var _0x590fb0 = _0x1bc1;
                    _0x39fddb = ![], brackets[_0x590fb0(0xef)][_0x590fb0(0x10f)](_0x590fb0(0x11f), function (_0x1ebd27) {
                        _0x39fddb = !![];
                    });
                }), waitsFor(function () {
                    return _0x39fddb;
                });
            }), it(_0x2e45b(0x120), function () {
                var _0x33c062 = _0x2e45b, _0x574ce0, _0x557c89, _0x5d3fc3, _0x9b1444, _0x1c592f = _0x33c062(0x121);
                runs(function () {
                    var _0x597451 = _0x33c062;
                    brackets[_0x597451(0xef)][_0x597451(0xf1)](_0x597451(0x122), _0x597451(0x121), '', '', function (_0x20309a) {
                    }), brackets[_0x597451(0xef)]['addMenuItem'](_0x1c592f, 'Command\x2010', _0x597451(0x123), '', '', '', '', function (_0x2b2698) {
                    }), brackets[_0x597451(0xef)][_0x597451(0x10d)](_0x1c592f, _0x597451(0x124), 'Menu-test.command11', '', '', '', '', function (_0x2c8ffe) {
                    }), brackets[_0x597451(0xef)]['addMenuItem'](_0x1c592f, _0x597451(0x125), String(Date['now']()), '', '', '', '', function (_0x409053) {
                    }), brackets['app']['addMenuItem'](_0x1c592f, _0x597451(0x126), _0x597451(0x127), '', '', '', '', function (_0x180d7f) {
                    }), brackets['app'][_0x597451(0x10d)](_0x1c592f, _0x597451(0x128), _0x597451(0x129), '', '', '', '', function (_0x3807e9) {
                    });
                }), runs(function () {
                    var _0x2ede79 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets[_0x2ede79(0xef)][_0x2ede79(0x10d)](_0x1c592f, _0x2ede79(0x12a), _0x2ede79(0x12b), '', '', _0x2ede79(0x12c), _0x2ede79(0x123), function (_0x348af1) {
                        _0x574ce0 = !![], _0x557c89 = _0x348af1;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x460cf8 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets[_0x460cf8(0xef)][_0x460cf8(0xfc)](_0x460cf8(0x12b), function (_0x464822, _0x3881d8, _0x3250d8) {
                        _0x574ce0 = !![], _0x557c89 = _0x464822, _0x9b1444 = _0x3881d8, _0x5d3fc3 = _0x3250d8;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x8518ab = _0x33c062;
                    expect(_0x557c89)[_0x8518ab(0xf2)](0x0), expect(_0x5d3fc3)[_0x8518ab(0xf2)](0x2);
                }), runs(function () {
                    var _0x328001 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets['app'][_0x328001(0x10d)](_0x1c592f, 'Command\x2015', _0x328001(0x12d), '', '', _0x328001(0x12c), _0x328001(0x129), function (_0x27f89b) {
                        _0x574ce0 = !![], _0x557c89 = _0x27f89b;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4a39bb = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets[_0x4a39bb(0xef)]['getMenuPosition'](_0x4a39bb(0x12d), function (_0x29c04c, _0x489e78, _0x84bcdc) {
                        _0x574ce0 = !![], _0x557c89 = _0x29c04c, _0x9b1444 = _0x489e78, _0x5d3fc3 = _0x84bcdc;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x1c8669 = _0x33c062;
                    expect(_0x557c89)[_0x1c8669(0xf2)](0x0), expect(_0x5d3fc3)['toBe'](0x6);
                }), runs(function () {
                    var _0x41e3aa = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets[_0x41e3aa(0xef)][_0x41e3aa(0x10d)](_0x1c592f, _0x41e3aa(0x12e), _0x41e3aa(0x12f), '', '', _0x41e3aa(0x130), _0x41e3aa(0x131), function (_0x4eaaa5) {
                        _0x574ce0 = !![], _0x557c89 = _0x4eaaa5;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x5c1247 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets['app']['getMenuPosition'](_0x5c1247(0x12f), function (_0x169557, _0x570b8c, _0x3c2657) {
                        _0x574ce0 = !![], _0x557c89 = _0x169557, _0x9b1444 = _0x570b8c, _0x5d3fc3 = _0x3c2657;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4c5e1e = _0x33c062;
                    expect(_0x557c89)[_0x4c5e1e(0xf2)](0x0), expect(_0x5d3fc3)[_0x4c5e1e(0xf2)](0x0);
                }), runs(function () {
                    var _0x563197 = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets['app']['addMenuItem'](_0x1c592f, _0x563197(0x132), _0x563197(0x133), '', '', _0x563197(0x130), 'Menu-test.command12', function (_0x1e0749) {
                        _0x574ce0 = !![], _0x557c89 = _0x1e0749;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x33fd3b = _0x33c062;
                    _0x574ce0 = ![], _0x557c89 = 0x0, brackets[_0x33fd3b(0xef)][_0x33fd3b(0xfc)]('Menu-test.command17', function (_0x134da0, _0x580d55, _0x330bfe) {
                        _0x574ce0 = !![], _0x557c89 = _0x134da0, _0x9b1444 = _0x580d55, _0x5d3fc3 = _0x330bfe;
                    });
                }), waitsFor(function () {
                    return _0x574ce0;
                }), runs(function () {
                    var _0x4a5b95 = _0x33c062;
                    expect(_0x557c89)[_0x4a5b95(0xf2)](0x0), expect(_0x5d3fc3)[_0x4a5b95(0xf2)](0x5);
                }), runs(function () {
                    var _0x2c576c = _0x33c062;
                    brackets[_0x2c576c(0xef)][_0x2c576c(0x10f)](_0x2c576c(0x123), function (_0x4d9eba) {
                    }), brackets[_0x2c576c(0xef)][_0x2c576c(0x10f)](_0x2c576c(0x131), function (_0x3593f9) {
                    }), brackets[_0x2c576c(0xef)]['removeMenuItem'](_0x2c576c(0x127), function (_0x35d7a0) {
                    }), brackets[_0x2c576c(0xef)]['removeMenuItem']('Menu-test.command13', function (_0x4076aa) {
                    }), brackets['app'][_0x2c576c(0x10f)](_0x2c576c(0x12b), function (_0x47e21b) {
                    }), brackets[_0x2c576c(0xef)]['removeMenuItem'](_0x2c576c(0x12d), function (_0x1aa562) {
                    }), brackets[_0x2c576c(0xef)][_0x2c576c(0x10f)](_0x2c576c(0x12f), function (_0x3eef89) {
                    }), brackets[_0x2c576c(0xef)]['removeMenuItem'](_0x2c576c(0x133), function (_0x536707) {
                    }), brackets['app'][_0x2c576c(0xf6)](_0x1c592f, function (_0x2bd42e) {
                    });
                });
            });
        }), describe(_0xfb2d85(0xf6), function () {
            var _0xacd1f1 = _0xfb2d85, _0x38068e = ![], _0x164991 = 0x0;
            it(_0xacd1f1(0x134), function () {
                runs(function () {
                    var _0x5e8df0 = _0x1bc1;
                    brackets[_0x5e8df0(0xef)]['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x56af7c) {
                        _0x38068e = !![], _0x164991 = _0x56af7c;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x4408cf = _0x1bc1;
                    expect(_0x164991)[_0x4408cf(0xf2)](0x0);
                }), runs(function () {
                    var _0x5d5927 = _0x1bc1;
                    _0x38068e = ![], brackets['app'][_0x5d5927(0xf6)](_0x4b93dc, function (_0xf526e) {
                        _0x38068e = !![], _0x164991 = _0xf526e;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x527fe1 = _0x1bc1;
                    expect(_0x164991)[_0x527fe1(0xf2)](0x0);
                });
            }), it(_0xacd1f1(0xf7), function () {
                _0x38068e = ![], _0x164991 = 0x0, runs(function () {
                    var _0x58c871 = _0x1bc1;
                    brackets[_0x58c871(0xef)]['removeMenu'](0x2a, function (_0x276ca5) {
                        _0x38068e = !![], _0x164991 = _0x276ca5;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x244b50 = _0x1bc1;
                    expect(_0x164991)[_0x244b50(0xf2)](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it(_0xacd1f1(0x135), function () {
                _0x38068e = ![], _0x164991 = 0x0, runs(function () {
                    var _0x38c192 = _0x1bc1;
                    brackets[_0x38c192(0xef)][_0x38c192(0xf6)](_0x4b93dc, function (_0x563b70) {
                        _0x38068e = !![], _0x164991 = _0x563b70;
                    });
                }), waitsFor(function () {
                    return _0x38068e;
                }), runs(function () {
                    var _0x5c4bae = _0x1bc1;
                    expect(_0x164991)[_0x5c4bae(0xf2)](brackets['fs'][_0x5c4bae(0xf5)]);
                });
            });
        }), describe('removeMenuItem', function () {
            var _0x3f07a6 = _0xfb2d85, _0x282a79 = _0x432c26 + '1';
            beforeEach(function () {
                var _0x5f2331 = ![], _0xdfaecc = 0x0;
                runs(function () {
                    brackets['app']['addMenu'](_0x141488, _0x4b93dc, '', '', function (_0x5c04c5) {
                        var _0x3081d8 = _0x1bc1;
                        _0x5c04c5 ? (_0x5f2331 = !![], _0xdfaecc = _0x5c04c5) : brackets[_0x3081d8(0xef)]['addMenuItem'](_0x4b93dc, _0x116602, _0x282a79, '', '', '', '', function (_0xe39ff7) {
                            _0x5f2331 = !![], _0xdfaecc = _0xe39ff7;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5f2331;
                }), runs(function () {
                    var _0x612b3 = _0x1bc1;
                    expect(_0xdfaecc)[_0x612b3(0xf2)](0x0);
                });
            }), afterEach(function () {
                var _0x127fe3 = ![], _0x3cd2aa = 0x0;
                runs(function () {
                    var _0x122b03 = _0x1bc1;
                    brackets[_0x122b03(0xef)][_0x122b03(0x10f)](_0x282a79, function (_0x19ed20) {
                        var _0x114746 = _0x122b03;
                        brackets[_0x114746(0xef)][_0x114746(0xf6)](_0x4b93dc, function (_0x4710f1) {
                            _0x127fe3 = !![], _0x3cd2aa = _0x4710f1;
                        });
                    });
                }), waitsFor(function () {
                    return _0x127fe3;
                }), runs(function () {
                    var _0x24f93d = _0x1bc1;
                    expect(_0x3cd2aa)[_0x24f93d(0xf2)](0x0);
                });
            }), it(_0x3f07a6(0x136), function () {
                var _0x54e677 = _0x3f07a6, _0x3f697b = ![], _0x2b1399 = 0x0;
                runs(function () {
                    var _0x54d53a = _0x1bc1;
                    brackets[_0x54d53a(0xef)][_0x54d53a(0x10f)](_0x282a79, function (_0xa9b551) {
                        _0x3f697b = !![], _0x2b1399 = _0xa9b551;
                    });
                }), waitsFor(function () {
                    return _0x3f697b;
                }, 'calling\x20removeMenuItem'), runs(function () {
                    var _0x17c6bc = _0x1bc1;
                    expect(_0x2b1399)[_0x17c6bc(0xf2)](0x0);
                }), runs(function () {
                    var _0x1657ec = _0x1bc1;
                    _0x3f697b = ![], brackets[_0x1657ec(0xef)][_0x1657ec(0xf4)](_0x282a79, function (_0x14e193, _0x5962db) {
                        _0x3f697b = !![], _0x2b1399 = _0x14e193;
                    });
                }), waitsFor(function () {
                    return _0x3f697b;
                }, _0x54e677(0x137)), runs(function () {
                    var _0x125272 = _0x54e677;
                    expect(_0x2b1399)[_0x125272(0xf2)](brackets['fs'][_0x125272(0xf5)]);
                });
            }), it('should\x20return\x20an\x20error\x20if\x20invalid\x20parameters\x20are\x20passed', function () {
                var _0x3ba697 = _0x3f07a6, _0x1d0827 = ![], _0x579292 = 0x0;
                runs(function () {
                    var _0x4e180e = _0x1bc1;
                    brackets['app'][_0x4e180e(0x10f)](0x2a, function (_0x4a97e1) {
                        _0x1d0827 = !![], _0x579292 = _0x4a97e1;
                    });
                }), waitsFor(function () {
                    return _0x1d0827;
                }, _0x3ba697(0x138)), runs(function () {
                    expect(_0x579292)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            }), it(_0x3f07a6(0x139), function () {
                var _0x38e425 = _0x3f07a6, _0x370778 = ![], _0xe64b0f = 0x0;
                runs(function () {
                    var _0x769ada = _0x1bc1;
                    brackets[_0x769ada(0xef)]['removeMenuItem'](_0x282a79 + _0x769ada(0x13a), function (_0x574f73) {
                        _0x370778 = !![], _0xe64b0f = _0x574f73;
                    });
                }), waitsFor(function () {
                    return _0x370778;
                }, _0x38e425(0x138)), runs(function () {
                    var _0x2d9eda = _0x38e425;
                    expect(_0xe64b0f)[_0x2d9eda(0xf2)](brackets['fs'][_0x2d9eda(0xf5)]);
                });
            });
        }), describe('getMenuItemState\x20setMenuItemState', function () {
            var _0x3e4920 = _0xfb2d85, _0x5112f2 = _0x432c26 + '2';
            beforeEach(function () {
                var _0x497708 = ![], _0x29dbfc = 0x0;
                runs(function () {
                    var _0x46f25a = _0x1bc1;
                    brackets[_0x46f25a(0xef)][_0x46f25a(0xf1)](_0x141488, _0x4b93dc, '', '', function (_0x334244) {
                        var _0x12fccc = _0x46f25a;
                        _0x334244 ? (_0x497708 = !![], _0x29dbfc = _0x334244) : brackets[_0x12fccc(0xef)]['addMenuItem'](_0x4b93dc, _0x116602, _0x5112f2, '', '', '', '', function (_0x1f2b37) {
                            _0x497708 = !![], _0x29dbfc = _0x1f2b37;
                        });
                    });
                }), waitsFor(function () {
                    return _0x497708;
                }), runs(function () {
                    expect(_0x29dbfc)['toBe'](0x0);
                });
            }), afterEach(function () {
                var _0x63c780 = ![], _0x1caf10 = 0x0;
                runs(function () {
                    var _0x118ada = _0x1bc1;
                    brackets[_0x118ada(0xef)][_0x118ada(0x10f)](_0x5112f2, function (_0x9f7c1c) {
                        var _0x89da94 = _0x118ada;
                        brackets[_0x89da94(0xef)][_0x89da94(0xf6)](_0x4b93dc, function (_0x525c89) {
                            _0x63c780 = !![], _0x1caf10 = _0x525c89;
                        });
                    });
                }), waitsFor(function () {
                    return _0x63c780;
                }), runs(function () {
                    var _0x3add00 = _0x1bc1;
                    expect(_0x1caf10)[_0x3add00(0xf2)](0x0);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20enabled\x20state', function () {
                var _0x579902 = ![], _0x462410 = ![], _0xbfc0e0 = 0x0;
                runs(function () {
                    var _0x5898dd = _0x1bc1;
                    brackets[_0x5898dd(0xef)]['getMenuItemState'](_0x5112f2, function (_0x1d1054, _0x48ebd5, _0x4aee00) {
                        _0x579902 = !![], _0x462410 = _0x48ebd5, _0xbfc0e0 = _0x1d1054;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x4ad18a = _0x1bc1;
                    expect(_0xbfc0e0)[_0x4ad18a(0xf2)](0x0);
                }), runs(function () {
                    var _0x32cf77 = _0x1bc1;
                    _0x579902 = ![], brackets[_0x32cf77(0xef)]['setMenuItemState'](_0x5112f2, ![], ![], function (_0x23efdc) {
                        _0x579902 = !![], _0xbfc0e0 = _0x23efdc;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x13a53f = _0x1bc1;
                    expect(_0xbfc0e0)[_0x13a53f(0xf2)](0x0);
                }), runs(function () {
                    var _0x4f59b3 = _0x1bc1;
                    _0x579902 = ![], brackets['app'][_0x4f59b3(0x13b)](_0x5112f2, function (_0x106f08, _0x43e978, _0x523e91) {
                        _0x579902 = !![], _0x462410 = _0x43e978, _0xbfc0e0 = _0x106f08;
                    });
                }), waitsFor(function () {
                    return _0x579902;
                }), runs(function () {
                    var _0x5a7da6 = _0x1bc1;
                    expect(_0xbfc0e0)[_0x5a7da6(0xf2)](0x0), expect(_0x462410)[_0x5a7da6(0xf2)](![]);
                });
            }), it(_0x3e4920(0x13c), function () {
                var _0xaedef9 = ![], _0x318472 = ![], _0x2aa376 = 0x0;
                runs(function () {
                    var _0x5320ee = _0x1bc1;
                    brackets[_0x5320ee(0xef)][_0x5320ee(0x13b)](_0x5112f2, function (_0x5780e3, _0x11e262, _0x992f57) {
                        _0xaedef9 = !![], _0x318472 = _0x992f57, _0x2aa376 = _0x5780e3;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x190740 = _0x1bc1;
                    expect(_0x2aa376)[_0x190740(0xf2)](0x0), expect(_0x318472)[_0x190740(0xf2)](![]);
                }), runs(function () {
                    var _0x15e202 = _0x1bc1;
                    _0xaedef9 = ![], brackets['app'][_0x15e202(0x13d)](_0x5112f2, !![], !![], function (_0x35ea7d) {
                        _0xaedef9 = !![], _0x2aa376 = _0x35ea7d;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x5813f4 = _0x1bc1;
                    expect(_0x2aa376)[_0x5813f4(0xf2)](0x0);
                }), runs(function () {
                    var _0x23419a = _0x1bc1;
                    _0xaedef9 = ![], brackets['app'][_0x23419a(0x13b)](_0x5112f2, function (_0xb943d6, _0x583f9a, _0x27f412) {
                        _0xaedef9 = !![], _0x318472 = _0x27f412, _0x2aa376 = _0xb943d6;
                    });
                }), waitsFor(function () {
                    return _0xaedef9;
                }), runs(function () {
                    var _0x413b2d = _0x1bc1;
                    expect(_0x2aa376)[_0x413b2d(0xf2)](0x0);
                });
            }), it(_0x3e4920(0xf7), function () {
                var _0x216527 = ![], _0x246d09 = 0x0;
                runs(function () {
                    var _0x439dea = _0x1bc1;
                    brackets[_0x439dea(0xef)][_0x439dea(0x13d)](_0x5112f2, _0x439dea(0x13e), _0x439dea(0x13f), function (_0x54f844) {
                        _0x216527 = !![], _0x246d09 = _0x54f844;
                    });
                }), waitsFor(function () {
                    return _0x216527;
                }), runs(function () {
                    var _0x42cba8 = _0x1bc1;
                    expect(_0x246d09)[_0x42cba8(0xf2)](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), describe('getMenuTitle\x20setMenuTitle', function () {
            var _0x279c81 = _0xfb2d85;
            beforeEach(function () {
                var _0x5563c9 = ![], _0xf555aa = 0x0;
                runs(function () {
                    var _0x29f8de = _0x1bc1;
                    brackets[_0x29f8de(0xef)][_0x29f8de(0xf1)](_0x141488, _0x4b93dc, '', '', function (_0x228008) {
                        var _0x54c23d = _0x29f8de;
                        _0x228008 ? (_0x5563c9 = !![], _0xf555aa = _0x228008) : brackets['app'][_0x54c23d(0x10d)](_0x4b93dc, _0x116602, _0x432c26, '', '', '', '', function (_0x51c8bf) {
                            _0x5563c9 = !![], _0xf555aa = _0x51c8bf;
                        });
                    });
                }), waitsFor(function () {
                    return _0x5563c9;
                }), runs(function () {
                    var _0x4e0b28 = _0x1bc1;
                    expect(_0xf555aa)[_0x4e0b28(0xf2)](0x0);
                });
            }), afterEach(function () {
                var _0x55bc5b = ![], _0x4bbf98 = 0x0;
                runs(function () {
                    var _0x510643 = _0x1bc1;
                    brackets[_0x510643(0xef)][_0x510643(0x10f)](_0x432c26, function (_0x570977) {
                        var _0x4a3674 = _0x510643;
                        _0x570977 ? (_0x55bc5b = !![], _0x4bbf98 = _0x570977) : brackets[_0x4a3674(0xef)]['removeMenu'](_0x4b93dc, function (_0x5ce93d) {
                            _0x55bc5b = !![], _0x4bbf98 = _0x5ce93d;
                        });
                    });
                }), waitsFor(function () {
                    return _0x55bc5b;
                }), runs(function () {
                    var _0x286b73 = _0x1bc1;
                    expect(_0x4bbf98)[_0x286b73(0xf2)](0x0);
                });
            }), it(_0x279c81(0x140), function () {
                var _0x595953 = _0x279c81, _0x43e3c2 = _0x595953(0x141), _0x16bbbe = ![], _0x1af054 = 0x0, _0x58dff0;
                runs(function () {
                    var _0x4bb52a = _0x595953;
                    brackets[_0x4bb52a(0xef)][_0x4bb52a(0xf4)](_0x4b93dc, function (_0x3455a2, _0x7b2962) {
                        _0x16bbbe = !![], _0x58dff0 = _0x7b2962, _0x1af054 = _0x3455a2;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0x2b0279 = _0x595953;
                    expect(_0x1af054)[_0x2b0279(0xf2)](0x0), expect(_0x58dff0)[_0x2b0279(0xf2)](_0x141488);
                }), runs(function () {
                    var _0x209353 = _0x595953;
                    _0x16bbbe = ![], brackets[_0x209353(0xef)][_0x209353(0x142)](_0x4b93dc, _0x43e3c2, function (_0x2a52fc) {
                        _0x16bbbe = !![], _0x1af054 = _0x2a52fc;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0xe44b52 = _0x595953;
                    expect(_0x1af054)[_0xe44b52(0xf2)](0x0);
                }), runs(function () {
                    var _0x46b842 = _0x595953;
                    _0x16bbbe = ![], brackets[_0x46b842(0xef)][_0x46b842(0xf4)](_0x4b93dc, function (_0x1aec8c, _0x438c35) {
                        _0x16bbbe = !![], _0x58dff0 = _0x438c35, _0x1af054 = _0x1aec8c;
                    });
                }), waitsFor(function () {
                    return _0x16bbbe;
                }), runs(function () {
                    var _0x42adea = _0x595953;
                    expect(_0x1af054)[_0x42adea(0xf2)](0x0), expect(_0x58dff0)[_0x42adea(0xf2)](_0x43e3c2);
                });
            }), it('should\x20be\x20able\x20to\x20set\x20menu\x20item\x20title', function () {
                var _0x4157c9 = _0x279c81, _0x14d2ad = _0x4157c9(0x143), _0x48d1a5 = ![], _0x2552bd = 0x0, _0x45f363;
                runs(function () {
                    var _0x20ffc1 = _0x4157c9;
                    brackets[_0x20ffc1(0xef)][_0x20ffc1(0xf4)](_0x432c26, function (_0x4aa5cd, _0x1d8c62) {
                        _0x48d1a5 = !![], _0x45f363 = _0x1d8c62, _0x2552bd = _0x4aa5cd;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0xebbf6d = _0x4157c9;
                    expect(_0x2552bd)[_0xebbf6d(0xf2)](0x0), expect(_0x45f363)[_0xebbf6d(0xf2)](_0x116602);
                }), runs(function () {
                    var _0x2dbab5 = _0x4157c9;
                    _0x48d1a5 = ![], brackets[_0x2dbab5(0xef)][_0x2dbab5(0x142)](_0x432c26, _0x14d2ad, function (_0x1f28a3) {
                        _0x48d1a5 = !![], _0x2552bd = _0x1f28a3;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0x18ad36 = _0x4157c9;
                    expect(_0x2552bd)[_0x18ad36(0xf2)](0x0);
                }), runs(function () {
                    var _0x328acd = _0x4157c9;
                    _0x48d1a5 = ![], brackets[_0x328acd(0xef)][_0x328acd(0xf4)](_0x432c26, function (_0x47231d, _0xe80eea) {
                        _0x48d1a5 = !![], _0x45f363 = _0xe80eea, _0x2552bd = _0x47231d;
                    });
                }), waitsFor(function () {
                    return _0x48d1a5;
                }), runs(function () {
                    var _0x3f786c = _0x4157c9;
                    expect(_0x2552bd)[_0x3f786c(0xf2)](0x0), expect(_0x45f363)[_0x3f786c(0xf2)](_0x14d2ad);
                });
            }), it(_0x279c81(0xf7), function () {
                var _0x5e05ea = ![], _0x5f2add = 0x0;
                runs(function () {
                    var _0x30e15e = _0x1bc1;
                    brackets[_0x30e15e(0xef)][_0x30e15e(0x142)](_0x432c26, 0x2a, function (_0x3f1c79) {
                        _0x5e05ea = !![], _0x5f2add = _0x3f1c79;
                    });
                }), waitsFor(function () {
                    return _0x5e05ea;
                }), runs(function () {
                    expect(_0x5f2add)['toBe'](brackets['fs']['ERR_INVALID_PARAMS']);
                });
            });
        }), it(_0xfb2d85(0x144), function () {
            var _0x1adbe1 = ![], _0x3bff22 = 0x0;
            runs(function () {
                var _0x478dad = _0x1bc1;
                brackets[_0x478dad(0xef)][_0x478dad(0xf6)](_0x835543, function (_0x5c120d) {
                    _0x1adbe1 = !![], _0x3bff22 = _0x5c120d;
                });
            }), waitsFor(function () {
                return _0x1adbe1;
            }), expect(_0x3bff22)['toBe'](0x0);
        });
    });
}));
