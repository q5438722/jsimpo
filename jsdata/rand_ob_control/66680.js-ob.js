const fs = require('fs'), path = require('path'), color = require('ansicolors'), {promisify} = require('util'), glob = promisify(require('glob')), readFile = promisify(fs['readFile']), BaseCommand = require('./base-command.js');
class HelpSearch extends BaseCommand {
    static get ['description']() {
        const _0x3ac2bd = { 'wLDaw': 'Search\x20npm\x20help\x20documentation' };
        return _0x3ac2bd['wLDaw'];
    }
    static get ['name']() {
        const _0x3846e4 = { 'qUIfH': 'help-search' };
        return _0x3846e4['qUIfH'];
    }
    static get ['usage']() {
        const _0x1f98c2 = { 'VEHGn': '<text>' };
        return [_0x1f98c2['VEHGn']];
    }
    static get ['params']() {
        const _0x2fcca2 = { 'UZkYU': 'long' };
        return [_0x2fcca2['UZkYU']];
    }
    ['exec'](_0x136c67, _0x1c9ae9) {
        this['helpSearch'](_0x136c67)['then'](() => _0x1c9ae9())['catch'](_0x1c9ae9);
    }
    async ['helpSearch'](_0x268058) {
        const _0x3b587c = {
            'XXLLM': 'docs/content',
            'yEhyf': function (_0x57c952, _0x1c0e9c) {
                return _0x57c952(_0x1c0e9c);
            }
        };
        if (!_0x268058['length'])
            return this['npm']['output'](this['usage']);
        const _0x4c7dcd = path['resolve'](__dirname, '..', _0x3b587c['XXLLM']), _0x4352b5 = await _0x3b587c['yEhyf'](glob, _0x4c7dcd + '/*/*.md'), _0x584d1d = await this['readFiles'](_0x4352b5), _0x383adb = await this['searchFiles'](_0x268058, _0x584d1d, _0x4352b5), _0xe56f82 = this['formatResults'](_0x268058, _0x383adb);
        if (!_0xe56f82['trim']())
            this['npm']['output']('No\x20matches\x20in\x20help\x20for:\x20' + _0x268058['join']('\x20') + '\x0a');
        else
            this['npm']['output'](_0xe56f82);
    }
    async ['readFiles'](_0x4dc18f) {
        const _0x37ff0a = {
                'qJvJc': function (_0x1a264a, _0x135855, _0x573953) {
                    return _0x1a264a(_0x135855, _0x573953);
                },
                'lVRFr': 'utf8'
            }, _0x113e4e = {};
        return await Promise['all'](_0x4dc18f['map'](async _0x5449d2 => {
            _0x113e4e[_0x5449d2] = (await _0x37ff0a['qJvJc'](readFile, _0x5449d2, _0x37ff0a['lVRFr']))['replace'](/^---\n(.*\n)*?---\n/, '')['trim']();
        })), _0x113e4e;
    }
    async ['searchFiles'](_0x4ffb63, _0x5613ac, _0x3ef05c) {
        const _0x3f4519 = {
                'yAQLK': function (_0x3de07c, _0x8e8f50) {
                    return _0x3de07c === _0x8e8f50;
                },
                'HOIZw': function (_0x37cb65, _0x5474c2) {
                    return _0x37cb65 - _0x5474c2;
                },
                'uVquk': function (_0xd0fd2f, _0x5d0104) {
                    return _0xd0fd2f < _0x5d0104;
                },
                'HGttf': function (_0x8d6eb1, _0x2be303) {
                    return _0x8d6eb1 + _0x2be303;
                },
                'zrALL': function (_0x32aa22, _0x9a354d) {
                    return _0x32aa22 === _0x9a354d;
                },
                'BUpBC': function (_0x175527, _0x1115a3) {
                    return _0x175527 - _0x1115a3;
                },
                'iSeFg': function (_0x42ad1d, _0x4b2c37) {
                    return _0x42ad1d || _0x4b2c37;
                },
                'TjJHu': function (_0x1cf132, _0x516dc8) {
                    return _0x1cf132 > _0x516dc8;
                },
                'uxmnO': function (_0x150aca, _0x5c5fb1) {
                    return _0x150aca + _0x5c5fb1;
                },
                'RaPiD': 'npm\x20help\x20',
                'OFKby': '.md'
            }, _0xdcfb1f = [];
        for (const [_0xc1085d, _0x5009da] of Object['entries'](_0x5613ac)) {
            const _0xfdfc6b = _0x5009da['toLowerCase']();
            if (!_0x4ffb63['some'](_0xaca150 => _0xfdfc6b['includes'](_0xaca150['toLowerCase']())))
                continue;
            const _0x3fd143 = _0x5009da['split'](/\n+/);
            for (let _0x263751 = 0x0; _0x3f4519['uVquk'](_0x263751, _0x3fd143['length']); _0x263751++) {
                const _0x57e118 = _0x3fd143[_0x263751], _0x48f5ab = _0x3fd143[_0x3f4519['HGttf'](_0x263751, 0x1)];
                let _0xecadf3 = ![];
                if (_0x48f5ab) {
                    _0xecadf3 = _0x4ffb63['some'](_0x412ba4 => _0x48f5ab['toLowerCase']()['includes'](_0x412ba4['toLowerCase']()));
                    if (_0xecadf3) {
                        _0x263751 += 0x2;
                        continue;
                    }
                }
                _0xecadf3 = _0x4ffb63['some'](_0x4e4935 => _0x57e118['toLowerCase']()['includes'](_0x4e4935['toLowerCase']()));
                if (_0xecadf3) {
                    _0x263751++;
                    continue;
                }
                _0x3fd143[_0x263751] = null;
            }
            const _0x1f7d90 = _0x3fd143['reduce']((_0x5d954d, _0xfdd92c) => {
                if (!(_0x3f4519['yAQLK'](_0xfdd92c, null) && _0x3f4519['yAQLK'](_0x5d954d[_0x3f4519['HOIZw'](_0x5d954d['length'], 0x1)], null)))
                    _0x5d954d['push'](_0xfdd92c);
                return _0x5d954d;
            }, []);
            if (_0x3f4519['zrALL'](_0x1f7d90[_0x3f4519['BUpBC'](_0x1f7d90['length'], 0x1)], null))
                _0x1f7d90['pop']();
            if (_0x3f4519['zrALL'](_0x1f7d90[0x0], null))
                _0x1f7d90['shift']();
            const _0x2c86ab = {};
            let _0x204088 = 0x0;
            for (const _0x250e24 of _0x1f7d90) {
                for (const _0x31cb59 of _0x4ffb63) {
                    const _0x2c1b9b = _0x3f4519['BUpBC'](_0x3f4519['iSeFg'](_0x250e24, '')['toLowerCase']()['split'](_0x31cb59['toLowerCase']())['length'], 0x1);
                    _0x3f4519['TjJHu'](_0x2c1b9b, 0x0) && (_0x2c86ab[_0x31cb59] = _0x3f4519['uxmnO'](_0x2c86ab[_0x31cb59] || 0x0, _0x2c1b9b), _0x204088 += _0x2c1b9b);
                }
            }
            const _0x33ff24 = _0x3f4519['uxmnO'](_0x3f4519['RaPiD'], path['basename'](_0xc1085d, _0x3f4519['OFKby'])['replace'](/^npm-/, ''));
            _0xdcfb1f['push']({
                'file': _0xc1085d,
                'cmd': _0x33ff24,
                'lines': _0x1f7d90,
                'found': Object['keys'](_0x2c86ab),
                'hits': _0x2c86ab,
                'totalHits': _0x204088
            });
        }
        return _0xdcfb1f['sort']((_0x1a6c6a, _0x1d2139) => _0x1a6c6a['found']['length'] > _0x1d2139['found']['length'] ? -0x1 : _0x1a6c6a['found']['length'] < _0x1d2139['found']['length'] ? 0x1 : _0x1a6c6a['totalHits'] > _0x1d2139['totalHits'] ? -0x1 : _0x1a6c6a['totalHits'] < _0x1d2139['totalHits'] ? 0x1 : _0x1a6c6a['lines']['length'] > _0x1d2139['lines']['length'] ? -0x1 : _0x1a6c6a['lines']['length'] < _0x1d2139['lines']['length'] ? 0x1 : 0x0)['slice'](0x0, 0xa);
    }
    ['formatResults'](_0x4e99bd, _0x1c96cf) {
        const _0x517a23 = {
                'oSRZi': function (_0x118d3a, _0xf6cb6e) {
                    return _0x118d3a === _0xf6cb6e;
                },
                'ROpMK': function (_0x104668, _0x5cd7cc) {
                    return _0x104668 > _0x5cd7cc;
                },
                'dOhwR': function (_0x1381c9, _0x386269) {
                    return _0x1381c9 + _0x386269;
                },
                'zezHE': function (_0xe7566b, _0x2dc6d5) {
                    return _0xe7566b - _0x2dc6d5;
                },
                'TSuMD': function (_0x58a89a, _0x20cd9e) {
                    return _0x58a89a - _0x20cd9e;
                },
                'OsWpn': function (_0x1314e9, _0x208d48) {
                    return _0x1314e9 - _0x208d48;
                },
                'RdJCK': 'long',
                'ernVS': function (_0x1772e8, _0x2ac7be) {
                    return _0x1772e8 + _0x2ac7be;
                },
                'eVbnH': function (_0x1919be, _0x54a50b) {
                    return _0x1919be - _0x54a50b;
                },
                'IrsTP': function (_0x2f07ad, _0x5e22b2) {
                    return _0x2f07ad + _0x5e22b2;
                },
                'KKtLD': function (_0x17a01e, _0x30e376) {
                    return _0x17a01e + _0x30e376;
                },
                'LqoQq': function (_0x869b4a, _0x2c8614) {
                    return _0x869b4a + _0x2c8614;
                },
                'EVmum': function (_0x21e432, _0x37d5b1) {
                    return _0x21e432 + _0x37d5b1;
                },
                'nZELh': function (_0x5044d6, _0x3c4aa4) {
                    return _0x5044d6 + _0x3c4aa4;
                },
                'TQXKc': function (_0x34a6e4, _0x2dbb93) {
                    return _0x34a6e4 + _0x2dbb93;
                },
                'djgCs': 'Top\x20hits\x20for\x20',
                'tBXuJ': function (_0xa6c519, _0x16e451) {
                    return _0xa6c519 - _0x16e451;
                },
                'NVjQK': '(run\x20with\x20-l\x20or\x20--long\x20to\x20see\x20more\x20context)'
            }, _0x3f0d99 = _0x517a23['IrsTP'](Math['min'](process['stdout']['columns'] || Infinity, 0x50), 0x1), _0x2986cc = _0x1c96cf['map'](_0x3aa264 => {
                const _0x2e7b26 = {
                        'tmBDR': function (_0x5e0c71, _0x1dc6cb) {
                            return _0x517a23['oSRZi'](_0x5e0c71, _0x1dc6cb);
                        },
                        'iHFIl': function (_0xc9b82b, _0x4e826a) {
                            return _0x517a23['ROpMK'](_0xc9b82b, _0x4e826a);
                        },
                        'fiANi': function (_0x917cac, _0x5e6c54) {
                            return _0x517a23['dOhwR'](_0x917cac, _0x5e6c54);
                        }
                    }, _0x4f628e = [_0x3aa264['cmd']], _0xaa77e7 = Object['keys'](_0x3aa264['hits'])['map'](_0x58e397 => _0x58e397 + ':' + _0x3aa264['hits'][_0x58e397])['sort']((_0x27fed6, _0x4e31b0) => _0x27fed6 > _0x4e31b0 ? 0x1 : -0x1)['join']('\x20');
                _0x4f628e['push']('\x20'['repeat'](Math['max'](0x1, _0x517a23['zezHE'](_0x517a23['TSuMD'](_0x517a23['OsWpn'](_0x3f0d99, _0x4f628e['join']('\x20')['length']), _0xaa77e7['length']), 0x1)))), _0x4f628e['push'](_0xaa77e7);
                if (!this['npm']['config']['get'](_0x517a23['RdJCK']))
                    return _0x4f628e['join']('');
                return _0x4f628e['unshift']('\x0a\x0a'), _0x4f628e['push']('\x0a'), _0x4f628e['push'](_0x517a23['ernVS']('-'['repeat'](_0x517a23['eVbnH'](_0x3f0d99, 0x1)), '\x0a')), _0x3aa264['lines']['forEach']((_0x16ec84, _0x5043ef) => {
                    if (_0x2e7b26['tmBDR'](_0x16ec84, null) || _0x2e7b26['iHFIl'](_0x5043ef, 0x3))
                        return;
                    if (!this['npm']['color']) {
                        _0x4f628e['push'](_0x2e7b26['fiANi'](_0x16ec84, '\x0a'));
                        return;
                    }
                    const _0x7c59f2 = [];
                    for (const _0x6ed841 of _0x4e99bd) {
                        const _0x41076a = _0x16ec84['toLowerCase']()['split'](_0x6ed841['toLowerCase']());
                        let _0x4ab6fa = 0x0;
                        for (const _0x73c688 of _0x41076a) {
                            _0x7c59f2['push'](_0x16ec84['substr'](_0x4ab6fa, _0x73c688['length']));
                            const _0x57750f = _0x16ec84['substr'](_0x2e7b26['fiANi'](_0x4ab6fa, _0x73c688['length']), _0x6ed841['length']), _0x516cae = color['bgBlack'](color['red'](_0x57750f));
                            _0x7c59f2['push'](_0x516cae), _0x4ab6fa += _0x2e7b26['fiANi'](_0x73c688['length'], _0x6ed841['length']);
                        }
                    }
                    _0x4f628e['push'](_0x2e7b26['fiANi'](_0x7c59f2['join'](''), '\x0a'));
                }), _0x4f628e['join']('');
            })['join']('\x0a'), _0x57ebef = _0x1c96cf['length'] && !this['npm']['config']['get'](_0x517a23['RdJCK']) ? _0x517a23['IrsTP'](_0x517a23['IrsTP'](_0x517a23['IrsTP'](_0x517a23['KKtLD'](_0x517a23['LqoQq'](_0x517a23['EVmum'](_0x517a23['nZELh'](_0x517a23['nZELh'](_0x517a23['TQXKc'](_0x517a23['djgCs'], _0x4e99bd['map'](JSON['stringify'])['join']('\x20')), '\x0a'), '—'['repeat'](_0x517a23['tBXuJ'](_0x3f0d99, 0x1))), '\x0a'), _0x2986cc), '\x0a'), '—'['repeat'](_0x517a23['tBXuJ'](_0x3f0d99, 0x1))), '\x0a'), _0x517a23['NVjQK']) : _0x2986cc;
        return _0x57ebef['trim']();
    }
}
module['exports'] = HelpSearch;
