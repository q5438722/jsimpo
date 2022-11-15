const _0x2708 = ['74286aDrmhW', '954481tqybVq', '8718MLUCQa', '314jzUOwL', 'QueenPosition', '2,1', 'XLdHL', 'toBe', 'Tyahy', 'rowIndex', 'IwfnQ', 'leftDiagonal', 'toString', 'AaqJH', '909260PxdcjW', '1VcpMxg', '486980zxAJzv', '2wpELTN', '408997yVAXbs', '203931sDiOPR', '4zAwKhb'];
const _0x456393 = _0x2db8;

(function (_0x5d8475, _0x3ed6e6) {
    const _0x484932 = _0x2db8;

    while (true) {
        try {
            const _0x4a0ab5 = parseInt(_0x484932(0x70)) * parseInt(_0x484932(0x71)) + -parseInt(_0x484932(0x72)) + parseInt(_0x484932(0x73)) * -parseInt(_0x484932(0x74)) + -parseInt(_0x484932(0x75)) * parseInt(_0x484932(0x76)) + -parseInt(_0x484932(0x77)) + -parseInt(_0x484932(0x78)) + parseInt(_0x484932(0x79)) * parseInt(_0x484932(0x7a));

            if (_0x4a0ab5 === _0x3ed6e6) break;else _0x5d8475.push(_0x5d8475.shift());
        } catch (_0x34eed0) {
            _0x5d8475.push(_0x5d8475.shift());
        }
    }
})(_0x2708, 497247);
import _0x3fce02 from '../QueenPosition';
function _0x2db8(_0x58b75c, _0x289cad) {
    return _0x2db8 = function (_0x4c7b39, _0x32b1cf) {
        _0x4c7b39 = _0x4c7b39 - 112;
        const _0x5e986d = _0x2708[_0x4c7b39];

        return _0x5e986d;
    }, _0x2db8(_0x58b75c, _0x289cad);
}
describe(_0x456393(0x7b), () => {
    const _0x24f7ae = _0x456393;
    const _0x5862df = {
        'Tyahy': function (_0x399400, _0x33eeff) {
            return _0x399400(_0x33eeff);
        },
        'IwfnQ': function (_0x5a64e4, _0x475d0f) {
            return _0x5a64e4(_0x475d0f);
        },
        'AaqJH': _0x24f7ae(0x7c),
        'XLdHL': function (_0x1a0e3c, _0x5c7644, _0x3c4b50) {
            return _0x1a0e3c(_0x5c7644, _0x3c4b50);
        }
    };

    _0x5862df[_0x24f7ae(0x7d)](it, 'should store queen position on chessboard', () => {
        const _0x505980 = _0x24f7ae;

        const _0x517811 = new _0x3fce02(0, 0);

        const _0x27d4b5 = new _0x3fce02(2, 1);

        expect(_0x27d4b5.columnIndex)[_0x505980(0x7e)](1), _0x5862df[_0x505980(0x7f)](expect, _0x27d4b5[_0x505980(0x80)])[_0x505980(0x7e)](2), _0x5862df[_0x505980(0x81)](expect, _0x517811[_0x505980(0x82)])[_0x505980(0x7e)](0), expect(_0x517811.rightDiagonal).toBe(0), _0x5862df.IwfnQ(expect, _0x27d4b5[_0x505980(0x82)])[_0x505980(0x7e)](1), _0x5862df.IwfnQ(expect, _0x27d4b5.rightDiagonal)[_0x505980(0x7e)](3), expect(_0x27d4b5[_0x505980(0x83)]()).toBe(_0x5862df[_0x505980(0x84)]);
    });
});
