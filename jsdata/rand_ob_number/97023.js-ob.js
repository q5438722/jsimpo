'use strict';
const fetch = require('node-fetch'), {writeFileSync} = require('fs'), stories = -0x1c4f + -0xa4a + -0x1 * -0x26cb;
async function getStory(_0x40b6c1) {
    const _0x306a57 = await fetch('https://hacker-news.firebaseio.com/v0/item/' + _0x40b6c1 + '.json');
    return await _0x306a57['json']();
}
async function getTopStories() {
    const _0x4269cc = await fetch('https://hacker-news.firebaseio.com/v0/topstories.js'), _0x36d879 = await _0x4269cc['json'](), _0x6f9bff = [];
    for (let _0x1fae1d = -0x839 + 0x31a + 0x17 * 0x39; _0x1fae1d < stories; _0x1fae1d++) {
        const _0x488836 = _0x36d879[_0x1fae1d];
        _0x6f9bff['push'](await getStory(_0x488836));
    }
    writeFileSync('top-stories.json', 'window.stories\x20=\x20' + JSON['stringify'](_0x6f9bff));
}
getTopStories();
