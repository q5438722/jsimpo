var _0x2167 = [
    'AAyvD',
    'BdVLz',
    'TodoFilter',
    'completed',
    'TodoView',
    'hCTVD',
    'appendChild',
    'render',
    'forEach',
    'trigger',
    'visible',
    'value',
    'trim',
    'nextOrder',
    'which',
    'create',
    'newAttributes',
    'destroy',
    'save',
    'style',
    'display',
    'MwVGi',
    'some',
    'querySelectorAll',
    'none',
    'yzkcQ',
    'Mvgzp',
    'zjyYu',
    'QmEzu',
    'TqmZB',
    'OgNDG',
    '.filters\x20li\x20a',
    '[href=\x22#/',
    'ohitx',
    '218841XNYtvO',
    '1UUQkne',
    '1480097VOozLL',
    '166007BHzntP',
    '10bBNoqX',
    '231837VjzCus',
    '1366462lioISz',
    '5uLdDMJ',
    '196733dTeaSc',
    '2652197roETwp',
    '1KCkOPG',
    '4|2|1|3|0',
    'createOnEnter',
    'clearCompleted',
    'toggleAllComplete',
    '.toggle-all',
    'all',
    'reset',
    '.todo-list',
    'raVSv',
    'split',
    'extend',
    'NcaEa',
    'querySelector',
    'xEIxb',
    'innerHTML',
    'NyNdT',
    'pTFKp',
    '0|9|5|6|7|2|3|8|1|4',
    'allCheckbox',
    'BAmTm',
    'item',
    'listenTo',
    'todos',
    'HdHRR',
    'bMSoZ',
    'addAll',
    'change:completed',
    'filterOne',
    'footer',
    '.footer',
    'main',
    'KxWKl',
    'addOne',
    'input',
    'pjlUr',
    '0|5|2|4|1|3',
    'selected',
    'wlAjm',
    'length',
    'vriDC',
    'statsTemplate',
    'call',
    'EdVdX',
    'classList',
    'remove',
    'uiIep',
    'qYnVZ',
    'remaining',
    'checked'
];
(function (_0x561b91, _0x3ef618) {
    var _0xa56853 = _0x58a6;
    while (!![]) {
        try {
            var _0x31a22c = parseInt(_0xa56853(0x13a)) + -parseInt(_0xa56853(0x13b)) * -parseInt(_0xa56853(0x13c)) + -parseInt(_0xa56853(0x13d)) * -parseInt(_0xa56853(0x13e)) + -parseInt(_0xa56853(0x13f)) + parseInt(_0xa56853(0x140)) + -parseInt(_0xa56853(0x141)) * parseInt(_0xa56853(0x142)) + parseInt(_0xa56853(0x143)) * -parseInt(_0xa56853(0x144));
            if (_0x31a22c === _0x3ef618)
                break;
            else
                _0x561b91['push'](_0x561b91['shift']());
        } catch (_0x15d491) {
            _0x561b91['push'](_0x561b91['shift']());
        }
    }
}(_0x2167, -0x3b564 + -0x6 * 0x2f18c + 0x227557));
var app = app || {};
function _0x58a6(_0xd25c81, _0xf70fcc) {
    return _0x58a6 = function (_0x397e34, _0x2721d9) {
        _0x397e34 = _0x397e34 - (0x1242 + 0x1 * 0x803 + -0x3 * 0x859);
        var _0x451913 = _0x2167[_0x397e34];
        return _0x451913;
    }, _0x58a6(_0xd25c81, _0xf70fcc);
}
(function () {
    'use strict';
    var _0x8ece91 = _0x58a6, _0xac0470 = {
            'raVSv': _0x8ece91(0x145),
            'NcaEa': function (_0x29fd73, _0x58ed26) {
                return _0x29fd73(_0x58ed26);
            },
            'xEIxb': '#stats-template',
            'NyNdT': _0x8ece91(0x146),
            'pTFKp': _0x8ece91(0x147),
            'FMAqF': _0x8ece91(0x148),
            'yzkcQ': _0x8ece91(0x149),
            'Mvgzp': _0x8ece91(0x14a),
            'zjyYu': _0x8ece91(0x14b),
            'QmEzu': 'add',
            'TqmZB': '.new-todo',
            'OgNDG': function (_0x32b90b, _0x218331, _0x3f75bd) {
                return _0x32b90b(_0x218331, _0x3f75bd);
            },
            'ohitx': _0x8ece91(0x14c)
        }, _0x157753 = _0xac0470[_0x8ece91(0x14d)][_0x8ece91(0x14e)]('|'), _0x49d47b = 0x1e15 * -0x1 + -0x1 * 0xadf + 0x28f4;
    while (!![]) {
        switch (_0x157753[_0x49d47b++]) {
        case '0':
            app['AppView'] = Backbone['View'][_0x8ece91(0x14f)]({
                'el': '.todoapp',
                'statsTemplate': _0xac0470[_0x8ece91(0x150)](microtemplate, document[_0x8ece91(0x151)](_0xac0470[_0x8ece91(0x152)])[_0x8ece91(0x153)]),
                'events': {
                    'keypress\x20.new-todo': _0xac0470[_0x8ece91(0x154)],
                    'click\x20.clear-completed': _0xac0470[_0x8ece91(0x155)],
                    'click\x20.toggle-all': _0xac0470['FMAqF']
                },
                'initialize': function () {
                    var _0x527732 = _0x8ece91, _0x18e8dc = _0x527732(0x156)[_0x527732(0x14e)]('|'), _0x4dd680 = -0x2402 + -0x772 * -0x5 + -0x138;
                    while (!![]) {
                        switch (_0x18e8dc[_0x4dd680++]) {
                        case '0':
                            this[_0x527732(0x157)] = this['$'](_0x73b017[_0x527732(0x158)])[_0x527732(0x159)](-0x1387 * 0x2 + 0x552 + -0x4 * -0x86f);
                            continue;
                        case '1':
                            this[_0x527732(0x15a)](app[_0x527732(0x15b)], _0x73b017[_0x527732(0x15c)], this['render']);
                            continue;
                        case '2':
                            this[_0x527732(0x15a)](app['todos'], _0x73b017[_0x527732(0x15d)], this[_0x527732(0x15e)]);
                            continue;
                        case '3':
                            this[_0x527732(0x15a)](app[_0x527732(0x15b)], _0x527732(0x15f), this[_0x527732(0x160)]);
                            continue;
                        case '4':
                            app['todos']['fetch']({ 'reset': !![] });
                            continue;
                        case '5':
                            this[_0x527732(0x161)] = this['$'](_0x527732(0x162))[_0x527732(0x159)](-0x642 + -0x3d3 * 0x8 + -0x24da * -0x1);
                            continue;
                        case '6':
                            this[_0x527732(0x163)] = this['$']('.main')[_0x527732(0x159)](-0x2 * -0x7bf + 0x244e + 0x44 * -0xc3);
                            continue;
                        case '7':
                            this[_0x527732(0x15a)](app['todos'], _0x73b017[_0x527732(0x164)], this[_0x527732(0x165)]);
                            continue;
                        case '8':
                            this[_0x527732(0x15a)](app[_0x527732(0x15b)], 'filter', this['filterAll']);
                            continue;
                        case '9':
                            this[_0x527732(0x166)] = this['$'](_0x73b017[_0x527732(0x167)])['item'](-0x21af + 0x1ec8 + 0x2e7);
                            continue;
                        }
                        break;
                    }
                },
                'render': function () {
                    var _0x191df7 = _0x8ece91, _0x28861e = _0x191df7(0x168)[_0x191df7(0x14e)]('|'), _0x400cc2 = 0x242 * -0xc + -0x67 * -0x39 + 0x429;
                    while (!![]) {
                        switch (_0x28861e[_0x400cc2++]) {
                        case '0':
                            var _0x5b4f30 = {
                                'uiIep': _0x191df7(0x169),
                                'qYnVZ': function (_0x229c41, _0x1eb206, _0x8bf8bb) {
                                    var _0x58052c = _0x191df7;
                                    return _0x73b017[_0x58052c(0x16a)](_0x229c41, _0x1eb206, _0x8bf8bb);
                                }
                            };
                            continue;
                        case '1':
                            app[_0x191df7(0x15b)][_0x191df7(0x16b)] ? (_0x73b017[_0x191df7(0x16c)](_0x124ac1, this[_0x191df7(0x163)], !![]), _0x73b017[_0x191df7(0x16c)](_0x124ac1, this[_0x191df7(0x161)], !![]), this[_0x191df7(0x161)]['innerHTML'] = this[_0x191df7(0x16d)]({
                                'completed': _0xd51d5c,
                                'remaining': _0x310d10
                            }), []['forEach'][_0x191df7(0x16e)](this['$'](_0x73b017[_0x191df7(0x16f)]), function (_0x35e00c) {
                                var _0x49d7d9 = _0x191df7;
                                _0x35e00c[_0x49d7d9(0x170)][_0x49d7d9(0x171)](_0x5b4f30[_0x49d7d9(0x172)]), _0x5b4f30[_0x49d7d9(0x173)](_0x55c450, _0x35e00c, _0x55939a) && _0x35e00c[_0x49d7d9(0x170)]['add'](_0x5b4f30[_0x49d7d9(0x172)]);
                            })) : (_0x73b017[_0x191df7(0x16c)](_0x124ac1, this[_0x191df7(0x163)], ![]), _0x124ac1(this[_0x191df7(0x161)], ![]));
                            continue;
                        case '2':
                            var _0x310d10 = app[_0x191df7(0x15b)][_0x191df7(0x174)]()[_0x191df7(0x16b)];
                            continue;
                        case '3':
                            this[_0x191df7(0x157)][_0x191df7(0x175)] = !_0x310d10;
                            continue;
                        case '4':
                            var _0x55939a = _0x73b017['WKdBb'](_0x73b017[_0x191df7(0x176)](_0x73b017[_0x191df7(0x177)], app[_0x191df7(0x178)] || ''), '\x22]');
                            continue;
                        case '5':
                            var _0xd51d5c = app[_0x191df7(0x15b)][_0x191df7(0x179)]()[_0x191df7(0x16b)];
                            continue;
                        }
                        break;
                    }
                },
                'addOne': function (_0x41ad37) {
                    var _0x38b1f1 = _0x8ece91, _0xe4c7ac = new app[(_0x38b1f1(0x17a))]({ 'model': _0x41ad37 });
                    document[_0x38b1f1(0x151)](_0x73b017[_0x38b1f1(0x17b)])[_0x38b1f1(0x17c)](_0xe4c7ac[_0x38b1f1(0x17d)]()['el']);
                },
                'addAll': function () {
                    var _0x30d8c2 = _0x8ece91;
                    this['$'](_0x73b017[_0x30d8c2(0x17b)])[_0x30d8c2(0x159)](-0x1 * 0xc91 + -0x1 * -0xe07 + -0x176)[_0x30d8c2(0x153)] = '', app[_0x30d8c2(0x15b)][_0x30d8c2(0x17e)](this[_0x30d8c2(0x165)], this);
                },
                'filterOne': function (_0x353880) {
                    var _0xdb993b = _0x8ece91;
                    _0x353880[_0xdb993b(0x17f)](_0xdb993b(0x180));
                },
                'filterAll': function () {
                    var _0x3654a4 = _0x8ece91;
                    app[_0x3654a4(0x15b)][_0x3654a4(0x17e)](this[_0x3654a4(0x160)], this);
                },
                'newAttributes': function () {
                    var _0x3aebf1 = _0x8ece91;
                    return {
                        'title': this[_0x3aebf1(0x166)][_0x3aebf1(0x181)][_0x3aebf1(0x182)](),
                        'order': app[_0x3aebf1(0x15b)][_0x3aebf1(0x183)](),
                        'completed': ![]
                    };
                },
                'createOnEnter': function (_0x3230a7) {
                    var _0x5cced8 = _0x8ece91;
                    if (_0x3230a7[_0x5cced8(0x184)] !== ENTER_KEY || !this[_0x5cced8(0x166)][_0x5cced8(0x181)]['trim']())
                        return;
                    app[_0x5cced8(0x15b)][_0x5cced8(0x185)](this[_0x5cced8(0x186)]()), this['input']['value'] = '';
                },
                'clearCompleted': function () {
                    var _0x49de16 = _0x8ece91;
                    return app[_0x49de16(0x15b)][_0x49de16(0x179)]()['forEach'](function (_0x291ed0) {
                        var _0x2fdb41 = _0x49de16;
                        _0x291ed0[_0x2fdb41(0x187)]();
                    }), ![];
                },
                'toggleAllComplete': function () {
                    var _0xfbccfe = _0x8ece91, _0x419047 = this[_0xfbccfe(0x157)]['checked'];
                    app[_0xfbccfe(0x15b)][_0xfbccfe(0x17e)](function (_0x2024dc) {
                        var _0x3e7c7e = _0xfbccfe;
                        _0x2024dc[_0x3e7c7e(0x188)]({ 'completed': _0x419047 });
                    });
                }
            });
            continue;
        case '1':
            var _0x124ac1 = function (_0x4b622f, _0x4a13cf) {
                var _0x1caef8 = _0x8ece91;
                _0x4b622f[_0x1caef8(0x189)][_0x1caef8(0x18a)] = _0x4a13cf ? '' : _0x73b017[_0x1caef8(0x18b)];
            };
            continue;
        case '2':
            continue;
        case '3':
            var _0x55c450 = function (_0x3dfb3c, _0x5f3284) {
                var _0x4d2f95 = _0x8ece91;
                return [][_0x4d2f95(0x18c)][_0x4d2f95(0x16e)](document[_0x4d2f95(0x18d)](_0x5f3284), function (_0x14eca2) {
                    return _0x14eca2 === _0x3dfb3c;
                });
            };
            continue;
        case '4':
            var _0x73b017 = {
                'MwVGi': _0x8ece91(0x18e),
                'BAmTm': _0xac0470[_0x8ece91(0x18f)],
                'HdHRR': _0xac0470[_0x8ece91(0x190)],
                'bMSoZ': _0xac0470[_0x8ece91(0x191)],
                'KxWKl': _0xac0470[_0x8ece91(0x192)],
                'pjlUr': _0xac0470[_0x8ece91(0x193)],
                'wlAjm': function (_0x4eebdd, _0x257e4f, _0x394526) {
                    return _0x4eebdd(_0x257e4f, _0x394526);
                },
                'vriDC': function (_0x303aa6, _0x579724, _0x48bb67) {
                    var _0x16abb3 = _0x8ece91;
                    return _0xac0470[_0x16abb3(0x194)](_0x303aa6, _0x579724, _0x48bb67);
                },
                'EdVdX': _0x8ece91(0x195),
                'WKdBb': function (_0x32b7d5, _0x1966c6) {
                    return _0x32b7d5 + _0x1966c6;
                },
                'AAyvD': function (_0x40bf21, _0x143e3b) {
                    return _0x40bf21 + _0x143e3b;
                },
                'BdVLz': _0x8ece91(0x196),
                'hCTVD': _0xac0470[_0x8ece91(0x197)]
            };
            continue;
        }
        break;
    }
}());
