const fs = require('fs'), path = require('path'), color = require('ansicolors'), {promisify} = require('util'), glob = promisify(require('glob')), readFile = promisify(fs['readFile']), BaseCommand = require('./base-command.js');
class HelpSearch extends BaseCommand {
    static get ['description']() {
        return 'Search\x20npm\x20help\x20documentation';
    }
    static get ['name']() {
        return 'help-search';
    }
    static get ['usage']() {
        return ['<text>'];
    }
    static get ['params']() {
        return ['long'];
    }
    ['exec'](_0x304d8d, _0x463987) {
        this['helpSearch'](_0x304d8d)['then'](() => _0x463987())['catch'](_0x463987);
    }
    async ['helpSearch'](_0x1fd07e) {
        if (!_0x1fd07e['length'])
            return this['npm']['output'](this['usage']);
        const _0x33c407 = path['resolve'](__dirname, '..', 'docs/content'), _0x4bf11a = await glob(_0x33c407 + '/*/*.md'), _0x150ec2 = await this['readFiles'](_0x4bf11a), _0x195cf1 = await this['searchFiles'](_0x1fd07e, _0x150ec2, _0x4bf11a), _0x19e536 = this['formatResults'](_0x1fd07e, _0x195cf1);
        if (!_0x19e536['trim']())
            this['npm']['output']('No\x20matches\x20in\x20help\x20for:\x20' + _0x1fd07e['join']('\x20') + '\x0a');
        else
            this['npm']['output'](_0x19e536);
    }
    async ['readFiles'](_0x38c35f) {
        const _0x34d577 = {};
        return await Promise['all'](_0x38c35f['map'](async _0x2b3762 => {
            _0x34d577[_0x2b3762] = (await readFile(_0x2b3762, 'utf8'))['replace'](/^---\n(.*\n)*?---\n/, '')['trim']();
        })), _0x34d577;
    }
    async ['searchFiles'](_0x5a0ff2, _0x1c7776, _0x571555) {
        const _0x189c3d = [];
        for (const [_0x53a422, _0x104aaf] of Object['entries'](_0x1c7776)) {
            const _0x1794c2 = _0x104aaf['toLowerCase']();
            if (!_0x5a0ff2['some'](_0x1bfbf9 => _0x1794c2['includes'](_0x1bfbf9['toLowerCase']())))
                continue;
            const _0xe58375 = _0x104aaf['split'](/\n+/);
            for (let _0x4f4765 = -0x1fe * 0x3 + -0x2de * -0x8 + -0x10f6 * 0x1; _0x4f4765 < _0xe58375['length']; _0x4f4765++) {
                const _0x163c36 = _0xe58375[_0x4f4765], _0x17be6d = _0xe58375[_0x4f4765 + (-0x1 * -0x1b73 + 0x1262 + -0x2dd4)];
                let _0x2646bf = ![];
                if (_0x17be6d) {
                    _0x2646bf = _0x5a0ff2['some'](_0xdc964c => _0x17be6d['toLowerCase']()['includes'](_0xdc964c['toLowerCase']()));
                    if (_0x2646bf) {
                        _0x4f4765 += 0xb * -0x1d8 + -0x6f7 * -0x2 + 0x2c * 0x25;
                        continue;
                    }
                }
                _0x2646bf = _0x5a0ff2['some'](_0x3e210d => _0x163c36['toLowerCase']()['includes'](_0x3e210d['toLowerCase']()));
                if (_0x2646bf) {
                    _0x4f4765++;
                    continue;
                }
                _0xe58375[_0x4f4765] = null;
            }
            const _0x19ce2b = _0xe58375['reduce']((_0x3d004f, _0x402a38) => {
                if (!(_0x402a38 === null && _0x3d004f[_0x3d004f['length'] - (0x13 * -0x1a5 + 0x4ad + 0x1a93 * 0x1)] === null))
                    _0x3d004f['push'](_0x402a38);
                return _0x3d004f;
            }, []);
            if (_0x19ce2b[_0x19ce2b['length'] - (-0x2027 * 0x1 + 0x19cb + -0x21f * -0x3)] === null)
                _0x19ce2b['pop']();
            if (_0x19ce2b[-0x850 + 0x1 * -0x1ecf + 0x7d3 * 0x5] === null)
                _0x19ce2b['shift']();
            const _0x2b4c14 = {};
            let _0x31d047 = 0x13f + 0x6f * 0x16 + -0x1 * 0xac9;
            for (const _0x261c22 of _0x19ce2b) {
                for (const _0x4ac16f of _0x5a0ff2) {
                    const _0x69279e = (_0x261c22 || '')['toLowerCase']()['split'](_0x4ac16f['toLowerCase']())['length'] - (-0x3 * -0x709 + 0x5a * 0x67 + 0x72a * -0x8);
                    _0x69279e > -0x8f * -0x4 + 0x4 * 0x416 + -0x1294 && (_0x2b4c14[_0x4ac16f] = (_0x2b4c14[_0x4ac16f] || -0x2565 * 0x1 + 0x24f * 0x1 + 0x6 * 0x5d9) + _0x69279e, _0x31d047 += _0x69279e);
                }
            }
            const _0x180ede = 'npm\x20help\x20' + path['basename'](_0x53a422, '.md')['replace'](/^npm-/, '');
            _0x189c3d['push']({
                'file': _0x53a422,
                'cmd': _0x180ede,
                'lines': _0x19ce2b,
                'found': Object['keys'](_0x2b4c14),
                'hits': _0x2b4c14,
                'totalHits': _0x31d047
            });
        }
        return _0x189c3d['sort']((_0x2d853a, _0x1fb194) => _0x2d853a['found']['length'] > _0x1fb194['found']['length'] ? -(0x1 * 0x1f13 + 0x93 * 0x1b + 0x2e93 * -0x1) : _0x2d853a['found']['length'] < _0x1fb194['found']['length'] ? 0x5 * 0x125 + -0x4 * -0x25 + -0x64c : _0x2d853a['totalHits'] > _0x1fb194['totalHits'] ? -(0x2182 * 0x1 + 0x4 * 0x614 + -0x39d1) : _0x2d853a['totalHits'] < _0x1fb194['totalHits'] ? -0x31e + 0x2418 + 0x17 * -0x16f : _0x2d853a['lines']['length'] > _0x1fb194['lines']['length'] ? -(-0x124a * 0x2 + 0x13b8 + -0x1 * -0x10dd) : _0x2d853a['lines']['length'] < _0x1fb194['lines']['length'] ? -0xaba + -0x1ab0 + -0xc79 * -0x3 : -0x167f + -0x993 + -0x2012 * -0x1)['slice'](-0x1ca3 * 0x1 + 0x1793 + 0x510, 0x183b + -0x36 * -0x17 + 0x1 * -0x1d0b);
    }
    ['formatResults'](_0x8d1e99, _0x919367) {
        const _0x17829b = Math['min'](process['stdout']['columns'] || Infinity, -0x1344 + 0x577 + 0xe1d * 0x1) + (-0x89b * 0x1 + 0x1671 + 0xdd5 * -0x1), _0xd1be73 = _0x919367['map'](_0x51e6e5 => {
                const _0x40a9ac = [_0x51e6e5['cmd']], _0x595438 = Object['keys'](_0x51e6e5['hits'])['map'](_0x194b4d => _0x194b4d + ':' + _0x51e6e5['hits'][_0x194b4d])['sort']((_0x46c3e6, _0x2941ee) => _0x46c3e6 > _0x2941ee ? -0x2499 + 0x71c + 0x5e6 * 0x5 : -(-0x4 * -0x355 + -0x1864 + 0xb11))['join']('\x20');
                _0x40a9ac['push']('\x20'['repeat'](Math['max'](-0x15d9 + -0x1188 + 0x2762, _0x17829b - _0x40a9ac['join']('\x20')['length'] - _0x595438['length'] - (0x1 * -0x2519 + -0x731 + -0x1d * -0x187)))), _0x40a9ac['push'](_0x595438);
                if (!this['npm']['config']['get']('long'))
                    return _0x40a9ac['join']('');
                return _0x40a9ac['unshift']('\x0a\x0a'), _0x40a9ac['push']('\x0a'), _0x40a9ac['push']('-'['repeat'](_0x17829b - (0x106b + -0x15be + 0x554)) + '\x0a'), _0x51e6e5['lines']['forEach']((_0x92fcd4, _0x1e4c77) => {
                    if (_0x92fcd4 === null || _0x1e4c77 > -0x2 * -0xff3 + -0x1bb * -0x1 + -0x1a * 0x14b)
                        return;
                    if (!this['npm']['color']) {
                        _0x40a9ac['push'](_0x92fcd4 + '\x0a');
                        return;
                    }
                    const _0x5bc6bd = [];
                    for (const _0x3477f7 of _0x8d1e99) {
                        const _0x585caf = _0x92fcd4['toLowerCase']()['split'](_0x3477f7['toLowerCase']());
                        let _0x1d6d37 = -0xe76 + -0x1de8 + -0x277 * -0x12;
                        for (const _0x325cfb of _0x585caf) {
                            _0x5bc6bd['push'](_0x92fcd4['substr'](_0x1d6d37, _0x325cfb['length']));
                            const _0x2a718f = _0x92fcd4['substr'](_0x1d6d37 + _0x325cfb['length'], _0x3477f7['length']), _0x1f8594 = color['bgBlack'](color['red'](_0x2a718f));
                            _0x5bc6bd['push'](_0x1f8594), _0x1d6d37 += _0x325cfb['length'] + _0x3477f7['length'];
                        }
                    }
                    _0x40a9ac['push'](_0x5bc6bd['join']('') + '\x0a');
                }), _0x40a9ac['join']('');
            })['join']('\x0a'), _0x134a0c = _0x919367['length'] && !this['npm']['config']['get']('long') ? 'Top\x20hits\x20for\x20' + _0x8d1e99['map'](JSON['stringify'])['join']('\x20') + '\x0a' + '—'['repeat'](_0x17829b - (0x180 + 0x29 * -0x26 + 0x497)) + '\x0a' + _0xd1be73 + '\x0a' + '—'['repeat'](_0x17829b - (-0x2430 + -0x2 * -0x1a9 + 0x20df)) + '\x0a' + '(run\x20with\x20-l\x20or\x20--long\x20to\x20see\x20more\x20context)' : _0xd1be73;
        return _0x134a0c['trim']();
    }
}
module['exports'] = HelpSearch;
