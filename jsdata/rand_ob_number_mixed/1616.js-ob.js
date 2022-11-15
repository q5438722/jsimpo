const _ = require('underscore-plus'), ChildProcess = require('child_process'), {Emitter} = require('event-kit'), path = require('path');
module['exports'] = class BufferedProcess {
    constructor({
        command: _0x313d9b,
        args: _0x55c12a,
        options: options = {},
        stdout: _0x540cd4,
        stderr: _0x53075d,
        exit: _0x56e78f,
        autoStart: autoStart = !![]
    } = {}) {
        this['emitter'] = new Emitter(), this['command'] = _0x313d9b, this['args'] = _0x55c12a, this['options'] = options, this['stdout'] = _0x540cd4, this['stderr'] = _0x53075d, this['exit'] = _0x56e78f, autoStart === !![] && this['start'](), this['killed'] = ![];
    }
    ['start']() {
        if (this['started'] === !![])
            return;
        this['started'] = !![], process['platform'] === 'win32' && this['options']['shell'] === undefined ? this['spawnWithEscapedWindowsArgs'](this['command'], this['args'], this['options']) : this['spawn'](this['command'], this['args'], this['options']), this['handleEvents'](this['stdout'], this['stderr'], this['exit']);
    }
    ['spawnWithEscapedWindowsArgs'](_0x1723ab, _0x5505d1, _0x70ba4a) {
        let _0xe86c9b = [];
        _0x5505d1 && (_0xe86c9b = _0x5505d1['filter'](_0x443d11 => _0x443d11 != null)['map'](_0x478cd0 => {
            return this['isExplorerCommand'](_0x1723ab) && /^\/[a-zA-Z]+,.*$/['test'](_0x478cd0) ? _0x478cd0 : '\x22' + _0x478cd0['toString']()['replace'](/"/g, '\x5c\x22') + '\x22';
        }));
        _0xe86c9b['unshift'](/\s|&|\^|\(|\)|\||#/['test'](_0x1723ab) ? '\x22' + _0x1723ab + '\x22' : _0x1723ab);
        const _0x4a4b93 = _['clone'](_0x70ba4a);
        _0x4a4b93['windowsVerbatimArguments'] = !![], this['spawn'](this['getCmdPath'](), [
            '/s',
            '/d',
            '/c',
            '\x22' + _0xe86c9b['join']('\x20') + '\x22'
        ], _0x4a4b93);
    }
    ['onWillThrowError'](_0x397efa) {
        return this['emitter']['on']('will-throw-error', _0x397efa);
    }
    ['bufferStream'](_0x18e05e, _0x4ab7be, _0x2f2adc) {
        _0x18e05e['setEncoding']('utf8');
        let _0x118d50 = '';
        _0x18e05e['on']('data', _0x582722 => {
            if (this['killed'])
                return;
            let _0x533186 = _0x118d50['length'];
            _0x118d50 += _0x582722;
            let _0x29cfa8 = _0x582722['lastIndexOf']('\x0a');
            if (_0x29cfa8 !== -(-0x11 * 0xdf + 0x15 * 0x5e + 0x1 * 0x71a)) {
                let _0x9acbc0 = _0x29cfa8 + _0x533186 + (-0x1b6 + 0xf9 * -0x26 + 0x26ad);
                _0x4ab7be(_0x118d50['substring'](-0x357 * -0x2 + -0x2 * 0x977 + 0xc40, _0x9acbc0)), _0x118d50 = _0x118d50['substring'](_0x9acbc0);
            }
        }), _0x18e05e['on']('close', () => {
            if (this['killed'])
                return;
            if (_0x118d50['length'] > 0x1e31 + 0xf62 + -0x2d93)
                _0x4ab7be(_0x118d50);
            _0x2f2adc();
        });
    }
    ['killOnWindows']() {
        if (!this['process'])
            return;
        const _0x14f4f2 = this['process']['pid'], _0x35b9cb = 'wmic', _0x29970f = [
                'process',
                'where',
                '(ParentProcessId=' + _0x14f4f2 + ')',
                'get',
                'processid'
            ];
        let _0x417f4f;
        try {
            _0x417f4f = ChildProcess['spawn'](_0x35b9cb, _0x29970f);
        } catch (_0xbc511) {
            this['killProcess']();
            return;
        }
        _0x417f4f['on']('error', () => {
        });
        let _0x57ca92 = '';
        _0x417f4f['stdout']['on']('data', _0x5738ea => {
            _0x57ca92 += _0x5738ea;
        }), _0x417f4f['stdout']['on']('close', () => {
            for (let _0x6d43bd of _0x57ca92['split'](/\s+/)) {
                if (!/^\d{1,10}$/['test'](_0x6d43bd))
                    continue;
                _0x6d43bd = parseInt(_0x6d43bd, -0x1cb4 + 0xf95 + -0x463 * -0x3);
                if (!_0x6d43bd || _0x6d43bd === _0x14f4f2)
                    continue;
                try {
                    process['kill'](_0x6d43bd);
                } catch (_0x3a93a8) {
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
    ['isExplorerCommand'](_0x4ed400) {
        if (_0x4ed400 === 'explorer.exe' || _0x4ed400 === 'explorer')
            return !![];
        else
            return process['env']['SystemRoot'] ? _0x4ed400 === path['join'](process['env']['SystemRoot'], 'explorer.exe') || _0x4ed400 === path['join'](process['env']['SystemRoot'], 'explorer') : ![];
    }
    ['getCmdPath']() {
        if (process['env']['comspec'])
            return process['env']['comspec'];
        else
            return process['env']['SystemRoot'] ? path['join'](process['env']['SystemRoot'], 'System32', 'cmd.exe') : 'cmd.exe';
    }
    ['kill']() {
        if (this['killed'])
            return;
        this['killed'] = !![], process['platform'] === 'win32' ? this['killOnWindows']() : this['killProcess']();
    }
    ['spawn'](_0x426db5, _0x1c4974, _0x481428) {
        try {
            this['process'] = ChildProcess['spawn'](_0x426db5, _0x1c4974, _0x481428);
        } catch (_0x249ccc) {
            process['nextTick'](() => this['handleError'](_0x249ccc));
        }
    }
    ['handleEvents'](_0x29fe24, _0x1da725, _0x5b6576) {
        if (!this['process'])
            return;
        const _0x1d1d46 = () => {
            if (this['killed'])
                return;
            _0x4dfc49 && _0x3969d3 && _0x400243 && typeof _0x5b6576 === 'function' && _0x5b6576(_0x4f5951);
        };
        let _0x4dfc49 = !![], _0x3969d3 = !![], _0x400243 = !![], _0x4f5951 = -0xad * 0x8 + 0x17b0 + -0x249 * 0x8;
        _0x29fe24 && (_0x4dfc49 = ![], this['bufferStream'](this['process']['stdout'], _0x29fe24, () => {
            _0x4dfc49 = !![], _0x1d1d46();
        })), _0x1da725 && (_0x3969d3 = ![], this['bufferStream'](this['process']['stderr'], _0x1da725, () => {
            _0x3969d3 = !![], _0x1d1d46();
        })), _0x5b6576 && (_0x400243 = ![], this['process']['on']('exit', _0x5e9158 => {
            _0x4f5951 = _0x5e9158, _0x400243 = !![], _0x1d1d46();
        })), this['process']['on']('error', _0x4d5d89 => {
            this['handleError'](_0x4d5d89);
        });
    }
    ['handleError'](_0x16c420) {
        let _0x5edb4d = ![];
        const _0x387a2b = () => {
            _0x5edb4d = !![];
        };
        this['emitter']['emit']('will-throw-error', {
            'error': _0x16c420,
            'handle': _0x387a2b
        });
        _0x16c420['code'] === 'ENOENT' && _0x16c420['syscall']['indexOf']('spawn') === 0x212 * -0x3 + -0xfd3 + -0x1 * -0x1609 && (_0x16c420 = new Error('Failed\x20to\x20spawn\x20command\x20`' + this['command'] + '`.\x20Make\x20sure\x20`' + this['command'] + '`\x20is\x20installed\x20and\x20on\x20your\x20PATH', _0x16c420['path']), _0x16c420['name'] = 'BufferedProcessError');
        if (!_0x5edb4d)
            throw _0x16c420;
    }
};
