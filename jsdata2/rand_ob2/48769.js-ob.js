const _0x3f56 = [
    '3698510drgDOh',
    'path',
    'rss',
    'gray-matter',
    'Your\x20Name',
    'readdir',
    'pages',
    'map',
    'readFile',
    'join',
    'posts',
    'item',
    'data',
    'title',
    '/posts/',
    'replace',
    'date',
    'description',
    'tag',
    'split',
    'author',
    'writeFile',
    './public/feed.xml',
    'xml',
    '26PwXkrl',
    '49073yfkDOF',
    '650214HPbxaD',
    '51998MGRpgf',
    '25nlhnps',
    '2zJIxCU',
    '570956oZkFTZ',
    '1317135CYCwXH',
    '1284058vQWxEc'
];
const _0x445a71 = _0x5ac0;
(function (_0x8085a6, _0x3003f2) {
    const _0x3abeba = _0x5ac0;
    while (!![]) {
        try {
            const _0x45bb81 = -parseInt(_0x3abeba(0x70)) * -parseInt(_0x3abeba(0x71)) + parseInt(_0x3abeba(0x72)) + -parseInt(_0x3abeba(0x73)) * -parseInt(_0x3abeba(0x74)) + -parseInt(_0x3abeba(0x75)) * -parseInt(_0x3abeba(0x76)) + parseInt(_0x3abeba(0x77)) + -parseInt(_0x3abeba(0x78)) + -parseInt(_0x3abeba(0x79));
            if (_0x45bb81 === _0x3003f2)
                break;
            else
                _0x8085a6['push'](_0x8085a6['shift']());
        } catch (_0x2a847c) {
            _0x8085a6['push'](_0x8085a6['shift']());
        }
    }
}(_0x3f56, 0xab84d));
const {promises: fs} = require('fs'), path = require(_0x445a71(0x7a)), RSS = require(_0x445a71(0x7b)), matter = require(_0x445a71(0x7c));
function _0x5ac0(_0x43187c, _0x29c638) {
    return _0x5ac0 = function (_0x3f5609, _0x5ac06b) {
        _0x3f5609 = _0x3f5609 - 0x70;
        let _0x531329 = _0x3f56[_0x3f5609];
        return _0x531329;
    }, _0x5ac0(_0x43187c, _0x29c638);
}
async function generate() {
    const _0x246bce = _0x445a71, _0x41ce57 = new RSS({
            'title': _0x246bce(0x7d),
            'site_url': 'https://yoursite.com',
            'feed_url': 'https://yoursite.com/feed.xml'
        }), _0x21ab2f = await fs[_0x246bce(0x7e)](path['join'](__dirname, '..', _0x246bce(0x7f), 'posts'));
    await Promise['all'](_0x21ab2f[_0x246bce(0x80)](async _0x56dfd9 => {
        const _0x178b43 = _0x246bce;
        if (_0x56dfd9['startsWith']('index.'))
            return;
        const _0x5b596a = await fs[_0x178b43(0x81)](path[_0x178b43(0x82)](__dirname, '..', 'pages', _0x178b43(0x83), _0x56dfd9)), _0x267c22 = matter(_0x5b596a);
        _0x41ce57[_0x178b43(0x84)]({
            'title': _0x267c22[_0x178b43(0x85)][_0x178b43(0x86)],
            'url': _0x178b43(0x87) + _0x56dfd9[_0x178b43(0x88)](/\.mdx?/, ''),
            'date': _0x267c22[_0x178b43(0x85)][_0x178b43(0x89)],
            'description': _0x267c22[_0x178b43(0x85)][_0x178b43(0x8a)],
            'categories': _0x267c22[_0x178b43(0x85)][_0x178b43(0x8b)][_0x178b43(0x8c)](',\x20'),
            'author': _0x267c22[_0x178b43(0x85)][_0x178b43(0x8d)]
        });
    })), await fs[_0x246bce(0x8e)](_0x246bce(0x8f), _0x41ce57[_0x246bce(0x90)]({ 'indent': !![] }));
}
generate();
