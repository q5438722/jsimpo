const _0x49c7 = ['wqAzb', 'KRysx', 'aPUun', 'hvoxV', 'glhDA', 'toEqual', 'qwTTe', 'dlkjA', 'BOJLJ', 'tYzrO', 'JeRFU', 'cHLio', 'TvHWh', '/api', 'WvkPT', 'baWSM', 'Ngslk', 'OZgMY', 'tMChp', 'POST', 'tCnjb', 'Bafwy', 'application/json;', 'jiZeX', 'then', 'server.js', 'BOZSU', 'appPort', 'IFBIF', 'assign', 'WNuYT', 'env', 'FVjKi', '435755QCiuVT', '5011PomvYQ', '273zexSfK', '893oiOaav', '24sKRCUZ', '1266947CqdCzt', '362480qqPOUL', '916716BSWrSM', '328051HEcrWF', '../', 'setTimeout', 'Nextjs', 'should parse JSON body', 'should not throw if request body is already parsed in custom middleware', 'should not throw if request\'s content-type is invalid'];
const _0x2d60a1 = _0xa7bf;

(function (_0x8595a, _0x4fae77) {
    const _0x463235 = _0xa7bf;

    while (true) {
        try {
            const _0x20e8d1 = parseInt(_0x463235(0x145)) + parseInt(_0x463235(0x146)) * parseInt(_0x463235(0x147)) + parseInt(_0x463235(0x148)) * -parseInt(_0x463235(0x149)) + -parseInt(_0x463235(0x14a)) + -parseInt(_0x463235(0x14b)) + parseInt(_0x463235(0x14c)) + -parseInt(_0x463235(0x14d));

            if (_0x20e8d1 === _0x4fae77) break;else _0x8595a.push(_0x8595a.shift());
        } catch (_0x574f94) {
            _0x8595a.push(_0x8595a.shift());
        }
    }
})(_0x49c7, 741564);
import { join } from 'path';
import { killApp, findPort, launchApp, fetchViaHTTP, initNextServerScript } from 'next-test-utils';
function _0xa7bf(_0x59264d, _0x5341ea) {
    return _0xa7bf = function (_0x51142a, _0xd93ec7) {
        _0x51142a = _0x51142a - 325;
        const _0x1f5de0 = _0x49c7[_0x51142a];

        return _0x1f5de0;
    }, _0xa7bf(_0x59264d, _0x5341ea);
}
import _0x4cd534 from 'clone';
import _0x6c93b from 'get-port';
jest.setTimeout(120000);
const appDir = join(__dirname, _0x2d60a1(0x14e));
var appPort;
var app;
var server;

jest[_0x2d60a1(0x14f)](120000);
const context = {};

