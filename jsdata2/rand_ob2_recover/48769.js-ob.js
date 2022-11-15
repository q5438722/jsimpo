const {promises: fs} = require('fs'), path = require(_0x445a71(122)), RSS = require(_0x445a71(123)), matter = require(_0x445a71(124));
function _0x5ac0(_0x43187c, _0x29c638) {
    return _0x5ac0 = function (_0x3f5609, _0x5ac06b) {
        _0x3f5609 = _0x3f5609 - 112;
        let _0x531329 = _0x3f56[_0x3f5609];
        return _0x531329;
    }, _0x5ac0(_0x43187c, _0x29c638);
}
async function generate() {
    const _0x246bce = _0x445a71, _0x41ce57 = new RSS({
            'title': _0x246bce(125),
            'site_url': 'https://yoursite.com',
            'feed_url': 'https://yoursite.com/feed.xml'
        }), _0x21ab2f = await fs[_0x246bce(126)](path['join'](__dirname, '..', _0x246bce(127), 'posts'));
    await Promise['all'](_0x21ab2f[_0x246bce(128)](async _0x56dfd9 => {
        const _0x178b43 = _0x246bce;
        if (_0x56dfd9['startsWith']('index.'))
            return;
        const _0x5b596a = await fs[_0x178b43(129)](path[_0x178b43(130)](__dirname, '..', 'pages', _0x178b43(131), _0x56dfd9)), _0x267c22 = matter(_0x5b596a);
        _0x41ce57[_0x178b43(132)]({
            'title': _0x267c22[_0x178b43(133)][_0x178b43(134)],
            'url': _0x178b43(135) + _0x56dfd9[_0x178b43(136)](/\.mdx?/, ''),
            'date': _0x267c22[_0x178b43(133)][_0x178b43(137)],
            'description': _0x267c22[_0x178b43(133)][_0x178b43(138)],
            'categories': _0x267c22[_0x178b43(133)][_0x178b43(139)][_0x178b43(140)](', '),
            'author': _0x267c22[_0x178b43(133)][_0x178b43(141)]
        });
    })), await fs[_0x246bce(142)](_0x246bce(143), _0x41ce57[_0x246bce(144)]({ 'indent': !![] }));
}
generate();