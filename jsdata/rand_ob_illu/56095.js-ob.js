'use strict';

const _0x3817 = ['1210701uVcCdV', '1237618tqOIAN', '313MCtJam', '4279ejMBtO', '41koMaBH', '24455sjaoLa', '56zHgEZW', '76919ynFHRW', '../common', 'assert', 'path', 'refresh', 'throws', 'rmdirSync', 'join', 'noexist.txt', 'code', 'Wiopb', 'rejects', 'promises', 'rmdir', 'ENOENT', 'mustCall', '1313340nSOkga', '18577coXasA', '1cTlHRg'];
const _0x1770d5 = _0x39d7;

(function (_0x46f100, _0x1b2da2) {
    const _0x41a84b = _0x39d7;

    while (true) {
        try {
            const _0x51b51f = -parseInt(_0x41a84b(0x12b)) + parseInt(_0x41a84b(0x12c)) * parseInt(_0x41a84b(0x12d)) + -parseInt(_0x41a84b(0x12e)) + parseInt(_0x41a84b(0x12f)) + -parseInt(_0x41a84b(0x130)) * parseInt(_0x41a84b(0x131)) + parseInt(_0x41a84b(0x132)) * -parseInt(_0x41a84b(0x133)) + -parseInt(_0x41a84b(0x134)) * -parseInt(_0x41a84b(0x135));

            if (_0x51b51f === _0x1b2da2) break;else _0x46f100.push(_0x46f100.shift());
        } catch (_0x3324c7) {
            _0x46f100.push(_0x46f100.shift());
        }
    }
})(_0x3817, 697636);

const common = require(_0x1770d5(0x136));

const tmpdir = require('../common/tmpdir');

const assert = require(_0x1770d5(0x137));

const fs = require('fs');

const path = require(_0x1770d5(0x138));

tmpdir[_0x1770d5(0x139)]();
{
    assert[_0x1770d5(0x13a)](() => fs[_0x1770d5(0x13b)](path[_0x1770d5(0x13c)](tmpdir[_0x1770d5(0x138)], _0x1770d5(0x13d)), { 'recursive': true }), { 'code': 'ENOENT' });
}
function _0x39d7(_0x208c8d, _0x484bdb) {
    return _0x39d7 = function (_0x4ab0f8, _0x4b0da0) {
        _0x4ab0f8 = _0x4ab0f8 - 299;
        const _0x201228 = _0x3817[_0x4ab0f8];

        return _0x201228;
    }, _0x39d7(_0x208c8d, _0x484bdb);
}
{
    fs.rmdir(path[_0x1770d5(0x13c)](tmpdir[_0x1770d5(0x138)], 'noexist.txt'), { 'recursive': true }, common.mustCall(_0x4caca7 => {
        const _0x41a434 = _0x1770d5;
        const _0x209e5f = { 'Wiopb': 'ENOENT' };

        assert.strictEqual(_0x4caca7[_0x41a434(0x13e)], _0x209e5f[_0x41a434(0x13f)]);
    }));
}
{
    assert[_0x1770d5(0x140)](() => fs[_0x1770d5(0x141)][_0x1770d5(0x142)](path.join(tmpdir[_0x1770d5(0x138)], _0x1770d5(0x13d)), { 'recursive': true }), { 'code': _0x1770d5(0x143) }).then(common[_0x1770d5(0x144)]());
}
