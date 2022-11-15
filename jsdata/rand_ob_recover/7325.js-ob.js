function _0x4660(_0x52a3ce, _0x466f86) {
    return _0x4660 = function (_0x3c642e, _0x16add9) {
        _0x3c642e = _0x3c642e - (880 + 14 * -67 + -135 * -4);
        let _0xbe31f = _0x33cf[_0x3c642e];
        return _0xbe31f;
    }, _0x4660(_0x52a3ce, _0x466f86);
}
const inquirer = require('inquirer'), {execa, warn, hasProjectGit} = require(_0x4d13c3(493));
module[_0x4d13c3(494)] = async function confirmIfGitDirty(_0x348954) {
    const _0x31803c = _0x4d13c3, _0x36007d = {
            'dsKbx': _0x31803c(495),
            'HjcEv': _0x31803c(496),
            'wHEXO': function (_0x282b60, _0x231943) {
                return _0x282b60(_0x231943);
            }
        };
    if (process[_0x31803c(497)][_0x31803c(498)] || process[_0x31803c(497)][_0x31803c(499)])
        return !![];
    process[_0x31803c(497)][_0x31803c(498)] = !![];
    if (!hasProjectGit(_0x348954))
        return !![];
    const {stdout: _0x4d7c09} = await execa(_0x36007d[_0x31803c(500)], [
        _0x36007d[_0x31803c(501)],
        '--porcelain'
    ], { 'cwd': _0x348954 });
    if (!_0x4d7c09)
        return !![];
    _0x36007d[_0x31803c(502)](warn, 'There are uncommitted changes in the current repository, it\'s recommended to commit or stash them first.');
    const {ok: _0xd64960} = await inquirer[_0x31803c(503)]([{
            'name': 'ok',
            'type': _0x31803c(504),
            'message': 'Still proceed?',
            'default': ![]
        }]);
    return _0xd64960;
};