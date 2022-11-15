const fetch = require(_0x5663fa(213)), {writeFileSync} = require('fs'), stories = 50;
function _0x2659(_0x4dd0de, _0x3ba121) {
    return _0x2659 = function (_0x1cfa03, _0x26599c) {
        _0x1cfa03 = _0x1cfa03 - 204;
        let _0x5b5ba9 = _0x1cfa[_0x1cfa03];
        return _0x5b5ba9;
    }, _0x2659(_0x4dd0de, _0x3ba121);
}
async function getStory(_0x242a3f) {
    const _0x123f6c = _0x5663fa, _0xfc4fae = await fetch(_0x123f6c(214) + _0x242a3f + _0x123f6c(215));
    return await _0xfc4fae[_0x123f6c(216)]();
}
async function getTopStories() {
    const _0x423aa8 = _0x5663fa, _0x2e2c10 = await fetch(_0x423aa8(217)), _0x196bc7 = await _0x2e2c10[_0x423aa8(216)](), _0x42ff20 = [];
    for (let _0x3c0ff5 = 0; _0x3c0ff5 < stories; _0x3c0ff5++) {
        const _0x1a61ee = _0x196bc7[_0x3c0ff5];
        _0x42ff20['push'](await getStory(_0x1a61ee));
    }
    writeFileSync(_0x423aa8(218), _0x423aa8(219) + JSON[_0x423aa8(220)](_0x42ff20));
}
getTopStories();