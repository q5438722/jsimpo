let {session, contextGroup, Protocol} = InspectorTest[_0x3cd29d(147)](_0x3cd29d(148));
var source = '\nfunction fib(x) {\n  if (x < 2) return 1;\n  return fib(x-1) + fib(x-2);\n}\nfib(5);\n';
function _0x2f34(_0x406d5c, _0xca4e4) {
    return _0x2f34 = function (_0x504f5c, _0x2f3455) {
        _0x504f5c = _0x504f5c - 138;
        let _0x4bfd89 = _0x504f[_0x504f5c];
        return _0x4bfd89;
    }, _0x2f34(_0x406d5c, _0xca4e4);
}
function logErrorMessage(_0x199ded) {
    const _0xa7af8f = _0x3cd29d;
    InspectorTest[_0xa7af8f(149)](_0xa7af8f(150) + _0x199ded['error'][_0xa7af8f(151)] + '"');
}
(async function test() {
    const _0x3bed2c = _0x3cd29d;
    await Protocol[_0x3bed2c(152)][_0x3bed2c(153)](), logErrorMessage(await Protocol['Profiler'][_0x3bed2c(154)]()), await Protocol[_0x3bed2c(155)]['enableCounters'](), logErrorMessage(await Protocol[_0x3bed2c(155)][_0x3bed2c(156)]()), await Protocol[_0x3bed2c(152)][_0x3bed2c(157)]({
        'expression': source,
        'sourceURL': arguments[_0x3bed2c(158)][_0x3bed2c(159)],
        'persistScript': !![]
    });
    const _0x4b0733 = (await Protocol['Profiler']['getCounters']())[_0x3bed2c(160)][_0x3bed2c(160)];
    if (_0x4b0733['length'] > 0)
        InspectorTest[_0x3bed2c(149)](_0x3bed2c(161));
    await Protocol[_0x3bed2c(155)][_0x3bed2c(162)](), logErrorMessage(await Protocol[_0x3bed2c(155)][_0x3bed2c(154)]()), await Protocol[_0x3bed2c(155)][_0x3bed2c(156)]();
    const _0x55ad84 = (await Protocol[_0x3bed2c(155)][_0x3bed2c(154)]())[_0x3bed2c(160)][_0x3bed2c(160)];
    if (_0x55ad84['length'] > 0 && _0x55ad84['length'] < _0x4b0733[_0x3bed2c(163)])
        InspectorTest[_0x3bed2c(149)](_0x3bed2c(164));
    await Protocol['Profiler'][_0x3bed2c(162)](), await Protocol['Runtime'][_0x3bed2c(165)](), InspectorTest['completeTest']();
}()[_0x3cd29d(166)](_0x237950 => InspectorTest[_0x3cd29d(149)](_0x3cd29d(167) + _0x237950)));