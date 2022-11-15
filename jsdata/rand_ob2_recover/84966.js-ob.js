function _0x4eb7(_0x57e27e, _0x3f0b86) {
    return _0x4eb7 = function (_0x360521, _0x4eb777) {
        _0x360521 = _0x360521 - 400;
        let _0x5e39a9 = _0x3605[_0x360521];
        return _0x5e39a9;
    }, _0x4eb7(_0x57e27e, _0x3f0b86);
}
const path = require(_0x2c4f2c(410)), chalk = require(_0x2c4f2c(411)), stripAnsi = require('strip-ansi'), table = require(_0x2c4f2c(412)), cwd = process[_0x2c4f2c(413)](), emitErrorsAsWarnings = process[_0x2c4f2c(414)][_0x2c4f2c(415)] === 'development' && process[_0x2c4f2c(414)]['ESLINT_NO_DEV_ERRORS'] === _0x2c4f2c(416);
function isError(_0x5b2a03) {
    const _0x354469 = _0x2c4f2c;
    if (_0x5b2a03['fatal'] || _0x5b2a03[_0x354469(417)] === 2)
        return !![];
    return ![];
}
function getRelativePath(_0x321987) {
    const _0xef101c = _0x2c4f2c;
    return path[_0xef101c(418)](cwd, _0x321987);
}
function formatter(_0x570fd1) {
    const _0x5ea84f = _0x2c4f2c;
    let _0x26db3b = '\n', _0x3e404f = ![], _0x583c9e = ![];
    return _0x570fd1[_0x5ea84f(419)](_0x1751e1 => {
        const _0x91535e = _0x5ea84f;
        let _0x17f53d = _0x1751e1['messages'];
        if (_0x17f53d[_0x91535e(420)] === 0)
            return;
        _0x17f53d = _0x17f53d[_0x91535e(421)](_0x48bfaa => {
            const _0x225ea6 = _0x91535e;
            let _0x33671a;
            isError(_0x48bfaa) && !emitErrorsAsWarnings ? (_0x33671a = _0x225ea6(422), _0x3e404f = !![], _0x48bfaa['ruleId'] && (_0x583c9e = !![])) : _0x33671a = _0x225ea6(423);
            let _0x1a038b = _0x48bfaa[_0x225ea6(424)] || 0;
            _0x48bfaa[_0x225ea6(425)] && (_0x1a038b += ':' + _0x48bfaa[_0x225ea6(425)]);
            let _0x5078ea = chalk[_0x225ea6(426)](_0x225ea6(427) + _0x1a038b + ':');
            return [
                '',
                _0x5078ea,
                _0x33671a,
                _0x48bfaa[_0x225ea6(428)]['replace'](/\.$/, ''),
                chalk['underline'](_0x48bfaa[_0x225ea6(429)] || '')
            ];
        });
        _0x3e404f && (_0x17f53d = _0x17f53d[_0x91535e(430)](_0x58cf5f => _0x58cf5f[2] === _0x91535e(422)));
        _0x17f53d[_0x91535e(419)](_0x2a9e24 => {
            const _0x1729d6 = _0x91535e;
            _0x2a9e24[4] = _0x2a9e24[2] === _0x1729d6(422) ? chalk['red'](_0x2a9e24[4]) : chalk['yellow'](_0x2a9e24[4]), _0x2a9e24[_0x1729d6(431)](2, 1);
        });
        let _0x21f427 = table(_0x17f53d, {
            'align': [
                'l',
                'l',
                'l'
            ],
            'stringLength'(_0x486a9b) {
                const _0x341325 = _0x91535e;
                return stripAnsi(_0x486a9b)[_0x341325(420)];
            }
        });
        _0x26db3b += getRelativePath(_0x1751e1['filePath']) + '\n', _0x26db3b += _0x21f427 + '\n\n';
    }), _0x583c9e && (_0x26db3b += _0x5ea84f(432) + chalk[_0x5ea84f(433)](chalk[_0x5ea84f(434)]('keywords')) + ' to learn more about each error.'), _0x26db3b;
}
module[_0x2c4f2c(435)] = formatter;