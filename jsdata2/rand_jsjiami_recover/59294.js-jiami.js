let {session, contextGroup, Protocol} = InspectorTest['start']('Test Counters collection enabling and disabling.');
var source = '\nfunction fib(x) {\n  if (x < 2) return 1;\n  return fib(x-1) + fib(x-2);\n}\nfib(5);\n';
function logErrorMessage(_0x1c762c) {
    InspectorTest['log']('Expected error: "' + _0x1c762c['error']['message'] + '"');
}
(async function test() {
    await Protocol['Runtime']['enable']();
    logErrorMessage(await Protocol['Profiler']['getCounters']());
    await Protocol['Profiler']['enableCounters']();
    logErrorMessage(await Protocol['Profiler']['enableCounters']());
    await Protocol['Runtime']['evaluate']({
        'expression': source,
        'sourceURL': arguments['callee']['name'],
        'persistScript': !![]
    });
    const _0x2b3469 = (await Protocol['Profiler']['getCounters']())['result']['result'];
    if (_0x2b3469['length'] > 0)
        InspectorTest['log']('Some counters reported');
    await Protocol['Profiler']['disableCounters']();
    logErrorMessage(await Protocol['Profiler']['getCounters']());
    await Protocol['Profiler']['enableCounters']();
    const _0x315f52 = (await Protocol['Profiler']['getCounters']())['result']['result'];
    if (_0x315f52['length'] > 0 && _0x315f52['length'] < _0x2b3469['length'])
        InspectorTest['log']('Less counters reported');
    await Protocol['Profiler']['disableCounters']();
    await Protocol['Runtime']['disable']();
    InspectorTest['completeTest']();
}()['catch'](_0x13197d => InspectorTest['log']('caught: ' + _0x13197d)));