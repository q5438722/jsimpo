import {
    MILLISECONDS_A_DAY,
    MILLISECONDS_A_HOUR,
    MILLISECONDS_A_MINUTE,
    MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK,
    REGEX_FORMAT
} from '../../constant';
const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 0x16d, MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * 0x1e, durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, unitToMS = {
        'years': MILLISECONDS_A_YEAR,
        'months': MILLISECONDS_A_MONTH,
        'days': MILLISECONDS_A_DAY,
        'hours': MILLISECONDS_A_HOUR,
        'minutes': MILLISECONDS_A_MINUTE,
        'seconds': MILLISECONDS_A_SECOND,
        'milliseconds': 0x1,
        'weeks': MILLISECONDS_A_WEEK
    }, isDuration = _0x1dff3d => _0x1dff3d instanceof Duration;
let $d, $u;
const wrapper = (_0x3d0339, _0x22f3e5, _0x13980f) => new Duration(_0x3d0339, _0x13980f, _0x22f3e5['$l']), prettyUnit = _0x376552 => $u['p'](_0x376552) + 's', isNegative = _0x1098b5 => _0x1098b5 < 0x0, roundNumber = _0x14c086 => isNegative(_0x14c086) ? Math['ceil'](_0x14c086) : Math['floor'](_0x14c086), absolute = _0x456dcf => Math['abs'](_0x456dcf), getNumberUnitFormat = (_0x139b40, _0x2344d3) => {
        const _0x159d28 = {
            'CEsvO': function (_0x16a6ae, _0x47d429) {
                return _0x16a6ae(_0x47d429);
            }
        };
        if (!_0x139b40)
            return {
                'negative': ![],
                'format': ''
            };
        if (_0x159d28['CEsvO'](isNegative, _0x139b40))
            return {
                'negative': !![],
                'format': '' + _0x159d28['CEsvO'](absolute, _0x139b40) + _0x2344d3
            };
        return {
            'negative': ![],
            'format': '' + _0x139b40 + _0x2344d3
        };
    };
