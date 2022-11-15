const _0x3f3b = [
    'GET',
    'dns',
    'srdON',
    'peerNotFoundUsingDNS',
    'QIuzM',
    'https',
    'http',
    'jUSdQ',
    'search:\x20peerDomain=',
    '\x20srv=_rocketchat._https.',
    '_rocketchat._https.',
    'Dvntu',
    'length',
    '\x20srv=_rocketchat._http.',
    'zBNLG',
    '\x20srv=_rocketchat._tcp.',
    '_rocketchat._tcp.',
    '\x20txt=rocketchat-tcp-protocol.',
    'RpuKm',
    'join',
    'nFDKf',
    'HpVAG',
    'lvSMn',
    'gSKPj',
    '\x20srvEntry=',
    'stringify',
    'rocketchat-public-key.',
    '\x20-\x20SRV\x20entry\x20found',
    'kRLxQ',
    'search:\x20found\x20peerDomain=',
    'name',
    'port',
    '\x20protocol=',
    '://',
    '671285tEhTem',
    '799847wQHeDJ',
    '603135eHUSBF',
    '193091CqLbuj',
    '676022lXLazY',
    '886836yEyoJk',
    '298049jlJFkF',
    'wrapAsync',
    'resolveSrv',
    'resolveTxt',
    'NODE_ENV',
    'development',
    'http://localhost:8080',
    'https://hub.rocket.chat',
    'POST',
    'dns.registerWithHub',
    'NUHTW',
    '/api/v1/peers',
    'error',
    'njGjH',
    'debug',
    'searchHub:\x20peerDomain=',
    'KFpai'
];
const _0x4eca80 = _0x4de4;
(function (_0x57aa4d, _0xe75f1f) {
    const _0x1ab2a6 = _0x4de4;
    while (!![]) {
        try {
            const _0x37888c = parseInt(_0x1ab2a6(0x8f)) + parseInt(_0x1ab2a6(0x90)) + -parseInt(_0x1ab2a6(0x91)) + -parseInt(_0x1ab2a6(0x92)) + -parseInt(_0x1ab2a6(0x93)) + parseInt(_0x1ab2a6(0x94)) + -parseInt(_0x1ab2a6(0x95));
            if (_0x37888c === _0xe75f1f)
                break;
            else
                _0x57aa4d['push'](_0x57aa4d['shift']());
        } catch (_0x9ff92e) {
            _0x57aa4d['push'](_0x57aa4d['shift']());
        }
    }
}(_0x3f3b, 0x7ab0a + 0xa4175 + -0x8f4e8));
import _0x3db5a1 from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x433b2f from 'mem';
import * as _0x5c9638 from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
function _0x4de4(_0x441192, _0x94445f) {
    return _0x4de4 = function (_0x19bddb, _0x29d7e5) {
        _0x19bddb = _0x19bddb - (0x269 * 0xd + 0x2649 + 0x3 * -0x1705);
        let _0x319d9e = _0x3f3b[_0x19bddb];
        return _0x319d9e;
    }, _0x4de4(_0x441192, _0x94445f);
}
const dnsResolveSRV = Meteor[_0x4eca80(0x96)](_0x3db5a1[_0x4eca80(0x97)]), dnsResolveTXT = Meteor['wrapAsync'](_0x3db5a1[_0x4eca80(0x98)]), cacheMaxAge = 0x84ef7 + 0x3996a6 + -0xaf71d, memoizedDnsResolveSRV = _0x433b2f(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x433b2f(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process['env'][_0x4eca80(0x99)] === _0x4eca80(0x9a) ? _0x4eca80(0x9b) : _0x4eca80(0x9c);
export function registerWithHub(_0x3a70b6, _0x5c4cd7, _0x4684cf) {
    const _0x3291d3 = _0x4eca80, _0x5817d8 = {
            'NUHTW': _0x3291d3(0x9d),
            'njGjH': _0x3291d3(0x9e)
        }, _0x1df5b0 = {
            'domain': _0x3a70b6,
            'url': _0x5c4cd7,
            'public_key': _0x4684cf
        };
    try {
        return federationRequest(_0x5817d8[_0x3291d3(0x9f)], hubUrl + _0x3291d3(0xa0), _0x1df5b0), !![];
    } catch (_0x20c995) {
        logger['dns'][_0x3291d3(0xa1)](_0x20c995);
        throw _0x5c9638['peerCouldNotBeRegisteredWithHub'](_0x5817d8[_0x3291d3(0xa2)]);
    }
}
export function searchHub(_0x30068b) {
    const _0x22911 = _0x4eca80, _0x240318 = {
            'KFpai': function (_0xf63fb4, _0x38170c, _0x3dace8) {
                return _0xf63fb4(_0x38170c, _0x3dace8);
            },
            'srdON': 'dns.registerWithHub',
            'QIuzM': 'dns.searchHub'
        };
    try {
        logger['dns'][_0x22911(0xa3)](_0x22911(0xa4) + _0x30068b);
        const {
            data: {peer: _0x1c2770}
        } = _0x240318[_0x22911(0xa5)](federationRequest, _0x22911(0xa6), hubUrl + '/api/v1/peers?search=' + _0x30068b);
        if (!_0x1c2770) {
            logger[_0x22911(0xa7)][_0x22911(0xa3)]('searchHub:\x20could\x20not\x20find\x20peerDomain=' + _0x30068b);
            throw _0x5c9638['peerCouldNotBeRegisteredWithHub'](_0x240318[_0x22911(0xa8)]);
        }
        const {
            url: _0x28e22e,
            public_key: _0x405fbd
        } = _0x1c2770;
        return logger[_0x22911(0xa7)][_0x22911(0xa3)]('searchHub:\x20found\x20peerDomain=' + _0x30068b + '\x20url=' + _0x28e22e), {
            'url': _0x28e22e,
            'peerDomain': _0x30068b,
            'publicKey': _0x405fbd
        };
    } catch (_0x467e23) {
        logger['dns'][_0x22911(0xa1)](_0x467e23);
        throw _0x5c9638[_0x22911(0xa9)](_0x240318[_0x22911(0xaa)]);
    }
}
export function search(_0x314dc1) {
    const _0x2eba93 = _0x4eca80, _0xf9ca43 = {
            'jUSdQ': 'dns.search',
            'ElMmO': function (_0x40a901, _0x49d611) {
                return _0x40a901(_0x49d611);
            },
            'Dvntu': _0x2eba93(0xab),
            'zBNLG': function (_0x5ec8b7, _0x2faaad) {
                return _0x5ec8b7(_0x2faaad);
            },
            'RpuKm': function (_0x40103d, _0x37c5e4) {
                return _0x40103d(_0x37c5e4);
            },
            'nFDKf': function (_0x120171, _0x29834e) {
                return _0x120171 !== _0x29834e;
            },
            'HpVAG': _0x2eba93(0xac),
            'lvSMn': function (_0x5d27c7, _0x30fd06) {
                return _0x5d27c7 !== _0x30fd06;
            },
            'gSKPj': function (_0x3925e9, _0x3cbf24) {
                return _0x3925e9 || _0x3cbf24;
            },
            'kRLxQ': function (_0x2e11ec, _0x162a0a) {
                return _0x2e11ec(_0x162a0a);
            }
        };
    if (!isFederationEnabled())
        throw _0x5c9638['disabled'](_0xf9ca43[_0x2eba93(0xad)]);
    logger['dns'][_0x2eba93(0xa3)](_0x2eba93(0xae) + _0x314dc1);
    let _0x28a14d = [], _0x21faf6 = '';
    try {
        logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)](_0x2eba93(0xae) + _0x314dc1 + _0x2eba93(0xaf) + _0x314dc1), _0x28a14d = _0xf9ca43['ElMmO'](memoizedDnsResolveSRV, _0x2eba93(0xb0) + _0x314dc1), _0x21faf6 = _0xf9ca43[_0x2eba93(0xb1)];
    } catch (_0x1201d2) {
    }
    if (!_0x28a14d[_0x2eba93(0xb2)])
        try {
            logger[_0x2eba93(0xa7)]['debug'](_0x2eba93(0xae) + _0x314dc1 + _0x2eba93(0xb3) + _0x314dc1), _0x28a14d = _0xf9ca43[_0x2eba93(0xb4)](memoizedDnsResolveSRV, '_rocketchat._http.' + _0x314dc1), _0x21faf6 = 'http';
        } catch (_0x5f3886) {
        }
    if (!_0x28a14d[_0x2eba93(0xb2)])
        try {
            logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)](_0x2eba93(0xae) + _0x314dc1 + _0x2eba93(0xb5) + _0x314dc1), _0x28a14d = memoizedDnsResolveSRV(_0x2eba93(0xb6) + _0x314dc1), _0x21faf6 = _0x2eba93(0xab), logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)](_0x2eba93(0xae) + _0x314dc1 + _0x2eba93(0xb7) + _0x314dc1), _0x21faf6 = _0xf9ca43[_0x2eba93(0xb8)](memoizedDnsResolveSRV, 'rocketchat-tcp-protocol.' + _0x314dc1), _0x21faf6 = _0x21faf6[0x1758 + 0x2293 * 0x1 + -0x39eb][_0x2eba93(0xb9)](''), _0xf9ca43[_0x2eba93(0xba)](_0x21faf6, _0xf9ca43[_0x2eba93(0xbb)]) && _0xf9ca43[_0x2eba93(0xbc)](_0x21faf6, _0x2eba93(0xab)) && (_0x21faf6 = null);
        } catch (_0x598757) {
        }
    const [_0x5de792] = _0x28a14d;
    if (_0xf9ca43[_0x2eba93(0xbd)](!_0x5de792, !_0x21faf6))
        return logger['dns'][_0x2eba93(0xa3)]('search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain=' + _0x314dc1 + _0x2eba93(0xbe) + JSON[_0x2eba93(0xbf)](_0x5de792) + '\x20protocol=' + _0x21faf6), _0xf9ca43[_0x2eba93(0xb8)](searchHub, _0x314dc1);
    let _0x3480a6 = null;
    try {
        logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)](_0x2eba93(0xae) + _0x314dc1 + '\x20txt=rocketchat-public-key.' + _0x314dc1);
        const _0x27b9b6 = _0xf9ca43['RpuKm'](memoizedDnsResolveTXT, _0x2eba93(0xc0) + _0x314dc1);
        _0x3480a6 = _0x27b9b6[-0x1 * -0xe4b + 0xd2 * -0x11 + -0x59][_0x2eba93(0xb9)]('');
    } catch (_0x494f8b) {
    }
    if (!_0x3480a6)
        return logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)]('search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=' + _0x314dc1 + _0x2eba93(0xc1)), _0xf9ca43[_0x2eba93(0xc2)](searchHub, _0x314dc1);
    return logger[_0x2eba93(0xa7)][_0x2eba93(0xa3)](_0x2eba93(0xc3) + _0x314dc1 + _0x2eba93(0xbe) + _0x5de792[_0x2eba93(0xc4)] + ':' + _0x5de792[_0x2eba93(0xc5)] + _0x2eba93(0xc6) + _0x21faf6), {
        'url': _0x21faf6 + _0x2eba93(0xc7) + _0x5de792[_0x2eba93(0xc4)] + ':' + _0x5de792['port'],
        'peerDomain': _0x314dc1,
        'publicKey': _0x3480a6
    };
}
