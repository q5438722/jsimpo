const _0x1f4a = [
    'blocks',
    'reduce',
    'challenges',
    '7lrlGVl',
    '3683OGfoYZ',
    '319209nlkjiC',
    '189993ZSnuux',
    '1HBxgWI',
    '238133uRZvEG',
    '138432JRHqeS',
    '60430EouEBX',
    '664613xzbRvS',
    'keys',
    'map'
];
(function (_0x11c121, _0x409429) {
    const _0x12ba1a = _0x19c5;
    while (!![]) {
        try {
            const _0x3560ce = parseInt(_0x12ba1a(0x76)) * -parseInt(_0x12ba1a(0x77)) + -parseInt(_0x12ba1a(0x78)) + -parseInt(_0x12ba1a(0x79)) * parseInt(_0x12ba1a(0x7a)) + parseInt(_0x12ba1a(0x7b)) + -parseInt(_0x12ba1a(0x7c)) + -parseInt(_0x12ba1a(0x7d)) + parseInt(_0x12ba1a(0x7e));
            if (_0x3560ce === _0x409429)
                break;
            else
                _0x11c121['push'](_0x11c121['shift']());
        } catch (_0xd62c38) {
            _0x11c121['push'](_0x11c121['shift']());
        }
    }
}(_0x1f4a, 0x293c5));
function _0x19c5(_0x79304b, _0x120415) {
    return _0x19c5 = function (_0x1f4aeb, _0x19c5bf) {
        _0x1f4aeb = _0x1f4aeb - 0x76;
        let _0xf20408 = _0x1f4a[_0x1f4aeb];
        return _0xf20408;
    }, _0x19c5(_0x79304b, _0x120415);
}
import { flatten } from 'lodash';
import _0x55b6b2 from '../../../../config/curriculum.json';
export function getChallenges() {
    const _0x32e1b9 = _0x19c5;
    return Object[_0x32e1b9(0x7f)](_0x55b6b2)[_0x32e1b9(0x80)](_0x275c27 => _0x55b6b2[_0x275c27][_0x32e1b9(0x81)])[_0x32e1b9(0x82)]((_0x8cc3cc, _0x197857) => {
        const _0x37ae84 = _0x32e1b9, _0x3d4138 = Object['keys'](_0x197857)[_0x37ae84(0x80)](_0x8fa8a8 => _0x197857[_0x8fa8a8][_0x37ae84(0x83)]);
        return [
            ..._0x8cc3cc,
            ...flatten(_0x3d4138)
        ];
    }, []);
}
