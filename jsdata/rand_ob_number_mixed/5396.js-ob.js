/** @license React v16.7.0
 * react-dom-unstable-native-dependencies.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
var k = require('react-dom'), l = require('object-assign');
function aa(_0x354787, _0x4e18f5, _0x291aaf, _0x1d3a22, _0x3b113f, _0x5d90e1, _0x150db0, _0x45d7d9) {
    if (!_0x354787) {
        _0x354787 = void (-0x640 + -0x14a5 + 0x1ae5);
        if (void (0x145 * 0xa + 0x10cb + -0x1d7d) === _0x4e18f5)
            _0x354787 = Error('Minified\x20exception\x20occurred;\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20the\x20full\x20error\x20message\x20and\x20additional\x20helpful\x20warnings.');
        else {
            var _0x15606e = [
                    _0x291aaf,
                    _0x1d3a22,
                    _0x3b113f,
                    _0x5d90e1,
                    _0x150db0,
                    _0x45d7d9
                ], _0x3fc035 = -0x1 * 0xe9 + -0x2d * -0x5f + -0xfca;
            _0x354787 = Error(_0x4e18f5['replace'](/%s/g, function () {
                return _0x15606e[_0x3fc035++];
            })), _0x354787['name'] = 'Invariant\x20Violation';
        }
        _0x354787['framesToPop'] = 0xf76 * -0x2 + 0x2331 * 0x1 + -0x444;
        throw _0x354787;
    }
}
function m(_0x56d738) {
    for (var _0x4fbb38 = arguments['length'] - (-0x1 * 0x305 + -0x29 * 0x3d + 0xccb), _0x2b717f = 'https://reactjs.org/docs/error-decoder.html?invariant=' + _0x56d738, _0x288cf7 = 0x1929 + -0x1394 + -0x595; _0x288cf7 < _0x4fbb38; _0x288cf7++)
        _0x2b717f += '&args[]=' + encodeURIComponent(arguments[_0x288cf7 + (-0x251 * 0xf + 0x1e92 + 0x42e * 0x1)]);
    aa(!(-0x6e * -0x4f + 0x8 * -0x3ee + -0x281), 'Minified\x20React\x20error\x20#' + _0x56d738 + ';\x20visit\x20%s\x20for\x20the\x20full\x20message\x20or\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20full\x20errors\x20and\x20additional\x20helpful\x20warnings.\x20', _0x2b717f);
}
var n = null, p = null, q = null;
function r(_0x338dfe) {
    var _0x16f2b9 = _0x338dfe['_dispatchListeners'], _0x3dac7b = _0x338dfe['_dispatchInstances'];
    return Array['isArray'](_0x16f2b9) ? m('103') : void (-0x1ea2 + 0x683 * -0x4 + 0x38ae), _0x338dfe['currentTarget'] = _0x16f2b9 ? q(_0x3dac7b) : null, _0x16f2b9 = _0x16f2b9 ? _0x16f2b9(_0x338dfe) : null, _0x338dfe['currentTarget'] = null, _0x338dfe['_dispatchListeners'] = null, _0x338dfe['_dispatchInstances'] = null, _0x16f2b9;
}
function t(_0x252a91) {
    do
        _0x252a91 = _0x252a91['return'];
    while (_0x252a91 && -0x2272 + 0xfec + 0x128b !== _0x252a91['tag']);
    return _0x252a91 ? _0x252a91 : null;
}
function v(_0x5443b4, _0x274ad5, _0x5b403b) {
    for (var _0x422375 = []; _0x5443b4;)
        _0x422375['push'](_0x5443b4), _0x5443b4 = t(_0x5443b4);
    for (_0x5443b4 = _0x422375['length']; 0x1567 + -0x13e8 + -0x17f < _0x5443b4--;)
        _0x274ad5(_0x422375[_0x5443b4], 'captured', _0x5b403b);
    for (_0x5443b4 = 0x1 * -0x2169 + 0x1b67 + -0x301 * -0x2; _0x5443b4 < _0x422375['length']; _0x5443b4++)
        _0x274ad5(_0x422375[_0x5443b4], 'bubbled', _0x5b403b);
}
function w(_0x23d6a7, _0x47be71) {
    null == _0x47be71 ? m('30') : void (-0x2381 + -0x1 * 0x2377 + -0x5ea * -0xc);
    if (null == _0x23d6a7)
        return _0x47be71;
    if (Array['isArray'](_0x23d6a7)) {
        if (Array['isArray'](_0x47be71))
            return _0x23d6a7['push']['apply'](_0x23d6a7, _0x47be71), _0x23d6a7;
        return _0x23d6a7['push'](_0x47be71), _0x23d6a7;
    }
    return Array['isArray'](_0x47be71) ? [_0x23d6a7]['concat'](_0x47be71) : [
        _0x23d6a7,
        _0x47be71
    ];
}
function x(_0x281bbf, _0x5ae7ec, _0x5dbef9) {
    Array['isArray'](_0x281bbf) ? _0x281bbf['forEach'](_0x5ae7ec, _0x5dbef9) : _0x281bbf && _0x5ae7ec['call'](_0x5dbef9, _0x281bbf);
}
function y(_0x5cf35e, _0x254fde) {
    var _0x28672f = _0x5cf35e['stateNode'];
    if (!_0x28672f)
        return null;
    var _0x50987d = n(_0x28672f);
    if (!_0x50987d)
        return null;
    _0x28672f = _0x50987d[_0x254fde];
    _0x25605a:
        switch (_0x254fde) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
            (_0x50987d = !_0x50987d['disabled']) || (_0x5cf35e = _0x5cf35e['type'], _0x50987d = !('button' === _0x5cf35e || 'input' === _0x5cf35e || 'select' === _0x5cf35e || 'textarea' === _0x5cf35e)), _0x5cf35e = !_0x50987d;
            break _0x25605a;
        default:
            _0x5cf35e = !(-0x1c3f * -0x1 + -0x7c9 + -0x1475);
        }
    if (_0x5cf35e)
        return null;
    return _0x28672f && 'function' !== typeof _0x28672f ? m('231', _0x254fde, typeof _0x28672f) : void (0x43f * -0x1 + 0x8bb + -0x1c * 0x29), _0x28672f;
}
function z(_0x1ca33c, _0x38c18b, _0x34205e) {
    if (_0x38c18b = y(_0x1ca33c, _0x34205e['dispatchConfig']['phasedRegistrationNames'][_0x38c18b]))
        _0x34205e['_dispatchListeners'] = w(_0x34205e['_dispatchListeners'], _0x38c18b), _0x34205e['_dispatchInstances'] = w(_0x34205e['_dispatchInstances'], _0x1ca33c);
}
function ca(_0x548bce) {
    _0x548bce && _0x548bce['dispatchConfig']['phasedRegistrationNames'] && v(_0x548bce['_targetInst'], z, _0x548bce);
}
function da(_0x3b8b71) {
    if (_0x3b8b71 && _0x3b8b71['dispatchConfig']['phasedRegistrationNames']) {
        var _0x11c3c7 = _0x3b8b71['_targetInst'];
        _0x11c3c7 = _0x11c3c7 ? t(_0x11c3c7) : null, v(_0x11c3c7, z, _0x3b8b71);
    }
}
function A(_0x3026ff) {
    if (_0x3026ff && _0x3026ff['dispatchConfig']['registrationName']) {
        var _0x3796fa = _0x3026ff['_targetInst'];
        if (_0x3796fa && _0x3026ff && _0x3026ff['dispatchConfig']['registrationName']) {
            var _0x4d9466 = y(_0x3796fa, _0x3026ff['dispatchConfig']['registrationName']);
            _0x4d9466 && (_0x3026ff['_dispatchListeners'] = w(_0x3026ff['_dispatchListeners'], _0x4d9466), _0x3026ff['_dispatchInstances'] = w(_0x3026ff['_dispatchInstances'], _0x3796fa));
        }
    }
}
function B() {
    return !(-0x18ed + -0x65b + 0x478 * 0x7);
}
function C() {
    return !(0x1c41 * -0x1 + -0x4 * 0x7c + 0x1e32);
}
function D(_0x156f3f, _0xfedc34, _0x51398a, _0xd12982) {
    this['dispatchConfig'] = _0x156f3f, this['_targetInst'] = _0xfedc34, this['nativeEvent'] = _0x51398a, _0x156f3f = this['constructor']['Interface'];
    for (var _0x1f45bf in _0x156f3f)
        _0x156f3f['hasOwnProperty'](_0x1f45bf) && ((_0xfedc34 = _0x156f3f[_0x1f45bf]) ? this[_0x1f45bf] = _0xfedc34(_0x51398a) : 'target' === _0x1f45bf ? this['target'] = _0xd12982 : this[_0x1f45bf] = _0x51398a[_0x1f45bf]);
    return this['isDefaultPrevented'] = (null != _0x51398a['defaultPrevented'] ? _0x51398a['defaultPrevented'] : !(0x5e3 + -0x2049 + 0x1a67) === _0x51398a['returnValue']) ? B : C, this['isPropagationStopped'] = C, this;
}
l(D['prototype'], {
    'preventDefault': function () {
        this['defaultPrevented'] = !(-0x1faa + 0x14c * -0x6 + -0x33 * -0xc6);
        var _0x2dd9c2 = this['nativeEvent'];
        _0x2dd9c2 && (_0x2dd9c2['preventDefault'] ? _0x2dd9c2['preventDefault']() : 'unknown' !== typeof _0x2dd9c2['returnValue'] && (_0x2dd9c2['returnValue'] = !(-0x13e7 + -0xc9c + 0x2084)), this['isDefaultPrevented'] = B);
    },
    'stopPropagation': function () {
        var _0x37a744 = this['nativeEvent'];
        _0x37a744 && (_0x37a744['stopPropagation'] ? _0x37a744['stopPropagation']() : 'unknown' !== typeof _0x37a744['cancelBubble'] && (_0x37a744['cancelBubble'] = !(0x5 * 0x4b7 + 0x337 + -0xfe * 0x1b)), this['isPropagationStopped'] = B);
    },
    'persist': function () {
        this['isPersistent'] = B;
    },
    'isPersistent': C,
    'destructor': function () {
        var _0x32fecb = this['constructor']['Interface'], _0x31e745;
        for (_0x31e745 in _0x32fecb)
            this[_0x31e745] = null;
        this['nativeEvent'] = this['_targetInst'] = this['dispatchConfig'] = null, this['isPropagationStopped'] = this['isDefaultPrevented'] = C, this['_dispatchInstances'] = this['_dispatchListeners'] = null;
    }
}), D['Interface'] = {
    'type': null,
    'target': null,
    'currentTarget': function () {
        return null;
    },
    'eventPhase': null,
    'bubbles': null,
    'cancelable': null,
    'timeStamp': function (_0x5c6f52) {
        return _0x5c6f52['timeStamp'] || Date['now']();
    },
    'defaultPrevented': null,
    'isTrusted': null
}, D['extend'] = function (_0x38ea06) {
    function _0x68ae2f() {
    }
    function _0x5476ae() {
        return _0x11feb1['apply'](this, arguments);
    }
    var _0x11feb1 = this;
    _0x68ae2f['prototype'] = _0x11feb1['prototype'];
    var _0x104461 = new _0x68ae2f();
    return l(_0x104461, _0x5476ae['prototype']), _0x5476ae['prototype'] = _0x104461, _0x5476ae['prototype']['constructor'] = _0x5476ae, _0x5476ae['Interface'] = l({}, _0x11feb1['Interface'], _0x38ea06), _0x5476ae['extend'] = _0x11feb1['extend'], E(_0x5476ae), _0x5476ae;
}, E(D);
function ea(_0xcb6d27, _0x127166, _0xe64cfc, _0x5d3007) {
    if (this['eventPool']['length']) {
        var _0x49b32c = this['eventPool']['pop']();
        return this['call'](_0x49b32c, _0xcb6d27, _0x127166, _0xe64cfc, _0x5d3007), _0x49b32c;
    }
    return new this(_0xcb6d27, _0x127166, _0xe64cfc, _0x5d3007);
}
function fa(_0x19f290) {
    _0x19f290 instanceof this ? void (-0x10 * 0x1b6 + 0x3 * 0xa25 + 0x1d * -0x1b) : m('279'), _0x19f290['destructor'](), -0x238e + -0x619 * -0x1 + 0x1d7f > this['eventPool']['length'] && this['eventPool']['push'](_0x19f290);
}
function E(_0xffeda8) {
    _0xffeda8['eventPool'] = [], _0xffeda8['getPooled'] = ea, _0xffeda8['release'] = fa;
}
var F = D['extend']({
    'touchHistory': function () {
        return null;
    }
});
function G(_0x55a7c1) {
    return 'touchstart' === _0x55a7c1 || 'mousedown' === _0x55a7c1;
}
function H(_0x2db52b) {
    return 'touchmove' === _0x2db52b || 'mousemove' === _0x2db52b;
}
function I(_0x548c35) {
    return 'touchend' === _0x548c35 || 'touchcancel' === _0x548c35 || 'mouseup' === _0x548c35;
}
var J = [
        'touchstart',
        'mousedown'
    ], K = [
        'touchmove',
        'mousemove'
    ], L = [
        'touchcancel',
        'touchend',
        'mouseup'
    ], M = [], N = {
        'touchBank': M,
        'numberActiveTouches': 0x0,
        'indexOfSingleActiveTouch': -(-0xb69 + 0x20ad + -0x1543),
        'mostRecentTimeStamp': 0x0
    };
function O(_0x4982be) {
    return _0x4982be['timeStamp'] || _0x4982be['timestamp'];
}
function P(_0x4aa335) {
    return _0x4aa335 = _0x4aa335['identifier'], null == _0x4aa335 ? m('138') : void (0xef5 + 0x502 * -0x3 + 0x11), _0x4aa335;
}
function ha(_0x274f61) {
    var _0x4cf6e9 = P(_0x274f61), _0x59b5c1 = M[_0x4cf6e9];
    _0x59b5c1 ? (_0x59b5c1['touchActive'] = !(-0x8d0 + 0x259 * 0x7 + -0x79f), _0x59b5c1['startPageX'] = _0x274f61['pageX'], _0x59b5c1['startPageY'] = _0x274f61['pageY'], _0x59b5c1['startTimeStamp'] = O(_0x274f61), _0x59b5c1['currentPageX'] = _0x274f61['pageX'], _0x59b5c1['currentPageY'] = _0x274f61['pageY'], _0x59b5c1['currentTimeStamp'] = O(_0x274f61), _0x59b5c1['previousPageX'] = _0x274f61['pageX'], _0x59b5c1['previousPageY'] = _0x274f61['pageY'], _0x59b5c1['previousTimeStamp'] = O(_0x274f61)) : (_0x59b5c1 = {
        'touchActive': !(0xeb + 0x1f1a + -0x2005),
        'startPageX': _0x274f61['pageX'],
        'startPageY': _0x274f61['pageY'],
        'startTimeStamp': O(_0x274f61),
        'currentPageX': _0x274f61['pageX'],
        'currentPageY': _0x274f61['pageY'],
        'currentTimeStamp': O(_0x274f61),
        'previousPageX': _0x274f61['pageX'],
        'previousPageY': _0x274f61['pageY'],
        'previousTimeStamp': O(_0x274f61)
    }, M[_0x4cf6e9] = _0x59b5c1), N['mostRecentTimeStamp'] = O(_0x274f61);
}
function ia(_0x5d428f) {
    var _0x4a3655 = M[P(_0x5d428f)];
    _0x4a3655 ? (_0x4a3655['touchActive'] = !(0x1b * -0x12f + -0x474 + 0x2469), _0x4a3655['previousPageX'] = _0x4a3655['currentPageX'], _0x4a3655['previousPageY'] = _0x4a3655['currentPageY'], _0x4a3655['previousTimeStamp'] = _0x4a3655['currentTimeStamp'], _0x4a3655['currentPageX'] = _0x5d428f['pageX'], _0x4a3655['currentPageY'] = _0x5d428f['pageY'], _0x4a3655['currentTimeStamp'] = O(_0x5d428f), N['mostRecentTimeStamp'] = O(_0x5d428f)) : console['error']('Cannot\x20record\x20touch\x20move\x20without\x20a\x20touch\x20start.\x0aTouch\x20Move:\x20%s\x0a', 'Touch\x20Bank:\x20%s', Q(_0x5d428f), R());
}
function ja(_0xed540e) {
    var _0x297886 = M[P(_0xed540e)];
    _0x297886 ? (_0x297886['touchActive'] = !(-0x1 * 0x1dd6 + -0x1bcf + 0x2f * 0x13a), _0x297886['previousPageX'] = _0x297886['currentPageX'], _0x297886['previousPageY'] = _0x297886['currentPageY'], _0x297886['previousTimeStamp'] = _0x297886['currentTimeStamp'], _0x297886['currentPageX'] = _0xed540e['pageX'], _0x297886['currentPageY'] = _0xed540e['pageY'], _0x297886['currentTimeStamp'] = O(_0xed540e), N['mostRecentTimeStamp'] = O(_0xed540e)) : console['error']('Cannot\x20record\x20touch\x20end\x20without\x20a\x20touch\x20start.\x0aTouch\x20End:\x20%s\x0a', 'Touch\x20Bank:\x20%s', Q(_0xed540e), R());
}
function Q(_0x313600) {
    return JSON['stringify']({
        'identifier': _0x313600['identifier'],
        'pageX': _0x313600['pageX'],
        'pageY': _0x313600['pageY'],
        'timestamp': O(_0x313600)
    });
}
function R() {
    var _0x4dae26 = JSON['stringify'](M['slice'](-0x2b * -0x97 + 0x480 + -0x1ddd, -0x3 * -0x346 + -0x1247 + 0x17 * 0x5f));
    return 0xf * -0xaf + -0x1e7 * 0x13 + -0x2 * -0x173d < M['length'] && (_0x4dae26 += '\x20(original\x20size:\x20' + M['length'] + ')'), _0x4dae26;
}
var S = {
    'recordTouchTrack': function (_0x587379, _0x31019c) {
        if (H(_0x587379))
            _0x31019c['changedTouches']['forEach'](ia);
        else {
            if (G(_0x587379))
                _0x31019c['changedTouches']['forEach'](ha), N['numberActiveTouches'] = _0x31019c['touches']['length'], 0x1 * -0x2665 + 0x209c + 0x5ca === N['numberActiveTouches'] && (N['indexOfSingleActiveTouch'] = _0x31019c['touches'][0x264c * 0x1 + -0x1 * 0x9b1 + -0x3 * 0x989]['identifier']);
            else {
                if (I(_0x587379) && (_0x31019c['changedTouches']['forEach'](ja), N['numberActiveTouches'] = _0x31019c['touches']['length'], 0x72b + 0x2412 + -0x4 * 0xacf === N['numberActiveTouches'])) {
                    for (_0x587379 = 0x4 * -0x3a9 + -0x2 * -0x697 + 0x16 * 0x11; _0x587379 < M['length']; _0x587379++)
                        if (_0x31019c = M[_0x587379], null != _0x31019c && _0x31019c['touchActive']) {
                            N['indexOfSingleActiveTouch'] = _0x587379;
                            break;
                        }
                }
            }
        }
    },
    'touchHistory': N
};
function T(_0x4ad70e, _0x2c69cb) {
    return null == _0x2c69cb ? m('29') : void (0x29c + 0xf * -0xdf + -0xa75 * -0x1), null == _0x4ad70e ? _0x2c69cb : Array['isArray'](_0x4ad70e) ? _0x4ad70e['concat'](_0x2c69cb) : Array['isArray'](_0x2c69cb) ? [_0x4ad70e]['concat'](_0x2c69cb) : [
        _0x4ad70e,
        _0x2c69cb
    ];
}
var U = null, V = -0x9 * 0xef + 0x5 * -0x655 + -0x2810 * -0x1;
function W(_0x23de0c, _0x489dd9) {
    var _0x4600c9 = U;
    U = _0x23de0c;
    if (null !== X['GlobalResponderHandler'])
        X['GlobalResponderHandler']['onChange'](_0x4600c9, _0x23de0c, _0x489dd9);
}
var Y = {
        'startShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': 'onStartShouldSetResponder',
                'captured': 'onStartShouldSetResponderCapture'
            },
            'dependencies': J
        },
        'scrollShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': 'onScrollShouldSetResponder',
                'captured': 'onScrollShouldSetResponderCapture'
            },
            'dependencies': ['scroll']
        },
        'selectionChangeShouldSetResponder': {
            'phasedRegistrationNames': {
                'bubbled': 'onSelectionChangeShouldSetResponder',
                'captured': 'onSelectionChangeShouldSetResponderCapture'
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
            'registrationName': 'onResponderMove',
            'dependencies': K
        },
        'responderEnd': {
            'registrationName': 'onResponderEnd',
            'dependencies': L
        },
        'responderRelease': {
            'registrationName': 'onResponderRelease',
            'dependencies': L
        },
        'responderTerminationRequest': {
            'registrationName': 'onResponderTerminationRequest',
            'dependencies': []
        },
        'responderGrant': {
            'registrationName': 'onResponderGrant',
            'dependencies': []
        },
        'responderReject': {
            'registrationName': 'onResponderReject',
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
        'extractEvents': function (_0x19123e, _0x1e7bb5, _0x26f5ad, _0x37808b) {
            if (G(_0x19123e))
                V += 0x4 * -0x159 + 0x1 * 0x2ef + 0x276;
            else {
                if (I(_0x19123e)) {
                    if (0x18cc + 0x1869 + -0x33 * 0xf7 <= V)
                        --V;
                    else
                        return console['error']('Ended\x20a\x20touch\x20event\x20which\x20was\x20not\x20counted\x20in\x20`trackedTouchCount`.'), null;
                }
            }
            S['recordTouchTrack'](_0x19123e, _0x26f5ad);
            if (_0x1e7bb5 && ('scroll' === _0x19123e && !_0x26f5ad['responderIgnoreScroll'] || 0x2 * -0xb89 + 0x1 * -0x20a2 + 0x37b4 < V && 'selectionchange' === _0x19123e || G(_0x19123e) || H(_0x19123e))) {
                var _0x1b0ab1 = G(_0x19123e) ? Y['startShouldSetResponder'] : H(_0x19123e) ? Y['moveShouldSetResponder'] : 'selectionchange' === _0x19123e ? Y['selectionChangeShouldSetResponder'] : Y['scrollShouldSetResponder'];
                if (U)
                    _0x4358ca: {
                        var _0xff4da3 = U;
                        for (var _0x18f235 = 0x116c * 0x2 + -0x325 + 0x1fb3 * -0x1, _0x42f48a = _0xff4da3; _0x42f48a; _0x42f48a = t(_0x42f48a))
                            _0x18f235++;
                        _0x42f48a = 0xa23 + -0x376 * 0x2 + 0x337 * -0x1;
                        for (var _0x6e5e45 = _0x1e7bb5; _0x6e5e45; _0x6e5e45 = t(_0x6e5e45))
                            _0x42f48a++;
                        for (; 0xda + -0x1 * -0x1295 + -0x136f < _0x18f235 - _0x42f48a;)
                            _0xff4da3 = t(_0xff4da3), _0x18f235--;
                        for (; -0x193f + 0x1 * 0xe27 + 0x8 * 0x163 < _0x42f48a - _0x18f235;)
                            _0x1e7bb5 = t(_0x1e7bb5), _0x42f48a--;
                        for (; _0x18f235--;) {
                            if (_0xff4da3 === _0x1e7bb5 || _0xff4da3 === _0x1e7bb5['alternate'])
                                break _0x4358ca;
                            _0xff4da3 = t(_0xff4da3), _0x1e7bb5 = t(_0x1e7bb5);
                        }
                        _0xff4da3 = null;
                    }
                else
                    _0xff4da3 = _0x1e7bb5;
                _0x1e7bb5 = _0xff4da3 === U, _0xff4da3 = F['getPooled'](_0x1b0ab1, _0xff4da3, _0x26f5ad, _0x37808b), _0xff4da3['touchHistory'] = S['touchHistory'], _0x1e7bb5 ? x(_0xff4da3, da) : x(_0xff4da3, ca);
                _0x50356f: {
                    _0x1b0ab1 = _0xff4da3['_dispatchListeners'], _0x1e7bb5 = _0xff4da3['_dispatchInstances'];
                    if (Array['isArray'](_0x1b0ab1))
                        for (_0x18f235 = -0x26cf + -0x22b8 + 0xa81 * 0x7; _0x18f235 < _0x1b0ab1['length'] && !_0xff4da3['isPropagationStopped'](); _0x18f235++) {
                            if (_0x1b0ab1[_0x18f235](_0xff4da3, _0x1e7bb5[_0x18f235])) {
                                _0x1b0ab1 = _0x1e7bb5[_0x18f235];
                                break _0x50356f;
                            }
                        }
                    else {
                        if (_0x1b0ab1 && _0x1b0ab1(_0xff4da3, _0x1e7bb5)) {
                            _0x1b0ab1 = _0x1e7bb5;
                            break _0x50356f;
                        }
                    }
                    _0x1b0ab1 = null;
                }
                _0xff4da3['_dispatchInstances'] = null, _0xff4da3['_dispatchListeners'] = null, _0xff4da3['isPersistent']() || _0xff4da3['constructor']['release'](_0xff4da3), _0x1b0ab1 && _0x1b0ab1 !== U ? (_0xff4da3 = void (0x1a5 * 0x15 + -0x2 * 0xf3b + -0x413 * 0x1), _0x1e7bb5 = F['getPooled'](Y['responderGrant'], _0x1b0ab1, _0x26f5ad, _0x37808b), _0x1e7bb5['touchHistory'] = S['touchHistory'], x(_0x1e7bb5, A), _0x18f235 = !(-0x43 * -0x2f + -0x22fb + 0x16ae) === r(_0x1e7bb5), U ? (_0x42f48a = F['getPooled'](Y['responderTerminationRequest'], U, _0x26f5ad, _0x37808b), _0x42f48a['touchHistory'] = S['touchHistory'], x(_0x42f48a, A), _0x6e5e45 = !_0x42f48a['_dispatchListeners'] || r(_0x42f48a), _0x42f48a['isPersistent']() || _0x42f48a['constructor']['release'](_0x42f48a), _0x6e5e45 ? (_0x42f48a = F['getPooled'](Y['responderTerminate'], U, _0x26f5ad, _0x37808b), _0x42f48a['touchHistory'] = S['touchHistory'], x(_0x42f48a, A), _0xff4da3 = T(_0xff4da3, [
                    _0x1e7bb5,
                    _0x42f48a
                ]), W(_0x1b0ab1, _0x18f235)) : (_0x1b0ab1 = F['getPooled'](Y['responderReject'], _0x1b0ab1, _0x26f5ad, _0x37808b), _0x1b0ab1['touchHistory'] = S['touchHistory'], x(_0x1b0ab1, A), _0xff4da3 = T(_0xff4da3, _0x1b0ab1))) : (_0xff4da3 = T(_0xff4da3, _0x1e7bb5), W(_0x1b0ab1, _0x18f235)), _0x1b0ab1 = _0xff4da3) : _0x1b0ab1 = null;
            } else
                _0x1b0ab1 = null;
            _0xff4da3 = U && G(_0x19123e), _0x1e7bb5 = U && H(_0x19123e), _0x18f235 = U && I(_0x19123e);
            if (_0xff4da3 = _0xff4da3 ? Y['responderStart'] : _0x1e7bb5 ? Y['responderMove'] : _0x18f235 ? Y['responderEnd'] : null)
                _0xff4da3 = F['getPooled'](_0xff4da3, U, _0x26f5ad, _0x37808b), _0xff4da3['touchHistory'] = S['touchHistory'], x(_0xff4da3, A), _0x1b0ab1 = T(_0x1b0ab1, _0xff4da3);
            _0xff4da3 = U && 'touchcancel' === _0x19123e;
            if (_0x19123e = U && !_0xff4da3 && I(_0x19123e))
                _0x5a410c: {
                    if ((_0x19123e = _0x26f5ad['touches']) && 0x110e + -0x8c * 0x2f + 0x8a6 !== _0x19123e['length']) {
                        for (_0x1e7bb5 = -0x17 * 0x148 + 0xf7 + 0x1 * 0x1c81; _0x1e7bb5 < _0x19123e['length']; _0x1e7bb5++)
                            if (_0x18f235 = _0x19123e[_0x1e7bb5]['target'], null !== _0x18f235 && void (-0x107b * 0x1 + -0x32 * 0x64 + 0x2403) !== _0x18f235 && -0x57f + 0x1161 + -0xbe2 !== _0x18f235) {
                                _0x42f48a = p(_0x18f235);
                                _0x4972ef: {
                                    for (_0x18f235 = U; _0x42f48a;) {
                                        if (_0x18f235 === _0x42f48a || _0x18f235 === _0x42f48a['alternate']) {
                                            _0x18f235 = !(-0x1 * 0x59 + 0x1 * -0x25de + -0x43f * -0x9);
                                            break _0x4972ef;
                                        }
                                        _0x42f48a = t(_0x42f48a);
                                    }
                                    _0x18f235 = !(0x9 * -0x121 + 0x1 * 0x39 + 0x9f1);
                                }
                                if (_0x18f235) {
                                    _0x19123e = !(-0x18b7 + 0x108e * -0x1 + -0x2 * -0x14a3);
                                    break _0x5a410c;
                                }
                            }
                    }
                    _0x19123e = !(-0x8d4 + 0x15f5 + -0x1 * 0xd21);
                }
            if (_0x19123e = _0xff4da3 ? Y['responderTerminate'] : _0x19123e ? Y['responderRelease'] : null)
                _0x26f5ad = F['getPooled'](_0x19123e, U, _0x26f5ad, _0x37808b), _0x26f5ad['touchHistory'] = S['touchHistory'], x(_0x26f5ad, A), _0x1b0ab1 = T(_0x1b0ab1, _0x26f5ad), W(null);
            return _0x1b0ab1;
        },
        'GlobalResponderHandler': null,
        'injection': {
            'injectGlobalResponderHandler': function (_0x90f97c) {
                X['GlobalResponderHandler'] = _0x90f97c;
            }
        }
    }, Z = k['__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED']['Events'], ka = Z[0x1 * -0x3ee + -0x3b * -0x11 + 0x6], la = Z[0x1d44 + -0x220c + 0x4c8], ma = Z[0x2202 * -0x1 + -0x17a2 + 0x39a5];
n = Z[-0xe2 * 0x22 + 0x2 * 0xe7c + -0x36 * -0x5], p = la, q = ma, module['exports'] = {
    'ResponderEventPlugin': X,
    'ResponderTouchHistoryStore': S,
    'injectEventPluginsByName': ka
};
