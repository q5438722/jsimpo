import _0x8dec4a from 'dns';
import { Meteor } from 'meteor/meteor';
import _0x3d0fd6 from 'mem';
import * as _0x2eb47e from '../functions/errors';
import { logger } from './logger';
import { isFederationEnabled } from './isFederationEnabled';
import { federationRequest } from './http';
const dnsResolveSRV = Meteor['wrapAsync'](_0x8dec4a['resolveSrv']), dnsResolveTXT = Meteor['wrapAsync'](_0x8dec4a['resolveTxt']), cacheMaxAge = 0x36ee80, memoizedDnsResolveSRV = _0x3d0fd6(dnsResolveSRV, { 'maxAge': cacheMaxAge }), memoizedDnsResolveTXT = _0x3d0fd6(dnsResolveTXT, { 'maxAge': cacheMaxAge }), hubUrl = process['env']['NODE_ENV'] === 'development' ? 'http://localhost:8080' : 'https://hub.rocket.chat';
export function registerWithHub(_0x176ce2, _0x2a4c21, _0x274bad) {
    const _0x4866a9 = {
            'qWgHk': function (_0x561796, _0x305766, _0x397485, _0xb6102e) {
                return _0x561796(_0x305766, _0x397485, _0xb6102e);
            },
            'khmNW': 'POST',
            'IEXaO': 'dns.registerWithHub'
        }, _0x42b4c4 = {
            'domain': _0x176ce2,
            'url': _0x2a4c21,
            'public_key': _0x274bad
        };
    try {
        return _0x4866a9['qWgHk'](federationRequest, _0x4866a9['khmNW'], hubUrl + '/api/v1/peers', _0x42b4c4), !![];
    } catch (_0x33c811) {
        logger['dns']['error'](_0x33c811);
        throw _0x2eb47e['peerCouldNotBeRegisteredWithHub'](_0x4866a9['IEXaO']);
    }
}
export function searchHub(_0xf313ec) {
    const _0x229c10 = {
        'Nxtxu': function (_0x3722d6, _0x5baf24, _0x296722) {
            return _0x3722d6(_0x5baf24, _0x296722);
        },
        'oRJtF': 'GET',
        'BCZYf': 'dns.registerWithHub',
        'TBbXT': 'dns.searchHub'
    };
    try {
        logger['dns']['debug']('searchHub:\x20peerDomain=' + _0xf313ec);
        const {
            data: {peer: _0x2416d8}
        } = _0x229c10['Nxtxu'](federationRequest, _0x229c10['oRJtF'], hubUrl + '/api/v1/peers?search=' + _0xf313ec);
        if (!_0x2416d8) {
            logger['dns']['debug']('searchHub:\x20could\x20not\x20find\x20peerDomain=' + _0xf313ec);
            throw _0x2eb47e['peerCouldNotBeRegisteredWithHub'](_0x229c10['BCZYf']);
        }
        const {
            url: _0x312014,
            public_key: _0x101972
        } = _0x2416d8;
        return logger['dns']['debug']('searchHub:\x20found\x20peerDomain=' + _0xf313ec + '\x20url=' + _0x312014), {
            'url': _0x312014,
            'peerDomain': _0xf313ec,
            'publicKey': _0x101972
        };
    } catch (_0x1191fd) {
        logger['dns']['error'](_0x1191fd);
        throw _0x2eb47e['peerNotFoundUsingDNS'](_0x229c10['TBbXT']);
    }
}
export function search(_0x143d0b) {
    const _0x42ef7b = {
        'pmomI': function (_0x3c1339) {
            return _0x3c1339();
        },
        'fKXWJ': 'dns.search',
        'sDciW': function (_0x4a5caf, _0x147240) {
            return _0x4a5caf(_0x147240);
        },
        'TORtU': 'https',
        'RPnNe': function (_0x8a7914, _0x3c375d) {
            return _0x8a7914(_0x3c375d);
        },
        'scOJB': 'http',
        'WYGTU': '5|2|6|0|1|3|4',
        'LJHGE': function (_0x3217aa, _0x16a126) {
            return _0x3217aa(_0x16a126);
        },
        'yUGAn': function (_0x30eaaa, _0x1219d6) {
            return _0x30eaaa(_0x1219d6);
        },
        'trBzP': function (_0x39df99, _0x208173) {
            return _0x39df99 !== _0x208173;
        },
        'URwUJ': function (_0xa96767, _0x264f77) {
            return _0xa96767 || _0x264f77;
        },
        'Ktpva': function (_0x4de88e, _0x399277) {
            return _0x4de88e(_0x399277);
        }
    };
    if (!_0x42ef7b['pmomI'](isFederationEnabled))
        throw _0x2eb47e['disabled'](_0x42ef7b['fKXWJ']);
    logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b);
    let _0x1df02d = [], _0x5f2844 = '';
    try {
        logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b + '\x20srv=_rocketchat._https.' + _0x143d0b), _0x1df02d = _0x42ef7b['sDciW'](memoizedDnsResolveSRV, '_rocketchat._https.' + _0x143d0b), _0x5f2844 = _0x42ef7b['TORtU'];
    } catch (_0x30b98d) {
    }
    if (!_0x1df02d['length'])
        try {
            logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b + '\x20srv=_rocketchat._http.' + _0x143d0b), _0x1df02d = _0x42ef7b['RPnNe'](memoizedDnsResolveSRV, '_rocketchat._http.' + _0x143d0b), _0x5f2844 = _0x42ef7b['scOJB'];
        } catch (_0x22c656) {
        }
    if (!_0x1df02d['length'])
        try {
            const _0x30da6d = _0x42ef7b['WYGTU']['split']('|');
            let _0x239018 = 0x0;
            while (!![]) {
                switch (_0x30da6d[_0x239018++]) {
                case '0':
                    logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b + '\x20txt=rocketchat-tcp-protocol.' + _0x143d0b);
                    continue;
                case '1':
                    _0x5f2844 = _0x42ef7b['LJHGE'](memoizedDnsResolveSRV, 'rocketchat-tcp-protocol.' + _0x143d0b);
                    continue;
                case '2':
                    _0x1df02d = _0x42ef7b['yUGAn'](memoizedDnsResolveSRV, '_rocketchat._tcp.' + _0x143d0b);
                    continue;
                case '3':
                    _0x5f2844 = _0x5f2844[0x0]['join']('');
                    continue;
                case '4':
                    _0x42ef7b['trBzP'](_0x5f2844, _0x42ef7b['scOJB']) && _0x42ef7b['trBzP'](_0x5f2844, _0x42ef7b['TORtU']) && (_0x5f2844 = null);
                    continue;
                case '5':
                    logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b + '\x20srv=_rocketchat._tcp.' + _0x143d0b);
                    continue;
                case '6':
                    _0x5f2844 = _0x42ef7b['TORtU'];
                    continue;
                }
                break;
            }
        } catch (_0x2f00db) {
        }
    const [_0x3eb6b7] = _0x1df02d;
    if (_0x42ef7b['URwUJ'](!_0x3eb6b7, !_0x5f2844))
        return logger['dns']['debug']('search:\x20could\x20not\x20find\x20valid\x20SRV\x20entry\x20peerDomain=' + _0x143d0b + '\x20srvEntry=' + JSON['stringify'](_0x3eb6b7) + '\x20protocol=' + _0x5f2844), _0x42ef7b['yUGAn'](searchHub, _0x143d0b);
    let _0x4601cb = null;
    try {
        logger['dns']['debug']('search:\x20peerDomain=' + _0x143d0b + '\x20txt=rocketchat-public-key.' + _0x143d0b);
        const _0x46683c = _0x42ef7b['Ktpva'](memoizedDnsResolveTXT, 'rocketchat-public-key.' + _0x143d0b);
        _0x4601cb = _0x46683c[0x0]['join']('');
    } catch (_0x55b413) {
    }
    if (!_0x4601cb)
        return logger['dns']['debug']('search:\x20could\x20not\x20find\x20TXT\x20entry\x20for\x20peerDomain=' + _0x143d0b + '\x20-\x20SRV\x20entry\x20found'), _0x42ef7b['Ktpva'](searchHub, _0x143d0b);
    return logger['dns']['debug']('search:\x20found\x20peerDomain=' + _0x143d0b + '\x20srvEntry=' + _0x3eb6b7['name'] + ':' + _0x3eb6b7['port'] + '\x20protocol=' + _0x5f2844), {
        'url': _0x5f2844 + '://' + _0x3eb6b7['name'] + ':' + _0x3eb6b7['port'],
        'peerDomain': _0x143d0b,
        'publicKey': _0x4601cb
    };
}
