const _0x1536 = [
    '982691JyIUYf',
    '544093wfDhRT',
    '1UsIWHZ',
    '1067472AHaabD',
    '41109Zcjacb',
    '41cdvtfN',
    '610QMTxat',
    '673NrhWCC',
    '1xLgDxa',
    '1759553ZvWqGB',
    '2NTXUzG',
    '2238778aVBOAc',
    'path',
    '../../../app/containers',
    'concat',
    'indexOf',
    'exports'
];
const _0x4f8f30 = _0x59af;
function _0x59af(_0x11e030, _0x376d2a) {
    return _0x59af = function (_0x153665, _0x59afd7) {
        _0x153665 = _0x153665 - 0x1b3;
        let _0x14fa91 = _0x1536[_0x153665];
        return _0x14fa91;
    }, _0x59af(_0x11e030, _0x376d2a);
}
(function (_0x1dcbc2, _0x181e19) {
    const _0x497ce8 = _0x59af;
    while (!![]) {
        try {
            const _0x32325c = parseInt(_0x497ce8(0x1b3)) + -parseInt(_0x497ce8(0x1b4)) * parseInt(_0x497ce8(0x1b5)) + parseInt(_0x497ce8(0x1b6)) + -parseInt(_0x497ce8(0x1b7)) * -parseInt(_0x497ce8(0x1b8)) + -parseInt(_0x497ce8(0x1b9)) * -parseInt(_0x497ce8(0x1ba)) + parseInt(_0x497ce8(0x1bb)) * parseInt(_0x497ce8(0x1bc)) + parseInt(_0x497ce8(0x1bd)) * -parseInt(_0x497ce8(0x1be));
            if (_0x32325c === _0x181e19)
                break;
            else
                _0x1dcbc2['push'](_0x1dcbc2['shift']());
        } catch (_0x2439fa) {
            _0x1dcbc2['push'](_0x1dcbc2['shift']());
        }
    }
}(_0x1536, 0xd7d62));
const fs = require('fs'), path = require(_0x4f8f30(0x1bf)), pageComponents = fs['readdirSync'](path['join'](__dirname, '../../../app/components')), pageContainers = fs['readdirSync'](path['join'](__dirname, _0x4f8f30(0x1c0))), components = pageComponents[_0x4f8f30(0x1c1)](pageContainers);
function componentExists(_0x4ef8e2) {
    const _0x4ac8a = _0x4f8f30;
    return components[_0x4ac8a(0x1c2)](_0x4ef8e2) >= 0x0;
}
module[_0x4f8f30(0x1c3)] = componentExists;
