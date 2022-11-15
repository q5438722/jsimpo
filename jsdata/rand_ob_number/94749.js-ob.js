describe('outer', () => {
    return describe('some\x20test', () => {
        return context('some\x20test', () => {
            return it('some\x20test', () => {
                return expect('foo')['to']['eq']('bar');
            }), someFn();
        });
    });
});
