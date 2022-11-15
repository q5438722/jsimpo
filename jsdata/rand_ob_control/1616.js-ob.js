const _ = require('underscore-plus'), ChildProcess = require('child_process'), {Emitter} = require('event-kit'), path = require('path');
module['exports'] = class BufferedProcess {
    constructor({
        command: _0x1a3573,
        args: _0x154cfa,
        options: options = {},
        stdout: _0x3e1b0,
        stderr: _0x570051,
        exit: _0x3a21b5,
        autoStart: autoStart = !![]
    } = {}) {
        const _0x42012b = {
                'cbzji': '2|1|0|7|5|3|4|6|8',
                'Bfwvd': function (_0x5d62c9, _0x57bb7d) {
                    return _0x5d62c9 === _0x57bb7d;
                }
            }, _0x155c7d = _0x42012b['cbzji']['split']('|');
        let _0x133bac = 0x0;
        while (!![]) {
            switch (_0x155c7d[_0x133bac++]) {
            case '0':
                this['args'] = _0x154cfa;
                continue;
            case '1':
                this['command'] = _0x1a3573;
                continue;
            case '2':
                this['emitter'] = new Emitter();
                continue;
            case '3':
                this['stderr'] = _0x570051;
                continue;
            case '4':
                this['exit'] = _0x3a21b5;
                continue;
            case '5':
                this['stdout'] = _0x3e1b0;
                continue;
            case '6':
                _0x42012b['Bfwvd'](autoStart, !![]) && this['start']();
                continue;
            case '7':
                this['options'] = options;
                continue;
            case '8':
                this['killed'] = ![];
                continue;
            }
            break;
        }
    }
    ['start']() {
        const _0x5e485d = {
            'QNKLz': function (_0x3d1c4c, _0x2b8650) {
                return _0x3d1c4c === _0x2b8650;
            },
            'OTSXU': function (_0x3289f5, _0x2e903e) {
                return _0x3289f5 === _0x2e903e;
            },
            'Mnobp': 'win32'
        };
        if (_0x5e485d['QNKLz'](this['started'], !![]))
            return;
        this['started'] = !![], _0x5e485d['OTSXU'](process['platform'], _0x5e485d['Mnobp']) && _0x5e485d['OTSXU'](this['options']['shell'], undefined) ? this['spawnWithEscapedWindowsArgs'](this['command'], this['args'], this['options']) : this['spawn'](this['command'], this['args'], this['options']), this['handleEvents'](this['stdout'], this['stderr'], this['exit']);
    }
    ['spawnWithEscapedWindowsArgs'](_0x1cc5bb, _0x379357, _0x4aebbb) {
        let _0x31ed67 = [];
        _0x379357 && (_0x31ed67 = _0x379357['filter'](_0x565bd7 => _0x565bd7 != null)['map'](_0x560cf1 => {
            return this['isExplorerCommand'](_0x1cc5bb) && /^\/[a-zA-Z]+,.*$/['test'](_0x560cf1) ? _0x560cf1 : '\x22' + _0x560cf1['toString']()['replace'](/"/g, '\x5c\x22') + '\x22';
        }));
        _0x31ed67['unshift'](/\s|&|\^|\(|\)|\||#/['test'](_0x1cc5bb) ? '\x22' + _0x1cc5bb + '\x22' : _0x1cc5bb);
        const _0x1816a0 = _['clone'](_0x4aebbb);
        _0x1816a0['windowsVerbatimArguments'] = !![], this['spawn'](this['getCmdPath'](), [
            '/s',
            '/d',
            '/c',
            '\x22' + _0x31ed67['join']('\x20') + '\x22'
        ], _0x1816a0);
    }
    ['onWillThrowError'](_0x2d71b6) {
        const _0x4d867b = { 'YLTbp': 'will-throw-error' };
        return this['emitter']['on'](_0x4d867b['YLTbp'], _0x2d71b6);
    }
    ['bufferStream'](_0x184cd5, _0x1656e1, _0x11dca0) {
        const _0x499c42 = {
            'ZCtmb': function (_0x5d3cf2, _0x37720c) {
                return _0x5d3cf2 !== _0x37720c;
            },
            'JMEMn': function (_0x3b5d64, _0x14231f) {
                return _0x3b5d64 + _0x14231f;
            },
            'lyEOS': function (_0x161f98, _0x166dbd) {
                return _0x161f98 + _0x166dbd;
            },
            'azeOV': function (_0x15544e, _0x4b444d) {
                return _0x15544e(_0x4b444d);
            },
            'KTHof': function (_0x235e3a, _0x498d50) {
                return _0x235e3a > _0x498d50;
            },
            'ypgoA': function (_0x152621, _0x533eff) {
                return _0x152621(_0x533eff);
            },
            'YyPYP': function (_0x3e3f43) {
                return _0x3e3f43();
            },
            'YzrqX': 'utf8',
            'zMGzC': 'data',
            'hUJXM': 'close'
        };
        _0x184cd5['setEncoding'](_0x499c42['YzrqX']);
        let _0x4a485b = '';
        _0x184cd5['on'](_0x499c42['zMGzC'], _0x113b39 => {
            if (this['killed'])
                return;
            let _0x3bad38 = _0x4a485b['length'];
            _0x4a485b += _0x113b39;
            let _0x36843a = _0x113b39['lastIndexOf']('\x0a');
            if (_0x499c42['ZCtmb'](_0x36843a, -0x1)) {
                let _0x2086c4 = _0x499c42['JMEMn'](_0x499c42['lyEOS'](_0x36843a, _0x3bad38), 0x1);
                _0x499c42['azeOV'](_0x1656e1, _0x4a485b['substring'](0x0, _0x2086c4)), _0x4a485b = _0x4a485b['substring'](_0x2086c4);
            }
        }), _0x184cd5['on'](_0x499c42['hUJXM'], () => {
            if (this['killed'])
                return;
            if (_0x499c42['KTHof'](_0x4a485b['length'], 0x0))
                _0x499c42['ypgoA'](_0x1656e1, _0x4a485b);
            _0x499c42['YyPYP'](_0x11dca0);
        });
    }
    ['killOnWindows']() {
        const _0x47d95a = {
            'hNDjC': function (_0xd92570, _0x4fc3a1, _0x1d8c2f) {
                return _0xd92570(_0x4fc3a1, _0x1d8c2f);
            },
            'iNqXI': function (_0x5e74b4, _0x3e1cf4) {
                return _0x5e74b4 === _0x3e1cf4;
            },
            'nqwMp': 'wmic',
            'LfcIH': 'process',
            'DRrri': 'where',
            'viuqH': 'get',
            'VSTur': 'processid',
            'hZCvN': 'error',
            'LpJRc': 'data',
            'AwXPa': 'close'
        };
        if (!this['process'])
            return;
        const _0x1665c1 = this['process']['pid'], _0x295da9 = _0x47d95a['nqwMp'], _0x236a63 = [
                _0x47d95a['LfcIH'],
                _0x47d95a['DRrri'],
                '(ParentProcessId=' + _0x1665c1 + ')',
                _0x47d95a['viuqH'],
                _0x47d95a['VSTur']
            ];
        let _0x65b137;
        try {
            _0x65b137 = ChildProcess['spawn'](_0x295da9, _0x236a63);
        } catch (_0x47a6a6) {
            this['killProcess']();
            return;
        }
        _0x65b137['on'](_0x47d95a['hZCvN'], () => {
        });
        let _0x1764ae = '';
        _0x65b137['stdout']['on'](_0x47d95a['LpJRc'], _0x3fa8da => {
            _0x1764ae += _0x3fa8da;
        }), _0x65b137['stdout']['on'](_0x47d95a['AwXPa'], () => {
            for (let _0x178ca4 of _0x1764ae['split'](/\s+/)) {
                if (!/^\d{1,10}$/['test'](_0x178ca4))
                    continue;
                _0x178ca4 = _0x47d95a['hNDjC'](parseInt, _0x178ca4, 0xa);
                if (!_0x178ca4 || _0x47d95a['iNqXI'](_0x178ca4, _0x1665c1))
                    continue;
                try {
                    process['kill'](_0x178ca4);
                } catch (_0x5d9aa3) {
                }
            }
            this['killProcess']();
        });
    }
    ['killProcess']() {
        if (this['process'])
            this['process']['kill']();
        this['process'] = null;
    }
    ['isExplorerCommand'](_0x3c0434) {
        const _0x186cf0 = {
            'ZeRJR': function (_0x5e0844, _0x360663) {
                return _0x5e0844 === _0x360663;
            },
            'ilLcg': 'explorer.exe',
            'Zgdhn': function (_0x28b4f1, _0x5b4d85) {
                return _0x28b4f1 === _0x5b4d85;
            },
            'QfdWL': 'explorer',
            'uXOOX': function (_0x2f66cb, _0x2be198) {
                return _0x2f66cb === _0x2be198;
            }
        };
        if (_0x186cf0['ZeRJR'](_0x3c0434, _0x186cf0['ilLcg']) || _0x186cf0['Zgdhn'](_0x3c0434, _0x186cf0['QfdWL']))
            return !![];
        else
            return process['env']['SystemRoot'] ? _0x186cf0['uXOOX'](_0x3c0434, path['join'](process['env']['SystemRoot'], _0x186cf0['ilLcg'])) || _0x186cf0['uXOOX'](_0x3c0434, path['join'](process['env']['SystemRoot'], _0x186cf0['QfdWL'])) : ![];
    }
    ['getCmdPath']() {
        const _0x320737 = {
            'cWfXx': 'System32',
            'lXShk': 'cmd.exe'
        };
        if (process['env']['comspec'])
            return process['env']['comspec'];
        else
            return process['env']['SystemRoot'] ? path['join'](process['env']['SystemRoot'], _0x320737['cWfXx'], _0x320737['lXShk']) : _0x320737['lXShk'];
    }
    ['kill']() {
        const _0x43b08d = {
            'yKgeO': function (_0x99cfa8, _0x4beca4) {
                return _0x99cfa8 === _0x4beca4;
            },
            'Lpyds': 'win32'
        };
        if (this['killed'])
            return;
        this['killed'] = !![], _0x43b08d['yKgeO'](process['platform'], _0x43b08d['Lpyds']) ? this['killOnWindows']() : this['killProcess']();
    }
    ['spawn'](_0x2d3880, _0x147369, _0x2bca2c) {
        try {
            this['process'] = ChildProcess['spawn'](_0x2d3880, _0x147369, _0x2bca2c);
        } catch (_0x378f01) {
            process['nextTick'](() => this['handleError'](_0x378f01));
        }
    }
    ['handleEvents'](_0x51e80d, _0x12deea, _0x4cfd34) {
        const _0x41ac6d = {
            'kLUvg': function (_0x1828c5, _0x3c6256) {
                return _0x1828c5 && _0x3c6256;
            },
            'bmkfW': function (_0x38daab, _0x8e204e) {
                return _0x38daab === _0x8e204e;
            },
            'vLmXG': 'function',
            'pPMMO': function (_0x2b2029, _0x4cd00f) {
                return _0x2b2029(_0x4cd00f);
            },
            'VWEoW': function (_0x298d48) {
                return _0x298d48();
            },
            'PoJuZ': function (_0x5e9e9e) {
                return _0x5e9e9e();
            },
            'YJEsl': 'exit',
            'VOfiJ': 'error'
        };
        if (!this['process'])
            return;
        const _0x51cd09 = () => {
            if (this['killed'])
                return;
            _0x41ac6d['kLUvg'](_0x1fed22, _0x4aedb8) && _0x11a959 && _0x41ac6d['bmkfW'](typeof _0x4cfd34, _0x41ac6d['vLmXG']) && _0x41ac6d['pPMMO'](_0x4cfd34, _0x65b8af);
        };
        let _0x1fed22 = !![], _0x4aedb8 = !![], _0x11a959 = !![], _0x65b8af = 0x0;
        _0x51e80d && (_0x1fed22 = ![], this['bufferStream'](this['process']['stdout'], _0x51e80d, () => {
            _0x1fed22 = !![], _0x41ac6d['VWEoW'](_0x51cd09);
        })), _0x12deea && (_0x4aedb8 = ![], this['bufferStream'](this['process']['stderr'], _0x12deea, () => {
            _0x4aedb8 = !![], _0x41ac6d['VWEoW'](_0x51cd09);
        })), _0x4cfd34 && (_0x11a959 = ![], this['process']['on'](_0x41ac6d['YJEsl'], _0xa73ec3 => {
            _0x65b8af = _0xa73ec3, _0x11a959 = !![], _0x41ac6d['PoJuZ'](_0x51cd09);
        })), this['process']['on'](_0x41ac6d['VOfiJ'], _0x26dfe2 => {
            this['handleError'](_0x26dfe2);
        });
    }
    ['handleError'](_0x41a254) {
        const _0x1a278a = {
            'kuuPf': 'will-throw-error',
            'NBQvS': function (_0x511539, _0x45c364) {
                return _0x511539 === _0x45c364;
            },
            'dTPlp': 'ENOENT',
            'XhSOM': function (_0x487d4a, _0x30d06b) {
                return _0x487d4a === _0x30d06b;
            },
            'HVInA': 'spawn',
            'RPjXk': 'BufferedProcessError'
        };
        let _0x1dd9fb = ![];
        const _0x37bdff = () => {
            _0x1dd9fb = !![];
        };
        this['emitter']['emit'](_0x1a278a['kuuPf'], {
            'error': _0x41a254,
            'handle': _0x37bdff
        });
        _0x1a278a['NBQvS'](_0x41a254['code'], _0x1a278a['dTPlp']) && _0x1a278a['XhSOM'](_0x41a254['syscall']['indexOf'](_0x1a278a['HVInA']), 0x0) && (_0x41a254 = new Error('Failed\x20to\x20spawn\x20command\x20`' + this['command'] + '`.\x20Make\x20sure\x20`' + this['command'] + '`\x20is\x20installed\x20and\x20on\x20your\x20PATH', _0x41a254['path']), _0x41a254['name'] = _0x1a278a['RPjXk']);
        if (!_0x1dd9fb)
            throw _0x41a254;
    }
};
