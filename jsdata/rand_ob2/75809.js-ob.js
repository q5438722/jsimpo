const _0x1fd9 = [
    '\x20srvEntry=',
    '\x20txt=rocketchat-public-key.',
    'rocketchat-public-key.',
    'search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=',
    '\x20-\x20SRV\x20entry\x20found',
    'search:\x20found\x20peerDomain=',
    'name',
    'port',
    '43753PLIsuE',
    '1oEbKUD',
    '84950yjABRV',
    '327533FrFHGW',
    '499140VDOmwW',
    '1CcAKym',
    '259441HjpiGK',
    '209859revJRc',
    '1012982JHCfUF',
    'wrapAsync',
    'resolveTxt',
    'env',
    'development',
    'http://localhost:8080',
    'POST',
    '/api/v1/peers',
    'dns',
    'error',
    'peerCouldNotBeRegisteredWithHub',
    'dns.registerWithHub',
    'debug',
    'searchHub:\x20peerDomain=',
    'GET',
    '/api/v1/peers?search=',
    'searchHub:\x20could\x20not\x20find\x20peerDomain=',
    'searchHub:\x20found\x20peerDomain=',
    '\x20url=',
    'peerNotFoundUsingDNS',
    'dns.searchHub',
    'disabled',
    'dns.search',
    'search:\x20peerDomain=',
    '\x20srv=_rocketchat._https.',
    '_rocketchat._https.',
    'https',
    'length',
    '\x20srv=_rocketchat._http.',
    '_rocketchat._http.',
    'http',
    '\x20srv=_rocketchat._tcp.',
    '_rocketchat._tcp.',
    '\x20txt=rocketchat-tcp-protocol.',
    'rocketchat-tcp-protocol.',
    'search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain='
];
const _0x261dc0 = _0x328e;
(function (_0x3a980b, _0x151af5) {
    const _0x5361f4 = _0x328e;
    while (!![]) {
        try {
            const _0x4bd028 = parseInt(_0x5361f4(0xa3)) * -parseInt(_0x5361f4(0xa4)) + parseInt(_0x5361f4(0xa5)) + -parseInt(_0x5361f4(0xa6)) + -parseInt(_0x5361f4(0xa7)) + -parseInt(_0x5361f4(0xa8)) * -parseInt(_0x5361f4(0xa9)) + -parseInt(_0x5361f4(0xaa)) + parseInt(_0x5361f4(0xab));
            if (_0x4bd028 === _0x151af5)
                break;
            else
                _0x3a980b['push'](_0x3a980b['shift']());
        } catch (_0x628b47) {
            _0x3a980b['push'](_0x3a980b['shift']());
        }
    }
}(_0x1fd9, 0x43a60));
import _0x1f7da8 from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x6f442 from 'mem';
import * as _0x1fb30d from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
const dnsResolveSRV = Meteor[_0x261dc0(0xac)](_0x1f7da8['resolveSrv']), dnsResolveTXT = Meteor[_0x261dc0(0xac)](_0x1f7da8[_0x261dc0(0xad)]), cacheMaxAge = 0x36ee80, memoizedDnsResolveSRV = _0x6f442(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x6f442(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process[_0x261dc0(0xae)]['NODE_ENV'] === _0x261dc0(0xaf) ? _0x261dc0(0xb0) : 'https://hub.rocket.chat';
export function registerWithHub(_0x51da86, _0x153f0f, _0x5002de) {
    const _0x4ee0d6 = _0x261dc0, _0x338491 = {
            'domain': _0x51da86,
            'url': _0x153f0f,
            'public_key': _0x5002de
        };
    try {
        return federationRequest(_0x4ee0d6(0xb1), hubUrl + _0x4ee0d6(0xb2), _0x338491), !![];
    } catch (_0x3f09b8) {
        logger[_0x4ee0d6(0xb3)][_0x4ee0d6(0xb4)](_0x3f09b8);
        throw _0x1fb30d[_0x4ee0d6(0xb5)](_0x4ee0d6(0xb6));
    }
}
function _0x328e(_0x41097b, _0x2c5101) {
    return _0x328e = function (_0x1fd9d0, _0x328e23) {
        _0x1fd9d0 = _0x1fd9d0 - 0xa3;
        let _0x1811fa = _0x1fd9[_0x1fd9d0];
        return _0x1811fa;
    }, _0x328e(_0x41097b, _0x2c5101);
}
export function searchHub(_0x84da1c) {
    const _0xa8930c = _0x261dc0;
    try {
        logger[_0xa8930c(0xb3)][_0xa8930c(0xb7)](_0xa8930c(0xb8) + _0x84da1c);
        const {
            data: {peer: _0x2ec91e}
        } = federationRequest(_0xa8930c(0xb9), hubUrl + _0xa8930c(0xba) + _0x84da1c);
        if (!_0x2ec91e) {
            logger[_0xa8930c(0xb3)][_0xa8930c(0xb7)](_0xa8930c(0xbb) + _0x84da1c);
            throw _0x1fb30d['peerCouldNotBeRegisteredWithHub'](_0xa8930c(0xb6));
        }
        const {
            url: _0x275303,
            public_key: _0x2508f9
        } = _0x2ec91e;
        return logger[_0xa8930c(0xb3)][_0xa8930c(0xb7)](_0xa8930c(0xbc) + _0x84da1c + _0xa8930c(0xbd) + _0x275303), {
            'url': _0x275303,
            'peerDomain': _0x84da1c,
            'publicKey': _0x2508f9
        };
    } catch (_0x5ece30) {
        logger[_0xa8930c(0xb3)][_0xa8930c(0xb4)](_0x5ece30);
        throw _0x1fb30d[_0xa8930c(0xbe)](_0xa8930c(0xbf));
    }
}
export function search(_0x48da25) {
    const _0x39ed3d = _0x261dc0;
    if (!isFederationEnabled())
        throw _0x1fb30d[_0x39ed3d(0xc0)](_0x39ed3d(0xc1));
    logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)](_0x39ed3d(0xc2) + _0x48da25);
    let _0xe9ab80 = [], _0x25b829 = '';
    try {
        logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)]('search:\x20peerDomain=' + _0x48da25 + _0x39ed3d(0xc3) + _0x48da25), _0xe9ab80 = memoizedDnsResolveSRV(_0x39ed3d(0xc4) + _0x48da25), _0x25b829 = _0x39ed3d(0xc5);
    } catch (_0xed9d6e) {
    }
    if (!_0xe9ab80[_0x39ed3d(0xc6)])
        try {
            logger['dns'][_0x39ed3d(0xb7)]('search:\x20peerDomain=' + _0x48da25 + _0x39ed3d(0xc7) + _0x48da25), _0xe9ab80 = memoizedDnsResolveSRV(_0x39ed3d(0xc8) + _0x48da25), _0x25b829 = _0x39ed3d(0xc9);
        } catch (_0x11a119) {
        }
    if (!_0xe9ab80[_0x39ed3d(0xc6)])
        try {
            logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)](_0x39ed3d(0xc2) + _0x48da25 + _0x39ed3d(0xca) + _0x48da25), _0xe9ab80 = memoizedDnsResolveSRV(_0x39ed3d(0xcb) + _0x48da25), _0x25b829 = _0x39ed3d(0xc5), logger[_0x39ed3d(0xb3)]['debug']('search:\x20peerDomain=' + _0x48da25 + _0x39ed3d(0xcc) + _0x48da25), _0x25b829 = memoizedDnsResolveSRV(_0x39ed3d(0xcd) + _0x48da25), _0x25b829 = _0x25b829[0x0]['join'](''), _0x25b829 !== _0x39ed3d(0xc9) && _0x25b829 !== _0x39ed3d(0xc5) && (_0x25b829 = null);
        } catch (_0x4cdb93) {
        }
    const [_0x223557] = _0xe9ab80;
    if (!_0x223557 || !_0x25b829)
        return logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)](_0x39ed3d(0xce) + _0x48da25 + _0x39ed3d(0xcf) + JSON['stringify'](_0x223557) + '\x20protocol=' + _0x25b829), searchHub(_0x48da25);
    let _0x1f865b = null;
    try {
        logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)]('search:\x20peerDomain=' + _0x48da25 + _0x39ed3d(0xd0) + _0x48da25);
        const _0x2332d = memoizedDnsResolveTXT(_0x39ed3d(0xd1) + _0x48da25);
        _0x1f865b = _0x2332d[0x0]['join']('');
    } catch (_0x3498a8) {
    }
    if (!_0x1f865b)
        return logger['dns'][_0x39ed3d(0xb7)](_0x39ed3d(0xd2) + _0x48da25 + _0x39ed3d(0xd3)), searchHub(_0x48da25);
    return logger[_0x39ed3d(0xb3)][_0x39ed3d(0xb7)](_0x39ed3d(0xd4) + _0x48da25 + _0x39ed3d(0xcf) + _0x223557['name'] + ':' + _0x223557['port'] + '\x20protocol=' + _0x25b829), {
        'url': _0x25b829 + '://' + _0x223557[_0x39ed3d(0xd5)] + ':' + _0x223557[_0x39ed3d(0xd6)],
        'peerDomain': _0x48da25,
        'publicKey': _0x1f865b
    };
}
