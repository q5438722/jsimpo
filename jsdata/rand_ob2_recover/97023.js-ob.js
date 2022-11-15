function _0x51f9(_0x1d5ff0, _0x379924) {
    return _0x51f9 = function (_0x59d600, _0x51f936) {
        _0x59d600 = _0x59d600 - 114;
        let _0xe8776f = _0x59d6[_0x59d600];
        return _0xe8776f;
    }, _0x51f9(_0x1d5ff0, _0x379924);
}
const fetch = require(_0x399913(124)), {writeFileSync} = require('fs'), stories = 50;
async function getStory(_0xedcaf7) {
    const _0x5a9472 = _0x399913, _0x4a8bc2 = await fetch(_0x5a9472(125) + _0xedcaf7 + '.json');
    return await _0x4a8bc2['json']();
}
async function getTopStories() {
    const _0x1049e8 = _0x399913, _0x5196de = await fetch('https://hacker-news.firebaseio.com/v0/topstories.js'), _0x5d76a4 = await _0x5196de[_0x1049e8(126)](), _0x2e83d4 = [];
    for (let _0x5a9869 = 0; _0x5a9869 < stories; _0x5a9869++) {
        const _0x96a5ec = _0x5d76a4[_0x5a9869];
        _0x2e83d4[_0x1049e8(127)](await getStory(_0x96a5ec));
    }
    writeFileSync(_0x1049e8(128), _0x1049e8(129) + JSON[_0x1049e8(130)](_0x2e83d4));
}
getTopStories();