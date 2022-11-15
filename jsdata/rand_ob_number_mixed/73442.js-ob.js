QUnit['test']('Testing\x20loopTop:true', function (_0x28308e) {
    var _0x29152e = '#fullpage', _0x4ec667 = initFullpageNew(_0x29152e, { 'loopTop': !![] });
    _0x28308e['equal']($(_0x29152e)['find'](SECTION_ACTIVE_SEL)['index'](), -0x1fb * -0x5 + -0x1e5e * 0x1 + 0x1477, 'We\x20expect\x20section\x201\x20to\x20be\x20active'), _0x4ec667['moveSectionUp'](), _0x28308e['equal']($(_0x29152e)['find'](SECTION_ACTIVE_SEL)['index'](), 0x1 * 0x1b61 + 0x15 * 0x147 + 0x1 * -0x3631, 'We\x20expect\x20section\x204\x20to\x20be\x20active');
}), QUnit['test']('Testing\x20loopTop:false', function (_0x5654a2) {
    var _0x1e5878 = '#fullpage', _0x176e0f = initFullpageNew(_0x1e5878, { 'loopTop': ![] });
    _0x5654a2['equal']($(_0x1e5878)['find'](SECTION_ACTIVE_SEL)['index'](), 0x1 * -0x31 + 0x22de * -0x1 + -0x703 * -0x5, 'We\x20expect\x20section\x201\x20to\x20be\x20active'), _0x176e0f['moveSectionUp'](), _0x5654a2['equal']($(_0x1e5878)['find'](SECTION_ACTIVE_SEL)['index'](), 0x21f9 + 0x187b + -0x3a74, 'We\x20expect\x20section\x200\x20to\x20be\x20active');
});
