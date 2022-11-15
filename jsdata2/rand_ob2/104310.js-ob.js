'use strict';
const _0x337d = [
    'alias',
    'AliasSchema',
    'create',
    'name',
    'StringSchema',
    'choice',
    'choices',
    'map',
    'object',
    'redirect',
    'BooleanSchema',
    'flags',
    'flatMap',
    'description',
    'oppositeDescription',
    'filter',
    'Unexpected\x20type\x20',
    'type',
    'exception',
    'validate',
    'option',
    'deprecated',
    'array',
    'exports',
    '180247LxCnTe',
    '2nJepyW',
    '1azNYHQ',
    '527633oPtFTf',
    '50677UWJNcb',
    '7fDozyb',
    '513849GjhLbm',
    '954397yOJQBf',
    '33275DpjBsN',
    '13VwHqCj',
    '1905774AzgZtV',
    'vnopts',
    'leven',
    'chalk',
    '../utils/get-last.js',
    'length',
    'apiDescriptor',
    'value',
    '--no-',
    'key',
    '\x20without\x20an\x20argument',
    'ChoiceSchema',
    '_flags',
    'sort',
    'preprocess',
    'string',
    'includes',
    'find',
    'logger',
    'warn',
    'Unknown\x20flag\x20',
    'yellow',
    'descriptor',
    'did\x20you\x20mean\x20',
    'blue',
    'expected',
    'a\x20flag',
    'schemas',
    'levenUnknownHandler',
    'isArray',
    'Normalizer',
    '_hasDeprecationWarned',
    'normalize',
    'push',
    'AnySchema'
];
const _0x57e011 = _0x4358;
(function (_0x4e293c, _0x3b329e) {
    const _0x2bfd17 = _0x4358;
    while (!![]) {
        try {
            const _0x2691a7 = parseInt(_0x2bfd17(0x1c4)) * parseInt(_0x2bfd17(0x1c5)) + -parseInt(_0x2bfd17(0x1c6)) * parseInt(_0x2bfd17(0x1c7)) + parseInt(_0x2bfd17(0x1c8)) * -parseInt(_0x2bfd17(0x1c9)) + parseInt(_0x2bfd17(0x1ca)) + -parseInt(_0x2bfd17(0x1cb)) + parseInt(_0x2bfd17(0x1cc)) * -parseInt(_0x2bfd17(0x1cd)) + parseInt(_0x2bfd17(0x1ce));
            if (_0x2691a7 === _0x3b329e)
                break;
            else
                _0x4e293c['push'](_0x4e293c['shift']());
        } catch (_0x47affa) {
            _0x4e293c['push'](_0x4e293c['shift']());
        }
    }
}(_0x337d, 0x7cb35));
const vnopts = require(_0x57e011(0x1cf)), leven = require(_0x57e011(0x1d0)), chalk = require(_0x57e011(0x1d1)), getLast = require(_0x57e011(0x1d2)), cliDescriptor = {
        'key': _0x59f8c1 => _0x59f8c1[_0x57e011(0x1d3)] === 0x1 ? '-' + _0x59f8c1 : '--' + _0x59f8c1,
        'value': _0x101c00 => vnopts[_0x57e011(0x1d4)][_0x57e011(0x1d5)](_0x101c00),
        'pair': ({
            key: _0x388543,
            value: _0x2341bc
        }) => _0x2341bc === ![] ? _0x57e011(0x1d6) + _0x388543 : _0x2341bc === !![] ? cliDescriptor['key'](_0x388543) : _0x2341bc === '' ? cliDescriptor[_0x57e011(0x1d7)](_0x388543) + _0x57e011(0x1d8) : cliDescriptor[_0x57e011(0x1d7)](_0x388543) + '=' + _0x2341bc
    };
