const _0x270e = ['application/json;', 'pcXXa', 'MOyCv', 'POST', 'TISiD', 'QhVmA', 'appPort', 'JgfRS', 'assign', 'env', '648845oDqIWq', '453717xgoukf', '1zUaXMz', '230533zjdMwM', '182631RaaLJl', '29229ZndYNn', '13vhqhBk', '1158111HcQota', '1SlmEDq', '1662434JuHBoa', 'setTimeout', '../', 'Nextjs', 'should parse JSON body', 'zGCKB', 'NmtsR', 'VVnWi', 'CcVye', 'toEqual', 'CgDbl', 'uOIfE', 'lzmjc', 'bAJCO', 'ggWgm', 'oFLWf', 'btjEi', 'toBe', 'rlQWe', 'application/json; charset=utf-8', 'kxjAB', 'YPrLq', 'dhbCO', 'stringify', 'NAWAf', 'then', 'json', '/api'];
const _0x752bd8 = _0x179c;

(function (_0x4ae5fd, _0x1bba9e) {
    const _0x27adcb = _0x179c;

    while (true) {
        try {
            const _0x539fa3 = -parseInt(_0x27adcb(0x16b)) + parseInt(_0x27adcb(0x16c)) * parseInt(_0x27adcb(0x16d)) + -parseInt(_0x27adcb(0x16e)) + parseInt(_0x27adcb(0x16f)) + -parseInt(_0x27adcb(0x170)) * -parseInt(_0x27adcb(0x171)) + -parseInt(_0x27adcb(0x172)) + parseInt(_0x27adcb(0x173)) * parseInt(_0x27adcb(0x174));

            if (_0x539fa3 === _0x1bba9e) break;else _0x4ae5fd.push(_0x4ae5fd.shift());
        } catch (_0x593741) {
            _0x4ae5fd.push(_0x4ae5fd.shift());
        }
    }
})(_0x270e, 641270);
import { join } from 'path';
function _0x179c(_0x2f973b, _0x548efb) {
    return _0x179c = function (_0x12b3f0, _0x1b466d) {
        _0x12b3f0 = _0x12b3f0 - 363;
        const _0x2e0173 = _0x270e[_0x12b3f0];

        return _0x2e0173;
    }, _0x179c(_0x2f973b, _0x548efb);
}
import { killApp, findPort, launchApp, fetchViaHTTP, initNextServerScript } from 'next-test-utils';
import _0x52e609 from 'clone';
import _0x3b810b from 'get-port';
jest[_0x752bd8(0x175)](120000);
const appDir = join(__dirname, _0x752bd8(0x176));
var appPort;
var app;
var server;

jest[_0x752bd8(0x175)](120000);
const context = {};

