for (var i in divisors) {
    var divisor = divisors[i], mod = Uint32Mod(divisor);
    for (var dividend = 0; dividend < 4294967296; dividend += 3999773) {
        assertEquals(dividend % divisor | 0, mod(dividend));
    }
}