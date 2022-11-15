description('This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.');
function foo(_0x2b96bd, _0x213458) {
    return _0x2b96bd + _0x213458;
}
function bar(_0x6cfb9e, _0x1337c6) {
    return this['f'] + _0x6cfb9e + _0x1337c6;
}
function baz(_0x62def0, _0x4f7765, _0x949d5a) {
    return _0x62def0['stuff'](_0x4f7765, _0x949d5a);
}
var functionToCall = foo;
var offset = 0;
for (var i = 0; i < 1000; ++i) {
    var MINbll = '4|0|2|1|3'['split']('|'), fWgyVw = 0;
    while (!![]) {
        switch (MINbll[fWgyVw++]) {
        case '0':
            var object = {};
            continue;
        case '1':
            object['f'] = 42;
            continue;
        case '2':
            object['stuff'] = functionToCall;
            continue;
        case '3':
            shouldBe('baz(object, ' + i + ', ' + i * 2 + ')', '' + (offset + i + i * 2));
            continue;
        case '4':
            if (i == 600) {
                functionToCall = bar;
                offset = 42;
            }
            continue;
        }
        break;
    }
}