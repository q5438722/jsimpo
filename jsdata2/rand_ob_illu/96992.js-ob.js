const _0x2c6a = ['SgYUr', 'zUYII', 'PCImW', 'length', 'foTQv', 'exports', '4|1|3|0|2', 'LVgtI', 'cFXjz', 'JYSEF', 'FWSYq', 'rQoAU', 'HsZAB', 'cwd', 'ext', 'split', '790031LiVImQ', '1453133DvmQgw', '556989IXPXnP', '1118184vYXbyf', '951602KVegzJ', '1qKYOgr', '1443005fBCdNN', '2161327ZDfuAO', '1bZcGLm', '../../../constants.js', 'constants', 'statSync', 'indexOf', 'oPPpg', 'readdirSync', 'forEach', 'ZUPJy', 'parseInt', 'lastIndexOf'];
const _0x227066 = _0x7187;

(function (_0x5a2572, _0x1b0c25) {
    const _0x2f24f6 = _0x7187;

    while (true) {
        try {
            const _0x3d69b6 = -parseInt(_0x2f24f6(0x9c)) + parseInt(_0x2f24f6(0x9d)) + -parseInt(_0x2f24f6(0x9e)) + parseInt(_0x2f24f6(0x9f)) + -parseInt(_0x2f24f6(0xa0)) + -parseInt(_0x2f24f6(0xa1)) * parseInt(_0x2f24f6(0xa2)) + parseInt(_0x2f24f6(0xa3)) * parseInt(_0x2f24f6(0xa4));

            if (_0x3d69b6 === _0x1b0c25) break;else _0x5a2572.push(_0x5a2572.shift());
        } catch (_0x5ee01b) {
            _0x5a2572.push(_0x5a2572.shift());
        }
    }
})(_0x2c6a, 991017);
function _0x7187(_0x3a7056, _0x532ed7) {
    return _0x7187 = function (_0x589109, _0x18ffad) {
        _0x589109 = _0x589109 - 156;
        const _0x13b4a3 = _0x2c6a[_0x589109];

        return _0x13b4a3;
    }, _0x7187(_0x3a7056, _0x532ed7);
}

const fs = require('fs');

const conf = require(_0x227066(0xa5));

function find_extensions(_0x128679, _0x164f42, _0x21d6f4) {
    const _0x3b6d12 = _0x227066;
    const _0x2bd38c = {
        'ZUPJy': function (_0x1230ce, _0x35f56a) {
            return _0x1230ce === _0x35f56a;
        },
        'SgYUr': function (_0x24d5da, _0x32a09b) {
            return _0x24d5da + _0x32a09b;
        },
        'zUYII': function (_0x30b3b6, _0x21e601, _0x3f4412, _0x46e608) {
            return _0x30b3b6(_0x21e601, _0x3f4412, _0x46e608);
        },
        'PCImW': function (_0x38cd55, _0x4a8db1) {
            return _0x38cd55 < _0x4a8db1;
        },
        'foTQv': function (_0x30de92, _0x579039) {
            return _0x30de92 + _0x579039;
        },
        'Zmiyw': 'node_modules',
        'oPPpg': 'mode'
    };

    try {
        fs.accessSync(_0x128679, fs[_0x3b6d12(0xa6)].R_OK);
    } catch (_0x34e4a0) {
        return;
    }
    fs[_0x3b6d12(0xa7)](_0x128679).isDirectory() && _0x128679[_0x3b6d12(0xa8)](_0x2bd38c.Zmiyw) == -1 && fs.statSync(_0x128679)[_0x2bd38c[_0x3b6d12(0xa9)]] & 4 && fs[_0x3b6d12(0xaa)](_0x128679)[_0x3b6d12(0xab)](_0x29dbaf => {
        const _0x4f85f0 = _0x3b6d12;

        var _0x2983bc;

        if (_0x2bd38c[_0x4f85f0(0xac)](Number[_0x4f85f0(0xad)](_0x128679[_0x4f85f0(0xae)]('/') + 1), _0x128679.length)) _0x2983bc = _0x2bd38c.SgYUr(_0x128679, _0x29dbaf);else _0x2983bc = _0x2bd38c[_0x4f85f0(0xaf)](_0x2bd38c[_0x4f85f0(0xaf)](_0x128679, '/'), _0x29dbaf);
        if (fs.statSync(_0x2983bc).isDirectory()) _0x2bd38c[_0x4f85f0(0xb0)](find_extensions, _0x2983bc, _0x164f42, _0x21d6f4);else {
            var _0x1385e9 = true;

            for (var _0x3d1243 = 0; _0x2bd38c[_0x4f85f0(0xb1)](_0x3d1243, _0x164f42[_0x4f85f0(0xb2)]); _0x3d1243++) if (_0x164f42[_0x3d1243].test(_0x29dbaf)) _0x1385e9 = false;
            if (_0x1385e9) _0x21d6f4.push(_0x2bd38c[_0x4f85f0(0xb3)](_0x2bd38c[_0x4f85f0(0xb3)](_0x128679, '/'), _0x29dbaf));
        }
    });
}
module[_0x227066(0xb4)]['make_available_extension'] = function make_available_extension(_0x34f420, _0x22097e) {
    const _0x55e409 = _0x227066;
    const _0x4beb17 = {
        'LVgtI': function (_0x539716, _0x459b5c) {
            return _0x539716 == _0x459b5c;
        },
        'cFXjz': 'object',
        'JYSEF': _0x55e409(0xb5),
        'FWSYq': function (_0x3d4646, _0x499539) {
            return _0x3d4646 + _0x499539;
        },
        'rQoAU': function (_0x52d818, _0x9b2566) {
            return _0x52d818 < _0x9b2566;
        },
        'HsZAB': function (_0x52c934, _0x1c3ef1) {
            return _0x52c934 + _0x1c3ef1;
        },
        'nQkMP': function (_0x3b7226, _0x48f375, _0x22fcf9, _0x204946) {
            return _0x3b7226(_0x48f375, _0x22fcf9, _0x204946);
        }
    };

    if (_0x4beb17[_0x55e409(0xb6)](typeof _0x34f420, _0x4beb17.cFXjz) && typeof _0x22097e == _0x4beb17[_0x55e409(0xb7)]) {
        const _0x3409e1 = _0x4beb17[_0x55e409(0xb8)].split('|');

        var _0x59eebd = 0;

        while (true) {
            switch (_0x3409e1[_0x59eebd++]) {
                case '0':
                    // Unevaluable loop test expression
                    for (var _0x1e16a4 = 0; _0x1e16a4 < _0x4c135c[_0x55e409(0xb2)]; _0x1e16a4++) _0x11c38f[_0x1e16a4] = new RegExp(_0x4beb17[_0x55e409(0xb9)](_0x4c135c[_0x1e16a4], '$'));
                    continue;
                case '1':
                    // Unevaluable loop test expression
                    for (var _0x1e16a4 = 0; _0x4beb17[_0x55e409(0xba)](_0x1e16a4, _0x4c135c[_0x55e409(0xb2)]); _0x1e16a4++) _0x4c135c[_0x1e16a4] = _0x4beb17[_0x55e409(0xbb)]('.', _0x4c135c[_0x1e16a4]);
                    continue;
                case '2':
                    _0x4beb17.nQkMP(find_extensions, process[_0x55e409(0xbc)](), _0x11c38f, _0x22097e);
                    continue;
                case '3':
                    const _0x11c38f = [];

                    continue;
                case '4':
                    const _0x4c135c = _0x34f420[_0x55e409(0xbd)][_0x55e409(0xbe)](',');

                    continue;
            }
            break;
        }
    }
};
