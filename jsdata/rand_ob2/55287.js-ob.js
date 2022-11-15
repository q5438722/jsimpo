'use strict';
const _0x2317 = [
    'util',
    'mustCall',
    'uncaughtException',
    'removeAllListeners',
    'test',
    'forEach',
    'throws',
    'nextTick',
    'ERR_INVALID_CALLBACK',
    'TypeError',
    'Callback\x20must\x20be\x20a\x20function.\x20Received\x20',
    '836212shSXHT',
    '7UhondJ',
    '28813OLEALA',
    '61537cyzyCS',
    '308196rXlsCp',
    '31538IqRNPC',
    '29qPDOXN',
    '10911cdZNzm',
    '1fiEXvc',
    '1187561XUpcIh',
    '../common',
    'assert'
];
const _0x30bdcb = _0x71b9;
(function (_0x4e42f6, _0x194fe3) {
    const _0x15501b = _0x71b9;
    while (!![]) {
        try {
            const _0x345b89 = -parseInt(_0x15501b(0x1e7)) + parseInt(_0x15501b(0x1e8)) * parseInt(_0x15501b(0x1e9)) + -parseInt(_0x15501b(0x1ea)) + -parseInt(_0x15501b(0x1eb)) + -parseInt(_0x15501b(0x1ec)) + -parseInt(_0x15501b(0x1ed)) * -parseInt(_0x15501b(0x1ee)) + parseInt(_0x15501b(0x1ef)) * parseInt(_0x15501b(0x1f0));
            if (_0x345b89 === _0x194fe3)
                break;
            else
                _0x4e42f6['push'](_0x4e42f6['shift']());
        } catch (_0x4c51ed) {
            _0x4e42f6['push'](_0x4e42f6['shift']());
        }
    }
}(_0x2317, 0x724dc));
const common = require(_0x30bdcb(0x1f1)), assert = require(_0x30bdcb(0x1f2)), {inspect} = require(_0x30bdcb(0x1f3)), N = 0x2;
function cb() {
    throw new Error();
}
for (let i = 0x0; i < N; ++i) {
    process['nextTick'](common[_0x30bdcb(0x1f4)](cb));
}
function _0x71b9(_0x14b39f, _0x4d7398) {
    return _0x71b9 = function (_0x2317e8, _0x71b9e7) {
        _0x2317e8 = _0x2317e8 - 0x1e7;
        let _0x39d08f = _0x2317[_0x2317e8];
        return _0x39d08f;
    }, _0x71b9(_0x14b39f, _0x4d7398);
}
process['on'](_0x30bdcb(0x1f5), common[_0x30bdcb(0x1f4)](N)), process['on']('exit', function () {
    const _0x3a43f4 = _0x30bdcb;
    process[_0x3a43f4(0x1f6)](_0x3a43f4(0x1f5));
}), [
    null,
    0x1,
    _0x30bdcb(0x1f7),
    {},
    [],
    Infinity,
    !![]
][_0x30bdcb(0x1f8)](_0xd33b89 => {
    const _0x2d2bfb = _0x30bdcb;
    assert[_0x2d2bfb(0x1f9)](() => process[_0x2d2bfb(0x1fa)](_0xd33b89), {
        'code': _0x2d2bfb(0x1fb),
        'name': _0x2d2bfb(0x1fc),
        'message': _0x2d2bfb(0x1fd) + inspect(_0xd33b89)
    });
});