function runTests() {
    const _0x2bcc6a = _0x752bd8;
    const _0x335585 = {
        'VVnWi': function (_0x253adf, _0x121837, _0x4897f2, _0x425f46) {
            return _0x253adf(_0x121837, _0x4897f2, _0x425f46);
        },
        'CcVye': function (_0xe40e8e) {
            return _0xe40e8e();
        },
        'CgDbl': _0x2bcc6a(0x177),
        'ybmor': function (_0x4218ce, _0x5603a3) {
            return _0x4218ce(_0x5603a3);
        },
        'uOIfE': function (_0x2f6e6c) {
            return _0x2f6e6c();
        },
        'lzmjc': function (_0x2e114c) {
            return _0x2e114c();
        },
        'bAJCO': function (_0x4e091e, _0x5563ae) {
            return _0x4e091e(_0x5563ae);
        },
        'btjEi': function (_0x4210d4) {
            return _0x4210d4();
        },
        'rlQWe': function (_0x4ae310, _0x5eade7) {
            return _0x4ae310(_0x5eade7);
        },
        'zGCKB': function (_0x1634e3, _0xf8aa1f, _0x14e2a9) {
            return _0x1634e3(_0xf8aa1f, _0x14e2a9);
        },
        'NmtsR': _0x2bcc6a(0x178),
        'ggWgm': function (_0xd03c62, _0x49efae, _0x50419d) {
            return _0xd03c62(_0x49efae, _0x50419d);
        },
        'HOxDo': 'should not throw if request body is already parsed in custom middleware',
        'oFLWf': 'should not throw if request\'s content-type is invalid'
    };

    _0x335585[_0x2bcc6a(0x179)](it, _0x335585[_0x2bcc6a(0x17a)], async () => {
        const _0x561151 = _0x2bcc6a;

        appPort = await findPort(), app = await _0x335585[_0x561151(0x17b)](launchApp, appDir, appPort, {});

        const _0x1efa27 = await _0x335585[_0x561151(0x17c)](makeRequest);

        expect(_0x1efa27)[_0x561151(0x17d)]([{ 'title': _0x335585[_0x561151(0x17e)] }]), _0x335585.ybmor(killApp, app);
    }), _0x335585.ggWgm(it, _0x335585.HOxDo, async () => {
        const _0x361d8d = _0x2bcc6a;

        await _0x335585[_0x361d8d(0x17f)](startServer);

        const _0x1a1902 = await _0x335585[_0x361d8d(0x180)](makeRequest);

        expect(_0x1a1902)[_0x361d8d(0x17d)]([{ 'title': _0x335585[_0x361d8d(0x17e)] }]), _0x335585[_0x361d8d(0x181)](killApp, server);
    }), _0x335585[_0x2bcc6a(0x182)](it, _0x335585[_0x2bcc6a(0x183)], async () => {
        const _0x2ca9fe = _0x2bcc6a;

        await _0x335585.btjEi(startServer);

        const _0x14083b = await _0x335585[_0x2ca9fe(0x184)](makeRequestWithInvalidContentType);

        _0x335585[_0x2ca9fe(0x181)](expect, _0x14083b)[_0x2ca9fe(0x185)](200), _0x335585[_0x2ca9fe(0x186)](killApp, server);
    });
}
async function makeRequest() {
    const _0x414e64 = _0x752bd8;
    const _0x222bf7 = {
        'kxjAB': function (_0x4fe2ae, _0x1548ef, _0x533c0a, _0x496ab1, _0x2d9efa) {
            return _0x4fe2ae(_0x1548ef, _0x533c0a, _0x496ab1, _0x2d9efa);
        },
        'YPrLq': '/api',
        'DFYUR': 'POST',
        'dhbCO': _0x414e64(0x187),
        'NAWAf': _0x414e64(0x177)
    };

    const _0xc61a4b = await _0x222bf7[_0x414e64(0x188)](fetchViaHTTP, appPort, _0x222bf7[_0x414e64(0x189)], null, {
        'method': _0x222bf7.DFYUR,
        'headers': { 'Content-Type': _0x222bf7[_0x414e64(0x18a)] },
        'body': JSON[_0x414e64(0x18b)]([{ 'title': _0x222bf7[_0x414e64(0x18c)] }])
    })[_0x414e64(0x18d)](_0x19b430 => _0x19b430.ok && _0x19b430[_0x414e64(0x18e)]());

    return _0xc61a4b;
}
async function makeRequestWithInvalidContentType() {
    const _0x13a839 = _0x752bd8;
    const _0xc79634 = {
        'pcXXa': function (_0x37be1b, _0xb69c62, _0x77a67d, _0x492348, _0x4870c2) {
            return _0x37be1b(_0xb69c62, _0x77a67d, _0x492348, _0x4870c2);
        },
        'MOyCv': _0x13a839(0x18f),
        'TISiD': _0x13a839(0x190),
        'HbQKA': 'Nextjs'
    };

    const _0x1e6b18 = await _0xc79634[_0x13a839(0x191)](fetchViaHTTP, appPort, _0xc79634[_0x13a839(0x192)], null, {
        'method': _0x13a839(0x193),
        'headers': { 'Content-Type': _0xc79634[_0x13a839(0x194)] },
        'body': JSON[_0x13a839(0x18b)]([{ 'title': _0xc79634.HbQKA }])
    })[_0x13a839(0x18d)](_0xe1fc09 => _0xe1fc09.status);

    return _0x1e6b18;
}

