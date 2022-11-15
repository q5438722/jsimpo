const _0x3950 = [
    'notificationCallbacks',
    'getInterface',
    'nsILoadContext',
    'loadGroup',
    'getNetworkErrorStatusText',
    'keys',
    'abs',
    'nsINSSErrorsService',
    'NSS_SEC_ERROR_BASE',
    'SEC_ERROR_EXPIRED_CERTIFICATE',
    'SEC_ERROR_UNTRUSTED_ISSUER',
    'SEC_ERROR_CA_CERT_INVALID',
    'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED',
    'SEC_ERROR_UNKNOWN',
    'NSS_SSL_ERROR_BASE',
    'SSL_ERROR_NO_CERTIFICATE',
    'SSL_ERROR_BAD_CERTIFICATE',
    'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE',
    'SSL_ERROR_UNSUPPORTED_VERSION',
    'SSL_ERROR_BAD_CERT_DOMAIN',
    'SSL_ERROR_UNKNOWN',
    'browsingContextToFrameId',
    'frame-',
    'Helper',
    '686234wvghuL',
    '386780WUpllC',
    '1OXQVTj',
    '333618EHQOrB',
    '631697ZNWxQn',
    '1SXftgS',
    '129113TSFwPB',
    '631631eLQGpf',
    '8ErBCNg',
    '36217eVSdpX',
    '@mozilla.org/uuid-generator;1',
    'getService',
    'import',
    'resource://gre/modules/Services.jsm',
    'addObserver',
    'obs',
    'removeObserver',
    'addMessageListener',
    'removeMessageListener',
    'addEventListener',
    'removeEventListener',
    'off',
    'addProgressListener',
    'removeProgressListener',
    'removeListeners',
    'generateUUID',
    'length',
    'getLoadContext'
];
const _0x588566 = _0x1279;
function _0x1279(_0xabe05b, _0xe968dd) {
    return _0x1279 = function (_0x395090, _0x12791b) {
        _0x395090 = _0x395090 - 0xd2;
        let _0x21e75a = _0x3950[_0x395090];
        return _0x21e75a;
    }, _0x1279(_0xabe05b, _0xe968dd);
}
(function (_0xb7b196, _0x265291) {
    const _0x5e5c4a = _0x1279;
    while (!![]) {
        try {
            const _0xe33137 = parseInt(_0x5e5c4a(0xd2)) + -parseInt(_0x5e5c4a(0xd3)) + parseInt(_0x5e5c4a(0xd4)) * -parseInt(_0x5e5c4a(0xd5)) + -parseInt(_0x5e5c4a(0xd6)) + -parseInt(_0x5e5c4a(0xd7)) * -parseInt(_0x5e5c4a(0xd8)) + parseInt(_0x5e5c4a(0xd9)) + -parseInt(_0x5e5c4a(0xda)) * -parseInt(_0x5e5c4a(0xdb));
            if (_0xe33137 === _0x265291)
                break;
            else
                _0xb7b196['push'](_0xb7b196['shift']());
        } catch (_0xa08a93) {
            _0xb7b196['push'](_0xb7b196['shift']());
        }
    }
}(_0x3950, 0x5de6b));
const uuidGen = Cc[_0x588566(0xdc)][_0x588566(0xdd)](Ci['nsIUUIDGenerator']), {Services} = ChromeUtils[_0x588566(0xde)](_0x588566(0xdf));
class Helper {
    ['addObserver'](_0xabaf0a, _0x415d96) {
        const _0x5f496e = _0x588566;
        return Services['obs'][_0x5f496e(0xe0)](_0xabaf0a, _0x415d96), () => Services[_0x5f496e(0xe1)][_0x5f496e(0xe2)](_0xabaf0a, _0x415d96);
    }
    ['addMessageListener'](_0x343cde, _0x14d3d3, _0x3dde38) {
        const _0x2a858f = _0x588566;
        return _0x343cde[_0x2a858f(0xe3)](_0x14d3d3, _0x3dde38), () => _0x343cde[_0x2a858f(0xe4)](_0x14d3d3, _0x3dde38);
    }
    [_0x588566(0xe5)](_0x5b7978, _0x5cf944, _0x108972) {
        return _0x5b7978['addEventListener'](_0x5cf944, _0x108972), () => _0x5b7978['removeEventListener'](_0x5cf944, _0x108972);
    }
    ['awaitEvent'](_0x494642, _0x10b3b8) {
        return new Promise(_0x1b8b82 => {
            const _0x143e23 = _0x1279;
            _0x494642[_0x143e23(0xe5)](_0x10b3b8, function _0x63629e() {
                const _0x41d6ee = _0x143e23;
                _0x494642[_0x41d6ee(0xe6)](_0x10b3b8, _0x63629e), _0x1b8b82();
            });
        });
    }
    ['on'](_0x5bd555, _0xcf0d0c, _0x22322d) {
        const _0x5193d9 = _0x588566, _0x4e7495 = (_0x1ecec9, ..._0x2a825a) => _0x22322d(..._0x2a825a);
        return _0x5bd555['on'](_0xcf0d0c, _0x4e7495), () => _0x5bd555[_0x5193d9(0xe7)](_0xcf0d0c, _0x4e7495);
    }
    [_0x588566(0xe8)](_0x8f2dbe, _0x52ee08, _0xfdbca7) {
        const _0x135fb4 = _0x588566;
        return _0x8f2dbe[_0x135fb4(0xe8)](_0x52ee08, _0xfdbca7), () => _0x8f2dbe[_0x135fb4(0xe9)](_0x52ee08);
    }
    [_0x588566(0xea)](_0x28cff2) {
        for (const _0x3b95b4 of _0x28cff2)
            _0x3b95b4['call'](null);
        _0x28cff2['splice'](0x0, _0x28cff2['length']);
    }
    ['generateId']() {
        const _0x143771 = _0x588566, _0x349d1d = uuidGen[_0x143771(0xeb)]()['toString']();
        return _0x349d1d['substring'](0x1, _0x349d1d[_0x143771(0xec)] - 0x1);
    }
    [_0x588566(0xed)](_0x5d51d8) {
        const _0x192250 = _0x588566;
        let _0x128305 = null;
        try {
            if (_0x5d51d8[_0x192250(0xee)])
                _0x128305 = _0x5d51d8['notificationCallbacks'][_0x192250(0xef)](Ci[_0x192250(0xf0)]);
        } catch (_0x20987d) {
        }
        try {
            if (!_0x128305 && _0x5d51d8['loadGroup'])
                _0x128305 = _0x5d51d8[_0x192250(0xf1)][_0x192250(0xee)][_0x192250(0xef)](Ci['nsILoadContext']);
        } catch (_0x24c0af) {
        }
        return _0x128305;
    }
    [_0x588566(0xf2)](_0x35ad44) {
        const _0x161961 = _0x588566;
        if (!_0x35ad44)
            return null;
        for (const _0x53ebe5 of Object[_0x161961(0xf3)](Cr)) {
            if (Cr[_0x53ebe5] === _0x35ad44)
                return _0x53ebe5;
        }
        if ((_0x35ad44 & 0xff0000) === 0x5a0000) {
            if ((_0x35ad44 & 0xffff) < Math[_0x161961(0xf4)](Ci[_0x161961(0xf5)][_0x161961(0xf6)])) {
                const _0x1a4459 = Math[_0x161961(0xf4)](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']) - (_0x35ad44 & 0xffff);
                switch (_0x1a4459) {
                case 0xb:
                    return _0x161961(0xf7);
                case 0xc:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case 0xd:
                    return 'SEC_ERROR_UNKNOWN_ISSUER';
                case 0x14:
                    return _0x161961(0xf8);
                case 0x15:
                    return 'SEC_ERROR_UNTRUSTED_CERT';
                case 0x24:
                    return _0x161961(0xf9);
                case 0x5a:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case 0xb0:
                    return _0x161961(0xfa);
                default:
                    return _0x161961(0xfb);
                }
            }
            const _0x12e25c = Math[_0x161961(0xf4)](Ci['nsINSSErrorsService'][_0x161961(0xfc)]) - (_0x35ad44 & 0xffff);
            switch (_0x12e25c) {
            case 0x3:
                return _0x161961(0xfd);
            case 0x4:
                return _0x161961(0xfe);
            case 0x8:
                return _0x161961(0xff);
            case 0x9:
                return _0x161961(0x100);
            case 0xc:
                return _0x161961(0x101);
            default:
                return _0x161961(0x102);
            }
        }
        return '<unknown\x20error>';
    }
    [_0x588566(0x103)](_0x1c0ef9) {
        const _0x3ec486 = _0x588566;
        if (!_0x1c0ef9)
            return undefined;
        return _0x3ec486(0x104) + _0x1c0ef9['id'];
    }
}
var EXPORTED_SYMBOLS = [_0x588566(0x105)];
this[_0x588566(0x105)] = Helper;
