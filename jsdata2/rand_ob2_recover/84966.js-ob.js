function _0x5edb(_0xbf46, _0x3a5e59) {
    return _0x5edb = function (_0x1cc9d0, _0x5edb6a) {
        _0x1cc9d0 = _0x1cc9d0 - 472;
        let _0x3f685e = _0x1cc9[_0x1cc9d0];
        return _0x3f685e;
    }, _0x5edb(_0xbf46, _0x3a5e59);
}
const path = require(_0x384f35(481)), chalk = require(_0x384f35(482)), stripAnsi = require(_0x384f35(483)), table = require(_0x384f35(484)), cwd = process['cwd'](), emitErrorsAsWarnings = process[_0x384f35(485)][_0x384f35(486)] === _0x384f35(487) && process['env']['ESLINT_NO_DEV_ERRORS'] === _0x384f35(488);
function isError(_0x54d4e5) {
    const _0x4b4f8 = _0x384f35;
    if (_0x54d4e5[_0x4b4f8(489)] || _0x54d4e5[_0x4b4f8(490)] === 2)
        return !![];
    return ![];
}
function getRelativePath(_0x215e53) {
    return path['relative'](cwd, _0x215e53);
}
function formatter(_0x234ed1) {
    const _0x4c3aeb = _0x384f35;
    let _0x4cd2b0 = '\n', _0x343a23 = ![], _0x48ed44 = ![];
    return _0x234ed1[_0x4c3aeb(491)](_0x30df24 => {
        const _0x135f8b = _0x4c3aeb;
        let _0x2d9af5 = _0x30df24[_0x135f8b(492)];
        if (_0x2d9af5[_0x135f8b(493)] === 0)
            return;
        _0x2d9af5 = _0x2d9af5['map'](_0x32823f => {
            const _0x10c3f4 = _0x135f8b;
            let _0x2eca40;
            isError(_0x32823f) && !emitErrorsAsWarnings ? (_0x2eca40 = _0x10c3f4(494), _0x343a23 = !![], _0x32823f['ruleId'] && (_0x48ed44 = !![])) : _0x2eca40 = _0x10c3f4(495);
            let _0x11da8c = _0x32823f[_0x10c3f4(496)] || 0;
            _0x32823f[_0x10c3f4(497)] && (_0x11da8c += ':' + _0x32823f[_0x10c3f4(497)]);
            let _0x398b4b = chalk['bold'](_0x10c3f4(498) + _0x11da8c + ':');
            return [
                '',
                _0x398b4b,
                _0x2eca40,
                _0x32823f[_0x10c3f4(499)][_0x10c3f4(500)](/\.$/, ''),
                chalk[_0x10c3f4(501)](_0x32823f[_0x10c3f4(502)] || '')
            ];
        });
        _0x343a23 && (_0x2d9af5 = _0x2d9af5[_0x135f8b(503)](_0x3fcb88 => _0x3fcb88[2] === _0x135f8b(494)));
        _0x2d9af5[_0x135f8b(491)](_0xb04792 => {
            const _0x20f7d3 = _0x135f8b;
            _0xb04792[4] = _0xb04792[2] === _0x20f7d3(494) ? chalk[_0x20f7d3(504)](_0xb04792[4]) : chalk[_0x20f7d3(505)](_0xb04792[4]), _0xb04792[_0x20f7d3(506)](2, 1);
        });
        let _0x821004 = table(_0x2d9af5, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x104b69) {
                const _0x570f7c = _0x135f8b;
                return stripAnsi(_0x104b69)[_0x570f7c(493)];
            }
        });
        _0x4cd2b0 += getRelativePath(_0x30df24[_0x135f8b(507)]) + '\n', _0x4cd2b0 += _0x821004 + '\n\n';
    }), _0x48ed44 && (_0x4cd2b0 += _0x4c3aeb(508) + chalk[_0x4c3aeb(501)](chalk[_0x4c3aeb(504)]('keywords')) + _0x4c3aeb(509)), _0x4cd2b0;
}
module[_0x384f35(510)] = formatter;