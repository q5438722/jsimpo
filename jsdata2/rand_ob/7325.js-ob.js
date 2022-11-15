const _0xcd92 = [
    'env',
    'VUE_CLI_API_MODE',
    'VUE_CLI_SKIP_DIRTY_GIT_PROMPT',
    'dwWKH',
    'OBFIU',
    'TOrff',
    'vIZQV',
    'There\x20are\x20uncommitted\x20changes\x20in\x20the\x20current\x20repository,\x20it\x27s\x20recommended\x20to\x20commit\x20or\x20stash\x20them\x20first.',
    'prompt',
    'lOgIZ',
    '11738kEpBXh',
    '51622gsuNyt',
    '11oumNnL',
    '234ZHpskG',
    '939mRvyDe',
    '4346cTvqLu',
    '23GMpqzs',
    '163686awTWTj',
    '181swaEPd',
    '1153wNqEBi',
    '28436ZUaPgJ',
    '37fXhTPx',
    'inquirer',
    '@vue/cli-shared-utils',
    'git',
    '--porcelain',
    'confirm',
    'Still\x20proceed?'
];
function _0x5b8b(_0x3a7148, _0xe7652e) {
    return _0x5b8b = function (_0x519699, _0x36fbd6) {
        _0x519699 = _0x519699 - (0x600 + 0x6b9 * 0x1 + -0x73 * 0x18);
        let _0x4feced = _0xcd92[_0x519699];
        return _0x4feced;
    }, _0x5b8b(_0x3a7148, _0xe7652e);
}
const _0x100950 = _0x5b8b;
(function (_0x1d6ddc, _0x5229f8) {
    const _0x10a4ec = _0x5b8b;
    while (!![]) {
        try {
            const _0x4ef21c = parseInt(_0x10a4ec(0x1f1)) + parseInt(_0x10a4ec(0x1f2)) * -parseInt(_0x10a4ec(0x1f3)) + -parseInt(_0x10a4ec(0x1f4)) * parseInt(_0x10a4ec(0x1f5)) + -parseInt(_0x10a4ec(0x1f6)) * -parseInt(_0x10a4ec(0x1f7)) + parseInt(_0x10a4ec(0x1f8)) + parseInt(_0x10a4ec(0x1f9)) * -parseInt(_0x10a4ec(0x1fa)) + parseInt(_0x10a4ec(0x1fb)) * parseInt(_0x10a4ec(0x1fc));
            if (_0x4ef21c === _0x5229f8)
                break;
            else
                _0x1d6ddc['push'](_0x1d6ddc['shift']());
        } catch (_0x3bcb43) {
            _0x1d6ddc['push'](_0x1d6ddc['shift']());
        }
    }
}(_0xcd92, 0x6492f + -0x1756c * 0x2 + 0x1af9e));
const inquirer = require(_0x100950(0x1fd)), {execa, warn, hasProjectGit} = require(_0x100950(0x1fe));
module['exports'] = async function confirmIfGitDirty(_0x29582f) {
    const _0x55a7de = _0x100950, _0x16c58f = {
            'dwWKH': _0x55a7de(0x1ff),
            'OBFIU': 'status',
            'TOrff': _0x55a7de(0x200),
            'vIZQV': function (_0x33a9ae, _0xb4ebe3) {
                return _0x33a9ae(_0xb4ebe3);
            },
            'fZcLU': _0x55a7de(0x201),
            'lOgIZ': _0x55a7de(0x202)
        };
    if (process[_0x55a7de(0x203)]['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process[_0x55a7de(0x203)][_0x55a7de(0x204)])
        return !![];
    process[_0x55a7de(0x203)][_0x55a7de(0x205)] = !![];
    if (!hasProjectGit(_0x29582f))
        return !![];
    const {stdout: _0x230a71} = await execa(_0x16c58f[_0x55a7de(0x206)], [
        _0x16c58f[_0x55a7de(0x207)],
        _0x16c58f[_0x55a7de(0x208)]
    ], { 'cwd': _0x29582f });
    if (!_0x230a71)
        return !![];
    _0x16c58f[_0x55a7de(0x209)](warn, _0x55a7de(0x20a));
    const {ok: _0xfce65c} = await inquirer[_0x55a7de(0x20b)]([{
            'name': 'ok',
            'type': _0x16c58f['fZcLU'],
            'message': _0x16c58f[_0x55a7de(0x20c)],
            'default': ![]
        }]);
    return _0xfce65c;
};
