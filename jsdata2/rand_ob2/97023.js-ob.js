'use strict';
const _0x1cfa = [
    'https://hacker-news.firebaseio.com/v0/topstories.js',
    'top-stories.json',
    'window.stories\x20=\x20',
    'stringify',
    '458575dkfdns',
    '83VDfqhj',
    '181hVAZaf',
    '276426JHQBYM',
    '63572QTuKZD',
    '399917xmsxyy',
    '121865jKZzqe',
    '322109APqpLk',
    '1bembsD',
    'node-fetch',
    'https://hacker-news.firebaseio.com/v0/item/',
    '.json',
    'json'
];
const _0x5663fa = _0x2659;
(function (_0x588667, _0x5ad4dc) {
    const _0xf5e668 = _0x2659;
    while (!![]) {
        try {
            const _0x2b38b7 = parseInt(_0xf5e668(0xcc)) + parseInt(_0xf5e668(0xcd)) * -parseInt(_0xf5e668(0xce)) + -parseInt(_0xf5e668(0xcf)) + -parseInt(_0xf5e668(0xd0)) + parseInt(_0xf5e668(0xd1)) + parseInt(_0xf5e668(0xd2)) + -parseInt(_0xf5e668(0xd3)) * parseInt(_0xf5e668(0xd4));
            if (_0x2b38b7 === _0x5ad4dc)
                break;
            else
                _0x588667['push'](_0x588667['shift']());
        } catch (_0x35960b) {
            _0x588667['push'](_0x588667['shift']());
        }
    }
}(_0x1cfa, 0x4a07b));
const fetch = require(_0x5663fa(0xd5)), {writeFileSync} = require('fs'), stories = 0x32;
function _0x2659(_0x4dd0de, _0x3ba121) {
    return _0x2659 = function (_0x1cfa03, _0x26599c) {
        _0x1cfa03 = _0x1cfa03 - 0xcc;
        let _0x5b5ba9 = _0x1cfa[_0x1cfa03];
        return _0x5b5ba9;
    }, _0x2659(_0x4dd0de, _0x3ba121);
}
async function getStory(_0x242a3f) {
    const _0x123f6c = _0x5663fa, _0xfc4fae = await fetch(_0x123f6c(0xd6) + _0x242a3f + _0x123f6c(0xd7));
    return await _0xfc4fae[_0x123f6c(0xd8)]();
}
async function getTopStories() {
    const _0x423aa8 = _0x5663fa, _0x2e2c10 = await fetch(_0x423aa8(0xd9)), _0x196bc7 = await _0x2e2c10[_0x423aa8(0xd8)](), _0x42ff20 = [];
    for (let _0x3c0ff5 = 0x0; _0x3c0ff5 < stories; _0x3c0ff5++) {
        const _0x1a61ee = _0x196bc7[_0x3c0ff5];
        _0x42ff20['push'](await getStory(_0x1a61ee));
    }
    writeFileSync(_0x423aa8(0xda), _0x423aa8(0xdb) + JSON[_0x423aa8(0xdc)](_0x42ff20));
}
getTopStories();
