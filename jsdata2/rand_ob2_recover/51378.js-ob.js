var markdownLineEnding = require(_0x1c52d3(175)), chunkedSplice = require(_0x1c52d3(176)), prefixSize = require(_0x1c52d3(177)), factorySpace = require(_0x1c52d3(178)), codeIndented = {
        'name': _0x1c52d3(179),
        'tokenize': tokenizeCodeIndented,
        'resolve': resolveCodeIndented
    }, indentedContentConstruct = {
        'tokenize': tokenizeIndentedContent,
        'partial': !![]
    };
function resolveCodeIndented(_0x3f37b2, _0x213354) {
    var _0x929803 = _0x1c52d3, _0x3b6160 = {
            'type': 'codeIndented',
            'start': _0x3f37b2[0][1][_0x929803(180)],
            'end': _0x3f37b2[_0x3f37b2['length'] - 1][1][_0x929803(181)]
        };
    return chunkedSplice(_0x3f37b2, 0, 0, [[
            _0x929803(182),
            _0x3b6160,
            _0x213354
        ]]), chunkedSplice(_0x3f37b2, _0x3f37b2[_0x929803(183)], 0, [[
            'exit',
            _0x3b6160,
            _0x213354
        ]]), _0x3f37b2;
}
function tokenizeCodeIndented(_0xc8a034, _0xfa1d12, _0x383391) {
    var _0x3139ce = _0x1c52d3;
    return _0xc8a034[_0x3139ce(184)](indentedContentConstruct, _0x3b6a53, _0x383391);
    function _0x3b6a53(_0x549ccb) {
        var _0x49113a = _0x3139ce;
        if (_0x549ccb === null)
            return _0xfa1d12(_0x549ccb);
        if (markdownLineEnding(_0x549ccb))
            return _0xc8a034[_0x49113a(184)](indentedContentConstruct, _0x3b6a53, _0xfa1d12)(_0x549ccb);
        return _0xc8a034[_0x49113a(182)](_0x49113a(185)), _0x8c60d9(_0x549ccb);
    }
    function _0x8c60d9(_0x5418fa) {
        var _0x7599a1 = _0x3139ce;
        if (_0x5418fa === null || markdownLineEnding(_0x5418fa))
            return _0xc8a034[_0x7599a1(186)]('codeFlowValue'), _0x3b6a53(_0x5418fa);
        return _0xc8a034[_0x7599a1(187)](_0x5418fa), _0x8c60d9;
    }
}
function tokenizeIndentedContent(_0x2ee2bc, _0x1ce949, _0x592f7f) {
    var _0x33dfb3 = _0x1c52d3, _0x27e469 = this;
    return factorySpace(_0x2ee2bc, _0x2a81f5, _0x33dfb3(188), 4 + 1);
    function _0x2a81f5(_0x32f76e) {
        var _0xc40558 = _0x33dfb3;
        if (markdownLineEnding(_0x32f76e))
            return _0x2ee2bc['enter'](_0xc40558(189)), _0x2ee2bc[_0xc40558(187)](_0x32f76e), _0x2ee2bc[_0xc40558(186)](_0xc40558(189)), factorySpace(_0x2ee2bc, _0x2a81f5, _0xc40558(188), 4 + 1);
        return prefixSize(_0x27e469['events'], _0xc40558(188)) < 4 ? _0x592f7f(_0x32f76e) : _0x1ce949(_0x32f76e);
    }
}
module['exports'] = codeIndented;