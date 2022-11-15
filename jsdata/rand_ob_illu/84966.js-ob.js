'use strict';

const _0x3544 = ['kYYZl', 'nWlBK', 'exports', '92pYjtVb', '13877HyQKYK', '642480lJzyTk', '2953DleZQg', '112CLlyLm', '740187LDrKzc', '1286368ZdcvYX', '540549JwNIaj', '1559015zGjEGy', 'path', 'strip-ansi', 'text-table', 'cwd', 'env', 'development', 'ESLINT_NO_DEV_ERRORS', 'relative', 'error', 'warn', 'Search for the ', ' to learn more about each error.', 'forEach', 'dXYDU', 'QaSpj', 'yJKKX', 'messages', 'length', 'map', 'yoTMV', 'JypWe', 'ruleId', 'EDGvN', 'line', 'column', 'bold', 'OcYGh', 'replace', 'underline', 'KLHuJ', 'red', 'yellow', 'splice'];
const _0x1e5fc0 = _0x1934;

(function (_0x112787, _0x27416f) {
    const _0x4a3c58 = _0x1934;

    while (true) {
        try {
            const _0x35094f = parseInt(_0x4a3c58(0x142)) * parseInt(_0x4a3c58(0x143)) + parseInt(_0x4a3c58(0x144)) + parseInt(_0x4a3c58(0x145)) * parseInt(_0x4a3c58(0x146)) + -parseInt(_0x4a3c58(0x147)) + parseInt(_0x4a3c58(0x148)) + -parseInt(_0x4a3c58(0x149)) + -parseInt(_0x4a3c58(0x14a));

            if (_0x35094f === _0x27416f) break;else _0x112787.push(_0x112787.shift());
        } catch (_0x22dd1b) {
            _0x112787.push(_0x112787.shift());
        }
    }
})(_0x3544, 696517);
function _0x1934(_0x468275, _0x4cc56d) {
    return _0x1934 = function (_0x2e59e5, _0x563b25) {
        _0x2e59e5 = _0x2e59e5 - 322;
        const _0x1fc637 = _0x3544[_0x2e59e5];

        return _0x1fc637;
    }, _0x1934(_0x468275, _0x4cc56d);
}

const path = require(_0x1e5fc0(0x14b));

const chalk = require('chalk');

const stripAnsi = require(_0x1e5fc0(0x14c));

const table = require(_0x1e5fc0(0x14d));

const cwd = process[_0x1e5fc0(0x14e)]();

const emitErrorsAsWarnings = process[_0x1e5fc0(0x14f)].NODE_ENV === _0x1e5fc0(0x150) && process.env[_0x1e5fc0(0x151)] === 'true';

