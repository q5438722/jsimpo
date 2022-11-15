'use strict';
const path = require('path'), chalk = require('chalk'), stripAnsi = require('strip-ansi'), table = require('text-table'), cwd = process['cwd'](), emitErrorsAsWarnings = process['env']['NODE_ENV'] === 'development' && process['env']['ESLINT_NO_DEV_ERRORS'] === 'true';
function isError(_0xe43bf8) {
    if (_0xe43bf8['fatal'] || _0xe43bf8['severity'] === -0xb82 * 0x3 + -0x181f + 0x3aa7)
        return !![];
    return ![];
}
function getRelativePath(_0x2733fd) {
    return path['relative'](cwd, _0x2733fd);
}
function formatter(_0x37c2c2) {
    let _0x2ae360 = '\x0a', _0x36f33b = ![], _0x33bf4b = ![];
    return _0x37c2c2['forEach'](_0x4131a5 => {
        let _0xe17086 = _0x4131a5['messages'];
        if (_0xe17086['length'] === 0x17d2 * -0x1 + -0x24df * 0x1 + 0x3cb1)
            return;
        _0xe17086 = _0xe17086['map'](_0x2a3991 => {
            let _0x49e682;
            isError(_0x2a3991) && !emitErrorsAsWarnings ? (_0x49e682 = 'error', _0x36f33b = !![], _0x2a3991['ruleId'] && (_0x33bf4b = !![])) : _0x49e682 = 'warn';
            let _0xf187db = _0x2a3991['line'] || -0x264a + -0x3 * -0xc85 + -0x1 * -0xbb;
            _0x2a3991['column'] && (_0xf187db += ':' + _0x2a3991['column']);
            let _0x199808 = chalk['bold']('Line\x20' + _0xf187db + ':');
            return [
                '',
                _0x199808,
                _0x49e682,
                _0x2a3991['message']['replace'](/\.$/, ''),
                chalk['underline'](_0x2a3991['ruleId'] || '')
            ];
        });
        _0x36f33b && (_0xe17086 = _0xe17086['filter'](_0x1767cc => _0x1767cc[-0x910 + 0x1081 + 0xb * -0xad] === 'error'));
        _0xe17086['forEach'](_0x2dacd6 => {
            _0x2dacd6[-0x1 * 0x967 + -0x2647 + 0x2fb2] = _0x2dacd6[0x1 * -0xfd7 + 0x2339 * 0x1 + -0x1 * 0x1360] === 'error' ? chalk['red'](_0x2dacd6[-0x1c97 + 0x202 * -0x5 + 0x26a5]) : chalk['yellow'](_0x2dacd6[0x15de + 0x641 + -0x59f * 0x5]), _0x2dacd6['splice'](0x1 * -0xf7 + 0xb2 * 0xe + -0x1 * 0x8c3, 0xa77 + 0x3 * 0x257 + -0x1 * 0x117b);
        });
        let _0x869c8b = table(_0xe17086, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x122d88) {
                return stripAnsi(_0x122d88)['length'];
            }
        });
        _0x2ae360 += getRelativePath(_0x4131a5['filePath']) + '\x0a', _0x2ae360 += _0x869c8b + '\x0a\x0a';
    }), _0x33bf4b && (_0x2ae360 += 'Search\x20for\x20the\x20' + chalk['underline'](chalk['red']('keywords')) + '\x20to\x20learn\x20more\x20about\x20each\x20error.'), _0x2ae360;
}
module['exports'] = formatter;
