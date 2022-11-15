'use strict';

const _0x3d51 = ['191JxZeuF', '456zUqxSN', '1226xpZZyp', '194775RERDWO', '1412127BtlSUx', '1TdKgvT', '2336241pEeyWd', 'chalk', 'strip-ansi', 'text-table', 'cwd', 'env', 'development', 'ESLINT_NO_DEV_ERRORS', 'true', 'fatal', 'rTMuZ', 'severity', 'relative', 'error', 'Search for the ', ' to learn more about each error.', 'JMWVK', 'WNtQx', 'iAanK', 'MQLPH', 'Line ', 'messages', 'length', 'rWxiY', 'ruleId', 'eKFEh', 'line', 'column', 'uSHBH', 'bold', 'jGjNB', 'message', 'underline', 'red', 'yellow', 'splice', 'vNJVr', 'CpQaF', 'filePath', 'kpPoN', 'Ndwcf', 'uKHdt', 'exports', '30893LhQkoa', '1xRmuiP', '1748157jQIwfR', '9193qkCfau'];
const _0x40a6fd = _0xf9da;

(function (_0x16a77f, _0x4f3990) {
    const _0x4baff3 = _0xf9da;

    while (true) {
        try {
            const _0x165f2d = -parseInt(_0x4baff3(0x1e5)) * parseInt(_0x4baff3(0x1e6)) + -parseInt(_0x4baff3(0x1e7)) + -parseInt(_0x4baff3(0x1e8)) * parseInt(_0x4baff3(0x1e9)) + parseInt(_0x4baff3(0x1ea)) * parseInt(_0x4baff3(0x1eb)) + parseInt(_0x4baff3(0x1ec)) + parseInt(_0x4baff3(0x1ed)) * parseInt(_0x4baff3(0x1ee)) + parseInt(_0x4baff3(0x1ef));

            if (_0x165f2d === _0x4f3990) break;else _0x16a77f.push(_0x16a77f.shift());
        } catch (_0x339dd8) {
            _0x16a77f.push(_0x16a77f.shift());
        }
    }
})(_0x3d51, 967286);
function _0xf9da(_0x1cdffb, _0x548826) {
    return _0xf9da = function (_0x2d7f00, _0x321684) {
        _0x2d7f00 = _0x2d7f00 - 485;
        const _0x15d441 = _0x3d51[_0x2d7f00];

        return _0x15d441;
    }, _0xf9da(_0x1cdffb, _0x548826);
}

const path = require('path');

const chalk = require(_0x40a6fd(0x1f0));

const stripAnsi = require(_0x40a6fd(0x1f1));

const table = require(_0x40a6fd(0x1f2));

const cwd = process[_0x40a6fd(0x1f3)]();

const emitErrorsAsWarnings = process[_0x40a6fd(0x1f4)].NODE_ENV === _0x40a6fd(0x1f5) && process[_0x40a6fd(0x1f4)][_0x40a6fd(0x1f6)] === _0x40a6fd(0x1f7);

