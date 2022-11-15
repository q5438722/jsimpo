const common = require(_0x181c26(419)), {deepStrictEqual, strictEqual} = require(_0x181c26(420)), {IterableWeakMap} = require(_0x181c26(421));
Reflect[_0x181c26(422)](function* () {
})[_0x181c26(423)][_0x181c26(424)] = common['mustNotCall'](), Reflect[_0x181c26(422)](new Set()[Symbol[_0x181c26(425)]]())[_0x181c26(424)] = common[_0x181c26(426)]();
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(427)](_cache['moduleA'], 'hello'), wm[_0x181c26(427)](_cache[_0x181c26(428)], 'discard'), wm['set'](_cache[_0x181c26(429)], _0x181c26(430)), delete _cache[_0x181c26(428)], setImmediate(() => {
        _cache, globalThis['gc']();
        const _0x83a1c3 = [...wm];
        deepStrictEqual(_0x83a1c3, [
            'hello',
            'goodbye'
        ]);
    });
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {}
        };
    wm['set'](_cache[_0x181c26(431)], 'hello'), wm[_0x181c26(427)](_cache['moduleB'], _0x181c26(430)), wm[_0x181c26(427)](_cache[_0x181c26(428)], _0x181c26(432));
    const values = [...wm];
    deepStrictEqual(values, [
        _0x181c26(433),
        _0x181c26(432)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(427)](_cache['moduleA'], _0x181c26(433)), wm[_0x181c26(427)](_cache[_0x181c26(428)], _0x181c26(434)), wm[_0x181c26(427)](_cache[_0x181c26(429)], _0x181c26(430)), wm[_0x181c26(435)](_cache['moduleB']);
    const values = [...wm];
    deepStrictEqual(values, [
        'hello',
        _0x181c26(430)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(427)](_cache[_0x181c26(431)], _0x181c26(433)), wm[_0x181c26(427)](_cache[_0x181c26(429)], 'goodbye'), wm[_0x181c26(435)](_cache[_0x181c26(428)]);
    const values = [...wm];
    deepStrictEqual(values, [
        'hello',
        _0x181c26(430)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(427)](_cache[_0x181c26(431)], _0x181c26(433)), wm[_0x181c26(427)](_cache[_0x181c26(428)], _0x181c26(434)), wm['set'](_cache['moduleC'], _0x181c26(430)), strictEqual(wm[_0x181c26(436)](_cache['moduleB']), _0x181c26(434));
}
{
    const wm = new IterableWeakMap(), _cache = { 'moduleA': {} };
    wm[_0x181c26(427)](_cache[_0x181c26(431)], _0x181c26(433)), strictEqual(wm[_0x181c26(437)](_cache[_0x181c26(431)]), !![]);
}