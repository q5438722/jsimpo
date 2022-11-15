'use strict';
const _0xd2b4 = [
    '_read',
    'dRloJ',
    'pipe',
    'oIYiE',
    'nextTick',
    'shouldn\x27t\x20write\x20in\x20prefinish\x20listener',
    'shouldn\x27t\x20write\x20in\x20finish\x20listener',
    'sdkYK',
    '735311fgDHvA',
    '1Dxnull',
    '1549076KAyGBj',
    '1146718NfPkER',
    '165501vBjYPf',
    '3304FNCodg',
    '449yDAphn',
    '555091OLGwjH',
    '69yJGrlw',
    '38992YuHHJj',
    '../common',
    'stream',
    '_write',
    'qkFTw',
    'finish',
    'mustNotCall',
    'prefinish',
    'error',
    'strictEqual',
    'bTOyk',
    'test',
    'Writable',
    'tsfgx',
    'mustCall',
    'message',
    'write\x20test\x20error',
    'end',
    'iDOUm',
    'writev\x20test\x20error',
    'SrYxl',
    'vzNUT',
    'plgfv',
    'cork',
    'wroCx',
    'AWRBc',
    '_writev',
    'RkIlc',
    'lUOTm',
    'write',
    'NAwdP',
    'Readable',
    'push'
];
const _0x5ef875 = _0x3778;
(function (_0x4c54b4, _0x1a5025) {
    const _0x298fc = _0x3778;
    while (!![]) {
        try {
            const _0x8b13e2 = parseInt(_0x298fc(0x176)) * -parseInt(_0x298fc(0x177)) + -parseInt(_0x298fc(0x178)) + parseInt(_0x298fc(0x179)) + parseInt(_0x298fc(0x17a)) + -parseInt(_0x298fc(0x17b)) * parseInt(_0x298fc(0x17c)) + parseInt(_0x298fc(0x17d)) + parseInt(_0x298fc(0x17e)) * parseInt(_0x298fc(0x17f));
            if (_0x8b13e2 === _0x1a5025)
                break;
            else
                _0x4c54b4['push'](_0x4c54b4['shift']());
        } catch (_0x29252b) {
            _0x4c54b4['push'](_0x4c54b4['shift']());
        }
    }
}(_0xd2b4, 0x15ef33 * -0x1 + 0x6 * 0x2f11f + 0x1 * 0x1055ec));
const common = require(_0x5ef875(0x180)), assert = require('assert'), stream = require(_0x5ef875(0x181));
{
    const writable = new stream['Writable']();
    writable[_0x5ef875(0x182)] = (_0x23b917, _0x5b3da2, _0x48d084) => {
        const _0x7548b7 = _0x5ef875, _0x543940 = {
                'qkFTw': function (_0x3dda75, _0xb4668) {
                    return _0x3dda75(_0xb4668);
                },
                'MGelc': 'write\x20test\x20error'
            };
        _0x543940[_0x7548b7(0x183)](_0x48d084, new Error(_0x543940['MGelc']));
    }, writable['on'](_0x5ef875(0x184), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x186), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x187), common['mustCall'](_0x17ec0 => {
        const _0x1b7f8c = _0x5ef875, _0x1fc0dc = { 'bTOyk': 'write\x20test\x20error' };
        assert[_0x1b7f8c(0x188)](_0x17ec0['message'], _0x1fc0dc[_0x1b7f8c(0x189)]);
    })), writable['end'](_0x5ef875(0x18a));
}
{
    const writable = new stream[(_0x5ef875(0x18b))]();
    writable[_0x5ef875(0x182)] = (_0x4d31c7, _0x1fb643, _0x2a06c6) => {
        const _0x13833b = _0x5ef875, _0x226b05 = { 'tsfgx': 'write\x20test\x20error' };
        setImmediate(_0x2a06c6, new Error(_0x226b05[_0x13833b(0x18c)]));
    }, writable['on'](_0x5ef875(0x184), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x186), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)](_0x46ffdd => {
        const _0x1b557f = _0x5ef875;
        assert[_0x1b557f(0x188)](_0x46ffdd[_0x1b557f(0x18e)], _0x1b557f(0x18f));
    })), writable[_0x5ef875(0x190)](_0x5ef875(0x18a));
}
{
    const writable = new stream['Writable']();
    writable[_0x5ef875(0x182)] = (_0x1b95bd, _0x5c8811, _0x3322cc) => {
        const _0x496ffb = _0x5ef875, _0x4df7df = { 'iDOUm': _0x496ffb(0x18f) };
        _0x3322cc(new Error(_0x4df7df[_0x496ffb(0x191)]));
    }, writable['_writev'] = (_0x147a3e, _0x4923f3) => {
        const _0x3b9bd8 = _0x5ef875, _0x4c35c5 = {
                'SrYxl': function (_0x91ac2b, _0x1eb747) {
                    return _0x91ac2b(_0x1eb747);
                },
                'vzNUT': _0x3b9bd8(0x192)
            };
        _0x4c35c5[_0x3b9bd8(0x193)](_0x4923f3, new Error(_0x4c35c5[_0x3b9bd8(0x194)]));
    }, writable['on'](_0x5ef875(0x184), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x186), common['mustNotCall']()), writable['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)](_0x365eb1 => {
        const _0x504e61 = _0x5ef875, _0x537a48 = { 'plgfv': 'writev\x20test\x20error' };
        assert[_0x504e61(0x188)](_0x365eb1[_0x504e61(0x18e)], _0x537a48[_0x504e61(0x195)]);
    })), writable[_0x5ef875(0x196)](), writable['write']('test'), setImmediate(function () {
        const _0x2e6679 = _0x5ef875, _0x5834e1 = { 'wroCx': _0x2e6679(0x18a) };
        writable[_0x2e6679(0x190)](_0x5834e1[_0x2e6679(0x197)]);
    });
}
{
    const writable = new stream[(_0x5ef875(0x18b))]();
    writable[_0x5ef875(0x182)] = (_0x5d47ca, _0x4a7dcc, _0x119ff4) => {
        const _0x42c165 = _0x5ef875, _0x2a8d8b = {
                'izUsT': function (_0x463904, _0x2b1ed8, _0x460bfc) {
                    return _0x463904(_0x2b1ed8, _0x460bfc);
                },
                'AWRBc': _0x42c165(0x18f)
            };
        _0x2a8d8b['izUsT'](setImmediate, _0x119ff4, new Error(_0x2a8d8b[_0x42c165(0x198)]));
    }, writable[_0x5ef875(0x199)] = (_0x3a2ebe, _0xfb1a1b) => {
        const _0x53d77d = _0x5ef875, _0x51d81d = {
                'aWrzM': function (_0x6dc6e6, _0x466002, _0x3e855a) {
                    return _0x6dc6e6(_0x466002, _0x3e855a);
                },
                'RkIlc': _0x53d77d(0x192)
            };
        _0x51d81d['aWrzM'](setImmediate, _0xfb1a1b, new Error(_0x51d81d[_0x53d77d(0x19a)]));
    }, writable['on'](_0x5ef875(0x184), common['mustNotCall']()), writable['on'](_0x5ef875(0x186), common[_0x5ef875(0x185)]()), writable['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)](_0x5f59dd => {
        const _0x54478c = _0x5ef875, _0x28b07f = { 'lUOTm': _0x54478c(0x192) };
        assert[_0x54478c(0x188)](_0x5f59dd[_0x54478c(0x18e)], _0x28b07f[_0x54478c(0x19b)]);
    })), writable[_0x5ef875(0x196)](), writable[_0x5ef875(0x19c)]('test'), setImmediate(function () {
        const _0x1ac874 = _0x5ef875, _0x5110e6 = { 'NAwdP': 'test' };
        writable[_0x1ac874(0x190)](_0x5110e6[_0x1ac874(0x19d)]);
    });
}
{
    const rs = new stream[(_0x5ef875(0x19e))]();
    rs[_0x5ef875(0x19f)]('ok'), rs['push'](null), rs[_0x5ef875(0x1a0)] = () => {
    };
    const ws = new stream[(_0x5ef875(0x18b))]();
    ws['on'](_0x5ef875(0x184), common[_0x5ef875(0x185)]()), ws['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)]()), ws[_0x5ef875(0x182)] = (_0x147423, _0x536a9a, _0x4d3300) => {
        const _0xfb815b = _0x5ef875, _0x1aba8e = {
                'dRloJ': function (_0x41e376, _0x51ddb3, _0x13e384) {
                    return _0x41e376(_0x51ddb3, _0x13e384);
                }
            };
        _0x1aba8e[_0xfb815b(0x1a1)](setImmediate, _0x4d3300, new Error());
    }, rs[_0x5ef875(0x1a2)](ws);
}
{
    const rs = new stream[(_0x5ef875(0x19e))]();
    rs[_0x5ef875(0x19f)]('ok'), rs[_0x5ef875(0x19f)](null), rs[_0x5ef875(0x1a0)] = () => {
    };
    const ws = new stream[(_0x5ef875(0x18b))]();
    ws['on']('finish', common[_0x5ef875(0x185)]()), ws['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)]()), ws['_write'] = (_0x333cda, _0x3d8fde, _0x377b18) => {
        const _0x394bb5 = _0x5ef875, _0x258b65 = {
                'oIYiE': function (_0x1eedcd, _0x1f5f4d) {
                    return _0x1eedcd(_0x1f5f4d);
                }
            };
        _0x258b65[_0x394bb5(0x1a3)](_0x377b18, new Error());
    }, rs[_0x5ef875(0x1a2)](ws);
}
{
    const w = new stream[(_0x5ef875(0x18b))]();
    w[_0x5ef875(0x182)] = (_0x301423, _0x3258b4, _0x13f071) => {
        const _0xa21833 = _0x5ef875;
        process[_0xa21833(0x1a4)](_0x13f071);
    }, w['on'](_0x5ef875(0x187), common[_0x5ef875(0x18d)]()), w['on'](_0x5ef875(0x184), common[_0x5ef875(0x185)]()), w['on'](_0x5ef875(0x186), () => {
        const _0x3003b4 = _0x5ef875, _0x5a8395 = { 'RVXMw': _0x3003b4(0x1a5) };
        w[_0x3003b4(0x19c)](_0x5a8395['RVXMw']);
    }), w[_0x5ef875(0x190)]();
}
function _0x3778(_0x39617c, _0xaced0d) {
    return _0x3778 = function (_0x3b66cf, _0x327f40) {
        _0x3b66cf = _0x3b66cf - (0x2206 + 0x1e7 * -0x3 + -0x1adb);
        let _0x445ac9 = _0xd2b4[_0x3b66cf];
        return _0x445ac9;
    }, _0x3778(_0x39617c, _0xaced0d);
}
{
    const w = new stream[(_0x5ef875(0x18b))]();
    w[_0x5ef875(0x182)] = (_0x3b2007, _0x250b77, _0x5198c8) => {
        const _0x38ad51 = _0x5ef875;
        process[_0x38ad51(0x1a4)](_0x5198c8);
    }, w['on'](_0x5ef875(0x187), common['mustCall']()), w['on'](_0x5ef875(0x184), () => {
        const _0x58449d = _0x5ef875, _0x587e50 = { 'sdkYK': _0x58449d(0x1a6) };
        w[_0x58449d(0x19c)](_0x587e50[_0x58449d(0x1a7)]);
    }), w['end']();
}
