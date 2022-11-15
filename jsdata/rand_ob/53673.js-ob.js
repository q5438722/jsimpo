'use strict';
const _0xf65f = [
    '127.0.0.1',
    'address',
    'port',
    'close',
    'abort',
    '321474roBYTi',
    '406777GRdqnL',
    '1vRMHhU',
    '1339718rvImPV',
    '49tGnNyf',
    '7093OzZamB',
    '959245zGgeNw',
    '39373FeMJRj',
    '9UQKQVU',
    '1138154boGQNi',
    '../common',
    'mustNotCall',
    'mustCall',
    'error',
    'request',
    'GET'
];
const _0x3eb31c = _0x12af;
(function (_0x3f30d7, _0x3d9577) {
    const _0xe42687 = _0x12af;
    while (!![]) {
        try {
            const _0x6fa914 = parseInt(_0xe42687(0x87)) + -parseInt(_0xe42687(0x88)) + -parseInt(_0xe42687(0x89)) * parseInt(_0xe42687(0x8a)) + -parseInt(_0xe42687(0x8b)) * parseInt(_0xe42687(0x8c)) + parseInt(_0xe42687(0x8d)) + -parseInt(_0xe42687(0x8e)) * -parseInt(_0xe42687(0x8f)) + parseInt(_0xe42687(0x90));
            if (_0x6fa914 === _0x3d9577)
                break;
            else
                _0x3f30d7['push'](_0x3f30d7['shift']());
        } catch (_0x343942) {
            _0x3f30d7['push'](_0x3f30d7['shift']());
        }
    }
}(_0xf65f, 0x12f608 + -0x11cfe1 + 0x5e5b * 0x19));
function _0x12af(_0xb58f0, _0x1e323c) {
    return _0x12af = function (_0x403006, _0x272860) {
        _0x403006 = _0x403006 - (-0x1304 + -0xb2a + 0x7 * 0x463);
        let _0x2fc1c5 = _0xf65f[_0x403006];
        return _0x2fc1c5;
    }, _0x12af(_0xb58f0, _0x1e323c);
}
const common = require(_0x3eb31c(0x91)), http = require('http'), server = http['createServer'](common[_0x3eb31c(0x92)]());
server['listen'](-0x22f8 * 0x1 + 0x1 * -0x2193 + 0x448b, common[_0x3eb31c(0x93)](() => {
    const _0x5a68ff = _0x3eb31c, _0x1e4584 = { 'hvddC': _0x5a68ff(0x94) }, _0x3a2ada = http[_0x5a68ff(0x95)]({
            'method': _0x5a68ff(0x96),
            'host': _0x5a68ff(0x97),
            'port': server[_0x5a68ff(0x98)]()[_0x5a68ff(0x99)]
        });
    _0x3a2ada['on']('abort', common[_0x5a68ff(0x93)](() => {
        const _0x5de407 = _0x5a68ff;
        server[_0x5de407(0x9a)]();
    })), _0x3a2ada['on'](_0x1e4584['hvddC'], common[_0x5a68ff(0x92)]()), _0x3a2ada[_0x5a68ff(0x9b)](), _0x3a2ada['end']();
}));
