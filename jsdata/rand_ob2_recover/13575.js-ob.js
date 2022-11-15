const targets = [];
class Foo {
    constructor() {
        const _0x4e2bcc = _0x1ee7;
        targets[_0x4e2bcc(120)](new.target);
    }
}
class Bar extends Foo {
}
class Baz {
}
Reflect[_0x5de688(121)](Foo, []), Reflect[_0x5de688(121)](Foo, [], Bar), Reflect[_0x5de688(121)](Bar, []), Reflect[_0x5de688(121)](Bar, [], Baz), Reflect[_0x5de688(121)](Foo, [], Baz), expect(targets[0])[_0x5de688(122)](Foo), expect(targets[1])[_0x5de688(122)](Bar), expect(targets[2])['toBe'](Bar), expect(targets[3])['toBe'](Baz), expect(targets[4])[_0x5de688(122)](Baz);