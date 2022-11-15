it('should\x20not\x20bundle\x20context\x20requires\x20with\x20asyncMode\x20===\x20\x27weak\x27', function () {
    var _0x23f89d = require['context']('.', ![], /two/, 'weak');
    expect(function () {
        _0x23f89d('./two');
    })['toThrowError'](/not available/);
}), it('should\x20find\x20module\x20with\x20asyncMode\x20===\x20\x27weak\x27\x20when\x20required\x20elsewhere', function () {
    var _0x1e6ae8 = require['context']('.', ![], /.+/, 'weak');
    expect(_0x1e6ae8('./three'))['toBe'](-0x2 * -0x577 + -0x1b15 + -0x1 * -0x102a), require('./three');
}), it('should\x20find\x20module\x20with\x20asyncMode\x20===\x20\x27weak\x27\x20when\x20required\x20elsewhere\x20(recursive)', function () {
    var _0x2d3dc6 = require['context']('.', !![], /.+/, 'weak');
    expect(_0x2d3dc6('./dir/four'))['toBe'](0x122e + 0x28 * 0xe + -0x5 * 0x412), require('./dir/four');
});
