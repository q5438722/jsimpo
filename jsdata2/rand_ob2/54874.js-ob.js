'use strict';
const _0x2fdb = [
    'pause',
    'mustNotCall',
    'removeAllListeners',
    'exit',
    'strictEqual',
    '97CMfpIs',
    '7493qDmZae',
    '309942uZNPrl',
    '616594dvVfuo',
    '1UINvsC',
    '1124165dysFuL',
    '420812anzrKk',
    '698436GIjiNU',
    '148xNKIbH',
    '6017yCKeJC',
    '../common',
    'assert',
    'net',
    'end',
    'This\x20was\x20the\x20year\x20he\x20fell\x20to\x20pieces.',
    'close',
    'listen',
    'address',
    'localhost',
    'resume',
    'data',
    'port',
    'createConnection'
];
function _0x3c8f(_0x5e82d4, _0x3fe005) {
    return _0x3c8f = function (_0x2fdbb8, _0x3c8fe8) {
        _0x2fdbb8 = _0x2fdbb8 - 0x14e;
        let _0x46e9a3 = _0x2fdb[_0x2fdbb8];
        return _0x46e9a3;
    }, _0x3c8f(_0x5e82d4, _0x3fe005);
}
const _0xa6ac53 = _0x3c8f;
(function (_0x101c9d, _0x2ae9c1) {
    const _0x47700a = _0x3c8f;
    while (!![]) {
        try {
            const _0x94e41d = parseInt(_0x47700a(0x14e)) * parseInt(_0x47700a(0x14f)) + parseInt(_0x47700a(0x150)) + parseInt(_0x47700a(0x151)) * -parseInt(_0x47700a(0x152)) + parseInt(_0x47700a(0x153)) + -parseInt(_0x47700a(0x154)) + parseInt(_0x47700a(0x155)) + -parseInt(_0x47700a(0x156)) * parseInt(_0x47700a(0x157));
            if (_0x94e41d === _0x2ae9c1)
                break;
            else
                _0x101c9d['push'](_0x101c9d['shift']());
        } catch (_0xbf0485) {
            _0x101c9d['push'](_0x101c9d['shift']());
        }
    }
}(_0x2fdb, 0xe3672));
const common = require(_0xa6ac53(0x158)), assert = require(_0xa6ac53(0x159)), net = require(_0xa6ac53(0x15a));
let connections = 0x0, dataEvents = 0x0, conn;
const server = net['createServer'](function (_0x142003) {
    const _0x458715 = _0xa6ac53;
    connections++, _0x142003[_0x458715(0x15b)](_0x458715(0x15c));
    if (connections === 0x5)
        server[_0x458715(0x15d)]();
});
server[_0xa6ac53(0x15e)](0x0, function () {
    const _0x197355 = _0xa6ac53;
    conn = net['createConnection'](this[_0x197355(0x15f)]()['port'], _0x197355(0x160)), conn[_0x197355(0x161)](), conn['on'](_0x197355(0x162), _0x6f06b6), conn = net['createConnection'](this[_0x197355(0x15f)]()[_0x197355(0x163)], 'localhost'), conn['pause'](), conn[_0x197355(0x161)](), conn['on'](_0x197355(0x162), _0x6f06b6), conn = net[_0x197355(0x164)](this[_0x197355(0x15f)]()[_0x197355(0x163)], _0x197355(0x160)), conn[_0x197355(0x165)](), conn['on']('data', common[_0x197355(0x166)]()), _0x53fe09(conn), conn = net[_0x197355(0x164)](this[_0x197355(0x15f)]()[_0x197355(0x163)], _0x197355(0x160)), conn['resume'](), conn[_0x197355(0x165)](), conn[_0x197355(0x161)](), conn['on'](_0x197355(0x162), _0x6f06b6), conn = net[_0x197355(0x164)](this[_0x197355(0x15f)]()[_0x197355(0x163)], _0x197355(0x160)), conn[_0x197355(0x161)](), conn['resume'](), conn[_0x197355(0x165)](), conn['on'](_0x197355(0x162), common[_0x197355(0x166)]()), _0x53fe09(conn);
    function _0x6f06b6() {
        dataEvents++;
    }
    function _0x53fe09(_0x19acc7) {
        setTimeout(function () {
            const _0x2adf27 = _0x3c8f;
            _0x19acc7[_0x2adf27(0x167)](_0x2adf27(0x162)), _0x19acc7[_0x2adf27(0x161)]();
        }, 0x64);
    }
}), process['on'](_0xa6ac53(0x168), function () {
    const _0x362f8a = _0xa6ac53;
    assert[_0x362f8a(0x169)](connections, 0x5), assert[_0x362f8a(0x169)](dataEvents, 0x3);
});
