'use strict';

const _0x1926 = ['QsoFF', 'dpXoi', 'events', 'exports', '485008nNgrHa', '882088EAhRzl', '4042TyhqGU', '286xlxPFv', '304057xKXdEd', '287583DCurDR', '174385KVKRxx', '1219724PSKSSt', '../character/markdown-line-ending.js', '../util/prefix-size.js', './factory-space.js', 'codeIndented', 'length', 'end', 'pXiSV', 'codeFlowValue', 'AAktD', 'attempt', 'enter', 'jfWrx', 'dsecg', 'XtQHJ', 'lSdyj', 'exit', 'WzLbw', 'consume', 'lineEnding', 'QNtWx', 'wKxoe', 'AaMfd', 'GnMDw'];
const _0x2e88ef = _0x3768;

(function (_0x1ab94c, _0x108a0e) {
    const _0x4561be = _0x3768;

    while (true) {
        try {
            const _0x13c962 = parseInt(_0x4561be(0x13b)) + parseInt(_0x4561be(0x13c)) + parseInt(_0x4561be(0x13d)) * -parseInt(_0x4561be(0x13e)) + -parseInt(_0x4561be(0x13f)) + -parseInt(_0x4561be(0x140)) + -parseInt(_0x4561be(0x141)) + parseInt(_0x4561be(0x142));

            if (_0x13c962 === _0x108a0e) break;else _0x1ab94c.push(_0x1ab94c.shift());
        } catch (_0x8743a7) {
            _0x1ab94c.push(_0x1ab94c.shift());
        }
    }
})(_0x1926, 664783);

const markdownLineEnding = require(_0x2e88ef(0x143));

const chunkedSplice = require('../util/chunked-splice.js');

const prefixSize = require(_0x2e88ef(0x144));

const factorySpace = require(_0x2e88ef(0x145));

const codeIndented = {
    'name': _0x2e88ef(0x146),
    'tokenize': tokenizeCodeIndented,
    'resolve': resolveCodeIndented
};
const indentedContentConstruct = {
    'tokenize': tokenizeIndentedContent,
    'partial': true
};

