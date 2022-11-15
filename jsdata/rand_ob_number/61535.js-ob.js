var s = '(\x27\x27)x\x0ax';
assertEquals(s['match'](/\((').*\1\)/i), [
    '(\x27\x27)',
    '\x27'
]);
