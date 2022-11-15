const _ = require(_0x4a6156(494)), url = require(_0x4a6156(495)), path = require(_0x4a6156(496)), {Emitter, Disposable, CompositeDisposable} = require('event-kit'), fs = require(_0x4a6156(497)), {Directory} = require(_0x4a6156(498)), Grim = require(_0x4a6156(499)), DefaultDirectorySearcher = require('./default-directory-searcher'), RipgrepDirectorySearcher = require(_0x4a6156(500)), Dock = require('./dock'), Model = require(_0x4a6156(501)), StateStore = require(_0x4a6156(502)), TextEditor = require(_0x4a6156(503)), Panel = require('./panel'), PanelContainer = require(_0x4a6156(504)), Task = require(_0x4a6156(505)), WorkspaceCenter = require(_0x4a6156(506)), {createWorkspaceElement} = require('./workspace-element'), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = 2617 + 3031 * 2 + 1 * -8579, ALL_LOCATIONS = [
        _0x4a6156(507),
        _0x4a6156(508),
        _0x4a6156(509),
        _0x4a6156(510)
    ];
module[_0x4a6156(511)] = class Workspace extends Model {
    constructor(_0x1c3716) {
        const _0x4f5cb4 = _0x4a6156, _0x22a299 = {
                'NIjqB': _0x4f5cb4(508),
                'OKaug': _0x4f5cb4(510),
                'oggmO': 'top',
                'zMwmP': _0x4f5cb4(509),
                'wTRNY': _0x4f5cb4(512)
            };
        super(...arguments), this['updateWindowTitle'] = this['updateWindowTitle'][_0x4f5cb4(513)](this), this[_0x4f5cb4(514)] = this['updateDocumentEdited'][_0x4f5cb4(513)](this), this['didDestroyPaneItem'] = this['didDestroyPaneItem'][_0x4f5cb4(513)](this), this[_0x4f5cb4(515)] = this[_0x4f5cb4(515)][_0x4f5cb4(513)](this), this[_0x4f5cb4(516)] = this[_0x4f5cb4(516)]['bind'](this), this[_0x4f5cb4(517)] = this['didActivatePaneContainer'][_0x4f5cb4(513)](this), this[_0x4f5cb4(518)] = _0x1c3716[_0x4f5cb4(518)], this[_0x4f5cb4(519)] = _0x1c3716['packageManager'], this[_0x4f5cb4(520)] = _0x1c3716['config'], this['project'] = _0x1c3716[_0x4f5cb4(521)], this[_0x4f5cb4(522)] = _0x1c3716[_0x4f5cb4(522)], this[_0x4f5cb4(523)] = _0x1c3716['viewRegistry'], this[_0x4f5cb4(524)] = _0x1c3716[_0x4f5cb4(524)], this[_0x4f5cb4(525)] = _0x1c3716[_0x4f5cb4(525)], this[_0x4f5cb4(526)] = _0x1c3716[_0x4f5cb4(526)], this[_0x4f5cb4(527)] = _0x1c3716[_0x4f5cb4(527)], this[_0x4f5cb4(528)] = _0x1c3716[_0x4f5cb4(528)], this[_0x4f5cb4(529)] = _0x1c3716[_0x4f5cb4(529)], this[_0x4f5cb4(530)] = ![], this[_0x4f5cb4(531)] = new StateStore('AtomPreviousItemLocations', 9807 + -2601 * -2 + -15008), this[_0x4f5cb4(532)] = new Emitter(), this['openers'] = [], this[_0x4f5cb4(533)] = [], this[_0x4f5cb4(534)] = null, this[_0x4f5cb4(535)] = new DefaultDirectorySearcher(), this[_0x4f5cb4(536)] = new RipgrepDirectorySearcher(), this[_0x4f5cb4(537)](this[_0x4f5cb4(519)]), this[_0x4f5cb4(538)] = {
            'center': this['createCenter'](),
            'left': this[_0x4f5cb4(539)](_0x22a299[_0x4f5cb4(540)]),
            'right': this[_0x4f5cb4(539)](_0x4f5cb4(509)),
            'bottom': this[_0x4f5cb4(539)](_0x22a299[_0x4f5cb4(541)])
        }, this[_0x4f5cb4(542)] = this[_0x4f5cb4(538)][_0x4f5cb4(507)], this['hasActiveTextEditor'] = ![], this['panelContainers'] = {
            'top': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x22a299[_0x4f5cb4(543)]
            }),
            'left': new PanelContainer({
                'viewRegistry': this[_0x4f5cb4(523)],
                'location': 'left',
                'dock': this[_0x4f5cb4(538)][_0x4f5cb4(508)]
            }),
            'right': new PanelContainer({
                'viewRegistry': this[_0x4f5cb4(523)],
                'location': _0x22a299[_0x4f5cb4(544)],
                'dock': this[_0x4f5cb4(538)][_0x4f5cb4(509)]
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this[_0x4f5cb4(523)],
                'location': _0x22a299[_0x4f5cb4(541)],
                'dock': this[_0x4f5cb4(538)][_0x4f5cb4(510)]
            }),
            'header': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x22a299['wTRNY']
            }),
            'footer': new PanelContainer({
                'viewRegistry': this[_0x4f5cb4(523)],
                'location': 'footer'
            }),
            'modal': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x4f5cb4(545)
            })
        }, this['incoming'] = new Map();
    }
    get [_0x4a6156(546)]() {
        const _0x4a45e7 = _0x4a6156, _0x1383f1 = { 'ytJbo': _0x4a45e7(547) };
        return Grim[_0x4a45e7(548)](_0x1383f1[_0x4a45e7(549)]), this['paneContainers'][_0x4a45e7(507)][_0x4a45e7(546)];
    }
    [_0x4a6156(550)]() {
        const _0x57076b = _0x4a6156, _0x1a8948 = {
                'RCPkL': function (_0x20de30) {
                    return _0x20de30();
                }
            };
        return !this[_0x57076b(551)] && (this[_0x57076b(551)] = _0x1a8948[_0x57076b(552)](createWorkspaceElement)[_0x57076b(553)](this, {
            'config': this[_0x57076b(520)],
            'project': this[_0x57076b(521)],
            'viewRegistry': this[_0x57076b(523)],
            'styleManager': this[_0x57076b(529)]
        })), this[_0x57076b(551)];
    }
    [_0x4a6156(554)]() {
        const _0x498eeb = _0x4a6156;
        return new WorkspaceCenter({
            'config': this[_0x498eeb(520)],
            'applicationDelegate': this['applicationDelegate'],
            'notificationManager': this[_0x498eeb(522)],
            'deserializerManager': this[_0x498eeb(527)],
            'viewRegistry': this[_0x498eeb(523)],
            'didActivate': this[_0x498eeb(517)],
            'didChangeActivePane': this[_0x498eeb(515)],
            'didChangeActivePaneItem': this[_0x498eeb(516)],
            'didDestroyPaneItem': this[_0x498eeb(555)]
        });
    }
    [_0x4a6156(539)](_0x387f16) {
        const _0x48bc86 = _0x4a6156;
        return new Dock({
            'location': _0x387f16,
            'config': this[_0x48bc86(520)],
            'applicationDelegate': this[_0x48bc86(525)],
            'deserializerManager': this[_0x48bc86(527)],
            'notificationManager': this[_0x48bc86(522)],
            'viewRegistry': this[_0x48bc86(523)],
            'didActivate': this[_0x48bc86(517)],
            'didChangeActivePane': this[_0x48bc86(515)],
            'didChangeActivePaneItem': this[_0x48bc86(516)],
            'didDestroyPaneItem': this[_0x48bc86(555)]
        });
    }
    [_0x4a6156(556)](_0x4bd60a) {
        const _0x29ed95 = _0x4a6156, _0x5c9371 = {
                'UJoVW': 'left',
                'kwwAq': _0x29ed95(509),
                'fIySM': _0x29ed95(557),
                'EMfzX': _0x29ed95(510),
                'jlEue': _0x29ed95(512),
                'LeXNL': _0x29ed95(558),
                'hjkUQ': 'modal'
            }, _0x5e988a = _0x29ed95(559)[_0x29ed95(560)]('|');
        let _0x2714df = 1 * 6917 + -8760 + 1 * 1843;
        while (!![]) {
            switch (_0x5e988a[_0x2714df++]) {
            case '0':
                this['activePaneContainer'] = this['paneContainers']['center'];
                continue;
            case '1':
                this[_0x29ed95(538)][_0x29ed95(507)][_0x29ed95(561)]();
                continue;
            case '2':
                this[_0x29ed95(538)] = {
                    'center': this[_0x29ed95(554)](),
                    'left': this[_0x29ed95(539)](_0x5c9371[_0x29ed95(562)]),
                    'right': this[_0x29ed95(539)](_0x5c9371[_0x29ed95(563)]),
                    'bottom': this[_0x29ed95(539)]('bottom')
                };
                continue;
            case '3':
                this['openers'] = [];
                continue;
            case '4':
                this[_0x29ed95(537)](this[_0x29ed95(519)]);
                continue;
            case '5':
                this[_0x29ed95(519)] = _0x4bd60a;
                continue;
            case '6':
                this[_0x29ed95(538)][_0x29ed95(508)][_0x29ed95(561)]();
                continue;
            case '7':
                _['values'](this[_0x29ed95(564)])[_0x29ed95(565)](_0xf9f4b => {
                    _0xf9f4b['destroy']();
                });
                continue;
            case '8':
                this[_0x29ed95(566)] = ![];
                continue;
            case '9':
                this[_0x29ed95(532)] = new Emitter();
                continue;
            case '10':
                this['paneContainers'][_0x29ed95(510)][_0x29ed95(561)]();
                continue;
            case '11':
                this['destroyedItemURIs'] = [];
                continue;
            case '12':
                this[_0x29ed95(532)][_0x29ed95(567)]();
                continue;
            case '13':
                this[_0x29ed95(538)][_0x29ed95(509)][_0x29ed95(561)]();
                continue;
            case '14':
                this[_0x29ed95(564)] = {
                    'top': new PanelContainer({
                        'viewRegistry': this[_0x29ed95(523)],
                        'location': _0x5c9371[_0x29ed95(568)]
                    }),
                    'left': new PanelContainer({
                        'viewRegistry': this[_0x29ed95(523)],
                        'location': _0x5c9371[_0x29ed95(562)],
                        'dock': this[_0x29ed95(538)][_0x29ed95(508)]
                    }),
                    'right': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': 'right',
                        'dock': this[_0x29ed95(538)][_0x29ed95(509)]
                    }),
                    'bottom': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5c9371[_0x29ed95(569)],
                        'dock': this[_0x29ed95(538)]['bottom']
                    }),
                    'header': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5c9371[_0x29ed95(570)]
                    }),
                    'footer': new PanelContainer({
                        'viewRegistry': this[_0x29ed95(523)],
                        'location': _0x5c9371[_0x29ed95(571)]
                    }),
                    'modal': new PanelContainer({
                        'viewRegistry': this[_0x29ed95(523)],
                        'location': _0x5c9371[_0x29ed95(572)]
                    })
                };
                continue;
            case '15':
                this[_0x29ed95(551)] && (this[_0x29ed95(551)][_0x29ed95(561)](), this['element'] = null);
                continue;
            }
            break;
        }
    }
    [_0x4a6156(553)]() {
        const _0x2a9aca = _0x4a6156, _0x4925f7 = {
                'EZpXY': _0x2a9aca(573),
                'qaTxn': _0x2a9aca(574)
            }, _0x4630e2 = _0x4925f7[_0x2a9aca(575)]['split']('|');
        let _0x39f450 = -6547 + 6214 + 333;
        while (!![]) {
            switch (_0x4630e2[_0x39f450++]) {
            case '0':
                this[_0x2a9aca(576)]();
                continue;
            case '1':
                this['originalFontSize'] = this['config'][_0x2a9aca(577)](_0x4925f7[_0x2a9aca(578)]);
                continue;
            case '2':
                this[_0x2a9aca(579)]();
                continue;
            case '3':
                this[_0x2a9aca(521)][_0x2a9aca(580)](this[_0x2a9aca(581)]);
                continue;
            case '4':
                this[_0x2a9aca(582)]();
                continue;
            }
            break;
        }
    }
    [_0x4a6156(537)]({serviceHub: _0x3da9e8}) {
        const _0x38310b = _0x4a6156, _0x2c04ce = { 'SJcSB': _0x38310b(583) };
        this[_0x38310b(584)] = [], _0x3da9e8[_0x38310b(585)](_0x2c04ce['SJcSB'], '^0.1.0', _0x30b106 => this[_0x38310b(584)]['unshift'](_0x30b106));
    }
    [_0x4a6156(586)]() {
        const _0x149f90 = _0x4a6156, _0x30f571 = { 'anNZH': 'Workspace' };
        return {
            'deserializer': _0x30f571[_0x149f90(587)],
            'packagesWithActiveGrammars': this[_0x149f90(588)](),
            'destroyedItemURIs': this[_0x149f90(533)]['slice'](),
            'paneContainer': { 'version': 2 },
            'paneContainers': {
                'center': this[_0x149f90(538)][_0x149f90(507)]['serialize'](),
                'left': this['paneContainers']['left'][_0x149f90(586)](),
                'right': this[_0x149f90(538)][_0x149f90(509)]['serialize'](),
                'bottom': this[_0x149f90(538)][_0x149f90(510)][_0x149f90(586)]()
            }
        };
    }
    [_0x4a6156(589)](_0x1d9cf0, _0x2903b4) {
        const _0xf7b208 = _0x4a6156, _0x5176cc = {
                'wpvhj': function (_0x1fc95, _0x279ffd) {
                    return _0x1fc95 != _0x279ffd;
                },
                'zcHLw': function (_0x31078c, _0x26c9b0) {
                    return _0x31078c != _0x26c9b0;
                }
            }, _0xd7b5a5 = _0x5176cc['wpvhj'](_0x1d9cf0['packagesWithActiveGrammars'], null) ? _0x1d9cf0[_0xf7b208(590)] : [];
        for (let _0x2a8bfa of _0xd7b5a5) {
            const _0x589aeb = this['packageManager']['getLoadedPackage'](_0x2a8bfa);
            _0x5176cc[_0xf7b208(591)](_0x589aeb, null) && _0x589aeb['loadGrammarsSync']();
        }
        _0x5176cc[_0xf7b208(592)](_0x1d9cf0[_0xf7b208(533)], null) && (this[_0xf7b208(533)] = _0x1d9cf0[_0xf7b208(533)]);
        if (_0x1d9cf0[_0xf7b208(538)])
            this[_0xf7b208(538)][_0xf7b208(507)][_0xf7b208(589)](_0x1d9cf0[_0xf7b208(538)][_0xf7b208(507)], _0x2903b4), this['paneContainers'][_0xf7b208(508)][_0xf7b208(589)](_0x1d9cf0[_0xf7b208(538)][_0xf7b208(508)], _0x2903b4), this[_0xf7b208(538)][_0xf7b208(509)]['deserialize'](_0x1d9cf0['paneContainers'][_0xf7b208(509)], _0x2903b4), this[_0xf7b208(538)][_0xf7b208(510)][_0xf7b208(589)](_0x1d9cf0[_0xf7b208(538)][_0xf7b208(510)], _0x2903b4);
        else
            _0x1d9cf0[_0xf7b208(546)] && this[_0xf7b208(538)][_0xf7b208(507)][_0xf7b208(589)](_0x1d9cf0['paneContainer'], _0x2903b4);
        this[_0xf7b208(566)] = this['getActiveTextEditor']() != null, this[_0xf7b208(581)]();
    }
    [_0x4a6156(588)]() {
        const _0x50db21 = _0x4a6156, _0x2f0394 = {
                'vCWhx': function (_0x4c5a3f, _0x2d69e9) {
                    return _0x4c5a3f !== _0x2d69e9;
                },
                'zBeKj': function (_0x19c742, _0x298f25) {
                    return _0x19c742 != _0x298f25;
                },
                'bQaUq': function (_0x136244, _0x5cdc57) {
                    return _0x136244(_0x5cdc57);
                },
                'isjlb': function (_0x51e255, _0xc271e1) {
                    return _0x51e255 > _0xc271e1;
                },
                'ownCC': function (_0x458e0e, _0x1ac0ba) {
                    return _0x458e0e(_0x1ac0ba);
                }
            }, _0x5b63f7 = [], _0x4296d8 = ({
                includedGrammarScopes: _0xe52d5c,
                packageName: _0x4e16e5
            } = {}) => {
                const _0x4e807e = _0x32da;
                if (!_0x4e16e5)
                    return;
                if (_0x2f0394['vCWhx'](_0x5b63f7['indexOf'](_0x4e16e5), -(-3 * -717 + -3493 + -79 * -17)))
                    return;
                _0x5b63f7[_0x4e807e(593)](_0x4e16e5);
                for (let _0x166c7e of _0x2f0394[_0x4e807e(594)](_0xe52d5c, null) ? _0xe52d5c : []) {
                    _0x2f0394[_0x4e807e(595)](_0x4296d8, this['grammarRegistry']['grammarForScopeName'](_0x166c7e));
                }
            }, _0x8015d1 = this['getTextEditors']();
        for (let _0x19a8f2 of _0x8015d1) {
            _0x4296d8(_0x19a8f2[_0x50db21(596)]());
        }
        if (_0x2f0394[_0x50db21(597)](_0x8015d1[_0x50db21(598)], -9980 + 7 * -898 + 8133 * 2))
            for (let _0x59e981 of this['grammarRegistry'][_0x50db21(599)]()) {
                _0x59e981['injectionSelector'] && _0x2f0394[_0x50db21(600)](_0x4296d8, _0x59e981);
            }
        return _[_0x50db21(601)](_0x5b63f7);
    }
    [_0x4a6156(517)](_0x486ab8) {
        const _0x49b22a = _0x4a6156, _0x276131 = {
                'IHvwd': function (_0x5e26cf, _0x9508b0) {
                    return _0x5e26cf !== _0x9508b0;
                },
                'LFgqX': '3|4|2|1|0',
                'OUGRw': _0x49b22a(602)
            };
        if (_0x276131['IHvwd'](_0x486ab8, this['getActivePaneContainer']())) {
            const _0x17aaa6 = _0x276131[_0x49b22a(603)][_0x49b22a(560)]('|');
            let _0x3f6249 = -4207 * -1 + 8123 * 1 + -1370 * 9;
            while (!![]) {
                switch (_0x17aaa6[_0x3f6249++]) {
                case '0':
                    this[_0x49b22a(532)][_0x49b22a(604)]('did-change-active-pane-item', this[_0x49b22a(542)]['getActivePaneItem']());
                    continue;
                case '1':
                    this['emitter'][_0x49b22a(604)](_0x49b22a(605), this[_0x49b22a(542)][_0x49b22a(606)]());
                    continue;
                case '2':
                    this[_0x49b22a(532)][_0x49b22a(604)](_0x276131[_0x49b22a(607)], this[_0x49b22a(542)]);
                    continue;
                case '3':
                    this[_0x49b22a(542)] = _0x486ab8;
                    continue;
                case '4':
                    this['didChangeActivePaneItem'](this[_0x49b22a(542)][_0x49b22a(608)]());
                    continue;
                }
                break;
            }
        }
    }
    [_0x4a6156(515)](_0x521801, _0xe2ebde) {
        const _0x554281 = _0x4a6156;
        _0x521801 === this[_0x554281(609)]() && this['emitter'][_0x554281(604)](_0x554281(605), _0xe2ebde);
    }
    [_0x4a6156(516)](_0x4ae80d, _0x1e097b) {
        const _0x285254 = _0x4a6156, _0x90cb81 = {
                'LwnHi': function (_0x3e3204, _0x449e93) {
                    return _0x3e3204 === _0x449e93;
                }
            };
        _0x90cb81[_0x285254(610)](_0x4ae80d, this['getActivePaneContainer']()) && (this['didChangeActivePaneItem'](_0x1e097b), this[_0x285254(532)][_0x285254(604)](_0x285254(611), _0x1e097b));
        if (_0x4ae80d === this[_0x285254(612)]()) {
            const _0x5ca4dd = this[_0x285254(566)];
            this[_0x285254(566)] = _0x1e097b instanceof TextEditor;
            if (this[_0x285254(566)] || _0x5ca4dd) {
                const _0x4ac4ef = this['hasActiveTextEditor'] ? _0x1e097b : undefined;
                this[_0x285254(532)]['emit'](_0x285254(613), _0x4ac4ef);
            }
        }
    }
    [_0x4a6156(614)](_0x3ccefe) {
        const _0x3d014e = _0x4a6156, _0x3a0b49 = {
                'moerS': _0x3d014e(615),
                'EXMTW': _0x3d014e(616),
                'cdWBO': 'did-stop-changing-active-pane-item',
                'GXfTx': function (_0x3ff4db, _0x3fb4b3) {
                    return _0x3ff4db != _0x3fb4b3;
                },
                'OgXcx': function (_0x3786fa, _0x384559) {
                    return _0x3786fa === _0x384559;
                },
                'lMysW': 'function',
                'lFbIv': function (_0x406600, _0x506403) {
                    return _0x406600 != _0x506403;
                },
                'wkFmu': function (_0x1d2ba6, _0x20cdf3) {
                    return _0x1d2ba6 === _0x20cdf3;
                },
                'LYkeR': function (_0x18699b, _0x52a111) {
                    return _0x18699b == _0x52a111;
                },
                'suUXf': function (_0x2c43a9, _0x1ba6ec) {
                    return _0x2c43a9 !== _0x1ba6ec;
                },
                'qwyKt': function (_0x189017, _0x5ef73d) {
                    return _0x189017 != _0x5ef73d;
                },
                'rdzfm': function (_0x213a07, _0x26029c) {
                    return _0x213a07 === _0x26029c;
                },
                'orsui': function (_0xf84142, _0x3d68eb) {
                    return _0xf84142 == _0x3d68eb;
                },
                'kqHRw': function (_0x2dbd10, _0x82f6a8) {
                    return _0x2dbd10 != _0x82f6a8;
                },
                'eLfeq': function (_0x3a2f0e, _0x2b260b, _0x16affa) {
                    return _0x3a2f0e(_0x2b260b, _0x16affa);
                }
            };
        this[_0x3d014e(581)](), this[_0x3d014e(514)]();
        if (this[_0x3d014e(617)])
            this['activeItemSubscriptions'][_0x3d014e(567)]();
        this[_0x3d014e(617)] = new CompositeDisposable();
        let _0x35a783, _0x2302f7;
        if (_0x3a0b49[_0x3d014e(618)](_0x3ccefe, null) && _0x3a0b49[_0x3d014e(619)](typeof _0x3ccefe['onDidChangeTitle'], _0x3a0b49[_0x3d014e(620)]))
            _0x2302f7 = _0x3ccefe['onDidChangeTitle'](this[_0x3d014e(581)]);
        else
            _0x3a0b49['lFbIv'](_0x3ccefe, null) && _0x3a0b49[_0x3d014e(621)](typeof _0x3ccefe['on'], _0x3a0b49[_0x3d014e(620)]) && (_0x2302f7 = _0x3ccefe['on'](_0x3a0b49[_0x3d014e(622)], this[_0x3d014e(581)]), (_0x3a0b49[_0x3d014e(623)](_0x2302f7, null) || _0x3a0b49[_0x3d014e(624)](typeof _0x2302f7[_0x3d014e(567)], _0x3a0b49[_0x3d014e(620)])) && (_0x2302f7 = new Disposable(() => {
                _0x3ccefe['off'](_0x3a0b49['moerS'], this['updateWindowTitle']);
            })));
        if (_0x3a0b49[_0x3d014e(625)](_0x3ccefe, null) && _0x3a0b49[_0x3d014e(621)](typeof _0x3ccefe[_0x3d014e(626)], 'function'))
            _0x35a783 = _0x3ccefe[_0x3d014e(626)](this[_0x3d014e(514)]);
        else
            _0x3ccefe != null && _0x3a0b49[_0x3d014e(627)](typeof _0x3ccefe['on'], _0x3a0b49[_0x3d014e(620)]) && (_0x35a783 = _0x3ccefe['on'](_0x3a0b49['EXMTW'], this[_0x3d014e(514)]), (_0x3a0b49[_0x3d014e(628)](_0x35a783, null) || typeof _0x35a783[_0x3d014e(567)] !== _0x3a0b49['lMysW']) && (_0x35a783 = new Disposable(() => {
                const _0x1a8a59 = _0x3d014e;
                _0x3ccefe[_0x1a8a59(629)](_0x3a0b49[_0x1a8a59(630)], this[_0x1a8a59(514)]);
            })));
        _0x3a0b49[_0x3d014e(631)](_0x2302f7, null) && this[_0x3d014e(617)]['add'](_0x2302f7), _0x3a0b49['kqHRw'](_0x35a783, null) && this[_0x3d014e(617)][_0x3d014e(632)](_0x35a783), this[_0x3d014e(633)](), this[_0x3d014e(534)] = _0x3a0b49[_0x3d014e(634)](setTimeout, () => {
            const _0x23ca90 = _0x3d014e;
            this['stoppedChangingActivePaneItemTimeout'] = null, this[_0x23ca90(532)][_0x23ca90(604)](_0x3a0b49[_0x23ca90(635)], _0x3ccefe);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    [_0x4a6156(633)]() {
        const _0x3a0ffa = _0x4a6156, _0x15b64b = {
                'kxdKB': function (_0x2df42e, _0x2d2362) {
                    return _0x2df42e(_0x2d2362);
                }
            };
        this[_0x3a0ffa(534)] != null && _0x15b64b[_0x3a0ffa(636)](clearTimeout, this['stoppedChangingActivePaneItemTimeout']);
    }
    [_0x4a6156(637)](_0xe5899c) {
        const _0x7e6350 = _0x4a6156;
        _[_0x7e6350(638)](this[_0x7e6350(538)])['forEach'](_0x2e8596 => {
            const _0x334a5d = _0x7e6350;
            _0x2e8596[_0x334a5d(637)](_0xe5899c);
        });
    }
    [_0x4a6156(579)]() {
        const _0x3288a3 = { 'GVmwZ': 'did-add-text-editor' };
        this['onDidAddPaneItem'](({
            item: _0x16a16e,
            pane: _0x188a32,
            index: _0x123f87
        }) => {
            const _0x4246bf = _0x32da;
            if (_0x16a16e instanceof TextEditor) {
                const _0x428c8e = new CompositeDisposable(this['textEditorRegistry'][_0x4246bf(632)](_0x16a16e), this[_0x4246bf(528)][_0x4246bf(639)](_0x16a16e));
                !this['project']['findBufferForId'](_0x16a16e[_0x4246bf(640)]['id']) && this['project'][_0x4246bf(641)](_0x16a16e[_0x4246bf(640)]), _0x16a16e[_0x4246bf(642)](() => {
                    const _0x1fc03d = _0x4246bf;
                    _0x428c8e[_0x1fc03d(567)]();
                }), this[_0x4246bf(532)][_0x4246bf(604)](_0x3288a3[_0x4246bf(643)], {
                    'textEditor': _0x16a16e,
                    'pane': _0x188a32,
                    'index': _0x123f87
                }), !_0x16a16e[_0x4246bf(644)]() && _0x428c8e[_0x4246bf(632)](_0x16a16e['observeGrammar'](this['handleGrammarUsed'][_0x4246bf(513)](this)));
            }
        });
    }
    [_0x4a6156(582)]() {
        const _0x57ddee = _0x4a6156, _0x5f1bf5 = [
                this[_0x57ddee(645)](),
                this['getRightDock'](),
                this[_0x57ddee(646)]()
            ];
        _0x5f1bf5[_0x57ddee(565)](_0x30b910 => {
            _0x30b910['onDidChangeVisible'](_0x35f57a => {
                const _0x334a6b = _0x32da;
                if (_0x35f57a)
                    return;
                const {activeElement: _0x2bbe84} = document, _0x37ae8b = _0x30b910[_0x334a6b(550)]();
                (_0x37ae8b === _0x2bbe84 || _0x37ae8b['contains'](_0x2bbe84)) && this['getCenter']()[_0x334a6b(647)]();
            });
        });
    }
    [_0x4a6156(576)]() {
        const _0x2088ba = _0x4a6156, _0x21d41c = {
                'QNCJR': function (_0x425944, _0x527a85) {
                    return _0x425944 === _0x527a85;
                },
                'solma': 'function',
                'TZJND': function (_0x4853fd, _0x46814a) {
                    return _0x4853fd || _0x46814a;
                },
                'gHzbV': _0x2088ba(507)
            };
        for (const _0x555bd3 of this[_0x2088ba(648)]()) {
            _0x555bd3[_0x2088ba(649)](_0x23596f => {
                _0x23596f['onDidAddItem'](({item: _0x1c7e8b}) => {
                    const _0x38c783 = _0x32da;
                    if (_0x21d41c['QNCJR'](typeof _0x1c7e8b['getURI'], _0x21d41c[_0x38c783(650)]) && this[_0x38c783(518)]) {
                        const _0x490928 = _0x1c7e8b['getURI']();
                        if (_0x490928) {
                            const _0x170272 = _0x555bd3[_0x38c783(651)]();
                            let _0x584cdc;
                            _0x21d41c['QNCJR'](typeof _0x1c7e8b['getDefaultLocation'], _0x21d41c[_0x38c783(650)]) && (_0x584cdc = _0x1c7e8b[_0x38c783(652)]()), _0x584cdc = _0x21d41c['TZJND'](_0x584cdc, _0x21d41c[_0x38c783(653)]), _0x170272 === _0x584cdc ? this['itemLocationStore'][_0x38c783(654)](_0x1c7e8b[_0x38c783(655)]()) : this[_0x38c783(531)][_0x38c783(656)](_0x1c7e8b[_0x38c783(655)](), _0x170272);
                        }
                    }
                });
            });
        }
    }
    [_0x4a6156(581)]() {
        const _0x2217cd = _0x4a6156, _0x278e95 = {
                'Vtqhf': function (_0x5ca943, _0x23de69) {
                    return _0x5ca943 != _0x23de69;
                },
                'oTYyr': function (_0x452222, _0x151ccd) {
                    return _0x452222 === _0x151ccd;
                },
                'AUBuS': _0x2217cd(657),
                'LeIku': function (_0x25adf7, _0x565097) {
                    return _0x25adf7 === _0x565097;
                },
                'jmfFl': function (_0x5e39d7, _0x4fdf36) {
                    return _0x5e39d7 == _0x4fdf36;
                },
                'wKxbR': _0x2217cd(658),
                'RFlGL': function (_0x188ed6, _0x5c37ef) {
                    return _0x188ed6 == _0x5c37ef;
                },
                'fWGnX': function (_0x4eed33, _0x1b118a) {
                    return _0x4eed33 != _0x1b118a;
                },
                'FywjX': function (_0x4acec1, _0x2b18db) {
                    return _0x4acec1 != _0x2b18db;
                },
                'Cryly': function (_0x146442, _0x32248d) {
                    return _0x146442 !== _0x32248d;
                },
                'EgJNZ': _0x2217cd(659),
                'Agdxx': _0x2217cd(660)
            };
        let _0x45b4a0, _0xf79694, _0x579b01, _0x1f38e9;
        const _0x380f0f = atom['getAppName'](), _0x850d0 = this[_0x2217cd(521)][_0x2217cd(661)](), _0x261a7d = _0x278e95[_0x2217cd(662)](_0x850d0, null) ? _0x850d0 : [], _0x278f7f = this[_0x2217cd(608)]();
        if (_0x278f7f) {
            _0x45b4a0 = _0x278e95[_0x2217cd(663)](typeof _0x278f7f[_0x2217cd(664)], _0x278e95[_0x2217cd(665)]) ? _0x278f7f[_0x2217cd(664)]() : undefined;
            const _0x1cfe81 = _0x278e95[_0x2217cd(666)](typeof _0x278f7f[_0x2217cd(667)], 'function') ? _0x278f7f[_0x2217cd(667)]() : undefined;
            _0xf79694 = _0x278e95['jmfFl'](_0x1cfe81, null) ? _0x278e95['LeIku'](typeof _0x278f7f[_0x2217cd(668)], _0x278e95[_0x2217cd(665)]) ? _0x278f7f['getTitle']() : undefined : _0x1cfe81, _0x579b01 = _[_0x2217cd(669)](_0x261a7d, _0x55cfc0 => _0x45b4a0 === _0x55cfc0 || (_0x45b4a0 != null ? _0x45b4a0['startsWith'](_0x55cfc0 + path[_0x2217cd(670)]) : undefined));
        }
        _0x278e95[_0x2217cd(671)](_0xf79694, null) && (_0xf79694 = _0x278e95['wKxbR']);
        _0x278e95['RFlGL'](_0x579b01, null) && (_0x579b01 = _0x45b4a0 ? path[_0x2217cd(672)](_0x45b4a0) : _0x261a7d[-5 * 1784 + -1348 * 2 + 132 * 88]);
        _0x579b01 != null && (_0x579b01 = fs[_0x2217cd(673)](_0x579b01));
        const _0x45291a = [];
        if (_0x278e95['fWGnX'](_0x278f7f, null) && _0x278e95[_0x2217cd(674)](_0x579b01, null))
            _0x45291a[_0x2217cd(593)](_0xf79694, _0x579b01), _0x1f38e9 = _0x278e95[_0x2217cd(674)](_0x45b4a0, null) ? _0x45b4a0 : _0x579b01;
        else
            _0x278e95[_0x2217cd(674)](_0x579b01, null) ? (_0x45291a[_0x2217cd(593)](_0x579b01), _0x1f38e9 = _0x579b01) : (_0x45291a['push'](_0xf79694), _0x1f38e9 = '');
        _0x278e95[_0x2217cd(675)](process[_0x2217cd(676)], _0x278e95[_0x2217cd(677)]) && _0x45291a[_0x2217cd(593)](_0x380f0f), document[_0x2217cd(678)] = _0x45291a[_0x2217cd(679)](_0x2217cd(680)), this[_0x2217cd(525)][_0x2217cd(681)](_0x1f38e9), this[_0x2217cd(532)]['emit'](_0x278e95[_0x2217cd(682)]);
    }
    ['updateDocumentEdited']() {
        const _0x4e7a6c = _0x4a6156, _0x16f434 = {
                'qSxud': function (_0x8c652f, _0x193776) {
                    return _0x8c652f != _0x193776;
                }
            }, _0x5b2942 = this['getActivePaneItem'](), _0x3edc2a = _0x16f434[_0x4e7a6c(683)](_0x5b2942, null) && typeof _0x5b2942[_0x4e7a6c(684)] === _0x4e7a6c(657) ? _0x5b2942[_0x4e7a6c(684)]() || ![] : ![];
        this[_0x4e7a6c(525)][_0x4e7a6c(685)](_0x3edc2a);
    }
    [_0x4a6156(686)](_0xa444c2) {
        const _0x1bef4e = _0x4a6156, _0x354634 = { 'FwXlJ': _0x1bef4e(602) };
        return this[_0x1bef4e(532)]['on'](_0x354634[_0x1bef4e(687)], _0xa444c2);
    }
    ['observeTextEditors'](_0x23760c) {
        const _0x177229 = _0x4a6156, _0xa32fde = {
                'mCyKi': function (_0x16d476, _0x2a752d) {
                    return _0x16d476(_0x2a752d);
                }
            };
        for (let _0x26e4ef of this['getTextEditors']()) {
            _0xa32fde[_0x177229(688)](_0x23760c, _0x26e4ef);
        }
        return this['onDidAddTextEditor'](({textEditor: _0x2e5e01}) => _0x23760c(_0x2e5e01));
    }
    [_0x4a6156(689)](_0x429912) {
        const _0x5bafa1 = _0x4a6156;
        return new CompositeDisposable(...this[_0x5bafa1(648)]()[_0x5bafa1(690)](_0x2526cd => _0x2526cd[_0x5bafa1(689)](_0x429912)));
    }
    [_0x4a6156(691)](_0x6fe693) {
        const _0x1930d3 = _0x4a6156;
        return this['emitter']['on'](_0x1930d3(611), _0x6fe693);
    }
    [_0x4a6156(692)](_0x1b57c4) {
        const _0x5a7939 = _0x4a6156, _0x9daea4 = { 'fAHKm': _0x5a7939(693) };
        return this[_0x5a7939(532)]['on'](_0x9daea4[_0x5a7939(694)], _0x1b57c4);
    }
    [_0x4a6156(695)](_0x17f426) {
        const _0x17c6e8 = _0x4a6156, _0x5e86e4 = { 'QAzkp': _0x17c6e8(613) };
        return this[_0x17c6e8(532)]['on'](_0x5e86e4[_0x17c6e8(696)], _0x17f426);
    }
    ['observeActivePaneItem'](_0x1344ae) {
        const _0x1112b9 = _0x4a6156;
        return _0x1344ae(this[_0x1112b9(608)]()), this[_0x1112b9(691)](_0x1344ae);
    }
    [_0x4a6156(697)](_0x3d928f) {
        const _0x52a8f0 = _0x4a6156;
        return _0x3d928f(this['getActiveTextEditor']()), this[_0x52a8f0(695)](_0x3d928f);
    }
    ['onDidOpen'](_0x2aae8e) {
        const _0x379fcb = _0x4a6156, _0x33902e = { 'MPOLV': _0x379fcb(698) };
        return this[_0x379fcb(532)]['on'](_0x33902e['MPOLV'], _0x2aae8e);
    }
    ['onDidAddPane'](_0x515b6d) {
        const _0x372d40 = _0x4a6156;
        return new CompositeDisposable(...this[_0x372d40(648)]()[_0x372d40(690)](_0x1d219b => _0x1d219b[_0x372d40(699)](_0x515b6d)));
    }
    [_0x4a6156(700)](_0xace157) {
        const _0x55d6a6 = _0x4a6156;
        return new CompositeDisposable(...this[_0x55d6a6(648)]()[_0x55d6a6(690)](_0x1474d9 => _0x1474d9[_0x55d6a6(700)](_0xace157)));
    }
    ['onDidDestroyPane'](_0x51355b) {
        const _0x470cca = _0x4a6156;
        return new CompositeDisposable(...this[_0x470cca(648)]()[_0x470cca(690)](_0x492540 => _0x492540['onDidDestroyPane'](_0x51355b)));
    }
    [_0x4a6156(649)](_0x370bb3) {
        const _0x1a9d39 = _0x4a6156;
        return new CompositeDisposable(...this[_0x1a9d39(648)]()['map'](_0x497a67 => _0x497a67['observePanes'](_0x370bb3)));
    }
    [_0x4a6156(701)](_0x44cc89) {
        const _0x42aae5 = _0x4a6156, _0xfe3029 = { 'BxFCs': _0x42aae5(605) };
        return this['emitter']['on'](_0xfe3029[_0x42aae5(702)], _0x44cc89);
    }
    [_0x4a6156(703)](_0x3afa9d) {
        const _0x3931be = _0x4a6156, _0x5d7d58 = {
                'eIQKg': function (_0x2a03e7, _0x5d0765) {
                    return _0x2a03e7(_0x5d0765);
                }
            };
        return _0x5d7d58['eIQKg'](_0x3afa9d, this[_0x3931be(606)]()), this[_0x3931be(701)](_0x3afa9d);
    }
    ['onDidAddPaneItem'](_0x210bb8) {
        const _0x574c72 = _0x4a6156;
        return new CompositeDisposable(...this[_0x574c72(648)]()[_0x574c72(690)](_0x2346c4 => _0x2346c4[_0x574c72(704)](_0x210bb8)));
    }
    [_0x4a6156(705)](_0x1d2513) {
        const _0x32885f = _0x4a6156;
        return new CompositeDisposable(...this[_0x32885f(648)]()[_0x32885f(690)](_0xe25e20 => _0xe25e20[_0x32885f(705)](_0x1d2513)));
    }
    [_0x4a6156(706)](_0x3152f2) {
        const _0x4ed1dd = _0x4a6156;
        return new CompositeDisposable(...this[_0x4ed1dd(648)]()[_0x4ed1dd(690)](_0x10b61b => _0x10b61b[_0x4ed1dd(706)](_0x3152f2)));
    }
    [_0x4a6156(707)](_0x1c0f7e) {
        const _0xb3955c = _0x4a6156;
        return this[_0xb3955c(532)]['on'](_0xb3955c(708), _0x1c0f7e);
    }
    [_0x4a6156(709)](_0x17b4a2) {
        const _0x801cb5 = _0x4a6156, _0x349e00 = { 'WjBth': _0x801cb5(660) };
        return this[_0x801cb5(532)]['on'](_0x349e00[_0x801cb5(710)], _0x17b4a2);
    }
    async 'open'(_0x26ded6, _0x16146f = {}) {
        const _0x2feaa2 = _0x4a6156, _0x3cf159 = {
                'zTfif': function (_0xa5e53c, _0x39020e) {
                    return _0xa5e53c === _0x39020e;
                },
                'WnDKr': _0x2feaa2(711),
                'MekFu': 'function',
                'cdhbg': _0x2feaa2(712),
                'UUFgw': 'win32',
                'PpzVt': function (_0x70aec2, _0x10cd97) {
                    return _0x70aec2 || _0x10cd97;
                },
                'aUYRM': 'left',
                'exNLc': _0x2feaa2(509),
                'DcCKV': 'down',
                'UWaVM': function (_0x38ed9e, _0x35b209) {
                    return _0x38ed9e != _0x35b209;
                },
                'ToBRF': function (_0x1b9326, _0x793ea1) {
                    return _0x1b9326 === _0x793ea1;
                },
                'FXDUb': function (_0x581abc, _0x448559) {
                    return _0x581abc >= _0x448559;
                },
                'GgsFr': function (_0xfc308c, _0x1c691c) {
                    return _0xfc308c === _0x1c691c;
                },
                'WiWxv': _0x2feaa2(698)
            };
        let _0x3f41c9, _0x6f880d;
        if (_0x3cf159[_0x2feaa2(713)](typeof _0x26ded6, _0x3cf159['WnDKr']))
            _0x3f41c9 = this['project']['resolvePath'](_0x26ded6);
        else {
            if (_0x26ded6) {
                _0x6f880d = _0x26ded6;
                if (_0x3cf159['zTfif'](typeof _0x6f880d['getURI'], _0x3cf159[_0x2feaa2(714)]))
                    _0x3f41c9 = _0x6f880d[_0x2feaa2(655)]();
            }
        }
        let _0x5859d9 = () => {
        };
        if (_0x3f41c9) {
            const _0x4bbaa0 = this[_0x2feaa2(715)][_0x2feaa2(577)](_0x3f41c9);
            !_0x4bbaa0 ? this[_0x2feaa2(715)][_0x2feaa2(716)](_0x3f41c9, new Promise(_0xdfd25d => {
                _0x5859d9 = _0xdfd25d;
            })) : await _0x4bbaa0;
        }
        try {
            !atom['config'][_0x2feaa2(577)](_0x3cf159['cdhbg']) && (_0x16146f['pending'] = ![]);
            _0x3f41c9 && (!url[_0x2feaa2(717)](_0x3f41c9)[_0x2feaa2(718)] || process[_0x2feaa2(676)] === _0x3cf159[_0x2feaa2(719)]) && this[_0x2feaa2(525)][_0x2feaa2(720)](_0x3f41c9);
            let _0xaaf885, _0x19cb49;
            if (_0x3cf159['PpzVt'](_0x6f880d, _0x3f41c9)) {
                if (_0x16146f[_0x2feaa2(721)])
                    _0xaaf885 = _0x16146f[_0x2feaa2(721)];
                else {
                    if (_0x16146f['searchAllPanes'])
                        _0xaaf885 = _0x6f880d ? this[_0x2feaa2(722)](_0x6f880d) : this[_0x2feaa2(723)](_0x3f41c9);
                    else {
                        let _0x33b627;
                        if (_0x3f41c9)
                            _0x33b627 = this[_0x2feaa2(724)](_0x3f41c9);
                        if (!_0x33b627)
                            _0x33b627 = this[_0x2feaa2(609)]();
                        _0xaaf885 = _0x33b627[_0x2feaa2(606)]();
                        switch (_0x16146f[_0x2feaa2(560)]) {
                        case _0x3cf159[_0x2feaa2(725)]:
                            _0xaaf885 = _0xaaf885[_0x2feaa2(726)]();
                            break;
                        case _0x3cf159[_0x2feaa2(727)]:
                            _0xaaf885 = _0xaaf885[_0x2feaa2(728)]();
                            break;
                        case 'up':
                            _0xaaf885 = _0xaaf885[_0x2feaa2(729)]();
                            break;
                        case _0x3cf159[_0x2feaa2(730)]:
                            _0xaaf885 = _0xaaf885[_0x2feaa2(731)]();
                            break;
                        }
                    }
                }
                _0xaaf885 && (_0x6f880d ? _0x19cb49 = _0xaaf885['getItems']()['includes'](_0x6f880d) : (_0x6f880d = _0xaaf885['itemForURI'](_0x3f41c9), _0x19cb49 = _0x3cf159[_0x2feaa2(732)](_0x6f880d, null)));
            }
            if (_0x6f880d)
                await Promise[_0x2feaa2(733)]();
            if (!_0x19cb49) {
                _0x6f880d = _0x6f880d || await this['createItemForURI'](_0x3f41c9, _0x16146f);
                if (!_0x6f880d)
                    return;
                if (_0x16146f[_0x2feaa2(721)])
                    _0xaaf885 = _0x16146f[_0x2feaa2(721)];
                else {
                    let _0x5e4631 = _0x16146f[_0x2feaa2(734)];
                    !_0x5e4631 && !_0x16146f[_0x2feaa2(560)] && _0x3f41c9 && this[_0x2feaa2(518)] && (_0x5e4631 = await this[_0x2feaa2(531)][_0x2feaa2(735)](_0x3f41c9));
                    !_0x5e4631 && typeof _0x6f880d[_0x2feaa2(652)] === _0x3cf159['MekFu'] && (_0x5e4631 = _0x6f880d[_0x2feaa2(652)]());
                    const _0x281169 = _0x3cf159[_0x2feaa2(736)](typeof _0x6f880d[_0x2feaa2(737)], _0x3cf159[_0x2feaa2(714)]) ? _0x6f880d[_0x2feaa2(737)]() : ALL_LOCATIONS;
                    _0x5e4631 = _0x281169[_0x2feaa2(738)](_0x5e4631) ? _0x5e4631 : _0x281169[2700 + 1831 * -1 + 79 * -11];
                    const _0x230ec5 = this[_0x2feaa2(538)][_0x5e4631] || this[_0x2feaa2(612)]();
                    _0xaaf885 = _0x230ec5['getActivePane']();
                    switch (_0x16146f[_0x2feaa2(560)]) {
                    case _0x3cf159['aUYRM']:
                        _0xaaf885 = _0xaaf885[_0x2feaa2(726)]();
                        break;
                    case _0x3cf159[_0x2feaa2(727)]:
                        _0xaaf885 = _0xaaf885[_0x2feaa2(739)]();
                        break;
                    case 'up':
                        _0xaaf885 = _0xaaf885[_0x2feaa2(729)]();
                        break;
                    case _0x3cf159[_0x2feaa2(730)]:
                        _0xaaf885 = _0xaaf885[_0x2feaa2(740)]();
                        break;
                    }
                }
            }
            !_0x16146f[_0x2feaa2(741)] && _0xaaf885[_0x2feaa2(742)]() === _0x6f880d && _0xaaf885[_0x2feaa2(743)]();
            this['itemOpened'](_0x6f880d);
            _0x3cf159[_0x2feaa2(736)](_0x16146f['activateItem'], ![]) ? _0xaaf885[_0x2feaa2(744)](_0x6f880d, { 'pending': _0x16146f[_0x2feaa2(741)] }) : _0xaaf885[_0x2feaa2(745)](_0x6f880d, { 'pending': _0x16146f['pending'] });
            _0x16146f[_0x2feaa2(746)] !== ![] && _0xaaf885['activate']();
            let _0x187091 = 2051 * 1 + -59 * 55 + -597 * -2, _0x387516 = -4394 + -1875 + 1 * 6269;
            !Number['isNaN'](_0x16146f[_0x2feaa2(747)]) && (_0x387516 = _0x16146f[_0x2feaa2(747)]);
            !Number[_0x2feaa2(748)](_0x16146f[_0x2feaa2(749)]) && (_0x187091 = _0x16146f[_0x2feaa2(749)]);
            (_0x387516 >= 1 * 4339 + -1 * 5339 + 1000 || _0x3cf159[_0x2feaa2(750)](_0x187091, -5426 + -1 * 2903 + 8329)) && (_0x3cf159[_0x2feaa2(736)](typeof _0x6f880d[_0x2feaa2(751)], _0x2feaa2(657)) && _0x6f880d[_0x2feaa2(751)]([
                _0x387516,
                _0x187091
            ]), _0x3cf159[_0x2feaa2(736)](typeof _0x6f880d[_0x2feaa2(752)], _0x3cf159[_0x2feaa2(714)]) && _0x6f880d[_0x2feaa2(752)](_0x387516), _0x3cf159['GgsFr'](typeof _0x6f880d[_0x2feaa2(753)], _0x3cf159[_0x2feaa2(714)]) && _0x6f880d[_0x2feaa2(753)]([
                _0x387516,
                _0x187091
            ], { 'center': !![] }));
            const _0x36c119 = _0xaaf885[_0x2feaa2(754)]();
            this['emitter'][_0x2feaa2(604)](_0x3cf159[_0x2feaa2(755)], {
                'uri': _0x3f41c9,
                'pane': _0xaaf885,
                'item': _0x6f880d,
                'index': _0x36c119
            }), _0x3f41c9 && this['incoming'][_0x2feaa2(654)](_0x3f41c9);
        } finally {
            _0x5859d9();
        }
        return _0x6f880d;
    }
    [_0x4a6156(756)](_0x459ae1) {
        const _0x18262f = _0x4a6156, _0x1b025a = {
                'QhKko': function (_0x35c19a, _0x3b236f) {
                    return _0x35c19a === _0x3b236f;
                },
                'MSoxm': function (_0x279c69, _0x501934) {
                    return _0x279c69 != _0x501934;
                },
                'DDKip': function (_0x1e8eeb, _0x17ec22) {
                    return _0x1e8eeb === _0x17ec22;
                },
                'aiiSW': _0x18262f(657)
            };
        let _0x1ba099 = ![];
        for (const _0x5be46c of this[_0x18262f(648)]()) {
            const _0x409f7b = _0x1b025a[_0x18262f(757)](_0x5be46c, this[_0x18262f(612)]());
            if (_0x409f7b || _0x5be46c[_0x18262f(758)]())
                for (const _0x2977e4 of _0x5be46c[_0x18262f(759)]()) {
                    const _0x531181 = _0x2977e4['getActiveItem'](), _0xce6a56 = _0x1b025a[_0x18262f(760)](_0x531181, null) && (_0x1b025a[_0x18262f(761)](_0x531181, _0x459ae1) || typeof _0x531181[_0x18262f(655)] === _0x1b025a['aiiSW'] && _0x531181[_0x18262f(655)]() === _0x459ae1);
                    _0xce6a56 && (_0x1ba099 = !![], _0x409f7b ? _0x2977e4[_0x18262f(762)](_0x531181) : _0x5be46c['hide']());
                }
        }
        return _0x1ba099;
    }
    [_0x4a6156(763)](_0x407029) {
        const _0x37d9bf = _0x4a6156;
        return this[_0x37d9bf(756)](_0x407029) ? Promise[_0x37d9bf(733)]() : this[_0x37d9bf(764)](_0x407029, { 'searchAllPanes': !![] });
    }
    [_0x4a6156(765)]() {
        const _0x367b75 = _0x4a6156, _0x5b626b = { 'zxZzX': _0x367b75(766) };
        return this[_0x367b75(764)](path[_0x367b75(679)](process[_0x367b75(767)], _0x5b626b[_0x367b75(768)]));
    }
    ['openSync'](_0x75f1a7 = '', _0x5f2b5b = {}) {
        const _0x3e254d = _0x4a6156, _0x3dc67d = {
                'XWGuk': function (_0x5f1959, _0x9e8cf4) {
                    return _0x5f1959 != _0x9e8cf4;
                },
                'GeICg': function (_0x4f30cb, _0x2aa551) {
                    return _0x4f30cb == _0x2aa551;
                }
            }, {
                initialLine: _0x1bd0cb,
                initialColumn: _0x5a0236
            } = _0x5f2b5b, _0x27f614 = _0x5f2b5b[_0x3e254d(746)] != null ? _0x5f2b5b[_0x3e254d(746)] : !![], _0x403000 = _0x3dc67d[_0x3e254d(769)](_0x5f2b5b[_0x3e254d(745)], null) ? _0x5f2b5b[_0x3e254d(745)] : !![], _0x45eb95 = this[_0x3e254d(521)][_0x3e254d(770)](_0x75f1a7);
        let _0x3f9f74 = this[_0x3e254d(606)]()[_0x3e254d(771)](_0x45eb95);
        if (_0x45eb95 && _0x3f9f74 == null)
            for (const _0xa5b89c of this[_0x3e254d(772)]()) {
                _0x3f9f74 = _0xa5b89c(_0x45eb95, _0x5f2b5b);
                if (_0x3f9f74)
                    break;
            }
        return _0x3dc67d[_0x3e254d(773)](_0x3f9f74, null) && (_0x3f9f74 = this[_0x3e254d(521)][_0x3e254d(774)](_0x45eb95, {
            'initialLine': _0x1bd0cb,
            'initialColumn': _0x5a0236
        })), _0x403000 && this[_0x3e254d(606)]()['activateItem'](_0x3f9f74), this['itemOpened'](_0x3f9f74), _0x27f614 && this[_0x3e254d(606)]()['activate'](), _0x3f9f74;
    }
    [_0x4a6156(775)](_0x4a8902, _0x4dcd00) {
        return this['open'](_0x4a8902, { 'pane': _0x4dcd00 });
    }
    async _0x4a6156(776)(_0x1fce3f, _0x388125) {
        const _0x484262 = _0x4a6156, _0x453d49 = {
                'HEqEI': function (_0x4ba529, _0x3050f6) {
                    return _0x4ba529 != _0x3050f6;
                },
                'WvsTl': function (_0x5e001d, _0x37acdc, _0x7cc777) {
                    return _0x5e001d(_0x37acdc, _0x7cc777);
                },
                'ccPmn': _0x484262(777),
                'mIwfM': _0x484262(778),
                'vMbEm': 'EPERM',
                'QtIlU': 'EBUSY',
                'lLBcj': 'ENXIO',
                'WmKir': _0x484262(779),
                'PVCPc': _0x484262(780),
                'EcPqB': _0x484262(781),
                'JoggR': _0x484262(782),
                'teVqc': _0x484262(783),
                'EpxcL': _0x484262(784),
                'FbPGD': _0x484262(785),
                'wbtYB': _0x484262(786),
                'jOmAY': function (_0x277757, _0x118f60) {
                    return _0x277757 != _0x118f60;
                }
            };
        if (_0x453d49['HEqEI'](_0x1fce3f, null))
            for (const _0x2ee76f of this[_0x484262(772)]()) {
                const _0x348cc8 = _0x453d49[_0x484262(787)](_0x2ee76f, _0x1fce3f, _0x388125);
                if (_0x453d49[_0x484262(788)](_0x348cc8, null))
                    return _0x348cc8;
            }
        try {
            const _0x1e3c77 = await this['openTextFile'](_0x1fce3f, _0x388125);
            return _0x1e3c77;
        } catch (_0xa05093) {
            switch (_0xa05093['code']) {
            case _0x453d49['ccPmn']:
                return Promise[_0x484262(733)]();
            case _0x453d49[_0x484262(789)]:
                this[_0x484262(522)][_0x484262(790)]('Permission denied \'' + _0xa05093[_0x484262(496)] + '\'');
                return Promise[_0x484262(733)]();
            case _0x453d49[_0x484262(791)]:
            case _0x453d49[_0x484262(792)]:
            case _0x453d49[_0x484262(793)]:
            case _0x453d49[_0x484262(794)]:
            case _0x453d49['PVCPc']:
            case _0x453d49['EcPqB']:
            case _0x453d49['JoggR']:
            case _0x453d49[_0x484262(795)]:
            case _0x453d49['EpxcL']:
            case _0x453d49[_0x484262(796)]:
            case _0x453d49['wbtYB']:
                this[_0x484262(522)][_0x484262(790)](_0x484262(797) + (_0x453d49['jOmAY'](_0xa05093[_0x484262(496)], null) ? _0xa05093[_0x484262(496)] : _0x1fce3f) + '\'', { 'detail': _0xa05093[_0x484262(798)] });
                return Promise[_0x484262(733)]();
            default:
                throw _0xa05093;
            }
        }
    }
    async _0x4a6156(799)(_0x5d043b, _0x29d2ad) {
        const _0x9fccee = _0x4a6156, _0x451a83 = {
                'mlTiw': function (_0x309f2d, _0x22eda8) {
                    return _0x309f2d === _0x22eda8;
                },
                'JJokb': 'CANCELLED',
                'DyAPg': 'Atom will be unresponsive during the loading of very large files.',
                'NoWNO': _0x9fccee(800),
                'PZQgm': _0x9fccee(801),
                'kJDCd': function (_0x59a56f, _0x411c04) {
                    return _0x59a56f != _0x411c04;
                },
                'LVoGq': function (_0x39cdb2, _0x204392) {
                    return _0x39cdb2 >= _0x204392;
                }
            }, _0x5eb728 = this[_0x9fccee(521)]['resolvePath'](_0x5d043b);
        if (_0x451a83[_0x9fccee(802)](_0x5eb728, null))
            try {
                fs[_0x9fccee(803)](fs['openSync'](_0x5eb728, 'r'));
            } catch (_0x3cc813) {
                if (_0x3cc813['code'] !== _0x9fccee(804))
                    throw _0x3cc813;
            }
        const _0x36aaf9 = fs['getSizeSync'](_0x5eb728);
        _0x451a83[_0x9fccee(805)](_0x36aaf9, this[_0x9fccee(520)][_0x9fccee(577)]('core.warnOnLargeFileLimit') * (-758018 + -1 * 121787 + 1928381)) && await new Promise((_0x5be9fe, _0x5cd4c3) => {
            const _0x10887c = _0x9fccee;
            this[_0x10887c(525)][_0x10887c(806)]({
                'message': _0x451a83['DyAPg'],
                'detail': _0x451a83[_0x10887c(807)],
                'buttons': [
                    'Proceed',
                    _0x451a83['PZQgm']
                ]
            }, _0x4fe7d5 => {
                const _0xbdf9fd = _0x10887c;
                if (_0x451a83[_0xbdf9fd(808)](_0x4fe7d5, 1079 + 7141 + -8219)) {
                    const _0x48c596 = new Error();
                    _0x48c596[_0xbdf9fd(809)] = _0x451a83[_0xbdf9fd(810)], _0x5cd4c3(_0x48c596);
                } else
                    _0x5be9fe();
            });
        });
        const _0x12437f = await this[_0x9fccee(521)][_0x9fccee(811)](_0x5eb728, _0x29d2ad);
        return this[_0x9fccee(528)]['build'](Object[_0x9fccee(812)]({
            'buffer': _0x12437f,
            'autoHeight': ![]
        }, _0x29d2ad));
    }
    [_0x4a6156(813)](_0xd05db) {
        const _0x5c6902 = _0x4a6156, _0x1fc1b1 = {
                'WevaT': function (_0x5de32a, _0x477220) {
                    return _0x5de32a == _0x477220;
                }
            };
        if (_0x1fc1b1[_0x5c6902(814)](_0xd05db, null))
            return;
        this[_0x5c6902(519)][_0x5c6902(815)](_0xd05db['scopeName'] + ':root-scope-used'), this[_0x5c6902(519)][_0x5c6902(815)](_0xd05db[_0x5c6902(816)] + _0x5c6902(817));
    }
    [_0x4a6156(818)](_0x4679f1) {
        const _0x5ca9d8 = _0x4a6156, _0x3be54b = {
                'YdXkn': function (_0x3225c9, _0x58205f) {
                    return _0x3225c9 instanceof _0x58205f;
                }
            };
        return _0x3be54b[_0x5ca9d8(819)](_0x4679f1, TextEditor);
    }
    ['buildTextEditor'](_0x137ac1) {
        const _0x49846e = _0x4a6156, _0xda8818 = this[_0x49846e(528)]['build'](_0x137ac1), _0xeb2c86 = this[_0x49846e(528)][_0x49846e(639)](_0xda8818);
        return _0xda8818['onDidDestroy'](() => _0xeb2c86[_0x49846e(567)]()), _0xda8818;
    }
    [_0x4a6156(820)]() {
        const _0x7b48b1 = _0x4a6156, _0x1e0aae = this[_0x7b48b1(533)]['pop']();
        return _0x1e0aae ? this[_0x7b48b1(764)](_0x1e0aae) : Promise[_0x7b48b1(733)]();
    }
    [_0x4a6156(821)](_0x185c14) {
        const _0xeb4061 = _0x4a6156;
        return this[_0xeb4061(822)][_0xeb4061(593)](_0x185c14), new Disposable(() => {
            const _0x5632ba = _0xeb4061;
            _[_0x5632ba(823)](this['openers'], _0x185c14);
        });
    }
    ['getOpeners']() {
        const _0x57d997 = _0x4a6156;
        return this[_0x57d997(822)];
    }
    ['getPaneItems']() {
        const _0x1e4ce9 = _0x4a6156;
        return _[_0x1e4ce9(824)](this[_0x1e4ce9(648)]()[_0x1e4ce9(690)](_0x4294c8 => _0x4294c8[_0x1e4ce9(825)]()));
    }
    [_0x4a6156(608)]() {
        const _0x207d7f = _0x4a6156;
        return this['getActivePaneContainer']()[_0x207d7f(608)]();
    }
    [_0x4a6156(826)]() {
        return this['getPaneItems']()['filter'](_0x5b6327 => _0x5b6327 instanceof TextEditor);
    }
    [_0x4a6156(827)]() {
        const _0x47af42 = _0x4a6156, _0x3e0b1f = {
                'kfdaH': function (_0x1e8596, _0x21898f) {
                    return _0x1e8596 instanceof _0x21898f;
                }
            }, _0x2bec74 = this['getCenter']()[_0x47af42(608)]();
        if (_0x3e0b1f[_0x47af42(828)](_0x2bec74, TextEditor))
            return _0x2bec74;
    }
    [_0x4a6156(829)]() {
        const _0x2f6adf = _0x4a6156;
        this[_0x2f6adf(648)]()[_0x2f6adf(565)](_0x547266 => {
            const _0x425acf = _0x2f6adf;
            _0x547266[_0x425acf(829)]();
        });
    }
    [_0x4a6156(830)](_0x275ba6) {
        const _0x3caed9 = _0x4a6156;
        return Promise[_0x3caed9(831)](this['getPaneContainers']()[_0x3caed9(690)](_0x554fe0 => _0x554fe0[_0x3caed9(830)](_0x275ba6)))[_0x3caed9(832)](_0x197b97 => !_0x197b97[_0x3caed9(738)](![]));
    }
    [_0x4a6156(833)]() {
        const _0x540a4b = _0x4a6156;
        return this[_0x540a4b(612)]()[_0x540a4b(606)]()['saveActiveItem']();
    }
    [_0x4a6156(834)]() {
        const _0x3f0283 = _0x4a6156;
        this[_0x3f0283(612)]()[_0x3f0283(606)]()[_0x3f0283(835)]();
    }
    ['destroyActivePaneItem']() {
        const _0x287f42 = _0x4a6156;
        return this[_0x287f42(606)]()[_0x287f42(836)]();
    }
    ['getActivePaneContainer']() {
        const _0x31176b = _0x4a6156;
        return this[_0x31176b(542)];
    }
    ['getPanes']() {
        const _0x56c739 = _0x4a6156;
        return _[_0x56c739(824)](this[_0x56c739(648)]()['map'](_0x1560ea => _0x1560ea[_0x56c739(759)]()));
    }
    [_0x4a6156(837)]() {
        const _0x44a259 = _0x4a6156;
        return _[_0x44a259(824)](this[_0x44a259(838)]()['map'](_0x522380 => _0x522380[_0x44a259(759)]()));
    }
    ['getActivePane']() {
        const _0x5b62d6 = _0x4a6156;
        return this[_0x5b62d6(609)]()['getActivePane']();
    }
    [_0x4a6156(839)]() {
        return this['getActivePaneContainer']()['activateNextPane']();
    }
    [_0x4a6156(840)]() {
        const _0x24070c = _0x4a6156;
        return this[_0x24070c(609)]()[_0x24070c(840)]();
    }
    [_0x4a6156(724)](_0x34eb83) {
        const _0x5b8903 = _0x4a6156;
        return this['getPaneContainers']()[_0x5b8903(669)](_0x1be563 => _0x1be563[_0x5b8903(723)](_0x34eb83));
    }
    [_0x4a6156(841)](_0x42ddcd) {
        const _0x150047 = _0x4a6156;
        return this[_0x150047(648)]()['find'](_0x3c5a2c => _0x3c5a2c['paneForItem'](_0x42ddcd));
    }
    [_0x4a6156(723)](_0x330a56) {
        const _0x3b45cf = _0x4a6156, _0xee4368 = {
                'FynwI': function (_0x218d07, _0x2b28d4) {
                    return _0x218d07 != _0x2b28d4;
                }
            };
        for (let _0x3807cb of this[_0x3b45cf(648)]()) {
            const _0x19e66d = _0x3807cb[_0x3b45cf(723)](_0x330a56);
            if (_0xee4368['FynwI'](_0x19e66d, null))
                return _0x19e66d;
        }
    }
    [_0x4a6156(722)](_0xf58787) {
        const _0xe017d7 = _0x4a6156, _0x480564 = {
                'pOEOo': function (_0x28e186, _0x3ec993) {
                    return _0x28e186 != _0x3ec993;
                }
            };
        for (let _0x57b802 of this[_0xe017d7(648)]()) {
            const _0x46b739 = _0x57b802[_0xe017d7(722)](_0xf58787);
            if (_0x480564[_0xe017d7(842)](_0x46b739, null))
                return _0x46b739;
        }
    }
    [_0x4a6156(843)]() {
        const _0x46a320 = {
                'KYkJU': function (_0x432973, _0x75a4da) {
                    return _0x432973 != _0x75a4da;
                }
            }, _0x366db6 = this['getActivePane']();
        _0x46a320['KYkJU'](_0x366db6, null) && _0x366db6['destroy']();
    }
    [_0x4a6156(844)]() {
        const _0x2d8c9e = _0x4a6156, _0xd541cb = {
                'cZHUC': function (_0x53828a, _0x289edd) {
                    return _0x53828a != _0x289edd;
                },
                'vKHJJ': function (_0xe75894, _0xc840fd) {
                    return _0xe75894 > _0xc840fd;
                },
                'SLRHI': _0x2d8c9e(845)
            };
        if (_0xd541cb[_0x2d8c9e(846)](this[_0x2d8c9e(612)]()['getActivePaneItem'](), null))
            this[_0x2d8c9e(612)]()[_0x2d8c9e(606)]()['destroyActiveItem']();
        else {
            if (_0xd541cb[_0x2d8c9e(847)](this[_0x2d8c9e(612)]()['getPanes']()[_0x2d8c9e(598)], -16 * -372 + 389 * 23 + -1 * 14898))
                this[_0x2d8c9e(612)]()[_0x2d8c9e(843)]();
            else
                this[_0x2d8c9e(520)]['get'](_0xd541cb['SLRHI']) && atom[_0x2d8c9e(848)]();
        }
    }
    ['increaseFontSize']() {
        const _0x509990 = _0x4a6156, _0xffd07d = {
                'RMsYo': function (_0x7c421a, _0x557479) {
                    return _0x7c421a + _0x557479;
                },
                'McHlf': _0x509990(849)
            };
        this['config'][_0x509990(716)](_0x509990(849), _0xffd07d['RMsYo'](this[_0x509990(520)][_0x509990(577)](_0xffd07d['McHlf']), 5495 + -8 * -1010 + 2 * -6787));
    }
    ['decreaseFontSize']() {
        const _0x4d03a7 = _0x4a6156, _0x1da950 = {
                'HOWJr': 'editor.fontSize',
                'IrqIv': function (_0x4fe898, _0x2a7ba8) {
                    return _0x4fe898 > _0x2a7ba8;
                }
            }, _0x439d4e = this[_0x4d03a7(520)]['get'](_0x1da950[_0x4d03a7(850)]);
        _0x1da950[_0x4d03a7(851)](_0x439d4e, -1 * -7549 + 481 + -1 * 8029) && this[_0x4d03a7(520)][_0x4d03a7(716)](_0x4d03a7(849), _0x439d4e - (916 + -4702 + -3787 * -1));
    }
    [_0x4a6156(852)]() {
        const _0x212d79 = _0x4a6156, _0x3a018f = {
                'DlmZC': _0x212d79(849),
                'CaaUh': _0x212d79(853)
            };
        this['config'][_0x212d79(716)](_0x3a018f['DlmZC'], this[_0x212d79(520)][_0x212d79(577)](_0x3a018f['CaaUh']));
    }
    [_0x4a6156(854)](_0xc86b99) {
        const _0x1bc731 = _0x4a6156, _0x3c5af5 = {
                'maznp': function (_0x72b61a, _0x38f625) {
                    return _0x72b61a === _0x38f625;
                },
                'eneNW': _0x1bc731(657),
                'umufr': function (_0x378906, _0x56fb68) {
                    return _0x378906 === _0x56fb68;
                }
            };
        let _0x427a66;
        if (_0x3c5af5['maznp'](typeof _0xc86b99[_0x1bc731(655)], _0x3c5af5['eneNW']))
            _0x427a66 = _0xc86b99[_0x1bc731(655)]();
        else
            _0x3c5af5[_0x1bc731(855)](typeof _0xc86b99[_0x1bc731(856)], _0x3c5af5[_0x1bc731(857)]) && (_0x427a66 = _0xc86b99[_0x1bc731(856)]());
        _0x427a66 != null && _['remove'](this[_0x1bc731(533)], _0x427a66);
    }
    ['didDestroyPaneItem']({item: _0x547b2d}) {
        const _0x238258 = _0x4a6156, _0xc050ed = {
                'mmLRO': function (_0x189c5a, _0x2c5e47) {
                    return _0x189c5a === _0x2c5e47;
                },
                'sAcGX': _0x238258(657),
                'SPkVE': function (_0x1c4544, _0xcedf47) {
                    return _0x1c4544 != _0xcedf47;
                }
            };
        let _0xf9ae82;
        if (_0xc050ed[_0x238258(858)](typeof _0x547b2d[_0x238258(655)], _0xc050ed[_0x238258(859)]))
            _0xf9ae82 = _0x547b2d['getURI']();
        else
            typeof _0x547b2d[_0x238258(856)] === _0xc050ed[_0x238258(859)] && (_0xf9ae82 = _0x547b2d[_0x238258(856)]());
        _0xc050ed[_0x238258(860)](_0xf9ae82, null) && this['destroyedItemURIs'][_0x238258(593)](_0xf9ae82);
    }
    ['destroyed']() {
        const _0x48fc34 = _0x4a6156, _0x43d133 = {
                'qFuHW': function (_0x3a691d, _0x435b57) {
                    return _0x3a691d != _0x435b57;
                }
            }, _0x3158ba = _0x48fc34(861)[_0x48fc34(560)]('|');
        let _0x53d917 = -7915 + -1 * 6978 + 14893;
        while (!![]) {
            switch (_0x3158ba[_0x53d917++]) {
            case '0':
                this[_0x48fc34(538)][_0x48fc34(508)][_0x48fc34(561)]();
                continue;
            case '1':
                this['paneContainers']['right'][_0x48fc34(561)]();
                continue;
            case '2':
                if (this[_0x48fc34(551)])
                    this[_0x48fc34(551)][_0x48fc34(561)]();
                continue;
            case '3':
                this[_0x48fc34(538)][_0x48fc34(507)][_0x48fc34(561)]();
                continue;
            case '4':
                this[_0x48fc34(633)]();
                continue;
            case '5':
                this[_0x48fc34(538)][_0x48fc34(510)][_0x48fc34(561)]();
                continue;
            case '6':
                _0x43d133[_0x48fc34(862)](this[_0x48fc34(617)], null) && this[_0x48fc34(617)][_0x48fc34(567)]();
                continue;
            }
            break;
        }
    }
    [_0x4a6156(612)]() {
        const _0x543fee = _0x4a6156;
        return this['paneContainers'][_0x543fee(507)];
    }
    [_0x4a6156(645)]() {
        const _0x2bbb47 = _0x4a6156;
        return this['paneContainers'][_0x2bbb47(508)];
    }
    [_0x4a6156(863)]() {
        const _0x5680fd = _0x4a6156;
        return this[_0x5680fd(538)]['right'];
    }
    ['getBottomDock']() {
        const _0x2aa751 = _0x4a6156;
        return this[_0x2aa751(538)][_0x2aa751(510)];
    }
    [_0x4a6156(648)]() {
        const _0x420a0c = _0x4a6156;
        return [
            this['paneContainers']['center'],
            this[_0x420a0c(538)][_0x420a0c(508)],
            this[_0x420a0c(538)][_0x420a0c(509)],
            this[_0x420a0c(538)][_0x420a0c(510)]
        ];
    }
    [_0x4a6156(838)]() {
        const _0x4156c0 = _0x4a6156, _0x3a73a4 = this['getCenter']();
        return atom[_0x4156c0(864)]['getPaneContainers']()[_0x4156c0(865)](_0xdd6dfb => _0xdd6dfb === _0x3a73a4 || _0xdd6dfb[_0x4156c0(758)]());
    }
    [_0x4a6156(866)]() {
        const _0x5132ae = _0x4a6156;
        return this[_0x5132ae(867)]('bottom');
    }
    [_0x4a6156(868)](_0x376c93) {
        const _0x4967aa = _0x4a6156, _0x1e924b = { 'JTBtV': 'bottom' };
        return this[_0x4967aa(869)](_0x1e924b[_0x4967aa(870)], _0x376c93);
    }
    [_0x4a6156(871)]() {
        const _0xf50e32 = _0x4a6156, _0xf8ffa3 = { 'WTvWj': 'left' };
        return this[_0xf50e32(867)](_0xf8ffa3['WTvWj']);
    }
    [_0x4a6156(872)](_0x11329e) {
        const _0x36960b = _0x4a6156;
        return this[_0x36960b(869)]('left', _0x11329e);
    }
    [_0x4a6156(873)]() {
        const _0x2a7614 = _0x4a6156, _0x43e3e2 = { 'Qytor': 'right' };
        return this['getPanels'](_0x43e3e2[_0x2a7614(874)]);
    }
    [_0x4a6156(875)](_0x2a6433) {
        const _0x12fc8c = _0x4a6156, _0x38b8c7 = { 'MUXsw': _0x12fc8c(509) };
        return this['addPanel'](_0x38b8c7[_0x12fc8c(876)], _0x2a6433);
    }
    ['getTopPanels']() {
        const _0x44ee0a = _0x4a6156, _0x322dc3 = { 'dXrGA': _0x44ee0a(557) };
        return this[_0x44ee0a(867)](_0x322dc3['dXrGA']);
    }
    ['addTopPanel'](_0x181665) {
        const _0x19aba1 = _0x4a6156;
        return this[_0x19aba1(869)](_0x19aba1(557), _0x181665);
    }
    [_0x4a6156(877)]() {
        const _0x1de9a1 = _0x4a6156, _0x5ea7b1 = { 'hxNox': _0x1de9a1(512) };
        return this[_0x1de9a1(867)](_0x5ea7b1[_0x1de9a1(878)]);
    }
    ['addHeaderPanel'](_0x42531c) {
        const _0x1dc867 = _0x4a6156, _0x79c0b5 = { 'XRIKZ': _0x1dc867(512) };
        return this[_0x1dc867(869)](_0x79c0b5[_0x1dc867(879)], _0x42531c);
    }
    [_0x4a6156(880)]() {
        const _0xc8997 = _0x4a6156, _0x57ac88 = { 'ZdnCE': _0xc8997(558) };
        return this[_0xc8997(867)](_0x57ac88['ZdnCE']);
    }
    [_0x4a6156(881)](_0x1f07bc) {
        const _0xf53c54 = _0x4a6156;
        return this['addPanel'](_0xf53c54(558), _0x1f07bc);
    }
    [_0x4a6156(882)]() {
        return this['getPanels']('modal');
    }
    [_0x4a6156(883)](_0x9cd944 = {}) {
        const _0x19f28d = _0x4a6156, _0x5e4b77 = { 'UEeCW': _0x19f28d(545) };
        return this[_0x19f28d(869)](_0x5e4b77[_0x19f28d(884)], _0x9cd944);
    }
    [_0x4a6156(885)](_0x39e4f0) {
        const _0x925a62 = _0x4a6156, _0x113dfb = {
                'Mjvzb': function (_0x5ef285, _0x5a4002) {
                    return _0x5ef285 != _0x5a4002;
                }
            };
        for (let _0x4ef0d6 in this[_0x925a62(564)]) {
            const _0x498656 = this[_0x925a62(564)][_0x4ef0d6], _0x9a0693 = _0x498656[_0x925a62(885)](_0x39e4f0);
            if (_0x113dfb[_0x925a62(886)](_0x9a0693, null))
                return _0x9a0693;
        }
        return null;
    }
    [_0x4a6156(867)](_0x44014b) {
        const _0x5b6649 = _0x4a6156;
        return this[_0x5b6649(564)][_0x44014b][_0x5b6649(867)]();
    }
    [_0x4a6156(869)](_0x1f69d5, _0x202764) {
        const _0x413aa4 = _0x4a6156, _0x2bd4a1 = {
                'ddjtO': function (_0x4483da, _0x2f5981) {
                    return _0x4483da == _0x2f5981;
                }
            };
        return _0x2bd4a1[_0x413aa4(887)](_0x202764, null) && (_0x202764 = {}), this['panelContainers'][_0x1f69d5][_0x413aa4(869)](new Panel(_0x202764, this[_0x413aa4(523)]));
    }
    [_0x4a6156(888)](_0x417bd2, _0x5a7583 = {}, _0x265ebc) {
        const _0x203e25 = _0x4a6156, _0x5e5eb1 = {
                'YwmpC': function (_0x46d071, _0xd34714) {
                    return _0x46d071(_0xd34714);
                },
                'JGdUx': _0x203e25(889),
                'zRrvV': function (_0x2e97f5, _0x4469fd) {
                    return _0x2e97f5(_0x4469fd);
                },
                'AhxmA': _0x203e25(890),
                'TjMDA': function (_0x382852, _0x3f0d52) {
                    return _0x382852(_0x3f0d52);
                },
                'jOgEe': function (_0x1fee26, _0x385323) {
                    return _0x1fee26 > _0x385323;
                },
                'WihJk': function (_0x19c5b3, _0x285953) {
                    return _0x19c5b3(_0x285953);
                }
            };
        _['isFunction'](_0x5a7583) && (_0x265ebc = _0x5a7583, _0x5a7583 = {});
        const _0x2237a8 = new Map();
        for (const _0x4c74c7 of this[_0x203e25(521)][_0x203e25(891)]()) {
            let _0x4926bd = _0x5a7583[_0x203e25(892)] ? this['ripgrepDirectorySearcher'] : this[_0x203e25(535)];
            for (const _0x476ef2 of this[_0x203e25(584)]) {
                if (_0x476ef2[_0x203e25(893)](_0x4c74c7)) {
                    _0x4926bd = _0x476ef2;
                    break;
                }
            }
            let _0x518449 = _0x2237a8[_0x203e25(577)](_0x4926bd);
            !_0x518449 && (_0x518449 = [], _0x2237a8['set'](_0x4926bd, _0x518449)), _0x518449[_0x203e25(593)](_0x4c74c7);
        }
        let _0x4e15d2;
        if (_[_0x203e25(894)](_0x5a7583[_0x203e25(895)])) {
            const _0x2a84ab = _0x5a7583[_0x203e25(895)];
            let _0x28c323 = 15 * -249 + -2012 * 2 + -7759 * -1;
            const _0x42a7f0 = new Map();
            _0x4e15d2 = function (_0x12d1d1, _0x4c8b53) {
                const _0x4f1e7e = _0x203e25, _0x431560 = _0x42a7f0['get'](_0x12d1d1);
                return _0x431560 && (_0x28c323 -= _0x431560), _0x42a7f0[_0x4f1e7e(716)](_0x12d1d1, _0x4c8b53), _0x28c323 += _0x4c8b53, _0x2a84ab(_0x28c323);
            };
        } else
            _0x4e15d2 = function () {
            };
        const _0x1ead2f = [];
        _0x2237a8[_0x203e25(565)]((_0x4dc623, _0x27ab96) => {
            const _0x319650 = _0x203e25, _0x3ce41f = {
                    'inclusions': _0x5a7583[_0x319650(896)] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this[_0x319650(520)][_0x319650(577)](_0x5e5eb1[_0x319650(897)]),
                    'exclusions': this['config'][_0x319650(577)]('core.ignoredNames'),
                    'follow': this['config'][_0x319650(577)](_0x319650(898)),
                    'leadingContextLineCount': _0x5a7583[_0x319650(899)] || 66 + -15 * -35 + -591,
                    'trailingContextLineCount': _0x5a7583[_0x319650(900)] || -5127 + -8503 * -1 + -3376,
                    'PCRE2': _0x5a7583[_0x319650(901)],
                    'didMatch': _0x57f91f => {
                        const _0x14e929 = _0x319650;
                        if (!this[_0x14e929(521)][_0x14e929(902)](_0x57f91f[_0x14e929(903)]))
                            return _0x5e5eb1[_0x14e929(904)](_0x265ebc, _0x57f91f);
                    },
                    'didError'(_0x471e76) {
                        return _0x265ebc(null, _0x471e76);
                    },
                    'didSearchPaths'(_0x4bf8bc) {
                        return _0x4e15d2(_0x27ab96, _0x4bf8bc);
                    }
                }, _0x1ee214 = _0x27ab96[_0x319650(905)](_0x4dc623, _0x417bd2, _0x3ce41f);
            _0x1ead2f[_0x319650(593)](_0x1ee214);
        });
        const _0x54a9e4 = Promise[_0x203e25(831)](_0x1ead2f);
        for (let _0x4bf5ff of this[_0x203e25(521)][_0x203e25(906)]()) {
            if (_0x4bf5ff[_0x203e25(684)]()) {
                const _0x5a2683 = _0x4bf5ff[_0x203e25(664)]();
                if (!this[_0x203e25(521)][_0x203e25(907)](_0x5a2683))
                    continue;
                var _0x3ae3d0 = [];
                _0x4bf5ff['scan'](_0x417bd2, _0x5c6c9c => _0x3ae3d0['push'](_0x5c6c9c)), _0x5e5eb1[_0x203e25(908)](_0x3ae3d0[_0x203e25(598)], -2 * -4331 + 3 * -138 + -8248) && _0x5e5eb1[_0x203e25(909)](_0x265ebc, {
                    'filePath': _0x5a2683,
                    'matches': _0x3ae3d0
                });
            }
        }
        let _0x5f50c4 = ![];
        const _0x41ab15 = new Promise((_0x934ae1, _0x1ffc74) => {
            const _0x216ba3 = _0x203e25, _0x5cd172 = function () {
                    const _0x29247f = _0x32da;
                    _0x5f50c4 ? _0x5e5eb1[_0x29247f(910)](_0x934ae1, _0x5e5eb1['AhxmA']) : _0x5e5eb1[_0x29247f(911)](_0x934ae1, null);
                }, _0x1a4ed4 = function (_0x53461a) {
                    const _0xebaba9 = _0x32da;
                    for (let _0x1262be of _0x1ead2f) {
                        _0x1262be[_0xebaba9(912)]();
                    }
                    _0x1ffc74(_0x53461a);
                };
            _0x54a9e4[_0x216ba3(832)](_0x5cd172, _0x1a4ed4);
        });
        return _0x41ab15[_0x203e25(912)] = () => {
            _0x5f50c4 = !![], _0x1ead2f['map'](_0x6a0a80 => _0x6a0a80['cancel']());
        }, _0x41ab15;
    }
    [_0x4a6156(913)](_0x49ebfe, _0x3e4d8a, _0x12fa2b, _0x2f911c) {
        const _0x462bb3 = _0x4a6156, _0x54cc51 = {
                'AvVHr': function (_0x4b0575, _0x466ec6) {
                    return _0x4b0575 && _0x466ec6;
                },
                'LzHYD': function (_0x3d6cef) {
                    return _0x3d6cef();
                },
                'IYfPG': _0x462bb3(914),
                'pbVqU': 'replace:path-replaced',
                'kkOxG': 'replace:file-error',
                'YAfyc': function (_0x272fda, _0x1f5714) {
                    return _0x272fda(_0x1f5714);
                },
                'Gqhlp': function (_0x242b93) {
                    return _0x242b93();
                }
            };
        return new Promise((_0x54591e, _0x149acf) => {
            const _0x661ba8 = _0x462bb3, _0xf88750 = {
                    'XVcmM': function (_0x4dd4ce, _0x55d935) {
                        const _0x2eab11 = _0x32da;
                        return _0x54cc51[_0x2eab11(915)](_0x4dd4ce, _0x55d935);
                    },
                    'coCuS': function (_0x1b1001) {
                        const _0x17b384 = _0x32da;
                        return _0x54cc51[_0x17b384(916)](_0x1b1001);
                    }
                };
            let _0x1d3136;
            const _0xceb1d = this[_0x661ba8(521)][_0x661ba8(906)]()[_0x661ba8(690)](_0x2adbda => _0x2adbda[_0x661ba8(664)]()), _0x2fe7bc = _['difference'](_0x12fa2b, _0xceb1d);
            let _0x4267ae = !_0xceb1d[_0x661ba8(598)], _0x2e1194 = !_0x2fe7bc['length'];
            const _0x2da6dc = () => {
                const _0x550b95 = _0x661ba8;
                _0xf88750[_0x550b95(917)](_0x2e1194, _0x4267ae) && _0xf88750[_0x550b95(918)](_0x54591e);
            };
            if (!_0x2e1194[_0x661ba8(598)]) {
                let _0x2b1b50 = 'g';
                _0x49ebfe['multiline'] && (_0x2b1b50 += 'm');
                _0x49ebfe[_0x661ba8(919)] && (_0x2b1b50 += 'i');
                const _0x3730e0 = Task[_0x661ba8(920)](require[_0x661ba8(733)](_0x54cc51[_0x661ba8(921)]), _0x2fe7bc, _0x49ebfe[_0x661ba8(922)], _0x2b1b50, _0x3e4d8a, () => {
                    _0x2e1194 = !![], _0x2da6dc();
                });
                _0x3730e0['on'](_0x54cc51['pbVqU'], _0x2f911c), _0x3730e0['on'](_0x54cc51[_0x661ba8(923)], _0x468b8d => {
                    _0x2f911c(null, _0x468b8d);
                });
            }
            for (_0x1d3136 of this[_0x661ba8(521)][_0x661ba8(906)]()) {
                if (!_0x12fa2b[_0x661ba8(738)](_0x1d3136[_0x661ba8(664)]()))
                    continue;
                const _0x326227 = _0x1d3136[_0x661ba8(913)](_0x49ebfe, _0x3e4d8a, _0x2f911c);
                _0x326227 && _0x54cc51[_0x661ba8(924)](_0x2f911c, {
                    'filePath': _0x1d3136[_0x661ba8(664)](),
                    'replacements': _0x326227
                });
            }
            _0x4267ae = !![], _0x54cc51[_0x661ba8(925)](_0x2da6dc);
        });
    }
    ['checkoutHeadRevision'](_0x3d7e82) {
        const _0x32a48d = _0x4a6156, _0x5a72a0 = {
                'FbdID': function (_0x470442, _0x65e612) {
                    return _0x470442 === _0x65e612;
                },
                'YKAsJ': function (_0x1f18af) {
                    return _0x1f18af();
                },
                'tSvHh': _0x32a48d(926),
                'ZrRsM': _0x32a48d(927),
                'KCaNK': _0x32a48d(801),
                'gWFve': function (_0x4c1977) {
                    return _0x4c1977();
                }
            };
        if (_0x3d7e82[_0x32a48d(664)]()) {
            const _0x5786d9 = async () => {
                const _0x3c7fef = _0x32a48d, _0x24bae3 = await this[_0x3c7fef(521)][_0x3c7fef(928)](new Directory(_0x3d7e82[_0x3c7fef(929)]()));
                if (_0x24bae3)
                    _0x24bae3['checkoutHeadForEditor'](_0x3d7e82);
            };
            this[_0x32a48d(520)][_0x32a48d(577)](_0x5a72a0['tSvHh']) ? this[_0x32a48d(525)][_0x32a48d(806)]({
                'message': _0x5a72a0[_0x32a48d(930)],
                'detail': _0x32a48d(931) + _0x3d7e82[_0x32a48d(932)]() + _0x32a48d(933),
                'buttons': [
                    'OK',
                    _0x5a72a0[_0x32a48d(934)]
                ]
            }, _0x588792 => {
                const _0x44624d = _0x32a48d;
                if (_0x5a72a0[_0x44624d(935)](_0x588792, 6621 + 524 * 11 + -5 * 2477))
                    _0x5a72a0[_0x44624d(936)](_0x5786d9);
            }) : _0x5a72a0[_0x32a48d(937)](_0x5786d9);
        }
    }
};