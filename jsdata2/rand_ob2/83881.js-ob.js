const _0x2b20 = [
    'addMessageListener',
    'removeMessageListener',
    'awaitEvent',
    'addEventListener',
    'removeEventListener',
    'addProgressListener',
    'removeProgressListener',
    'call',
    'splice',
    'length',
    'generateId',
    'generateUUID',
    'toString',
    'substring',
    'getLoadContext',
    'notificationCallbacks',
    'getInterface',
    'loadGroup',
    'nsILoadContext',
    'getNetworkErrorStatusText',
    'nsINSSErrorsService',
    'NSS_SEC_ERROR_BASE',
    'abs',
    'SEC_ERROR_EXPIRED_CERTIFICATE',
    'SEC_ERROR_UNKNOWN_ISSUER',
    'SEC_ERROR_UNTRUSTED_ISSUER',
    'SEC_ERROR_UNTRUSTED_CERT',
    'SEC_ERROR_CA_CERT_INVALID',
    'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED',
    'SEC_ERROR_UNKNOWN',
    'NSS_SSL_ERROR_BASE',
    'SSL_ERROR_NO_CERTIFICATE',
    'SSL_ERROR_BAD_CERTIFICATE',
    'SSL_ERROR_BAD_CERT_DOMAIN',
    'SSL_ERROR_UNKNOWN',
    '<unknown\x20error>',
    'browsingContextToFrameId',
    'Helper',
    '1uLQnqy',
    '354934MInEVM',
    '24341nBClhC',
    '9mnGvHN',
    '777741akcOpD',
    '2IOuQgX',
    '140537nTZFXi',
    '880796RfWkuA',
    '720782FrkYqo',
    '1WskkcA',
    '1765251WXBCso',
    '1esMIBb',
    '@mozilla.org/uuid-generator;1',
    'getService',
    'nsIUUIDGenerator',
    'import',
    'addObserver',
    'obs',
    'removeObserver'
];
const _0x2121cf = _0x568a;
(function (_0x281f8c, _0x3d70ff) {
    const _0x67321c = _0x568a;
    while (!![]) {
        try {
            const _0x292a62 = parseInt(_0x67321c(0xfb)) * -parseInt(_0x67321c(0xfc)) + parseInt(_0x67321c(0xfd)) * parseInt(_0x67321c(0xfe)) + -parseInt(_0x67321c(0xff)) + parseInt(_0x67321c(0x100)) * parseInt(_0x67321c(0x101)) + -parseInt(_0x67321c(0x102)) + -parseInt(_0x67321c(0x103)) * -parseInt(_0x67321c(0x104)) + parseInt(_0x67321c(0x105)) * parseInt(_0x67321c(0x106));
            if (_0x292a62 === _0x3d70ff)
                break;
            else
                _0x281f8c['push'](_0x281f8c['shift']());
        } catch (_0x597aad) {
            _0x281f8c['push'](_0x281f8c['shift']());
        }
    }
}(_0x2b20, 0xed7a1));
const uuidGen = Cc[_0x2121cf(0x107)][_0x2121cf(0x108)](Ci[_0x2121cf(0x109)]), {Services} = ChromeUtils[_0x2121cf(0x10a)]('resource://gre/modules/Services.jsm');
function _0x568a(_0x1e2f09, _0x5ca392) {
    return _0x568a = function (_0x2b20c2, _0x568a39) {
        _0x2b20c2 = _0x2b20c2 - 0xfb;
        let _0x10f511 = _0x2b20[_0x2b20c2];
        return _0x10f511;
    }, _0x568a(_0x1e2f09, _0x5ca392);
}
class Helper {
    [_0x2121cf(0x10b)](_0x27a63b, _0x5f07eb) {
        const _0x477425 = _0x2121cf;
        return Services['obs'][_0x477425(0x10b)](_0x27a63b, _0x5f07eb), () => Services[_0x477425(0x10c)][_0x477425(0x10d)](_0x27a63b, _0x5f07eb);
    }
    [_0x2121cf(0x10e)](_0x54c793, _0x131d16, _0x22631d) {
        const _0x2dcb63 = _0x2121cf;
        return _0x54c793[_0x2dcb63(0x10e)](_0x131d16, _0x22631d), () => _0x54c793[_0x2dcb63(0x10f)](_0x131d16, _0x22631d);
    }
    ['addEventListener'](_0x5299da, _0x5828da, _0x12f3b1) {
        return _0x5299da['addEventListener'](_0x5828da, _0x12f3b1), () => _0x5299da['removeEventListener'](_0x5828da, _0x12f3b1);
    }
    [_0x2121cf(0x110)](_0x129fff, _0x33b149) {
        return new Promise(_0x5c83e1 => {
            const _0x2eac3a = _0x568a;
            _0x129fff[_0x2eac3a(0x111)](_0x33b149, function _0x2092e9() {
                const _0x57bac6 = _0x2eac3a;
                _0x129fff[_0x57bac6(0x112)](_0x33b149, _0x2092e9), _0x5c83e1();
            });
        });
    }
    ['on'](_0x237593, _0x43c0f9, _0x2bf474) {
        const _0x3a47fe = (_0xb3b066, ..._0x25c3cd) => _0x2bf474(..._0x25c3cd);
        return _0x237593['on'](_0x43c0f9, _0x3a47fe), () => _0x237593['off'](_0x43c0f9, _0x3a47fe);
    }
    [_0x2121cf(0x113)](_0x3cee4f, _0x1dc75e, _0x53c463) {
        const _0x357ac0 = _0x2121cf;
        return _0x3cee4f[_0x357ac0(0x113)](_0x1dc75e, _0x53c463), () => _0x3cee4f[_0x357ac0(0x114)](_0x1dc75e);
    }
    ['removeListeners'](_0x3c054c) {
        const _0x47644a = _0x2121cf;
        for (const _0x16f03b of _0x3c054c)
            _0x16f03b[_0x47644a(0x115)](null);
        _0x3c054c[_0x47644a(0x116)](0x0, _0x3c054c[_0x47644a(0x117)]);
    }
    [_0x2121cf(0x118)]() {
        const _0x86da99 = _0x2121cf, _0x2ba8a7 = uuidGen[_0x86da99(0x119)]()[_0x86da99(0x11a)]();
        return _0x2ba8a7[_0x86da99(0x11b)](0x1, _0x2ba8a7[_0x86da99(0x117)] - 0x1);
    }
    [_0x2121cf(0x11c)](_0x40ea72) {
        const _0x4d2ff4 = _0x2121cf;
        let _0x10b908 = null;
        try {
            if (_0x40ea72[_0x4d2ff4(0x11d)])
                _0x10b908 = _0x40ea72['notificationCallbacks'][_0x4d2ff4(0x11e)](Ci['nsILoadContext']);
        } catch (_0x566ce3) {
        }
        try {
            if (!_0x10b908 && _0x40ea72['loadGroup'])
                _0x10b908 = _0x40ea72[_0x4d2ff4(0x11f)][_0x4d2ff4(0x11d)][_0x4d2ff4(0x11e)](Ci[_0x4d2ff4(0x120)]);
        } catch (_0x15607e) {
        }
        return _0x10b908;
    }
    [_0x2121cf(0x121)](_0x540726) {
        const _0x46f1e8 = _0x2121cf;
        if (!_0x540726)
            return null;
        for (const _0x5761c6 of Object['keys'](Cr)) {
            if (Cr[_0x5761c6] === _0x540726)
                return _0x5761c6;
        }
        if ((_0x540726 & 0xff0000) === 0x5a0000) {
            if ((_0x540726 & 0xffff) < Math['abs'](Ci[_0x46f1e8(0x122)][_0x46f1e8(0x123)])) {
                const _0x5121a5 = Math[_0x46f1e8(0x124)](Ci[_0x46f1e8(0x122)][_0x46f1e8(0x123)]) - (_0x540726 & 0xffff);
                switch (_0x5121a5) {
                case 0xb:
                    return _0x46f1e8(0x125);
                case 0xc:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case 0xd:
                    return _0x46f1e8(0x126);
                case 0x14:
                    return _0x46f1e8(0x127);
                case 0x15:
                    return _0x46f1e8(0x128);
                case 0x24:
                    return _0x46f1e8(0x129);
                case 0x5a:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case 0xb0:
                    return _0x46f1e8(0x12a);
                default:
                    return _0x46f1e8(0x12b);
                }
            }
            const _0x53bea1 = Math[_0x46f1e8(0x124)](Ci[_0x46f1e8(0x122)][_0x46f1e8(0x12c)]) - (_0x540726 & 0xffff);
            switch (_0x53bea1) {
            case 0x3:
                return _0x46f1e8(0x12d);
            case 0x4:
                return _0x46f1e8(0x12e);
            case 0x8:
                return 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE';
            case 0x9:
                return 'SSL_ERROR_UNSUPPORTED_VERSION';
            case 0xc:
                return _0x46f1e8(0x12f);
            default:
                return _0x46f1e8(0x130);
            }
        }
        return _0x46f1e8(0x131);
    }
    [_0x2121cf(0x132)](_0x3772d9) {
        if (!_0x3772d9)
            return undefined;
        return 'frame-' + _0x3772d9['id'];
    }
}
var EXPORTED_SYMBOLS = [_0x2121cf(0x133)];
this[_0x2121cf(0x133)] = Helper;