const startServer = async (_0x5ebb37 = {}, _0x58424d) => {
    const _0x3f3d6e = _0x752bd8;
    const _0x35de9d = {
        'qChpn': function (_0x4bfa86, _0x478ab9, _0x9a231d) {
            return _0x4bfa86(_0x478ab9, _0x9a231d);
        },
        'QhVmA': 'server.js',
        'JgfRS': function (_0xb81be5) {
            return _0xb81be5();
        },
        'gbPvK': function (_0x2666eb, _0x3d614a) {
            return _0x2666eb(_0x3d614a);
        }
    };

    const _0x3c121f = _0x35de9d.qChpn(join, appDir, _0x35de9d[_0x3f3d6e(0x195)]);

    context[_0x3f3d6e(0x196)] = appPort = await _0x35de9d[_0x3f3d6e(0x197)](_0x3b810b);

    const _0xf720b9 = Object[_0x3f3d6e(0x198)]({}, _0x35de9d.gbPvK(_0x52e609, process[_0x3f3d6e(0x199)]), { 'PORT': '' + appPort }, _0x5ebb37);

    server = await initNextServerScript(_0x3c121f, /ready on/i, _0xf720b9, /ReferenceError: options is not defined/, _0x58424d);
};

const _0x2bcc6a = _0x752bd8;
const _0x335585 = { 'VVnWi': function (_0x253adf, _0x121837, _0x4897f2, _0x425f46) {
        return _0x253adf(_0x121837, _0x4897f2, _0x425f46);
    }, 'CcVye': function (_0xe40e8e) {
        return _0xe40e8e();
    }, 'CgDbl': _0x2bcc6a(0x177), 'ybmor': function (_0x4218ce, _0x5603a3) {
        return _0x4218ce(_0x5603a3);
    }, 'uOIfE': function (_0x2f6e6c) {
        return _0x2f6e6c();
    }, 'lzmjc': function (_0x2e114c) {
        return _0x2e114c();
    }, 'bAJCO': function (_0x4e091e, _0x5563ae) {
        return _0x4e091e(_0x5563ae);
    }, 'btjEi': function (_0x4210d4) {
        return _0x4210d4();
    }, 'rlQWe': function (_0x4ae310, _0x5eade7) {
        return _0x4ae310(_0x5eade7);
    }, 'zGCKB': function (_0x1634e3, _0xf8aa1f, _0x14e2a9) {
        return _0x1634e3(_0xf8aa1f, _0x14e2a9);
    }, 'NmtsR': _0x2bcc6a(0x178), 'ggWgm': function (_0xd03c62, _0x49efae, _0x50419d) {
        return _0xd03c62(_0x49efae, _0x50419d);
    }, 'HOxDo': 'should not throw if request body is already parsed in custom middleware', 'oFLWf': 'should not throw if request\'s content-type is invalid' };
_0x335585[_0x2bcc6a(0x179)](it, _0x335585[_0x2bcc6a(0x17a)], async () => {
    const _0x561151 = _0x2bcc6a;
    appPort = await findPort(), app = await _0x335585[_0x561151(0x17b)](launchApp, appDir, appPort, {});
    const _0x1efa27 = await _0x335585[_0x561151(0x17c)](makeRequest);

    expect(_0x1efa27)[_0x561151(0x17d)]([{ 'title': _0x335585[_0x561151(0x17e)] }]), _0x335585.ybmor(killApp, app);
}), _0x335585.ggWgm(it, _0x335585.HOxDo, async () => {
    const _0x361d8d = _0x2bcc6a;
    await _0x335585[_0x361d8d(0x17f)](startServer);
    const _0x1a1902 = await _0x335585[_0x361d8d(0x180)](makeRequest);

    expect(_0x1a1902)[_0x361d8d(0x17d)]([{ 'title': _0x335585[_0x361d8d(0x17e)] }]), _0x335585[_0x361d8d(0x181)](killApp, server);
}), _0x335585[_0x2bcc6a(0x182)](it, _0x335585[_0x2bcc6a(0x183)], async () => {
    const _0x2ca9fe = _0x2bcc6a;
    await _0x335585.btjEi(startServer);
    const _0x14083b = await _0x335585[_0x2ca9fe(0x184)](makeRequestWithInvalidContentType);

    _0x335585[_0x2ca9fe(0x181)](expect, _0x14083b)[_0x2ca9fe(0x185)](200), _0x335585[_0x2ca9fe(0x186)](killApp, server);
});
