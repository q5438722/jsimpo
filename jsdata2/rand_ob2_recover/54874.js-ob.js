const common = require(_0xa6ac53(344)), assert = require(_0xa6ac53(345)), net = require(_0xa6ac53(346));
let connections = 0, dataEvents = 0, conn;
const server = net['createServer'](function (_0x142003) {
    const _0x458715 = _0xa6ac53;
    connections++, _0x142003[_0x458715(347)](_0x458715(348));
    if (connections === 5)
        server[_0x458715(349)]();
});
server[_0xa6ac53(350)](0, function () {
    const _0x197355 = _0xa6ac53;
    conn = net['createConnection'](this[_0x197355(351)]()['port'], _0x197355(352)), conn[_0x197355(353)](), conn['on'](_0x197355(354), _0x6f06b6), conn = net['createConnection'](this[_0x197355(351)]()[_0x197355(355)], 'localhost'), conn['pause'](), conn[_0x197355(353)](), conn['on'](_0x197355(354), _0x6f06b6), conn = net[_0x197355(356)](this[_0x197355(351)]()[_0x197355(355)], _0x197355(352)), conn[_0x197355(357)](), conn['on']('data', common[_0x197355(358)]()), _0x53fe09(conn), conn = net[_0x197355(356)](this[_0x197355(351)]()[_0x197355(355)], _0x197355(352)), conn['resume'](), conn[_0x197355(357)](), conn[_0x197355(353)](), conn['on'](_0x197355(354), _0x6f06b6), conn = net[_0x197355(356)](this[_0x197355(351)]()[_0x197355(355)], _0x197355(352)), conn[_0x197355(353)](), conn['resume'](), conn[_0x197355(357)](), conn['on'](_0x197355(354), common[_0x197355(358)]()), _0x53fe09(conn);
    function _0x6f06b6() {
        dataEvents++;
    }
    function _0x53fe09(_0x19acc7) {
        setTimeout(function () {
            const _0x2adf27 = _0x3c8f;
            _0x19acc7[_0x2adf27(359)](_0x2adf27(354)), _0x19acc7[_0x2adf27(353)]();
        }, 100);
    }
}), process['on'](_0xa6ac53(360), function () {
    const _0x362f8a = _0xa6ac53;
    assert[_0x362f8a(361)](connections, 5), assert[_0x362f8a(361)](dataEvents, 3);
});