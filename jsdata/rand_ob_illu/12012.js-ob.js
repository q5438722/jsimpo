const _0x1959 = ['text', 'decimal', 'integer', 'time', 'email', 'select', 'media', 'files', 'json', 'wysiwyg', 'WYSIWYG', 'richtext', 'uid', 'eHJjP', 'hlxLh', 'NGUee', 'GmMVG', 'YhWRJ', 'SYzEF', 'datetime', 'HfZSN', 'enumeration', 'BxwZE', 'sCVbN', 'GMcyV', 'thihq', 'file', 'tVXUk', 'XexgA', 'HrkFX', 'bcNLI', 'hFhHv', 'WpiWC', 'raSSf', '244276QkUIoe', '536883WDmwon', '870387pEvsgK', '582979otaCgw', '806006Dftnnl', '30331GzBUfb', '19ihdvMv', '1872260ppChIo', 'boolean', 'biginteger'];

(function (_0x87f541, _0x4f0747) {
    const _0x222773 = _0x3e5c;

    while (true) {
        try {
            const _0x12e86b = parseInt(_0x222773(0x198)) + parseInt(_0x222773(0x199)) + -parseInt(_0x222773(0x19a)) + parseInt(_0x222773(0x19b)) + -parseInt(_0x222773(0x19c)) + -parseInt(_0x222773(0x19d)) * parseInt(_0x222773(0x19e)) + parseInt(_0x222773(0x19f));

            if (_0x12e86b === _0x4f0747) break;else _0x87f541.push(_0x87f541.shift());
        } catch (_0x29fa6d) {
            _0x87f541.push(_0x87f541.shift());
        }
    }
})(_0x1959, 983716);
import { toLower } from 'lodash';

const getInputType = (_0x541e58 = '') => {
    const _0x5bd7da = _0x3e5c;
    const _0x4a29b5 = {
        'eHJjP': function (_0x449a04, _0x430dc5) {
            return _0x449a04(_0x430dc5);
        },
        'hlxLh': _0x5bd7da(0x1a0),
        'BKyKf': 'bool',
        'NGUee': _0x5bd7da(0x1a1),
        'GmMVG': _0x5bd7da(0x1a2),
        'QiJyV': _0x5bd7da(0x1a3),
        'YhWRJ': 'float',
        'sOrJV': _0x5bd7da(0x1a4),
        'SYzEF': 'date',
        'HfZSN': _0x5bd7da(0x1a5),
        'JHXKL': _0x5bd7da(0x1a6),
        'BxwZE': _0x5bd7da(0x1a7),
        'sCVbN': 'password',
        'GMcyV': 'textarea',
        'thihq': _0x5bd7da(0x1a8),
        'tVXUk': _0x5bd7da(0x1a9),
        'XexgA': _0x5bd7da(0x1aa),
        'HrkFX': _0x5bd7da(0x1ab),
        'bcNLI': _0x5bd7da(0x1ac),
        'hFhHv': _0x5bd7da(0x1ad),
        'WpiWC': _0x5bd7da(0x1ae),
        'raSSf': function (_0x449bd7, _0x804c) {
            return _0x449bd7 || _0x804c;
        }
    };

    switch (_0x4a29b5[_0x5bd7da(0x1af)](toLower, _0x541e58)) {
        case _0x4a29b5[_0x5bd7da(0x1b0)]:
            return _0x4a29b5.BKyKf;
        case _0x4a29b5[_0x5bd7da(0x1b1)]:
            return _0x4a29b5[_0x5bd7da(0x1b2)];
        case _0x4a29b5.QiJyV:
        case _0x4a29b5[_0x5bd7da(0x1b3)]:
        case _0x4a29b5.sOrJV:
            return 'number';
        case _0x4a29b5[_0x5bd7da(0x1b4)]:
        case _0x5bd7da(0x1b5):
        case _0x4a29b5[_0x5bd7da(0x1b6)]:
            return _0x541e58;
        case _0x5bd7da(0x1a6):
            return _0x4a29b5.JHXKL;
        case _0x5bd7da(0x1b7):
            return _0x4a29b5[_0x5bd7da(0x1b8)];
        case _0x4a29b5[_0x5bd7da(0x1b9)]:
            return _0x4a29b5[_0x5bd7da(0x1b9)];
        case 'string':
            return _0x4a29b5[_0x5bd7da(0x1b2)];
        case _0x4a29b5.GmMVG:
            return _0x4a29b5[_0x5bd7da(0x1ba)];
        case _0x4a29b5[_0x5bd7da(0x1bb)]:
        case _0x5bd7da(0x1bc):
        case _0x4a29b5[_0x5bd7da(0x1bd)]:
            return _0x4a29b5.thihq;
        case _0x4a29b5.XexgA:
            return _0x4a29b5[_0x5bd7da(0x1be)];
        case _0x4a29b5[_0x5bd7da(0x1bf)]:
        case _0x4a29b5[_0x5bd7da(0x1c0)]:
        case _0x4a29b5[_0x5bd7da(0x1c1)]:
            return _0x5bd7da(0x1ab);
        case _0x4a29b5[_0x5bd7da(0x1c2)]:
            return _0x4a29b5.WpiWC;
        default:
            return _0x4a29b5[_0x5bd7da(0x1c3)](_0x541e58, _0x4a29b5[_0x5bd7da(0x1b2)]);
    }
};

function _0x3e5c(_0x581b86, _0x11a709) {
    return _0x3e5c = function (_0x55be82, _0x51a502) {
        _0x55be82 = _0x55be82 - 408;
        const _0x507310 = _0x1959[_0x55be82];

        return _0x507310;
    }, _0x3e5c(_0x581b86, _0x11a709);
}
export default getInputType;
