'use strict';
const _0x1cc9 = [
    '737690vHUYmk',
    '1148722JEekxu',
    '1825255uJRaWi',
    '1YZQoBT',
    'path',
    'chalk',
    'strip-ansi',
    'text-table',
    'env',
    'NODE_ENV',
    'development',
    'true',
    'fatal',
    'severity',
    'forEach',
    'messages',
    'length',
    'error',
    'warn',
    'line',
    'column',
    'Line\x20',
    'message',
    'replace',
    'underline',
    'ruleId',
    'filter',
    'red',
    'yellow',
    'splice',
    'filePath',
    'Search\x20for\x20the\x20',
    '\x20to\x20learn\x20more\x20about\x20each\x20error.',
    'exports',
    '48131knLBYf',
    '1srCsOJ',
    '911915pZwBJe',
    '477964sIHlZC',
    '326130OCHjjm'
];
const _0x384f35 = _0x5edb;
(function (_0xe7f913, _0x268020) {
    const _0x562fdd = _0x5edb;
    while (!![]) {
        try {
            const _0x2f9693 = -parseInt(_0x562fdd(0x1d8)) * -parseInt(_0x562fdd(0x1d9)) + parseInt(_0x562fdd(0x1da)) + -parseInt(_0x562fdd(0x1db)) + parseInt(_0x562fdd(0x1dc)) + parseInt(_0x562fdd(0x1dd)) + parseInt(_0x562fdd(0x1de)) + parseInt(_0x562fdd(0x1df)) * -parseInt(_0x562fdd(0x1e0));
            if (_0x2f9693 === _0x268020)
                break;
            else
                _0xe7f913['push'](_0xe7f913['shift']());
        } catch (_0x500271) {
            _0xe7f913['push'](_0xe7f913['shift']());
        }
    }
}(_0x1cc9, 0xd43f9));
function _0x5edb(_0xbf46, _0x3a5e59) {
    return _0x5edb = function (_0x1cc9d0, _0x5edb6a) {
        _0x1cc9d0 = _0x1cc9d0 - 0x1d8;
        let _0x3f685e = _0x1cc9[_0x1cc9d0];
        return _0x3f685e;
    }, _0x5edb(_0xbf46, _0x3a5e59);
}
const path = require(_0x384f35(0x1e1)), chalk = require(_0x384f35(0x1e2)), stripAnsi = require(_0x384f35(0x1e3)), table = require(_0x384f35(0x1e4)), cwd = process['cwd'](), emitErrorsAsWarnings = process[_0x384f35(0x1e5)][_0x384f35(0x1e6)] === _0x384f35(0x1e7) && process['env']['ESLINT_NO_DEV_ERRORS'] === _0x384f35(0x1e8);
function isError(_0x54d4e5) {
    const _0x4b4f8 = _0x384f35;
    if (_0x54d4e5[_0x4b4f8(0x1e9)] || _0x54d4e5[_0x4b4f8(0x1ea)] === 0x2)
        return !![];
    return ![];
}
function getRelativePath(_0x215e53) {
    return path['relative'](cwd, _0x215e53);
}
function formatter(_0x234ed1) {
    const _0x4c3aeb = _0x384f35;
    let _0x4cd2b0 = '\x0a', _0x343a23 = ![], _0x48ed44 = ![];
    return _0x234ed1[_0x4c3aeb(0x1eb)](_0x30df24 => {
        const _0x135f8b = _0x4c3aeb;
        let _0x2d9af5 = _0x30df24[_0x135f8b(0x1ec)];
        if (_0x2d9af5[_0x135f8b(0x1ed)] === 0x0)
            return;
        _0x2d9af5 = _0x2d9af5['map'](_0x32823f => {
            const _0x10c3f4 = _0x135f8b;
            let _0x2eca40;
            isError(_0x32823f) && !emitErrorsAsWarnings ? (_0x2eca40 = _0x10c3f4(0x1ee), _0x343a23 = !![], _0x32823f['ruleId'] && (_0x48ed44 = !![])) : _0x2eca40 = _0x10c3f4(0x1ef);
            let _0x11da8c = _0x32823f[_0x10c3f4(0x1f0)] || 0x0;
            _0x32823f[_0x10c3f4(0x1f1)] && (_0x11da8c += ':' + _0x32823f[_0x10c3f4(0x1f1)]);
            let _0x398b4b = chalk['bold'](_0x10c3f4(0x1f2) + _0x11da8c + ':');
            return [
                '',
                _0x398b4b,
                _0x2eca40,
                _0x32823f[_0x10c3f4(0x1f3)][_0x10c3f4(0x1f4)](/\.$/, ''),
                chalk[_0x10c3f4(0x1f5)](_0x32823f[_0x10c3f4(0x1f6)] || '')
            ];
        });
        _0x343a23 && (_0x2d9af5 = _0x2d9af5[_0x135f8b(0x1f7)](_0x3fcb88 => _0x3fcb88[0x2] === _0x135f8b(0x1ee)));
        _0x2d9af5[_0x135f8b(0x1eb)](_0xb04792 => {
            const _0x20f7d3 = _0x135f8b;
            _0xb04792[0x4] = _0xb04792[0x2] === _0x20f7d3(0x1ee) ? chalk[_0x20f7d3(0x1f8)](_0xb04792[0x4]) : chalk[_0x20f7d3(0x1f9)](_0xb04792[0x4]), _0xb04792[_0x20f7d3(0x1fa)](0x2, 0x1);
        });
        let _0x821004 = table(_0x2d9af5, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x104b69) {
                const _0x570f7c = _0x135f8b;
                return stripAnsi(_0x104b69)[_0x570f7c(0x1ed)];
            }
        });
        _0x4cd2b0 += getRelativePath(_0x30df24[_0x135f8b(0x1fb)]) + '\x0a', _0x4cd2b0 += _0x821004 + '\x0a\x0a';
    }), _0x48ed44 && (_0x4cd2b0 += _0x4c3aeb(0x1fc) + chalk[_0x4c3aeb(0x1f5)](chalk[_0x4c3aeb(0x1f8)]('keywords')) + _0x4c3aeb(0x1fd)), _0x4cd2b0;
}
module[_0x384f35(0x1fe)] = formatter;
