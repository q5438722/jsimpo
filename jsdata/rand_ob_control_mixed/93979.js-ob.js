require('../spec_helper');
const _ = require('lodash'), http = require('http'), Bluebird = require('bluebird'), Request = require(root + 'lib/request'), snapshot = require('snap-shot-it'), request = Request({ 'timeout': 0x64 }), testAttachingCookiesWith = function (_0x37f86e) {
        const _0x3d3c32 = {
                'eZLzn': 'args.1',
                'gSpdF': 'set-cookie',
                'KtzdJ': function (_0x3209ac, _0x583079) {
                    return _0x3209ac(_0x583079);
                },
                'Pxkhn': 'setCookiesOnBrowser',
                'JxMev': 'setRequestCookieHeader',
                'CeNfS': 'http://localhost:1234',
                'ogRgm': 'one=1',
                'OxlFn': '/second',
                'rjrks': 'two=2',
                'vOktw': '/third',
                'uhkcm': 'three=3',
                'gOUOA': function (_0x28eff4) {
                    return _0x28eff4();
                }
            }, _0x287c92 = sinon['spy'](request, _0x3d3c32['Pxkhn']), _0x333f80 = sinon['spy'](request, _0x3d3c32['JxMev']);
        return _0x3d3c32['KtzdJ'](nock, _0x3d3c32['CeNfS'])['get']('/')['reply'](0x12e, '', {
            'set-cookie': _0x3d3c32['ogRgm'],
            'location': _0x3d3c32['OxlFn']
        })['get'](_0x3d3c32['OxlFn'])['reply'](0x12e, '', {
            'set-cookie': _0x3d3c32['rjrks'],
            'location': _0x3d3c32['vOktw']
        })['get'](_0x3d3c32['vOktw'])['reply'](0xc8, '', { 'set-cookie': _0x3d3c32['uhkcm'] }), _0x3d3c32['gOUOA'](_0x37f86e)['then'](() => {
            const _0x198bd9 = { 'wQpgk': _0x3d3c32['gSpdF'] };
            return _0x3d3c32['KtzdJ'](snapshot, {
                'setCalls': _0x287c92['getCalls']()['map'](_0x37c07d => {
                    return {
                        'currentUrl': _0x37c07d['args'][0x1],
                        'setCookie': _0x37c07d['args'][0x0]['headers'][_0x198bd9['wQpgk']]
                    };
                }),
                'getCalls': _0x333f80['getCalls']()['map'](_0x1dbc13 => {
                    return { 'newUrl': _['get'](_0x1dbc13, _0x3d3c32['eZLzn']) };
                })
            });
        });
    };
