
function _0x38ea(_0x5eae21, _0x373f52) {
    return _0x38ea = function (_0xd1eb08, _0x4c3c46) {
        _0xd1eb08 = _0xd1eb08 - (0xa * -0x24d + 0x9a3 * 0x1 + 0xf3f);
        var _0x55f9e8 = _0x5ea7[_0xd1eb08];
        return _0x55f9e8;
    }, _0x38ea(_0x5eae21, _0x373f52);
}
var _0x383c84 = _0x38ea;
(function (_0x21c8dc, _0x664c92) {
    var _0x2d27ce = _0x38ea;
    while (!![]) {
        try {
            var _0x167d70 = parseInt(_0x2d27ce(0x1e0)) + -parseInt(_0x2d27ce(0x1e1)) * parseInt(_0x2d27ce(0x1e2)) + parseInt(_0x2d27ce(0x1e3)) + -parseInt(_0x2d27ce(0x1e4)) + -parseInt(_0x2d27ce(0x1e5)) + -parseInt(_0x2d27ce(0x1e6)) + -parseInt(_0x2d27ce(0x1e7)) * -parseInt(_0x2d27ce(0x1e8));
            if (_0x167d70 === _0x664c92)
                break;
            else
                _0x21c8dc['push'](_0x21c8dc['shift']());
        } catch (_0x597f36) {
            _0x21c8dc['push'](_0x21c8dc['shift']());
        }
    }
}(_0x5ea7, 0x1 * 0xa538f + 0x9c7 * -0x1da + 0x3eb * 0x5ce));
var cluster = require(_0x383c84(0x1e9)), numCPUs = require('os')[_0x383c84(0x1ea)]() ? require('os')[_0x383c84(0x1ea)]()[_0x383c84(0x1eb)] : 0x24ce + 0x5b * 0x23 + -0x313e, path = require(_0x383c84(0x1ec)), EventEmitter2 = require('eventemitter2')[_0x383c84(0x1ed)], fs = require('fs'), vizion = require('vizion'), debug = require('debug')('pm2:god'), Utility = require(_0x383c84(0x1ee)), cst = require(_0x383c84(0x1ef)), timesLimit = require('async/timesLimit'), Configuration = require(_0x383c84(0x1f0)), semver = require(_0x383c84(0x1f1));
semver['lt'](process[_0x383c84(0x1f2)], _0x383c84(0x1f3)) ? cluster['setupMaster']({
    'windowsHide': !![],
    'exec': path[_0x383c84(0x1f4)](path['dirname'](module[_0x383c84(0x1f5)]), 'ProcessContainerLegacy.js')
}) : cluster[_0x383c84(0x1f6)]({
    'windowsHide': !![],
    'exec': path[_0x383c84(0x1f4)](path['dirname'](module['filename']), _0x383c84(0x1f7))
});
var God = module['exports'] = {
    'next_id': 0x0,
    'clusters_db': {},
    'configuration': {},
    'started_at': Date[_0x383c84(0x1f8)](),
    'system_infos_proc': null,
    'system_infos': null,
    'bus': new EventEmitter2({
        'wildcard': !![],
        'delimiter': ':',
        'maxListeners': 0x3e8
    })
};
Utility[_0x383c84(0x1f9)](God[_0x383c84(0x1fa)]), require(_0x383c84(0x1fb))(God), require(_0x383c84(0x1fc))(God), require(_0x383c84(0x1fd))(God), require(_0x383c84(0x1fe))(God), require(_0x383c84(0x1ff))(God), require('./God/ActionMethods')(God), require(_0x383c84(0x200))(God), God[_0x383c84(0x201)] = function () {
    var _0x46785f = _0x383c84, _0x3dae0a = {
            'lQGpP': _0x46785f(0x202),
            'bngSK': function (_0x52f019, _0x1e91df, _0x3f4891) {
                return _0x52f019(_0x1e91df, _0x3f4891);
            }
        };
    require('./Worker.js')(this), God[_0x46785f(0x203)] = null, this[_0x46785f(0x204)] = Configuration['getSync'](_0x3dae0a['lQGpP']), _0x3dae0a['bngSK'](setTimeout, function () {
        var _0x134e01 = _0x46785f;
        God[_0x134e01(0x205)][_0x134e01(0x206)]();
    }, 0x2482 + 0x1d97 + -0x4025);
}, God[_0x383c84(0x207)] = function (_0x241734, _0x3c6082, _0x848548) {
    var _0x28a9e8 = _0x383c84, _0xfeae19 = { 'TacFR': _0x28a9e8(0x208) };
    try {
        var _0xbf2541 = _0xfeae19[_0x28a9e8(0x209)][_0x28a9e8(0x20a)]('|'), _0x352e0e = -0x1 * 0x1a3f + 0x7 * 0x1d9 + 0xd50;
        while (!![]) {
            switch (_0xbf2541[_0x352e0e++]) {
            case '0':
                if (_0x241734[_0x28a9e8(0x20b)])
                    fs[_0x28a9e8(0x20c)](_0x241734[_0x28a9e8(0x20b)], _0x326eec);
                continue;
            case '1':
                var _0x326eec = _0x28a9e8(0x20d) + new Date()[_0x28a9e8(0x20e)]() + ']\x20app\x20exited';
                continue;
            case '2':
                _0x326eec += '\x0a';
                continue;
            case '3':
                if (_0x848548)
                    _0x326eec += _0x28a9e8(0x20f) + _0x848548;
                continue;
            case '4':
                if (_0x3c6082)
                    _0x326eec += 'itself\x20with\x20exit\x20code:\x20' + _0x3c6082;
                continue;
            case '5':
                if (_0x241734[_0x28a9e8(0x210)])
                    fs[_0x28a9e8(0x20c)](_0x241734[_0x28a9e8(0x210)], _0x326eec);
                continue;
            case '6':
                if (_0x241734['pm_err_log_path'])
                    fs[_0x28a9e8(0x20c)](_0x241734[_0x28a9e8(0x211)], _0x326eec);
                continue;
            }
            break;
        }
    } catch (_0x214411) {
    }
}, God['prepare'] = function prepare(_0x5d07a8, _0x4323cd) {
    var _0x158ba3 = _0x383c84, _0x1d9b4f = {
            'vQDra': '2|5|0|3|1|6|4',
            'JNsug': function (_0x37c781, _0x52970d) {
                return _0x37c781 === _0x52970d;
            },
            'mnvll': _0x158ba3(0x212),
            'ccqtb': function (_0x199478, _0xb080f4) {
                return _0x199478 == _0xb080f4;
            },
            'MsImy': function (_0x326b64, _0x2aa77e, _0x58c114) {
                return _0x326b64(_0x2aa77e, _0x58c114);
            },
            'lZDcq': function (_0x18d905, _0x2f3998) {
                return _0x18d905 < _0x2f3998;
            },
            'qINKn': _0x158ba3(0x206),
            'irbdN': function (_0x3e8efe, _0xf794be, _0x1ef5f6, _0x4a484d, _0x59ee4e) {
                return _0x3e8efe(_0xf794be, _0x1ef5f6, _0x4a484d, _0x59ee4e);
            },
            'ejkpO': function (_0x14113d, _0xe15d2f) {
                return _0x14113d <= _0xe15d2f;
            }
        }, _0x5adfc8 = _0x1d9b4f[_0x158ba3(0x213)][_0x158ba3(0x20a)]('|'), _0x55e5c2 = -0x1dd9 * 0x1 + 0x1 * -0x2d2 + -0x20ab * -0x1;
    while (!![]) {
        switch (_0x5adfc8[_0x55e5c2++]) {
        case '0':
            if (_0x1d9b4f[_0x158ba3(0x214)](typeof _0x5d07a8['instances'], _0x1d9b4f[_0x158ba3(0x215)])) {
                _0x5d07a8['vizion_running'] = ![];
                if (_0x5d07a8[_0x158ba3(0x216)] && _0x5d07a8[_0x158ba3(0x216)][_0x158ba3(0x217)])
                    _0x5d07a8[_0x158ba3(0x216)][_0x158ba3(0x217)] = ![];
                if (_0x1d9b4f[_0x158ba3(0x218)](_0x5d07a8[_0x158ba3(0x219)], cst[_0x158ba3(0x21a)])) {
                    _0x5d07a8['pm_id'] = God[_0x158ba3(0x21b)]();
                    var _0x13d8d6 = {
                        'pm2_env': _0x5d07a8,
                        'process': {}
                    };
                    return God['clusters_db'][_0x5d07a8[_0x158ba3(0x21c)]] = _0x13d8d6, _0x1d9b4f[_0x158ba3(0x21d)](_0x4323cd, null, [God[_0x158ba3(0x21e)][_0x5d07a8[_0x158ba3(0x21c)]]]);
                }
                return God[_0x158ba3(0x21f)](_0x5d07a8, function (_0x30888f, _0x549f76) {
                    var _0x48d493 = _0x158ba3;
                    if (_0x30888f)
                        return _0x4323cd(_0x30888f);
                    return God[_0x48d493(0x220)](_0x1a7275['YDNCC'], _0x549f76, !![]), _0x1a7275[_0x48d493(0x221)](_0x4323cd, null, [Utility[_0x48d493(0x222)](_0x549f76)]);
                });
            }
            continue;
        case '1':
            if (_0x1d9b4f[_0x158ba3(0x214)](_0x5d07a8['instances'], 0x18e7 + 0x6fb + -0x1fe2))
                _0x5d07a8[_0x158ba3(0x223)] = numCPUs;
            else
                _0x1d9b4f[_0x158ba3(0x224)](_0x5d07a8[_0x158ba3(0x223)], -0xb * 0xcd + -0x1f7a + 0x2849 * 0x1) && (_0x5d07a8['instances'] += numCPUs);
            continue;
        case '2':
            var _0x1a7275 = {
                'YDNCC': _0x1d9b4f[_0x158ba3(0x225)],
                'rZKKm': function (_0x349453, _0x38688b, _0x42a63e) {
                    return _0x349453(_0x38688b, _0x42a63e);
                }
            };
            continue;
        case '3':
            _0x5d07a8[_0x158ba3(0x223)] = parseInt(_0x5d07a8[_0x158ba3(0x223)]);
            continue;
        case '4':
            _0x1d9b4f[_0x158ba3(0x226)](timesLimit, _0x5d07a8[_0x158ba3(0x223)], -0x22 * 0x23 + 0x1d77 + -0x18d0, function (_0x2dd438, _0x591482) {
                var _0x4e4c93 = _0x158ba3, _0x5d6856 = {
                        'kwwiM': function (_0x416780, _0x240ef9, _0x4cf96c) {
                            var _0x4223fc = _0x38ea;
                            return _0x1a7275[_0x4223fc(0x221)](_0x416780, _0x240ef9, _0x4cf96c);
                        }
                    };
                _0x5d07a8['vizion_running'] = ![], _0x5d07a8[_0x4e4c93(0x216)] && _0x5d07a8[_0x4e4c93(0x216)][_0x4e4c93(0x217)] && (_0x5d07a8['env'][_0x4e4c93(0x217)] = ![]), God['injectVariables'](_0x5d07a8, function _0x4ba903(_0x1c6cc5, _0x1f6d60) {
                    var _0x196ec1 = _0x4e4c93;
                    if (_0x1c6cc5)
                        return _0x591482(_0x1c6cc5);
                    return God[_0x196ec1(0x21f)](Utility['clone'](_0x1f6d60), function (_0x3ee829, _0x11fa4f) {
                        var _0x43de0d = _0x196ec1;
                        if (_0x3ee829)
                            return _0x591482(_0x3ee829);
                        return God['notify'](_0x43de0d(0x206), _0x11fa4f, !![]), _0x5d6856['kwwiM'](_0x591482, null, Utility['clone'](_0x11fa4f));
                    });
                });
            }, _0x4323cd);
            continue;
        case '5':
            _0x5d07a8['env'][_0x158ba3(0x227)] = Utility['generateUUID']();
            continue;
        case '6':
            _0x1d9b4f[_0x158ba3(0x228)](_0x5d07a8['instances'], -0x1 * -0x238b + 0x1c77 + -0x4002) && (_0x5d07a8[_0x158ba3(0x223)] = 0x305 * -0xc + 0x2 * -0x841 + -0x1195 * -0x3);
            continue;
        }
        break;
    }
}, God['executeApp'] = function executeApp(_0x717c0c, _0x2431c9) {
    var _0x245856 = _0x383c84, _0x3103a0 = {
            'JXnRn': _0x245856(0x229),
            'PAasd': function (_0x2cab3d, _0x1fe4b) {
                return _0x2cab3d === _0x1fe4b;
            },
            'PmttJ': _0x245856(0x21c),
            'vihPC': _0x245856(0x22a),
            'LXbcP': _0x245856(0x22b),
            'TObZR': function (_0x5b2f8e, _0x4d6c31) {
                return _0x5b2f8e + _0x4d6c31;
            },
            'WzHww': _0x245856(0x22c),
            'ierGy': _0x245856(0x22d),
            'BvOkO': _0x245856(0x22e),
            'klPRx': _0x245856(0x22f),
            'fvAod': _0x245856(0x230),
            'lKQxk': 'axm_monitor',
            'LwZen': _0x245856(0x231),
            'jEIDP': _0x245856(0x219),
            'voGZH': _0x245856(0x232),
            'uZCzH': _0x245856(0x233),
            'agzlP': 'vizion_running',
            'YaVts': function (_0x25b8f4, _0x285a76) {
                return _0x25b8f4 !== _0x285a76;
            },
            'XzqnD': 'false',
            'bYrkc': function (_0x3cf4b7, _0x32055e, _0x855f55) {
                return _0x3cf4b7(_0x32055e, _0x855f55);
            },
            'CDJUd': _0x245856(0x234),
            'vOyuw': function (_0x5d1d48, _0x9746a) {
                return _0x5d1d48(_0x9746a);
            },
            'eMoeq': function (_0x51a417, _0x767f9d) {
                return _0x51a417 || _0x767f9d;
            },
            'KFNhf': _0x245856(0x235),
            'arZQR': _0x245856(0x236),
            'Dyfuw': function (_0x3317ed, _0x4cf451) {
                return _0x3317ed(_0x4cf451);
            },
            'YzzjO': function (_0x47802a, _0x2c4da7) {
                return _0x47802a && _0x2c4da7;
            },
            'KHafb': function (_0x1c42cb, _0x5bcf73, _0xea5454) {
                return _0x1c42cb(_0x5bcf73, _0xea5454);
            },
            'KaeFI': _0x245856(0x237)
        }, _0x2df966 = _0x3103a0[_0x245856(0x238)][_0x245856(0x20a)]('|'), _0x3b595b = 0x250f + 0x17e9 * -0x1 + -0xd26;
    while (!![]) {
        switch (_0x2df966[_0x3b595b++]) {
        case '0':
            _0x3103a0['PAasd'](_0x10c70e[_0x3103a0['PmttJ']], undefined) && (_0x10c70e[_0x3103a0[_0x245856(0x239)]] = God[_0x245856(0x21b)](), _0x10c70e[_0x3103a0[_0x245856(0x23a)]] = -0xb * -0x73 + 0xf * -0x1 + -0x2 * 0x271, _0x10c70e[_0x3103a0[_0x245856(0x23b)]] = 0x1213 + -0x8b0 + -0x963, _0x10c70e[_0x245856(0x23c)] = _0x10c70e['pm_pid_path'][_0x245856(0x23d)](/-[0-9]+\.pid$|\.pid$/g, _0x3103a0[_0x245856(0x23e)](_0x3103a0['TObZR']('-', _0x10c70e[_0x3103a0[_0x245856(0x239)]]), _0x3103a0['WzHww'])), !_0x10c70e[_0x3103a0[_0x245856(0x23f)]] && [
                '',
                _0x3103a0[_0x245856(0x240)],
                _0x3103a0[_0x245856(0x241)]
            ][_0x245856(0x242)](function (_0x18e88e) {
                var _0x214b4c = _0x245856, _0x5d3a88 = _0x25abe4['vikIH'](_0x25abe4[_0x214b4c(0x243)]('pm', _0x18e88e), '_log_path');
                _0x10c70e[_0x5d3a88] && (_0x10c70e[_0x5d3a88] = _0x10c70e[_0x5d3a88][_0x214b4c(0x23d)](/-[0-9]+\.log$|\.log$/g, _0x25abe4['rFwet']('-' + _0x10c70e[_0x25abe4[_0x214b4c(0x244)]], '.log')));
            }), _0x10c70e[_0x3103a0[_0x245856(0x245)]] && God[_0x245856(0x230)]['enable'](_0x10c70e));
            continue;
        case '1':
            _0x10c70e[_0x245856(0x246)] = {};
            continue;
        case '2':
            _0x10c70e[_0x3103a0[_0x245856(0x247)]] = {};
            continue;
        case '3':
            _0x10c70e[_0x3103a0[_0x245856(0x248)]] = {};
            continue;
        case '4':
            var _0x4621d9 = function _0x297071(_0x5e2808) {
                var _0x33f5f7 = _0x245856;
                if (_0x25abe4['XXbtf'](_0x5e2808[_0x33f5f7(0x249)]['vizion'], ![]) && _0x5e2808[_0x33f5f7(0x249)]['vizion'] !== _0x25abe4[_0x33f5f7(0x24a)])
                    God[_0x33f5f7(0x24b)](_0x5e2808);
                else
                    God[_0x33f5f7(0x220)](_0x25abe4['sqeeJ'], _0x5e2808);
                if (_0x5e2808[_0x33f5f7(0x249)][_0x33f5f7(0x219)] !== cst[_0x33f5f7(0x24c)])
                    _0x5e2808[_0x33f5f7(0x249)]['status'] = cst[_0x33f5f7(0x24d)];
                console[_0x33f5f7(0x24e)]('App\x20[' + _0x5e2808['pm2_env'][_0x33f5f7(0x24f)] + ':' + _0x5e2808[_0x33f5f7(0x249)][_0x33f5f7(0x21c)] + _0x33f5f7(0x250));
                if (_0x2431c9)
                    _0x2431c9(null, _0x5e2808);
            };
            continue;
        case '5':
            if (!_0x10c70e['created_at'])
                _0x10c70e[_0x245856(0x251)] = Date['now']();
            continue;
        case '6':
            var _0x10c70e = Utility[_0x245856(0x222)](_0x717c0c);
            continue;
        case '7':
            _0x10c70e[_0x3103a0[_0x245856(0x252)]] = cst[_0x245856(0x253)];
            continue;
        case '8':
            _0x10c70e[_0x3103a0['voGZH']] = Date['now']();
            continue;
        case '9':
            God[_0x245856(0x254)](_0x10c70e);
            continue;
        case '10':
            _0x3103a0[_0x245856(0x255)](_0x10c70e['exec_mode'], _0x3103a0[_0x245856(0x256)]) ? God[_0x245856(0x257)](_0x10c70e, function _0x31cfc9(_0x462016, _0x2ebd6a) {
                var _0x438015 = _0x245856, _0x318828 = {
                        'edJBE': function (_0x4f6c65, _0x55fa61) {
                            var _0x436a69 = _0x38ea;
                            return _0x25abe4[_0x436a69(0x258)](_0x4f6c65, _0x55fa61);
                        },
                        'cbbtn': function (_0x270ebb, _0x54934a) {
                            var _0x325645 = _0x38ea;
                            return _0x25abe4[_0x325645(0x258)](_0x270ebb, _0x54934a);
                        },
                        'WbFTn': _0x438015(0x259)
                    };
                if (_0x25abe4[_0x438015(0x25a)](_0x2431c9, _0x462016))
                    return _0x25abe4[_0x438015(0x25b)](_0x2431c9, _0x462016);
                if (_0x462016)
                    return ![];
                var _0xd494d0 = God[_0x438015(0x21e)][_0x2ebd6a['pm2_env'][_0x438015(0x21c)]];
                return _0xd494d0 && (_0xd494d0 = null, God[_0x438015(0x21e)][_0x2ebd6a[_0x438015(0x249)][_0x438015(0x21c)]] = null), God['clusters_db'][_0x2ebd6a[_0x438015(0x249)][_0x438015(0x21c)]] = _0x2ebd6a, _0x2ebd6a[_0x438015(0x25c)](_0x25abe4['CGwRj'], function (_0x39c97b) {
                    var _0x24aa28 = _0x438015;
                    console[_0x24aa28(0x25d)](_0x39c97b[_0x24aa28(0x25e)] || _0x39c97b), _0x2ebd6a[_0x24aa28(0x249)]['status'] = cst[_0x24aa28(0x24c)];
                    try {
                        _0x2ebd6a[_0x24aa28(0x25f)] && _0x2ebd6a[_0x24aa28(0x25f)]();
                    } catch (_0x6a30e2) {
                        console[_0x24aa28(0x25d)](_0x6a30e2[_0x24aa28(0x25e)] || _0x6a30e2), God['handleExit'](_0x2ebd6a, cst['ERROR_EXIT']);
                    }
                }), _0x2ebd6a[_0x438015(0x25c)](_0x25abe4[_0x438015(0x260)], function () {
                    var _0x2bb6b1 = _0x438015;
                    console['log'](_0x2bb6b1(0x261), _0x2ebd6a[_0x2bb6b1(0x249)]['name'], _0x2ebd6a['pm2_env'][_0x2bb6b1(0x21c)]);
                }), _0x2ebd6a[_0x438015(0x25c)](_0x25abe4['cEwir'], function _0x963e91(_0x3a9889, _0x45e954) {
                    var _0x3314f3 = _0x438015;
                    God[_0x3314f3(0x262)](_0x2ebd6a, _0x318828['edJBE'](_0x3a9889, -0x2118 + 0xc39 * -0x3 + 0x1 * 0x45c3), _0x318828[_0x3314f3(0x263)](_0x45e954, _0x318828[_0x3314f3(0x264)]));
                }), _0x2ebd6a['once'](_0x25abe4['sqeeJ'], function () {
                    var _0x31b1a0 = _0x438015, _0x37a70a = _0x25abe4[_0x31b1a0(0x265)][_0x31b1a0(0x20a)]('|'), _0x36a28f = -0x3b * 0xa1 + 0x5 * 0x136 + 0x1 * 0x1f0d;
                    while (!![]) {
                        switch (_0x37a70a[_0x36a28f++]) {
                        case '0':
                            var _0x139652 = _0x25abe4['BuMyK'](setTimeout, function () {
                                var _0x2d8fe0 = _0x31b1a0;
                                return God['bus']['removeListener'](_0x1871dc[_0x2d8fe0(0x266)], _0x2a7a09), _0x1871dc[_0x2d8fe0(0x267)](_0x4621d9, _0x2ebd6a);
                            }, _0x2ebd6a[_0x31b1a0(0x249)][_0x31b1a0(0x268)] || cst[_0x31b1a0(0x269)]);
                            continue;
                        case '1':
                            var _0x1871dc = {
                                'sjUNg': _0x25abe4[_0x31b1a0(0x26a)],
                                'ggggw': function (_0x5f428f, _0x1990b8) {
                                    return _0x5f428f(_0x1990b8);
                                },
                                'ssxOP': function (_0x4fc6aa, _0x1f74f0) {
                                    var _0x238067 = _0x31b1a0;
                                    return _0x25abe4[_0x238067(0x26b)](_0x4fc6aa, _0x1f74f0);
                                },
                                'OpLJo': function (_0x3a0902, _0x44dab3) {
                                    return _0x3a0902(_0x44dab3);
                                }
                            };
                            continue;
                        case '2':
                            var _0x2a7a09 = function (_0x4e4ab9) {
                                var _0x34e153 = _0x31b1a0;
                                if (_0x4e4ab9[_0x34e153(0x26c)] === 'ready' && _0x1871dc[_0x34e153(0x26d)](_0x4e4ab9[_0x34e153(0x26e)]['name'], _0x2ebd6a[_0x34e153(0x249)][_0x34e153(0x24f)]) && _0x1871dc[_0x34e153(0x26d)](_0x4e4ab9['process'][_0x34e153(0x21c)], _0x2ebd6a[_0x34e153(0x249)][_0x34e153(0x21c)]))
                                    return _0x1871dc[_0x34e153(0x26f)](clearTimeout, _0x139652), God[_0x34e153(0x1fa)][_0x34e153(0x270)](_0x34e153(0x234), _0x2a7a09), _0x4621d9(_0x2ebd6a);
                            };
                            continue;
                        case '3':
                            if (!_0x2ebd6a[_0x31b1a0(0x249)][_0x31b1a0(0x271)])
                                return _0x25abe4[_0x31b1a0(0x272)](_0x4621d9, _0x2ebd6a);
                            continue;
                        case '4':
                            God[_0x31b1a0(0x1fa)]['on'](_0x25abe4[_0x31b1a0(0x26a)], _0x2a7a09);
                            continue;
                        }
                        break;
                    }
                });
            }) : God[_0x245856(0x273)](_0x10c70e, function _0x58931a(_0x1e286e, _0x147337) {
                var _0x2a3709 = _0x245856, _0x4e6026 = _0x25abe4[_0x2a3709(0x274)][_0x2a3709(0x20a)]('|'), _0x343945 = -0x1 * -0xf59 + 0x25e3 + -0x353c;
                while (!![]) {
                    switch (_0x4e6026[_0x343945++]) {
                    case '0':
                        _0x147337['once'](_0x25abe4[_0x2a3709(0x275)], function _0x31d752(_0x5938f5) {
                            var _0x44795b = _0x2a3709;
                            console['error'](_0x5938f5[_0x44795b(0x25e)] || _0x5938f5), _0x147337['pm2_env'][_0x44795b(0x219)] = cst['ERRORED_STATUS'];
                            try {
                                _0x147337[_0x44795b(0x276)] && _0x147337[_0x44795b(0x276)]();
                            } catch (_0x3e3d96) {
                                console[_0x44795b(0x25d)](_0x3e3d96['stack'] || _0x3e3d96), God[_0x44795b(0x262)](_0x147337, cst[_0x44795b(0x277)]);
                            }
                        });
                        continue;
                    case '1':
                        if (!_0x147337[_0x2a3709(0x249)]['wait_ready'])
                            return _0x4621d9(_0x147337);
                        continue;
                    case '2':
                        var _0x21cf09 = God[_0x2a3709(0x21e)][_0x147337[_0x2a3709(0x249)]['pm_id']];
                        continue;
                    case '3':
                        if (_0x25abe4['wCrUf'](_0x2431c9, _0x1e286e))
                            return _0x25abe4[_0x2a3709(0x278)](_0x2431c9, _0x1e286e);
                        continue;
                    case '4':
                        var _0x8c132 = {
                            'jzNwx': function (_0x40000b, _0x5a69ca) {
                                var _0x14bd04 = _0x2a3709;
                                return _0x25abe4[_0x14bd04(0x26b)](_0x40000b, _0x5a69ca);
                            },
                            'UXuQm': function (_0x31ad54, _0x123bb6) {
                                return _0x25abe4['MESvC'](_0x31ad54, _0x123bb6);
                            },
                            'pVkOM': function (_0x8ae690, _0x55c456) {
                                var _0x2abcf7 = _0x2a3709;
                                return _0x25abe4[_0x2abcf7(0x278)](_0x8ae690, _0x55c456);
                            }
                        };
                        continue;
                    case '5':
                        if (_0x21cf09)
                            _0x21cf09 = null;
                        continue;
                    case '6':
                        God[_0x2a3709(0x21e)][_0x10c70e[_0x2a3709(0x21c)]] = _0x147337;
                        continue;
                    case '7':
                        _0x147337['once'](_0x25abe4['cEwir'], function _0x31ab09(_0x1a2541, _0x276b21) {
                            var _0x559935 = _0x2a3709;
                            if (_0x8c132['jzNwx'](_0x147337[_0x559935(0x279)], !![]))
                                _0x147337['disconnect'] && _0x147337[_0x559935(0x235)]();
                            return _0x147337[_0x559935(0x27a)] = null, God['handleExit'](_0x147337, _0x8c132['UXuQm'](_0x1a2541, -0x5 * 0x709 + -0x10d5 + 0x1156 * 0x3), _0x276b21);
                        });
                        continue;
                    case '8':
                        God[_0x2a3709(0x1fa)]['on'](_0x25abe4[_0x2a3709(0x26a)], _0x526802);
                        continue;
                    case '9':
                        var _0x526802 = function (_0x2fa43e) {
                            var _0x1ccb78 = _0x2a3709;
                            if (_0x25abe4[_0x1ccb78(0x26b)](_0x2fa43e[_0x1ccb78(0x26c)], _0x25abe4[_0x1ccb78(0x27b)]) && _0x2fa43e['process']['name'] === _0x147337[_0x1ccb78(0x249)]['name'] && _0x25abe4[_0x1ccb78(0x26b)](_0x2fa43e['process'][_0x1ccb78(0x21c)], _0x147337[_0x1ccb78(0x249)]['pm_id']))
                                return _0x25abe4[_0x1ccb78(0x27c)](clearTimeout, _0x394046), God[_0x1ccb78(0x1fa)][_0x1ccb78(0x270)](_0x1ccb78(0x234), _0x526802), _0x25abe4[_0x1ccb78(0x278)](_0x4621d9, _0x147337);
                        };
                        continue;
                    case '10':
                        var _0x394046 = _0x25abe4[_0x2a3709(0x27d)](setTimeout, function () {
                            var _0x5d5be7 = _0x2a3709;
                            return God[_0x5d5be7(0x1fa)][_0x5d5be7(0x270)](_0x5d5be7(0x234), _0x526802), _0x8c132[_0x5d5be7(0x27e)](_0x4621d9, _0x147337);
                        }, _0x147337[_0x2a3709(0x249)][_0x2a3709(0x268)] || cst[_0x2a3709(0x269)]);
                        continue;
                    case '11':
                        if (_0x1e286e)
                            return ![];
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '11':
            _0x10c70e[_0x3103a0[_0x245856(0x27f)]] = _0x3103a0[_0x245856(0x280)](_0x10c70e[_0x3103a0[_0x245856(0x27f)]], undefined) ? _0x10c70e[_0x3103a0['agzlP']] : ![];
            continue;
        case '12':
            Utility[_0x245856(0x281)](_0x10c70e, _0x10c70e[_0x245856(0x216)]);
            continue;
        case '13':
            var _0x25abe4 = {
                'vikIH': function (_0x4be80c, _0x19cba0) {
                    return _0x4be80c + _0x19cba0;
                },
                'rFwet': function (_0x197628, _0x4359cd) {
                    var _0x5e464d = _0x245856;
                    return _0x3103a0[_0x5e464d(0x23e)](_0x197628, _0x4359cd);
                },
                'jpFZk': 'pm_id',
                'XXbtf': function (_0x8bab9b, _0x442779) {
                    return _0x8bab9b !== _0x442779;
                },
                'YVqsC': _0x3103a0[_0x245856(0x282)],
                'sqeeJ': 'online',
                'fEjxT': _0x245856(0x283),
                'BuMyK': function (_0x1cc533, _0x4cc354, _0x37929f) {
                    var _0x44181b = _0x245856;
                    return _0x3103a0[_0x44181b(0x284)](_0x1cc533, _0x4cc354, _0x37929f);
                },
                'OtPpz': _0x3103a0[_0x245856(0x285)],
                'TWQTw': function (_0x527152, _0xa5484) {
                    var _0x1871aa = _0x245856;
                    return _0x3103a0[_0x1871aa(0x255)](_0x527152, _0xa5484);
                },
                'oKatA': function (_0x20efb3, _0x5ee357) {
                    return _0x3103a0['vOyuw'](_0x20efb3, _0x5ee357);
                },
                'WRbdM': function (_0x1203a1, _0x3c4f49) {
                    var _0x2a89bb = _0x245856;
                    return _0x3103a0[_0x2a89bb(0x286)](_0x1203a1, _0x3c4f49);
                },
                'LrhNb': function (_0x28a4dc, _0x1bdfc5) {
                    return _0x28a4dc && _0x1bdfc5;
                },
                'bSOoN': function (_0x52356, _0x5c32ae) {
                    var _0x412d47 = _0x245856;
                    return _0x3103a0[_0x412d47(0x287)](_0x52356, _0x5c32ae);
                },
                'CGwRj': _0x245856(0x25d),
                'ZHNFW': _0x3103a0[_0x245856(0x288)],
                'cEwir': 'exit',
                'ZUMBs': _0x3103a0[_0x245856(0x289)],
                'dviaE': function (_0x2b9d24, _0x4538e4) {
                    return _0x2b9d24(_0x4538e4);
                },
                'bRLyj': function (_0x52a015, _0x505796) {
                    var _0x58677f = _0x245856;
                    return _0x3103a0[_0x58677f(0x28a)](_0x52a015, _0x505796);
                },
                'mLKIR': _0x245856(0x28b),
                'wCrUf': function (_0xbbd995, _0x40d5ce) {
                    var _0x53582a = _0x245856;
                    return _0x3103a0[_0x53582a(0x28c)](_0xbbd995, _0x40d5ce);
                },
                'MESvC': function (_0x12b9dd, _0x564fab) {
                    var _0x5c807d = _0x245856;
                    return _0x3103a0[_0x5c807d(0x286)](_0x12b9dd, _0x564fab);
                },
                'vlvBN': function (_0x4f92e9, _0x392666, _0x6cc9ab) {
                    var _0x1b0e0b = _0x245856;
                    return _0x3103a0[_0x1b0e0b(0x28d)](_0x4f92e9, _0x392666, _0x6cc9ab);
                }
            };
            continue;
        case '14':
            _0x10c70e[_0x3103a0[_0x245856(0x28e)]] = [];
            continue;
        case '15':
            return ![];
        }
        break;
    }
}, God[_0x383c84(0x262)] = function handleExit(_0x430780, _0x3c2893, _0x279162) {
    var _0xd0cf97 = _0x383c84, _0x257227 = {
            'QyqDn': _0xd0cf97(0x28f),
            'VbrHx': function (_0x4dcb53, _0x2a4a14) {
                return _0x4dcb53 !== _0x2a4a14;
            },
            'BskKx': function (_0x5b08ba, _0x5280d7) {
                return _0x5b08ba !== _0x5280d7;
            },
            'mZXjU': function (_0x33c589, _0x3ccc8d) {
                return _0x33c589(_0x3ccc8d);
            },
            'fOZUs': function (_0x2d2fb7, _0x546446) {
                return _0x2d2fb7 * _0x546446;
            },
            'PuQPM': function (_0x5682c1, _0x113500) {
                return _0x5682c1 && _0x113500;
            },
            'JVsoX': function (_0x102b86, _0x1534a7) {
                return _0x102b86 >= _0x1534a7;
            },
            'SjDqa': _0xd0cf97(0x290),
            'lGGIb': _0xd0cf97(0x291),
            'DWClj': 'restart\x20overlimit',
            'HWDjH': function (_0x37581a, _0x20d9ca) {
                return _0x37581a == _0x20d9ca;
            },
            'sZrQN': function (_0x1bdc53, _0x282733) {
                return _0x1bdc53 == _0x282733;
            },
            'wbhXH': function (_0x127902, _0x2e70b2) {
                return _0x127902 === _0x2e70b2;
            },
            'EZBxA': _0xd0cf97(0x292),
            'toapE': function (_0x573211, _0x10ceb5) {
                return _0x573211 || _0x10ceb5;
            },
            'YnDIb': function (_0x510e11, _0x393b33) {
                return _0x510e11 !== _0x393b33;
            },
            'EhrUo': function (_0x2e6a13, _0x341798, _0x7f8079) {
                return _0x2e6a13(_0x341798, _0x7f8079);
            },
            'dlaGN': _0xd0cf97(0x293),
            'ppsxd': function (_0x54f8d7, _0x90dae3) {
                return _0x54f8d7 < _0x90dae3;
            },
            'mFtqR': function (_0x4777ab, _0x9aa3fc) {
                return _0x4777ab - _0x9aa3fc;
            },
            'pQYco': function (_0x38dc2a, _0x324204) {
                return _0x38dc2a != _0x324204;
            }
        }, _0x1b2069 = _0x257227[_0xd0cf97(0x294)][_0xd0cf97(0x20a)]('|'), _0x2a4cfe = 0x16 * 0xf1 + -0x1bba + 0x704;
    while (!![]) {
        switch (_0x1b2069[_0x2a4cfe++]) {
        case '0':
            if (_0x257227[_0xd0cf97(0x295)](typeof _0x3c2893, _0xd0cf97(0x212)))
                _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x296)] = _0x3c2893;
            continue;
        case '1':
            _0x257227[_0xd0cf97(0x297)](_0x511aa4[_0xd0cf97(0x249)]['exp_backoff_restart_delay'], undefined) && !isNaN(_0x257227['mZXjU'](parseInt, _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x298)])) && (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)] = cst['WAITING_RESTART'], !_0x511aa4['pm2_env'][_0xd0cf97(0x299)] ? (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x299)] = _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x298)], _0x195444 = _0x511aa4[_0xd0cf97(0x249)]['exp_backoff_restart_delay']) : (_0x511aa4['pm2_env']['prev_restart_delay'] = Math[_0xd0cf97(0x29a)](Math[_0xd0cf97(0x29b)](-0x4f09 + 0x69e9 + 0x1fb8, _0x257227[_0xd0cf97(0x29c)](_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x299)], 0x1 * 0x1f9 + -0x873 + 0x67b + 0.5))), _0x195444 = _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x299)]), console['log'](_0xd0cf97(0x29d) + _0x430780[_0xd0cf97(0x249)]['name'] + ':' + _0x430780[_0xd0cf97(0x249)][_0xd0cf97(0x21c)] + _0xd0cf97(0x29e) + _0x195444 + 'ms'));
            continue;
        case '2':
            if (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x29f)])
                _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x29f)] = {};
            continue;
        case '3':
            _0x257227['PuQPM'](!_0x4abd2d, !_0x166ca9) && (Object[_0xd0cf97(0x2a0)](_0x511aa4['pm2_env'], _0xd0cf97(0x2a1), {
                'configurable': !![],
                'writable': !![]
            }), _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2a1)] = setTimeout(function () {
                var _0x57417c = _0xd0cf97;
                _0x511aa4[_0x57417c(0x249)][_0x57417c(0x22a)] += -0x2a * -0x35 + 0x7bf + -0x4 * 0x41c, God[_0x57417c(0x21f)](_0x511aa4[_0x57417c(0x249)]);
            }, _0x195444));
            continue;
        case '4':
            var _0x166ca9 = ![];
            continue;
        case '5':
            if (_0x257227[_0xd0cf97(0x2a2)](_0x511aa4[_0xd0cf97(0x249)]['unstable_restarts'], _0x6f977b)) {
                var _0x2aead1 = _0x257227[_0xd0cf97(0x2a3)][_0xd0cf97(0x20a)]('|'), _0x23692e = -0x6c3 + -0x329 * -0x2 + 0x71;
                while (!![]) {
                    switch (_0x2aead1[_0x23692e++]) {
                    case '0':
                        _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x251)] = null;
                        continue;
                    case '1':
                        console[_0xd0cf97(0x24e)](_0x257227[_0xd0cf97(0x2a4)], _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2a5)], _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x22b)], _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)]);
                        continue;
                    case '2':
                        _0x166ca9 = !![];
                        continue;
                    case '3':
                        _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x22b)] = -0x1 * 0x611 + -0x5ea + 0x1 * 0xbfb;
                        continue;
                    case '4':
                        _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)] = cst['ERRORED_STATUS'];
                        continue;
                    case '5':
                        _0x511aa4[_0xd0cf97(0x26e)]['pid'] = 0x2679 + -0x67b * -0x4 + -0x1577 * 0x3;
                        continue;
                    case '6':
                        God[_0xd0cf97(0x220)](_0x257227['DWClj'], _0x511aa4);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '6':
            if (God[_0xd0cf97(0x2a6)])
                return ![];
            continue;
        case '7':
            var _0x4abd2d = _0x257227[_0xd0cf97(0x2a7)](_0x511aa4[_0xd0cf97(0x249)]['status'], cst[_0xd0cf97(0x2a8)]) || _0x257227['sZrQN'](_0x511aa4[_0xd0cf97(0x249)]['status'], cst[_0xd0cf97(0x21a)]) || _0x511aa4[_0xd0cf97(0x249)]['status'] == cst['ERRORED_STATUS'] || (_0x257227[_0xd0cf97(0x2a9)](_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2aa)], ![]) || _0x257227[_0xd0cf97(0x2a9)](_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2aa)], 'false'));
            continue;
        case '8':
            God[_0xd0cf97(0x220)](_0x257227[_0xd0cf97(0x2ab)], _0x511aa4);
            continue;
        case '9':
            console['log']('App\x20[' + _0x430780[_0xd0cf97(0x249)][_0xd0cf97(0x24f)] + ':' + _0x430780[_0xd0cf97(0x249)][_0xd0cf97(0x21c)] + _0xd0cf97(0x2ac) + _0x3c2893 + _0xd0cf97(0x2ad) + _0x257227[_0xd0cf97(0x2ae)](_0x279162, 'SIGINT') + ']');
            continue;
        case '10':
            var _0x6f977b = typeof _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2af)] !== _0xd0cf97(0x212) ? _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2af)] : -0x3d7 + -0x23bc + 0x27a3;
            continue;
        case '11':
            if (_0x4abd2d)
                _0x511aa4[_0xd0cf97(0x26e)][_0xd0cf97(0x2b0)] = 0x2b3 * 0x5 + 0x22ff + -0x307e;
            continue;
        case '12':
            var _0x195444 = -0x27e * 0x4 + -0x4a9 + -0x6b * -0x23;
            continue;
        case '13':
            _0x511aa4[_0xd0cf97(0x249)]['restart_delay'] !== undefined && !_0x257227[_0xd0cf97(0x2b1)](isNaN, _0x257227[_0xd0cf97(0x2b1)](parseInt, _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2b2)])) && (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)] = cst[_0xd0cf97(0x2b3)], _0x195444 = parseInt(_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2b2)]));
            continue;
        case '14':
            if (_0x257227[_0xd0cf97(0x2b4)](_0x511aa4['pm2_env'][_0xd0cf97(0x21c)][_0xd0cf97(0x2b5)]()[_0xd0cf97(0x2b6)]('_old_'), 0x347 * 0x1 + 0x12bd + 0x1604 * -0x1))
                try {
                    fs[_0xd0cf97(0x2b7)](_0x511aa4[_0xd0cf97(0x249)]['pm_pid_path']);
                } catch (_0x34534f) {
                    _0x257227['EhrUo'](debug, _0x257227[_0xd0cf97(0x2b8)], _0x34534f);
                }
            continue;
        case '15':
            return ![];
        case '16':
            var _0x5c6240 = _0x257227[_0xd0cf97(0x2b4)](typeof _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2b9)], 'undefined') ? _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x2b9)] : 0x1 * -0x2229 + 0x53 * -0x26 + 0x3263;
            continue;
        case '17':
            var _0x511aa4 = this['clusters_db'][_0x430780['pm2_env'][_0xd0cf97(0x21c)]];
            continue;
        case '18':
            if (!_0x511aa4)
                return console[_0xd0cf97(0x25d)](_0xd0cf97(0x2ba), _0x430780['pm2_env']['pm_id']), ![];
            continue;
        case '19':
            if (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x237)])
                _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x237)] = [];
            continue;
        case '20':
            _0x257227[_0xd0cf97(0x2bb)](_0x257227[_0xd0cf97(0x2bc)](Date[_0xd0cf97(0x1f8)](), _0x511aa4['pm2_env'][_0xd0cf97(0x251)]), _0x257227['fOZUs'](_0x5c6240, _0x6f977b)) && (_0x257227[_0xd0cf97(0x2bb)](_0x257227['mFtqR'](Date['now'](), _0x511aa4['pm2_env'][_0xd0cf97(0x232)]), _0x5c6240) && (_0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x22b)] += -0x1 * -0x1a8d + 0x17f2 + -0x327e * 0x1));
            continue;
        case '21':
            if (_0x257227[_0xd0cf97(0x2bd)](_0x511aa4[_0xd0cf97(0x249)]['status'], cst['ERRORED_STATUS']) && _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)] != cst[_0xd0cf97(0x2a8)])
                _0x511aa4[_0xd0cf97(0x249)][_0xd0cf97(0x219)] = cst['STOPPED_STATUS'];
            continue;
        }
        break;
    }
}, God[_0x383c84(0x24b)] = function finalizeProcedure(_0x3cf95b) {
    var _0x2cb54c = _0x383c84, _0x1f131f = {
            'KPGjN': _0x2cb54c(0x2be),
            'DjWve': function (_0x33a0b2, _0x46b956) {
                return _0x33a0b2 == _0x46b956;
            },
            'rXXFY': _0x2cb54c(0x2bf),
            'OgetN': _0x2cb54c(0x2c0),
            'gOMOl': function (_0x42cf7c, _0x4f34b1) {
                return _0x42cf7c === _0x4f34b1;
            },
            'zGLIK': function (_0x416469, _0x437ef8) {
                return _0x416469(_0x437ef8);
            },
            'OLpyN': function (_0xbba14, _0x3d23f3) {
                return _0xbba14 === _0x3d23f3;
            },
            'XzBOr': function (_0x2932d3, _0x4289c3, _0x4cba76) {
                return _0x2932d3(_0x4289c3, _0x4cba76);
            }
        }, _0x503d15 = '', _0xe39694 = _0x3cf95b[_0x2cb54c(0x249)]['cwd'] || path[_0x2cb54c(0x2c1)](_0x3cf95b[_0x2cb54c(0x249)][_0x2cb54c(0x2a5)]), _0x226ec7 = _0x3cf95b[_0x2cb54c(0x249)]['pm_id'];
    _0x3cf95b[_0x2cb54c(0x249)]['version'] = Utility['findPackageVersion'](_0x3cf95b[_0x2cb54c(0x249)][_0x2cb54c(0x2a5)] || _0x3cf95b[_0x2cb54c(0x249)][_0x2cb54c(0x2c2)]);
    if (_0x1f131f['OLpyN'](_0x3cf95b[_0x2cb54c(0x249)][_0x2cb54c(0x217)], !![]))
        return _0x1f131f[_0x2cb54c(0x2c3)](debug, 'Vizion\x20is\x20already\x20running\x20for\x20proc\x20id:\x20%d,\x20skipping\x20this\x20round', _0x226ec7), God[_0x2cb54c(0x220)](_0x1f131f['OgetN'], _0x3cf95b);
    _0x3cf95b[_0x2cb54c(0x249)]['vizion_running'] = !![], vizion[_0x2cb54c(0x2c4)]({ 'folder': _0xe39694 }, function _0x518562(_0x2c7125, _0x403708) {
        var _0x13d4b9 = _0x2cb54c, _0x2642c7 = _0x1f131f['KPGjN'][_0x13d4b9(0x20a)]('|'), _0x101f95 = -0x99 * -0x41 + -0x793 + -0x2 * 0xfa3;
        while (!![]) {
            switch (_0x2642c7[_0x101f95++]) {
            case '0':
                _0x5c45d0['pm2_env'][_0x13d4b9(0x217)] = ![];
                continue;
            case '1':
                if (!_0x5c45d0 || !_0x5c45d0[_0x13d4b9(0x249)] || _0x1f131f['DjWve'](_0x5c45d0[_0x13d4b9(0x249)][_0x13d4b9(0x219)], cst[_0x13d4b9(0x21a)]) || _0x5c45d0[_0x13d4b9(0x249)][_0x13d4b9(0x219)] == cst[_0x13d4b9(0x2a8)] || _0x1f131f[_0x13d4b9(0x2c5)](_0x5c45d0['pm2_env']['status'], cst['ERRORED_STATUS']))
                    return console['error'](_0x1f131f[_0x13d4b9(0x2c6)]);
                continue;
            case '2':
                if (!_0x2c7125)
                    _0x5c45d0[_0x13d4b9(0x249)]['versioning'] = _0x403708, _0x5c45d0[_0x13d4b9(0x249)][_0x13d4b9(0x2c7)][_0x13d4b9(0x2c8)] = _0xe39694, God[_0x13d4b9(0x220)](_0x1f131f[_0x13d4b9(0x2c9)], _0x5c45d0);
                else
                    _0x2c7125 && _0x1f131f['gOMOl'](_0xe39694, _0x503d15) ? (_0x5c45d0[_0x13d4b9(0x249)][_0x13d4b9(0x2c7)] = null, God['notify'](_0x1f131f[_0x13d4b9(0x2c9)], _0x5c45d0)) : (_0x503d15 = _0xe39694, _0xe39694 = path[_0x13d4b9(0x2c1)](_0xe39694), _0x5c45d0[_0x13d4b9(0x249)][_0x13d4b9(0x217)] = !![], vizion[_0x13d4b9(0x2c4)]({ 'folder': _0xe39694 }, _0x518562));
                continue;
            case '3':
                var _0x5c45d0 = God[_0x13d4b9(0x21e)][_0x226ec7];
                continue;
            case '4':
                if (_0x2c7125)
                    _0x1f131f[_0x13d4b9(0x2ca)](debug, _0x2c7125['stack'] || _0x2c7125);
                continue;
            case '5':
                return ![];
            }
            break;
        }
    });
}, God[_0x383c84(0x2cb)] = function injectVariables(_0x2486c1, _0x352eba) {
    var _0x3be9be = _0x383c84, _0x1ab182 = {
            'CYGIr': function (_0x309595, _0xdc4847) {
                return _0x309595 === _0xdc4847;
            },
            'PQhhi': function (_0xed2d18, _0x43b3c3) {
                return _0xed2d18 !== _0x43b3c3;
            },
            'CPiKm': _0x3be9be(0x212),
            'coDOk': function (_0x5020d9, _0x24e7f6) {
                return _0x5020d9 - _0x24e7f6;
            },
            'eRDhf': function (_0x136ef7, _0x1687e5) {
                return _0x136ef7 < _0x1687e5;
            },
            'rDQKr': function (_0x538893, _0x165e57) {
                return _0x538893 === _0x165e57;
            },
            'ObQfO': function (_0x5200f9, _0x43351c) {
                return _0x5200f9 + _0x43351c;
            },
            'oXXXn': function (_0x51879d, _0x360701, _0x455b82) {
                return _0x51879d(_0x360701, _0x455b82);
            }
        }, _0x3d2f93 = process[_0x3be9be(0x216)][_0x3be9be(0x2cc)] || _0x2486c1[_0x3be9be(0x2cd)], _0x581f7b = Object[_0x3be9be(0x2ce)](God[_0x3be9be(0x21e)])[_0x3be9be(0x2cf)](function (_0x50519c) {
            var _0x5b0202 = _0x3be9be;
            return God[_0x5b0202(0x21e)][_0x50519c];
        })[_0x3be9be(0x2d0)](function (_0x23f3a9) {
            var _0xfeb2cc = _0x3be9be;
            return _0x1ab182['CYGIr'](_0x23f3a9[_0xfeb2cc(0x249)]['name'], _0x2486c1[_0xfeb2cc(0x24f)]) && _0x1ab182['PQhhi'](typeof _0x23f3a9['pm2_env'][_0x3d2f93], _0x1ab182['CPiKm']);
        })[_0x3be9be(0x2cf)](function (_0x2e4f66) {
            return _0x2e4f66['pm2_env'][_0x3d2f93];
        })['sort'](function (_0x4e5d19, _0x5b18f3) {
            var _0x47b12c = _0x3be9be;
            return _0x1ab182[_0x47b12c(0x2d1)](_0x5b18f3, _0x4e5d19);
        }), _0x2dc0b0 = _0x1ab182[_0x3be9be(0x2d2)](typeof _0x581f7b[0x9ed + -0xb24 + 0x137 * 0x1], _0x3be9be(0x212)) ? -0x2a6 * -0x3 + 0x1076 + -0xc34 * 0x2 : _0x581f7b[0x9 * 0x211 + -0x151 * 0x2 + -0xff7] + (-0x1729 + -0x1 * 0x181 + 0x18ab);
    for (var _0x3fa9c5 = -0x32 * 0xa4 + 0x1885 + 0x3 * 0x281; _0x1ab182[_0x3be9be(0x2d3)](_0x3fa9c5, _0x581f7b[_0x3be9be(0x1eb)]); _0x3fa9c5++) {
        if (_0x1ab182[_0x3be9be(0x2d2)](_0x581f7b[_0x3be9be(0x2b6)](_0x3fa9c5), -(-0x22ee + -0x37 * -0x59 + 0xfd0))) {
            _0x2dc0b0 = _0x3fa9c5;
            break;
        }
    }
    _0x2486c1[_0x3d2f93] = _0x2dc0b0;
    if (_0x2486c1['increment_var']) {
        var _0x20014d = Object[_0x3be9be(0x2ce)](God[_0x3be9be(0x21e)])[_0x3be9be(0x2cf)](function (_0x52b6fb) {
                return God['clusters_db'][_0x52b6fb];
            })['filter'](function (_0x4376f2) {
                var _0x3de2a0 = _0x3be9be;
                return _0x1ab182[_0x3de2a0(0x2d2)](_0x4376f2['pm2_env'][_0x3de2a0(0x24f)], _0x2486c1[_0x3de2a0(0x24f)]) && _0x1ab182['PQhhi'](typeof _0x4376f2[_0x3de2a0(0x249)][_0x2486c1['increment_var']], _0x3de2a0(0x212));
            })['map'](function (_0x444289) {
                var _0x58bd9d = _0x3be9be;
                return _0x444289[_0x58bd9d(0x249)][_0x2486c1[_0x58bd9d(0x2d4)]];
            })[_0x3be9be(0x2d5)](function (_0xfd3c25, _0x5c09c0) {
                return _0x5c09c0 - _0xfd3c25;
            })[-0x2383 + 0x1346 + 0x103d], _0x5665ca = _0x2486c1['env'][_0x2486c1[_0x3be9be(0x2d4)]] || 0x1 * 0x1c86 + 0x4d5 + -0x215b * 0x1;
        _0x2486c1[_0x2486c1[_0x3be9be(0x2d4)]] = _0x1ab182[_0x3be9be(0x2d6)](typeof _0x20014d, _0x1ab182[_0x3be9be(0x2d7)]) ? _0x5665ca : _0x1ab182['ObQfO'](_0x20014d, -0xe7b + -0xb * 0x200 + 0x247c), _0x2486c1[_0x3be9be(0x216)][_0x2486c1[_0x3be9be(0x2d4)]] = _0x2486c1[_0x2486c1[_0x3be9be(0x2d4)]];
    }
    return _0x1ab182[_0x3be9be(0x2d8)](_0x352eba, null, _0x2486c1);
}, God[_0x383c84(0x201)]();
