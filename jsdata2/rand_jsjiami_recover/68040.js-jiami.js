it('should not bundle context requires with asyncMode === \'weak\'', function () {
    var _0x2fc8b2 = require['context']('.', ![], /two/, 'weak');
    expect(function () {
        _0x2fc8b2('./two');
    })['toThrowError'](/not available/);
});
it('should find module with asyncMode === \'weak\' when required elsewhere', function () {
    var _0x1044a9 = require['context']('.', ![], /.+/, 'weak');
    expect(_0x4aa48c['kUQII'](_0x1044a9, './three'))['toBe'](3);
    require('./three');
});
it('should find module with asyncMode === \'weak\' when required elsewhere (recursive)', function () {
    var _0x2811dd = require['context']('.', !![], /.+/, 'weak');
    expect(_0x2811dd('./dir/four'))['toBe'](4);
    require('./dir/four');
});