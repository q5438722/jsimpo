const _0x338b = [
    'FMUmM',
    'search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain=',
    '\x20srvEntry=',
    'stringify',
    '\x20protocol=',
    'ZQOsJ',
    'rocketchat-public-key.',
    'join',
    'search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=',
    '\x20-\x20SRV\x20entry\x20found',
    'search:\x20found\x20peerDomain=',
    'name',
    'port',
    '://',
    '299iUVeUr',
    '25QiuStI',
    '1HfYBKP',
    '754697lhUcvz',
    '581126QKsEkP',
    '871663oNwoDw',
    '1oRzKlK',
    '185559LICsrq',
    '265960mSbpgO',
    '328238teIbDA',
    'resolveSrv',
    'resolveTxt',
    'env',
    'NODE_ENV',
    'development',
    'http://localhost:8080',
    'https://hub.rocket.chat',
    'POST',
    'dns.registerWithHub',
    'JjuRT',
    'Yxujq',
    '/api/v1/peers',
    'dns',
    'error',
    'peerCouldNotBeRegisteredWithHub',
    'RGxBd',
    'GET',
    'searchHub:\x20peerDomain=',
    'GRKXD',
    'CXesp',
    '/api/v1/peers?search=',
    'debug',
    'searchHub:\x20could\x20not\x20find\x20peerDomain=',
    'searchHub:\x20found\x20peerDomain=',
    '\x20url=',
    'peerNotFoundUsingDNS',
    'dns.searchHub',
    'dns.search',
    'BmwLj',
    'disabled',
    'HGtdE',
    'search:\x20peerDomain=',
    '\x20srv=_rocketchat._https.',
    'EiiAv',
    '_rocketchat._https.',
    'length',
    '\x20srv=_rocketchat._http.',
    'http',
    '\x20srv=_rocketchat._tcp.',
    'vrYES',
    '_rocketchat._tcp.',
    'FgwDR',
    'rocketchat-tcp-protocol.',
    'Havwv'
];
const _0xb71678 = _0x3687;
(function (_0x2d705e, _0xdd7785) {
    const _0x15a807 = _0x3687;
    while (!![]) {
        try {
            const _0x1fa4ed = -parseInt(_0x15a807(0xf8)) * parseInt(_0x15a807(0xf9)) + -parseInt(_0x15a807(0xfa)) * parseInt(_0x15a807(0xfb)) + parseInt(_0x15a807(0xfc)) + parseInt(_0x15a807(0xfd)) + parseInt(_0x15a807(0xfe)) * -parseInt(_0x15a807(0xff)) + parseInt(_0x15a807(0x100)) + -parseInt(_0x15a807(0x101));
            if (_0x1fa4ed === _0xdd7785)
                break;
            else
                _0x2d705e['push'](_0x2d705e['shift']());
        } catch (_0x473d8d) {
            _0x2d705e['push'](_0x2d705e['shift']());
        }
    }
}(_0x338b, 0xa491e + 0x7 * 0x680c + -0x65fd6));
function _0x3687(_0x44453a, _0x316c2a) {
    return _0x3687 = function (_0x2b9ff3, _0x1ca53d) {
        _0x2b9ff3 = _0x2b9ff3 - (0x1 * 0xda1 + -0x1327 * -0x1 + -0x1fd0);
        let _0xbb66ff = _0x338b[_0x2b9ff3];
        return _0xbb66ff;
    }, _0x3687(_0x44453a, _0x316c2a);
}
import _0x5f1ae4 from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x961354 from 'mem';
import * as _0x2ea36a from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
const dnsResolveSRV = Meteor['wrapAsync'](_0x5f1ae4[_0xb71678(0x102)]), dnsResolveTXT = Meteor['wrapAsync'](_0x5f1ae4[_0xb71678(0x103)]), cacheMaxAge = 0x1b89f * 0x4 + -0x10 * -0x3c5cd + -0xc50cc, memoizedDnsResolveSRV = _0x961354(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x961354(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process[_0xb71678(0x104)][_0xb71678(0x105)] === _0xb71678(0x106) ? _0xb71678(0x107) : _0xb71678(0x108);
export function registerWithHub(_0x55f3e7, _0x19900d, _0x17a69d) {
    const _0x55ebf8 = _0xb71678, _0x596ec0 = {
            'JjuRT': function (_0x4dc86a, _0x1c2119, _0x4d9dbc, _0x44d40f) {
                return _0x4dc86a(_0x1c2119, _0x4d9dbc, _0x44d40f);
            },
            'Yxujq': _0x55ebf8(0x109),
            'RGxBd': _0x55ebf8(0x10a)
        }, _0x328f1c = {
            'domain': _0x55f3e7,
            'url': _0x19900d,
            'public_key': _0x17a69d
        };
    try {
        return _0x596ec0[_0x55ebf8(0x10b)](federationRequest, _0x596ec0[_0x55ebf8(0x10c)], hubUrl + _0x55ebf8(0x10d), _0x328f1c), !![];
    } catch (_0x4a7b0d) {
        logger[_0x55ebf8(0x10e)][_0x55ebf8(0x10f)](_0x4a7b0d);
        throw _0x2ea36a[_0x55ebf8(0x110)](_0x596ec0[_0x55ebf8(0x111)]);
    }
}
export function searchHub(_0x162b47) {
    const _0x289485 = _0xb71678, _0x29d6b8 = {
            'GRKXD': function (_0x59fbc7, _0x285ee6, _0x1a1a4c) {
                return _0x59fbc7(_0x285ee6, _0x1a1a4c);
            },
            'CXesp': _0x289485(0x112)
        };
    try {
        logger[_0x289485(0x10e)]['debug'](_0x289485(0x113) + _0x162b47);
        const {
            data: {peer: _0x803321}
        } = _0x29d6b8[_0x289485(0x114)](federationRequest, _0x29d6b8[_0x289485(0x115)], hubUrl + _0x289485(0x116) + _0x162b47);
        if (!_0x803321) {
            logger[_0x289485(0x10e)][_0x289485(0x117)](_0x289485(0x118) + _0x162b47);
            throw _0x2ea36a[_0x289485(0x110)](_0x289485(0x10a));
        }
        const {
            url: _0x1e7641,
            public_key: _0x14aeeb
        } = _0x803321;
        return logger[_0x289485(0x10e)][_0x289485(0x117)](_0x289485(0x119) + _0x162b47 + _0x289485(0x11a) + _0x1e7641), {
            'url': _0x1e7641,
            'peerDomain': _0x162b47,
            'publicKey': _0x14aeeb
        };
    } catch (_0x406c26) {
        logger[_0x289485(0x10e)]['error'](_0x406c26);
        throw _0x2ea36a[_0x289485(0x11b)](_0x289485(0x11c));
    }
}
export function search(_0x38c683) {
    const _0x16dd18 = _0xb71678, _0x4810a7 = {
            'BmwLj': function (_0x5e06a7) {
                return _0x5e06a7();
            },
            'HGtdE': _0x16dd18(0x11d),
            'EiiAv': function (_0x3cee32, _0x4accac) {
                return _0x3cee32(_0x4accac);
            },
            'FgwDR': 'https',
            'vrYES': function (_0x28505f, _0x20d4c4) {
                return _0x28505f(_0x20d4c4);
            },
            'Havwv': function (_0x1d70dd, _0x206c13) {
                return _0x1d70dd !== _0x206c13;
            },
            'FMUmM': function (_0x57d517, _0xee3f71) {
                return _0x57d517 || _0xee3f71;
            },
            'ZQOsJ': function (_0x13376e, _0x41ee7a) {
                return _0x13376e(_0x41ee7a);
            }
        };
    if (!_0x4810a7[_0x16dd18(0x11e)](isFederationEnabled))
        throw _0x2ea36a[_0x16dd18(0x11f)](_0x4810a7[_0x16dd18(0x120)]);
    logger['dns'][_0x16dd18(0x117)]('search:\x20peerDomain=' + _0x38c683);
    let _0x2074e6 = [], _0x3676ed = '';
    try {
        logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x121) + _0x38c683 + _0x16dd18(0x122) + _0x38c683), _0x2074e6 = _0x4810a7[_0x16dd18(0x123)](memoizedDnsResolveSRV, _0x16dd18(0x124) + _0x38c683), _0x3676ed = _0x4810a7['FgwDR'];
    } catch (_0x37a259) {
    }
    if (!_0x2074e6[_0x16dd18(0x125)])
        try {
            logger[_0x16dd18(0x10e)]['debug'](_0x16dd18(0x121) + _0x38c683 + _0x16dd18(0x126) + _0x38c683), _0x2074e6 = _0x4810a7[_0x16dd18(0x123)](memoizedDnsResolveSRV, '_rocketchat._http.' + _0x38c683), _0x3676ed = _0x16dd18(0x127);
        } catch (_0x334590) {
        }
    if (!_0x2074e6[_0x16dd18(0x125)])
        try {
            logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x121) + _0x38c683 + _0x16dd18(0x128) + _0x38c683), _0x2074e6 = _0x4810a7[_0x16dd18(0x129)](memoizedDnsResolveSRV, _0x16dd18(0x12a) + _0x38c683), _0x3676ed = _0x4810a7[_0x16dd18(0x12b)], logger[_0x16dd18(0x10e)]['debug'](_0x16dd18(0x121) + _0x38c683 + '\x20txt=rocketchat-tcp-protocol.' + _0x38c683), _0x3676ed = _0x4810a7[_0x16dd18(0x129)](memoizedDnsResolveSRV, _0x16dd18(0x12c) + _0x38c683), _0x3676ed = _0x3676ed[0x12d6 + 0xa * -0x2b6 + -0x1 * -0x846]['join'](''), _0x4810a7[_0x16dd18(0x12d)](_0x3676ed, _0x16dd18(0x127)) && _0x4810a7[_0x16dd18(0x12d)](_0x3676ed, _0x4810a7[_0x16dd18(0x12b)]) && (_0x3676ed = null);
        } catch (_0x3419ec) {
        }
    const [_0x315cfc] = _0x2074e6;
    if (_0x4810a7[_0x16dd18(0x12e)](!_0x315cfc, !_0x3676ed))
        return logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x12f) + _0x38c683 + _0x16dd18(0x130) + JSON[_0x16dd18(0x131)](_0x315cfc) + _0x16dd18(0x132) + _0x3676ed), _0x4810a7[_0x16dd18(0x129)](searchHub, _0x38c683);
    let _0x340311 = null;
    try {
        logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x121) + _0x38c683 + '\x20txt=rocketchat-public-key.' + _0x38c683);
        const _0xa0048a = _0x4810a7[_0x16dd18(0x133)](memoizedDnsResolveTXT, _0x16dd18(0x134) + _0x38c683);
        _0x340311 = _0xa0048a[0x1 * -0x943 + 0x2170 + -0x182d * 0x1][_0x16dd18(0x135)]('');
    } catch (_0x341253) {
    }
    if (!_0x340311)
        return logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x136) + _0x38c683 + _0x16dd18(0x137)), _0x4810a7[_0x16dd18(0x133)](searchHub, _0x38c683);
    return logger[_0x16dd18(0x10e)][_0x16dd18(0x117)](_0x16dd18(0x138) + _0x38c683 + '\x20srvEntry=' + _0x315cfc[_0x16dd18(0x139)] + ':' + _0x315cfc[_0x16dd18(0x13a)] + _0x16dd18(0x132) + _0x3676ed), {
        'url': _0x3676ed + _0x16dd18(0x13b) + _0x315cfc[_0x16dd18(0x139)] + ':' + _0x315cfc['port'],
        'peerDomain': _0x38c683,
        'publicKey': _0x340311
    };
}
