let {session, contextGroup, Protocol} = InspectorTest['start']('Checks format of console.timeEnd output');
Protocol['Runtime']['enable']();
Protocol['Runtime']['onConsoleAPICalled'](_0x2c65b7 => {
    InspectorTest['log'](_0x2c65b7['params']['args'][0]['value']);
});
InspectorTest['runAsyncTestSuite']([
    function zero() {
        return checkInterval(0);
    },
    function verySmall() {
        return checkInterval(1e-15);
    },
    function small() {
        return checkInterval(0.001);
    },
    function regular() {
        return checkInterval(1.2345);
    },
    function big() {
        return checkInterval(10000.2345);
    },
    function veryBig() {
        return checkInterval(1000000000000000 + 0.2345);
    },
    function huge() {
        return checkInterval(1e+42);
    },
    function undefinedAsLabel() {
        return checkInterval(1, 'undefined');
    },
    function emptyAsLabel() {
        return checkInterval(1, '');
    }
]);
async function checkInterval(_0x3e8fa4, _0x4e6b58) {
    var _0x319bef = '4|2|1|0|5|3'['split']('|'), _0x1ddc58 = 0;
    while (!![]) {
        switch (_0x319bef[_0x1ddc58++]) {
        case '0':
            await Protocol['Runtime']['evaluate']({ 'expression': 'console.time(' + _0x4e6b58 + ')' });
            continue;
        case '1':
            Protocol['Runtime']['evaluate']({ 'expression': 'console.log(\'js: \' + ' + _0x3e8fa4 + ' + \' ms\')' });
            continue;
        case '2':
            utils['setCurrentTimeMSForTest'](0);
            continue;
        case '3':
            await Protocol['Runtime']['evaluate']({ 'expression': 'console.timeEnd(' + _0x4e6b58 + ')' });
            continue;
        case '4':
            _0x4e6b58 = _0x4e6b58 === undefined ? '\'timeEnd\'' : _0x4e6b58;
            continue;
        case '5':
            utils['setCurrentTimeMSForTest'](_0x3e8fa4);
            continue;
        }
        break;
    }
}