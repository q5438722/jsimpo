import _0x51883e from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x30a826 from 'mem';
import * as _0x39632a from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
const dnsResolveSRV = Meteor['wrapAsync'](_0x51883e['resolveSrv']), dnsResolveTXT = Meteor['wrapAsync'](_0x51883e['resolveTxt']), cacheMaxAge = 0x3d5b61 + -0x1 * 0x2901dc + 0x2294fb, memoizedDnsResolveSRV = _0x30a826(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x30a826(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process['env']['NODE_ENV'] === 'development' ? 'http://localhost:8080' : 'https://hub.rocket.chat';
export function registerWithHub(_0x3cecd1, _0x511ef8, _0x1c3ed9) {
    const _0x3189f4 = {
        'domain': _0x3cecd1,
        'url': _0x511ef8,
        'public_key': _0x1c3ed9
    };
    try {
        return federationRequest('POST', hubUrl + '/api/v1/peers', _0x3189f4), !![];
    } catch (_0x28ae3e) {
        logger['dns']['error'](_0x28ae3e);
        throw _0x39632a['peerCouldNotBeRegisteredWithHub']('dns.registerWithHub');
    }
}
export function searchHub(_0xd2d7ed) {
    try {
        logger['dns']['debug']('searchHub:\x20peerDomain=' + _0xd2d7ed);
        const {
            data: {peer: _0x5306d1}
        } = federationRequest('GET', hubUrl + '/api/v1/peers?search=' + _0xd2d7ed);
        if (!_0x5306d1) {
            logger['dns']['debug']('searchHub:\x20could\x20not\x20find\x20peerDomain=' + _0xd2d7ed);
            throw _0x39632a['peerCouldNotBeRegisteredWithHub']('dns.registerWithHub');
        }
        const {
            url: _0x428805,
            public_key: _0x3eb6dd
        } = _0x5306d1;
        return logger['dns']['debug']('searchHub:\x20found\x20peerDomain=' + _0xd2d7ed + '\x20url=' + _0x428805), {
            'url': _0x428805,
            'peerDomain': _0xd2d7ed,
            'publicKey': _0x3eb6dd
        };
    } catch (_0x1cdd2c) {
        logger['dns']['error'](_0x1cdd2c);
        throw _0x39632a['peerNotFoundUsingDNS']('dns.searchHub');
    }
}
export function search(_0x4affae) {
    if (!isFederationEnabled())
        throw _0x39632a['disabled']('dns.search');
    logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae);
    let _0x4e820e = [], _0x183335 = '';
    try {
        logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae + '\x20srv=_rocketchat._https.' + _0x4affae), _0x4e820e = memoizedDnsResolveSRV('_rocketchat._https.' + _0x4affae), _0x183335 = 'https';
    } catch (_0x527b67) {
    }
    if (!_0x4e820e['length'])
        try {
            logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae + '\x20srv=_rocketchat._http.' + _0x4affae), _0x4e820e = memoizedDnsResolveSRV('_rocketchat._http.' + _0x4affae), _0x183335 = 'http';
        } catch (_0x3dd9fd) {
        }
    if (!_0x4e820e['length'])
        try {
            logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae + '\x20srv=_rocketchat._tcp.' + _0x4affae), _0x4e820e = memoizedDnsResolveSRV('_rocketchat._tcp.' + _0x4affae), _0x183335 = 'https', logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae + '\x20txt=rocketchat-tcp-protocol.' + _0x4affae), _0x183335 = memoizedDnsResolveSRV('rocketchat-tcp-protocol.' + _0x4affae), _0x183335 = _0x183335[-0x1 * -0xd6d + -0x1050 + 0x2e3 * 0x1]['join'](''), _0x183335 !== 'http' && _0x183335 !== 'https' && (_0x183335 = null);
        } catch (_0x2e0ea5) {
        }
    const [_0x2bf76c] = _0x4e820e;
    if (!_0x2bf76c || !_0x183335)
        return logger['dns']['debug']('search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain=' + _0x4affae + '\x20srvEntry=' + JSON['stringify'](_0x2bf76c) + '\x20protocol=' + _0x183335), searchHub(_0x4affae);
    let _0x5ede36 = null;
    try {
        logger['dns']['debug']('search:\x20peerDomain=' + _0x4affae + '\x20txt=rocketchat-public-key.' + _0x4affae);
        const _0x2d1614 = memoizedDnsResolveTXT('rocketchat-public-key.' + _0x4affae);
        _0x5ede36 = _0x2d1614[-0x13 * 0x81 + 0xa86 + -0xf3]['join']('');
    } catch (_0xfa8aa) {
    }
    if (!_0x5ede36)
        return logger['dns']['debug']('search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=' + _0x4affae + '\x20-\x20SRV\x20entry\x20found'), searchHub(_0x4affae);
    return logger['dns']['debug']('search:\x20found\x20peerDomain=' + _0x4affae + '\x20srvEntry=' + _0x2bf76c['name'] + ':' + _0x2bf76c['port'] + '\x20protocol=' + _0x183335), {
        'url': _0x183335 + '://' + _0x2bf76c['name'] + ':' + _0x2bf76c['port'],
        'peerDomain': _0x4affae,
        'publicKey': _0x5ede36
    };
}
