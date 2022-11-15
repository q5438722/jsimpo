function _0x49cf(_0x56b9eb, _0x43f7a6) {
    return _0x49cf = function (_0x4c0656, _0x2d3d20) {
        _0x4c0656 = _0x4c0656 - (-8747 + -3 * 1585 + 13627);
        let _0xf0a194 = _0x1f08[_0x4c0656];
        return _0xf0a194;
    }, _0x49cf(_0x56b9eb, _0x43f7a6);
}
const _ = require(_0x46bd30(135)), ChildProcess = require(_0x46bd30(136)), {Emitter} = require(_0x46bd30(137)), path = require(_0x46bd30(138));
module[_0x46bd30(139)] = class BufferedProcess {
    constructor({
        command: _0x13a229,
        args: _0x1705e7,
        options: options = {},
        stdout: _0x2484a0,
        stderr: _0x876e87,
        exit: _0x53ae91,
        autoStart: autoStart = !![]
    } = {}) {
        const _0x56ae3a = _0x46bd30, _0x23824e = {
                'UCVwl': function (_0x288db0, _0x1ba610) {
                    return _0x288db0 === _0x1ba610;
                }
            };
        this[_0x56ae3a(140)] = new Emitter(), this[_0x56ae3a(141)] = _0x13a229, this[_0x56ae3a(142)] = _0x1705e7, this[_0x56ae3a(143)] = options, this['stdout'] = _0x2484a0, this[_0x56ae3a(144)] = _0x876e87, this[_0x56ae3a(145)] = _0x53ae91, _0x23824e[_0x56ae3a(146)](autoStart, !![]) && this['start'](), this['killed'] = ![];
    }
    [_0x46bd30(147)]() {
        const _0x9c7d0e = _0x46bd30, _0x898bba = {
                'hxbWP': function (_0x397b1f, _0x3d71e3) {
                    return _0x397b1f === _0x3d71e3;
                },
                'FtqCJ': _0x9c7d0e(148),
                'OpaVd': function (_0x3770e1, _0x813768) {
                    return _0x3770e1 === _0x813768;
                }
            };
        if (_0x898bba[_0x9c7d0e(149)](this[_0x9c7d0e(150)], !![]))
            return;
        this[_0x9c7d0e(150)] = !![], _0x898bba['hxbWP'](process[_0x9c7d0e(151)], _0x898bba[_0x9c7d0e(152)]) && _0x898bba[_0x9c7d0e(153)](this['options'][_0x9c7d0e(154)], undefined) ? this['spawnWithEscapedWindowsArgs'](this[_0x9c7d0e(141)], this[_0x9c7d0e(142)], this[_0x9c7d0e(143)]) : this[_0x9c7d0e(155)](this[_0x9c7d0e(141)], this[_0x9c7d0e(142)], this[_0x9c7d0e(143)]), this['handleEvents'](this['stdout'], this[_0x9c7d0e(144)], this[_0x9c7d0e(145)]);
    }
    ['spawnWithEscapedWindowsArgs'](_0x2c30d9, _0x24785a, _0x1a6cb0) {
        const _0x92efd2 = _0x46bd30;
        let _0x597035 = [];
        _0x24785a && (_0x597035 = _0x24785a['filter'](_0x323b87 => _0x323b87 != null)['map'](_0x174d12 => {
            const _0x2121b6 = _0x49cf;
            return this[_0x2121b6(156)](_0x2c30d9) && /^\/[a-zA-Z]+,.*$/[_0x2121b6(157)](_0x174d12) ? _0x174d12 : '"' + _0x174d12[_0x2121b6(158)]()[_0x2121b6(159)](/"/g, '\\"') + '"';
        }));
        _0x597035[_0x92efd2(160)](/\s|&|\^|\(|\)|\||#/['test'](_0x2c30d9) ? '"' + _0x2c30d9 + '"' : _0x2c30d9);
        const _0x305793 = _['clone'](_0x1a6cb0);
        _0x305793[_0x92efd2(161)] = !![], this[_0x92efd2(155)](this[_0x92efd2(162)](), [
            '/s',
            '/d',
            '/c',
            '"' + _0x597035[_0x92efd2(163)](' ') + '"'
        ], _0x305793);
    }
    [_0x46bd30(164)](_0x2bb176) {
        const _0xcd24f0 = _0x46bd30;
        return this[_0xcd24f0(140)]['on'](_0xcd24f0(165), _0x2bb176);
    }
    [_0x46bd30(166)](_0x4bf67, _0x3cf922, _0x4a35db) {
        const _0x18239d = _0x46bd30, _0xb7e62b = {
                'alUsB': function (_0x4fae9a, _0x46eb8f) {
                    return _0x4fae9a !== _0x46eb8f;
                },
                'ZhUXI': function (_0x54b25d, _0x25b31b) {
                    return _0x54b25d + _0x25b31b;
                },
                'NTEuY': function (_0x5ca606, _0x209e69) {
                    return _0x5ca606 + _0x209e69;
                },
                'KAGHE': function (_0x38d54f, _0xcba374) {
                    return _0x38d54f(_0xcba374);
                },
                'pDAFf': function (_0x2109db) {
                    return _0x2109db();
                },
                'XNgzV': 'utf8',
                'JEkQs': 'data',
                'AkryZ': _0x18239d(167)
            };
        _0x4bf67[_0x18239d(168)](_0xb7e62b[_0x18239d(169)]);
        let _0x5a2287 = '';
        _0x4bf67['on'](_0xb7e62b[_0x18239d(170)], _0xa2563f => {
            const _0x3554b4 = _0x18239d;
            if (this[_0x3554b4(171)])
                return;
            let _0x5e0aff = _0x5a2287[_0x3554b4(172)];
            _0x5a2287 += _0xa2563f;
            let _0x4e6d88 = _0xa2563f[_0x3554b4(173)]('\n');
            if (_0xb7e62b['alUsB'](_0x4e6d88, -(-4822 + 73 * 124 + -4229))) {
                let _0x526b8c = _0xb7e62b[_0x3554b4(174)](_0xb7e62b['NTEuY'](_0x4e6d88, _0x5e0aff), 32 * 89 + 59 * -66 + 1047);
                _0xb7e62b[_0x3554b4(175)](_0x3cf922, _0x5a2287[_0x3554b4(176)](-1759 + -1708 + -1 * -3467, _0x526b8c)), _0x5a2287 = _0x5a2287[_0x3554b4(176)](_0x526b8c);
            }
        }), _0x4bf67['on'](_0xb7e62b['AkryZ'], () => {
            const _0x17647c = _0x18239d;
            if (this[_0x17647c(171)])
                return;
            if (_0x5a2287[_0x17647c(172)] > 1164 * -5 + 1128 + -138 * -34)
                _0xb7e62b[_0x17647c(175)](_0x3cf922, _0x5a2287);
            _0xb7e62b['pDAFf'](_0x4a35db);
        });
    }
    [_0x46bd30(177)]() {
        const _0x70593d = _0x46bd30, _0x2fe62a = {
                'EWMLS': function (_0x39e2e1, _0x293c69, _0x3d0731) {
                    return _0x39e2e1(_0x293c69, _0x3d0731);
                },
                'ZtBIM': function (_0x302e8c, _0x2574ff) {
                    return _0x302e8c === _0x2574ff;
                },
                'TzWMA': 'wmic',
                'ZWFxL': _0x70593d(178),
                'pTTuU': _0x70593d(179),
                'Jngrp': _0x70593d(180),
                'zSGgQ': _0x70593d(181),
                'yOndO': 'data',
                'xziVy': _0x70593d(167)
            };
        if (!this[_0x70593d(178)])
            return;
        const _0x3b7b04 = this[_0x70593d(178)][_0x70593d(182)], _0x5e89f0 = _0x2fe62a[_0x70593d(183)], _0x5a0449 = [
                _0x2fe62a[_0x70593d(184)],
                _0x2fe62a['pTTuU'],
                '(ParentProcessId=' + _0x3b7b04 + ')',
                _0x2fe62a[_0x70593d(185)],
                _0x2fe62a[_0x70593d(186)]
            ];
        let _0x4aed40;
        try {
            _0x4aed40 = ChildProcess[_0x70593d(155)](_0x5e89f0, _0x5a0449);
        } catch (_0x3f6261) {
            this[_0x70593d(187)]();
            return;
        }
        _0x4aed40['on'](_0x70593d(188), () => {
        });
        let _0x30fd73 = '';
        _0x4aed40[_0x70593d(189)]['on'](_0x2fe62a[_0x70593d(190)], _0x399e71 => {
            _0x30fd73 += _0x399e71;
        }), _0x4aed40[_0x70593d(189)]['on'](_0x2fe62a['xziVy'], () => {
            const _0x45a484 = _0x70593d;
            for (let _0x126dfc of _0x30fd73[_0x45a484(191)](/\s+/)) {
                if (!/^\d{1,10}$/['test'](_0x126dfc))
                    continue;
                _0x126dfc = _0x2fe62a[_0x45a484(192)](parseInt, _0x126dfc, -7773 * -1 + -3295 + 2234 * -2);
                if (!_0x126dfc || _0x2fe62a[_0x45a484(193)](_0x126dfc, _0x3b7b04))
                    continue;
                try {
                    process['kill'](_0x126dfc);
                } catch (_0x2ddab7) {
                }
            }
            this[_0x45a484(187)]();
        });
    }
    [_0x46bd30(187)]() {
        const _0x134154 = _0x46bd30;
        if (this[_0x134154(178)])
            this[_0x134154(178)]['kill']();
        this['process'] = null;
    }
    ['isExplorerCommand'](_0x54ccb5) {
        const _0x3a0754 = _0x46bd30, _0x559845 = {
                'aPfBZ': function (_0x2be7f3, _0x367141) {
                    return _0x2be7f3 === _0x367141;
                },
                'VdsQG': 'explorer.exe',
                'TkumM': function (_0x5e6c0e, _0x40e4d0) {
                    return _0x5e6c0e === _0x40e4d0;
                },
                'ehZjb': _0x3a0754(194),
                'jTNzx': function (_0x121e1f, _0x529239) {
                    return _0x121e1f === _0x529239;
                },
                'hYFTp': function (_0x1b8fc3, _0x5832b5) {
                    return _0x1b8fc3 === _0x5832b5;
                }
            };
        if (_0x559845[_0x3a0754(195)](_0x54ccb5, _0x559845['VdsQG']) || _0x559845['TkumM'](_0x54ccb5, _0x559845[_0x3a0754(196)]))
            return !![];
        else
            return process['env'][_0x3a0754(197)] ? _0x559845['jTNzx'](_0x54ccb5, path[_0x3a0754(163)](process[_0x3a0754(198)][_0x3a0754(197)], _0x559845['VdsQG'])) || _0x559845[_0x3a0754(199)](_0x54ccb5, path['join'](process[_0x3a0754(198)]['SystemRoot'], _0x559845[_0x3a0754(196)])) : ![];
    }
    [_0x46bd30(162)]() {
        const _0x29a698 = _0x46bd30, _0x1026a0 = {
                'EDIUX': _0x29a698(200),
                'BLKll': 'cmd.exe'
            };
        if (process[_0x29a698(198)][_0x29a698(201)])
            return process[_0x29a698(198)][_0x29a698(201)];
        else
            return process['env'][_0x29a698(197)] ? path['join'](process[_0x29a698(198)][_0x29a698(197)], _0x1026a0[_0x29a698(202)], _0x1026a0[_0x29a698(203)]) : _0x1026a0[_0x29a698(203)];
    }
    [_0x46bd30(204)]() {
        const _0x2e2300 = _0x46bd30, _0x31f879 = {
                'hBLpb': function (_0x2d858e, _0x5a9f5e) {
                    return _0x2d858e === _0x5a9f5e;
                },
                'xHuwE': _0x2e2300(148)
            };
        if (this[_0x2e2300(171)])
            return;
        this[_0x2e2300(171)] = !![], _0x31f879[_0x2e2300(205)](process[_0x2e2300(151)], _0x31f879[_0x2e2300(206)]) ? this[_0x2e2300(177)]() : this[_0x2e2300(187)]();
    }
    ['spawn'](_0x18c667, _0x2cd140, _0x336e1e) {
        const _0x4081a5 = _0x46bd30;
        try {
            this[_0x4081a5(178)] = ChildProcess[_0x4081a5(155)](_0x18c667, _0x2cd140, _0x336e1e);
        } catch (_0x2a8c3d) {
            process[_0x4081a5(207)](() => this['handleError'](_0x2a8c3d));
        }
    }
    [_0x46bd30(208)](_0x138745, _0x27ceef, _0x339332) {
        const _0x206d54 = _0x46bd30, _0x33f334 = {
                'xJTwq': function (_0x412f68, _0x49f678) {
                    return _0x412f68 && _0x49f678;
                },
                'BZQuQ': function (_0x142ee9, _0x38af39) {
                    return _0x142ee9 === _0x38af39;
                },
                'oVsXK': 'function',
                'hLIPs': function (_0x3a73f0, _0x494ceb) {
                    return _0x3a73f0(_0x494ceb);
                },
                'KeekO': function (_0x10bd37) {
                    return _0x10bd37();
                },
                'tIpwQ': _0x206d54(145),
                'kRWIX': _0x206d54(188)
            };
        if (!this[_0x206d54(178)])
            return;
        const _0x1a6a4e = () => {
            const _0x3dfe3f = _0x206d54;
            if (this[_0x3dfe3f(171)])
                return;
            _0x33f334['xJTwq'](_0x180439, _0x134d3b) && _0x8ceb7d && _0x33f334[_0x3dfe3f(209)](typeof _0x339332, _0x33f334[_0x3dfe3f(210)]) && _0x33f334['hLIPs'](_0x339332, _0x392888);
        };
        let _0x180439 = !![], _0x134d3b = !![], _0x8ceb7d = !![], _0x392888 = -3905 + 2917 + 988;
        _0x138745 && (_0x180439 = ![], this[_0x206d54(166)](this[_0x206d54(178)]['stdout'], _0x138745, () => {
            const _0xb10239 = _0x206d54;
            _0x180439 = !![], _0x33f334[_0xb10239(211)](_0x1a6a4e);
        })), _0x27ceef && (_0x134d3b = ![], this[_0x206d54(166)](this[_0x206d54(178)][_0x206d54(144)], _0x27ceef, () => {
            _0x134d3b = !![], _0x1a6a4e();
        })), _0x339332 && (_0x8ceb7d = ![], this[_0x206d54(178)]['on'](_0x33f334[_0x206d54(212)], _0x314f5c => {
            _0x392888 = _0x314f5c, _0x8ceb7d = !![], _0x33f334['KeekO'](_0x1a6a4e);
        })), this['process']['on'](_0x33f334[_0x206d54(213)], _0x2a5d27 => {
            const _0x4ea729 = _0x206d54;
            this[_0x4ea729(214)](_0x2a5d27);
        });
    }
    ['handleError'](_0x1df021) {
        const _0x3f0a42 = _0x46bd30, _0x461d0e = {
                'FfkHq': _0x3f0a42(165),
                'jSaPS': function (_0x1e1745, _0x15539a) {
                    return _0x1e1745 === _0x15539a;
                },
                'oPRhU': 'ENOENT',
                'HtJwf': function (_0x31f14b, _0x557dd8) {
                    return _0x31f14b === _0x557dd8;
                },
                'fKhxE': _0x3f0a42(155),
                'zEvHg': 'BufferedProcessError'
            };
        let _0x5bcbe5 = ![];
        const _0x4f4baf = () => {
            _0x5bcbe5 = !![];
        };
        this['emitter']['emit'](_0x461d0e[_0x3f0a42(215)], {
            'error': _0x1df021,
            'handle': _0x4f4baf
        });
        _0x461d0e[_0x3f0a42(216)](_0x1df021[_0x3f0a42(217)], _0x461d0e[_0x3f0a42(218)]) && _0x461d0e[_0x3f0a42(219)](_0x1df021[_0x3f0a42(220)][_0x3f0a42(221)](_0x461d0e[_0x3f0a42(222)]), 487 + 2311 * 3 + -1 * 7420) && (_0x1df021 = new Error(_0x3f0a42(223) + this[_0x3f0a42(141)] + '`. Make sure `' + this[_0x3f0a42(141)] + _0x3f0a42(224), _0x1df021[_0x3f0a42(138)]), _0x1df021[_0x3f0a42(225)] = _0x461d0e[_0x3f0a42(226)]);
        if (!_0x5bcbe5)
            throw _0x1df021;
    }
};