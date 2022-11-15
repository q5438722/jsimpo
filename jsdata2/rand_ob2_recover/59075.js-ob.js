let {session, contextGroup, Protocol} = InspectorTest[_0x5d8e5e(434)](_0x5d8e5e(435));
Protocol[_0x5d8e5e(436)][_0x5d8e5e(437)](), Protocol['Runtime'][_0x5d8e5e(438)](_0x225199 => {
    const _0xbeb051 = _0x5d8e5e;
    InspectorTest[_0xbeb051(439)](_0x225199[_0xbeb051(440)][_0xbeb051(441)][0][_0xbeb051(442)]);
}), InspectorTest['runAsyncTestSuite']([
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
        const _0x20dbad = _0x5d8e5e;
        return checkInterval(1, _0x20dbad(443));
    },
    function emptyAsLabel() {
        return checkInterval(1, '');
    }
]);
async function checkInterval(_0x5ba758, _0x45c3dc) {
    const _0x1a0eac = _0x5d8e5e;
    _0x45c3dc = _0x45c3dc === undefined ? _0x1a0eac(444) : _0x45c3dc, utils[_0x1a0eac(445)](0), Protocol['Runtime'][_0x1a0eac(446)]({ 'expression': _0x1a0eac(447) + _0x5ba758 + _0x1a0eac(448) }), await Protocol[_0x1a0eac(436)][_0x1a0eac(446)]({ 'expression': _0x1a0eac(449) + _0x45c3dc + ')' }), utils[_0x1a0eac(445)](_0x5ba758), await Protocol['Runtime'][_0x1a0eac(446)]({ 'expression': 'console.timeEnd(' + _0x45c3dc + ')' });
}