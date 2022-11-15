'use strict';
const common = require('../common');
const assert = require('assert');
const stream = require('stream');
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0x5e193b, _0x432ec6, _0x79d3dc) => {
        _0x79d3dc(new Error('write test error'));
    };
    writable['on']('finish', common['mustNotCall']());
    writable['on']('prefinish', common['mustNotCall']());
    writable['on']('error', common['mustCall'](_0x4e882e => {
        assert['strictEqual'](_0x4e882e['message'], 'write test error');
    }));
    writable['end']('test');
}
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0x2a4e2f, _0xed009f, _0x4557a5) => {
        setImmediate(_0x4557a5, new Error('write test error'));
    };
    writable['on']('finish', common['mustNotCall']());
    writable['on']('prefinish', common['mustNotCall']());
    writable['on']('error', common['mustCall'](_0x3f231c => {
        assert['strictEqual'](_0x3f231c['message'], 'write test error');
    }));
    writable['end']('test');
}
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0xfa6e7d, _0x4dac52, _0xcbde43) => {
        _0xcbde43(new Error('write test error'));
    };
    writable['_writev'] = (_0x301c3d, _0x39f206) => {
        _0x39f206(new Error('writev test error'));
    };
    writable['on']('finish', common['mustNotCall']());
    writable['on']('prefinish', common['mustNotCall']());
    writable['on']('error', common['mustCall'](_0x26ecbd => {
        assert['strictEqual'](_0x26ecbd['message'], 'writev test error');
    }));
    writable['cork']();
    writable['write']('test');
    setImmediate(function () {
        writable['end']('test');
    });
}
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0x25112b, _0x275b07, _0x29149c) => {
        setImmediate(_0x29149c, new Error('write test error'));
    };
    writable['_writev'] = (_0x30c97f, _0x184553) => {
        setImmediate(_0x184553, new Error('writev test error'));
    };
    writable['on']('finish', common['mustNotCall']());
    writable['on']('prefinish', common['mustNotCall']());
    writable['on']('error', common['mustCall'](_0x3a3ff4 => {
        assert['strictEqual'](_0x3a3ff4['message'], 'writev test error');
    }));
    writable['cork']();
    writable['write']('test');
    setImmediate(function () {
        writable['end']('test');
    });
}
{
    const rs = new stream['Readable']();
    rs['push']('ok');
    rs['push'](null);
    rs['_read'] = () => {
    };
    const ws = new stream['Writable']();
    ws['on']('finish', common['mustNotCall']());
    ws['on']('error', common['mustCall']());
    ws['_write'] = (_0x22fc1d, _0x10f911, _0x432267) => {
        setImmediate(_0x432267, new Error());
    };
    rs['pipe'](ws);
}
{
    const rs = new stream['Readable']();
    rs['push']('ok');
    rs['push'](null);
    rs['_read'] = () => {
    };
    const ws = new stream['Writable']();
    ws['on']('finish', common['mustNotCall']());
    ws['on']('error', common['mustCall']());
    ws['_write'] = (_0x9fb075, _0x1c6376, _0x4dc5dd) => {
        _0x4dc5dd(new Error());
    };
    rs['pipe'](ws);
}
{
    const w = new stream['Writable']();
    w['_write'] = (_0x601eba, _0xc57e9e, _0x449186) => {
        process['nextTick'](_0x449186);
    };
    w['on']('error', common['mustCall']());
    w['on']('finish', common['mustNotCall']());
    w['on']('prefinish', () => {
        w['write']('shouldn\'t write in prefinish listener');
    });
    w['end']();
}
{
    const w = new stream['Writable']();
    w['_write'] = (_0x5aa0c6, _0x4a0dc5, _0x3a392a) => {
        process['nextTick'](_0x3a392a);
    };
    w['on']('error', common['mustCall']());
    w['on']('finish', () => {
        w['write']('shouldn\'t write in finish listener');
    });
    w['end']();
}