var EventEmitter = require('events')['EventEmitter'], spawn = require('child_process')['spawn'], readlink = require('graceful-readlink')['readlinkSync'], path = require('path'), dirname = path['dirname'], basename = path['basename'], fs = require('fs');
exports = module['exports'] = new Command(), exports['Command'] = Command, exports['Option'] = Option;
function Option(_0x34dd3f, _0x3c4869) {
    this['flags'] = _0x34dd3f, this['required'] = ~_0x34dd3f['indexOf']('<'), this['optional'] = ~_0x34dd3f['indexOf']('['), this['bool'] = !~_0x34dd3f['indexOf']('-no-'), _0x34dd3f = _0x34dd3f['split'](/[ ,|]+/);
    if (_0x34dd3f['length'] > -0x1 * 0x2221 + -0x1 * -0xc29 + 0x271 * 0x9 && !/^[[<]/['test'](_0x34dd3f[-0x2ba + -0x1 * -0x1327 + -0x41b * 0x4]))
        this['short'] = _0x34dd3f['shift']();
    this['long'] = _0x34dd3f['shift'](), this['description'] = _0x3c4869 || '';
}
Option['prototype']['name'] = function () {
    return this['long']['replace']('--', '')['replace']('no-', '');
}, Option['prototype']['is'] = function (_0x445507) {
    return _0x445507 == this['short'] || _0x445507 == this['long'];
};
function Command(_0x1ce43f) {
    this['commands'] = [], this['options'] = [], this['_execs'] = {}, this['_allowUnknownOption'] = ![], this['_args'] = [], this['_name'] = _0x1ce43f || '';
}
Command['prototype']['__proto__'] = EventEmitter['prototype'], Command['prototype']['command'] = function (_0x2de9ec, _0x4093a0, _0x114744) {
    _0x114744 = _0x114744 || {};
    var _0x3a0a42 = _0x2de9ec['split'](/ +/), _0x9a8a3b = new Command(_0x3a0a42['shift']());
    if (_0x4093a0) {
        _0x9a8a3b['description'](_0x4093a0), this['executables'] = !![], this['_execs'][_0x9a8a3b['_name']] = !![];
        if (_0x114744['isDefault'])
            this['defaultExecutable'] = _0x9a8a3b['_name'];
    }
    _0x9a8a3b['_noHelp'] = !!_0x114744['noHelp'], this['commands']['push'](_0x9a8a3b), _0x9a8a3b['parseExpectedArgs'](_0x3a0a42), _0x9a8a3b['parent'] = this;
    if (_0x4093a0)
        return this;
    return _0x9a8a3b;
}, Command['prototype']['arguments'] = function (_0x4d834) {
    return this['parseExpectedArgs'](_0x4d834['split'](/ +/));
}, Command['prototype']['addImplicitHelpCommand'] = function () {
    this['command']('help\x20[cmd]', 'display\x20help\x20for\x20[cmd]');
}, Command['prototype']['parseExpectedArgs'] = function (_0x3e9397) {
    if (!_0x3e9397['length'])
        return;
    var _0x4e53d9 = this;
    return _0x3e9397['forEach'](function (_0x241a8b) {
        var _0x5abed3 = {
            'required': ![],
            'name': '',
            'variadic': ![]
        };
        switch (_0x241a8b[0x2 * 0xf3a + 0xc6b + -0x19 * 0x1b7]) {
        case '<':
            _0x5abed3['required'] = !![], _0x5abed3['name'] = _0x241a8b['slice'](0x20a8 + -0x51 * 0x1d + -0x177a, -(-0x1 * -0x16a9 + -0x4 * -0x476 + -0x2880));
            break;
        case '[':
            _0x5abed3['name'] = _0x241a8b['slice'](0x5df * 0x1 + 0x1145 + -0x1723, -(0x8d5 + -0xfc + -0x3ec * 0x2));
            break;
        }
        _0x5abed3['name']['length'] > -0x1efc + -0xc8e * 0x2 + 0x1 * 0x381b && _0x5abed3['name']['slice'](-(0x2 * -0x5 + -0x343 + 0x6a * 0x8)) === '...' && (_0x5abed3['variadic'] = !![], _0x5abed3['name'] = _0x5abed3['name']['slice'](-0x1 * -0x2527 + -0x1 * -0x1495 + -0x39bc, -(-0x1a69 + -0x726 * -0x2 + 0x20 * 0x61))), _0x5abed3['name'] && _0x4e53d9['_args']['push'](_0x5abed3);
    }), this;
}, Command['prototype']['action'] = function (_0x357b0f) {
    var _0x40578b = this, _0x8ff379 = function (_0x5e4c31, _0x43a7c4) {
            _0x5e4c31 = _0x5e4c31 || [], _0x43a7c4 = _0x43a7c4 || [];
            var _0x2e05db = _0x40578b['parseOptions'](_0x43a7c4);
            outputHelpIfNecessary(_0x40578b, _0x2e05db['unknown']);
            _0x2e05db['unknown']['length'] > -0x236c + -0x49 * 0x1 + -0x3 * -0xbe7 && _0x40578b['unknownOption'](_0x2e05db['unknown'][-0x158f + -0x193 * -0x2 + 0x1269]);
            if (_0x2e05db['args']['length'])
                _0x5e4c31 = _0x2e05db['args']['concat'](_0x5e4c31);
            _0x40578b['_args']['forEach'](function (_0x412267, _0x5df119) {
                if (_0x412267['required'] && null == _0x5e4c31[_0x5df119])
                    _0x40578b['missingArgument'](_0x412267['name']);
                else
                    _0x412267['variadic'] && (_0x5df119 !== _0x40578b['_args']['length'] - (0xf * -0x65 + -0x1faa + 0x2596) && _0x40578b['variadicArgNotLast'](_0x412267['name']), _0x5e4c31[_0x5df119] = _0x5e4c31['splice'](_0x5df119));
            }), _0x40578b['_args']['length'] ? _0x5e4c31[_0x40578b['_args']['length']] = _0x40578b : _0x5e4c31['push'](_0x40578b), _0x357b0f['apply'](_0x40578b, _0x5e4c31);
        }, _0x2a7411 = this['parent'] || this, _0x26078b = _0x2a7411 === this ? '*' : this['_name'];
    _0x2a7411['on'](_0x26078b, _0x8ff379);
    if (this['_alias'])
        _0x2a7411['on'](this['_alias'], _0x8ff379);
    return this;
}, Command['prototype']['option'] = function (_0x50b87c, _0xaea92a, _0x2b72cd, _0x44a9e6) {
    var _0x2f6fd6 = this, _0x3af2cd = new Option(_0x50b87c, _0xaea92a), _0x3b1354 = _0x3af2cd['name'](), _0x100715 = camelcase(_0x3b1354);
    if (typeof _0x2b72cd != 'function') {
        if (_0x2b72cd instanceof RegExp) {
            var _0x5c875c = _0x2b72cd;
            _0x2b72cd = function (_0x2af1b4, _0x5a48c5) {
                var _0x3d80d5 = _0x5c875c['exec'](_0x2af1b4);
                return _0x3d80d5 ? _0x3d80d5[0xf8d * -0x2 + -0x1758 + 0x12f * 0x2e] : _0x5a48c5;
            };
        } else
            _0x44a9e6 = _0x2b72cd, _0x2b72cd = null;
    }
    if (![] == _0x3af2cd['bool'] || _0x3af2cd['optional'] || _0x3af2cd['required']) {
        if (![] == _0x3af2cd['bool'])
            _0x44a9e6 = !![];
        if (undefined !== _0x44a9e6)
            _0x2f6fd6[_0x100715] = _0x44a9e6;
    }
    return this['options']['push'](_0x3af2cd), this['on'](_0x3b1354, function (_0x2567f6) {
        if (null !== _0x2567f6 && _0x2b72cd)
            _0x2567f6 = _0x2b72cd(_0x2567f6, undefined === _0x2f6fd6[_0x100715] ? _0x44a9e6 : _0x2f6fd6[_0x100715]);
        if ('boolean' == typeof _0x2f6fd6[_0x100715] || 'undefined' == typeof _0x2f6fd6[_0x100715])
            null == _0x2567f6 ? _0x2f6fd6[_0x100715] = _0x3af2cd['bool'] ? _0x44a9e6 || !![] : ![] : _0x2f6fd6[_0x100715] = _0x2567f6;
        else
            null !== _0x2567f6 && (_0x2f6fd6[_0x100715] = _0x2567f6);
    }), this;
}, Command['prototype']['allowUnknownOption'] = function (_0x49b61c) {
    return this['_allowUnknownOption'] = arguments['length'] === 0x13d5 + 0xc * 0x216 + -0x2cdd * 0x1 || _0x49b61c, this;
}, Command['prototype']['parse'] = function (_0x4fade1) {
    if (this['executables'])
        this['addImplicitHelpCommand']();
    this['rawArgs'] = _0x4fade1, this['_name'] = this['_name'] || basename(_0x4fade1[-0x1 * 0x10a5 + -0xee4 + -0xb * -0x2de], '.js');
    this['executables'] && _0x4fade1['length'] < -0x1 * 0x1c7 + -0x102b * -0x2 + -0x1e8c && !this['defaultExecutable'] && _0x4fade1['push']('--help');
    var _0x5db79b = this['parseOptions'](this['normalize'](_0x4fade1['slice'](0x1321 * -0x1 + 0xf0e + 0x13 * 0x37))), _0x25a229 = this['args'] = _0x5db79b['args'], _0x417162 = this['parseArgs'](this['args'], _0x5db79b['unknown']), _0x889ae1 = _0x417162['args'][0x250b + -0x1426 * -0x1 + -0xb * 0x533];
    if (this['_execs'][_0x889ae1] && typeof this['_execs'][_0x889ae1] != 'function')
        return this['executeSubCommand'](_0x4fade1, _0x25a229, _0x5db79b['unknown']);
    else {
        if (this['defaultExecutable'])
            return _0x25a229['unshift'](_0x889ae1 = this['defaultExecutable']), this['executeSubCommand'](_0x4fade1, _0x25a229, _0x5db79b['unknown']);
    }
    return _0x417162;
}, Command['prototype']['executeSubCommand'] = function (_0x3d4ee0, _0x1c42e9, _0xc947df) {
    _0x1c42e9 = _0x1c42e9['concat'](_0xc947df);
    if (!_0x1c42e9['length'])
        this['help']();
    if ('help' == _0x1c42e9[-0x17f7 + -0x1514 + 0x2d0b] && 0x5d8 + -0x1844 + -0x1 * -0x126d == _0x1c42e9['length'])
        this['help']();
    'help' == _0x1c42e9[0x383 * -0x6 + 0x16b9 + -0x1a7] && (_0x1c42e9[-0x1bd4 + -0xf19 + 0x4c5 * 0x9] = _0x1c42e9[0x902 * 0x3 + 0x24e8 + -0x3 * 0x154f], _0x1c42e9[0xce * 0x1e + -0x1 * 0x1c38 + -0xb * -0x5f] = '--help');
    var _0x366161 = _0x3d4ee0[-0x19 * 0xb9 + -0x1939 + 0x2b4b * 0x1], _0x7e5602 = basename(_0x366161, '.js') + '-' + _0x1c42e9[-0x2161 + 0x16f9 * 0x1 + 0x9 * 0x128], _0x2f9438, _0x2e098a = readlink(_0x366161);
    _0x2e098a !== _0x366161 && _0x2e098a['charAt'](0xb9 + -0x6c0 + 0x607) !== '/' && (_0x2e098a = path['join'](dirname(_0x366161), _0x2e098a));
    _0x2f9438 = dirname(_0x2e098a);
    var _0x48d02d = path['join'](_0x2f9438, _0x7e5602), _0x59313f = ![];
    if (exists(_0x48d02d + '.js'))
        _0x7e5602 = _0x48d02d + '.js', _0x59313f = !![];
    else
        exists(_0x48d02d) && (_0x7e5602 = _0x48d02d);
    _0x1c42e9 = _0x1c42e9['slice'](-0x470 + 0x204f + -0x1bde);
    var _0x5747a2;
    process['platform'] !== 'win32' ? _0x59313f ? (_0x1c42e9['unshift'](_0x48d02d), _0x1c42e9 = (process['execArgv'] || [])['concat'](_0x1c42e9), _0x5747a2 = spawn('node', _0x1c42e9, {
        'stdio': 'inherit',
        'customFds': [
            -0xf92 + -0x1fef + 0x2f81 * 0x1,
            0x2 * -0xc87 + -0x9b3 + 0x1 * 0x22c2,
            -0x236b + -0xfb1 + -0x3 * -0x110a
        ]
    })) : _0x5747a2 = spawn(_0x7e5602, _0x1c42e9, {
        'stdio': 'inherit',
        'customFds': [
            -0x58 * -0x3a + -0x64 * -0x2 + -0x14b8,
            0x77 * -0x7 + -0x38a + -0x3 * -0x244,
            -0x238 * -0x10 + 0xad4 + 0x79 * -0x62
        ]
    }) : (_0x1c42e9['unshift'](_0x48d02d), _0x5747a2 = spawn(process['execPath'], _0x1c42e9, { 'stdio': 'inherit' })), _0x5747a2['on']('close', process['exit']['bind'](process)), _0x5747a2['on']('error', function (_0x267213) {
        if (_0x267213['code'] == 'ENOENT')
            console['error']('\x0a\x20\x20%s(1)\x20does\x20not\x20exist,\x20try\x20--help\x0a', _0x7e5602);
        else
            _0x267213['code'] == 'EACCES' && console['error']('\x0a\x20\x20%s(1)\x20not\x20executable.\x20try\x20chmod\x20or\x20run\x20with\x20root\x0a', _0x7e5602);
        process['exit'](-0x39c * -0x5 + 0x13b6 + -0x25c1 * 0x1);
    }), this['runningCommand'] = _0x5747a2;
}, Command['prototype']['normalize'] = function (_0x30ae71) {
    var _0x258660 = [], _0x7e6d37, _0x2cced3, _0x31fb81;
    for (var _0x55682c = -0xd * -0x2a9 + -0x1622 + -0xc73, _0x5ac3c1 = _0x30ae71['length']; _0x55682c < _0x5ac3c1; ++_0x55682c) {
        _0x7e6d37 = _0x30ae71[_0x55682c];
        _0x55682c > 0x7 * 0x50b + 0x80c * 0x4 + -0x1bb * 0x27 && (_0x2cced3 = this['optionFor'](_0x30ae71[_0x55682c - (0x936 + -0x1 * -0x146 + -0xa7b)]));
        if (_0x7e6d37 === '--') {
            _0x258660 = _0x258660['concat'](_0x30ae71['slice'](_0x55682c));
            break;
        } else {
            if (_0x2cced3 && _0x2cced3['required'])
                _0x258660['push'](_0x7e6d37);
            else {
                if (_0x7e6d37['length'] > 0x46 * 0x4a + -0x1d3f + 0x904 && '-' == _0x7e6d37[-0x18fa + 0x13 * 0xc7 + 0x1 * 0xa35] && '-' != _0x7e6d37[0x173 + -0x959 * -0x4 + -0x1 * 0x26d6])
                    _0x7e6d37['slice'](0x2 * -0x11a7 + 0x5 * -0x1b1 + 0x15e2 * 0x2)['split']('')['forEach'](function (_0xbc0322) {
                        _0x258660['push']('-' + _0xbc0322);
                    });
                else
                    /^--/['test'](_0x7e6d37) && ~(_0x31fb81 = _0x7e6d37['indexOf']('=')) ? _0x258660['push'](_0x7e6d37['slice'](0x517 + 0x1 * -0x1b59 + 0x1642, _0x31fb81), _0x7e6d37['slice'](_0x31fb81 + (-0xae6 + -0x92 * -0x2f + -0xfe7))) : _0x258660['push'](_0x7e6d37);
            }
        }
    }
    return _0x258660;
}, Command['prototype']['parseArgs'] = function (_0x5d6740, _0x236754) {
    var _0x3e5cf1;
    return _0x5d6740['length'] ? (_0x3e5cf1 = _0x5d6740[-0x2 * -0x8c5 + 0x2 * -0x1334 + 0x14de * 0x1], this['listeners'](_0x3e5cf1)['length'] ? this['emit'](_0x5d6740['shift'](), _0x5d6740, _0x236754) : this['emit']('*', _0x5d6740)) : (outputHelpIfNecessary(this, _0x236754), _0x236754['length'] > -0x105 * 0x1 + 0x209f + -0x1f9a && this['unknownOption'](_0x236754[0x1a * 0x5d + 0x26 * 0xa3 + -0x1 * 0x21a4])), this;
}, Command['prototype']['optionFor'] = function (_0x1f32da) {
    for (var _0x3d498c = -0x1c2b * -0x1 + -0x55d * -0x1 + 0x74 * -0x4a, _0x5ddcc1 = this['options']['length']; _0x3d498c < _0x5ddcc1; ++_0x3d498c) {
        if (this['options'][_0x3d498c]['is'](_0x1f32da))
            return this['options'][_0x3d498c];
    }
}, Command['prototype']['parseOptions'] = function (_0x31c11a) {
    var _0x482cbc = [], _0x4d529b = _0x31c11a['length'], _0x384419, _0x5c8652, _0x434ec1, _0x3ccb35 = [];
    for (var _0x31b021 = -0xd86 + -0xf5c * 0x2 + 0x2c3e; _0x31b021 < _0x4d529b; ++_0x31b021) {
        _0x434ec1 = _0x31c11a[_0x31b021];
        if ('--' == _0x434ec1) {
            _0x384419 = !![];
            continue;
        }
        if (_0x384419) {
            _0x482cbc['push'](_0x434ec1);
            continue;
        }
        _0x5c8652 = this['optionFor'](_0x434ec1);
        if (_0x5c8652) {
            if (_0x5c8652['required']) {
                _0x434ec1 = _0x31c11a[++_0x31b021];
                if (null == _0x434ec1)
                    return this['optionMissingArgument'](_0x5c8652);
                this['emit'](_0x5c8652['name'](), _0x434ec1);
            } else
                _0x5c8652['optional'] ? (_0x434ec1 = _0x31c11a[_0x31b021 + (-0x2b * 0x35 + -0x17fa + 0x20e2)], null == _0x434ec1 || '-' == _0x434ec1[-0x9 * -0x91 + -0xbc0 + 0x6a7] && '-' != _0x434ec1 ? _0x434ec1 = null : ++_0x31b021, this['emit'](_0x5c8652['name'](), _0x434ec1)) : this['emit'](_0x5c8652['name']());
            continue;
        }
        if (_0x434ec1['length'] > -0x14a9 + 0x4 * -0x65b + 0x2e16 && '-' == _0x434ec1[-0xc09 + -0x11f0 + 0x1df9]) {
            _0x3ccb35['push'](_0x434ec1);
            _0x31c11a[_0x31b021 + (-0x3c5 * 0xa + -0xc * 0x251 + -0x15d5 * -0x3)] && '-' != _0x31c11a[_0x31b021 + (0x2 * 0x2b0 + -0x4 * 0x83e + 0x1b99)][0x101 + -0x1707 + 0x1606] && _0x3ccb35['push'](_0x31c11a[++_0x31b021]);
            continue;
        }
        _0x482cbc['push'](_0x434ec1);
    }
    return {
        'args': _0x482cbc,
        'unknown': _0x3ccb35
    };
}, Command['prototype']['opts'] = function () {
    var _0x51cd7f = {}, _0x32441c = this['options']['length'];
    for (var _0x392e66 = -0x772 + 0x9 * 0x28d + 0x169 * -0xb; _0x392e66 < _0x32441c; _0x392e66++) {
        var _0x277c9a = camelcase(this['options'][_0x392e66]['name']());
        _0x51cd7f[_0x277c9a] = _0x277c9a === 'version' ? this['_version'] : this[_0x277c9a];
    }
    return _0x51cd7f;
}, Command['prototype']['missingArgument'] = function (_0x70c37) {
    console['error'](), console['error']('\x20\x20error:\x20missing\x20required\x20argument\x20`%s\x27', _0x70c37), console['error'](), process['exit'](0x1 * -0x2d7 + -0x80 * 0x39 + -0x4 * -0x7d6);
}, Command['prototype']['optionMissingArgument'] = function (_0x528199, _0x3441df) {
    console['error'](), _0x3441df ? console['error']('\x20\x20error:\x20option\x20`%s\x27\x20argument\x20missing,\x20got\x20`%s\x27', _0x528199['flags'], _0x3441df) : console['error']('\x20\x20error:\x20option\x20`%s\x27\x20argument\x20missing', _0x528199['flags']), console['error'](), process['exit'](-0xb80 + -0x29b * -0x7 + -0x6bc);
}, Command['prototype']['unknownOption'] = function (_0x4f46d6) {
    if (this['_allowUnknownOption'])
        return;
    console['error'](), console['error']('\x20\x20error:\x20unknown\x20option\x20`%s\x27', _0x4f46d6), console['error'](), process['exit'](-0x151 + 0x52 * -0x3 + 0x248);
}, Command['prototype']['variadicArgNotLast'] = function (_0xbe3ed5) {
    console['error'](), console['error']('\x20\x20error:\x20variadic\x20arguments\x20must\x20be\x20last\x20`%s\x27', _0xbe3ed5), console['error'](), process['exit'](-0x272 * 0x6 + 0x102b + -0x17e);
}, Command['prototype']['version'] = function (_0x1e8b28, _0x199158) {
    if (0x1afb * 0x1 + -0x187f + -0xc * 0x35 == arguments['length'])
        return this['_version'];
    return this['_version'] = _0x1e8b28, _0x199158 = _0x199158 || '-V,\x20--version', this['option'](_0x199158, 'output\x20the\x20version\x20number'), this['on']('version', function () {
        process['stdout']['write'](_0x1e8b28 + '\x0a'), process['exit'](-0x248e + -0x1045 + 0x1 * 0x34d3);
    }), this;
}, Command['prototype']['description'] = function (_0x1346fc) {
    if (-0x87e * -0x3 + 0x12a * 0x11 + -0x2d44 === arguments['length'])
        return this['_description'];
    return this['_description'] = _0x1346fc, this;
}, Command['prototype']['alias'] = function (_0xcc4139) {
    if (0x17e5 + 0xa9 + -0x188e == arguments['length'])
        return this['_alias'];
    return this['_alias'] = _0xcc4139, this;
}, Command['prototype']['usage'] = function (_0x269044) {
    var _0x308cd8 = this['_args']['map'](function (_0x34f422) {
            return humanReadableArgName(_0x34f422);
        }), _0x488442 = '[options]' + (this['commands']['length'] ? '\x20[command]' : '') + (this['_args']['length'] ? '\x20' + _0x308cd8['join']('\x20') : '');
    if (0xef * -0x25 + -0x2f * -0x74 + 0xd3f == arguments['length'])
        return this['_usage'] || _0x488442;
    return this['_usage'] = _0x269044, this;
}, Command['prototype']['name'] = function () {
    return this['_name'];
}, Command['prototype']['largestOptionLength'] = function () {
    return this['options']['reduce'](function (_0x3cb887, _0x4c8987) {
        return Math['max'](_0x3cb887, _0x4c8987['flags']['length']);
    }, 0x1c51 + -0x13e4 + -0x86d);
}, Command['prototype']['optionHelp'] = function () {
    var _0x2b7fed = this['largestOptionLength']();
    return [pad('-h,\x20--help', _0x2b7fed) + '\x20\x20' + 'output\x20usage\x20information']['concat'](this['options']['map'](function (_0x32fcc0) {
        return pad(_0x32fcc0['flags'], _0x2b7fed) + '\x20\x20' + _0x32fcc0['description'];
    }))['join']('\x0a');
}, Command['prototype']['commandHelp'] = function () {
    if (!this['commands']['length'])
        return '';
    var _0x54973c = this['commands']['filter'](function (_0x526ace) {
            return !_0x526ace['_noHelp'];
        })['map'](function (_0x1a9b8d) {
            var _0x4d5fbd = _0x1a9b8d['_args']['map'](function (_0x3f240e) {
                return humanReadableArgName(_0x3f240e);
            })['join']('\x20');
            return [
                _0x1a9b8d['_name'] + (_0x1a9b8d['_alias'] ? '|' + _0x1a9b8d['_alias'] : '') + (_0x1a9b8d['options']['length'] ? '\x20[options]' : '') + '\x20' + _0x4d5fbd,
                _0x1a9b8d['description']()
            ];
        }), _0x54fc06 = _0x54973c['reduce'](function (_0x2d6db6, _0x550c44) {
            return Math['max'](_0x2d6db6, _0x550c44[0x4 * -0x9e + 0x72b * 0x2 + 0x5ef * -0x2]['length']);
        }, 0xaec + -0x239c * -0x1 + -0x2e88);
    return [
        '',
        '\x20\x20Commands:',
        '',
        _0x54973c['map'](function (_0x27c8b6) {
            var _0x4d6817 = _0x27c8b6[0x1fb6 + -0x3 * -0x273 + -0x270e] ? '\x20\x20' + _0x27c8b6[-0x1b16 + 0x2 * -0xd76 + -0x4e9 * -0xb] : '';
            return pad(_0x27c8b6[-0x185a * 0x1 + -0x1ce5 + -0x13d * -0x2b], _0x54fc06) + _0x4d6817;
        })['join']('\x0a')['replace'](/^/gm, '\x20\x20\x20\x20'),
        ''
    ]['join']('\x0a');
}, Command['prototype']['helpInformation'] = function () {
    var _0x4c0a53 = [];
    this['_description'] && (_0x4c0a53 = [
        '\x20\x20' + this['_description'],
        ''
    ]);
    var _0x16c53e = this['_name'];
    this['_alias'] && (_0x16c53e = _0x16c53e + '|' + this['_alias']);
    var _0x281638 = [
            '',
            '\x20\x20Usage:\x20' + _0x16c53e + '\x20' + this['usage'](),
            ''
        ], _0x5293ca = [], _0x328713 = this['commandHelp']();
    if (_0x328713)
        _0x5293ca = [_0x328713];
    var _0x1ea11d = [
        '\x20\x20Options:',
        '',
        '' + this['optionHelp']()['replace'](/^/gm, '\x20\x20\x20\x20'),
        '',
        ''
    ];
    return _0x281638['concat'](_0x5293ca)['concat'](_0x4c0a53)['concat'](_0x1ea11d)['join']('\x0a');
}, Command['prototype']['outputHelp'] = function (_0xaf9d6d) {
    !_0xaf9d6d && (_0xaf9d6d = function (_0x523a55) {
        return _0x523a55;
    }), process['stdout']['write'](_0xaf9d6d(this['helpInformation']())), this['emit']('--help');
}, Command['prototype']['help'] = function (_0x202671) {
    this['outputHelp'](_0x202671), process['exit']();
};
function camelcase(_0x1451b8) {
    return _0x1451b8['split']('-')['reduce'](function (_0x4a4fd9, _0x468470) {
        return _0x4a4fd9 + _0x468470[0x1 * 0x24dc + 0x260a + -0x4ae6]['toUpperCase']() + _0x468470['slice'](-0xcf8 + -0x2710 + 0xb * 0x4bb);
    });
}
function pad(_0xd3f27e, _0x3494ae) {
    var _0x17cb59 = Math['max'](-0xb3c * -0x2 + -0x1d83 + 0x70b, _0x3494ae - _0xd3f27e['length']);
    return _0xd3f27e + Array(_0x17cb59 + (-0x2 * -0x1071 + -0x631 + 0x1c * -0xf4))['join']('\x20');
}
function outputHelpIfNecessary(_0x2f42c0, _0x5840a3) {
    _0x5840a3 = _0x5840a3 || [];
    for (var _0x1dda85 = 0x285 + 0x676 * 0x3 + 0x7 * -0x321; _0x1dda85 < _0x5840a3['length']; _0x1dda85++) {
        (_0x5840a3[_0x1dda85] == '--help' || _0x5840a3[_0x1dda85] == '-h') && (_0x2f42c0['outputHelp'](), process['exit'](0xb06 * 0x1 + -0x1595 + -0x11 * -0x9f));
    }
}
function humanReadableArgName(_0x333ed8) {
    var _0x4bbab6 = _0x333ed8['name'] + (_0x333ed8['variadic'] === !![] ? '...' : '');
    return _0x333ed8['required'] ? '<' + _0x4bbab6 + '>' : '[' + _0x4bbab6 + ']';
}
function exists(_0x5a99ef) {
    try {
        if (fs['statSync'](_0x5a99ef)['isFile']())
            return !![];
    } catch (_0x1a4ca9) {
        return ![];
    }
}
