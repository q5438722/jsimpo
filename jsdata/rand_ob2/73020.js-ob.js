const _0x56e7 = [
    '82848WaIhPO',
    '5qJmgUy',
    '30697jWPZAD',
    '101939rHBIxQ',
    '199343LQLkvR',
    '111139Xvttid',
    '392727LNjMOK',
    'keys',
    'map',
    'reduce',
    'challenges',
    '50659HlQTds',
    '1ADxjue'
];
(function (_0x19bd4f, _0x4dd12d) {
    const _0x39612e = _0x19a7;
    while (!![]) {
        try {
            const _0x2cb13a = -parseInt(_0x39612e(0x191)) * -parseInt(_0x39612e(0x192)) + parseInt(_0x39612e(0x193)) + -parseInt(_0x39612e(0x194)) * -parseInt(_0x39612e(0x195)) + -parseInt(_0x39612e(0x196)) + parseInt(_0x39612e(0x197)) + parseInt(_0x39612e(0x198)) + -parseInt(_0x39612e(0x199));
            if (_0x2cb13a === _0x4dd12d)
                break;
            else
                _0x19bd4f['push'](_0x19bd4f['shift']());
        } catch (_0x1ad88e) {
            _0x19bd4f['push'](_0x19bd4f['shift']());
        }
    }
}(_0x56e7, 0x19198));
import { flatten } from 'lodash';
function _0x19a7(_0xa4918a, _0x134339) {
    return _0x19a7 = function (_0x56e799, _0x19a742) {
        _0x56e799 = _0x56e799 - 0x191;
        let _0x5d9f13 = _0x56e7[_0x56e799];
        return _0x5d9f13;
    }, _0x19a7(_0xa4918a, _0x134339);
}
import _0x20cb38 from '../../../../config/curriculum.json';
export function getChallenges() {
    const _0x2d4465 = _0x19a7;
    return Object[_0x2d4465(0x19a)](_0x20cb38)[_0x2d4465(0x19b)](_0x50c1cc => _0x20cb38[_0x50c1cc]['blocks'])[_0x2d4465(0x19c)]((_0x4e5082, _0x5d84a2) => {
        const _0x48ee14 = _0x2d4465, _0x1d1b5c = Object[_0x48ee14(0x19a)](_0x5d84a2)['map'](_0x3ad666 => _0x5d84a2[_0x3ad666][_0x48ee14(0x19d)]);
        return [
            ..._0x4e5082,
            ...flatten(_0x1d1b5c)
        ];
    }, []);
}
