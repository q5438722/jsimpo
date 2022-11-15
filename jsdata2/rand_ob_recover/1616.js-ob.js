const _ = require(_0xc79e44(319)), ChildProcess = require(_0xc79e44(320)), {Emitter} = require(_0xc79e44(321)), path = require('path');
function _0x3885(_0x3e6eda, _0x48c3d8) {
    return _0x3885 = function (_0x4aa952, _0xe68fce) {
        _0x4aa952 = _0x4aa952 - (3 * 3082 + 6970 * -1 + -1969);
        let _0x1cd8a5 = _0x5853[_0x4aa952];
        return _0x1cd8a5;
    }, _0x3885(_0x3e6eda, _0x48c3d8);
}
module[_0xc79e44(322)] = class BufferedProcess {
    constructor({
        command: _0x16c16d,
        args: _0x3d25b9,
        options: options = {},
        stdout: _0x5acfba,
        stderr: _0x3725be,
        exit: _0x28135d,
        autoStart: autoStart = !![]
    } = {}) {
        const _0x52dfd3 = _0xc79e44, _0xa6a23c = { 'JDWha': '7|0|1|2|5|3|4|6|8' }, _0xab6d0a = _0xa6a23c['JDWha']['split']('|');
        let _0x225c7c = 62 * 8 + 1801 * -2 + 1 * 3106;
        while (!![]) {
            switch (_0xab6d0a[_0x225c7c++]) {
            case '0':
                this[_0x52dfd3(323)] = _0x16c16d;
                continue;
            case '1':
                this[_0x52dfd3(324)] = _0x3d25b9;
                continue;
            case '2':
                this[_0x52dfd3(325)] = options;
                continue;
            case '3':
                this[_0x52dfd3(326)] = _0x3725be;
                continue;
            case '4':
                this['exit'] = _0x28135d;
                continue;
            case '5':
                this['stdout'] = _0x5acfba;
                continue;
            case '6':
                autoStart === !![] && this[_0x52dfd3(327)]();
                continue;
            case '7':
                this['emitter'] = new Emitter();
                continue;
            case '8':
                this[_0x52dfd3(328)] = ![];
                continue;
            }
            break;
        }
    }
    [_0xc79e44(327)]() {
        const _0x29a1ec = _0xc79e44, _0x1e6e6 = {
                'SkcbZ': function (_0xf5c409, _0x14b2b9) {
                    return _0xf5c409 === _0x14b2b9;
                },
                'QMBzt': function (_0x590c42, _0x3dbb1a) {
                    return _0x590c42 === _0x3dbb1a;
                },
                'zIvHo': _0x29a1ec(329),
                'jaOKs': function (_0x19b776, _0x6aef0) {
                    return _0x19b776 === _0x6aef0;
                }
            };
        if (_0x1e6e6[_0x29a1ec(330)](this['started'], !![]))
            return;
        this[_0x29a1ec(331)] = !![], _0x1e6e6[_0x29a1ec(332)](process[_0x29a1ec(333)], _0x1e6e6[_0x29a1ec(334)]) && _0x1e6e6[_0x29a1ec(335)](this['options']['shell'], undefined) ? this[_0x29a1ec(336)](this[_0x29a1ec(323)], this['args'], this[_0x29a1ec(325)]) : this[_0x29a1ec(337)](this['command'], this[_0x29a1ec(324)], this['options']), this[_0x29a1ec(338)](this[_0x29a1ec(339)], this[_0x29a1ec(326)], this[_0x29a1ec(340)]);
    }
    ['spawnWithEscapedWindowsArgs'](_0x18cc53, _0x58d47e, _0x4cdca6) {
        const _0x1e2dc3 = _0xc79e44;
        let _0x2bbd8b = [];
        _0x58d47e && (_0x2bbd8b = _0x58d47e[_0x1e2dc3(341)](_0x79b7e0 => _0x79b7e0 != null)[_0x1e2dc3(342)](_0x1b083c => {
            const _0x42541c = _0x1e2dc3;
            return this[_0x42541c(343)](_0x18cc53) && /^\/[a-zA-Z]+,.*$/[_0x42541c(344)](_0x1b083c) ? _0x1b083c : '"' + _0x1b083c[_0x42541c(345)]()['replace'](/"/g, '\\"') + '"';
        }));
        _0x2bbd8b[_0x1e2dc3(346)](/\s|&|\^|\(|\)|\||#/[_0x1e2dc3(344)](_0x18cc53) ? '"' + _0x18cc53 + '"' : _0x18cc53);
        const _0x4751bb = _[_0x1e2dc3(347)](_0x4cdca6);
        _0x4751bb[_0x1e2dc3(348)] = !![], this[_0x1e2dc3(337)](this[_0x1e2dc3(349)](), [
            '/s',
            '/d',
            '/c',
            '"' + _0x2bbd8b[_0x1e2dc3(350)](' ') + '"'
        ], _0x4751bb);
    }
    [_0xc79e44(351)](_0x149811) {
        return this['emitter']['on']('will-throw-error', _0x149811);
    }
    [_0xc79e44(352)](_0x55ddb6, _0x3c333, _0x1772aa) {
        const _0x2ad900 = _0xc79e44, _0x352649 = {
                'bayoi': function (_0x322bd, _0x31f069) {
                    return _0x322bd !== _0x31f069;
                },
                'TEnOS': function (_0x4190b1, _0x544102) {
                    return _0x4190b1 + _0x544102;
                },
                'lhsKO': function (_0x27ee27, _0xf5dd54) {
                    return _0x27ee27(_0xf5dd54);
                },
                'VDyUp': function (_0x479645, _0xaaadd3) {
                    return _0x479645 > _0xaaadd3;
                },
                'wjpsd': function (_0xaae4f8) {
                    return _0xaae4f8();
                },
                'DnAso': _0x2ad900(353),
                'Kxyxl': _0x2ad900(354),
                'ytCuq': 'close'
            };
        _0x55ddb6[_0x2ad900(355)](_0x352649['DnAso']);
        let _0x2d3054 = '';
        _0x55ddb6['on'](_0x352649['Kxyxl'], _0x42f705 => {
            const _0x453711 = _0x2ad900;
            if (this[_0x453711(328)])
                return;
            let _0x387f3e = _0x2d3054[_0x453711(356)];
            _0x2d3054 += _0x42f705;
            let _0x4781ba = _0x42f705[_0x453711(357)]('\n');
            if (_0x352649[_0x453711(358)](_0x4781ba, -(4 * 521 + 8816 + -10899))) {
                let _0x5c4ca6 = _0x352649[_0x453711(359)](_0x4781ba, _0x387f3e) + (-961 * 5 + -1931 * 5 + 1 * 14461);
                _0x352649[_0x453711(360)](_0x3c333, _0x2d3054[_0x453711(361)](1 * -9641 + -4250 * 1 + 13891, _0x5c4ca6)), _0x2d3054 = _0x2d3054[_0x453711(361)](_0x5c4ca6);
            }
        }), _0x55ddb6['on'](_0x352649[_0x2ad900(362)], () => {
            const _0x143b01 = _0x2ad900;
            if (this[_0x143b01(328)])
                return;
            if (_0x352649['VDyUp'](_0x2d3054[_0x143b01(356)], -3232 + 8120 + -1 * 4888))
                _0x352649[_0x143b01(360)](_0x3c333, _0x2d3054);
            _0x352649[_0x143b01(363)](_0x1772aa);
        });
    }
    [_0xc79e44(364)]() {
        const _0x1d0491 = _0xc79e44, _0x3e8cfa = {
                'fbtwE': _0x1d0491(365),
                'iGpaT': _0x1d0491(366),
                'ogkPb': _0x1d0491(367),
                'QUAgr': _0x1d0491(368),
                'GuVkK': _0x1d0491(354),
                'IHWsh': _0x1d0491(369)
            };
        if (!this[_0x1d0491(366)])
            return;
        const _0x5c31cd = this['process'][_0x1d0491(370)], _0x37d458 = _0x3e8cfa[_0x1d0491(371)], _0x665b54 = [
                _0x3e8cfa[_0x1d0491(372)],
                _0x3e8cfa[_0x1d0491(373)],
                _0x1d0491(374) + _0x5c31cd + ')',
                _0x3e8cfa[_0x1d0491(375)],
                _0x1d0491(376)
            ];
        let _0x1fc281;
        try {
            _0x1fc281 = ChildProcess['spawn'](_0x37d458, _0x665b54);
        } catch (_0x3441b9) {
            this[_0x1d0491(377)]();
            return;
        }
        _0x1fc281['on'](_0x1d0491(378), () => {
        });
        let _0xbbc0fd = '';
        _0x1fc281['stdout']['on'](_0x3e8cfa[_0x1d0491(379)], _0x466ce9 => {
            _0xbbc0fd += _0x466ce9;
        }), _0x1fc281[_0x1d0491(339)]['on'](_0x3e8cfa[_0x1d0491(380)], () => {
            const _0x357a19 = _0x1d0491;
            for (let _0x58bfcc of _0xbbc0fd['split'](/\s+/)) {
                if (!/^\d{1,10}$/[_0x357a19(344)](_0x58bfcc))
                    continue;
                _0x58bfcc = parseInt(_0x58bfcc, 7354 + -7898 + 554);
                if (!_0x58bfcc || _0x58bfcc === _0x5c31cd)
                    continue;
                try {
                    process[_0x357a19(381)](_0x58bfcc);
                } catch (_0x26a667) {
                }
            }
            this[_0x357a19(377)]();
        });
    }
    [_0xc79e44(377)]() {
        const _0x4fc153 = _0xc79e44;
        if (this[_0x4fc153(366)])
            this[_0x4fc153(366)][_0x4fc153(381)]();
        this[_0x4fc153(366)] = null;
    }
    [_0xc79e44(343)](_0x404278) {
        const _0x59d64f = _0xc79e44, _0x4580ae = {
                'uvAaM': function (_0xec8659, _0xbfbcbe) {
                    return _0xec8659 === _0xbfbcbe;
                },
                'eRFib': _0x59d64f(382),
                'KGZyl': function (_0x44cb04, _0x439665) {
                    return _0x44cb04 === _0x439665;
                },
                'HKHtx': _0x59d64f(383)
            };
        if (_0x4580ae[_0x59d64f(384)](_0x404278, _0x4580ae[_0x59d64f(385)]) || _0x4580ae[_0x59d64f(386)](_0x404278, _0x4580ae[_0x59d64f(387)]))
            return !![];
        else
            return process['env'][_0x59d64f(388)] ? _0x4580ae['KGZyl'](_0x404278, path[_0x59d64f(350)](process['env'][_0x59d64f(388)], _0x59d64f(382))) || _0x4580ae[_0x59d64f(386)](_0x404278, path[_0x59d64f(350)](process[_0x59d64f(389)][_0x59d64f(388)], _0x4580ae['HKHtx'])) : ![];
    }
    ['getCmdPath']() {
        const _0x5210bd = _0xc79e44, _0x17f279 = { 'iYnqj': 'System32' };
        if (process[_0x5210bd(389)][_0x5210bd(390)])
            return process[_0x5210bd(389)][_0x5210bd(390)];
        else
            return process['env'][_0x5210bd(388)] ? path[_0x5210bd(350)](process[_0x5210bd(389)][_0x5210bd(388)], _0x17f279[_0x5210bd(391)], 'cmd.exe') : _0x5210bd(392);
    }
    ['kill']() {
        const _0x26fc37 = _0xc79e44, _0x1e49de = {
                'ZkVpg': function (_0x2fe371, _0x3c7ee1) {
                    return _0x2fe371 === _0x3c7ee1;
                },
                'PQFEp': _0x26fc37(329)
            };
        if (this[_0x26fc37(328)])
            return;
        this[_0x26fc37(328)] = !![], _0x1e49de[_0x26fc37(393)](process['platform'], _0x1e49de[_0x26fc37(394)]) ? this[_0x26fc37(364)]() : this[_0x26fc37(377)]();
    }
    ['spawn'](_0x302bec, _0x380dc9, _0x2f469a) {
        const _0x108b82 = _0xc79e44;
        try {
            this[_0x108b82(366)] = ChildProcess[_0x108b82(337)](_0x302bec, _0x380dc9, _0x2f469a);
        } catch (_0xebd0e) {
            process[_0x108b82(395)](() => this[_0x108b82(396)](_0xebd0e));
        }
    }
    [_0xc79e44(338)](_0x394e95, _0x2820e0, _0x160f78) {
        const _0x1bd7dd = _0xc79e44, _0x187e31 = {
                'spwsm': function (_0x26d69d, _0x12624a) {
                    return _0x26d69d && _0x12624a;
                },
                'CCdNL': function (_0x24c840, _0x7fce76) {
                    return _0x24c840 === _0x7fce76;
                },
                'bqwFD': _0x1bd7dd(397),
                'nTFlO': function (_0x527a48, _0x418904) {
                    return _0x527a48(_0x418904);
                },
                'GdhcN': function (_0x25ebb9) {
                    return _0x25ebb9();
                },
                'AYBJg': function (_0x5b173d) {
                    return _0x5b173d();
                },
                'xZPuC': _0x1bd7dd(340),
                'SJKro': _0x1bd7dd(378)
            };
        if (!this[_0x1bd7dd(366)])
            return;
        const _0x224398 = () => {
            const _0x47bd8f = _0x1bd7dd;
            if (this['killed'])
                return;
            _0x187e31[_0x47bd8f(398)](_0x1f3a4b, _0x590c4d) && _0xb7e65b && _0x187e31[_0x47bd8f(399)](typeof _0x160f78, _0x187e31[_0x47bd8f(400)]) && _0x187e31[_0x47bd8f(401)](_0x160f78, _0x2a394b);
        };
        let _0x1f3a4b = !![], _0x590c4d = !![], _0xb7e65b = !![], _0x2a394b = 36 + 8596 + 1079 * -8;
        _0x394e95 && (_0x1f3a4b = ![], this[_0x1bd7dd(352)](this[_0x1bd7dd(366)][_0x1bd7dd(339)], _0x394e95, () => {
            _0x1f3a4b = !![], _0x187e31['GdhcN'](_0x224398);
        })), _0x2820e0 && (_0x590c4d = ![], this[_0x1bd7dd(352)](this[_0x1bd7dd(366)][_0x1bd7dd(326)], _0x2820e0, () => {
            const _0x156c19 = _0x1bd7dd;
            _0x590c4d = !![], _0x187e31[_0x156c19(402)](_0x224398);
        })), _0x160f78 && (_0xb7e65b = ![], this['process']['on'](_0x187e31[_0x1bd7dd(403)], _0x51a51c => {
            _0x2a394b = _0x51a51c, _0xb7e65b = !![], _0x224398();
        })), this['process']['on'](_0x187e31[_0x1bd7dd(404)], _0x40aecb => {
            const _0x26f80c = _0x1bd7dd;
            this[_0x26f80c(396)](_0x40aecb);
        });
    }
    [_0xc79e44(396)](_0xb5fa83) {
        const _0x46b7c8 = _0xc79e44, _0x3688da = {
                'IhFGa': 'will-throw-error',
                'mTehm': _0x46b7c8(405),
                'RQeZZ': function (_0x22feae, _0x59a1cc) {
                    return _0x22feae === _0x59a1cc;
                }
            };
        let _0x5170ee = ![];
        const _0x1e0d88 = () => {
            _0x5170ee = !![];
        };
        this['emitter'][_0x46b7c8(406)](_0x3688da[_0x46b7c8(407)], {
            'error': _0xb5fa83,
            'handle': _0x1e0d88
        });
        _0xb5fa83[_0x46b7c8(408)] === _0x3688da[_0x46b7c8(409)] && _0x3688da[_0x46b7c8(410)](_0xb5fa83[_0x46b7c8(411)][_0x46b7c8(412)](_0x46b7c8(337)), 1 * 1561 + -1197 + -364) && (_0xb5fa83 = new Error(_0x46b7c8(413) + this['command'] + _0x46b7c8(414) + this[_0x46b7c8(323)] + '` is installed and on your PATH', _0xb5fa83[_0x46b7c8(415)]), _0xb5fa83[_0x46b7c8(416)] = 'BufferedProcessError');
        if (!_0x5170ee)
            throw _0xb5fa83;
    }
};