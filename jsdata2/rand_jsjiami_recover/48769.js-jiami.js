const {promises: fs} = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');
async function generate() {
    const _0x75d6f = new RSS({
        'title': 'Your Name',
        'site_url': 'https://yoursite.com',
        'feed_url': 'https://yoursite.com/feed.xml'
    });
    const _0x334437 = await fs['readdir'](path['join'](__dirname, '..', 'pages', 'posts'));
    await Promise['all'](_0x334437['map'](async _0x464329 => {
        if (_0x464329['startsWith']('index.'))
            return;
        const _0x48ca4c = await fs['readFile'](path['join'](__dirname, '..', 'pages', 'posts', _0x464329));
        const _0x565ccf = matter(_0x48ca4c);
        _0x75d6f['item']({
            'title': _0x565ccf['data']['title'],
            'url': '/posts/' + _0x464329['replace'](/\.mdx?/, ''),
            'date': _0x565ccf['data']['date'],
            'description': _0x565ccf['data']['description'],
            'categories': _0x565ccf['data']['tag']['split'](', '),
            'author': _0x565ccf['data']['author']
        });
    }));
    await fs['writeFile']('./public/feed.xml', _0x75d6f['xml']({ 'indent': !![] }));
}
generate();