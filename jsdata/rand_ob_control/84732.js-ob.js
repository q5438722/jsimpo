import * as _0x516712 from '../../../src/js/tech/middleware.js';
import _0x358515 from 'sinon';
import _0x12425b from 'global/window';
QUnit['module']('Middleware', {
    'beforeEach'(_0x2da096) {
        this['clock'] = _0x358515['useFakeTimers']();
    },
    'afterEach'(_0x2b31bf) {
        this['clock']['restore']();
    }
}), QUnit['test']('middleware\x20can\x20be\x20added\x20with\x20the\x20use\x20method', function (_0x4b98a8) {
    const _0x95fe5c = {
            'pqwqw': 'foo',
            'zZSHc': 'we\x20are\x20able\x20to\x20add\x20middleware'
        }, _0x5f46a0 = {}, _0x4aa266 = () => _0x5f46a0;
    _0x516712['use'](_0x95fe5c['pqwqw'], _0x4aa266), _0x4b98a8['equal'](_0x516712['getMiddleware'](_0x95fe5c['pqwqw'])['pop'](), _0x4aa266, _0x95fe5c['zZSHc']);
}), QUnit['test']('middleware\x20get\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order', function (_0x454ece) {
    const _0x4fcde3 = {
            'zKkuf': function (_0x526e39, _0x5edb79) {
                return _0x526e39 * _0x5edb79;
            },
            'ZVquB': function (_0x35abcc, _0x5c8273) {
                return _0x35abcc + _0x5c8273;
            },
            'WAMRb': function (_0x243c03, _0x34c7ef) {
                return _0x243c03 / _0x34c7ef;
            },
            'wwsnO': function (_0x14e10d, _0x23f788) {
                return _0x14e10d / _0x23f788;
            },
            'YvbsQ': 'currentTime',
            'SFqGY': 'duration',
            'WYgyg': 'foo',
            'DDQRe': function (_0x127d2a, _0xe25a33, _0xf795f5, _0x1e3915, _0x5b17a8, _0x120e5e) {
                return _0x127d2a(_0xe25a33, _0xf795f5, _0x1e3915, _0x5b17a8, _0x120e5e);
            },
            'dUUxP': function (_0x20810b, _0x361b25, _0x4ea20f, _0x21a751, _0x3dacde, _0x5edce8) {
                return _0x20810b(_0x361b25, _0x4ea20f, _0x21a751, _0x3dacde, _0x5edce8);
            },
            'luwhR': function (_0x565d8c, _0x29d5c3, _0x2b7b4b, _0x3e139f, _0x46cdc6, _0x4e405d) {
                return _0x565d8c(_0x29d5c3, _0x2b7b4b, _0x3e139f, _0x46cdc6, _0x4e405d);
            }
        }, _0x829331 = [], _0x5dd0b3 = [], _0x1e47f0 = [], _0x214aaf = [
            {
                'currentTime'(_0x528684) {
                    return _0x829331['push'](_0x528684), _0x4fcde3['zKkuf'](_0x528684, 0x2);
                },
                'duration'(_0xcbba7b) {
                    return _0x5dd0b3['push'](_0xcbba7b), _0x4fcde3['ZVquB'](_0xcbba7b, 0x2);
                },
                'foo'(_0x2c4e96) {
                    return _0x1e47f0['push'](_0x2c4e96), _0x4fcde3['WAMRb'](_0x2c4e96, 0x2);
                }
            },
            {
                'currentTime'(_0x1dd704) {
                    return _0x829331['push'](_0x1dd704), _0x4fcde3['ZVquB'](_0x1dd704, 0x2);
                },
                'duration'(_0x44a25a) {
                    return _0x5dd0b3['push'](_0x44a25a), _0x4fcde3['wwsnO'](_0x44a25a, 0x2);
                },
                'foo'(_0x23c30e) {
                    return _0x1e47f0['push'](_0x23c30e), _0x4fcde3['ZVquB'](_0x23c30e, 0x3);
                }
            }
        ], _0x48b7c9 = {
            'currentTime'(_0x185222) {
                return 0x5;
            },
            'duration'(_0x38216c) {
                return 0x5;
            },
            'foo'(_0x4589fe) {
                return 0x5;
            }
        }, _0x4a1cd0 = _0x516712['get'](_0x214aaf, _0x48b7c9, _0x4fcde3['YvbsQ']), _0x1d305c = _0x516712['get'](_0x214aaf, _0x48b7c9, _0x4fcde3['SFqGY']), _0x8d58ae = _0x516712['get'](_0x214aaf, _0x48b7c9, _0x4fcde3['WYgyg']), _0x34a395 = (_0x19b901, _0x26584a, _0x2ee572, _0x1dd370, _0x18e48e) => {
            _0x454ece['equal'](_0x19b901, _0x26584a, 'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20' + _0x18e48e), _0x454ece['deepEqual'](_0x2ee572, _0x1dd370, 'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20' + _0x18e48e);
        };
    _0x4fcde3['DDQRe'](_0x34a395, _0x4a1cd0, 0xe, _0x829331, [
        0x5,
        0x7
    ], _0x4fcde3['YvbsQ']), _0x4fcde3['dUUxP'](_0x34a395, _0x1d305c, 4.5, _0x5dd0b3, [
        0x5,
        2.5
    ], _0x4fcde3['SFqGY']), _0x4fcde3['luwhR'](_0x34a395, _0x8d58ae, 0x4, _0x1e47f0, [
        0x5,
        0x8
    ], _0x4fcde3['WYgyg']);
}), QUnit['test']('middleware\x20set\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order', function (_0x1f988f) {
    const _0x1d298f = {
            'chzwl': function (_0x5e422a, _0x1efcd8) {
                return _0x5e422a * _0x1efcd8;
            },
            'wOmSO': function (_0x5db8b5, _0x33638a) {
                return _0x5db8b5 + _0x33638a;
            },
            'SdGAl': function (_0x482647, _0x1b70de) {
                return _0x482647 / _0x1b70de;
            },
            'UpJHX': function (_0x779cf9, _0x379129) {
                return _0x779cf9 + _0x379129;
            },
            'EIJjK': 'currentTime',
            'Jbnst': 'duration',
            'hIXoZ': 'foo',
            'qTGRR': function (_0xde0b60, _0x1d021f, _0x404a87, _0x29c7c8, _0x223bbb, _0x36f3ae) {
                return _0xde0b60(_0x1d021f, _0x404a87, _0x29c7c8, _0x223bbb, _0x36f3ae);
            }
        }, _0x193d62 = [], _0x19835e = [], _0x2d4150 = [], _0x147b62 = [
            {
                'currentTime'(_0x252378) {
                    return _0x193d62['push'](_0x252378), _0x1d298f['chzwl'](_0x252378, 0x2);
                },
                'duration'(_0x44c71f) {
                    return _0x19835e['push'](_0x44c71f), _0x1d298f['wOmSO'](_0x44c71f, 0x2);
                },
                'foo'(_0xf07c35) {
                    return _0x2d4150['push'](_0xf07c35), _0x1d298f['SdGAl'](_0xf07c35, 0x2);
                }
            },
            {
                'currentTime'(_0x2538a9) {
                    return _0x193d62['push'](_0x2538a9), _0x1d298f['UpJHX'](_0x2538a9, 0x2);
                },
                'duration'(_0x319ae8) {
                    return _0x19835e['push'](_0x319ae8), _0x1d298f['SdGAl'](_0x319ae8, 0x2);
                },
                'foo'(_0x57285f) {
                    return _0x2d4150['push'](_0x57285f), _0x1d298f['UpJHX'](_0x57285f, 0x3);
                }
            }
        ], _0xb2bef3 = {
            'currentTime'(_0x42a222) {
                return _0x193d62['push'](_0x42a222), _0x1d298f['SdGAl'](_0x42a222, 0x2);
            },
            'duration'(_0xdfa806) {
                return _0x19835e['push'](_0xdfa806), _0xdfa806;
            },
            'foo'(_0x53b119) {
                return _0x2d4150['push'](_0x53b119), _0x53b119;
            }
        }, _0x4eb96e = _0x516712['set'](_0x147b62, _0xb2bef3, _0x1d298f['EIJjK'], 0xa), _0x8e5e6e = _0x516712['set'](_0x147b62, _0xb2bef3, _0x1d298f['Jbnst'], 0xa), _0x2ec5a1 = _0x516712['set'](_0x147b62, _0xb2bef3, _0x1d298f['hIXoZ'], 0xa), _0x2c3f31 = (_0x499555, _0xa7fcc4, _0x2ab78b, _0x571537, _0x3d79fc) => {
            _0x1f988f['equal'](_0x499555, _0xa7fcc4, 'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20' + _0x3d79fc), _0x1f988f['deepEqual'](_0x2ab78b, _0x571537, 'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20' + _0x3d79fc);
        };
    _0x1d298f['qTGRR'](_0x2c3f31, _0x4eb96e, 0xb, _0x193d62, [
        0xa,
        0x14,
        0x16
    ], _0x1d298f['EIJjK']), _0x1d298f['qTGRR'](_0x2c3f31, _0x8e5e6e, 0x6, _0x19835e, [
        0xa,
        0xc,
        0x6
    ], _0x1d298f['Jbnst']), _0x1d298f['qTGRR'](_0x2c3f31, _0x2ec5a1, 0x8, _0x2d4150, [
        0xa,
        0x5,
        0x8
    ], _0x1d298f['hIXoZ']);
}), QUnit['test']('middleware\x20mediate\x20iterates\x20through\x20the\x20middleware\x20array\x20twice', function (_0x375471) {
    const _0x121c27 = {
        'XRIXO': 'play',
        'SrYOT': 'middleware\x20got\x20called\x20the\x20same\x20number\x20of\x20times',
        'cWlqN': 'both\x20middleware\x20got\x20called\x20before\x20the\x20tech',
        'ycYFW': 'the\x20tech\x20method\x20only\x20gets\x20called\x20once',
        'fPXfu': 'both\x20middleware\x20got\x20called\x20after\x20the\x20tech',
        'zCjjy': 'the\x20value\x20returned\x20by\x20the\x20tech\x20is\x20passed\x20through\x20the\x20middleware',
        'tdGiC': 'the\x20value\x20returned\x20to\x20the\x20player\x20is\x20the\x20value\x20returned\x20from\x20the\x20tech',
        'AAIIU': 'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x201',
        'TOVrF': 'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x202'
    };
    let _0x3d5234 = 0x0, _0x1227bf = 0x0, _0x33f096 = 0x0, _0x33e653, _0x1fe0c0, _0x449c25, _0x321433, _0x1ffd9c;
    const _0xbe59d4 = [
            {
                'callPlay'() {
                    _0x3d5234++;
                },
                'play'(_0x137d9e, _0x278a46) {
                    _0x1227bf++, _0x1fe0c0 = _0x278a46, _0x321433 = _0x137d9e;
                }
            },
            {
                'callPlay'() {
                    _0x3d5234++;
                },
                'play'(_0x9dcec1, _0x27bdb8) {
                    _0x1227bf++, _0x449c25 = _0x27bdb8, _0x1ffd9c = _0x9dcec1;
                }
            }
        ], _0x159651 = {
            'play'() {
                return _0x33f096++, _0x33e653 = {
                    'then': () => {
                    }
                }, _0x33e653;
            }
        }, _0x1e0929 = _0x516712['mediate'](_0xbe59d4, _0x159651, _0x121c27['XRIXO']);
    _0x375471['equal'](_0x3d5234, _0x1227bf, _0x121c27['SrYOT']), _0x375471['equal'](_0x3d5234, 0x2, _0x121c27['cWlqN']), _0x375471['equal'](_0x33f096, 0x1, _0x121c27['ycYFW']), _0x375471['equal'](_0x1227bf, 0x2, _0x121c27['fPXfu']), _0x375471['deepEqual'](_0x1fe0c0['then'], _0x33e653['then'], _0x121c27['zCjjy']), _0x375471['deepEqual'](_0x449c25, _0x33e653, _0x121c27['zCjjy']), _0x375471['deepEqual'](_0x1e0929, _0x33e653, _0x121c27['tdGiC']), _0x375471['equal'](_0x321433, ![], _0x121c27['AAIIU']), _0x375471['equal'](_0x1ffd9c, ![], _0x121c27['TOVrF']);
}), QUnit['test']('middleware\x20mediate\x20allows\x20and\x20can\x20detect\x20cancellation', function (_0x172a9f) {
    const _0x55f100 = {
        'BSanA': 'play',
        'ttfdv': 'both\x20middleware\x20run\x20until\x20middleware\x20terminates',
        'oaEvj': 'the\x20tech\x20should\x20not\x20be\x20called\x20if\x20a\x20middleware\x20terminates',
        'feRKd': 'both\x20middleware\x20run\x20after\x20the\x20tech',
        'pCTnD': 'null\x20is\x20returned\x20through\x20the\x20middleware\x20if\x20a\x20middleware\x20terminated\x20previously',
        'dDyUW': 'null\x20is\x20returned\x20to\x20the\x20player\x20if\x20a\x20middleware\x20terminated\x20previously',
        'eccUC': 'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x201',
        'xwKIT': 'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x202'
    };
    let _0x40bd80 = 0x0, _0x2ce57b = 0x0, _0x443271 = 0x0, _0x537722, _0x31e9e2, _0x4dd1dc, _0xa814d8;
    const _0x33d376 = [
            {
                'callPlay'() {
                    _0x40bd80++;
                },
                'play'(_0x264abc, _0x4a1319) {
                    _0x2ce57b++, _0x537722 = _0x4a1319, _0x4dd1dc = _0x264abc;
                }
            },
            {
                'callPlay'() {
                    return _0x40bd80++, _0x516712['TERMINATOR'];
                },
                'play'(_0x26d275, _0x479862) {
                    _0x2ce57b++, _0x31e9e2 = _0x479862, _0xa814d8 = _0x26d275;
                }
            }
        ], _0x16244e = {
            'play'() {
                return _0x443271++, {
                    'then': () => {
                    }
                };
            }
        }, _0x4adfc1 = _0x516712['mediate'](_0x33d376, _0x16244e, _0x55f100['BSanA']);
    _0x172a9f['equal'](_0x40bd80, 0x2, _0x55f100['ttfdv']), _0x172a9f['equal'](_0x443271, 0x0, _0x55f100['oaEvj']), _0x172a9f['equal'](_0x2ce57b, 0x2, _0x55f100['feRKd']), _0x172a9f['equal'](_0x537722, null, _0x55f100['pCTnD']), _0x172a9f['equal'](_0x31e9e2, null, _0x55f100['pCTnD']), _0x172a9f['equal'](_0x4adfc1, null, _0x55f100['dDyUW']), _0x172a9f['equal'](_0x4dd1dc, !![], _0x55f100['eccUC']), _0x172a9f['equal'](_0xa814d8, !![], _0x55f100['xwKIT']);
}), QUnit['test']('setSource\x20is\x20run\x20asynchronously', function (_0x2dcc74) {
    const _0x203200 = {
        'MeQYm': 'vid1',
        'ihFgD': 'foo',
        'buMIa': 'video/foo',
        'rpWGX': 'no\x20src\x20was\x20returned\x20yet',
        'mRpOe': 'no\x20accumulator\x20was\x20returned\x20yet',
        'VyhgH': 'we\x20got\x20the\x20same\x20source\x20back',
        'yFTRO': 'we\x20did\x20not\x20accumulate\x20any\x20middleware\x20since\x20there\x20were\x20none'
    };
    let _0x39f4a2, _0x56fd1b;
    _0x516712['setSource']({
        'id'() {
            return _0x203200['MeQYm'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x203200['ihFgD'],
        'type': _0x203200['buMIa']
    }, function (_0x1fba2c, _0x474456) {
        _0x39f4a2 = _0x1fba2c, _0x56fd1b = _0x474456;
    }), _0x2dcc74['equal'](_0x39f4a2, undefined, _0x203200['rpWGX']), _0x2dcc74['equal'](_0x56fd1b, undefined, _0x203200['mRpOe']), this['clock']['tick'](0x1), _0x2dcc74['deepEqual'](_0x39f4a2, {
        'src': _0x203200['ihFgD'],
        'type': _0x203200['buMIa']
    }, _0x203200['VyhgH']), _0x2dcc74['equal'](_0x56fd1b['length'], 0x0, _0x203200['yFTRO']);
}), QUnit['test']('setSource\x20selects\x20a\x20source\x20based\x20on\x20the\x20middleware\x20given', function (_0x9159dd) {
    const _0x188bc0 = {
        'XXHuv': function (_0x122fd8, _0xad938f, _0x57685f) {
            return _0x122fd8(_0xad938f, _0x57685f);
        },
        'FzjrI': 'http://example.com/video.mp4',
        'qzVMd': 'video/mp4',
        'QtVbF': 'vid1',
        'xAVsT': 'video/foo',
        'SuJEt': 'foo',
        'uKjHc': 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4',
        'bHULj': 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4',
        'YCrRj': 'we\x20got\x20one\x20middleware',
        'looiq': 'we\x20chose\x20the\x20one\x20middleware'
    };
    let _0x5d5b44, _0x1d57de;
    const _0x7ec5e1 = {
            'setSource'(_0x35e05d, _0x102191) {
                _0x188bc0['XXHuv'](_0x102191, null, {
                    'src': _0x188bc0['FzjrI'],
                    'type': _0x188bc0['qzVMd']
                });
            }
        }, _0x528144 = () => _0x7ec5e1;
    _0x516712['use'](_0x188bc0['xAVsT'], _0x528144), _0x516712['setSource']({
        'id'() {
            return _0x188bc0['QtVbF'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x188bc0['SuJEt'],
        'type': _0x188bc0['xAVsT']
    }, function (_0x18e73f, _0x511d5d) {
        _0x5d5b44 = _0x18e73f, _0x1d57de = _0x511d5d;
    }), this['clock']['tick'](0x1), _0x9159dd['equal'](_0x5d5b44['type'], _0x188bc0['qzVMd'], _0x188bc0['uKjHc']), _0x9159dd['equal'](_0x5d5b44['src'], _0x188bc0['FzjrI'], _0x188bc0['bHULj']), _0x9159dd['equal'](_0x1d57de['length'], 0x1, _0x188bc0['YCrRj']), _0x9159dd['equal'](_0x1d57de[0x0], _0x7ec5e1, _0x188bc0['looiq']), _0x516712['getMiddleware'](_0x188bc0['xAVsT'])['pop']();
}), QUnit['test']('setSource\x20can\x20select\x20multiple\x20middleware\x20from\x20multiple\x20types', function (_0x10263b) {
    const _0x5b2a98 = {
        'XkcAF': function (_0x5e2444, _0x3125fb, _0x20571b) {
            return _0x5e2444(_0x3125fb, _0x20571b);
        },
        'kwEsH': 'bar',
        'nbigW': 'video/bar',
        'uGuZy': 'http://example.com/video.mp4',
        'qJtIj': 'video/mp4',
        'AVfKC': 'vid1',
        'ZYbac': 'video/foo',
        'lhaph': 'foo',
        'yWGvl': 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4',
        'YhoGr': 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4',
        'Gfpwf': 'we\x20got\x20two\x20middleware',
        'qYMWM': 'foomw\x20is\x20the\x20first\x20middleware',
        'fJPil': 'barmw\x20is\x20the\x20first\x20middleware'
    };
    let _0x27b0d2, _0x85b3fa;
    const _0xc79269 = {
            'setSource'(_0x1b9fef, _0x3d1280) {
                _0x5b2a98['XkcAF'](_0x3d1280, null, {
                    'src': _0x5b2a98['kwEsH'],
                    'type': _0x5b2a98['nbigW']
                });
            }
        }, _0x3f26a5 = {
            'setSource'(_0xa9765b, _0x8c984b) {
                _0x5b2a98['XkcAF'](_0x8c984b, null, {
                    'src': _0x5b2a98['uGuZy'],
                    'type': _0x5b2a98['qJtIj']
                });
            }
        }, _0xcfedcd = () => _0xc79269, _0x1cd79e = () => _0x3f26a5;
    _0x516712['use'](_0x5b2a98['ZYbac'], _0xcfedcd), _0x516712['use'](_0x5b2a98['nbigW'], _0x1cd79e), _0x516712['setSource']({
        'id'() {
            return _0x5b2a98['AVfKC'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x5b2a98['lhaph'],
        'type': _0x5b2a98['ZYbac']
    }, function (_0x47b097, _0x14eb14) {
        _0x27b0d2 = _0x47b097, _0x85b3fa = _0x14eb14;
    }), this['clock']['tick'](0x1), _0x10263b['equal'](_0x27b0d2['type'], _0x5b2a98['qJtIj'], _0x5b2a98['yWGvl']), _0x10263b['equal'](_0x27b0d2['src'], _0x5b2a98['uGuZy'], _0x5b2a98['YhoGr']), _0x10263b['equal'](_0x85b3fa['length'], 0x2, _0x5b2a98['Gfpwf']), _0x10263b['equal'](_0x85b3fa[0x0], _0xc79269, _0x5b2a98['qYMWM']), _0x10263b['equal'](_0x85b3fa[0x1], _0x3f26a5, _0x5b2a98['fJPil']), _0x516712['getMiddleware'](_0x5b2a98['ZYbac'])['pop'](), _0x516712['getMiddleware'](_0x5b2a98['nbigW'])['pop']();
}), QUnit['test']('setSource\x20will\x20select\x20all\x20middleware\x20of\x20a\x20given\x20type,\x20until\x20src\x20change', function (_0x2bfc09) {
    const _0x1c1eb2 = {
        'uHYMl': function (_0x4a4885, _0x4289d0, _0x110ba6) {
            return _0x4a4885(_0x4289d0, _0x110ba6);
        },
        'sYzpE': 'bar',
        'YTktc': 'video/foo',
        'OrqDT': function (_0x42560b, _0x375563, _0x2c63b3) {
            return _0x42560b(_0x375563, _0x2c63b3);
        },
        'UKhNE': 'http://example.com/video.mp4',
        'UEInN': 'video/mp4',
        'unPqH': function (_0x5108f5, _0x5d97de, _0x2887da) {
            return _0x5108f5(_0x5d97de, _0x2887da);
        },
        'CapzI': 'vid1',
        'jZkjB': 'foo',
        'koVFI': 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4',
        'mjmPN': 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4',
        'ITmLP': 'we\x20got\x20two\x20middleware',
        'XOPNW': 'foomw\x20is\x20the\x20first\x20middleware'
    };
    let _0x39b18b, _0x48043c;
    const _0x500cd4 = {
            'setSource'(_0x56abdd, _0x288675) {
                _0x1c1eb2['uHYMl'](_0x288675, null, {
                    'src': _0x1c1eb2['sYzpE'],
                    'type': _0x1c1eb2['YTktc']
                });
            }
        }, _0x1bd993 = {
            'setSource'(_0x6eab76, _0x56468a) {
                _0x1c1eb2['OrqDT'](_0x56468a, null, {
                    'src': _0x1c1eb2['UKhNE'],
                    'type': _0x1c1eb2['UEInN']
                });
            }
        }, _0x48a172 = {
            'setSource'(_0x48a6f3, _0x1db3cb) {
                _0x1c1eb2['unPqH'](_0x1db3cb, null, {
                    'src': _0x1c1eb2['UKhNE'],
                    'type': _0x1c1eb2['UEInN']
                });
            }
        }, _0x125de0 = () => _0x500cd4, _0x2d4fca = () => _0x1bd993, _0x5b436f = () => _0x48a172;
    _0x516712['use'](_0x1c1eb2['YTktc'], _0x125de0), _0x516712['use'](_0x1c1eb2['YTktc'], _0x2d4fca), _0x516712['use'](_0x1c1eb2['YTktc'], _0x5b436f), _0x516712['setSource']({
        'id'() {
            return _0x1c1eb2['CapzI'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x1c1eb2['jZkjB'],
        'type': _0x1c1eb2['YTktc']
    }, function (_0x15513a, _0x419027) {
        _0x39b18b = _0x15513a, _0x48043c = _0x419027;
    }), this['clock']['tick'](0x1), _0x2bfc09['equal'](_0x39b18b['type'], _0x1c1eb2['UEInN'], _0x1c1eb2['koVFI']), _0x2bfc09['equal'](_0x39b18b['src'], _0x1c1eb2['UKhNE'], _0x1c1eb2['mjmPN']), _0x2bfc09['equal'](_0x48043c['length'], 0x2, _0x1c1eb2['ITmLP']), _0x2bfc09['equal'](_0x48043c[0x0], _0x500cd4, _0x1c1eb2['XOPNW']), _0x2bfc09['equal'](_0x48043c[0x1], _0x1bd993, _0x1c1eb2['XOPNW']), _0x516712['getMiddleware'](_0x1c1eb2['YTktc'])['pop'](), _0x516712['getMiddleware'](_0x1c1eb2['YTktc'])['pop'](), _0x516712['getMiddleware'](_0x1c1eb2['YTktc'])['pop']();
}), QUnit['test']('a\x20middleware\x20without\x20a\x20mediator\x20method\x20will\x20not\x20throw\x20an\x20error', function (_0x443b0f) {
    const _0xaa9522 = {
        'GcfJp': function (_0x24dc62) {
            return _0x24dc62();
        },
        'irIep': function (_0x55ade2) {
            return _0x55ade2();
        },
        'OMEnj': 'pause',
        'avWxZ': 'pauseCalled\x20was\x20called\x20once\x20and\x20no\x20error\x20was\x20thrown'
    };
    let _0x491806 = 0x0;
    const _0x58b2d8 = {}, _0x359255 = () => _0x58b2d8, _0x49de2e = () => ({
            'pause'() {
                _0x491806++;
            }
        });
    _0x516712['mediate']([
        _0xaa9522['GcfJp'](_0x359255),
        _0xaa9522['irIep'](_0x49de2e)
    ], {
        'pause': () => {
        }
    }, _0xaa9522['OMEnj']), _0x443b0f['equal'](_0x491806, 0x1, _0xaa9522['avWxZ']);
}), QUnit['test']('a\x20middleware\x20factory\x20is\x20not\x20called\x20on\x20source\x20change', function (_0x208408) {
    const _0x23ae11 = {
        'FNyrP': function (_0x865f79, _0x3da604, _0x5ce7c1) {
            return _0x865f79(_0x3da604, _0x5ce7c1);
        },
        'bjtqU': 'http://example.com/video.mp4',
        'uTAhA': 'video/mp4',
        'dQQcy': 'vid1',
        'GHXpN': 'video/foo',
        'BVRwQ': 'foo',
        'jABcw': 'the\x20factory\x20was\x20called\x20once',
        'ggUoB': 'bar',
        'iQJBN': 'the\x20factory\x20was\x20not\x20called\x20again'
    };
    let _0x4d2fe2 = 0x0;
    const _0x1beaee = {
            'setSource'(_0x5a2843, _0x4ee14f) {
                _0x23ae11['FNyrP'](_0x4ee14f, null, {
                    'src': _0x23ae11['bjtqU'],
                    'type': _0x23ae11['uTAhA']
                });
            }
        }, _0x10e997 = () => {
            return _0x4d2fe2++, _0x1beaee;
        };
    _0x516712['use'](_0x23ae11['GHXpN'], _0x10e997), _0x516712['setSource']({
        'id'() {
            return _0x23ae11['dQQcy'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x23ae11['BVRwQ'],
        'type': _0x23ae11['GHXpN']
    }, function () {
    }), this['clock']['tick'](0x1), _0x208408['equal'](_0x4d2fe2, 0x1, _0x23ae11['jABcw']), _0x516712['setSource']({
        'id'() {
            return _0x23ae11['dQQcy'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x23ae11['ggUoB'],
        'type': _0x23ae11['GHXpN']
    }, function () {
    }), this['clock']['tick'](0x1), _0x208408['equal'](_0x4d2fe2, 0x1, _0x23ae11['iQJBN']), _0x516712['getMiddleware'](_0x23ae11['GHXpN'])['pop']();
}), QUnit['test']('a\x20middleware\x20factory\x20is\x20called\x20on\x20a\x20new\x20source\x20with\x20a\x20new\x20player', function (_0x224af0) {
    const _0x199328 = {
        'DdxxN': function (_0x26c2cc, _0x283fe7, _0x546dd7) {
            return _0x26c2cc(_0x283fe7, _0x546dd7);
        },
        'GBBBY': 'http://example.com/video.mp4',
        'ftuQd': 'video/mp4',
        'ebCbp': 'vid1',
        'roOWB': 'vid2',
        'lcjMP': 'video/foo',
        'MNlSF': 'foo',
        'PyPFr': 'the\x20factory\x20was\x20called\x20once',
        'hjOvQ': 'bar',
        'vtlcj': 'the\x20factory\x20was\x20called\x20again'
    };
    let _0x13ea0d = 0x0;
    const _0x4c399c = {
            'setSource'(_0x223fa8, _0x5ccc7d) {
                _0x199328['DdxxN'](_0x5ccc7d, null, {
                    'src': _0x199328['GBBBY'],
                    'type': _0x199328['ftuQd']
                });
            }
        }, _0x1da961 = () => {
            return _0x13ea0d++, _0x4c399c;
        };
    _0x516712['use'](_0x199328['lcjMP'], _0x1da961), _0x516712['setSource']({
        'id'() {
            return _0x199328['ebCbp'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x199328['MNlSF'],
        'type': _0x199328['lcjMP']
    }, function () {
    }), this['clock']['tick'](0x1), _0x224af0['equal'](_0x13ea0d, 0x1, _0x199328['PyPFr']), _0x516712['setSource']({
        'id'() {
            return _0x199328['roOWB'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x199328['hjOvQ'],
        'type': _0x199328['lcjMP']
    }, function () {
    }), this['clock']['tick'](0x1), _0x224af0['equal'](_0x13ea0d, 0x2, _0x199328['vtlcj']), _0x516712['getMiddleware'](_0x199328['lcjMP'])['pop']();
}), QUnit['test']('a\x20middleware\x20without\x20a\x20setSource\x20gets\x20chosen\x20implicitly', function (_0x144c28) {
    const _0x45181f = {
        'daNzI': 'vid1',
        'caMiA': 'video/foo',
        'usbkG': 'foo',
        'ZZHJE': 'we\x20have\x201\x20middleware\x20set'
    };
    let _0x17cb70 = [];
    const _0x5222b1 = {
            'currentTime'(_0x1d31dc) {
            }
        }, _0x30b469 = () => _0x5222b1;
    _0x516712['use'](_0x45181f['caMiA'], _0x30b469), _0x516712['setSource']({
        'id'() {
            return _0x45181f['daNzI'];
        },
        'setTimeout': _0x12425b['setTimeout']
    }, {
        'src': _0x45181f['usbkG'],
        'type': _0x45181f['caMiA']
    }, function (_0xc16fdd, _0x2d7c55) {
        _0x17cb70 = _0x2d7c55;
    }), this['clock']['tick'](0x1), _0x144c28['equal'](_0x17cb70['length'], 0x1, _0x45181f['ZZHJE']), _0x516712['getMiddleware'](_0x45181f['caMiA'])['pop']();
});
