const _0x33cf = ['337RMFbzN', '2539sbQNWk', '1571TMOjVS', '169NuqnJr', '720323uKKRia', '828959ChyMCD', '@vue/cli-shared-utils', 'exports', 'git', 'status', 'env', 'VUE_CLI_SKIP_DIRTY_GIT_PROMPT', 'VUE_CLI_API_MODE', 'dsKbx', 'HjcEv', 'wHEXO', 'prompt', 'confirm', '2357BLHLvB', '1kcbfvF', '353715zYEfaG', '11JlcTju', '29774wKQxkL'];
const _0x4d13c3 = _0x4660;

(function (_0x280604, _0x3f334d) {
    const _0x2405d3 = _0x4660;

    while (true) {
        try {
            const _0x435681 = -parseInt(_0x2405d3(0x1e2)) + -parseInt(_0x2405d3(0x1e3)) * parseInt(_0x2405d3(0x1e4)) + parseInt(_0x2405d3(0x1e5)) * parseInt(_0x2405d3(0x1e6)) + -parseInt(_0x2405d3(0x1e7)) * -parseInt(_0x2405d3(0x1e8)) + -parseInt(_0x2405d3(0x1e9)) * parseInt(_0x2405d3(0x1ea)) + parseInt(_0x2405d3(0x1eb)) + -parseInt(_0x2405d3(0x1ec));

            if (_0x435681 === _0x3f334d) break;else _0x280604.push(_0x280604.shift());
        } catch (_0x5a3202) {
            _0x280604.push(_0x280604.shift());
        }
    }
})(_0x33cf, 452950);
function _0x4660(_0x52a3ce, _0x466f86) {
    return _0x4660 = function (_0x3c642e, _0x16add9) {
        _0x3c642e = _0x3c642e - 482;
        const _0xbe31f = _0x33cf[_0x3c642e];

        return _0xbe31f;
    }, _0x4660(_0x52a3ce, _0x466f86);
}

const inquirer = require('inquirer');

var { execa, warn, hasProjectGit } = require(_0x4d13c3(0x1ed));

module[_0x4d13c3(0x1ee)] = async function confirmIfGitDirty(_0x348954) {
    const _0x31803c = _0x4d13c3;
    const _0x36007d = {
        'dsKbx': _0x31803c(0x1ef),
        'HjcEv': _0x31803c(0x1f0),
        'wHEXO': function (_0x282b60, _0x231943) {
            return _0x282b60(_0x231943);
        }
    };

    if (process[_0x31803c(0x1f1)][_0x31803c(0x1f2)] || process[_0x31803c(0x1f1)][_0x31803c(0x1f3)]) return true;
    process[_0x31803c(0x1f1)][_0x31803c(0x1f2)] = true;
    if (!hasProjectGit(_0x348954)) return true;
    var { stdout: _0x4d7c09 } = await execa(_0x36007d[_0x31803c(0x1f4)], [_0x36007d[_0x31803c(0x1f5)], '--porcelain'], { 'cwd': _0x348954 });

    if (!_0x4d7c09) return true;
    _0x36007d[_0x31803c(0x1f6)](warn, 'There are uncommitted changes in the current repository, it\'s recommended to commit or stash them first.');
    var { ok: _0xd64960 } = await inquirer[_0x31803c(0x1f7)]([{
        'name': 'ok',
        'type': _0x31803c(0x1f8),
        'message': 'Still proceed?',
        'default': false
    }]);

    return _0xd64960;
};
