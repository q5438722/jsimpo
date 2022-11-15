const uuidGen = Cc['@mozilla.org/uuid-generator;1']['getService'](Ci['nsIUUIDGenerator']), {Services} = ChromeUtils['import']('resource://gre/modules/Services.jsm');
class Helper {
    ['addObserver'](_0x3b995c, _0x7d7c12) {
        return Services['obs']['addObserver'](_0x3b995c, _0x7d7c12), () => Services['obs']['removeObserver'](_0x3b995c, _0x7d7c12);
    }
    ['addMessageListener'](_0x440078, _0x408c4e, _0x6de4ed) {
        return _0x440078['addMessageListener'](_0x408c4e, _0x6de4ed), () => _0x440078['removeMessageListener'](_0x408c4e, _0x6de4ed);
    }
    ['addEventListener'](_0x3726f4, _0x30f77c, _0x47a0d7) {
        return _0x3726f4['addEventListener'](_0x30f77c, _0x47a0d7), () => _0x3726f4['removeEventListener'](_0x30f77c, _0x47a0d7);
    }
    ['awaitEvent'](_0x59741d, _0x13bba6) {
        return new Promise(_0x90361c => {
            _0x59741d['addEventListener'](_0x13bba6, function _0x496725() {
                _0x59741d['removeEventListener'](_0x13bba6, _0x496725), _0x90361c();
            });
        });
    }
    ['on'](_0x5853fc, _0x1aa56d, _0x4e942d) {
        const _0x5132e6 = (_0x38d49c, ..._0x246959) => _0x4e942d(..._0x246959);
        return _0x5853fc['on'](_0x1aa56d, _0x5132e6), () => _0x5853fc['off'](_0x1aa56d, _0x5132e6);
    }
    ['addProgressListener'](_0x3c50ad, _0x15853f, _0xd46b5f) {
        return _0x3c50ad['addProgressListener'](_0x15853f, _0xd46b5f), () => _0x3c50ad['removeProgressListener'](_0x15853f);
    }
    ['removeListeners'](_0x4294d8) {
        for (const _0x409149 of _0x4294d8)
            _0x409149['call'](null);
        _0x4294d8['splice'](0xd62 + 0x2 * -0xc09 + 0xab0, _0x4294d8['length']);
    }
    ['generateId']() {
        const _0x175c65 = uuidGen['generateUUID']()['toString']();
        return _0x175c65['substring'](0x11ae * 0x1 + 0x14e * 0x10 + -0x1 * 0x268d, _0x175c65['length'] - (-0x1 * 0x1a53 + 0xbe8 * 0x2 + 0x1 * 0x284));
    }
    ['getLoadContext'](_0x174cc2) {
        let _0x5492d8 = null;
        try {
            if (_0x174cc2['notificationCallbacks'])
                _0x5492d8 = _0x174cc2['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x545c8f) {
        }
        try {
            if (!_0x5492d8 && _0x174cc2['loadGroup'])
                _0x5492d8 = _0x174cc2['loadGroup']['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x38df9e) {
        }
        return _0x5492d8;
    }
    ['getNetworkErrorStatusText'](_0x177abc) {
        if (!_0x177abc)
            return null;
        for (const _0x34f133 of Object['keys'](Cr)) {
            if (Cr[_0x34f133] === _0x177abc)
                return _0x34f133;
        }
        if ((_0x177abc & 0x12ac6 * 0x86 + -0xbeb639 + 0x1215295) === -0x1d * 0x21563 + -0x1e6923 + 0x26 * 0x4c23f) {
            if ((_0x177abc & -0x53c5 + 0x76aa + -0x1 * -0xdd1a) < Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE'])) {
                const _0x54d1d = Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']) - (_0x177abc & 0x818f * -0x1 + -0x6366 + -0x2f5 * -0xa4);
                switch (_0x54d1d) {
                case 0x679 + -0xe49 + 0x1 * 0x7db:
                    return 'SEC_ERROR_EXPIRED_CERTIFICATE';
                case 0x3 * -0x399 + -0xee9 + 0x19c0:
                    return 'SEC_ERROR_REVOKED_CERTIFICATE';
                case -0x25e2 + 0x1 * 0x46d + 0x1 * 0x2182:
                    return 'SEC_ERROR_UNKNOWN_ISSUER';
                case -0x1 * -0xa8d + -0x83d * 0x3 + 0xe3e:
                    return 'SEC_ERROR_UNTRUSTED_ISSUER';
                case 0x1f96 + -0x9cc + -0x15b5:
                    return 'SEC_ERROR_UNTRUSTED_CERT';
                case -0x822 * -0x2 + 0x1 * -0xe37 + -0x1e9:
                    return 'SEC_ERROR_CA_CERT_INVALID';
                case -0x89c + -0x2 * -0x8ab + -0x10 * 0x86:
                    return 'SEC_ERROR_INADEQUATE_KEY_USAGE';
                case -0x193b + 0x175b + -0x2 * -0x148:
                    return 'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED';
                default:
                    return 'SEC_ERROR_UNKNOWN';
                }
            }
            const _0x6a3062 = Math['abs'](Ci['nsINSSErrorsService']['NSS_SSL_ERROR_BASE']) - (_0x177abc & -0x172f5 + 0x1eac4 + -0x1 * -0x8830);
            switch (_0x6a3062) {
            case -0x1655 + 0x1589 + -0x17 * -0x9:
                return 'SSL_ERROR_NO_CERTIFICATE';
            case 0x3d * -0x20 + -0x162d * -0x1 + -0xe89:
                return 'SSL_ERROR_BAD_CERTIFICATE';
            case -0x1c45 + 0xed * -0x17 + 0x3198:
                return 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE';
            case -0x21d3 + 0x59 * 0x6b + -0x1 * 0x357:
                return 'SSL_ERROR_UNSUPPORTED_VERSION';
            case 0x6b * 0x33 + 0x2 * -0x12fd + 0x2f * 0x5b:
                return 'SSL_ERROR_BAD_CERT_DOMAIN';
            default:
                return 'SSL_ERROR_UNKNOWN';
            }
        }
        return '<unknown\x20error>';
    }
    ['browsingContextToFrameId'](_0x4bc949) {
        if (!_0x4bc949)
            return undefined;
        return 'frame-' + _0x4bc949['id'];
    }
}
var EXPORTED_SYMBOLS = ['Helper'];
this['Helper'] = Helper;
