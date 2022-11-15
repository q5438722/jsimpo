function _0xa6b5(_0x1f694d, _0x49fed2) {
    return _0xa6b5 = function (_0x4ec111, _0x574fdb) {
        _0x4ec111 = _0x4ec111 - (6031 + -2196 + -3592);
        let _0xa44831 = _0x69c8[_0x4ec111];
        return _0xa44831;
    }, _0xa6b5(_0x1f694d, _0x49fed2);
}
const common = require('../common');
if (!common[_0x63992(253)])
    common[_0x63992(254)](_0x63992(255));
const Countdown = require('../common/countdown'), http2 = require(_0x63992(256)), server = http2['createServer']();
let session;
const countdown = new Countdown(3064 + -5447 + 2385, () => {
    const _0x5e1a56 = _0x63992;
    server[_0x5e1a56(257)](common[_0x5e1a56(258)]()), session['destroy']();
});
server[_0x63992(259)](-6127 + -3159 + 9286, common[_0x63992(260)](() => {
    const _0x458761 = _0x63992, _0x13945b = { 'gSMzx': _0x458761(261) }, _0x2f95fc = http2['connect'](_0x458761(262) + server['address']()[_0x458761(263)]);
    _0x2f95fc['on'](_0x13945b[_0x458761(264)], common['mustCall'](() => countdown['dec']()));
})), server['on']('session', common[_0x63992(260)](_0x20b365 => {
    session = _0x20b365, countdown['dec']();
}));