function runTests() {
    const _0x1d9887 = _0x2d60a1;
    const _0x315578 = {
        'aPUun': function (_0x726523) {
            return _0x726523();
        },
        'hvoxV': function (_0x3ce58b, _0x3982cb, _0x59d073, _0x283b30) {
            return _0x3ce58b(_0x3982cb, _0x59d073, _0x283b30);
        },
        'glhDA': function (_0x7538b2) {
            return _0x7538b2();
        },
        'qwTTe': _0x1d9887(0x150),
        'dlkjA': function (_0x19cdfd, _0x48c12b) {
            return _0x19cdfd(_0x48c12b);
        },
        'tYzrO': function (_0x506af9) {
            return _0x506af9();
        },
        'JeRFU': function (_0x3cfd68, _0x106eef) {
            return _0x3cfd68(_0x106eef);
        },
        'TvHWh': function (_0x1acc72, _0x40d122) {
            return _0x1acc72(_0x40d122);
        },
        'wqAzb': function (_0x18c128, _0x483605, _0x5ca63f) {
            return _0x18c128(_0x483605, _0x5ca63f);
        },
        'KRysx': _0x1d9887(0x151),
        'BOJLJ': _0x1d9887(0x152),
        'HGWUE': function (_0x1f508e, _0x4d77b5, _0x530bf0) {
            return _0x1f508e(_0x4d77b5, _0x530bf0);
        },
        'cHLio': _0x1d9887(0x153)
    };

    _0x315578[_0x1d9887(0x154)](it, _0x315578[_0x1d9887(0x155)], async () => {
        const _0x2ec362 = _0x1d9887;

        appPort = await _0x315578[_0x2ec362(0x156)](findPort), app = await _0x315578[_0x2ec362(0x157)](launchApp, appDir, appPort, {});

        const _0x45b81c = await _0x315578[_0x2ec362(0x158)](makeRequest);

        expect(_0x45b81c)[_0x2ec362(0x159)]([{ 'title': _0x315578[_0x2ec362(0x15a)] }]), _0x315578[_0x2ec362(0x15b)](killApp, app);
    }), _0x315578[_0x1d9887(0x154)](it, _0x315578[_0x1d9887(0x15c)], async () => {
        const _0x39dcae = _0x1d9887;

        await _0x315578[_0x39dcae(0x158)](startServer);

        const _0x4b1ca8 = await _0x315578[_0x39dcae(0x15d)](makeRequest);

        _0x315578[_0x39dcae(0x15e)](expect, _0x4b1ca8).toEqual([{ 'title': _0x315578[_0x39dcae(0x15a)] }]), _0x315578.JeRFU(killApp, server);
    }), _0x315578.HGWUE(it, _0x315578[_0x1d9887(0x15f)], async () => {
        const _0x4d7d4e = _0x1d9887;

        await _0x315578.tYzrO(startServer);

        const _0x3667ce = await _0x315578[_0x4d7d4e(0x15d)](makeRequestWithInvalidContentType);

        _0x315578[_0x4d7d4e(0x160)](expect, _0x3667ce).toBe(200), killApp(server);
    });
}
async function makeRequest() {
    const _0x126a97 = _0x2d60a1;
    const _0x255e34 = {
        'WvkPT': function (_0x5b3e35, _0x541830, _0x1ec4e9, _0x108dbc, _0x9a95b6) {
            return _0x5b3e35(_0x541830, _0x1ec4e9, _0x108dbc, _0x9a95b6);
        },
        'baWSM': _0x126a97(0x161),
        'Ngslk': 'POST',
        'OZgMY': 'application/json; charset=utf-8',
        'tMChp': _0x126a97(0x150)
    };

    const _0x25dcef = await _0x255e34[_0x126a97(0x162)](fetchViaHTTP, appPort, _0x255e34[_0x126a97(0x163)], null, {
        'method': _0x255e34[_0x126a97(0x164)],
        'headers': { 'Content-Type': _0x255e34[_0x126a97(0x165)] },
        'body': JSON.stringify([{ 'title': _0x255e34[_0x126a97(0x166)] }])
    }).then(_0x558825 => _0x558825.ok && _0x558825.json());

    return _0x25dcef;
}
async function makeRequestWithInvalidContentType() {
    const _0x34474f = _0x2d60a1;
    const _0x3e5b19 = {
        'tCnjb': _0x34474f(0x161),
        'Bafwy': _0x34474f(0x167),
        'jiZeX': _0x34474f(0x150)
    };

    const _0x3e48cb = await fetchViaHTTP(appPort, _0x3e5b19[_0x34474f(0x168)], null, {
        'method': _0x3e5b19[_0x34474f(0x169)],
        'headers': { 'Content-Type': _0x34474f(0x16a) },
        'body': JSON.stringify([{ 'title': _0x3e5b19[_0x34474f(0x16b)] }])
    })[_0x34474f(0x16c)](_0x1b8a03 => _0x1b8a03.status);

    return _0x3e48cb;
}

