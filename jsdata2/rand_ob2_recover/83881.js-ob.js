const uuidGen = Cc[_0x2121cf(263)][_0x2121cf(264)](Ci[_0x2121cf(265)]), {Services} = ChromeUtils[_0x2121cf(266)]('resource://gre/modules/Services.jsm');
function _0x568a(_0x1e2f09, _0x5ca392) {
    return _0x568a = function (_0x2b20c2, _0x568a39) {
        _0x2b20c2 = _0x2b20c2 - 251;
        let _0x10f511 = _0x2b20[_0x2b20c2];
        return _0x10f511;
    }, _0x568a(_0x1e2f09, _0x5ca392);
}
class Helper {
    [_0x2121cf(267)](_0x27a63b, _0x5f07eb) {
        const _0x477425 = _0x2121cf;
        return Services['obs'][_0x477425(267)](_0x27a63b, _0x5f07eb), () => Services[_0x477425(268)][_0x477425(269)](_0x27a63b, _0x5f07eb);
    }
    [_0x2121cf(270)](_0x54c793, _0x131d16, _0x22631d) {
        const _0x2dcb63 = _0x2121cf;
        return _0x54c793[_0x2dcb63(270)](_0x131d16, _0x22631d), () => _0x54c793[_0x2dcb63(271)](_0x131d16, _0x22631d);
    }
    ['addEventListener'](_0x5299da, _0x5828da, _0x12f3b1) {
        return _0x5299da['addEventListener'](_0x5828da, _0x12f3b1), () => _0x5299da['removeEventListener'](_0x5828da, _0x12f3b1);
    }
    [_0x2121cf(272)](_0x129fff, _0x33b149) {
        return new Promise(_0x5c83e1 => {
            const _0x2eac3a = _0x568a;
            _0x129fff[_0x2eac3a(273)](_0x33b149, function _0x2092e9() {
                const _0x57bac6 = _0x2eac3a;
                _0x129fff[_0x57bac6(274)](_0x33b149, _0x2092e9), _0x5c83e1();
            });
        });
    }
    ['on'](_0x237593, _0x43c0f9, _0x2bf474) {
        const _0x3a47fe = (_0xb3b066, ..._0x25c3cd) => _0x2bf474(..._0x25c3cd);
        return _0x237593['on'](_0x43c0f9, _0x3a47fe), () => _0x237593['off'](_0x43c0f9, _0x3a47fe);
    }
    [_0x2121cf(275)](_0x3cee4f, _0x1dc75e, _0x53c463) {
        const _0x357ac0 = _0x2121cf;
        return _0x3cee4f[_0x357ac0(275)](_0x1dc75e, _0x53c463), () => _0x3cee4f[_0x357ac0(276)](_0x1dc75e);
    }
    ['removeListeners'](_0x3c054c) {
        const _0x47644a = _0x2121cf;
        for (const _0x16f03b of _0x3c054c)
            _0x16f03b[_0x47644a(277)](null);
        _0x3c054c[_0x47644a(278)](0, _0x3c054c[_0x47644a(279)]);
    }
    [_0x2121cf(280)]() {
        const _0x86da99 = _0x2121cf, _0x2ba8a7 = uuidGen[_0x86da99(281)]()[_0x86da99(282)]();
        return _0x2ba8a7[_0x86da99(283)](1, _0x2ba8a7[_0x86da99(279)] - 1);
    }
    [_0x2121cf(284)](_0x40ea72) {
        const _0x4d2ff4 = _0x2121cf;
        let _0x10b908 = null;
        try {
            if (_0x40ea72[_0x4d2ff4(285)])
                _0x10b908 = _0x40ea72['notificationCallbacks'][_0x4d2ff4(286)](Ci['nsILoadContext']);
        } catch (_0x566ce3) {
        }
        try {
            if (!_0x10b908 && _0x40ea72['loadGroup'])
                _0x10b908 = _0x40ea72[_0x4d2ff4(287)][_0x4d2ff4(285)][_0x4d2ff4(286)](Ci[_0x4d2ff4(288)]);
        } catch (_0x15607e) {
        }
        return _0x10b908;
    }
    [_0x2121cf(289)](_0x540726) {
        const _0x46f1e8 = _0x2121cf;
        if (!_0x540726)
            return null;
        for (const _0x5761c6 of Object['keys'](Cr)) {
            if (Cr[_0x5761c6] === _0x540726)
                return _0x5761c6;
        }
        if ((_0x540726 & 16711680) === 5898240) {
            if ((_0x540726 & 65535) < Math['abs'](Ci[_0x46f1e8(290)][_0x46f1e8(291)])) {
                const _0x5121a5 = Math[_0x46f1e8(292)](Ci[_0x46f1e8(290)][_0x46f1e8(291)]) - (_0x540726 & 65535);
                switch (_0x5121a5) {
                case 11:
                    return _0x46f1e8(293);
                case 12:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case 13:
                    return _0x46f1e8(294);
                case 20:
                    return _0x46f1e8(295);
                case 21:
                    return _0x46f1e8(296);
                case 36:
                    return _0x46f1e8(297);
                case 90:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case 176:
                    return _0x46f1e8(298);
                default:
                    return _0x46f1e8(299);
                }
            }
            const _0x53bea1 = Math[_0x46f1e8(292)](Ci[_0x46f1e8(290)][_0x46f1e8(300)]) - (_0x540726 & 65535);
            switch (_0x53bea1) {
            case 3:
                return _0x46f1e8(301);
            case 4:
                return _0x46f1e8(302);
            case 8:
                return 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE';
            case 9:
                return 'SSL_ERROR_UNSUPPORTED_VERSION';
            case 12:
                return _0x46f1e8(303);
            default:
                return _0x46f1e8(304);
            }
        }
        return _0x46f1e8(305);
    }
    [_0x2121cf(306)](_0x3772d9) {
        if (!_0x3772d9)
            return undefined;
        return 'frame-' + _0x3772d9['id'];
    }
}
var EXPORTED_SYMBOLS = [_0x2121cf(307)];
this[_0x2121cf(307)] = Helper;