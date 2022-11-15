import * as _0x41102a from '../src/api';
describe('systemInfo', () => {
    test('should\x20getSystemInfoSync\x20return\x20system\x20information', () => {
        const _0x5a2b32 = _0x41102a['getSystemInfoSync']();
        expect(_0x5a2b32)['toHaveProperty']('brand'), expect(_0x5a2b32)['toHaveProperty']('model'), expect(_0x5a2b32)['toHaveProperty']('system'), expect(_0x5a2b32)['toHaveProperty']('pixelRatio'), expect(_0x5a2b32)['toHaveProperty']('screenWidth'), expect(_0x5a2b32)['toHaveProperty']('screenHeight'), expect(_0x5a2b32)['toHaveProperty']('windowWidth'), expect(_0x5a2b32)['toHaveProperty']('windowHeight'), expect(_0x5a2b32)['toHaveProperty']('version'), expect(_0x5a2b32)['toHaveProperty']('statusBarHeight'), expect(_0x5a2b32)['toHaveProperty']('platform'), expect(_0x5a2b32)['toHaveProperty']('language'), expect(_0x5a2b32)['toHaveProperty']('fontSizeSetting'), expect(_0x5a2b32)['toHaveProperty']('SDKVersion');
    }), test('should\x20getSystemInfo\x20return\x20Promise\x20that\x20resolve\x20system\x20information', () => {
        const _0x769e15 = jest['fn'](), _0x314e8b = jest['fn']();
        return expect['assertions'](-0xbc4 + 0x1b1b + 0x3d5 * -0x4), _0x41102a['getSystemInfo']({
            'success': _0x769e15,
            'complete': _0x314e8b
        })['then'](_0x4c42db => {
            expect(_0x769e15['mock']['calls']['length'])['toBe'](-0x19ee * 0x1 + 0x148d * 0x1 + -0x6a * -0xd), expect(_0x314e8b['mock']['calls']['length'])['toBe'](0x222f + 0xf37 + 0x119 * -0x2d), expect(_0x4c42db)['toEqual'](_0x41102a['getSystemInfoSync']());
        });
    });
});
