const t = require(_0x226bc1(119)), glob = require(_0x226bc1(120)), {resolve} = require(_0x226bc1(121)), {real: mockNpm} = require(_0x226bc1(122)), full = process[_0x226bc1(123)][_0x226bc1(124)] === _0x226bc1(125);
function _0x3cbe(_0x3abc72, _0x30dc29) {
    return _0x3cbe = function (_0x68406f, _0x3cbe36) {
        _0x68406f = _0x68406f - 105;
        let _0x1317fd = _0x6840[_0x68406f];
        return _0x1317fd;
    }, _0x3cbe(_0x3abc72, _0x30dc29);
}
if (!full)
    t['pass']('nothing to do here, not checking for full coverage');
else {
    const {npm} = mockNpm(t);
    t[_0x226bc1(126)](() => {
        const _0x39ea70 = _0x226bc1, _0x58ed67 = require(_0x39ea70(127));
        _0x58ed67[_0x39ea70(128)](npm), _0x58ed67();
    }), t[_0x226bc1(129)]('load npm first', async _0x10607d => {
        const _0x2adf26 = _0x226bc1;
        await npm[_0x2adf26(130)]();
    }), t[_0x226bc1(129)]('load all the files', _0x49b69c => {
        const _0x573fb0 = _0x226bc1, _0x32194a = resolve(__dirname, _0x573fb0(131));
        for (const _0x176400 of glob[_0x573fb0(132)](_0x32194a + '/**/*.js')) {
            require(_0x176400), _0x49b69c[_0x573fb0(133)](_0x573fb0(134) + _0x176400);
        }
        _0x49b69c['pass'](_0x573fb0(135)), _0x49b69c['end']();
    });
}