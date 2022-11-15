const _0x1e40 = [
    '1dUJNSK',
    'setupScriptMap',
    '\x0a\x20\x20\x20\x20function\x20f()\x20{\x0a\x20\x20\x20\x20\x20\x20debugger;\x0a\x20\x20\x20\x20}\x20//#\x20sourceURL=test.js',
    'enable',
    'Debugger',
    'onPaused',
    'log',
    'Test\x20disableBreaks:\x20false',
    'evaluate',
    'debugger;',
    'logMessage',
    'Runtime',
    'Test\x20calling\x20out\x20with\x20disableBreaks:\x20true',
    'f();',
    'Test\x20Debugger.pause\x20with\x20disableBreaks:\x20false',
    'pause',
    'Test\x20Debugger.pause\x20with\x20disableBreaks:\x20true',
    '306705wpSnwy',
    '51809ludovm',
    '999518sESMcL',
    '874193QLpEYh',
    '1iXaTKz',
    '530809msTMTu',
    '1RXgiwC',
    '52721oqutFl',
    '104554zyrLFK'
];
const _0x4d0245 = _0x1037;
(function (_0xfedbff, _0x5bc1bd) {
    const _0x81c5e2 = _0x1037;
    while (!![]) {
        try {
            const _0x548b12 = parseInt(_0x81c5e2(0xf6)) + -parseInt(_0x81c5e2(0xf7)) + -parseInt(_0x81c5e2(0xf8)) + parseInt(_0x81c5e2(0xf9)) * parseInt(_0x81c5e2(0xfa)) + parseInt(_0x81c5e2(0xfb)) + parseInt(_0x81c5e2(0xfc)) * -parseInt(_0x81c5e2(0xfd)) + -parseInt(_0x81c5e2(0xfe)) * parseInt(_0x81c5e2(0xff));
            if (_0x548b12 === _0x5bc1bd)
                break;
            else
                _0xfedbff['push'](_0xfedbff['shift']());
        } catch (_0xce6e64) {
            _0xfedbff['push'](_0xfedbff['shift']());
        }
    }
}(_0x1e40, 0x7ad41));
function _0x1037(_0x4a4359, _0x5b4a4c) {
    return _0x1037 = function (_0x1e40ac, _0x10377e) {
        _0x1e40ac = _0x1e40ac - 0xf6;
        let _0x4eaf12 = _0x1e40[_0x1e40ac];
        return _0x4eaf12;
    }, _0x1037(_0x4a4359, _0x5b4a4c);
}
let {session, contextGroup, Protocol} = InspectorTest['start']('Tests\x20that\x20Runtime.evaluate\x20can\x20run\x20with\x20breaks\x20disabled.');
session[_0x4d0245(0x100)](), contextGroup['addScript'](_0x4d0245(0x101)), Protocol['Runtime'][_0x4d0245(0x102)](), Protocol['Debugger'][_0x4d0245(0x102)](), Protocol[_0x4d0245(0x103)][_0x4d0245(0x104)](_0x383637 => {
    const _0x309e34 = _0x4d0245;
    InspectorTest[_0x309e34(0x105)]('paused'), Protocol[_0x309e34(0x103)]['resume']();
}), async function () {
    const _0x47d7f5 = _0x4d0245;
    InspectorTest[_0x47d7f5(0x105)](_0x47d7f5(0x106)), InspectorTest['logMessage'](await Protocol['Runtime'][_0x47d7f5(0x107)]({
        'expression': _0x47d7f5(0x108),
        'disableBreaks': ![]
    })), InspectorTest[_0x47d7f5(0x105)]('Test\x20disableBreaks:\x20true'), InspectorTest[_0x47d7f5(0x109)](await Protocol[_0x47d7f5(0x10a)]['evaluate']({
        'expression': _0x47d7f5(0x108),
        'disableBreaks': !![]
    })), InspectorTest[_0x47d7f5(0x105)]('Test\x20calling\x20out\x20with\x20disableBreaks:\x20false'), InspectorTest['logMessage'](await Protocol[_0x47d7f5(0x10a)]['evaluate']({
        'expression': 'f();',
        'disableBreaks': ![]
    })), InspectorTest[_0x47d7f5(0x105)](_0x47d7f5(0x10b)), InspectorTest[_0x47d7f5(0x109)](await Protocol[_0x47d7f5(0x10a)]['evaluate']({
        'expression': _0x47d7f5(0x10c),
        'disableBreaks': !![]
    })), InspectorTest[_0x47d7f5(0x105)](_0x47d7f5(0x10d)), InspectorTest[_0x47d7f5(0x109)](await Protocol[_0x47d7f5(0x103)][_0x47d7f5(0x10e)]()), InspectorTest[_0x47d7f5(0x109)](await Protocol['Runtime'][_0x47d7f5(0x107)]({
        'expression': '1',
        'disableBreaks': ![]
    })), InspectorTest['log'](_0x47d7f5(0x10f)), InspectorTest[_0x47d7f5(0x109)](await Protocol['Debugger'][_0x47d7f5(0x10e)]()), InspectorTest['logMessage'](await Protocol[_0x47d7f5(0x10a)][_0x47d7f5(0x107)]({
        'expression': '1',
        'disableBreaks': !![]
    })), InspectorTest['completeTest']();
}();
