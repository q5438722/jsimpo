const _0x1dd1 = [
    '$chartjs',
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseout',
    'style',
    'getAttribute',
    'height',
    'width',
    'display',
    'boxSizing',
    'border-box',
    'addEventListener',
    'canvas',
    'removeEventListener',
    'type',
    'addedNodes',
    'contains',
    'observe',
    'removedNodes',
    'devicePixelRatio',
    'forEach',
    'currentDevicePixelRatio',
    'size',
    'resize',
    'delete',
    'clientWidth',
    'contentRect',
    'disconnect',
    'ctx',
    'offsetX',
    'offsetY',
    'acquireContext',
    'getContext',
    'initial',
    'removeAttribute',
    'setAttribute',
    '$proxies',
    'getDevicePixelRatio',
    'getMaximumSize',
    'isAttached',
    '308899BtckQf',
    '1wihGoI',
    '1220344yADbEt',
    '7083VJPhHk',
    '1348253kNEezQ',
    '574730yaIwqz',
    '1atDzUr',
    '142oJNNGC',
    '8801kOmAvA',
    '59051lHTcFl',
    '62qccXwE'
];
const _0x2d8821 = _0x4887;
(function (_0x1fb29e, _0x590702) {
    const _0x2c40fb = _0x4887;
    while (!![]) {
        try {
            const _0x1e0044 = parseInt(_0x2c40fb(0x1d8)) * parseInt(_0x2c40fb(0x1d9)) + -parseInt(_0x2c40fb(0x1da)) + parseInt(_0x2c40fb(0x1db)) + -parseInt(_0x2c40fb(0x1dc)) + -parseInt(_0x2c40fb(0x1dd)) * -parseInt(_0x2c40fb(0x1de)) + -parseInt(_0x2c40fb(0x1df)) * parseInt(_0x2c40fb(0x1e0)) + -parseInt(_0x2c40fb(0x1e1)) * -parseInt(_0x2c40fb(0x1e2));
            if (_0x1e0044 === _0x590702)
                break;
            else
                _0x1fb29e['push'](_0x1fb29e['shift']());
        } catch (_0x385e11) {
            _0x1fb29e['push'](_0x1fb29e['shift']());
        }
    }
}(_0x1dd1, 0xb315f));
import _0x46a9fd from './platform.base';
import {
    _getParentNode,
    getRelativePosition,
    supportsEventListenerOptions,
    readUsedSize,
    getMaximumSize
} from '../helpers/helpers.dom';
import { throttled } from '../helpers/helpers.extras';
import { isNullOrUndef } from '../helpers/helpers.core';
function _0x4887(_0x1f3e34, _0x312642) {
    return _0x4887 = function (_0x1dd1e5, _0x4887ac) {
        _0x1dd1e5 = _0x1dd1e5 - 0x1d8;
        let _0x599adc = _0x1dd1[_0x1dd1e5];
        return _0x599adc;
    }, _0x4887(_0x1f3e34, _0x312642);
}
const EXPANDO_KEY = _0x2d8821(0x1e3), EVENT_TYPES = {
        'touchstart': _0x2d8821(0x1e4),
        'touchmove': _0x2d8821(0x1e5),
        'touchend': _0x2d8821(0x1e6),
        'pointerenter': _0x2d8821(0x1e7),
        'pointerdown': _0x2d8821(0x1e4),
        'pointermove': 'mousemove',
        'pointerup': _0x2d8821(0x1e6),
        'pointerleave': _0x2d8821(0x1e8),
        'pointerout': _0x2d8821(0x1e8)
    }, isNullOrEmpty = _0x20c790 => _0x20c790 === null || _0x20c790 === '';
