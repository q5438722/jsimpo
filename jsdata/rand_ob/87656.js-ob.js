const _0x53f5 = [
    'jEfAM',
    'ozZJJ',
    'contains',
    'observe',
    'canvas',
    'removedNodes',
    'glscf',
    'drNQr',
    'forEach',
    'currentDevicePixelRatio',
    'resize',
    'size',
    'OqWdI',
    'set',
    'delete',
    'SpQzS',
    'bxEDe',
    'clientWidth',
    'contentRect',
    'OvwZn',
    'Fwdlf',
    'sUZsJ',
    'disconnect',
    'gDRLL',
    'XSyeM',
    'ctx',
    'pewJm',
    'offsetX',
    'getContext',
    'aOsub',
    'hfmHa',
    'initial',
    'MmDNK',
    'removeAttribute',
    'setAttribute',
    'keys',
    '$proxies',
    'devicePixelRatio',
    'getMaximumSize',
    'isAttached',
    'MrpUO',
    'isConnected',
    '382240npgpEh',
    '8VYQsTs',
    '61839Ahwshu',
    '8jITTRa',
    '49446StYkFp',
    '138918BDBTlf',
    '2yDiQnX',
    '19986hySkgb',
    '3RpJXoK',
    '1owUYBo',
    '477172hHVBEx',
    '1063823hREVkf',
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseout',
    'height',
    'block',
    'style',
    'getAttribute',
    'dVyAT',
    'display',
    'width',
    'boxSizing',
    'LWaSG',
    'ffyYF',
    'dPuzE',
    'KoACT',
    'FMrRS',
    'UyoTp',
    'addEventListener',
    'removeEventListener',
    'rQkmh'
];
const _0x5ed53f = _0x3bf0;
(function (_0x14e4df, _0x114940) {
    const _0x2315c3 = _0x3bf0;
    while (!![]) {
        try {
            const _0x2c7bef = -parseInt(_0x2315c3(0x8f)) + -parseInt(_0x2315c3(0x90)) * -parseInt(_0x2315c3(0x91)) + -parseInt(_0x2315c3(0x92)) * -parseInt(_0x2315c3(0x93)) + parseInt(_0x2315c3(0x94)) * parseInt(_0x2315c3(0x95)) + parseInt(_0x2315c3(0x96)) * parseInt(_0x2315c3(0x97)) + -parseInt(_0x2315c3(0x98)) * -parseInt(_0x2315c3(0x99)) + -parseInt(_0x2315c3(0x9a));
            if (_0x2c7bef === _0x114940)
                break;
            else
                _0x14e4df['push'](_0x14e4df['shift']());
        } catch (_0x159ef8) {
            _0x14e4df['push'](_0x14e4df['shift']());
        }
    }
}(_0x53f5, 0x3cc40 * 0x2 + 0x1e4d3 * -0x1 + 0x17 * -0x1372));
import _0x3a96c6 from './platform.base';
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
        'touchstart': _0x5ed53f(0x9b),
        'touchmove': _0x5ed53f(0x9c),
        'touchend': _0x5ed53f(0x9d),
        'pointerenter': _0x5ed53f(0x9e),
        'pointerdown': _0x5ed53f(0x9b),
        'pointermove': _0x5ed53f(0x9c),
        'pointerup': 'mouseup',
        'pointerleave': 'mouseout',
        'pointerout': _0x5ed53f(0x9f)
    }, isNullOrEmpty = _0x482e36 => _0x482e36 === null || _0x482e36 === '';
