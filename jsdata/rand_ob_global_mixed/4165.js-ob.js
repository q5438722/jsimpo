var _0x41dd = [
    '345073KFwqQf',
    '1Hbhynl',
    '388584sgFdgc',
    '108965lMSIoq',
    '878483DlhDgI',
    'jquery',
    'backbone',
    'collections/todos',
    'views/todos',
    'common',
    '.new-todo',
    '.todo-list',
    'change:completed',
    '.filters\x20li\x20a',
    'visible',
    'destroy',
    '.todoapp',
    'createOnEnter',
    'clearCompleted',
    'View',
    'extend',
    'template',
    'pADgB',
    'rpiRE',
    'allCheckbox',
    '.toggle-all',
    'CeCiT',
    'YuToh',
    'TODKt',
    '$todoList',
    'wChtr',
    'listenTo',
    'addOne',
    'reset',
    'addAll',
    'zMjTJ',
    'filterOne',
    'filterAll',
    'debounce',
    'render',
    'fetch',
    'completed',
    'length',
    'remaining',
    'show',
    '$footer',
    'html',
    'HlPTi',
    'removeClass',
    'KkSvL',
    'filter',
    'utoie',
    '[href=\x22#/',
    'TodoFilter',
    'addClass',
    'hide',
    'each',
    'trigger',
    'ZKMJK',
    '$input',
    'trim',
    'nextOrder',
    'EYsuj',
    'which',
    'ENTER_KEY',
    'val',
    'create',
    'newAttributes',
    'invoke',
    'SuGGE',
    '139501TFTTQM',
    '1qYKoXu',
    '254756rJoXSz',
    '11BuLrCC',
    '32499fhiCYK'
];
function _0x3ebb(_0x28e167, _0x4426cd) {
    return _0x3ebb = function (_0x15f094, _0x50314e) {
        _0x15f094 = _0x15f094 - (0xc * 0x16d + 0x1 * -0x22da + 0x126d);
        var _0x34bd1b = _0x41dd[_0x15f094];
        return _0x34bd1b;
    }, _0x3ebb(_0x28e167, _0x4426cd);
}
var _0x5d35f2 = _0x3ebb;
(function (_0x8dcf1e, _0x195e46) {
    var _0x4b2d20 = _0x3ebb;
    while (!![]) {
        try {
            var _0x3aaa3b = -parseInt(_0x4b2d20(0xaf)) * -parseInt(_0x4b2d20(0xb0)) + -parseInt(_0x4b2d20(0xb1)) + parseInt(_0x4b2d20(0xb2)) * parseInt(_0x4b2d20(0xb3)) + -parseInt(_0x4b2d20(0xb4)) * -parseInt(_0x4b2d20(0xb5)) + parseInt(_0x4b2d20(0xb6)) + parseInt(_0x4b2d20(0xb7)) + -parseInt(_0x4b2d20(0xb8));
            if (_0x3aaa3b === _0x195e46)
                break;
            else
                _0x8dcf1e['push'](_0x8dcf1e['shift']());
        } catch (_0x1ea64b) {
            _0x8dcf1e['push'](_0x8dcf1e['shift']());
        }
    }
}(_0x41dd, -0x2a * -0x16d6 + 0x4eb * 0xb6 + -0x1 * 0x41809), define([
    _0x5d35f2(0xb9),
    'underscore',
    _0x5d35f2(0xba),
    _0x5d35f2(0xbb),
    _0x5d35f2(0xbc),
    'text!templates/stats.html',
    _0x5d35f2(0xbd)
], function (_0x1e6860, _0x4fb60e, _0x304321, _0x5eedd9, _0x526f58, _0x466204, _0x4d77ab) {
    'use strict';
    var _0x6691fe = _0x5d35f2, _0x26e965 = {
            'CeCiT': _0x6691fe(0xbe),
            'YuToh': '.footer',
            'TODKt': '.main',
            'wChtr': _0x6691fe(0xbf),
            'Fptsg': 'add',
            'zMjTJ': _0x6691fe(0xc0),
            'PuQHH': 'all',
            'HlPTi': _0x6691fe(0xc1),
            'KkSvL': 'selected',
            'utoie': function (_0x1c75fb, _0x270481) {
                return _0x1c75fb + _0x270481;
            },
            'ZKMJK': _0x6691fe(0xc2),
            'EYsuj': function (_0x51fa49, _0x52ae1b) {
                return _0x51fa49 !== _0x52ae1b;
            },
            'SuGGE': _0x6691fe(0xc3),
            'vCfZA': _0x6691fe(0xc4),
            'pADgB': _0x6691fe(0xc5),
            'rpiRE': _0x6691fe(0xc6),
            'THAWd': 'toggleAllComplete'
        };
    var _0x5814a2 = _0x304321[_0x6691fe(0xc7)][_0x6691fe(0xc8)]({
        'el': _0x26e965['vCfZA'],
        'template': _0x4fb60e[_0x6691fe(0xc9)](_0x466204),
        'events': {
            'keypress\x20.new-todo': _0x26e965[_0x6691fe(0xca)],
            'click\x20.clear-completed': _0x26e965[_0x6691fe(0xcb)],
            'click\x20.toggle-all': _0x26e965['THAWd']
        },
        'initialize': function () {
            var _0x1d134d = _0x6691fe;
            this[_0x1d134d(0xcc)] = this['$'](_0x1d134d(0xcd))[-0x1 * 0x2501 + 0x2 * 0x86b + 0x1 * 0x142b], this['$input'] = this['$'](_0x26e965[_0x1d134d(0xce)]), this['$footer'] = this['$'](_0x26e965[_0x1d134d(0xcf)]), this['$main'] = this['$'](_0x26e965[_0x1d134d(0xd0)]), this[_0x1d134d(0xd1)] = this['$'](_0x26e965[_0x1d134d(0xd2)]), this[_0x1d134d(0xd3)](_0x5eedd9, _0x26e965['Fptsg'], this[_0x1d134d(0xd4)]), this[_0x1d134d(0xd3)](_0x5eedd9, _0x1d134d(0xd5), this[_0x1d134d(0xd6)]), this[_0x1d134d(0xd3)](_0x5eedd9, _0x26e965[_0x1d134d(0xd7)], this[_0x1d134d(0xd8)]), this[_0x1d134d(0xd3)](_0x5eedd9, 'filter', this[_0x1d134d(0xd9)]), this[_0x1d134d(0xd3)](_0x5eedd9, _0x26e965['PuQHH'], _0x4fb60e[_0x1d134d(0xda)](this[_0x1d134d(0xdb)], 0x14b7 * -0x1 + 0x26f * 0x4 + 0x1 * 0xafb)), _0x5eedd9[_0x1d134d(0xdc)]({ 'reset': !![] });
        },
        'render': function () {
            var _0x365ecf = _0x6691fe, _0x1ae3c9 = _0x5eedd9[_0x365ecf(0xdd)]()[_0x365ecf(0xde)], _0x2b331e = _0x5eedd9[_0x365ecf(0xdf)]()['length'];
            _0x5eedd9[_0x365ecf(0xde)] ? (this['$main'][_0x365ecf(0xe0)](), this[_0x365ecf(0xe1)][_0x365ecf(0xe0)](), this[_0x365ecf(0xe1)][_0x365ecf(0xe2)](this[_0x365ecf(0xc9)]({
                'completed': _0x1ae3c9,
                'remaining': _0x2b331e
            })), this['$'](_0x26e965[_0x365ecf(0xe3)])[_0x365ecf(0xe4)](_0x26e965[_0x365ecf(0xe5)])[_0x365ecf(0xe6)](_0x26e965[_0x365ecf(0xe7)](_0x26e965[_0x365ecf(0xe7)](_0x365ecf(0xe8), _0x4d77ab[_0x365ecf(0xe9)] || ''), '\x22]'))[_0x365ecf(0xea)](_0x26e965['KkSvL'])) : (this['$main'][_0x365ecf(0xeb)](), this[_0x365ecf(0xe1)]['hide']()), this[_0x365ecf(0xcc)]['checked'] = !_0x2b331e;
        },
        'addOne': function (_0x26effc) {
            var _0x590dde = _0x6691fe, _0x40b949 = new _0x526f58({ 'model': _0x26effc });
            this[_0x590dde(0xd1)]['append'](_0x40b949[_0x590dde(0xdb)]()['el']);
        },
        'addAll': function () {
            var _0x46bf0d = _0x6691fe;
            this[_0x46bf0d(0xd1)]['empty'](), _0x5eedd9[_0x46bf0d(0xec)](this[_0x46bf0d(0xd4)], this);
        },
        'filterOne': function (_0x501894) {
            var _0x5d0c94 = _0x6691fe;
            _0x501894[_0x5d0c94(0xed)](_0x26e965[_0x5d0c94(0xee)]);
        },
        'filterAll': function () {
            var _0x40572b = _0x6691fe;
            _0x5eedd9[_0x40572b(0xec)](this[_0x40572b(0xd8)], this);
        },
        'newAttributes': function () {
            var _0x2bbf20 = _0x6691fe;
            return {
                'title': this[_0x2bbf20(0xef)]['val']()[_0x2bbf20(0xf0)](),
                'order': _0x5eedd9[_0x2bbf20(0xf1)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x59d46a) {
            var _0xad25b4 = _0x6691fe;
            if (_0x26e965[_0xad25b4(0xf2)](_0x59d46a[_0xad25b4(0xf3)], _0x4d77ab[_0xad25b4(0xf4)]) || !this[_0xad25b4(0xef)][_0xad25b4(0xf5)]()[_0xad25b4(0xf0)]())
                return;
            _0x5eedd9[_0xad25b4(0xf6)](this[_0xad25b4(0xf7)]()), this['$input'][_0xad25b4(0xf5)]('');
        },
        'clearCompleted': function () {
            var _0x101a3d = _0x6691fe;
            return _0x4fb60e[_0x101a3d(0xf8)](_0x5eedd9[_0x101a3d(0xdd)](), _0x26e965[_0x101a3d(0xf9)]), ![];
        },
        'toggleAllComplete': function () {
            var _0x24662f = _0x6691fe, _0x51a375 = this[_0x24662f(0xcc)]['checked'];
            _0x5eedd9['each'](function (_0x27ff1e) {
                _0x27ff1e['save']({ 'completed': _0x51a375 });
            });
        }
    });
    return _0x5814a2;
}));
