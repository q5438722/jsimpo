var test = require('tape');
var through = require('../');
test('end before close', function (_0x1f2fc6) {
    var _0x4aca45 = through();
    _0x4aca45['autoDestroy'] = ![];
    var _0xa9e2bf = ![], _0x5dcd10 = ![];
    _0x4aca45['on']('end', function () {
        _0x1f2fc6['ok'](!_0x5dcd10);
        _0xa9e2bf = !![];
    });
    _0x4aca45['on']('close', function () {
        _0x1f2fc6['ok'](_0xa9e2bf);
        _0x5dcd10 = !![];
    });
    _0x4aca45['write'](1);
    _0x4aca45['write'](2);
    _0x4aca45['write'](3);
    _0x4aca45['end']();
    _0x1f2fc6['ok'](_0xa9e2bf);
    _0x1f2fc6['notOk'](_0x5dcd10);
    _0x4aca45['destroy']();
    _0x1f2fc6['ok'](_0x5dcd10);
    _0x1f2fc6['end']();
});