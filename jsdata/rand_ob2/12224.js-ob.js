'use strict';
const _0x2e7b = [
    '1wZmGQs',
    '7529CcgnwL',
    '87knTNch',
    '59qBIihC',
    '20886NoUItk',
    '151603zyUpCB',
    '3SQllKj',
    '1264687pdbeJz',
    '198756lthgIn',
    'lodash',
    'pluralize',
    'camelCase',
    'singular',
    'upperFirst',
    'Input',
    'exports',
    '1195MAFKfq',
    '203KXNGGP',
    '1191921AhzuUd'
];
const _0x439f65 = _0x5dff;
(function (_0x4a4140, _0x35e7fe) {
    const _0x2da059 = _0x5dff;
    while (!![]) {
        try {
            const _0x180c26 = parseInt(_0x2da059(0x1b3)) * -parseInt(_0x2da059(0x1b4)) + parseInt(_0x2da059(0x1b5)) * -parseInt(_0x2da059(0x1b6)) + parseInt(_0x2da059(0x1b7)) * -parseInt(_0x2da059(0x1b8)) + parseInt(_0x2da059(0x1b9)) * parseInt(_0x2da059(0x1ba)) + parseInt(_0x2da059(0x1bb)) * parseInt(_0x2da059(0x1bc)) + parseInt(_0x2da059(0x1bd)) + -parseInt(_0x2da059(0x1be));
            if (_0x180c26 === _0x35e7fe)
                break;
            else
                _0x4a4140['push'](_0x4a4140['shift']());
        } catch (_0x35620b) {
            _0x4a4140['push'](_0x4a4140['shift']());
        }
    }
}(_0x2e7b, 0xa1fbd));
function _0x5dff(_0x57e615, _0x1fb509) {
    return _0x5dff = function (_0x2e7be8, _0x5dffb4) {
        _0x2e7be8 = _0x2e7be8 - 0x1b3;
        let _0x23bd32 = _0x2e7b[_0x2e7be8];
        return _0x23bd32;
    }, _0x5dff(_0x57e615, _0x1fb509);
}
const _ = require(_0x439f65(0x1bf)), pluralize = require(_0x439f65(0x1c0)), toPlural = _0x24fa15 => pluralize(_['camelCase'](_0x24fa15)), toSingular = _0x12cef7 => _[_0x439f65(0x1c1)](pluralize[_0x439f65(0x1c2)](_0x12cef7)), toInputName = _0x1ec212 => _[_0x439f65(0x1c3)](toSingular(_0x1ec212)) + _0x439f65(0x1c4);
module[_0x439f65(0x1c5)] = {
    'toSingular': toSingular,
    'toPlural': toPlural,
    'toInputName': toInputName
};
