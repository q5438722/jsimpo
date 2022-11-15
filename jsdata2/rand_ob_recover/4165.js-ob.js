define([
    _0x37fc24(131),
    _0x37fc24(132),
    _0x37fc24(133),
    'collections/todos',
    'views/todos',
    _0x37fc24(134),
    'common'
], function (_0x357d09, _0x30eeb5, _0x14794d, _0x2cf7b5, _0x52af5f, _0x3ae5b3, _0x4826da) {
    'use strict';
    var _0x4fec1f = _0x37fc24, _0x17023f = {
            'woCFI': '5|10|9|7|8|3|4|0|1|2|6',
            'peZVu': _0x4fec1f(135),
            'WkLlQ': _0x4fec1f(136),
            'jzPzm': _0x4fec1f(137),
            'Yacpq': _0x4fec1f(138),
            'EaDIW': '.toggle-all',
            'KeRkL': '.todo-list',
            'Kxpqh': _0x4fec1f(139),
            'xRGFP': '.new-todo',
            'jcNZc': _0x4fec1f(140),
            'XkwRp': _0x4fec1f(141),
            'YAZlW': function (_0x30b012, _0x2cdf67) {
                return _0x30b012 + _0x2cdf67;
            },
            'pUZyR': 'visible',
            'cXtsf': function (_0x2d1b9a, _0x3d6e97) {
                return _0x2d1b9a !== _0x3d6e97;
            },
            'TbhBR': _0x4fec1f(142),
            'zUxOO': _0x4fec1f(143),
            'SLRvA': 'clearCompleted',
            'isZAh': _0x4fec1f(144)
        };
    var _0x2a0533 = _0x14794d[_0x4fec1f(145)][_0x4fec1f(146)]({
        'el': _0x17023f[_0x4fec1f(147)],
        'template': _0x30eeb5[_0x4fec1f(148)](_0x3ae5b3),
        'events': {
            'keypress .new-todo': _0x17023f[_0x4fec1f(149)],
            'click .clear-completed': _0x17023f['SLRvA'],
            'click .toggle-all': _0x17023f[_0x4fec1f(150)]
        },
        'initialize': function () {
            var _0x97ba = _0x4fec1f, _0x14ea28 = _0x17023f[_0x97ba(151)]['split']('|'), _0x5e8b79 = 752 * -4 + 6762 + 2 * -1877;
            while (!![]) {
                switch (_0x14ea28[_0x5e8b79++]) {
                case '0':
                    this[_0x97ba(152)](_0x2cf7b5, _0x17023f[_0x97ba(153)], this[_0x97ba(154)]);
                    continue;
                case '1':
                    this[_0x97ba(152)](_0x2cf7b5, _0x17023f[_0x97ba(155)], this[_0x97ba(156)]);
                    continue;
                case '2':
                    this[_0x97ba(152)](_0x2cf7b5, 'all', _0x30eeb5[_0x97ba(157)](this[_0x97ba(158)], -9799 + 77 * -30 + -1 * -12109));
                    continue;
                case '3':
                    this[_0x97ba(152)](_0x2cf7b5, _0x17023f[_0x97ba(159)], this['addOne']);
                    continue;
                case '4':
                    this[_0x97ba(152)](_0x2cf7b5, _0x17023f[_0x97ba(160)], this[_0x97ba(161)]);
                    continue;
                case '5':
                    this[_0x97ba(162)] = this['$'](_0x17023f[_0x97ba(163)])[-797 * 1 + -8607 + 9404];
                    continue;
                case '6':
                    _0x2cf7b5[_0x97ba(164)]({ 'reset': !![] });
                    continue;
                case '7':
                    this[_0x97ba(165)] = this['$']('.main');
                    continue;
                case '8':
                    this['$todoList'] = this['$'](_0x17023f[_0x97ba(166)]);
                    continue;
                case '9':
                    this[_0x97ba(167)] = this['$'](_0x17023f['Kxpqh']);
                    continue;
                case '10':
                    this[_0x97ba(168)] = this['$'](_0x17023f[_0x97ba(169)]);
                    continue;
                }
                break;
            }
        },
        'render': function () {
            var _0x1a9993 = _0x4fec1f, _0x3df7c9 = _0x2cf7b5['completed']()[_0x1a9993(170)], _0x4180c0 = _0x2cf7b5['remaining']()[_0x1a9993(170)];
            _0x2cf7b5[_0x1a9993(170)] ? (this[_0x1a9993(165)][_0x1a9993(171)](), this['$footer'][_0x1a9993(171)](), this[_0x1a9993(167)][_0x1a9993(172)](this['template']({
                'completed': _0x3df7c9,
                'remaining': _0x4180c0
            })), this['$'](_0x17023f['jcNZc'])[_0x1a9993(173)](_0x17023f[_0x1a9993(174)])['filter'](_0x17023f[_0x1a9993(175)](_0x17023f[_0x1a9993(175)](_0x1a9993(176), _0x4826da[_0x1a9993(177)] || ''), '"]'))[_0x1a9993(178)](_0x17023f[_0x1a9993(174)])) : (this[_0x1a9993(165)][_0x1a9993(179)](), this[_0x1a9993(167)][_0x1a9993(179)]()), this[_0x1a9993(162)][_0x1a9993(180)] = !_0x4180c0;
        },
        'addOne': function (_0x3b1b27) {
            var _0x3ff036 = _0x4fec1f, _0x3edb7b = new _0x52af5f({ 'model': _0x3b1b27 });
            this[_0x3ff036(181)][_0x3ff036(182)](_0x3edb7b['render']()['el']);
        },
        'addAll': function () {
            var _0x1d8087 = _0x4fec1f;
            this[_0x1d8087(181)][_0x1d8087(183)](), _0x2cf7b5['each'](this[_0x1d8087(184)], this);
        },
        'filterOne': function (_0xf84045) {
            var _0x448b3c = _0x4fec1f;
            _0xf84045['trigger'](_0x17023f[_0x448b3c(185)]);
        },
        'filterAll': function () {
            var _0x4de4c7 = _0x4fec1f;
            _0x2cf7b5[_0x4de4c7(186)](this[_0x4de4c7(154)], this);
        },
        'newAttributes': function () {
            var _0x130644 = _0x4fec1f;
            return {
                'title': this[_0x130644(168)][_0x130644(187)]()[_0x130644(188)](),
                'order': _0x2cf7b5[_0x130644(189)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x410f9e) {
            var _0x23a11d = _0x4fec1f;
            if (_0x17023f[_0x23a11d(190)](_0x410f9e[_0x23a11d(191)], _0x4826da['ENTER_KEY']) || !this[_0x23a11d(168)]['val']()['trim']())
                return;
            _0x2cf7b5['create'](this[_0x23a11d(192)]()), this[_0x23a11d(168)][_0x23a11d(187)]('');
        },
        'clearCompleted': function () {
            var _0x4952b8 = _0x4fec1f;
            return _0x30eeb5['invoke'](_0x2cf7b5[_0x4952b8(193)](), 'destroy'), ![];
        },
        'toggleAllComplete': function () {
            var _0x233db7 = _0x4fec1f, _0x38da8a = this[_0x233db7(162)]['checked'];
            _0x2cf7b5['each'](function (_0x588ea6) {
                var _0x1f1b98 = _0x233db7;
                _0x588ea6[_0x1f1b98(194)]({ 'completed': _0x38da8a });
            });
        }
    });
    return _0x2a0533;
});