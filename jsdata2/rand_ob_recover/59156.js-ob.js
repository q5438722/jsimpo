function _0x6a5c(_0x4803b3, _0x4a6972) {
    return _0x6a5c = function (_0x565565, _0x14bded) {
        _0x565565 = _0x565565 - (-3824 + -1737 + 5925);
        let _0x7b3ff0 = _0x89c8[_0x565565];
        return _0x7b3ff0;
    }, _0x6a5c(_0x4803b3, _0x4a6972);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x24951f(374)](_0x24951f(375));
contextGroup[_0x24951f(376)]('(function outer() {\n  var C = (function C_() {\n    var y = 1;\n    function CC() {\n      this.x = 0;\n    }\n    CC.prototype.f = function CCf() {\n      this.x += y;\n      return this.x;\n    };\n    return CC;\n  })();\n\n  var c = new C(0);\n})'), async function test() {
    const _0x3ba957 = _0x24951f, _0x5a2162 = { 'dVAST': 'Set breakpoint..' };
    session[_0x3ba957(377)](), Protocol['Debugger'][_0x3ba957(378)]();
    const {
        params: {scriptId: _0x3894be}
    } = await Protocol['Debugger'][_0x3ba957(379)]();
    InspectorTest[_0x3ba957(380)](_0x5a2162[_0x3ba957(381)]);
    const {result: _0x3855ef} = await Protocol[_0x3ba957(382)][_0x3ba957(383)]({
        'location': {
            'scriptId': _0x3894be,
            'lineNumber': 8,
            'columnNumber': 0
        }
    });
    session[_0x3ba957(384)](_0x3855ef[_0x3ba957(385)]), InspectorTest[_0x3ba957(386)]();
}();