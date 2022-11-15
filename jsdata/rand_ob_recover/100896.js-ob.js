const {isCI} = require(_0x2c8439(402)), runPrettier = require(_0x2c8439(403));
describe('format correctly if stdin content compatible with stdin-filepath', () => {
    const _0x24654a = _0x2c8439, _0x2ceeac = {
            'ZTyNP': function (_0xfc12d7, _0x3b03c3, _0x4ce69d, _0x374fc4) {
                return _0xfc12d7(_0x3b03c3, _0x4ce69d, _0x374fc4);
            },
            'NEgYo': 'cli',
            'bIqgF': '--stdin-filepath',
            'YWxMF': 'abc.css',
            'Hrupw': '.name { display: none; }'
        };
    _0x2ceeac[_0x24654a(404)](runPrettier, _0x2ceeac['NEgYo'], [
        _0x2ceeac[_0x24654a(405)],
        _0x2ceeac[_0x24654a(406)]
    ], { 'input': _0x2ceeac[_0x24654a(407)] })[_0x24654a(408)]({ 'status': 0 });
}), describe(_0x2c8439(409), () => {
    const _0x58d3c9 = _0x2c8439, _0x29c9c1 = {
            'dXCau': _0x58d3c9(410),
            'OQCdf': _0x58d3c9(411),
            'BNuPQ': _0x58d3c9(412),
            'JIdgW': _0x58d3c9(413)
        };
    runPrettier(_0x29c9c1[_0x58d3c9(414)], [
        _0x29c9c1[_0x58d3c9(415)],
        _0x29c9c1[_0x58d3c9(416)]
    ], { 'input': _0x29c9c1['JIdgW'] })[_0x58d3c9(408)]({ 'status': 'non-zero' });
}), describe(_0x2c8439(417), () => {
    const _0x33aca0 = _0x2c8439, _0x358f5f = {
            'wxGFE': '--stdin-filepath',
            'JlVNK': _0x33aca0(418),
            'lmOfV': _0x33aca0(413)
        };
    runPrettier(_0x33aca0(410), [
        _0x358f5f['wxGFE'],
        _0x358f5f[_0x33aca0(419)]
    ], { 'input': _0x358f5f['lmOfV'] })['test']({ 'status': 0 });
}), describe('apply editorconfig for stdin-filepath with nonexistent file', () => {
    const _0x2f6656 = _0x2c8439, _0x383821 = {
            'iubtq': function (_0x1ad26b, _0x503339, _0x129066, _0x196655) {
                return _0x1ad26b(_0x503339, _0x129066, _0x196655);
            },
            'UeKGL': 'cli',
            'KznxA': _0x2f6656(411)
        };
    _0x383821[_0x2f6656(420)](runPrettier, _0x383821[_0x2f6656(421)], [
        _0x383821[_0x2f6656(422)],
        _0x2f6656(423)
    ], { 'input': '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'[_0x2f6656(424)]() })[_0x2f6656(408)]({ 'status': 0 });
}), describe(_0x2c8439(425), () => {
    const _0x2ed495 = _0x2c8439, _0x523f1b = {
            'JFWBA': function (_0x33aa6a, _0x283c18, _0x5286ca, _0x43b641) {
                return _0x33aa6a(_0x283c18, _0x5286ca, _0x43b641);
            },
            'NtbWU': '--stdin-filepath',
            'GUwgS': _0x2ed495(426)
        };
    _0x523f1b['JFWBA'](runPrettier, _0x2ed495(410), [
        _0x523f1b[_0x2ed495(427)],
        _0x523f1b[_0x2ed495(428)]
    ], { 'input': _0x2ed495(429)[_0x2ed495(424)]() })[_0x2ed495(408)]({ 'status': 0 });
}), describe(_0x2c8439(430), () => {
    const _0x20d2e6 = _0x2c8439, _0x5e6b84 = {
            'LfxOu': _0x20d2e6(410),
            'vLPNC': _0x20d2e6(411),
            'Ovaor': function (_0x5e0df0, _0x4efac6) {
                return _0x5e0df0 + _0x4efac6;
            },
            'SVWyb': function (_0x1a7148, _0x661c6) {
                return _0x1a7148 + _0x661c6;
            },
            'nctAP': _0x20d2e6(431),
            'DgBdY': 'three.js'
        };
    runPrettier(_0x5e6b84[_0x20d2e6(432)], [
        _0x5e6b84[_0x20d2e6(433)],
        _0x5e6b84['Ovaor'](_0x5e6b84[_0x20d2e6(434)](_0x5e6b84[_0x20d2e6(435)], 'a/'[_0x20d2e6(436)](-1 * 9173 + 280 * 2 + 129 * 67)), _0x5e6b84[_0x20d2e6(437)])
    ], { 'input': _0x20d2e6(429)[_0x20d2e6(424)]() })[_0x20d2e6(408)]({ 'status': 0 });
});
isCI && describe('apply editorconfig for stdin-filepath in root', () => {
    const _0x3b7462 = _0x2c8439, _0x26016a = {
            'uztAZ': function (_0x358080, _0x48d63a, _0x258769, _0x4eb3d6) {
                return _0x358080(_0x48d63a, _0x258769, _0x4eb3d6);
            },
            'TZsAf': _0x3b7462(410),
            'uRYbf': _0x3b7462(411),
            'nBcnL': _0x3b7462(438),
            'GfPvU': function (_0x594294, _0xaa67c3) {
                return _0x594294 + _0xaa67c3;
            }
        }, _0x4ac65b = _0x3b7462(429)['trim']();
    _0x26016a[_0x3b7462(439)](runPrettier, _0x26016a[_0x3b7462(440)], [
        _0x26016a['uRYbf'],
        _0x26016a['nBcnL']
    ], { 'input': _0x4ac65b })[_0x3b7462(408)]({
        'status': 0,
        'stdout': _0x26016a[_0x3b7462(441)](_0x4ac65b, '\n'),
        'stderr': '',
        'write': []
    });
});
function _0x23ce(_0x54f5c3, _0x4b21d7) {
    return _0x23ce = function (_0x5092e8, _0x49c48e) {
        _0x5092e8 = _0x5092e8 - (499 + -7604 + 7497);
        let _0x5d41c2 = _0x18ca[_0x5092e8];
        return _0x5d41c2;
    }, _0x23ce(_0x54f5c3, _0x4b21d7);
}
describe(_0x2c8439(430), () => {
    const _0x1a3a93 = _0x2c8439, _0x422010 = {
            'ecqUk': function (_0x1f1b5e, _0x2c0141, _0x25465c, _0x162e80) {
                return _0x1f1b5e(_0x2c0141, _0x25465c, _0x162e80);
            },
            'eqHDR': _0x1a3a93(410),
            'BcSwX': _0x1a3a93(411),
            'pxIOP': function (_0x412288, _0x1a2d86) {
                return _0x412288 + _0x1a2d86;
            }
        };
    _0x422010[_0x1a3a93(442)](runPrettier, _0x422010[_0x1a3a93(443)], [
        _0x422010[_0x1a3a93(444)],
        _0x422010['pxIOP'](_0x1a3a93(431) + 'a/'[_0x1a3a93(436)](-29 * 45 + 28 * 314 + -7457), _0x1a3a93(445))
    ], { 'input': _0x1a3a93(429)['trim']() })[_0x1a3a93(408)]({ 'status': 0 });
}), describe(_0x2c8439(446), () => {
    const _0x3f7be0 = _0x2c8439, _0x454215 = {
            'vQJkT': function (_0x25bf00, _0xf143c7, _0x26991c, _0x116091) {
                return _0x25bf00(_0xf143c7, _0x26991c, _0x116091);
            },
            'hbNCk': 'cli',
            'IioJF': _0x3f7be0(411)
        };
    _0x454215['vQJkT'](runPrettier, _0x454215[_0x3f7be0(447)], [
        _0x454215[_0x3f7be0(448)],
        _0x3f7be0(449)
    ], { 'input': _0x3f7be0(450)[_0x3f7be0(424)]() })[_0x3f7be0(408)]({ 'status': 0 });
}), describe('output file as-is if stdin-filepath matched patterns in ignore-path', () => {
    const _0x1fcbfe = _0x2c8439, _0x30908b = {
            'btPHF': function (_0x5edb49, _0x4e21e9, _0x426261, _0x16b873) {
                return _0x5edb49(_0x4e21e9, _0x426261, _0x16b873);
            },
            'PqQoc': _0x1fcbfe(411),
            'liMJg': _0x1fcbfe(451)
        };
    _0x30908b[_0x1fcbfe(452)](runPrettier, _0x1fcbfe(453), [
        _0x30908b[_0x1fcbfe(454)],
        'ignore/example.js'
    ], { 'input': _0x30908b[_0x1fcbfe(455)] })[_0x1fcbfe(408)]({
        'stdout': _0x30908b[_0x1fcbfe(455)],
        'status': 0
    });
});