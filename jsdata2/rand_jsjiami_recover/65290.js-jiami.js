new BenchmarkSuite('ES5', [1000], [new Benchmark('ES5', ![], ![], 0, ES5)]);
function Point(_0x32d742, _0x69aeb7) {
    this['x'] = _0x32d742;
    this['y'] = _0x69aeb7;
}
function MyPoint() {
    Point['apply'](this, arguments);
}
function makePoint(_0x4283ce, _0x239b12) {
    return new MyPoint(_0x4283ce, _0x239b12);
}
function ES5() {
    'use strict';
    return makePoint(1, 2);
}