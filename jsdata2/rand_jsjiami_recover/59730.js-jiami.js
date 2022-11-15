var stdlib = {};
var foreign = {};
var heap = new ArrayBuffer(64 * 1024);
function Uint32Mod(_0x4eb8f7) {
    var _0x1e14c7 = 'mod_';
    _0x1e14c7 += _0x4eb8f7;
    var _0x2bf576 = eval(_0x4cca4d['csRkj'](_0x4cca4d['waDLP'](_0x4cca4d['waDLP'](_0x4cca4d['waDLP'](_0x4cca4d['waDLP']('function Module(stdlib, foreign, heap) {\n' + ' "use asm";\n', ' function '), _0x1e14c7), '(dividend) {\n'), '  dividend = dividend | 0;\n') + '  return ((dividend >>> 0) % ' + _0x4eb8f7 + ') | 0;\n' + ' }\n' + ' return { f: ' + _0x1e14c7, '}\n') + '}; Module');
    return _0x2bf576(stdlib, foreign, heap)['f'];
}
var divisors = [
    0,
    1,
    3,
    4,
    10,
    42,
    64,
    100,
    1024,
    2147483647,
    4294967295
];
for (var i in divisors) {
    var divisor = divisors[i];
    var mod = Uint32Mod(divisor);
    for (var dividend = 0; dividend < 4294967296; dividend += 3999773) {
        assertEquals(dividend % divisor | 0, mod(dividend));
    }
}