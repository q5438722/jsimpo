const _0x40ee = [
    'type',
    'username',
    'replace',
    '1423799jmvaFT',
    '1DKDALh',
    '560181xENvBu',
    '1jDebSo',
    '613447ctrrrK',
    '515580YuGbzY',
    '1694721ZOXsRI',
    '1zxGcCy',
    '9EpeIMU',
    '45921OJRqOb',
    '3874178Njpjrp'
];
(function (_0x466703, _0x52ac08) {
    const _0x14ed34 = _0x3755;
    while (!![]) {
        try {
            const _0x3254e5 = parseInt(_0x14ed34(0x1ac)) * -parseInt(_0x14ed34(0x1ad)) + -parseInt(_0x14ed34(0x1ae)) + -parseInt(_0x14ed34(0x1af)) * -parseInt(_0x14ed34(0x1b0)) + parseInt(_0x14ed34(0x1b1)) + -parseInt(_0x14ed34(0x1b2)) * parseInt(_0x14ed34(0x1b3)) + -parseInt(_0x14ed34(0x1b4)) * parseInt(_0x14ed34(0x1b5)) + parseInt(_0x14ed34(0x1b6));
            if (_0x3254e5 === _0x52ac08)
                break;
            else
                _0x466703['push'](_0x466703['shift']());
        } catch (_0x9323ad) {
            _0x466703['push'](_0x466703['shift']());
        }
    }
}(_0x40ee, 0xde76f));
import _0x41a945 from 'immer';
import { CHANGE_USERNAME } from './constants';
export const initialState = { 'username': '' };
function _0x3755(_0x4c632e, _0xd15da7) {
    return _0x3755 = function (_0x40ee4d, _0x375570) {
        _0x40ee4d = _0x40ee4d - 0x1ac;
        let _0xf63cbd = _0x40ee[_0x40ee4d];
        return _0xf63cbd;
    }, _0x3755(_0x4c632e, _0xd15da7);
}
const homeReducer = (_0x97bc20 = initialState, _0x47fd43) => _0x41a945(_0x97bc20, _0x53f0ff => {
    const _0x3969fd = _0x3755;
    switch (_0x47fd43[_0x3969fd(0x1b7)]) {
    case CHANGE_USERNAME:
        _0x53f0ff[_0x3969fd(0x1b8)] = _0x47fd43[_0x3969fd(0x1b8)][_0x3969fd(0x1b9)](/@/gi, '');
        break;
    }
});
export default homeReducer;
