QUnit['test']('Testing loopTop:true', function (_0x1f340c) {
    var _0x3140c1 = '4|1|3|0|2'['split']('|'), _0x140e1d = 0;
    while (!![]) {
        switch (_0x3140c1[_0x140e1d++]) {
        case '0':
            _0x1f15e6['moveSectionUp']();
            continue;
        case '1':
            var _0x1f15e6 = initFullpageNew(_0x397415, { 'loopTop': !![] });
            continue;
        case '2':
            _0x1f340c['equal']($(_0x397415)['find'](SECTION_ACTIVE_SEL)['index'](), 3, 'We expect section 4 to be active');
            continue;
        case '3':
            _0x1f340c['equal']($(_0x397415)['find'](SECTION_ACTIVE_SEL)['index'](), 0, 'We expect section 1 to be active');
            continue;
        case '4':
            var _0x397415 = '#fullpage';
            continue;
        }
        break;
    }
});
QUnit['test']('Testing loopTop:false', function (_0x3abf39) {
    var _0x161b42 = '4|1|0|3|2'['split']('|'), _0x336521 = 0;
    while (!![]) {
        switch (_0x161b42[_0x336521++]) {
        case '0':
            _0x3abf39['equal']($(_0x4f24f7)['find'](SECTION_ACTIVE_SEL)['index'](), 0, 'We expect section 1 to be active');
            continue;
        case '1':
            var _0x1e2fdf = initFullpageNew(_0x4f24f7, { 'loopTop': ![] });
            continue;
        case '2':
            _0x3abf39['equal']($(_0x4f24f7)['find'](SECTION_ACTIVE_SEL)['index'](), 0, 'We expect section 0 to be active');
            continue;
        case '3':
            _0x1e2fdf['moveSectionUp']();
            continue;
        case '4':
            var _0x4f24f7 = '#fullpage';
            continue;
        }
        break;
    }
});