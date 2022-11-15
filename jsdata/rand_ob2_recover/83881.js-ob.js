const uuidGen = Cc[_0x588566(220)][_0x588566(221)](Ci['nsIUUIDGenerator']), {Services} = ChromeUtils[_0x588566(222)](_0x588566(223));
class Helper {
    ['addObserver'](_0xabaf0a, _0x415d96) {
        const _0x5f496e = _0x588566;
        return Services['obs'][_0x5f496e(224)](_0xabaf0a, _0x415d96), () => Services[_0x5f496e(225)][_0x5f496e(226)](_0xabaf0a, _0x415d96);
    }
    ['addMessageListener'](_0x343cde, _0x14d3d3, _0x3dde38) {
        const _0x2a858f = _0x588566;
        return _0x343cde[_0x2a858f(227)](_0x14d3d3, _0x3dde38), () => _0x343cde[_0x2a858f(228)](_0x14d3d3, _0x3dde38);
    }
    [_0x588566(229)](_0x5b7978, _0x5cf944, _0x108972) {
        return _0x5b7978['addEventListener'](_0x5cf944, _0x108972), () => _0x5b7978['removeEventListener'](_0x5cf944, _0x108972);
    }
    ['awaitEvent'](_0x494642, _0x10b3b8) {
        return new Promise(_0x1b8b82 => {
            const _0x143e23 = _0x1279;
            _0x494642[_0x143e23(229)](_0x10b3b8, function _0x63629e() {
                const _0x41d6ee = _0x143e23;
                _0x494642[_0x41d6ee(230)](_0x10b3b8, _0x63629e), _0x1b8b82();
            });
        });
    }
    ['on'](_0x5bd555, _0xcf0d0c, _0x22322d) {
        const _0x5193d9 = _0x588566, _0x4e7495 = (_0x1ecec9, ..._0x2a825a) => _0x22322d(..._0x2a825a);
        return _0x5bd555['on'](_0xcf0d0c, _0x4e7495), () => _0x5bd555[_0x5193d9(231)](_0xcf0d0c, _0x4e7495);
    }
    [_0x588566(232)](_0x8f2dbe, _0x52ee08, _0xfdbca7) {
        const _0x135fb4 = _0x588566;
        return _0x8f2dbe[_0x135fb4(232)](_0x52ee08, _0xfdbca7), () => _0x8f2dbe[_0x135fb4(233)](_0x52ee08);
    }
    [_0x588566(234)](_0x28cff2) {
        for (const _0x3b95b4 of _0x28cff2)
            _0x3b95b4['call'](null);
        _0x28cff2['splice'](0, _0x28cff2['length']);
    }
    ['generateId']() {
        const _0x143771 = _0x588566, _0x349d1d = uuidGen[_0x143771(235)]()['toString']();
        return _0x349d1d['substring'](1, _0x349d1d[_0x143771(236)] - 1);
    }
    [_0x588566(237)](_0x5d51d8) {
        const _0x192250 = _0x588566;
        let _0x128305 = null;
        try {
            if (_0x5d51d8[_0x192250(238)])
                _0x128305 = _0x5d51d8['notificationCallbacks'][_0x192250(239)](Ci[_0x192250(240)]);
        } catch (_0x20987d) {
        }
        try {
            if (!_0x128305 && _0x5d51d8['loadGroup'])
                _0x128305 = _0x5d51d8[_0x192250(241)][_0x192250(238)][_0x192250(239)](Ci['nsILoadContext']);
        } catch (_0x24c0af) {
        }
        return _0x128305;
    }
    [_0x588566(242)](_0x35ad44) {
        const _0x161961 = _0x588566;
        if (!_0x35ad44)
            return null;
        for (const _0x53ebe5 of Object[_0x161961(243)](Cr)) {
            if (Cr[_0x53ebe5] === _0x35ad44)
                return _0x53ebe5;
        }
        if ((_0x35ad44 & 16711680) === 5898240) {
            if ((_0x35ad44 & 65535) < Math[_0x161961(244)](Ci[_0x161961(245)][_0x161961(246)])) {
                const _0x1a4459 = Math[_0x161961(244)](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']) - (_0x35ad44 & 65535);
                switch (_0x1a4459) {
                case 11:
                    return _0x161961(247);
                case 12:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case 13:
                    return 'SEC_ERROR_UNKNOWN_ISSUER';
                case 20:
                    return _0x161961(248);
                case 21:
                    return 'SEC_ERROR_UNTRUSTED_CERT';
                case 36:
                    return _0x161961(249);
                case 90:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case 176:
                    return _0x161961(250);
                default:
                    return _0x161961(251);
                }
            }
            const _0x12e25c = Math[_0x161961(244)](Ci['nsINSSErrorsService'][_0x161961(252)]) - (_0x35ad44 & 65535);
            switch (_0x12e25c) {
            case 3:
                return _0x161961(253);
            case 4:
                return _0x161961(254);
            case 8:
                return _0x161961(255);
            case 9:
                return _0x161961(256);
            case 12:
                return _0x161961(257);
            default:
                return _0x161961(258);
            }
        }
        return '<unknown error>';
    }
    [_0x588566(259)](_0x1c0ef9) {
        const _0x3ec486 = _0x588566;
        if (!_0x1c0ef9)
            return undefined;
        return _0x3ec486(260) + _0x1c0ef9['id'];
    }
}
var EXPORTED_SYMBOLS = [_0x588566(261)];
this[_0x588566(261)] = Helper;