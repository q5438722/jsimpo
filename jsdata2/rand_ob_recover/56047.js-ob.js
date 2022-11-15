const common = require(_0x54dc3b(256)), {deepStrictEqual, strictEqual} = require('assert'), {IterableWeakMap} = require('internal/util/iterable_weak_map');
Reflect[_0x54dc3b(257)](function* () {
})[_0x54dc3b(258)]['next'] = common['mustNotCall'](), Reflect[_0x54dc3b(257)](new Set()[Symbol['iterator']]())[_0x54dc3b(259)] = common['mustNotCall']();
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x54dc3b(260)](_cache[_0x54dc3b(261)], 'hello'), wm['set'](_cache['moduleB'], _0x54dc3b(262)), wm[_0x54dc3b(260)](_cache[_0x54dc3b(263)], 'goodbye'), delete _cache[_0x54dc3b(264)], setImmediate(() => {
        const _0x91e78b = _0x54dc3b, _0x4a1bc0 = { 'VXgfZ': _0x91e78b(265) };
        _cache, globalThis['gc']();
        const _0x36bf91 = [...wm];
        deepStrictEqual(_0x36bf91, [
            _0x91e78b(266),
            _0x4a1bc0[_0x91e78b(267)]
        ]);
    });
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {}
        };
    wm[_0x54dc3b(260)](_cache[_0x54dc3b(261)], _0x54dc3b(266)), wm[_0x54dc3b(260)](_cache[_0x54dc3b(264)], _0x54dc3b(265)), wm['set'](_cache[_0x54dc3b(264)], _0x54dc3b(268));
    const values = [...wm];
    deepStrictEqual(values, [
        _0x54dc3b(266),
        _0x54dc3b(268)
    ]);
}
function _0x5664(_0x2b62e3, _0x120a71) {
    return _0x5664 = function (_0x11e70e, _0x4e1715) {
        _0x11e70e = _0x11e70e - (7726 * 1 + 5461 * -1 + -2021 * 1);
        let _0xfe3ed7 = _0x49c4[_0x11e70e];
        return _0xfe3ed7;
    }, _0x5664(_0x2b62e3, _0x120a71);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x54dc3b(260)](_cache[_0x54dc3b(261)], _0x54dc3b(266)), wm[_0x54dc3b(260)](_cache['moduleB'], _0x54dc3b(262)), wm['set'](_cache[_0x54dc3b(263)], 'goodbye'), wm[_0x54dc3b(269)](_cache['moduleB']);
    const values = [...wm];
    deepStrictEqual(values, [
        _0x54dc3b(266),
        _0x54dc3b(265)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm['set'](_cache['moduleA'], _0x54dc3b(266)), wm['set'](_cache['moduleC'], _0x54dc3b(265)), wm[_0x54dc3b(269)](_cache['moduleB']);
    const values = [...wm];
    deepStrictEqual(values, [
        _0x54dc3b(266),
        _0x54dc3b(265)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm['set'](_cache[_0x54dc3b(261)], _0x54dc3b(266)), wm[_0x54dc3b(260)](_cache['moduleB'], _0x54dc3b(262)), wm[_0x54dc3b(260)](_cache[_0x54dc3b(263)], _0x54dc3b(265)), strictEqual(wm['get'](_cache[_0x54dc3b(264)]), _0x54dc3b(262));
}
{
    const wm = new IterableWeakMap(), _cache = { 'moduleA': {} };
    wm[_0x54dc3b(260)](_cache['moduleA'], _0x54dc3b(266)), strictEqual(wm[_0x54dc3b(270)](_cache[_0x54dc3b(261)]), !![]);
}