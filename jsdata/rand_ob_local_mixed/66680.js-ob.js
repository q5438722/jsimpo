const _0x4782 = [
    '379925rZIAwJ',
    '295510ifZTnE',
    '112757YpxSQQ',
    '1WCLBVH',
    '10Crjmrz',
    '34331zOsioO',
    'path',
    'ansicolors',
    'util',
    'readFile',
    'name',
    'QHjTL',
    'usage',
    '<text>',
    'params',
    'exec',
    'helpSearch',
    'then',
    'catch',
    'docs/content',
    'output',
    'resolve',
    'OZLYs',
    '/*/*.md',
    'readFiles',
    'searchFiles',
    'npm',
    'No\x20matches\x20in\x20help\x20for:\x20',
    'join',
    'all',
    'map',
    'gbegP',
    'NGsUQ',
    'trim',
    'toLowerCase',
    'some',
    'includes',
    'split',
    'length',
    'reduce',
    'hBisj',
    'xZzWP',
    'push',
    'pop',
    'cdLie',
    'PvNJu',
    'aHHxg',
    'basename',
    'keys',
    'sort',
    'found',
    'totalHits',
    'lines',
    'slice',
    'long',
    'Top\x20hits\x20for\x20',
    'WwtBC',
    'min',
    'stdout',
    'columns',
    'zflIO',
    'HoZKf',
    'qWyeN',
    'hits',
    'repeat',
    'ePqSs',
    'fIdYg',
    'zODkw',
    'color',
    'dsCgJ',
    'substr',
    'bgBlack',
    'red',
    'config',
    'Jixgj',
    'BfLBZ',
    'TCfec',
    'stringify',
    '(run\x20with\x20-l\x20or\x20--long\x20to\x20see\x20more\x20context)',
    '708097WyUWYw',
    '1649HtkdKr',
    '131WauwwS',
    '119813ONCqXw'
];
const _0x291d53 = _0x3f4a;
function _0x3f4a(_0x179bb2, _0x1c991e) {
    return _0x3f4a = function (_0x3f4a7a, _0x5508bd) {
        _0x3f4a7a = _0x3f4a7a - (0x1 * -0x67f + -0xae4 * 0x2 + 0x1dad);
        let _0x1a6bd1 = _0x4782[_0x3f4a7a];
        return _0x1a6bd1;
    }, _0x3f4a(_0x179bb2, _0x1c991e);
}
(function (_0x1344ee, _0x394cc6) {
    const _0x1b1344 = _0x3f4a;
    while (!![]) {
        try {
            const _0x3e3ac0 = parseInt(_0x1b1344(0x166)) + parseInt(_0x1b1344(0x167)) * parseInt(_0x1b1344(0x168)) + -parseInt(_0x1b1344(0x169)) + -parseInt(_0x1b1344(0x16a)) + -parseInt(_0x1b1344(0x16b)) + -parseInt(_0x1b1344(0x16c)) * parseInt(_0x1b1344(0x16d)) + -parseInt(_0x1b1344(0x16e)) * -parseInt(_0x1b1344(0x16f));
            if (_0x3e3ac0 === _0x394cc6)
                break;
            else
                _0x1344ee['push'](_0x1344ee['shift']());
        } catch (_0x30dd7e) {
            _0x1344ee['push'](_0x1344ee['shift']());
        }
    }
}(_0x4782, 0x225f * 0x3d + 0x56b90 + -0x11a1 * 0x76));
const fs = require('fs'), path = require(_0x291d53(0x170)), color = require(_0x291d53(0x171)), {promisify} = require(_0x291d53(0x172)), glob = promisify(require('glob')), readFile = promisify(fs[_0x291d53(0x173)]), BaseCommand = require('./base-command.js');
class HelpSearch extends BaseCommand {
    static get ['description']() {
        const _0x39fc27 = { 'IJvUP': 'Search\x20npm\x20help\x20documentation' };
        return _0x39fc27['IJvUP'];
    }
    static get [_0x291d53(0x174)]() {
        const _0x6fec30 = _0x291d53, _0x256978 = { 'QHjTL': 'help-search' };
        return _0x256978[_0x6fec30(0x175)];
    }
    static get [_0x291d53(0x176)]() {
        const _0x560416 = _0x291d53;
        return [_0x560416(0x177)];
    }
    static get [_0x291d53(0x178)]() {
        const _0x5258fb = { 'MQRyC': 'long' };
        return [_0x5258fb['MQRyC']];
    }
    [_0x291d53(0x179)](_0x256a31, _0x539368) {
        const _0x25487e = _0x291d53;
        this[_0x25487e(0x17a)](_0x256a31)[_0x25487e(0x17b)](() => _0x539368())[_0x25487e(0x17c)](_0x539368);
    }
    async ['helpSearch'](_0x3b9b48) {
        const _0x579dd3 = _0x291d53, _0x1700e4 = {
                'OZLYs': _0x579dd3(0x17d),
                'rkVck': function (_0x53edb7, _0x2f0fec) {
                    return _0x53edb7(_0x2f0fec);
                }
            };
        if (!_0x3b9b48['length'])
            return this['npm'][_0x579dd3(0x17e)](this['usage']);
        const _0x40bcc0 = path[_0x579dd3(0x17f)](__dirname, '..', _0x1700e4[_0x579dd3(0x180)]), _0x3abb71 = await _0x1700e4['rkVck'](glob, _0x40bcc0 + _0x579dd3(0x181)), _0x35922c = await this[_0x579dd3(0x182)](_0x3abb71), _0x325721 = await this[_0x579dd3(0x183)](_0x3b9b48, _0x35922c, _0x3abb71), _0x1dbd9a = this['formatResults'](_0x3b9b48, _0x325721);
        if (!_0x1dbd9a['trim']())
            this[_0x579dd3(0x184)][_0x579dd3(0x17e)](_0x579dd3(0x185) + _0x3b9b48[_0x579dd3(0x186)]('\x20') + '\x0a');
        else
            this[_0x579dd3(0x184)]['output'](_0x1dbd9a);
    }
    async [_0x291d53(0x182)](_0x5d9475) {
        const _0x46b51f = _0x291d53, _0x8a1da1 = {
                'gbegP': function (_0x3b8c94, _0x390e01, _0x29c8d9) {
                    return _0x3b8c94(_0x390e01, _0x29c8d9);
                },
                'NGsUQ': 'utf8'
            }, _0x3657af = {};
        return await Promise[_0x46b51f(0x187)](_0x5d9475[_0x46b51f(0x188)](async _0x30ac0e => {
            const _0x46b545 = _0x46b51f;
            _0x3657af[_0x30ac0e] = (await _0x8a1da1[_0x46b545(0x189)](readFile, _0x30ac0e, _0x8a1da1[_0x46b545(0x18a)]))['replace'](/^---\n(.*\n)*?---\n/, '')[_0x46b545(0x18b)]();
        })), _0x3657af;
    }
    async [_0x291d53(0x183)](_0x4f9cdc, _0x565a04, _0x4cdfcf) {
        const _0x12393e = _0x291d53, _0x2be694 = {
                'hBisj': function (_0x3b1118, _0x2c6a66) {
                    return _0x3b1118 === _0x2c6a66;
                },
                'xZzWP': function (_0x1ab03e, _0x30f7a8) {
                    return _0x1ab03e - _0x30f7a8;
                },
                'DCFvN': function (_0x33a630, _0x2fb762) {
                    return _0x33a630 < _0x2fb762;
                },
                'cdLie': function (_0x1a5a84, _0x3c8801) {
                    return _0x1a5a84 - _0x3c8801;
                },
                'jOYVh': function (_0x4f3ab1, _0x23f9c8) {
                    return _0x4f3ab1 || _0x23f9c8;
                },
                'PvNJu': function (_0x3ab417, _0x161fb5) {
                    return _0x3ab417 + _0x161fb5;
                },
                'aHHxg': 'npm\x20help\x20'
            }, _0x3e8891 = [];
        for (const [_0x151fbe, _0x48e7bd] of Object['entries'](_0x565a04)) {
            const _0x4fd934 = _0x48e7bd[_0x12393e(0x18c)]();
            if (!_0x4f9cdc[_0x12393e(0x18d)](_0x323716 => _0x4fd934[_0x12393e(0x18e)](_0x323716['toLowerCase']())))
                continue;
            const _0x4d7dd1 = _0x48e7bd[_0x12393e(0x18f)](/\n+/);
            for (let _0x3b8f6c = -0x47 * -0x1 + -0x876 * 0x1 + 0x82f; _0x2be694['DCFvN'](_0x3b8f6c, _0x4d7dd1[_0x12393e(0x190)]); _0x3b8f6c++) {
                const _0x40cea4 = _0x4d7dd1[_0x3b8f6c], _0x318341 = _0x4d7dd1[_0x3b8f6c + (-0x77f * 0x3 + -0x3c1 * 0x3 + 0x21c1)];
                let _0x14b251 = ![];
                if (_0x318341) {
                    _0x14b251 = _0x4f9cdc[_0x12393e(0x18d)](_0x596e51 => _0x318341['toLowerCase']()['includes'](_0x596e51[_0x12393e(0x18c)]()));
                    if (_0x14b251) {
                        _0x3b8f6c += -0x1677 + -0x7a0 + 0x17 * 0x14f;
                        continue;
                    }
                }
                _0x14b251 = _0x4f9cdc['some'](_0x460a66 => _0x40cea4[_0x12393e(0x18c)]()[_0x12393e(0x18e)](_0x460a66['toLowerCase']()));
                if (_0x14b251) {
                    _0x3b8f6c++;
                    continue;
                }
                _0x4d7dd1[_0x3b8f6c] = null;
            }
            const _0x1e768e = _0x4d7dd1[_0x12393e(0x191)]((_0x2ae61c, _0x1333be) => {
                const _0x41add4 = _0x12393e;
                if (!(_0x2be694[_0x41add4(0x192)](_0x1333be, null) && _0x2be694[_0x41add4(0x192)](_0x2ae61c[_0x2be694[_0x41add4(0x193)](_0x2ae61c['length'], 0x23c4 * -0x1 + -0x124d + 0x3612)], null)))
                    _0x2ae61c[_0x41add4(0x194)](_0x1333be);
                return _0x2ae61c;
            }, []);
            if (_0x2be694[_0x12393e(0x192)](_0x1e768e[_0x2be694['xZzWP'](_0x1e768e[_0x12393e(0x190)], -0x29 * -0xe + 0x1e76 * -0x1 + 0x1c39)], null))
                _0x1e768e[_0x12393e(0x195)]();
            if (_0x2be694[_0x12393e(0x192)](_0x1e768e[0x2cf * -0x4 + 0x13b8 + 0x6 * -0x16a], null))
                _0x1e768e['shift']();
            const _0x19e42a = {};
            let _0x15dad3 = -0x828 + 0x110a + 0x471 * -0x2;
            for (const _0xfcd9cf of _0x1e768e) {
                for (const _0x458207 of _0x4f9cdc) {
                    const _0x123318 = _0x2be694[_0x12393e(0x196)](_0x2be694['jOYVh'](_0xfcd9cf, '')[_0x12393e(0x18c)]()[_0x12393e(0x18f)](_0x458207[_0x12393e(0x18c)]())[_0x12393e(0x190)], -0x1794 + 0x1 * -0x1fff + 0x1 * 0x3794);
                    _0x123318 > 0x1d73 + 0x26be + 0x16bb * -0x3 && (_0x19e42a[_0x458207] = (_0x19e42a[_0x458207] || -0x1fe6 + -0x1b05 + 0x3aeb) + _0x123318, _0x15dad3 += _0x123318);
                }
            }
            const _0x306928 = _0x2be694[_0x12393e(0x197)](_0x2be694[_0x12393e(0x198)], path[_0x12393e(0x199)](_0x151fbe, '.md')['replace'](/^npm-/, ''));
            _0x3e8891['push']({
                'file': _0x151fbe,
                'cmd': _0x306928,
                'lines': _0x1e768e,
                'found': Object[_0x12393e(0x19a)](_0x19e42a),
                'hits': _0x19e42a,
                'totalHits': _0x15dad3
            });
        }
        return _0x3e8891[_0x12393e(0x19b)]((_0x3363bc, _0x2648ca) => _0x3363bc[_0x12393e(0x19c)]['length'] > _0x2648ca[_0x12393e(0x19c)][_0x12393e(0x190)] ? -(0x4bf + 0x1f2d + 0x23eb * -0x1) : _0x3363bc['found']['length'] < _0x2648ca[_0x12393e(0x19c)]['length'] ? -0x949 * -0x2 + 0x94d * -0x3 + 0x956 : _0x3363bc[_0x12393e(0x19d)] > _0x2648ca[_0x12393e(0x19d)] ? -(-0x943 * -0x4 + -0x1694 + -0x1 * 0xe77) : _0x3363bc[_0x12393e(0x19d)] < _0x2648ca[_0x12393e(0x19d)] ? 0x81 * -0x37 + 0x6 * 0x23 + 0x1ae6 : _0x3363bc['lines'][_0x12393e(0x190)] > _0x2648ca[_0x12393e(0x19e)][_0x12393e(0x190)] ? -(0x1ace + -0x1c6c + -0x1 * -0x19f) : _0x3363bc[_0x12393e(0x19e)][_0x12393e(0x190)] < _0x2648ca[_0x12393e(0x19e)][_0x12393e(0x190)] ? 0xd87 + -0x1 * 0x1e4d + 0x10c7 : 0x815 * 0x2 + 0x21f3 + -0x321d)[_0x12393e(0x19f)](-0x1dd * -0x1 + -0x12cb + 0x10ee, 0x2089 + -0x2cc * 0x4 + 0x443 * -0x5);
    }
    ['formatResults'](_0x5abae, _0x16d972) {
        const _0x4a7cac = _0x291d53, _0x2d6949 = {
                'zflIO': function (_0x121ded, _0x4c6b2c) {
                    return _0x121ded === _0x4c6b2c;
                },
                'HoZKf': function (_0x5c171f, _0x2963dd) {
                    return _0x5c171f > _0x2963dd;
                },
                'qWyeN': function (_0x52acf8, _0x4c401b) {
                    return _0x52acf8 + _0x4c401b;
                },
                'ePqSs': function (_0x7770fd, _0x410500) {
                    return _0x7770fd - _0x410500;
                },
                'Jixgj': _0x4a7cac(0x1a0),
                'WwtBC': function (_0x388e2d, _0x45e7e0) {
                    return _0x388e2d + _0x45e7e0;
                },
                'BfLBZ': function (_0x16cfd0, _0x6515ed) {
                    return _0x16cfd0 + _0x6515ed;
                },
                'TCfec': _0x4a7cac(0x1a1)
            }, _0x254ac9 = _0x2d6949[_0x4a7cac(0x1a2)](Math[_0x4a7cac(0x1a3)](process[_0x4a7cac(0x1a4)][_0x4a7cac(0x1a5)] || Infinity, -0x14a6 + 0x801 + -0x1f * -0x6b), 0x242 + 0x1614 + 0x1 * -0x1855), _0x1d98a6 = _0x16d972[_0x4a7cac(0x188)](_0x3c356c => {
                const _0x4c172b = _0x4a7cac, _0x1fb99b = {
                        'fIdYg': function (_0x5893dd, _0x5590f0) {
                            const _0x5e04a4 = _0x3f4a;
                            return _0x2d6949[_0x5e04a4(0x1a6)](_0x5893dd, _0x5590f0);
                        },
                        'zODkw': function (_0x5d8a2e, _0x56fe06) {
                            const _0x4de800 = _0x3f4a;
                            return _0x2d6949[_0x4de800(0x1a7)](_0x5d8a2e, _0x56fe06);
                        },
                        'dsCgJ': function (_0x4a0670, _0x487a7d) {
                            const _0x45f8c7 = _0x3f4a;
                            return _0x2d6949[_0x45f8c7(0x1a8)](_0x4a0670, _0x487a7d);
                        }
                    }, _0x1b69f2 = [_0x3c356c['cmd']], _0x5b9103 = Object[_0x4c172b(0x19a)](_0x3c356c[_0x4c172b(0x1a9)])[_0x4c172b(0x188)](_0x1d18e1 => _0x1d18e1 + ':' + _0x3c356c['hits'][_0x1d18e1])[_0x4c172b(0x19b)]((_0x414ab8, _0x48aaf2) => _0x414ab8 > _0x48aaf2 ? 0x1e53 + -0x1c50 + -0x202 : -(-0xaf3 * 0x3 + 0xef7 + 0x11e3))[_0x4c172b(0x186)]('\x20');
                _0x1b69f2['push']('\x20'[_0x4c172b(0x1aa)](Math['max'](-0xa5c + 0x1e18 + -0x1 * 0x13bb, _0x2d6949[_0x4c172b(0x1ab)](_0x2d6949['ePqSs'](_0x254ac9 - _0x1b69f2[_0x4c172b(0x186)]('\x20')[_0x4c172b(0x190)], _0x5b9103[_0x4c172b(0x190)]), -0xa5e * 0x3 + 0x11 * 0x13 + 0x1dd8)))), _0x1b69f2[_0x4c172b(0x194)](_0x5b9103);
                if (!this[_0x4c172b(0x184)]['config']['get'](_0x2d6949['Jixgj']))
                    return _0x1b69f2[_0x4c172b(0x186)]('');
                return _0x1b69f2['unshift']('\x0a\x0a'), _0x1b69f2[_0x4c172b(0x194)]('\x0a'), _0x1b69f2['push'](_0x2d6949['qWyeN']('-'['repeat'](_0x254ac9 - (-0xabf * 0x1 + 0x12c2 * 0x2 + -0xd62 * 0x2)), '\x0a')), _0x3c356c[_0x4c172b(0x19e)]['forEach']((_0x29918d, _0x802f3e) => {
                    const _0x57a1a7 = _0x4c172b;
                    if (_0x1fb99b[_0x57a1a7(0x1ac)](_0x29918d, null) || _0x1fb99b[_0x57a1a7(0x1ad)](_0x802f3e, -0x1e70 + 0x210a + -0x297))
                        return;
                    if (!this[_0x57a1a7(0x184)][_0x57a1a7(0x1ae)]) {
                        _0x1b69f2['push'](_0x1fb99b[_0x57a1a7(0x1af)](_0x29918d, '\x0a'));
                        return;
                    }
                    const _0x17a1fb = [];
                    for (const _0x349b9c of _0x5abae) {
                        const _0x9311f2 = _0x29918d['toLowerCase']()['split'](_0x349b9c[_0x57a1a7(0x18c)]());
                        let _0x19522d = 0x857 * -0x3 + -0xbc8 + -0x24cd * -0x1;
                        for (const _0x599799 of _0x9311f2) {
                            _0x17a1fb[_0x57a1a7(0x194)](_0x29918d[_0x57a1a7(0x1b0)](_0x19522d, _0x599799[_0x57a1a7(0x190)]));
                            const _0x17ed8e = _0x29918d[_0x57a1a7(0x1b0)](_0x19522d + _0x599799[_0x57a1a7(0x190)], _0x349b9c[_0x57a1a7(0x190)]), _0x3f95ff = color[_0x57a1a7(0x1b1)](color[_0x57a1a7(0x1b2)](_0x17ed8e));
                            _0x17a1fb['push'](_0x3f95ff), _0x19522d += _0x1fb99b[_0x57a1a7(0x1af)](_0x599799['length'], _0x349b9c[_0x57a1a7(0x190)]);
                        }
                    }
                    _0x1b69f2[_0x57a1a7(0x194)](_0x1fb99b[_0x57a1a7(0x1af)](_0x17a1fb[_0x57a1a7(0x186)](''), '\x0a'));
                }), _0x1b69f2[_0x4c172b(0x186)]('');
            })[_0x4a7cac(0x186)]('\x0a'), _0x55b340 = _0x16d972[_0x4a7cac(0x190)] && !this[_0x4a7cac(0x184)][_0x4a7cac(0x1b3)]['get'](_0x2d6949[_0x4a7cac(0x1b4)]) ? _0x2d6949[_0x4a7cac(0x1a2)](_0x2d6949[_0x4a7cac(0x1a2)](_0x2d6949[_0x4a7cac(0x1a2)](_0x2d6949[_0x4a7cac(0x1b5)](_0x2d6949['BfLBZ'](_0x2d6949[_0x4a7cac(0x1b6)], _0x5abae['map'](JSON[_0x4a7cac(0x1b7)])[_0x4a7cac(0x186)]('\x20')), '\x0a') + '—'[_0x4a7cac(0x1aa)](_0x2d6949[_0x4a7cac(0x1ab)](_0x254ac9, -0xc73 * -0x1 + -0x716 * -0x5 + 0x2fe0 * -0x1)) + '\x0a' + _0x1d98a6, '\x0a'), '—'['repeat'](_0x2d6949['ePqSs'](_0x254ac9, -0x15bb * -0x1 + 0x220a + -0x56 * 0xa6))) + '\x0a', _0x4a7cac(0x1b8)) : _0x1d98a6;
        return _0x55b340[_0x4a7cac(0x18b)]();
    }
}
module['exports'] = HelpSearch;
