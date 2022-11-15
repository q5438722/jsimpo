import _0x70c626 from './platform.base';
import {
    _getParentNode,
    getRelativePosition,
    supportsEventListenerOptions,
    readUsedSize,
    getMaximumSize
} from '../helpers/helpers.dom';
import { throttled } from '../helpers/helpers.extras';
import { isNullOrUndef } from '../helpers/helpers.core';
const EXPANDO_KEY = '$chartjs', EVENT_TYPES = {
        'touchstart': 'mousedown',
        'touchmove': 'mousemove',
        'touchend': 'mouseup',
        'pointerenter': 'mouseenter',
        'pointerdown': 'mousedown',
        'pointermove': 'mousemove',
        'pointerup': 'mouseup',
        'pointerleave': 'mouseout',
        'pointerout': 'mouseout'
    }, isNullOrEmpty = _0x3bb191 => _0x3bb191 === null || _0x3bb191 === '';
function initCanvas(_0x1c57d6, _0x5ce19f) {
    const _0x5cc1eb = _0x1c57d6['style'], _0x2b914d = _0x1c57d6['getAttribute']('height'), _0x16dfcd = _0x1c57d6['getAttribute']('width');
    _0x1c57d6[EXPANDO_KEY] = {
        'initial': {
            'height': _0x2b914d,
            'width': _0x16dfcd,
            'style': {
                'display': _0x5cc1eb['display'],
                'height': _0x5cc1eb['height'],
                'width': _0x5cc1eb['width']
            }
        }
    }, _0x5cc1eb['display'] = _0x5cc1eb['display'] || 'block', _0x5cc1eb['boxSizing'] = _0x5cc1eb['boxSizing'] || 'border-box';
    if (isNullOrEmpty(_0x16dfcd)) {
        const _0x4625c4 = readUsedSize(_0x1c57d6, 'width');
        _0x4625c4 !== undefined && (_0x1c57d6['width'] = _0x4625c4);
    }
    if (isNullOrEmpty(_0x2b914d)) {
        if (_0x1c57d6['style']['height'] === '')
            _0x1c57d6['height'] = _0x1c57d6['width'] / (_0x5ce19f || 0x1 * -0xc97 + 0x1091 + -0x3f8);
        else {
            const _0x29f9f4 = readUsedSize(_0x1c57d6, 'height');
            _0x29f9f4 !== undefined && (_0x1c57d6['height'] = _0x29f9f4);
        }
    }
    return _0x1c57d6;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0xb2a8, _0x36a337, _0x43dc64) {
    _0xb2a8['addEventListener'](_0x36a337, _0x43dc64, eventListenerOptions);
}
function removeListener(_0x3cb3ca, _0x1a2bb9, _0x436f3f) {
    _0x3cb3ca['canvas']['removeEventListener'](_0x1a2bb9, _0x436f3f, eventListenerOptions);
}
function fromNativeEvent(_0x54b680, _0xbcd51e) {
    const _0x5cfec5 = EVENT_TYPES[_0x54b680['type']] || _0x54b680['type'], {
            x: _0x5396f4,
            y: _0xcafd96
        } = getRelativePosition(_0x54b680, _0xbcd51e);
    return {
        'type': _0x5cfec5,
        'chart': _0xbcd51e,
        'native': _0x54b680,
        'x': _0x5396f4 !== undefined ? _0x5396f4 : null,
        'y': _0xcafd96 !== undefined ? _0xcafd96 : null
    };
}
function createAttachObserver(_0x3e3c05, _0x7947fa, _0x37e995) {
    const _0x2f01d1 = _0x3e3c05['canvas'], _0x479c5b = new MutationObserver(_0x10ff82 => {
            for (const _0x62490c of _0x10ff82) {
                for (const _0x1d59b8 of _0x62490c['addedNodes']) {
                    if (_0x1d59b8 === _0x2f01d1 || _0x1d59b8['contains'](_0x2f01d1))
                        return _0x37e995();
                }
            }
        });
    return _0x479c5b['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x479c5b;
}
function createDetachObserver(_0x210c2d, _0x20bd67, _0x18d0aa) {
    const _0x5987b4 = _0x210c2d['canvas'], _0x14b08d = new MutationObserver(_0x4d4400 => {
            for (const _0x307fc4 of _0x4d4400) {
                for (const _0x244817 of _0x307fc4['removedNodes']) {
                    if (_0x244817 === _0x5987b4 || _0x244817['contains'](_0x5987b4))
                        return _0x18d0aa();
                }
            }
        });
    return _0x14b08d['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x14b08d;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = -0x1 * 0x1597 + 0x143 * 0x3 + 0x11ce;
function onWindowResize() {
    const _0x4b70c0 = window['devicePixelRatio'];
    if (_0x4b70c0 === oldDevicePixelRatio)
        return;
    oldDevicePixelRatio = _0x4b70c0, drpListeningCharts['forEach']((_0x40e4ed, _0x34fd9d) => {
        _0x34fd9d['currentDevicePixelRatio'] !== _0x4b70c0 && _0x40e4ed();
    });
}
function listenDevicePixelRatioChanges(_0x1ca10a, _0x51cddf) {
    !drpListeningCharts['size'] && window['addEventListener']('resize', onWindowResize), drpListeningCharts['set'](_0x1ca10a, _0x51cddf);
}
function unlistenDevicePixelRatioChanges(_0x5f2c21) {
    drpListeningCharts['delete'](_0x5f2c21), !drpListeningCharts['size'] && window['removeEventListener']('resize', onWindowResize);
}
function createResizeObserver(_0x291e5f, _0x2b6987, _0x5a5f27) {
    const _0xc467e0 = _0x291e5f['canvas'], _0x5e78d9 = _0xc467e0 && _getParentNode(_0xc467e0);
    if (!_0x5e78d9)
        return;
    const _0xceb5f6 = throttled((_0x3a99e6, _0x31fca9) => {
            const _0x66200a = _0x5e78d9['clientWidth'];
            _0x5a5f27(_0x3a99e6, _0x31fca9), _0x66200a < _0x5e78d9['clientWidth'] && _0x5a5f27();
        }, window), _0x53fb6e = new ResizeObserver(_0x2987f2 => {
            const _0x24226b = _0x2987f2[-0x9f8 + 0x2 * -0xe6b + 0x26ce], _0x4b68a7 = _0x24226b['contentRect']['width'], _0x32fb91 = _0x24226b['contentRect']['height'];
            if (_0x4b68a7 === -0x1 * 0x125f + 0x20ac + -0x7 * 0x20b && _0x32fb91 === 0x121 * -0x17 + 0x9c + 0x195b)
                return;
            _0xceb5f6(_0x4b68a7, _0x32fb91);
        });
    return _0x53fb6e['observe'](_0x5e78d9), listenDevicePixelRatioChanges(_0x291e5f, _0xceb5f6), _0x53fb6e;
}
function releaseObserver(_0x197fea, _0x1efcbb, _0x570560) {
    _0x570560 && _0x570560['disconnect'](), _0x1efcbb === 'resize' && unlistenDevicePixelRatioChanges(_0x197fea);
}
function createProxyAndListen(_0x3bdbb8, _0x1a3dfd, _0x5add37) {
    const _0x1fa0c1 = _0x3bdbb8['canvas'], _0x157ef5 = throttled(_0x5dd1ae => {
            _0x3bdbb8['ctx'] !== null && _0x5add37(fromNativeEvent(_0x5dd1ae, _0x3bdbb8));
        }, _0x3bdbb8, _0x2c22f0 => {
            const _0x262a7e = _0x2c22f0[0x23bf + 0x2536 + 0x13 * -0x3d7];
            return [
                _0x262a7e,
                _0x262a7e['offsetX'],
                _0x262a7e['offsetY']
            ];
        });
    return addListener(_0x1fa0c1, _0x1a3dfd, _0x157ef5), _0x157ef5;
}
export default class DomPlatform extends _0x70c626 {
    ['acquireContext'](_0x288c30, _0x1e2e20) {
        const _0xb11779 = _0x288c30 && _0x288c30['getContext'] && _0x288c30['getContext']('2d');
        if (_0xb11779 && _0xb11779['canvas'] === _0x288c30)
            return initCanvas(_0x288c30, _0x1e2e20), _0xb11779;
        return null;
    }
    ['releaseContext'](_0x55b28f) {
        const _0x4e9095 = _0x55b28f['canvas'];
        if (!_0x4e9095[EXPANDO_KEY])
            return ![];
        const _0x39e23a = _0x4e9095[EXPANDO_KEY]['initial'];
        [
            'height',
            'width'
        ]['forEach'](_0x2224f9 => {
            const _0x53c4c0 = _0x39e23a[_0x2224f9];
            isNullOrUndef(_0x53c4c0) ? _0x4e9095['removeAttribute'](_0x2224f9) : _0x4e9095['setAttribute'](_0x2224f9, _0x53c4c0);
        });
        const _0x1d4cf6 = _0x39e23a['style'] || {};
        return Object['keys'](_0x1d4cf6)['forEach'](_0x1cee3a => {
            _0x4e9095['style'][_0x1cee3a] = _0x1d4cf6[_0x1cee3a];
        }), _0x4e9095['width'] = _0x4e9095['width'], delete _0x4e9095[EXPANDO_KEY], !![];
    }
    ['addEventListener'](_0x149d95, _0x8e13fa, _0x3fd626) {
        this['removeEventListener'](_0x149d95, _0x8e13fa);
        const _0x42bf97 = _0x149d95['$proxies'] || (_0x149d95['$proxies'] = {}), _0x36d55d = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0x4068d9 = _0x36d55d[_0x8e13fa] || createProxyAndListen;
        _0x42bf97[_0x8e13fa] = _0x4068d9(_0x149d95, _0x8e13fa, _0x3fd626);
    }
    ['removeEventListener'](_0x32c654, _0x58dc1a) {
        const _0x367b03 = _0x32c654['$proxies'] || (_0x32c654['$proxies'] = {}), _0x14aa51 = _0x367b03[_0x58dc1a];
        if (!_0x14aa51)
            return;
        const _0x413aea = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x401e28 = _0x413aea[_0x58dc1a] || removeListener;
        _0x401e28(_0x32c654, _0x58dc1a, _0x14aa51), _0x367b03[_0x58dc1a] = undefined;
    }
    ['getDevicePixelRatio']() {
        return window['devicePixelRatio'];
    }
    ['getMaximumSize'](_0x3dba23, _0x2cfead, _0x521164, _0x337b76) {
        return getMaximumSize(_0x3dba23, _0x2cfead, _0x521164, _0x337b76);
    }
    ['isAttached'](_0x42f390) {
        const _0x4bb720 = _getParentNode(_0x42f390);
        return !!(_0x4bb720 && _0x4bb720['isConnected']);
    }
}
