const _0x2324 = [
    '703146OhVRuM',
    'plan',
    'nuxt',
    'equal',
    'text',
    'Hello\x20nuxt!',
    'renders\x20\x22Hello\x20nuxt!\x22\x20text',
    'find',
    'red',
    'h1\x20has\x20a\x20red\x20class\x20[default]',
    'trigger',
    'click',
    'blue',
    'hasClass',
    'green',
    'h1\x20class\x20changes\x20to\x20green\x20[after\x202nd\x20click]',
    '539457TBRLtj',
    '114980sxoUUg',
    '71001HqPwkY',
    '7cvVVDQ',
    '12wrfhVo',
    '44883VKeqRw',
    '357ICbenX',
    '457fLkSlj',
    '160596HSuqFA'
];
(function (_0x6af3fe, _0x1d4b37) {
    const _0xcc74e7 = _0x5c16;
    while (!![]) {
        try {
            const _0x10448b = -parseInt(_0xcc74e7(0x68)) + parseInt(_0xcc74e7(0x69)) + -parseInt(_0xcc74e7(0x6a)) * parseInt(_0xcc74e7(0x6b)) + parseInt(_0xcc74e7(0x6c)) * parseInt(_0xcc74e7(0x6d)) + -parseInt(_0xcc74e7(0x6e)) * -parseInt(_0xcc74e7(0x6f)) + -parseInt(_0xcc74e7(0x70)) + parseInt(_0xcc74e7(0x71));
            if (_0x10448b === _0x1d4b37)
                break;
            else
                _0x6af3fe['push'](_0x6af3fe['shift']());
        } catch (_0x1ae70b) {
            _0x6af3fe['push'](_0x6af3fe['shift']());
        }
    }
}(_0x2324, 0x4ecfb));
import _0x582b61 from 'tape';
function _0x5c16(_0x1641ad, _0x8cd81a) {
    return _0x5c16 = function (_0x2324f4, _0x5c16a7) {
        _0x2324f4 = _0x2324f4 - 0x68;
        let _0x49ae8f = _0x2324[_0x2324f4];
        return _0x49ae8f;
    }, _0x5c16(_0x1641ad, _0x8cd81a);
}
import { shallow } from '@vue/test-utils';
import _0x2c76e5 from '../pages/index.vue';
_0x582b61('renders\x20Index.vue\x20correctly', _0x123a6b => {
    const _0x332c4e = _0x5c16;
    _0x123a6b[_0x332c4e(0x72)](0x4);
    const _0x1fbe65 = shallow(_0x2c76e5, { 'data': { 'name': _0x332c4e(0x73) } }), _0x172bf3 = _0x1fbe65['find']('button');
    _0x123a6b[_0x332c4e(0x74)](_0x1fbe65['find']('h1')[_0x332c4e(0x75)](), _0x332c4e(0x76), _0x332c4e(0x77)), _0x123a6b[_0x332c4e(0x74)](_0x1fbe65[_0x332c4e(0x78)]('h1')['hasClass'](_0x332c4e(0x79)), !![], _0x332c4e(0x7a)), _0x172bf3[_0x332c4e(0x7b)](_0x332c4e(0x7c)), _0x123a6b[_0x332c4e(0x74)](_0x1fbe65[_0x332c4e(0x78)]('h1')['hasClass'](_0x332c4e(0x7d)), !![], 'h1\x20class\x20changes\x20to\x20blue\x20[after\x201st\x20click]'), _0x172bf3[_0x332c4e(0x7b)](_0x332c4e(0x7c)), _0x123a6b[_0x332c4e(0x74)](_0x1fbe65[_0x332c4e(0x78)]('h1')[_0x332c4e(0x7e)](_0x332c4e(0x7f)), !![], _0x332c4e(0x80));
});