function initCanvas(_0x4d0b87, _0x553d05) {
    const _0x4db1f9 = _0x5ed53f, _0x36ae22 = {
            'dVyAT': _0x4db1f9(0xa0),
            'ffyYF': 'width',
            'atNKy': _0x4db1f9(0xa1),
            'LWaSG': 'border-box',
            'hTkNU': function (_0x69cb9f, _0x5e6756, _0x28fff3) {
                return _0x69cb9f(_0x5e6756, _0x28fff3);
            },
            'dPuzE': function (_0x436930, _0x4d46d9) {
                return _0x436930(_0x4d46d9);
            },
            'KoACT': function (_0x44551b, _0x5b0c7b) {
                return _0x44551b === _0x5b0c7b;
            },
            'FMrRS': function (_0x4d9001, _0x18453a) {
                return _0x4d9001 / _0x18453a;
            },
            'UyoTp': function (_0xad4d9a, _0x55b446, _0x3e4538) {
                return _0xad4d9a(_0x55b446, _0x3e4538);
            }
        }, _0x25a3af = _0x4d0b87[_0x4db1f9(0xa2)], _0x3c42fa = _0x4d0b87[_0x4db1f9(0xa3)](_0x36ae22[_0x4db1f9(0xa4)]), _0x29a250 = _0x4d0b87['getAttribute'](_0x36ae22['ffyYF']);
    _0x4d0b87[EXPANDO_KEY] = {
        'initial': {
            'height': _0x3c42fa,
            'width': _0x29a250,
            'style': {
                'display': _0x25a3af[_0x4db1f9(0xa5)],
                'height': _0x25a3af[_0x4db1f9(0xa0)],
                'width': _0x25a3af[_0x4db1f9(0xa6)]
            }
        }
    }, _0x25a3af[_0x4db1f9(0xa5)] = _0x25a3af[_0x4db1f9(0xa5)] || _0x36ae22['atNKy'], _0x25a3af[_0x4db1f9(0xa7)] = _0x25a3af['boxSizing'] || _0x36ae22[_0x4db1f9(0xa8)];
    if (isNullOrEmpty(_0x29a250)) {
        const _0x214085 = _0x36ae22['hTkNU'](readUsedSize, _0x4d0b87, _0x36ae22[_0x4db1f9(0xa9)]);
        _0x214085 !== undefined && (_0x4d0b87['width'] = _0x214085);
    }
    if (_0x36ae22[_0x4db1f9(0xaa)](isNullOrEmpty, _0x3c42fa)) {
        if (_0x36ae22[_0x4db1f9(0xab)](_0x4d0b87[_0x4db1f9(0xa2)]['height'], ''))
            _0x4d0b87['height'] = _0x36ae22[_0x4db1f9(0xac)](_0x4d0b87['width'], _0x553d05 || -0x3 * -0x320 + 0x1 * -0xa63 + 0x105);
        else {
            const _0x8259f4 = _0x36ae22[_0x4db1f9(0xad)](readUsedSize, _0x4d0b87, _0x36ae22[_0x4db1f9(0xa4)]);
            _0x8259f4 !== undefined && (_0x4d0b87[_0x4db1f9(0xa0)] = _0x8259f4);
        }
    }
    return _0x4d0b87;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0x4fe77c, _0x58ba9d, _0x2e39b4) {
    const _0x4be111 = _0x5ed53f;
    _0x4fe77c[_0x4be111(0xae)](_0x58ba9d, _0x2e39b4, eventListenerOptions);
}
function removeListener(_0x14b92f, _0x116351, _0xc4d5ab) {
    const _0x15efa9 = _0x5ed53f;
    _0x14b92f['canvas'][_0x15efa9(0xaf)](_0x116351, _0xc4d5ab, eventListenerOptions);
}
function fromNativeEvent(_0x28230c, _0x267fb9) {
    const _0x3e32e8 = _0x5ed53f, _0x1f4050 = {
            'rQkmh': function (_0x1b73e5, _0x3c6972, _0x5c7979) {
                return _0x1b73e5(_0x3c6972, _0x5c7979);
            },
            'jEfAM': function (_0x22b830, _0x12acbb) {
                return _0x22b830 !== _0x12acbb;
            }
        }, _0x1b7f35 = EVENT_TYPES[_0x28230c['type']] || _0x28230c['type'], {
            x: _0x4e17a9,
            y: _0x561435
        } = _0x1f4050[_0x3e32e8(0xb0)](getRelativePosition, _0x28230c, _0x267fb9);
    return {
        'type': _0x1b7f35,
        'chart': _0x267fb9,
        'native': _0x28230c,
        'x': _0x1f4050[_0x3e32e8(0xb1)](_0x4e17a9, undefined) ? _0x4e17a9 : null,
        'y': _0x561435 !== undefined ? _0x561435 : null
    };
}
function createAttachObserver(_0x7afced, _0x3d1dcf, _0x447008) {
    const _0x2f3344 = _0x5ed53f, _0x49384a = {
            'ozZJJ': function (_0x25caa1, _0x20463a) {
                return _0x25caa1 === _0x20463a;
            },
            'gSzkg': function (_0x58b01e) {
                return _0x58b01e();
            }
        }, _0x176db1 = _0x7afced['canvas'], _0x8d045b = new MutationObserver(_0x44b93e => {
            const _0x3ca00d = _0x3bf0;
            for (const _0xbd665b of _0x44b93e) {
                for (const _0x3bc6fc of _0xbd665b['addedNodes']) {
                    if (_0x49384a[_0x3ca00d(0xb2)](_0x3bc6fc, _0x176db1) || _0x3bc6fc[_0x3ca00d(0xb3)](_0x176db1))
                        return _0x49384a['gSzkg'](_0x447008);
                }
            }
        });
    return _0x8d045b[_0x2f3344(0xb4)](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x8d045b;
}
function createDetachObserver(_0x297346, _0x2d567f, _0x11536f) {
    const _0x184fb7 = _0x5ed53f, _0x412849 = {
            'glscf': function (_0x22b330) {
                return _0x22b330();
            }
        }, _0x4973e6 = _0x297346[_0x184fb7(0xb5)], _0x4a9db4 = new MutationObserver(_0x1c3b12 => {
            const _0x459518 = _0x184fb7;
            for (const _0x777761 of _0x1c3b12) {
                for (const _0x155e6a of _0x777761[_0x459518(0xb6)]) {
                    if (_0x155e6a === _0x4973e6 || _0x155e6a[_0x459518(0xb3)](_0x4973e6))
                        return _0x412849[_0x459518(0xb7)](_0x11536f);
                }
            }
        });
    return _0x4a9db4['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x4a9db4;
}
const drpListeningCharts = new Map();
function _0x3bf0(_0x4bb1c3, _0x3fce2c) {
    return _0x3bf0 = function (_0x22e3ae, _0x37cee1) {
        _0x22e3ae = _0x22e3ae - (0xc * 0x1d6 + 0x1 * -0xe1b + -0x75e);
        let _0x1d7714 = _0x53f5[_0x22e3ae];
        return _0x1d7714;
    }, _0x3bf0(_0x4bb1c3, _0x3fce2c);
}
let oldDevicePixelRatio = -0x1936 + -0x44 + 0x87e * 0x3;
function onWindowResize() {
    const _0xcff348 = _0x5ed53f, _0x337ac6 = {
            'dMLsb': function (_0x336b03, _0x38095b) {
                return _0x336b03 !== _0x38095b;
            },
            'drNQr': function (_0x51e9ca, _0x5d7b52) {
                return _0x51e9ca === _0x5d7b52;
            }
        }, _0x5c61b2 = window['devicePixelRatio'];
    if (_0x337ac6[_0xcff348(0xb8)](_0x5c61b2, oldDevicePixelRatio))
        return;
    oldDevicePixelRatio = _0x5c61b2, drpListeningCharts[_0xcff348(0xb9)]((_0x398dc3, _0x4c6c0a) => {
        const _0x1b5379 = _0xcff348;
        _0x337ac6['dMLsb'](_0x4c6c0a[_0x1b5379(0xba)], _0x5c61b2) && _0x398dc3();
    });
}
function listenDevicePixelRatioChanges(_0xf151f5, _0x41f7e4) {
    const _0x5a7032 = _0x5ed53f, _0x1d33e0 = { 'OqWdI': _0x5a7032(0xbb) };
    !drpListeningCharts[_0x5a7032(0xbc)] && window[_0x5a7032(0xae)](_0x1d33e0[_0x5a7032(0xbd)], onWindowResize), drpListeningCharts[_0x5a7032(0xbe)](_0xf151f5, _0x41f7e4);
}
function unlistenDevicePixelRatioChanges(_0x2c5ac8) {
    const _0x16ea73 = _0x5ed53f, _0x2f3fb6 = { 'SpQzS': _0x16ea73(0xbb) };
    drpListeningCharts[_0x16ea73(0xbf)](_0x2c5ac8), !drpListeningCharts[_0x16ea73(0xbc)] && window['removeEventListener'](_0x2f3fb6[_0x16ea73(0xc0)], onWindowResize);
}
function createResizeObserver(_0x1adbdd, _0x15195c, _0x4e8584) {
    const _0x42d62a = _0x5ed53f, _0x297199 = {
            'Fwdlf': function (_0x3229f8, _0x1e57e1, _0x2b5c2d) {
                return _0x3229f8(_0x1e57e1, _0x2b5c2d);
            },
            'bxEDe': function (_0x40d822, _0x18c2c5) {
                return _0x40d822 < _0x18c2c5;
            },
            'OvwZn': function (_0x4b223c, _0x41ca5d) {
                return _0x4b223c === _0x41ca5d;
            },
            'froUe': function (_0x8787af, _0x588296) {
                return _0x8787af(_0x588296);
            },
            'sUZsJ': function (_0x3e2b53, _0x436aec, _0x38a9b9) {
                return _0x3e2b53(_0x436aec, _0x38a9b9);
            }
        }, _0x730c11 = _0x1adbdd[_0x42d62a(0xb5)], _0x5f4121 = _0x730c11 && _0x297199['froUe'](_getParentNode, _0x730c11);
    if (!_0x5f4121)
        return;
    const _0xbecaea = _0x297199['sUZsJ'](throttled, (_0x72226f, _0x276488) => {
            const _0x90b0ca = _0x42d62a, _0x5b9288 = _0x5f4121['clientWidth'];
            _0x297199['Fwdlf'](_0x4e8584, _0x72226f, _0x276488), _0x297199[_0x90b0ca(0xc1)](_0x5b9288, _0x5f4121[_0x90b0ca(0xc2)]) && _0x4e8584();
        }, window), _0x4f54f5 = new ResizeObserver(_0x48cf45 => {
            const _0x16b951 = _0x42d62a, _0x18ac2b = _0x48cf45[-0x17d0 + 0x100d + 0x7c3], _0x3af2cb = _0x18ac2b[_0x16b951(0xc3)][_0x16b951(0xa6)], _0x2b2aaa = _0x18ac2b[_0x16b951(0xc3)][_0x16b951(0xa0)];
            if (_0x297199[_0x16b951(0xc4)](_0x3af2cb, 0x108c + -0x17ff + 0x773) && _0x2b2aaa === -0x266c + -0x53 * 0x4 + 0x4f7 * 0x8)
                return;
            _0x297199[_0x16b951(0xc5)](_0xbecaea, _0x3af2cb, _0x2b2aaa);
        });
    return _0x4f54f5[_0x42d62a(0xb4)](_0x5f4121), _0x297199[_0x42d62a(0xc6)](listenDevicePixelRatioChanges, _0x1adbdd, _0xbecaea), _0x4f54f5;
}
function releaseObserver(_0x580cad, _0x497482, _0x401681) {
    const _0x490eef = _0x5ed53f, _0x2d211e = {
            'gDRLL': function (_0x55a5ba, _0x18b509) {
                return _0x55a5ba(_0x18b509);
            }
        };
    _0x401681 && _0x401681[_0x490eef(0xc7)](), _0x497482 === _0x490eef(0xbb) && _0x2d211e[_0x490eef(0xc8)](unlistenDevicePixelRatioChanges, _0x580cad);
}
function createProxyAndListen(_0x22a968, _0x497657, _0x553276) {
    const _0x22364d = _0x5ed53f, _0x18de76 = {
            'gaBUL': function (_0x1050ae, _0x402bc2) {
                return _0x1050ae !== _0x402bc2;
            },
            'pewJm': function (_0x32eb05, _0x1cc841, _0x24769e) {
                return _0x32eb05(_0x1cc841, _0x24769e);
            },
            'XSyeM': function (_0x2bd03a, _0x10487d, _0x29bbac, _0x218e89) {
                return _0x2bd03a(_0x10487d, _0x29bbac, _0x218e89);
            }
        }, _0x304e73 = _0x22a968[_0x22364d(0xb5)], _0x1bb5a5 = _0x18de76[_0x22364d(0xc9)](throttled, _0x3b026e => {
            const _0x37e65b = _0x22364d;
            _0x18de76['gaBUL'](_0x22a968[_0x37e65b(0xca)], null) && _0x553276(_0x18de76[_0x37e65b(0xcb)](fromNativeEvent, _0x3b026e, _0x22a968));
        }, _0x22a968, _0x1e4989 => {
            const _0x4cf756 = _0x22364d, _0x2405bb = _0x1e4989[-0xd82 + 0x130e + 0x163 * -0x4];
            return [
                _0x2405bb,
                _0x2405bb[_0x4cf756(0xcc)],
                _0x2405bb['offsetY']
            ];
        });
    return _0x18de76[_0x22364d(0xc9)](addListener, _0x304e73, _0x497657, _0x1bb5a5), _0x1bb5a5;
}
export default class DomPlatform extends _0x3a96c6 {
    ['acquireContext'](_0x4e2c50, _0x1c552a) {
        const _0x183162 = _0x5ed53f, _0x4f2871 = {
                'aOsub': function (_0x10f3e3, _0x594a94) {
                    return _0x10f3e3 === _0x594a94;
                },
                'hfmHa': function (_0xe4f624, _0x305363, _0x4c3149) {
                    return _0xe4f624(_0x305363, _0x4c3149);
                }
            }, _0x5899ec = _0x4e2c50 && _0x4e2c50['getContext'] && _0x4e2c50[_0x183162(0xcd)]('2d');
        if (_0x5899ec && _0x4f2871[_0x183162(0xce)](_0x5899ec['canvas'], _0x4e2c50))
            return _0x4f2871[_0x183162(0xcf)](initCanvas, _0x4e2c50, _0x1c552a), _0x5899ec;
        return null;
    }
    ['releaseContext'](_0x4b104f) {
        const _0x21fb05 = _0x5ed53f, _0x50fbbc = {
                'eClZH': _0x21fb05(0xa0),
                'MmDNK': _0x21fb05(0xa6)
            }, _0xf11d4e = _0x4b104f[_0x21fb05(0xb5)];
        if (!_0xf11d4e[EXPANDO_KEY])
            return ![];
        const _0x53437b = _0xf11d4e[EXPANDO_KEY][_0x21fb05(0xd0)];
        [
            _0x50fbbc['eClZH'],
            _0x50fbbc[_0x21fb05(0xd1)]
        ]['forEach'](_0xe28477 => {
            const _0x563332 = _0x21fb05, _0x1f18ba = _0x53437b[_0xe28477];
            isNullOrUndef(_0x1f18ba) ? _0xf11d4e[_0x563332(0xd2)](_0xe28477) : _0xf11d4e[_0x563332(0xd3)](_0xe28477, _0x1f18ba);
        });
        const _0x3abf92 = _0x53437b[_0x21fb05(0xa2)] || {};
        return Object[_0x21fb05(0xd4)](_0x3abf92)[_0x21fb05(0xb9)](_0x5b5efd => {
            const _0x249227 = _0x21fb05;
            _0xf11d4e[_0x249227(0xa2)][_0x5b5efd] = _0x3abf92[_0x5b5efd];
        }), _0xf11d4e[_0x21fb05(0xa6)] = _0xf11d4e['width'], delete _0xf11d4e[EXPANDO_KEY], !![];
    }
    [_0x5ed53f(0xae)](_0xa16085, _0x582942, _0x33db34) {
        const _0x129b97 = _0x5ed53f;
        this[_0x129b97(0xaf)](_0xa16085, _0x582942);
        const _0x3c9c92 = _0xa16085[_0x129b97(0xd5)] || (_0xa16085[_0x129b97(0xd5)] = {}), _0x383c49 = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0xd804cf = _0x383c49[_0x582942] || createProxyAndListen;
        _0x3c9c92[_0x582942] = _0xd804cf(_0xa16085, _0x582942, _0x33db34);
    }
    [_0x5ed53f(0xaf)](_0x2ce6e0, _0xec2ad6) {
        const _0x37ccc5 = _0x5ed53f, _0x2c7c70 = _0x2ce6e0[_0x37ccc5(0xd5)] || (_0x2ce6e0[_0x37ccc5(0xd5)] = {}), _0x4ae1d4 = _0x2c7c70[_0xec2ad6];
        if (!_0x4ae1d4)
            return;
        const _0x4fa225 = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x308d74 = _0x4fa225[_0xec2ad6] || removeListener;
        _0x308d74(_0x2ce6e0, _0xec2ad6, _0x4ae1d4), _0x2c7c70[_0xec2ad6] = undefined;
    }
    ['getDevicePixelRatio']() {
        const _0x54e29a = _0x5ed53f;
        return window[_0x54e29a(0xd6)];
    }
    [_0x5ed53f(0xd7)](_0x1f910a, _0x11387d, _0x45260f, _0x27532b) {
        return getMaximumSize(_0x1f910a, _0x11387d, _0x45260f, _0x27532b);
    }
    [_0x5ed53f(0xd8)](_0x13a9ce) {
        const _0xc85c8a = _0x5ed53f, _0x3e7693 = {
                'MrpUO': function (_0x1c20c4, _0x52f4c4) {
                    return _0x1c20c4(_0x52f4c4);
                }
            }, _0x274a46 = _0x3e7693[_0xc85c8a(0xd9)](_getParentNode, _0x13a9ce);
        return !!(_0x274a46 && _0x274a46[_0xc85c8a(0xda)]);
    }
}