function _0x4358(_0x570335, _0x51476d) {
    return _0x4358 = function (_0x337dc2, _0x4358f5) {
        _0x337dc2 = _0x337dc2 - 0x1c4;
        let _0x2b6e94 = _0x337d[_0x337dc2];
        return _0x2b6e94;
    }, _0x4358(_0x570335, _0x51476d);
}
class FlagSchema extends vnopts[_0x57e011(0x1d9)] {
    constructor({
        name: _0x4555b7,
        flags: _0x1a15d4
    }) {
        const _0x4d8cc4 = _0x57e011;
        super({
            'name': _0x4555b7,
            'choices': _0x1a15d4
        }), this[_0x4d8cc4(0x1da)] = [..._0x1a15d4][_0x4d8cc4(0x1db)]();
    }
    [_0x57e011(0x1dc)](_0x5d43ea, _0x13dd92) {
        const _0x5db544 = _0x57e011;
        if (typeof _0x5d43ea === _0x5db544(0x1dd) && _0x5d43ea[_0x5db544(0x1d3)] > 0x0 && !this[_0x5db544(0x1da)][_0x5db544(0x1de)](_0x5d43ea)) {
            const _0x2f3baf = this[_0x5db544(0x1da)][_0x5db544(0x1df)](_0x28426d => leven(_0x28426d, _0x5d43ea) < 0x3);
            if (_0x2f3baf)
                return _0x13dd92[_0x5db544(0x1e0)][_0x5db544(0x1e1)]([
                    _0x5db544(0x1e2) + chalk[_0x5db544(0x1e3)](_0x13dd92[_0x5db544(0x1e4)]['value'](_0x5d43ea)) + ',',
                    _0x5db544(0x1e5) + chalk[_0x5db544(0x1e6)](_0x13dd92[_0x5db544(0x1e4)][_0x5db544(0x1d5)](_0x2f3baf)) + '?'
                ]['join']('\x20')), _0x2f3baf;
        }
        return _0x5d43ea;
    }
    [_0x57e011(0x1e7)]() {
        const _0x1cc1cc = _0x57e011;
        return _0x1cc1cc(0x1e8);
    }
}
let hasDeprecationWarned;
function normalizeOptions(_0x44525f, _0x2dda80, {
    logger: _0x5a9e66,
    isCLI: isCLI = ![],
    passThrough: passThrough = ![]
} = {}) {
    const _0x1a0da5 = _0x57e011, _0x27ab22 = !passThrough ? (_0x469bf0, _0x1c3ec6, _0x2a5cbc) => {
            const _0x3fb52e = _0x4358, {
                    _: _0x26bc41,
                    ..._0x426586
                } = _0x2a5cbc[_0x3fb52e(0x1e9)];
            return vnopts[_0x3fb52e(0x1ea)](_0x469bf0, _0x1c3ec6, {
                ..._0x2a5cbc,
                'schemas': _0x426586
            });
        } : Array[_0x1a0da5(0x1eb)](passThrough) ? (_0x4ec156, _0x50f977) => !passThrough['includes'](_0x4ec156) ? undefined : { [_0x4ec156]: _0x50f977 } : (_0x581daf, _0x467848) => ({ [_0x581daf]: _0x467848 }), _0x2e54fc = isCLI ? cliDescriptor : vnopts[_0x1a0da5(0x1d4)], _0x1635a0 = optionInfosToSchemas(_0x2dda80, { 'isCLI': isCLI }), _0x52ce4 = new vnopts[(_0x1a0da5(0x1ec))](_0x1635a0, {
            'logger': _0x5a9e66,
            'unknown': _0x27ab22,
            'descriptor': _0x2e54fc
        }), _0x2fc1b2 = _0x5a9e66 !== ![];
    _0x2fc1b2 && hasDeprecationWarned && (_0x52ce4[_0x1a0da5(0x1ed)] = hasDeprecationWarned);
    const _0x5e8afc = _0x52ce4[_0x1a0da5(0x1ee)](_0x44525f);
    return _0x2fc1b2 && (hasDeprecationWarned = _0x52ce4['_hasDeprecationWarned']), _0x5e8afc;
}
function optionInfosToSchemas(_0x2bc4f9, {isCLI: _0x5af9b6}) {
    const _0x100651 = _0x57e011, _0x11f6c4 = [];
    _0x5af9b6 && _0x11f6c4[_0x100651(0x1ef)](vnopts[_0x100651(0x1f0)]['create']({ 'name': '_' }));
    for (const _0x4a1f7f of _0x2bc4f9) {
        _0x11f6c4[_0x100651(0x1ef)](optionInfoToSchema(_0x4a1f7f, {
            'isCLI': _0x5af9b6,
            'optionInfos': _0x2bc4f9
        })), _0x4a1f7f[_0x100651(0x1f1)] && _0x5af9b6 && _0x11f6c4[_0x100651(0x1ef)](vnopts[_0x100651(0x1f2)][_0x100651(0x1f3)]({
            'name': _0x4a1f7f[_0x100651(0x1f1)],
            'sourceName': _0x4a1f7f[_0x100651(0x1f4)]
        }));
    }
    return _0x11f6c4;
}
function optionInfoToSchema(_0x331a36, {
    isCLI: _0x49d3ad,
    optionInfos: _0x5bbf31
}) {
    const _0x4175df = _0x57e011;
    let _0x25ad7f;
    const _0x43046f = { 'name': _0x331a36[_0x4175df(0x1f4)] }, _0x27e6dc = {};
    switch (_0x331a36['type']) {
    case 'int':
        _0x25ad7f = vnopts['IntegerSchema'];
        _0x49d3ad && (_0x43046f[_0x4175df(0x1dc)] = _0x2f00a3 => Number(_0x2f00a3));
        break;
    case _0x4175df(0x1dd):
        _0x25ad7f = vnopts[_0x4175df(0x1f5)];
        break;
    case _0x4175df(0x1f6):
        _0x25ad7f = vnopts[_0x4175df(0x1d9)], _0x43046f[_0x4175df(0x1f7)] = _0x331a36[_0x4175df(0x1f7)][_0x4175df(0x1f8)](_0x52f73a => typeof _0x52f73a === _0x4175df(0x1f9) && _0x52f73a['redirect'] ? {
            ..._0x52f73a,
            'redirect': {
                'to': {
                    'key': _0x331a36['name'],
                    'value': _0x52f73a[_0x4175df(0x1fa)]
                }
            }
        } : _0x52f73a);
        break;
    case 'boolean':
        _0x25ad7f = vnopts[_0x4175df(0x1fb)];
        break;
    case 'flag':
        _0x25ad7f = FlagSchema, _0x43046f[_0x4175df(0x1fc)] = _0x5bbf31[_0x4175df(0x1fd)](_0x34bd32 => [
            _0x34bd32[_0x4175df(0x1f1)],
            _0x34bd32[_0x4175df(0x1fe)] && _0x34bd32[_0x4175df(0x1f4)],
            _0x34bd32[_0x4175df(0x1ff)] && 'no-' + _0x34bd32[_0x4175df(0x1f4)]
        ][_0x4175df(0x200)](Boolean));
        break;
    case 'path':
        _0x25ad7f = vnopts[_0x4175df(0x1f5)];
        break;
    default:
        throw new Error(_0x4175df(0x201) + _0x331a36[_0x4175df(0x202)]);
    }
    _0x331a36[_0x4175df(0x203)] ? _0x43046f[_0x4175df(0x204)] = (_0x53cc70, _0x51fe53, _0x1df0d3) => _0x331a36[_0x4175df(0x203)](_0x53cc70) || _0x51fe53[_0x4175df(0x204)](_0x53cc70, _0x1df0d3) : _0x43046f[_0x4175df(0x204)] = (_0x554ac7, _0x32938e, _0xf55656) => _0x554ac7 === undefined || _0x32938e[_0x4175df(0x204)](_0x554ac7, _0xf55656);
    _0x331a36['redirect'] && (_0x27e6dc[_0x4175df(0x1fa)] = _0x193d63 => !_0x193d63 ? undefined : {
        'to': {
            'key': _0x331a36[_0x4175df(0x1fa)][_0x4175df(0x205)],
            'value': _0x331a36[_0x4175df(0x1fa)][_0x4175df(0x1d5)]
        }
    });
    _0x331a36[_0x4175df(0x206)] && (_0x27e6dc['deprecated'] = !![]);
    if (_0x49d3ad && !_0x331a36[_0x4175df(0x207)]) {
        const _0x52e426 = _0x43046f[_0x4175df(0x1dc)] || (_0x54f036 => _0x54f036);
        _0x43046f[_0x4175df(0x1dc)] = (_0x189592, _0x20a795, _0x246121) => _0x20a795['preprocess'](_0x52e426(Array['isArray'](_0x189592) ? getLast(_0x189592) : _0x189592), _0x246121);
    }
    return _0x331a36[_0x4175df(0x207)] ? vnopts['ArraySchema'][_0x4175df(0x1f3)]({
        ..._0x49d3ad ? { 'preprocess': _0x2e4946 => Array[_0x4175df(0x1eb)](_0x2e4946) ? _0x2e4946 : [_0x2e4946] } : {},
        ..._0x27e6dc,
        'valueSchema': _0x25ad7f[_0x4175df(0x1f3)](_0x43046f)
    }) : _0x25ad7f[_0x4175df(0x1f3)]({
        ..._0x43046f,
        ..._0x27e6dc
    });
}
function normalizeApiOptions(_0x38ed94, _0x41c0e4, _0x31f552) {
    return normalizeOptions(_0x38ed94, _0x41c0e4, _0x31f552);
}
function normalizeCliOptions(_0x21297c, _0x509a2a, _0x334c0b) {
    return normalizeOptions(_0x21297c, _0x509a2a, {
        'isCLI': !![],
        ..._0x334c0b
    });
}
module[_0x57e011(0x208)] = {
    'normalizeApiOptions': normalizeApiOptions,
    'normalizeCliOptions': normalizeCliOptions
};