const startServer = async (_0x30cbc6 = {}, _0x4c748a) => {
    const _0x10f8b7 = _0x2d60a1;
    const _0x539d0f = {
        'BOZSU': _0x10f8b7(0x16d),
        'IFBIF': function (_0x51f576) {
            return _0x51f576();
        },
        'WNuYT': function (_0x1f93d1, _0x19dd4e) {
            return _0x1f93d1(_0x19dd4e);
        },
        'FVjKi': function (_0x41e400, _0x44bfa7, _0x2da7da, _0x5953c9, _0x3ccaae, _0x3fb9aa) {
            return _0x41e400(_0x44bfa7, _0x2da7da, _0x5953c9, _0x3ccaae, _0x3fb9aa);
        }
    };

    const _0x13cc51 = join(appDir, _0x539d0f[_0x10f8b7(0x16e)]);

    context[_0x10f8b7(0x16f)] = appPort = await _0x539d0f[_0x10f8b7(0x170)](_0x6c93b);

    const _0x45b265 = Object[_0x10f8b7(0x171)]({}, _0x539d0f[_0x10f8b7(0x172)](_0x4cd534, process[_0x10f8b7(0x173)]), { 'PORT': '' + appPort }, _0x30cbc6);

    server = await _0x539d0f[_0x10f8b7(0x174)](initNextServerScript, _0x13cc51, /ready on/i, _0x45b265, /ReferenceError: options is not defined/, _0x4c748a);
};

const _0x1d9887 = _0x2d60a1;
const _0x315578 = { 'aPUun': function (_0x726523) {
        return _0x726523();
    }, 'hvoxV': function (_0x3ce58b, _0x3982cb, _0x59d073, _0x283b30) {
        return _0x3ce58b(_0x3982cb, _0x59d073, _0x283b30);
    }, 'glhDA': function (_0x7538b2) {
        return _0x7538b2();
    }, 'qwTTe': _0x1d9887(0x150), 'dlkjA': function (_0x19cdfd, _0x48c12b) {
        return _0x19cdfd(_0x48c12b);
    }, 'tYzrO': function (_0x506af9) {
        return _0x506af9();
    }, 'JeRFU': function (_0x3cfd68, _0x106eef) {
        return _0x3cfd68(_0x106eef);
    }, 'TvHWh': function (_0x1acc72, _0x40d122) {
        return _0x1acc72(_0x40d122);
    }, 'wqAzb': function (_0x18c128, _0x483605, _0x5ca63f) {
        return _0x18c128(_0x483605, _0x5ca63f);
    }, 'KRysx': _0x1d9887(0x151), 'BOJLJ': _0x1d9887(0x152), 'HGWUE': function (_0x1f508e, _0x4d77b5, _0x530bf0) {
        return _0x1f508e(_0x4d77b5, _0x530bf0);
    }, 'cHLio': _0x1d9887(0x153) };
_0x315578[_0x1d9887(0x154)](it, _0x315578[_0x1d9887(0x155)], async () => {
    const _0x2ec362 = _0x1d9887;
    appPort = await _0x315578[_0x2ec362(0x156)](findPort), app = await _0x315578[_0x2ec362(0x157)](launchApp, appDir, appPort, {});
    const _0x45b81c = await _0x315578[_0x2ec362(0x158)](makeRequest);

    expect(_0x45b81c)[_0x2ec362(0x159)]([{ 'title': _0x315578[_0x2ec362(0x15a)] }]), _0x315578[_0x2ec362(0x15b)](killApp, app);
}), _0x315578[_0x1d9887(0x154)](it, _0x315578[_0x1d9887(0x15c)], async () => {
    const _0x39dcae = _0x1d9887;
    await _0x315578[_0x39dcae(0x158)](startServer);
    const _0x4b1ca8 = await _0x315578[_0x39dcae(0x15d)](makeRequest);

    _0x315578[_0x39dcae(0x15e)](expect, _0x4b1ca8).toEqual([{ 'title': _0x315578[_0x39dcae(0x15a)] }]), _0x315578.JeRFU(killApp, server);
}), _0x315578.HGWUE(it, _0x315578[_0x1d9887(0x15f)], async () => {
    const _0x4d7d4e = _0x1d9887;
    await _0x315578.tYzrO(startServer);
    const _0x3667ce = await _0x315578[_0x4d7d4e(0x15d)](makeRequestWithInvalidContentType);

    _0x315578[_0x4d7d4e(0x160)](expect, _0x3667ce).toBe(200), killApp(server);
});
