function _0x1262(_0x1cb835, _0xbbbc51) {
    return _0x1262 = function (_0x151ac0, _0x5c8cee) {
        _0x151ac0 = _0x151ac0 - (-947 * -3 + -2 * -1361 + -5211);
        let _0x3f0760 = _0x4d16[_0x151ac0];
        return _0x3f0760;
    }, _0x1262(_0x1cb835, _0xbbbc51);
}
const fetch = require(_0x3ce696(362)), {writeFileSync} = require('fs'), stories = -3742 + 5631 + -1 * 1839;
async function getStory(_0x5da871) {
    const _0x1c4634 = _0x3ce696, _0x374c57 = await fetch(_0x1c4634(363) + _0x5da871 + _0x1c4634(364));
    return await _0x374c57[_0x1c4634(365)]();
}
async function getTopStories() {
    const _0x2ed228 = _0x3ce696, _0x4a95d3 = {
            'eZSpc': function (_0x8f00c5, _0x6075fc) {
                return _0x8f00c5(_0x6075fc);
            },
            'wTbsP': 'https://hacker-news.firebaseio.com/v0/topstories.js',
            'otbVj': function (_0x39c064, _0xe3c236) {
                return _0x39c064 < _0xe3c236;
            },
            'XWTWP': function (_0x42070d, _0x41da11) {
                return _0x42070d(_0x41da11);
            },
            'ZtVvH': function (_0x4e786c, _0x528d49, _0xdc3d9b) {
                return _0x4e786c(_0x528d49, _0xdc3d9b);
            },
            'VykCy': _0x2ed228(366)
        }, _0x2160ee = await _0x4a95d3['eZSpc'](fetch, _0x4a95d3['wTbsP']), _0x21daf6 = await _0x2160ee[_0x2ed228(365)](), _0x3621b9 = [];
    for (let _0x53881c = -111 * 17 + 1 * 2591 + -704; _0x4a95d3[_0x2ed228(367)](_0x53881c, stories); _0x53881c++) {
        const _0x1b97cd = _0x21daf6[_0x53881c];
        _0x3621b9['push'](await _0x4a95d3[_0x2ed228(368)](getStory, _0x1b97cd));
    }
    _0x4a95d3[_0x2ed228(369)](writeFileSync, _0x4a95d3[_0x2ed228(370)], _0x2ed228(371) + JSON[_0x2ed228(372)](_0x3621b9));
}
getTopStories();