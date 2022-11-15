(function (_0x17a737) {
    'use strict';
    var _0x2773ff = _0x3188;
    var _0x1a4759 = {
            '&': _0x2773ff(149),
            '<': _0x2773ff(150),
            '>': '&gt;',
            '"': _0x2773ff(151),
            '\'': _0x2773ff(152),
            '`': _0x2773ff(153)
        }, _0x304551 = function (_0xaa2da) {
            return _0x1a4759[_0xaa2da];
        }, _0x41dce1 = /[&<>"'`]/g, _0x118835 = new RegExp(_0x41dce1[_0x2773ff(154)]), _0x5e5967 = function (_0x4acba6) {
            var _0x98c7e6 = _0x2773ff;
            return _0x4acba6 && _0x118835[_0x98c7e6(155)](_0x4acba6) ? _0x4acba6[_0x98c7e6(156)](_0x41dce1, _0x304551) : _0x4acba6;
        };
    function _0x2936e1() {
        var _0x347154 = _0x2773ff;
        this['defaultTemplate'] = _0x347154(157) + _0x347154(158) + _0x347154(159) + '<label>{{title}}</label>' + _0x347154(160) + '</div>' + '</li>';
    }
    _0x2936e1[_0x2773ff(161)][_0x2773ff(162)] = function (_0x971993) {
        var _0x6d78f3 = _0x2773ff, _0xeaee1e, _0xed9d67, _0x358b9d = '';
        for (_0xeaee1e = 0, _0xed9d67 = _0x971993[_0x6d78f3(163)]; _0xeaee1e < _0xed9d67; _0xeaee1e++) {
            var _0x1cc62e = this['defaultTemplate'], _0x14a38c = '', _0x326a88 = '';
            _0x971993[_0xeaee1e]['completed'] && (_0x14a38c = 'completed', _0x326a88 = 'checked'), _0x1cc62e = _0x1cc62e[_0x6d78f3(156)](_0x6d78f3(164), _0x971993[_0xeaee1e]['id']), _0x1cc62e = _0x1cc62e[_0x6d78f3(156)](_0x6d78f3(165), _0x5e5967(_0x971993[_0xeaee1e]['title'])), _0x1cc62e = _0x1cc62e[_0x6d78f3(156)](_0x6d78f3(166), _0x14a38c), _0x1cc62e = _0x1cc62e['replace'](_0x6d78f3(167), _0x326a88), _0x358b9d = _0x358b9d + _0x1cc62e;
        }
        return _0x358b9d;
    }, _0x2936e1[_0x2773ff(161)][_0x2773ff(168)] = function (_0xc7d84b) {
        var _0x25dfbe = _0xc7d84b === 1 ? '' : 's';
        return '<strong>' + _0xc7d84b + '</strong> item' + _0x25dfbe + ' left';
    }, _0x2936e1[_0x2773ff(161)][_0x2773ff(169)] = function (_0x5c5f6a) {
        var _0xf036d6 = _0x2773ff;
        return _0x5c5f6a > 0 ? _0xf036d6(170) : '';
    }, _0x17a737[_0x2773ff(171)] = _0x17a737[_0x2773ff(171)] || {}, _0x17a737['app'][_0x2773ff(172)] = _0x2936e1;
}(window));