'use strict';
require('../common');
const assert = require('assert'), http = require('http');
let serverSocket = null;
const server = http['createServer'](function (_0x3df58c, _0xa22cc3) {
    serverSocket ? assert['strictEqual'](_0x3df58c['socket'], serverSocket) : serverSocket = _0x3df58c['socket'], _0xa22cc3['end'](_0x3df58c['url']);
});
server['listen'](0x0, function () {
    const _0x5ea263 = {
        'XhXQN': function (_0x443a4d, _0x47422f) {
            return _0x443a4d(_0x47422f);
        }
    };
    _0x5ea263['XhXQN'](makeRequest, expectRequests);
});
const agent = http['Agent']({ 'keepAlive': !![] });
let clientSocket = null;
const expectRequests = 0xa;
let actualRequests = 0x0;
function makeRequest(_0x28e305) {
    const _0x237eb3 = {
        'OXEfw': function (_0x10c82a, _0x4e850d) {
            return _0x10c82a(_0x4e850d);
        },
        'fiKDc': function (_0x1720f9, _0x54fb29) {
            return _0x1720f9 - _0x54fb29;
        },
        'RJyzM': function (_0x464a21, _0x3c2f60, _0x328661) {
            return _0x464a21(_0x3c2f60, _0x328661);
        },
        'tTYbJ': 'utf8',
        'EDPyV': 'data',
        'pQUnp': 'end',
        'yYDyd': function (_0x31d996, _0xa28d35) {
            return _0x31d996 === _0xa28d35;
        },
        'TjSLi': 'socket',
        'KIrES': 'response'
    };
    if (_0x237eb3['yYDyd'](_0x28e305, 0x0)) {
        server['close'](), agent['destroy']();
        return;
    }
    const _0x3ce168 = http['request']({
        'port': server['address']()['port'],
        'agent': agent,
        'path': '/' + _0x28e305
    });
    _0x3ce168['end'](), _0x3ce168['on'](_0x237eb3['TjSLi'], function (_0x1772c1) {
        clientSocket ? assert['strictEqual'](_0x1772c1, clientSocket) : clientSocket = _0x1772c1;
    }), _0x3ce168['on'](_0x237eb3['KIrES'], function (_0x5dc746) {
        const _0x384771 = {
            'ODulA': function (_0x2aac62, _0x46cc19) {
                return _0x237eb3['OXEfw'](_0x2aac62, _0x46cc19);
            },
            'tjAvu': function (_0x1c9789, _0x5bb739) {
                return _0x237eb3['fiKDc'](_0x1c9789, _0x5bb739);
            },
            'kdsrb': function (_0x3ec15d, _0x85b9a5, _0x5a516e) {
                return _0x237eb3['RJyzM'](_0x3ec15d, _0x85b9a5, _0x5a516e);
            }
        };
        let _0x580ac5 = '';
        _0x5dc746['setEncoding'](_0x237eb3['tTYbJ']), _0x5dc746['on'](_0x237eb3['EDPyV'], function (_0x5c6d49) {
            _0x580ac5 += _0x5c6d49;
        }), _0x5dc746['on'](_0x237eb3['pQUnp'], function () {
            assert['strictEqual'](_0x580ac5, '/' + _0x28e305), _0x384771['kdsrb'](setTimeout, function () {
                actualRequests++, _0x384771['ODulA'](makeRequest, _0x384771['tjAvu'](_0x28e305, 0x1));
            }, 0x1);
        });
    });
}
process['on']('exit', function () {
    assert['strictEqual'](actualRequests, expectRequests), console['log']('ok');
});
