const _0x42ed = ['428chsasc', '1678XSgHWC', '45594qsMMhn', '34mGuFiH', 'child_process', 'join', '.babelrc', '**/__tests__', 'execPath', 'stdout', 'data', 'toEqual', 'Etmui', '827866MAeURe', '329XvCtyX', '353KaXXQN', '1peTDJh', '1191743jySAXQ', '8RjJJeR', '50270qpSiye', '831426uxgSza'];
const _0x353f34 = _0x2bdb;

(function (_0x109c06, _0xf50821) {
    const _0x5f449e = _0x2bdb;

    while (true) {
        try {
            const _0x250277 = parseInt(_0x5f449e(0x15d)) + -parseInt(_0x5f449e(0x15e)) * parseInt(_0x5f449e(0x15f)) + parseInt(_0x5f449e(0x160)) * parseInt(_0x5f449e(0x161)) + -parseInt(_0x5f449e(0x162)) * -parseInt(_0x5f449e(0x163)) + -parseInt(_0x5f449e(0x164)) + parseInt(_0x5f449e(0x165)) * parseInt(_0x5f449e(0x166)) + -parseInt(_0x5f449e(0x167)) * parseInt(_0x5f449e(0x168));

            if (_0x250277 === _0xf50821) break;else _0x109c06.push(_0x109c06.shift());
        } catch (_0x187315) {
            _0x109c06.push(_0x109c06.shift());
        }
    }
})(_0x42ed, 642194);
function _0x2bdb(_0x1e8adf, _0xe70066) {
    return _0x2bdb = function (_0x3620c6, _0x1e3142) {
        _0x3620c6 = _0x3620c6 - 349;
        const _0x36d0b9 = _0x42ed[_0x3620c6];

        return _0x36d0b9;
    }, _0x2bdb(_0x1e8adf, _0xe70066);
}

const path = require('path');

const child = require(_0x353f34(0x169));

it('Builds cache-dir with minimal config', _0x1c2bdd => {
    const _0x146e8a = _0x353f34;
    const _0x151e2f = {
        'Etmui': function (_0x4c6acd, _0xfb240a) {
            return _0x4c6acd(_0xfb240a);
        },
        'BYJJY': function (_0x5dde41) {
            return _0x5dde41();
        }
    };
    const _0x32cdc8 = [require.resolve('@babel/cli/bin/babel.js'), path[_0x146e8a(0x16a)](__dirname, '..'), '--config-file', path[_0x146e8a(0x16a)](__dirname, _0x146e8a(0x16b)), '--ignore', _0x146e8a(0x16c)];

    const _0x360920 = child.spawn(process[_0x146e8a(0x16d)], _0x32cdc8);

    var _0x53fdb7 = '';
    var _0x1884d3 = '';

    _0x360920.stderr.on('data', function (_0x14a351) {
        _0x53fdb7 += _0x14a351;
    }), _0x360920[_0x146e8a(0x16e)].on(_0x146e8a(0x16f), function (_0x435589) {
        _0x1884d3 += _0x435589;
    }), _0x360920.on('close', function () {
        const _0x2cda20 = _0x146e8a;

        expect(_0x53fdb7)[_0x2cda20(0x170)](''), _0x151e2f[_0x2cda20(0x171)](expect, _0x1884d3).not[_0x2cda20(0x170)](''), _0x151e2f.BYJJY(_0x1c2bdd);
    });
}, 30000);
