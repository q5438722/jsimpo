var _0x6a2e = [
    'app',
    'Template',
    '288862HwkQWd',
    '230777jsctWZ',
    '28333XZgbKE',
    '8lDyeaX',
    '1082586vnZReE',
    '50073znrNLL',
    '1LpbaAE',
    '49066LgKRZV',
    '4gvEdDD',
    '1751429WUHKuC',
    '1PeUlKb',
    '&amp;',
    '&lt;',
    '&quot;',
    '&#x27;',
    '&#x60;',
    'source',
    'test',
    'replace',
    '<li\x20data-id=\x22{{id}}\x22\x20class=\x22{{completed}}\x22>',
    '<div\x20class=\x22view\x22>',
    '<input\x20class=\x22toggle\x22\x20type=\x22checkbox\x22\x20{{checked}}>',
    '<button\x20class=\x22destroy\x22></button>',
    'prototype',
    'show',
    'length',
    '{{id}}',
    '{{title}}',
    '{{completed}}',
    '{{checked}}',
    'itemCounter',
    'clearCompletedButton',
    'Clear\x20completed'
];
function _0x3188(_0xbe2960, _0x414e8d) {
    return _0x3188 = function (_0x6a2e97, _0x3188a1) {
        _0x6a2e97 = _0x6a2e97 - 0x8a;
        var _0x438ada = _0x6a2e[_0x6a2e97];
        return _0x438ada;
    }, _0x3188(_0xbe2960, _0x414e8d);
}
(function (_0x3f6e4d, _0x33a411) {
    var _0x5dc89c = _0x3188;
    while (!![]) {
        try {
            var _0x546d57 = -parseInt(_0x5dc89c(0x8a)) + parseInt(_0x5dc89c(0x8b)) + parseInt(_0x5dc89c(0x8c)) * -parseInt(_0x5dc89c(0x8d)) + -parseInt(_0x5dc89c(0x8e)) + parseInt(_0x5dc89c(0x8f)) * parseInt(_0x5dc89c(0x90)) + parseInt(_0x5dc89c(0x91)) * parseInt(_0x5dc89c(0x92)) + -parseInt(_0x5dc89c(0x93)) * -parseInt(_0x5dc89c(0x94));
            if (_0x546d57 === _0x33a411)
                break;
            else
                _0x3f6e4d['push'](_0x3f6e4d['shift']());
        } catch (_0x488f70) {
            _0x3f6e4d['push'](_0x3f6e4d['shift']());
        }
    }
}(_0x6a2e, 0x99e9f), function (_0x17a737) {
    'use strict';
    var _0x2773ff = _0x3188;
    var _0x1a4759 = {
            '&': _0x2773ff(0x95),
            '<': _0x2773ff(0x96),
            '>': '&gt;',
            '\x22': _0x2773ff(0x97),
            '\x27': _0x2773ff(0x98),
            '`': _0x2773ff(0x99)
        }, _0x304551 = function (_0xaa2da) {
            return _0x1a4759[_0xaa2da];
        }, _0x41dce1 = /[&<>"'`]/g, _0x118835 = new RegExp(_0x41dce1[_0x2773ff(0x9a)]), _0x5e5967 = function (_0x4acba6) {
            var _0x98c7e6 = _0x2773ff;
            return _0x4acba6 && _0x118835[_0x98c7e6(0x9b)](_0x4acba6) ? _0x4acba6[_0x98c7e6(0x9c)](_0x41dce1, _0x304551) : _0x4acba6;
        };
    function _0x2936e1() {
        var _0x347154 = _0x2773ff;
        this['defaultTemplate'] = _0x347154(0x9d) + _0x347154(0x9e) + _0x347154(0x9f) + '<label>{{title}}</label>' + _0x347154(0xa0) + '</div>' + '</li>';
    }
    _0x2936e1[_0x2773ff(0xa1)][_0x2773ff(0xa2)] = function (_0x971993) {
        var _0x6d78f3 = _0x2773ff, _0xeaee1e, _0xed9d67, _0x358b9d = '';
        for (_0xeaee1e = 0x0, _0xed9d67 = _0x971993[_0x6d78f3(0xa3)]; _0xeaee1e < _0xed9d67; _0xeaee1e++) {
            var _0x1cc62e = this['defaultTemplate'], _0x14a38c = '', _0x326a88 = '';
            _0x971993[_0xeaee1e]['completed'] && (_0x14a38c = 'completed', _0x326a88 = 'checked'), _0x1cc62e = _0x1cc62e[_0x6d78f3(0x9c)](_0x6d78f3(0xa4), _0x971993[_0xeaee1e]['id']), _0x1cc62e = _0x1cc62e[_0x6d78f3(0x9c)](_0x6d78f3(0xa5), _0x5e5967(_0x971993[_0xeaee1e]['title'])), _0x1cc62e = _0x1cc62e[_0x6d78f3(0x9c)](_0x6d78f3(0xa6), _0x14a38c), _0x1cc62e = _0x1cc62e['replace'](_0x6d78f3(0xa7), _0x326a88), _0x358b9d = _0x358b9d + _0x1cc62e;
        }
        return _0x358b9d;
    }, _0x2936e1[_0x2773ff(0xa1)][_0x2773ff(0xa8)] = function (_0xc7d84b) {
        var _0x25dfbe = _0xc7d84b === 0x1 ? '' : 's';
        return '<strong>' + _0xc7d84b + '</strong>\x20item' + _0x25dfbe + '\x20left';
    }, _0x2936e1[_0x2773ff(0xa1)][_0x2773ff(0xa9)] = function (_0x5c5f6a) {
        var _0xf036d6 = _0x2773ff;
        return _0x5c5f6a > 0x0 ? _0xf036d6(0xaa) : '';
    }, _0x17a737[_0x2773ff(0xab)] = _0x17a737[_0x2773ff(0xab)] || {}, _0x17a737['app'][_0x2773ff(0xac)] = _0x2936e1;
}(window));
