const _0x2dc5 = [
    'mock',
    'calls',
    'toBe',
    'length',
    'toEqual',
    '1hqXeuZ',
    '164279gAbFps',
    '29681yQcuYS',
    '14JoNrYX',
    '941383XDxHuE',
    '1SOTwQs',
    '958776Zsvvom',
    '628427NOphnZ',
    '435394yMwsas',
    '1009385GpayvX',
    'systemInfo',
    'getSystemInfoSync',
    'toHaveProperty',
    'brand',
    'pixelRatio',
    'screenWidth',
    'windowWidth',
    'version',
    'platform',
    'language',
    'fontSizeSetting',
    'SDKVersion',
    'should\x20getSystemInfo\x20return\x20Promise\x20that\x20resolve\x20system\x20information',
    'assertions',
    'getSystemInfo',
    'then'
];
const _0x40eaa9 = _0x1295;
function _0x1295(_0x2105d1, _0x3581a1) {
    return _0x1295 = function (_0x2dc596, _0x129541) {
        _0x2dc596 = _0x2dc596 - 0x14d;
        let _0xafd965 = _0x2dc5[_0x2dc596];
        return _0xafd965;
    }, _0x1295(_0x2105d1, _0x3581a1);
}
(function (_0x5a5cf3, _0x41cd41) {
    const _0x332b97 = _0x1295;
    while (!![]) {
        try {
            const _0x443c7e = parseInt(_0x332b97(0x14d)) * -parseInt(_0x332b97(0x14e)) + -parseInt(_0x332b97(0x14f)) * parseInt(_0x332b97(0x150)) + -parseInt(_0x332b97(0x151)) * -parseInt(_0x332b97(0x152)) + parseInt(_0x332b97(0x153)) + parseInt(_0x332b97(0x154)) + -parseInt(_0x332b97(0x155)) + -parseInt(_0x332b97(0x156));
            if (_0x443c7e === _0x41cd41)
                break;
            else
                _0x5a5cf3['push'](_0x5a5cf3['shift']());
        } catch (_0x5cf91b) {
            _0x5a5cf3['push'](_0x5a5cf3['shift']());
        }
    }
}(_0x2dc5, 0x7b0ba));
import * as _0x51217e from '../src/api';
describe(_0x40eaa9(0x157), () => {
    const _0x3196d2 = _0x40eaa9;
    test('should\x20getSystemInfoSync\x20return\x20system\x20information', () => {
        const _0x336da7 = _0x1295, _0x43d4ee = _0x51217e[_0x336da7(0x158)]();
        expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x15a)), expect(_0x43d4ee)[_0x336da7(0x159)]('model'), expect(_0x43d4ee)[_0x336da7(0x159)]('system'), expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x15b)), expect(_0x43d4ee)['toHaveProperty'](_0x336da7(0x15c)), expect(_0x43d4ee)[_0x336da7(0x159)]('screenHeight'), expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x15d)), expect(_0x43d4ee)[_0x336da7(0x159)]('windowHeight'), expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x15e)), expect(_0x43d4ee)[_0x336da7(0x159)]('statusBarHeight'), expect(_0x43d4ee)['toHaveProperty'](_0x336da7(0x15f)), expect(_0x43d4ee)['toHaveProperty'](_0x336da7(0x160)), expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x161)), expect(_0x43d4ee)[_0x336da7(0x159)](_0x336da7(0x162));
    }), test(_0x3196d2(0x163), () => {
        const _0x3e6edc = _0x3196d2, _0x42c773 = jest['fn'](), _0x4027b6 = jest['fn']();
        return expect[_0x3e6edc(0x164)](0x3), _0x51217e[_0x3e6edc(0x165)]({
            'success': _0x42c773,
            'complete': _0x4027b6
        })[_0x3e6edc(0x166)](_0x8cd84d => {
            const _0x57ab5d = _0x3e6edc;
            expect(_0x42c773[_0x57ab5d(0x167)][_0x57ab5d(0x168)]['length'])[_0x57ab5d(0x169)](0x1), expect(_0x4027b6[_0x57ab5d(0x167)][_0x57ab5d(0x168)][_0x57ab5d(0x16a)])[_0x57ab5d(0x169)](0x1), expect(_0x8cd84d)[_0x57ab5d(0x16b)](_0x51217e[_0x57ab5d(0x158)]());
        });
    });
});
