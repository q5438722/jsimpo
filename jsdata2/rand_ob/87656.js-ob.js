const _0x5184 = [
    'QrJZx',
    'addEventListener',
    'removeEventListener',
    'type',
    'RKMkc',
    'zCRyH',
    'canvas',
    'addedNodes',
    'MYTmg',
    'observe',
    'removedNodes',
    'contains',
    'devicePixelRatio',
    'vyJAj',
    'forEach',
    'IMKwZ',
    'tZYdg',
    'resize',
    'PNEpM',
    'set',
    'delete',
    'cPqfU',
    'spkuo',
    'clientWidth',
    'eMpHo',
    'eLIZa',
    'contentRect',
    'SMMRx',
    'disconnect',
    'WzCTB',
    'irKBa',
    'WyWRS',
    'ctx',
    'vlUrw',
    'sFsAs',
    'offsetX',
    'offsetY',
    'acquireContext',
    'getContext',
    'sVrEG',
    'initial',
    'wQRGE',
    'PjFQB',
    'removeAttribute',
    'setAttribute',
    'keys',
    '$proxies',
    'ZJuon',
    'getDevicePixelRatio',
    'isConnected',
    '883361jIcuCn',
    '1VnpGVl',
    '402083vLOmWg',
    '91172DNXBgY',
    '4lnaBTY',
    '622458PgXrzI',
    '308886FfQaKM',
    '725451pPrZks',
    '1402765tiepGc',
    '$chartjs',
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseout',
    'block',
    'border-box',
    'style',
    'getAttribute',
    'invap',
    'cAOPa',
    'display',
    'height',
    'width',
    'oTGuN',
    'boxSizing',
    'YaWyD',
    'epTyL',
    'hOukB',
    'bMvua',
    'yChYJ',
    'iVVYL',
    'hnWxn'
];
const _0x5cf709 = _0x3aef;
(function (_0xc6bb6f, _0x40e601) {
    const _0x16e59e = _0x3aef;
    while (!![]) {
        try {
            const _0x188e57 = parseInt(_0x16e59e(0x1ac)) + parseInt(_0x16e59e(0x1ad)) * parseInt(_0x16e59e(0x1ae)) + parseInt(_0x16e59e(0x1af)) * parseInt(_0x16e59e(0x1b0)) + parseInt(_0x16e59e(0x1b1)) + parseInt(_0x16e59e(0x1b2)) + -parseInt(_0x16e59e(0x1b3)) + -parseInt(_0x16e59e(0x1b4));
            if (_0x188e57 === _0x40e601)
                break;
            else
                _0xc6bb6f['push'](_0xc6bb6f['shift']());
        } catch (_0x4bd804) {
            _0xc6bb6f['push'](_0xc6bb6f['shift']());
        }
    }
}(_0x5184, 0x952f3 + -0x9cde3 + -0x7657c * -0x1));
import _0x2836f8 from './platform.base';
import {
    _getParentNode,
    getRelativePosition,
    supportsEventListenerOptions,
    readUsedSize,
    getMaximumSize
} from '../helpers/helpers.dom';
import { throttled } from '../helpers/helpers.extras';
import { isNullOrUndef } from '../helpers/helpers.core';
const EXPANDO_KEY = _0x5cf709(0x1b5), EVENT_TYPES = {
        'touchstart': _0x5cf709(0x1b6),
        'touchmove': _0x5cf709(0x1b7),
        'touchend': _0x5cf709(0x1b8),
        'pointerenter': 'mouseenter',
        'pointerdown': _0x5cf709(0x1b6),
        'pointermove': _0x5cf709(0x1b7),
        'pointerup': _0x5cf709(0x1b8),
        'pointerleave': _0x5cf709(0x1b9),
        'pointerout': _0x5cf709(0x1b9)
    }, isNullOrEmpty = _0x2135e5 => _0x2135e5 === null || _0x2135e5 === '';
