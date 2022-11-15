const uuidGen = Cc['@mozilla.org/uuid-generator;1']['getService'](Ci['nsIUUIDGenerator']), {Services} = ChromeUtils['import']('resource://gre/modules/Services.jsm');
class Helper {
    ['addObserver'](_0x3fba89, _0x5e1836) {
        return Services['obs']['addObserver'](_0x3fba89, _0x5e1836), () => Services['obs']['removeObserver'](_0x3fba89, _0x5e1836);
    }
    ['addMessageListener'](_0xaf1e6f, _0x36b0b5, _0x1efd29) {
        return _0xaf1e6f['addMessageListener'](_0x36b0b5, _0x1efd29), () => _0xaf1e6f['removeMessageListener'](_0x36b0b5, _0x1efd29);
    }
    ['addEventListener'](_0x3c5573, _0x3fa5a1, _0x4aa65d) {
        return _0x3c5573['addEventListener'](_0x3fa5a1, _0x4aa65d), () => _0x3c5573['removeEventListener'](_0x3fa5a1, _0x4aa65d);
    }
    ['awaitEvent'](_0x38e13b, _0x3521ed) {
        const _0x4bc42f = {
            'vcNIz': function (_0x50da60) {
                return _0x50da60();
            }
        };
        return new Promise(_0xf356f0 => {
            const _0x90d735 = {
                'kfUIL': function (_0x46106f) {
                    return _0x4bc42f['vcNIz'](_0x46106f);
                }
            };
            _0x38e13b['addEventListener'](_0x3521ed, function _0x122716() {
                _0x38e13b['removeEventListener'](_0x3521ed, _0x122716), _0x90d735['kfUIL'](_0xf356f0);
            });
        });
    }
    ['on'](_0x316ac5, _0x5156ae, _0x3718f1) {
        const _0x1ed5be = (_0x1a79ff, ..._0x52bbdd) => _0x3718f1(..._0x52bbdd);
        return _0x316ac5['on'](_0x5156ae, _0x1ed5be), () => _0x316ac5['off'](_0x5156ae, _0x1ed5be);
    }
    ['addProgressListener'](_0x343fe0, _0x49a270, _0x43e2ae) {
        return _0x343fe0['addProgressListener'](_0x49a270, _0x43e2ae), () => _0x343fe0['removeProgressListener'](_0x49a270);
    }
    ['removeListeners'](_0x1aa7e9) {
        for (const _0x28c1c1 of _0x1aa7e9)
            _0x28c1c1['call'](null);
        _0x1aa7e9['splice'](0x0, _0x1aa7e9['length']);
    }
    ['generateId']() {
        const _0x2da90f = {
                'IDepI': function (_0x207e19, _0x4a3a5a) {
                    return _0x207e19 - _0x4a3a5a;
                }
            }, _0x189cc3 = uuidGen['generateUUID']()['toString']();
        return _0x189cc3['substring'](0x1, _0x2da90f['IDepI'](_0x189cc3['length'], 0x1));
    }
    ['getLoadContext'](_0x3f73e6) {
        let _0xdb7a42 = null;
        try {
            if (_0x3f73e6['notificationCallbacks'])
                _0xdb7a42 = _0x3f73e6['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x342cd7) {
        }
        try {
            if (!_0xdb7a42 && _0x3f73e6['loadGroup'])
                _0xdb7a42 = _0x3f73e6['loadGroup']['notificationCallbacks']['getInterface'](Ci['nsILoadContext']);
        } catch (_0x22f87d) {
        }
        return _0xdb7a42;
    }
    ['getNetworkErrorStatusText'](_0xf7aba4) {
        const _0x41721a = {
            'KnDgF': function (_0x80f0f4, _0x14f2ce) {
                return _0x80f0f4 === _0x14f2ce;
            },
            'FZEZu': function (_0x25e5f3, _0x23c13f) {
                return _0x25e5f3 === _0x23c13f;
            },
            'OEjSg': function (_0x535d15, _0x329530) {
                return _0x535d15 & _0x329530;
            },
            'HQuHb': function (_0x3d87a6, _0x442086) {
                return _0x3d87a6 < _0x442086;
            },
            'cdoVp': function (_0x507267, _0x44ce9b) {
                return _0x507267 & _0x44ce9b;
            },
            'YpzJQ': function (_0x279a1c, _0xc5eed3) {
                return _0x279a1c - _0xc5eed3;
            },
            'GSLCz': function (_0x5785b3, _0x6ffdb2) {
                return _0x5785b3 & _0x6ffdb2;
            },
            'aTeUy': 'SEC_ERROR_EXPIRED_CERTIFICATE',
            'vcxaW': 'SEC_ERROR_REVOKED_CERTIFICATE',
            'XxwQQ': 'SEC_ERROR_UNKNOWN_ISSUER',
            'mmJUf': 'SEC_ERROR_UNTRUSTED_ISSUER',
            'RKwjR': 'SEC_ERROR_UNTRUSTED_CERT',
            'jNMck': 'SEC_ERROR_CA_CERT_INVALID',
            'MjSsa': 'SEC_ERROR_INADEQUATE_KEY_USAGE',
            'UCZDS': 'SEC_ERROR_CERT_SIGNATURE_ALGORITHM_DISABLED',
            'pHlJo': 'SEC_ERROR_UNKNOWN',
            'VqvSp': 'SSL_ERROR_NO_CERTIFICATE',
            'rZYTh': 'SSL_ERROR_BAD_CERTIFICATE',
            'tLjCM': 'SSL_ERROR_UNSUPPORTED_CERTIFICATE_TYPE',
            'qOEbk': 'SSL_ERROR_UNSUPPORTED_VERSION',
            'krnXk': 'SSL_ERROR_BAD_CERT_DOMAIN',
            'NORBb': 'SSL_ERROR_UNKNOWN',
            'yGpzp': '<unknown\x20error>'
        };
        if (!_0xf7aba4)
            return null;
        for (const _0x10e814 of Object['keys'](Cr)) {
            if (_0x41721a['KnDgF'](Cr[_0x10e814], _0xf7aba4))
                return _0x10e814;
        }
        if (_0x41721a['FZEZu'](_0x41721a['OEjSg'](_0xf7aba4, 0xff0000), 0x5a0000)) {
            if (_0x41721a['HQuHb'](_0x41721a['cdoVp'](_0xf7aba4, 0xffff), Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']))) {
                const _0x5ddb86 = _0x41721a['YpzJQ'](Math['abs'](Ci['nsINSSErrorsService']['NSS_SEC_ERROR_BASE']), _0x41721a['GSLCz'](_0xf7aba4, 0xffff));
                switch (_0x5ddb86) {
                case 0xb:
                    return _0x41721a['aTeUy'];
                case 0xc:
                    return _0x41721a['vcxaW'];
                case 0xd:
                    return _0x41721a['XxwQQ'];
                case 0x14:
                    return _0x41721a['mmJUf'];
                case 0x15:
                    return _0x41721a['RKwjR'];
                case 0x24:
                    return _0x41721a['jNMck'];
                case 0x5a:
                    return _0x41721a['MjSsa'];
                case 0xb0:
                    return _0x41721a['UCZDS'];
                default:
                    return _0x41721a['pHlJo'];
                }
            }
            const _0x4f3c62 = _0x41721a['YpzJQ'](Math['abs'](Ci['nsINSSErrorsService']['NSS_SSL_ERROR_BASE']), _0x41721a['GSLCz'](_0xf7aba4, 0xffff));
            switch (_0x4f3c62) {
            case 0x3:
                return _0x41721a['VqvSp'];
            case 0x4:
                return _0x41721a['rZYTh'];
            case 0x8:
                return _0x41721a['tLjCM'];
            case 0x9:
                return _0x41721a['qOEbk'];
            case 0xc:
                return _0x41721a['krnXk'];
            default:
                return _0x41721a['NORBb'];
            }
        }
        return _0x41721a['yGpzp'];
    }
    ['browsingContextToFrameId'](_0x1d843f) {
        const _0x544130 = {
            'IeIDs': function (_0x43b70c, _0x5bdd1f) {
                return _0x43b70c + _0x5bdd1f;
            },
            'tWFJR': 'frame-'
        };
        if (!_0x1d843f)
            return undefined;
        return _0x544130['IeIDs'](_0x544130['tWFJR'], _0x1d843f['id']);
    }
}
var EXPORTED_SYMBOLS = ['Helper'];
this['Helper'] = Helper;
