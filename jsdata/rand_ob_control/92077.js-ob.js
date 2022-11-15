'use strict';
const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest['enableAutomock']()['mock']('../NativeTiming', () => ({
    '__esModule': !![],
    'default': NativeTiming
}))['unmock']('../JSTimers');
const JSTimers = require('../JSTimers');
describe('JSTimers', function () {
    const _0x4db978 = {
        'rSjrs': 'warn',
        'Hqmki': function (_0x62d192, _0x4f276f) {
            return _0x62d192(_0x4f276f);
        },
        'jIlAf': function (_0x355989, _0x400fca) {
            return _0x355989(_0x400fca);
        },
        'EKseE': function (_0x258733, _0x556242) {
            return _0x258733(_0x556242);
        },
        'vVMLv': function (_0x5b85a8, _0x5a1710) {
            return _0x5b85a8(_0x5a1710);
        },
        'SlWwT': function (_0x51f849, _0x5111dc) {
            return _0x51f849(_0x5111dc);
        },
        'XJsZE': function (_0x31fd75, _0x3f5660) {
            return _0x31fd75(_0x3f5660);
        },
        'JXETy': function (_0x16b0c0, _0x2cc21c) {
            return _0x16b0c0(_0x2cc21c);
        },
        'ZSEzp': function (_0x525c43, _0x4a1d7a) {
            return _0x525c43(_0x4a1d7a);
        },
        'BTHqC': function (_0x43fde8, _0x3011d7) {
            return _0x43fde8(_0x3011d7);
        },
        'DknET': function (_0x50e837, _0x521573) {
            return _0x50e837(_0x521573);
        },
        'eyNzx': function (_0x5c28ef, _0x4279b3) {
            return _0x5c28ef(_0x4279b3);
        },
        'wBgWT': function (_0x1cf0be, _0x4d6e3c) {
            return _0x1cf0be(_0x4d6e3c);
        },
        'qdAOi': function (_0x4e3e0f, _0x321025) {
            return _0x4e3e0f(_0x321025);
        },
        'ancxK': 'error',
        'VKEAl': function (_0x447c77, _0x27decd) {
            return _0x447c77(_0x27decd);
        },
        'rVMFm': function (_0x3c59d3, _0x2ff5a0) {
            return _0x3c59d3(_0x2ff5a0);
        },
        'WWNMy': function (_0x3305f1, _0x25c213) {
            return _0x3305f1(_0x25c213);
        },
        'WQaHq': function (_0x1a7bca, _0x5a1a1e) {
            return _0x1a7bca(_0x5a1a1e);
        },
        'DZooX': function (_0x27646a, _0x328c26) {
            return _0x27646a(_0x328c26);
        },
        'heTUI': 'second\x20error',
        'aVvHY': 'first\x20error',
        'DUdhP': 'error\x20within\x20queueReactNativeMicrotask',
        'nHtfX': function (_0x283247, _0x1d8d2a) {
            return _0x283247(_0x1d8d2a);
        },
        'VwGHH': function (_0x308815, _0x4e7dfb) {
            return _0x308815(_0x4e7dfb);
        },
        'eTzHG': function (_0x224cff, _0x596fdb) {
            return _0x224cff(_0x596fdb);
        },
        'ydXcN': 'error\x20within\x20setTimeout',
        'ClpOw': function (_0x11eb78, _0x1f9e4a) {
            return _0x11eb78(_0x1f9e4a);
        },
        'ECZLw': 'error\x20within\x20setInterval',
        'LGSNH': function (_0x56732f, _0x3deec3) {
            return _0x56732f(_0x3deec3);
        },
        'ESoaS': function (_0xa7b1f6, _0x56fae9) {
            return _0xa7b1f6(_0x56fae9);
        },
        'yYqgt': function (_0x4ec93e, _0x5c20ca) {
            return _0x4ec93e(_0x5c20ca);
        },
        'PgYMS': function (_0x4625d4, _0x5af1cf, _0xc755bd) {
            return _0x4625d4(_0x5af1cf, _0xc755bd);
        },
        'LAnWp': 'should\x20call\x20function\x20with\x20setTimeout',
        'bAHda': 'should\x20call\x20nested\x20setTimeout\x20when\x20cleared',
        'DzAqC': function (_0x2678bb, _0x1031b8, _0x49b61e) {
            return _0x2678bb(_0x1031b8, _0x49b61e);
        },
        'FKgRV': 'should\x20call\x20nested\x20queueReactNativeMicrotask\x20when\x20cleared',
        'TrplO': 'should\x20call\x20nested\x20requestAnimationFrame\x20when\x20cleared',
        'ehOso': function (_0x637cb6, _0x444baf, _0x2f261e) {
            return _0x637cb6(_0x444baf, _0x2f261e);
        },
        'ABlXr': 'should\x20call\x20nested\x20setInterval\x20when\x20cleared',
        'GFLon': function (_0x159c9e, _0x764584, _0x5240ca) {
            return _0x159c9e(_0x764584, _0x5240ca);
        },
        'eslKu': 'should\x20call\x20function\x20with\x20setInterval',
        'dLdyp': 'should\x20call\x20function\x20with\x20queueReactNativeMicrotask',
        'gVjzs': 'should\x20not\x20call\x20function\x20with\x20clearReactNativeMicrotask',
        'fidbh': function (_0x321042, _0x3e3bcd, _0x20ce2e) {
            return _0x321042(_0x3e3bcd, _0x20ce2e);
        },
        'diAba': 'should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20queueReactNativeMicrotask',
        'EPvqi': function (_0x3aa576, _0xda44df, _0x2a3530) {
            return _0x3aa576(_0xda44df, _0x2a3530);
        },
        'GrNLC': 'should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20nested\x20queueReactNativeMicrotask',
        'DprsG': 'should\x20call\x20nested\x20queueReactNativeMicrotask',
        'pokrD': 'should\x20call\x20function\x20with\x20requestAnimationFrame',
        'tuGnn': 'should\x20not\x20call\x20function\x20if\x20we\x20don\x27t\x20callTimers',
        'FuAKS': function (_0x30efab, _0x2b40df, _0x26e8e4) {
            return _0x30efab(_0x2b40df, _0x26e8e4);
        },
        'Mzjzb': 'should\x20call\x20setInterval\x20as\x20many\x20times\x20as\x20callTimers\x20is\x20called',
        'VEHIi': 'should\x20only\x20call\x20the\x20function\x20who\x27s\x20id\x20we\x20pass\x20in',
        'PriBW': 'should\x20work\x20with\x20calling\x20multiple\x20timers',
        'EUaJV': 'should\x20still\x20execute\x20all\x20callbacks\x20even\x20if\x20one\x20throws',
        'PqJYT': 'should\x20clear\x20timers\x20even\x20if\x20callback\x20throws',
        'TfrLA': function (_0x19e4f6, _0x386f48, _0x31c3ce) {
            return _0x19e4f6(_0x386f48, _0x31c3ce);
        },
        'zlFmt': 'should\x20not\x20warn\x20if\x20callback\x20is\x20called\x20on\x20cancelled\x20timer',
        'OsnjH': function (_0x2d2e9a, _0x131a20, _0x1a7609) {
            return _0x2d2e9a(_0x131a20, _0x1a7609);
        },
        'NTsIm': 'should\x20warn\x20when\x20callTimers\x20is\x20called\x20with\x20garbage\x20timer\x20id',
        'OsXbh': function (_0xcfe0c, _0xb6aa32, _0x466316) {
            return _0xcfe0c(_0xb6aa32, _0x466316);
        },
        'DszgX': 'should\x20only\x20call\x20callback\x20once\x20for\x20setTimeout',
        'nydXZ': 'should\x20only\x20call\x20callback\x20once\x20for\x20requestAnimationFrame',
        'PEUdE': 'should\x20re-throw\x20first\x20exception',
        'Rvbeg': function (_0x2d335f, _0x4f330f, _0x416c5e) {
            return _0x2d335f(_0x4f330f, _0x416c5e);
        },
        'iWoKr': 'should\x20pass\x20along\x20errors\x20thrown\x20from\x20queueReactNativeMicrotask',
        'Jblmg': function (_0x4a4e3d, _0x12b36f, _0x3e7b94) {
            return _0x4a4e3d(_0x12b36f, _0x3e7b94);
        },
        'EHZWe': 'should\x20throw\x20all\x20errors\x20from\x20queueReactNativeMicrotask',
        'EQTmL': function (_0xe9210f, _0xc3983b, _0x37bb12) {
            return _0xe9210f(_0xc3983b, _0x37bb12);
        },
        'EXWtp': 'should\x20pass\x20along\x20errors\x20thrown\x20from\x20setTimeout',
        'kZfoE': 'should\x20throw\x20all\x20errors\x20from\x20setTimeout',
        'kADJV': 'should\x20pass\x20along\x20errors\x20thrown\x20from\x20setInterval',
        'eevOw': 'should\x20not\x20call\x20to\x20native\x20when\x20clearing\x20a\x20null\x20timer'
    };
    _0x4db978['ESoaS'](beforeEach, function () {
        jest['spyOn'](console, _0x4db978['rSjrs']), global['setTimeout'] = JSTimers['setTimeout'];
    }), _0x4db978['yYqgt'](afterEach, () => {
        console['warn']['mockRestore']();
    }), _0x4db978['PgYMS'](it, _0x4db978['LAnWp'], function () {
        let _0x303258 = ![];
        const _0x362a7b = JSTimers['setTimeout'](function () {
            _0x303258 = !![];
        });
        JSTimers['callTimers']([_0x362a7b]), _0x4db978['Hqmki'](expect, _0x303258)['toBe'](!![]);
    }), _0x4db978['PgYMS'](it, _0x4db978['bAHda'], function () {
        let _0x192f6f, _0x213a61, _0x135017, _0x38e952 = 0x0;
        _0x192f6f = JSTimers['setTimeout'](function () {
            JSTimers['clearTimeout'](_0x192f6f), _0x213a61 = JSTimers['setTimeout'](function () {
                JSTimers['clearTimeout'](_0x213a61), _0x135017 = JSTimers['setTimeout'](function () {
                    _0x38e952 += 0x1;
                });
            });
        }), JSTimers['callTimers']([_0x192f6f]), JSTimers['callTimers']([_0x213a61]), JSTimers['callTimers']([_0x135017]), _0x4db978['Hqmki'](expect, _0x38e952)['toBe'](0x1);
    }), _0x4db978['DzAqC'](it, _0x4db978['FKgRV'], function () {
        let _0x319139, _0x2a44be, _0x579201, _0x1fbbb3 = 0x0;
        _0x319139 = JSTimers['queueReactNativeMicrotask'](function () {
            JSTimers['clearReactNativeMicrotask'](_0x319139), _0x2a44be = JSTimers['queueReactNativeMicrotask'](function () {
                JSTimers['clearReactNativeMicrotask'](_0x2a44be), _0x579201 = JSTimers['queueReactNativeMicrotask'](function () {
                    _0x1fbbb3 += 0x1;
                });
            });
        }), JSTimers['callTimers']([_0x319139]), JSTimers['callTimers']([_0x2a44be]), JSTimers['callTimers']([_0x579201]), _0x4db978['Hqmki'](expect, _0x1fbbb3)['toBe'](0x1);
    }), _0x4db978['DzAqC'](it, _0x4db978['TrplO'], function () {
        let _0x4952ed, _0x19ad61, _0x288428, _0x2b6fd6 = 0x0;
        _0x4952ed = JSTimers['requestAnimationFrame'](function () {
            JSTimers['cancelAnimationFrame'](_0x4952ed), _0x19ad61 = JSTimers['requestAnimationFrame'](function () {
                JSTimers['cancelAnimationFrame'](_0x19ad61), _0x288428 = JSTimers['requestAnimationFrame'](function () {
                    _0x2b6fd6 += 0x1;
                });
            });
        }), JSTimers['callTimers']([_0x4952ed]), JSTimers['callTimers']([_0x19ad61]), JSTimers['callTimers']([_0x288428]), _0x4db978['jIlAf'](expect, _0x2b6fd6)['toBe'](0x1);
    }), _0x4db978['ehOso'](it, _0x4db978['ABlXr'], function () {
        let _0x3ace26, _0x127dda, _0x4a828a, _0x31d6a0 = 0x0;
        _0x3ace26 = JSTimers['setInterval'](function () {
            JSTimers['clearInterval'](_0x3ace26), _0x127dda = JSTimers['setInterval'](function () {
                JSTimers['clearInterval'](_0x127dda), _0x4a828a = JSTimers['setInterval'](function () {
                    _0x31d6a0 += 0x1;
                });
            });
        }), JSTimers['callTimers']([_0x3ace26]), JSTimers['callTimers']([_0x127dda]), JSTimers['callTimers']([_0x4a828a]), _0x4db978['EKseE'](expect, _0x31d6a0)['toBe'](0x1);
    }), _0x4db978['GFLon'](it, _0x4db978['eslKu'], function () {
        const _0x4905b4 = jest['fn'](), _0x5d0ac6 = JSTimers['setInterval'](_0x4905b4);
        JSTimers['callTimers']([_0x5d0ac6]), _0x4db978['vVMLv'](expect, _0x4905b4)['toBeCalledTimes'](0x1);
    }), _0x4db978['GFLon'](it, _0x4db978['dLdyp'], function () {
        const _0x534097 = jest['fn']();
        JSTimers['queueReactNativeMicrotask'](_0x534097), JSTimers['callReactNativeMicrotasks'](), _0x4db978['vVMLv'](expect, _0x534097)['toBeCalledTimes'](0x1);
    }), _0x4db978['GFLon'](it, _0x4db978['gVjzs'], function () {
        const _0x54d326 = jest['fn'](), _0x12c6fc = JSTimers['queueReactNativeMicrotask'](_0x54d326);
        JSTimers['clearReactNativeMicrotask'](_0x12c6fc), JSTimers['callReactNativeMicrotasks'](), _0x4db978['vVMLv'](expect, _0x54d326)['not']['toBeCalled']();
    }), _0x4db978['fidbh'](it, _0x4db978['diAba'], function () {
        let _0x205eb0 = 0x0, _0x4ebbd9 = null, _0x285979 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x4ebbd9 = _0x205eb0++;
        }), JSTimers['queueReactNativeMicrotask'](function () {
            _0x285979 = _0x205eb0++;
        }), JSTimers['callReactNativeMicrotasks'](), _0x4db978['vVMLv'](expect, _0x4ebbd9)['toBe'](0x0), _0x4db978['vVMLv'](expect, _0x285979)['toBe'](0x1);
    }), _0x4db978['EPvqi'](it, _0x4db978['GrNLC'], function () {
        let _0x1837d8 = 0x0, _0x1d4d49 = null, _0x86c2be = null, _0x2651c8 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x1d4d49 = _0x1837d8++, JSTimers['queueReactNativeMicrotask'](function () {
                _0x2651c8 = _0x1837d8++;
            }), _0x86c2be = _0x1837d8++;
        }), JSTimers['callReactNativeMicrotasks'](), _0x4db978['vVMLv'](expect, _0x1d4d49)['toBe'](0x0), _0x4db978['SlWwT'](expect, _0x86c2be)['toBe'](0x1), _0x4db978['XJsZE'](expect, _0x2651c8)['toBe'](0x2);
    }), _0x4db978['EPvqi'](it, _0x4db978['DprsG'], function () {
        let _0x51af6c = ![], _0x4c1d35 = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x51af6c = !![], JSTimers['queueReactNativeMicrotask'](function () {
                _0x4c1d35 = !![];
            });
        }), JSTimers['callReactNativeMicrotasks'](), _0x4db978['JXETy'](expect, _0x51af6c)['toBe'](!![]), _0x4db978['ZSEzp'](expect, _0x4c1d35)['toBe'](!![]);
    }), _0x4db978['EPvqi'](it, _0x4db978['pokrD'], function () {
        const _0x2c0b57 = jest['fn'](), _0xdf1358 = JSTimers['requestAnimationFrame'](_0x2c0b57);
        JSTimers['callTimers']([_0xdf1358]), _0x4db978['ZSEzp'](expect, _0x2c0b57)['toBeCalledTimes'](0x1);
    }), _0x4db978['EPvqi'](it, _0x4db978['tuGnn'], function () {
        const _0x46e23d = jest['fn']();
        JSTimers['setTimeout'](_0x46e23d, 0xa), _0x4db978['ZSEzp'](expect, _0x46e23d)['not']['toBeCalled'](), JSTimers['setInterval'](_0x46e23d, 0xa), _0x4db978['BTHqC'](expect, _0x46e23d)['not']['toBeCalled'](), JSTimers['requestAnimationFrame'](_0x46e23d), _0x4db978['DknET'](expect, _0x46e23d)['not']['toBeCalled']();
    }), _0x4db978['FuAKS'](it, _0x4db978['Mzjzb'], function () {
        const _0xcd8d28 = jest['fn'](), _0x107a20 = JSTimers['setInterval'](_0xcd8d28, 0xa);
        JSTimers['callTimers']([_0x107a20]), JSTimers['callTimers']([_0x107a20]), JSTimers['callTimers']([_0x107a20]), JSTimers['callTimers']([_0x107a20]), _0x4db978['eyNzx'](expect, _0xcd8d28)['toBeCalledTimes'](0x4);
    }), _0x4db978['FuAKS'](it, _0x4db978['VEHIi'], function () {
        let _0x525a28 = ![], _0x3180d6 = ![];
        JSTimers['setTimeout'](function () {
            _0x525a28 = !![];
        });
        const _0x3bbeab = JSTimers['setTimeout'](function () {
            _0x3180d6 = !![];
        });
        JSTimers['callTimers']([_0x3bbeab]), _0x4db978['eyNzx'](expect, _0x525a28)['toBe'](![]), _0x4db978['wBgWT'](expect, _0x3180d6)['toBe'](!![]);
    }), _0x4db978['FuAKS'](it, _0x4db978['PriBW'], function () {
        let _0x842f4b = ![], _0x4f479a = ![];
        const _0x3bf6fa = JSTimers['setTimeout'](function () {
                _0x842f4b = !![];
            }), _0x3c5c8e = JSTimers['setTimeout'](function () {
                _0x4f479a = !![];
            });
        JSTimers['callTimers']([
            _0x3bf6fa,
            _0x3c5c8e
        ]), _0x4db978['wBgWT'](expect, _0x842f4b)['toBe'](!![]), _0x4db978['qdAOi'](expect, _0x4f479a)['toBe'](!![]);
    }), _0x4db978['FuAKS'](it, _0x4db978['EUaJV'], function () {
        const _0x4f038b = JSTimers['setTimeout'](function () {
            throw new Error(_0x4db978['ancxK']);
        }, 0xa);
        let _0x1104ff = ![];
        const _0x38432c = JSTimers['setTimeout'](function () {
            _0x1104ff = !![];
        }, 0xa);
        _0x4db978['qdAOi'](expect, JSTimers['callTimers']['bind'](null, [
            _0x4f038b,
            _0x38432c
        ]))['toThrow'](), _0x4db978['qdAOi'](expect, _0x1104ff)['toBe'](!![]);
    }), _0x4db978['FuAKS'](it, _0x4db978['PqJYT'], function () {
        const _0x58f39e = JSTimers['setTimeout'](function () {
            throw new Error(_0x4db978['ancxK']);
        }, 0xa);
        _0x4db978['qdAOi'](expect, JSTimers['callTimers']['bind'](null, [_0x58f39e]))['toThrow'](_0x4db978['ancxK']), JSTimers['callTimers']['bind'](null, [_0x58f39e]);
    }), _0x4db978['TfrLA'](it, _0x4db978['zlFmt'], function () {
        const _0x3fc989 = jest['fn'](), _0x10598c = JSTimers['setTimeout'](_0x3fc989, 0xa);
        JSTimers['clearTimeout'](_0x10598c), JSTimers['callTimers']([_0x10598c]), _0x4db978['VKEAl'](expect, _0x3fc989)['not']['toBeCalled'](), _0x4db978['rVMFm'](expect, console['warn'])['not']['toBeCalled']();
    }), _0x4db978['OsnjH'](it, _0x4db978['NTsIm'], function () {
        JSTimers['callTimers']([0x539]), _0x4db978['rVMFm'](expect, console['warn'])['toBeCalled']();
    }), _0x4db978['OsXbh'](it, _0x4db978['DszgX'], function () {
        const _0x4a1b52 = jest['fn'](), _0x2bfaee = JSTimers['setTimeout'](_0x4a1b52, 0xa);
        JSTimers['callTimers']([_0x2bfaee]), _0x4db978['rVMFm'](expect, _0x4a1b52)['toBeCalledTimes'](0x1), JSTimers['callTimers']([_0x2bfaee]), _0x4db978['WWNMy'](expect, _0x4a1b52)['toBeCalledTimes'](0x1), _0x4db978['WWNMy'](expect, console['warn'])['not']['toBeCalled']();
    }), _0x4db978['OsXbh'](it, _0x4db978['nydXZ'], function () {
        const _0x42236e = jest['fn'](), _0x329e84 = JSTimers['requestAnimationFrame'](_0x42236e, 0xa);
        JSTimers['callTimers']([_0x329e84]), _0x4db978['WQaHq'](expect, _0x42236e)['toBeCalledTimes'](0x1), JSTimers['callTimers']([_0x329e84]), _0x4db978['DZooX'](expect, _0x42236e)['toBeCalledTimes'](0x1), _0x4db978['DZooX'](expect, console['warn'])['not']['toBeCalled']();
    }), _0x4db978['OsXbh'](it, _0x4db978['PEUdE'], function () {
        const _0x38c53a = { 'ihJRZ': _0x4db978['aVvHY'] }, _0xca1df8 = JSTimers['setTimeout'](function () {
                throw new Error(_0x38c53a['ihJRZ']);
            }), _0x17b41d = JSTimers['setTimeout'](function () {
                throw new Error(_0x4db978['heTUI']);
            });
        _0x4db978['DZooX'](expect, JSTimers['callTimers']['bind'](null, [
            _0xca1df8,
            _0x17b41d
        ]))['toThrowError'](_0x4db978['aVvHY']);
    }), _0x4db978['Rvbeg'](it, _0x4db978['iWoKr'], function () {
        JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error(_0x4db978['DUdhP']);
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), _0x4db978['DZooX'](expect, NativeTiming['createTimer'])['toBeCalled']();
        const _0x514492 = NativeTiming['createTimer']['mock']['calls'][0x0][0x0];
        _0x4db978['DZooX'](expect, JSTimers['callTimers']['bind'](null, [_0x514492]))['toThrowError'](_0x4db978['DUdhP']);
    }), _0x4db978['Jblmg'](it, _0x4db978['EHZWe'], function () {
        const _0x547df9 = { 'toVLu': _0x4db978['heTUI'] };
        JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error(_0x4db978['aVvHY']);
        }), JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error(_0x547df9['toVLu']);
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), _0x4db978['nHtfX'](expect, NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](0x2);
        const _0x10dadd = NativeTiming['createTimer']['mock']['calls'][0x0][0x0];
        _0x4db978['VwGHH'](expect, JSTimers['callTimers']['bind'](null, [_0x10dadd]))['toThrowError'](_0x4db978['aVvHY']);
        const _0x225958 = NativeTiming['createTimer']['mock']['calls'][0x1][0x0];
        _0x4db978['eTzHG'](expect, JSTimers['callTimers']['bind'](null, [_0x225958]))['toThrowError'](_0x4db978['heTUI']);
    }), _0x4db978['EQTmL'](it, _0x4db978['EXWtp'], function () {
        const _0x4fc795 = JSTimers['setTimeout'](function () {
            throw new Error(_0x4db978['ydXcN']);
        });
        _0x4db978['eTzHG'](expect, JSTimers['callTimers']['bind'](null, [_0x4fc795]))['toThrowError'](_0x4db978['ydXcN']);
    }), _0x4db978['EQTmL'](it, _0x4db978['kZfoE'], function () {
        const _0xfea508 = { 'aJpTh': _0x4db978['heTUI'] }, _0xc4ec2 = JSTimers['setTimeout'](function () {
                throw new Error(_0x4db978['aVvHY']);
            }), _0x51c12e = JSTimers['setTimeout'](function () {
                throw new Error(_0xfea508['aJpTh']);
            });
        NativeTiming['createTimer'] = jest['fn'](), _0x4db978['ClpOw'](expect, JSTimers['callTimers']['bind'](null, [
            _0xc4ec2,
            _0x51c12e
        ]))['toThrowError'](_0x4db978['aVvHY']), _0x4db978['ClpOw'](expect, NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](0x1);
        const _0x40cc2f = NativeTiming['createTimer']['mock']['calls'][0x0][0x0];
        _0x4db978['ClpOw'](expect, JSTimers['callTimers']['bind'](null, [_0x40cc2f]))['toThrowError'](_0x4db978['heTUI']);
    }), _0x4db978['EQTmL'](it, _0x4db978['kADJV'], function () {
        const _0xf5f613 = JSTimers['setInterval'](function () {
            throw new Error(_0x4db978['ECZLw']);
        });
        _0x4db978['ClpOw'](expect, JSTimers['callTimers']['bind'](null, [_0xf5f613]))['toThrowError'](_0x4db978['ECZLw']);
    }), _0x4db978['EQTmL'](it, _0x4db978['eevOw'], function () {
        const _0x4e1bfa = JSTimers['setTimeout'](() => {
        });
        JSTimers['clearTimeout'](_0x4e1bfa), NativeTiming['deleteTimer'] = jest['fn'](), JSTimers['clearTimeout'](null), _0x4db978['LGSNH'](expect, NativeTiming['deleteTimer']['mock']['calls']['length'])['toBe'](0x0);
    });
});