describe('lib/request', () => {
    const _0x487e3c = {
        'LiWlI': 'set:cookie',
        'FFSzX': 'get:cookies',
        'DeoId': function (_0x1e5d69, _0x1bf5ca) {
            return _0x1e5d69(_0x1bf5ca);
        },
        'qFsuL': 'object',
        'JPDgw': 'ECONNRESET',
        'vlxVU': function (_0x54ca6b, _0x17b063) {
            return _0x54ca6b(_0x17b063);
        },
        'uXDkO': 'ECONNREFUSED',
        'BeNuY': function (_0x39dc06, _0x4ea4cc) {
            return _0x39dc06(_0x4ea4cc);
        },
        'JNISy': function (_0xc5a024, _0x33641c) {
            return _0xc5a024(_0x33641c);
        },
        'RgthC': function (_0x49e0b4, _0x1d7c48, _0x4425ee) {
            return _0x49e0b4(_0x1d7c48, _0x4425ee);
        },
        'ZoIvh': 'divides\x20by\x2010\x20when\x20delay\x20>=\x201000\x20and\x20err.code\x20=\x20ECONNREFUSED',
        'USWGI': function (_0x151770, _0x495b29, _0x14cea4) {
            return _0x151770(_0x495b29, _0x14cea4);
        },
        'DAVAB': 'does\x20not\x20divide\x20by\x2010\x20when\x20err.code\x20!=\x20ECONNREFUSED',
        'ddsZm': function (_0x5bb839, _0x37cb43, _0x453d72) {
            return _0x5bb839(_0x37cb43, _0x453d72);
        },
        'qVZEI': 'calls\x20onElse\x20when\x20delaysRemaining\x20is\x20exhausted',
        'bjUas': 'delaysRemaining\x20to\x20retryIntervals\x20clone',
        'zHrwi': 'retryIntervals\x20to\x20[0,\x201000,\x202000,\x202000]\x20by\x20default',
        'ByULX': function (_0x2e282a, _0x11bc2d, _0x317920) {
            return _0x2e282a(_0x11bc2d, _0x317920);
        },
        'khSPw': 'delaysRemaining\x20can\x20be\x20overridden',
        'sKplp': 'bar',
        'jsHly': 'body',
        'SOMbp': 'Not\x20Found',
        'rtkQE': function (_0x3ba9a4, _0x339256) {
            return _0x3ba9a4(_0x339256);
        },
        'XMCkL': '<html>foo</html>',
        'OLTIK': function (_0x12ff63, _0x3e6854) {
            return _0x12ff63(_0x3e6854);
        },
        'jNfuC': function (_0xf61b56, _0x5213d6) {
            return _0xf61b56(_0x5213d6);
        },
        'GZshv': function (_0x2eb8c3, _0x4d2768, _0x191652) {
            return _0x2eb8c3(_0x4d2768, _0x191652);
        },
        'vUsvi': 'sets\x20status\x20to\x20statusCode\x20and\x20deletes\x20statusCode',
        'CXJTf': function (_0x36df36, _0x5f196b, _0x24170b) {
            return _0x36df36(_0x5f196b, _0x24170b);
        },
        'UMEtQ': 'picks\x20out\x20status\x20body\x20and\x20headers',
        'fScYK': 'error',
        'ysrRw': function (_0x6e475, _0x9b8a85) {
            return _0x6e475(_0x9b8a85);
        },
        'EjeGC': 'ESOCKETTIMEDOUT',
        'XnYmR': function (_0x451e36, _0x117367) {
            return _0x451e36(_0x117367);
        },
        'zWYCO': 'http://localhost:9988/never-ends',
        'dAYHj': 'retry',
        'GVTCX': 'ENOTFOUND',
        'gMwSS': 'http://will-never-exist.invalid.example.com',
        'rxEjn': function (_0x526978, _0x3163a8, _0x509ecf) {
            return _0x526978(_0x3163a8, _0x509ecf);
        },
        'jyLdl': 'does\x20not\x20retry\x20on\x20a\x20timeout',
        'HpZTo': 'retries\x204x\x20on\x20a\x20connection\x20reset',
        'anhBJ': function (_0xccef64, _0x2edb54, _0x39734d) {
            return _0xccef64(_0x2edb54, _0x39734d);
        },
        'KCmbE': 'retries\x204x\x20on\x20a\x20NXDOMAIN\x20(ENOTFOUND)',
        'cUSCS': '/never-ends',
        'XGimH': 'foo\x0a',
        'wQpyD': '/econnreset',
        'ZDwdd': function (_0x1b5a15, _0x3968d2) {
            return _0x1b5a15(_0x3968d2);
        },
        'cpbGj': 'http://localhost:9988/econnreset',
        'qUnSQ': 'should\x20not\x20reach',
        'lbQuw': function (_0x1f7719, _0x53260f) {
            return _0x1f7719(_0x53260f);
        },
        'JTNwu': function (_0x4cf6a3, _0x2b3c9f, _0x177a7b) {
            return _0x4cf6a3(_0x2b3c9f, _0x177a7b);
        },
        'cCNIk': 'retries\x20for\x20streams',
        'HpAhU': function (_0x47847f, _0x1f1584, _0x53d641) {
            return _0x47847f(_0x1f1584, _0x53d641);
        },
        'JEFgB': 'retries\x20for\x20promises',
        'kHlwi': 'http://www.github.com',
        'tVvKp': '/foo',
        'vAZmY': 'http://www.github.com/foo',
        'FibnE': function (_0x1a29b7, _0x4c90c2) {
            return _0x1a29b7(_0x4c90c2);
        },
        'YarFZ': 'hello',
        'sDvbP': 'text/html',
        'pHyXF': 'foobarbaz',
        'SCUVg': function (_0x2202b8, _0x2a8afd) {
            return _0x2202b8(_0x2a8afd);
        },
        'NSdpO': 'http://localhost:8080',
        'GZFcO': '/status.json',
        'EBHpF': 'application/json',
        'HeMce': 'http://localhost:8080/status.json',
        'wxlgY': function (_0x3edc0d, _0x3e9215) {
            return _0x3edc0d(_0x3e9215);
        },
        'yABBc': 'application/vnd.api+json',
        'TIogm': '123',
        'ewHcc': 'text/plain',
        'JyTDX': 'http://localhost:8080/foo',
        'FUfbp': function (_0x6632ee, _0xae024d) {
            return _0x6632ee(_0xae024d);
        },
        'fCjzT': 'derp',
        'MmhhP': 'user-agent',
        'EmzZE': function (_0x2cf2eb, _0x595f82) {
            return _0x2cf2eb(_0x595f82);
        },
        'rWOuC': 'custom-agent',
        'tavGB': 'test',
        'QVPpH': function (_0x1f6c5f, _0x2ad719) {
            return _0x1f6c5f(_0x2ad719);
        },
        'kxHDe': 'accept',
        'bYCLn': '/headers',
        'xwwgl': 'http://localhost:8080/headers',
        'sDOpS': function (_0x15ea42, _0x54e7f9, _0x380544) {
            return _0x15ea42(_0x54e7f9, _0x380544);
        },
        'myrmV': 'sets\x20to\x20*/*\x20by\x20default',
        'idkWx': 'can\x20override\x20accept\x20header',
        'MSODQ': 'can\x20override\x20Accept\x20header',
        'LNbRL': 'can\x20accept\x20qs',
        'nwRaY': function (_0x57d807, _0x312eb1) {
            return _0x57d807(_0x312eb1);
        },
        'kzFTi': 'Content-Type',
        'RvICK': 'application/x-www-form-urlencoded',
        'MUXan': '/login',
        'EfQDt': 'foo=bar&baz=quux',
        'CgIrz': '<html></html>',
        'phpUX': function (_0x48e72e, _0x109d65) {
            return _0x48e72e(_0x109d65);
        },
        'RFYCr': 'http://localhost:8080/login',
        'spQFO': 'POST',
        'wySNt': 'quux',
        'zAYjk': function (_0x993af, _0x1c7b5e) {
            return _0x993af(_0x1c7b5e);
        },
        'sWjAG': 'init',
        'Psgqa': function (_0x4f5956, _0x7c2a34) {
            return _0x4f5956(_0x7c2a34);
        },
        'UihIo': 'takes\x20converts\x20body\x20to\x20x-www-form-urlencoded\x20and\x20sets\x20header',
        'hNYQG': 'does\x20not\x20send\x20body',
        'rRbhg': 'does\x20not\x20set\x20json=true',
        'rhOXD': function (_0x20a6a5, _0x3d5ad3) {
            return _0x20a6a5(_0x3d5ad3);
        },
        'DfAOP': '2|3|0|7|4|1|6|8|5',
        'LdGIb': 'status',
        'iiJrc': 'headers',
        'TLZlT': 'duration',
        'XHkGb': 'isOkStatusCode',
        'MAVJR': 'statusText',
        'MdVbm': 'allRequestResponses',
        'Apdgl': 'requestBody',
        'HdLJK': 'requestHeaders',
        'kgOxN': function (_0x4cdd16, _0x5b559a) {
            return _0x4cdd16(_0x5b559a);
        },
        'OpVbS': '*/*',
        'oSwrp': 'gzip,\x20deflate',
        'eyOmd': 'keep-alive',
        'yunHu': 'www.github.com',
        'tyKwj': '0|9|6|1|8|4|2|5|7|3',
        'pGWxB': 'redirects',
        'ewDuL': 'log\x20in',
        'GTzBF': 'http://www.github.com/dashboard',
        'vLrRF': '/auth',
        'WtRvI': 'http://www.github.com/auth',
        'qLYtw': 'http://www.github.com/login',
        'ecGGF': function (_0x14c647, _0x16cd7e) {
            return _0x14c647(_0x16cd7e);
        },
        'bnqdm': '301:\x20http://www.github.com/auth',
        'CAoXr': '302:\x20http://www.github.com/login',
        'FSHPR': function (_0x4cb962, _0x1843d7) {
            return _0x4cb962(_0x1843d7);
        },
        'ROskz': function (_0x38d8fb, _0x3b0f68) {
            return _0x38d8fb(_0x3b0f68);
        },
        'SGmdr': '/dashboard',
        'bjRAL': 'should\x20have\x20failed\x20but\x20didnt',
        'NAyle': function (_0x357381, _0x5cfdd3) {
            return _0x357381(_0x5cfdd3);
        },
        'kWkaM': 'Error:\x20connect\x20ECONNREFUSED\x20127.0.0.1:1111',
        'edaja': 'http://localhost:1111/foo',
        'VUpeY': '{bad:\x20\x27json\x27}',
        'assQS': 'Number',
        'Fyego': 'it\x20worked',
        'EDQYe': function (_0x2522aa, _0x4dc9a8) {
            return _0x2522aa(_0x4dc9a8);
        },
        'zlemM': 'connection',
        'sSvys': 'true',
        'mcIGZ': '/foo?bar=baz&q=1',
        'IbFZB': 'baz',
        'XBQTn': function (_0x291ea7, _0x258124) {
            return _0x291ea7(_0x258124);
        },
        'KoNyE': 'login',
        'gEVKx': 'http://localhost:8080/dashboard',
        'BTsEz': function (_0x475b0c, _0xb4b628) {
            return _0x475b0c(_0xb4b628);
        },
        'dwETV': function (_0x137681, _0x455b7b) {
            return _0x137681(_0x455b7b);
        },
        'muxwV': 'https://www.google.com/login',
        'uPktk': 'redirectedToUrl',
        'mYIaL': function (_0x3675df, _0x2aed6e) {
            return _0x3675df(_0x2aed6e);
        },
        'qOIAp': 'dashboard',
        'PaKcr': 'http://localhost:1234/',
        'YwLUB': 'by\x20default\x20follow\x20redirects',
        'mDbji': function (_0x331e77, _0x38b939, _0x5da41e) {
            return _0x331e77(_0x38b939, _0x5da41e);
        },
        'AwFRB': 'follows\x20non-GET\x20redirects\x20by\x20default',
        'VUXZF': 'can\x20turn\x20off\x20following\x20redirects',
        'qrdjE': function (_0x243f64, _0x4c4ae8, _0x2461d5) {
            return _0x243f64(_0x4c4ae8, _0x2461d5);
        },
        'EvwuF': 'resolves\x20redirectedToUrl\x20on\x20relative\x20redirects',
        'gtBXp': 'resolves\x20redirectedToUrl\x20to\x20another\x20domain',
        'iViwx': 'does\x20not\x20included\x20redirectedToUrl\x20when\x20following\x20redirects',
        'fswYm': function (_0xe7bef, _0x18d6a4, _0x14470b) {
            return _0xe7bef(_0x18d6a4, _0x14470b);
        },
        'EXVvT': 'gets\x20+\x20attaches\x20the\x20cookies\x20at\x20each\x20redirect',
        'osaHD': 'http://localhost:9988/foo',
        'rJGcV': 'אבגד',
        'klKWg': 'TypeError\x20[ERR_INVALID_CHAR]:\x20Invalid\x20character\x20in\x20header\x20content\x20[\x22x-text\x22]',
        'ejTlH': 'should\x20have\x20failed',
        'cBBHn': function (_0x3c36a9, _0x14b4ff) {
            return _0x3c36a9(_0x14b4ff);
        },
        'MOlDW': 'recovers\x20from\x20bad\x20headers',
        'jHtxU': 'handles\x20weird\x20content\x20in\x20the\x20body\x20just\x20fine',
        'xnWmf': 'sets\x20strictSSL=false',
        'UOSXx': 'sets\x20simple=false',
        'tdegh': 'sets\x20resolveWithFullResponse=true',
        'POAbc': function (_0xe9de47, _0x142491, _0x30c9ad) {
            return _0xe9de47(_0x142491, _0x30c9ad);
        },
        'kfGKd': 'includes\x20redirects',
        'fneWM': 'catches\x20errors',
        'jEOfU': 'parses\x20response\x20body\x20as\x20json\x20if\x20content-type\x20application/json\x20response\x20headers',
        'RWZpd': function (_0x305e00, _0x1dac21, _0x3e9e4b) {
            return _0x305e00(_0x1dac21, _0x3e9e4b);
        },
        'brkXC': 'parses\x20response\x20body\x20as\x20json\x20if\x20content-type\x20application/vnd.api+json\x20response\x20headers',
        'uDwzV': 'revives\x20from\x20parsing\x20bad\x20json',
        'kfgfU': 'sets\x20duration\x20on\x20response',
        'jZfpk': function (_0x3a2481, _0x43f554, _0x42d1ff) {
            return _0x3a2481(_0x43f554, _0x42d1ff);
        },
        'LpgPj': 'sends\x20up\x20user-agent\x20headers',
        'wmrTO': function (_0x4007f0, _0x5d0e30, _0x4fbb84) {
            return _0x4007f0(_0x5d0e30, _0x4fbb84);
        },
        'HRGdX': 'sends\x20connection:\x20keep-alive\x20by\x20default',
        'WkXvR': function (_0x3bd023, _0x334e2b, _0x1824a3) {
            return _0x3bd023(_0x334e2b, _0x1824a3);
        },
        'NUWxu': 'lower\x20cases\x20headers',
        'dKKxy': 'allows\x20overriding\x20user-agent\x20in\x20headers',
        'kBavT': 'accept\x20header',
        'dGLjd': 'followRedirect',
        'OOqvS': 'form=true',
        'HFmnT': 'bad\x20headers',
        'mEbGD': 'response',
        'NYByd': function (_0x1df75e) {
            return _0x1df75e();
        },
        'xlfdE': function (_0x4c0308) {
            return _0x4c0308();
        },
        'ZsWjx': function (_0x59f03b, _0x4f91e3) {
            return _0x59f03b(_0x4f91e3);
        },
        'dRpDs': function (_0x491620, _0x494c16) {
            return _0x491620(_0x494c16);
        },
        'FLmcc': 'create',
        'jYwNY': function (_0x45d9da, _0x107525, _0x5c2c31) {
            return _0x45d9da(_0x107525, _0x5c2c31);
        },
        'PBfpH': function (_0x18f95b, _0x5a0b3e, _0x1301c3) {
            return _0x18f95b(_0x5a0b3e, _0x1301c3);
        },
        'fgTtu': 'is\x20defined',
        'DVeKd': '#getDelayForRetry',
        'tIVin': '#setDefaults',
        'vTtlH': '#normalizeResponse',
        'fibyJ': function (_0x382349, _0x1d8587, _0x23bf2b) {
            return _0x382349(_0x1d8587, _0x23bf2b);
        },
        'KUuZX': '#create',
        'mNuaZ': '#sendPromise',
        'plOYw': function (_0x4a2393, _0x37d948, _0x5b0ecd) {
            return _0x4a2393(_0x37d948, _0x5b0ecd);
        },
        'gClLX': '#sendStream'
    };
    _0x487e3c['dRpDs'](beforeEach, function () {
        this['fn'] = sinon['stub'](), this['fn']['withArgs'](_0x487e3c['LiWlI'])['resolves']({}), this['fn']['withArgs'](_0x487e3c['FFSzX'])['resolves']([]);
    }), _0x487e3c['PBfpH'](it, _0x487e3c['fgTtu'], () => {
        _0x487e3c['DeoId'](expect, request)['to']['be']['an'](_0x487e3c['qFsuL']);
    }), _0x487e3c['PBfpH'](context, _0x487e3c['DVeKd'], () => {
        const _0x358b62 = {
            'hAdFo': _0x487e3c['uXDkO'],
            'HTDDc': function (_0x409b18, _0x255530) {
                return _0x487e3c['BeNuY'](_0x409b18, _0x255530);
            },
            'POpWm': function (_0x4e0f80, _0x24a88a) {
                return _0x487e3c['JNISy'](_0x4e0f80, _0x24a88a);
            },
            'ooeVZ': function (_0x2b44e0, _0x1b473a) {
                return _0x487e3c['JNISy'](_0x2b44e0, _0x1b473a);
            }
        };
        _0x487e3c['RgthC'](it, _0x487e3c['ZoIvh'], () => {
            const _0x3687bb = [
                    0x1,
                    0x2,
                    0x3,
                    0x4
                ], _0x21b7ea = [
                    0x0,
                    0x3e7,
                    0x3e8,
                    0x7d0
                ], _0x3b2489 = { 'code': _0x358b62['hAdFo'] }, _0x1699ee = sinon['stub']();
            _0x3687bb['forEach'](() => {
                return request['getDelayForRetry']({
                    'err': _0x3b2489,
                    'onNext': _0x1699ee,
                    'retryIntervals': _0x3687bb,
                    'delaysRemaining': _0x21b7ea
                });
            }), _0x358b62['HTDDc'](expect, _0x21b7ea)['to']['be']['empty'], _0x358b62['POpWm'](expect, _0x1699ee['args'])['to']['deep']['eq']([
                [
                    0x0,
                    0x1
                ],
                [
                    0x3e7,
                    0x2
                ],
                [
                    0x64,
                    0x3
                ],
                [
                    0xc8,
                    0x4
                ]
            ]);
        }), _0x487e3c['USWGI'](it, _0x487e3c['DAVAB'], () => {
            const _0x536b63 = [
                    0x1,
                    0x2,
                    0x3,
                    0x4
                ], _0x5719e3 = [
                    0x7d0,
                    0x7d0,
                    0x7d0,
                    0x7d0
                ], _0x2d07eb = { 'code': _0x487e3c['JPDgw'] }, _0x5f4381 = sinon['stub']();
            request['getDelayForRetry']({
                'err': _0x2d07eb,
                'onNext': _0x5f4381,
                'retryIntervals': _0x536b63,
                'delaysRemaining': _0x5719e3
            }), _0x487e3c['vlxVU'](expect, _0x5719e3)['to']['have']['length'](0x3), _0x487e3c['vlxVU'](expect, _0x5f4381)['to']['be']['calledWith'](0x7d0, 0x1);
        }), _0x487e3c['ddsZm'](it, _0x487e3c['qVZEI'], () => {
            const _0x47be63 = [
                    0x1,
                    0x2,
                    0x3,
                    0x4
                ], _0x2dba56 = [], _0x346198 = sinon['stub'](), _0x4cf8b0 = sinon['stub']();
            request['getDelayForRetry']({
                'onElse': _0x4cf8b0,
                'onNext': _0x346198,
                'retryIntervals': _0x47be63,
                'delaysRemaining': _0x2dba56
            }), _0x358b62['POpWm'](expect, _0x4cf8b0)['to']['be']['calledWithExactly'](), _0x358b62['ooeVZ'](expect, _0x346198)['not']['to']['be']['called'];
        });
    }), _0x487e3c['PBfpH'](context, _0x487e3c['tIVin'], () => {
        _0x487e3c['ddsZm'](it, _0x487e3c['bjUas'], () => {
            const _0x21da16 = [
                    0x1,
                    0x2,
                    0x3,
                    0x4
                ], _0x29db82 = request['setDefaults']({ 'retryIntervals': _0x21da16 });
            _0x487e3c['JNISy'](expect, _0x29db82['retryIntervals'])['to']['eq'](_0x21da16), _0x487e3c['JNISy'](expect, _0x29db82['delaysRemaining'])['not']['to']['eq'](_0x21da16), _0x487e3c['JNISy'](expect, _0x29db82['delaysRemaining'])['to']['deep']['eq'](_0x21da16);
        }), _0x487e3c['ddsZm'](it, _0x487e3c['zHrwi'], () => {
            const _0x5202bf = request['setDefaults']({});
            _0x487e3c['JNISy'](expect, _0x5202bf['retryIntervals'])['to']['deep']['eq']([
                0x0,
                0x3e8,
                0x7d0,
                0x7d0
            ]);
        }), _0x487e3c['ByULX'](it, _0x487e3c['khSPw'], () => {
            const _0x57a9ed = [0x1], _0x24b2c2 = request['setDefaults']({ 'delaysRemaining': _0x57a9ed });
            _0x487e3c['JNISy'](expect, _0x24b2c2['delaysRemaining'])['to']['eq'](_0x57a9ed);
        });
    }), _0x487e3c['PBfpH'](context, _0x487e3c['vTtlH'], () => {
        _0x487e3c['jNfuC'](beforeEach, function () {
            this['push'] = sinon['stub']();
        }), _0x487e3c['GZshv'](it, _0x487e3c['vUsvi'], function () {
            _0x487e3c['JNISy'](expect, request['normalizeResponse'](this['push'], {
                'statusCode': 0x194,
                'request': {
                    'headers': { 'foo': _0x487e3c['sKplp'] },
                    'body': _0x487e3c['jsHly']
                }
            }))['to']['deep']['eq']({
                'status': 0x194,
                'statusText': _0x487e3c['SOMbp'],
                'isOkStatusCode': ![],
                'requestHeaders': { 'foo': _0x487e3c['sKplp'] },
                'requestBody': _0x487e3c['jsHly']
            }), _0x487e3c['rtkQE'](expect, this['push'])['to']['be']['calledOnce'];
        }), _0x487e3c['CXJTf'](it, _0x487e3c['UMEtQ'], function () {
            _0x487e3c['rtkQE'](expect, request['normalizeResponse'](this['push'], {
                'foo': _0x487e3c['sKplp'],
                'req': {},
                'originalHeaders': {},
                'headers': { 'Content-Length': 0x32 },
                'body': _0x487e3c['XMCkL'],
                'statusCode': 0xc8,
                'request': {
                    'headers': { 'foo': _0x487e3c['sKplp'] },
                    'body': _0x487e3c['jsHly']
                }
            }))['to']['deep']['eq']({
                'body': _0x487e3c['XMCkL'],
                'headers': { 'Content-Length': 0x32 },
                'status': 0xc8,
                'statusText': 'OK',
                'isOkStatusCode': !![],
                'requestHeaders': { 'foo': _0x487e3c['sKplp'] },
                'requestBody': _0x487e3c['jsHly']
            }), _0x487e3c['OLTIK'](expect, this['push'])['to']['be']['calledOnce'];
        });
    }), _0x487e3c['fibyJ'](context, _0x487e3c['KUuZX'], () => {
        const _0x329802 = {
            'xXVMx': _0x487e3c['cUSCS'],
            'eGxYh': _0x487e3c['XGimH'],
            'XqIfv': _0x487e3c['wQpyD'],
            'tDuSf': _0x487e3c['fScYK'],
            'fhDGA': function (_0x1cba0d, _0x5cd91b) {
                return _0x487e3c['ZDwdd'](_0x1cba0d, _0x5cd91b);
            },
            'LIFNs': _0x487e3c['JPDgw'],
            'QEjNX': _0x487e3c['cpbGj'],
            'Aqses': _0x487e3c['dAYHj'],
            'kmSXE': function (_0x25e652, _0x4a9e16) {
                return _0x487e3c['ZDwdd'](_0x25e652, _0x4a9e16);
            },
            'NMxQV': _0x487e3c['qUnSQ'],
            'hPcSB': function (_0x39ef73, _0x3e8e1e) {
                return _0x487e3c['lbQuw'](_0x39ef73, _0x3e8e1e);
            },
            'zGega': _0x487e3c['EjeGC'],
            'IEzvq': _0x487e3c['zWYCO'],
            'rYWdv': function (_0x2ea834, _0x18d96e) {
                return _0x487e3c['lbQuw'](_0x2ea834, _0x18d96e);
            },
            'ZwGiT': function (_0x22111c, _0x2b54c7, _0x18b15c) {
                return _0x487e3c['JTNwu'](_0x22111c, _0x2b54c7, _0x18b15c);
            },
            'ORpEq': _0x487e3c['jyLdl'],
            'OPzfP': _0x487e3c['HpZTo']
        };
        _0x487e3c['lbQuw'](beforeEach, function (_0x22472d) {
            this['hits'] = 0x0, this['srv'] = http['createServer']((_0x3d0d4e, _0x33f06b) => {
                this['hits']++;
                switch (_0x3d0d4e['url']) {
                case _0x329802['xXVMx']:
                    _0x33f06b['writeHead'](0xc8);
                    return _0x33f06b['write'](_0x329802['eGxYh']);
                case _0x329802['XqIfv']:
                    return _0x3d0d4e['socket']['destroy']();
                default:
                    break;
                }
            }), this['srv']['listen'](0x2704, _0x22472d);
        }), _0x487e3c['lbQuw'](afterEach, function () {
            return this['srv']['close']();
        }), _0x487e3c['JTNwu'](context, _0x487e3c['cCNIk'], () => {
            const _0x4cc03d = {
                'mbGqW': _0x487e3c['fScYK'],
                'XXkHX': function (_0x3df3d1, _0x16b72b) {
                    return _0x487e3c['ysrRw'](_0x3df3d1, _0x16b72b);
                },
                'LkiMC': _0x487e3c['EjeGC'],
                'Bbeai': function (_0x11ed83, _0x1f5f16) {
                    return _0x487e3c['XnYmR'](_0x11ed83, _0x1f5f16);
                },
                'pcwia': _0x487e3c['zWYCO'],
                'EYAas': _0x487e3c['dAYHj'],
                'klglg': function (_0x120048, _0x1b7dc) {
                    return _0x487e3c['XnYmR'](_0x120048, _0x1b7dc);
                },
                'DZHYM': _0x487e3c['GVTCX'],
                'IugWu': function (_0x3bf7de, _0x315dea) {
                    return _0x487e3c['XnYmR'](_0x3bf7de, _0x315dea);
                },
                'lFugB': _0x487e3c['gMwSS']
            };
            _0x487e3c['rxEjn'](it, _0x487e3c['jyLdl'], () => {
                const _0x5d69aa = {
                        'DWvIu': _0x4cc03d['mbGqW'],
                        'LLyaX': function (_0x2978b9, _0x4c70a1) {
                            return _0x4cc03d['XXkHX'](_0x2978b9, _0x4c70a1);
                        },
                        'xToYZ': _0x4cc03d['LkiMC'],
                        'Pmjff': function (_0x284314, _0x1c13cb) {
                            return _0x4cc03d['Bbeai'](_0x284314, _0x1c13cb);
                        }
                    }, _0x3fb80f = request['setDefaults']({
                        'url': _0x4cc03d['pcwia'],
                        'timeout': 0x3e8
                    }), _0x21efc0 = request['create'](_0x3fb80f);
                let _0x12d47f = 0x0;
                _0x21efc0['on'](_0x4cc03d['EYAas'], () => {
                    _0x12d47f++;
                });
                const _0x3104ad = Bluebird['fromCallback'](_0x4172b4 => {
                    _0x21efc0['on'](_0x5d69aa['DWvIu'], _0x4172b4);
                });
                return _0x4cc03d['klglg'](expect, _0x3104ad)['to']['be']['rejected']['then'](_0x4c84d1 => {
                    _0x5d69aa['LLyaX'](expect, _0x4c84d1['code'])['to']['eq'](_0x5d69aa['xToYZ']), _0x5d69aa['Pmjff'](expect, _0x12d47f)['to']['eq'](0x0);
                });
            }), _0x487e3c['rxEjn'](it, _0x487e3c['HpZTo'], () => {
                const _0x46d1a0 = {
                        'hXano': _0x329802['tDuSf'],
                        'qSVax': function (_0x35fc81, _0x2028ce) {
                            return _0x329802['fhDGA'](_0x35fc81, _0x2028ce);
                        },
                        'uiAUG': _0x329802['LIFNs']
                    }, _0x5dfb7f = {
                        'url': _0x329802['QEjNX'],
                        'retryIntervals': [
                            0x0,
                            0x1,
                            0x2,
                            0x3
                        ],
                        'timeout': 0x3e8
                    }, _0x3a75ec = request['create'](_0x5dfb7f);
                let _0x3f4121 = 0x0;
                _0x3a75ec['on'](_0x329802['Aqses'], () => {
                    _0x3f4121++;
                });
                const _0x8d77ff = Bluebird['fromCallback'](_0x495a0d => {
                    _0x3a75ec['on'](_0x46d1a0['hXano'], _0x495a0d);
                });
                return _0x329802['kmSXE'](expect, _0x8d77ff)['to']['be']['rejected']['then'](_0x31c373 => {
                    _0x46d1a0['qSVax'](expect, _0x31c373['code'])['to']['eq'](_0x46d1a0['uiAUG']), _0x46d1a0['qSVax'](expect, _0x3f4121)['to']['eq'](0x4);
                });
            }), _0x487e3c['anhBJ'](it, _0x487e3c['KCmbE'], () => {
                nock['enableNetConnect']();
                const _0x117082 = {
                        'url': _0x4cc03d['lFugB'],
                        'retryIntervals': [
                            0x0,
                            0x1,
                            0x2,
                            0x3
                        ],
                        'timeout': 0x3e8
                    }, _0x276222 = request['create'](_0x117082);
                let _0x1ee03d = 0x0;
                _0x276222['on'](_0x4cc03d['EYAas'], () => {
                    _0x1ee03d++;
                });
                const _0x4b7b29 = Bluebird['fromCallback'](_0x2e3167 => {
                    _0x276222['on'](_0x4cc03d['mbGqW'], _0x2e3167);
                });
                return _0x4cc03d['IugWu'](expect, _0x4b7b29)['to']['be']['rejected']['then'](_0x293dd2 => {
                    _0x4cc03d['klglg'](expect, _0x293dd2['code'])['to']['eq'](_0x4cc03d['DZHYM']), _0x4cc03d['IugWu'](expect, _0x1ee03d)['to']['eq'](0x4);
                });
            });
        }), _0x487e3c['HpAhU'](context, _0x487e3c['JEFgB'], () => {
            const _0xa8b5f = {
                'aeAzU': _0x329802['NMxQV'],
                'ruwSA': function (_0x3cfb9f, _0x52ca26) {
                    return _0x329802['hPcSB'](_0x3cfb9f, _0x52ca26);
                },
                'usTTx': _0x329802['zGega'],
                'fqtOm': _0x329802['IEzvq'],
                'vXbJt': function (_0x3a03ed, _0x3bc2f7) {
                    return _0x329802['hPcSB'](_0x3a03ed, _0x3bc2f7);
                },
                'hKehj': _0x329802['LIFNs'],
                'IFtEh': function (_0x488ef7, _0x518444) {
                    return _0x329802['rYWdv'](_0x488ef7, _0x518444);
                }
            };
            _0x329802['ZwGiT'](it, _0x329802['ORpEq'], function () {
                const _0x21274d = {
                    'url': _0xa8b5f['fqtOm'],
                    'timeout': 0x64
                };
                return request['create'](_0x21274d, !![])['then'](() => {
                    throw new Error(_0xa8b5f['aeAzU']);
                })['catch'](_0x1ca7dd => {
                    _0xa8b5f['ruwSA'](expect, _0x1ca7dd['error']['code'])['to']['eq'](_0xa8b5f['usTTx']), _0xa8b5f['ruwSA'](expect, this['hits'])['to']['eq'](0x1);
                });
            }), _0x329802['ZwGiT'](it, _0x329802['OPzfP'], function () {
                const _0x8d4c5c = {
                    'url': _0x329802['QEjNX'],
                    'retryIntervals': [
                        0x0,
                        0x1,
                        0x2,
                        0x3
                    ],
                    'timeout': 0xfa
                };
                return request['create'](_0x8d4c5c, !![])['then'](() => {
                    throw new Error(_0xa8b5f['aeAzU']);
                })['catch'](_0x7aef33 => {
                    _0xa8b5f['vXbJt'](expect, _0x7aef33['error']['code'])['to']['eq'](_0xa8b5f['hKehj']), _0xa8b5f['IFtEh'](expect, this['hits'])['to']['eq'](0x5);
                });
            });
        });
    }), _0x487e3c['fibyJ'](context, _0x487e3c['mNuaZ'], () => {
        const _0x501890 = {
            'EXWGa': function (_0x4ce7c6, _0x11572d) {
                return _0x487e3c['Psgqa'](_0x4ce7c6, _0x11572d);
            },
            'gUCtc': _0x487e3c['sWjAG'],
            'ywciT': function (_0x3404cd, _0x3e8591) {
                return _0x487e3c['rhOXD'](_0x3404cd, _0x3e8591);
            },
            'CWCgx': _0x487e3c['kHlwi'],
            'KJXid': _0x487e3c['tVvKp'],
            'Wfxte': _0x487e3c['YarFZ'],
            'UYlGU': _0x487e3c['sDvbP'],
            'ugewd': _0x487e3c['vAZmY'],
            'Etnpc': _0x487e3c['DfAOP'],
            'eipkP': function (_0xbdc264, _0x1a432f) {
                return _0x487e3c['rhOXD'](_0xbdc264, _0x1a432f);
            },
            'cwDZF': function (_0x3d34ec, _0x12fdb4) {
                return _0x487e3c['rhOXD'](_0x3d34ec, _0x12fdb4);
            },
            'BSoxp': _0x487e3c['LdGIb'],
            'UqcND': _0x487e3c['jsHly'],
            'tpfSN': _0x487e3c['iiJrc'],
            'cmqUw': _0x487e3c['TLZlT'],
            'AoYyK': _0x487e3c['XHkGb'],
            'FUPyA': _0x487e3c['MAVJR'],
            'XKekw': _0x487e3c['MdVbm'],
            'DCzZc': _0x487e3c['Apdgl'],
            'uFWzv': _0x487e3c['HdLJK'],
            'hZDjf': function (_0x5b5484, _0x54e141) {
                return _0x487e3c['kgOxN'](_0x5b5484, _0x54e141);
            },
            'SYZbH': _0x487e3c['pHyXF'],
            'bbUcr': _0x487e3c['OpVbS'],
            'HcSIJ': _0x487e3c['oSwrp'],
            'KRatE': _0x487e3c['eyOmd'],
            'nCoxB': _0x487e3c['yunHu'],
            'cHOEM': function (_0x445ae3, _0x38427e) {
                return _0x487e3c['kgOxN'](_0x445ae3, _0x38427e);
            },
            'ZVMBz': function (_0x4a7459, _0x5bce90) {
                return _0x487e3c['kgOxN'](_0x4a7459, _0x5bce90);
            },
            'OjYxZ': _0x487e3c['tyKwj'],
            'lJkUw': _0x487e3c['pGWxB'],
            'ntFVF': _0x487e3c['ewDuL'],
            'GOjDq': _0x487e3c['GTzBF'],
            'Rwkqk': _0x487e3c['EBHpF'],
            'RdMbv': _0x487e3c['vLrRF'],
            'suLTp': _0x487e3c['WtRvI'],
            'ILSul': _0x487e3c['MUXan'],
            'wAGLq': _0x487e3c['qLYtw'],
            'XsLzi': function (_0x4662fb, _0x48a006) {
                return _0x487e3c['ecGGF'](_0x4662fb, _0x48a006);
            },
            'tsPoO': _0x487e3c['bnqdm'],
            'RKMYM': _0x487e3c['CAoXr'],
            'fzXJg': function (_0x29b5dd, _0xa691d9) {
                return _0x487e3c['FSHPR'](_0x29b5dd, _0xa691d9);
            },
            'BAROf': function (_0x4cda09, _0x9a06e1) {
                return _0x487e3c['ROskz'](_0x4cda09, _0x9a06e1);
            },
            'YtfcM': _0x487e3c['SGmdr'],
            'xlHRH': _0x487e3c['bjRAL'],
            'bqjMN': function (_0x389ad9, _0x192da1) {
                return _0x487e3c['NAyle'](_0x389ad9, _0x192da1);
            },
            'izZeY': _0x487e3c['kWkaM'],
            'XASHt': _0x487e3c['edaja'],
            'rsgHh': _0x487e3c['VUpeY'],
            'zHmzR': _0x487e3c['NSdpO'],
            'UQITu': _0x487e3c['GZFcO'],
            'gNvfn': _0x487e3c['HeMce'],
            'EjRtC': function (_0x564f1f, _0x1df087) {
                return _0x487e3c['NAyle'](_0x564f1f, _0x1df087);
            },
            'WfXWJ': _0x487e3c['assQS'],
            'kmAuF': _0x487e3c['Fyego'],
            'YLOgJ': function (_0x8ebec7, _0x3f72e4) {
                return _0x487e3c['EDQYe'](_0x8ebec7, _0x3f72e4);
            },
            'TbLFO': _0x487e3c['zlemM'],
            'nlDyj': _0x487e3c['JyTDX'],
            'PncNe': function (_0x8d7483, _0x1f62f2) {
                return _0x487e3c['EDQYe'](_0x8d7483, _0x1f62f2);
            },
            'Itmeb': _0x487e3c['fCjzT'],
            'EYqhy': _0x487e3c['tavGB'],
            'fsrxp': _0x487e3c['sSvys'],
            'Jtxon': _0x487e3c['MmhhP'],
            'LYyJo': function (_0x2176aa, _0x3d1af9) {
                return _0x487e3c['EDQYe'](_0x2176aa, _0x3d1af9);
            },
            'ZVBOr': _0x487e3c['kxHDe'],
            'MddDB': _0x487e3c['bYCLn'],
            'TNPhf': _0x487e3c['xwwgl'],
            'bfdyB': function (_0x14f3f3, _0x5a1fd3) {
                return _0x487e3c['EDQYe'](_0x14f3f3, _0x5a1fd3);
            },
            'yzBjY': _0x487e3c['mcIGZ'],
            'cFFqv': _0x487e3c['IbFZB'],
            'gSStZ': function (_0x38d07a, _0x35ac24) {
                return _0x487e3c['XBQTn'](_0x38d07a, _0x35ac24);
            },
            'LdxRG': _0x487e3c['RFYCr'],
            'ALhDH': _0x487e3c['KoNyE'],
            'vrzQS': _0x487e3c['gEVKx'],
            'KCBRJ': function (_0xaf022f, _0x2ab993) {
                return _0x487e3c['BTsEz'](_0xaf022f, _0x2ab993);
            },
            'MTYgA': function (_0x41b922, _0x4fcf71) {
                return _0x487e3c['dwETV'](_0x41b922, _0x4fcf71);
            },
            'CBPwJ': _0x487e3c['muxwV'],
            'YiGzV': _0x487e3c['uPktk'],
            'dEaCl': function (_0x4fdc92, _0x98ef35) {
                return _0x487e3c['mYIaL'](_0x4fdc92, _0x98ef35);
            },
            'cbpql': _0x487e3c['qOIAp'],
            'cFuxV': _0x487e3c['spQFO'],
            'odPmq': function (_0x34aa55, _0x435063) {
                return _0x487e3c['mYIaL'](_0x34aa55, _0x435063);
            },
            'TzULY': _0x487e3c['PaKcr'],
            'YDGcY': function (_0x369e44, _0x259564) {
                return _0x487e3c['mYIaL'](_0x369e44, _0x259564);
            },
            'DdOoU': function (_0x498e65, _0x14ae7a, _0x4634f9) {
                return _0x487e3c['sDOpS'](_0x498e65, _0x14ae7a, _0x4634f9);
            },
            'eiJmO': _0x487e3c['YwLUB'],
            'qfnVM': function (_0x2547f1, _0x2be1aa, _0xe4dc8b) {
                return _0x487e3c['mDbji'](_0x2547f1, _0x2be1aa, _0xe4dc8b);
            },
            'sHTul': _0x487e3c['AwFRB'],
            'kICKM': _0x487e3c['VUXZF'],
            'NqcGa': function (_0x27eaa5, _0x2a33ae, _0x2bb11c) {
                return _0x487e3c['qrdjE'](_0x27eaa5, _0x2a33ae, _0x2bb11c);
            },
            'sWnAf': _0x487e3c['EvwuF'],
            'JegtI': _0x487e3c['gtBXp'],
            'MyPLI': _0x487e3c['iViwx'],
            'oVDMb': function (_0x17b9e6, _0x518ffe, _0x2f6d8a) {
                return _0x487e3c['fswYm'](_0x17b9e6, _0x518ffe, _0x2f6d8a);
            },
            'qjxwv': _0x487e3c['EXVvT'],
            'XdAQg': _0x487e3c['osaHD'],
            'XtzCm': _0x487e3c['rJGcV'],
            'OLSMi': _0x487e3c['klKWg'],
            'qOZgW': _0x487e3c['ejTlH'],
            'dTtNO': function (_0xa5192, _0x362788) {
                return _0x487e3c['cBBHn'](_0xa5192, _0x362788);
            },
            'aJKYh': function (_0x1cbb7b, _0x29e99e) {
                return _0x487e3c['cBBHn'](_0x1cbb7b, _0x29e99e);
            },
            'kqGrZ': _0x487e3c['MOlDW'],
            'VQaeX': _0x487e3c['jHtxU']
        };
        _0x487e3c['fswYm'](it, _0x487e3c['xnWmf'], function () {
            const _0x429fe9 = {
                    'hweYN': function (_0x5ef73c, _0xf239ec) {
                        return _0x501890['EXWGa'](_0x5ef73c, _0xf239ec);
                    }
                }, _0x1a28f6 = sinon['spy'](request['rp']['Request']['prototype'], _0x501890['gUCtc']);
            return _0x501890['ywciT'](nock, _0x501890['CWCgx'])['get'](_0x501890['KJXid'])['reply'](0xc8, _0x501890['Wfxte'], { 'Content-Type': _0x501890['UYlGU'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x501890['ugewd'],
                'cookies': ![]
            })['then'](() => {
                _0x429fe9['hweYN'](expect, _0x1a28f6)['to']['be']['calledWithMatch']({ 'strictSSL': ![] });
            });
        }), _0x487e3c['fswYm'](it, _0x487e3c['UOSXx'], function () {
            return _0x487e3c['lbQuw'](nock, _0x487e3c['kHlwi'])['get'](_0x487e3c['tVvKp'])['reply'](0x1f4, ''), request['sendPromise']({}, this['fn'], {
                'url': _0x487e3c['vAZmY'],
                'cookies': ![]
            });
        }), _0x487e3c['fswYm'](it, _0x487e3c['tdegh'], function () {
            return _0x487e3c['FibnE'](nock, _0x487e3c['kHlwi'])['get'](_0x487e3c['tVvKp'])['reply'](0xc8, _0x487e3c['YarFZ'], { 'Content-Type': _0x487e3c['sDvbP'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x487e3c['vAZmY'],
                'cookies': ![],
                'body': _0x487e3c['pHyXF']
            })['then'](_0xd51903 => {
                const _0x2fff40 = _0x501890['Etnpc']['split']('|');
                let _0x58158e = 0x0;
                while (!![]) {
                    switch (_0x2fff40[_0x58158e++]) {
                    case '0':
                        _0x501890['eipkP'](expect, _0xd51903['statusText'])['to']['eq']('OK');
                        continue;
                    case '1':
                        _0x501890['cwDZF'](expect, _0xd51903['isOkStatusCode'])['to']['be']['true'];
                        continue;
                    case '2':
                        _0x501890['cwDZF'](expect, _0xd51903)['to']['have']['keys'](_0x501890['BSoxp'], _0x501890['UqcND'], _0x501890['tpfSN'], _0x501890['cmqUw'], _0x501890['AoYyK'], _0x501890['FUPyA'], _0x501890['XKekw'], _0x501890['DCzZc'], _0x501890['uFWzv']);
                        continue;
                    case '3':
                        _0x501890['hZDjf'](expect, _0xd51903['status'])['to']['eq'](0xc8);
                        continue;
                    case '4':
                        _0x501890['hZDjf'](expect, _0xd51903['headers'])['to']['deep']['eq']({ 'content-type': _0x501890['UYlGU'] });
                        continue;
                    case '5':
                        _0x501890['hZDjf'](expect, _0xd51903['allRequestResponses'])['to']['deep']['eq']([{
                                'Request\x20Body': _0x501890['SYZbH'],
                                'Request\x20Headers': {
                                    'accept': _0x501890['bbUcr'],
                                    'accept-encoding': _0x501890['HcSIJ'],
                                    'connection': _0x501890['KRatE'],
                                    'content-length': 0x9,
                                    'host': _0x501890['nCoxB']
                                },
                                'Request\x20URL': _0x501890['ugewd'],
                                'Response\x20Body': _0x501890['Wfxte'],
                                'Response\x20Headers': { 'content-type': _0x501890['UYlGU'] },
                                'Response\x20Status': 0xc8
                            }]);
                        continue;
                    case '6':
                        _0x501890['hZDjf'](expect, _0xd51903['requestBody'])['to']['eq'](_0x501890['SYZbH']);
                        continue;
                    case '7':
                        _0x501890['cHOEM'](expect, _0xd51903['body'])['to']['eq'](_0x501890['Wfxte']);
                        continue;
                    case '8':
                        _0x501890['ZVMBz'](expect, _0xd51903['requestHeaders'])['to']['deep']['eq']({
                            'accept': _0x501890['bbUcr'],
                            'accept-encoding': _0x501890['HcSIJ'],
                            'connection': _0x501890['KRatE'],
                            'content-length': 0x9,
                            'host': _0x501890['nCoxB']
                        });
                        continue;
                    }
                    break;
                }
            });
        }), _0x487e3c['POAbc'](it, _0x487e3c['kfGKd'], function () {
            const _0x388722 = {
                'NSdfQ': _0x501890['OjYxZ'],
                'DPkyu': function (_0xbfb036, _0x292921) {
                    return _0x501890['ZVMBz'](_0xbfb036, _0x292921);
                },
                'uUtob': _0x501890['BSoxp'],
                'duROl': _0x501890['UqcND'],
                'bmfPe': _0x501890['tpfSN'],
                'vNsVe': _0x501890['cmqUw'],
                'lODip': _0x501890['AoYyK'],
                'gtRSC': _0x501890['FUPyA'],
                'flUxY': _0x501890['XKekw'],
                'oggkU': _0x501890['lJkUw'],
                'NToQz': _0x501890['DCzZc'],
                'DpiLP': _0x501890['uFWzv'],
                'RYlRP': function (_0x18f0f0, _0xd25560) {
                    return _0x501890['ZVMBz'](_0x18f0f0, _0xd25560);
                },
                'FaFZT': _0x501890['ntFVF'],
                'NKzQb': function (_0x460ac1, _0x102c9c) {
                    return _0x501890['ZVMBz'](_0x460ac1, _0x102c9c);
                },
                'myBRL': _0x501890['bbUcr'],
                'QIQPL': _0x501890['HcSIJ'],
                'ajgXX': _0x501890['KRatE'],
                'RcJvE': _0x501890['nCoxB'],
                'lPUqw': _0x501890['GOjDq'],
                'VGThX': _0x501890['Rwkqk'],
                'Kbtig': _0x501890['RdMbv'],
                'DCBRg': _0x501890['suLTp'],
                'DmfNc': _0x501890['ILSul'],
                'LXkCU': _0x501890['wAGLq'],
                'NqsWQ': _0x501890['UYlGU'],
                'mCTjf': function (_0x222e6a, _0x57df39) {
                    return _0x501890['XsLzi'](_0x222e6a, _0x57df39);
                },
                'wCzHf': _0x501890['tsPoO'],
                'OHdWO': _0x501890['RKMYM'],
                'mxtxs': function (_0x127f38, _0x403784) {
                    return _0x501890['fzXJg'](_0x127f38, _0x403784);
                }
            };
            return this['fn']['resolves'](), _0x501890['BAROf'](nock, _0x501890['CWCgx'])['get'](_0x501890['YtfcM'])['reply'](0x12d, null, { 'location': _0x501890['RdMbv'] })['get'](_0x501890['RdMbv'])['reply'](0x12e, null, { 'location': _0x501890['ILSul'] })['get'](_0x501890['ILSul'])['reply'](0xc8, _0x501890['ntFVF'], { 'Content-Type': _0x501890['UYlGU'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x501890['GOjDq'],
                'cookies': ![]
            })['then'](_0x2aefb7 => {
                const _0x2eeb1e = _0x388722['NSdfQ']['split']('|');
                let _0x43c1ca = 0x0;
                while (!![]) {
                    switch (_0x2eeb1e[_0x43c1ca++]) {
                    case '0':
                        _0x388722['DPkyu'](expect, _0x2aefb7)['to']['have']['keys'](_0x388722['uUtob'], _0x388722['duROl'], _0x388722['bmfPe'], _0x388722['vNsVe'], _0x388722['lODip'], _0x388722['gtRSC'], _0x388722['flUxY'], _0x388722['oggkU'], _0x388722['NToQz'], _0x388722['DpiLP']);
                        continue;
                    case '1':
                        _0x388722['RYlRP'](expect, _0x2aefb7['body'])['to']['eq'](_0x388722['FaFZT']);
                        continue;
                    case '2':
                        _0x388722['RYlRP'](expect, _0x2aefb7['requestBody'])['to']['be']['undefined'];
                        continue;
                    case '3':
                        _0x388722['NKzQb'](expect, _0x2aefb7['allRequestResponses'])['to']['deep']['eq']([
                            {
                                'Request\x20Body': null,
                                'Request\x20Headers': {
                                    'accept': _0x388722['myBRL'],
                                    'accept-encoding': _0x388722['QIQPL'],
                                    'connection': _0x388722['ajgXX'],
                                    'host': _0x388722['RcJvE']
                                },
                                'Request\x20URL': _0x388722['lPUqw'],
                                'Response\x20Body': null,
                                'Response\x20Headers': {
                                    'content-type': _0x388722['VGThX'],
                                    'location': _0x388722['Kbtig']
                                },
                                'Response\x20Status': 0x12d
                            },
                            {
                                'Request\x20Body': null,
                                'Request\x20Headers': {
                                    'accept': _0x388722['myBRL'],
                                    'accept-encoding': _0x388722['QIQPL'],
                                    'connection': _0x388722['ajgXX'],
                                    'host': _0x388722['RcJvE'],
                                    'referer': _0x388722['lPUqw']
                                },
                                'Request\x20URL': _0x388722['DCBRg'],
                                'Response\x20Body': null,
                                'Response\x20Headers': {
                                    'content-type': _0x388722['VGThX'],
                                    'location': _0x388722['DmfNc']
                                },
                                'Response\x20Status': 0x12e
                            },
                            {
                                'Request\x20Body': null,
                                'Request\x20Headers': {
                                    'accept': _0x388722['myBRL'],
                                    'accept-encoding': _0x388722['QIQPL'],
                                    'connection': _0x388722['ajgXX'],
                                    'host': _0x388722['RcJvE'],
                                    'referer': _0x388722['DCBRg']
                                },
                                'Request\x20URL': _0x388722['LXkCU'],
                                'Response\x20Body': _0x388722['FaFZT'],
                                'Response\x20Headers': { 'content-type': _0x388722['NqsWQ'] },
                                'Response\x20Status': 0xc8
                            }
                        ]);
                        continue;
                    case '4':
                        _0x388722['NKzQb'](expect, _0x2aefb7['isOkStatusCode'])['to']['be']['true'];
                        continue;
                    case '5':
                        _0x388722['mCTjf'](expect, _0x2aefb7['redirects'])['to']['deep']['eq']([
                            _0x388722['wCzHf'],
                            _0x388722['OHdWO']
                        ]);
                        continue;
                    case '6':
                        _0x388722['mCTjf'](expect, _0x2aefb7['statusText'])['to']['eq']('OK');
                        continue;
                    case '7':
                        _0x388722['mxtxs'](expect, _0x2aefb7['requestHeaders'])['to']['deep']['eq']({
                            'accept': _0x388722['myBRL'],
                            'accept-encoding': _0x388722['QIQPL'],
                            'connection': _0x388722['ajgXX'],
                            'referer': _0x388722['DCBRg'],
                            'host': _0x388722['RcJvE']
                        });
                        continue;
                    case '8':
                        _0x388722['mxtxs'](expect, _0x2aefb7['headers'])['to']['deep']['eq']({ 'content-type': _0x388722['NqsWQ'] });
                        continue;
                    case '9':
                        _0x388722['mxtxs'](expect, _0x2aefb7['status'])['to']['eq'](0xc8);
                        continue;
                    }
                    break;
                }
            });
        }), _0x487e3c['POAbc'](it, _0x487e3c['fneWM'], function () {
            const _0x5961f9 = {
                'bslmQ': function (_0xdd4f77, _0x5cda26) {
                    return _0x501890['bqjMN'](_0xdd4f77, _0x5cda26);
                },
                'ZFDOw': _0x501890['izZeY']
            };
            nock['enableNetConnect']();
            const _0x510e64 = _0x501890['bqjMN'](Request, { 'timeout': 0x7d0 });
            return _0x510e64['sendPromise']({}, this['fn'], {
                'url': _0x501890['XASHt'],
                'cookies': ![]
            })['then'](() => {
                throw new Error(_0x501890['xlHRH']);
            })['catch'](_0x33caba => {
                _0x5961f9['bslmQ'](expect, _0x33caba['message'])['to']['eq'](_0x5961f9['ZFDOw']);
            });
        }), _0x487e3c['POAbc'](it, _0x487e3c['jEOfU'], function () {
            const _0x4cf252 = {
                'ukvYb': function (_0x3ece16, _0x3025c1) {
                    return _0x487e3c['SCUVg'](_0x3ece16, _0x3025c1);
                }
            };
            return _0x487e3c['SCUVg'](nock, _0x487e3c['NSdpO'])['get'](_0x487e3c['GZFcO'])['reply'](0xc8, JSON['stringify']({ 'status': 'ok' }), { 'Content-Type': _0x487e3c['EBHpF'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x487e3c['HeMce'],
                'cookies': ![]
            })['then'](_0x4aaaf9 => {
                _0x4cf252['ukvYb'](expect, _0x4aaaf9['body'])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), _0x487e3c['RWZpd'](it, _0x487e3c['brkXC'], function () {
            return _0x487e3c['wxlgY'](nock, _0x487e3c['NSdpO'])['get'](_0x487e3c['GZFcO'])['reply'](0xc8, JSON['stringify']({ 'status': 'ok' }), { 'Content-Type': _0x487e3c['yABBc'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x487e3c['HeMce'],
                'cookies': ![]
            })['then'](_0x22f30d => {
                _0x501890['bqjMN'](expect, _0x22f30d['body'])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), _0x487e3c['RWZpd'](it, _0x487e3c['uDwzV'], function () {
            return _0x501890['bqjMN'](nock, _0x501890['zHmzR'])['get'](_0x501890['UQITu'])['reply'](0xc8, _0x501890['rsgHh'], { 'Content-Type': _0x501890['Rwkqk'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x501890['gNvfn'],
                'cookies': ![]
            })['then'](_0x3380b4 => {
                _0x501890['bqjMN'](expect, _0x3380b4['body'])['to']['eq'](_0x501890['rsgHh']);
            });
        }), _0x487e3c['RWZpd'](it, _0x487e3c['kfgfU'], function () {
            return _0x487e3c['wxlgY'](nock, _0x487e3c['NSdpO'])['get'](_0x487e3c['tVvKp'])['delay'](0xa)['reply'](0xc8, _0x487e3c['TIogm'], { 'Content-Type': _0x487e3c['ewHcc'] }), request['sendPromise']({}, this['fn'], {
                'url': _0x487e3c['JyTDX'],
                'cookies': ![]
            })['then'](_0x4fda96 => {
                _0x501890['EjRtC'](expect, _0x4fda96['duration'])['to']['be']['a'](_0x501890['WfXWJ']), _0x501890['EjRtC'](expect, _0x4fda96['duration'])['to']['be']['gt'](0x0);
            });
        }), _0x487e3c['jZfpk'](it, _0x487e3c['LpgPj'], function () {
            const _0x5e741a = {
                'LbzNO': function (_0x17d841, _0xf6e35d) {
                    return _0x487e3c['FUfbp'](_0x17d841, _0xf6e35d);
                },
                'jkDgI': _0x487e3c['fCjzT']
            };
            _0x487e3c['FUfbp'](nock, _0x487e3c['NSdpO'])['matchHeader'](_0x487e3c['MmhhP'], _0x487e3c['pHyXF'])['get'](_0x487e3c['tVvKp'])['reply'](0xc8, _0x487e3c['fCjzT']);
            const _0x5f3d32 = {};
            return _0x5f3d32[_0x487e3c['MmhhP']] = _0x487e3c['pHyXF'], request['sendPromise'](_0x5f3d32, this['fn'], {
                'url': _0x487e3c['JyTDX'],
                'cookies': ![]
            })['then'](_0x2be0bb => {
                _0x5e741a['LbzNO'](expect, _0x2be0bb['body'])['to']['eq'](_0x5e741a['jkDgI']);
            });
        }), _0x487e3c['wmrTO'](it, _0x487e3c['HRGdX'], function () {
            return _0x501890['YLOgJ'](nock, _0x501890['zHmzR'])['matchHeader'](_0x501890['TbLFO'], _0x501890['KRatE'])['get'](_0x501890['KJXid'])['reply'](0xc8, _0x501890['kmAuF']), request['sendPromise']({}, this['fn'], {
                'url': _0x501890['nlDyj'],
                'cookies': ![]
            })['then'](_0x4041bf => {
                _0x501890['EjRtC'](expect, _0x4041bf['body'])['to']['eq'](_0x501890['kmAuF']);
            });
        }), _0x487e3c['WkXvR'](it, _0x487e3c['NUWxu'], function () {
            _0x501890['PncNe'](nock, _0x501890['zHmzR'])['matchHeader'](_0x501890['EYqhy'], _0x501890['fsrxp'])['get'](_0x501890['KJXid'])['reply'](0xc8, _0x501890['Itmeb']);
            const _0x4490aa = {};
            return _0x4490aa[_0x501890['Jtxon']] = _0x501890['SYZbH'], request['sendPromise'](_0x4490aa, this['fn'], {
                'url': _0x501890['nlDyj'],
                'cookies': ![],
                'headers': { 'TEST': !![] }
            })['then'](_0x212c86 => {
                _0x501890['PncNe'](expect, _0x212c86['body'])['to']['eq'](_0x501890['Itmeb']);
            });
        }), _0x487e3c['WkXvR'](it, _0x487e3c['dKKxy'], function () {
            const _0x7951c3 = {
                'gUxyp': function (_0x6937e9, _0x2d601c) {
                    return _0x487e3c['FUfbp'](_0x6937e9, _0x2d601c);
                },
                'mGozC': _0x487e3c['fCjzT']
            };
            _0x487e3c['EmzZE'](nock, _0x487e3c['NSdpO'])['matchHeader'](_0x487e3c['MmhhP'], _0x487e3c['rWOuC'])['get'](_0x487e3c['tVvKp'])['reply'](0xc8, _0x487e3c['fCjzT']);
            const _0x461543 = { 'user-agent': _0x487e3c['tavGB'] };
            return request['sendPromise'](_0x461543, this['fn'], {
                'url': _0x487e3c['JyTDX'],
                'cookies': ![],
                'headers': { 'User-Agent': _0x487e3c['rWOuC'] }
            })['then'](_0xda0d3c => {
                _0x7951c3['gUxyp'](expect, _0xda0d3c['body'])['to']['eq'](_0x7951c3['mGozC']);
            });
        }), _0x487e3c['WkXvR'](context, _0x487e3c['kBavT'], () => {
            const _0x450886 = {
                'ZlOvi': function (_0x8167fc, _0xfd54cb) {
                    return _0x487e3c['EmzZE'](_0x8167fc, _0xfd54cb);
                },
                'RcfWw': function (_0x1dc27e, _0x70f7ec) {
                    return _0x487e3c['QVPpH'](_0x1dc27e, _0x70f7ec);
                },
                'CQVKD': _0x487e3c['NSdpO'],
                'AIjHE': _0x487e3c['kxHDe'],
                'BBlUz': _0x487e3c['ewHcc'],
                'OGOsJ': _0x487e3c['bYCLn'],
                'kUlea': _0x487e3c['xwwgl']
            };
            _0x487e3c['sDOpS'](it, _0x487e3c['myrmV'], function () {
                const _0x16dd3b = {
                    'ppIlO': function (_0x3663d3, _0xf94d47) {
                        return _0x501890['PncNe'](_0x3663d3, _0xf94d47);
                    }
                };
                return _0x501890['LYyJo'](nock, _0x501890['zHmzR'])['matchHeader'](_0x501890['ZVBOr'], _0x501890['bbUcr'])['get'](_0x501890['MddDB'])['reply'](0xc8), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['TNPhf'],
                    'cookies': ![]
                })['then'](_0x3b51c9 => {
                    _0x16dd3b['ppIlO'](expect, _0x3b51c9['status'])['to']['eq'](0xc8);
                });
            }), _0x487e3c['sDOpS'](it, _0x487e3c['idkWx'], function () {
                const _0x5a7fe0 = {
                    'Gmcsa': function (_0x4321d6, _0x18acb1) {
                        return _0x501890['LYyJo'](_0x4321d6, _0x18acb1);
                    }
                };
                return _0x501890['bfdyB'](nock, _0x501890['zHmzR'])['matchHeader'](_0x501890['ZVBOr'], _0x501890['UYlGU'])['get'](_0x501890['MddDB'])['reply'](0xc8), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['TNPhf'],
                    'cookies': ![],
                    'headers': { 'accept': _0x501890['UYlGU'] }
                })['then'](_0x56a8fd => {
                    _0x5a7fe0['Gmcsa'](expect, _0x56a8fd['status'])['to']['eq'](0xc8);
                });
            }), _0x487e3c['sDOpS'](it, _0x487e3c['MSODQ'], function () {
                const _0x2318e3 = {
                    'FxCzn': function (_0x2e5d58, _0x563be9) {
                        return _0x450886['ZlOvi'](_0x2e5d58, _0x563be9);
                    }
                };
                return _0x450886['RcfWw'](nock, _0x450886['CQVKD'])['matchHeader'](_0x450886['AIjHE'], _0x450886['BBlUz'])['get'](_0x450886['OGOsJ'])['reply'](0xc8), request['sendPromise']({}, this['fn'], {
                    'url': _0x450886['kUlea'],
                    'cookies': ![],
                    'headers': { 'Accept': _0x450886['BBlUz'] }
                })['then'](_0x734d5b => {
                    _0x2318e3['FxCzn'](expect, _0x734d5b['status'])['to']['eq'](0xc8);
                });
            });
        }), _0x487e3c['WkXvR'](context, 'qs', () => {
            _0x487e3c['sDOpS'](it, _0x487e3c['LNbRL'], function () {
                const _0x2f793a = {
                    'NYAyi': function (_0x1a2bea, _0x360aa2) {
                        return _0x501890['bfdyB'](_0x1a2bea, _0x360aa2);
                    }
                };
                return _0x501890['bfdyB'](nock, _0x501890['zHmzR'])['get'](_0x501890['yzBjY'])['reply'](0xc8), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['nlDyj'],
                    'cookies': ![],
                    'qs': {
                        'bar': _0x501890['cFFqv'],
                        'q': 0x1
                    }
                })['then'](_0x307e0b => {
                    _0x2f793a['NYAyi'](expect, _0x307e0b['status'])['to']['eq'](0xc8);
                });
            });
        }), _0x487e3c['WkXvR'](context, _0x487e3c['dGLjd'], () => {
            const _0x153d35 = {
                'adJCO': function (_0xe3c8b8, _0x18219b) {
                    return _0x501890['MTYgA'](_0xe3c8b8, _0x18219b);
                },
                'kvwkL': _0x501890['ALhDH'],
                'GVker': _0x501890['YiGzV'],
                'pKmed': function (_0xdfb276, _0x4103b1) {
                    return _0x501890['dEaCl'](_0xdfb276, _0x4103b1);
                },
                'ntkXI': _0x501890['cbpql'],
                'srMUF': _0x501890['zHmzR'],
                'zGDKI': _0x501890['ILSul'],
                'aXngq': _0x501890['vrzQS'],
                'UvMrT': _0x501890['YtfcM'],
                'GgudX': _0x501890['cFuxV'],
                'dDfVw': _0x501890['LdxRG'],
                'pqzMX': function (_0x19c3e8, _0x53e300) {
                    return _0x501890['dEaCl'](_0x19c3e8, _0x53e300);
                },
                'irMlr': function (_0x1b500e, _0x1246a4) {
                    return _0x501890['dEaCl'](_0x1b500e, _0x1246a4);
                },
                'kFWEJ': function (_0x4f7c2d, _0x32f1f6) {
                    return _0x501890['odPmq'](_0x4f7c2d, _0x32f1f6);
                },
                'lLDBU': function (_0x5b3e61, _0x5cfe4d) {
                    return _0x501890['odPmq'](_0x5b3e61, _0x5cfe4d);
                },
                'zalMs': function (_0x776df8, _0x777bcf) {
                    return _0x501890['odPmq'](_0x776df8, _0x777bcf);
                },
                'RiBGq': _0x501890['TzULY']
            };
            _0x501890['YDGcY'](beforeEach, function () {
                this['fn']['resolves']();
            }), _0x501890['DdOoU'](it, _0x501890['eiJmO'], function () {
                return _0x501890['gSStZ'](nock, _0x501890['zHmzR'])['get'](_0x501890['YtfcM'])['reply'](0x12e, '', { 'location': _0x501890['LdxRG'] })['get'](_0x501890['ILSul'])['reply'](0xc8, _0x501890['ALhDH']), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['vrzQS'],
                    'cookies': ![],
                    'followRedirect': !![]
                })['then'](_0x4b5e57 => {
                    _0x153d35['adJCO'](expect, _0x4b5e57['status'])['to']['eq'](0xc8), _0x153d35['adJCO'](expect, _0x4b5e57['body'])['to']['eq'](_0x153d35['kvwkL']), _0x153d35['adJCO'](expect, _0x4b5e57)['not']['to']['have']['property'](_0x153d35['GVker']);
                });
            }), _0x501890['qfnVM'](it, _0x501890['sHTul'], function () {
                return _0x153d35['pKmed'](nock, _0x153d35['srMUF'])['post'](_0x153d35['zGDKI'])['reply'](0x12e, '', { 'location': _0x153d35['aXngq'] })['get'](_0x153d35['UvMrT'])['reply'](0xc8, _0x153d35['ntkXI']), request['sendPromise']({}, this['fn'], {
                    'method': _0x153d35['GgudX'],
                    'url': _0x153d35['dDfVw'],
                    'cookies': ![]
                })['then'](_0x3581e3 => {
                    _0x153d35['adJCO'](expect, _0x3581e3['status'])['to']['eq'](0xc8), _0x153d35['pKmed'](expect, _0x3581e3['body'])['to']['eq'](_0x153d35['ntkXI']), _0x153d35['pKmed'](expect, _0x3581e3)['not']['to']['have']['property'](_0x153d35['GVker']);
                });
            }), _0x501890['qfnVM'](it, _0x501890['kICKM'], function () {
                return _0x501890['KCBRJ'](nock, _0x501890['zHmzR'])['get'](_0x501890['YtfcM'])['reply'](0x12e, '', { 'location': _0x501890['LdxRG'] })['get'](_0x501890['ILSul'])['reply'](0xc8, _0x501890['ALhDH']), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['vrzQS'],
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x2b76fd => {
                    _0x153d35['pqzMX'](expect, _0x2b76fd['status'])['to']['eq'](0x12e), _0x153d35['irMlr'](expect, _0x2b76fd['body'])['to']['eq'](''), _0x153d35['kFWEJ'](expect, _0x2b76fd['redirectedToUrl'])['to']['eq'](_0x153d35['dDfVw']);
                });
            }), _0x501890['NqcGa'](it, _0x501890['sWnAf'], function () {
                return _0x501890['KCBRJ'](nock, _0x501890['zHmzR'])['get'](_0x501890['YtfcM'])['reply'](0x12e, '', { 'location': _0x501890['ILSul'] })['get'](_0x501890['ILSul'])['reply'](0xc8, _0x501890['ALhDH']), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['vrzQS'],
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x91def2 => {
                    _0x153d35['lLDBU'](expect, _0x91def2['status'])['to']['eq'](0x12e), _0x153d35['lLDBU'](expect, _0x91def2['redirectedToUrl'])['to']['eq'](_0x153d35['dDfVw']);
                });
            }), _0x501890['NqcGa'](it, _0x501890['JegtI'], function () {
                const _0x133fa3 = {
                    'MOtgN': function (_0x13aa43, _0x481986) {
                        return _0x501890['KCBRJ'](_0x13aa43, _0x481986);
                    },
                    'Rrikg': function (_0x18cb05, _0x1d4c91) {
                        return _0x501890['MTYgA'](_0x18cb05, _0x1d4c91);
                    },
                    'Lpvfx': _0x501890['CBPwJ']
                };
                return _0x501890['MTYgA'](nock, _0x501890['zHmzR'])['get'](_0x501890['YtfcM'])['reply'](0x12d, '', { 'location': _0x501890['CBPwJ'] })['get'](_0x501890['ILSul'])['reply'](0xc8, _0x501890['ALhDH']), request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['vrzQS'],
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x18f501 => {
                    _0x133fa3['MOtgN'](expect, _0x18f501['status'])['to']['eq'](0x12d), _0x133fa3['Rrikg'](expect, _0x18f501['redirectedToUrl'])['to']['eq'](_0x133fa3['Lpvfx']);
                });
            }), _0x501890['NqcGa'](it, _0x501890['MyPLI'], function () {
                return _0x153d35['zalMs'](nock, _0x153d35['srMUF'])['get'](_0x153d35['UvMrT'])['reply'](0x12e, '', { 'location': _0x153d35['dDfVw'] })['get'](_0x153d35['zGDKI'])['reply'](0xc8, _0x153d35['kvwkL']), request['sendPromise']({}, this['fn'], {
                    'url': _0x153d35['aXngq'],
                    'cookies': ![]
                })['then'](_0x22ca1f => {
                    _0x153d35['lLDBU'](expect, _0x22ca1f['status'])['to']['eq'](0xc8), _0x153d35['zalMs'](expect, _0x22ca1f)['not']['to']['have']['property'](_0x153d35['GVker']);
                });
            }), _0x501890['oVDMb'](it, _0x501890['qjxwv'], function () {
                return _0x153d35['zalMs'](testAttachingCookiesWith, () => {
                    return request['sendPromise']({}, this['fn'], { 'url': _0x153d35['RiBGq'] });
                });
            });
        }), _0x487e3c['WkXvR'](context, _0x487e3c['OOqvS'], () => {
            const _0x26ee78 = {
                'LnbGQ': function (_0x5e6dad, _0x23e0dd) {
                    return _0x487e3c['nwRaY'](_0x5e6dad, _0x23e0dd);
                },
                'PLXYL': _0x487e3c['NSdpO'],
                'qIQAu': _0x487e3c['kzFTi'],
                'jzQAS': _0x487e3c['RvICK'],
                'XTCIn': _0x487e3c['MUXan'],
                'OoUUz': _0x487e3c['EfQDt'],
                'IZYWj': _0x487e3c['CgIrz'],
                'KoCSR': function (_0x17c269, _0x1c13c8) {
                    return _0x487e3c['phpUX'](_0x17c269, _0x1c13c8);
                },
                'IaHIU': _0x487e3c['RFYCr'],
                'dkJjB': _0x487e3c['spQFO'],
                'oHxDJ': _0x487e3c['sKplp'],
                'HJEMH': _0x487e3c['wySNt'],
                'iuigI': function (_0x823677, _0x3cee02) {
                    return _0x487e3c['zAYjk'](_0x823677, _0x3cee02);
                },
                'TSKkk': _0x487e3c['sWjAG']
            };
            _0x487e3c['Psgqa'](beforeEach, () => {
                _0x26ee78['LnbGQ'](nock, _0x26ee78['PLXYL'])['matchHeader'](_0x26ee78['qIQAu'], _0x26ee78['jzQAS'])['post'](_0x26ee78['XTCIn'], _0x26ee78['OoUUz'])['reply'](0xc8, _0x26ee78['IZYWj']);
            }), _0x487e3c['sDOpS'](it, _0x487e3c['UihIo'], function () {
                const _0x14aa36 = {
                    'rYsGg': function (_0x3f913c, _0xb7c5af) {
                        return _0x26ee78['KoCSR'](_0x3f913c, _0xb7c5af);
                    },
                    'lGyiV': _0x26ee78['IZYWj']
                };
                return request['sendPromise']({}, this['fn'], {
                    'url': _0x26ee78['IaHIU'],
                    'method': _0x26ee78['dkJjB'],
                    'cookies': ![],
                    'form': !![],
                    'body': {
                        'foo': _0x26ee78['oHxDJ'],
                        'baz': _0x26ee78['HJEMH']
                    }
                })['then'](_0x2c8610 => {
                    _0x14aa36['rYsGg'](expect, _0x2c8610['status'])['to']['eq'](0xc8), _0x14aa36['rYsGg'](expect, _0x2c8610['body'])['to']['eq'](_0x14aa36['lGyiV']);
                });
            }), _0x487e3c['sDOpS'](it, _0x487e3c['hNYQG'], function () {
                const _0x2343db = sinon['spy'](request['rp']['Request']['prototype'], _0x26ee78['TSKkk']), _0x3debd7 = {
                        'foo': _0x26ee78['oHxDJ'],
                        'baz': _0x26ee78['HJEMH']
                    };
                return request['sendPromise']({}, this['fn'], {
                    'url': _0x26ee78['IaHIU'],
                    'method': _0x26ee78['dkJjB'],
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': _0x3debd7
                })['then'](_0x364785 => {
                    _0x26ee78['KoCSR'](expect, _0x364785['status'])['to']['eq'](0xc8), _0x26ee78['KoCSR'](expect, _0x364785['body'])['to']['eq'](_0x26ee78['IZYWj']), _0x26ee78['iuigI'](expect, _0x2343db)['not']['to']['be']['calledWithMatch']({ 'body': _0x3debd7 });
                });
            }), _0x487e3c['sDOpS'](it, _0x487e3c['rRbhg'], function () {
                const _0x52e7f4 = {
                        'oLDOp': function (_0x596c54, _0x2d0b8f) {
                            return _0x26ee78['iuigI'](_0x596c54, _0x2d0b8f);
                        },
                        'bhCrt': _0x26ee78['IZYWj']
                    }, _0x3d83cb = sinon['spy'](request['rp']['Request']['prototype'], _0x26ee78['TSKkk']);
                return request['sendPromise']({}, this['fn'], {
                    'url': _0x26ee78['IaHIU'],
                    'method': _0x26ee78['dkJjB'],
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': {
                        'foo': _0x26ee78['oHxDJ'],
                        'baz': _0x26ee78['HJEMH']
                    }
                })['then'](_0x3f2631 => {
                    _0x52e7f4['oLDOp'](expect, _0x3f2631['status'])['to']['eq'](0xc8), _0x52e7f4['oLDOp'](expect, _0x3f2631['body'])['to']['eq'](_0x52e7f4['bhCrt']), _0x52e7f4['oLDOp'](expect, _0x3d83cb)['not']['to']['be']['calledWithMatch']({ 'json': !![] });
                });
            });
        }), _0x487e3c['WkXvR'](context, _0x487e3c['HFmnT'], () => {
            const _0x9052a9 = {
                'pTpzX': function (_0x1c2596, _0x2788c0) {
                    return _0x501890['YDGcY'](_0x1c2596, _0x2788c0);
                },
                'mhwuY': _0x501890['OLSMi'],
                'OicJa': _0x501890['qOZgW'],
                'mbmsl': _0x501890['XdAQg'],
                'csSWZ': _0x501890['XtzCm']
            };
            _0x501890['dTtNO'](beforeEach, function (_0x591ecd) {
                this['srv'] = http['createServer']((_0xc04c1f, _0x763e31) => {
                    _0x763e31['writeHead'](0xc8), _0x763e31['end']();
                }), this['srv']['listen'](0x2704, _0x591ecd);
            }), _0x501890['aJKYh'](afterEach, function () {
                return this['srv']['close']();
            }), _0x501890['oVDMb'](it, _0x501890['kqGrZ'], function () {
                const _0x3233d4 = { 'SAtzi': _0x9052a9['OicJa'] };
                return request['sendPromise']({}, this['fn'], {
                    'url': _0x9052a9['mbmsl'],
                    'cookies': ![],
                    'headers': { 'x-text': _0x9052a9['csSWZ'] }
                })['then'](() => {
                    throw new Error(_0x3233d4['SAtzi']);
                })['catch'](_0x5e70ec => {
                    _0x9052a9['pTpzX'](expect, _0x5e70ec['message'])['to']['eq'](_0x9052a9['mhwuY']);
                });
            }), _0x501890['oVDMb'](it, _0x501890['VQaeX'], function () {
                return request['sendPromise']({}, this['fn'], {
                    'url': _0x501890['XdAQg'],
                    'cookies': ![],
                    'json': !![],
                    'body': { 'x-text': _0x501890['XtzCm'] }
                });
            });
        });
    }), _0x487e3c['plOYw'](context, _0x487e3c['gClLX'], () => {
        const _0xa7ba15 = {
            'dtIey': function (_0x2e03ec) {
                return _0x487e3c['xlfdE'](_0x2e03ec);
            },
            'EJyWc': function (_0x5ad4e0, _0x3cbe2f) {
                return _0x487e3c['cBBHn'](_0x5ad4e0, _0x3cbe2f);
            },
            'fURPZ': function (_0x2879d9, _0x427ec6) {
                return _0x487e3c['ZsWjx'](_0x2879d9, _0x427ec6);
            },
            'gZZDf': function (_0x2cf084, _0x497cd2) {
                return _0x487e3c['dRpDs'](_0x2cf084, _0x497cd2);
            },
            'auLqW': _0x487e3c['NSdpO'],
            'ufdVL': _0x487e3c['MmhhP'],
            'JXolN': _0x487e3c['rWOuC'],
            'lZoGY': _0x487e3c['tVvKp'],
            'jyeiM': _0x487e3c['fCjzT'],
            'QrQqh': _0x487e3c['FLmcc'],
            'sLJYo': _0x487e3c['tavGB'],
            'sbNUG': _0x487e3c['JyTDX']
        };
        _0x487e3c['jYwNY'](it, _0x487e3c['dKKxy'], function () {
            _0xa7ba15['gZZDf'](nock, _0xa7ba15['auLqW'])['matchHeader'](_0xa7ba15['ufdVL'], _0xa7ba15['JXolN'])['get'](_0xa7ba15['lZoGY'])['reply'](0xc8, _0xa7ba15['jyeiM']), sinon['spy'](request, _0xa7ba15['QrQqh']), this['fn']['resolves']({});
            const _0x41e801 = { 'user-agent': _0xa7ba15['sLJYo'] }, _0x236209 = {
                    'url': _0xa7ba15['sbNUG'],
                    'cookies': ![],
                    'headers': { 'user-agent': _0xa7ba15['JXolN'] }
                };
            return request['sendStream'](_0x41e801, this['fn'], _0x236209)['then'](_0x239b02 => {
                _0xa7ba15['dtIey'](_0x239b02), _0xa7ba15['EJyWc'](expect, request['create'])['to']['be']['calledOnce'], _0xa7ba15['fURPZ'](expect, request['create'])['to']['be']['calledWith'](_0x236209);
            });
        }), _0x487e3c['PBfpH'](it, _0x487e3c['EXVvT'], function () {
            const _0x5b18f1 = {
                'oDodT': _0x487e3c['mEbGD'],
                'SaAoG': _0x487e3c['fScYK'],
                'dTPgM': function (_0x1f156e) {
                    return _0x487e3c['NYByd'](_0x1f156e);
                },
                'czsCy': _0x487e3c['PaKcr']
            };
            return _0x487e3c['cBBHn'](testAttachingCookiesWith, () => {
                const _0x1edabb = {
                    'VaxFM': _0x5b18f1['oDodT'],
                    'AaVvv': _0x5b18f1['SaAoG'],
                    'ZNtqH': function (_0x2f363f) {
                        return _0x5b18f1['dTPgM'](_0x2f363f);
                    }
                };
                return request['sendStream']({}, this['fn'], {
                    'url': _0x5b18f1['czsCy'],
                    'followRedirect': _['stubTrue']
                })['then'](_0x555bdf => {
                    const _0x5cdcc7 = _0x1edabb['ZNtqH'](_0x555bdf);
                    return new Promise((_0x1ada92, _0x54cf39) => {
                        _0x5cdcc7['on'](_0x1edabb['VaxFM'], _0x1ada92), _0x5cdcc7['on'](_0x1edabb['AaVvv'], _0x54cf39);
                    });
                });
            });
        });
    });
});
