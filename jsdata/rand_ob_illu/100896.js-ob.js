'use strict';

const _0x18ca = ['bIqgF', 'YWxMF', 'Hrupw', 'test', 'throw error if stdin content incompatible with stdin-filepath', 'cli', '--stdin-filepath', 'abc.js', '.name { display: none; }', 'dXCau', 'OQCdf', 'BNuPQ', 'gracefully handle stdin-filepath with nonexistent directory', 'definitely/nonexistent/path.css', 'JlVNK', 'iubtq', 'UeKGL', 'KznxA', 'config/editorconfig/nonexistent.js', 'trim', 'apply editorconfig for stdin-filepath with nonexistent directory', 'config/editorconfig/nonexistent/one/two/three.js', 'NtbWU', 'GUwgS', '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n', 'apply editorconfig for stdin-filepath with a deep path', 'config/editorconfig/', 'LfxOu', 'vLPNC', 'SVWyb', 'nctAP', 'repeat', 'DgBdY', '/foo.js', 'uztAZ', 'TZsAf', 'GfPvU', 'ecqUk', 'eqHDR', 'BcSwX', 'three.js', 'don\u2019t apply editorconfig outside project for stdin-filepath with nonexistent directory', 'hbNCk', 'IioJF', 'config/editorconfig/repo-root/nonexistent/one/two/three.js', '\nfunction f() {\n  console.log("should be indented with 2 spaces");\n}\n', 'hello_world( );', 'btPHF', 'cli/stdin-ignore', 'PqQoc', 'liMJg', '279POrFzd', '2009dGvuYD', '997040wYoTAb', '7YkcNWA', '93557TiWiOD', '601NlecdZ', '1181RSGSet', '756897WfUvmd', '779483DxkExL', '2279483XWYwyi', 'ci-info', '../runPrettier.js', 'ZTyNP'];
const _0x2c8439 = _0x23ce;

(function (_0x5b0d09, _0x5a7f86) {
    const _0xf31acd = _0x23ce;

    while (true) {
        try {
            const _0x1c7333 = -parseInt(_0xf31acd(0x188)) * parseInt(_0xf31acd(0x189)) + -parseInt(_0xf31acd(0x18a)) + parseInt(_0xf31acd(0x18b)) * -parseInt(_0xf31acd(0x18c)) + parseInt(_0xf31acd(0x18d)) * parseInt(_0xf31acd(0x18e)) + -parseInt(_0xf31acd(0x18f)) + parseInt(_0xf31acd(0x190)) + parseInt(_0xf31acd(0x191));

            if (_0x1c7333 === _0x5a7f86) break;else _0x5b0d09.push(_0x5b0d09.shift());
        } catch (_0x1428a1) {
            _0x5b0d09.push(_0x5b0d09.shift());
        }
    }
})(_0x18ca, 799400);

var { isCI } = require(_0x2c8439(0x192));

const runPrettier = require(_0x2c8439(0x193));