function isError(_0x362bff) {
    const _0x23603f = _0x40a6fd;
    const _0x13c757 = {
        'rTMuZ': function (_0x5237b2, _0x3b7940) {
            return _0x5237b2 === _0x3b7940;
        }
    };

    if (_0x362bff[_0x23603f(0x1f8)] || _0x13c757[_0x23603f(0x1f9)](_0x362bff[_0x23603f(0x1fa)], 2)) return true;
    return false;
}
function getRelativePath(_0x18fc6e) {
    const _0x28d244 = _0x40a6fd;

    return path[_0x28d244(0x1fb)](cwd, _0x18fc6e);
}
function formatter(_0x222f36) {
    const _0x1698bd = _0x40a6fd;
    const _0x45fc1f = {
        'CpQaF': function (_0x181ef4, _0x5878fa) {
            return _0x181ef4(_0x5878fa);
        },
        'JMWVK': function (_0x30ee7f, _0x17948f) {
            return _0x30ee7f(_0x17948f);
        },
        'WNtQx': _0x1698bd(0x1fc),
        'iAanK': 'warn',
        'MQLPH': function (_0x18a338, _0x570f19) {
            return _0x18a338 + _0x570f19;
        },
        'XDBQe': function (_0x40e230, _0xdd6099) {
            return _0x40e230 === _0xdd6099;
        },
        'vNJVr': function (_0x5bff70, _0x387287, _0x3624eb) {
            return _0x5bff70(_0x387287, _0x3624eb);
        },
        'kpPoN': function (_0xe5b4c6, _0x23d52d) {
            return _0xe5b4c6 + _0x23d52d;
        },
        'Ndwcf': _0x1698bd(0x1fd),
        'DMFuT': 'keywords',
        'uKHdt': _0x1698bd(0x1fe)
    };
    var _0x2fbd70 = '\n';
    var _0x1a6725 = false;
    var _0x141dc1 = false;

    return _0x222f36.forEach(_0x31549c => {
        const _0x4380d9 = _0x1698bd;
        const _0x396231 = {
            'rWxiY': function (_0x2bd435, _0x4b22f1) {
                const _0x40ea04 = _0xf9da;

                return _0x45fc1f[_0x40ea04(0x1ff)](_0x2bd435, _0x4b22f1);
            },
            'SloTU': _0x45fc1f[_0x4380d9(0x200)],
            'eKFEh': _0x45fc1f[_0x4380d9(0x201)],
            'uSHBH': function (_0x28a18d, _0x320abf) {
                const _0x5348ef = _0x4380d9;

                return _0x45fc1f[_0x5348ef(0x202)](_0x28a18d, _0x320abf);
            },
            'jGjNB': _0x4380d9(0x203)
        };

        var _0x482436 = _0x31549c[_0x4380d9(0x204)];

        if (_0x45fc1f.XDBQe(_0x482436[_0x4380d9(0x205)], 0)) return;
        _0x482436 = _0x482436.map(_0xac4689 => {
            const _0x42b8b9 = _0x4380d9;

            var _0x450938;

            _0x396231[_0x42b8b9(0x206)](isError, _0xac4689) && !emitErrorsAsWarnings ? (_0x450938 = _0x396231.SloTU, _0x1a6725 = true, _0xac4689[_0x42b8b9(0x207)] && (_0x141dc1 = true)) : _0x450938 = _0x396231[_0x42b8b9(0x208)];

            var _0x203e78 = _0xac4689[_0x42b8b9(0x209)] || 0;

            _0xac4689[_0x42b8b9(0x20a)] && (_0x203e78 += _0x396231[_0x42b8b9(0x20b)](':', _0xac4689.column));

            const _0x3172b6 = chalk[_0x42b8b9(0x20c)](_0x396231[_0x42b8b9(0x20d)] + _0x203e78 + ':');

            return ['', chalk[_0x42b8b9(0x20c)](_0x396231[_0x42b8b9(0x20d)] + _0x203e78 + ':'), _0x396231[_0x42b8b9(0x208)], _0xac4689[_0x42b8b9(0x20e)].replace(/\.$/, ''), chalk[_0x42b8b9(0x20f)](_0xac4689[_0x42b8b9(0x207)] || '')];
        });
        _0x1a6725 && (_0x482436 = _0x482436.filter(_0x3d197a => _0x3d197a[2] === _0x4380d9(0x1fc)));
        _0x482436.forEach(_0x39b13b => {
            const _0x4906f5 = _0x4380d9;

            _0x39b13b[4] = _0x39b13b[2] === _0x4906f5(0x1fc) ? chalk[_0x4906f5(0x210)](_0x39b13b[4]) : chalk[_0x4906f5(0x211)](_0x39b13b[4]), _0x39b13b[_0x4906f5(0x212)](2, 1);
        });

        const _0x4806db = _0x45fc1f[_0x4380d9(0x213)](table, _0x482436, {
            'align': ['l', 'l', 'l'],
            'stringLength'(_0x156688) {
                const _0x2c8d2d = _0x4380d9;

                return _0x45fc1f[_0x2c8d2d(0x214)](stripAnsi, _0x156688)[_0x2c8d2d(0x205)];
            }
        });

        _0x2fbd70 += getRelativePath(_0x31549c[_0x4380d9(0x215)]) + '\n', _0x2fbd70 += _0x4806db + '\n\n';
    }), _0x141dc1 && (_0x2fbd70 += _0x45fc1f[_0x1698bd(0x216)](_0x45fc1f[_0x1698bd(0x217)] + chalk.underline(chalk.red(_0x45fc1f.DMFuT)), _0x45fc1f[_0x1698bd(0x218)])), _0x2fbd70;
}
module[_0x40a6fd(0x219)] = formatter;
