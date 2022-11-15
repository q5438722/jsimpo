'use strict';
const _0x3605 = [
    '438601ESzCtj',
    '1XBmxtq',
    '181348cMsCrd',
    '98769hfPPfW',
    '20wuhNNh',
    '2571XHHPyv',
    '258485pAMhxP',
    '80465fPyIRj',
    '36703hqEOiA',
    '11leqIdX',
    'path',
    'chalk',
    'text-table',
    'cwd',
    'env',
    'NODE_ENV',
    'true',
    'severity',
    'relative',
    'forEach',
    'length',
    'map',
    'error',
    'warn',
    'line',
    'column',
    'bold',
    'Line\x20',
    'message',
    'ruleId',
    'filter',
    'splice',
    'Search\x20for\x20the\x20',
    'underline',
    'red',
    'exports'
];
const _0x2c4f2c = _0x4eb7;
(function (_0x1275b9, _0x187719) {
    const _0x33a0fb = _0x4eb7;
    while (!![]) {
        try {
            const _0x541693 = -parseInt(_0x33a0fb(0x190)) * -parseInt(_0x33a0fb(0x191)) + -parseInt(_0x33a0fb(0x192)) + parseInt(_0x33a0fb(0x193)) + -parseInt(_0x33a0fb(0x194)) * parseInt(_0x33a0fb(0x195)) + parseInt(_0x33a0fb(0x196)) + parseInt(_0x33a0fb(0x197)) + -parseInt(_0x33a0fb(0x198)) * parseInt(_0x33a0fb(0x199));
            if (_0x541693 === _0x187719)
                break;
            else
                _0x1275b9['push'](_0x1275b9['shift']());
        } catch (_0xafcdf2) {
            _0x1275b9['push'](_0x1275b9['shift']());
        }
    }
}(_0x3605, 0x3a8cb));
function _0x4eb7(_0x57e27e, _0x3f0b86) {
    return _0x4eb7 = function (_0x360521, _0x4eb777) {
        _0x360521 = _0x360521 - 0x190;
        let _0x5e39a9 = _0x3605[_0x360521];
        return _0x5e39a9;
    }, _0x4eb7(_0x57e27e, _0x3f0b86);
}
const path = require(_0x2c4f2c(0x19a)), chalk = require(_0x2c4f2c(0x19b)), stripAnsi = require('strip-ansi'), table = require(_0x2c4f2c(0x19c)), cwd = process[_0x2c4f2c(0x19d)](), emitErrorsAsWarnings = process[_0x2c4f2c(0x19e)][_0x2c4f2c(0x19f)] === 'development' && process[_0x2c4f2c(0x19e)]['ESLINT_NO_DEV_ERRORS'] === _0x2c4f2c(0x1a0);
function isError(_0x5b2a03) {
    const _0x354469 = _0x2c4f2c;
    if (_0x5b2a03['fatal'] || _0x5b2a03[_0x354469(0x1a1)] === 0x2)
        return !![];
    return ![];
}
function getRelativePath(_0x321987) {
    const _0xef101c = _0x2c4f2c;
    return path[_0xef101c(0x1a2)](cwd, _0x321987);
}
function formatter(_0x570fd1) {
    const _0x5ea84f = _0x2c4f2c;
    let _0x26db3b = '\x0a', _0x3e404f = ![], _0x583c9e = ![];
    return _0x570fd1[_0x5ea84f(0x1a3)](_0x1751e1 => {
        const _0x91535e = _0x5ea84f;
        let _0x17f53d = _0x1751e1['messages'];
        if (_0x17f53d[_0x91535e(0x1a4)] === 0x0)
            return;
        _0x17f53d = _0x17f53d[_0x91535e(0x1a5)](_0x48bfaa => {
            const _0x225ea6 = _0x91535e;
            let _0x33671a;
            isError(_0x48bfaa) && !emitErrorsAsWarnings ? (_0x33671a = _0x225ea6(0x1a6), _0x3e404f = !![], _0x48bfaa['ruleId'] && (_0x583c9e = !![])) : _0x33671a = _0x225ea6(0x1a7);
            let _0x1a038b = _0x48bfaa[_0x225ea6(0x1a8)] || 0x0;
            _0x48bfaa[_0x225ea6(0x1a9)] && (_0x1a038b += ':' + _0x48bfaa[_0x225ea6(0x1a9)]);
            let _0x5078ea = chalk[_0x225ea6(0x1aa)](_0x225ea6(0x1ab) + _0x1a038b + ':');
            return [
                '',
                _0x5078ea,
                _0x33671a,
                _0x48bfaa[_0x225ea6(0x1ac)]['replace'](/\.$/, ''),
                chalk['underline'](_0x48bfaa[_0x225ea6(0x1ad)] || '')
            ];
        });
        _0x3e404f && (_0x17f53d = _0x17f53d[_0x91535e(0x1ae)](_0x58cf5f => _0x58cf5f[0x2] === _0x91535e(0x1a6)));
        _0x17f53d[_0x91535e(0x1a3)](_0x2a9e24 => {
            const _0x1729d6 = _0x91535e;
            _0x2a9e24[0x4] = _0x2a9e24[0x2] === _0x1729d6(0x1a6) ? chalk['red'](_0x2a9e24[0x4]) : chalk['yellow'](_0x2a9e24[0x4]), _0x2a9e24[_0x1729d6(0x1af)](0x2, 0x1);
        });
        let _0x21f427 = table(_0x17f53d, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x486a9b) {
                const _0x341325 = _0x91535e;
                return stripAnsi(_0x486a9b)[_0x341325(0x1a4)];
            }
        });
        _0x26db3b += getRelativePath(_0x1751e1['filePath']) + '\x0a', _0x26db3b += _0x21f427 + '\x0a\x0a';
    }), _0x583c9e && (_0x26db3b += _0x5ea84f(0x1b0) + chalk[_0x5ea84f(0x1b1)](chalk[_0x5ea84f(0x1b2)]('keywords')) + '\x20to\x20learn\x20more\x20about\x20each\x20error.'), _0x26db3b;
}
module[_0x2c4f2c(0x1b3)] = formatter;
