const targets = [];
class Foo {
    constructor() {
        targets['push'](new.target);
    }
}
class Bar extends Foo {
}
class Baz {
}
Reflect['construct'](Foo, []), Reflect['construct'](Foo, [], Bar), Reflect['construct'](Bar, []), Reflect['construct'](Bar, [], Baz), Reflect['construct'](Foo, [], Baz), expect(targets[-0x45 * 0x6a + 0x628 * -0x1 + 0x22ba])['toBe'](Foo), expect(targets[0x31f + -0x13e9 + 0x10cb])['toBe'](Bar), expect(targets[-0x6bb + -0x2e * 0xb + 0x61 * 0x17])['toBe'](Bar), expect(targets[-0x2050 + 0x12e8 + 0x5 * 0x2af])['toBe'](Baz), expect(targets[-0x263b + 0x1927 + 0xd18])['toBe'](Baz);
