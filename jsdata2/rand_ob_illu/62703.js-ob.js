const _0x1015 = ['1003100TVZIFY', 'BCfxq', 'unregister', 'this is the key', 'register', 'holdings', 'fHBlY', '178477DokVMX', '267718NbCdvJ', '6SYdWIs', '29542LkEZvL', '155969yWmrpQ', '167457HvsfLF', '84034qjYprn'];
const _0x1c50dc = _0x3d48;

(function (_0x163aaa, _0x176efd) {
    const _0x2db6cd = _0x3d48;

    while (true) {
        try {
            const _0x1e908d = -parseInt(_0x2db6cd(0x16b)) + -parseInt(_0x2db6cd(0x16c)) + -parseInt(_0x2db6cd(0x16d)) * parseInt(_0x2db6cd(0x16e)) + -parseInt(_0x2db6cd(0x16f)) + -parseInt(_0x2db6cd(0x170)) + parseInt(_0x2db6cd(0x171)) + parseInt(_0x2db6cd(0x172));

            if (_0x1e908d === _0x176efd) break;else _0x163aaa.push(_0x163aaa.shift());
        } catch (_0x47a7f4) {
            _0x163aaa.push(_0x163aaa.shift());
        }
    }
})(_0x1015, 140261);
var cleanup_call_count = 0;
var cleanup_holdings_count = 0;

const cleanup = function (_0x2c0dca) {
    const _0x3d586c = _0x3d48;
    const _0x3fcdde = {
        'BCfxq': function (_0x589acf, _0x22f5db, _0x379529) {
            return _0x589acf(_0x22f5db, _0x379529);
        }
    };

    _0x3fcdde[_0x3d586c(0x173)](assertEquals, _0x2c0dca, 'holdings');

    const _0x710b3e = fg[_0x3d586c(0x174)](key);

    assertTrue(_0x710b3e), ++cleanup_holdings_count, ++cleanup_call_count;
};

const fg = new FinalizationRegistry(cleanup);
const key = { 'k': _0x1c50dc(0x175) };

(function () {
    const _0x2f8d24 = _0x1c50dc;
    const _0x34175b = {};
    const _0x3aa3ca = {};

    fg.register(_0x34175b, 'holdings', key), fg[_0x2f8d24(0x176)](_0x3aa3ca, _0x2f8d24(0x177), key);
})(), gc(), assertEquals(0, cleanup_call_count);

const timeout_func = function () {
    const _0x3c7135 = _0x1c50dc;
    const _0x5790e3 = {
        'fHBlY': function (_0x5b4741, _0x97dfaf, _0x3c1a41) {
            return _0x5b4741(_0x97dfaf, _0x3c1a41);
        }
    };

    _0x5790e3[_0x3c7135(0x178)](assertEquals, 1, cleanup_call_count), _0x5790e3[_0x3c7135(0x178)](assertEquals, 1, cleanup_holdings_count);
};

function _0x3d48(_0x222310, _0x4dad89) {
    return _0x3d48 = function (_0x513c96, _0x533e29) {
        _0x513c96 = _0x513c96 - 363;
        const _0x44ca9c = _0x1015[_0x513c96];

        return _0x44ca9c;
    }, _0x3d48(_0x222310, _0x4dad89);
}
setTimeout(timeout_func, 0);
