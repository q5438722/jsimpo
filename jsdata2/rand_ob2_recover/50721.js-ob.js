!function () {
    var _0x77a82e = _0xf499;
    if (jQuery && jQuery['fn'] && jQuery['fn'][_0x77a82e(132)] && jQuery['fn'][_0x77a82e(132)][_0x77a82e(133)])
        var _0x5d6438 = jQuery['fn'][_0x77a82e(132)][_0x77a82e(133)];
    _0x5d6438['define'](_0x77a82e(134), [], function () {
        function _0x6a0f3b(_0x3bc8fb, _0x47b7d9, _0x284968, _0x213a67) {
            return _0x3bc8fb % 10 < 5 && _0x3bc8fb % 10 > 0 && _0x3bc8fb % 100 < 5 || _0x3bc8fb % 100 > 20 ? _0x3bc8fb % 10 > 1 ? _0x284968 : _0x47b7d9 : _0x213a67;
        }
        return {
            'errorLoading': function () {
                var _0x1ee99e = _0xf499;
                return _0x1ee99e(135);
            },
            'inputTooLong': function (_0x811f11) {
                var _0x19b0a3 = _0xf499, _0x4ec25f = _0x811f11['input'][_0x19b0a3(136)] - _0x811f11[_0x19b0a3(137)], _0x5b6032 = _0x19b0a3(138) + _0x4ec25f + _0x19b0a3(139);
                return _0x5b6032 += _0x6a0f3b(_0x4ec25f, '', 'a', 'ов'), _0x5b6032 += ' меньше';
            },
            'inputTooShort': function (_0x200143) {
                var _0x6388f9 = _0xf499, _0x2441bb = _0x200143[_0x6388f9(140)] - _0x200143['input']['length'], _0x36a602 = _0x6388f9(141) + _0x2441bb + _0x6388f9(139);
                return _0x36a602 += _0x6a0f3b(_0x2441bb, '', 'a', 'ов');
            },
            'loadingMore': function () {
                var _0x406e77 = _0xf499;
                return _0x406e77(142);
            },
            'maximumSelected': function (_0x1ad0b9) {
                var _0x582204 = _0xf499, _0x452c19 = 'Вы можете выбрать не более ' + _0x1ad0b9[_0x582204(137)] + ' элемент';
                return _0x452c19 += _0x6a0f3b(_0x1ad0b9[_0x582204(137)], '', 'a', 'ов');
            },
            'noResults': function () {
                var _0x35f880 = _0xf499;
                return _0x35f880(143);
            },
            'searching': function () {
                var _0x92a7af = _0xf499;
                return _0x92a7af(144);
            },
            'removeAllItems': function () {
                return 'Удалить все элементы';
            }
        };
    }), _0x5d6438[_0x77a82e(145)], _0x5d6438['require'];
}();