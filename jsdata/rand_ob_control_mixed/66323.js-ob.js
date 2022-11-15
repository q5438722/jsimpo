'use strict';
const URL = require('url')['URL'], Arborist = require('@npmcli/arborist');
function normalizeFunding(_0x43a51b) {
    const _0x2decc5 = _0x5c960b => typeof _0x5c960b === 'string' ? { 'url': _0x5c960b } : _0x5c960b, _0x45ace0 = []['concat'](_0x43a51b || [])['map'](_0x2decc5);
    return Array['isArray'](_0x43a51b) ? _0x45ace0 : _0x45ace0[0x0];
}
function isValidFunding(_0x40e7ea) {
    const _0x155ede = {
            'qjhKx': '3|0|4|1|2',
            'veAfx': function (_0xc57089, _0xaa5b39) {
                return _0xc57089 !== _0xaa5b39;
            },
            'Lsala': 'https:',
            'ppYlN': function (_0x2e646c, _0x3ed7d3) {
                return _0x2e646c !== _0x3ed7d3;
            },
            'qFIjh': 'http:',
            'ARYKx': function (_0x33def0, _0x5e0f26) {
                return _0x33def0(_0x5e0f26);
            }
        }, _0x5e24f9 = _0x155ede['qjhKx']['split']('|');
    let _0x28975b = 0x0;
    while (!![]) {
        switch (_0x5e24f9[_0x28975b++]) {
        case '0':
            if (Array['isArray'](_0x40e7ea))
                return _0x40e7ea['every'](_0x46cb25 => !Array['isArray'](_0x46cb25) && isValidFunding(_0x46cb25));
            continue;
        case '1':
            if (_0x155ede['veAfx'](_0x3537ab['protocol'], _0x155ede['Lsala']) && _0x155ede['ppYlN'](_0x3537ab['protocol'], _0x155ede['qFIjh']))
                return ![];
            continue;
        case '2':
            return _0x155ede['ARYKx'](Boolean, _0x3537ab['host']);
        case '3':
            if (!_0x40e7ea)
                return ![];
            continue;
        case '4':
            try {
                var _0x3537ab = new URL(_0x40e7ea['url'] || _0x40e7ea);
            } catch (_0x28b541) {
                return ![];
            }
            continue;
        }
        break;
    }
}
const empty = () => Object['create'](null);
function readTree(_0x532e4a, _0xc356ca) {
    const _0x4ad44b = {
        'JTFxx': function (_0x12b712, _0x1d484b) {
            return _0x12b712 + _0x1d484b;
        },
        'mLYix': function (_0x4825b4, _0xfe8c37) {
            return _0x4825b4(_0xfe8c37);
        },
        'CZkKZ': function (_0x52d2fc) {
            return _0x52d2fc();
        },
        'wGRDS': function (_0x4b95c2, _0x4a067a) {
            return _0x4b95c2(_0x4a067a);
        },
        'KDaEC': function (_0x35ad01) {
            return _0x35ad01();
        },
        'HlsDE': function (_0x59d2a9, _0xd1cf9d) {
            return _0x59d2a9 > _0xd1cf9d;
        },
        'syiwm': function (_0x1a1c4e) {
            return _0x1a1c4e();
        },
        'ShqQt': function (_0x1b2592, _0x958287, _0x186d89) {
            return _0x1b2592(_0x958287, _0x186d89);
        },
        'VrJgA': function (_0x3a0d6c) {
            return _0x3a0d6c();
        },
        'HeGYZ': function (_0x2c264e, _0x42fb4b, _0x500ea) {
            return _0x2c264e(_0x42fb4b, _0x500ea);
        },
        'RteKN': function (_0x20db67, _0x3a8409) {
            return _0x20db67 === _0x3a8409;
        },
        'rQUZx': function (_0x4dbb5e, _0x89b0ef) {
            return _0x4dbb5e > _0x89b0ef;
        },
        'lNlHn': function (_0x56eb27, _0x5127dc) {
            return _0x56eb27(_0x5127dc);
        },
        'EMfIG': function (_0x33ec51, _0x517fc5) {
            return _0x33ec51(_0x517fc5);
        },
        'Xdgiw': function (_0x822f5a, _0x188d80) {
            return _0x822f5a(_0x188d80);
        },
        'OspRL': function (_0x5b381e) {
            return _0x5b381e();
        },
        'sIPZW': function (_0x23d781, _0x492f24) {
            return _0x23d781 || _0x492f24;
        },
        'uxgta': 'trailingDependencies',
        'xcTiB': function (_0x9e8fb7, _0x49b276) {
            return _0x9e8fb7(_0x49b276);
        }
    };
    let _0x59ec1a = 0x0;
    const _0x4ee9af = new Set(), {countOnly: _0x2937dc} = _0x4ad44b['sIPZW'](_0xc356ca, {}), _0x510fe8 = _0x4ad44b['Xdgiw'](Symbol, _0x4ad44b['uxgta']);
    let _0x15236b;
    if (_0xc356ca && _0xc356ca['workspaces'] && _0xc356ca['workspaces']['length']) {
        const _0x45d284 = new Arborist(_0xc356ca);
        _0x15236b = _0x45d284['workspaceDependencySet'](_0x532e4a, _0xc356ca['workspaces']);
    }
    function _0x4cd20f(_0x2c3a3b, _0x52bd33) {
        const _0x49e4ef = _0x4ad44b['JTFxx'](_0x4ad44b['mLYix'](String, _0x2c3a3b), _0x4ad44b['mLYix'](String, _0x52bd33));
        if (_0x4ee9af['has'](_0x49e4ef))
            return !![];
        _0x4ee9af['add'](_0x49e4ef);
    }
    function _0x4e1b6f(_0x238ae5) {
        const _0x4d4a2e = _0x238ae5[_0x510fe8];
        if (_0x4d4a2e)
            return Object['assign'](_0x4ad44b['CZkKZ'](empty), _0x238ae5, _0x4d4a2e);
        return _0x238ae5;
    }
    function _0x4874ed(_0xbe20e) {
        return _0xbe20e && (Object['keys'](_0xbe20e)['length'] || _0xbe20e[_0x510fe8]);
    }
    function _0x1df22d(_0x5bed0e, _0x51f1a6) {
        _0x51f1a6 && _0x4ad44b['wGRDS'](isValidFunding, _0x51f1a6) && (_0x5bed0e['funding'] = _0x4ad44b['wGRDS'](normalizeFunding, _0x51f1a6), _0x59ec1a++);
    }
    function _0x4a66c5(_0xe33daf) {
        const _0xb314a9 = _0xe33daf && _0xe33daf['edgesOut'] && _0xe33daf['edgesOut']['values']();
        if (!_0xb314a9)
            return _0x4ad44b['VrJgA'](empty);
        const _0x18159b = Array['from'](_0xb314a9)['map'](_0x4b7503 => {
            if (!_0x4b7503 || !_0x4b7503['to'])
                return _0x4ad44b['CZkKZ'](empty);
            const _0x5a7dcb = _0x4b7503['to']['target'] || _0x4b7503['to'];
            if (!_0x5a7dcb['package'])
                return _0x4ad44b['KDaEC'](empty);
            if (_0x15236b && _0x4ad44b['HlsDE'](_0x15236b['size'], 0x0) && !_0x15236b['has'](_0x5a7dcb))
                return _0x4ad44b['syiwm'](empty);
            const {
                name: _0xb827b2,
                funding: _0x51091a,
                version: _0x20d7df
            } = _0x5a7dcb['package'];
            if (_0x4ad44b['ShqQt'](_0x4cd20f, _0xb827b2, _0x20d7df))
                return _0x4ad44b['VrJgA'](empty);
            const _0x2b78da = {};
            if (_0x20d7df)
                _0x2b78da['version'] = _0x20d7df;
            return _0x4ad44b['HeGYZ'](_0x1df22d, _0x2b78da, _0x51091a), {
                'node': _0x5a7dcb,
                'fundingItem': _0x2b78da
            };
        });
        return _0x18159b['reduce']((_0x629e6c, {
            node: _0x2cacfe,
            fundingItem: _0x42315b
        }, _0x313707) => {
            if (!_0x42315b || _0x4ad44b['RteKN'](_0x42315b['length'], 0x0) || !_0x2cacfe)
                return _0x629e6c;
            const _0x4bea6d = _0x2cacfe['edgesOut'] && _0x4ad44b['rQUZx'](_0x2cacfe['edgesOut']['size'], 0x0) && _0x4ad44b['lNlHn'](_0x4a66c5, _0x2cacfe);
            if (_0x2937dc)
                return null;
            _0x4ad44b['EMfIG'](_0x4874ed, _0x4bea6d) && (_0x42315b['dependencies'] = _0x4ad44b['Xdgiw'](_0x4e1b6f, _0x4bea6d));
            if (_0x4ad44b['Xdgiw'](isValidFunding, _0x42315b['funding']))
                _0x629e6c[_0x2cacfe['package']['name']] = _0x42315b;
            else
                _0x4ad44b['Xdgiw'](_0x4874ed, _0x42315b['dependencies']) && (_0x629e6c[_0x510fe8] = Object['assign'](_0x4ad44b['VrJgA'](empty), _0x629e6c[_0x510fe8], _0x42315b['dependencies']));
            return _0x629e6c;
        }, _0x2937dc ? null : _0x4ad44b['OspRL'](empty));
    }
    const _0x1a43b4 = _0x4ad44b['xcTiB'](_0x4a66c5, _0x532e4a), _0x2a8a3e = { 'length': _0x59ec1a };
    if (!_0x2937dc) {
        const _0xc1c14f = _0x532e4a && _0x532e4a['package'] && _0x532e4a['package']['name'] || _0x532e4a && _0x532e4a['name'];
        _0x2a8a3e['name'] = _0xc1c14f || _0x532e4a && _0x532e4a['path'];
        if (_0x532e4a && _0x532e4a['package'] && _0x532e4a['package']['version'])
            _0x2a8a3e['version'] = _0x532e4a['package']['version'];
        if (_0x532e4a && _0x532e4a['package'] && _0x532e4a['package']['funding'])
            _0x2a8a3e['funding'] = _0x4ad44b['xcTiB'](normalizeFunding, _0x532e4a['package']['funding']);
        _0x2a8a3e['dependencies'] = _0x4ad44b['xcTiB'](_0x4e1b6f, _0x1a43b4);
    }
    return _0x2a8a3e;
}
async function read(_0x2430f7) {
    const _0x20700e = {
            'HmEap': function (_0x356a88, _0x55d51c, _0x900774) {
                return _0x356a88(_0x55d51c, _0x900774);
            }
        }, _0x319cf2 = new Arborist(_0x2430f7), _0x9c8ff6 = await _0x319cf2['loadActual'](_0x2430f7);
    return _0x20700e['HmEap'](readTree, _0x9c8ff6, _0x2430f7);
}
module['exports'] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};
