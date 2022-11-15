const common = require(_0x49b370(147)), assert = require(_0x49b370(148)), http = require(_0x49b370(149)), server = http[_0x49b370(150)](common['mustCall'](function (_0x412fe5, _0x2505d2) {
        const _0x4d06e8 = _0x49b370;
        _0x2505d2['writeHead'](200), _0x2505d2[_0x4d06e8(151)]('ok');
    }));
server[_0x49b370(152)](0, function () {
    const _0x473f5c = _0x49b370, _0x25e0d6 = new http[(_0x473f5c(153))]();
    _0x25e0d6[_0x473f5c(154)] = this[_0x473f5c(155)]()[_0x473f5c(156)];
    const _0x5a88fe = {
        'host': undefined,
        'hostname': common[_0x473f5c(157)],
        'port': undefined,
        'defaultPort': undefined,
        'path': undefined,
        'method': undefined,
        'agent': _0x25e0d6
    };
    http[_0x473f5c(158)](_0x5a88fe, function (_0x2fa672) {
        const _0x30b286 = _0x473f5c;
        _0x2fa672[_0x30b286(159)](), server[_0x30b286(160)](), assert[_0x30b286(161)](_0x5a88fe['host'], undefined), assert[_0x30b286(161)](_0x5a88fe[_0x30b286(162)], common[_0x30b286(157)]), assert[_0x30b286(161)](_0x5a88fe[_0x30b286(156)], undefined), assert[_0x30b286(161)](_0x5a88fe[_0x30b286(154)], undefined), assert[_0x30b286(161)](_0x5a88fe[_0x30b286(163)], undefined), assert[_0x30b286(161)](_0x5a88fe['method'], undefined);
    })[_0x473f5c(151)]();
});