var i;
for (i = 0; i < 10; i++) {
    switch (i) {
    case 1: {
            break;
        }
    }
    const z = 3;
    () => z;
}
function _0x3039(_0x2264b8, _0x2e397a) {
    return _0x3039 = function (_0x24288e, _0x3039f5) {
        _0x24288e = _0x24288e - 480;
        let _0x20ee41 = _0x2428[_0x24288e];
        return _0x20ee41;
    }, _0x3039(_0x2264b8, _0x2e397a);
}
expect(i)[_0x296d66(489)](10);
var j = 0;
for (i = 0; i < 10; i++) {
    switch (i) {
    case 0: {
            continue;
        }
    }
    j++;
    const z = 3;
    () => z;
}
expect(j)[_0x296d66(489)](9), j = 0;
for (i = 0; i < 10; i++) {
    switch (i) {
    case 0: {
            for (var k = 0; k < 10; k++) {
                const z = 3;
                () => z, j++;
                break;
            }
            break;
        }
    }
    const z = 3;
    () => z;
}
expect(j)['toBe'](1);