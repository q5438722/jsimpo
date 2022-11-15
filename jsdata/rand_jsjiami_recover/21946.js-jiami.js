var p2 = {};
var arr = [
    ...p2,
    'd'
];
expect(arr)['toEqual']([
    'a',
    undefined,
    'c',
    'd'
]);
expect(1 in arr)['toBe'](!![]);