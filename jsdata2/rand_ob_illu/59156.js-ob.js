const _0x89c8 = ['14KhkShv', 'start', 'Breakpoint can be set at line return this.x;', 'addScript', 'setupScriptMap', 'enable', 'onceScriptParsed', 'log', 'dVAST', 'Debugger', 'setBreakpoint', 'logSourceLocation', 'actualLocation', 'completeTest', '470037RdHRxS', '7mwHNep', '221101ybebWc', '187115zIRZZL', '319913LlBuUy', '1045vcxnFl', '15YBQLmj', '267224ouvUVa', '192689qXEMFK'];
const _0x24951f = _0x6a5c;

(function (_0x31ca07, _0x366380) {
    const _0x29e69a = _0x6a5c;

    while (true) {
        try {
            const _0x3c0b74 = parseInt(_0x29e69a(0x16c)) + -parseInt(_0x29e69a(0x16d)) * parseInt(_0x29e69a(0x16e)) + -parseInt(_0x29e69a(0x16f)) + -parseInt(_0x29e69a(0x170)) + parseInt(_0x29e69a(0x171)) * -parseInt(_0x29e69a(0x172)) + -parseInt(_0x29e69a(0x173)) + parseInt(_0x29e69a(0x174)) * parseInt(_0x29e69a(0x175));

            if (_0x3c0b74 === _0x366380) break;else _0x31ca07.push(_0x31ca07.shift());
        } catch (_0x652702) {
            _0x31ca07.push(_0x31ca07.shift());
        }
    }
})(_0x89c8, 830049);
function _0x6a5c(_0x4803b3, _0x4a6972) {
    return _0x6a5c = function (_0x565565, _0x14bded) {
        _0x565565 = _0x565565 - 364;
        const _0x7b3ff0 = _0x89c8[_0x565565];

        return _0x7b3ff0;
    }, _0x6a5c(_0x4803b3, _0x4a6972);
}

var { session, contextGroup, Protocol } = InspectorTest[_0x24951f(0x176)](_0x24951f(0x177));

contextGroup[_0x24951f(0x178)]('(function outer() {\n  var C = (function C_() {\n    var y = 1;\n    function CC() {\n      this.x = 0;\n    }\n    CC.prototype.f = function CCf() {\n      this.x += y;\n      return this.x;\n    };\n    return CC;\n  })();\n\n  var c = new C(0);\n})'), async function test() {
    const _0x3ba957 = _0x24951f;
    const _0x5a2162 = { 'dVAST': 'Set breakpoint..' };

    session[_0x3ba957(0x179)](), Protocol.Debugger[_0x3ba957(0x17a)]();
    var {
        params: { scriptId: _0x3894be }
    } = await Protocol.Debugger[_0x3ba957(0x17b)]();

    InspectorTest[_0x3ba957(0x17c)](_0x5a2162[_0x3ba957(0x17d)]);
    var { result: _0x3855ef } = await Protocol[_0x3ba957(0x17e)][_0x3ba957(0x17f)]({
        'location': {
            'scriptId': _0x3894be,
            'lineNumber': 0x8,
            'columnNumber': 0x0
        }
    });

    session[_0x3ba957(0x180)](_0x3855ef[_0x3ba957(0x181)]), InspectorTest[_0x3ba957(0x182)]();
}();