function _0x3768(_0x30bea1, _0x213a66) {
    return _0x3768 = function (_0x3eb3dc, _0x158453) {
        _0x3eb3dc = _0x3eb3dc - 315;
        const _0x5d8b96 = _0x1926[_0x3eb3dc];

        return _0x5d8b96;
    }, _0x3768(_0x30bea1, _0x213a66);
}
function resolveCodeIndented(_0x23ffd2, _0x39cbc8) {
    const _0x5c5c06 = _0x2e88ef;
    const _0x343f37 = {
        'IzXhp': function (_0x153835, _0x168869, _0x2500c0, _0x38dc90, _0x4cb560) {
            return _0x153835(_0x168869, _0x2500c0, _0x38dc90, _0x4cb560);
        },
        'nazoe': 'enter',
        'pXiSV': 'exit'
    };
    const _0x574a93 = {
        'type': _0x5c5c06(0x146),
        'start': _0x23ffd2[0][1].start,
        'end': _0x23ffd2[_0x23ffd2[_0x5c5c06(0x147)] - 1][1][_0x5c5c06(0x148)]
    };

    return _0x343f37.IzXhp(chunkedSplice, _0x23ffd2, 0, 0, [[_0x343f37.nazoe, _0x574a93, _0x39cbc8]]), chunkedSplice(_0x23ffd2, _0x23ffd2[_0x5c5c06(0x147)], 0, [[_0x343f37[_0x5c5c06(0x149)], _0x574a93, _0x39cbc8]]), _0x23ffd2;
}
function tokenizeCodeIndented(_0x140dc2, _0x280e17, _0x144576) {
    const _0x30f50d = _0x2e88ef;
    const _0x355e58 = {
        'XtQHJ': function (_0x121547, _0x3b4e85) {
            return _0x121547 === _0x3b4e85;
        },
        'AAktD': function (_0x599377, _0x2d776d) {
            return _0x599377(_0x2d776d);
        },
        'QoSDQ': function (_0x289b1e, _0x4e5db5) {
            return _0x289b1e(_0x4e5db5);
        },
        'jfWrx': _0x30f50d(0x14a),
        'dsecg': function (_0x22d081, _0x105d74) {
            return _0x22d081(_0x105d74);
        },
        'lSdyj': function (_0x196ba9, _0xc344b8) {
            return _0x196ba9(_0xc344b8);
        },
        'WzLbw': function (_0x4b482c, _0x16d090) {
            return _0x4b482c(_0x16d090);
        }
    };

    return _0x140dc2.attempt(indentedContentConstruct, _0x4d709c, _0x144576);
    function _0x4d709c(_0x12bb65) {
        const _0xb0e57 = _0x30f50d;

        if (_0x355e58.XtQHJ(_0x12bb65, null)) return _0x355e58[_0xb0e57(0x14b)](_0x280e17, _0x12bb65);
        if (_0x355e58.QoSDQ(markdownLineEnding, _0x12bb65)) return _0x140dc2[_0xb0e57(0x14c)](indentedContentConstruct, _0x4d709c, _0x280e17)(_0x12bb65);
        return _0x140dc2[_0xb0e57(0x14d)](_0x355e58[_0xb0e57(0x14e)]), _0x355e58[_0xb0e57(0x14f)](_0x209eee, _0x12bb65);
    }
    function _0x209eee(_0x3bb11f) {
        const _0x219743 = _0x30f50d;

        if (_0x355e58[_0x219743(0x150)](_0x3bb11f, null) || _0x355e58[_0x219743(0x151)](markdownLineEnding, _0x3bb11f)) return _0x140dc2[_0x219743(0x152)](_0x355e58[_0x219743(0x14e)]), _0x355e58[_0x219743(0x153)](_0x4d709c, _0x3bb11f);
        return _0x140dc2[_0x219743(0x154)](_0x3bb11f), _0x209eee;
    }
}
function tokenizeIndentedContent(_0x279e65, _0x562ea9, _0x5ec389) {
    const _0x2d5225 = _0x2e88ef;
    const _0x2e88e0 = {
        'AaMfd': function (_0x20dd90, _0x5fdda2) {
            return _0x20dd90(_0x5fdda2);
        },
        'GnMDw': _0x2d5225(0x155),
        'QNtWx': function (_0x527164, _0x3045f3, _0x5df5f7, _0x3d7e68, _0x248faf) {
            return _0x527164(_0x3045f3, _0x5df5f7, _0x3d7e68, _0x248faf);
        },
        'wKxoe': 'linePrefix',
        'QsoFF': function (_0x35031d, _0x36ebfa) {
            return _0x35031d + _0x36ebfa;
        },
        'dpXoi': function (_0x3e73f8, _0x364eae, _0x7519ca) {
            return _0x3e73f8(_0x364eae, _0x7519ca);
        }
    };

    const _0x2aac34 = this;

    return _0x2e88e0[_0x2d5225(0x156)](factorySpace, _0x279e65, _0xcb14c0, _0x2e88e0[_0x2d5225(0x157)], 5);
    function _0xcb14c0(_0x48b6cf) {
        const _0x21e66f = _0x2d5225;

        if (_0x2e88e0[_0x21e66f(0x158)](markdownLineEnding, _0x48b6cf)) return _0x279e65[_0x21e66f(0x14d)](_0x2e88e0[_0x21e66f(0x159)]), _0x279e65.consume(_0x48b6cf), _0x279e65[_0x21e66f(0x152)](_0x2e88e0.GnMDw), _0x2e88e0[_0x21e66f(0x156)](factorySpace, _0x279e65, _0xcb14c0, _0x2e88e0[_0x21e66f(0x157)], _0x2e88e0[_0x21e66f(0x15a)](4, 1));
        return _0x2e88e0[_0x21e66f(0x15b)](prefixSize, _0x2aac34[_0x21e66f(0x15c)], _0x2e88e0[_0x21e66f(0x157)]) < 4 ? _0x2e88e0[_0x21e66f(0x158)](_0x5ec389, _0x48b6cf) : _0x562ea9(_0x48b6cf);
    }
}
module[_0x2e88ef(0x15d)] = codeIndented;
