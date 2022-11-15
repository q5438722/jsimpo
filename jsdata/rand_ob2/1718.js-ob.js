const _0x5882 = [
    '1enxiUp',
    '705929FAprBM',
    '171dfCoBq',
    '7097DfGbVI',
    '1PazHhZ',
    '132761JwLPPT',
    'log',
    'disconnect',
    'listen',
    'http://localhost:19006',
    'emit',
    'message',
    'toISOString',
    '1771663MVsYVe',
    '642098CsKKwt',
    '10gZttDn',
    '178225UBBfZl',
    '914392hAACEX'
];
const _0x917404 = _0x2253;
function _0x2253(_0x25845a, _0x2e4174) {
    return _0x2253 = function (_0x58822d, _0x225317) {
        _0x58822d = _0x58822d - 0x1ac;
        let _0x2328ff = _0x5882[_0x58822d];
        return _0x2328ff;
    }, _0x2253(_0x25845a, _0x2e4174);
}
(function (_0x3583ed, _0x19b4ca) {
    const _0x4a781e = _0x2253;
    while (!![]) {
        try {
            const _0x1329db = -parseInt(_0x4a781e(0x1ac)) + -parseInt(_0x4a781e(0x1ad)) + -parseInt(_0x4a781e(0x1ae)) * -parseInt(_0x4a781e(0x1af)) + -parseInt(_0x4a781e(0x1b0)) * -parseInt(_0x4a781e(0x1b1)) + -parseInt(_0x4a781e(0x1b2)) + -parseInt(_0x4a781e(0x1b3)) * -parseInt(_0x4a781e(0x1b4)) + parseInt(_0x4a781e(0x1b5)) * parseInt(_0x4a781e(0x1b6));
            if (_0x1329db === _0x19b4ca)
                break;
            else
                _0x3583ed['push'](_0x3583ed['shift']());
        } catch (_0x5c3796) {
            _0x3583ed['push'](_0x3583ed['shift']());
        }
    }
}(_0x5882, 0xe16a4));
const io = require('socket.io')();
io['on']('connection', _0x3891ef => {
    const _0x58d16e = _0x2253;
    console[_0x58d16e(0x1b7)]('connect:\x20' + _0x3891ef['id']), _0x3891ef['on'](_0x58d16e(0x1b8), () => {
        console['log']('disconnect:\x20' + _0x3891ef['id']);
    });
}), io[_0x917404(0x1b9)](0xbb8, { 'cors': { 'origin': [_0x917404(0x1ba)] } }), setInterval(() => {
    const _0x4b8f10 = _0x917404;
    io[_0x4b8f10(0x1bb)](_0x4b8f10(0x1bc), new Date()[_0x4b8f10(0x1bd)]());
}, 0x3e8);
