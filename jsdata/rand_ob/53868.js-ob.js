'use strict';
const _0x5d4e = [
    'socket',
    'end',
    'url',
    'listen',
    'abKqW',
    'Agent',
    'data',
    'response',
    'GRUbn',
    'close',
    'address',
    'port',
    'HXfBh',
    'HLpwg',
    'eStDn',
    'aiwMF',
    'setEncoding',
    'XrDrO',
    'cWYJT',
    'RASat',
    'hIhRm',
    'exit',
    'log',
    '309134PBLwsH',
    '1303103WuiyNB',
    '1CrzQse',
    '4AczEFm',
    '16404lbUAjS',
    '155275GqpAit',
    '3OxUGaf',
    '406150PSduaq',
    '627438hnRCaO',
    '1303691IAjlGC',
    'assert',
    'createServer',
    'strictEqual'
];
const _0x55b203 = _0x1398;
(function (_0x22b01e, _0x3d286e) {
    const _0x53babd = _0x1398;
    while (!![]) {
        try {
            const _0x7b9d36 = parseInt(_0x53babd(0x1d2)) + parseInt(_0x53babd(0x1d3)) * parseInt(_0x53babd(0x1d4)) + parseInt(_0x53babd(0x1d5)) * -parseInt(_0x53babd(0x1d6)) + -parseInt(_0x53babd(0x1d7)) + parseInt(_0x53babd(0x1d8)) * parseInt(_0x53babd(0x1d9)) + -parseInt(_0x53babd(0x1da)) + -parseInt(_0x53babd(0x1db));
            if (_0x7b9d36 === _0x3d286e)
                break;
            else
                _0x22b01e['push'](_0x22b01e['shift']());
        } catch (_0x4045a4) {
            _0x22b01e['push'](_0x22b01e['shift']());
        }
    }
}(_0x5d4e, 0x2 * -0x7a7cb + 0x1 * -0x5d8c3 + 0x202 * 0xfb2));
require('../common');
const assert = require(_0x55b203(0x1dc)), http = require('http');
function _0x1398(_0x14851d, _0xe00bd4) {
    return _0x1398 = function (_0x3a9b9f, _0x9f7628) {
        _0x3a9b9f = _0x3a9b9f - (-0xb * -0x9 + -0x2515 + 0x2684);
        let _0x58f3e0 = _0x5d4e[_0x3a9b9f];
        return _0x58f3e0;
    }, _0x1398(_0x14851d, _0xe00bd4);
}
let serverSocket = null;
const server = http[_0x55b203(0x1dd)](function (_0x5afc12, _0x2de011) {
    const _0x4d1ff6 = _0x55b203;
    serverSocket ? assert[_0x4d1ff6(0x1de)](_0x5afc12['socket'], serverSocket) : serverSocket = _0x5afc12[_0x4d1ff6(0x1df)], _0x2de011[_0x4d1ff6(0x1e0)](_0x5afc12[_0x4d1ff6(0x1e1)]);
});
server[_0x55b203(0x1e2)](-0x1f61 * 0x1 + -0xd78 * 0x2 + 0x3a51, function () {
    const _0x4d1ee8 = _0x55b203, _0x45628c = {
            'abKqW': function (_0x1090d8, _0x50995f) {
                return _0x1090d8(_0x50995f);
            }
        };
    _0x45628c[_0x4d1ee8(0x1e3)](makeRequest, expectRequests);
});
const agent = http[_0x55b203(0x1e4)]({ 'keepAlive': !![] });
let clientSocket = null;
const expectRequests = -0x1528 * 0x1 + -0x1 * 0x1ea1 + 0x1 * 0x33d3;
let actualRequests = 0x15d5 + 0x96d + -0x1f42 * 0x1;
function makeRequest(_0x39fe92) {
    const _0x571a34 = _0x55b203, _0x38ee97 = {
            'RASat': function (_0x23e9ae, _0x55adb8, _0x27652f) {
                return _0x23e9ae(_0x55adb8, _0x27652f);
            },
            'eStDn': function (_0x202b97, _0x3a7edf) {
                return _0x202b97(_0x3a7edf);
            },
            'aiwMF': function (_0x5abaf9, _0xe1e758) {
                return _0x5abaf9 - _0xe1e758;
            },
            'uHheD': 'utf8',
            'XrDrO': _0x571a34(0x1e5),
            'cWYJT': _0x571a34(0x1e0),
            'GRUbn': function (_0x8aaa0c, _0x230ebc) {
                return _0x8aaa0c === _0x230ebc;
            },
            'HXfBh': _0x571a34(0x1df),
            'HLpwg': _0x571a34(0x1e6)
        };
    if (_0x38ee97[_0x571a34(0x1e7)](_0x39fe92, -0xa67 + 0x121 * 0x1 + 0x946)) {
        server[_0x571a34(0x1e8)](), agent['destroy']();
        return;
    }
    const _0x1bec56 = http['request']({
        'port': server[_0x571a34(0x1e9)]()[_0x571a34(0x1ea)],
        'agent': agent,
        'path': '/' + _0x39fe92
    });
    _0x1bec56['end'](), _0x1bec56['on'](_0x38ee97[_0x571a34(0x1eb)], function (_0x47193d) {
        const _0x4e7374 = _0x571a34;
        clientSocket ? assert[_0x4e7374(0x1de)](_0x47193d, clientSocket) : clientSocket = _0x47193d;
    }), _0x1bec56['on'](_0x38ee97[_0x571a34(0x1ec)], function (_0x8a47a7) {
        const _0x4dc8c8 = _0x571a34, _0x2515c8 = {
                'vDpmf': function (_0x447c8a, _0x411688) {
                    const _0x2df8da = _0x1398;
                    return _0x38ee97[_0x2df8da(0x1ed)](_0x447c8a, _0x411688);
                },
                'hIhRm': function (_0x53999e, _0x1ca686) {
                    const _0x5b969e = _0x1398;
                    return _0x38ee97[_0x5b969e(0x1ee)](_0x53999e, _0x1ca686);
                }
            };
        let _0x2e0802 = '';
        _0x8a47a7[_0x4dc8c8(0x1ef)](_0x38ee97['uHheD']), _0x8a47a7['on'](_0x38ee97[_0x4dc8c8(0x1f0)], function (_0x1aec12) {
            _0x2e0802 += _0x1aec12;
        }), _0x8a47a7['on'](_0x38ee97[_0x4dc8c8(0x1f1)], function () {
            const _0x59b38d = _0x4dc8c8;
            assert[_0x59b38d(0x1de)](_0x2e0802, '/' + _0x39fe92), _0x38ee97[_0x59b38d(0x1f2)](setTimeout, function () {
                const _0x23ef2b = _0x59b38d;
                actualRequests++, _0x2515c8['vDpmf'](makeRequest, _0x2515c8[_0x23ef2b(0x1f3)](_0x39fe92, -0xc6b + 0x6f + 0xbfd * 0x1));
            }, -0x6 * 0x380 + 0x1e62 + 0x961 * -0x1);
        });
    });
}
process['on'](_0x55b203(0x1f4), function () {
    const _0x52e90c = _0x55b203;
    assert[_0x52e90c(0x1de)](actualRequests, expectRequests), console[_0x52e90c(0x1f5)]('ok');
});
