!function () {
    var _0x4959b1 = _0x3fc2;
    if (jQuery && jQuery['fn'] && jQuery['fn'][_0x4959b1(256)] && jQuery['fn']['select2']['amd'])
        var _0x503cc5 = jQuery['fn'][_0x4959b1(256)][_0x4959b1(257)];
    _0x503cc5[_0x4959b1(258)](_0x4959b1(259), [], function () {
        return {
            'errorLoading': function () {
                var _0x1af067 = _0x3fc2;
                return _0x1af067(260);
            },
            'inputTooLong': function (_0xa67249) {
                var _0x498c39 = _0x3fc2, _0x5efa5e = _0xa67249[_0x498c39(261)]['length'] - _0xa67249[_0x498c39(262)], _0xfda937 = _0x498c39(263) + _0x5efa5e + _0x498c39(264);
                return 1 != _0x5efa5e && (_0xfda937 += 's'), _0xfda937;
            },
            'inputTooShort': function (_0xce739f) {
                var _0x5912d5 = _0x3fc2;
                return _0x5912d5(265) + (_0xce739f['minimum'] - _0xce739f['input']['length']) + ' of meer karakters';
            },
            'loadingMore': function () {
                var _0x4aa680 = _0x3fc2;
                return _0x4aa680(266);
            },
            'maximumSelected': function (_0x2a08d3) {
                var _0x3cc590 = _0x3fc2, _0x56e22a = _0x3cc590(267) + _0x2a08d3['maximum'] + ' item';
                return 1 != _0x2a08d3[_0x3cc590(262)] && (_0x56e22a += 's'), _0x56e22a;
            },
            'noResults': function () {
                return 'Geen resultate gevind';
            },
            'searching': function () {
                var _0x3f4317 = _0x3fc2;
                return _0x3f4317(268);
            },
            'removeAllItems': function () {
                var _0x29389d = _0x3fc2;
                return _0x29389d(269);
            }
        };
    }), _0x503cc5[_0x4959b1(258)], _0x503cc5['require'];
}();