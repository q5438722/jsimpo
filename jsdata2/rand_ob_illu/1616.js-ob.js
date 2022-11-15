const _0x5853 = ['RQeZZ', 'syscall', 'indexOf', 'Failed to spawn command `', '`. Make sure `', 'path', 'name', '6stGsPv', '241121fzQZsy', '646QKURRe', '1733hmAcqN', '60077ACFctK', '15VGonmC', '1015531MSHTRZ', '1GuMwih', '460108QrTmWM', '1454mwYXNd', '763nVHUMe', '6938050fwTRDL', 'underscore-plus', 'child_process', 'event-kit', 'exports', 'command', 'args', 'options', 'stderr', 'start', 'killed', 'win32', 'SkcbZ', 'started', 'QMBzt', 'platform', 'zIvHo', 'jaOKs', 'spawnWithEscapedWindowsArgs', 'spawn', 'handleEvents', 'stdout', 'exit', 'filter', 'map', 'isExplorerCommand', 'test', 'toString', 'unshift', 'clone', 'windowsVerbatimArguments', 'getCmdPath', 'join', 'onWillThrowError', 'bufferStream', 'utf8', 'data', 'setEncoding', 'length', 'lastIndexOf', 'bayoi', 'TEnOS', 'lhsKO', 'substring', 'ytCuq', 'wjpsd', 'killOnWindows', 'wmic', 'process', 'where', 'get', 'close', 'pid', 'fbtwE', 'iGpaT', 'ogkPb', '(ParentProcessId=', 'QUAgr', 'processid', 'killProcess', 'error', 'GuVkK', 'IHWsh', 'kill', 'explorer.exe', 'explorer', 'uvAaM', 'eRFib', 'KGZyl', 'HKHtx', 'SystemRoot', 'env', 'comspec', 'iYnqj', 'cmd.exe', 'ZkVpg', 'PQFEp', 'nextTick', 'handleError', 'function', 'spwsm', 'CCdNL', 'bqwFD', 'nTFlO', 'AYBJg', 'xZPuC', 'SJKro', 'ENOENT', 'emit', 'IhFGa', 'code', 'mTehm'];
const _0xc79e44 = _0x3885;

(function (_0x546e83, _0x2cf98a) {
    const _0x116707 = _0x3885;

    while (true) {
        try {
            const _0x31c547 = -parseInt(_0x116707(0x133)) * parseInt(_0x116707(0x134)) + -parseInt(_0x116707(0x135)) * parseInt(_0x116707(0x136)) + parseInt(_0x116707(0x137)) * -parseInt(_0x116707(0x138)) + -parseInt(_0x116707(0x139)) + -parseInt(_0x116707(0x13a)) * parseInt(_0x116707(0x13b)) + -parseInt(_0x116707(0x13c)) * parseInt(_0x116707(0x13d)) + parseInt(_0x116707(0x13e));

            if (_0x31c547 === _0x2cf98a) break;else _0x546e83.push(_0x546e83.shift());
        } catch (_0x2a4fee) {
            _0x546e83.push(_0x546e83.shift());
        }
    }
})(_0x5853, 885610);

const _ = require(_0xc79e44(0x13f));

const ChildProcess = require(_0xc79e44(0x140));

var { Emitter } = require(_0xc79e44(0x141));

const path = require('path');