function initCanvas(_0x19445e, _0x551f58) {
    const _0x430dce = _0x5cf709, _0x3b3984 = {
            'invap': 'height',
            'cAOPa': 'width',
            'oTGuN': _0x430dce(0x1ba),
            'YaWyD': _0x430dce(0x1bb),
            'epTyL': function (_0x119405, _0x5c821c) {
                return _0x119405(_0x5c821c);
            },
            'hOukB': function (_0x3a7ab4, _0x30330f, _0x14dfad) {
                return _0x3a7ab4(_0x30330f, _0x14dfad);
            },
            'bMvua': function (_0x59f0f7, _0x5735ea) {
                return _0x59f0f7 !== _0x5735ea;
            },
            'yChYJ': function (_0x10a7b3, _0x4eb338) {
                return _0x10a7b3(_0x4eb338);
            },
            'iVVYL': function (_0xb6da17, _0x4b7f9f) {
                return _0xb6da17 === _0x4b7f9f;
            },
            'hnWxn': function (_0x5281a2, _0x1dee7f) {
                return _0x5281a2 / _0x1dee7f;
            },
            'QrJZx': function (_0x386157, _0x46aaef, _0x42084f) {
                return _0x386157(_0x46aaef, _0x42084f);
            }
        }, _0x3e001f = _0x19445e[_0x430dce(0x1bc)], _0x92c315 = _0x19445e[_0x430dce(0x1bd)](_0x3b3984[_0x430dce(0x1be)]), _0xd80a00 = _0x19445e[_0x430dce(0x1bd)](_0x3b3984[_0x430dce(0x1bf)]);
    _0x19445e[EXPANDO_KEY] = {
        'initial': {
            'height': _0x92c315,
            'width': _0xd80a00,
            'style': {
                'display': _0x3e001f[_0x430dce(0x1c0)],
                'height': _0x3e001f[_0x430dce(0x1c1)],
                'width': _0x3e001f[_0x430dce(0x1c2)]
            }
        }
    }, _0x3e001f['display'] = _0x3e001f['display'] || _0x3b3984[_0x430dce(0x1c3)], _0x3e001f[_0x430dce(0x1c4)] = _0x3e001f['boxSizing'] || _0x3b3984[_0x430dce(0x1c5)];
    if (_0x3b3984[_0x430dce(0x1c6)](isNullOrEmpty, _0xd80a00)) {
        const _0x1bb8ae = _0x3b3984[_0x430dce(0x1c7)](readUsedSize, _0x19445e, _0x3b3984['cAOPa']);
        _0x3b3984[_0x430dce(0x1c8)](_0x1bb8ae, undefined) && (_0x19445e['width'] = _0x1bb8ae);
    }
    if (_0x3b3984[_0x430dce(0x1c9)](isNullOrEmpty, _0x92c315)) {
        if (_0x3b3984[_0x430dce(0x1ca)](_0x19445e[_0x430dce(0x1bc)][_0x430dce(0x1c1)], ''))
            _0x19445e[_0x430dce(0x1c1)] = _0x3b3984[_0x430dce(0x1cb)](_0x19445e[_0x430dce(0x1c2)], _0x551f58 || 0x11 * 0xb1 + -0x1f7d + 0x13be);
        else {
            const _0x28295a = _0x3b3984[_0x430dce(0x1cc)](readUsedSize, _0x19445e, _0x3b3984['invap']);
            _0x28295a !== undefined && (_0x19445e[_0x430dce(0x1c1)] = _0x28295a);
        }
    }
    return _0x19445e;
}
const eventListenerOptions = supportsEventListenerOptions ? { 'passive': !![] } : ![];
function addListener(_0x59bf3c, _0x27e89, _0x57b976) {
    const _0x433339 = _0x5cf709;
    _0x59bf3c[_0x433339(0x1cd)](_0x27e89, _0x57b976, eventListenerOptions);
}
function removeListener(_0x3034b5, _0x3bcb84, _0x1f95b0) {
    const _0x574040 = _0x5cf709;
    _0x3034b5['canvas'][_0x574040(0x1ce)](_0x3bcb84, _0x1f95b0, eventListenerOptions);
}
function fromNativeEvent(_0xde291c, _0x405c81) {
    const _0x19acc2 = _0x5cf709, _0x223fe5 = {
            'sQOJw': function (_0x485f49, _0x5004fb, _0x444341) {
                return _0x485f49(_0x5004fb, _0x444341);
            },
            'RKMkc': function (_0x5ba1f4, _0xc02258) {
                return _0x5ba1f4 !== _0xc02258;
            },
            'zCRyH': function (_0x47ee1d, _0x408eb7) {
                return _0x47ee1d !== _0x408eb7;
            }
        }, _0x16f36a = EVENT_TYPES[_0xde291c[_0x19acc2(0x1cf)]] || _0xde291c[_0x19acc2(0x1cf)], {
            x: _0x130e0c,
            y: _0x58e874
        } = _0x223fe5['sQOJw'](getRelativePosition, _0xde291c, _0x405c81);
    return {
        'type': _0x16f36a,
        'chart': _0x405c81,
        'native': _0xde291c,
        'x': _0x223fe5[_0x19acc2(0x1d0)](_0x130e0c, undefined) ? _0x130e0c : null,
        'y': _0x223fe5[_0x19acc2(0x1d1)](_0x58e874, undefined) ? _0x58e874 : null
    };
}
function createAttachObserver(_0x4b491b, _0x225b1e, _0x178ab7) {
    const _0x21f630 = _0x5cf709, _0x5610da = {
            'MYTmg': function (_0x2291b5, _0x8f1d14) {
                return _0x2291b5 === _0x8f1d14;
            },
            'ioPkK': function (_0x1fc7ca) {
                return _0x1fc7ca();
            }
        }, _0x290fb2 = _0x4b491b[_0x21f630(0x1d2)], _0x6ee1ee = new MutationObserver(_0x44b875 => {
            const _0x309ef6 = _0x21f630;
            for (const _0x344697 of _0x44b875) {
                for (const _0x69b7b6 of _0x344697[_0x309ef6(0x1d3)]) {
                    if (_0x5610da[_0x309ef6(0x1d4)](_0x69b7b6, _0x290fb2) || _0x69b7b6['contains'](_0x290fb2))
                        return _0x5610da['ioPkK'](_0x178ab7);
                }
            }
        });
    return _0x6ee1ee[_0x21f630(0x1d5)](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x6ee1ee;
}
function _0x3aef(_0x387ae5, _0x3b8338) {
    return _0x3aef = function (_0x533d05, _0x54d059) {
        _0x533d05 = _0x533d05 - (0x9 * 0x9a + -0x2106 + 0x2 * 0xea4);
        let _0x1e714a = _0x5184[_0x533d05];
        return _0x1e714a;
    }, _0x3aef(_0x387ae5, _0x3b8338);
}
function createDetachObserver(_0x5913ae, _0x3edc8a, _0x40d493) {
    const _0x34615a = _0x5cf709, _0x421f6c = {
            'omlJV': function (_0x5941b7, _0xaec9a8) {
                return _0x5941b7 === _0xaec9a8;
            }
        }, _0x3801b9 = _0x5913ae[_0x34615a(0x1d2)], _0x9a869e = new MutationObserver(_0xa60381 => {
            const _0x5c34ae = _0x34615a;
            for (const _0x58fbcc of _0xa60381) {
                for (const _0x3c7aa7 of _0x58fbcc[_0x5c34ae(0x1d6)]) {
                    if (_0x421f6c['omlJV'](_0x3c7aa7, _0x3801b9) || _0x3c7aa7[_0x5c34ae(0x1d7)](_0x3801b9))
                        return _0x40d493();
                }
            }
        });
    return _0x9a869e[_0x34615a(0x1d5)](document, {
        'childList': !![],
        'subtree': !![]
    }), _0x9a869e;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0x160f + 0xb4c + 0x215b * -0x1;
function onWindowResize() {
    const _0x46c478 = _0x5cf709, _0x46d378 = {
            'IMKwZ': function (_0x3d08c0, _0x51dab9) {
                return _0x3d08c0 !== _0x51dab9;
            },
            'tZYdg': function (_0x285f31) {
                return _0x285f31();
            },
            'vyJAj': function (_0x412b84, _0x200453) {
                return _0x412b84 === _0x200453;
            }
        }, _0x28e218 = window[_0x46c478(0x1d8)];
    if (_0x46d378[_0x46c478(0x1d9)](_0x28e218, oldDevicePixelRatio))
        return;
    oldDevicePixelRatio = _0x28e218, drpListeningCharts[_0x46c478(0x1da)]((_0x5da3c2, _0x4eff12) => {
        const _0x18776e = _0x46c478;
        _0x46d378[_0x18776e(0x1db)](_0x4eff12['currentDevicePixelRatio'], _0x28e218) && _0x46d378[_0x18776e(0x1dc)](_0x5da3c2);
    });
}
function listenDevicePixelRatioChanges(_0xa098c0, _0x33ea8c) {
    const _0x44a398 = _0x5cf709, _0x3200b1 = { 'PNEpM': _0x44a398(0x1dd) };
    !drpListeningCharts['size'] && window[_0x44a398(0x1cd)](_0x3200b1[_0x44a398(0x1de)], onWindowResize), drpListeningCharts[_0x44a398(0x1df)](_0xa098c0, _0x33ea8c);
}
function unlistenDevicePixelRatioChanges(_0x2d765b) {
    const _0x4e2dc0 = _0x5cf709, _0x1de979 = { 'dnzSX': _0x4e2dc0(0x1dd) };
    drpListeningCharts[_0x4e2dc0(0x1e0)](_0x2d765b), !drpListeningCharts['size'] && window[_0x4e2dc0(0x1ce)](_0x1de979['dnzSX'], onWindowResize);
}
function createResizeObserver(_0x5ed73f, _0x223074, _0x42de14) {
    const _0x397850 = _0x5cf709, _0x2fb5a1 = {
            'spkuo': function (_0x2338a6, _0x4ef529, _0xa81aed) {
                return _0x2338a6(_0x4ef529, _0xa81aed);
            },
            'eMpHo': function (_0x493d60, _0x222397) {
                return _0x493d60 < _0x222397;
            },
            'eLIZa': function (_0x59c338) {
                return _0x59c338();
            },
            'SMMRx': function (_0xb50693, _0x3caa23) {
                return _0xb50693 === _0x3caa23;
            },
            'cPqfU': function (_0xb615dd, _0x9b3eee) {
                return _0xb615dd(_0x9b3eee);
            }
        }, _0x4071a2 = _0x5ed73f[_0x397850(0x1d2)], _0x50b1a7 = _0x4071a2 && _0x2fb5a1[_0x397850(0x1e1)](_getParentNode, _0x4071a2);
    if (!_0x50b1a7)
        return;
    const _0x3ea581 = _0x2fb5a1[_0x397850(0x1e2)](throttled, (_0xa3710b, _0x2473ee) => {
            const _0x2118da = _0x397850, _0x5d38c8 = _0x50b1a7[_0x2118da(0x1e3)];
            _0x2fb5a1['spkuo'](_0x42de14, _0xa3710b, _0x2473ee), _0x2fb5a1[_0x2118da(0x1e4)](_0x5d38c8, _0x50b1a7[_0x2118da(0x1e3)]) && _0x2fb5a1[_0x2118da(0x1e5)](_0x42de14);
        }, window), _0x10343c = new ResizeObserver(_0x1eaa22 => {
            const _0x5b0a0b = _0x397850, _0x22d32b = _0x1eaa22[-0xa83 + -0x5 * 0x49e + 0x2199], _0x172475 = _0x22d32b[_0x5b0a0b(0x1e6)][_0x5b0a0b(0x1c2)], _0x161946 = _0x22d32b['contentRect']['height'];
            if (_0x2fb5a1[_0x5b0a0b(0x1e7)](_0x172475, 0xcc6 + -0x94 + -0xc32) && _0x2fb5a1[_0x5b0a0b(0x1e7)](_0x161946, 0x2403 + -0x1fbd + -0x446))
                return;
            _0x3ea581(_0x172475, _0x161946);
        });
    return _0x10343c['observe'](_0x50b1a7), listenDevicePixelRatioChanges(_0x5ed73f, _0x3ea581), _0x10343c;
}
function releaseObserver(_0x4248ba, _0x31b386, _0x5dcc0d) {
    const _0x5a7fe2 = _0x5cf709, _0x518660 = {
            'QMxrJ': _0x5a7fe2(0x1dd),
            'WzCTB': function (_0x35b613, _0x1b3588) {
                return _0x35b613(_0x1b3588);
            }
        };
    _0x5dcc0d && _0x5dcc0d[_0x5a7fe2(0x1e8)](), _0x31b386 === _0x518660['QMxrJ'] && _0x518660[_0x5a7fe2(0x1e9)](unlistenDevicePixelRatioChanges, _0x4248ba);
}
function createProxyAndListen(_0x276382, _0x522c12, _0x54b645) {
    const _0x5abc7a = _0x5cf709, _0x1f421c = {
            'WyWRS': function (_0x5c3964, _0x292056) {
                return _0x5c3964 !== _0x292056;
            },
            'vlUrw': function (_0xf7d5ce, _0x2532da) {
                return _0xf7d5ce(_0x2532da);
            },
            'sFsAs': function (_0x3a4d3f, _0xe7b867, _0x3e809e) {
                return _0x3a4d3f(_0xe7b867, _0x3e809e);
            },
            'irKBa': function (_0x49ebb7, _0x12cff4, _0x40054a, _0x1f81c2) {
                return _0x49ebb7(_0x12cff4, _0x40054a, _0x1f81c2);
            }
        }, _0x5208c8 = _0x276382['canvas'], _0x501627 = _0x1f421c[_0x5abc7a(0x1ea)](throttled, _0x252ea0 => {
            const _0x19cf67 = _0x5abc7a;
            _0x1f421c[_0x19cf67(0x1eb)](_0x276382[_0x19cf67(0x1ec)], null) && _0x1f421c[_0x19cf67(0x1ed)](_0x54b645, _0x1f421c[_0x19cf67(0x1ee)](fromNativeEvent, _0x252ea0, _0x276382));
        }, _0x276382, _0x38fd46 => {
            const _0x34f300 = _0x5abc7a, _0x5b2903 = _0x38fd46[0x18e3 + -0x7e5 * -0x1 + 0x2 * -0x1064];
            return [
                _0x5b2903,
                _0x5b2903[_0x34f300(0x1ef)],
                _0x5b2903[_0x34f300(0x1f0)]
            ];
        });
    return _0x1f421c[_0x5abc7a(0x1ea)](addListener, _0x5208c8, _0x522c12, _0x501627), _0x501627;
}
export default class DomPlatform extends _0x2836f8 {
    [_0x5cf709(0x1f1)](_0x634269, _0x2376d7) {
        const _0xd8e0fe = _0x5cf709, _0x2a1942 = {
                'tInXp': function (_0x557bb6, _0x467cd7) {
                    return _0x557bb6 === _0x467cd7;
                },
                'sVrEG': function (_0x4fe79d, _0x424133, _0x4f18e4) {
                    return _0x4fe79d(_0x424133, _0x4f18e4);
                }
            }, _0x933dbd = _0x634269 && _0x634269[_0xd8e0fe(0x1f2)] && _0x634269[_0xd8e0fe(0x1f2)]('2d');
        if (_0x933dbd && _0x2a1942['tInXp'](_0x933dbd['canvas'], _0x634269))
            return _0x2a1942[_0xd8e0fe(0x1f3)](initCanvas, _0x634269, _0x2376d7), _0x933dbd;
        return null;
    }
    ['releaseContext'](_0x24b8a1) {
        const _0x2a6342 = _0x5cf709, _0x5e524c = {
                'PjFQB': function (_0x3a72c8, _0x158780) {
                    return _0x3a72c8(_0x158780);
                },
                'wQRGE': _0x2a6342(0x1c1),
                'MGWit': _0x2a6342(0x1c2)
            }, _0x538a89 = _0x24b8a1[_0x2a6342(0x1d2)];
        if (!_0x538a89[EXPANDO_KEY])
            return ![];
        const _0x421c97 = _0x538a89[EXPANDO_KEY][_0x2a6342(0x1f4)];
        [
            _0x5e524c[_0x2a6342(0x1f5)],
            _0x5e524c['MGWit']
        ]['forEach'](_0x256739 => {
            const _0xd4d9db = _0x2a6342, _0x46f78f = _0x421c97[_0x256739];
            _0x5e524c[_0xd4d9db(0x1f6)](isNullOrUndef, _0x46f78f) ? _0x538a89[_0xd4d9db(0x1f7)](_0x256739) : _0x538a89[_0xd4d9db(0x1f8)](_0x256739, _0x46f78f);
        });
        const _0x3da9d5 = _0x421c97['style'] || {};
        return Object[_0x2a6342(0x1f9)](_0x3da9d5)[_0x2a6342(0x1da)](_0x1d6932 => {
            const _0x3218b5 = _0x2a6342;
            _0x538a89[_0x3218b5(0x1bc)][_0x1d6932] = _0x3da9d5[_0x1d6932];
        }), _0x538a89[_0x2a6342(0x1c2)] = _0x538a89['width'], delete _0x538a89[EXPANDO_KEY], !![];
    }
    [_0x5cf709(0x1cd)](_0x143aad, _0x575b36, _0x16ff95) {
        const _0x30783a = _0x5cf709, _0x3ccb24 = {
                'fzggA': function (_0x166031, _0x1a6b5c, _0x1bb7f6, _0x247075) {
                    return _0x166031(_0x1a6b5c, _0x1bb7f6, _0x247075);
                }
            };
        this[_0x30783a(0x1ce)](_0x143aad, _0x575b36);
        const _0x3ee26e = _0x143aad[_0x30783a(0x1fa)] || (_0x143aad['$proxies'] = {}), _0x1b64e7 = {
                'attach': createAttachObserver,
                'detach': createDetachObserver,
                'resize': createResizeObserver
            }, _0x3ae5ed = _0x1b64e7[_0x575b36] || createProxyAndListen;
        _0x3ee26e[_0x575b36] = _0x3ccb24['fzggA'](_0x3ae5ed, _0x143aad, _0x575b36, _0x16ff95);
    }
    [_0x5cf709(0x1ce)](_0x6387c5, _0x282229) {
        const _0x324dbe = _0x5cf709, _0x5e8c7c = {
                'ZJuon': function (_0x37305a, _0x3eddcd, _0x31dc37, _0x1d15f7) {
                    return _0x37305a(_0x3eddcd, _0x31dc37, _0x1d15f7);
                }
            }, _0x486f1d = _0x6387c5[_0x324dbe(0x1fa)] || (_0x6387c5[_0x324dbe(0x1fa)] = {}), _0x16f06b = _0x486f1d[_0x282229];
        if (!_0x16f06b)
            return;
        const _0x3cb2bc = {
                'attach': releaseObserver,
                'detach': releaseObserver,
                'resize': releaseObserver
            }, _0x1a85e7 = _0x3cb2bc[_0x282229] || removeListener;
        _0x5e8c7c[_0x324dbe(0x1fb)](_0x1a85e7, _0x6387c5, _0x282229, _0x16f06b), _0x486f1d[_0x282229] = undefined;
    }
    [_0x5cf709(0x1fc)]() {
        const _0x3a4089 = _0x5cf709;
        return window[_0x3a4089(0x1d8)];
    }
    ['getMaximumSize'](_0x359d3c, _0x65357f, _0x294bed, _0x589fc8) {
        const _0x339176 = {
            'YXweR': function (_0x44a547, _0x33d18d, _0xf5c843, _0xb6fabf, _0xf75e6a) {
                return _0x44a547(_0x33d18d, _0xf5c843, _0xb6fabf, _0xf75e6a);
            }
        };
        return _0x339176['YXweR'](getMaximumSize, _0x359d3c, _0x65357f, _0x294bed, _0x589fc8);
    }
    ['isAttached'](_0x47ad92) {
        const _0x44201c = _0x5cf709, _0xafbe52 = {
                'vfOLE': function (_0x3f8f4f, _0x37eb23) {
                    return _0x3f8f4f(_0x37eb23);
                }
            }, _0x1d8f58 = _0xafbe52['vfOLE'](_getParentNode, _0x47ad92);
        return !!(_0x1d8f58 && _0x1d8f58[_0x44201c(0x1fd)]);
    }
}
