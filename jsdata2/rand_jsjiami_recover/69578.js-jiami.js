require['ensure']([], function (_0x414c86) {
    _0x414c86('./split.js');
});
require['ensure']([], function (_0x374409) {
    _0x374409('./split-2.js');
}, 'split');
it('sorts the usedIds array to prevent churn', function () {
    var _0x1c79dd = require('fs');
    var _0x182fcf = require('path');
    var _0x206840 = JSON['parse'](_0x1c79dd['readFileSync'](_0x182fcf['join'](__dirname, 'records.json'), 'utf-8'));
    expect(_0x206840['chunks']['usedIds'])['toEqual']([
        0,
        1,
        2
    ]);
});