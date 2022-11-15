const _0x3eb2 = ['ready on', '3lLGXBx', '188884xzvGoZ', '438659FYxyKQ', '23bdCyuO', '1601qZUtkf', '1pXoFRJ', '224813CgTSuj', '52298zEiKWt', '419644VXfgQa', '2003yqZSad', '6PBjjEv', 'path', 'createServer', '.next/serverless/pages/', 'internal error', '/[[...slug]].js', 'failed to render', 'join', 'rfNDE', 'default', 'statusCode', 'end', 'nzSrW', 'error', 'PDWjB', 'env', 'listen', 'log'];

function _0x5203(_0x5ec9a4, _0x16f35b) {
    return _0x5203 = function (_0x4f8163, _0x5b5e03) {
        _0x4f8163 = _0x4f8163 - 114;
        const _0xd00837 = _0x3eb2[_0x4f8163];

        return _0xd00837;
    }, _0x5203(_0x5ec9a4, _0x16f35b);
}
const _0x25ca06 = _0x5203;

(function (_0x5e8af6, _0x1a9394) {
    const _0x1b3619 = _0x5203;

    while (true) {
        try {
            const _0x377f65 = parseInt(_0x1b3619(0x72)) * parseInt(_0x1b3619(0x73)) + -parseInt(_0x1b3619(0x74)) + -parseInt(_0x1b3619(0x75)) * -parseInt(_0x1b3619(0x76)) + -parseInt(_0x1b3619(0x77)) * parseInt(_0x1b3619(0x78)) + -parseInt(_0x1b3619(0x79)) + parseInt(_0x1b3619(0x7a)) + parseInt(_0x1b3619(0x7b)) * -parseInt(_0x1b3619(0x7c));

            if (_0x377f65 === _0x1a9394) break;else _0x5e8af6.push(_0x5e8af6.shift());
        } catch (_0x22835a) {
            _0x5e8af6.push(_0x5e8af6.shift());
        }
    }
})(_0x3eb2, 295331);

const path = require(_0x25ca06(0x7d));

const http = require('http');

const server = http[_0x25ca06(0x7e)](async (_0x568363, _0x288c0e) => {
    const _0x2a1ddb = _0x25ca06;
    const _0x494f8e = {
        'LGskE': function (_0x2cbc5f, _0x56bf9e) {
            return _0x2cbc5f(_0x56bf9e);
        },
        'rfNDE': _0x2a1ddb(0x7f),
        'nzSrW': _0x2a1ddb(0x80),
        'XjNHW': _0x2a1ddb(0x81),
        'xGavf': _0x2a1ddb(0x82),
        'PDWjB': 'Internal Error'
    };

    const _0x2cf9cb = async _0x14f182 => {
        const _0x2084fa = _0x2a1ddb;

        const _0x1a8701 = _0x494f8e.LGskE(require, './' + path[_0x2084fa(0x83)](_0x494f8e[_0x2084fa(0x84)], _0x14f182));

        try {
            return await (_0x1a8701.render || _0x1a8701[_0x2084fa(0x85)] || _0x1a8701)(_0x568363, _0x288c0e);
        } catch (_0x70d444) {
            return _0x288c0e[_0x2084fa(0x86)] = 500, _0x288c0e[_0x2084fa(0x87)](_0x494f8e[_0x2084fa(0x88)]);
        }
    };

    try {
        await _0x2cf9cb(_0x494f8e.XjNHW);
    } catch (_0x515a0b) {
        console[_0x2a1ddb(0x89)](_0x494f8e.xGavf, _0x515a0b), _0x288c0e[_0x2a1ddb(0x86)] = 500, _0x288c0e.end(_0x494f8e[_0x2a1ddb(0x8a)]);
    }
});

const port = process[_0x25ca06(0x8b)].PORT || 3000;

server[_0x25ca06(0x8c)](port, () => {
    const _0x4598eb = _0x25ca06;

    console[_0x4598eb(0x8d)](_0x4598eb(0x8e), port);
});
