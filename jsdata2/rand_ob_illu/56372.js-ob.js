'use strict';

const _0x2568 = ['MBHei', 'jrziv', 'RsAFK', 'close', 'listen', 'get', 'address', 'host', 'port', 'upgrade', 'websocket', 'strictEqual', 'destroy', '3XkWJUC', '174453ziKZTe', '4ljlnPR', '145682vWXqFC', '1133073kqeHPn', '16oMqzto', '8796rtbSOF', '793385jFMZKo', '1225328nucZNe', '3481690Gaqxpk', '../common', 'assert', 'http', 'createServer', 'HTTP/1.1 101 Switching Protocols\r\n', 'Transfer-Encoding: chunked\r\n', 'Upgrade: websocket\r\n', 'latin1', 'write', 'sfAgi', 'FSuOt', 'cebav', 'cxQjm'];
const _0x196385 = _0x2ba0;

(function (_0x495015, _0x1bbf48) {
    const _0x3629e7 = _0x2ba0;

    while (true) {
        try {
            const _0x4a7667 = parseInt(_0x3629e7(0x1c3)) * parseInt(_0x3629e7(0x1c4)) + parseInt(_0x3629e7(0x1c5)) * parseInt(_0x3629e7(0x1c6)) + parseInt(_0x3629e7(0x1c7)) + parseInt(_0x3629e7(0x1c8)) * -parseInt(_0x3629e7(0x1c9)) + parseInt(_0x3629e7(0x1ca)) + parseInt(_0x3629e7(0x1cb)) + -parseInt(_0x3629e7(0x1cc));

            if (_0x4a7667 === _0x1bbf48) break;else _0x495015.push(_0x495015.shift());
        } catch (_0x1d5bc6) {
            _0x495015.push(_0x495015.shift());
        }
    }
})(_0x2568, 635447);

var { mustCall } = require(_0x196385(0x1cd));

const assert = require(_0x196385(0x1ce));

const http = require(_0x196385(0x1cf));

const net = require('net');

function _0x2ba0(_0x54f05d, _0x4faa40) {
    return _0x2ba0 = function (_0xd3a037, _0x2b0670) {
        _0xd3a037 = _0xd3a037 - 451;
        const _0x4d5192 = _0x2568[_0xd3a037];

        return _0x4d5192;
    }, _0x2ba0(_0x54f05d, _0x4faa40);
}
net[_0x196385(0x1d0)](mustCall(function (_0x905769) {
    const _0x1cc657 = _0x196385;
    const _0x30bfec = {
        'sfAgi': function (_0x53c25e, _0x4ed63b) {
            return _0x53c25e + _0x4ed63b;
        },
        'FSuOt': function (_0x2912c9, _0xe11df0) {
            return _0x2912c9 + _0xe11df0;
        },
        'cebav': _0x1cc657(0x1d1),
        'cxQjm': 'Connection: upgrade\r\n',
        'MBHei': _0x1cc657(0x1d2),
        'jrziv': _0x1cc657(0x1d3),
        'RsAFK': _0x1cc657(0x1d4)
    };

    _0x905769[_0x1cc657(0x1d5)](_0x30bfec[_0x1cc657(0x1d6)](_0x30bfec[_0x1cc657(0x1d7)](_0x30bfec.FSuOt(_0x30bfec[_0x1cc657(0x1d7)](_0x30bfec.FSuOt(_0x30bfec[_0x1cc657(0x1d8)], _0x30bfec[_0x1cc657(0x1d9)]), _0x30bfec[_0x1cc657(0x1da)]), _0x30bfec[_0x1cc657(0x1db)]), '\r\n'), '\x80'), _0x30bfec[_0x1cc657(0x1dc)]), this[_0x1cc657(0x1dd)]();
}))[_0x196385(0x1de)](0, mustCall(function () {
    const _0x4230f6 = _0x196385;
    const _0x1c4e80 = {
        'HQiQT': function (_0x53e9a9, _0x575990) {
            return _0x53e9a9(_0x575990);
        }
    };

    http[_0x4230f6(0x1df)]({
        'host': this[_0x4230f6(0x1e0)]()[_0x4230f6(0x1e1)],
        'port': this[_0x4230f6(0x1e0)]()[_0x4230f6(0x1e2)],
        'headers': {
            'Connection': _0x4230f6(0x1e3),
            'Upgrade': _0x4230f6(0x1e4)
        }
    }).on('upgrade', _0x1c4e80.HQiQT(mustCall, (_0x247b80, _0x4b65f7, _0x566b28) => {
        const _0x6c5eec = _0x4230f6;

        assert[_0x6c5eec(0x1e5)](_0x566b28.length, 1), assert[_0x6c5eec(0x1e5)](_0x566b28[0], 128), _0x4b65f7[_0x6c5eec(0x1e6)]();
    }));
}));
