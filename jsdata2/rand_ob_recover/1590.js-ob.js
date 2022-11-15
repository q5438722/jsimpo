function _0x1c90(_0x3a6e56, _0x5781c3) {
    return _0x1c90 = function (_0x273877, _0x18e631) {
        _0x273877 = _0x273877 - (-21 * 63 + 9 * 4 + -1481 * -1);
        let _0x4dcc16 = _0x3b61[_0x273877];
        return _0x4dcc16;
    }, _0x1c90(_0x3a6e56, _0x5781c3);
}
const _ = require(_0x2605e7(206)), url = require(_0x2605e7(207)), path = require(_0x2605e7(208)), {Emitter, Disposable, CompositeDisposable} = require(_0x2605e7(209)), fs = require(_0x2605e7(210)), {Directory} = require(_0x2605e7(211)), Grim = require(_0x2605e7(212)), DefaultDirectorySearcher = require(_0x2605e7(213)), RipgrepDirectorySearcher = require(_0x2605e7(214)), Dock = require(_0x2605e7(215)), Model = require(_0x2605e7(216)), StateStore = require('./state-store'), TextEditor = require(_0x2605e7(217)), Panel = require('./panel'), PanelContainer = require(_0x2605e7(218)), Task = require(_0x2605e7(219)), WorkspaceCenter = require(_0x2605e7(220)), {createWorkspaceElement} = require(_0x2605e7(221)), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = -7030 + -729 + 7859, ALL_LOCATIONS = [
        'center',
        _0x2605e7(222),
        _0x2605e7(223),
        _0x2605e7(224)
    ];
