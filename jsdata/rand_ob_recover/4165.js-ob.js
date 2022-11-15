define([
    _0x5d35f2(185),
    'underscore',
    _0x5d35f2(186),
    _0x5d35f2(187),
    _0x5d35f2(188),
    'text!templates/stats.html',
    _0x5d35f2(189)
], function (_0x1e6860, _0x4fb60e, _0x304321, _0x5eedd9, _0x526f58, _0x466204, _0x4d77ab) {
    'use strict';
    var _0x6691fe = _0x5d35f2, _0x26e965 = {
            'CeCiT': _0x6691fe(190),
            'YuToh': '.footer',
            'TODKt': '.main',
            'wChtr': _0x6691fe(191),
            'Fptsg': 'add',
            'zMjTJ': _0x6691fe(192),
            'PuQHH': 'all',
            'HlPTi': _0x6691fe(193),
            'KkSvL': 'selected',
            'utoie': function (_0x1c75fb, _0x270481) {
                return _0x1c75fb + _0x270481;
            },
            'ZKMJK': _0x6691fe(194),
            'EYsuj': function (_0x51fa49, _0x52ae1b) {
                return _0x51fa49 !== _0x52ae1b;
            },
            'SuGGE': _0x6691fe(195),
            'vCfZA': _0x6691fe(196),
            'pADgB': _0x6691fe(197),
            'rpiRE': _0x6691fe(198),
            'THAWd': 'toggleAllComplete'
        };
    var _0x5814a2 = _0x304321[_0x6691fe(199)][_0x6691fe(200)]({
        'el': _0x26e965['vCfZA'],
        'template': _0x4fb60e[_0x6691fe(201)](_0x466204),
        'events': {
            'keypress .new-todo': _0x26e965[_0x6691fe(202)],
            'click .clear-completed': _0x26e965[_0x6691fe(203)],
            'click .toggle-all': _0x26e965['THAWd']
        },
        'initialize': function () {
            var _0x1d134d = _0x6691fe;
            this[_0x1d134d(204)] = this['$'](_0x1d134d(205))[-1 * 9473 + 2 * 2155 + 1 * 5163], this['$input'] = this['$'](_0x26e965[_0x1d134d(206)]), this['$footer'] = this['$'](_0x26e965[_0x1d134d(207)]), this['$main'] = this['$'](_0x26e965[_0x1d134d(208)]), this[_0x1d134d(209)] = this['$'](_0x26e965[_0x1d134d(210)]), this[_0x1d134d(211)](_0x5eedd9, _0x26e965['Fptsg'], this[_0x1d134d(212)]), this[_0x1d134d(211)](_0x5eedd9, _0x1d134d(213), this[_0x1d134d(214)]), this[_0x1d134d(211)](_0x5eedd9, _0x26e965[_0x1d134d(215)], this[_0x1d134d(216)]), this[_0x1d134d(211)](_0x5eedd9, 'filter', this[_0x1d134d(217)]), this[_0x1d134d(211)](_0x5eedd9, _0x26e965['PuQHH'], _0x4fb60e[_0x1d134d(218)](this[_0x1d134d(219)], 5303 * -1 + 623 * 4 + 1 * 2811)), _0x5eedd9[_0x1d134d(220)]({ 'reset': !![] });
        },
        'render': function () {
            var _0x365ecf = _0x6691fe, _0x1ae3c9 = _0x5eedd9[_0x365ecf(221)]()[_0x365ecf(222)], _0x2b331e = _0x5eedd9[_0x365ecf(223)]()['length'];
            _0x5eedd9[_0x365ecf(222)] ? (this['$main'][_0x365ecf(224)](), this[_0x365ecf(225)][_0x365ecf(224)](), this[_0x365ecf(225)][_0x365ecf(226)](this[_0x365ecf(201)]({
                'completed': _0x1ae3c9,
                'remaining': _0x2b331e
            })), this['$'](_0x26e965[_0x365ecf(227)])[_0x365ecf(228)](_0x26e965[_0x365ecf(229)])[_0x365ecf(230)](_0x26e965[_0x365ecf(231)](_0x26e965[_0x365ecf(231)](_0x365ecf(232), _0x4d77ab[_0x365ecf(233)] || ''), '"]'))[_0x365ecf(234)](_0x26e965['KkSvL'])) : (this['$main'][_0x365ecf(235)](), this[_0x365ecf(225)]['hide']()), this[_0x365ecf(204)]['checked'] = !_0x2b331e;
        },
        'addOne': function (_0x26effc) {
            var _0x590dde = _0x6691fe, _0x40b949 = new _0x526f58({ 'model': _0x26effc });
            this[_0x590dde(209)]['append'](_0x40b949[_0x590dde(219)]()['el']);
        },
        'addAll': function () {
            var _0x46bf0d = _0x6691fe;
            this[_0x46bf0d(209)]['empty'](), _0x5eedd9[_0x46bf0d(236)](this[_0x46bf0d(212)], this);
        },
        'filterOne': function (_0x501894) {
            var _0x5d0c94 = _0x6691fe;
            _0x501894[_0x5d0c94(237)](_0x26e965[_0x5d0c94(238)]);
        },
        'filterAll': function () {
            var _0x40572b = _0x6691fe;
            _0x5eedd9[_0x40572b(236)](this[_0x40572b(216)], this);
        },
        'newAttributes': function () {
            var _0x2bbf20 = _0x6691fe;
            return {
                'title': this[_0x2bbf20(239)]['val']()[_0x2bbf20(240)](),
                'order': _0x5eedd9[_0x2bbf20(241)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x59d46a) {
            var _0xad25b4 = _0x6691fe;
            if (_0x26e965[_0xad25b4(242)](_0x59d46a[_0xad25b4(243)], _0x4d77ab[_0xad25b4(244)]) || !this[_0xad25b4(239)][_0xad25b4(245)]()[_0xad25b4(240)]())
                return;
            _0x5eedd9[_0xad25b4(246)](this[_0xad25b4(247)]()), this['$input'][_0xad25b4(245)]('');
        },
        'clearCompleted': function () {
            var _0x101a3d = _0x6691fe;
            return _0x4fb60e[_0x101a3d(248)](_0x5eedd9[_0x101a3d(221)](), _0x26e965[_0x101a3d(249)]), ![];
        },
        'toggleAllComplete': function () {
            var _0x24662f = _0x6691fe, _0x51a375 = this[_0x24662f(204)]['checked'];
            _0x5eedd9['each'](function (_0x27ff1e) {
                _0x27ff1e['save']({ 'completed': _0x51a375 });
            });
        }
    });
    return _0x5814a2;
});