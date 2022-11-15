'use strict';
const _0x2c6d = [
    'hostname',
    'path',
    '202893sYTAvW',
    '9FoWRna',
    '1yLiaRS',
    '48563TAFWge',
    '1inYWpO',
    '1694139lkouSv',
    '903262okPnMu',
    '2lSzIem',
    '56849ybfItL',
    '2sAlSMS',
    '1324257zwwGFo',
    '1OftNda',
    '1czijoh',
    '5090559GNfFyH',
    '../common',
    'assert',
    'http',
    'createServer',
    'end',
    'listen',
    'Agent',
    'defaultPort',
    'address',
    'port',
    'localhostIPv4',
    'request',
    'resume',
    'close',
    'strictEqual'
];
function _0x4e59(_0x17e82b, _0x5e89e0) {
    return _0x4e59 = function (_0x2c6db3, _0x4e5901) {
        _0x2c6db3 = _0x2c6db3 - 0x85;
        let _0x582d24 = _0x2c6d[_0x2c6db3];
        return _0x582d24;
    }, _0x4e59(_0x17e82b, _0x5e89e0);
}
const _0x49b370 = _0x4e59;
(function (_0x1515c6, _0x7dcfe2) {
    const _0x108969 = _0x4e59;
    while (!![]) {
        try {
            const _0x4c86a4 = parseInt(_0x108969(0x85)) * -parseInt(_0x108969(0x86)) + -parseInt(_0x108969(0x87)) * parseInt(_0x108969(0x88)) + parseInt(_0x108969(0x89)) * -parseInt(_0x108969(0x8a)) + parseInt(_0x108969(0x8b)) * -parseInt(_0x108969(0x8c)) + -parseInt(_0x108969(0x8d)) * parseInt(_0x108969(0x8e)) + -parseInt(_0x108969(0x8f)) * -parseInt(_0x108969(0x90)) + parseInt(_0x108969(0x91)) * parseInt(_0x108969(0x92));
            if (_0x4c86a4 === _0x7dcfe2)
                break;
            else
                _0x1515c6['push'](_0x1515c6['shift']());
        } catch (_0x201aa4) {
            _0x1515c6['push'](_0x1515c6['shift']());
        }
    }
}(_0x2c6d, 0xe209f));
const common = require(_0x49b370(0x93)), assert = require(_0x49b370(0x94)), http = require(_0x49b370(0x95)), server = http[_0x49b370(0x96)](common['mustCall'](function (_0x412fe5, _0x2505d2) {
        const _0x4d06e8 = _0x49b370;
        _0x2505d2['writeHead'](0xc8), _0x2505d2[_0x4d06e8(0x97)]('ok');
    }));
server[_0x49b370(0x98)](0x0, function () {
    const _0x473f5c = _0x49b370, _0x25e0d6 = new http[(_0x473f5c(0x99))]();
    _0x25e0d6[_0x473f5c(0x9a)] = this[_0x473f5c(0x9b)]()[_0x473f5c(0x9c)];
    const _0x5a88fe = {
        'host': undefined,
        'hostname': common[_0x473f5c(0x9d)],
        'port': undefined,
        'defaultPort': undefined,
        'path': undefined,
        'method': undefined,
        'agent': _0x25e0d6
    };
    http[_0x473f5c(0x9e)](_0x5a88fe, function (_0x2fa672) {
        const _0x30b286 = _0x473f5c;
        _0x2fa672[_0x30b286(0x9f)](), server[_0x30b286(0xa0)](), assert[_0x30b286(0xa1)](_0x5a88fe['host'], undefined), assert[_0x30b286(0xa1)](_0x5a88fe[_0x30b286(0xa2)], common[_0x30b286(0x9d)]), assert[_0x30b286(0xa1)](_0x5a88fe[_0x30b286(0x9c)], undefined), assert[_0x30b286(0xa1)](_0x5a88fe[_0x30b286(0x9a)], undefined), assert[_0x30b286(0xa1)](_0x5a88fe[_0x30b286(0xa3)], undefined), assert[_0x30b286(0xa1)](_0x5a88fe['method'], undefined);
    })[_0x473f5c(0x97)]();
});
