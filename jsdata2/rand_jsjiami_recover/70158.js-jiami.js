it('should not fail on optional externals', function () {
    require('external2');
    try {
        require('external');
    } catch (_0xc17598) {
        expect(_0xc17598)['toBeInstanceOf'](Error);
        expect(_0xc17598['code'])['toBe']('MODULE_NOT_FOUND');
        return;
    }
    throw new Error('It doesn\'t fail');
});