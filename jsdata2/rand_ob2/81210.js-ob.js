'use strict';
var _0x457e = [
    'Command\x20Options:',
    'Import\x20each\x20merge\x20commit\x20as\x20a\x20single\x20change\x20the\x20merge\x20introduced',
    'boolean',
    'Import\x20destination\x20directory\x20for\x20the\x20external\x20git\x20repository',
    'string',
    'Preserve\x20original\x20committer\x20in\x20addition\x20to\x20original\x20author',
    'Skip\x20all\x20confirmation\x20prompts',
    '99068LWednY',
    '48878kcztHU',
    '269289EcRqcZ',
    '255WreYbz',
    '373VUbGqq',
    '2UmBudS',
    '98321gvLloG',
    '2nnCoIz',
    '100085zgQgqO',
    '517080YDyiXt',
    'command',
    'import\x20<dir>',
    'describe',
    'Import\x20a\x20package\x20into\x20the\x20monorepo\x20with\x20commit\x20history',
    'builder',
    'positional',
    'dir',
    'options'
];
function _0xc3eb(_0x534ca4, _0x396b2b) {
    return _0xc3eb = function (_0x457e32, _0xc3eb26) {
        _0x457e32 = _0x457e32 - 0xba;
        var _0x18c550 = _0x457e[_0x457e32];
        return _0x18c550;
    }, _0xc3eb(_0x534ca4, _0x396b2b);
}
var _0x243e83 = _0xc3eb;
(function (_0x52d627, _0x209a68) {
    var _0x44f204 = _0xc3eb;
    while (!![]) {
        try {
            var _0x5e3f43 = parseInt(_0x44f204(0xba)) + -parseInt(_0x44f204(0xbb)) + -parseInt(_0x44f204(0xbc)) + parseInt(_0x44f204(0xbd)) * -parseInt(_0x44f204(0xbe)) + -parseInt(_0x44f204(0xbf)) * -parseInt(_0x44f204(0xc0)) + parseInt(_0x44f204(0xc1)) * -parseInt(_0x44f204(0xc2)) + parseInt(_0x44f204(0xc3));
            if (_0x5e3f43 === _0x209a68)
                break;
            else
                _0x52d627['push'](_0x52d627['shift']());
        } catch (_0x109229) {
            _0x52d627['push'](_0x52d627['shift']());
        }
    }
}(_0x457e, 0x30aaa));
exports[_0x243e83(0xc4)] = _0x243e83(0xc5), exports[_0x243e83(0xc6)] = _0x243e83(0xc7), exports[_0x243e83(0xc8)] = _0x1e8b8c => _0x1e8b8c[_0x243e83(0xc9)](_0x243e83(0xca), { 'describe': 'The\x20path\x20to\x20an\x20external\x20git\x20repository\x20that\x20contains\x20an\x20npm\x20package' })[_0x243e83(0xcb)]({
    'flatten': {
        'group': _0x243e83(0xcc),
        'describe': _0x243e83(0xcd),
        'type': _0x243e83(0xce)
    },
    'dest': {
        'group': 'Command\x20Options:',
        'describe': _0x243e83(0xcf),
        'type': _0x243e83(0xd0)
    },
    'preserve-commit': {
        'group': _0x243e83(0xcc),
        'describe': _0x243e83(0xd1),
        'type': _0x243e83(0xce)
    },
    'y': {
        'group': 'Command\x20Options:',
        'describe': _0x243e83(0xd2),
        'alias': 'yes',
        'type': 'boolean'
    }
}), exports['handler'] = function handler(_0x358668) {
    return require('.')(_0x358668);
};