function initCanvas(_0x17664f, _0x1a92ec) {
    const _0xce5afb = _0x2d8821, _0x423057 = _0x17664f[_0xce5afb(0x1e9)], _0x2097d7 = _0x17664f[_0xce5afb(0x1ea)](_0xce5afb(0x1eb)), _0x389be1 = _0x17664f[_0xce5afb(0x1ea)](_0xce5afb(0x1ec));
    _0x17664f[EXPANDO_KEY] = {
        'initial': {
            'height': _0x2097d7,
            'width': _0x389be1,
            'style': {
                'display': _0x423057[_0xce5afb(0x1ed)],
                'height': _0x423057[_0xce5afb(0x1eb)],
                'width': _0x423057['width']
            }
        }
    }, _0x423057[_0xce5afb(0x1ed)] = _0x423057['display'] || 'block', _0x423057[_0xce5afb(0x1ee)] = _0x423057['boxSizing'] || _0xce5afb(0x1ef);
    if (isNullOrEmpty(_0x389be1)) {
        const _0x5b963f = readUsedSize(_0x17664f, 'width');
        _0x5b963f !== undefined && (_0x17664f['width'] = _0x5b963f);
    }
    if (isNullOrEmpty(_0x2097d7)) {
        if (_0x17664f['style']['height'] === '')
            _0x17664f[_0xce5afb(0x1eb)] = _0x17664f[_0xce5afb(0x1ec)] / (_0x1a92ec || 0x2);
        else {
            const _0x150927 = readUsedSize(_0x17664f, _0xce5afb(0x1eb));
            _0x150927 !== undefined && (_0x17664f[_0xce5afb(0x1eb)] = _0x150927);
        }
    }
    return _0x17664f;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0x38a7a9, _0x273d28, _0x4830dc) {
    const _0x21bfce = _0x2d8821;
    _0x38a7a9[_0x21bfce(0x1f0)](_0x273d28, _0x4830dc, eventListenerOptions);
}
function removeListener(_0x4b5360, _0xb826fb, _0x5b312a) {
    const _0x461081 = _0x2d8821;
    _0x4b5360[_0x461081(0x1f1)][_0x461081(0x1f2)](_0xb826fb, _0x5b312a, eventListenerOptions);
}
function fromNativeEvent(_0x323266, _0x3203a8) {
    const _0x229a77 = _0x2d8821, _0x5995ac = EVENT_TYPES[_0x323266[_0x229a77(0x1f3)]] || _0x323266['type'], {
            x: _0xbea9a3,
            y: _0x588860
        } = getRelativePosition(_0x323266, _0x3203a8);
    return {
        'type': _0x5995ac,
        'chart': _0x3203a8,
        'native': _0x323266,
        'x': _0xbea9a3 !== undefined ? _0xbea9a3 : null,
        'y': _0x588860 !== undefined ? _0x588860 : null
    };
}
function createAttachObserver(_0x927640, _0x43d501, _0x53b97f) {
    const _0x502912 = _0x2d8821, _0x4bb618 = _0x927640[_0x502912(0x1f1)], _0x354fd7 = new MutationObserver(_0x4ff45b => {
            const _0x11c20a = _0x502912;
            for (const _0x3e187b of _0x4ff45b) {
                for (const _0x3a467b of _0x3e187b[_0x11c20a(0x1f4)]) {
                    if (_0x3a467b === _0x4bb618 || _0x3a467b[_0x11c20a(0x1f5)](_0x4bb618))
                        return _0x53b97f();
                }
            }
        });
    return _0x354fd7[_0x502912(0x1f6)](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x354fd7;
}
function createDetachObserver(_0x7b463f, _0xa8d029, _0x9a2f4a) {
    const _0x417753 = _0x2d8821, _0x396d96 = _0x7b463f[_0x417753(0x1f1)], _0x4fb944 = new MutationObserver(_0x4304e1 => {
            const _0x4c7889 = _0x417753;
            for (const _0x8852f7 of _0x4304e1) {
                for (const _0x54872e of _0x8852f7[_0x4c7889(0x1f7)]) {
                    if (_0x54872e === _0x396d96 || _0x54872e[_0x4c7889(0x1f5)](_0x396d96))
                        return _0x9a2f4a();
                }
            }
        });
    return _0x4fb944['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x4fb944;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0x0;
function onWindowResize() {
    const _0x13e556 = _0x2d8821, _0x15f1b6 = window[_0x13e556(0x1f8)];
    if (_0x15f1b6 === oldDevicePixelRatio)
        return;
    oldDevicePixelRatio = _0x15f1b6, drpListeningCharts[_0x13e556(0x1f9)]((_0x291c5d, _0x521b18) => {
        const _0x3bf785 = _0x13e556;
        _0x521b18[_0x3bf785(0x1fa)] !== _0x15f1b6 && _0x291c5d();
    });
}
function listenDevicePixelRatioChanges(_0x4cfb07, _0x31a44f) {
    const _0x12f981 = _0x2d8821;
    !drpListeningCharts[_0x12f981(0x1fb)] && window['addEventListener'](_0x12f981(0x1fc), onWindowResize), drpListeningCharts['set'](_0x4cfb07, _0x31a44f);
}
function unlistenDevicePixelRatioChanges(_0xf9cabe) {
    const _0x14b11a = _0x2d8821;
    drpListeningCharts[_0x14b11a(0x1fd)](_0xf9cabe), !drpListeningCharts[_0x14b11a(0x1fb)] && window['removeEventListener']('resize', onWindowResize);
}
function createResizeObserver(_0x458353, _0x28a20e, _0x4ee4ef) {
    const _0x8605fe = _0x2d8821, _0x399e4c = _0x458353[_0x8605fe(0x1f1)], _0x536c3a = _0x399e4c && _getParentNode(_0x399e4c);
    if (!_0x536c3a)
        return;
    const _0xc80720 = throttled((_0xe3af21, _0x2824b9) => {
            const _0x3cd1eb = _0x8605fe, _0x2d84fe = _0x536c3a[_0x3cd1eb(0x1fe)];
            _0x4ee4ef(_0xe3af21, _0x2824b9), _0x2d84fe < _0x536c3a[_0x3cd1eb(0x1fe)] && _0x4ee4ef();
        }, window), _0x586126 = new ResizeObserver(_0x3e6d92 => {
            const _0x114a8f = _0x8605fe, _0x452168 = _0x3e6d92[0x0], _0x7e64e4 = _0x452168['contentRect'][_0x114a8f(0x1ec)], _0x52cd3e = _0x452168[_0x114a8f(0x1ff)][_0x114a8f(0x1eb)];
            if (_0x7e64e4 === 0x0 && _0x52cd3e === 0x0)
                return;
            _0xc80720(_0x7e64e4, _0x52cd3e);
        });
    return _0x586126['observe'](_0x536c3a), listenDevicePixelRatioChanges(_0x458353, _0xc80720), _0x586126;
}
function releaseObserver(_0xa91416, _0xd364e4, _0x2a031f) {
    const _0x2286cc = _0x2d8821;
    _0x2a031f && _0x2a031f[_0x2286cc(0x200)](), _0xd364e4 === _0x2286cc(0x1fc) && unlistenDevicePixelRatioChanges(_0xa91416);
}
function createProxyAndListen(_0xdf913c, _0x1e0b19, _0x426d1d) {
    const _0x2eef7c = _0x2d8821, _0x56ca92 = _0xdf913c[_0x2eef7c(0x1f1)], _0x352491 = throttled(_0x2acdb2 => {
            const _0x53c48d = _0x2eef7c;
            _0xdf913c[_0x53c48d(0x201)] !== null && _0x426d1d(fromNativeEvent(_0x2acdb2, _0xdf913c));
        }, _0xdf913c, _0x504707 => {
            const _0x53b6d1 = _0x2eef7c, _0x28d277 = _0x504707[0x0];
            return [
                _0x28d277,
                _0x28d277[_0x53b6d1(0x202)],
                _0x28d277[_0x53b6d1(0x203)]
            ];
        });
    return addListener(_0x56ca92, _0x1e0b19, _0x352491), _0x352491;
}
export default class DomPlatform extends _0x46a9fd {
    [_0x2d8821(0x204)](_0x1bdb9e, _0x1f38be) {
        const _0x376a5d = _0x2d8821, _0x182b2d = _0x1bdb9e && _0x1bdb9e[_0x376a5d(0x205)] && _0x1bdb9e['getContext']('2d');
        if (_0x182b2d && _0x182b2d[_0x376a5d(0x1f1)] === _0x1bdb9e)
            return initCanvas(_0x1bdb9e, _0x1f38be), _0x182b2d;
        return null;
    }
    ['releaseContext'](_0x1b56ad) {
        const _0xcf825c = _0x2d8821, _0x30318f = _0x1b56ad['canvas'];
        if (!_0x30318f[EXPANDO_KEY])
            return ![];
        const _0x5d37d3 = _0x30318f[EXPANDO_KEY][_0xcf825c(0x206)];
        [
            _0xcf825c(0x1eb),
            _0xcf825c(0x1ec)
        ]['forEach'](_0xf6f2b8 => {
            const _0x1ee97b = _0xcf825c, _0x585f10 = _0x5d37d3[_0xf6f2b8];
            isNullOrUndef(_0x585f10) ? _0x30318f[_0x1ee97b(0x207)](_0xf6f2b8) : _0x30318f[_0x1ee97b(0x208)](_0xf6f2b8, _0x585f10);
        });
        const _0x4f47fb = _0x5d37d3['style'] || {};
        return Object['keys'](_0x4f47fb)[_0xcf825c(0x1f9)](_0x218a56 => {
            const _0x476a18 = _0xcf825c;
            _0x30318f[_0x476a18(0x1e9)][_0x218a56] = _0x4f47fb[_0x218a56];
        }), _0x30318f[_0xcf825c(0x1ec)] = _0x30318f['width'], delete _0x30318f[EXPANDO_KEY], !![];
    }
    [_0x2d8821(0x1f0)](_0x413254, _0x59a5be, _0xc9f2b6) {
        const _0x1711ad = _0x2d8821;
        this[_0x1711ad(0x1f2)](_0x413254, _0x59a5be);
        const _0x50fd89 = _0x413254['$proxies'] || (_0x413254[_0x1711ad(0x209)] = {}), _0x5d41cc = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0x22df19 = _0x5d41cc[_0x59a5be] || createProxyAndListen;
        _0x50fd89[_0x59a5be] = _0x22df19(_0x413254, _0x59a5be, _0xc9f2b6);
    }
    [_0x2d8821(0x1f2)](_0x26e054, _0x548a12) {
        const _0x44931b = _0x2d8821, _0x554751 = _0x26e054[_0x44931b(0x209)] || (_0x26e054['$proxies'] = {}), _0x57c0d5 = _0x554751[_0x548a12];
        if (!_0x57c0d5)
            return;
        const _0x53601e = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x463125 = _0x53601e[_0x548a12] || removeListener;
        _0x463125(_0x26e054, _0x548a12, _0x57c0d5), _0x554751[_0x548a12] = undefined;
    }
    [_0x2d8821(0x20a)]() {
        const _0x20bc58 = _0x2d8821;
        return window[_0x20bc58(0x1f8)];
    }
    [_0x2d8821(0x20b)](_0x47582c, _0x4561c1, _0x49ea45, _0x1c5e0d) {
        return getMaximumSize(_0x47582c, _0x4561c1, _0x49ea45, _0x1c5e0d);
    }
    [_0x2d8821(0x20c)](_0x551d83) {
        const _0x40a38a = _getParentNode(_0x551d83);
        return !!(_0x40a38a && _0x40a38a['isConnected']);
    }
}
