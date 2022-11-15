'use strict';

const _0x4d16 = ['window.stories = ', 'stringify', '114489nmukoI', '703812efGYYq', '1xhIWSf', '949211qqehEv', '78NLOZWE', '15937KsCvwy', '104378wMcFsX', '54386TJCsee', '21QgKJxI', '505833WvHPMu', 'node-fetch', 'https://hacker-news.firebaseio.com/v0/item/', '.json', 'json', 'top-stories.json', 'otbVj', 'XWTWP', 'ZtVvH', 'VykCy'];
const _0x3ce696 = _0x1262;

(function (_0x4e402d, _0x5b321b) {
    const _0x18cb98 = _0x1262;

    while (true) {
        try {
            const _0x4c7e69 = -parseInt(_0x18cb98(0x160)) + parseInt(_0x18cb98(0x161)) + parseInt(_0x18cb98(0x162)) * parseInt(_0x18cb98(0x163)) + parseInt(_0x18cb98(0x164)) * -parseInt(_0x18cb98(0x165)) + -parseInt(_0x18cb98(0x166)) + parseInt(_0x18cb98(0x167)) * parseInt(_0x18cb98(0x168)) + -parseInt(_0x18cb98(0x169));

            if (_0x4c7e69 === _0x5b321b) break;else _0x4e402d.push(_0x4e402d.shift());
        } catch (_0x2db48c) {
            _0x4e402d.push(_0x4e402d.shift());
        }
    }
})(_0x4d16, 827343);
function _0x1262(_0x1cb835, _0xbbbc51) {
    return _0x1262 = function (_0x151ac0, _0x5c8cee) {
        _0x151ac0 = _0x151ac0 - 352;
        const _0x3f0760 = _0x4d16[_0x151ac0];

        return _0x3f0760;
    }, _0x1262(_0x1cb835, _0xbbbc51);
}

const fetch = require(_0x3ce696(0x16a));

var { writeFileSync } = require('fs');

const stories = 50;

async function getStory(_0x5da871) {
    const _0x1c4634 = _0x3ce696;

    const _0x374c57 = await fetch(_0x1c4634(0x16b) + _0x5da871 + _0x1c4634(0x16c));

    return await _0x374c57[_0x1c4634(0x16d)]();
}
async function getTopStories() {
    const _0x2ed228 = _0x3ce696;
    const _0x4a95d3 = {
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
        'VykCy': _0x2ed228(0x16e)
    };

    const _0x2160ee = await _0x4a95d3.eZSpc(fetch, _0x4a95d3.wTbsP);

    const _0x21daf6 = await _0x2160ee[_0x2ed228(0x16d)]();

    const _0x3621b9 = [];

    for (let _0x53881c = 0; _0x4a95d3[_0x2ed228(0x16f)](_0x53881c, stories); _0x53881c++) {
        const _0x1b97cd = _0x21daf6[_0x53881c];

        _0x3621b9.push((await _0x4a95d3[_0x2ed228(0x170)](getStory, _0x1b97cd)));
    }
    _0x4a95d3[_0x2ed228(0x171)](writeFileSync, _0x4a95d3[_0x2ed228(0x172)], _0x2ed228(0x173) + JSON[_0x2ed228(0x174)](_0x3621b9));
}
const _0x2ed228 = _0x3ce696;
const _0x4a95d3 = { 'eZSpc': function (_0x8f00c5, _0x6075fc) {
        return _0x8f00c5(_0x6075fc);
    }, 'wTbsP': 'https://hacker-news.firebaseio.com/v0/topstories.js', 'otbVj': function (_0x39c064, _0xe3c236) {
        return _0x39c064 < _0xe3c236;
    }, 'XWTWP': function (_0x42070d, _0x41da11) {
        return _0x42070d(_0x41da11);
    }, 'ZtVvH': function (_0x4e786c, _0x528d49, _0xdc3d9b) {
        return _0x4e786c(_0x528d49, _0xdc3d9b);
    }, 'VykCy': _0x2ed228(0x16e) };

const _0x2160ee = await _0x4a95d3.eZSpc(fetch, _0x4a95d3.wTbsP);

const _0x21daf6 = await _0x2160ee[_0x2ed228(0x16d)]();

const _0x3621b9 = [];
for (let _0x53881c = 0; _0x4a95d3[_0x2ed228(0x16f)](_0x53881c, stories); _0x53881c++) {
    const _0x1b97cd = _0x21daf6[_0x53881c];
    _0x3621b9.push((await _0x4a95d3[_0x2ed228(0x170)](getStory, _0x1b97cd)));
}_0x4a95d3[_0x2ed228(0x171)](writeFileSync, _0x4a95d3[_0x2ed228(0x172)], _0x2ed228(0x173) + JSON[_0x2ed228(0x174)](_0x3621b9));
