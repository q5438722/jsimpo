const uuidGen = Cc['@mozilla.org/uuid-generator;1']['getService'](Ci['nsIUUIDGenerator']);
const {Services} = ChromeUtils['import']('resource://gre/modules/Services.jsm');
class Helper {
    ['addObserver'](_0x47c3e9, _0x5daca4) {
        Services['obs']['addObserver'](_0x47c3e9, _0x5daca4);
        return () => Services['obs']['removeObserver'](_0x47c3e9, _0x5daca4);
    }
    ['addMessageListener'](_0xf1da80, _0x52f38f, _0x9b1e7e) {
        _0xf1da80['addMessageListener'](_0x52f38f, _0x9b1e7e);
        return () => _0xf1da80['removeMessageListener'](_0x52f38f, _0x9b1e7e);
    }
    ['addEventListener'](_0x2f13c1, _0x1e706c, _0x5e514c) {
        _0x2f13c1['addEventListener'](_0x1e706c, _0x5e514c);
        return () => _0x2f13c1['removeEventListener'](_0x1e706c, _0x5e514c);
    }
    ['awaitEvent'](_0x3548b0, _0x5baa19) {
        return new Promise(_0x1b724d => {
            if ('JAAuc' === 'VHCoI') {
                if (!status)
                    return null;
                for (const _0x31cddc of Object['keys'](Cr)) {
                    if (Cr[_0x31cddc] === status)
                        return _0x31cddc;
                }
                if ((status & 16711680) === 5898240) {
                    if ((status & 65535) < Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE'])) {
                        const _0x45332b = Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']) - (status & 65535);
                        switch (_0x45332b) {
                        case 11:
                            return 'SEC_ERROR_EXPIRED_CERTIFICATE';
                        case 12:
                            return 'SEC_ERROR_REVOKED_CERTIFICATE';
                        case 13:
                            return 'SEC_ERROR_UNKNOWN_ISSUER';
                        case 20:
                            return 'SEC_ERROR_UNTRUSTED_ISSUER';
                        case 21:
                            return 'SEC_ERROR_UNTRUSTED_CERT';
                        case 36:
                            return 'SEC_ERROR_CA_CERT_INVALID';
                        case 90:
                            return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                        case 176:
                            return 'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED';
                        default:
                            return 'SEC_ERROR_UNKNOWN';
                        }
                    }
                    const _0x4c6081 = Math['abs'](Ci['nsINSSErrorsService']['NSS_SSL_ERROR_BASE']) - (status & 65535);
                    switch (_0x4c6081) {
                    case 3:
                        return 'SSL_ERROR_NO_CERTIFICATE';
                    case 4:
                        return 'SSL_ERROR_BAD_CERTIFICATE';
                    case 8:
                        return 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE';
                    case 9:
                        return 'SSL_ERROR_UNSUPPORTED_VERSION';
                    case 12:
                        return 'SSL_ERROR_BAD_CERT_DOMAIN';
                    default:
                        return 'SSL_ERROR_UNKNOWN';
                    }
                }
                return '<unknown error>';
            } else {
                _0x3548b0['addEventListener'](_0x5baa19, function listener() {
                    if ('xpzkR' === 'xpzkR') {
                        _0x3548b0['removeEventListener'](_0x5baa19, listener);
                        _0x1b724d();
                    } else {
                        Services['obs']['addObserver'](handler, topic);
                        return () => Services['obs']['removeObserver'](handler, topic);
                    }
                });
            }
        });
    }
    ['on'](_0xea0d80, _0xb340e8, _0x3db03d) {
        const _0x5a85f0 = (_0x3f37be, ..._0x5f1a58) => _0x3db03d(..._0x5f1a58);
        _0xea0d80['on'](_0xb340e8, _0x5a85f0);
        return () => _0xea0d80['off'](_0xb340e8, _0x5a85f0);
    }
    ['addProgressListener'](_0x46ab8a, _0x2c8efc, _0x36a1f9) {
        _0x46ab8a['addProgressListener'](_0x2c8efc, _0x36a1f9);
        return () => _0x46ab8a['removeProgressListener'](_0x2c8efc);
    }
    ['removeListeners'](_0x63a82a) {
        for (const _0x8c66e0 of _0x63a82a)
            _0x8c66e0['call'](null);
        _0x63a82a['splice'](0, _0x63a82a['length']);
    }
    ['generateId']() {
        const _0x388641 = uuidGen['generateUUID']()['toString']();
        return _0x388641['substring'](1, _0x388641['length'] - 1);
    }
    ['getLoadContext'](_0x16df84) {
        let _0x3180de = null;
        try {
            if (_0x16df84['notificationCallbacks'])
                _0x3180de = _0x16df84['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x3c2d27) {
        }
        try {
            if (!_0x3180de && _0x16df84['loadGroup'])
                _0x3180de = _0x16df84['loadGroup']['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x543a31) {
        }
        return _0x3180de;
    }
    ['getNetworkErrorStatusText'](_0x1aa451) {
        if (!_0x1aa451)
            return null;
        for (const _0x225be5 of Object['keys'](Cr)) {
            if ('HSFBM' === 'SpTCY') {
                const _0x598a6f = uuidGen['generateUUID']()['toString']();
                return _0x598a6f['substring'](1, _0x598a6f['length'] - 1);
            } else {
                if (Cr[_0x225be5] === _0x1aa451)
                    return _0x225be5;
            }
        }
        if ((_0x1aa451 & 16711680) === 5898240) {
            if ((_0x1aa451 & 65535) < Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE'])) {
                const _0x338650 = Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']) - (_0x1aa451 & 65535);
                switch (_0x338650) {
                case 11:
                    return 'SEC_ERROR_EXPIRED_CERTIFICATE';
                case 12:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case 13:
                    return 'SEC_ERROR_UNKNOWN_ISSUER';
                case 20:
                    return 'SEC_ERROR_UNTRUSTED_ISSUER';
                case 21:
                    return 'SEC_ERROR_UNTRUSTED_CERT';
                case 36:
                    return 'SEC_ERROR_CA_CERT_INVALID';
                case 90:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case 176:
                    return 'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED';
                default:
                    return 'SEC_ERROR_UNKNOWN';
                }
            }
            const _0x15e85b = Math['abs'](Ci['nsINSSErrorsService']['NSS_SSL_ERROR_BASE']) - (_0x1aa451 & 65535);
            switch (_0x15e85b) {
            case 3:
                return 'SSL_ERROR_NO_CERTIFICATE';
            case 4:
                return 'SSL_ERROR_BAD_CERTIFICATE';
            case 8:
                return 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE';
            case 9:
                return 'SSL_ERROR_UNSUPPORTED_VERSION';
            case 12:
                return 'SSL_ERROR_BAD_CERT_DOMAIN';
            default:
                return 'SSL_ERROR_UNKNOWN';
            }
        }
        return '<unknown error>';
    }
    ['browsingContextToFrameId'](_0x1d4e82) {
        if (!_0x1d4e82)
            return undefined;
        return 'frame-' + _0x1d4e82['id'];
    }
}
var EXPORTED_SYMBOLS = ['Helper'];
this['Helper'] = Helper;