describe('format correctly if stdin content compatible with stdin-filepath', () => {
    const _0x24654a = _0x2c8439;
    const _0x2ceeac = {
        'ZTyNP': function (_0xfc12d7, _0x3b03c3, _0x4ce69d, _0x374fc4) {
            return _0xfc12d7(_0x3b03c3, _0x4ce69d, _0x374fc4);
        },
        'NEgYo': 'cli',
        'bIqgF': '--stdin-filepath',
        'YWxMF': 'abc.css',
        'Hrupw': '.name { display: none; }'
    };

    _0x2ceeac[_0x24654a(0x194)](runPrettier, _0x2ceeac.NEgYo, [_0x2ceeac[_0x24654a(0x195)], _0x2ceeac[_0x24654a(0x196)]], { 'input': _0x2ceeac[_0x24654a(0x197)] })[_0x24654a(0x198)]({ 'status': 0x0 });
}), describe(_0x2c8439(0x199), () => {
    const _0x58d3c9 = _0x2c8439;
    const _0x29c9c1 = {
        'dXCau': _0x58d3c9(0x19a),
        'OQCdf': _0x58d3c9(0x19b),
        'BNuPQ': _0x58d3c9(0x19c),
        'JIdgW': _0x58d3c9(0x19d)
    };

    runPrettier(_0x29c9c1[_0x58d3c9(0x19e)], [_0x29c9c1[_0x58d3c9(0x19f)], _0x29c9c1[_0x58d3c9(0x1a0)]], { 'input': _0x29c9c1.JIdgW })[_0x58d3c9(0x198)]({ 'status': 'non-zero' });
}), describe(_0x2c8439(0x1a1), () => {
    const _0x33aca0 = _0x2c8439;
    const _0x358f5f = {
        'wxGFE': '--stdin-filepath',
        'JlVNK': _0x33aca0(0x1a2),
        'lmOfV': _0x33aca0(0x19d)
    };

    runPrettier(_0x33aca0(0x19a), [_0x358f5f.wxGFE, _0x358f5f[_0x33aca0(0x1a3)]], { 'input': _0x358f5f.lmOfV }).test({ 'status': 0x0 });
}), describe('apply editorconfig for stdin-filepath with nonexistent file', () => {
    const _0x2f6656 = _0x2c8439;
    const _0x383821 = {
        'iubtq': function (_0x1ad26b, _0x503339, _0x129066, _0x196655) {
            return _0x1ad26b(_0x503339, _0x129066, _0x196655);
        },
        'UeKGL': 'cli',
        'KznxA': _0x2f6656(0x19b)
    };

    _0x383821[_0x2f6656(0x1a4)](runPrettier, _0x383821[_0x2f6656(0x1a5)], [_0x383821[_0x2f6656(0x1a6)], _0x2f6656(0x1a7)], { 'input': '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'[_0x2f6656(0x1a8)]() })[_0x2f6656(0x198)]({ 'status': 0x0 });
}), describe(_0x2c8439(0x1a9), () => {
    const _0x2ed495 = _0x2c8439;
    const _0x523f1b = {
        'JFWBA': function (_0x33aa6a, _0x283c18, _0x5286ca, _0x43b641) {
            return _0x33aa6a(_0x283c18, _0x5286ca, _0x43b641);
        },
        'NtbWU': '--stdin-filepath',
        'GUwgS': _0x2ed495(0x1aa)
    };

    _0x523f1b.JFWBA(runPrettier, _0x2ed495(0x19a), [_0x523f1b[_0x2ed495(0x1ab)], _0x523f1b[_0x2ed495(0x1ac)]], { 'input': _0x2ed495(0x1ad)[_0x2ed495(0x1a8)]() })[_0x2ed495(0x198)]({ 'status': 0x0 });
}), describe(_0x2c8439(0x1ae), () => {
    const _0x20d2e6 = _0x2c8439;
    const _0x5e6b84 = {
        'LfxOu': _0x20d2e6(0x19a),
        'vLPNC': _0x20d2e6(0x19b),
        'Ovaor': function (_0x5e0df0, _0x4efac6) {
            return _0x5e0df0 + _0x4efac6;
        },
        'SVWyb': function (_0x1a7148, _0x661c6) {
            return _0x1a7148 + _0x661c6;
        },
        'nctAP': _0x20d2e6(0x1af),
        'DgBdY': 'three.js'
    };

    runPrettier(_0x5e6b84[_0x20d2e6(0x1b0)], [_0x5e6b84[_0x20d2e6(0x1b1)], _0x5e6b84.Ovaor(_0x5e6b84[_0x20d2e6(0x1b2)](_0x5e6b84[_0x20d2e6(0x1b3)], 'a/'[_0x20d2e6(0x1b4)](30)), _0x5e6b84[_0x20d2e6(0x1b5)])], { 'input': _0x20d2e6(0x1ad)[_0x20d2e6(0x1a8)]() })[_0x20d2e6(0x198)]({ 'status': 0x0 });
});
isCI && describe('apply editorconfig for stdin-filepath in root', () => {
    const _0x3b7462 = _0x2c8439;
    const _0x26016a = {
        'uztAZ': function (_0x358080, _0x48d63a, _0x258769, _0x4eb3d6) {
            return _0x358080(_0x48d63a, _0x258769, _0x4eb3d6);
        },
        'TZsAf': _0x3b7462(0x19a),
        'uRYbf': _0x3b7462(0x19b),
        'nBcnL': _0x3b7462(0x1b6),
        'GfPvU': function (_0x594294, _0xaa67c3) {
            return _0x594294 + _0xaa67c3;
        }
    };

    const _0x4ac65b = _0x3b7462(0x1ad).trim();

    _0x26016a[_0x3b7462(0x1b7)](runPrettier, _0x26016a[_0x3b7462(0x1b8)], [_0x26016a.uRYbf, _0x26016a.nBcnL], { 'input': _0x4ac65b })[_0x3b7462(0x198)]({
        'status': 0x0,
        'stdout': _0x26016a[_0x3b7462(0x1b9)](_0x4ac65b, '\n'),
        'stderr': '',
        'write': []
    });
});
function _0x23ce(_0x54f5c3, _0x4b21d7) {
    return _0x23ce = function (_0x5092e8, _0x49c48e) {
        _0x5092e8 = _0x5092e8 - 392;
        const _0x5d41c2 = _0x18ca[_0x5092e8];

        return _0x5d41c2;
    }, _0x23ce(_0x54f5c3, _0x4b21d7);
}
describe(_0x2c8439(0x1ae), () => {
    const _0x1a3a93 = _0x2c8439;
    const _0x422010 = {
        'ecqUk': function (_0x1f1b5e, _0x2c0141, _0x25465c, _0x162e80) {
            return _0x1f1b5e(_0x2c0141, _0x25465c, _0x162e80);
        },
        'eqHDR': _0x1a3a93(0x19a),
        'BcSwX': _0x1a3a93(0x19b),
        'pxIOP': function (_0x412288, _0x1a2d86) {
            return _0x412288 + _0x1a2d86;
        }
    };

    _0x422010[_0x1a3a93(0x1ba)](runPrettier, _0x422010[_0x1a3a93(0x1bb)], [_0x422010[_0x1a3a93(0x1bc)], _0x422010.pxIOP(_0x1a3a93(0x1af) + 'a/'[_0x1a3a93(0x1b4)](30), _0x1a3a93(0x1bd))], { 'input': _0x1a3a93(0x1ad).trim() })[_0x1a3a93(0x198)]({ 'status': 0x0 });
}), describe(_0x2c8439(0x1be), () => {
    const _0x3f7be0 = _0x2c8439;
    const _0x454215 = {
        'vQJkT': function (_0x25bf00, _0xf143c7, _0x26991c, _0x116091) {
            return _0x25bf00(_0xf143c7, _0x26991c, _0x116091);
        },
        'hbNCk': 'cli',
        'IioJF': _0x3f7be0(0x19b)
    };

    _0x454215.vQJkT(runPrettier, _0x454215[_0x3f7be0(0x1bf)], [_0x454215[_0x3f7be0(0x1c0)], _0x3f7be0(0x1c1)], { 'input': _0x3f7be0(0x1c2)[_0x3f7be0(0x1a8)]() })[_0x3f7be0(0x198)]({ 'status': 0x0 });
}), describe('output file as-is if stdin-filepath matched patterns in ignore-path', () => {
    const _0x1fcbfe = _0x2c8439;
    const _0x30908b = {
        'btPHF': function (_0x5edb49, _0x4e21e9, _0x426261, _0x16b873) {
            return _0x5edb49(_0x4e21e9, _0x426261, _0x16b873);
        },
        'PqQoc': _0x1fcbfe(0x19b),
        'liMJg': _0x1fcbfe(0x1c3)
    };

    _0x30908b[_0x1fcbfe(0x1c4)](runPrettier, _0x1fcbfe(0x1c5), [_0x30908b[_0x1fcbfe(0x1c6)], 'ignore/example.js'], { 'input': _0x30908b[_0x1fcbfe(0x1c7)] })[_0x1fcbfe(0x198)]({
        'stdout': _0x30908b[_0x1fcbfe(0x1c7)],
        'status': 0x0
    });
});
