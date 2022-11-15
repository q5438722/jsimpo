InspectorTest['log']('Tests\x20that\x20multiple\x20sessions\x20share\x20the\x20context.'), async function test() {
    var _0x13f01c = {
            'zqVRI': '2|0|4|12|3|11|5|9|7|6|13|8|10|1',
            'CkPyx': 'var\x20a\x20=\x2042;',
            'Qoqds': 'Resolving\x20in\x202',
            'bhRdz': 'var\x20cb;\x20new\x20Promise(f\x20=>\x20cb\x20=\x20f)',
            'ObOhl': 'Should\x20resolve\x20in\x201',
            'ekpGD': 'Awaiting\x20in\x201',
            'IYOvJ': 'Evaluating\x20in\x202',
            'RlPcH': 'Assigning\x20in\x201',
            'vEVpu': 'cb(\x22foo\x22)'
        }, _0x3d9f41 = _0x13f01c['zqVRI']['split']('|'), _0x2448cc = 0x0;
    while (!![]) {
        switch (_0x3d9f41[_0x2448cc++]) {
        case '0':
            var _0x5310c8 = _0x4e1e16['connect']();
            continue;
        case '1':
            InspectorTest['completeTest']();
            continue;
        case '2':
            var _0x4e1e16 = new InspectorTest['ContextGroup']();
            continue;
        case '3':
            await _0x5310c8['Protocol']['Runtime']['evaluate']({ 'expression': _0x13f01c['CkPyx'] });
            continue;
        case '4':
            var _0xe073a2 = _0x4e1e16['connect']();
            continue;
        case '5':
            InspectorTest['logMessage'](await _0xe073a2['Protocol']['Runtime']['evaluate']({ 'expression': 'a' }));
            continue;
        case '6':
            InspectorTest['log'](_0x13f01c['Qoqds']);
            continue;
        case '7':
            var _0x555c44 = _0x5310c8['Protocol']['Runtime']['evaluate']({
                'expression': _0x13f01c['bhRdz'],
                'awaitPromise': !![]
            });
            continue;
        case '8':
            InspectorTest['log'](_0x13f01c['ObOhl']);
            continue;
        case '9':
            InspectorTest['log'](_0x13f01c['ekpGD']);
            continue;
        case '10':
            InspectorTest['logMessage'](await _0x555c44);
            continue;
        case '11':
            InspectorTest['log'](_0x13f01c['IYOvJ']);
            continue;
        case '12':
            InspectorTest['log'](_0x13f01c['RlPcH']);
            continue;
        case '13':
            await _0xe073a2['Protocol']['Runtime']['evaluate']({ 'expression': _0x13f01c['vEVpu'] });
            continue;
        }
        break;
    }
}();
