const _0x10c6 = [
    'https://hub.rocket.chat',
    'POST',
    '/api/v1/peers',
    'dns',
    'dns.registerWithHub',
    'debug',
    'searchHub:\x20peerDomain=',
    'GET',
    '/api/v1/peers?search=',
    'searchHub:\x20could\x20not\x20find\x20peerDomain=',
    '\x20url=',
    'error',
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
    '\x20txt=rocketchat-tcp-protocol.',
    'rocketchat-tcp-protocol.',
    'join',
    '\x20srvEntry=',
    '\x20txt=rocketchat-public-key.',
    'rocketchat-public-key.',
    'search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=',
    '\x20-\x20SRV\x20entry\x20found',
    'search:\x20found\x20peerDomain=',
    'name',
    'port',
    '\x20protocol=',
    '://',
    '232073ldZqeG',
    '1tcSSzg',
    '86DJFJCZ',
    '4075jonxvb',
    '12606KrcfrE',
    '331322WHCgmF',
    '5bfSFov',
    '108484GDarHU',
    '299762TYhEyL',
    '2qUhTfV',
    '1hEgFqB',
    '596551XWqnpM',
    'wrapAsync',
    'resolveSrv',
    'resolveTxt',
    'env',
    'NODE_ENV',
    'development',
    'http://localhost:8080'
];
const _0x12dc7e = _0x2b12;
(function (_0x197899, _0x498d0a) {
    const _0x16648b = _0x2b12;
    while (!![]) {
        try {
            const _0x3ff139 = parseInt(_0x16648b(0x1de)) * parseInt(_0x16648b(0x1df)) + parseInt(_0x16648b(0x1e0)) * parseInt(_0x16648b(0x1e1)) + -parseInt(_0x16648b(0x1e2)) + parseInt(_0x16648b(0x1e3)) + parseInt(_0x16648b(0x1e4)) * -parseInt(_0x16648b(0x1e5)) + -parseInt(_0x16648b(0x1e6)) * parseInt(_0x16648b(0x1e7)) + parseInt(_0x16648b(0x1e8)) * parseInt(_0x16648b(0x1e9));
            if (_0x3ff139 === _0x498d0a)
                break;
            else
                _0x197899['push'](_0x197899['shift']());
        } catch (_0x21568d) {
            _0x197899['push'](_0x197899['shift']());
        }
    }
}(_0x10c6, 0x56e06));
import _0x2fb3be from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x1f211f from 'mem';
import * as _0x414a17 from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
const dnsResolveSRV = Meteor[_0x12dc7e(0x1ea)](_0x2fb3be[_0x12dc7e(0x1eb)]), dnsResolveTXT = Meteor[_0x12dc7e(0x1ea)](_0x2fb3be[_0x12dc7e(0x1ec)]), cacheMaxAge = 0x36ee80, memoizedDnsResolveSRV = _0x1f211f(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x1f211f(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process[_0x12dc7e(0x1ed)][_0x12dc7e(0x1ee)] === _0x12dc7e(0x1ef) ? _0x12dc7e(0x1f0) : _0x12dc7e(0x1f1);
export function registerWithHub(_0x4575bc, _0x211c14, _0x72072a) {
    const _0x42acee = _0x12dc7e, _0x1556dc = {
            'domain': _0x4575bc,
            'url': _0x211c14,
            'public_key': _0x72072a
        };
    try {
        return federationRequest(_0x42acee(0x1f2), hubUrl + _0x42acee(0x1f3), _0x1556dc), !![];
    } catch (_0x4e2045) {
        logger[_0x42acee(0x1f4)]['error'](_0x4e2045);
        throw _0x414a17['peerCouldNotBeRegisteredWithHub'](_0x42acee(0x1f5));
    }
}
function _0x2b12(_0x1912a4, _0xc6c099) {
    return _0x2b12 = function (_0x10c6b1, _0x2b12eb) {
        _0x10c6b1 = _0x10c6b1 - 0x1de;
        let _0x41e311 = _0x10c6[_0x10c6b1];
        return _0x41e311;
    }, _0x2b12(_0x1912a4, _0xc6c099);
}
export function searchHub(_0x55e7a3) {
    const _0x6bb391 = _0x12dc7e;
    try {
        logger[_0x6bb391(0x1f4)][_0x6bb391(0x1f6)](_0x6bb391(0x1f7) + _0x55e7a3);
        const {
            data: {peer: _0x1c06b5}
        } = federationRequest(_0x6bb391(0x1f8), hubUrl + _0x6bb391(0x1f9) + _0x55e7a3);
        if (!_0x1c06b5) {
            logger['dns'][_0x6bb391(0x1f6)](_0x6bb391(0x1fa) + _0x55e7a3);
            throw _0x414a17['peerCouldNotBeRegisteredWithHub']('dns.registerWithHub');
        }
        const {
            url: _0x4da484,
            public_key: _0x4be1ea
        } = _0x1c06b5;
        return logger[_0x6bb391(0x1f4)]['debug']('searchHub:\x20found\x20peerDomain=' + _0x55e7a3 + _0x6bb391(0x1fb) + _0x4da484), {
            'url': _0x4da484,
            'peerDomain': _0x55e7a3,
            'publicKey': _0x4be1ea
        };
    } catch (_0x459dad) {
        logger[_0x6bb391(0x1f4)][_0x6bb391(0x1fc)](_0x459dad);
        throw _0x414a17[_0x6bb391(0x1fd)](_0x6bb391(0x1fe));
    }
}
export function search(_0x3bd5f8) {
    const _0x1ccaa7 = _0x12dc7e;
    if (!isFederationEnabled())
        throw _0x414a17[_0x1ccaa7(0x1ff)](_0x1ccaa7(0x200));
    logger[_0x1ccaa7(0x1f4)][_0x1ccaa7(0x1f6)]('search:\x20peerDomain=' + _0x3bd5f8);
    let _0x1535ad = [], _0x17225c = '';
    try {
        logger['dns'][_0x1ccaa7(0x1f6)](_0x1ccaa7(0x201) + _0x3bd5f8 + _0x1ccaa7(0x202) + _0x3bd5f8), _0x1535ad = memoizedDnsResolveSRV(_0x1ccaa7(0x203) + _0x3bd5f8), _0x17225c = _0x1ccaa7(0x204);
    } catch (_0x345417) {
    }
    if (!_0x1535ad[_0x1ccaa7(0x205)])
        try {
            logger['dns']['debug'](_0x1ccaa7(0x201) + _0x3bd5f8 + _0x1ccaa7(0x206) + _0x3bd5f8), _0x1535ad = memoizedDnsResolveSRV(_0x1ccaa7(0x207) + _0x3bd5f8), _0x17225c = _0x1ccaa7(0x208);
        } catch (_0x3d7e46) {
        }
    if (!_0x1535ad[_0x1ccaa7(0x205)])
        try {
            logger[_0x1ccaa7(0x1f4)]['debug']('search:\x20peerDomain=' + _0x3bd5f8 + '\x20srv=_rocketchat._tcp.' + _0x3bd5f8), _0x1535ad = memoizedDnsResolveSRV('_rocketchat._tcp.' + _0x3bd5f8), _0x17225c = _0x1ccaa7(0x204), logger['dns'][_0x1ccaa7(0x1f6)](_0x1ccaa7(0x201) + _0x3bd5f8 + _0x1ccaa7(0x209) + _0x3bd5f8), _0x17225c = memoizedDnsResolveSRV(_0x1ccaa7(0x20a) + _0x3bd5f8), _0x17225c = _0x17225c[0x0][_0x1ccaa7(0x20b)](''), _0x17225c !== _0x1ccaa7(0x208) && _0x17225c !== _0x1ccaa7(0x204) && (_0x17225c = null);
        } catch (_0x305df0) {
        }
    const [_0x491331] = _0x1535ad;
    if (!_0x491331 || !_0x17225c)
        return logger[_0x1ccaa7(0x1f4)][_0x1ccaa7(0x1f6)]('search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain=' + _0x3bd5f8 + _0x1ccaa7(0x20c) + JSON['stringify'](_0x491331) + '\x20protocol=' + _0x17225c), searchHub(_0x3bd5f8);
    let _0x496ee8 = null;
    try {
        logger[_0x1ccaa7(0x1f4)][_0x1ccaa7(0x1f6)](_0x1ccaa7(0x201) + _0x3bd5f8 + _0x1ccaa7(0x20d) + _0x3bd5f8);
        const _0x1760aa = memoizedDnsResolveTXT(_0x1ccaa7(0x20e) + _0x3bd5f8);
        _0x496ee8 = _0x1760aa[0x0][_0x1ccaa7(0x20b)]('');
    } catch (_0x278b40) {
    }
    if (!_0x496ee8)
        return logger[_0x1ccaa7(0x1f4)][_0x1ccaa7(0x1f6)](_0x1ccaa7(0x20f) + _0x3bd5f8 + _0x1ccaa7(0x210)), searchHub(_0x3bd5f8);
    return logger[_0x1ccaa7(0x1f4)][_0x1ccaa7(0x1f6)](_0x1ccaa7(0x211) + _0x3bd5f8 + _0x1ccaa7(0x20c) + _0x491331[_0x1ccaa7(0x212)] + ':' + _0x491331[_0x1ccaa7(0x213)] + _0x1ccaa7(0x214) + _0x17225c), {
        'url': _0x17225c + _0x1ccaa7(0x215) + _0x491331['name'] + ':' + _0x491331['port'],
        'peerDomain': _0x3bd5f8,
        'publicKey': _0x496ee8
    };
}
