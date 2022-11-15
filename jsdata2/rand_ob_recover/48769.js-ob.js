const {promises: fs} = require('fs'), path = require(_0x3e9124(488)), RSS = require(_0x3e9124(489)), matter = require(_0x3e9124(490));
function _0x5471(_0x3d13a6, _0xdfcc44) {
    return _0x5471 = function (_0x3cc34c, _0xab0d09) {
        _0x3cc34c = _0x3cc34c - (7273 * -1 + -1 * 6927 + -3 * -4892);
        let _0x514154 = _0x58c2[_0x3cc34c];
        return _0x514154;
    }, _0x5471(_0x3d13a6, _0xdfcc44);
}
async function generate() {
    const _0xf8c6c3 = _0x3e9124, _0x2ff60b = {
            'eZcoQ': 'index.',
            'tMybT': 'posts',
            'KkpOg': function (_0x8c53d8, _0x401d2b) {
                return _0x8c53d8(_0x401d2b);
            },
            'xJgPy': function (_0x123b08, _0x40d67a) {
                return _0x123b08 + _0x40d67a;
            },
            'RkKdS': '/posts/',
            'kcJCT': _0xf8c6c3(491),
            'VjLwr': 'https://yoursite.com/feed.xml',
            'HNroG': _0xf8c6c3(492),
            'owxVQ': './public/feed.xml'
        }, _0x3a15dc = new RSS({
            'title': _0xf8c6c3(493),
            'site_url': _0x2ff60b[_0xf8c6c3(494)],
            'feed_url': _0x2ff60b[_0xf8c6c3(495)]
        }), _0x29a337 = await fs[_0xf8c6c3(496)](path[_0xf8c6c3(497)](__dirname, '..', _0x2ff60b[_0xf8c6c3(498)], _0x2ff60b['tMybT']));
    await Promise[_0xf8c6c3(499)](_0x29a337[_0xf8c6c3(500)](async _0x1d5ed2 => {
        const _0x5611e0 = _0xf8c6c3;
        if (_0x1d5ed2[_0x5611e0(501)](_0x2ff60b[_0x5611e0(502)]))
            return;
        const _0x447311 = await fs[_0x5611e0(503)](path['join'](__dirname, '..', _0x5611e0(492), _0x2ff60b[_0x5611e0(504)], _0x1d5ed2)), _0xebf350 = _0x2ff60b[_0x5611e0(505)](matter, _0x447311);
        _0x3a15dc[_0x5611e0(506)]({
            'title': _0xebf350[_0x5611e0(507)]['title'],
            'url': _0x2ff60b['xJgPy'](_0x2ff60b['RkKdS'], _0x1d5ed2['replace'](/\.mdx?/, '')),
            'date': _0xebf350[_0x5611e0(507)][_0x5611e0(508)],
            'description': _0xebf350[_0x5611e0(507)][_0x5611e0(509)],
            'categories': _0xebf350[_0x5611e0(507)][_0x5611e0(510)][_0x5611e0(511)](', '),
            'author': _0xebf350[_0x5611e0(507)][_0x5611e0(512)]
        });
    })), await fs[_0xf8c6c3(513)](_0x2ff60b[_0xf8c6c3(514)], _0x3a15dc['xml']({ 'indent': !![] }));
}
generate();