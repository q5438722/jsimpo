/** @license React v16.7.0
 * react-dom-unstable-native-dependencies.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
var _0x5ed5 = [
    'release',
    'responderTerminate',
    'responderReject',
    'responderStart',
    'responderMove',
    'responderEnd',
    'alternate',
    'responderRelease',
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'Events',
    'exports',
    '34776BCHbQy',
    '86313xbODEW',
    '86042RcBTsw',
    '1TPWuXX',
    '393086PSDXmN',
    '1TgyHth',
    '1ZcUvFQ',
    '207487IaKpHm',
    '846932wOXTpw',
    '14837MKqPGw',
    '13LFUKYK',
    'react-dom',
    'replace',
    'name',
    'length',
    'https://reactjs.org/docs/error-decoder.html?invariant=',
    '_dispatchListeners',
    '_dispatchInstances',
    'isArray',
    '103',
    'currentTarget',
    'return',
    'tag',
    'push',
    'captured',
    'bubbled',
    'apply',
    'concat',
    'forEach',
    'onClick',
    'onClickCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onMouseDown',
    'onMouseMove',
    'type',
    'input',
    'select',
    'textarea',
    'function',
    '231',
    'phasedRegistrationNames',
    'dispatchConfig',
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
    'unknown',
    'returnValue',
    'stopPropagation',
    'cancelBubble',
    'timeStamp',
    'now',
    'prototype',
    'extend',
    'pop',
    '279',
    'destructor',
    'eventPool',
    'getPooled',
    'touchstart',
    'mousedown',
    'touchmove',
    'touchend',
    'touchcancel',
    'mouseup',
    'timestamp',
    'identifier',
    '138',
    'touchActive',
    'startPageX',
    'pageX',
    'startPageY',
    'pageY',
    'currentPageX',
    'currentPageY',
    'previousPageX',
    'mostRecentTimeStamp',
    'previousPageY',
    'previousTimeStamp',
    'currentTimeStamp',
    'Cannot\x20record\x20touch\x20move\x20without\x20a\x20touch\x20start.\x0aTouch\x20Move:\x20%s\x0a',
    'Cannot\x20record\x20touch\x20end\x20without\x20a\x20touch\x20start.\x0aTouch\x20End:\x20%s\x0a',
    'Touch\x20Bank:\x20%s',
    'stringify',
    'slice',
    '\x20(original\x20size:\x20',
    'changedTouches',
    'touches',
    'numberActiveTouches',
    'indexOfSingleActiveTouch',
    'GlobalResponderHandler',
    'onChange',
    'onStartShouldSetResponder',
    'onStartShouldSetResponderCapture',
    'onScrollShouldSetResponder',
    'scroll',
    'onSelectionChangeShouldSetResponder',
    'onSelectionChangeShouldSetResponderCapture',
    'onResponderMove',
    'onResponderEnd',
    'onResponderTerminationRequest',
    'onResponderGrant',
    'onResponderReject',
    'error',
    'Ended\x20a\x20touch\x20event\x20which\x20was\x20not\x20counted\x20in\x20`trackedTouchCount`.',
    'recordTouchTrack',
    'selectionchange',
    'startShouldSetResponder',
    'moveShouldSetResponder',
    'selectionChangeShouldSetResponder',
    'touchHistory',
    'isPersistent',
    'responderGrant'
];
var _0xc225ae = _0xe538;
(function (_0x379bd8, _0x12d90f) {
    var _0x3b99ed = _0xe538;
    while (!![]) {
        try {
            var _0x58b35f = parseInt(_0x3b99ed(0xe3)) + parseInt(_0x3b99ed(0xe4)) + -parseInt(_0x3b99ed(0xe5)) * parseInt(_0x3b99ed(0xe6)) + parseInt(_0x3b99ed(0xe7)) * -parseInt(_0x3b99ed(0xe8)) + -parseInt(_0x3b99ed(0xe9)) * -parseInt(_0x3b99ed(0xea)) + parseInt(_0x3b99ed(0xeb)) + -parseInt(_0x3b99ed(0xec)) * parseInt(_0x3b99ed(0xed));
            if (_0x58b35f === _0x12d90f)
                break;
            else
                _0x379bd8['push'](_0x379bd8['shift']());
        } catch (_0x51322c) {
            _0x379bd8['push'](_0x379bd8['shift']());
        }
    }
}(_0x5ed5, 0x7aecb));
var k = require(_0xc225ae(0xee)), l = require('object-assign');
function aa(_0x238ecd, _0x3a3ac8, _0x2d9e3a, _0x41676c, _0x189f35, _0x47a38f, _0x4677d8, _0x19c12d) {
    var _0x22bba3 = _0xc225ae;
    if (!_0x238ecd) {
        _0x238ecd = void 0x0;
        if (void 0x0 === _0x3a3ac8)
            _0x238ecd = Error('Minified\x20exception\x20occurred;\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20the\x20full\x20error\x20message\x20and\x20additional\x20helpful\x20warnings.');
        else {
            var _0x55d7cd = [
                    _0x2d9e3a,
                    _0x41676c,
                    _0x189f35,
                    _0x47a38f,
                    _0x4677d8,
                    _0x19c12d
                ], _0x120c5c = 0x0;
            _0x238ecd = Error(_0x3a3ac8[_0x22bba3(0xef)](/%s/g, function () {
                return _0x55d7cd[_0x120c5c++];
            })), _0x238ecd[_0x22bba3(0xf0)] = 'Invariant\x20Violation';
        }
        _0x238ecd['framesToPop'] = 0x1;
        throw _0x238ecd;
    }
}
function _0xe538(_0x326ddf, _0x4f2844) {
    return _0xe538 = function (_0x5ed52c, _0xe5389d) {
        _0x5ed52c = _0x5ed52c - 0xe3;
        var _0x3c0516 = _0x5ed5[_0x5ed52c];
        return _0x3c0516;
    }, _0xe538(_0x326ddf, _0x4f2844);
}
function m(_0x306732) {
    var _0x38bcb6 = _0xc225ae;
    for (var _0x3f752e = arguments[_0x38bcb6(0xf1)] - 0x1, _0x3ee0d9 = _0x38bcb6(0xf2) + _0x306732, _0x1b4da3 = 0x0; _0x1b4da3 < _0x3f752e; _0x1b4da3++)
        _0x3ee0d9 += '&args[]=' + encodeURIComponent(arguments[_0x1b4da3 + 0x1]);
    aa(!0x1, 'Minified\x20React\x20error\x20#' + _0x306732 + ';\x20visit\x20%s\x20for\x20the\x20full\x20message\x20or\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20full\x20errors\x20and\x20additional\x20helpful\x20warnings.\x20', _0x3ee0d9);
}
var n = null, p = null, q = null;
function r(_0x3eccb3) {
    var _0x4b37ce = _0xc225ae, _0x2ce70d = _0x3eccb3[_0x4b37ce(0xf3)], _0x1e6a9f = _0x3eccb3[_0x4b37ce(0xf4)];
    return Array[_0x4b37ce(0xf5)](_0x2ce70d) ? m(_0x4b37ce(0xf6)) : void 0x0, _0x3eccb3[_0x4b37ce(0xf7)] = _0x2ce70d ? q(_0x1e6a9f) : null, _0x2ce70d = _0x2ce70d ? _0x2ce70d(_0x3eccb3) : null, _0x3eccb3[_0x4b37ce(0xf7)] = null, _0x3eccb3['_dispatchListeners'] = null, _0x3eccb3[_0x4b37ce(0xf4)] = null, _0x2ce70d;
}
function t(_0xe3bc04) {
    var _0x52df02 = _0xc225ae;
    do
        _0xe3bc04 = _0xe3bc04[_0x52df02(0xf8)];
    while (_0xe3bc04 && 0x5 !== _0xe3bc04[_0x52df02(0xf9)]);
    return _0xe3bc04 ? _0xe3bc04 : null;
}
function v(_0x3457b1, _0x4c5ecb, _0x1cea76) {
    var _0x5c4f49 = _0xc225ae;
    for (var _0x4192d1 = []; _0x3457b1;)
        _0x4192d1[_0x5c4f49(0xfa)](_0x3457b1), _0x3457b1 = t(_0x3457b1);
    for (_0x3457b1 = _0x4192d1['length']; 0x0 < _0x3457b1--;)
        _0x4c5ecb(_0x4192d1[_0x3457b1], _0x5c4f49(0xfb), _0x1cea76);
    for (_0x3457b1 = 0x0; _0x3457b1 < _0x4192d1[_0x5c4f49(0xf1)]; _0x3457b1++)
        _0x4c5ecb(_0x4192d1[_0x3457b1], _0x5c4f49(0xfc), _0x1cea76);
}
function w(_0x1b9428, _0x176cef) {
    var _0x1ce36d = _0xc225ae;
    null == _0x176cef ? m('30') : void 0x0;
    if (null == _0x1b9428)
        return _0x176cef;
    if (Array[_0x1ce36d(0xf5)](_0x1b9428)) {
        if (Array['isArray'](_0x176cef))
            return _0x1b9428[_0x1ce36d(0xfa)][_0x1ce36d(0xfd)](_0x1b9428, _0x176cef), _0x1b9428;
        return _0x1b9428[_0x1ce36d(0xfa)](_0x176cef), _0x1b9428;
    }
    return Array[_0x1ce36d(0xf5)](_0x176cef) ? [_0x1b9428][_0x1ce36d(0xfe)](_0x176cef) : [
        _0x1b9428,
        _0x176cef
    ];
}
function x(_0x2a5f96, _0x326b95, _0x878c54) {
    var _0x2c1ae2 = _0xc225ae;
    Array[_0x2c1ae2(0xf5)](_0x2a5f96) ? _0x2a5f96[_0x2c1ae2(0xff)](_0x326b95, _0x878c54) : _0x2a5f96 && _0x326b95['call'](_0x878c54, _0x2a5f96);
}
function y(_0x5de4e7, _0x4ad162) {
    var _0xfad1a1 = _0xc225ae, _0x13c254 = _0x5de4e7['stateNode'];
    if (!_0x13c254)
        return null;
    var _0x487103 = n(_0x13c254);
    if (!_0x487103)
        return null;
    _0x13c254 = _0x487103[_0x4ad162];
    _0x3a3d0c:
        switch (_0x4ad162) {
        case _0xfad1a1(0x100):
        case _0xfad1a1(0x101):
        case _0xfad1a1(0x102):
        case _0xfad1a1(0x103):
        case _0xfad1a1(0x104):
        case 'onMouseDownCapture':
        case _0xfad1a1(0x105):
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
            (_0x487103 = !_0x487103['disabled']) || (_0x5de4e7 = _0x5de4e7[_0xfad1a1(0x106)], _0x487103 = !('button' === _0x5de4e7 || _0xfad1a1(0x107) === _0x5de4e7 || _0xfad1a1(0x108) === _0x5de4e7 || _0xfad1a1(0x109) === _0x5de4e7)), _0x5de4e7 = !_0x487103;
            break _0x3a3d0c;
        default:
            _0x5de4e7 = !0x1;
        }
    if (_0x5de4e7)
        return null;
    return _0x13c254 && _0xfad1a1(0x10a) !== typeof _0x13c254 ? m(_0xfad1a1(0x10b), _0x4ad162, typeof _0x13c254) : void 0x0, _0x13c254;
}
function z(_0x3910e1, _0x5cb1f2, _0x484d4d) {
    var _0x11fce1 = _0xc225ae;
    if (_0x5cb1f2 = y(_0x3910e1, _0x484d4d['dispatchConfig'][_0x11fce1(0x10c)][_0x5cb1f2]))
        _0x484d4d['_dispatchListeners'] = w(_0x484d4d[_0x11fce1(0xf3)], _0x5cb1f2), _0x484d4d[_0x11fce1(0xf4)] = w(_0x484d4d[_0x11fce1(0xf4)], _0x3910e1);
}
function ca(_0x43f970) {
    var _0x17c29e = _0xc225ae;
    _0x43f970 && _0x43f970[_0x17c29e(0x10d)]['phasedRegistrationNames'] && v(_0x43f970[_0x17c29e(0x10e)], z, _0x43f970);
}
function da(_0x129e87) {
    var _0x289bb0 = _0xc225ae;
    if (_0x129e87 && _0x129e87[_0x289bb0(0x10d)][_0x289bb0(0x10c)]) {
        var _0x4a71cb = _0x129e87[_0x289bb0(0x10e)];
        _0x4a71cb = _0x4a71cb ? t(_0x4a71cb) : null, v(_0x4a71cb, z, _0x129e87);
    }
}
function A(_0x2686e3) {
    var _0x32754a = _0xc225ae;
    if (_0x2686e3 && _0x2686e3[_0x32754a(0x10d)]['registrationName']) {
        var _0x3f2a9a = _0x2686e3[_0x32754a(0x10e)];
        if (_0x3f2a9a && _0x2686e3 && _0x2686e3[_0x32754a(0x10d)][_0x32754a(0x10f)]) {
            var _0x11f43d = y(_0x3f2a9a, _0x2686e3[_0x32754a(0x10d)]['registrationName']);
            _0x11f43d && (_0x2686e3[_0x32754a(0xf3)] = w(_0x2686e3[_0x32754a(0xf3)], _0x11f43d), _0x2686e3['_dispatchInstances'] = w(_0x2686e3[_0x32754a(0xf4)], _0x3f2a9a));
        }
    }
}
function B() {
    return !0x0;
}
function C() {
    return !0x1;
}
function D(_0x4b1599, _0x42e463, _0x4f8961, _0x201f04) {
    var _0x2af4d6 = _0xc225ae;
    this[_0x2af4d6(0x10d)] = _0x4b1599, this['_targetInst'] = _0x42e463, this[_0x2af4d6(0x110)] = _0x4f8961, _0x4b1599 = this[_0x2af4d6(0x111)][_0x2af4d6(0x112)];
    for (var _0x201c5c in _0x4b1599)
        _0x4b1599[_0x2af4d6(0x113)](_0x201c5c) && ((_0x42e463 = _0x4b1599[_0x201c5c]) ? this[_0x201c5c] = _0x42e463(_0x4f8961) : _0x2af4d6(0x114) === _0x201c5c ? this[_0x2af4d6(0x114)] = _0x201f04 : this[_0x201c5c] = _0x4f8961[_0x201c5c]);
    return this[_0x2af4d6(0x115)] = (null != _0x4f8961[_0x2af4d6(0x116)] ? _0x4f8961[_0x2af4d6(0x116)] : !0x1 === _0x4f8961['returnValue']) ? B : C, this[_0x2af4d6(0x117)] = C, this;
}
l(D['prototype'], {
    'preventDefault': function () {
        var _0x378ebc = _0xc225ae;
        this[_0x378ebc(0x116)] = !0x0;
        var _0x242b04 = this[_0x378ebc(0x110)];
        _0x242b04 && (_0x242b04[_0x378ebc(0x118)] ? _0x242b04['preventDefault']() : _0x378ebc(0x119) !== typeof _0x242b04[_0x378ebc(0x11a)] && (_0x242b04['returnValue'] = !0x1), this[_0x378ebc(0x115)] = B);
    },
    'stopPropagation': function () {
        var _0xe7e42f = _0xc225ae, _0x3ae806 = this[_0xe7e42f(0x110)];
        _0x3ae806 && (_0x3ae806[_0xe7e42f(0x11b)] ? _0x3ae806[_0xe7e42f(0x11b)]() : _0xe7e42f(0x119) !== typeof _0x3ae806[_0xe7e42f(0x11c)] && (_0x3ae806[_0xe7e42f(0x11c)] = !0x0), this[_0xe7e42f(0x117)] = B);
    },
    'persist': function () {
        this['isPersistent'] = B;
    },
    'isPersistent': C,
    'destructor': function () {
        var _0x191c7c = _0xc225ae, _0x1cf5a2 = this[_0x191c7c(0x111)][_0x191c7c(0x112)], _0x2ad919;
        for (_0x2ad919 in _0x1cf5a2)
            this[_0x2ad919] = null;
        this[_0x191c7c(0x110)] = this[_0x191c7c(0x10e)] = this[_0x191c7c(0x10d)] = null, this[_0x191c7c(0x117)] = this[_0x191c7c(0x115)] = C, this[_0x191c7c(0xf4)] = this['_dispatchListeners'] = null;
    }
}), D[_0xc225ae(0x112)] = {
    'type': null,
    'target': null,
    'currentTarget': function () {
        return null;
    },
    'eventPhase': null,
    'bubbles': null,
    'cancelable': null,
    'timeStamp': function (_0x2fa0e7) {
        var _0x53ff79 = _0xc225ae;
        return _0x2fa0e7[_0x53ff79(0x11d)] || Date[_0x53ff79(0x11e)]();
    },
    'defaultPrevented': null,
    'isTrusted': null
}, D['extend'] = function (_0x119bb2) {
    var _0x31f870 = _0xc225ae;
    function _0x589309() {
    }
    function _0x284d91() {
        var _0x503fde = _0xe538;
        return _0x15fe43[_0x503fde(0xfd)](this, arguments);
    }
    var _0x15fe43 = this;
    _0x589309['prototype'] = _0x15fe43['prototype'];
    var _0x4907ec = new _0x589309();
    return l(_0x4907ec, _0x284d91[_0x31f870(0x11f)]), _0x284d91[_0x31f870(0x11f)] = _0x4907ec, _0x284d91['prototype']['constructor'] = _0x284d91, _0x284d91[_0x31f870(0x112)] = l({}, _0x15fe43[_0x31f870(0x112)], _0x119bb2), _0x284d91['extend'] = _0x15fe43[_0x31f870(0x120)], E(_0x284d91), _0x284d91;
}, E(D);
function ea(_0x2c31c4, _0x261e1d, _0x248fa4, _0x54e5b2) {
    var _0x53c171 = _0xc225ae;
    if (this['eventPool']['length']) {
        var _0x2821a4 = this['eventPool'][_0x53c171(0x121)]();
        return this['call'](_0x2821a4, _0x2c31c4, _0x261e1d, _0x248fa4, _0x54e5b2), _0x2821a4;
    }
    return new this(_0x2c31c4, _0x261e1d, _0x248fa4, _0x54e5b2);
}
function fa(_0x39c7ed) {
    var _0x183f8b = _0xc225ae;
    _0x39c7ed instanceof this ? void 0x0 : m(_0x183f8b(0x122)), _0x39c7ed[_0x183f8b(0x123)](), 0xa > this[_0x183f8b(0x124)][_0x183f8b(0xf1)] && this[_0x183f8b(0x124)][_0x183f8b(0xfa)](_0x39c7ed);
}
function E(_0x276604) {
    var _0x5de564 = _0xc225ae;
    _0x276604[_0x5de564(0x124)] = [], _0x276604[_0x5de564(0x125)] = ea, _0x276604['release'] = fa;
}
var F = D[_0xc225ae(0x120)]({
    'touchHistory': function () {
        return null;
    }
});
function G(_0x5e9895) {
    var _0x59986f = _0xc225ae;
    return _0x59986f(0x126) === _0x5e9895 || _0x59986f(0x127) === _0x5e9895;
}
function H(_0x37a688) {
    var _0xc750 = _0xc225ae;
    return _0xc750(0x128) === _0x37a688 || 'mousemove' === _0x37a688;
}
function I(_0x367916) {
    var _0x263f65 = _0xc225ae;
    return _0x263f65(0x129) === _0x367916 || _0x263f65(0x12a) === _0x367916 || _0x263f65(0x12b) === _0x367916;
}
var J = [
        'touchstart',
        _0xc225ae(0x127)
    ], K = [
        _0xc225ae(0x128),
        'mousemove'
    ], L = [
        _0xc225ae(0x12a),
        _0xc225ae(0x129),
        _0xc225ae(0x12b)
    ], M = [], N = {
        'touchBank': M,
        'numberActiveTouches': 0x0,
        'indexOfSingleActiveTouch': -0x1,
        'mostRecentTimeStamp': 0x0
    };
function O(_0x2e3427) {
    var _0xa2d4 = _0xc225ae;
    return _0x2e3427[_0xa2d4(0x11d)] || _0x2e3427[_0xa2d4(0x12c)];
}
function P(_0x1c3622) {
    var _0x111673 = _0xc225ae;
    return _0x1c3622 = _0x1c3622[_0x111673(0x12d)], null == _0x1c3622 ? m(_0x111673(0x12e)) : void 0x0, _0x1c3622;
}
function ha(_0x53a180) {
    var _0x332395 = _0xc225ae, _0x1a6436 = P(_0x53a180), _0x2212dc = M[_0x1a6436];
    _0x2212dc ? (_0x2212dc[_0x332395(0x12f)] = !0x0, _0x2212dc[_0x332395(0x130)] = _0x53a180[_0x332395(0x131)], _0x2212dc[_0x332395(0x132)] = _0x53a180[_0x332395(0x133)], _0x2212dc['startTimeStamp'] = O(_0x53a180), _0x2212dc[_0x332395(0x134)] = _0x53a180['pageX'], _0x2212dc[_0x332395(0x135)] = _0x53a180[_0x332395(0x133)], _0x2212dc['currentTimeStamp'] = O(_0x53a180), _0x2212dc[_0x332395(0x136)] = _0x53a180[_0x332395(0x131)], _0x2212dc['previousPageY'] = _0x53a180[_0x332395(0x133)], _0x2212dc['previousTimeStamp'] = O(_0x53a180)) : (_0x2212dc = {
        'touchActive': !0x0,
        'startPageX': _0x53a180[_0x332395(0x131)],
        'startPageY': _0x53a180['pageY'],
        'startTimeStamp': O(_0x53a180),
        'currentPageX': _0x53a180['pageX'],
        'currentPageY': _0x53a180[_0x332395(0x133)],
        'currentTimeStamp': O(_0x53a180),
        'previousPageX': _0x53a180['pageX'],
        'previousPageY': _0x53a180[_0x332395(0x133)],
        'previousTimeStamp': O(_0x53a180)
    }, M[_0x1a6436] = _0x2212dc), N[_0x332395(0x137)] = O(_0x53a180);
}
function ia(_0x1b349d) {
    var _0x2bf07e = _0xc225ae, _0x3020e1 = M[P(_0x1b349d)];
    _0x3020e1 ? (_0x3020e1[_0x2bf07e(0x12f)] = !0x0, _0x3020e1[_0x2bf07e(0x136)] = _0x3020e1[_0x2bf07e(0x134)], _0x3020e1[_0x2bf07e(0x138)] = _0x3020e1[_0x2bf07e(0x135)], _0x3020e1[_0x2bf07e(0x139)] = _0x3020e1[_0x2bf07e(0x13a)], _0x3020e1[_0x2bf07e(0x134)] = _0x1b349d[_0x2bf07e(0x131)], _0x3020e1[_0x2bf07e(0x135)] = _0x1b349d[_0x2bf07e(0x133)], _0x3020e1[_0x2bf07e(0x13a)] = O(_0x1b349d), N['mostRecentTimeStamp'] = O(_0x1b349d)) : console['error'](_0x2bf07e(0x13b), 'Touch\x20Bank:\x20%s', Q(_0x1b349d), R());
}
function ja(_0x3f2fce) {
    var _0x128502 = _0xc225ae, _0x10445d = M[P(_0x3f2fce)];
    _0x10445d ? (_0x10445d[_0x128502(0x12f)] = !0x1, _0x10445d['previousPageX'] = _0x10445d[_0x128502(0x134)], _0x10445d[_0x128502(0x138)] = _0x10445d['currentPageY'], _0x10445d['previousTimeStamp'] = _0x10445d[_0x128502(0x13a)], _0x10445d['currentPageX'] = _0x3f2fce[_0x128502(0x131)], _0x10445d['currentPageY'] = _0x3f2fce[_0x128502(0x133)], _0x10445d['currentTimeStamp'] = O(_0x3f2fce), N['mostRecentTimeStamp'] = O(_0x3f2fce)) : console['error'](_0x128502(0x13c), _0x128502(0x13d), Q(_0x3f2fce), R());
}
function Q(_0x11ce77) {
    var _0x494e6b = _0xc225ae;
    return JSON[_0x494e6b(0x13e)]({
        'identifier': _0x11ce77[_0x494e6b(0x12d)],
        'pageX': _0x11ce77['pageX'],
        'pageY': _0x11ce77[_0x494e6b(0x133)],
        'timestamp': O(_0x11ce77)
    });
}
function R() {
    var _0x546412 = _0xc225ae, _0x431b2a = JSON[_0x546412(0x13e)](M[_0x546412(0x13f)](0x0, 0x14));
    return 0x14 < M[_0x546412(0xf1)] && (_0x431b2a += _0x546412(0x140) + M[_0x546412(0xf1)] + ')'), _0x431b2a;
}
var S = {
    'recordTouchTrack': function (_0x49fcb3, _0x54715d) {
        var _0x5ef16d = _0xc225ae;
        if (H(_0x49fcb3))
            _0x54715d[_0x5ef16d(0x141)][_0x5ef16d(0xff)](ia);
        else {
            if (G(_0x49fcb3))
                _0x54715d[_0x5ef16d(0x141)][_0x5ef16d(0xff)](ha), N['numberActiveTouches'] = _0x54715d[_0x5ef16d(0x142)]['length'], 0x1 === N[_0x5ef16d(0x143)] && (N[_0x5ef16d(0x144)] = _0x54715d[_0x5ef16d(0x142)][0x0][_0x5ef16d(0x12d)]);
            else {
                if (I(_0x49fcb3) && (_0x54715d[_0x5ef16d(0x141)][_0x5ef16d(0xff)](ja), N[_0x5ef16d(0x143)] = _0x54715d[_0x5ef16d(0x142)][_0x5ef16d(0xf1)], 0x1 === N[_0x5ef16d(0x143)])) {
                    for (_0x49fcb3 = 0x0; _0x49fcb3 < M[_0x5ef16d(0xf1)]; _0x49fcb3++)
                        if (_0x54715d = M[_0x49fcb3], null != _0x54715d && _0x54715d[_0x5ef16d(0x12f)]) {
                            N['indexOfSingleActiveTouch'] = _0x49fcb3;
                            break;
                        }
                }
            }
        }
    },
    'touchHistory': N
};
function T(_0x3cc9ab, _0x2467c5) {
    var _0x17d048 = _0xc225ae;
    return null == _0x2467c5 ? m('29') : void 0x0, null == _0x3cc9ab ? _0x2467c5 : Array[_0x17d048(0xf5)](_0x3cc9ab) ? _0x3cc9ab[_0x17d048(0xfe)](_0x2467c5) : Array['isArray'](_0x2467c5) ? [_0x3cc9ab][_0x17d048(0xfe)](_0x2467c5) : [
        _0x3cc9ab,
        _0x2467c5
    ];
}
var U = null, V = 0x0;
function W(_0x1e422c, _0x40aff9) {
    var _0x3255df = _0xc225ae, _0x2ce3dd = U;
    U = _0x1e422c;
    if (null !== X[_0x3255df(0x145)])
        X[_0x3255df(0x145)][_0x3255df(0x146)](_0x2ce3dd, _0x1e422c, _0x40aff9);
}
var Y = {
        'startShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0xc225ae(0x147),
                'captured': _0xc225ae(0x148)
            },
            'dependencies': J
        },
        'scrollShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0xc225ae(0x149),
                'captured': 'onScrollShouldSetResponderCapture'
            },
            'dependencies': [_0xc225ae(0x14a)]
        },
        'selectionChangeShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': _0xc225ae(0x14b),
                'captured': _0xc225ae(0x14c)
            },
            'dependencies': ['selectionchange']
        },
        'moveShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': 'onMoveShouldSetResponder',
                'captured': 'onMoveShouldSetResponderCapture'
            },
            'dependencies': K
        },
        'responderStart': {
            'registrationName': 'onResponderStart',
            'dependencies': J
        },
        'responderMove': {
            'registrationName': _0xc225ae(0x14d),
            'dependencies': K
        },
        'responderEnd': {
            'registrationName': _0xc225ae(0x14e),
            'dependencies': L
        },
        'responderRelease': {
            'registrationName': 'onResponderRelease',
            'dependencies': L
        },
        'responderTerminationRequest': {
            'registrationName': _0xc225ae(0x14f),
            'dependencies': []
        },
        'responderGrant': {
            'registrationName': _0xc225ae(0x150),
            'dependencies': []
        },
        'responderReject': {
            'registrationName': _0xc225ae(0x151),
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
        'extractEvents': function (_0x2ab73e, _0x56507d, _0x2113ac, _0x5d7c58) {
            var _0x5a7053 = _0xc225ae;
            if (G(_0x2ab73e))
                V += 0x1;
            else {
                if (I(_0x2ab73e)) {
                    if (0x0 <= V)
                        --V;
                    else
                        return console[_0x5a7053(0x152)](_0x5a7053(0x153)), null;
                }
            }
            S[_0x5a7053(0x154)](_0x2ab73e, _0x2113ac);
            if (_0x56507d && (_0x5a7053(0x14a) === _0x2ab73e && !_0x2113ac['responderIgnoreScroll'] || 0x0 < V && _0x5a7053(0x155) === _0x2ab73e || G(_0x2ab73e) || H(_0x2ab73e))) {
                var _0x13d67d = G(_0x2ab73e) ? Y[_0x5a7053(0x156)] : H(_0x2ab73e) ? Y[_0x5a7053(0x157)] : _0x5a7053(0x155) === _0x2ab73e ? Y[_0x5a7053(0x158)] : Y['scrollShouldSetResponder'];
                if (U)
                    _0xfa8ee5: {
                        var _0x5c61ef = U;
                        for (var _0x228866 = 0x0, _0x352210 = _0x5c61ef; _0x352210; _0x352210 = t(_0x352210))
                            _0x228866++;
                        _0x352210 = 0x0;
                        for (var _0x4c08e6 = _0x56507d; _0x4c08e6; _0x4c08e6 = t(_0x4c08e6))
                            _0x352210++;
                        for (; 0x0 < _0x228866 - _0x352210;)
                            _0x5c61ef = t(_0x5c61ef), _0x228866--;
                        for (; 0x0 < _0x352210 - _0x228866;)
                            _0x56507d = t(_0x56507d), _0x352210--;
                        for (; _0x228866--;) {
                            if (_0x5c61ef === _0x56507d || _0x5c61ef === _0x56507d['alternate'])
                                break _0xfa8ee5;
                            _0x5c61ef = t(_0x5c61ef), _0x56507d = t(_0x56507d);
                        }
                        _0x5c61ef = null;
                    }
                else
                    _0x5c61ef = _0x56507d;
                _0x56507d = _0x5c61ef === U, _0x5c61ef = F[_0x5a7053(0x125)](_0x13d67d, _0x5c61ef, _0x2113ac, _0x5d7c58), _0x5c61ef['touchHistory'] = S[_0x5a7053(0x159)], _0x56507d ? x(_0x5c61ef, da) : x(_0x5c61ef, ca);
                _0x35e3c2: {
                    _0x13d67d = _0x5c61ef[_0x5a7053(0xf3)], _0x56507d = _0x5c61ef[_0x5a7053(0xf4)];
                    if (Array[_0x5a7053(0xf5)](_0x13d67d))
                        for (_0x228866 = 0x0; _0x228866 < _0x13d67d[_0x5a7053(0xf1)] && !_0x5c61ef[_0x5a7053(0x117)](); _0x228866++) {
                            if (_0x13d67d[_0x228866](_0x5c61ef, _0x56507d[_0x228866])) {
                                _0x13d67d = _0x56507d[_0x228866];
                                break _0x35e3c2;
                            }
                        }
                    else {
                        if (_0x13d67d && _0x13d67d(_0x5c61ef, _0x56507d)) {
                            _0x13d67d = _0x56507d;
                            break _0x35e3c2;
                        }
                    }
                    _0x13d67d = null;
                }
                _0x5c61ef[_0x5a7053(0xf4)] = null, _0x5c61ef[_0x5a7053(0xf3)] = null, _0x5c61ef[_0x5a7053(0x15a)]() || _0x5c61ef[_0x5a7053(0x111)]['release'](_0x5c61ef), _0x13d67d && _0x13d67d !== U ? (_0x5c61ef = void 0x0, _0x56507d = F[_0x5a7053(0x125)](Y[_0x5a7053(0x15b)], _0x13d67d, _0x2113ac, _0x5d7c58), _0x56507d['touchHistory'] = S[_0x5a7053(0x159)], x(_0x56507d, A), _0x228866 = !0x0 === r(_0x56507d), U ? (_0x352210 = F[_0x5a7053(0x125)](Y['responderTerminationRequest'], U, _0x2113ac, _0x5d7c58), _0x352210[_0x5a7053(0x159)] = S[_0x5a7053(0x159)], x(_0x352210, A), _0x4c08e6 = !_0x352210['_dispatchListeners'] || r(_0x352210), _0x352210[_0x5a7053(0x15a)]() || _0x352210[_0x5a7053(0x111)][_0x5a7053(0x15c)](_0x352210), _0x4c08e6 ? (_0x352210 = F['getPooled'](Y[_0x5a7053(0x15d)], U, _0x2113ac, _0x5d7c58), _0x352210[_0x5a7053(0x159)] = S[_0x5a7053(0x159)], x(_0x352210, A), _0x5c61ef = T(_0x5c61ef, [
                    _0x56507d,
                    _0x352210
                ]), W(_0x13d67d, _0x228866)) : (_0x13d67d = F['getPooled'](Y[_0x5a7053(0x15e)], _0x13d67d, _0x2113ac, _0x5d7c58), _0x13d67d[_0x5a7053(0x159)] = S[_0x5a7053(0x159)], x(_0x13d67d, A), _0x5c61ef = T(_0x5c61ef, _0x13d67d))) : (_0x5c61ef = T(_0x5c61ef, _0x56507d), W(_0x13d67d, _0x228866)), _0x13d67d = _0x5c61ef) : _0x13d67d = null;
            } else
                _0x13d67d = null;
            _0x5c61ef = U && G(_0x2ab73e), _0x56507d = U && H(_0x2ab73e), _0x228866 = U && I(_0x2ab73e);
            if (_0x5c61ef = _0x5c61ef ? Y[_0x5a7053(0x15f)] : _0x56507d ? Y[_0x5a7053(0x160)] : _0x228866 ? Y[_0x5a7053(0x161)] : null)
                _0x5c61ef = F[_0x5a7053(0x125)](_0x5c61ef, U, _0x2113ac, _0x5d7c58), _0x5c61ef[_0x5a7053(0x159)] = S[_0x5a7053(0x159)], x(_0x5c61ef, A), _0x13d67d = T(_0x13d67d, _0x5c61ef);
            _0x5c61ef = U && _0x5a7053(0x12a) === _0x2ab73e;
            if (_0x2ab73e = U && !_0x5c61ef && I(_0x2ab73e))
                _0x322763: {
                    if ((_0x2ab73e = _0x2113ac[_0x5a7053(0x142)]) && 0x0 !== _0x2ab73e[_0x5a7053(0xf1)]) {
                        for (_0x56507d = 0x0; _0x56507d < _0x2ab73e['length']; _0x56507d++)
                            if (_0x228866 = _0x2ab73e[_0x56507d][_0x5a7053(0x114)], null !== _0x228866 && void 0x0 !== _0x228866 && 0x0 !== _0x228866) {
                                _0x352210 = p(_0x228866);
                                _0x38563d: {
                                    for (_0x228866 = U; _0x352210;) {
                                        if (_0x228866 === _0x352210 || _0x228866 === _0x352210[_0x5a7053(0x162)]) {
                                            _0x228866 = !0x0;
                                            break _0x38563d;
                                        }
                                        _0x352210 = t(_0x352210);
                                    }
                                    _0x228866 = !0x1;
                                }
                                if (_0x228866) {
                                    _0x2ab73e = !0x1;
                                    break _0x322763;
                                }
                            }
                    }
                    _0x2ab73e = !0x0;
                }
            if (_0x2ab73e = _0x5c61ef ? Y['responderTerminate'] : _0x2ab73e ? Y[_0x5a7053(0x163)] : null)
                _0x2113ac = F[_0x5a7053(0x125)](_0x2ab73e, U, _0x2113ac, _0x5d7c58), _0x2113ac[_0x5a7053(0x159)] = S[_0x5a7053(0x159)], x(_0x2113ac, A), _0x13d67d = T(_0x13d67d, _0x2113ac), W(null);
            return _0x13d67d;
        },
        'GlobalResponderHandler': null,
        'injection': {
            'injectGlobalResponderHandler': function (_0x1b453b) {
                var _0x548e8a = _0xc225ae;
                X[_0x548e8a(0x145)] = _0x1b453b;
            }
        }
    }, Z = k[_0xc225ae(0x164)][_0xc225ae(0x165)], ka = Z[0x3], la = Z[0x0], ma = Z[0x1];
n = Z[0x2], p = la, q = ma, module[_0xc225ae(0x166)] = {
    'ResponderEventPlugin': X,
    'ResponderTouchHistoryStore': S,
    'injectEventPluginsByName': ka
};
