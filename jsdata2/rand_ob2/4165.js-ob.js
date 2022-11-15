var _0x5da4 = [
    'destroy',
    'save',
    '2959tBZpEI',
    '123LoXaey',
    '17089LvxcFf',
    '680242oTcxhm',
    '8167TGOdHO',
    '2AyDRoY',
    '106651MUKqaJ',
    '983683bFBiro',
    '238505JtWswC',
    '8wcpnux',
    'jquery',
    'backbone',
    'collections/todos',
    'views/todos',
    'text!templates/stats.html',
    'common',
    'View',
    'extend',
    'template',
    'createOnEnter',
    'allCheckbox',
    '.toggle-all',
    '.new-todo',
    '$footer',
    '.main',
    '$todoList',
    '.todo-list',
    'listenTo',
    'add',
    'addOne',
    'reset',
    'addAll',
    'change:completed',
    'filter',
    'filterAll',
    'all',
    'debounce',
    'render',
    'fetch',
    'completed',
    'remaining',
    'length',
    'show',
    'html',
    '.filters\x20li\x20a',
    'removeClass',
    '[href=\x22#/',
    'TodoFilter',
    'addClass',
    'selected',
    '$main',
    'hide',
    'checked',
    'append',
    'empty',
    'each',
    'trigger',
    'visible',
    'filterOne',
    '$input',
    'val',
    'nextOrder',
    'which',
    'ENTER_KEY',
    'trim',
    'create',
    'newAttributes',
    'invoke'
];
function _0xfebb(_0xb93f59, _0x326151) {
    return _0xfebb = function (_0x5da434, _0xfebbb6) {
        _0x5da434 = _0x5da434 - 0x1e8;
        var _0x37a059 = _0x5da4[_0x5da434];
        return _0x37a059;
    }, _0xfebb(_0xb93f59, _0x326151);
}
var _0x278c13 = _0xfebb;
(function (_0x186398, _0x41a55d) {
    var _0x3c2dbe = _0xfebb;
    while (!![]) {
        try {
            var _0x306ac9 = -parseInt(_0x3c2dbe(0x1e8)) * -parseInt(_0x3c2dbe(0x1e9)) + -parseInt(_0x3c2dbe(0x1ea)) + -parseInt(_0x3c2dbe(0x1eb)) + parseInt(_0x3c2dbe(0x1ec)) * parseInt(_0x3c2dbe(0x1ed)) + -parseInt(_0x3c2dbe(0x1ee)) + -parseInt(_0x3c2dbe(0x1ef)) + parseInt(_0x3c2dbe(0x1f0)) * parseInt(_0x3c2dbe(0x1f1));
            if (_0x306ac9 === _0x41a55d)
                break;
            else
                _0x186398['push'](_0x186398['shift']());
        } catch (_0x3b26d0) {
            _0x186398['push'](_0x186398['shift']());
        }
    }
}(_0x5da4, 0x7a3ba), define([
    _0x278c13(0x1f2),
    'underscore',
    _0x278c13(0x1f3),
    _0x278c13(0x1f4),
    _0x278c13(0x1f5),
    _0x278c13(0x1f6),
    _0x278c13(0x1f7)
], function (_0x2268c5, _0x36a95a, _0xcc8ee0, _0x1129db, _0x4180e6, _0x541bc0, _0x35e6a8) {
    'use strict';
    var _0x2c482c = _0x278c13;
    var _0x8d176c = _0xcc8ee0[_0x2c482c(0x1f8)][_0x2c482c(0x1f9)]({
        'el': '.todoapp',
        'template': _0x36a95a[_0x2c482c(0x1fa)](_0x541bc0),
        'events': {
            'keypress\x20.new-todo': _0x2c482c(0x1fb),
            'click\x20.clear-completed': 'clearCompleted',
            'click\x20.toggle-all': 'toggleAllComplete'
        },
        'initialize': function () {
            var _0x876a49 = _0x2c482c;
            this[_0x876a49(0x1fc)] = this['$'](_0x876a49(0x1fd))[0x0], this['$input'] = this['$'](_0x876a49(0x1fe)), this[_0x876a49(0x1ff)] = this['$']('.footer'), this['$main'] = this['$'](_0x876a49(0x200)), this[_0x876a49(0x201)] = this['$'](_0x876a49(0x202)), this[_0x876a49(0x203)](_0x1129db, _0x876a49(0x204), this[_0x876a49(0x205)]), this[_0x876a49(0x203)](_0x1129db, _0x876a49(0x206), this[_0x876a49(0x207)]), this['listenTo'](_0x1129db, _0x876a49(0x208), this['filterOne']), this[_0x876a49(0x203)](_0x1129db, _0x876a49(0x209), this[_0x876a49(0x20a)]), this[_0x876a49(0x203)](_0x1129db, _0x876a49(0x20b), _0x36a95a[_0x876a49(0x20c)](this[_0x876a49(0x20d)], 0x0)), _0x1129db[_0x876a49(0x20e)]({ 'reset': !![] });
        },
        'render': function () {
            var _0xf92ba6 = _0x2c482c, _0x46c208 = _0x1129db[_0xf92ba6(0x20f)]()['length'], _0x472e80 = _0x1129db[_0xf92ba6(0x210)]()['length'];
            _0x1129db[_0xf92ba6(0x211)] ? (this['$main'][_0xf92ba6(0x212)](), this[_0xf92ba6(0x1ff)][_0xf92ba6(0x212)](), this['$footer'][_0xf92ba6(0x213)](this['template']({
                'completed': _0x46c208,
                'remaining': _0x472e80
            })), this['$'](_0xf92ba6(0x214))[_0xf92ba6(0x215)]('selected')[_0xf92ba6(0x209)](_0xf92ba6(0x216) + (_0x35e6a8[_0xf92ba6(0x217)] || '') + '\x22]')[_0xf92ba6(0x218)](_0xf92ba6(0x219))) : (this[_0xf92ba6(0x21a)][_0xf92ba6(0x21b)](), this['$footer'][_0xf92ba6(0x21b)]()), this[_0xf92ba6(0x1fc)][_0xf92ba6(0x21c)] = !_0x472e80;
        },
        'addOne': function (_0x26f0e0) {
            var _0x283c3a = _0x2c482c, _0x12c31d = new _0x4180e6({ 'model': _0x26f0e0 });
            this[_0x283c3a(0x201)][_0x283c3a(0x21d)](_0x12c31d[_0x283c3a(0x20d)]()['el']);
        },
        'addAll': function () {
            var _0xe24a4d = _0x2c482c;
            this[_0xe24a4d(0x201)][_0xe24a4d(0x21e)](), _0x1129db[_0xe24a4d(0x21f)](this['addOne'], this);
        },
        'filterOne': function (_0x4161cb) {
            var _0x46314a = _0x2c482c;
            _0x4161cb[_0x46314a(0x220)](_0x46314a(0x221));
        },
        'filterAll': function () {
            var _0x58bb4a = _0x2c482c;
            _0x1129db[_0x58bb4a(0x21f)](this[_0x58bb4a(0x222)], this);
        },
        'newAttributes': function () {
            var _0x47ae19 = _0x2c482c;
            return {
                'title': this[_0x47ae19(0x223)][_0x47ae19(0x224)]()['trim'](),
                'order': _0x1129db[_0x47ae19(0x225)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x4a7625) {
            var _0x168432 = _0x2c482c;
            if (_0x4a7625[_0x168432(0x226)] !== _0x35e6a8[_0x168432(0x227)] || !this[_0x168432(0x223)]['val']()[_0x168432(0x228)]())
                return;
            _0x1129db[_0x168432(0x229)](this[_0x168432(0x22a)]()), this[_0x168432(0x223)]['val']('');
        },
        'clearCompleted': function () {
            var _0x762be0 = _0x2c482c;
            return _0x36a95a[_0x762be0(0x22b)](_0x1129db['completed'](), _0x762be0(0x22c)), ![];
        },
        'toggleAllComplete': function () {
            var _0x4f4ca5 = _0x2c482c, _0x48b0b3 = this[_0x4f4ca5(0x1fc)][_0x4f4ca5(0x21c)];
            _0x1129db[_0x4f4ca5(0x21f)](function (_0x2ab013) {
                var _0x2c3f56 = _0x4f4ca5;
                _0x2ab013[_0x2c3f56(0x22d)]({ 'completed': _0x48b0b3 });
            });
        }
    });
    return _0x8d176c;
}));
