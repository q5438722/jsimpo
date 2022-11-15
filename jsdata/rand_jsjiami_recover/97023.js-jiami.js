'use strict';
const fetch = require('node-fetch');
const {writeFileSync} = require('fs');
const stories = 50;
async function getStory(_0x5c792e) {
    const _0x12b9df = await fetch('https://hacker-news.firebaseio.com/v0/item/' + _0x5c792e + '.json');
    return await _0x12b9df['json']();
}
async function getTopStories() {
    const _0x5d57e0 = await fetch('https://hacker-news.firebaseio.com/v0/topstories.js');
    const _0x70629c = await _0x5d57e0['json']();
    const _0x2ff360 = [];
    for (let _0xe58fae = 0; _0xe58fae < stories; _0xe58fae++) {
        const _0x1deb62 = _0x70629c[_0xe58fae];
        _0x2ff360['push'](await getStory(_0x1deb62));
    }
    writeFileSync('top-stories.json', 'window.stories = ' + JSON['stringify'](_0x2ff360));
}
getTopStories();