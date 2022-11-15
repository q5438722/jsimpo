InspectorTest['log']('Tests that multiple sessions share the context.');
(async function test() {
    var _0x4ab42b = '1|8|7|5|12|11|6|10|13|2|9|3|0|4'['split']('|'), _0x10df61 = 0;
    while (!![]) {
        switch (_0x4ab42b[_0x10df61++]) {
        case '0':
            InspectorTest['logMessage'](await _0x1eb1d8);
            continue;
        case '1':
            var _0x58523f = new InspectorTest['ContextGroup']();
            continue;
        case '2':
            InspectorTest['log']('Resolving in 2');
            continue;
        case '3':
            InspectorTest['log']('Should resolve in 1');
            continue;
        case '4':
            InspectorTest['completeTest']();
            continue;
        case '5':
            InspectorTest['log']('Assigning in 1');
            continue;
        case '6':
            InspectorTest['logMessage'](await _0x567a5e['Protocol']['Runtime']['evaluate']({ 'expression': 'a' }));
            continue;
        case '7':
            var _0x567a5e = _0x58523f['connect']();
            continue;
        case '8':
            var _0x3fa1df = _0x58523f['connect']();
            continue;
        case '9':
            await _0x567a5e['Protocol']['Runtime']['evaluate']({ 'expression': 'cb("foo")' });
            continue;
        case '10':
            InspectorTest['log']('Awaiting in 1');
            continue;
        case '11':
            InspectorTest['log']('Evaluating in 2');
            continue;
        case '12':
            await _0x3fa1df['Protocol']['Runtime']['evaluate']({ 'expression': 'var a = 42;' });
            continue;
        case '13':
            var _0x1eb1d8 = _0x3fa1df['Protocol']['Runtime']['evaluate']({
                'expression': 'var cb; new Promise(f => cb = f)',
                'awaitPromise': !![]
            });
            continue;
        }
        break;
    }
}());