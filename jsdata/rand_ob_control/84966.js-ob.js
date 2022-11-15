'use strict';
const path = require('path'), chalk = require('chalk'), stripAnsi = require('strip-ansi'), table = require('text-table'), cwd = process['cwd'](), emitErrorsAsWarnings = process['env']['NODE_ENV'] === 'development' && process['env']['ESLINT_NO_DEV_ERRORS'] === 'true';
function isError(_0xdd8482) {
    const _0x2a69db = {
        'oOGRy': function (_0x542b0c, _0x3ad438) {
            return _0x542b0c === _0x3ad438;
        }
    };
    if (_0xdd8482['fatal'] || _0x2a69db['oOGRy'](_0xdd8482['severity'], 0x2))
        return !![];
    return ![];
}
function getRelativePath(_0x545175) {
    return path['relative'](cwd, _0x545175);
}
function formatter(_0x549467) {
    const _0x143dca = {
        'gcWAv': function (_0xc8a853, _0x5ad857) {
            return _0xc8a853(_0x5ad857);
        },
        'iRgzK': 'error',
        'LYlym': 'warn',
        'OdOGZ': function (_0x1940cf, _0x1f8aef) {
            return _0x1940cf + _0x1f8aef;
        },
        'BNNBM': function (_0x152232, _0x2297bc) {
            return _0x152232 + _0x2297bc;
        },
        'lKhFs': 'Line\x20',
        'rniif': function (_0x259b6f, _0x4bb7b9) {
            return _0x259b6f(_0x4bb7b9);
        },
        'wzuYt': function (_0x355373, _0x15a2ed) {
            return _0x355373 === _0x15a2ed;
        },
        'hBuJP': function (_0x1dacb2, _0x3c1e69, _0xede666) {
            return _0x1dacb2(_0x3c1e69, _0xede666);
        },
        'gszss': function (_0x41e549, _0x716d7f) {
            return _0x41e549 + _0x716d7f;
        },
        'JXVKk': function (_0x275f67, _0xf9237c) {
            return _0x275f67 + _0xf9237c;
        },
        'Zsrpt': 'Search\x20for\x20the\x20',
        'SbMXh': 'keywords',
        'fTOQr': '\x20to\x20learn\x20more\x20about\x20each\x20error.'
    };
    let _0x226494 = '\x0a', _0x301632 = ![], _0x39fda9 = ![];
    return _0x549467['forEach'](_0x4754a4 => {
        const _0x189ed2 = {
            'QlmDu': function (_0x56944e, _0x4df7ea) {
                return _0x143dca['wzuYt'](_0x56944e, _0x4df7ea);
            },
            'CQLkJ': _0x143dca['iRgzK']
        };
        let _0x118f7c = _0x4754a4['messages'];
        if (_0x143dca['wzuYt'](_0x118f7c['length'], 0x0))
            return;
        _0x118f7c = _0x118f7c['map'](_0x3eeb47 => {
            let _0x4442c9;
            _0x143dca['gcWAv'](isError, _0x3eeb47) && !emitErrorsAsWarnings ? (_0x4442c9 = _0x143dca['iRgzK'], _0x301632 = !![], _0x3eeb47['ruleId'] && (_0x39fda9 = !![])) : _0x4442c9 = _0x143dca['LYlym'];
            let _0x32a558 = _0x3eeb47['line'] || 0x0;
            _0x3eeb47['column'] && (_0x32a558 += _0x143dca['OdOGZ'](':', _0x3eeb47['column']));
            let _0x12bae7 = chalk['bold'](_0x143dca['OdOGZ'](_0x143dca['BNNBM'](_0x143dca['lKhFs'], _0x32a558), ':'));
            return [
                '',
                _0x12bae7,
                _0x4442c9,
                _0x3eeb47['message']['replace'](/\.$/, ''),
                chalk['underline'](_0x3eeb47['ruleId'] || '')
            ];
        });
        _0x301632 && (_0x118f7c = _0x118f7c['filter'](_0x2b527b => _0x2b527b[0x2] === 'error'));
        _0x118f7c['forEach'](_0xee92c7 => {
            _0xee92c7[0x4] = _0x189ed2['QlmDu'](_0xee92c7[0x2], _0x189ed2['CQLkJ']) ? chalk['red'](_0xee92c7[0x4]) : chalk['yellow'](_0xee92c7[0x4]), _0xee92c7['splice'](0x2, 0x1);
        });
        let _0x24294b = _0x143dca['hBuJP'](table, _0x118f7c, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x137d0c) {
                return _0x143dca['rniif'](stripAnsi, _0x137d0c)['length'];
            }
        });
        _0x226494 += _0x143dca['rniif'](getRelativePath, _0x4754a4['filePath']) + '\x0a', _0x226494 += _0x24294b + '\x0a\x0a';
    }), _0x39fda9 && (_0x226494 += _0x143dca['gszss'](_0x143dca['JXVKk'](_0x143dca['Zsrpt'], chalk['underline'](chalk['red'](_0x143dca['SbMXh']))), _0x143dca['fTOQr'])), _0x226494;
}
module['exports'] = formatter;
