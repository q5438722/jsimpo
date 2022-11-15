const _0x4dd4 = [
    '10486dmvyLp',
    '984965ZgAYTs',
    '183901AqOYdL',
    '5JvQvqd',
    '173793eJzTOP',
    '$chartjs',
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseout',
    'style',
    'getAttribute',
    'height',
    'display',
    'block',
    'boxSizing',
    'border-box',
    'width',
    'addEventListener',
    'canvas',
    'type',
    'addedNodes',
    'contains',
    'removedNodes',
    'devicePixelRatio',
    'forEach',
    'currentDevicePixelRatio',
    'size',
    'set',
    'delete',
    'removeEventListener',
    'resize',
    'clientWidth',
    'contentRect',
    'observe',
    'disconnect',
    'ctx',
    'offsetX',
    'acquireContext',
    'getContext',
    'releaseContext',
    'initial',
    'removeAttribute',
    '$proxies',
    'getDevicePixelRatio',
    'getMaximumSize',
    'isAttached',
    '3FLeCzX',
    '107853skeidq',
    '24933hnlwJr',
    '46YPkyVq',
    '374023egzEix',
    '2xbDoqA',
    '84SUFwwk'
];
function _0x399d(_0x195671, _0x436f75) {
    return _0x399d = function (_0x4dd47f, _0x399df6) {
        _0x4dd47f = _0x4dd47f - 0x7a;
        let _0x210d2b = _0x4dd4[_0x4dd47f];
        return _0x210d2b;
    }, _0x399d(_0x195671, _0x436f75);
}
const _0x11c539 = _0x399d;
(function (_0x447fe3, _0x147684) {
    const _0x10f008 = _0x399d;
    while (!![]) {
        try {
            const _0x2106db = parseInt(_0x10f008(0x7a)) * -parseInt(_0x10f008(0x7b)) + -parseInt(_0x10f008(0x7c)) * -parseInt(_0x10f008(0x7d)) + -parseInt(_0x10f008(0x7e)) * -parseInt(_0x10f008(0x7f)) + parseInt(_0x10f008(0x80)) * -parseInt(_0x10f008(0x81)) + parseInt(_0x10f008(0x82)) + -parseInt(_0x10f008(0x83)) + parseInt(_0x10f008(0x84)) * -parseInt(_0x10f008(0x85));
            if (_0x2106db === _0x147684)
                break;
            else
                _0x447fe3['push'](_0x447fe3['shift']());
        } catch (_0x10cd4d) {
            _0x447fe3['push'](_0x447fe3['shift']());
        }
    }
}(_0x4dd4, 0x98058));
import _0x1935ff from './platform.base';
import {
    _getParentNode,
    getRelativePosition,
    supportsEventListenerOptions,
    readUsedSize,
    getMaximumSize
} from '../helpers/helpers.dom';
import { throttled } from '../helpers/helpers.extras';
import { isNullOrUndef } from '../helpers/helpers.core';
const EXPANDO_KEY = _0x11c539(0x86), EVENT_TYPES = {
        'touchstart': _0x11c539(0x87),
        'touchmove': _0x11c539(0x88),
        'touchend': _0x11c539(0x89),
        'pointerenter': _0x11c539(0x8a),
        'pointerdown': _0x11c539(0x87),
        'pointermove': _0x11c539(0x88),
        'pointerup': _0x11c539(0x89),
        'pointerleave': _0x11c539(0x8b),
        'pointerout': _0x11c539(0x8b)
    }, isNullOrEmpty = _0x2b49bc => _0x2b49bc === null || _0x2b49bc === '';
