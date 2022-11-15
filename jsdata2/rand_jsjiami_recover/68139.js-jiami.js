it('should handle var injection in require.ensure with error callback', function (_0x5e6ae9) {
    require['ensure']([], function (_0x38d40a) {
        _0x38d40a('./empty');
        var _0x4b0395 = module['x'];
        _0x5e6ae9();
    }, function (_0x123770) {
    }, 'chunk-with-var-inject');
});