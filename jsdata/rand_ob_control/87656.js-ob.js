import _0x28ac1f from './platform.base';
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
    }, isNullOrEmpty = _0x50db7e => _0x50db7e === null || _0x50db7e === '';
function initCanvas(_0x3413e5, _0x1d5c50) {
    const _0x535724 = {
            'tLLMu': 'height',
            'eCiQw': 'width',
            'cZmAz': 'block',
            'OEGpc': 'border-box',
            'KNCxF': function (_0x384da5, _0x7c3ce) {
                return _0x384da5(_0x7c3ce);
            },
            'ptXIg': function (_0x1443b4, _0x8d4663, _0x1e5b7a) {
                return _0x1443b4(_0x8d4663, _0x1e5b7a);
            },
            'gBEEO': function (_0x15d56e, _0x56ccc3) {
                return _0x15d56e !== _0x56ccc3;
            },
            'kFKWB': function (_0x2bc0c0, _0x5c9c5c) {
                return _0x2bc0c0 === _0x5c9c5c;
            },
            'zCDka': function (_0x4bd002, _0x1c711f) {
                return _0x4bd002 / _0x1c711f;
            },
            'qvTFt': function (_0x15e58b, _0x12f32a) {
                return _0x15e58b || _0x12f32a;
            }
        }, _0x59602b = _0x3413e5['style'], _0x5f539c = _0x3413e5['getAttribute'](_0x535724['tLLMu']), _0x102ab2 = _0x3413e5['getAttribute'](_0x535724['eCiQw']);
    _0x3413e5[EXPANDO_KEY] = {
        'initial': {
            'height': _0x5f539c,
            'width': _0x102ab2,
            'style': {
                'display': _0x59602b['display'],
                'height': _0x59602b['height'],
                'width': _0x59602b['width']
            }
        }
    }, _0x59602b['display'] = _0x59602b['display'] || _0x535724['cZmAz'], _0x59602b['boxSizing'] = _0x59602b['boxSizing'] || _0x535724['OEGpc'];
    if (_0x535724['KNCxF'](isNullOrEmpty, _0x102ab2)) {
        const _0x119fc8 = _0x535724['ptXIg'](readUsedSize, _0x3413e5, _0x535724['eCiQw']);
        _0x535724['gBEEO'](_0x119fc8, undefined) && (_0x3413e5['width'] = _0x119fc8);
    }
    if (_0x535724['KNCxF'](isNullOrEmpty, _0x5f539c)) {
        if (_0x535724['kFKWB'](_0x3413e5['style']['height'], ''))
            _0x3413e5['height'] = _0x535724['zCDka'](_0x3413e5['width'], _0x535724['qvTFt'](_0x1d5c50, 0x2));
        else {
            const _0x57e99b = _0x535724['ptXIg'](readUsedSize, _0x3413e5, _0x535724['tLLMu']);
            _0x535724['gBEEO'](_0x57e99b, undefined) && (_0x3413e5['height'] = _0x57e99b);
        }
    }
    return _0x3413e5;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0x3c2ea2, _0x4861ed, _0x313134) {
    _0x3c2ea2['addEventListener'](_0x4861ed, _0x313134, eventListenerOptions);
}
function removeListener(_0x9c8905, _0x49ca91, _0x18a3bc) {
    _0x9c8905['canvas']['removeEventListener'](_0x49ca91, _0x18a3bc, eventListenerOptions);
}
function fromNativeEvent(_0x1e70e0, _0x445fd4) {
    const _0x553985 = {
            'nZTNJ': function (_0x50d59c, _0x1c0923, _0x6ebe5e) {
                return _0x50d59c(_0x1c0923, _0x6ebe5e);
            },
            'mKGDE': function (_0x52bf58, _0x246624) {
                return _0x52bf58 !== _0x246624;
            }
        }, _0x35f835 = EVENT_TYPES[_0x1e70e0['type']] || _0x1e70e0['type'], {
            x: _0x1e720b,
            y: _0x14c8a3
        } = _0x553985['nZTNJ'](getRelativePosition, _0x1e70e0, _0x445fd4);
    return {
        'type': _0x35f835,
        'chart': _0x445fd4,
        'native': _0x1e70e0,
        'x': _0x553985['mKGDE'](_0x1e720b, undefined) ? _0x1e720b : null,
        'y': _0x553985['mKGDE'](_0x14c8a3, undefined) ? _0x14c8a3 : null
    };
}
function createAttachObserver(_0x5b3be4, _0xa76f94, _0x113370) {
    const _0x6d9bbb = {
            'srcZF': function (_0x41eee5, _0x5d7fd3) {
                return _0x41eee5 === _0x5d7fd3;
            },
            'WOfHp': function (_0x5e88c) {
                return _0x5e88c();
            }
        }, _0x538559 = _0x5b3be4['canvas'], _0x40ffb5 = new MutationObserver(_0x2016cc => {
            for (const _0x3ed084 of _0x2016cc) {
                for (const _0x9d1667 of _0x3ed084['addedNodes']) {
                    if (_0x6d9bbb['srcZF'](_0x9d1667, _0x538559) || _0x9d1667['contains'](_0x538559))
                        return _0x6d9bbb['WOfHp'](_0x113370);
                }
            }
        });
    return _0x40ffb5['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x40ffb5;
}
function createDetachObserver(_0x3a9d64, _0x116909, _0x4d5fad) {
    const _0x1dda66 = {
            'WKcqY': function (_0x5e8af2, _0x3c6eee) {
                return _0x5e8af2 === _0x3c6eee;
            },
            'OdSrP': function (_0x2e2a83) {
                return _0x2e2a83();
            }
        }, _0x7f94e1 = _0x3a9d64['canvas'], _0x2b23c5 = new MutationObserver(_0xcc0c18 => {
            for (const _0x5c800d of _0xcc0c18) {
                for (const _0x4bea9f of _0x5c800d['removedNodes']) {
                    if (_0x1dda66['WKcqY'](_0x4bea9f, _0x7f94e1) || _0x4bea9f['contains'](_0x7f94e1))
                        return _0x1dda66['OdSrP'](_0x4d5fad);
                }
            }
        });
    return _0x2b23c5['observe'](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x2b23c5;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0x0;
function onWindowResize() {
    const _0x1be3b8 = {
            'oQCXq': function (_0x3486cf, _0x4a875f) {
                return _0x3486cf !== _0x4a875f;
            },
            'cxQAs': function (_0xdc6fa4) {
                return _0xdc6fa4();
            },
            'hwpJq': function (_0x5e6fb9, _0x38aa0b) {
                return _0x5e6fb9 === _0x38aa0b;
            }
        }, _0x533f7c = window['devicePixelRatio'];
    if (_0x1be3b8['hwpJq'](_0x533f7c, oldDevicePixelRatio))
        return;
    oldDevicePixelRatio = _0x533f7c, drpListeningCharts['forEach']((_0x37bb6b, _0x3156ec) => {
        _0x1be3b8['oQCXq'](_0x3156ec['currentDevicePixelRatio'], _0x533f7c) && _0x1be3b8['cxQAs'](_0x37bb6b);
    });
}
function listenDevicePixelRatioChanges(_0x5a05d6, _0x2135e5) {
    const _0x3798b3 = { 'pRzhM': 'resize' };
    !drpListeningCharts['size'] && window['addEventListener'](_0x3798b3['pRzhM'], onWindowResize), drpListeningCharts['set'](_0x5a05d6, _0x2135e5);
}
function unlistenDevicePixelRatioChanges(_0x3a48d9) {
    const _0x3afd8a = { 'OKCLB': 'resize' };
    drpListeningCharts['delete'](_0x3a48d9), !drpListeningCharts['size'] && window['removeEventListener'](_0x3afd8a['OKCLB'], onWindowResize);
}
function createResizeObserver(_0x350d6b, _0x28ed9a, _0x1f5078) {
    const _0x4196cd = {
            'AnzKt': function (_0x3faf5d, _0x4b777e, _0x3c8d86) {
                return _0x3faf5d(_0x4b777e, _0x3c8d86);
            },
            'GvXGG': function (_0x13a3f1, _0x31083a) {
                return _0x13a3f1 < _0x31083a;
            },
            'HqLRH': function (_0x1876a7) {
                return _0x1876a7();
            },
            'YBLJv': function (_0x401e66, _0x1ca875) {
                return _0x401e66 === _0x1ca875;
            },
            'cchfD': function (_0x149dfd, _0x3a1019, _0x4383c8) {
                return _0x149dfd(_0x3a1019, _0x4383c8);
            },
            'xqkIf': function (_0x47ab40, _0x2d5a08) {
                return _0x47ab40(_0x2d5a08);
            }
        }, _0x44ed2c = _0x350d6b['canvas'], _0x7006c = _0x44ed2c && _0x4196cd['xqkIf'](_getParentNode, _0x44ed2c);
    if (!_0x7006c)
        return;
    const _0x26c1b1 = _0x4196cd['cchfD'](throttled, (_0x1118af, _0x4b46b4) => {
            const _0x25e18f = _0x7006c['clientWidth'];
            _0x4196cd['AnzKt'](_0x1f5078, _0x1118af, _0x4b46b4), _0x4196cd['GvXGG'](_0x25e18f, _0x7006c['clientWidth']) && _0x4196cd['HqLRH'](_0x1f5078);
        }, window), _0x453f3e = new ResizeObserver(_0x46e514 => {
            const _0x46eb23 = _0x46e514[0x0], _0x4acf91 = _0x46eb23['contentRect']['width'], _0x2a81e7 = _0x46eb23['contentRect']['height'];
            if (_0x4196cd['YBLJv'](_0x4acf91, 0x0) && _0x4196cd['YBLJv'](_0x2a81e7, 0x0))
                return;
            _0x4196cd['cchfD'](_0x26c1b1, _0x4acf91, _0x2a81e7);
        });
    return _0x453f3e['observe'](_0x7006c), _0x4196cd['cchfD'](listenDevicePixelRatioChanges, _0x350d6b, _0x26c1b1), _0x453f3e;
}
function releaseObserver(_0x1bc8b5, _0x4b4383, _0x33be38) {
    const _0x5bffbe = {
        'uRueP': function (_0x37a637, _0x94301) {
            return _0x37a637 === _0x94301;
        },
        'BvmFf': 'resize',
        'jlubE': function (_0x2839ec, _0x2f92f4) {
            return _0x2839ec(_0x2f92f4);
        }
    };
    _0x33be38 && _0x33be38['disconnect'](), _0x5bffbe['uRueP'](_0x4b4383, _0x5bffbe['BvmFf']) && _0x5bffbe['jlubE'](unlistenDevicePixelRatioChanges, _0x1bc8b5);
}
function createProxyAndListen(_0xbf2ac9, _0x1df5a5, _0x9fb41b) {
    const _0x21eb1f = {
            'yIdLj': function (_0x34f91f, _0x4ca478) {
                return _0x34f91f !== _0x4ca478;
            },
            'fvWOy': function (_0x3770e6, _0x2d5009) {
                return _0x3770e6(_0x2d5009);
            },
            'cmmxW': function (_0x584078, _0x57be67, _0xa9addf) {
                return _0x584078(_0x57be67, _0xa9addf);
            },
            'cuqxP': function (_0x26f21d, _0x2da769, _0x13d2a6, _0x9c5c18) {
                return _0x26f21d(_0x2da769, _0x13d2a6, _0x9c5c18);
            }
        }, _0x797b78 = _0xbf2ac9['canvas'], _0x490cef = _0x21eb1f['cuqxP'](throttled, _0x1d025f => {
            _0x21eb1f['yIdLj'](_0xbf2ac9['ctx'], null) && _0x21eb1f['fvWOy'](_0x9fb41b, _0x21eb1f['cmmxW'](fromNativeEvent, _0x1d025f, _0xbf2ac9));
        }, _0xbf2ac9, _0x1403e4 => {
            const _0x1cf665 = _0x1403e4[0x0];
            return [
                _0x1cf665,
                _0x1cf665['offsetX'],
                _0x1cf665['offsetY']
            ];
        });
    return _0x21eb1f['cuqxP'](addListener, _0x797b78, _0x1df5a5, _0x490cef), _0x490cef;
}
export default class DomPlatform extends _0x28ac1f {
    ['acquireContext'](_0x1838b0, _0x2d0a60) {
        const _0x2bb7a3 = {
                'luDFP': function (_0x1abbc1, _0x179a4a) {
                    return _0x1abbc1 === _0x179a4a;
                },
                'OgcpN': function (_0x54c0cd, _0x48167f, _0x2af0b9) {
                    return _0x54c0cd(_0x48167f, _0x2af0b9);
                }
            }, _0x2ac649 = _0x1838b0 && _0x1838b0['getContext'] && _0x1838b0['getContext']('2d');
        if (_0x2ac649 && _0x2bb7a3['luDFP'](_0x2ac649['canvas'], _0x1838b0))
            return _0x2bb7a3['OgcpN'](initCanvas, _0x1838b0, _0x2d0a60), _0x2ac649;
        return null;
    }
    ['releaseContext'](_0x235d53) {
        const _0x370b14 = {
                'ZXJuR': function (_0x3fbdd5, _0x1ecd35) {
                    return _0x3fbdd5(_0x1ecd35);
                },
                'lMeop': 'height',
                'VOObb': 'width'
            }, _0x2e89ab = _0x235d53['canvas'];
        if (!_0x2e89ab[EXPANDO_KEY])
            return ![];
        const _0x121a3c = _0x2e89ab[EXPANDO_KEY]['initial'];
        [
            _0x370b14['lMeop'],
            _0x370b14['VOObb']
        ]['forEach'](_0xccc6c7 => {
            const _0x78f2ab = _0x121a3c[_0xccc6c7];
            _0x370b14['ZXJuR'](isNullOrUndef, _0x78f2ab) ? _0x2e89ab['removeAttribute'](_0xccc6c7) : _0x2e89ab['setAttribute'](_0xccc6c7, _0x78f2ab);
        });
        const _0x50ef17 = _0x121a3c['style'] || {};
        return Object['keys'](_0x50ef17)['forEach'](_0x146682 => {
            _0x2e89ab['style'][_0x146682] = _0x50ef17[_0x146682];
        }), _0x2e89ab['width'] = _0x2e89ab['width'], delete _0x2e89ab[EXPANDO_KEY], !![];
    }
    ['addEventListener'](_0x57f783, _0x2e5de2, _0x2e4cda) {
        const _0x55af32 = {
            'WelFn': function (_0x4512ed, _0x2ba69d, _0x471582, _0x1c136) {
                return _0x4512ed(_0x2ba69d, _0x471582, _0x1c136);
            }
        };
        this['removeEventListener'](_0x57f783, _0x2e5de2);
        const _0x1116c6 = _0x57f783['$proxies'] || (_0x57f783['$proxies'] = {}), _0x33fc23 = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0x3bd925 = _0x33fc23[_0x2e5de2] || createProxyAndListen;
        _0x1116c6[_0x2e5de2] = _0x55af32['WelFn'](_0x3bd925, _0x57f783, _0x2e5de2, _0x2e4cda);
    }
    ['removeEventListener'](_0xd8c2ee, _0x183f14) {
        const _0x1056e2 = {
                'zabHO': function (_0x33b249, _0x312130, _0x33c451, _0x1dc169) {
                    return _0x33b249(_0x312130, _0x33c451, _0x1dc169);
                }
            }, _0x1afde4 = _0xd8c2ee['$proxies'] || (_0xd8c2ee['$proxies'] = {}), _0x5179d9 = _0x1afde4[_0x183f14];
        if (!_0x5179d9)
            return;
        const _0x2649a0 = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x53b7c1 = _0x2649a0[_0x183f14] || removeListener;
        _0x1056e2['zabHO'](_0x53b7c1, _0xd8c2ee, _0x183f14, _0x5179d9), _0x1afde4[_0x183f14] = undefined;
    }
    ['getDevicePixelRatio']() {
        return window['devicePixelRatio'];
    }
    ['getMaximumSize'](_0x190226, _0x89d159, _0x45e50c, _0x126d44) {
        const _0x469c3b = {
            'CgBjT': function (_0x19c8d5, _0x81d2da, _0x18ea1a, _0x1b3570, _0x4a4236) {
                return _0x19c8d5(_0x81d2da, _0x18ea1a, _0x1b3570, _0x4a4236);
            }
        };
        return _0x469c3b['CgBjT'](getMaximumSize, _0x190226, _0x89d159, _0x45e50c, _0x126d44);
    }
    ['isAttached'](_0x3deb9b) {
        const _0x2bef10 = {
                'iZCjn': function (_0x576b7b, _0x47bb0c) {
                    return _0x576b7b(_0x47bb0c);
                }
            }, _0x2d651f = _0x2bef10['iZCjn'](_getParentNode, _0x3deb9b);
        return !!(_0x2d651f && _0x2d651f['isConnected']);
    }
}
