function break_from_for_in() {
    _0x210baa: {
        try {
            for (var _0x4e9b42 in [1, 2, 3]) {
                break _0x210baa;
            }
        } finally {}
    }
}
function break_from_finally() {
    _0x12e218: {
        try {} finally {
            break _0x12e218;
        }
    }
}
for (var i = 0; i < 10; i++) {
    break_from_for_in(), gc();
}
for (var j = 0; j < 10; j++) {
    break_from_finally(), gc();
}
assertEquals(10, i), assertEquals(10, j);
