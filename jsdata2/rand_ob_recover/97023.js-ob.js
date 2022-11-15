const fetch = require('node-fetch'), {writeFileSync} = require('fs'), stories = 3329 * -1 + 1352 + 2027;
async function getStory(_0x57ac56) {
    const _0x1988cc = _0xe8de, _0x4d418a = await fetch(_0x1988cc(288) + _0x57ac56 + '.json');
    return await _0x4d418a[_0x1988cc(289)]();
}
async function getTopStories() {
    const _0x345f0a = _0xe8de, _0xddd4d6 = {
            'aIFnV': function (_0x251ac3, _0x27a3a5) {
                return _0x251ac3(_0x27a3a5);
            },
            'RTxqb': _0x345f0a(290),
            'EyUlp': function (_0x415a24, _0x1fbbc8, _0x1e13de) {
                return _0x415a24(_0x1fbbc8, _0x1e13de);
            },
            'XuvCL': 'top-stories.json'
        }, _0x1c9349 = await _0xddd4d6[_0x345f0a(291)](fetch, _0xddd4d6[_0x345f0a(292)]), _0x2dfa78 = await _0x1c9349[_0x345f0a(289)](), _0x223c89 = [];
    for (let _0x2e1fed = 6 * 309 + -9309 + 7 * 1065; _0x2e1fed < stories; _0x2e1fed++) {
        const _0xbfe1fb = _0x2dfa78[_0x2e1fed];
        _0x223c89[_0x345f0a(293)](await _0xddd4d6[_0x345f0a(291)](getStory, _0xbfe1fb));
    }
    _0xddd4d6[_0x345f0a(294)](writeFileSync, _0xddd4d6['XuvCL'], 'window.stories = ' + JSON[_0x345f0a(295)](_0x223c89));
}
function _0xe8de(_0x126df1, _0x21d268) {
    return _0xe8de = function (_0x16584b, _0x210203) {
        _0x16584b = _0x16584b - (-5917 + -3125 + 5 * 1864);
        let _0x8c0c0e = _0x29bf[_0x16584b];
        return _0x8c0c0e;
    }, _0xe8de(_0x126df1, _0x21d268);
}
getTopStories();