function _0x3885(_0x3e6eda, _0x48c3d8) {
    return _0x3885 = function (_0x4aa952, _0xe68fce) {
        _0x4aa952 = _0x4aa952 - 307;
        const _0x1cd8a5 = _0x5853[_0x4aa952];

        return _0x1cd8a5;
    }, _0x3885(_0x3e6eda, _0x48c3d8);
}
module[_0xc79e44(0x142)] = class BufferedProcess {
    constructor({
        command: _0x16c16d,
        args: _0x3d25b9,
        options = {},
        stdout: _0x5acfba,
        stderr: _0x3725be,
        exit: _0x28135d,
        autoStart = true
    } = {}) {
        const _0x52dfd3 = _0xc79e44;
        const _0xa6a23c = { 'JDWha': '7|0|1|2|5|3|4|6|8' };

        const _0xab6d0a = _0xa6a23c.JDWha.split('|');

        var _0x225c7c = 0;

        while (true) {
            switch (_0xab6d0a[_0x225c7c++]) {
                case '0':
                    this[_0x52dfd3(0x143)] = _0x16c16d;
                    continue;
                case '1':
                    this[_0x52dfd3(0x144)] = _0x3d25b9;
                    continue;
                case '2':
                    this[_0x52dfd3(0x145)] = options;
                    continue;
                case '3':
                    this[_0x52dfd3(0x146)] = _0x3725be;
                    continue;
                case '4':
                    this['exit'] = _0x28135d;
                    continue;
                case '5':
                    this['stdout'] = _0x5acfba;
                    continue;
                case '6':
                    autoStart === true && this[_0x52dfd3(0x147)]();
                    continue;
                case '7':
                    this['emitter'] = new Emitter();
                    continue;
                case '8':
                    this[_0x52dfd3(0x148)] = false;
                    continue;
            }
            break;
        }
    }
    [_0xc79e44(0x147)]() {
        const _0x29a1ec = _0xc79e44;
        const _0x1e6e6 = {
            'SkcbZ': function (_0xf5c409, _0x14b2b9) {
                return _0xf5c409 === _0x14b2b9;
            },
            'QMBzt': function (_0x590c42, _0x3dbb1a) {
                return _0x590c42 === _0x3dbb1a;
            },
            'zIvHo': _0x29a1ec(0x149),
            'jaOKs': function (_0x19b776, _0x6aef0) {
                return _0x19b776 === _0x6aef0;
            }
        };

        if (_0x1e6e6[_0x29a1ec(0x14a)](this.started, true)) return;
        this[_0x29a1ec(0x14b)] = true, _0x1e6e6[_0x29a1ec(0x14c)](process[_0x29a1ec(0x14d)], _0x1e6e6[_0x29a1ec(0x14e)]) && _0x1e6e6[_0x29a1ec(0x14f)](this.options.shell, undefined) ? this[_0x29a1ec(0x150)](this[_0x29a1ec(0x143)], this.args, this[_0x29a1ec(0x145)]) : this[_0x29a1ec(0x151)](this.command, this[_0x29a1ec(0x144)], this.options), this[_0x29a1ec(0x152)](this[_0x29a1ec(0x153)], this[_0x29a1ec(0x146)], this[_0x29a1ec(0x154)]);
    }
    ['spawnWithEscapedWindowsArgs'](_0x18cc53, _0x58d47e, _0x4cdca6) {
        const _0x1e2dc3 = _0xc79e44;
        var _0x2bbd8b = [];

        _0x58d47e && (_0x2bbd8b = _0x58d47e[_0x1e2dc3(0x155)](_0x79b7e0 => _0x79b7e0 != null)[_0x1e2dc3(0x156)](_0x1b083c => {
            const _0x42541c = _0x1e2dc3;

            return this[_0x42541c(0x157)](_0x18cc53) && /^\/[a-zA-Z]+,.*$/[_0x42541c(0x158)](_0x1b083c) ? _0x1b083c : '"' + _0x1b083c[_0x42541c(0x159)]().replace(/"/g, '\\"') + '"';
        }));
        _0x2bbd8b[_0x1e2dc3(0x15a)](/\s|&|\^|\(|\)|\||#/[_0x1e2dc3(0x158)](_0x18cc53) ? '"' + _0x18cc53 + '"' : _0x18cc53);

        const _0x4751bb = _[_0x1e2dc3(0x15b)](_0x4cdca6);

        _0x4751bb[_0x1e2dc3(0x15c)] = true, this[_0x1e2dc3(0x151)](this[_0x1e2dc3(0x15d)](), ['/s', '/d', '/c', '"' + _0x2bbd8b[_0x1e2dc3(0x15e)](' ') + '"'], _0x4751bb);
    }
    [_0xc79e44(0x15f)](_0x149811) {
        return this.emitter.on('will-throw-error', _0x149811);
    }
    [_0xc79e44(0x160)](_0x55ddb6, _0x3c333, _0x1772aa) {
        const _0x2ad900 = _0xc79e44;
        const _0x352649 = {
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
            'DnAso': _0x2ad900(0x161),
            'Kxyxl': _0x2ad900(0x162),
            'ytCuq': 'close'
        };

        _0x55ddb6[_0x2ad900(0x163)](_0x352649.DnAso);
        var _0x2d3054 = '';

        _0x55ddb6.on(_0x352649.Kxyxl, _0x42f705 => {
            const _0x453711 = _0x2ad900;

            if (this[_0x453711(0x148)]) return;

            const _0x387f3e = _0x2d3054[_0x453711(0x164)];

            _0x2d3054 += _0x42f705;

            const _0x4781ba = _0x42f705[_0x453711(0x165)]('\n');

            if (_0x352649[_0x453711(0x166)](_0x4781ba, -1)) {
                const _0x5c4ca6 = _0x352649[_0x453711(0x167)](_0x4781ba, _0x387f3e) + 1;

                _0x352649[_0x453711(0x168)](_0x3c333, _0x2d3054[_0x453711(0x169)](0, _0x5c4ca6)), _0x2d3054 = _0x2d3054[_0x453711(0x169)](_0x5c4ca6);
            }
        }), _0x55ddb6.on(_0x352649[_0x2ad900(0x16a)], () => {
            const _0x143b01 = _0x2ad900;

            if (this[_0x143b01(0x148)]) return;
            if (_0x352649.VDyUp(_0x2d3054[_0x143b01(0x164)], 0)) _0x352649[_0x143b01(0x168)](_0x3c333, _0x2d3054);
            _0x352649[_0x143b01(0x16b)](_0x1772aa);
        });
    }
    [_0xc79e44(0x16c)]() {
        const _0x1d0491 = _0xc79e44;
        const _0x3e8cfa = {
            'fbtwE': _0x1d0491(0x16d),
            'iGpaT': _0x1d0491(0x16e),
            'ogkPb': _0x1d0491(0x16f),
            'QUAgr': _0x1d0491(0x170),
            'GuVkK': _0x1d0491(0x162),
            'IHWsh': _0x1d0491(0x171)
        };

        if (!this[_0x1d0491(0x16e)]) return;

        const _0x5c31cd = this.process[_0x1d0491(0x172)];

        const _0x37d458 = _0x3e8cfa[_0x1d0491(0x173)];

        const _0x665b54 = [_0x3e8cfa[_0x1d0491(0x174)], _0x3e8cfa[_0x1d0491(0x175)], _0x1d0491(0x176) + _0x5c31cd + ')', _0x3e8cfa[_0x1d0491(0x177)], _0x1d0491(0x178)];

        var _0x1fc281;

        try {
            _0x1fc281 = ChildProcess.spawn(_0x37d458, _0x665b54);
        } catch (_0x3441b9) {
            this[_0x1d0491(0x179)]();
            return;
        }
        _0x1fc281.on(_0x1d0491(0x17a), () => {});
        var _0xbbc0fd = '';

        _0x1fc281.stdout.on(_0x3e8cfa[_0x1d0491(0x17b)], _0x466ce9 => {
            _0xbbc0fd += _0x466ce9;
        }), _0x1fc281[_0x1d0491(0x153)].on(_0x3e8cfa[_0x1d0491(0x17c)], () => {
            const _0x357a19 = _0x1d0491;

            for (let _0x58bfcc of _0xbbc0fd.split(/\s+/)) {
                if (!/^\d{1,10}$/[_0x357a19(0x158)](_0x58bfcc)) continue;
                _0x58bfcc = parseInt(_0x58bfcc, 10);
                if (!_0x58bfcc || _0x58bfcc === _0x5c31cd) continue;
                try {
                    process[_0x357a19(0x17d)](_0x58bfcc);
                } catch (_0x26a667) {}
            }
            this[_0x357a19(0x179)]();
        });
    }
    [_0xc79e44(0x179)]() {
        const _0x4fc153 = _0xc79e44;

        if (this[_0x4fc153(0x16e)]) this[_0x4fc153(0x16e)][_0x4fc153(0x17d)]();
        this[_0x4fc153(0x16e)] = null;
    }
    [_0xc79e44(0x157)](_0x404278) {
        const _0x59d64f = _0xc79e44;
        const _0x4580ae = {
            'uvAaM': function (_0xec8659, _0xbfbcbe) {
                return _0xec8659 === _0xbfbcbe;
            },
            'eRFib': _0x59d64f(0x17e),
            'KGZyl': function (_0x44cb04, _0x439665) {
                return _0x44cb04 === _0x439665;
            },
            'HKHtx': _0x59d64f(0x17f)
        };

        if (_0x4580ae[_0x59d64f(0x180)](_0x404278, _0x4580ae[_0x59d64f(0x181)]) || _0x4580ae[_0x59d64f(0x182)](_0x404278, _0x4580ae[_0x59d64f(0x183)])) return true;else return process.env[_0x59d64f(0x184)] ? _0x4580ae.KGZyl(_0x404278, path[_0x59d64f(0x15e)](process.env[_0x59d64f(0x184)], _0x59d64f(0x17e))) || _0x4580ae[_0x59d64f(0x182)](_0x404278, path[_0x59d64f(0x15e)](process[_0x59d64f(0x185)][_0x59d64f(0x184)], _0x4580ae.HKHtx)) : false;
    }
    ['getCmdPath']() {
        const _0x5210bd = _0xc79e44;
        const _0x17f279 = { 'iYnqj': 'System32' };

        if (process[_0x5210bd(0x185)][_0x5210bd(0x186)]) return process[_0x5210bd(0x185)][_0x5210bd(0x186)];else return process.env[_0x5210bd(0x184)] ? path[_0x5210bd(0x15e)](process[_0x5210bd(0x185)][_0x5210bd(0x184)], _0x17f279[_0x5210bd(0x187)], 'cmd.exe') : _0x5210bd(0x188);
    }
    ['kill']() {
        const _0x26fc37 = _0xc79e44;
        const _0x1e49de = {
            'ZkVpg': function (_0x2fe371, _0x3c7ee1) {
                return _0x2fe371 === _0x3c7ee1;
            },
            'PQFEp': _0x26fc37(0x149)
        };

        if (this[_0x26fc37(0x148)]) return;
        this[_0x26fc37(0x148)] = true, _0x1e49de[_0x26fc37(0x189)](process.platform, _0x1e49de[_0x26fc37(0x18a)]) ? this[_0x26fc37(0x16c)]() : this[_0x26fc37(0x179)]();
    }
    ['spawn'](_0x302bec, _0x380dc9, _0x2f469a) {
        const _0x108b82 = _0xc79e44;

        try {
            this[_0x108b82(0x16e)] = ChildProcess[_0x108b82(0x151)](_0x302bec, _0x380dc9, _0x2f469a);
        } catch (_0xebd0e) {
            process[_0x108b82(0x18b)](() => this[_0x108b82(0x18c)](_0xebd0e));
        }
    }
    [_0xc79e44(0x152)](_0x394e95, _0x2820e0, _0x160f78) {
        const _0x1bd7dd = _0xc79e44;
        const _0x187e31 = {
            'spwsm': function (_0x26d69d, _0x12624a) {
                return _0x26d69d && _0x12624a;
            },
            'CCdNL': function (_0x24c840, _0x7fce76) {
                return _0x24c840 === _0x7fce76;
            },
            'bqwFD': _0x1bd7dd(0x18d),
            'nTFlO': function (_0x527a48, _0x418904) {
                return _0x527a48(_0x418904);
            },
            'GdhcN': function (_0x25ebb9) {
                return _0x25ebb9();
            },
            'AYBJg': function (_0x5b173d) {
                return _0x5b173d();
            },
            'xZPuC': _0x1bd7dd(0x154),
            'SJKro': _0x1bd7dd(0x17a)
        };

        if (!this[_0x1bd7dd(0x16e)]) return;

        const _0x224398 = () => {
            const _0x47bd8f = _0x1bd7dd;

            if (this.killed) return;
            _0x187e31[_0x47bd8f(0x18e)](_0x1f3a4b, _0x590c4d) && _0xb7e65b && _0x187e31[_0x47bd8f(0x18f)](typeof _0x160f78, _0x187e31[_0x47bd8f(0x190)]) && _0x187e31[_0x47bd8f(0x191)](_0x160f78, _0x2a394b);
        };

        var _0x1f3a4b = true;
        var _0x590c4d = true;
        var _0xb7e65b = true;
        var _0x2a394b = 0;

        _0x394e95 && (_0x1f3a4b = false, this[_0x1bd7dd(0x160)](this[_0x1bd7dd(0x16e)][_0x1bd7dd(0x153)], _0x394e95, () => {
            _0x1f3a4b = true, _0x187e31.GdhcN(_0x224398);
        })), _0x2820e0 && (_0x590c4d = false, this[_0x1bd7dd(0x160)](this[_0x1bd7dd(0x16e)][_0x1bd7dd(0x146)], _0x2820e0, () => {
            const _0x156c19 = _0x1bd7dd;

            _0x590c4d = true, _0x187e31[_0x156c19(0x192)](_0x224398);
        })), _0x160f78 && (_0xb7e65b = false, this.process.on(_0x187e31[_0x1bd7dd(0x193)], _0x51a51c => {
            _0x2a394b = _0x51a51c, _0xb7e65b = true, _0x224398();
        })), this.process.on(_0x187e31[_0x1bd7dd(0x194)], _0x40aecb => {
            const _0x26f80c = _0x1bd7dd;

            this[_0x26f80c(0x18c)](_0x40aecb);
        });
    }
    [_0xc79e44(0x18c)](_0xb5fa83) {
        const _0x46b7c8 = _0xc79e44;
        const _0x3688da = {
            'IhFGa': 'will-throw-error',
            'mTehm': _0x46b7c8(0x195),
            'RQeZZ': function (_0x22feae, _0x59a1cc) {
                return _0x22feae === _0x59a1cc;
            }
        };
        var _0x5170ee = false;

        const _0x1e0d88 = () => {
            _0x5170ee = true;
        };

        this.emitter[_0x46b7c8(0x196)](_0x3688da[_0x46b7c8(0x197)], {
            'error': _0xb5fa83,
            'handle': _0x1e0d88
        });
        _0xb5fa83[_0x46b7c8(0x198)] === _0x3688da[_0x46b7c8(0x199)] && _0x3688da[_0x46b7c8(0x19a)](_0xb5fa83[_0x46b7c8(0x19b)][_0x46b7c8(0x19c)](_0x46b7c8(0x151)), 0) && (_0xb5fa83 = new Error(_0x46b7c8(0x19d) + this.command + _0x46b7c8(0x19e) + this[_0x46b7c8(0x143)] + '` is installed and on your PATH', _0xb5fa83[_0x46b7c8(0x19f)]), _0xb5fa83[_0x46b7c8(0x1a0)] = 'BufferedProcessError');
        if (false) throw _0xb5fa83;
    }
};
