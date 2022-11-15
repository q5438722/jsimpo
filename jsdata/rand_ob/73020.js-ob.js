const _0x15e0 = [
    'challenges',
    'bhUPh',
    '292338hbdTbx',
    '65760OxoyBd',
    '6llNFCX',
    '18grIEbA',
    '12195iKYoSs',
    '280223wrvRiw',
    '9691pViBtU',
    '27YPTIZU',
    '328624XzCdUk',
    '4432yjsGmP',
    '237bbRyNz',
    'keys',
    'blocks',
    'reduce',
    'map'
];
(function (_0x467093, _0x71dbb6) {
    const _0x167839 = _0x169b;
    while (!![]) {
        try {
            const _0xcd6b83 = parseInt(_0x167839(0xf9)) + parseInt(_0x167839(0xfa)) * parseInt(_0x167839(0xfb)) + -parseInt(_0x167839(0xfc)) * -parseInt(_0x167839(0xfd)) + parseInt(_0x167839(0xfe)) + -parseInt(_0x167839(0xff)) * parseInt(_0x167839(0x100)) + parseInt(_0x167839(0x101)) + -parseInt(_0x167839(0x102)) * parseInt(_0x167839(0x103));
            if (_0xcd6b83 === _0x71dbb6)
                break;
            else
                _0x467093['push'](_0x467093['shift']());
        } catch (_0x3997ff) {
            _0x467093['push'](_0x467093['shift']());
        }
    }
}(_0x15e0, -0xfbc2 * -0x6 + 0x205f3 + -0x4d2b1));
import { flatten } from 'lodash';
function _0x169b(_0x3ac98f, _0x2fe58c) {
    return _0x169b = function (_0x47f277, _0x4962a8) {
        _0x47f277 = _0x47f277 - (-0x1b99 + 0x17b6 + -0x2 * -0x26e);
        let _0x1614c7 = _0x15e0[_0x47f277];
        return _0x1614c7;
    }, _0x169b(_0x3ac98f, _0x2fe58c);
}
import _0x12a24c from '../../../../config/curriculum.json';
export function getChallenges() {
    const _0x3d5c37 = _0x169b, _0x4d2474 = {
            'bhUPh': function (_0x396fd0, _0x246ac7) {
                return _0x396fd0(_0x246ac7);
            }
        };
    return Object[_0x3d5c37(0x104)](_0x12a24c)['map'](_0x488bae => _0x12a24c[_0x488bae][_0x3d5c37(0x105)])[_0x3d5c37(0x106)]((_0x1f0c82, _0xc597b7) => {
        const _0x5f1c33 = _0x3d5c37, _0x958292 = Object[_0x5f1c33(0x104)](_0xc597b7)[_0x5f1c33(0x107)](_0x83f1d7 => _0xc597b7[_0x83f1d7][_0x5f1c33(0x108)]);
        return [
            ..._0x1f0c82,
            ..._0x4d2474[_0x5f1c33(0x109)](flatten, _0x958292)
        ];
    }, []);
}
