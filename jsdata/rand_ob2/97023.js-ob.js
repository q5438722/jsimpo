'use strict';
const _0x59d6 = [
    '771443LttgEI',
    '950700RcxVHb',
    '2NBqWkS',
    '578131pNPfaY',
    '26WGungD',
    '4442zoxxYH',
    '1202586ERRfYr',
    '1741xtReIg',
    '324yzeLBO',
    '449616AnaXBF',
    'node-fetch',
    'https://hacker-news.firebaseio.com/v0/item/',
    'json',
    'push',
    'top-stories.json',
    'window.stories\x20=\x20',
    'stringify'
];
const _0x399913 = _0x51f9;
(function (_0x3e4ca4, _0x4db72e) {
    const _0x37af9c = _0x51f9;
    while (!![]) {
        try {
            const _0x197bad = -parseInt(_0x37af9c(0x72)) + -parseInt(_0x37af9c(0x73)) + parseInt(_0x37af9c(0x74)) * parseInt(_0x37af9c(0x75)) + parseInt(_0x37af9c(0x76)) * -parseInt(_0x37af9c(0x77)) + parseInt(_0x37af9c(0x78)) + -parseInt(_0x37af9c(0x79)) * -parseInt(_0x37af9c(0x7a)) + -parseInt(_0x37af9c(0x7b));
            if (_0x197bad === _0x4db72e)
                break;
            else
                _0x3e4ca4['push'](_0x3e4ca4['shift']());
        } catch (_0x2e45ea) {
            _0x3e4ca4['push'](_0x3e4ca4['shift']());
        }
    }
}(_0x59d6, 0x9b321));
function _0x51f9(_0x1d5ff0, _0x379924) {
    return _0x51f9 = function (_0x59d600, _0x51f936) {
        _0x59d600 = _0x59d600 - 0x72;
        let _0xe8776f = _0x59d6[_0x59d600];
        return _0xe8776f;
    }, _0x51f9(_0x1d5ff0, _0x379924);
}
const fetch = require(_0x399913(0x7c)), {writeFileSync} = require('fs'), stories = 0x32;
async function getStory(_0xedcaf7) {
    const _0x5a9472 = _0x399913, _0x4a8bc2 = await fetch(_0x5a9472(0x7d) + _0xedcaf7 + '.json');
    return await _0x4a8bc2['json']();
}
async function getTopStories() {
    const _0x1049e8 = _0x399913, _0x5196de = await fetch('https://hacker-news.firebaseio.com/v0/topstories.js'), _0x5d76a4 = await _0x5196de[_0x1049e8(0x7e)](), _0x2e83d4 = [];
    for (let _0x5a9869 = 0x0; _0x5a9869 < stories; _0x5a9869++) {
        const _0x96a5ec = _0x5d76a4[_0x5a9869];
        _0x2e83d4[_0x1049e8(0x7f)](await getStory(_0x96a5ec));
    }
    writeFileSync(_0x1049e8(0x80), _0x1049e8(0x81) + JSON[_0x1049e8(0x82)](_0x2e83d4));
}
getTopStories();
