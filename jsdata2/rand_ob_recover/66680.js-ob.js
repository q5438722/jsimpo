const fs = require('fs'), path = require(_0x291d53(368)), color = require(_0x291d53(369)), {promisify} = require(_0x291d53(370)), glob = promisify(require('glob')), readFile = promisify(fs[_0x291d53(371)]), BaseCommand = require('./base-command.js');
class HelpSearch extends BaseCommand {
    static get ['description']() {
        const _0x39fc27 = { 'IJvUP': 'Search npm help documentation' };
        return _0x39fc27['IJvUP'];
    }
    static get [_0x291d53(372)]() {
        const _0x6fec30 = _0x291d53, _0x256978 = { 'QHjTL': 'help-search' };
        return _0x256978[_0x6fec30(373)];
    }
    static get [_0x291d53(374)]() {
        const _0x560416 = _0x291d53;
        return [_0x560416(375)];
    }
    static get [_0x291d53(376)]() {
        const _0x5258fb = { 'MQRyC': 'long' };
        return [_0x5258fb['MQRyC']];
    }
    [_0x291d53(377)](_0x256a31, _0x539368) {
        const _0x25487e = _0x291d53;
        this[_0x25487e(378)](_0x256a31)[_0x25487e(379)](() => _0x539368())[_0x25487e(380)](_0x539368);
    }
    async 'helpSearch'(_0x3b9b48) {
        const _0x579dd3 = _0x291d53, _0x1700e4 = {
                'OZLYs': _0x579dd3(381),
                'rkVck': function (_0x53edb7, _0x2f0fec) {
                    return _0x53edb7(_0x2f0fec);
                }
            };
        if (!_0x3b9b48['length'])
            return this['npm'][_0x579dd3(382)](this['usage']);
        const _0x40bcc0 = path[_0x579dd3(383)](__dirname, '..', _0x1700e4[_0x579dd3(384)]), _0x3abb71 = await _0x1700e4['rkVck'](glob, _0x40bcc0 + _0x579dd3(385)), _0x35922c = await this[_0x579dd3(386)](_0x3abb71), _0x325721 = await this[_0x579dd3(387)](_0x3b9b48, _0x35922c, _0x3abb71), _0x1dbd9a = this['formatResults'](_0x3b9b48, _0x325721);
        if (!_0x1dbd9a['trim']())
            this[_0x579dd3(388)][_0x579dd3(382)](_0x579dd3(389) + _0x3b9b48[_0x579dd3(390)](' ') + '\n');
        else
            this[_0x579dd3(388)]['output'](_0x1dbd9a);
    }
    async _0x291d53(386)(_0x5d9475) {
        const _0x46b51f = _0x291d53, _0x8a1da1 = {
                'gbegP': function (_0x3b8c94, _0x390e01, _0x29c8d9) {
                    return _0x3b8c94(_0x390e01, _0x29c8d9);
                },
                'NGsUQ': 'utf8'
            }, _0x3657af = {};
        return await Promise[_0x46b51f(391)](_0x5d9475[_0x46b51f(392)](async _0x30ac0e => {
            const _0x46b545 = _0x46b51f;
            _0x3657af[_0x30ac0e] = (await _0x8a1da1[_0x46b545(393)](readFile, _0x30ac0e, _0x8a1da1[_0x46b545(394)]))['replace'](/^---\n(.*\n)*?---\n/, '')[_0x46b545(395)]();
        })), _0x3657af;
    }
    async _0x291d53(387)(_0x4f9cdc, _0x565a04, _0x4cdfcf) {
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
                'aHHxg': 'npm help '
            }, _0x3e8891 = [];
        for (const [_0x151fbe, _0x48e7bd] of Object['entries'](_0x565a04)) {
            const _0x4fd934 = _0x48e7bd[_0x12393e(396)]();
            if (!_0x4f9cdc[_0x12393e(397)](_0x323716 => _0x4fd934[_0x12393e(398)](_0x323716['toLowerCase']())))
                continue;
            const _0x4d7dd1 = _0x48e7bd[_0x12393e(399)](/\n+/);
            for (let _0x3b8f6c = -71 * -1 + -2166 * 1 + 2095; _0x2be694['DCFvN'](_0x3b8f6c, _0x4d7dd1[_0x12393e(400)]); _0x3b8f6c++) {
                const _0x40cea4 = _0x4d7dd1[_0x3b8f6c], _0x318341 = _0x4d7dd1[_0x3b8f6c + (-1919 * 3 + -961 * 3 + 8641)];
                let _0x14b251 = ![];
                if (_0x318341) {
                    _0x14b251 = _0x4f9cdc[_0x12393e(397)](_0x596e51 => _0x318341['toLowerCase']()['includes'](_0x596e51[_0x12393e(396)]()));
                    if (_0x14b251) {
                        _0x3b8f6c += -5751 + -1952 + 23 * 335;
                        continue;
                    }
                }
                _0x14b251 = _0x4f9cdc['some'](_0x460a66 => _0x40cea4[_0x12393e(396)]()[_0x12393e(398)](_0x460a66['toLowerCase']()));
                if (_0x14b251) {
                    _0x3b8f6c++;
                    continue;
                }
                _0x4d7dd1[_0x3b8f6c] = null;
            }
            const _0x1e768e = _0x4d7dd1[_0x12393e(401)]((_0x2ae61c, _0x1333be) => {
                const _0x41add4 = _0x12393e;
                if (!(_0x2be694[_0x41add4(402)](_0x1333be, null) && _0x2be694[_0x41add4(402)](_0x2ae61c[_0x2be694[_0x41add4(403)](_0x2ae61c['length'], 9156 * -1 + -4685 + 13842)], null)))
                    _0x2ae61c[_0x41add4(404)](_0x1333be);
                return _0x2ae61c;
            }, []);
            if (_0x2be694[_0x12393e(402)](_0x1e768e[_0x2be694['xZzWP'](_0x1e768e[_0x12393e(400)], -41 * -14 + 7798 * -1 + 7225)], null))
                _0x1e768e[_0x12393e(405)]();
            if (_0x2be694[_0x12393e(402)](_0x1e768e[719 * -4 + 5048 + 6 * -362], null))
                _0x1e768e['shift']();
            const _0x19e42a = {};
            let _0x15dad3 = -2088 + 4362 + 1137 * -2;
            for (const _0xfcd9cf of _0x1e768e) {
                for (const _0x458207 of _0x4f9cdc) {
                    const _0x123318 = _0x2be694[_0x12393e(406)](_0x2be694['jOYVh'](_0xfcd9cf, '')[_0x12393e(396)]()[_0x12393e(399)](_0x458207[_0x12393e(396)]())[_0x12393e(400)], -6036 + 1 * -8191 + 1 * 14228);
                    _0x123318 > 7539 + 9918 + 5819 * -3 && (_0x19e42a[_0x458207] = (_0x19e42a[_0x458207] || -8166 + -6917 + 15083) + _0x123318, _0x15dad3 += _0x123318);
                }
            }
            const _0x306928 = _0x2be694[_0x12393e(407)](_0x2be694[_0x12393e(408)], path[_0x12393e(409)](_0x151fbe, '.md')['replace'](/^npm-/, ''));
            _0x3e8891['push']({
                'file': _0x151fbe,
                'cmd': _0x306928,
                'lines': _0x1e768e,
                'found': Object[_0x12393e(410)](_0x19e42a),
                'hits': _0x19e42a,
                'totalHits': _0x15dad3
            });
        }
        return _0x3e8891[_0x12393e(411)]((_0x3363bc, _0x2648ca) => _0x3363bc[_0x12393e(412)]['length'] > _0x2648ca[_0x12393e(412)][_0x12393e(400)] ? -(1215 + 7981 + 9195 * -1) : _0x3363bc['found']['length'] < _0x2648ca[_0x12393e(412)]['length'] ? -2377 * -2 + 2381 * -3 + 2390 : _0x3363bc[_0x12393e(413)] > _0x2648ca[_0x12393e(413)] ? -(-2371 * -4 + -5780 + -1 * 3703) : _0x3363bc[_0x12393e(413)] < _0x2648ca[_0x12393e(413)] ? 129 * -55 + 6 * 35 + 6886 : _0x3363bc['lines'][_0x12393e(400)] > _0x2648ca[_0x12393e(414)][_0x12393e(400)] ? -(6862 + -7276 + -1 * -415) : _0x3363bc[_0x12393e(414)][_0x12393e(400)] < _0x2648ca[_0x12393e(414)][_0x12393e(400)] ? 3463 + -1 * 7757 + 4295 : 2069 * 2 + 8691 + -12829)[_0x12393e(415)](-477 * -1 + -4811 + 4334, 8329 + -716 * 4 + 1091 * -5);
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
                'Jixgj': _0x4a7cac(416),
                'WwtBC': function (_0x388e2d, _0x45e7e0) {
                    return _0x388e2d + _0x45e7e0;
                },
                'BfLBZ': function (_0x16cfd0, _0x6515ed) {
                    return _0x16cfd0 + _0x6515ed;
                },
                'TCfec': _0x4a7cac(417)
            }, _0x254ac9 = _0x2d6949[_0x4a7cac(418)](Math[_0x4a7cac(419)](process[_0x4a7cac(420)][_0x4a7cac(421)] || Infinity, -5286 + 2049 + -31 * -107), 578 + 5652 + 1 * -6229), _0x1d98a6 = _0x16d972[_0x4a7cac(392)](_0x3c356c => {
                const _0x4c172b = _0x4a7cac, _0x1fb99b = {
                        'fIdYg': function (_0x5893dd, _0x5590f0) {
                            const _0x5e04a4 = _0x3f4a;
                            return _0x2d6949[_0x5e04a4(422)](_0x5893dd, _0x5590f0);
                        },
                        'zODkw': function (_0x5d8a2e, _0x56fe06) {
                            const _0x4de800 = _0x3f4a;
                            return _0x2d6949[_0x4de800(423)](_0x5d8a2e, _0x56fe06);
                        },
                        'dsCgJ': function (_0x4a0670, _0x487a7d) {
                            const _0x45f8c7 = _0x3f4a;
                            return _0x2d6949[_0x45f8c7(424)](_0x4a0670, _0x487a7d);
                        }
                    }, _0x1b69f2 = [_0x3c356c['cmd']], _0x5b9103 = Object[_0x4c172b(410)](_0x3c356c[_0x4c172b(425)])[_0x4c172b(392)](_0x1d18e1 => _0x1d18e1 + ':' + _0x3c356c['hits'][_0x1d18e1])[_0x4c172b(411)]((_0x414ab8, _0x48aaf2) => _0x414ab8 > _0x48aaf2 ? 7763 + -7248 + -514 : -(-2803 * 3 + 3831 + 4579))[_0x4c172b(390)](' ');
                _0x1b69f2['push'](' '[_0x4c172b(426)](Math['max'](-2652 + 7704 + -1 * 5051, _0x2d6949[_0x4c172b(427)](_0x2d6949['ePqSs'](_0x254ac9 - _0x1b69f2[_0x4c172b(390)](' ')[_0x4c172b(400)], _0x5b9103[_0x4c172b(400)]), -2654 * 3 + 17 * 19 + 7640)))), _0x1b69f2[_0x4c172b(404)](_0x5b9103);
                if (!this[_0x4c172b(388)]['config']['get'](_0x2d6949['Jixgj']))
                    return _0x1b69f2[_0x4c172b(390)]('');
                return _0x1b69f2['unshift']('\n\n'), _0x1b69f2[_0x4c172b(404)]('\n'), _0x1b69f2['push'](_0x2d6949['qWyeN']('-'['repeat'](_0x254ac9 - (-2751 * 1 + 4802 * 2 + -3426 * 2)), '\n')), _0x3c356c[_0x4c172b(414)]['forEach']((_0x29918d, _0x802f3e) => {
                    const _0x57a1a7 = _0x4c172b;
                    if (_0x1fb99b[_0x57a1a7(428)](_0x29918d, null) || _0x1fb99b[_0x57a1a7(429)](_0x802f3e, -7792 + 8458 + -663))
                        return;
                    if (!this[_0x57a1a7(388)][_0x57a1a7(430)]) {
                        _0x1b69f2['push'](_0x1fb99b[_0x57a1a7(431)](_0x29918d, '\n'));
                        return;
                    }
                    const _0x17a1fb = [];
                    for (const _0x349b9c of _0x5abae) {
                        const _0x9311f2 = _0x29918d['toLowerCase']()['split'](_0x349b9c[_0x57a1a7(396)]());
                        let _0x19522d = 2135 * -3 + -3016 + -9421 * -1;
                        for (const _0x599799 of _0x9311f2) {
                            _0x17a1fb[_0x57a1a7(404)](_0x29918d[_0x57a1a7(432)](_0x19522d, _0x599799[_0x57a1a7(400)]));
                            const _0x17ed8e = _0x29918d[_0x57a1a7(432)](_0x19522d + _0x599799[_0x57a1a7(400)], _0x349b9c[_0x57a1a7(400)]), _0x3f95ff = color[_0x57a1a7(433)](color[_0x57a1a7(434)](_0x17ed8e));
                            _0x17a1fb['push'](_0x3f95ff), _0x19522d += _0x1fb99b[_0x57a1a7(431)](_0x599799['length'], _0x349b9c[_0x57a1a7(400)]);
                        }
                    }
                    _0x1b69f2[_0x57a1a7(404)](_0x1fb99b[_0x57a1a7(431)](_0x17a1fb[_0x57a1a7(390)](''), '\n'));
                }), _0x1b69f2[_0x4c172b(390)]('');
            })[_0x4a7cac(390)]('\n'), _0x55b340 = _0x16d972[_0x4a7cac(400)] && !this[_0x4a7cac(388)][_0x4a7cac(435)]['get'](_0x2d6949[_0x4a7cac(436)]) ? _0x2d6949[_0x4a7cac(418)](_0x2d6949[_0x4a7cac(418)](_0x2d6949[_0x4a7cac(418)](_0x2d6949[_0x4a7cac(437)](_0x2d6949['BfLBZ'](_0x2d6949[_0x4a7cac(438)], _0x5abae['map'](JSON[_0x4a7cac(439)])[_0x4a7cac(390)](' ')), '\n') + '\u2014'[_0x4a7cac(426)](_0x2d6949[_0x4a7cac(427)](_0x254ac9, -3187 * -1 + -1814 * -5 + 12256 * -1)) + '\n' + _0x1d98a6, '\n'), '\u2014'['repeat'](_0x2d6949['ePqSs'](_0x254ac9, -5563 * -1 + 8714 + -86 * 166))) + '\n', _0x4a7cac(440)) : _0x1d98a6;
        return _0x55b340[_0x4a7cac(395)]();
    }
}
module['exports'] = HelpSearch;