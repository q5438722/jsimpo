function* f() {
    yield, [yield];
    {
        yield;
    }
    ;
    yield, !![] ? yield : 0x1, (yield, 0x1);
}
