'use strict';
var _0x2efc = [
    'consume',
    'linePrefix',
    'lineEnding',
    '3vtMbmK',
    '71312jaymIo',
    '6067HAfgui',
    '213HLPALF',
    '2ckigpa',
    '622816TBlQpX',
    '858650lGRXjC',
    '864746qnUeit',
    '1019083rRSdfa',
    '1FliVYS',
    '4571233xWfViU',
    '1ezUmEj',
    '../character/markdown-line-ending.js',
    '../util/chunked-splice.js',
    '../util/prefix-size.js',
    './factory-space.js',
    'codeIndented',
    'start',
    'end',
    'enter',
    'length',
    'attempt',
    'codeFlowValue',
    'exit'
];
function _0x471d(_0x10d9bb, _0xa2011d) {
    return _0x471d = function (_0x2efc4d, _0x471dd9) {
        _0x2efc4d = _0x2efc4d - 0xa3;
        var _0x13d98e = _0x2efc[_0x2efc4d];
        return _0x13d98e;
    }, _0x471d(_0x10d9bb, _0xa2011d);
}
var _0x1c52d3 = _0x471d;
(function (_0x15e408, _0x2e1f43) {
    var _0x478b0e = _0x471d;
    while (!![]) {
        try {
            var _0x2ebc60 = parseInt(_0x478b0e(0xa3)) * -parseInt(_0x478b0e(0xa4)) + parseInt(_0x478b0e(0xa5)) * -parseInt(_0x478b0e(0xa6)) + parseInt(_0x478b0e(0xa7)) * -parseInt(_0x478b0e(0xa8)) + -parseInt(_0x478b0e(0xa9)) + parseInt(_0x478b0e(0xaa)) + parseInt(_0x478b0e(0xab)) * -parseInt(_0x478b0e(0xac)) + parseInt(_0x478b0e(0xad)) * parseInt(_0x478b0e(0xae));
            if (_0x2ebc60 === _0x2e1f43)
                break;
            else
                _0x15e408['push'](_0x15e408['shift']());
        } catch (_0x14b23a) {
            _0x15e408['push'](_0x15e408['shift']());
        }
    }
}(_0x2efc, 0xc4e07));
var markdownLineEnding = require(_0x1c52d3(0xaf)), chunkedSplice = require(_0x1c52d3(0xb0)), prefixSize = require(_0x1c52d3(0xb1)), factorySpace = require(_0x1c52d3(0xb2)), codeIndented = {
        'name': _0x1c52d3(0xb3),
        'tokenize': tokenizeCodeIndented,
        'resolve': resolveCodeIndented
    }, indentedContentConstruct = {
        'tokenize': tokenizeIndentedContent,
        'partial': !![]
    };
function resolveCodeIndented(_0x3f37b2, _0x213354) {
    var _0x929803 = _0x1c52d3, _0x3b6160 = {
            'type': 'codeIndented',
            'start': _0x3f37b2[0x0][0x1][_0x929803(0xb4)],
            'end': _0x3f37b2[_0x3f37b2['length'] - 0x1][0x1][_0x929803(0xb5)]
        };
    return chunkedSplice(_0x3f37b2, 0x0, 0x0, [[
            _0x929803(0xb6),
            _0x3b6160,
            _0x213354
        ]]), chunkedSplice(_0x3f37b2, _0x3f37b2[_0x929803(0xb7)], 0x0, [[
            'exit',
            _0x3b6160,
            _0x213354
        ]]), _0x3f37b2;
}
function tokenizeCodeIndented(_0xc8a034, _0xfa1d12, _0x383391) {
    var _0x3139ce = _0x1c52d3;
    return _0xc8a034[_0x3139ce(0xb8)](indentedContentConstruct, _0x3b6a53, _0x383391);
    function _0x3b6a53(_0x549ccb) {
        var _0x49113a = _0x3139ce;
        if (_0x549ccb === null)
            return _0xfa1d12(_0x549ccb);
        if (markdownLineEnding(_0x549ccb))
            return _0xc8a034[_0x49113a(0xb8)](indentedContentConstruct, _0x3b6a53, _0xfa1d12)(_0x549ccb);
        return _0xc8a034[_0x49113a(0xb6)](_0x49113a(0xb9)), _0x8c60d9(_0x549ccb);
    }
    function _0x8c60d9(_0x5418fa) {
        var _0x7599a1 = _0x3139ce;
        if (_0x5418fa === null || markdownLineEnding(_0x5418fa))
            return _0xc8a034[_0x7599a1(0xba)]('codeFlowValue'), _0x3b6a53(_0x5418fa);
        return _0xc8a034[_0x7599a1(0xbb)](_0x5418fa), _0x8c60d9;
    }
}
function tokenizeIndentedContent(_0x2ee2bc, _0x1ce949, _0x592f7f) {
    var _0x33dfb3 = _0x1c52d3, _0x27e469 = this;
    return factorySpace(_0x2ee2bc, _0x2a81f5, _0x33dfb3(0xbc), 0x4 + 0x1);
    function _0x2a81f5(_0x32f76e) {
        var _0xc40558 = _0x33dfb3;
        if (markdownLineEnding(_0x32f76e))
            return _0x2ee2bc['enter'](_0xc40558(0xbd)), _0x2ee2bc[_0xc40558(0xbb)](_0x32f76e), _0x2ee2bc[_0xc40558(0xba)](_0xc40558(0xbd)), factorySpace(_0x2ee2bc, _0x2a81f5, _0xc40558(0xbc), 0x4 + 0x1);
        return prefixSize(_0x27e469['events'], _0xc40558(0xbc)) < 0x4 ? _0x592f7f(_0x32f76e) : _0x1ce949(_0x32f76e);
    }
}
module['exports'] = codeIndented;
