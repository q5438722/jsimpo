const _0x58c2 = [
    'date',
    'description',
    'tag',
    'split',
    'author',
    'writeFile',
    'owxVQ',
    '2oyljJa',
    '461963NvGEcr',
    '195007VmqsIw',
    '1kaSvvi',
    '638OJGQMT',
    '676vSGSzt',
    '747023iguors',
    '25FSiXCV',
    '21126UGDSZa',
    '1zIYFsn',
    '218352UbPTmV',
    '3086369zcgYhB',
    'path',
    'rss',
    'gray-matter',
    'https://yoursite.com',
    'pages',
    'Your\x20Name',
    'kcJCT',
    'VjLwr',
    'readdir',
    'join',
    'HNroG',
    'all',
    'map',
    'startsWith',
    'eZcoQ',
    'readFile',
    'tMybT',
    'KkpOg',
    'item',
    'data'
];
const _0x3e9124 = _0x5471;
(function (_0x4e9f6d, _0x1bd774) {
    const _0x4376a6 = _0x5471;
    while (!![]) {
        try {
            const _0x67cb67 = -parseInt(_0x4376a6(0x1dc)) * parseInt(_0x4376a6(0x1dd)) + parseInt(_0x4376a6(0x1de)) * -parseInt(_0x4376a6(0x1df)) + -parseInt(_0x4376a6(0x1e0)) * parseInt(_0x4376a6(0x1e1)) + -parseInt(_0x4376a6(0x1e2)) + parseInt(_0x4376a6(0x1e3)) * -parseInt(_0x4376a6(0x1e4)) + parseInt(_0x4376a6(0x1e5)) * parseInt(_0x4376a6(0x1e6)) + parseInt(_0x4376a6(0x1e7));
            if (_0x67cb67 === _0x1bd774)
                break;
            else
                _0x4e9f6d['push'](_0x4e9f6d['shift']());
        } catch (_0x8fd8df) {
            _0x4e9f6d['push'](_0x4e9f6d['shift']());
        }
    }
}(_0x58c2, 0x4485a * 0x1 + -0x4 * 0x2b4ac + 0xddab5));
const {promises: fs} = require('fs'), path = require(_0x3e9124(0x1e8)), RSS = require(_0x3e9124(0x1e9)), matter = require(_0x3e9124(0x1ea));
function _0x5471(_0x3d13a6, _0xdfcc44) {
    return _0x5471 = function (_0x3cc34c, _0xab0d09) {
        _0x3cc34c = _0x3cc34c - (0x1c69 * -0x1 + -0x1 * 0x1b0f + -0x3 * -0x131c);
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
            'kcJCT': _0xf8c6c3(0x1eb),
            'VjLwr': 'https://yoursite.com/feed.xml',
            'HNroG': _0xf8c6c3(0x1ec),
            'owxVQ': './public/feed.xml'
        }, _0x3a15dc = new RSS({
            'title': _0xf8c6c3(0x1ed),
            'site_url': _0x2ff60b[_0xf8c6c3(0x1ee)],
            'feed_url': _0x2ff60b[_0xf8c6c3(0x1ef)]
        }), _0x29a337 = await fs[_0xf8c6c3(0x1f0)](path[_0xf8c6c3(0x1f1)](__dirname, '..', _0x2ff60b[_0xf8c6c3(0x1f2)], _0x2ff60b['tMybT']));
    await Promise[_0xf8c6c3(0x1f3)](_0x29a337[_0xf8c6c3(0x1f4)](async _0x1d5ed2 => {
        const _0x5611e0 = _0xf8c6c3;
        if (_0x1d5ed2[_0x5611e0(0x1f5)](_0x2ff60b[_0x5611e0(0x1f6)]))
            return;
        const _0x447311 = await fs[_0x5611e0(0x1f7)](path['join'](__dirname, '..', _0x5611e0(0x1ec), _0x2ff60b[_0x5611e0(0x1f8)], _0x1d5ed2)), _0xebf350 = _0x2ff60b[_0x5611e0(0x1f9)](matter, _0x447311);
        _0x3a15dc[_0x5611e0(0x1fa)]({
            'title': _0xebf350[_0x5611e0(0x1fb)]['title'],
            'url': _0x2ff60b['xJgPy'](_0x2ff60b['RkKdS'], _0x1d5ed2['replace'](/\.mdx?/, '')),
            'date': _0xebf350[_0x5611e0(0x1fb)][_0x5611e0(0x1fc)],
            'description': _0xebf350[_0x5611e0(0x1fb)][_0x5611e0(0x1fd)],
            'categories': _0xebf350[_0x5611e0(0x1fb)][_0x5611e0(0x1fe)][_0x5611e0(0x1ff)](',\x20'),
            'author': _0xebf350[_0x5611e0(0x1fb)][_0x5611e0(0x200)]
        });
    })), await fs[_0xf8c6c3(0x201)](_0x2ff60b[_0xf8c6c3(0x202)], _0x3a15dc['xml']({ 'indent': !![] }));
}
generate();
