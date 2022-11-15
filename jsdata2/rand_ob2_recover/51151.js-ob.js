const common = require(_0x4a8142(414)), {PerformanceObserver, performance} = require(_0x4a8142(415)), bench = common['createBenchmark'](main, {
        'n': [100000],
        'observe': [
            _0x4a8142(416),
            _0x4a8142(417)
        ]
    });
function test() {
    const _0x353fff = _0x4a8142;
    performance['mark']('a'), performance[_0x353fff(418)]('b'), performance[_0x353fff(417)](_0x353fff(419), 'a', 'b');
}
function main({
    n: _0x30aa12,
    observe: _0x8ee9df
}) {
    const _0x1dd8b2 = _0x4a8142, _0x386e11 = _0x8ee9df === 'all' ? [
            _0x1dd8b2(418),
            _0x1dd8b2(417)
        ] : [_0x8ee9df], _0xaa20ea = new PerformanceObserver(() => {
            const _0x37d701 = _0x1dd8b2;
            bench[_0x37d701(420)](_0x30aa12);
        });
    _0xaa20ea[_0x1dd8b2(421)]({
        'entryTypes': _0x386e11,
        'buffered': !![]
    }), bench[_0x1dd8b2(422)](), performance[_0x1dd8b2(418)](_0x1dd8b2(422));
    for (let _0x5b9f81 = 0; _0x5b9f81 < 100000; _0x5b9f81++)
        test();
}