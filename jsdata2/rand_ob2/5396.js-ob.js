/** @license React v16.7.0
 * react-dom-unstable-native-dependencies.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
var _0x3119 = [
    'prototype',
    'eventPool',
    'pop',
    '279',
    'destructor',
    'getPooled',
    'release',
    'touchstart',
    'mousedown',
    'touchmove',
    'touchcancel',
    'mouseup',
    'mousemove',
    'touchend',
    'timestamp',
    '138',
    'touchActive',
    'startPageX',
    'pageY',
    'startTimeStamp',
    'pageX',
    'previousPageX',
    'previousPageY',
    'previousTimeStamp',
    'mostRecentTimeStamp',
    'currentTimeStamp',
    'currentPageX',
    'currentPageY',
    'Cannot\x20record\x20touch\x20move\x20without\x20a\x20touch\x20start.\x0aTouch\x20Move:\x20%s\x0a',
    'Touch\x20Bank:\x20%s',
    'stringify',
    'slice',
    'changedTouches',
    'forEach',
    'numberActiveTouches',
    'touches',
    'indexOfSingleActiveTouch',
    'identifier',
    'GlobalResponderHandler',
    'onStartShouldSetResponderCapture',
    'onScrollShouldSetResponder',
    'onScrollShouldSetResponderCapture',
    'scroll',
    'onSelectionChangeShouldSetResponder',
    'selectionchange',
    'onMoveShouldSetResponder',
    'onMoveShouldSetResponderCapture',
    'onResponderStart',
    'onResponderMove',
    'onResponderRelease',
    'onResponderTerminationRequest',
    'onResponderGrant',
    'onResponderReject',
    'Ended\x20a\x20touch\x20event\x20which\x20was\x20not\x20counted\x20in\x20`trackedTouchCount`.',
    'recordTouchTrack',
    'moveShouldSetResponder',
    'selectionChangeShouldSetResponder',
    'scrollShouldSetResponder',
    'alternate',
    'touchHistory',
    'responderGrant',
    'responderTerminationRequest',
    'responderStart',
    'responderTerminate',
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'exports',
    '547985XTEhXz',
    '1lFsVPM',
    '654eBaXbz',
    '270lexxvJ',
    '1vRyESv',
    '962471tTfOSr',
    '21gdnFFj',
    '51386XGaCNN',
    '634716SidSaL',
    '642135JmlXdc',
    '5yBKGfh',
    '403101quhQZi',
    'react-dom',
    'object-assign',
    'replace',
    'name',
    'Invariant\x20Violation',
    'length',
    'https://reactjs.org/docs/error-decoder.html?invariant=',
    '&args[]=',
    ';\x20visit\x20%s\x20for\x20the\x20full\x20message\x20or\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20full\x20errors\x20and\x20additional\x20helpful\x20warnings.\x20',
    '_dispatchInstances',
    'isArray',
    '103',
    'currentTarget',
    'return',
    'push',
    'captured',
    'bubbled',
    'apply',
    'concat',
    'stateNode',
    'onClick',
    'onClickCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'disabled',
    'type',
    'button',
    'textarea',
    'function',
    'dispatchConfig',
    'phasedRegistrationNames',
    '_dispatchListeners',
    '_targetInst',
    'registrationName',
    'nativeEvent',
    'constructor',
    'Interface',
    'hasOwnProperty',
    'target',
    'isDefaultPrevented',
    'defaultPrevented',
    'isPropagationStopped',
    'preventDefault',
    'returnValue',
    'stopPropagation',
    'cancelBubble',
    'isPersistent',
    'timeStamp',
    'now',
    'extend'
];
var _0x3400db = _0x1e9e;
(function (_0x280bd1, _0x323fcd) {
    var _0x229617 = _0x1e9e;
    while (!![]) {
        try {
            var _0x50bed7 = parseInt(_0x229617(0x10b)) * -parseInt(_0x229617(0x10c)) + -parseInt(_0x229617(0x10d)) * parseInt(_0x229617(0x10e)) + parseInt(_0x229617(0x10f)) * parseInt(_0x229617(0x110)) + -parseInt(_0x229617(0x111)) * -parseInt(_0x229617(0x112)) + parseInt(_0x229617(0x113)) + parseInt(_0x229617(0x114)) + parseInt(_0x229617(0x115)) * -parseInt(_0x229617(0x116));
            if (_0x50bed7 === _0x323fcd)
                break;
            else
                _0x280bd1['push'](_0x280bd1['shift']());
        } catch (_0x4c37e6) {
            _0x280bd1['push'](_0x280bd1['shift']());
        }
    }
}(_0x3119, 0x8d336));
var k = require(_0x3400db(0x117)), l = require(_0x3400db(0x118));
function aa(_0xebe604, _0x57ccf8, _0x2b26ff, _0x3a163c, _0x3c3fd2, _0x4d0e84, _0x35e3ee, _0x282972) {
    var _0x47b186 = _0x3400db;
    if (!_0xebe604) {
        _0xebe604 = void 0x0;
        if (void 0x0 === _0x57ccf8)
            _0xebe604 = Error('Minified\x20exception\x20occurred;\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20the\x20full\x20error\x20message\x20and\x20additional\x20helpful\x20warnings.');
        else {
            var _0x2483b3 = [
                    _0x2b26ff,
                    _0x3a163c,
                    _0x3c3fd2,
                    _0x4d0e84,
                    _0x35e3ee,
                    _0x282972
                ], _0x362746 = 0x0;
            _0xebe604 = Error(_0x57ccf8[_0x47b186(0x119)](/%s/g, function () {
                return _0x2483b3[_0x362746++];
            })), _0xebe604[_0x47b186(0x11a)] = _0x47b186(0x11b);
        }
        _0xebe604['framesToPop'] = 0x1;
        throw _0xebe604;
    }
}
function m(_0x92a7b4) {
    var _0x1c75f0 = _0x3400db;
    for (var _0x2743a4 = arguments[_0x1c75f0(0x11c)] - 0x1, _0x140336 = _0x1c75f0(0x11d) + _0x92a7b4, _0x5a02b4 = 0x0; _0x5a02b4 < _0x2743a4; _0x5a02b4++)
        _0x140336 += _0x1c75f0(0x11e) + encodeURIComponent(arguments[_0x5a02b4 + 0x1]);
    aa(!0x1, 'Minified\x20React\x20error\x20#' + _0x92a7b4 + _0x1c75f0(0x11f), _0x140336);
}
var n = null, p = null, q = null;
function r(_0x532d9d) {
    var _0x3dd67c = _0x3400db, _0x570a70 = _0x532d9d['_dispatchListeners'], _0x4569ed = _0x532d9d[_0x3dd67c(0x120)];
    return Array[_0x3dd67c(0x121)](_0x570a70) ? m(_0x3dd67c(0x122)) : void 0x0, _0x532d9d[_0x3dd67c(0x123)] = _0x570a70 ? q(_0x4569ed) : null, _0x570a70 = _0x570a70 ? _0x570a70(_0x532d9d) : null, _0x532d9d['currentTarget'] = null, _0x532d9d['_dispatchListeners'] = null, _0x532d9d[_0x3dd67c(0x120)] = null, _0x570a70;
}
function t(_0x2b40d0) {
    var _0x1e621a = _0x3400db;
    do
        _0x2b40d0 = _0x2b40d0[_0x1e621a(0x124)];
    while (_0x2b40d0 && 0x5 !== _0x2b40d0['tag']);
    return _0x2b40d0 ? _0x2b40d0 : null;
}
function v(_0x529151, _0x174166, _0x58c442) {
    var _0x4b9381 = _0x3400db;
    for (var _0x5b7fe5 = []; _0x529151;)
        _0x5b7fe5[_0x4b9381(0x125)](_0x529151), _0x529151 = t(_0x529151);
    for (_0x529151 = _0x5b7fe5[_0x4b9381(0x11c)]; 0x0 < _0x529151--;)
        _0x174166(_0x5b7fe5[_0x529151], _0x4b9381(0x126), _0x58c442);
    for (_0x529151 = 0x0; _0x529151 < _0x5b7fe5['length']; _0x529151++)
        _0x174166(_0x5b7fe5[_0x529151], _0x4b9381(0x127), _0x58c442);
}
function w(_0x1c6ac8, _0x2d85a9) {
    var _0x4a965a = _0x3400db;
    null == _0x2d85a9 ? m('30') : void 0x0;
    if (null == _0x1c6ac8)
        return _0x2d85a9;
    if (Array[_0x4a965a(0x121)](_0x1c6ac8)) {
        if (Array[_0x4a965a(0x121)](_0x2d85a9))
            return _0x1c6ac8[_0x4a965a(0x125)][_0x4a965a(0x128)](_0x1c6ac8, _0x2d85a9), _0x1c6ac8;
        return _0x1c6ac8[_0x4a965a(0x125)](_0x2d85a9), _0x1c6ac8;
    }
    return Array['isArray'](_0x2d85a9) ? [_0x1c6ac8][_0x4a965a(0x129)](_0x2d85a9) : [
        _0x1c6ac8,
        _0x2d85a9
    ];
}
function x(_0x330e71, _0x5ea18d, _0x4d319c) {
    Array['isArray'](_0x330e71) ? _0x330e71['forEach'](_0x5ea18d, _0x4d319c) : _0x330e71 && _0x5ea18d['call'](_0x4d319c, _0x330e71);
}
function y(_0x314ab6, _0x37f20d) {
    var _0x3f5ad3 = _0x3400db, _0x289b2f = _0x314ab6[_0x3f5ad3(0x12a)];
    if (!_0x289b2f)
        return null;
    var _0x28fb4c = n(_0x289b2f);
    if (!_0x28fb4c)
        return null;
    _0x289b2f = _0x28fb4c[_0x37f20d];
    _0x578cc6:
        switch (_0x37f20d) {
        case _0x3f5ad3(0x12b):
        case _0x3f5ad3(0x12c):
        case _0x3f5ad3(0x12d):
        case _0x3f5ad3(0x12e):
        case _0x3f5ad3(0x12f):
        case _0x3f5ad3(0x130):
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case _0x3f5ad3(0x131):
        case _0x3f5ad3(0x132):
            (_0x28fb4c = !_0x28fb4c[_0x3f5ad3(0x133)]) || (_0x314ab6 = _0x314ab6[_0x3f5ad3(0x134)], _0x28fb4c = !(_0x3f5ad3(0x135) === _0x314ab6 || 'input' === _0x314ab6 || 'select' === _0x314ab6 || _0x3f5ad3(0x136) === _0x314ab6)), _0x314ab6 = !_0x28fb4c;
            break _0x578cc6;
        default:
            _0x314ab6 = !0x1;
        }
    if (_0x314ab6)
        return null;
    return _0x289b2f && _0x3f5ad3(0x137) !== typeof _0x289b2f ? m('231', _0x37f20d, typeof _0x289b2f) : void 0x0, _0x289b2f;
}
function z(_0x394b18, _0x585254, _0x33526c) {
    var _0x185eb1 = _0x3400db;
    if (_0x585254 = y(_0x394b18, _0x33526c[_0x185eb1(0x138)][_0x185eb1(0x139)][_0x585254]))
        _0x33526c[_0x185eb1(0x13a)] = w(_0x33526c[_0x185eb1(0x13a)], _0x585254), _0x33526c['_dispatchInstances'] = w(_0x33526c['_dispatchInstances'], _0x394b18);
}
function ca(_0x280972) {
    var _0x180ba8 = _0x3400db;
    _0x280972 && _0x280972[_0x180ba8(0x138)][_0x180ba8(0x139)] && v(_0x280972['_targetInst'], z, _0x280972);
}
function da(_0x145608) {
    var _0x55882d = _0x3400db;
    if (_0x145608 && _0x145608[_0x55882d(0x138)][_0x55882d(0x139)]) {
        var _0x4d4c0b = _0x145608[_0x55882d(0x13b)];
        _0x4d4c0b = _0x4d4c0b ? t(_0x4d4c0b) : null, v(_0x4d4c0b, z, _0x145608);
    }
}
function A(_0x29ebb2) {
    var _0x53919e = _0x3400db;
    if (_0x29ebb2 && _0x29ebb2['dispatchConfig']['registrationName']) {
        var _0x2014da = _0x29ebb2['_targetInst'];
        if (_0x2014da && _0x29ebb2 && _0x29ebb2[_0x53919e(0x138)][_0x53919e(0x13c)]) {
            var _0xcf122f = y(_0x2014da, _0x29ebb2['dispatchConfig'][_0x53919e(0x13c)]);
            _0xcf122f && (_0x29ebb2[_0x53919e(0x13a)] = w(_0x29ebb2[_0x53919e(0x13a)], _0xcf122f), _0x29ebb2['_dispatchInstances'] = w(_0x29ebb2[_0x53919e(0x120)], _0x2014da));
        }
    }
}
function B() {
    return !0x0;
}
function C() {
    return !0x1;
}
function D(_0x501491, _0x55fb71, _0x8c60d3, _0x3a5457) {
    var _0x3fbcc1 = _0x3400db;
    this['dispatchConfig'] = _0x501491, this[_0x3fbcc1(0x13b)] = _0x55fb71, this[_0x3fbcc1(0x13d)] = _0x8c60d3, _0x501491 = this[_0x3fbcc1(0x13e)][_0x3fbcc1(0x13f)];
    for (var _0x494119 in _0x501491)
        _0x501491[_0x3fbcc1(0x140)](_0x494119) && ((_0x55fb71 = _0x501491[_0x494119]) ? this[_0x494119] = _0x55fb71(_0x8c60d3) : _0x3fbcc1(0x141) === _0x494119 ? this[_0x3fbcc1(0x141)] = _0x3a5457 : this[_0x494119] = _0x8c60d3[_0x494119]);
    return this[_0x3fbcc1(0x142)] = (null != _0x8c60d3['defaultPrevented'] ? _0x8c60d3[_0x3fbcc1(0x143)] : !0x1 === _0x8c60d3['returnValue']) ? B : C, this[_0x3fbcc1(0x144)] = C, this;
}
l(D['prototype'], {
    'preventDefault': function () {
        var _0x3ce7d2 = _0x3400db;
        this[_0x3ce7d2(0x143)] = !0x0;
        var _0x17b7de = this[_0x3ce7d2(0x13d)];
        _0x17b7de && (_0x17b7de['preventDefault'] ? _0x17b7de[_0x3ce7d2(0x145)]() : 'unknown' !== typeof _0x17b7de[_0x3ce7d2(0x146)] && (_0x17b7de[_0x3ce7d2(0x146)] = !0x1), this[_0x3ce7d2(0x142)] = B);
    },
    'stopPropagation': function () {
        var _0x10d359 = _0x3400db, _0x41cc7a = this[_0x10d359(0x13d)];
        _0x41cc7a && (_0x41cc7a[_0x10d359(0x147)] ? _0x41cc7a[_0x10d359(0x147)]() : 'unknown' !== typeof _0x41cc7a[_0x10d359(0x148)] && (_0x41cc7a[_0x10d359(0x148)] = !0x0), this['isPropagationStopped'] = B);
    },
    'persist': function () {
        var _0xb936d7 = _0x3400db;
        this[_0xb936d7(0x149)] = B;
    },
    'isPersistent': C,
    'destructor': function () {
        var _0x59f5d3 = _0x3400db, _0x25ae2a = this['constructor'][_0x59f5d3(0x13f)], _0x3cfd05;
        for (_0x3cfd05 in _0x25ae2a)
            this[_0x3cfd05] = null;
        this['nativeEvent'] = this['_targetInst'] = this[_0x59f5d3(0x138)] = null, this[_0x59f5d3(0x144)] = this[_0x59f5d3(0x142)] = C, this['_dispatchInstances'] = this[_0x59f5d3(0x13a)] = null;
    }
}), D[_0x3400db(0x13f)] = {
    'type': null,
    'target': null,
    'currentTarget': function () {
        return null;
    },
    'eventPhase': null,
    'bubbles': null,
    'cancelable': null,
    'timeStamp': function (_0x5f14ff) {
        var _0xc8c687 = _0x3400db;
        return _0x5f14ff[_0xc8c687(0x14a)] || Date[_0xc8c687(0x14b)]();
    },
    'defaultPrevented': null,
    'isTrusted': null
}, D[_0x3400db(0x14c)] = function (_0x479988) {
    var _0x2b133d = _0x3400db;
    function _0x39efab() {
    }
    function _0x50aa1c() {
        var _0x409169 = _0x1e9e;
        return _0x5252b8[_0x409169(0x128)](this, arguments);
    }
    var _0x5252b8 = this;
    _0x39efab[_0x2b133d(0x14d)] = _0x5252b8['prototype'];
    var _0x2b73a2 = new _0x39efab();
    return l(_0x2b73a2, _0x50aa1c[_0x2b133d(0x14d)]), _0x50aa1c[_0x2b133d(0x14d)] = _0x2b73a2, _0x50aa1c[_0x2b133d(0x14d)][_0x2b133d(0x13e)] = _0x50aa1c, _0x50aa1c[_0x2b133d(0x13f)] = l({}, _0x5252b8[_0x2b133d(0x13f)], _0x479988), _0x50aa1c[_0x2b133d(0x14c)] = _0x5252b8[_0x2b133d(0x14c)], E(_0x50aa1c), _0x50aa1c;
}, E(D);
function ea(_0x49532c, _0x18a331, _0x56e75c, _0x275d13) {
    var _0x46c20c = _0x3400db;
    if (this[_0x46c20c(0x14e)][_0x46c20c(0x11c)]) {
        var _0x5a8ac7 = this[_0x46c20c(0x14e)][_0x46c20c(0x14f)]();
        return this['call'](_0x5a8ac7, _0x49532c, _0x18a331, _0x56e75c, _0x275d13), _0x5a8ac7;
    }
    return new this(_0x49532c, _0x18a331, _0x56e75c, _0x275d13);
}
function fa(_0x1522ee) {
    var _0x6426f4 = _0x3400db;
    _0x1522ee instanceof this ? void 0x0 : m(_0x6426f4(0x150)), _0x1522ee[_0x6426f4(0x151)](), 0xa > this['eventPool']['length'] && this[_0x6426f4(0x14e)]['push'](_0x1522ee);
}
function E(_0x3cda9e) {
    var _0x2aae16 = _0x3400db;
    _0x3cda9e['eventPool'] = [], _0x3cda9e[_0x2aae16(0x152)] = ea, _0x3cda9e[_0x2aae16(0x153)] = fa;
}
var F = D[_0x3400db(0x14c)]({
    'touchHistory': function () {
        return null;
    }
});
function G(_0x5c6f11) {
    var _0x1ca9cd = _0x3400db;
    return _0x1ca9cd(0x154) === _0x5c6f11 || _0x1ca9cd(0x155) === _0x5c6f11;
}
function H(_0x542d49) {
    var _0x1b8ae6 = _0x3400db;
    return _0x1b8ae6(0x156) === _0x542d49 || 'mousemove' === _0x542d49;
}
function _0x1e9e(_0x14bb16, _0x43789b) {
    return _0x1e9e = function (_0x3119eb, _0x1e9e22) {
        _0x3119eb = _0x3119eb - 0x10b;
        var _0x10d404 = _0x3119[_0x3119eb];
        return _0x10d404;
    }, _0x1e9e(_0x14bb16, _0x43789b);
}
function I(_0x5e3152) {
    var _0x292e6a = _0x3400db;
    return 'touchend' === _0x5e3152 || _0x292e6a(0x157) === _0x5e3152 || _0x292e6a(0x158) === _0x5e3152;
}
var J = [
        _0x3400db(0x154),
        'mousedown'
    ], K = [
        _0x3400db(0x156),
        _0x3400db(0x159)
    ], L = [
        'touchcancel',
        _0x3400db(0x15a),
        'mouseup'
    ], M = [], N = {
        'touchBank': M,
        'numberActiveTouches': 0x0,
        'indexOfSingleActiveTouch': -0x1,
        'mostRecentTimeStamp': 0x0
    };
function O(_0x11bbc4) {
    var _0x645fad = _0x3400db;
    return _0x11bbc4[_0x645fad(0x14a)] || _0x11bbc4[_0x645fad(0x15b)];
}
function P(_0xa6847e) {
    var _0x5954e2 = _0x3400db;
    return _0xa6847e = _0xa6847e['identifier'], null == _0xa6847e ? m(_0x5954e2(0x15c)) : void 0x0, _0xa6847e;
}
function ha(_0x156718) {
    var _0x147941 = _0x3400db, _0x1526ff = P(_0x156718), _0x26a9ed = M[_0x1526ff];
    _0x26a9ed ? (_0x26a9ed[_0x147941(0x15d)] = !0x0, _0x26a9ed[_0x147941(0x15e)] = _0x156718['pageX'], _0x26a9ed['startPageY'] = _0x156718[_0x147941(0x15f)], _0x26a9ed[_0x147941(0x160)] = O(_0x156718), _0x26a9ed['currentPageX'] = _0x156718[_0x147941(0x161)], _0x26a9ed['currentPageY'] = _0x156718[_0x147941(0x15f)], _0x26a9ed['currentTimeStamp'] = O(_0x156718), _0x26a9ed[_0x147941(0x162)] = _0x156718[_0x147941(0x161)], _0x26a9ed[_0x147941(0x163)] = _0x156718[_0x147941(0x15f)], _0x26a9ed[_0x147941(0x164)] = O(_0x156718)) : (_0x26a9ed = {
        'touchActive': !0x0,
        'startPageX': _0x156718[_0x147941(0x161)],
        'startPageY': _0x156718[_0x147941(0x15f)],
        'startTimeStamp': O(_0x156718),
        'currentPageX': _0x156718[_0x147941(0x161)],
        'currentPageY': _0x156718[_0x147941(0x15f)],
        'currentTimeStamp': O(_0x156718),
        'previousPageX': _0x156718['pageX'],
        'previousPageY': _0x156718['pageY'],
        'previousTimeStamp': O(_0x156718)
    }, M[_0x1526ff] = _0x26a9ed), N[_0x147941(0x165)] = O(_0x156718);
}
function ia(_0x3ec320) {
    var _0x281fbf = _0x3400db, _0x3363b7 = M[P(_0x3ec320)];
    _0x3363b7 ? (_0x3363b7[_0x281fbf(0x15d)] = !0x0, _0x3363b7['previousPageX'] = _0x3363b7['currentPageX'], _0x3363b7[_0x281fbf(0x163)] = _0x3363b7['currentPageY'], _0x3363b7[_0x281fbf(0x164)] = _0x3363b7[_0x281fbf(0x166)], _0x3363b7[_0x281fbf(0x167)] = _0x3ec320[_0x281fbf(0x161)], _0x3363b7[_0x281fbf(0x168)] = _0x3ec320[_0x281fbf(0x15f)], _0x3363b7[_0x281fbf(0x166)] = O(_0x3ec320), N[_0x281fbf(0x165)] = O(_0x3ec320)) : console['error'](_0x281fbf(0x169), _0x281fbf(0x16a), Q(_0x3ec320), R());
}
function ja(_0x4f64f1) {
    var _0x444823 = _0x3400db, _0x50cabe = M[P(_0x4f64f1)];
    _0x50cabe ? (_0x50cabe['touchActive'] = !0x1, _0x50cabe[_0x444823(0x162)] = _0x50cabe[_0x444823(0x167)], _0x50cabe[_0x444823(0x163)] = _0x50cabe[_0x444823(0x168)], _0x50cabe[_0x444823(0x164)] = _0x50cabe['currentTimeStamp'], _0x50cabe[_0x444823(0x167)] = _0x4f64f1[_0x444823(0x161)], _0x50cabe[_0x444823(0x168)] = _0x4f64f1[_0x444823(0x15f)], _0x50cabe[_0x444823(0x166)] = O(_0x4f64f1), N['mostRecentTimeStamp'] = O(_0x4f64f1)) : console['error']('Cannot\x20record\x20touch\x20end\x20without\x20a\x20touch\x20start.\x0aTouch\x20End:\x20%s\x0a', _0x444823(0x16a), Q(_0x4f64f1), R());
}
function Q(_0x598a7e) {
    var _0x1ba1be = _0x3400db;
    return JSON[_0x1ba1be(0x16b)]({
        'identifier': _0x598a7e['identifier'],
        'pageX': _0x598a7e[_0x1ba1be(0x161)],
        'pageY': _0x598a7e[_0x1ba1be(0x15f)],
        'timestamp': O(_0x598a7e)
    });
}
function R() {
    var _0x432cb5 = _0x3400db, _0x5f0e47 = JSON[_0x432cb5(0x16b)](M[_0x432cb5(0x16c)](0x0, 0x14));
    return 0x14 < M[_0x432cb5(0x11c)] && (_0x5f0e47 += '\x20(original\x20size:\x20' + M['length'] + ')'), _0x5f0e47;
}
var S = {
    'recordTouchTrack': function (_0x5f2355, _0x576fc6) {
        var _0x16f858 = _0x3400db;
        if (H(_0x5f2355))
            _0x576fc6[_0x16f858(0x16d)]['forEach'](ia);
        else {
            if (G(_0x5f2355))
                _0x576fc6['changedTouches'][_0x16f858(0x16e)](ha), N[_0x16f858(0x16f)] = _0x576fc6[_0x16f858(0x170)][_0x16f858(0x11c)], 0x1 === N[_0x16f858(0x16f)] && (N[_0x16f858(0x171)] = _0x576fc6[_0x16f858(0x170)][0x0][_0x16f858(0x172)]);
            else {
                if (I(_0x5f2355) && (_0x576fc6[_0x16f858(0x16d)][_0x16f858(0x16e)](ja), N[_0x16f858(0x16f)] = _0x576fc6[_0x16f858(0x170)][_0x16f858(0x11c)], 0x1 === N['numberActiveTouches'])) {
                    for (_0x5f2355 = 0x0; _0x5f2355 < M['length']; _0x5f2355++)
                        if (_0x576fc6 = M[_0x5f2355], null != _0x576fc6 && _0x576fc6[_0x16f858(0x15d)]) {
                            N[_0x16f858(0x171)] = _0x5f2355;
                            break;
                        }
                }
            }
        }
    },
    'touchHistory': N
};
function T(_0x1ef619, _0x11fb5e) {
    var _0x253ed7 = _0x3400db;
    return null == _0x11fb5e ? m('29') : void 0x0, null == _0x1ef619 ? _0x11fb5e : Array[_0x253ed7(0x121)](_0x1ef619) ? _0x1ef619['concat'](_0x11fb5e) : Array[_0x253ed7(0x121)](_0x11fb5e) ? [_0x1ef619][_0x253ed7(0x129)](_0x11fb5e) : [
        _0x1ef619,
        _0x11fb5e
    ];
}
var U = null, V = 0x0;
function W(_0x432d14, _0x5aee86) {
    var _0x595012 = _0x3400db, _0x3e1ebc = U;
    U = _0x432d14;
    if (null !== X[_0x595012(0x173)])
        X[_0x595012(0x173)]['onChange'](_0x3e1ebc, _0x432d14, _0x5aee86);
}
var Y = {
        'startShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': 'onStartShouldSetResponder',
                'captured': _0x3400db(0x174)
            },
            'dependencies': J
        },
        'scrollShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0x3400db(0x175),
                'captured': _0x3400db(0x176)
            },
            'dependencies': [_0x3400db(0x177)]
        },
        'selectionChangeShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0x3400db(0x178),
                'captured': 'onSelectionChangeShouldSetResponderCapture'
            },
            'dependencies': [_0x3400db(0x179)]
        },
        'moveShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0x3400db(0x17a),
                'captured': _0x3400db(0x17b)
            },
            'dependencies': K
        },
        'responderStart': {
            'registrationName': _0x3400db(0x17c),
            'dependencies': J
        },
        'responderMove': {
            'registrationName': _0x3400db(0x17d),
            'dependencies': K
        },
        'responderEnd': {
            'registrationName': 'onResponderEnd',
            'dependencies': L
        },
        'responderRelease': {
            'registrationName': _0x3400db(0x17e),
            'dependencies': L
        },
        'responderTerminationRequest': {
            'registrationName': _0x3400db(0x17f),
            'dependencies': []
        },
        'responderGrant': {
            'registrationName': _0x3400db(0x180),
            'dependencies': []
        },
        'responderReject': {
            'registrationName': _0x3400db(0x181),
            'dependencies': []
        },
        'responderTerminate': {
            'registrationName': 'onResponderTerminate',
            'dependencies': []
        }
    }, X = {
        '_getResponder': function () {
            return U;
        },
        'eventTypes': Y,
        'extractEvents': function (_0x126788, _0x18363b, _0x5af7ba, _0xf572a8) {
            var _0x31b3a5 = _0x3400db;
            if (G(_0x126788))
                V += 0x1;
            else {
                if (I(_0x126788)) {
                    if (0x0 <= V)
                        --V;
                    else
                        return console['error'](_0x31b3a5(0x182)), null;
                }
            }
            S[_0x31b3a5(0x183)](_0x126788, _0x5af7ba);
            if (_0x18363b && ('scroll' === _0x126788 && !_0x5af7ba['responderIgnoreScroll'] || 0x0 < V && _0x31b3a5(0x179) === _0x126788 || G(_0x126788) || H(_0x126788))) {
                var _0x46f09b = G(_0x126788) ? Y['startShouldSetResponder'] : H(_0x126788) ? Y[_0x31b3a5(0x184)] : _0x31b3a5(0x179) === _0x126788 ? Y[_0x31b3a5(0x185)] : Y[_0x31b3a5(0x186)];
                if (U)
                    _0x5c3b35: {
                        var _0x476ad7 = U;
                        for (var _0xa3fd3e = 0x0, _0x33e48c = _0x476ad7; _0x33e48c; _0x33e48c = t(_0x33e48c))
                            _0xa3fd3e++;
                        _0x33e48c = 0x0;
                        for (var _0x354c85 = _0x18363b; _0x354c85; _0x354c85 = t(_0x354c85))
                            _0x33e48c++;
                        for (; 0x0 < _0xa3fd3e - _0x33e48c;)
                            _0x476ad7 = t(_0x476ad7), _0xa3fd3e--;
                        for (; 0x0 < _0x33e48c - _0xa3fd3e;)
                            _0x18363b = t(_0x18363b), _0x33e48c--;
                        for (; _0xa3fd3e--;) {
                            if (_0x476ad7 === _0x18363b || _0x476ad7 === _0x18363b[_0x31b3a5(0x187)])
                                break _0x5c3b35;
                            _0x476ad7 = t(_0x476ad7), _0x18363b = t(_0x18363b);
                        }
                        _0x476ad7 = null;
                    }
                else
                    _0x476ad7 = _0x18363b;
                _0x18363b = _0x476ad7 === U, _0x476ad7 = F[_0x31b3a5(0x152)](_0x46f09b, _0x476ad7, _0x5af7ba, _0xf572a8), _0x476ad7['touchHistory'] = S[_0x31b3a5(0x188)], _0x18363b ? x(_0x476ad7, da) : x(_0x476ad7, ca);
                _0xc688ac: {
                    _0x46f09b = _0x476ad7['_dispatchListeners'], _0x18363b = _0x476ad7[_0x31b3a5(0x120)];
                    if (Array[_0x31b3a5(0x121)](_0x46f09b))
                        for (_0xa3fd3e = 0x0; _0xa3fd3e < _0x46f09b[_0x31b3a5(0x11c)] && !_0x476ad7[_0x31b3a5(0x144)](); _0xa3fd3e++) {
                            if (_0x46f09b[_0xa3fd3e](_0x476ad7, _0x18363b[_0xa3fd3e])) {
                                _0x46f09b = _0x18363b[_0xa3fd3e];
                                break _0xc688ac;
                            }
                        }
                    else {
                        if (_0x46f09b && _0x46f09b(_0x476ad7, _0x18363b)) {
                            _0x46f09b = _0x18363b;
                            break _0xc688ac;
                        }
                    }
                    _0x46f09b = null;
                }
                _0x476ad7[_0x31b3a5(0x120)] = null, _0x476ad7[_0x31b3a5(0x13a)] = null, _0x476ad7[_0x31b3a5(0x149)]() || _0x476ad7['constructor'][_0x31b3a5(0x153)](_0x476ad7), _0x46f09b && _0x46f09b !== U ? (_0x476ad7 = void 0x0, _0x18363b = F[_0x31b3a5(0x152)](Y[_0x31b3a5(0x189)], _0x46f09b, _0x5af7ba, _0xf572a8), _0x18363b[_0x31b3a5(0x188)] = S['touchHistory'], x(_0x18363b, A), _0xa3fd3e = !0x0 === r(_0x18363b), U ? (_0x33e48c = F[_0x31b3a5(0x152)](Y[_0x31b3a5(0x18a)], U, _0x5af7ba, _0xf572a8), _0x33e48c[_0x31b3a5(0x188)] = S[_0x31b3a5(0x188)], x(_0x33e48c, A), _0x354c85 = !_0x33e48c[_0x31b3a5(0x13a)] || r(_0x33e48c), _0x33e48c[_0x31b3a5(0x149)]() || _0x33e48c[_0x31b3a5(0x13e)][_0x31b3a5(0x153)](_0x33e48c), _0x354c85 ? (_0x33e48c = F[_0x31b3a5(0x152)](Y['responderTerminate'], U, _0x5af7ba, _0xf572a8), _0x33e48c[_0x31b3a5(0x188)] = S[_0x31b3a5(0x188)], x(_0x33e48c, A), _0x476ad7 = T(_0x476ad7, [
                    _0x18363b,
                    _0x33e48c
                ]), W(_0x46f09b, _0xa3fd3e)) : (_0x46f09b = F['getPooled'](Y['responderReject'], _0x46f09b, _0x5af7ba, _0xf572a8), _0x46f09b[_0x31b3a5(0x188)] = S[_0x31b3a5(0x188)], x(_0x46f09b, A), _0x476ad7 = T(_0x476ad7, _0x46f09b))) : (_0x476ad7 = T(_0x476ad7, _0x18363b), W(_0x46f09b, _0xa3fd3e)), _0x46f09b = _0x476ad7) : _0x46f09b = null;
            } else
                _0x46f09b = null;
            _0x476ad7 = U && G(_0x126788), _0x18363b = U && H(_0x126788), _0xa3fd3e = U && I(_0x126788);
            if (_0x476ad7 = _0x476ad7 ? Y[_0x31b3a5(0x18b)] : _0x18363b ? Y['responderMove'] : _0xa3fd3e ? Y['responderEnd'] : null)
                _0x476ad7 = F[_0x31b3a5(0x152)](_0x476ad7, U, _0x5af7ba, _0xf572a8), _0x476ad7[_0x31b3a5(0x188)] = S[_0x31b3a5(0x188)], x(_0x476ad7, A), _0x46f09b = T(_0x46f09b, _0x476ad7);
            _0x476ad7 = U && _0x31b3a5(0x157) === _0x126788;
            if (_0x126788 = U && !_0x476ad7 && I(_0x126788))
                _0x3dabc0: {
                    if ((_0x126788 = _0x5af7ba[_0x31b3a5(0x170)]) && 0x0 !== _0x126788[_0x31b3a5(0x11c)]) {
                        for (_0x18363b = 0x0; _0x18363b < _0x126788[_0x31b3a5(0x11c)]; _0x18363b++)
                            if (_0xa3fd3e = _0x126788[_0x18363b][_0x31b3a5(0x141)], null !== _0xa3fd3e && void 0x0 !== _0xa3fd3e && 0x0 !== _0xa3fd3e) {
                                _0x33e48c = p(_0xa3fd3e);
                                _0x1a74ec: {
                                    for (_0xa3fd3e = U; _0x33e48c;) {
                                        if (_0xa3fd3e === _0x33e48c || _0xa3fd3e === _0x33e48c['alternate']) {
                                            _0xa3fd3e = !0x0;
                                            break _0x1a74ec;
                                        }
                                        _0x33e48c = t(_0x33e48c);
                                    }
                                    _0xa3fd3e = !0x1;
                                }
                                if (_0xa3fd3e) {
                                    _0x126788 = !0x1;
                                    break _0x3dabc0;
                                }
                            }
                    }
                    _0x126788 = !0x0;
                }
            if (_0x126788 = _0x476ad7 ? Y[_0x31b3a5(0x18c)] : _0x126788 ? Y['responderRelease'] : null)
                _0x5af7ba = F['getPooled'](_0x126788, U, _0x5af7ba, _0xf572a8), _0x5af7ba['touchHistory'] = S[_0x31b3a5(0x188)], x(_0x5af7ba, A), _0x46f09b = T(_0x46f09b, _0x5af7ba), W(null);
            return _0x46f09b;
        },
        'GlobalResponderHandler': null,
        'injection': {
            'injectGlobalResponderHandler': function (_0x2d42b2) {
                X['GlobalResponderHandler'] = _0x2d42b2;
            }
        }
    }, Z = k[_0x3400db(0x18d)]['Events'], ka = Z[0x3], la = Z[0x0], ma = Z[0x1];
n = Z[0x2], p = la, q = ma, module[_0x3400db(0x18e)] = {
    'ResponderEventPlugin': X,
    'ResponderTouchHistoryStore': S,
    'injectEventPluginsByName': ka
};