function initCanvas(_0x51f899, _0x2f3b8e) {
    const _0x4ec8cc = _0x11c539, _0x31dfa0 = _0x51f899[_0x4ec8cc(0x8c)], _0x11c0f2 = _0x51f899[_0x4ec8cc(0x8d)](_0x4ec8cc(0x8e)), _0x2cd94d = _0x51f899['getAttribute']('width');
    _0x51f899[EXPANDO_KEY] = {
        'initial': {
            'height': _0x11c0f2,
            'width': _0x2cd94d,
            'style': {
                'display': _0x31dfa0[_0x4ec8cc(0x8f)],
                'height': _0x31dfa0[_0x4ec8cc(0x8e)],
                'width': _0x31dfa0['width']
            }
        }
    }, _0x31dfa0[_0x4ec8cc(0x8f)] = _0x31dfa0[_0x4ec8cc(0x8f)] || _0x4ec8cc(0x90), _0x31dfa0[_0x4ec8cc(0x91)] = _0x31dfa0[_0x4ec8cc(0x91)] || _0x4ec8cc(0x92);
    if (isNullOrEmpty(_0x2cd94d)) {
        const _0x5cc793 = readUsedSize(_0x51f899, 'width');
        _0x5cc793 !== undefined && (_0x51f899[_0x4ec8cc(0x93)] = _0x5cc793);
    }
    if (isNullOrEmpty(_0x11c0f2)) {
        if (_0x51f899['style'][_0x4ec8cc(0x8e)] === '')
            _0x51f899[_0x4ec8cc(0x8e)] = _0x51f899[_0x4ec8cc(0x93)] / (_0x2f3b8e || 0x2);
        else {
            const _0x5f3a2a = readUsedSize(_0x51f899, _0x4ec8cc(0x8e));
            _0x5f3a2a !== undefined && (_0x51f899[_0x4ec8cc(0x8e)] = _0x5f3a2a);
        }
    }
    return _0x51f899;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0x5c5b0c, _0x28484a, _0xebb09a) {
    const _0x50dc33 = _0x11c539;
    _0x5c5b0c[_0x50dc33(0x94)](_0x28484a, _0xebb09a, eventListenerOptions);
}
function removeListener(_0x5edb85, _0x24a6b8, _0x2250ea) {
    const _0x398d54 = _0x11c539;
    _0x5edb85[_0x398d54(0x95)]['removeEventListener'](_0x24a6b8, _0x2250ea, eventListenerOptions);
}
function fromNativeEvent(_0x4dcd92, _0x13f22f) {
    const _0x263eb1 = _0x11c539, _0x3c7ce6 = EVENT_TYPES[_0x4dcd92[_0x263eb1(0x96)]] || _0x4dcd92[_0x263eb1(0x96)], {
            x: _0x3babb6,
            y: _0x491366
        } = getRelativePosition(_0x4dcd92, _0x13f22f);
    return {
        'type': _0x3c7ce6,
        'chart': _0x13f22f,
        'native': _0x4dcd92,
        'x': _0x3babb6 !== undefined ? _0x3babb6 : null,
        'y': _0x491366 !== undefined ? _0x491366 : null
    };
}
function createAttachObserver(_0x3e6d57, _0x1efef4, _0x430c63) {
    const _0x4ced95 = _0x11c539, _0xaaf53d = _0x3e6d57[_0x4ced95(0x95)], _0x382d7d = new MutationObserver(_0x5447d5 => {
            const _0x367883 = _0x4ced95;
            for (const _0x5ac0b8 of _0x5447d5) {
                for (const _0x5b6e16 of _0x5ac0b8[_0x367883(0x97)]) {
                    if (_0x5b6e16 === _0xaaf53d || _0x5b6e16[_0x367883(0x98)](_0xaaf53d))
                        return _0x430c63();
                }
            }
        });
    return _0x382d7d['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x382d7d;
}
function createDetachObserver(_0xd31b36, _0x589428, _0xb1d2e5) {
    const _0x596a78 = _0x11c539, _0x283808 = _0xd31b36[_0x596a78(0x95)], _0x1b6c9b = new MutationObserver(_0x4e3c73 => {
            const _0x101119 = _0x596a78;
            for (const _0x4eaa0 of _0x4e3c73) {
                for (const _0x2f32d5 of _0x4eaa0[_0x101119(0x99)]) {
                    if (_0x2f32d5 === _0x283808 || _0x2f32d5[_0x101119(0x98)](_0x283808))
                        return _0xb1d2e5();
                }
            }
        });
    return _0x1b6c9b['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x1b6c9b;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0x0;
function onWindowResize() {
    const _0x32c898 = _0x11c539, _0x5d97c7 = window[_0x32c898(0x9a)];
    if (_0x5d97c7 === oldDevicePixelRatio)
        return;
    oldDevicePixelRatio = _0x5d97c7, drpListeningCharts[_0x32c898(0x9b)]((_0x4ce078, _0x2e12cf) => {
        const _0x53a5ef = _0x32c898;
        _0x2e12cf[_0x53a5ef(0x9c)] !== _0x5d97c7 && _0x4ce078();
    });
}
function listenDevicePixelRatioChanges(_0x5571e1, _0x59d76e) {
    const _0x5e3140 = _0x11c539;
    !drpListeningCharts[_0x5e3140(0x9d)] && window[_0x5e3140(0x94)]('resize', onWindowResize), drpListeningCharts[_0x5e3140(0x9e)](_0x5571e1, _0x59d76e);
}
function unlistenDevicePixelRatioChanges(_0x5d3ecc) {
    const _0x37b91f = _0x11c539;
    drpListeningCharts[_0x37b91f(0x9f)](_0x5d3ecc), !drpListeningCharts['size'] && window[_0x37b91f(0xa0)](_0x37b91f(0xa1), onWindowResize);
}
function createResizeObserver(_0x499b20, _0x517c2a, _0x577b92) {
    const _0x32132f = _0x11c539, _0x1205e1 = _0x499b20[_0x32132f(0x95)], _0x53faff = _0x1205e1 && _getParentNode(_0x1205e1);
    if (!_0x53faff)
        return;
    const _0x4d0ca4 = throttled((_0x4855c7, _0x56b45a) => {
            const _0x4649d2 = _0x32132f, _0x59741f = _0x53faff[_0x4649d2(0xa2)];
            _0x577b92(_0x4855c7, _0x56b45a), _0x59741f < _0x53faff[_0x4649d2(0xa2)] && _0x577b92();
        }, window), _0x123418 = new ResizeObserver(_0x19b590 => {
            const _0x23f8d7 = _0x32132f, _0x968d9 = _0x19b590[0x0], _0x145646 = _0x968d9[_0x23f8d7(0xa3)][_0x23f8d7(0x93)], _0x4be439 = _0x968d9[_0x23f8d7(0xa3)][_0x23f8d7(0x8e)];
            if (_0x145646 === 0x0 && _0x4be439 === 0x0)
                return;
            _0x4d0ca4(_0x145646, _0x4be439);
        });
    return _0x123418[_0x32132f(0xa4)](_0x53faff), listenDevicePixelRatioChanges(_0x499b20, _0x4d0ca4), _0x123418;
}
function releaseObserver(_0x28ff04, _0x1ad0a9, _0x2fb45e) {
    const _0x4754f2 = _0x11c539;
    _0x2fb45e && _0x2fb45e[_0x4754f2(0xa5)](), _0x1ad0a9 === _0x4754f2(0xa1) && unlistenDevicePixelRatioChanges(_0x28ff04);
}
function createProxyAndListen(_0x4a3a20, _0x59e6e0, _0xd2b67b) {
    const _0x189163 = _0x11c539, _0x5dd8fa = _0x4a3a20[_0x189163(0x95)], _0x36a249 = throttled(_0x17a648 => {
            const _0xca5559 = _0x189163;
            _0x4a3a20[_0xca5559(0xa6)] !== null && _0xd2b67b(fromNativeEvent(_0x17a648, _0x4a3a20));
        }, _0x4a3a20, _0x36dc7d => {
            const _0x1e4318 = _0x189163, _0x6a37b0 = _0x36dc7d[0x0];
            return [
                _0x6a37b0,
                _0x6a37b0[_0x1e4318(0xa7)],
                _0x6a37b0['offsetY']
            ];
        });
    return addListener(_0x5dd8fa, _0x59e6e0, _0x36a249), _0x36a249;
}
export default class DomPlatform extends _0x1935ff {
    [_0x11c539(0xa8)](_0xccc146, _0x33fb7a) {
        const _0x2d34b4 = _0x11c539, _0x1279af = _0xccc146 && _0xccc146[_0x2d34b4(0xa9)] && _0xccc146['getContext']('2d');
        if (_0x1279af && _0x1279af[_0x2d34b4(0x95)] === _0xccc146)
            return initCanvas(_0xccc146, _0x33fb7a), _0x1279af;
        return null;
    }
    [_0x11c539(0xaa)](_0x317164) {
        const _0x34fb64 = _0x11c539, _0x139d20 = _0x317164[_0x34fb64(0x95)];
        if (!_0x139d20[EXPANDO_KEY])
            return ![];
        const _0x59977d = _0x139d20[EXPANDO_KEY][_0x34fb64(0xab)];
        [
            'height',
            _0x34fb64(0x93)
        ][_0x34fb64(0x9b)](_0x16a4b0 => {
            const _0x17a96a = _0x34fb64, _0x4666c5 = _0x59977d[_0x16a4b0];
            isNullOrUndef(_0x4666c5) ? _0x139d20[_0x17a96a(0xac)](_0x16a4b0) : _0x139d20['setAttribute'](_0x16a4b0, _0x4666c5);
        });
        const _0x2f15ae = _0x59977d[_0x34fb64(0x8c)] || {};
        return Object['keys'](_0x2f15ae)[_0x34fb64(0x9b)](_0xcc9d01 => {
            const _0xcd25dd = _0x34fb64;
            _0x139d20[_0xcd25dd(0x8c)][_0xcc9d01] = _0x2f15ae[_0xcc9d01];
        }), _0x139d20['width'] = _0x139d20[_0x34fb64(0x93)], delete _0x139d20[EXPANDO_KEY], !![];
    }
    [_0x11c539(0x94)](_0x5ae2a9, _0x3dd024, _0x385569) {
        const _0x42be2e = _0x11c539;
        this[_0x42be2e(0xa0)](_0x5ae2a9, _0x3dd024);
        const _0x2f66bf = _0x5ae2a9[_0x42be2e(0xad)] || (_0x5ae2a9[_0x42be2e(0xad)] = {}), _0x23d677 = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0x5e8314 = _0x23d677[_0x3dd024] || createProxyAndListen;
        _0x2f66bf[_0x3dd024] = _0x5e8314(_0x5ae2a9, _0x3dd024, _0x385569);
    }
    ['removeEventListener'](_0x473281, _0x20022a) {
        const _0x4610c0 = _0x11c539, _0x4e5542 = _0x473281[_0x4610c0(0xad)] || (_0x473281[_0x4610c0(0xad)] = {}), _0x2eeb33 = _0x4e5542[_0x20022a];
        if (!_0x2eeb33)
            return;
        const _0x2bc426 = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x12d153 = _0x2bc426[_0x20022a] || removeListener;
        _0x12d153(_0x473281, _0x20022a, _0x2eeb33), _0x4e5542[_0x20022a] = undefined;
    }
    [_0x11c539(0xae)]() {
        const _0xd48771 = _0x11c539;
        return window[_0xd48771(0x9a)];
    }
    [_0x11c539(0xaf)](_0xd1e1d6, _0x7ce71b, _0x27e5bd, _0x277156) {
        return getMaximumSize(_0xd1e1d6, _0x7ce71b, _0x27e5bd, _0x277156);
    }
    [_0x11c539(0xb0)](_0x331a22) {
        const _0x510216 = _getParentNode(_0x331a22);
        return !!(_0x510216 && _0x510216['isConnected']);
    }
}
