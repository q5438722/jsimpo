function _0x1037(_0x4a4359, _0x5b4a4c) {
    return _0x1037 = function (_0x1e40ac, _0x10377e) {
        _0x1e40ac = _0x1e40ac - 246;
        let _0x4eaf12 = _0x1e40[_0x1e40ac];
        return _0x4eaf12;
    }, _0x1037(_0x4a4359, _0x5b4a4c);
}
let {session, contextGroup, Protocol} = InspectorTest['start']('Tests that Runtime.evaluate can run with breaks disabled.');
session[_0x4d0245(256)](), contextGroup['addScript'](_0x4d0245(257)), Protocol['Runtime'][_0x4d0245(258)](), Protocol['Debugger'][_0x4d0245(258)](), Protocol[_0x4d0245(259)][_0x4d0245(260)](_0x383637 => {
    const _0x309e34 = _0x4d0245;
    InspectorTest[_0x309e34(261)]('paused'), Protocol[_0x309e34(259)]['resume']();
}), async function () {
    const _0x47d7f5 = _0x4d0245;
    InspectorTest[_0x47d7f5(261)](_0x47d7f5(262)), InspectorTest['logMessage'](await Protocol['Runtime'][_0x47d7f5(263)]({
        'expression': _0x47d7f5(264),
        'disableBreaks': ![]
    })), InspectorTest[_0x47d7f5(261)]('Test disableBreaks: true'), InspectorTest[_0x47d7f5(265)](await Protocol[_0x47d7f5(266)]['evaluate']({
        'expression': _0x47d7f5(264),
        'disableBreaks': !![]
    })), InspectorTest[_0x47d7f5(261)]('Test calling out with disableBreaks: false'), InspectorTest['logMessage'](await Protocol[_0x47d7f5(266)]['evaluate']({
        'expression': 'f();',
        'disableBreaks': ![]
    })), InspectorTest[_0x47d7f5(261)](_0x47d7f5(267)), InspectorTest[_0x47d7f5(265)](await Protocol[_0x47d7f5(266)]['evaluate']({
        'expression': _0x47d7f5(268),
        'disableBreaks': !![]
    })), InspectorTest[_0x47d7f5(261)](_0x47d7f5(269)), InspectorTest[_0x47d7f5(265)](await Protocol[_0x47d7f5(259)][_0x47d7f5(270)]()), InspectorTest[_0x47d7f5(265)](await Protocol['Runtime'][_0x47d7f5(263)]({
        'expression': '1',
        'disableBreaks': ![]
    })), InspectorTest['log'](_0x47d7f5(271)), InspectorTest[_0x47d7f5(265)](await Protocol['Debugger'][_0x47d7f5(270)]()), InspectorTest['logMessage'](await Protocol[_0x47d7f5(266)][_0x47d7f5(263)]({
        'expression': '1',
        'disableBreaks': !![]
    })), InspectorTest['completeTest']();
}();