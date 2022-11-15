'use strict';
const _0x2478 = [
    'cork',
    'write',
    'Readable',
    'push',
    'pipe',
    'nextTick',
    'shouldn\x27t\x20write\x20in\x20finish\x20listener',
    '22TvZOLk',
    '1316nafJzc',
    '1819ewANrX',
    '201cJWrmn',
    '309060sOfzHx',
    '51019MmDvVJ',
    '3nrFoWN',
    '175122ePUDTn',
    '10666jbjkJe',
    '23yEpYiZ',
    '200587doVIND',
    '../common',
    'assert',
    'stream',
    'Writable',
    'write\x20test\x20error',
    'finish',
    'mustNotCall',
    'prefinish',
    'mustCall',
    'message',
    'end',
    'test',
    'error',
    'strictEqual',
    '_write',
    '_writev',
    'writev\x20test\x20error'
];
const _0x3c59c4 = _0x7c8c;
(function (_0x3b1a0d, _0x13a3c7) {
    const _0xcc8440 = _0x7c8c;
    while (!![]) {
        try {
            const _0x4b07a4 = -parseInt(_0xcc8440(0xf8)) * -parseInt(_0xcc8440(0xf9)) + parseInt(_0xcc8440(0xfa)) * parseInt(_0xcc8440(0xfb)) + -parseInt(_0xcc8440(0xfc)) + parseInt(_0xcc8440(0xfd)) * -parseInt(_0xcc8440(0xfe)) + -parseInt(_0xcc8440(0xff)) + -parseInt(_0xcc8440(0x100)) * -parseInt(_0xcc8440(0x101)) + parseInt(_0xcc8440(0x102));
            if (_0x4b07a4 === _0x13a3c7)
                break;
            else
                _0x3b1a0d['push'](_0x3b1a0d['shift']());
        } catch (_0x9e02c9) {
            _0x3b1a0d['push'](_0x3b1a0d['shift']());
        }
    }
}(_0x2478, 0x319e5));
const common = require(_0x3c59c4(0x103)), assert = require(_0x3c59c4(0x104)), stream = require(_0x3c59c4(0x105));
{
    const writable = new stream[(_0x3c59c4(0x106))]();
    writable['_write'] = (_0x1393cc, _0x1ae458, _0x42adb4) => {
        const _0x3c1dd3 = _0x3c59c4;
        _0x42adb4(new Error(_0x3c1dd3(0x107)));
    }, writable['on'](_0x3c59c4(0x108), common[_0x3c59c4(0x109)]()), writable['on'](_0x3c59c4(0x10a), common[_0x3c59c4(0x109)]()), writable['on']('error', common[_0x3c59c4(0x10b)](_0x351d57 => {
        const _0x4673af = _0x3c59c4;
        assert['strictEqual'](_0x351d57[_0x4673af(0x10c)], _0x4673af(0x107));
    })), writable[_0x3c59c4(0x10d)](_0x3c59c4(0x10e));
}
function _0x7c8c(_0x43bcf1, _0x38163d) {
    return _0x7c8c = function (_0x247837, _0x7c8c7c) {
        _0x247837 = _0x247837 - 0xf8;
        let _0x221d3c = _0x2478[_0x247837];
        return _0x221d3c;
    }, _0x7c8c(_0x43bcf1, _0x38163d);
}
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0x21ffe7, _0x22158f, _0x11cd32) => {
        const _0x324eef = _0x3c59c4;
        setImmediate(_0x11cd32, new Error(_0x324eef(0x107)));
    }, writable['on']('finish', common[_0x3c59c4(0x109)]()), writable['on']('prefinish', common[_0x3c59c4(0x109)]()), writable['on'](_0x3c59c4(0x10f), common[_0x3c59c4(0x10b)](_0x9c6842 => {
        const _0x48a104 = _0x3c59c4;
        assert[_0x48a104(0x110)](_0x9c6842[_0x48a104(0x10c)], 'write\x20test\x20error');
    })), writable[_0x3c59c4(0x10d)](_0x3c59c4(0x10e));
}
{
    const writable = new stream[(_0x3c59c4(0x106))]();
    writable[_0x3c59c4(0x111)] = (_0x5905f2, _0x3763eb, _0x86dd79) => {
        const _0x5f38f5 = _0x3c59c4;
        _0x86dd79(new Error(_0x5f38f5(0x107)));
    }, writable[_0x3c59c4(0x112)] = (_0x5b680f, _0x2c3f85) => {
        const _0x254b98 = _0x3c59c4;
        _0x2c3f85(new Error(_0x254b98(0x113)));
    }, writable['on']('finish', common[_0x3c59c4(0x109)]()), writable['on'](_0x3c59c4(0x10a), common[_0x3c59c4(0x109)]()), writable['on']('error', common['mustCall'](_0x34d45a => {
        const _0x2047a6 = _0x3c59c4;
        assert[_0x2047a6(0x110)](_0x34d45a[_0x2047a6(0x10c)], _0x2047a6(0x113));
    })), writable[_0x3c59c4(0x114)](), writable[_0x3c59c4(0x115)](_0x3c59c4(0x10e)), setImmediate(function () {
        const _0x28ad07 = _0x3c59c4;
        writable[_0x28ad07(0x10d)](_0x28ad07(0x10e));
    });
}
{
    const writable = new stream[(_0x3c59c4(0x106))]();
    writable[_0x3c59c4(0x111)] = (_0x196a0a, _0x8106f9, _0x165a19) => {
        setImmediate(_0x165a19, new Error('write\x20test\x20error'));
    }, writable[_0x3c59c4(0x112)] = (_0x1b594f, _0x3e6aeb) => {
        setImmediate(_0x3e6aeb, new Error('writev\x20test\x20error'));
    }, writable['on'](_0x3c59c4(0x108), common['mustNotCall']()), writable['on'](_0x3c59c4(0x10a), common[_0x3c59c4(0x109)]()), writable['on'](_0x3c59c4(0x10f), common[_0x3c59c4(0x10b)](_0x57d337 => {
        const _0x5df3e9 = _0x3c59c4;
        assert[_0x5df3e9(0x110)](_0x57d337[_0x5df3e9(0x10c)], _0x5df3e9(0x113));
    })), writable[_0x3c59c4(0x114)](), writable['write'](_0x3c59c4(0x10e)), setImmediate(function () {
        const _0xb02c8 = _0x3c59c4;
        writable[_0xb02c8(0x10d)]('test');
    });
}
{
    const rs = new stream[(_0x3c59c4(0x116))]();
    rs[_0x3c59c4(0x117)]('ok'), rs[_0x3c59c4(0x117)](null), rs['_read'] = () => {
    };
    const ws = new stream[(_0x3c59c4(0x106))]();
    ws['on'](_0x3c59c4(0x108), common[_0x3c59c4(0x109)]()), ws['on'](_0x3c59c4(0x10f), common[_0x3c59c4(0x10b)]()), ws[_0x3c59c4(0x111)] = (_0xaf345, _0x54bf06, _0x2c9b55) => {
        setImmediate(_0x2c9b55, new Error());
    }, rs['pipe'](ws);
}
{
    const rs = new stream['Readable']();
    rs[_0x3c59c4(0x117)]('ok'), rs[_0x3c59c4(0x117)](null), rs['_read'] = () => {
    };
    const ws = new stream['Writable']();
    ws['on']('finish', common[_0x3c59c4(0x109)]()), ws['on'](_0x3c59c4(0x10f), common[_0x3c59c4(0x10b)]()), ws[_0x3c59c4(0x111)] = (_0x52dc6f, _0x281706, _0xa6aa9) => {
        _0xa6aa9(new Error());
    }, rs[_0x3c59c4(0x118)](ws);
}
{
    const w = new stream[(_0x3c59c4(0x106))]();
    w[_0x3c59c4(0x111)] = (_0x45439d, _0x303cce, _0x170219) => {
        const _0x19083c = _0x3c59c4;
        process[_0x19083c(0x119)](_0x170219);
    }, w['on']('error', common['mustCall']()), w['on'](_0x3c59c4(0x108), common[_0x3c59c4(0x109)]()), w['on']('prefinish', () => {
        const _0x6901db = _0x3c59c4;
        w[_0x6901db(0x115)]('shouldn\x27t\x20write\x20in\x20prefinish\x20listener');
    }), w[_0x3c59c4(0x10d)]();
}
{
    const w = new stream[(_0x3c59c4(0x106))]();
    w['_write'] = (_0x162410, _0x92eb94, _0x47879e) => {
        process['nextTick'](_0x47879e);
    }, w['on'](_0x3c59c4(0x10f), common['mustCall']()), w['on'](_0x3c59c4(0x108), () => {
        const _0x5c0b8b = _0x3c59c4;
        w[_0x5c0b8b(0x115)](_0x5c0b8b(0x11a));
    }), w[_0x3c59c4(0x10d)]();
}
