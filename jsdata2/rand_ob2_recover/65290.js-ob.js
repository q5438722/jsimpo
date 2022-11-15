new BenchmarkSuite(_0x426bfc(121), [1000], [new Benchmark(_0x426bfc(121), ![], ![], 0, ES5)]);
function Point(_0x14c5c2, _0x5cbef1) {
    this['x'] = _0x14c5c2, this['y'] = _0x5cbef1;
}
function MyPoint() {
    var _0x28e45f = _0x426bfc;
    Point[_0x28e45f(122)](this, arguments);
}
function makePoint(_0x3b033d, _0x5d4845) {
    return new MyPoint(_0x3b033d, _0x5d4845);
}
function ES5() {
    'use strict';
    return makePoint(1, 2);
}