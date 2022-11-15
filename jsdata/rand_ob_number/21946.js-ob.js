var p2 = {
        0x0: 'a',
        0x2: 'c',
        'length': 0x3
    }, arr = [
        ...p2,
        'd'
    ];
expect(arr)['toEqual']([
    'a',
    undefined,
    'c',
    'd'
]), expect(-0x2601 + -0x11fa * 0x2 + 0x1 * 0x49f6 in arr)['toBe'](!![]);
