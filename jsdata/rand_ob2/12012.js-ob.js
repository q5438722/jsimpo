const _0xd582 = [
    'string',
    'text',
    'textarea',
    'media',
    'file',
    'files',
    'json',
    'wysiwyg',
    'richtext',
    'uid',
    '583170PcmJYU',
    '970872efsEzO',
    '1IwLJlu',
    '887308hrATVI',
    '1ltgbZJ',
    '2TrKpQq',
    '492510ZtRtjY',
    '90980YHLAhU',
    '9lxJKSC',
    '1021332rsTTWQ',
    '8cYbkzt',
    '335301OiIShR',
    'boolean',
    'bool',
    'integer',
    'number',
    'date',
    'datetime',
    'time',
    'email',
    'enumeration',
    'select',
    'password'
];
function _0x5f48(_0x5ea2bf, _0x450b8a) {
    return _0x5f48 = function (_0xd58219, _0x5f4827) {
        _0xd58219 = _0xd58219 - 0x96;
        let _0x3c0409 = _0xd582[_0xd58219];
        return _0x3c0409;
    }, _0x5f48(_0x5ea2bf, _0x450b8a);
}
(function (_0x7caa36, _0x38c0be) {
    const _0x4ee98f = _0x5f48;
    while (!![]) {
        try {
            const _0x2bcd25 = parseInt(_0x4ee98f(0x96)) + -parseInt(_0x4ee98f(0x97)) * -parseInt(_0x4ee98f(0x98)) + parseInt(_0x4ee98f(0x99)) * parseInt(_0x4ee98f(0x9a)) + -parseInt(_0x4ee98f(0x9b)) * parseInt(_0x4ee98f(0x9c)) + -parseInt(_0x4ee98f(0x9d)) * -parseInt(_0x4ee98f(0x9e)) + parseInt(_0x4ee98f(0x9f)) + -parseInt(_0x4ee98f(0xa0)) * parseInt(_0x4ee98f(0xa1));
            if (_0x2bcd25 === _0x38c0be)
                break;
            else
                _0x7caa36['push'](_0x7caa36['shift']());
        } catch (_0x6c4a17) {
            _0x7caa36['push'](_0x7caa36['shift']());
        }
    }
}(_0xd582, 0x95eba));
import { toLower } from 'lodash';
const getInputType = (_0x3cf5c2 = '') => {
    const _0x424ae9 = _0x5f48;
    switch (toLower(_0x3cf5c2)) {
    case _0x424ae9(0xa2):
        return _0x424ae9(0xa3);
    case 'biginteger':
        return 'text';
    case 'decimal':
    case 'float':
    case _0x424ae9(0xa4):
        return _0x424ae9(0xa5);
    case _0x424ae9(0xa6):
    case _0x424ae9(0xa7):
    case _0x424ae9(0xa8):
        return _0x3cf5c2;
    case _0x424ae9(0xa9):
        return _0x424ae9(0xa9);
    case _0x424ae9(0xaa):
        return _0x424ae9(0xab);
    case _0x424ae9(0xac):
        return _0x424ae9(0xac);
    case _0x424ae9(0xad):
        return _0x424ae9(0xae);
    case _0x424ae9(0xae):
        return _0x424ae9(0xaf);
    case _0x424ae9(0xb0):
    case _0x424ae9(0xb1):
    case _0x424ae9(0xb2):
        return _0x424ae9(0xb0);
    case _0x424ae9(0xb3):
        return _0x424ae9(0xb3);
    case _0x424ae9(0xb4):
    case 'WYSIWYG':
    case _0x424ae9(0xb5):
        return 'wysiwyg';
    case _0x424ae9(0xb6):
        return 'uid';
    default:
        return _0x3cf5c2 || _0x424ae9(0xae);
    }
};
export default getInputType;