function isError(_0x558379) {
    const _0x5a8a2c = {
        'IrxZK': function (_0x7c3c81, _0x49ac2c) {
            return _0x7c3c81 === _0x49ac2c;
        }
    };

    if (_0x558379.fatal || _0x5a8a2c.IrxZK(_0x558379.severity, 2)) return true;
    return false;
}
function getRelativePath(_0x82fbc) {
    const _0x3eb6c2 = _0x1e5fc0;

    return path[_0x3eb6c2(0x152)](cwd, _0x82fbc);
}
function formatter(_0x7e00b0) {
    const _0x48cc43 = _0x1e5fc0;
    const _0x1eec78 = {
        'dXYDU': function (_0x471337, _0x5d4722) {
            return _0x471337(_0x5d4722);
        },
        'QaSpj': _0x48cc43(0x153),
        'yJKKX': _0x48cc43(0x154),
        'kYYZl': function (_0x47e503, _0x2d2b62) {
            return _0x47e503 + _0x2d2b62;
        },
        'QWozJ': function (_0x434bdf, _0x187bce) {
            return _0x434bdf === _0x187bce;
        },
        'UtNZM': _0x48cc43(0x155),
        'nWlBK': 'keywords',
        'UQElJ': _0x48cc43(0x156)
    };
    var _0x25a594 = '\n';
    var _0xb1b26 = false;
    var _0x34ab28 = false;

    return _0x7e00b0[_0x48cc43(0x157)](_0x373fe3 => {
        const _0x44c756 = _0x48cc43;
        const _0x1a7641 = {
            'yoTMV': function (_0x560098, _0x53e0ba) {
                const _0x416e78 = _0x1934;

                return _0x1eec78[_0x416e78(0x158)](_0x560098, _0x53e0ba);
            },
            'JypWe': _0x1eec78[_0x44c756(0x159)],
            'EDGvN': _0x1eec78[_0x44c756(0x15a)],
            'xvixW': function (_0x32b8b1, _0x1c515f) {
                return _0x32b8b1 + _0x1c515f;
            },
            'OcYGh': function (_0x5196f8, _0x3bb0b9) {
                return _0x1eec78.kYYZl(_0x5196f8, _0x3bb0b9);
            },
            'KLHuJ': function (_0x1166fb, _0x14b83c) {
                return _0x1eec78.QWozJ(_0x1166fb, _0x14b83c);
            }
        };

        var _0x12ce42 = _0x373fe3[_0x44c756(0x15b)];

        if (_0x12ce42[_0x44c756(0x15c)] === 0) return;
        _0x12ce42 = _0x12ce42[_0x44c756(0x15d)](_0x5361ba => {
            const _0x363631 = _0x44c756;

            var _0x478229;

            _0x1a7641[_0x363631(0x15e)](isError, _0x5361ba) && !emitErrorsAsWarnings ? (_0x478229 = _0x1a7641[_0x363631(0x15f)], _0xb1b26 = true, _0x5361ba[_0x363631(0x160)] && (_0x34ab28 = true)) : _0x478229 = _0x1a7641[_0x363631(0x161)];

            var _0x145dac = _0x5361ba[_0x363631(0x162)] || 0;

            _0x5361ba[_0x363631(0x163)] && (_0x145dac += ':' + _0x5361ba[_0x363631(0x163)]);

            const _0x59742a = chalk[_0x363631(0x164)](_0x1a7641.xvixW(_0x1a7641[_0x363631(0x165)]('Line ', _0x145dac), ':'));

            return ['', chalk[_0x363631(0x164)](_0x1a7641.xvixW(_0x1a7641[_0x363631(0x165)]('Line ', _0x145dac), ':')), _0x1a7641[_0x363631(0x161)], _0x5361ba.message[_0x363631(0x166)](/\.$/, ''), chalk[_0x363631(0x167)](_0x5361ba[_0x363631(0x160)] || '')];
        });
        _0xb1b26 && (_0x12ce42 = _0x12ce42.filter(_0x555872 => _0x555872[2] === _0x44c756(0x153)));
        _0x12ce42[_0x44c756(0x157)](_0x4ab888 => {
            const _0x28862b = _0x44c756;

            _0x4ab888[4] = _0x1a7641[_0x28862b(0x168)](_0x4ab888[2], _0x1a7641[_0x28862b(0x15f)]) ? chalk[_0x28862b(0x169)](_0x4ab888[4]) : chalk[_0x28862b(0x16a)](_0x4ab888[4]), _0x4ab888[_0x28862b(0x16b)](2, 1);
        });

        const _0x4e7c94 = table(_0x12ce42, {
            'align': ['l', 'l', 'l'],
            'stringLength'(_0x81a375) {
                const _0x25b4dc = _0x44c756;

                return _0x1a7641[_0x25b4dc(0x15e)](stripAnsi, _0x81a375).length;
            }
        });

        _0x25a594 += _0x1eec78[_0x44c756(0x158)](getRelativePath, _0x373fe3.filePath) + '\n', _0x25a594 += _0x4e7c94 + '\n\n';
    }), _0x34ab28 && (_0x25a594 += _0x1eec78[_0x48cc43(0x16c)](_0x1eec78.UtNZM + chalk.underline(chalk[_0x48cc43(0x169)](_0x1eec78[_0x48cc43(0x16d)])), _0x1eec78.UQElJ)), _0x25a594;
}
module[_0x1e5fc0(0x16e)] = formatter;
