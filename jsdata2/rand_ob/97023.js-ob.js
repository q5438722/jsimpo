'use strict';
const _0x29bf = [
    '2SPAEdm',
    '656772JYVGWI',
    '238369oVhOrF',
    '406799nDXAPs',
    '1071248xaeoui',
    '1uQoAVe',
    '1608660KaUFYa',
    '1436068XXsGqG',
    '1oqMVie',
    'https://hacker-news.firebaseio.com/v0/item/',
    'json',
    'https://hacker-news.firebaseio.com/v0/topstories.js',
    'aIFnV',
    'RTxqb',
    'push',
    'EyUlp',
    'stringify',
    '278761FtnKjz'
];
(function (_0x58dd85, _0x5625a4) {
    const _0x306524 = _0xe8de;
    while (!![]) {
        try {
            const _0x3cb7de = -parseInt(_0x306524(0x116)) * parseInt(_0x306524(0x117)) + -parseInt(_0x306524(0x118)) + -parseInt(_0x306524(0x119)) + parseInt(_0x306524(0x11a)) + parseInt(_0x306524(0x11b)) * -parseInt(_0x306524(0x11c)) + parseInt(_0x306524(0x11d)) + -parseInt(_0x306524(0x11e)) * -parseInt(_0x306524(0x11f));
            if (_0x3cb7de === _0x5625a4)
                break;
            else
                _0x58dd85['push'](_0x58dd85['shift']());
        } catch (_0x38a6c3) {
            _0x58dd85['push'](_0x58dd85['shift']());
        }
    }
}(_0x29bf, 0x153380 + -0x17ed54 + -0x1 * -0x10e154));
const fetch = require('node-fetch'), {writeFileSync} = require('fs'), stories = 0xd01 * -0x1 + 0x548 + 0x7eb;
async function getStory(_0x57ac56) {
    const _0x1988cc = _0xe8de, _0x4d418a = await fetch(_0x1988cc(0x120) + _0x57ac56 + '.json');
    return await _0x4d418a[_0x1988cc(0x121)]();
}
async function getTopStories() {
    const _0x345f0a = _0xe8de, _0xddd4d6 = {
            'aIFnV': function (_0x251ac3, _0x27a3a5) {
                return _0x251ac3(_0x27a3a5);
            },
            'RTxqb': _0x345f0a(0x122),
            'EyUlp': function (_0x415a24, _0x1fbbc8, _0x1e13de) {
                return _0x415a24(_0x1fbbc8, _0x1e13de);
            },
            'XuvCL': 'top-stories.json'
        }, _0x1c9349 = await _0xddd4d6[_0x345f0a(0x123)](fetch, _0xddd4d6[_0x345f0a(0x124)]), _0x2dfa78 = await _0x1c9349[_0x345f0a(0x121)](), _0x223c89 = [];
    for (let _0x2e1fed = 0x6 * 0x135 + -0x245d + 0x7 * 0x429; _0x2e1fed < stories; _0x2e1fed++) {
        const _0xbfe1fb = _0x2dfa78[_0x2e1fed];
        _0x223c89[_0x345f0a(0x125)](await _0xddd4d6[_0x345f0a(0x123)](getStory, _0xbfe1fb));
    }
    _0xddd4d6[_0x345f0a(0x126)](writeFileSync, _0xddd4d6['XuvCL'], 'window.stories\x20=\x20' + JSON[_0x345f0a(0x127)](_0x223c89));
}
function _0xe8de(_0x126df1, _0x21d268) {
    return _0xe8de = function (_0x16584b, _0x210203) {
        _0x16584b = _0x16584b - (-0x171d + -0xc35 + 0x5 * 0x748);
        let _0x8c0c0e = _0x29bf[_0x16584b];
        return _0x8c0c0e;
    }, _0xe8de(_0x126df1, _0x21d268);
}
getTopStories();