module['exports'] = class Workspace extends Model {
    constructor(_0x5ee6a9) {
        const _0x2d555a = _0x2605e7, _0x28c3d8 = {
                'axcUz': '25|14|7|19|22|26|29|6|32|3|18|4|20|8|16|23|15|11|0|9|10|17|21|30|2|27|31|5|1|12|13|28|24',
                'SzAEn': _0x2d555a(222),
                'QmhKg': _0x2d555a(223),
                'nrbcB': 'AtomPreviousItemLocations',
                'kpUPF': 'top',
                'RmbFE': 'bottom',
                'SMQKe': _0x2d555a(225),
                'OHyBs': 'modal'
            }, _0x4318dc = _0x28c3d8[_0x2d555a(226)][_0x2d555a(227)]('|');
        let _0x47550d = -2492 * 2 + 3116 + 1868;
        while (!![]) {
            switch (_0x4318dc[_0x47550d++]) {
            case '0':
                this[_0x2d555a(228)] = _0x5ee6a9[_0x2d555a(228)];
                continue;
            case '1':
                this[_0x2d555a(229)] = {
                    'center': this[_0x2d555a(230)](),
                    'left': this[_0x2d555a(231)](_0x28c3d8[_0x2d555a(232)]),
                    'right': this[_0x2d555a(231)](_0x28c3d8[_0x2d555a(233)]),
                    'bottom': this[_0x2d555a(231)](_0x2d555a(224))
                };
                continue;
            case '2':
                this[_0x2d555a(234)] = null;
                continue;
            case '3':
                this['config'] = _0x5ee6a9[_0x2d555a(235)];
                continue;
            case '4':
                this[_0x2d555a(236)] = _0x5ee6a9[_0x2d555a(236)];
                continue;
            case '5':
                this['consumeServices'](this['packageManager']);
                continue;
            case '6':
                this[_0x2d555a(237)] = _0x5ee6a9[_0x2d555a(237)];
                continue;
            case '7':
                this[_0x2d555a(238)] = this[_0x2d555a(238)][_0x2d555a(239)](this);
                continue;
            case '8':
                this[_0x2d555a(240)] = _0x5ee6a9[_0x2d555a(240)];
                continue;
            case '9':
                this[_0x2d555a(241)] = ![];
                continue;
            case '10':
                this['itemLocationStore'] = new StateStore(_0x28c3d8[_0x2d555a(242)], -922 * 9 + 918 * 1 + 7381);
                continue;
            case '11':
                this[_0x2d555a(243)] = _0x5ee6a9[_0x2d555a(243)];
                continue;
            case '12':
                this[_0x2d555a(244)] = this[_0x2d555a(229)][_0x2d555a(245)];
                continue;
            case '13':
                this[_0x2d555a(246)] = ![];
                continue;
            case '14':
                this[_0x2d555a(247)] = this[_0x2d555a(247)]['bind'](this);
                continue;
            case '15':
                this['deserializerManager'] = _0x5ee6a9[_0x2d555a(248)];
                continue;
            case '16':
                this['applicationDelegate'] = _0x5ee6a9[_0x2d555a(249)];
                continue;
            case '17':
                this[_0x2d555a(250)] = new Emitter();
                continue;
            case '18':
                this[_0x2d555a(251)] = _0x5ee6a9[_0x2d555a(251)];
                continue;
            case '19':
                this[_0x2d555a(252)] = this[_0x2d555a(252)][_0x2d555a(239)](this);
                continue;
            case '20':
                this['viewRegistry'] = _0x5ee6a9[_0x2d555a(253)];
                continue;
            case '21':
                this[_0x2d555a(254)] = [];
                continue;
            case '22':
                this[_0x2d555a(255)] = this[_0x2d555a(255)][_0x2d555a(239)](this);
                continue;
            case '23':
                this[_0x2d555a(256)] = _0x5ee6a9[_0x2d555a(256)];
                continue;
            case '24':
                this['incoming'] = new Map();
                continue;
            case '25':
                super(...arguments);
                continue;
            case '26':
                this['didChangeActivePaneItemOnPaneContainer'] = this['didChangeActivePaneItemOnPaneContainer'][_0x2d555a(239)](this);
                continue;
            case '27':
                this[_0x2d555a(257)] = new DefaultDirectorySearcher();
                continue;
            case '28':
                this[_0x2d555a(258)] = {
                    'top': new PanelContainer({
                        'viewRegistry': this[_0x2d555a(253)],
                        'location': _0x28c3d8[_0x2d555a(259)]
                    }),
                    'left': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x28c3d8['SzAEn'],
                        'dock': this[_0x2d555a(229)][_0x2d555a(222)]
                    }),
                    'right': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x2d555a(223),
                        'dock': this['paneContainers']['right']
                    }),
                    'bottom': new PanelContainer({
                        'viewRegistry': this[_0x2d555a(253)],
                        'location': _0x28c3d8['RmbFE'],
                        'dock': this[_0x2d555a(229)][_0x2d555a(224)]
                    }),
                    'header': new PanelContainer({
                        'viewRegistry': this[_0x2d555a(253)],
                        'location': _0x28c3d8[_0x2d555a(260)]
                    }),
                    'footer': new PanelContainer({
                        'viewRegistry': this[_0x2d555a(253)],
                        'location': _0x2d555a(261)
                    }),
                    'modal': new PanelContainer({
                        'viewRegistry': this[_0x2d555a(253)],
                        'location': _0x28c3d8['OHyBs']
                    })
                };
                continue;
            case '29':
                this[_0x2d555a(262)] = this[_0x2d555a(262)][_0x2d555a(239)](this);
                continue;
            case '30':
                this[_0x2d555a(263)] = [];
                continue;
            case '31':
                this[_0x2d555a(264)] = new RipgrepDirectorySearcher();
                continue;
            case '32':
                this[_0x2d555a(265)] = _0x5ee6a9[_0x2d555a(265)];
                continue;
            }
            break;
        }
    }
    get [_0x2605e7(266)]() {
        const _0x5d38d3 = _0x2605e7;
        return Grim[_0x5d38d3(267)](_0x5d38d3(268)), this[_0x5d38d3(229)][_0x5d38d3(245)]['paneContainer'];
    }
    ['getElement']() {
        const _0x566ef6 = _0x2605e7;
        return !this[_0x566ef6(269)] && (this[_0x566ef6(269)] = createWorkspaceElement()[_0x566ef6(270)](this, {
            'config': this[_0x566ef6(235)],
            'project': this[_0x566ef6(251)],
            'viewRegistry': this[_0x566ef6(253)],
            'styleManager': this[_0x566ef6(228)]
        })), this[_0x566ef6(269)];
    }
    [_0x2605e7(230)]() {
        const _0x12dd3f = _0x2605e7;
        return new WorkspaceCenter({
            'config': this[_0x12dd3f(235)],
            'applicationDelegate': this[_0x12dd3f(249)],
            'notificationManager': this[_0x12dd3f(236)],
            'deserializerManager': this[_0x12dd3f(248)],
            'viewRegistry': this['viewRegistry'],
            'didActivate': this['didActivatePaneContainer'],
            'didChangeActivePane': this[_0x12dd3f(255)],
            'didChangeActivePaneItem': this[_0x12dd3f(271)],
            'didDestroyPaneItem': this[_0x12dd3f(252)]
        });
    }
    [_0x2605e7(231)](_0x4b00da) {
        const _0x508d6e = _0x2605e7;
        return new Dock({
            'location': _0x4b00da,
            'config': this[_0x508d6e(235)],
            'applicationDelegate': this[_0x508d6e(249)],
            'deserializerManager': this['deserializerManager'],
            'notificationManager': this[_0x508d6e(236)],
            'viewRegistry': this[_0x508d6e(253)],
            'didActivate': this[_0x508d6e(262)],
            'didChangeActivePane': this[_0x508d6e(255)],
            'didChangeActivePaneItem': this[_0x508d6e(271)],
            'didDestroyPaneItem': this[_0x508d6e(252)]
        });
    }
    [_0x2605e7(272)](_0x486bdc) {
        const _0x25fdd4 = _0x2605e7, _0x2fe666 = {
                'Vqubv': _0x25fdd4(273),
                'FOiaK': _0x25fdd4(274),
                'SlYQs': _0x25fdd4(222),
                'WAjJJ': 'bottom',
                'vXghr': _0x25fdd4(261),
                'GQnCC': _0x25fdd4(223)
            }, _0x28304c = _0x2fe666[_0x25fdd4(275)][_0x25fdd4(227)]('|');
        let _0x1e0cbb = 113 * -16 + 1347 * -3 + -5849 * -1;
        while (!![]) {
            switch (_0x28304c[_0x1e0cbb++]) {
            case '0':
                this[_0x25fdd4(250)][_0x25fdd4(276)]();
                continue;
            case '1':
                this[_0x25fdd4(250)] = new Emitter();
                continue;
            case '2':
                this[_0x25fdd4(254)] = [];
                continue;
            case '3':
                this['element'] && (this['element'][_0x25fdd4(277)](), this[_0x25fdd4(269)] = null);
                continue;
            case '4':
                this['destroyedItemURIs'] = [];
                continue;
            case '5':
                this['paneContainers']['left'][_0x25fdd4(277)]();
                continue;
            case '6':
                this['paneContainers'][_0x25fdd4(245)][_0x25fdd4(277)]();
                continue;
            case '7':
                this[_0x25fdd4(229)]['right'][_0x25fdd4(277)]();
                continue;
            case '8':
                this[_0x25fdd4(258)] = {
                    'top': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x2fe666[_0x25fdd4(278)]
                    }),
                    'left': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x2fe666[_0x25fdd4(279)],
                        'dock': this[_0x25fdd4(229)]['left']
                    }),
                    'right': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x25fdd4(223),
                        'dock': this[_0x25fdd4(229)][_0x25fdd4(223)]
                    }),
                    'bottom': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x2fe666[_0x25fdd4(280)],
                        'dock': this['paneContainers'][_0x25fdd4(224)]
                    }),
                    'header': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x25fdd4(225)
                    }),
                    'footer': new PanelContainer({
                        'viewRegistry': this[_0x25fdd4(253)],
                        'location': _0x2fe666[_0x25fdd4(281)]
                    }),
                    'modal': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x25fdd4(282)
                    })
                };
                continue;
            case '9':
                this[_0x25fdd4(246)] = ![];
                continue;
            case '10':
                this['consumeServices'](this[_0x25fdd4(265)]);
                continue;
            case '11':
                _[_0x25fdd4(283)](this['panelContainers'])[_0x25fdd4(284)](_0x22c4d1 => {
                    const _0x4160d9 = _0x25fdd4;
                    _0x22c4d1[_0x4160d9(277)]();
                });
                continue;
            case '12':
                this['activePaneContainer'] = this[_0x25fdd4(229)]['center'];
                continue;
            case '13':
                this[_0x25fdd4(229)] = {
                    'center': this[_0x25fdd4(230)](),
                    'left': this[_0x25fdd4(231)](_0x2fe666[_0x25fdd4(279)]),
                    'right': this[_0x25fdd4(231)](_0x2fe666[_0x25fdd4(285)]),
                    'bottom': this[_0x25fdd4(231)](_0x2fe666['WAjJJ'])
                };
                continue;
            case '14':
                this[_0x25fdd4(265)] = _0x486bdc;
                continue;
            case '15':
                this[_0x25fdd4(229)]['bottom'][_0x25fdd4(277)]();
                continue;
            }
            break;
        }
    }
    [_0x2605e7(270)]() {
        const _0x1e1d5c = _0x2605e7, _0x5eefbe = {
                'JxIdg': _0x1e1d5c(286),
                'IDqyb': _0x1e1d5c(287)
            }, _0x3b9ac7 = _0x5eefbe[_0x1e1d5c(288)][_0x1e1d5c(227)]('|');
        let _0x12734f = -9497 + 5560 * -1 + 15057;
        while (!![]) {
            switch (_0x3b9ac7[_0x12734f++]) {
            case '0':
                this[_0x1e1d5c(289)]();
                continue;
            case '1':
                this[_0x1e1d5c(290)]();
                continue;
            case '2':
                this[_0x1e1d5c(291)] = this[_0x1e1d5c(235)][_0x1e1d5c(292)](_0x5eefbe[_0x1e1d5c(293)]);
                continue;
            case '3':
                this['subscribeToDockToggling']();
                continue;
            case '4':
                this['project'][_0x1e1d5c(294)](this[_0x1e1d5c(247)]);
                continue;
            }
            break;
        }
    }
    [_0x2605e7(295)]({serviceHub: _0x4c3031}) {
        const _0x3ec7b4 = _0x2605e7, _0x5c8d51 = { 'FjmFy': 'atom.directory-searcher' };
        this[_0x3ec7b4(296)] = [], _0x4c3031['consume'](_0x5c8d51[_0x3ec7b4(297)], _0x3ec7b4(298), _0x5f15c2 => this['directorySearchers']['unshift'](_0x5f15c2));
    }
    [_0x2605e7(299)]() {
        const _0x93e28b = _0x2605e7, _0x48cc4f = { 'xqpJl': _0x93e28b(300) };
        return {
            'deserializer': _0x48cc4f[_0x93e28b(301)],
            'packagesWithActiveGrammars': this[_0x93e28b(302)](),
            'destroyedItemURIs': this[_0x93e28b(263)][_0x93e28b(303)](),
            'paneContainer': { 'version': 2 },
            'paneContainers': {
                'center': this[_0x93e28b(229)][_0x93e28b(245)][_0x93e28b(299)](),
                'left': this['paneContainers'][_0x93e28b(222)][_0x93e28b(299)](),
                'right': this['paneContainers'][_0x93e28b(223)]['serialize'](),
                'bottom': this['paneContainers'][_0x93e28b(224)][_0x93e28b(299)]()
            }
        };
    }
    ['deserialize'](_0x443a21, _0x1169bd) {
        const _0x2c1fd3 = _0x2605e7, _0x23db64 = {
                'sPvvq': function (_0x5339eb, _0x1d524a) {
                    return _0x5339eb != _0x1d524a;
                },
                'JvBmS': function (_0xe9606d, _0x16eca4) {
                    return _0xe9606d != _0x16eca4;
                },
                'WSdJF': function (_0x51b57a, _0x1b33f9) {
                    return _0x51b57a != _0x1b33f9;
                }
            }, _0x5e3c8a = _0x23db64['sPvvq'](_0x443a21[_0x2c1fd3(304)], null) ? _0x443a21[_0x2c1fd3(304)] : [];
        for (let _0x2a928c of _0x5e3c8a) {
            const _0x327e91 = this[_0x2c1fd3(265)][_0x2c1fd3(305)](_0x2a928c);
            _0x23db64[_0x2c1fd3(306)](_0x327e91, null) && _0x327e91[_0x2c1fd3(307)]();
        }
        _0x443a21[_0x2c1fd3(263)] != null && (this[_0x2c1fd3(263)] = _0x443a21[_0x2c1fd3(263)]);
        if (_0x443a21[_0x2c1fd3(229)])
            this['paneContainers'][_0x2c1fd3(245)][_0x2c1fd3(308)](_0x443a21[_0x2c1fd3(229)]['center'], _0x1169bd), this[_0x2c1fd3(229)]['left']['deserialize'](_0x443a21[_0x2c1fd3(229)][_0x2c1fd3(222)], _0x1169bd), this['paneContainers'][_0x2c1fd3(223)]['deserialize'](_0x443a21[_0x2c1fd3(229)]['right'], _0x1169bd), this[_0x2c1fd3(229)][_0x2c1fd3(224)][_0x2c1fd3(308)](_0x443a21[_0x2c1fd3(229)][_0x2c1fd3(224)], _0x1169bd);
        else
            _0x443a21[_0x2c1fd3(266)] && this[_0x2c1fd3(229)][_0x2c1fd3(245)][_0x2c1fd3(308)](_0x443a21['paneContainer'], _0x1169bd);
        this[_0x2c1fd3(246)] = _0x23db64['WSdJF'](this['getActiveTextEditor'](), null), this['updateWindowTitle']();
    }
    [_0x2605e7(302)]() {
        const _0x5c165c = _0x2605e7, _0xb65ebc = {
                'kecDL': function (_0x5a272f, _0x50a995) {
                    return _0x5a272f !== _0x50a995;
                },
                'emovX': function (_0x5db4c1, _0xa428db) {
                    return _0x5db4c1 != _0xa428db;
                },
                'Fvbsz': function (_0x56e1e3, _0x10f331) {
                    return _0x56e1e3(_0x10f331);
                },
                'hkQpN': function (_0x1c25e6, _0x4a8d86) {
                    return _0x1c25e6 > _0x4a8d86;
                },
                'zmSrJ': function (_0x4ffb80, _0x46abec) {
                    return _0x4ffb80(_0x46abec);
                }
            }, _0x35fef9 = [], _0x20026c = ({
                includedGrammarScopes: _0xf3ff6a,
                packageName: _0x1f89e9
            } = {}) => {
                const _0x5f4b92 = _0x1c90;
                if (!_0x1f89e9)
                    return;
                if (_0xb65ebc[_0x5f4b92(309)](_0x35fef9['indexOf'](_0x1f89e9), -(595 * 8 + -7329 * -1 + -12088)))
                    return;
                _0x35fef9[_0x5f4b92(310)](_0x1f89e9);
                for (let _0x3b8490 of _0xb65ebc[_0x5f4b92(311)](_0xf3ff6a, null) ? _0xf3ff6a : []) {
                    _0xb65ebc[_0x5f4b92(312)](_0x20026c, this[_0x5f4b92(240)]['grammarForScopeName'](_0x3b8490));
                }
            }, _0x5058e4 = this[_0x5c165c(313)]();
        for (let _0x3ede12 of _0x5058e4) {
            _0xb65ebc[_0x5c165c(312)](_0x20026c, _0x3ede12[_0x5c165c(314)]());
        }
        if (_0xb65ebc['hkQpN'](_0x5058e4[_0x5c165c(315)], -2448 * -2 + -1 * -8408 + -13304))
            for (let _0x5d73a6 of this[_0x5c165c(240)][_0x5c165c(316)]()) {
                _0x5d73a6[_0x5c165c(317)] && _0xb65ebc[_0x5c165c(318)](_0x20026c, _0x5d73a6);
            }
        return _[_0x5c165c(319)](_0x35fef9);
    }
    [_0x2605e7(262)](_0x5b55c1) {
        const _0x4e589a = _0x2605e7, _0xdb40da = {
                'FTfBC': function (_0x17836f, _0x15fa7b) {
                    return _0x17836f !== _0x15fa7b;
                },
                'hqbqk': _0x4e589a(320),
                'fmZGX': _0x4e589a(321),
                'Hpfkj': 'did-change-active-pane'
            };
        if (_0xdb40da[_0x4e589a(322)](_0x5b55c1, this['getActivePaneContainer']())) {
            const _0x2966a7 = _0x4e589a(323)[_0x4e589a(227)]('|');
            let _0x545f92 = -2965 * -1 + 21 * -453 + 6548;
            while (!![]) {
                switch (_0x2966a7[_0x545f92++]) {
                case '0':
                    this['activePaneContainer'] = _0x5b55c1;
                    continue;
                case '1':
                    this[_0x4e589a(250)][_0x4e589a(324)](_0xdb40da[_0x4e589a(325)], this['activePaneContainer'][_0x4e589a(326)]());
                    continue;
                case '2':
                    this[_0x4e589a(250)]['emit'](_0xdb40da[_0x4e589a(327)], this[_0x4e589a(244)]);
                    continue;
                case '3':
                    this['didChangeActivePaneItem'](this[_0x4e589a(244)][_0x4e589a(326)]());
                    continue;
                case '4':
                    this[_0x4e589a(250)][_0x4e589a(324)](_0xdb40da[_0x4e589a(328)], this[_0x4e589a(244)][_0x4e589a(329)]());
                    continue;
                }
                break;
            }
        }
    }
    ['didChangeActivePaneOnPaneContainer'](_0x95dc97, _0xa52afb) {
        const _0x50af4d = _0x2605e7, _0xe15694 = {
                'XqJpd': function (_0xa588f9, _0x511d02) {
                    return _0xa588f9 === _0x511d02;
                },
                'RckSA': _0x50af4d(330)
            };
        _0xe15694[_0x50af4d(331)](_0x95dc97, this['getActivePaneContainer']()) && this['emitter']['emit'](_0xe15694[_0x50af4d(332)], _0xa52afb);
    }
    ['didChangeActivePaneItemOnPaneContainer'](_0x3d38f4, _0x2f8ad6) {
        const _0x175c51 = _0x2605e7, _0x151147 = {
                'Fjuva': function (_0x37040c, _0x2005d9) {
                    return _0x37040c === _0x2005d9;
                },
                'hshqd': function (_0x2bf0bd, _0x174e46) {
                    return _0x2bf0bd instanceof _0x174e46;
                }
            };
        _0x151147[_0x175c51(333)](_0x3d38f4, this[_0x175c51(334)]()) && (this['didChangeActivePaneItem'](_0x2f8ad6), this[_0x175c51(250)]['emit'](_0x175c51(320), _0x2f8ad6));
        if (_0x3d38f4 === this['getCenter']()) {
            const _0x4b85b2 = this[_0x175c51(246)];
            this[_0x175c51(246)] = _0x151147[_0x175c51(335)](_0x2f8ad6, TextEditor);
            if (this[_0x175c51(246)] || _0x4b85b2) {
                const _0x2b25ed = this['hasActiveTextEditor'] ? _0x2f8ad6 : undefined;
                this[_0x175c51(250)][_0x175c51(324)](_0x175c51(336), _0x2b25ed);
            }
        }
    }
    ['didChangeActivePaneItem'](_0x517823) {
        const _0x3e8d61 = _0x2605e7, _0x360265 = {
                'rCqDv': _0x3e8d61(337),
                'llufx': 'modified-status-changed',
                'woEKt': function (_0x89cb29, _0x58e207) {
                    return _0x89cb29 != _0x58e207;
                },
                'pOnCl': _0x3e8d61(338),
                'tCVWR': function (_0x420530, _0x54d96c) {
                    return _0x420530 === _0x54d96c;
                },
                'TnOJM': function (_0x31d510, _0x203da2) {
                    return _0x31d510 == _0x203da2;
                },
                'fNJdN': function (_0x2f66cc, _0x24dce5) {
                    return _0x2f66cc !== _0x24dce5;
                },
                'wuoDy': function (_0x3f8bc9, _0x312bce) {
                    return _0x3f8bc9 != _0x312bce;
                },
                'Fkewj': function (_0x76ff31, _0x4197d0) {
                    return _0x76ff31 != _0x4197d0;
                },
                'sKRGd': function (_0x2a58ee, _0x56cb3b) {
                    return _0x2a58ee != _0x56cb3b;
                },
                'CygTS': function (_0x20083f, _0x12e335, _0x2cc8e4) {
                    return _0x20083f(_0x12e335, _0x2cc8e4);
                }
            };
        this[_0x3e8d61(247)](), this[_0x3e8d61(238)]();
        if (this['activeItemSubscriptions'])
            this['activeItemSubscriptions'][_0x3e8d61(276)]();
        this[_0x3e8d61(339)] = new CompositeDisposable();
        let _0x414a9f, _0x4fc322;
        if (_0x360265[_0x3e8d61(340)](_0x517823, null) && typeof _0x517823[_0x3e8d61(341)] === _0x360265[_0x3e8d61(342)])
            _0x4fc322 = _0x517823[_0x3e8d61(341)](this[_0x3e8d61(247)]);
        else
            _0x360265['woEKt'](_0x517823, null) && _0x360265['tCVWR'](typeof _0x517823['on'], _0x360265[_0x3e8d61(342)]) && (_0x4fc322 = _0x517823['on'](_0x360265[_0x3e8d61(343)], this['updateWindowTitle']), (_0x360265[_0x3e8d61(344)](_0x4fc322, null) || _0x360265[_0x3e8d61(345)](typeof _0x4fc322[_0x3e8d61(276)], _0x360265[_0x3e8d61(342)])) && (_0x4fc322 = new Disposable(() => {
                const _0x5b1d92 = _0x3e8d61;
                _0x517823[_0x5b1d92(346)](_0x360265['rCqDv'], this['updateWindowTitle']);
            })));
        if (_0x360265[_0x3e8d61(347)](_0x517823, null) && _0x360265[_0x3e8d61(348)](typeof _0x517823[_0x3e8d61(349)], _0x360265['pOnCl']))
            _0x414a9f = _0x517823[_0x3e8d61(349)](this[_0x3e8d61(238)]);
        else
            _0x517823 != null && _0x360265[_0x3e8d61(348)](typeof _0x517823['on'], _0x360265['pOnCl']) && (_0x414a9f = _0x517823['on'](_0x360265['llufx'], this[_0x3e8d61(238)]), (_0x360265[_0x3e8d61(344)](_0x414a9f, null) || _0x360265['fNJdN'](typeof _0x414a9f[_0x3e8d61(276)], _0x360265['pOnCl'])) && (_0x414a9f = new Disposable(() => {
                const _0x98cb6 = _0x3e8d61;
                _0x517823['off'](_0x360265[_0x98cb6(350)], this[_0x98cb6(238)]);
            })));
        _0x360265[_0x3e8d61(351)](_0x4fc322, null) && this[_0x3e8d61(339)]['add'](_0x4fc322), _0x360265[_0x3e8d61(352)](_0x414a9f, null) && this['activeItemSubscriptions'][_0x3e8d61(353)](_0x414a9f), this[_0x3e8d61(354)](), this[_0x3e8d61(234)] = _0x360265[_0x3e8d61(355)](setTimeout, () => {
            const _0x34fdcb = _0x3e8d61;
            this['stoppedChangingActivePaneItemTimeout'] = null, this[_0x34fdcb(250)][_0x34fdcb(324)](_0x34fdcb(356), _0x517823);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    ['cancelStoppedChangingActivePaneItemTimeout']() {
        const _0x10fbc3 = _0x2605e7, _0x7ce262 = {
                'wDWfx': function (_0x249731, _0x19376c) {
                    return _0x249731 != _0x19376c;
                },
                'JPosP': function (_0x59bf32, _0x405cb7) {
                    return _0x59bf32(_0x405cb7);
                }
            };
        _0x7ce262[_0x10fbc3(357)](this[_0x10fbc3(234)], null) && _0x7ce262[_0x10fbc3(358)](clearTimeout, this[_0x10fbc3(234)]);
    }
    [_0x2605e7(359)](_0x12d2c6) {
        const _0x3e88ac = _0x2605e7;
        _[_0x3e88ac(283)](this['paneContainers'])['forEach'](_0x4bc924 => {
            const _0x178b59 = _0x3e88ac;
            _0x4bc924[_0x178b59(359)](_0x12d2c6);
        });
    }
    ['subscribeToAddedItems']() {
        const _0x426a7a = _0x2605e7, _0x437448 = {
                'FdobM': function (_0x330753, _0x25e846) {
                    return _0x330753 instanceof _0x25e846;
                }
            };
        this[_0x426a7a(360)](({
            item: _0x4d95d7,
            pane: _0x2760ed,
            index: _0xef8068
        }) => {
            const _0x446f52 = _0x426a7a;
            if (_0x437448['FdobM'](_0x4d95d7, TextEditor)) {
                const _0xf7407 = new CompositeDisposable(this[_0x446f52(243)]['add'](_0x4d95d7), this[_0x446f52(243)][_0x446f52(361)](_0x4d95d7));
                !this['project'][_0x446f52(362)](_0x4d95d7[_0x446f52(363)]['id']) && this['project']['addBuffer'](_0x4d95d7[_0x446f52(363)]), _0x4d95d7['onDidDestroy'](() => {
                    _0xf7407['dispose']();
                }), this[_0x446f52(250)]['emit'](_0x446f52(364), {
                    'textEditor': _0x4d95d7,
                    'pane': _0x2760ed,
                    'index': _0xef8068
                }), !_0x4d95d7[_0x446f52(365)]() && _0xf7407[_0x446f52(353)](_0x4d95d7[_0x446f52(366)](this['handleGrammarUsed'][_0x446f52(239)](this)));
            }
        });
    }
    [_0x2605e7(367)]() {
        const _0x21cb9f = _0x2605e7, _0x2a867b = {
                'sRrPd': function (_0x2d3d13, _0x3355eb) {
                    return _0x2d3d13 === _0x3355eb;
                }
            }, _0x472f1b = [
                this['getLeftDock'](),
                this['getRightDock'](),
                this[_0x21cb9f(368)]()
            ];
        _0x472f1b[_0x21cb9f(284)](_0x454be1 => {
            const _0x5099b5 = _0x21cb9f;
            _0x454be1[_0x5099b5(369)](_0x35a3e5 => {
                const _0x2b8014 = _0x5099b5;
                if (_0x35a3e5)
                    return;
                const {activeElement: _0x27b9ca} = document, _0x25d798 = _0x454be1[_0x2b8014(370)]();
                (_0x2a867b[_0x2b8014(371)](_0x25d798, _0x27b9ca) || _0x25d798['contains'](_0x27b9ca)) && this[_0x2b8014(372)]()[_0x2b8014(373)]();
            });
        });
    }
    [_0x2605e7(290)]() {
        const _0x17bfe6 = _0x2605e7, _0x188809 = {
                'vXmkz': _0x17bfe6(338),
                'mZXOA': function (_0xa7cd45, _0x1ef606) {
                    return _0xa7cd45 === _0x1ef606;
                },
                'bbqcw': function (_0xb425d0, _0x153fba) {
                    return _0xb425d0 || _0x153fba;
                },
                'JlVns': _0x17bfe6(245)
            };
        for (const _0x38e5d4 of this[_0x17bfe6(374)]()) {
            _0x38e5d4[_0x17bfe6(375)](_0x3e46d9 => {
                const _0x1088f2 = _0x17bfe6;
                _0x3e46d9[_0x1088f2(376)](({item: _0x471487}) => {
                    const _0x401876 = _0x1088f2;
                    if (typeof _0x471487[_0x401876(377)] === _0x188809['vXmkz'] && this[_0x401876(237)]) {
                        const _0x49d925 = _0x471487[_0x401876(377)]();
                        if (_0x49d925) {
                            const _0x146701 = _0x38e5d4[_0x401876(378)]();
                            let _0x224a7b;
                            _0x188809[_0x401876(379)](typeof _0x471487[_0x401876(380)], _0x188809[_0x401876(381)]) && (_0x224a7b = _0x471487[_0x401876(380)]()), _0x224a7b = _0x188809['bbqcw'](_0x224a7b, _0x188809['JlVns']), _0x188809[_0x401876(379)](_0x146701, _0x224a7b) ? this[_0x401876(382)][_0x401876(383)](_0x471487[_0x401876(377)]()) : this['itemLocationStore'][_0x401876(384)](_0x471487['getURI'](), _0x146701);
                        }
                    }
                });
            });
        }
    }
    [_0x2605e7(247)]() {
        const _0x2de379 = _0x2605e7, _0x2750bc = {
                'fBkRH': function (_0x50311f, _0x3da5c5) {
                    return _0x50311f != _0x3da5c5;
                },
                'PeAXn': function (_0x4c0641, _0x1ee83c) {
                    return _0x4c0641 === _0x1ee83c;
                },
                'LOniS': function (_0x59404d, _0x537f98) {
                    return _0x59404d === _0x537f98;
                },
                'aSfsE': _0x2de379(338),
                'pUoWw': function (_0x4789fd, _0x1c8744) {
                    return _0x4789fd == _0x1c8744;
                },
                'DzKkp': _0x2de379(385),
                'kPnTb': function (_0x562082, _0xf27773) {
                    return _0x562082 != _0xf27773;
                },
                'joFrE': function (_0x30f705, _0x47b8cd) {
                    return _0x30f705 != _0x47b8cd;
                },
                'GmuZR': function (_0x5ac3b1, _0x62c041) {
                    return _0x5ac3b1 != _0x62c041;
                }
            };
        let _0x215903, _0x8944d8, _0x104ed0, _0x421cd5;
        const _0x1c7389 = atom[_0x2de379(386)](), _0x39070 = this[_0x2de379(251)][_0x2de379(387)](), _0x43d2c2 = _0x2750bc['fBkRH'](_0x39070, null) ? _0x39070 : [], _0x53277e = this['getActivePaneItem']();
        if (_0x53277e) {
            _0x215903 = _0x2750bc[_0x2de379(388)](typeof _0x53277e[_0x2de379(389)], _0x2de379(338)) ? _0x53277e['getPath']() : undefined;
            const _0x3c9a3f = _0x2750bc[_0x2de379(390)](typeof _0x53277e[_0x2de379(391)], _0x2750bc[_0x2de379(392)]) ? _0x53277e['getLongTitle']() : undefined;
            _0x8944d8 = _0x2750bc[_0x2de379(393)](_0x3c9a3f, null) ? _0x2750bc[_0x2de379(390)](typeof _0x53277e[_0x2de379(394)], _0x2750bc[_0x2de379(392)]) ? _0x53277e[_0x2de379(394)]() : undefined : _0x3c9a3f, _0x104ed0 = _['find'](_0x43d2c2, _0x46793b => _0x215903 === _0x46793b || (_0x215903 != null ? _0x215903['startsWith'](_0x46793b + path[_0x2de379(395)]) : undefined));
        }
        _0x2750bc[_0x2de379(393)](_0x8944d8, null) && (_0x8944d8 = _0x2750bc[_0x2de379(396)]);
        _0x104ed0 == null && (_0x104ed0 = _0x215903 ? path[_0x2de379(397)](_0x215903) : _0x43d2c2[3678 + -2793 + -885]);
        _0x2750bc[_0x2de379(398)](_0x104ed0, null) && (_0x104ed0 = fs[_0x2de379(399)](_0x104ed0));
        const _0xdce2b2 = [];
        if (_0x53277e != null && _0x2750bc['joFrE'](_0x104ed0, null))
            _0xdce2b2[_0x2de379(310)](_0x8944d8, _0x104ed0), _0x421cd5 = _0x2750bc['GmuZR'](_0x215903, null) ? _0x215903 : _0x104ed0;
        else
            _0x2750bc[_0x2de379(400)](_0x104ed0, null) ? (_0xdce2b2[_0x2de379(310)](_0x104ed0), _0x421cd5 = _0x104ed0) : (_0xdce2b2[_0x2de379(310)](_0x8944d8), _0x421cd5 = '');
        process[_0x2de379(401)] !== _0x2de379(402) && _0xdce2b2[_0x2de379(310)](_0x1c7389), document[_0x2de379(403)] = _0xdce2b2['join'](_0x2de379(404)), this[_0x2de379(249)][_0x2de379(405)](_0x421cd5), this[_0x2de379(250)]['emit'](_0x2de379(406));
    }
    [_0x2605e7(238)]() {
        const _0x5ebb44 = _0x2605e7, _0x13c444 = {
                'XVAzD': function (_0x28087a, _0x452459) {
                    return _0x28087a != _0x452459;
                },
                'OuGQQ': 'function'
            }, _0x37fa7a = this['getActivePaneItem'](), _0x14468e = _0x13c444['XVAzD'](_0x37fa7a, null) && typeof _0x37fa7a[_0x5ebb44(407)] === _0x13c444[_0x5ebb44(408)] ? _0x37fa7a['isModified']() || ![] : ![];
        this[_0x5ebb44(249)][_0x5ebb44(409)](_0x14468e);
    }
    [_0x2605e7(410)](_0x210aa2) {
        const _0x473e23 = _0x2605e7;
        return this[_0x473e23(250)]['on'](_0x473e23(321), _0x210aa2);
    }
    [_0x2605e7(411)](_0x432044) {
        const _0xf2288 = _0x2605e7, _0x1e6a9b = {
                'kGZvq': function (_0x380e7b, _0x23e01d) {
                    return _0x380e7b(_0x23e01d);
                }
            };
        for (let _0x5c26ff of this[_0xf2288(313)]()) {
            _0x1e6a9b[_0xf2288(412)](_0x432044, _0x5c26ff);
        }
        return this['onDidAddTextEditor'](({textEditor: _0x2dd957}) => _0x432044(_0x2dd957));
    }
    [_0x2605e7(413)](_0x93d2aa) {
        const _0x2b8845 = _0x2605e7;
        return new CompositeDisposable(...this['getPaneContainers']()[_0x2b8845(414)](_0x4f1c03 => _0x4f1c03[_0x2b8845(413)](_0x93d2aa)));
    }
    [_0x2605e7(415)](_0x2d5a7e) {
        const _0x27d291 = _0x2605e7, _0x5b910c = { 'aMabD': _0x27d291(320) };
        return this['emitter']['on'](_0x5b910c[_0x27d291(416)], _0x2d5a7e);
    }
    ['onDidStopChangingActivePaneItem'](_0x3e6f07) {
        return this['emitter']['on']('did-stop-changing-active-pane-item', _0x3e6f07);
    }
    [_0x2605e7(417)](_0x393f3a) {
        const _0xb4060e = _0x2605e7, _0x1b7bdd = { 'HBeRf': _0xb4060e(336) };
        return this[_0xb4060e(250)]['on'](_0x1b7bdd[_0xb4060e(418)], _0x393f3a);
    }
    [_0x2605e7(419)](_0x9ac3bc) {
        return _0x9ac3bc(this['getActivePaneItem']()), this['onDidChangeActivePaneItem'](_0x9ac3bc);
    }
    [_0x2605e7(420)](_0x1808c7) {
        const _0x107375 = _0x2605e7, _0x36ea41 = {
                'GICLD': function (_0x52d179, _0x5928aa) {
                    return _0x52d179(_0x5928aa);
                }
            };
        return _0x36ea41[_0x107375(421)](_0x1808c7, this['getActiveTextEditor']()), this[_0x107375(417)](_0x1808c7);
    }
    [_0x2605e7(422)](_0x24498b) {
        const _0x4a741b = _0x2605e7, _0x747f99 = { 'pPIeE': _0x4a741b(423) };
        return this[_0x4a741b(250)]['on'](_0x747f99[_0x4a741b(424)], _0x24498b);
    }
    ['onDidAddPane'](_0x188f68) {
        const _0x30322f = _0x2605e7;
        return new CompositeDisposable(...this['getPaneContainers']()[_0x30322f(414)](_0x2c7139 => _0x2c7139[_0x30322f(425)](_0x188f68)));
    }
    [_0x2605e7(426)](_0x5955b7) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x46f96e => _0x46f96e['onWillDestroyPane'](_0x5955b7)));
    }
    [_0x2605e7(427)](_0x2dc6b5) {
        const _0x10f6a7 = _0x2605e7;
        return new CompositeDisposable(...this[_0x10f6a7(374)]()[_0x10f6a7(414)](_0x2ecf45 => _0x2ecf45['onDidDestroyPane'](_0x2dc6b5)));
    }
    [_0x2605e7(375)](_0xe1d5fc) {
        const _0x2a6ee9 = _0x2605e7;
        return new CompositeDisposable(...this[_0x2a6ee9(374)]()[_0x2a6ee9(414)](_0x4db437 => _0x4db437['observePanes'](_0xe1d5fc)));
    }
    ['onDidChangeActivePane'](_0x5674ee) {
        const _0x4d45bc = _0x2605e7, _0x534c31 = { 'GXDtm': _0x4d45bc(330) };
        return this[_0x4d45bc(250)]['on'](_0x534c31[_0x4d45bc(428)], _0x5674ee);
    }
    [_0x2605e7(429)](_0x381275) {
        const _0x94ffdd = _0x2605e7;
        return _0x381275(this[_0x94ffdd(329)]()), this[_0x94ffdd(430)](_0x381275);
    }
    [_0x2605e7(360)](_0x55d1f9) {
        const _0x4f9dda = _0x2605e7;
        return new CompositeDisposable(...this[_0x4f9dda(374)]()[_0x4f9dda(414)](_0x2c766d => _0x2c766d[_0x4f9dda(360)](_0x55d1f9)));
    }
    [_0x2605e7(431)](_0x1e401f) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x3bfd3f => _0x3bfd3f['onWillDestroyPaneItem'](_0x1e401f)));
    }
    ['onDidDestroyPaneItem'](_0x247f10) {
        const _0x148f64 = _0x2605e7;
        return new CompositeDisposable(...this[_0x148f64(374)]()[_0x148f64(414)](_0x1c14f4 => _0x1c14f4[_0x148f64(432)](_0x247f10)));
    }
    [_0x2605e7(433)](_0x49ac84) {
        const _0x4c9b5c = _0x2605e7, _0x4f9442 = { 'bFCsJ': _0x4c9b5c(364) };
        return this['emitter']['on'](_0x4f9442[_0x4c9b5c(434)], _0x49ac84);
    }
    [_0x2605e7(435)](_0x5b7c48) {
        const _0x30fc90 = { 'bTvWY': 'did-change-window-title' };
        return this['emitter']['on'](_0x30fc90['bTvWY'], _0x5b7c48);
    }
    async _0x2605e7(436)(_0x1236e9, _0x4b1d82 = {}) {
        const _0xbe979c = _0x2605e7, _0x213cf8 = {
                'abdry': function (_0x474ba9, _0x14d444) {
                    return _0x474ba9 === _0x14d444;
                },
                'LsGzp': _0xbe979c(437),
                'NvGoI': _0xbe979c(338),
                'ozyqo': _0xbe979c(438),
                'NATWy': function (_0x9fc35f, _0x17e7ab) {
                    return _0x9fc35f || _0x17e7ab;
                },
                'aJnlh': _0xbe979c(222),
                'npzlV': _0xbe979c(439),
                'TGqRV': function (_0x4cb105, _0x4280ad) {
                    return _0x4cb105 != _0x4280ad;
                },
                'LGFbv': function (_0x5335bc, _0x3d5e29) {
                    return _0x5335bc === _0x3d5e29;
                },
                'TLngM': _0xbe979c(223),
                'loaCZ': function (_0xd3290b, _0x10249f) {
                    return _0xd3290b === _0x10249f;
                },
                'tWHHY': function (_0xb8ce00, _0x41aa39) {
                    return _0xb8ce00 !== _0x41aa39;
                },
                'oAHGz': function (_0x1ae30b, _0x3de5ef) {
                    return _0x1ae30b >= _0x3de5ef;
                },
                'VRpHY': function (_0x7889de, _0x3eaaee) {
                    return _0x7889de === _0x3eaaee;
                },
                'qoJHE': _0xbe979c(423),
                'roPXP': function (_0x530e77) {
                    return _0x530e77();
                }
            };
        let _0x13e479, _0x88d9a2;
        if (_0x213cf8[_0xbe979c(440)](typeof _0x1236e9, _0x213cf8['LsGzp']))
            _0x13e479 = this[_0xbe979c(251)][_0xbe979c(441)](_0x1236e9);
        else {
            if (_0x1236e9) {
                _0x88d9a2 = _0x1236e9;
                if (typeof _0x88d9a2[_0xbe979c(377)] === _0x213cf8['NvGoI'])
                    _0x13e479 = _0x88d9a2[_0xbe979c(377)]();
            }
        }
        let _0x1b0625 = () => {
        };
        if (_0x13e479) {
            const _0x4cec28 = this[_0xbe979c(442)][_0xbe979c(292)](_0x13e479);
            !_0x4cec28 ? this[_0xbe979c(442)][_0xbe979c(443)](_0x13e479, new Promise(_0x172402 => {
                _0x1b0625 = _0x172402;
            })) : await _0x4cec28;
        }
        try {
            !atom[_0xbe979c(235)][_0xbe979c(292)](_0x213cf8['ozyqo']) && (_0x4b1d82[_0xbe979c(444)] = ![]);
            _0x13e479 && (!url[_0xbe979c(445)](_0x13e479)['protocol'] || _0x213cf8['abdry'](process[_0xbe979c(401)], _0xbe979c(446))) && this[_0xbe979c(249)][_0xbe979c(447)](_0x13e479);
            let _0x4452da, _0x1acc8e;
            if (_0x213cf8[_0xbe979c(448)](_0x88d9a2, _0x13e479)) {
                if (_0x4b1d82['pane'])
                    _0x4452da = _0x4b1d82[_0xbe979c(449)];
                else {
                    if (_0x4b1d82[_0xbe979c(450)])
                        _0x4452da = _0x88d9a2 ? this[_0xbe979c(451)](_0x88d9a2) : this['paneForURI'](_0x13e479);
                    else {
                        let _0x552c17;
                        if (_0x13e479)
                            _0x552c17 = this['paneContainerForURI'](_0x13e479);
                        if (!_0x552c17)
                            _0x552c17 = this['getActivePaneContainer']();
                        _0x4452da = _0x552c17[_0xbe979c(329)]();
                        switch (_0x4b1d82[_0xbe979c(227)]) {
                        case _0x213cf8[_0xbe979c(452)]:
                            _0x4452da = _0x4452da['findLeftmostSibling']();
                            break;
                        case _0xbe979c(223):
                            _0x4452da = _0x4452da['findRightmostSibling']();
                            break;
                        case 'up':
                            _0x4452da = _0x4452da[_0xbe979c(453)]();
                            break;
                        case _0x213cf8[_0xbe979c(454)]:
                            _0x4452da = _0x4452da[_0xbe979c(455)]();
                            break;
                        }
                    }
                }
                _0x4452da && (_0x88d9a2 ? _0x1acc8e = _0x4452da[_0xbe979c(456)]()[_0xbe979c(457)](_0x88d9a2) : (_0x88d9a2 = _0x4452da[_0xbe979c(458)](_0x13e479), _0x1acc8e = _0x213cf8['TGqRV'](_0x88d9a2, null)));
            }
            if (_0x88d9a2)
                await Promise[_0xbe979c(459)]();
            if (!_0x1acc8e) {
                _0x88d9a2 = _0x88d9a2 || await this['createItemForURI'](_0x13e479, _0x4b1d82);
                if (!_0x88d9a2)
                    return;
                if (_0x4b1d82[_0xbe979c(449)])
                    _0x4452da = _0x4b1d82[_0xbe979c(449)];
                else {
                    let _0x3800ad = _0x4b1d82[_0xbe979c(460)];
                    !_0x3800ad && !_0x4b1d82[_0xbe979c(227)] && _0x13e479 && this[_0xbe979c(237)] && (_0x3800ad = await this[_0xbe979c(382)][_0xbe979c(461)](_0x13e479));
                    !_0x3800ad && _0x213cf8['abdry'](typeof _0x88d9a2[_0xbe979c(380)], _0x213cf8[_0xbe979c(462)]) && (_0x3800ad = _0x88d9a2[_0xbe979c(380)]());
                    const _0x5e29a5 = _0x213cf8[_0xbe979c(463)](typeof _0x88d9a2[_0xbe979c(464)], _0x213cf8[_0xbe979c(462)]) ? _0x88d9a2[_0xbe979c(464)]() : ALL_LOCATIONS;
                    _0x3800ad = _0x5e29a5['includes'](_0x3800ad) ? _0x3800ad : _0x5e29a5[-17 * 163 + 6 * 283 + 1073];
                    const _0x48a8dd = this[_0xbe979c(229)][_0x3800ad] || this[_0xbe979c(372)]();
                    _0x4452da = _0x48a8dd[_0xbe979c(329)]();
                    switch (_0x4b1d82[_0xbe979c(227)]) {
                    case _0xbe979c(222):
                        _0x4452da = _0x4452da[_0xbe979c(465)]();
                        break;
                    case _0x213cf8[_0xbe979c(466)]:
                        _0x4452da = _0x4452da[_0xbe979c(467)]();
                        break;
                    case 'up':
                        _0x4452da = _0x4452da[_0xbe979c(453)]();
                        break;
                    case _0x213cf8['npzlV']:
                        _0x4452da = _0x4452da[_0xbe979c(468)]();
                        break;
                    }
                }
            }
            !_0x4b1d82[_0xbe979c(444)] && _0x213cf8[_0xbe979c(463)](_0x4452da[_0xbe979c(469)](), _0x88d9a2) && _0x4452da[_0xbe979c(470)]();
            this[_0xbe979c(471)](_0x88d9a2);
            _0x213cf8[_0xbe979c(472)](_0x4b1d82[_0xbe979c(473)], ![]) ? _0x4452da[_0xbe979c(474)](_0x88d9a2, { 'pending': _0x4b1d82[_0xbe979c(444)] }) : _0x4452da['activateItem'](_0x88d9a2, { 'pending': _0x4b1d82[_0xbe979c(444)] });
            _0x213cf8['tWHHY'](_0x4b1d82[_0xbe979c(475)], ![]) && _0x4452da['activate']();
            let _0x515c50 = 2145 + -7230 + -565 * -9, _0x32a0da = 244 * 6 + 4237 + -1 * 5701;
            !Number[_0xbe979c(476)](_0x4b1d82[_0xbe979c(477)]) && (_0x32a0da = _0x4b1d82[_0xbe979c(477)]);
            !Number[_0xbe979c(476)](_0x4b1d82['initialColumn']) && (_0x515c50 = _0x4b1d82['initialColumn']);
            (_0x213cf8[_0xbe979c(478)](_0x32a0da, 381 * -5 + -52 + 1957) || _0x213cf8[_0xbe979c(478)](_0x515c50, -3914 * -1 + 4 * 2066 + -12178)) && (_0x213cf8[_0xbe979c(479)](typeof _0x88d9a2[_0xbe979c(480)], _0xbe979c(338)) && _0x88d9a2[_0xbe979c(480)]([
                _0x32a0da,
                _0x515c50
            ]), typeof _0x88d9a2[_0xbe979c(481)] === _0xbe979c(338) && _0x88d9a2['unfoldBufferRow'](_0x32a0da), typeof _0x88d9a2[_0xbe979c(482)] === _0x213cf8[_0xbe979c(462)] && _0x88d9a2['scrollToBufferPosition']([
                _0x32a0da,
                _0x515c50
            ], { 'center': !![] }));
            const _0x48f98a = _0x4452da['getActiveItemIndex']();
            this['emitter'][_0xbe979c(324)](_0x213cf8['qoJHE'], {
                'uri': _0x13e479,
                'pane': _0x4452da,
                'item': _0x88d9a2,
                'index': _0x48f98a
            }), _0x13e479 && this[_0xbe979c(442)][_0xbe979c(383)](_0x13e479);
        } finally {
            _0x213cf8['roPXP'](_0x1b0625);
        }
        return _0x88d9a2;
    }
    [_0x2605e7(483)](_0x397de2) {
        const _0x139a41 = _0x2605e7, _0x380a6e = {
                'FNtVV': function (_0x13f8a1, _0x3d090a) {
                    return _0x13f8a1 === _0x3d090a;
                },
                'hVAxI': function (_0x52b4c7, _0x5547ae) {
                    return _0x52b4c7 === _0x5547ae;
                }
            };
        let _0x5689ba = ![];
        for (const _0x5d42ac of this[_0x139a41(374)]()) {
            const _0x72910f = _0x380a6e[_0x139a41(484)](_0x5d42ac, this['getCenter']());
            if (_0x72910f || _0x5d42ac[_0x139a41(485)]())
                for (const _0x327a67 of _0x5d42ac['getPanes']()) {
                    const _0x4cbe33 = _0x327a67[_0x139a41(486)](), _0x5cb795 = _0x4cbe33 != null && (_0x380a6e[_0x139a41(484)](_0x4cbe33, _0x397de2) || _0x380a6e[_0x139a41(487)](typeof _0x4cbe33[_0x139a41(377)], _0x139a41(338)) && _0x380a6e[_0x139a41(487)](_0x4cbe33[_0x139a41(377)](), _0x397de2));
                    _0x5cb795 && (_0x5689ba = !![], _0x72910f ? _0x327a67['destroyItem'](_0x4cbe33) : _0x5d42ac[_0x139a41(483)]());
                }
        }
        return _0x5689ba;
    }
    [_0x2605e7(488)](_0x2146f3) {
        const _0x2742bf = _0x2605e7;
        return this['hide'](_0x2146f3) ? Promise[_0x2742bf(459)]() : this[_0x2742bf(436)](_0x2146f3, { 'searchAllPanes': !![] });
    }
    ['openLicense']() {
        const _0x48a09f = _0x2605e7, _0x3866b9 = { 'rYgWK': _0x48a09f(489) };
        return this[_0x48a09f(436)](path['join'](process['resourcesPath'], _0x3866b9[_0x48a09f(490)]));
    }
    [_0x2605e7(491)](_0x535ac0 = '', _0x2f2686 = {}) {
        const _0x13ecb0 = _0x2605e7, _0x49357a = {
                'ncGWh': function (_0x17cf49, _0x1f1229) {
                    return _0x17cf49 != _0x1f1229;
                },
                'wBNZk': function (_0xce90ad, _0x6de0c) {
                    return _0xce90ad == _0x6de0c;
                }
            }, {
                initialLine: _0x306a10,
                initialColumn: _0x1fa250
            } = _0x2f2686, _0x4e7cea = _0x49357a[_0x13ecb0(492)](_0x2f2686[_0x13ecb0(475)], null) ? _0x2f2686[_0x13ecb0(475)] : !![], _0x21525d = _0x49357a['ncGWh'](_0x2f2686[_0x13ecb0(473)], null) ? _0x2f2686['activateItem'] : !![], _0x4d787a = this['project'][_0x13ecb0(441)](_0x535ac0);
        let _0x1a6bd1 = this[_0x13ecb0(329)]()['itemForURI'](_0x4d787a);
        if (_0x4d787a && _0x1a6bd1 == null)
            for (const _0x3bce33 of this[_0x13ecb0(493)]()) {
                _0x1a6bd1 = _0x3bce33(_0x4d787a, _0x2f2686);
                if (_0x1a6bd1)
                    break;
            }
        return _0x49357a[_0x13ecb0(494)](_0x1a6bd1, null) && (_0x1a6bd1 = this[_0x13ecb0(251)][_0x13ecb0(491)](_0x4d787a, {
            'initialLine': _0x306a10,
            'initialColumn': _0x1fa250
        })), _0x21525d && this[_0x13ecb0(329)]()[_0x13ecb0(473)](_0x1a6bd1), this[_0x13ecb0(471)](_0x1a6bd1), _0x4e7cea && this[_0x13ecb0(329)]()['activate'](), _0x1a6bd1;
    }
    [_0x2605e7(495)](_0xa53d43, _0x1aaee6) {
        const _0x115a62 = _0x2605e7;
        return this[_0x115a62(436)](_0xa53d43, { 'pane': _0x1aaee6 });
    }
    async _0x2605e7(496)(_0x5c780d, _0x2b4895) {
        const _0x753b82 = _0x2605e7, _0x14bfa2 = {
                'zwYtJ': function (_0x220c5c, _0x237eed) {
                    return _0x220c5c != _0x237eed;
                },
                'SQKSq': function (_0x4c4dc3, _0x253cdb, _0x36d42a) {
                    return _0x4c4dc3(_0x253cdb, _0x36d42a);
                },
                'jsyjg': 'EACCES',
                'xhOIA': _0x753b82(497),
                'idNye': _0x753b82(498),
                'fvjgh': _0x753b82(499),
                'veCcb': _0x753b82(500),
                'CKDZs': _0x753b82(501),
                'DfMdp': _0x753b82(502),
                'cYYHK': _0x753b82(503)
            };
        if (_0x14bfa2[_0x753b82(504)](_0x5c780d, null))
            for (const _0x4b7b7e of this[_0x753b82(493)]()) {
                const _0xa994b7 = _0x14bfa2[_0x753b82(505)](_0x4b7b7e, _0x5c780d, _0x2b4895);
                if (_0x14bfa2[_0x753b82(504)](_0xa994b7, null))
                    return _0xa994b7;
            }
        try {
            const _0x4fa9de = await this[_0x753b82(506)](_0x5c780d, _0x2b4895);
            return _0x4fa9de;
        } catch (_0x1cacdb) {
            switch (_0x1cacdb[_0x753b82(507)]) {
            case _0x753b82(508):
                return Promise['resolve']();
            case _0x14bfa2[_0x753b82(509)]:
                this[_0x753b82(236)][_0x753b82(510)](_0x753b82(511) + _0x1cacdb[_0x753b82(208)] + '\'');
                return Promise[_0x753b82(459)]();
            case _0x753b82(512):
            case _0x14bfa2['xhOIA']:
            case _0x14bfa2[_0x753b82(513)]:
            case _0x14bfa2[_0x753b82(514)]:
            case 'ENOTCONN':
            case _0x14bfa2[_0x753b82(515)]:
            case _0x14bfa2[_0x753b82(516)]:
            case _0x753b82(517):
            case _0x753b82(518):
            case _0x14bfa2['DfMdp']:
            case _0x14bfa2[_0x753b82(519)]:
                this[_0x753b82(236)]['addWarning'](_0x753b82(520) + (_0x14bfa2[_0x753b82(504)](_0x1cacdb[_0x753b82(208)], null) ? _0x1cacdb[_0x753b82(208)] : _0x5c780d) + '\'', { 'detail': _0x1cacdb[_0x753b82(521)] });
                return Promise[_0x753b82(459)]();
            default:
                throw _0x1cacdb;
            }
        }
    }
    async 'openTextFile'(_0x3425a8, _0x29247b) {
        const _0x1fd7a3 = _0x2605e7, _0x24c504 = {
                'wqcPG': function (_0x357d27, _0xeaa12) {
                    return _0x357d27 === _0xeaa12;
                },
                'yOGyV': _0x1fd7a3(508),
                'zgbVr': function (_0x3ccbab, _0x6c17a0) {
                    return _0x3ccbab(_0x6c17a0);
                },
                'KvWxV': function (_0x4cd6bf) {
                    return _0x4cd6bf();
                },
                'DJmpU': _0x1fd7a3(522),
                'psYbl': _0x1fd7a3(523),
                'rnJOk': _0x1fd7a3(524),
                'RSyqQ': function (_0x47a26a, _0x19e985) {
                    return _0x47a26a !== _0x19e985;
                },
                'YMEzC': _0x1fd7a3(525),
                'idBso': function (_0x3677fd, _0x48fd8f) {
                    return _0x3677fd >= _0x48fd8f;
                },
                'OGhqJ': function (_0x5126e4, _0x466e8c) {
                    return _0x5126e4 * _0x466e8c;
                }
            }, _0xee8c74 = this[_0x1fd7a3(251)][_0x1fd7a3(441)](_0x3425a8);
        if (_0xee8c74 != null)
            try {
                fs['closeSync'](fs[_0x1fd7a3(491)](_0xee8c74, 'r'));
            } catch (_0x1084da) {
                if (_0x24c504[_0x1fd7a3(526)](_0x1084da['code'], _0x24c504[_0x1fd7a3(527)]))
                    throw _0x1084da;
            }
        const _0x468044 = fs[_0x1fd7a3(528)](_0xee8c74);
        _0x24c504[_0x1fd7a3(529)](_0x468044, _0x24c504[_0x1fd7a3(530)](this[_0x1fd7a3(235)][_0x1fd7a3(292)](_0x1fd7a3(531)), -540556 + -923755 + 13 * 193299)) && await new Promise((_0x2330a4, _0x2882e6) => {
            const _0x1e334a = _0x1fd7a3, _0x2cc893 = {
                    'INZtT': function (_0x21f117, _0x5406c0) {
                        const _0x2a9921 = _0x1c90;
                        return _0x24c504[_0x2a9921(532)](_0x21f117, _0x5406c0);
                    },
                    'zWlID': _0x24c504[_0x1e334a(533)],
                    'aktwJ': function (_0x38c26a, _0x296cc2) {
                        const _0x2fa8f4 = _0x1e334a;
                        return _0x24c504[_0x2fa8f4(534)](_0x38c26a, _0x296cc2);
                    },
                    'DBsMZ': function (_0x5c9c6c) {
                        const _0x4296e3 = _0x1e334a;
                        return _0x24c504[_0x4296e3(535)](_0x5c9c6c);
                    }
                };
            this[_0x1e334a(249)][_0x1e334a(536)]({
                'message': _0x1e334a(537),
                'detail': _0x24c504['DJmpU'],
                'buttons': [
                    _0x24c504[_0x1e334a(538)],
                    _0x24c504[_0x1e334a(539)]
                ]
            }, _0x37f9bb => {
                const _0x2757eb = _0x1e334a;
                if (_0x2cc893['INZtT'](_0x37f9bb, 38 * 41 + 85 * 87 + -4 * 2238)) {
                    const _0x2098ed = new Error();
                    _0x2098ed[_0x2757eb(507)] = _0x2cc893[_0x2757eb(540)], _0x2cc893[_0x2757eb(541)](_0x2882e6, _0x2098ed);
                } else
                    _0x2cc893[_0x2757eb(542)](_0x2330a4);
            });
        });
        const _0x193028 = await this[_0x1fd7a3(251)][_0x1fd7a3(543)](_0xee8c74, _0x29247b);
        return this[_0x1fd7a3(243)][_0x1fd7a3(544)](Object[_0x1fd7a3(545)]({
            'buffer': _0x193028,
            'autoHeight': ![]
        }, _0x29247b));
    }
    [_0x2605e7(546)](_0x117b44) {
        const _0x5e0d88 = _0x2605e7;
        if (_0x117b44 == null)
            return;
        this[_0x5e0d88(265)][_0x5e0d88(547)](_0x117b44[_0x5e0d88(548)] + ':root-scope-used'), this['packageManager']['triggerActivationHook'](_0x117b44[_0x5e0d88(549)] + _0x5e0d88(550));
    }
    [_0x2605e7(551)](_0x4a59a7) {
        const _0x1f9450 = _0x2605e7, _0x26b298 = {
                'IiRPf': function (_0xbbadd0, _0x31c083) {
                    return _0xbbadd0 instanceof _0x31c083;
                }
            };
        return _0x26b298[_0x1f9450(552)](_0x4a59a7, TextEditor);
    }
    [_0x2605e7(553)](_0x46bc58) {
        const _0x4da0e5 = _0x2605e7, _0xb957dc = this[_0x4da0e5(243)][_0x4da0e5(544)](_0x46bc58), _0x5e1c83 = this[_0x4da0e5(243)][_0x4da0e5(361)](_0xb957dc);
        return _0xb957dc[_0x4da0e5(554)](() => _0x5e1c83[_0x4da0e5(276)]()), _0xb957dc;
    }
    [_0x2605e7(555)]() {
        const _0x1be808 = _0x2605e7, _0x33a38a = this[_0x1be808(263)][_0x1be808(556)]();
        return _0x33a38a ? this[_0x1be808(436)](_0x33a38a) : Promise['resolve']();
    }
    [_0x2605e7(557)](_0x154e84) {
        const _0x2f52c7 = _0x2605e7;
        return this[_0x2f52c7(254)][_0x2f52c7(310)](_0x154e84), new Disposable(() => {
            const _0x57c6df = _0x2f52c7;
            _['remove'](this[_0x57c6df(254)], _0x154e84);
        });
    }
    [_0x2605e7(493)]() {
        const _0x4a0ef6 = _0x2605e7;
        return this[_0x4a0ef6(254)];
    }
    [_0x2605e7(558)]() {
        const _0x1a1b85 = _0x2605e7;
        return _[_0x1a1b85(559)](this[_0x1a1b85(374)]()[_0x1a1b85(414)](_0x1465d7 => _0x1465d7[_0x1a1b85(558)]()));
    }
    [_0x2605e7(326)]() {
        const _0x462e97 = _0x2605e7;
        return this[_0x462e97(334)]()[_0x462e97(326)]();
    }
    [_0x2605e7(313)]() {
        const _0x3c3f83 = _0x2605e7;
        return this[_0x3c3f83(558)]()[_0x3c3f83(560)](_0x4fccef => _0x4fccef instanceof TextEditor);
    }
    [_0x2605e7(561)]() {
        const _0x4b7436 = _0x2605e7, _0x4128dd = {
                'gLOQL': function (_0x13b635, _0x25fbfa) {
                    return _0x13b635 instanceof _0x25fbfa;
                }
            }, _0x2e2bcb = this[_0x4b7436(372)]()[_0x4b7436(326)]();
        if (_0x4128dd[_0x4b7436(562)](_0x2e2bcb, TextEditor))
            return _0x2e2bcb;
    }
    ['saveAll']() {
        const _0xd8d739 = _0x2605e7;
        this['getPaneContainers']()[_0xd8d739(284)](_0x2043df => {
            const _0x20bac5 = _0xd8d739;
            _0x2043df[_0x20bac5(563)]();
        });
    }
    ['confirmClose'](_0xe0d139) {
        const _0x341fed = _0x2605e7;
        return Promise[_0x341fed(564)](this[_0x341fed(374)]()[_0x341fed(414)](_0x51a5b0 => _0x51a5b0[_0x341fed(565)](_0xe0d139)))[_0x341fed(566)](_0x365710 => !_0x365710[_0x341fed(457)](![]));
    }
    [_0x2605e7(567)]() {
        const _0x4612df = _0x2605e7;
        return this['getCenter']()[_0x4612df(329)]()[_0x4612df(568)]();
    }
    [_0x2605e7(569)]() {
        const _0x3d9172 = _0x2605e7;
        this[_0x3d9172(372)]()['getActivePane']()[_0x3d9172(570)]();
    }
    [_0x2605e7(571)]() {
        const _0x24334b = _0x2605e7;
        return this['getActivePane']()[_0x24334b(572)]();
    }
    [_0x2605e7(334)]() {
        const _0xb4e47e = _0x2605e7;
        return this[_0xb4e47e(244)];
    }
    [_0x2605e7(573)]() {
        const _0x2852ad = _0x2605e7;
        return _[_0x2852ad(559)](this[_0x2852ad(374)]()['map'](_0x2e4cf7 => _0x2e4cf7[_0x2852ad(573)]()));
    }
    [_0x2605e7(574)]() {
        const _0x1e6030 = _0x2605e7;
        return _['flatten'](this[_0x1e6030(575)]()[_0x1e6030(414)](_0x10bb12 => _0x10bb12[_0x1e6030(573)]()));
    }
    [_0x2605e7(329)]() {
        const _0x58a1d3 = _0x2605e7;
        return this[_0x58a1d3(334)]()[_0x58a1d3(329)]();
    }
    [_0x2605e7(576)]() {
        return this['getActivePaneContainer']()['activateNextPane']();
    }
    [_0x2605e7(577)]() {
        const _0x539b28 = _0x2605e7;
        return this[_0x539b28(334)]()[_0x539b28(577)]();
    }
    ['paneContainerForURI'](_0x514213) {
        const _0x234d59 = _0x2605e7;
        return this[_0x234d59(374)]()[_0x234d59(578)](_0x14147b => _0x14147b[_0x234d59(579)](_0x514213));
    }
    [_0x2605e7(580)](_0x2f4d81) {
        const _0x37d2f6 = _0x2605e7;
        return this[_0x37d2f6(374)]()['find'](_0x144d0b => _0x144d0b[_0x37d2f6(451)](_0x2f4d81));
    }
    ['paneForURI'](_0x43c7c5) {
        const _0x1dfc9a = _0x2605e7, _0x5f680a = {
                'tsawk': function (_0x2c0ca3, _0x5b3516) {
                    return _0x2c0ca3 != _0x5b3516;
                }
            };
        for (let _0x2904cb of this[_0x1dfc9a(374)]()) {
            const _0x2f8b54 = _0x2904cb[_0x1dfc9a(579)](_0x43c7c5);
            if (_0x5f680a[_0x1dfc9a(581)](_0x2f8b54, null))
                return _0x2f8b54;
        }
    }
    [_0x2605e7(451)](_0x1fa436) {
        for (let _0x3ffe8e of this['getPaneContainers']()) {
            const _0x511c4d = _0x3ffe8e['paneForItem'](_0x1fa436);
            if (_0x511c4d != null)
                return _0x511c4d;
        }
    }
    [_0x2605e7(582)]() {
        const _0x7ebe99 = _0x2605e7, _0xd6ecd8 = {
                'AqZDY': function (_0x1866e4, _0x379dad) {
                    return _0x1866e4 != _0x379dad;
                }
            }, _0x5e896f = this['getActivePane']();
        _0xd6ecd8[_0x7ebe99(583)](_0x5e896f, null) && _0x5e896f['destroy']();
    }
    [_0x2605e7(584)]() {
        const _0x424b35 = _0x2605e7, _0x1f4256 = {
                'eFMdI': function (_0x3d0b1d, _0x31cf22) {
                    return _0x3d0b1d != _0x31cf22;
                }
            };
        if (_0x1f4256[_0x424b35(585)](this['getCenter']()[_0x424b35(326)](), null))
            this[_0x424b35(372)]()[_0x424b35(329)]()[_0x424b35(572)]();
        else {
            if (this[_0x424b35(372)]()[_0x424b35(573)]()[_0x424b35(315)] > 8208 + 5995 * 1 + -14202)
                this['getCenter']()[_0x424b35(582)]();
            else
                this['config']['get'](_0x424b35(586)) && atom[_0x424b35(587)]();
        }
    }
    [_0x2605e7(588)]() {
        const _0x289293 = _0x2605e7, _0x22c67d = {
                'ucWjG': _0x289293(589),
                'UJGGE': function (_0x549580, _0x308a8b) {
                    return _0x549580 + _0x308a8b;
                }
            };
        this[_0x289293(235)][_0x289293(443)](_0x22c67d[_0x289293(590)], _0x22c67d[_0x289293(591)](this[_0x289293(235)][_0x289293(292)](_0x22c67d[_0x289293(590)]), -4842 + 9569 + -4726));
    }
    [_0x2605e7(592)]() {
        const _0x1040e4 = _0x2605e7, _0xd5d47f = {
                'xSdsE': 'editor.fontSize',
                'gLbTo': function (_0x16ca50, _0xa14e95) {
                    return _0x16ca50 > _0xa14e95;
                },
                'YUJhD': function (_0x50f2ab, _0x49e19b) {
                    return _0x50f2ab - _0x49e19b;
                }
            }, _0x4abeb5 = this[_0x1040e4(235)][_0x1040e4(292)](_0xd5d47f[_0x1040e4(593)]);
        _0xd5d47f[_0x1040e4(594)](_0x4abeb5, -150 * -10 + 7334 + -8833) && this[_0x1040e4(235)]['set'](_0x1040e4(589), _0xd5d47f[_0x1040e4(595)](_0x4abeb5, -2559 + 966 + 1594));
    }
    [_0x2605e7(596)]() {
        const _0x21dac1 = _0x2605e7, _0x51a3c4 = {
                'ameNh': _0x21dac1(589),
                'HcOGu': 'editor.defaultFontSize'
            };
        this[_0x21dac1(235)]['set'](_0x51a3c4[_0x21dac1(597)], this[_0x21dac1(235)]['get'](_0x51a3c4[_0x21dac1(598)]));
    }
    [_0x2605e7(471)](_0x336490) {
        const _0x13c0c3 = _0x2605e7, _0x4beb5a = {
                'tUYjP': function (_0x385683, _0x5eb642) {
                    return _0x385683 === _0x5eb642;
                },
                'jqllq': _0x13c0c3(338)
            };
        let _0x490ec1;
        if (_0x4beb5a[_0x13c0c3(599)](typeof _0x336490[_0x13c0c3(377)], _0x4beb5a[_0x13c0c3(600)]))
            _0x490ec1 = _0x336490[_0x13c0c3(377)]();
        else
            typeof _0x336490[_0x13c0c3(601)] === _0x13c0c3(338) && (_0x490ec1 = _0x336490[_0x13c0c3(601)]());
        _0x490ec1 != null && _[_0x13c0c3(602)](this[_0x13c0c3(263)], _0x490ec1);
    }
    ['didDestroyPaneItem']({item: _0x4fe064}) {
        const _0x578ce1 = _0x2605e7, _0xcb4138 = {
                'SGaxA': function (_0x32d9ea, _0x1ff54f) {
                    return _0x32d9ea === _0x1ff54f;
                },
                'ZRXBo': _0x578ce1(338),
                'EyjAm': function (_0x3b0ae6, _0x441f21) {
                    return _0x3b0ae6 != _0x441f21;
                }
            };
        let _0x129233;
        if (_0xcb4138[_0x578ce1(603)](typeof _0x4fe064[_0x578ce1(377)], _0xcb4138[_0x578ce1(604)]))
            _0x129233 = _0x4fe064[_0x578ce1(377)]();
        else
            typeof _0x4fe064[_0x578ce1(601)] === 'function' && (_0x129233 = _0x4fe064['getUri']());
        _0xcb4138[_0x578ce1(605)](_0x129233, null) && this[_0x578ce1(263)]['push'](_0x129233);
    }
    [_0x2605e7(606)]() {
        const _0x25baaa = _0x2605e7, _0x242175 = {
                'AEpvl': _0x25baaa(607),
                'OksRj': function (_0xfb279c, _0x24a25f) {
                    return _0xfb279c != _0x24a25f;
                }
            }, _0x3870fb = _0x242175[_0x25baaa(608)][_0x25baaa(227)]('|');
        let _0x2bd017 = -3502 * -1 + -6706 + -9 * -356;
        while (!![]) {
            switch (_0x3870fb[_0x2bd017++]) {
            case '0':
                this[_0x25baaa(229)][_0x25baaa(245)][_0x25baaa(277)]();
                continue;
            case '1':
                _0x242175[_0x25baaa(609)](this[_0x25baaa(339)], null) && this[_0x25baaa(339)][_0x25baaa(276)]();
                continue;
            case '2':
                this['cancelStoppedChangingActivePaneItemTimeout']();
                continue;
            case '3':
                this[_0x25baaa(229)][_0x25baaa(223)][_0x25baaa(277)]();
                continue;
            case '4':
                this[_0x25baaa(229)]['bottom']['destroy']();
                continue;
            case '5':
                this['paneContainers'][_0x25baaa(222)][_0x25baaa(277)]();
                continue;
            case '6':
                if (this['element'])
                    this[_0x25baaa(269)][_0x25baaa(277)]();
                continue;
            }
            break;
        }
    }
    ['getCenter']() {
        const _0x367cac = _0x2605e7;
        return this[_0x367cac(229)][_0x367cac(245)];
    }
    [_0x2605e7(610)]() {
        const _0x294074 = _0x2605e7;
        return this['paneContainers'][_0x294074(222)];
    }
    ['getRightDock']() {
        const _0x5f094d = _0x2605e7;
        return this['paneContainers'][_0x5f094d(223)];
    }
    [_0x2605e7(368)]() {
        const _0x44dac3 = _0x2605e7;
        return this[_0x44dac3(229)][_0x44dac3(224)];
    }
    [_0x2605e7(374)]() {
        const _0x73ee4e = _0x2605e7;
        return [
            this[_0x73ee4e(229)]['center'],
            this[_0x73ee4e(229)][_0x73ee4e(222)],
            this[_0x73ee4e(229)][_0x73ee4e(223)],
            this['paneContainers']['bottom']
        ];
    }
    [_0x2605e7(575)]() {
        const _0x2c720f = _0x2605e7, _0x48b341 = this[_0x2c720f(372)]();
        return atom[_0x2c720f(611)][_0x2c720f(374)]()[_0x2c720f(560)](_0x360174 => _0x360174 === _0x48b341 || _0x360174[_0x2c720f(485)]());
    }
    ['getBottomPanels']() {
        const _0x28fba7 = _0x2605e7, _0x5359ad = { 'APJOe': _0x28fba7(224) };
        return this[_0x28fba7(612)](_0x5359ad[_0x28fba7(613)]);
    }
    ['addBottomPanel'](_0x674fcd) {
        const _0x4ca787 = _0x2605e7, _0x416df0 = { 'iJICF': _0x4ca787(224) };
        return this[_0x4ca787(614)](_0x416df0[_0x4ca787(615)], _0x674fcd);
    }
    [_0x2605e7(616)]() {
        const _0x1f0d08 = _0x2605e7, _0x10425d = { 'JhVHR': _0x1f0d08(222) };
        return this[_0x1f0d08(612)](_0x10425d[_0x1f0d08(617)]);
    }
    [_0x2605e7(618)](_0x522ab1) {
        const _0x248798 = _0x2605e7;
        return this[_0x248798(614)](_0x248798(222), _0x522ab1);
    }
    [_0x2605e7(619)]() {
        const _0x6571f4 = _0x2605e7, _0x48ac79 = { 'ILTMg': _0x6571f4(223) };
        return this[_0x6571f4(612)](_0x48ac79[_0x6571f4(620)]);
    }
    ['addRightPanel'](_0x9bdafd) {
        const _0x1ed788 = _0x2605e7;
        return this[_0x1ed788(614)](_0x1ed788(223), _0x9bdafd);
    }
    [_0x2605e7(621)]() {
        const _0x35a974 = _0x2605e7, _0x2bc8c6 = { 'uGXie': _0x35a974(274) };
        return this[_0x35a974(612)](_0x2bc8c6[_0x35a974(622)]);
    }
    [_0x2605e7(623)](_0x32ab25) {
        const _0x52ed9a = { 'sPlwK': 'top' };
        return this['addPanel'](_0x52ed9a['sPlwK'], _0x32ab25);
    }
    [_0x2605e7(624)]() {
        const _0x38eb6e = _0x2605e7, _0x12fca9 = { 'ibUGV': _0x38eb6e(225) };
        return this[_0x38eb6e(612)](_0x12fca9['ibUGV']);
    }
    ['addHeaderPanel'](_0x1614e8) {
        const _0x32f656 = _0x2605e7;
        return this[_0x32f656(614)](_0x32f656(225), _0x1614e8);
    }
    [_0x2605e7(625)]() {
        const _0x2caafb = _0x2605e7, _0x5ba77f = { 'emGAU': _0x2caafb(261) };
        return this[_0x2caafb(612)](_0x5ba77f[_0x2caafb(626)]);
    }
    [_0x2605e7(627)](_0x424a30) {
        const _0x1d08c5 = _0x2605e7;
        return this['addPanel'](_0x1d08c5(261), _0x424a30);
    }
    [_0x2605e7(628)]() {
        const _0x5a7c37 = _0x2605e7, _0x40cc4e = { 'zjmRp': _0x5a7c37(282) };
        return this[_0x5a7c37(612)](_0x40cc4e[_0x5a7c37(629)]);
    }
    [_0x2605e7(630)](_0x573f5a = {}) {
        const _0xb6505d = _0x2605e7, _0x13e05d = { 'zkRNH': _0xb6505d(282) };
        return this[_0xb6505d(614)](_0x13e05d[_0xb6505d(631)], _0x573f5a);
    }
    [_0x2605e7(632)](_0x4b81d8) {
        const _0x24b5bd = _0x2605e7;
        for (let _0x159f03 in this['panelContainers']) {
            const _0x5e7086 = this[_0x24b5bd(258)][_0x159f03], _0x157bb7 = _0x5e7086[_0x24b5bd(632)](_0x4b81d8);
            if (_0x157bb7 != null)
                return _0x157bb7;
        }
        return null;
    }
    [_0x2605e7(612)](_0x4eae39) {
        const _0x3ca40f = _0x2605e7;
        return this[_0x3ca40f(258)][_0x4eae39]['getPanels']();
    }
    [_0x2605e7(614)](_0x41bf38, _0x4b95fd) {
        const _0x4b3477 = _0x2605e7;
        return _0x4b95fd == null && (_0x4b95fd = {}), this[_0x4b3477(258)][_0x41bf38][_0x4b3477(614)](new Panel(_0x4b95fd, this['viewRegistry']));
    }
    [_0x2605e7(633)](_0x1d0432, _0x3d6979 = {}, _0x171ef7) {
        const _0x52a9d3 = _0x2605e7, _0x18b53e = {
                'dbPXk': function (_0x260564, _0x454e4b) {
                    return _0x260564(_0x454e4b);
                },
                'mhbbf': function (_0xfda4c8, _0x2a2ce0, _0x1b3857) {
                    return _0xfda4c8(_0x2a2ce0, _0x1b3857);
                },
                'aIfLK': _0x52a9d3(634),
                'NrHOG': _0x52a9d3(635),
                'PhLmK': function (_0x4c2c0f, _0x1b67f3) {
                    return _0x4c2c0f(_0x1b67f3);
                },
                'LZyyx': 'cancelled',
                'jDHvk': function (_0x1a84f7, _0x4330f7) {
                    return _0x1a84f7(_0x4330f7);
                }
            };
        _[_0x52a9d3(636)](_0x3d6979) && (_0x171ef7 = _0x3d6979, _0x3d6979 = {});
        const _0x5737de = new Map();
        for (const _0xb30021 of this[_0x52a9d3(251)][_0x52a9d3(637)]()) {
            let _0x2884df = _0x3d6979['ripgrep'] ? this['ripgrepDirectorySearcher'] : this[_0x52a9d3(257)];
            for (const _0x19a125 of this[_0x52a9d3(296)]) {
                if (_0x19a125['canSearchDirectory'](_0xb30021)) {
                    _0x2884df = _0x19a125;
                    break;
                }
            }
            let _0x47565a = _0x5737de[_0x52a9d3(292)](_0x2884df);
            !_0x47565a && (_0x47565a = [], _0x5737de[_0x52a9d3(443)](_0x2884df, _0x47565a)), _0x47565a['push'](_0xb30021);
        }
        let _0x52eb02;
        if (_[_0x52a9d3(636)](_0x3d6979['onPathsSearched'])) {
            const _0x4a9f95 = _0x3d6979[_0x52a9d3(638)];
            let _0x285183 = -9400 + 2293 + 7107;
            const _0x3a82f9 = new Map();
            _0x52eb02 = function (_0x5e63f9, _0x1b2a95) {
                const _0xecf35 = _0x52a9d3, _0x474bf3 = _0x3a82f9[_0xecf35(292)](_0x5e63f9);
                return _0x474bf3 && (_0x285183 -= _0x474bf3), _0x3a82f9[_0xecf35(443)](_0x5e63f9, _0x1b2a95), _0x285183 += _0x1b2a95, _0x18b53e[_0xecf35(639)](_0x4a9f95, _0x285183);
            };
        } else
            _0x52eb02 = function () {
            };
        const _0x3ca7fe = [];
        _0x5737de[_0x52a9d3(284)]((_0x11c824, _0x497704) => {
            const _0x4f9156 = _0x52a9d3, _0x12f484 = {
                    'STlVA': function (_0x190fc8, _0x32ca59, _0x4658d8) {
                        const _0x4881ba = _0x1c90;
                        return _0x18b53e[_0x4881ba(640)](_0x190fc8, _0x32ca59, _0x4658d8);
                    }
                }, _0x4118e3 = {
                    'inclusions': _0x3d6979[_0x4f9156(641)] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this[_0x4f9156(235)][_0x4f9156(292)](_0x4f9156(642)),
                    'exclusions': this['config'][_0x4f9156(292)](_0x18b53e[_0x4f9156(643)]),
                    'follow': this['config'][_0x4f9156(292)](_0x18b53e['NrHOG']),
                    'leadingContextLineCount': _0x3d6979[_0x4f9156(644)] || -62 * 149 + -1 * 8933 + 18171,
                    'trailingContextLineCount': _0x3d6979[_0x4f9156(645)] || 5 * -1723 + 9906 + 1 * -1291,
                    'PCRE2': _0x3d6979[_0x4f9156(646)],
                    'didMatch': _0x17290b => {
                        const _0x3164f5 = _0x4f9156;
                        if (!this['project'][_0x3164f5(647)](_0x17290b['filePath']))
                            return _0x171ef7(_0x17290b);
                    },
                    'didError'(_0x9dddf3) {
                        const _0xdcaa0b = _0x4f9156;
                        return _0x12f484[_0xdcaa0b(648)](_0x171ef7, null, _0x9dddf3);
                    },
                    'didSearchPaths'(_0x154584) {
                        const _0x3f0a61 = _0x4f9156;
                        return _0x12f484[_0x3f0a61(648)](_0x52eb02, _0x497704, _0x154584);
                    }
                }, _0x5cc1c3 = _0x497704['search'](_0x11c824, _0x1d0432, _0x4118e3);
            _0x3ca7fe[_0x4f9156(310)](_0x5cc1c3);
        });
        const _0x168e0f = Promise[_0x52a9d3(564)](_0x3ca7fe);
        for (let _0x451747 of this[_0x52a9d3(251)][_0x52a9d3(649)]()) {
            if (_0x451747['isModified']()) {
                const _0x36bac9 = _0x451747[_0x52a9d3(389)]();
                if (!this['project']['contains'](_0x36bac9))
                    continue;
                var _0x1c4386 = [];
                _0x451747[_0x52a9d3(633)](_0x1d0432, _0x181e64 => _0x1c4386['push'](_0x181e64)), _0x1c4386[_0x52a9d3(315)] > -8366 + -6387 * 1 + 14753 && _0x18b53e['jDHvk'](_0x171ef7, {
                    'filePath': _0x36bac9,
                    'matches': _0x1c4386
                });
            }
        }
        let _0xe49efe = ![];
        const _0x2b4a2b = new Promise((_0x4762d5, _0x9bec9f) => {
            const _0x590f42 = _0x52a9d3, _0x3879e7 = {
                    'jTUxm': function (_0x55e591, _0x316211) {
                        return _0x55e591(_0x316211);
                    }
                }, _0x34a688 = function () {
                    const _0x1ff02c = _0x1c90;
                    _0xe49efe ? _0x18b53e[_0x1ff02c(650)](_0x4762d5, _0x18b53e[_0x1ff02c(651)]) : _0x18b53e['jDHvk'](_0x4762d5, null);
                }, _0x47cf1e = function (_0x534892) {
                    for (let _0x3a91f5 of _0x3ca7fe) {
                        _0x3a91f5['cancel']();
                    }
                    _0x3879e7['jTUxm'](_0x9bec9f, _0x534892);
                };
            _0x168e0f[_0x590f42(566)](_0x34a688, _0x47cf1e);
        });
        return _0x2b4a2b['cancel'] = () => {
            const _0x1ff590 = _0x52a9d3;
            _0xe49efe = !![], _0x3ca7fe[_0x1ff590(414)](_0xa380bf => _0xa380bf[_0x1ff590(652)]());
        }, _0x2b4a2b;
    }
    [_0x2605e7(653)](_0x1b7fc4, _0xe9dd39, _0x242fcd, _0x3b4b0d) {
        const _0x503d0d = _0x2605e7, _0x2043bd = {
                'LzCXc': function (_0x39007b, _0x51bb3d, _0x41ad9e) {
                    return _0x39007b(_0x51bb3d, _0x41ad9e);
                },
                'ERnIC': function (_0x3285e1, _0x37137b) {
                    return _0x3285e1 && _0x37137b;
                },
                'udCBA': './replace-handler',
                'eifLo': _0x503d0d(654),
                'omrsZ': function (_0x436e8c) {
                    return _0x436e8c();
                }
            };
        return new Promise((_0x607028, _0x590129) => {
            const _0x18e27a = _0x503d0d, _0x3f458d = {
                    'aQjRO': function (_0x5b9712, _0x3c364f) {
                        const _0x5448f1 = _0x1c90;
                        return _0x2043bd[_0x5448f1(655)](_0x5b9712, _0x3c364f);
                    },
                    'WnPJq': function (_0x160988) {
                        return _0x160988();
                    }
                };
            let _0x4b140f;
            const _0x2ba170 = this[_0x18e27a(251)]['getBuffers']()[_0x18e27a(414)](_0x5bb29f => _0x5bb29f['getPath']()), _0x2c1922 = _[_0x18e27a(656)](_0x242fcd, _0x2ba170);
            let _0x333923 = !_0x2ba170[_0x18e27a(315)], _0x475c1a = !_0x2c1922['length'];
            const _0x32a083 = () => {
                _0x3f458d['aQjRO'](_0x475c1a, _0x333923) && _0x607028();
            };
            if (!_0x475c1a['length']) {
                let _0x376e26 = 'g';
                _0x1b7fc4[_0x18e27a(657)] && (_0x376e26 += 'm');
                _0x1b7fc4[_0x18e27a(658)] && (_0x376e26 += 'i');
                const _0x4e6039 = Task[_0x18e27a(659)](require['resolve'](_0x2043bd['udCBA']), _0x2c1922, _0x1b7fc4[_0x18e27a(660)], _0x376e26, _0xe9dd39, () => {
                    _0x475c1a = !![], _0x3f458d['WnPJq'](_0x32a083);
                });
                _0x4e6039['on'](_0x2043bd[_0x18e27a(661)], _0x3b4b0d), _0x4e6039['on']('replace:file-error', _0x5adb92 => {
                    const _0x1d6316 = _0x18e27a;
                    _0x2043bd[_0x1d6316(662)](_0x3b4b0d, null, _0x5adb92);
                });
            }
            for (_0x4b140f of this[_0x18e27a(251)][_0x18e27a(649)]()) {
                if (!_0x242fcd[_0x18e27a(457)](_0x4b140f[_0x18e27a(389)]()))
                    continue;
                const _0x24d016 = _0x4b140f[_0x18e27a(653)](_0x1b7fc4, _0xe9dd39, _0x3b4b0d);
                _0x24d016 && _0x3b4b0d({
                    'filePath': _0x4b140f[_0x18e27a(389)](),
                    'replacements': _0x24d016
                });
            }
            _0x333923 = !![], _0x2043bd[_0x18e27a(663)](_0x32a083);
        });
    }
    ['checkoutHeadRevision'](_0x3babbe) {
        const _0xedaa83 = _0x2605e7, _0xd53cee = {
                'ZESZV': function (_0x4df364, _0x447a0a) {
                    return _0x4df364 === _0x447a0a;
                },
                'VgaqU': function (_0x1c2402) {
                    return _0x1c2402();
                },
                'hjkNh': _0xedaa83(664),
                'DSZrr': _0xedaa83(524),
                'USdSr': function (_0x25e2a7) {
                    return _0x25e2a7();
                }
            };
        if (_0x3babbe[_0xedaa83(389)]()) {
            const _0x5b6e50 = async () => {
                const _0x41b980 = _0xedaa83, _0x27af3a = await this[_0x41b980(251)]['repositoryForDirectory'](new Directory(_0x3babbe[_0x41b980(665)]()));
                if (_0x27af3a)
                    _0x27af3a[_0x41b980(666)](_0x3babbe);
            };
            this[_0xedaa83(235)][_0xedaa83(292)](_0xedaa83(667)) ? this[_0xedaa83(249)][_0xedaa83(536)]({
                'message': _0xd53cee[_0xedaa83(668)],
                'detail': 'Are you sure you want to discard all changes to "' + _0x3babbe[_0xedaa83(669)]() + _0xedaa83(670),
                'buttons': [
                    'OK',
                    _0xd53cee[_0xedaa83(671)]
                ]
            }, _0x525a44 => {
                const _0x32e657 = _0xedaa83;
                if (_0xd53cee[_0x32e657(672)](_0x525a44, 6399 + 1 * 4654 + 11053 * -1))
                    _0xd53cee[_0x32e657(673)](_0x5b6e50);
            }) : _0xd53cee[_0xedaa83(674)](_0x5b6e50);
        }
    }
};