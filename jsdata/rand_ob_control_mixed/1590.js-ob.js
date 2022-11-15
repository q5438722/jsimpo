const _ = require('underscore-plus'), url = require('url'), path = require('path'), {Emitter, Disposable, CompositeDisposable} = require('event-kit'), fs = require('fs-plus'), {Directory} = require('pathwatcher'), Grim = require('grim'), DefaultDirectorySearcher = require('./default-directory-searcher'), RipgrepDirectorySearcher = require('./ripgrep-directory-searcher'), Dock = require('./dock'), Model = require('./model'), StateStore = require('./state-store'), TextEditor = require('./text-editor'), Panel = require('./panel'), PanelContainer = require('./panel-container'), Task = require('./task'), WorkspaceCenter = require('./workspace-center'), {createWorkspaceElement} = require('./workspace-element'), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = 0x64, ALL_LOCATIONS = [
        'center',
        'left',
        'right',
        'bottom'
    ];
module['exports'] = class Workspace extends Model {
    constructor(_0x2cb9d4) {
        const _0x5f3765 = {
                'QGajP': '27|8|14|20|25|24|5|2|0|17|1|31|9|15|32|10|29|23|12|7|18|6|11|13|19|28|3|4|16|22|30|21|26',
                'UIkpx': 'left',
                'BJNjA': 'right',
                'gWwvX': 'bottom',
                'STdZM': 'AtomPreviousItemLocations',
                'EloVO': 'top',
                'YVKGx': 'header',
                'whnAN': 'footer',
                'nBVLu': 'modal'
            }, _0x435456 = _0x5f3765['QGajP']['split']('|');
        let _0x2c4ead = 0x0;
        while (!![]) {
            switch (_0x435456[_0x2c4ead++]) {
            case '0':
                this['packageManager'] = _0x2cb9d4['packageManager'];
                continue;
            case '1':
                this['project'] = _0x2cb9d4['project'];
                continue;
            case '2':
                this['enablePersistence'] = _0x2cb9d4['enablePersistence'];
                continue;
            case '3':
                this['ripgrepDirectorySearcher'] = new RipgrepDirectorySearcher();
                continue;
            case '4':
                this['consumeServices'](this['packageManager']);
                continue;
            case '5':
                this['didActivatePaneContainer'] = this['didActivatePaneContainer']['bind'](this);
                continue;
            case '6':
                this['emitter'] = new Emitter();
                continue;
            case '7':
                this['draggingItem'] = ![];
                continue;
            case '8':
                this['updateWindowTitle'] = this['updateWindowTitle']['bind'](this);
                continue;
            case '9':
                this['viewRegistry'] = _0x2cb9d4['viewRegistry'];
                continue;
            case '10':
                this['assert'] = _0x2cb9d4['assert'];
                continue;
            case '11':
                this['openers'] = [];
                continue;
            case '12':
                this['styleManager'] = _0x2cb9d4['styleManager'];
                continue;
            case '13':
                this['destroyedItemURIs'] = [];
                continue;
            case '14':
                this['updateDocumentEdited'] = this['updateDocumentEdited']['bind'](this);
                continue;
            case '15':
                this['grammarRegistry'] = _0x2cb9d4['grammarRegistry'];
                continue;
            case '16':
                this['paneContainers'] = {
                    'center': this['createCenter'](),
                    'left': this['createDock'](_0x5f3765['UIkpx']),
                    'right': this['createDock'](_0x5f3765['BJNjA']),
                    'bottom': this['createDock'](_0x5f3765['gWwvX'])
                };
                continue;
            case '17':
                this['config'] = _0x2cb9d4['config'];
                continue;
            case '18':
                this['itemLocationStore'] = new StateStore(_0x5f3765['STdZM'], 0x1);
                continue;
            case '19':
                this['stoppedChangingActivePaneItemTimeout'] = null;
                continue;
            case '20':
                this['didDestroyPaneItem'] = this['didDestroyPaneItem']['bind'](this);
                continue;
            case '21':
                this['panelContainers'] = {
                    'top': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['EloVO']
                    }),
                    'left': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['UIkpx'],
                        'dock': this['paneContainers']['left']
                    }),
                    'right': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['BJNjA'],
                        'dock': this['paneContainers']['right']
                    }),
                    'bottom': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['gWwvX'],
                        'dock': this['paneContainers']['bottom']
                    }),
                    'header': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['YVKGx']
                    }),
                    'footer': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['whnAN']
                    }),
                    'modal': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x5f3765['nBVLu']
                    })
                };
                continue;
            case '22':
                this['activePaneContainer'] = this['paneContainers']['center'];
                continue;
            case '23':
                this['textEditorRegistry'] = _0x2cb9d4['textEditorRegistry'];
                continue;
            case '24':
                this['didChangeActivePaneItemOnPaneContainer'] = this['didChangeActivePaneItemOnPaneContainer']['bind'](this);
                continue;
            case '25':
                this['didChangeActivePaneOnPaneContainer'] = this['didChangeActivePaneOnPaneContainer']['bind'](this);
                continue;
            case '26':
                this['incoming'] = new Map();
                continue;
            case '27':
                super(...arguments);
                continue;
            case '28':
                this['scandalDirectorySearcher'] = new DefaultDirectorySearcher();
                continue;
            case '29':
                this['deserializerManager'] = _0x2cb9d4['deserializerManager'];
                continue;
            case '30':
                this['hasActiveTextEditor'] = ![];
                continue;
            case '31':
                this['notificationManager'] = _0x2cb9d4['notificationManager'];
                continue;
            case '32':
                this['applicationDelegate'] = _0x2cb9d4['applicationDelegate'];
                continue;
            }
            break;
        }
    }
    get ['paneContainer']() {
        const _0x209f6e = { 'bKJEl': '`atom.workspace.paneContainer`\x20has\x20always\x20been\x20private,\x20but\x20it\x20is\x20now\x20gone.\x20Please\x20use\x20`atom.workspace.getCenter()`\x20instead\x20and\x20consult\x20the\x20workspace\x20API\x20docs\x20for\x20public\x20methods.' };
        return Grim['deprecate'](_0x209f6e['bKJEl']), this['paneContainers']['center']['paneContainer'];
    }
    ['getElement']() {
        const _0x3a9d40 = {
            'vhqaN': function (_0x2754a7) {
                return _0x2754a7();
            }
        };
        return !this['element'] && (this['element'] = _0x3a9d40['vhqaN'](createWorkspaceElement)['initialize'](this, {
            'config': this['config'],
            'project': this['project'],
            'viewRegistry': this['viewRegistry'],
            'styleManager': this['styleManager']
        })), this['element'];
    }
    ['createCenter']() {
        return new WorkspaceCenter({
            'config': this['config'],
            'applicationDelegate': this['applicationDelegate'],
            'notificationManager': this['notificationManager'],
            'deserializerManager': this['deserializerManager'],
            'viewRegistry': this['viewRegistry'],
            'didActivate': this['didActivatePaneContainer'],
            'didChangeActivePane': this['didChangeActivePaneOnPaneContainer'],
            'didChangeActivePaneItem': this['didChangeActivePaneItemOnPaneContainer'],
            'didDestroyPaneItem': this['didDestroyPaneItem']
        });
    }
    ['createDock'](_0x3a7f45) {
        return new Dock({
            'location': _0x3a7f45,
            'config': this['config'],
            'applicationDelegate': this['applicationDelegate'],
            'deserializerManager': this['deserializerManager'],
            'notificationManager': this['notificationManager'],
            'viewRegistry': this['viewRegistry'],
            'didActivate': this['didActivatePaneContainer'],
            'didChangeActivePane': this['didChangeActivePaneOnPaneContainer'],
            'didChangeActivePaneItem': this['didChangeActivePaneItemOnPaneContainer'],
            'didDestroyPaneItem': this['didDestroyPaneItem']
        });
    }
    ['reset'](_0x3d657b) {
        const _0x1694bf = {
                'HacJj': '13|3|0|1|5|7|12|6|15|4|8|14|2|10|11|9',
                'NEZLR': 'top',
                'tTntd': 'left',
                'GzeBU': 'right',
                'yKLex': 'bottom',
                'XWwwK': 'header',
                'clQaX': 'footer',
                'GayMs': 'modal'
            }, _0x137273 = _0x1694bf['HacJj']['split']('|');
        let _0x1232b2 = 0x0;
        while (!![]) {
            switch (_0x137273[_0x1232b2++]) {
            case '0':
                this['emitter'] = new Emitter();
                continue;
            case '1':
                this['paneContainers']['center']['destroy']();
                continue;
            case '2':
                this['openers'] = [];
                continue;
            case '3':
                this['emitter']['dispose']();
                continue;
            case '4':
                this['activePaneContainer'] = this['paneContainers']['center'];
                continue;
            case '5':
                this['paneContainers']['left']['destroy']();
                continue;
            case '6':
                _['values'](this['panelContainers'])['forEach'](_0x1c085f => {
                    _0x1c085f['destroy']();
                });
                continue;
            case '7':
                this['paneContainers']['right']['destroy']();
                continue;
            case '8':
                this['hasActiveTextEditor'] = ![];
                continue;
            case '9':
                this['consumeServices'](this['packageManager']);
                continue;
            case '10':
                this['destroyedItemURIs'] = [];
                continue;
            case '11':
                this['element'] && (this['element']['destroy'](), this['element'] = null);
                continue;
            case '12':
                this['paneContainers']['bottom']['destroy']();
                continue;
            case '13':
                this['packageManager'] = _0x3d657b;
                continue;
            case '14':
                this['panelContainers'] = {
                    'top': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['NEZLR']
                    }),
                    'left': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['tTntd'],
                        'dock': this['paneContainers']['left']
                    }),
                    'right': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['GzeBU'],
                        'dock': this['paneContainers']['right']
                    }),
                    'bottom': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['yKLex'],
                        'dock': this['paneContainers']['bottom']
                    }),
                    'header': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['XWwwK']
                    }),
                    'footer': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['clQaX']
                    }),
                    'modal': new PanelContainer({
                        'viewRegistry': this['viewRegistry'],
                        'location': _0x1694bf['GayMs']
                    })
                };
                continue;
            case '15':
                this['paneContainers'] = {
                    'center': this['createCenter'](),
                    'left': this['createDock'](_0x1694bf['tTntd']),
                    'right': this['createDock'](_0x1694bf['GzeBU']),
                    'bottom': this['createDock'](_0x1694bf['yKLex'])
                };
                continue;
            }
            break;
        }
    }
    ['initialize']() {
        const _0x181a92 = {
                'kzYsS': '4|0|1|2|3',
                'Gtvaw': 'defaultFontSize'
            }, _0x40d516 = _0x181a92['kzYsS']['split']('|');
        let _0x4b3154 = 0x0;
        while (!![]) {
            switch (_0x40d516[_0x4b3154++]) {
            case '0':
                this['project']['onDidChangePaths'](this['updateWindowTitle']);
                continue;
            case '1':
                this['subscribeToAddedItems']();
                continue;
            case '2':
                this['subscribeToMovedItems']();
                continue;
            case '3':
                this['subscribeToDockToggling']();
                continue;
            case '4':
                this['originalFontSize'] = this['config']['get'](_0x181a92['Gtvaw']);
                continue;
            }
            break;
        }
    }
    ['consumeServices']({serviceHub: _0x56f563}) {
        const _0xd3a726 = {
            'jvvoQ': 'atom.directory-searcher',
            'nDpVv': '^0.1.0'
        };
        this['directorySearchers'] = [], _0x56f563['consume'](_0xd3a726['jvvoQ'], _0xd3a726['nDpVv'], _0x1d9256 => this['directorySearchers']['unshift'](_0x1d9256));
    }
    ['serialize']() {
        const _0x3615b1 = { 'kKJiP': 'Workspace' };
        return {
            'deserializer': _0x3615b1['kKJiP'],
            'packagesWithActiveGrammars': this['getPackageNamesWithActiveGrammars'](),
            'destroyedItemURIs': this['destroyedItemURIs']['slice'](),
            'paneContainer': { 'version': 0x2 },
            'paneContainers': {
                'center': this['paneContainers']['center']['serialize'](),
                'left': this['paneContainers']['left']['serialize'](),
                'right': this['paneContainers']['right']['serialize'](),
                'bottom': this['paneContainers']['bottom']['serialize']()
            }
        };
    }
    ['deserialize'](_0x4afb9c, _0x368995) {
        const _0x58eae8 = {
                'iXwKD': function (_0x5cae01, _0x5db7a9) {
                    return _0x5cae01 != _0x5db7a9;
                }
            }, _0x2c1276 = _0x58eae8['iXwKD'](_0x4afb9c['packagesWithActiveGrammars'], null) ? _0x4afb9c['packagesWithActiveGrammars'] : [];
        for (let _0xd5738c of _0x2c1276) {
            const _0x41f60f = this['packageManager']['getLoadedPackage'](_0xd5738c);
            _0x58eae8['iXwKD'](_0x41f60f, null) && _0x41f60f['loadGrammarsSync']();
        }
        _0x58eae8['iXwKD'](_0x4afb9c['destroyedItemURIs'], null) && (this['destroyedItemURIs'] = _0x4afb9c['destroyedItemURIs']);
        if (_0x4afb9c['paneContainers'])
            this['paneContainers']['center']['deserialize'](_0x4afb9c['paneContainers']['center'], _0x368995), this['paneContainers']['left']['deserialize'](_0x4afb9c['paneContainers']['left'], _0x368995), this['paneContainers']['right']['deserialize'](_0x4afb9c['paneContainers']['right'], _0x368995), this['paneContainers']['bottom']['deserialize'](_0x4afb9c['paneContainers']['bottom'], _0x368995);
        else
            _0x4afb9c['paneContainer'] && this['paneContainers']['center']['deserialize'](_0x4afb9c['paneContainer'], _0x368995);
        this['hasActiveTextEditor'] = _0x58eae8['iXwKD'](this['getActiveTextEditor'](), null), this['updateWindowTitle']();
    }
    ['getPackageNamesWithActiveGrammars']() {
        const _0x59b1b3 = {
                'vbpKY': function (_0x552724, _0x28817b) {
                    return _0x552724 !== _0x28817b;
                },
                'fIQZf': function (_0x249ae2, _0x362b79) {
                    return _0x249ae2 != _0x362b79;
                },
                'NEcuz': function (_0x333ca3, _0x196d92) {
                    return _0x333ca3(_0x196d92);
                },
                'tDemE': function (_0x4d4988, _0x5a1d04) {
                    return _0x4d4988 > _0x5a1d04;
                },
                'JpSWw': function (_0x2dd46b, _0x565658) {
                    return _0x2dd46b(_0x565658);
                }
            }, _0x114457 = [], _0x52a6f4 = ({
                includedGrammarScopes: _0x61e0ba,
                packageName: _0x5ed959
            } = {}) => {
                if (!_0x5ed959)
                    return;
                if (_0x59b1b3['vbpKY'](_0x114457['indexOf'](_0x5ed959), -0x1))
                    return;
                _0x114457['push'](_0x5ed959);
                for (let _0x987cc5 of _0x59b1b3['fIQZf'](_0x61e0ba, null) ? _0x61e0ba : []) {
                    _0x59b1b3['NEcuz'](_0x52a6f4, this['grammarRegistry']['grammarForScopeName'](_0x987cc5));
                }
            }, _0x3c5d68 = this['getTextEditors']();
        for (let _0x324fcb of _0x3c5d68) {
            _0x59b1b3['NEcuz'](_0x52a6f4, _0x324fcb['getGrammar']());
        }
        if (_0x59b1b3['tDemE'](_0x3c5d68['length'], 0x0))
            for (let _0x3e869d of this['grammarRegistry']['getGrammars']()) {
                _0x3e869d['injectionSelector'] && _0x59b1b3['JpSWw'](_0x52a6f4, _0x3e869d);
            }
        return _['uniq'](_0x114457);
    }
    ['didActivatePaneContainer'](_0x381adb) {
        const _0x10c8a6 = {
            'srxOt': function (_0x4b78dc, _0x5e1162) {
                return _0x4b78dc !== _0x5e1162;
            },
            'kacTT': '0|2|4|3|1',
            'RyUam': 'did-change-active-pane-item',
            'EyycJ': 'did-change-active-pane',
            'unFQK': 'did-change-active-pane-container'
        };
        if (_0x10c8a6['srxOt'](_0x381adb, this['getActivePaneContainer']())) {
            const _0x2ff8c3 = _0x10c8a6['kacTT']['split']('|');
            let _0x4cbe7d = 0x0;
            while (!![]) {
                switch (_0x2ff8c3[_0x4cbe7d++]) {
                case '0':
                    this['activePaneContainer'] = _0x381adb;
                    continue;
                case '1':
                    this['emitter']['emit'](_0x10c8a6['RyUam'], this['activePaneContainer']['getActivePaneItem']());
                    continue;
                case '2':
                    this['didChangeActivePaneItem'](this['activePaneContainer']['getActivePaneItem']());
                    continue;
                case '3':
                    this['emitter']['emit'](_0x10c8a6['EyycJ'], this['activePaneContainer']['getActivePane']());
                    continue;
                case '4':
                    this['emitter']['emit'](_0x10c8a6['unFQK'], this['activePaneContainer']);
                    continue;
                }
                break;
            }
        }
    }
    ['didChangeActivePaneOnPaneContainer'](_0x3954ec, _0x287441) {
        const _0x4be77c = {
            'eLmLt': function (_0xc3d012, _0x4d832a) {
                return _0xc3d012 === _0x4d832a;
            },
            'UulRx': 'did-change-active-pane'
        };
        _0x4be77c['eLmLt'](_0x3954ec, this['getActivePaneContainer']()) && this['emitter']['emit'](_0x4be77c['UulRx'], _0x287441);
    }
    ['didChangeActivePaneItemOnPaneContainer'](_0x5473a2, _0x9e437f) {
        const _0x41ee79 = {
            'tXazu': function (_0x54c4bb, _0x21715e) {
                return _0x54c4bb === _0x21715e;
            },
            'PVYfs': 'did-change-active-pane-item',
            'IObmY': function (_0x2226e1, _0x2b75eb) {
                return _0x2226e1 === _0x2b75eb;
            },
            'BmPNp': function (_0x390fa1, _0x25b60c) {
                return _0x390fa1 instanceof _0x25b60c;
            },
            'rwimg': 'did-change-active-text-editor'
        };
        _0x41ee79['tXazu'](_0x5473a2, this['getActivePaneContainer']()) && (this['didChangeActivePaneItem'](_0x9e437f), this['emitter']['emit'](_0x41ee79['PVYfs'], _0x9e437f));
        if (_0x41ee79['IObmY'](_0x5473a2, this['getCenter']())) {
            const _0x2ad5f0 = this['hasActiveTextEditor'];
            this['hasActiveTextEditor'] = _0x41ee79['BmPNp'](_0x9e437f, TextEditor);
            if (this['hasActiveTextEditor'] || _0x2ad5f0) {
                const _0x4a2578 = this['hasActiveTextEditor'] ? _0x9e437f : undefined;
                this['emitter']['emit'](_0x41ee79['rwimg'], _0x4a2578);
            }
        }
    }
    ['didChangeActivePaneItem'](_0x1ca35e) {
        const _0x1073a5 = {
            'tkRbB': 'title-changed',
            'bXifT': 'modified-status-changed',
            'CrAVO': 'did-stop-changing-active-pane-item',
            'RjiMR': function (_0x17b6ac, _0x57f7e7) {
                return _0x17b6ac != _0x57f7e7;
            },
            'jkyTN': function (_0x1559d9, _0xed5d1a) {
                return _0x1559d9 === _0xed5d1a;
            },
            'bhtEl': 'function',
            'uafLU': function (_0x43bbd9, _0x493e79) {
                return _0x43bbd9 == _0x493e79;
            },
            'gXgBA': function (_0x4d7827, _0x1122d4) {
                return _0x4d7827 !== _0x1122d4;
            },
            'fjqMc': function (_0x44b0ce, _0x2bc912) {
                return _0x44b0ce === _0x2bc912;
            },
            'QZiVo': function (_0x2fee4b, _0x30bdf7) {
                return _0x2fee4b != _0x30bdf7;
            },
            'MOPSX': function (_0x47b686, _0x289cff) {
                return _0x47b686 !== _0x289cff;
            },
            'sqVal': function (_0x5e22fb, _0x408068) {
                return _0x5e22fb != _0x408068;
            },
            'YRvfI': function (_0x5f4c6d, _0x4f1180) {
                return _0x5f4c6d != _0x4f1180;
            },
            'iboRr': function (_0x2c283e, _0x2c6c9d, _0x2de279) {
                return _0x2c283e(_0x2c6c9d, _0x2de279);
            }
        };
        this['updateWindowTitle'](), this['updateDocumentEdited']();
        if (this['activeItemSubscriptions'])
            this['activeItemSubscriptions']['dispose']();
        this['activeItemSubscriptions'] = new CompositeDisposable();
        let _0x154f04, _0x4c8316;
        if (_0x1073a5['RjiMR'](_0x1ca35e, null) && _0x1073a5['jkyTN'](typeof _0x1ca35e['onDidChangeTitle'], _0x1073a5['bhtEl']))
            _0x4c8316 = _0x1ca35e['onDidChangeTitle'](this['updateWindowTitle']);
        else
            _0x1073a5['RjiMR'](_0x1ca35e, null) && _0x1073a5['jkyTN'](typeof _0x1ca35e['on'], _0x1073a5['bhtEl']) && (_0x4c8316 = _0x1ca35e['on'](_0x1073a5['tkRbB'], this['updateWindowTitle']), (_0x1073a5['uafLU'](_0x4c8316, null) || _0x1073a5['gXgBA'](typeof _0x4c8316['dispose'], _0x1073a5['bhtEl'])) && (_0x4c8316 = new Disposable(() => {
                _0x1ca35e['off'](_0x1073a5['tkRbB'], this['updateWindowTitle']);
            })));
        if (_0x1073a5['RjiMR'](_0x1ca35e, null) && _0x1073a5['fjqMc'](typeof _0x1ca35e['onDidChangeModified'], _0x1073a5['bhtEl']))
            _0x154f04 = _0x1ca35e['onDidChangeModified'](this['updateDocumentEdited']);
        else
            _0x1073a5['QZiVo'](_0x1ca35e, null) && _0x1073a5['fjqMc'](typeof _0x1ca35e['on'], _0x1073a5['bhtEl']) && (_0x154f04 = _0x1ca35e['on'](_0x1073a5['bXifT'], this['updateDocumentEdited']), (_0x1073a5['uafLU'](_0x154f04, null) || _0x1073a5['MOPSX'](typeof _0x154f04['dispose'], _0x1073a5['bhtEl'])) && (_0x154f04 = new Disposable(() => {
                _0x1ca35e['off'](_0x1073a5['bXifT'], this['updateDocumentEdited']);
            })));
        _0x1073a5['sqVal'](_0x4c8316, null) && this['activeItemSubscriptions']['add'](_0x4c8316), _0x1073a5['YRvfI'](_0x154f04, null) && this['activeItemSubscriptions']['add'](_0x154f04), this['cancelStoppedChangingActivePaneItemTimeout'](), this['stoppedChangingActivePaneItemTimeout'] = _0x1073a5['iboRr'](setTimeout, () => {
            this['stoppedChangingActivePaneItemTimeout'] = null, this['emitter']['emit'](_0x1073a5['CrAVO'], _0x1ca35e);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    ['cancelStoppedChangingActivePaneItemTimeout']() {
        const _0x1626f0 = {
            'MZBcv': function (_0x79c435, _0x4e57a1) {
                return _0x79c435 != _0x4e57a1;
            },
            'lZZvc': function (_0x4de8c4, _0x577961) {
                return _0x4de8c4(_0x577961);
            }
        };
        _0x1626f0['MZBcv'](this['stoppedChangingActivePaneItemTimeout'], null) && _0x1626f0['lZZvc'](clearTimeout, this['stoppedChangingActivePaneItemTimeout']);
    }
    ['setDraggingItem'](_0x2339bc) {
        _['values'](this['paneContainers'])['forEach'](_0x21e1b2 => {
            _0x21e1b2['setDraggingItem'](_0x2339bc);
        });
    }
    ['subscribeToAddedItems']() {
        const _0x5baf67 = {
            'kqpka': function (_0x395c39, _0xc90c3a) {
                return _0x395c39 instanceof _0xc90c3a;
            },
            'qmqZw': 'did-add-text-editor'
        };
        this['onDidAddPaneItem'](({
            item: _0x223adf,
            pane: _0x3697be,
            index: _0x277bc5
        }) => {
            if (_0x5baf67['kqpka'](_0x223adf, TextEditor)) {
                const _0x5dd1f2 = new CompositeDisposable(this['textEditorRegistry']['add'](_0x223adf), this['textEditorRegistry']['maintainConfig'](_0x223adf));
                !this['project']['findBufferForId'](_0x223adf['buffer']['id']) && this['project']['addBuffer'](_0x223adf['buffer']), _0x223adf['onDidDestroy'](() => {
                    _0x5dd1f2['dispose']();
                }), this['emitter']['emit'](_0x5baf67['qmqZw'], {
                    'textEditor': _0x223adf,
                    'pane': _0x3697be,
                    'index': _0x277bc5
                }), !_0x223adf['isDestroyed']() && _0x5dd1f2['add'](_0x223adf['observeGrammar'](this['handleGrammarUsed']['bind'](this)));
            }
        });
    }
    ['subscribeToDockToggling']() {
        const _0x5d5cc4 = {
                'shhNB': function (_0x2a4ec8, _0x11203b) {
                    return _0x2a4ec8 === _0x11203b;
                }
            }, _0x563549 = [
                this['getLeftDock'](),
                this['getRightDock'](),
                this['getBottomDock']()
            ];
        _0x563549['forEach'](_0x32e965 => {
            _0x32e965['onDidChangeVisible'](_0x5b1138 => {
                if (_0x5b1138)
                    return;
                const {activeElement: _0x340768} = document, _0x275704 = _0x32e965['getElement']();
                (_0x5d5cc4['shhNB'](_0x275704, _0x340768) || _0x275704['contains'](_0x340768)) && this['getCenter']()['activate']();
            });
        });
    }
    ['subscribeToMovedItems']() {
        const _0x53e7ce = {
            'ImRMx': function (_0x13f531, _0xed7236) {
                return _0x13f531 === _0xed7236;
            },
            'OmVUI': 'function',
            'PfUdr': function (_0x3b8b06, _0x7e35af) {
                return _0x3b8b06 || _0x7e35af;
            },
            'vkCuX': 'center',
            'vMRTK': function (_0x33bba7, _0x4a4408) {
                return _0x33bba7 === _0x4a4408;
            }
        };
        for (const _0x269bd7 of this['getPaneContainers']()) {
            _0x269bd7['observePanes'](_0x21ba11 => {
                _0x21ba11['onDidAddItem'](({item: _0x162780}) => {
                    if (_0x53e7ce['ImRMx'](typeof _0x162780['getURI'], _0x53e7ce['OmVUI']) && this['enablePersistence']) {
                        const _0x10d6c7 = _0x162780['getURI']();
                        if (_0x10d6c7) {
                            const _0x400632 = _0x269bd7['getLocation']();
                            let _0x361ca8;
                            _0x53e7ce['ImRMx'](typeof _0x162780['getDefaultLocation'], _0x53e7ce['OmVUI']) && (_0x361ca8 = _0x162780['getDefaultLocation']()), _0x361ca8 = _0x53e7ce['PfUdr'](_0x361ca8, _0x53e7ce['vkCuX']), _0x53e7ce['vMRTK'](_0x400632, _0x361ca8) ? this['itemLocationStore']['delete'](_0x162780['getURI']()) : this['itemLocationStore']['save'](_0x162780['getURI'](), _0x400632);
                        }
                    }
                });
            });
        }
    }
    ['updateWindowTitle']() {
        const _0x52d800 = {
            'EAuSr': function (_0x3cbeb1, _0x1383d0) {
                return _0x3cbeb1 != _0x1383d0;
            },
            'xkUhu': function (_0x1e101a, _0xfeabe2) {
                return _0x1e101a === _0xfeabe2;
            },
            'JYyHx': 'function',
            'axyVY': function (_0x3c50eb, _0x2659df) {
                return _0x3c50eb == _0x2659df;
            },
            'RnGSe': 'untitled',
            'hFCUa': function (_0x1a453f, _0x56cd08) {
                return _0x1a453f == _0x56cd08;
            },
            'UwjnU': function (_0x14f2e6, _0x283e) {
                return _0x14f2e6 != _0x283e;
            },
            'Pyltd': function (_0x3cc5b1, _0x154058) {
                return _0x3cc5b1 != _0x154058;
            },
            'vFqFv': function (_0x2b92cf, _0x424fbe) {
                return _0x2b92cf != _0x424fbe;
            },
            'fjEoZ': function (_0x4f99c7, _0xefbd39) {
                return _0x4f99c7 !== _0xefbd39;
            },
            'BCoAp': 'darwin',
            'Tbswy': '\x20—\x20',
            'wJDjm': 'did-change-window-title'
        };
        let _0x427c89, _0xec024d, _0x33997a, _0x3f8991;
        const _0x4d0f0e = atom['getAppName'](), _0xcc84ef = this['project']['getPaths'](), _0x46b1e7 = _0x52d800['EAuSr'](_0xcc84ef, null) ? _0xcc84ef : [], _0x4b6d25 = this['getActivePaneItem']();
        if (_0x4b6d25) {
            _0x427c89 = _0x52d800['xkUhu'](typeof _0x4b6d25['getPath'], _0x52d800['JYyHx']) ? _0x4b6d25['getPath']() : undefined;
            const _0x3d69ac = _0x52d800['xkUhu'](typeof _0x4b6d25['getLongTitle'], _0x52d800['JYyHx']) ? _0x4b6d25['getLongTitle']() : undefined;
            _0xec024d = _0x52d800['axyVY'](_0x3d69ac, null) ? _0x52d800['xkUhu'](typeof _0x4b6d25['getTitle'], _0x52d800['JYyHx']) ? _0x4b6d25['getTitle']() : undefined : _0x3d69ac, _0x33997a = _['find'](_0x46b1e7, _0xa6bf49 => _0x427c89 === _0xa6bf49 || (_0x427c89 != null ? _0x427c89['startsWith'](_0xa6bf49 + path['sep']) : undefined));
        }
        _0x52d800['axyVY'](_0xec024d, null) && (_0xec024d = _0x52d800['RnGSe']);
        _0x52d800['hFCUa'](_0x33997a, null) && (_0x33997a = _0x427c89 ? path['dirname'](_0x427c89) : _0x46b1e7[0x0]);
        _0x52d800['UwjnU'](_0x33997a, null) && (_0x33997a = fs['tildify'](_0x33997a));
        const _0x4ba810 = [];
        if (_0x52d800['UwjnU'](_0x4b6d25, null) && _0x52d800['Pyltd'](_0x33997a, null))
            _0x4ba810['push'](_0xec024d, _0x33997a), _0x3f8991 = _0x52d800['Pyltd'](_0x427c89, null) ? _0x427c89 : _0x33997a;
        else
            _0x52d800['vFqFv'](_0x33997a, null) ? (_0x4ba810['push'](_0x33997a), _0x3f8991 = _0x33997a) : (_0x4ba810['push'](_0xec024d), _0x3f8991 = '');
        _0x52d800['fjEoZ'](process['platform'], _0x52d800['BCoAp']) && _0x4ba810['push'](_0x4d0f0e), document['title'] = _0x4ba810['join'](_0x52d800['Tbswy']), this['applicationDelegate']['setRepresentedFilename'](_0x3f8991), this['emitter']['emit'](_0x52d800['wJDjm']);
    }
    ['updateDocumentEdited']() {
        const _0x5df4ff = {
                'SJgNK': function (_0x5b1134, _0xefbd6c) {
                    return _0x5b1134 != _0xefbd6c;
                },
                'alMzw': function (_0x8d7468, _0x3cc711) {
                    return _0x8d7468 === _0x3cc711;
                },
                'MgUMA': 'function'
            }, _0x210b10 = this['getActivePaneItem'](), _0x36ffd2 = _0x5df4ff['SJgNK'](_0x210b10, null) && _0x5df4ff['alMzw'](typeof _0x210b10['isModified'], _0x5df4ff['MgUMA']) ? _0x210b10['isModified']() || ![] : ![];
        this['applicationDelegate']['setWindowDocumentEdited'](_0x36ffd2);
    }
    ['onDidChangeActivePaneContainer'](_0x483cbf) {
        const _0x16c806 = { 'KYWEX': 'did-change-active-pane-container' };
        return this['emitter']['on'](_0x16c806['KYWEX'], _0x483cbf);
    }
    ['observeTextEditors'](_0x19e697) {
        const _0x56319f = {
            'fRfGd': function (_0x4e5b32, _0x18cec1) {
                return _0x4e5b32(_0x18cec1);
            }
        };
        for (let _0x1b2ee5 of this['getTextEditors']()) {
            _0x56319f['fRfGd'](_0x19e697, _0x1b2ee5);
        }
        return this['onDidAddTextEditor'](({textEditor: _0x2bfe91}) => _0x19e697(_0x2bfe91));
    }
    ['observePaneItems'](_0x424dd8) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x5a04dc => _0x5a04dc['observePaneItems'](_0x424dd8)));
    }
    ['onDidChangeActivePaneItem'](_0x118339) {
        const _0x55ae29 = { 'bPUcg': 'did-change-active-pane-item' };
        return this['emitter']['on'](_0x55ae29['bPUcg'], _0x118339);
    }
    ['onDidStopChangingActivePaneItem'](_0x51a9ec) {
        const _0x347419 = { 'hLoyq': 'did-stop-changing-active-pane-item' };
        return this['emitter']['on'](_0x347419['hLoyq'], _0x51a9ec);
    }
    ['onDidChangeActiveTextEditor'](_0x3c8b6a) {
        const _0x3debde = { 'GTijq': 'did-change-active-text-editor' };
        return this['emitter']['on'](_0x3debde['GTijq'], _0x3c8b6a);
    }
    ['observeActivePaneItem'](_0x821842) {
        const _0x37b8fc = {
            'IcQAe': function (_0x36ce30, _0x1bda7d) {
                return _0x36ce30(_0x1bda7d);
            }
        };
        return _0x37b8fc['IcQAe'](_0x821842, this['getActivePaneItem']()), this['onDidChangeActivePaneItem'](_0x821842);
    }
    ['observeActiveTextEditor'](_0x37ddd5) {
        const _0x26b9f8 = {
            'HEDkM': function (_0x413708, _0x3afc31) {
                return _0x413708(_0x3afc31);
            }
        };
        return _0x26b9f8['HEDkM'](_0x37ddd5, this['getActiveTextEditor']()), this['onDidChangeActiveTextEditor'](_0x37ddd5);
    }
    ['onDidOpen'](_0x2f8362) {
        const _0x4edc84 = { 'mEodX': 'did-open' };
        return this['emitter']['on'](_0x4edc84['mEodX'], _0x2f8362);
    }
    ['onDidAddPane'](_0x1bbcac) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x1c6ae7 => _0x1c6ae7['onDidAddPane'](_0x1bbcac)));
    }
    ['onWillDestroyPane'](_0x3ef22a) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x36e593 => _0x36e593['onWillDestroyPane'](_0x3ef22a)));
    }
    ['onDidDestroyPane'](_0x3a4004) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x3b6943 => _0x3b6943['onDidDestroyPane'](_0x3a4004)));
    }
    ['observePanes'](_0x189b8d) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x18dfc0 => _0x18dfc0['observePanes'](_0x189b8d)));
    }
    ['onDidChangeActivePane'](_0x2334fa) {
        const _0x4dfb64 = { 'XAAat': 'did-change-active-pane' };
        return this['emitter']['on'](_0x4dfb64['XAAat'], _0x2334fa);
    }
    ['observeActivePane'](_0x37b6c7) {
        const _0x56ab2a = {
            'kZGWZ': function (_0x4ed877, _0x1181e4) {
                return _0x4ed877(_0x1181e4);
            }
        };
        return _0x56ab2a['kZGWZ'](_0x37b6c7, this['getActivePane']()), this['onDidChangeActivePane'](_0x37b6c7);
    }
    ['onDidAddPaneItem'](_0x5bdba3) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0xec8ab9 => _0xec8ab9['onDidAddPaneItem'](_0x5bdba3)));
    }
    ['onWillDestroyPaneItem'](_0x34b93a) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x5881f9 => _0x5881f9['onWillDestroyPaneItem'](_0x34b93a)));
    }
    ['onDidDestroyPaneItem'](_0xe5ba75) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x3f2050 => _0x3f2050['onDidDestroyPaneItem'](_0xe5ba75)));
    }
    ['onDidAddTextEditor'](_0x4f300f) {
        const _0x4f9fce = { 'xtcUG': 'did-add-text-editor' };
        return this['emitter']['on'](_0x4f9fce['xtcUG'], _0x4f300f);
    }
    ['onDidChangeWindowTitle'](_0x2eab55) {
        const _0x3bfd06 = { 'hXkSp': 'did-change-window-title' };
        return this['emitter']['on'](_0x3bfd06['hXkSp'], _0x2eab55);
    }
    async ['open'](_0x3c4606, _0x52ad3c = {}) {
        const _0x540b13 = {
            'uGpgS': function (_0x1df917, _0x3ebcc6) {
                return _0x1df917 === _0x3ebcc6;
            },
            'RsFRx': 'string',
            'bgfDr': 'function',
            'dJseB': 'core.allowPendingPaneItems',
            'hNdJz': 'win32',
            'ektIr': function (_0x551537, _0x3de313) {
                return _0x551537 || _0x3de313;
            },
            'EGJUw': 'left',
            'XhmpW': 'right',
            'UIMar': 'down',
            'ofPVr': function (_0x24da1b, _0x1655a3) {
                return _0x24da1b != _0x1655a3;
            },
            'IIdnh': function (_0xef07cb, _0x4a1fc0) {
                return _0xef07cb === _0x4a1fc0;
            },
            'QbZCs': function (_0x536604, _0x14c5d1) {
                return _0x536604 === _0x14c5d1;
            },
            'LsFeL': function (_0x45089d, _0x4ee1e5) {
                return _0x45089d !== _0x4ee1e5;
            },
            'Hjyvn': function (_0x1d0775, _0x57222d) {
                return _0x1d0775 >= _0x57222d;
            },
            'YEIps': function (_0x1bcf0e, _0x21434a) {
                return _0x1bcf0e >= _0x21434a;
            },
            'sTZqr': function (_0x12bef0, _0x5a5eda) {
                return _0x12bef0 === _0x5a5eda;
            },
            'HHAQS': 'did-open',
            'dznvm': function (_0x15496c) {
                return _0x15496c();
            }
        };
        let _0x1d9df2, _0x9828f0;
        if (_0x540b13['uGpgS'](typeof _0x3c4606, _0x540b13['RsFRx']))
            _0x1d9df2 = this['project']['resolvePath'](_0x3c4606);
        else {
            if (_0x3c4606) {
                _0x9828f0 = _0x3c4606;
                if (_0x540b13['uGpgS'](typeof _0x9828f0['getURI'], _0x540b13['bgfDr']))
                    _0x1d9df2 = _0x9828f0['getURI']();
            }
        }
        let _0x1ce9d2 = () => {
        };
        if (_0x1d9df2) {
            const _0x278d59 = this['incoming']['get'](_0x1d9df2);
            !_0x278d59 ? this['incoming']['set'](_0x1d9df2, new Promise(_0x39ede1 => {
                _0x1ce9d2 = _0x39ede1;
            })) : await _0x278d59;
        }
        try {
            !atom['config']['get'](_0x540b13['dJseB']) && (_0x52ad3c['pending'] = ![]);
            _0x1d9df2 && (!url['parse'](_0x1d9df2)['protocol'] || _0x540b13['uGpgS'](process['platform'], _0x540b13['hNdJz'])) && this['applicationDelegate']['addRecentDocument'](_0x1d9df2);
            let _0x59d148, _0x214799;
            if (_0x540b13['ektIr'](_0x9828f0, _0x1d9df2)) {
                if (_0x52ad3c['pane'])
                    _0x59d148 = _0x52ad3c['pane'];
                else {
                    if (_0x52ad3c['searchAllPanes'])
                        _0x59d148 = _0x9828f0 ? this['paneForItem'](_0x9828f0) : this['paneForURI'](_0x1d9df2);
                    else {
                        let _0x5809e1;
                        if (_0x1d9df2)
                            _0x5809e1 = this['paneContainerForURI'](_0x1d9df2);
                        if (!_0x5809e1)
                            _0x5809e1 = this['getActivePaneContainer']();
                        _0x59d148 = _0x5809e1['getActivePane']();
                        switch (_0x52ad3c['split']) {
                        case _0x540b13['EGJUw']:
                            _0x59d148 = _0x59d148['findLeftmostSibling']();
                            break;
                        case _0x540b13['XhmpW']:
                            _0x59d148 = _0x59d148['findRightmostSibling']();
                            break;
                        case 'up':
                            _0x59d148 = _0x59d148['findTopmostSibling']();
                            break;
                        case _0x540b13['UIMar']:
                            _0x59d148 = _0x59d148['findBottommostSibling']();
                            break;
                        }
                    }
                }
                _0x59d148 && (_0x9828f0 ? _0x214799 = _0x59d148['getItems']()['includes'](_0x9828f0) : (_0x9828f0 = _0x59d148['itemForURI'](_0x1d9df2), _0x214799 = _0x540b13['ofPVr'](_0x9828f0, null)));
            }
            if (_0x9828f0)
                await Promise['resolve']();
            if (!_0x214799) {
                _0x9828f0 = _0x9828f0 || await this['createItemForURI'](_0x1d9df2, _0x52ad3c);
                if (!_0x9828f0)
                    return;
                if (_0x52ad3c['pane'])
                    _0x59d148 = _0x52ad3c['pane'];
                else {
                    let _0x3a47f0 = _0x52ad3c['location'];
                    !_0x3a47f0 && !_0x52ad3c['split'] && _0x1d9df2 && this['enablePersistence'] && (_0x3a47f0 = await this['itemLocationStore']['load'](_0x1d9df2));
                    !_0x3a47f0 && _0x540b13['uGpgS'](typeof _0x9828f0['getDefaultLocation'], _0x540b13['bgfDr']) && (_0x3a47f0 = _0x9828f0['getDefaultLocation']());
                    const _0x217e58 = _0x540b13['uGpgS'](typeof _0x9828f0['getAllowedLocations'], _0x540b13['bgfDr']) ? _0x9828f0['getAllowedLocations']() : ALL_LOCATIONS;
                    _0x3a47f0 = _0x217e58['includes'](_0x3a47f0) ? _0x3a47f0 : _0x217e58[0x0];
                    const _0x57cf40 = this['paneContainers'][_0x3a47f0] || this['getCenter']();
                    _0x59d148 = _0x57cf40['getActivePane']();
                    switch (_0x52ad3c['split']) {
                    case _0x540b13['EGJUw']:
                        _0x59d148 = _0x59d148['findLeftmostSibling']();
                        break;
                    case _0x540b13['XhmpW']:
                        _0x59d148 = _0x59d148['findOrCreateRightmostSibling']();
                        break;
                    case 'up':
                        _0x59d148 = _0x59d148['findTopmostSibling']();
                        break;
                    case _0x540b13['UIMar']:
                        _0x59d148 = _0x59d148['findOrCreateBottommostSibling']();
                        break;
                    }
                }
            }
            !_0x52ad3c['pending'] && _0x540b13['IIdnh'](_0x59d148['getPendingItem'](), _0x9828f0) && _0x59d148['clearPendingItem']();
            this['itemOpened'](_0x9828f0);
            _0x540b13['QbZCs'](_0x52ad3c['activateItem'], ![]) ? _0x59d148['addItem'](_0x9828f0, { 'pending': _0x52ad3c['pending'] }) : _0x59d148['activateItem'](_0x9828f0, { 'pending': _0x52ad3c['pending'] });
            _0x540b13['LsFeL'](_0x52ad3c['activatePane'], ![]) && _0x59d148['activate']();
            let _0x347529 = 0x0, _0x419e20 = 0x0;
            !Number['isNaN'](_0x52ad3c['initialLine']) && (_0x419e20 = _0x52ad3c['initialLine']);
            !Number['isNaN'](_0x52ad3c['initialColumn']) && (_0x347529 = _0x52ad3c['initialColumn']);
            (_0x540b13['Hjyvn'](_0x419e20, 0x0) || _0x540b13['YEIps'](_0x347529, 0x0)) && (_0x540b13['QbZCs'](typeof _0x9828f0['setCursorBufferPosition'], _0x540b13['bgfDr']) && _0x9828f0['setCursorBufferPosition']([
                _0x419e20,
                _0x347529
            ]), _0x540b13['sTZqr'](typeof _0x9828f0['unfoldBufferRow'], _0x540b13['bgfDr']) && _0x9828f0['unfoldBufferRow'](_0x419e20), _0x540b13['sTZqr'](typeof _0x9828f0['scrollToBufferPosition'], _0x540b13['bgfDr']) && _0x9828f0['scrollToBufferPosition']([
                _0x419e20,
                _0x347529
            ], { 'center': !![] }));
            const _0x2b6b80 = _0x59d148['getActiveItemIndex']();
            this['emitter']['emit'](_0x540b13['HHAQS'], {
                'uri': _0x1d9df2,
                'pane': _0x59d148,
                'item': _0x9828f0,
                'index': _0x2b6b80
            }), _0x1d9df2 && this['incoming']['delete'](_0x1d9df2);
        } finally {
            _0x540b13['dznvm'](_0x1ce9d2);
        }
        return _0x9828f0;
    }
    ['hide'](_0x515daa) {
        const _0x423656 = {
            'VdSqv': function (_0x51639b, _0x4517a4) {
                return _0x51639b === _0x4517a4;
            },
            'gbojl': function (_0x217f8d, _0x971d2c) {
                return _0x217f8d != _0x971d2c;
            },
            'NWxDZ': function (_0x57d8bd, _0x54e4c5) {
                return _0x57d8bd === _0x54e4c5;
            },
            'rHLWj': 'function'
        };
        let _0x5ed29e = ![];
        for (const _0x33f859 of this['getPaneContainers']()) {
            const _0x308ecd = _0x423656['VdSqv'](_0x33f859, this['getCenter']());
            if (_0x308ecd || _0x33f859['isVisible']())
                for (const _0x510873 of _0x33f859['getPanes']()) {
                    const _0x5c3840 = _0x510873['getActiveItem'](), _0xf722a = _0x423656['gbojl'](_0x5c3840, null) && (_0x423656['NWxDZ'](_0x5c3840, _0x515daa) || _0x423656['NWxDZ'](typeof _0x5c3840['getURI'], _0x423656['rHLWj']) && _0x423656['NWxDZ'](_0x5c3840['getURI'](), _0x515daa));
                    _0xf722a && (_0x5ed29e = !![], _0x308ecd ? _0x510873['destroyItem'](_0x5c3840) : _0x33f859['hide']());
                }
        }
        return _0x5ed29e;
    }
    ['toggle'](_0x2d2536) {
        return this['hide'](_0x2d2536) ? Promise['resolve']() : this['open'](_0x2d2536, { 'searchAllPanes': !![] });
    }
    ['openLicense']() {
        const _0x555c71 = { 'RBVla': 'LICENSE.md' };
        return this['open'](path['join'](process['resourcesPath'], _0x555c71['RBVla']));
    }
    ['openSync'](_0x5e72ca = '', _0xe5e9cd = {}) {
        const _0x4e3f26 = {
                'ojcjF': function (_0x1b58a9, _0x9b8e94) {
                    return _0x1b58a9 != _0x9b8e94;
                },
                'VonTt': function (_0x3e3fb1, _0xe1d6ac) {
                    return _0x3e3fb1 == _0xe1d6ac;
                },
                'HAhrT': function (_0x4743bd, _0x3c25dc, _0x5305ec) {
                    return _0x4743bd(_0x3c25dc, _0x5305ec);
                }
            }, {
                initialLine: _0x9dc1f4,
                initialColumn: _0x546f70
            } = _0xe5e9cd, _0x88b0b4 = _0x4e3f26['ojcjF'](_0xe5e9cd['activatePane'], null) ? _0xe5e9cd['activatePane'] : !![], _0xc9af9e = _0x4e3f26['ojcjF'](_0xe5e9cd['activateItem'], null) ? _0xe5e9cd['activateItem'] : !![], _0x2ca5b8 = this['project']['resolvePath'](_0x5e72ca);
        let _0x1d304f = this['getActivePane']()['itemForURI'](_0x2ca5b8);
        if (_0x2ca5b8 && _0x4e3f26['VonTt'](_0x1d304f, null))
            for (const _0x6276bc of this['getOpeners']()) {
                _0x1d304f = _0x4e3f26['HAhrT'](_0x6276bc, _0x2ca5b8, _0xe5e9cd);
                if (_0x1d304f)
                    break;
            }
        return _0x4e3f26['VonTt'](_0x1d304f, null) && (_0x1d304f = this['project']['openSync'](_0x2ca5b8, {
            'initialLine': _0x9dc1f4,
            'initialColumn': _0x546f70
        })), _0xc9af9e && this['getActivePane']()['activateItem'](_0x1d304f), this['itemOpened'](_0x1d304f), _0x88b0b4 && this['getActivePane']()['activate'](), _0x1d304f;
    }
    ['openURIInPane'](_0x587672, _0x56066e) {
        return this['open'](_0x587672, { 'pane': _0x56066e });
    }
    async ['createItemForURI'](_0x201327, _0xde0893) {
        const _0x500902 = {
            'UXbXU': function (_0x476f47, _0x4c9980) {
                return _0x476f47 != _0x4c9980;
            },
            'bgQlB': function (_0xe0675, _0x1f7349, _0xf7ddf9) {
                return _0xe0675(_0x1f7349, _0xf7ddf9);
            },
            'IHxjV': 'CANCELLED',
            'KwNOm': 'EACCES',
            'eFAaA': 'EPERM',
            'LARdj': 'EBUSY',
            'Rywee': 'ENXIO',
            'EZqSb': 'EIO',
            'VkgFS': 'ENOTCONN',
            'vKQEZ': 'UNKNOWN',
            'TxPCv': 'ECONNRESET',
            'qkigb': 'EINVAL',
            'FmKZY': 'EMFILE',
            'PlupF': 'ENOTDIR',
            'WKCEO': 'EAGAIN',
            'lcAoU': function (_0x505e29, _0x2f843f) {
                return _0x505e29 != _0x2f843f;
            }
        };
        if (_0x500902['UXbXU'](_0x201327, null))
            for (const _0x3cd0ee of this['getOpeners']()) {
                const _0x2b4e6c = _0x500902['bgQlB'](_0x3cd0ee, _0x201327, _0xde0893);
                if (_0x500902['UXbXU'](_0x2b4e6c, null))
                    return _0x2b4e6c;
            }
        try {
            const _0x4f32f9 = await this['openTextFile'](_0x201327, _0xde0893);
            return _0x4f32f9;
        } catch (_0x11c177) {
            switch (_0x11c177['code']) {
            case _0x500902['IHxjV']:
                return Promise['resolve']();
            case _0x500902['KwNOm']:
                this['notificationManager']['addWarning']('Permission\x20denied\x20\x27' + _0x11c177['path'] + '\x27');
                return Promise['resolve']();
            case _0x500902['eFAaA']:
            case _0x500902['LARdj']:
            case _0x500902['Rywee']:
            case _0x500902['EZqSb']:
            case _0x500902['VkgFS']:
            case _0x500902['vKQEZ']:
            case _0x500902['TxPCv']:
            case _0x500902['qkigb']:
            case _0x500902['FmKZY']:
            case _0x500902['PlupF']:
            case _0x500902['WKCEO']:
                this['notificationManager']['addWarning']('Unable\x20to\x20open\x20\x27' + (_0x500902['lcAoU'](_0x11c177['path'], null) ? _0x11c177['path'] : _0x201327) + '\x27', { 'detail': _0x11c177['message'] });
                return Promise['resolve']();
            default:
                throw _0x11c177;
            }
        }
    }
    async ['openTextFile'](_0x189cf4, _0x3e4b12) {
        const _0x361b4c = {
                'WfRfm': function (_0x25cf1e, _0x260f0a) {
                    return _0x25cf1e === _0x260f0a;
                },
                'AktQI': 'CANCELLED',
                'nhgce': function (_0x35fa0e, _0x2d0688) {
                    return _0x35fa0e(_0x2d0688);
                },
                'nDgcD': function (_0x2182b2) {
                    return _0x2182b2();
                },
                'TGMNo': 'Atom\x20will\x20be\x20unresponsive\x20during\x20the\x20loading\x20of\x20very\x20large\x20files.',
                'wAoFB': 'Do\x20you\x20still\x20want\x20to\x20load\x20this\x20file?',
                'PPgnL': 'Proceed',
                'dbIGr': 'Cancel',
                'zaSYt': function (_0x57f690, _0xb0dd39) {
                    return _0x57f690 != _0xb0dd39;
                },
                'gYwTv': function (_0x41ad96, _0x1ecfaf) {
                    return _0x41ad96 !== _0x1ecfaf;
                },
                'xuAQi': 'ENOENT',
                'JpVjC': function (_0xa18506, _0x3bcdd0) {
                    return _0xa18506 >= _0x3bcdd0;
                },
                'RUeHk': function (_0x5d8e5d, _0x2546e9) {
                    return _0x5d8e5d * _0x2546e9;
                },
                'UZDDl': 'core.warnOnLargeFileLimit'
            }, _0x3ea838 = this['project']['resolvePath'](_0x189cf4);
        if (_0x361b4c['zaSYt'](_0x3ea838, null))
            try {
                fs['closeSync'](fs['openSync'](_0x3ea838, 'r'));
            } catch (_0x189758) {
                if (_0x361b4c['gYwTv'](_0x189758['code'], _0x361b4c['xuAQi']))
                    throw _0x189758;
            }
        const _0x171ec2 = fs['getSizeSync'](_0x3ea838);
        _0x361b4c['JpVjC'](_0x171ec2, _0x361b4c['RUeHk'](this['config']['get'](_0x361b4c['UZDDl']), 0x100000)) && await new Promise((_0x24dd69, _0x28afe5) => {
            const _0x136fc7 = {
                'exDTH': function (_0x2f82ce, _0x52f9a8) {
                    return _0x361b4c['WfRfm'](_0x2f82ce, _0x52f9a8);
                },
                'nMYvt': _0x361b4c['AktQI'],
                'qWYlu': function (_0x51c1a2, _0x4c2d15) {
                    return _0x361b4c['nhgce'](_0x51c1a2, _0x4c2d15);
                },
                'XrdQR': function (_0x31f106) {
                    return _0x361b4c['nDgcD'](_0x31f106);
                }
            };
            this['applicationDelegate']['confirm']({
                'message': _0x361b4c['TGMNo'],
                'detail': _0x361b4c['wAoFB'],
                'buttons': [
                    _0x361b4c['PPgnL'],
                    _0x361b4c['dbIGr']
                ]
            }, _0x23989c => {
                if (_0x136fc7['exDTH'](_0x23989c, 0x1)) {
                    const _0x6d6582 = new Error();
                    _0x6d6582['code'] = _0x136fc7['nMYvt'], _0x136fc7['qWYlu'](_0x28afe5, _0x6d6582);
                } else
                    _0x136fc7['XrdQR'](_0x24dd69);
            });
        });
        const _0x556618 = await this['project']['bufferForPath'](_0x3ea838, _0x3e4b12);
        return this['textEditorRegistry']['build'](Object['assign']({
            'buffer': _0x556618,
            'autoHeight': ![]
        }, _0x3e4b12));
    }
    ['handleGrammarUsed'](_0x10d270) {
        const _0x36c871 = {
            'qtKHS': function (_0x1c6c69, _0x53a2e) {
                return _0x1c6c69 == _0x53a2e;
            }
        };
        if (_0x36c871['qtKHS'](_0x10d270, null))
            return;
        this['packageManager']['triggerActivationHook'](_0x10d270['scopeName'] + ':root-scope-used'), this['packageManager']['triggerActivationHook'](_0x10d270['packageName'] + ':grammar-used');
    }
    ['isTextEditor'](_0x2851f8) {
        const _0x4a4757 = {
            'KKHST': function (_0x24e5cc, _0x48ac05) {
                return _0x24e5cc instanceof _0x48ac05;
            }
        };
        return _0x4a4757['KKHST'](_0x2851f8, TextEditor);
    }
    ['buildTextEditor'](_0x13b9d8) {
        const _0x4513d4 = this['textEditorRegistry']['build'](_0x13b9d8), _0x190e4a = this['textEditorRegistry']['maintainConfig'](_0x4513d4);
        return _0x4513d4['onDidDestroy'](() => _0x190e4a['dispose']()), _0x4513d4;
    }
    ['reopenItem']() {
        const _0x55f495 = this['destroyedItemURIs']['pop']();
        return _0x55f495 ? this['open'](_0x55f495) : Promise['resolve']();
    }
    ['addOpener'](_0x3352a6) {
        return this['openers']['push'](_0x3352a6), new Disposable(() => {
            _['remove'](this['openers'], _0x3352a6);
        });
    }
    ['getOpeners']() {
        return this['openers'];
    }
    ['getPaneItems']() {
        return _['flatten'](this['getPaneContainers']()['map'](_0x4fed01 => _0x4fed01['getPaneItems']()));
    }
    ['getActivePaneItem']() {
        return this['getActivePaneContainer']()['getActivePaneItem']();
    }
    ['getTextEditors']() {
        return this['getPaneItems']()['filter'](_0x4489df => _0x4489df instanceof TextEditor);
    }
    ['getActiveTextEditor']() {
        const _0x17ac4a = {
                'HYLfu': function (_0x26dcc1, _0x33e345) {
                    return _0x26dcc1 instanceof _0x33e345;
                }
            }, _0x549d7d = this['getCenter']()['getActivePaneItem']();
        if (_0x17ac4a['HYLfu'](_0x549d7d, TextEditor))
            return _0x549d7d;
    }
    ['saveAll']() {
        this['getPaneContainers']()['forEach'](_0x5946cc => {
            _0x5946cc['saveAll']();
        });
    }
    ['confirmClose'](_0x2095ea) {
        return Promise['all'](this['getPaneContainers']()['map'](_0x3a5f10 => _0x3a5f10['confirmClose'](_0x2095ea)))['then'](_0x14e823 => !_0x14e823['includes'](![]));
    }
    ['saveActivePaneItem']() {
        return this['getCenter']()['getActivePane']()['saveActiveItem']();
    }
    ['saveActivePaneItemAs']() {
        this['getCenter']()['getActivePane']()['saveActiveItemAs']();
    }
    ['destroyActivePaneItem']() {
        return this['getActivePane']()['destroyActiveItem']();
    }
    ['getActivePaneContainer']() {
        return this['activePaneContainer'];
    }
    ['getPanes']() {
        return _['flatten'](this['getPaneContainers']()['map'](_0x3571c9 => _0x3571c9['getPanes']()));
    }
    ['getVisiblePanes']() {
        return _['flatten'](this['getVisiblePaneContainers']()['map'](_0x338763 => _0x338763['getPanes']()));
    }
    ['getActivePane']() {
        return this['getActivePaneContainer']()['getActivePane']();
    }
    ['activateNextPane']() {
        return this['getActivePaneContainer']()['activateNextPane']();
    }
    ['activatePreviousPane']() {
        return this['getActivePaneContainer']()['activatePreviousPane']();
    }
    ['paneContainerForURI'](_0x16b9e0) {
        return this['getPaneContainers']()['find'](_0x291a93 => _0x291a93['paneForURI'](_0x16b9e0));
    }
    ['paneContainerForItem'](_0x4a7ed1) {
        return this['getPaneContainers']()['find'](_0x4f5ce1 => _0x4f5ce1['paneForItem'](_0x4a7ed1));
    }
    ['paneForURI'](_0x4b4aef) {
        const _0xdecefb = {
            'oPghu': function (_0xc77b04, _0x577277) {
                return _0xc77b04 != _0x577277;
            }
        };
        for (let _0x520918 of this['getPaneContainers']()) {
            const _0x8660cf = _0x520918['paneForURI'](_0x4b4aef);
            if (_0xdecefb['oPghu'](_0x8660cf, null))
                return _0x8660cf;
        }
    }
    ['paneForItem'](_0x51f8cc) {
        const _0x432e34 = {
            'jClsm': function (_0x2c3767, _0x3eb6ee) {
                return _0x2c3767 != _0x3eb6ee;
            }
        };
        for (let _0x1f2453 of this['getPaneContainers']()) {
            const _0x3d9010 = _0x1f2453['paneForItem'](_0x51f8cc);
            if (_0x432e34['jClsm'](_0x3d9010, null))
                return _0x3d9010;
        }
    }
    ['destroyActivePane']() {
        const _0x4cec6d = {
                'nMcQF': function (_0x3cede1, _0x3fb28c) {
                    return _0x3cede1 != _0x3fb28c;
                }
            }, _0x914417 = this['getActivePane']();
        _0x4cec6d['nMcQF'](_0x914417, null) && _0x914417['destroy']();
    }
    ['closeActivePaneItemOrEmptyPaneOrWindow']() {
        const _0x485477 = {
            'pyRrc': function (_0x1f8ba6, _0xc6c511) {
                return _0x1f8ba6 != _0xc6c511;
            },
            'xtmiH': function (_0x4c2238, _0x28ec54) {
                return _0x4c2238 > _0x28ec54;
            },
            'miFxM': 'core.closeEmptyWindows'
        };
        if (_0x485477['pyRrc'](this['getCenter']()['getActivePaneItem'](), null))
            this['getCenter']()['getActivePane']()['destroyActiveItem']();
        else {
            if (_0x485477['xtmiH'](this['getCenter']()['getPanes']()['length'], 0x1))
                this['getCenter']()['destroyActivePane']();
            else
                this['config']['get'](_0x485477['miFxM']) && atom['close']();
        }
    }
    ['increaseFontSize']() {
        const _0x112349 = {
            'NMnmw': 'editor.fontSize',
            'Skjet': function (_0x25cda6, _0x6456ab) {
                return _0x25cda6 + _0x6456ab;
            }
        };
        this['config']['set'](_0x112349['NMnmw'], _0x112349['Skjet'](this['config']['get'](_0x112349['NMnmw']), 0x1));
    }
    ['decreaseFontSize']() {
        const _0x5b831a = {
                'IhcKR': 'editor.fontSize',
                'cWgYG': function (_0x3f77bb, _0x12ef6d) {
                    return _0x3f77bb > _0x12ef6d;
                },
                'eazjJ': function (_0x377f71, _0x4393e2) {
                    return _0x377f71 - _0x4393e2;
                }
            }, _0x43552e = this['config']['get'](_0x5b831a['IhcKR']);
        _0x5b831a['cWgYG'](_0x43552e, 0x1) && this['config']['set'](_0x5b831a['IhcKR'], _0x5b831a['eazjJ'](_0x43552e, 0x1));
    }
    ['resetFontSize']() {
        const _0x35f097 = {
            'bXENw': 'editor.fontSize',
            'ZWfzS': 'editor.defaultFontSize'
        };
        this['config']['set'](_0x35f097['bXENw'], this['config']['get'](_0x35f097['ZWfzS']));
    }
    ['itemOpened'](_0x1c944a) {
        const _0x3d9e38 = {
            'EtdNF': function (_0x1efe41, _0x50b044) {
                return _0x1efe41 === _0x50b044;
            },
            'jFMgk': 'function',
            'ZjjsT': function (_0x2e3891, _0x3e6829) {
                return _0x2e3891 != _0x3e6829;
            }
        };
        let _0x1e35ea;
        if (_0x3d9e38['EtdNF'](typeof _0x1c944a['getURI'], _0x3d9e38['jFMgk']))
            _0x1e35ea = _0x1c944a['getURI']();
        else
            _0x3d9e38['EtdNF'](typeof _0x1c944a['getUri'], _0x3d9e38['jFMgk']) && (_0x1e35ea = _0x1c944a['getUri']());
        _0x3d9e38['ZjjsT'](_0x1e35ea, null) && _['remove'](this['destroyedItemURIs'], _0x1e35ea);
    }
    ['didDestroyPaneItem']({item: _0x296832}) {
        const _0x6f576c = {
            'ZasIC': function (_0x460a49, _0x48cdae) {
                return _0x460a49 === _0x48cdae;
            },
            'iAlrk': 'function',
            'Zkvpe': function (_0x1bebdf, _0x50d5f8) {
                return _0x1bebdf != _0x50d5f8;
            }
        };
        let _0x37fbce;
        if (_0x6f576c['ZasIC'](typeof _0x296832['getURI'], _0x6f576c['iAlrk']))
            _0x37fbce = _0x296832['getURI']();
        else
            _0x6f576c['ZasIC'](typeof _0x296832['getUri'], _0x6f576c['iAlrk']) && (_0x37fbce = _0x296832['getUri']());
        _0x6f576c['Zkvpe'](_0x37fbce, null) && this['destroyedItemURIs']['push'](_0x37fbce);
    }
    ['destroyed']() {
        const _0x5ec628 = {
                'RQoja': '0|2|6|1|3|4|5',
                'zxkhU': function (_0x1f7e0d, _0x442f10) {
                    return _0x1f7e0d != _0x442f10;
                }
            }, _0x206c1a = _0x5ec628['RQoja']['split']('|');
        let _0x2a22ab = 0x0;
        while (!![]) {
            switch (_0x206c1a[_0x2a22ab++]) {
            case '0':
                this['paneContainers']['center']['destroy']();
                continue;
            case '1':
                this['paneContainers']['bottom']['destroy']();
                continue;
            case '2':
                this['paneContainers']['left']['destroy']();
                continue;
            case '3':
                this['cancelStoppedChangingActivePaneItemTimeout']();
                continue;
            case '4':
                _0x5ec628['zxkhU'](this['activeItemSubscriptions'], null) && this['activeItemSubscriptions']['dispose']();
                continue;
            case '5':
                if (this['element'])
                    this['element']['destroy']();
                continue;
            case '6':
                this['paneContainers']['right']['destroy']();
                continue;
            }
            break;
        }
    }
    ['getCenter']() {
        return this['paneContainers']['center'];
    }
    ['getLeftDock']() {
        return this['paneContainers']['left'];
    }
    ['getRightDock']() {
        return this['paneContainers']['right'];
    }
    ['getBottomDock']() {
        return this['paneContainers']['bottom'];
    }
    ['getPaneContainers']() {
        return [
            this['paneContainers']['center'],
            this['paneContainers']['left'],
            this['paneContainers']['right'],
            this['paneContainers']['bottom']
        ];
    }
    ['getVisiblePaneContainers']() {
        const _0x58d693 = this['getCenter']();
        return atom['workspace']['getPaneContainers']()['filter'](_0x255534 => _0x255534 === _0x58d693 || _0x255534['isVisible']());
    }
    ['getBottomPanels']() {
        const _0x57196a = { 'lwvix': 'bottom' };
        return this['getPanels'](_0x57196a['lwvix']);
    }
    ['addBottomPanel'](_0x3323f9) {
        const _0x4f594e = { 'lnVCH': 'bottom' };
        return this['addPanel'](_0x4f594e['lnVCH'], _0x3323f9);
    }
    ['getLeftPanels']() {
        const _0x1ee8f6 = { 'tyRVh': 'left' };
        return this['getPanels'](_0x1ee8f6['tyRVh']);
    }
    ['addLeftPanel'](_0xa279ca) {
        const _0x380285 = { 'bUzWs': 'left' };
        return this['addPanel'](_0x380285['bUzWs'], _0xa279ca);
    }
    ['getRightPanels']() {
        const _0x18160c = { 'bnNKV': 'right' };
        return this['getPanels'](_0x18160c['bnNKV']);
    }
    ['addRightPanel'](_0x5b818a) {
        const _0x20c6b7 = { 'zqGoQ': 'right' };
        return this['addPanel'](_0x20c6b7['zqGoQ'], _0x5b818a);
    }
    ['getTopPanels']() {
        const _0x13d5a0 = { 'DoodG': 'top' };
        return this['getPanels'](_0x13d5a0['DoodG']);
    }
    ['addTopPanel'](_0x33b1f1) {
        const _0x19b8d5 = { 'qXfLs': 'top' };
        return this['addPanel'](_0x19b8d5['qXfLs'], _0x33b1f1);
    }
    ['getHeaderPanels']() {
        const _0x3526fe = { 'PnfWm': 'header' };
        return this['getPanels'](_0x3526fe['PnfWm']);
    }
    ['addHeaderPanel'](_0x2f55e3) {
        const _0x3cefba = { 'JSEsy': 'header' };
        return this['addPanel'](_0x3cefba['JSEsy'], _0x2f55e3);
    }
    ['getFooterPanels']() {
        const _0x27402f = { 'CGhJI': 'footer' };
        return this['getPanels'](_0x27402f['CGhJI']);
    }
    ['addFooterPanel'](_0x27ecc8) {
        const _0x7a2cb4 = { 'AzbsI': 'footer' };
        return this['addPanel'](_0x7a2cb4['AzbsI'], _0x27ecc8);
    }
    ['getModalPanels']() {
        const _0x28d035 = { 'dmoHW': 'modal' };
        return this['getPanels'](_0x28d035['dmoHW']);
    }
    ['addModalPanel'](_0x2f2e10 = {}) {
        const _0x54c88d = { 'yipci': 'modal' };
        return this['addPanel'](_0x54c88d['yipci'], _0x2f2e10);
    }
    ['panelForItem'](_0x4324c9) {
        const _0x3f695e = {
            'KwlHx': function (_0x261d5c, _0x3ce887) {
                return _0x261d5c != _0x3ce887;
            }
        };
        for (let _0x32c391 in this['panelContainers']) {
            const _0xc61cf5 = this['panelContainers'][_0x32c391], _0x2271bb = _0xc61cf5['panelForItem'](_0x4324c9);
            if (_0x3f695e['KwlHx'](_0x2271bb, null))
                return _0x2271bb;
        }
        return null;
    }
    ['getPanels'](_0x4a5a1b) {
        return this['panelContainers'][_0x4a5a1b]['getPanels']();
    }
    ['addPanel'](_0x8561b, _0x5d9db9) {
        const _0x1c9d73 = {
            'DxpbS': function (_0x575db4, _0x14dcda) {
                return _0x575db4 == _0x14dcda;
            }
        };
        return _0x1c9d73['DxpbS'](_0x5d9db9, null) && (_0x5d9db9 = {}), this['panelContainers'][_0x8561b]['addPanel'](new Panel(_0x5d9db9, this['viewRegistry']));
    }
    ['scan'](_0x3c7855, _0x4a31b6 = {}, _0x4733ac) {
        const _0x553f74 = {
            'mKNSl': function (_0x1d1fbb, _0x2d2329) {
                return _0x1d1fbb(_0x2d2329);
            },
            'nrAYt': function (_0x3a1b51, _0x1cf1ef, _0xec4b0d) {
                return _0x3a1b51(_0x1cf1ef, _0xec4b0d);
            },
            'sQFYj': 'core.excludeVcsIgnoredPaths',
            'eBfiS': 'core.ignoredNames',
            'PMmzV': 'core.followSymlinks',
            'bGrhg': 'cancelled',
            'aipbs': function (_0x49499c, _0x2031f3) {
                return _0x49499c > _0x2031f3;
            }
        };
        _['isFunction'](_0x4a31b6) && (_0x4733ac = _0x4a31b6, _0x4a31b6 = {});
        const _0x2eda8b = new Map();
        for (const _0x1bb4a3 of this['project']['getDirectories']()) {
            let _0xbcd971 = _0x4a31b6['ripgrep'] ? this['ripgrepDirectorySearcher'] : this['scandalDirectorySearcher'];
            for (const _0x5a3300 of this['directorySearchers']) {
                if (_0x5a3300['canSearchDirectory'](_0x1bb4a3)) {
                    _0xbcd971 = _0x5a3300;
                    break;
                }
            }
            let _0x20a807 = _0x2eda8b['get'](_0xbcd971);
            !_0x20a807 && (_0x20a807 = [], _0x2eda8b['set'](_0xbcd971, _0x20a807)), _0x20a807['push'](_0x1bb4a3);
        }
        let _0x477a28;
        if (_['isFunction'](_0x4a31b6['onPathsSearched'])) {
            const _0x4897b3 = _0x4a31b6['onPathsSearched'];
            let _0x5668a1 = 0x0;
            const _0x370220 = new Map();
            _0x477a28 = function (_0xcef29b, _0x2f2bc5) {
                const _0x56d5f8 = _0x370220['get'](_0xcef29b);
                return _0x56d5f8 && (_0x5668a1 -= _0x56d5f8), _0x370220['set'](_0xcef29b, _0x2f2bc5), _0x5668a1 += _0x2f2bc5, _0x553f74['mKNSl'](_0x4897b3, _0x5668a1);
            };
        } else
            _0x477a28 = function () {
            };
        const _0xf14672 = [];
        _0x2eda8b['forEach']((_0x5acc7e, _0x385eb6) => {
            const _0x41ee0e = {
                    'Nvxia': function (_0x5efec8, _0x168528) {
                        return _0x553f74['mKNSl'](_0x5efec8, _0x168528);
                    },
                    'UBwue': function (_0x53839e, _0x12a8e5, _0xfd4966) {
                        return _0x553f74['nrAYt'](_0x53839e, _0x12a8e5, _0xfd4966);
                    }
                }, _0x118b54 = {
                    'inclusions': _0x4a31b6['paths'] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this['config']['get'](_0x553f74['sQFYj']),
                    'exclusions': this['config']['get'](_0x553f74['eBfiS']),
                    'follow': this['config']['get'](_0x553f74['PMmzV']),
                    'leadingContextLineCount': _0x4a31b6['leadingContextLineCount'] || 0x0,
                    'trailingContextLineCount': _0x4a31b6['trailingContextLineCount'] || 0x0,
                    'PCRE2': _0x4a31b6['PCRE2'],
                    'didMatch': _0x23af98 => {
                        if (!this['project']['isPathModified'](_0x23af98['filePath']))
                            return _0x41ee0e['Nvxia'](_0x4733ac, _0x23af98);
                    },
                    'didError'(_0x5cfe7e) {
                        return _0x553f74['nrAYt'](_0x4733ac, null, _0x5cfe7e);
                    },
                    'didSearchPaths'(_0x33221c) {
                        return _0x41ee0e['UBwue'](_0x477a28, _0x385eb6, _0x33221c);
                    }
                }, _0xcd8ab0 = _0x385eb6['search'](_0x5acc7e, _0x3c7855, _0x118b54);
            _0xf14672['push'](_0xcd8ab0);
        });
        const _0x186bb3 = Promise['all'](_0xf14672);
        for (let _0x2d14c7 of this['project']['getBuffers']()) {
            if (_0x2d14c7['isModified']()) {
                const _0x499f09 = _0x2d14c7['getPath']();
                if (!this['project']['contains'](_0x499f09))
                    continue;
                var _0x46f44f = [];
                _0x2d14c7['scan'](_0x3c7855, _0x869b5b => _0x46f44f['push'](_0x869b5b)), _0x553f74['aipbs'](_0x46f44f['length'], 0x0) && _0x553f74['mKNSl'](_0x4733ac, {
                    'filePath': _0x499f09,
                    'matches': _0x46f44f
                });
            }
        }
        let _0x299eea = ![];
        const _0x1fc0b8 = new Promise((_0x36fe1e, _0x446f44) => {
            const _0x1b4c94 = function () {
                    _0x299eea ? _0x553f74['mKNSl'](_0x36fe1e, _0x553f74['bGrhg']) : _0x553f74['mKNSl'](_0x36fe1e, null);
                }, _0x3c2957 = function (_0x34bb11) {
                    for (let _0x34a629 of _0xf14672) {
                        _0x34a629['cancel']();
                    }
                    _0x553f74['mKNSl'](_0x446f44, _0x34bb11);
                };
            _0x186bb3['then'](_0x1b4c94, _0x3c2957);
        });
        return _0x1fc0b8['cancel'] = () => {
            _0x299eea = !![], _0xf14672['map'](_0x550a0a => _0x550a0a['cancel']());
        }, _0x1fc0b8;
    }
    ['replace'](_0x82d88b, _0x3a56bc, _0x5025d5, _0x4f215e) {
        const _0xd1e1f9 = {
            'Odrfm': function (_0x8bc39f) {
                return _0x8bc39f();
            },
            'LHHdc': function (_0x487636, _0x2c8061, _0x370a10) {
                return _0x487636(_0x2c8061, _0x370a10);
            },
            'gfFDx': function (_0x538283, _0x571731) {
                return _0x538283 && _0x571731;
            },
            'JqOLL': function (_0xbc4de3) {
                return _0xbc4de3();
            },
            'dRIaO': './replace-handler',
            'cZmzn': 'replace:path-replaced',
            'gyJGZ': 'replace:file-error',
            'IHsmJ': function (_0x31f872, _0x5ea130) {
                return _0x31f872(_0x5ea130);
            }
        };
        return new Promise((_0xecf90c, _0x327f48) => {
            const _0x39e703 = {
                'tBdLi': function (_0x49a2f9, _0x5411a0) {
                    return _0xd1e1f9['gfFDx'](_0x49a2f9, _0x5411a0);
                },
                'GPVSC': function (_0x55d598) {
                    return _0xd1e1f9['JqOLL'](_0x55d598);
                }
            };
            let _0x52fd92;
            const _0xf26059 = this['project']['getBuffers']()['map'](_0x5a7d7f => _0x5a7d7f['getPath']()), _0xc876df = _['difference'](_0x5025d5, _0xf26059);
            let _0x4ea2ab = !_0xf26059['length'], _0x7ac97a = !_0xc876df['length'];
            const _0x40d378 = () => {
                _0x39e703['tBdLi'](_0x7ac97a, _0x4ea2ab) && _0x39e703['GPVSC'](_0xecf90c);
            };
            if (!_0x7ac97a['length']) {
                let _0x508a18 = 'g';
                _0x82d88b['multiline'] && (_0x508a18 += 'm');
                _0x82d88b['ignoreCase'] && (_0x508a18 += 'i');
                const _0x19ef5f = Task['once'](require['resolve'](_0xd1e1f9['dRIaO']), _0xc876df, _0x82d88b['source'], _0x508a18, _0x3a56bc, () => {
                    _0x7ac97a = !![], _0xd1e1f9['Odrfm'](_0x40d378);
                });
                _0x19ef5f['on'](_0xd1e1f9['cZmzn'], _0x4f215e), _0x19ef5f['on'](_0xd1e1f9['gyJGZ'], _0x3bf69a => {
                    _0xd1e1f9['LHHdc'](_0x4f215e, null, _0x3bf69a);
                });
            }
            for (_0x52fd92 of this['project']['getBuffers']()) {
                if (!_0x5025d5['includes'](_0x52fd92['getPath']()))
                    continue;
                const _0x359c3d = _0x52fd92['replace'](_0x82d88b, _0x3a56bc, _0x4f215e);
                _0x359c3d && _0xd1e1f9['IHsmJ'](_0x4f215e, {
                    'filePath': _0x52fd92['getPath'](),
                    'replacements': _0x359c3d
                });
            }
            _0x4ea2ab = !![], _0xd1e1f9['JqOLL'](_0x40d378);
        });
    }
    ['checkoutHeadRevision'](_0x54c3ce) {
        const _0xf11347 = {
            'fGtRx': function (_0x4c5984, _0x1bf14a) {
                return _0x4c5984 === _0x1bf14a;
            },
            'WwhZW': function (_0x5bb28f) {
                return _0x5bb28f();
            },
            'YONgx': 'editor.confirmCheckoutHeadRevision',
            'VhwDB': 'Confirm\x20Checkout\x20HEAD\x20Revision',
            'aXDMu': 'Cancel'
        };
        if (_0x54c3ce['getPath']()) {
            const _0x3d8e0b = async () => {
                const _0x3b51aa = await this['project']['repositoryForDirectory'](new Directory(_0x54c3ce['getDirectoryPath']()));
                if (_0x3b51aa)
                    _0x3b51aa['checkoutHeadForEditor'](_0x54c3ce);
            };
            this['config']['get'](_0xf11347['YONgx']) ? this['applicationDelegate']['confirm']({
                'message': _0xf11347['VhwDB'],
                'detail': 'Are\x20you\x20sure\x20you\x20want\x20to\x20discard\x20all\x20changes\x20to\x20\x22' + _0x54c3ce['getFileName']() + '\x22\x20since\x20the\x20last\x20Git\x20commit?',
                'buttons': [
                    'OK',
                    _0xf11347['aXDMu']
                ]
            }, _0x51f637 => {
                if (_0xf11347['fGtRx'](_0x51f637, 0x0))
                    _0xf11347['WwhZW'](_0x3d8e0b);
            }) : _0xf11347['WwhZW'](_0x3d8e0b);
        }
    }
};