class Duration {
    constructor(_0x5abb5c, _0x436bfc, _0x1a5724) {
        const _0x530f12 = {
            'jZIup': function (_0x4869e0, _0x3b94fb) {
                return _0x4869e0(_0x3b94fb);
            },
            'zHRAQ': function (_0x8854f6, _0x30b5f5) {
                return _0x8854f6 === _0x30b5f5;
            },
            'XRssr': function (_0xb48e01, _0x5ba739, _0x2b05bc) {
                return _0xb48e01(_0x5ba739, _0x2b05bc);
            },
            'NGPsc': function (_0xac7fed, _0x2da1b9) {
                return _0xac7fed * _0x2da1b9;
            },
            'zVhrA': 'number',
            'AeyXS': function (_0x4bb34f, _0x54f8d4) {
                return _0x4bb34f === _0x54f8d4;
            },
            'BJSpR': 'object',
            'Ixtsr': function (_0x1c46fd, _0x39f139) {
                return _0x1c46fd === _0x39f139;
            },
            'ecxhV': 'string'
        };
        this['$d'] = {}, this['$l'] = _0x1a5724;
        _0x530f12['zHRAQ'](_0x5abb5c, undefined) && (this['$ms'] = 0x0, this['parseFromMilliseconds']());
        if (_0x436bfc)
            return _0x530f12['XRssr'](wrapper, _0x530f12['NGPsc'](_0x5abb5c, unitToMS[_0x530f12['jZIup'](prettyUnit, _0x436bfc)]), this);
        if (_0x530f12['zHRAQ'](typeof _0x5abb5c, _0x530f12['zVhrA']))
            return this['$ms'] = _0x5abb5c, this['parseFromMilliseconds'](), this;
        if (_0x530f12['AeyXS'](typeof _0x5abb5c, _0x530f12['BJSpR']))
            return Object['keys'](_0x5abb5c)['forEach'](_0x316e9a => {
                this['$d'][_0x530f12['jZIup'](prettyUnit, _0x316e9a)] = _0x5abb5c[_0x316e9a];
            }), this['calMilliseconds'](), this;
        if (_0x530f12['Ixtsr'](typeof _0x5abb5c, _0x530f12['ecxhV'])) {
            const _0x4ec174 = _0x5abb5c['match'](durationRegex);
            if (_0x4ec174) {
                const _0x3d74e5 = _0x4ec174['slice'](0x2), _0x4a9e8a = _0x3d74e5['map'](_0x1cd326 => Number(_0x1cd326));
                return [this['$d']['years'], this['$d']['months'], this['$d']['weeks'], this['$d']['days'], this['$d']['hours'], this['$d']['minutes'], this['$d']['seconds']] = _0x4a9e8a, this['calMilliseconds'](), this;
            }
        }
        return this;
    }
    ['calMilliseconds']() {
        this['$ms'] = Object['keys'](this['$d'])['reduce']((_0x3d5a46, _0x1b3d09) => _0x3d5a46 + (this['$d'][_0x1b3d09] || 0x0) * unitToMS[_0x1b3d09], 0x0);
    }
    ['parseFromMilliseconds']() {
        const _0x21f161 = {
            'kkuRR': function (_0x8326c5, _0x410e2b) {
                return _0x8326c5(_0x410e2b);
            },
            'HqtkE': function (_0xfbd1a2, _0x1a93fd) {
                return _0xfbd1a2 / _0x1a93fd;
            },
            'TYnFa': function (_0x3fd4ea, _0x229d23) {
                return _0x3fd4ea(_0x229d23);
            },
            'XdgJK': function (_0x2bce8f, _0x4f21c7) {
                return _0x2bce8f(_0x4f21c7);
            },
            'GlbEm': function (_0x56be5e, _0x55e095) {
                return _0x56be5e / _0x55e095;
            },
            'yKRaA': function (_0x110ec8, _0x4f12d7) {
                return _0x110ec8(_0x4f12d7);
            },
            'oGQyJ': function (_0x79f9e8, _0x39dc47) {
                return _0x79f9e8 / _0x39dc47;
            },
            'gKolw': function (_0x4542f3, _0x433a61) {
                return _0x4542f3(_0x433a61);
            }
        };
        let {$ms: _0x16ecff} = this;
        this['$d']['years'] = _0x21f161['kkuRR'](roundNumber, _0x21f161['HqtkE'](_0x16ecff, MILLISECONDS_A_YEAR)), _0x16ecff %= MILLISECONDS_A_YEAR, this['$d']['months'] = _0x21f161['TYnFa'](roundNumber, _0x21f161['HqtkE'](_0x16ecff, MILLISECONDS_A_MONTH)), _0x16ecff %= MILLISECONDS_A_MONTH, this['$d']['days'] = _0x21f161['XdgJK'](roundNumber, _0x21f161['HqtkE'](_0x16ecff, MILLISECONDS_A_DAY)), _0x16ecff %= MILLISECONDS_A_DAY, this['$d']['hours'] = _0x21f161['XdgJK'](roundNumber, _0x21f161['GlbEm'](_0x16ecff, MILLISECONDS_A_HOUR)), _0x16ecff %= MILLISECONDS_A_HOUR, this['$d']['minutes'] = _0x21f161['yKRaA'](roundNumber, _0x21f161['oGQyJ'](_0x16ecff, MILLISECONDS_A_MINUTE)), _0x16ecff %= MILLISECONDS_A_MINUTE, this['$d']['seconds'] = _0x21f161['gKolw'](roundNumber, _0x21f161['oGQyJ'](_0x16ecff, MILLISECONDS_A_SECOND)), _0x16ecff %= MILLISECONDS_A_SECOND, this['$d']['milliseconds'] = _0x16ecff;
    }
    ['toISOString']() {
        const _0x465882 = {
                'mSNUR': function (_0x56c966, _0x20846c, _0x4ecf85) {
                    return _0x56c966(_0x20846c, _0x4ecf85);
                },
                'yuxvZ': function (_0x2e9b54, _0x385db3) {
                    return _0x2e9b54 * _0x385db3;
                },
                'CscBj': function (_0x3efeb0, _0xa0fd4e, _0x26995f) {
                    return _0x3efeb0(_0xa0fd4e, _0x26995f);
                },
                'LSDsP': function (_0x5c19e9, _0x5cf737) {
                    return _0x5c19e9 / _0x5cf737;
                },
                'zveoj': function (_0x38529f, _0x1265ab) {
                    return _0x38529f === _0x1265ab;
                },
                'fCcgF': function (_0x2ed591, _0x29bc11) {
                    return _0x2ed591 === _0x29bc11;
                },
                'PFOJZ': 'P0D'
            }, _0x496e96 = _0x465882['mSNUR'](getNumberUnitFormat, this['$d']['years'], 'Y'), _0x595385 = _0x465882['mSNUR'](getNumberUnitFormat, this['$d']['months'], 'M');
        let _0xb88ef7 = +this['$d']['days'] || 0x0;
        this['$d']['weeks'] && (_0xb88ef7 += _0x465882['yuxvZ'](this['$d']['weeks'], 0x7));
        const _0x12e76d = _0x465882['CscBj'](getNumberUnitFormat, _0xb88ef7, 'D'), _0x26a56c = _0x465882['CscBj'](getNumberUnitFormat, this['$d']['hours'], 'H'), _0xedb27b = _0x465882['CscBj'](getNumberUnitFormat, this['$d']['minutes'], 'M');
        let _0x2e5036 = this['$d']['seconds'] || 0x0;
        this['$d']['milliseconds'] && (_0x2e5036 += _0x465882['LSDsP'](this['$d']['milliseconds'], 0x3e8));
        const _0x568b24 = _0x465882['CscBj'](getNumberUnitFormat, _0x2e5036, 'S'), _0x12b9e2 = _0x496e96['negative'] || _0x595385['negative'] || _0x12e76d['negative'] || _0x26a56c['negative'] || _0xedb27b['negative'] || _0x568b24['negative'], _0x57da14 = _0x26a56c['format'] || _0xedb27b['format'] || _0x568b24['format'] ? 'T' : '', _0x4ef45a = _0x12b9e2 ? '-' : '', _0x4cb741 = _0x4ef45a + 'P' + _0x496e96['format'] + _0x595385['format'] + _0x12e76d['format'] + _0x57da14 + _0x26a56c['format'] + _0xedb27b['format'] + _0x568b24['format'];
        return _0x465882['zveoj'](_0x4cb741, 'P') || _0x465882['fCcgF'](_0x4cb741, '-P') ? _0x465882['PFOJZ'] : _0x4cb741;
    }
    ['toJSON']() {
        return this['toISOString']();
    }
    ['format'](_0x227985) {
        const _0x502603 = {
                'JOgXy': function (_0x1b36b1, _0x4bb299) {
                    return _0x1b36b1 || _0x4bb299;
                },
                'MYIui': 'YYYY-MM-DDTHH:mm:ss'
            }, _0x34bdd6 = _0x502603['JOgXy'](_0x227985, _0x502603['MYIui']), _0x4bccc4 = {
                'Y': this['$d']['years'],
                'YY': $u['s'](this['$d']['years'], 0x2, '0'),
                'YYYY': $u['s'](this['$d']['years'], 0x4, '0'),
                'M': this['$d']['months'],
                'MM': $u['s'](this['$d']['months'], 0x2, '0'),
                'D': this['$d']['days'],
                'DD': $u['s'](this['$d']['days'], 0x2, '0'),
                'H': this['$d']['hours'],
                'HH': $u['s'](this['$d']['hours'], 0x2, '0'),
                'm': this['$d']['minutes'],
                'mm': $u['s'](this['$d']['minutes'], 0x2, '0'),
                's': this['$d']['seconds'],
                'ss': $u['s'](this['$d']['seconds'], 0x2, '0'),
                'SSS': $u['s'](this['$d']['milliseconds'], 0x3, '0')
            };
        return _0x34bdd6['replace'](REGEX_FORMAT, (_0x20fedc, _0x4f7b1b) => _0x4f7b1b || String(_0x4bccc4[_0x20fedc]));
    }
    ['as'](_0x2cda2d) {
        const _0xa5a485 = {
            'rdUiM': function (_0x2a0643, _0x619173) {
                return _0x2a0643 / _0x619173;
            },
            'DVFNE': function (_0x6c871f, _0x531e6c) {
                return _0x6c871f(_0x531e6c);
            }
        };
        return _0xa5a485['rdUiM'](this['$ms'], unitToMS[_0xa5a485['DVFNE'](prettyUnit, _0x2cda2d)]);
    }
    ['get'](_0x27eced) {
        const _0x358e33 = {
            'OcbZg': function (_0x4b1467, _0x3e4dee) {
                return _0x4b1467(_0x3e4dee);
            },
            'bOOWu': function (_0x2f0ae8, _0xfd0949) {
                return _0x2f0ae8 === _0xfd0949;
            },
            'xueRu': 'milliseconds',
            'aOPqZ': function (_0x3f6b7e, _0x10a53c) {
                return _0x3f6b7e === _0x10a53c;
            },
            'lgFGj': 'weeks',
            'SNlup': function (_0x158628, _0x4b6cec) {
                return _0x158628(_0x4b6cec);
            },
            'JAtsK': function (_0x3fe92c, _0x232610) {
                return _0x3fe92c / _0x232610;
            },
            'gJPAn': function (_0x1b9ef6, _0x49ce30) {
                return _0x1b9ef6 === _0x49ce30;
            }
        };
        let _0x33f52c = this['$ms'];
        const _0x453be8 = _0x358e33['OcbZg'](prettyUnit, _0x27eced);
        if (_0x358e33['bOOWu'](_0x453be8, _0x358e33['xueRu']))
            _0x33f52c %= 0x3e8;
        else
            _0x358e33['aOPqZ'](_0x453be8, _0x358e33['lgFGj']) ? _0x33f52c = _0x358e33['SNlup'](roundNumber, _0x358e33['JAtsK'](_0x33f52c, unitToMS[_0x453be8])) : _0x33f52c = this['$d'][_0x453be8];
        return _0x358e33['gJPAn'](_0x33f52c, 0x0) ? 0x0 : _0x33f52c;
    }
    ['add'](_0x1c817f, _0x90a052, _0x3fc509) {
        const _0x348826 = {
            'zpyRP': function (_0x4015c7, _0x4aa22f) {
                return _0x4015c7 * _0x4aa22f;
            },
            'JvhxB': function (_0x5e7d19, _0x718287) {
                return _0x5e7d19(_0x718287);
            },
            'Dygwk': function (_0x2d539d, _0x1ccd76) {
                return _0x2d539d(_0x1ccd76);
            },
            'YVZhT': function (_0x1345af, _0x44998c, _0x2b290f) {
                return _0x1345af(_0x44998c, _0x2b290f);
            },
            'qyVCK': function (_0x5ee1d6, _0x146222) {
                return _0x5ee1d6 + _0x146222;
            },
            'vgeKO': function (_0x2eefd1, _0x1500d1) {
                return _0x2eefd1 * _0x1500d1;
            }
        };
        let _0x3f5b20;
        if (_0x90a052)
            _0x3f5b20 = _0x348826['zpyRP'](_0x1c817f, unitToMS[_0x348826['JvhxB'](prettyUnit, _0x90a052)]);
        else
            _0x348826['Dygwk'](isDuration, _0x1c817f) ? _0x3f5b20 = _0x1c817f['$ms'] : _0x3f5b20 = _0x348826['YVZhT'](wrapper, _0x1c817f, this)['$ms'];
        return _0x348826['YVZhT'](wrapper, _0x348826['qyVCK'](this['$ms'], _0x348826['vgeKO'](_0x3f5b20, _0x3fc509 ? -0x1 : 0x1)), this);
    }
    ['subtract'](_0x3e48be, _0x22c8c7) {
        return this['add'](_0x3e48be, _0x22c8c7, !![]);
    }
    ['locale'](_0x301455) {
        const _0xfe2554 = this['clone']();
        return _0xfe2554['$l'] = _0x301455, _0xfe2554;
    }
    ['clone']() {
        const _0x5868df = {
            'tmzcq': function (_0xc11949, _0x44719c, _0x52c193) {
                return _0xc11949(_0x44719c, _0x52c193);
            }
        };
        return _0x5868df['tmzcq'](wrapper, this['$ms'], this);
    }
    ['humanize'](_0xea3b72) {
        const _0xbaa24c = {
            'wWujz': function (_0x29c4f2) {
                return _0x29c4f2();
            }
        };
        return _0xbaa24c['wWujz']($d)['add'](this['$ms'], 'ms')['locale'](this['$l'])['fromNow'](!_0xea3b72);
    }
    ['milliseconds']() {
        const _0x3359fc = { 'UdUaC': 'milliseconds' };
        return this['get'](_0x3359fc['UdUaC']);
    }
    ['asMilliseconds']() {
        const _0xf8e731 = { 'aCbFm': 'milliseconds' };
        return this['as'](_0xf8e731['aCbFm']);
    }
    ['seconds']() {
        const _0x2739d3 = { 'FqQTo': 'seconds' };
        return this['get'](_0x2739d3['FqQTo']);
    }
    ['asSeconds']() {
        const _0xfc42ba = { 'yBbcV': 'seconds' };
        return this['as'](_0xfc42ba['yBbcV']);
    }
    ['minutes']() {
        const _0x4e5d9d = { 'pvckl': 'minutes' };
        return this['get'](_0x4e5d9d['pvckl']);
    }
    ['asMinutes']() {
        const _0x5be888 = { 'yeSOr': 'minutes' };
        return this['as'](_0x5be888['yeSOr']);
    }
    ['hours']() {
        const _0x43eb7f = { 'PQNXU': 'hours' };
        return this['get'](_0x43eb7f['PQNXU']);
    }
    ['asHours']() {
        const _0x2b5f28 = { 'ngwQX': 'hours' };
        return this['as'](_0x2b5f28['ngwQX']);
    }
    ['days']() {
        const _0x4dce95 = { 'uxYqL': 'days' };
        return this['get'](_0x4dce95['uxYqL']);
    }
    ['asDays']() {
        const _0x306f29 = { 'CEsHK': 'days' };
        return this['as'](_0x306f29['CEsHK']);
    }
    ['weeks']() {
        const _0x2b72f8 = { 'BFAgJ': 'weeks' };
        return this['get'](_0x2b72f8['BFAgJ']);
    }
    ['asWeeks']() {
        const _0x4d29b8 = { 'lNzwJ': 'weeks' };
        return this['as'](_0x4d29b8['lNzwJ']);
    }
    ['months']() {
        const _0x1d058e = { 'VOCFG': 'months' };
        return this['get'](_0x1d058e['VOCFG']);
    }
    ['asMonths']() {
        const _0x1b40ac = { 'ZKQSb': 'months' };
        return this['as'](_0x1b40ac['ZKQSb']);
    }
    ['years']() {
        const _0x4098d2 = { 'ZcPIg': 'years' };
        return this['get'](_0x4098d2['ZcPIg']);
    }
    ['asYears']() {
        const _0x2ad58c = { 'WvsQL': 'years' };
        return this['as'](_0x2ad58c['WvsQL']);
    }
}
export default (_0x442b70, _0x1977c1, _0x1ce80d) => {
    const _0x3bd975 = {
        'LjXrI': function (_0x4177eb, _0x23cd3e, _0x466423, _0x44eb42) {
            return _0x4177eb(_0x23cd3e, _0x466423, _0x44eb42);
        },
        'LPCVb': function (_0x73a261, _0x59e77e) {
            return _0x73a261(_0x59e77e);
        },
        'cuAjp': function (_0x2b735d, _0x5cbcd2) {
            return _0x2b735d(_0x5cbcd2);
        },
        'jkXgL': function (_0x4f5cae) {
            return _0x4f5cae();
        }
    };
    $d = _0x1ce80d, $u = _0x3bd975['jkXgL'](_0x1ce80d)['$utils'](), _0x1ce80d['duration'] = function (_0xb6cfc5, _0x4975b9) {
        const _0x5a15d3 = _0x1ce80d['locale']();
        return _0x3bd975['LjXrI'](wrapper, _0xb6cfc5, { '$l': _0x5a15d3 }, _0x4975b9);
    }, _0x1ce80d['isDuration'] = isDuration;
    const _0x313adf = _0x1977c1['prototype']['add'], _0x556d86 = _0x1977c1['prototype']['subtract'];
    _0x1977c1['prototype']['add'] = function (_0x386c41, _0x5b91ce) {
        if (_0x3bd975['LPCVb'](isDuration, _0x386c41))
            _0x386c41 = _0x386c41['asMilliseconds']();
        return _0x313adf['bind'](this)(_0x386c41, _0x5b91ce);
    }, _0x1977c1['prototype']['subtract'] = function (_0x37ae49, _0x207ae0) {
        if (_0x3bd975['cuAjp'](isDuration, _0x37ae49))
            _0x37ae49 = _0x37ae49['asMilliseconds']();
        return _0x556d86['bind'](this)(_0x37ae49, _0x207ae0);
    };
};
