var common = require('../common.js'), assert = require('assert'), READSIZE = 0xda * -0x2b + -0x1df2 + 0x42f4, PUSHSIZE = -0x3c8 + 0x29 * -0xd + 0x5f1, PUSHCOUNT = 0xae3 + 0x2067 + -0x2762, HWM = -0x1dc2 + 0x1a80 + -0x22 * -0x1a, Readable = require('../../readable')['Readable'], r = new Readable({ 'highWaterMark': HWM }), rs = r['_readableState'];
r['_read'] = push, r['on']('readable', function () {
    console['error']('>>\x20readable');
    do {
        console['error']('\x20\x20>\x20read(%d)', READSIZE);
        var _0x219a36 = r['read'](READSIZE);
        console['error']('\x20\x20<\x20%j\x20(%d\x20remain)', _0x219a36 && _0x219a36['length'], rs['length']);
    } while (_0x219a36 && _0x219a36['length'] === READSIZE);
    console['error']('<<\x20after\x20read()', _0x219a36 && _0x219a36['length'], rs['needReadable'], rs['length']);
});
var endEmitted = ![];
r['on']('end', function () {
    endEmitted = !![], console['error']('end');
});
var pushes = 0x28d + 0x14aa + -0x1737;
function push() {
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console['error']('\x20\x20\x20push(EOF)'), r['push'](null);
    console['error']('\x20\x20\x20push\x20#%d', pushes);
    if (r['push'](new Buffer(PUSHSIZE)))
        setTimeout(push);
}
var ret = r['read'](-0x186c + 0x2f * -0xce + 0x101 * 0x3e);
process['on']('exit', function () {
    assert['equal'](pushes, PUSHCOUNT + (0xdae + 0x14f * -0x4 + -0x871 * 0x1)), assert(endEmitted);
});
