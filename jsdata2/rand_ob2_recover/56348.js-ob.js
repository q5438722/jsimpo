const common = require(_0x3c59c4(259)), assert = require(_0x3c59c4(260)), stream = require(_0x3c59c4(261));
{
    const writable = new stream[(_0x3c59c4(262))]();
    writable['_write'] = (_0x1393cc, _0x1ae458, _0x42adb4) => {
        const _0x3c1dd3 = _0x3c59c4;
        _0x42adb4(new Error(_0x3c1dd3(263)));
    }, writable['on'](_0x3c59c4(264), common[_0x3c59c4(265)]()), writable['on'](_0x3c59c4(266), common[_0x3c59c4(265)]()), writable['on']('error', common[_0x3c59c4(267)](_0x351d57 => {
        const _0x4673af = _0x3c59c4;
        assert['strictEqual'](_0x351d57[_0x4673af(268)], _0x4673af(263));
    })), writable[_0x3c59c4(269)](_0x3c59c4(270));
}
function _0x7c8c(_0x43bcf1, _0x38163d) {
    return _0x7c8c = function (_0x247837, _0x7c8c7c) {
        _0x247837 = _0x247837 - 248;
        let _0x221d3c = _0x2478[_0x247837];
        return _0x221d3c;
    }, _0x7c8c(_0x43bcf1, _0x38163d);
}
{
    const writable = new stream['Writable']();
    writable['_write'] = (_0x21ffe7, _0x22158f, _0x11cd32) => {
        const _0x324eef = _0x3c59c4;
        setImmediate(_0x11cd32, new Error(_0x324eef(263)));
    }, writable['on']('finish', common[_0x3c59c4(265)]()), writable['on']('prefinish', common[_0x3c59c4(265)]()), writable['on'](_0x3c59c4(271), common[_0x3c59c4(267)](_0x9c6842 => {
        const _0x48a104 = _0x3c59c4;
        assert[_0x48a104(272)](_0x9c6842[_0x48a104(268)], 'write test error');
    })), writable[_0x3c59c4(269)](_0x3c59c4(270));
}
{
    const writable = new stream[(_0x3c59c4(262))]();
    writable[_0x3c59c4(273)] = (_0x5905f2, _0x3763eb, _0x86dd79) => {
        const _0x5f38f5 = _0x3c59c4;
        _0x86dd79(new Error(_0x5f38f5(263)));
    }, writable[_0x3c59c4(274)] = (_0x5b680f, _0x2c3f85) => {
        const _0x254b98 = _0x3c59c4;
        _0x2c3f85(new Error(_0x254b98(275)));
    }, writable['on']('finish', common[_0x3c59c4(265)]()), writable['on'](_0x3c59c4(266), common[_0x3c59c4(265)]()), writable['on']('error', common['mustCall'](_0x34d45a => {
        const _0x2047a6 = _0x3c59c4;
        assert[_0x2047a6(272)](_0x34d45a[_0x2047a6(268)], _0x2047a6(275));
    })), writable[_0x3c59c4(276)](), writable[_0x3c59c4(277)](_0x3c59c4(270)), setImmediate(function () {
        const _0x28ad07 = _0x3c59c4;
        writable[_0x28ad07(269)](_0x28ad07(270));
    });
}
{
    const writable = new stream[(_0x3c59c4(262))]();
    writable[_0x3c59c4(273)] = (_0x196a0a, _0x8106f9, _0x165a19) => {
        setImmediate(_0x165a19, new Error('write test error'));
    }, writable[_0x3c59c4(274)] = (_0x1b594f, _0x3e6aeb) => {
        setImmediate(_0x3e6aeb, new Error('writev test error'));
    }, writable['on'](_0x3c59c4(264), common['mustNotCall']()), writable['on'](_0x3c59c4(266), common[_0x3c59c4(265)]()), writable['on'](_0x3c59c4(271), common[_0x3c59c4(267)](_0x57d337 => {
        const _0x5df3e9 = _0x3c59c4;
        assert[_0x5df3e9(272)](_0x57d337[_0x5df3e9(268)], _0x5df3e9(275));
    })), writable[_0x3c59c4(276)](), writable['write'](_0x3c59c4(270)), setImmediate(function () {
        const _0xb02c8 = _0x3c59c4;
        writable[_0xb02c8(269)]('test');
    });
}
{
    const rs = new stream[(_0x3c59c4(278))]();
    rs[_0x3c59c4(279)]('ok'), rs[_0x3c59c4(279)](null), rs['_read'] = () => {
    };
    const ws = new stream[(_0x3c59c4(262))]();
    ws['on'](_0x3c59c4(264), common[_0x3c59c4(265)]()), ws['on'](_0x3c59c4(271), common[_0x3c59c4(267)]()), ws[_0x3c59c4(273)] = (_0xaf345, _0x54bf06, _0x2c9b55) => {
        setImmediate(_0x2c9b55, new Error());
    }, rs['pipe'](ws);
}
{
    const rs = new stream['Readable']();
    rs[_0x3c59c4(279)]('ok'), rs[_0x3c59c4(279)](null), rs['_read'] = () => {
    };
    const ws = new stream['Writable']();
    ws['on']('finish', common[_0x3c59c4(265)]()), ws['on'](_0x3c59c4(271), common[_0x3c59c4(267)]()), ws[_0x3c59c4(273)] = (_0x52dc6f, _0x281706, _0xa6aa9) => {
        _0xa6aa9(new Error());
    }, rs[_0x3c59c4(280)](ws);
}
{
    const w = new stream[(_0x3c59c4(262))]();
    w[_0x3c59c4(273)] = (_0x45439d, _0x303cce, _0x170219) => {
        const _0x19083c = _0x3c59c4;
        process[_0x19083c(281)](_0x170219);
    }, w['on']('error', common['mustCall']()), w['on'](_0x3c59c4(264), common[_0x3c59c4(265)]()), w['on']('prefinish', () => {
        const _0x6901db = _0x3c59c4;
        w[_0x6901db(277)]('shouldn\'t write in prefinish listener');
    }), w[_0x3c59c4(269)]();
}
{
    const w = new stream[(_0x3c59c4(262))]();
    w['_write'] = (_0x162410, _0x92eb94, _0x47879e) => {
        process['nextTick'](_0x47879e);
    }, w['on'](_0x3c59c4(271), common['mustCall']()), w['on'](_0x3c59c4(264), () => {
        const _0x5c0b8b = _0x3c59c4;
        w[_0x5c0b8b(277)](_0x5c0b8b(282));
    }), w[_0x3c59c4(269)]();
}