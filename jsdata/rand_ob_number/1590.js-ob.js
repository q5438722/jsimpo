const _ = require('underscore-plus'), url = require('url'), path = require('path'), {Emitter, Disposable, CompositeDisposable} = require('event-kit'), fs = require('fs-plus'), {Directory} = require('pathwatcher'), Grim = require('grim'), DefaultDirectorySearcher = require('./default-directory-searcher'), RipgrepDirectorySearcher = require('./ripgrep-directory-searcher'), Dock = require('./dock'), Model = require('./model'), StateStore = require('./state-store'), TextEditor = require('./text-editor'), Panel = require('./panel'), PanelContainer = require('./panel-container'), Task = require('./task'), WorkspaceCenter = require('./workspace-center'), {createWorkspaceElement} = require('./workspace-element'), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = -0x211 * 0x10 + 0xc97 + 0x14dd, ALL_LOCATIONS = [
        'center',
        'left',
        'right',
        'bottom'
    ];
module['exports'] = class Workspace extends Model {
    constructor(_0x1d0775) {
        super(...arguments), this['updateWindowTitle'] = this['updateWindowTitle']['bind'](this), this['updateDocumentEdited'] = this['updateDocumentEdited']['bind'](this), this['didDestroyPaneItem'] = this['didDestroyPaneItem']['bind'](this), this['didChangeActivePaneOnPaneContainer'] = this['didChangeActivePaneOnPaneContainer']['bind'](this), this['didChangeActivePaneItemOnPaneContainer'] = this['didChangeActivePaneItemOnPaneContainer']['bind'](this), this['didActivatePaneContainer'] = this['didActivatePaneContainer']['bind'](this), this['enablePersistence'] = _0x1d0775['enablePersistence'], this['packageManager'] = _0x1d0775['packageManager'], this['config'] = _0x1d0775['config'], this['project'] = _0x1d0775['project'], this['notificationManager'] = _0x1d0775['notificationManager'], this['viewRegistry'] = _0x1d0775['viewRegistry'], this['grammarRegistry'] = _0x1d0775['grammarRegistry'], this['applicationDelegate'] = _0x1d0775['applicationDelegate'], this['assert'] = _0x1d0775['assert'], this['deserializerManager'] = _0x1d0775['deserializerManager'], this['textEditorRegistry'] = _0x1d0775['textEditorRegistry'], this['styleManager'] = _0x1d0775['styleManager'], this['draggingItem'] = ![], this['itemLocationStore'] = new StateStore('AtomPreviousItemLocations', 0x749 + 0x1a73 + 0x5 * -0x6bf), this['emitter'] = new Emitter(), this['openers'] = [], this['destroyedItemURIs'] = [], this['stoppedChangingActivePaneItemTimeout'] = null, this['scandalDirectorySearcher'] = new DefaultDirectorySearcher(), this['ripgrepDirectorySearcher'] = new RipgrepDirectorySearcher(), this['consumeServices'](this['packageManager']), this['paneContainers'] = {
            'center': this['createCenter'](),
            'left': this['createDock']('left'),
            'right': this['createDock']('right'),
            'bottom': this['createDock']('bottom')
        }, this['activePaneContainer'] = this['paneContainers']['center'], this['hasActiveTextEditor'] = ![], this['panelContainers'] = {
            'top': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'top'
            }),
            'left': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'left',
                'dock': this['paneContainers']['left']
            }),
            'right': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'right',
                'dock': this['paneContainers']['right']
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'bottom',
                'dock': this['paneContainers']['bottom']
            }),
            'header': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'header'
            }),
            'footer': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'footer'
            }),
            'modal': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'modal'
            })
        }, this['incoming'] = new Map();
    }
    get ['paneContainer']() {
        return Grim['deprecate']('`atom.workspace.paneContainer`\x20has\x20always\x20been\x20private,\x20but\x20it\x20is\x20now\x20gone.\x20Please\x20use\x20`atom.workspace.getCenter()`\x20instead\x20and\x20consult\x20the\x20workspace\x20API\x20docs\x20for\x20public\x20methods.'), this['paneContainers']['center']['paneContainer'];
    }
    ['getElement']() {
        return !this['element'] && (this['element'] = createWorkspaceElement()['initialize'](this, {
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
    ['createDock'](_0xdc930f) {
        return new Dock({
            'location': _0xdc930f,
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
    ['reset'](_0x38e341) {
        this['packageManager'] = _0x38e341, this['emitter']['dispose'](), this['emitter'] = new Emitter(), this['paneContainers']['center']['destroy'](), this['paneContainers']['left']['destroy'](), this['paneContainers']['right']['destroy'](), this['paneContainers']['bottom']['destroy'](), _['values'](this['panelContainers'])['forEach'](_0x2e6f40 => {
            _0x2e6f40['destroy']();
        }), this['paneContainers'] = {
            'center': this['createCenter'](),
            'left': this['createDock']('left'),
            'right': this['createDock']('right'),
            'bottom': this['createDock']('bottom')
        }, this['activePaneContainer'] = this['paneContainers']['center'], this['hasActiveTextEditor'] = ![], this['panelContainers'] = {
            'top': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'top'
            }),
            'left': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'left',
                'dock': this['paneContainers']['left']
            }),
            'right': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'right',
                'dock': this['paneContainers']['right']
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'bottom',
                'dock': this['paneContainers']['bottom']
            }),
            'header': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'header'
            }),
            'footer': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'footer'
            }),
            'modal': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'modal'
            })
        }, this['openers'] = [], this['destroyedItemURIs'] = [], this['element'] && (this['element']['destroy'](), this['element'] = null), this['consumeServices'](this['packageManager']);
    }
    ['initialize']() {
        this['originalFontSize'] = this['config']['get']('defaultFontSize'), this['project']['onDidChangePaths'](this['updateWindowTitle']), this['subscribeToAddedItems'](), this['subscribeToMovedItems'](), this['subscribeToDockToggling']();
    }
    ['consumeServices']({serviceHub: _0x1c2938}) {
        this['directorySearchers'] = [], _0x1c2938['consume']('atom.directory-searcher', '^0.1.0', _0xab44b1 => this['directorySearchers']['unshift'](_0xab44b1));
    }
    ['serialize']() {
        return {
            'deserializer': 'Workspace',
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
    ['deserialize'](_0x3d0c3f, _0x24fbf8) {
        const _0x57c24a = _0x3d0c3f['packagesWithActiveGrammars'] != null ? _0x3d0c3f['packagesWithActiveGrammars'] : [];
        for (let _0x347d54 of _0x57c24a) {
            const _0x699670 = this['packageManager']['getLoadedPackage'](_0x347d54);
            _0x699670 != null && _0x699670['loadGrammarsSync']();
        }
        _0x3d0c3f['destroyedItemURIs'] != null && (this['destroyedItemURIs'] = _0x3d0c3f['destroyedItemURIs']);
        if (_0x3d0c3f['paneContainers'])
            this['paneContainers']['center']['deserialize'](_0x3d0c3f['paneContainers']['center'], _0x24fbf8), this['paneContainers']['left']['deserialize'](_0x3d0c3f['paneContainers']['left'], _0x24fbf8), this['paneContainers']['right']['deserialize'](_0x3d0c3f['paneContainers']['right'], _0x24fbf8), this['paneContainers']['bottom']['deserialize'](_0x3d0c3f['paneContainers']['bottom'], _0x24fbf8);
        else
            _0x3d0c3f['paneContainer'] && this['paneContainers']['center']['deserialize'](_0x3d0c3f['paneContainer'], _0x24fbf8);
        this['hasActiveTextEditor'] = this['getActiveTextEditor']() != null, this['updateWindowTitle']();
    }
    ['getPackageNamesWithActiveGrammars']() {
        const _0x4296fe = [], _0x25e373 = ({
                includedGrammarScopes: _0x4ef275,
                packageName: _0x4f506d
            } = {}) => {
                if (!_0x4f506d)
                    return;
                if (_0x4296fe['indexOf'](_0x4f506d) !== -(0xfe3 + -0x1c14 + 0xc32))
                    return;
                _0x4296fe['push'](_0x4f506d);
                for (let _0x357aa6 of _0x4ef275 != null ? _0x4ef275 : []) {
                    _0x25e373(this['grammarRegistry']['grammarForScopeName'](_0x357aa6));
                }
            }, _0x4fc34a = this['getTextEditors']();
        for (let _0x39d138 of _0x4fc34a) {
            _0x25e373(_0x39d138['getGrammar']());
        }
        if (_0x4fc34a['length'] > 0x1 * -0xd8b + 0x2 * 0x299 + 0x859 * 0x1)
            for (let _0x92d920 of this['grammarRegistry']['getGrammars']()) {
                _0x92d920['injectionSelector'] && _0x25e373(_0x92d920);
            }
        return _['uniq'](_0x4296fe);
    }
    ['didActivatePaneContainer'](_0x5b80d8) {
        _0x5b80d8 !== this['getActivePaneContainer']() && (this['activePaneContainer'] = _0x5b80d8, this['didChangeActivePaneItem'](this['activePaneContainer']['getActivePaneItem']()), this['emitter']['emit']('did-change-active-pane-container', this['activePaneContainer']), this['emitter']['emit']('did-change-active-pane', this['activePaneContainer']['getActivePane']()), this['emitter']['emit']('did-change-active-pane-item', this['activePaneContainer']['getActivePaneItem']()));
    }
    ['didChangeActivePaneOnPaneContainer'](_0x50231d, _0x1faff8) {
        _0x50231d === this['getActivePaneContainer']() && this['emitter']['emit']('did-change-active-pane', _0x1faff8);
    }
    ['didChangeActivePaneItemOnPaneContainer'](_0x1eb782, _0x3dcff4) {
        _0x1eb782 === this['getActivePaneContainer']() && (this['didChangeActivePaneItem'](_0x3dcff4), this['emitter']['emit']('did-change-active-pane-item', _0x3dcff4));
        if (_0x1eb782 === this['getCenter']()) {
            const _0x588097 = this['hasActiveTextEditor'];
            this['hasActiveTextEditor'] = _0x3dcff4 instanceof TextEditor;
            if (this['hasActiveTextEditor'] || _0x588097) {
                const _0x2ce518 = this['hasActiveTextEditor'] ? _0x3dcff4 : undefined;
                this['emitter']['emit']('did-change-active-text-editor', _0x2ce518);
            }
        }
    }
    ['didChangeActivePaneItem'](_0x45d46d) {
        this['updateWindowTitle'](), this['updateDocumentEdited']();
        if (this['activeItemSubscriptions'])
            this['activeItemSubscriptions']['dispose']();
        this['activeItemSubscriptions'] = new CompositeDisposable();
        let _0x2eac6e, _0xe5d7e0;
        if (_0x45d46d != null && typeof _0x45d46d['onDidChangeTitle'] === 'function')
            _0xe5d7e0 = _0x45d46d['onDidChangeTitle'](this['updateWindowTitle']);
        else
            _0x45d46d != null && typeof _0x45d46d['on'] === 'function' && (_0xe5d7e0 = _0x45d46d['on']('title-changed', this['updateWindowTitle']), (_0xe5d7e0 == null || typeof _0xe5d7e0['dispose'] !== 'function') && (_0xe5d7e0 = new Disposable(() => {
                _0x45d46d['off']('title-changed', this['updateWindowTitle']);
            })));
        if (_0x45d46d != null && typeof _0x45d46d['onDidChangeModified'] === 'function')
            _0x2eac6e = _0x45d46d['onDidChangeModified'](this['updateDocumentEdited']);
        else
            _0x45d46d != null && typeof _0x45d46d['on'] === 'function' && (_0x2eac6e = _0x45d46d['on']('modified-status-changed', this['updateDocumentEdited']), (_0x2eac6e == null || typeof _0x2eac6e['dispose'] !== 'function') && (_0x2eac6e = new Disposable(() => {
                _0x45d46d['off']('modified-status-changed', this['updateDocumentEdited']);
            })));
        _0xe5d7e0 != null && this['activeItemSubscriptions']['add'](_0xe5d7e0), _0x2eac6e != null && this['activeItemSubscriptions']['add'](_0x2eac6e), this['cancelStoppedChangingActivePaneItemTimeout'](), this['stoppedChangingActivePaneItemTimeout'] = setTimeout(() => {
            this['stoppedChangingActivePaneItemTimeout'] = null, this['emitter']['emit']('did-stop-changing-active-pane-item', _0x45d46d);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    ['cancelStoppedChangingActivePaneItemTimeout']() {
        this['stoppedChangingActivePaneItemTimeout'] != null && clearTimeout(this['stoppedChangingActivePaneItemTimeout']);
    }
    ['setDraggingItem'](_0x13a5d1) {
        _['values'](this['paneContainers'])['forEach'](_0x4974ee => {
            _0x4974ee['setDraggingItem'](_0x13a5d1);
        });
    }
    ['subscribeToAddedItems']() {
        this['onDidAddPaneItem'](({
            item: _0x1ed0a0,
            pane: _0x22713d,
            index: _0x27cf51
        }) => {
            if (_0x1ed0a0 instanceof TextEditor) {
                const _0x311d8d = new CompositeDisposable(this['textEditorRegistry']['add'](_0x1ed0a0), this['textEditorRegistry']['maintainConfig'](_0x1ed0a0));
                !this['project']['findBufferForId'](_0x1ed0a0['buffer']['id']) && this['project']['addBuffer'](_0x1ed0a0['buffer']), _0x1ed0a0['onDidDestroy'](() => {
                    _0x311d8d['dispose']();
                }), this['emitter']['emit']('did-add-text-editor', {
                    'textEditor': _0x1ed0a0,
                    'pane': _0x22713d,
                    'index': _0x27cf51
                }), !_0x1ed0a0['isDestroyed']() && _0x311d8d['add'](_0x1ed0a0['observeGrammar'](this['handleGrammarUsed']['bind'](this)));
            }
        });
    }
    ['subscribeToDockToggling']() {
        const _0x2167ca = [
            this['getLeftDock'](),
            this['getRightDock'](),
            this['getBottomDock']()
        ];
        _0x2167ca['forEach'](_0x319bc6 => {
            _0x319bc6['onDidChangeVisible'](_0x205d73 => {
                if (_0x205d73)
                    return;
                const {activeElement: _0x40e653} = document, _0x26ed7f = _0x319bc6['getElement']();
                (_0x26ed7f === _0x40e653 || _0x26ed7f['contains'](_0x40e653)) && this['getCenter']()['activate']();
            });
        });
    }
    ['subscribeToMovedItems']() {
        for (const _0x3268bd of this['getPaneContainers']()) {
            _0x3268bd['observePanes'](_0x4cd12b => {
                _0x4cd12b['onDidAddItem'](({item: _0x31657b}) => {
                    if (typeof _0x31657b['getURI'] === 'function' && this['enablePersistence']) {
                        const _0x17a184 = _0x31657b['getURI']();
                        if (_0x17a184) {
                            const _0x31c71f = _0x3268bd['getLocation']();
                            let _0x2a3ce9;
                            typeof _0x31657b['getDefaultLocation'] === 'function' && (_0x2a3ce9 = _0x31657b['getDefaultLocation']()), _0x2a3ce9 = _0x2a3ce9 || 'center', _0x31c71f === _0x2a3ce9 ? this['itemLocationStore']['delete'](_0x31657b['getURI']()) : this['itemLocationStore']['save'](_0x31657b['getURI'](), _0x31c71f);
                        }
                    }
                });
            });
        }
    }
    ['updateWindowTitle']() {
        let _0x19af6f, _0xd3eb9c, _0x5e108c, _0x34866e;
        const _0x2cbad4 = atom['getAppName'](), _0x2ba9d0 = this['project']['getPaths'](), _0x5662f3 = _0x2ba9d0 != null ? _0x2ba9d0 : [], _0x5abc2d = this['getActivePaneItem']();
        if (_0x5abc2d) {
            _0x19af6f = typeof _0x5abc2d['getPath'] === 'function' ? _0x5abc2d['getPath']() : undefined;
            const _0x121c98 = typeof _0x5abc2d['getLongTitle'] === 'function' ? _0x5abc2d['getLongTitle']() : undefined;
            _0xd3eb9c = _0x121c98 == null ? typeof _0x5abc2d['getTitle'] === 'function' ? _0x5abc2d['getTitle']() : undefined : _0x121c98, _0x5e108c = _['find'](_0x5662f3, _0x258947 => _0x19af6f === _0x258947 || (_0x19af6f != null ? _0x19af6f['startsWith'](_0x258947 + path['sep']) : undefined));
        }
        _0xd3eb9c == null && (_0xd3eb9c = 'untitled');
        _0x5e108c == null && (_0x5e108c = _0x19af6f ? path['dirname'](_0x19af6f) : _0x5662f3[-0x62a + 0x724 * 0x1 + -0x19 * 0xa]);
        _0x5e108c != null && (_0x5e108c = fs['tildify'](_0x5e108c));
        const _0x4347d5 = [];
        if (_0x5abc2d != null && _0x5e108c != null)
            _0x4347d5['push'](_0xd3eb9c, _0x5e108c), _0x34866e = _0x19af6f != null ? _0x19af6f : _0x5e108c;
        else
            _0x5e108c != null ? (_0x4347d5['push'](_0x5e108c), _0x34866e = _0x5e108c) : (_0x4347d5['push'](_0xd3eb9c), _0x34866e = '');
        process['platform'] !== 'darwin' && _0x4347d5['push'](_0x2cbad4), document['title'] = _0x4347d5['join']('\x20—\x20'), this['applicationDelegate']['setRepresentedFilename'](_0x34866e), this['emitter']['emit']('did-change-window-title');
    }
    ['updateDocumentEdited']() {
        const _0x10c40e = this['getActivePaneItem'](), _0x1a9aa0 = _0x10c40e != null && typeof _0x10c40e['isModified'] === 'function' ? _0x10c40e['isModified']() || ![] : ![];
        this['applicationDelegate']['setWindowDocumentEdited'](_0x1a9aa0);
    }
    ['onDidChangeActivePaneContainer'](_0xb87f49) {
        return this['emitter']['on']('did-change-active-pane-container', _0xb87f49);
    }
    ['observeTextEditors'](_0x518263) {
        for (let _0x346e2a of this['getTextEditors']()) {
            _0x518263(_0x346e2a);
        }
        return this['onDidAddTextEditor'](({textEditor: _0x848312}) => _0x518263(_0x848312));
    }
    ['observePaneItems'](_0x4894e0) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x420697 => _0x420697['observePaneItems'](_0x4894e0)));
    }
    ['onDidChangeActivePaneItem'](_0x67c212) {
        return this['emitter']['on']('did-change-active-pane-item', _0x67c212);
    }
    ['onDidStopChangingActivePaneItem'](_0xa90730) {
        return this['emitter']['on']('did-stop-changing-active-pane-item', _0xa90730);
    }
    ['onDidChangeActiveTextEditor'](_0x5b6010) {
        return this['emitter']['on']('did-change-active-text-editor', _0x5b6010);
    }
    ['observeActivePaneItem'](_0x97196c) {
        return _0x97196c(this['getActivePaneItem']()), this['onDidChangeActivePaneItem'](_0x97196c);
    }
    ['observeActiveTextEditor'](_0xe3ce7d) {
        return _0xe3ce7d(this['getActiveTextEditor']()), this['onDidChangeActiveTextEditor'](_0xe3ce7d);
    }
    ['onDidOpen'](_0x3500ba) {
        return this['emitter']['on']('did-open', _0x3500ba);
    }
    ['onDidAddPane'](_0x4d2d5f) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x3f8624 => _0x3f8624['onDidAddPane'](_0x4d2d5f)));
    }
    ['onWillDestroyPane'](_0x175885) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x3a5379 => _0x3a5379['onWillDestroyPane'](_0x175885)));
    }
    ['onDidDestroyPane'](_0x2d480e) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x320248 => _0x320248['onDidDestroyPane'](_0x2d480e)));
    }
    ['observePanes'](_0x4655c0) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x1764bc => _0x1764bc['observePanes'](_0x4655c0)));
    }
    ['onDidChangeActivePane'](_0x43971f) {
        return this['emitter']['on']('did-change-active-pane', _0x43971f);
    }
    ['observeActivePane'](_0x22c347) {
        return _0x22c347(this['getActivePane']()), this['onDidChangeActivePane'](_0x22c347);
    }
    ['onDidAddPaneItem'](_0x3679ef) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x11487e => _0x11487e['onDidAddPaneItem'](_0x3679ef)));
    }
    ['onWillDestroyPaneItem'](_0x26ec93) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x55c9a1 => _0x55c9a1['onWillDestroyPaneItem'](_0x26ec93)));
    }
    ['onDidDestroyPaneItem'](_0x30918e) {
        return new CompositeDisposable(...this['getPaneContainers']()['map'](_0x5a0b9a => _0x5a0b9a['onDidDestroyPaneItem'](_0x30918e)));
    }
    ['onDidAddTextEditor'](_0x18b51b) {
        return this['emitter']['on']('did-add-text-editor', _0x18b51b);
    }
    ['onDidChangeWindowTitle'](_0x31e1b9) {
        return this['emitter']['on']('did-change-window-title', _0x31e1b9);
    }
    async ['open'](_0x24b602, _0x322dc7 = {}) {
        let _0x423332, _0x58f38f;
        if (typeof _0x24b602 === 'string')
            _0x423332 = this['project']['resolvePath'](_0x24b602);
        else {
            if (_0x24b602) {
                _0x58f38f = _0x24b602;
                if (typeof _0x58f38f['getURI'] === 'function')
                    _0x423332 = _0x58f38f['getURI']();
            }
        }
        let _0x490c1d = () => {
        };
        if (_0x423332) {
            const _0x413545 = this['incoming']['get'](_0x423332);
            !_0x413545 ? this['incoming']['set'](_0x423332, new Promise(_0x3be732 => {
                _0x490c1d = _0x3be732;
            })) : await _0x413545;
        }
        try {
            !atom['config']['get']('core.allowPendingPaneItems') && (_0x322dc7['pending'] = ![]);
            _0x423332 && (!url['parse'](_0x423332)['protocol'] || process['platform'] === 'win32') && this['applicationDelegate']['addRecentDocument'](_0x423332);
            let _0x16bb03, _0x119708;
            if (_0x58f38f || _0x423332) {
                if (_0x322dc7['pane'])
                    _0x16bb03 = _0x322dc7['pane'];
                else {
                    if (_0x322dc7['searchAllPanes'])
                        _0x16bb03 = _0x58f38f ? this['paneForItem'](_0x58f38f) : this['paneForURI'](_0x423332);
                    else {
                        let _0x19ea64;
                        if (_0x423332)
                            _0x19ea64 = this['paneContainerForURI'](_0x423332);
                        if (!_0x19ea64)
                            _0x19ea64 = this['getActivePaneContainer']();
                        _0x16bb03 = _0x19ea64['getActivePane']();
                        switch (_0x322dc7['split']) {
                        case 'left':
                            _0x16bb03 = _0x16bb03['findLeftmostSibling']();
                            break;
                        case 'right':
                            _0x16bb03 = _0x16bb03['findRightmostSibling']();
                            break;
                        case 'up':
                            _0x16bb03 = _0x16bb03['findTopmostSibling']();
                            break;
                        case 'down':
                            _0x16bb03 = _0x16bb03['findBottommostSibling']();
                            break;
                        }
                    }
                }
                _0x16bb03 && (_0x58f38f ? _0x119708 = _0x16bb03['getItems']()['includes'](_0x58f38f) : (_0x58f38f = _0x16bb03['itemForURI'](_0x423332), _0x119708 = _0x58f38f != null));
            }
            if (_0x58f38f)
                await Promise['resolve']();
            if (!_0x119708) {
                _0x58f38f = _0x58f38f || await this['createItemForURI'](_0x423332, _0x322dc7);
                if (!_0x58f38f)
                    return;
                if (_0x322dc7['pane'])
                    _0x16bb03 = _0x322dc7['pane'];
                else {
                    let _0x55dc8c = _0x322dc7['location'];
                    !_0x55dc8c && !_0x322dc7['split'] && _0x423332 && this['enablePersistence'] && (_0x55dc8c = await this['itemLocationStore']['load'](_0x423332));
                    !_0x55dc8c && typeof _0x58f38f['getDefaultLocation'] === 'function' && (_0x55dc8c = _0x58f38f['getDefaultLocation']());
                    const _0x10ffa3 = typeof _0x58f38f['getAllowedLocations'] === 'function' ? _0x58f38f['getAllowedLocations']() : ALL_LOCATIONS;
                    _0x55dc8c = _0x10ffa3['includes'](_0x55dc8c) ? _0x55dc8c : _0x10ffa3[-0x13bd * -0x1 + -0xa * -0x41 + -0x1647];
                    const _0x30f9ce = this['paneContainers'][_0x55dc8c] || this['getCenter']();
                    _0x16bb03 = _0x30f9ce['getActivePane']();
                    switch (_0x322dc7['split']) {
                    case 'left':
                        _0x16bb03 = _0x16bb03['findLeftmostSibling']();
                        break;
                    case 'right':
                        _0x16bb03 = _0x16bb03['findOrCreateRightmostSibling']();
                        break;
                    case 'up':
                        _0x16bb03 = _0x16bb03['findTopmostSibling']();
                        break;
                    case 'down':
                        _0x16bb03 = _0x16bb03['findOrCreateBottommostSibling']();
                        break;
                    }
                }
            }
            !_0x322dc7['pending'] && _0x16bb03['getPendingItem']() === _0x58f38f && _0x16bb03['clearPendingItem']();
            this['itemOpened'](_0x58f38f);
            _0x322dc7['activateItem'] === ![] ? _0x16bb03['addItem'](_0x58f38f, { 'pending': _0x322dc7['pending'] }) : _0x16bb03['activateItem'](_0x58f38f, { 'pending': _0x322dc7['pending'] });
            _0x322dc7['activatePane'] !== ![] && _0x16bb03['activate']();
            let _0x4d423e = -0x17f8 + -0x1043 * -0x1 + -0x7b5 * -0x1, _0x3fccbd = -0x2f * 0x6f + -0x631 + 0x1a92;
            !Number['isNaN'](_0x322dc7['initialLine']) && (_0x3fccbd = _0x322dc7['initialLine']);
            !Number['isNaN'](_0x322dc7['initialColumn']) && (_0x4d423e = _0x322dc7['initialColumn']);
            (_0x3fccbd >= -0x1 * -0x1169 + -0x408 * 0x8 + 0xed7 || _0x4d423e >= 0x571 * -0x2 + -0x917 * 0x3 + 0x2627) && (typeof _0x58f38f['setCursorBufferPosition'] === 'function' && _0x58f38f['setCursorBufferPosition']([
                _0x3fccbd,
                _0x4d423e
            ]), typeof _0x58f38f['unfoldBufferRow'] === 'function' && _0x58f38f['unfoldBufferRow'](_0x3fccbd), typeof _0x58f38f['scrollToBufferPosition'] === 'function' && _0x58f38f['scrollToBufferPosition']([
                _0x3fccbd,
                _0x4d423e
            ], { 'center': !![] }));
            const _0x2ec069 = _0x16bb03['getActiveItemIndex']();
            this['emitter']['emit']('did-open', {
                'uri': _0x423332,
                'pane': _0x16bb03,
                'item': _0x58f38f,
                'index': _0x2ec069
            }), _0x423332 && this['incoming']['delete'](_0x423332);
        } finally {
            _0x490c1d();
        }
        return _0x58f38f;
    }
    ['hide'](_0xd5e6b9) {
        let _0x16e39d = ![];
        for (const _0x6e838b of this['getPaneContainers']()) {
            const _0x1046b9 = _0x6e838b === this['getCenter']();
            if (_0x1046b9 || _0x6e838b['isVisible']())
                for (const _0x5bb532 of _0x6e838b['getPanes']()) {
                    const _0x4b11d3 = _0x5bb532['getActiveItem'](), _0x474db8 = _0x4b11d3 != null && (_0x4b11d3 === _0xd5e6b9 || typeof _0x4b11d3['getURI'] === 'function' && _0x4b11d3['getURI']() === _0xd5e6b9);
                    _0x474db8 && (_0x16e39d = !![], _0x1046b9 ? _0x5bb532['destroyItem'](_0x4b11d3) : _0x6e838b['hide']());
                }
        }
        return _0x16e39d;
    }
    ['toggle'](_0x40eeda) {
        return this['hide'](_0x40eeda) ? Promise['resolve']() : this['open'](_0x40eeda, { 'searchAllPanes': !![] });
    }
    ['openLicense']() {
        return this['open'](path['join'](process['resourcesPath'], 'LICENSE.md'));
    }
    ['openSync'](_0x40a68e = '', _0x501005 = {}) {
        const {
                initialLine: _0x4b7464,
                initialColumn: _0x31b5bf
            } = _0x501005, _0xaeda3e = _0x501005['activatePane'] != null ? _0x501005['activatePane'] : !![], _0x54453d = _0x501005['activateItem'] != null ? _0x501005['activateItem'] : !![], _0x4bd96b = this['project']['resolvePath'](_0x40a68e);
        let _0x21c494 = this['getActivePane']()['itemForURI'](_0x4bd96b);
        if (_0x4bd96b && _0x21c494 == null)
            for (const _0x311900 of this['getOpeners']()) {
                _0x21c494 = _0x311900(_0x4bd96b, _0x501005);
                if (_0x21c494)
                    break;
            }
        return _0x21c494 == null && (_0x21c494 = this['project']['openSync'](_0x4bd96b, {
            'initialLine': _0x4b7464,
            'initialColumn': _0x31b5bf
        })), _0x54453d && this['getActivePane']()['activateItem'](_0x21c494), this['itemOpened'](_0x21c494), _0xaeda3e && this['getActivePane']()['activate'](), _0x21c494;
    }
    ['openURIInPane'](_0x61d26d, _0x3bcfae) {
        return this['open'](_0x61d26d, { 'pane': _0x3bcfae });
    }
    async ['createItemForURI'](_0x1d7844, _0x4b1d9d) {
        if (_0x1d7844 != null)
            for (const _0x24e45b of this['getOpeners']()) {
                const _0x3ec7a6 = _0x24e45b(_0x1d7844, _0x4b1d9d);
                if (_0x3ec7a6 != null)
                    return _0x3ec7a6;
            }
        try {
            const _0x32ea00 = await this['openTextFile'](_0x1d7844, _0x4b1d9d);
            return _0x32ea00;
        } catch (_0x19754e) {
            switch (_0x19754e['code']) {
            case 'CANCELLED':
                return Promise['resolve']();
            case 'EACCES':
                this['notificationManager']['addWarning']('Permission\x20denied\x20\x27' + _0x19754e['path'] + '\x27');
                return Promise['resolve']();
            case 'EPERM':
            case 'EBUSY':
            case 'ENXIO':
            case 'EIO':
            case 'ENOTCONN':
            case 'UNKNOWN':
            case 'ECONNRESET':
            case 'EINVAL':
            case 'EMFILE':
            case 'ENOTDIR':
            case 'EAGAIN':
                this['notificationManager']['addWarning']('Unable\x20to\x20open\x20\x27' + (_0x19754e['path'] != null ? _0x19754e['path'] : _0x1d7844) + '\x27', { 'detail': _0x19754e['message'] });
                return Promise['resolve']();
            default:
                throw _0x19754e;
            }
        }
    }
    async ['openTextFile'](_0x252c26, _0x59d6a2) {
        const _0x192519 = this['project']['resolvePath'](_0x252c26);
        if (_0x192519 != null)
            try {
                fs['closeSync'](fs['openSync'](_0x192519, 'r'));
            } catch (_0x14b9a8) {
                if (_0x14b9a8['code'] !== 'ENOENT')
                    throw _0x14b9a8;
            }
        const _0x500f29 = fs['getSizeSync'](_0x192519);
        _0x500f29 >= this['config']['get']('core.warnOnLargeFileLimit') * (0xf991c + 0x7bea8 + -0x757c4) && await new Promise((_0x100060, _0x5f43d3) => {
            this['applicationDelegate']['confirm']({
                'message': 'Atom\x20will\x20be\x20unresponsive\x20during\x20the\x20loading\x20of\x20very\x20large\x20files.',
                'detail': 'Do\x20you\x20still\x20want\x20to\x20load\x20this\x20file?',
                'buttons': [
                    'Proceed',
                    'Cancel'
                ]
            }, _0x3b84fb => {
                if (_0x3b84fb === 0xec9 + -0x1ed1 + 0x1009) {
                    const _0x167f30 = new Error();
                    _0x167f30['code'] = 'CANCELLED', _0x5f43d3(_0x167f30);
                } else
                    _0x100060();
            });
        });
        const _0xa90194 = await this['project']['bufferForPath'](_0x192519, _0x59d6a2);
        return this['textEditorRegistry']['build'](Object['assign']({
            'buffer': _0xa90194,
            'autoHeight': ![]
        }, _0x59d6a2));
    }
    ['handleGrammarUsed'](_0x5e6c2b) {
        if (_0x5e6c2b == null)
            return;
        this['packageManager']['triggerActivationHook'](_0x5e6c2b['scopeName'] + ':root-scope-used'), this['packageManager']['triggerActivationHook'](_0x5e6c2b['packageName'] + ':grammar-used');
    }
    ['isTextEditor'](_0x228ca1) {
        return _0x228ca1 instanceof TextEditor;
    }
    ['buildTextEditor'](_0x5c3162) {
        const _0xfd49bc = this['textEditorRegistry']['build'](_0x5c3162), _0x93c07f = this['textEditorRegistry']['maintainConfig'](_0xfd49bc);
        return _0xfd49bc['onDidDestroy'](() => _0x93c07f['dispose']()), _0xfd49bc;
    }
    ['reopenItem']() {
        const _0x37b850 = this['destroyedItemURIs']['pop']();
        return _0x37b850 ? this['open'](_0x37b850) : Promise['resolve']();
    }
    ['addOpener'](_0x30cc34) {
        return this['openers']['push'](_0x30cc34), new Disposable(() => {
            _['remove'](this['openers'], _0x30cc34);
        });
    }
    ['getOpeners']() {
        return this['openers'];
    }
    ['getPaneItems']() {
        return _['flatten'](this['getPaneContainers']()['map'](_0x439dfb => _0x439dfb['getPaneItems']()));
    }
    ['getActivePaneItem']() {
        return this['getActivePaneContainer']()['getActivePaneItem']();
    }
    ['getTextEditors']() {
        return this['getPaneItems']()['filter'](_0x4befd9 => _0x4befd9 instanceof TextEditor);
    }
    ['getActiveTextEditor']() {
        const _0x583867 = this['getCenter']()['getActivePaneItem']();
        if (_0x583867 instanceof TextEditor)
            return _0x583867;
    }
    ['saveAll']() {
        this['getPaneContainers']()['forEach'](_0x5c3029 => {
            _0x5c3029['saveAll']();
        });
    }
    ['confirmClose'](_0x341219) {
        return Promise['all'](this['getPaneContainers']()['map'](_0x51918b => _0x51918b['confirmClose'](_0x341219)))['then'](_0x15845a => !_0x15845a['includes'](![]));
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
        return _['flatten'](this['getPaneContainers']()['map'](_0x15f7fe => _0x15f7fe['getPanes']()));
    }
    ['getVisiblePanes']() {
        return _['flatten'](this['getVisiblePaneContainers']()['map'](_0x3e2e05 => _0x3e2e05['getPanes']()));
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
    ['paneContainerForURI'](_0x3be44b) {
        return this['getPaneContainers']()['find'](_0xee2f3c => _0xee2f3c['paneForURI'](_0x3be44b));
    }
    ['paneContainerForItem'](_0xa28038) {
        return this['getPaneContainers']()['find'](_0x34daad => _0x34daad['paneForItem'](_0xa28038));
    }
    ['paneForURI'](_0x1e91bf) {
        for (let _0x492834 of this['getPaneContainers']()) {
            const _0x2a1a77 = _0x492834['paneForURI'](_0x1e91bf);
            if (_0x2a1a77 != null)
                return _0x2a1a77;
        }
    }
    ['paneForItem'](_0x33aff9) {
        for (let _0x1e092e of this['getPaneContainers']()) {
            const _0x20abc3 = _0x1e092e['paneForItem'](_0x33aff9);
            if (_0x20abc3 != null)
                return _0x20abc3;
        }
    }
    ['destroyActivePane']() {
        const _0x559ba2 = this['getActivePane']();
        _0x559ba2 != null && _0x559ba2['destroy']();
    }
    ['closeActivePaneItemOrEmptyPaneOrWindow']() {
        if (this['getCenter']()['getActivePaneItem']() != null)
            this['getCenter']()['getActivePane']()['destroyActiveItem']();
        else {
            if (this['getCenter']()['getPanes']()['length'] > -0xa41 + -0x57e * -0x1 + 0x14 * 0x3d)
                this['getCenter']()['destroyActivePane']();
            else
                this['config']['get']('core.closeEmptyWindows') && atom['close']();
        }
    }
    ['increaseFontSize']() {
        this['config']['set']('editor.fontSize', this['config']['get']('editor.fontSize') + (-0x18db + 0x2660 + -0x361 * 0x4));
    }
    ['decreaseFontSize']() {
        const _0x368388 = this['config']['get']('editor.fontSize');
        _0x368388 > -0x1b4d + 0x13ad + 0x9 * 0xd9 && this['config']['set']('editor.fontSize', _0x368388 - (-0x88d * 0x3 + -0x1390 + 0x2d38));
    }
    ['resetFontSize']() {
        this['config']['set']('editor.fontSize', this['config']['get']('editor.defaultFontSize'));
    }
    ['itemOpened'](_0x332425) {
        let _0x3215d;
        if (typeof _0x332425['getURI'] === 'function')
            _0x3215d = _0x332425['getURI']();
        else
            typeof _0x332425['getUri'] === 'function' && (_0x3215d = _0x332425['getUri']());
        _0x3215d != null && _['remove'](this['destroyedItemURIs'], _0x3215d);
    }
    ['didDestroyPaneItem']({item: _0x4eda35}) {
        let _0x17ac9b;
        if (typeof _0x4eda35['getURI'] === 'function')
            _0x17ac9b = _0x4eda35['getURI']();
        else
            typeof _0x4eda35['getUri'] === 'function' && (_0x17ac9b = _0x4eda35['getUri']());
        _0x17ac9b != null && this['destroyedItemURIs']['push'](_0x17ac9b);
    }
    ['destroyed']() {
        this['paneContainers']['center']['destroy'](), this['paneContainers']['left']['destroy'](), this['paneContainers']['right']['destroy'](), this['paneContainers']['bottom']['destroy'](), this['cancelStoppedChangingActivePaneItemTimeout']();
        this['activeItemSubscriptions'] != null && this['activeItemSubscriptions']['dispose']();
        if (this['element'])
            this['element']['destroy']();
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
        const _0x3479b8 = this['getCenter']();
        return atom['workspace']['getPaneContainers']()['filter'](_0x1627ab => _0x1627ab === _0x3479b8 || _0x1627ab['isVisible']());
    }
    ['getBottomPanels']() {
        return this['getPanels']('bottom');
    }
    ['addBottomPanel'](_0xff3313) {
        return this['addPanel']('bottom', _0xff3313);
    }
    ['getLeftPanels']() {
        return this['getPanels']('left');
    }
    ['addLeftPanel'](_0x41e250) {
        return this['addPanel']('left', _0x41e250);
    }
    ['getRightPanels']() {
        return this['getPanels']('right');
    }
    ['addRightPanel'](_0x1a88cf) {
        return this['addPanel']('right', _0x1a88cf);
    }
    ['getTopPanels']() {
        return this['getPanels']('top');
    }
    ['addTopPanel'](_0xed71fb) {
        return this['addPanel']('top', _0xed71fb);
    }
    ['getHeaderPanels']() {
        return this['getPanels']('header');
    }
    ['addHeaderPanel'](_0x51978b) {
        return this['addPanel']('header', _0x51978b);
    }
    ['getFooterPanels']() {
        return this['getPanels']('footer');
    }
    ['addFooterPanel'](_0x3a94e9) {
        return this['addPanel']('footer', _0x3a94e9);
    }
    ['getModalPanels']() {
        return this['getPanels']('modal');
    }
    ['addModalPanel'](_0x40617d = {}) {
        return this['addPanel']('modal', _0x40617d);
    }
    ['panelForItem'](_0x17d1ec) {
        for (let _0x1e2e0e in this['panelContainers']) {
            const _0x4810ae = this['panelContainers'][_0x1e2e0e], _0x5d0222 = _0x4810ae['panelForItem'](_0x17d1ec);
            if (_0x5d0222 != null)
                return _0x5d0222;
        }
        return null;
    }
    ['getPanels'](_0x37f14f) {
        return this['panelContainers'][_0x37f14f]['getPanels']();
    }
    ['addPanel'](_0x5e5923, _0x511090) {
        return _0x511090 == null && (_0x511090 = {}), this['panelContainers'][_0x5e5923]['addPanel'](new Panel(_0x511090, this['viewRegistry']));
    }
    ['scan'](_0x5d4b03, _0x5dee29 = {}, _0x2bc029) {
        _['isFunction'](_0x5dee29) && (_0x2bc029 = _0x5dee29, _0x5dee29 = {});
        const _0x144e38 = new Map();
        for (const _0x4a981a of this['project']['getDirectories']()) {
            let _0x4b55c3 = _0x5dee29['ripgrep'] ? this['ripgrepDirectorySearcher'] : this['scandalDirectorySearcher'];
            for (const _0x46c1ba of this['directorySearchers']) {
                if (_0x46c1ba['canSearchDirectory'](_0x4a981a)) {
                    _0x4b55c3 = _0x46c1ba;
                    break;
                }
            }
            let _0x5f1d39 = _0x144e38['get'](_0x4b55c3);
            !_0x5f1d39 && (_0x5f1d39 = [], _0x144e38['set'](_0x4b55c3, _0x5f1d39)), _0x5f1d39['push'](_0x4a981a);
        }
        let _0x9b1781;
        if (_['isFunction'](_0x5dee29['onPathsSearched'])) {
            const _0x55a2d3 = _0x5dee29['onPathsSearched'];
            let _0x2968db = 0x393 + 0x88f + -0xc22;
            const _0x8f98a2 = new Map();
            _0x9b1781 = function (_0x165501, _0x1d7a54) {
                const _0x56fb92 = _0x8f98a2['get'](_0x165501);
                return _0x56fb92 && (_0x2968db -= _0x56fb92), _0x8f98a2['set'](_0x165501, _0x1d7a54), _0x2968db += _0x1d7a54, _0x55a2d3(_0x2968db);
            };
        } else
            _0x9b1781 = function () {
            };
        const _0x412f90 = [];
        _0x144e38['forEach']((_0x4fe07d, _0x1ca697) => {
            const _0x36efd2 = {
                    'inclusions': _0x5dee29['paths'] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this['config']['get']('core.excludeVcsIgnoredPaths'),
                    'exclusions': this['config']['get']('core.ignoredNames'),
                    'follow': this['config']['get']('core.followSymlinks'),
                    'leadingContextLineCount': _0x5dee29['leadingContextLineCount'] || 0x22dd + 0x6 * -0x2d2 + -0x11f1,
                    'trailingContextLineCount': _0x5dee29['trailingContextLineCount'] || 0x2039 + -0x1b97 + 0x2 * -0x251,
                    'PCRE2': _0x5dee29['PCRE2'],
                    'didMatch': _0x19d927 => {
                        if (!this['project']['isPathModified'](_0x19d927['filePath']))
                            return _0x2bc029(_0x19d927);
                    },
                    'didError'(_0x53ec30) {
                        return _0x2bc029(null, _0x53ec30);
                    },
                    'didSearchPaths'(_0x58017b) {
                        return _0x9b1781(_0x1ca697, _0x58017b);
                    }
                }, _0x55042c = _0x1ca697['search'](_0x4fe07d, _0x5d4b03, _0x36efd2);
            _0x412f90['push'](_0x55042c);
        });
        const _0x135df0 = Promise['all'](_0x412f90);
        for (let _0x436308 of this['project']['getBuffers']()) {
            if (_0x436308['isModified']()) {
                const _0x10ad2c = _0x436308['getPath']();
                if (!this['project']['contains'](_0x10ad2c))
                    continue;
                var _0x59c392 = [];
                _0x436308['scan'](_0x5d4b03, _0x421538 => _0x59c392['push'](_0x421538)), _0x59c392['length'] > -0xa2 * 0x9 + -0x136 + 0x6e8 * 0x1 && _0x2bc029({
                    'filePath': _0x10ad2c,
                    'matches': _0x59c392
                });
            }
        }
        let _0x1d7c60 = ![];
        const _0x4eec3c = new Promise((_0x4b42a4, _0x3c70ce) => {
            const _0x3abcbb = function () {
                    _0x1d7c60 ? _0x4b42a4('cancelled') : _0x4b42a4(null);
                }, _0x9e6ead = function (_0x137402) {
                    for (let _0xf21f5 of _0x412f90) {
                        _0xf21f5['cancel']();
                    }
                    _0x3c70ce(_0x137402);
                };
            _0x135df0['then'](_0x3abcbb, _0x9e6ead);
        });
        return _0x4eec3c['cancel'] = () => {
            _0x1d7c60 = !![], _0x412f90['map'](_0x14cd34 => _0x14cd34['cancel']());
        }, _0x4eec3c;
    }
    ['replace'](_0x59eb9e, _0x1b9ccc, _0x1d646d, _0x426fef) {
        return new Promise((_0x4cfecc, _0x428f3b) => {
            let _0x18a2c3;
            const _0x4ac808 = this['project']['getBuffers']()['map'](_0x4c0f51 => _0x4c0f51['getPath']()), _0x2b7cae = _['difference'](_0x1d646d, _0x4ac808);
            let _0x2b2c47 = !_0x4ac808['length'], _0x221103 = !_0x2b7cae['length'];
            const _0x4f4bba = () => {
                _0x221103 && _0x2b2c47 && _0x4cfecc();
            };
            if (!_0x221103['length']) {
                let _0x5f1c76 = 'g';
                _0x59eb9e['multiline'] && (_0x5f1c76 += 'm');
                _0x59eb9e['ignoreCase'] && (_0x5f1c76 += 'i');
                const _0x589a9e = Task['once'](require['resolve']('./replace-handler'), _0x2b7cae, _0x59eb9e['source'], _0x5f1c76, _0x1b9ccc, () => {
                    _0x221103 = !![], _0x4f4bba();
                });
                _0x589a9e['on']('replace:path-replaced', _0x426fef), _0x589a9e['on']('replace:file-error', _0xe4f68c => {
                    _0x426fef(null, _0xe4f68c);
                });
            }
            for (_0x18a2c3 of this['project']['getBuffers']()) {
                if (!_0x1d646d['includes'](_0x18a2c3['getPath']()))
                    continue;
                const _0x4f3a8f = _0x18a2c3['replace'](_0x59eb9e, _0x1b9ccc, _0x426fef);
                _0x4f3a8f && _0x426fef({
                    'filePath': _0x18a2c3['getPath'](),
                    'replacements': _0x4f3a8f
                });
            }
            _0x2b2c47 = !![], _0x4f4bba();
        });
    }
    ['checkoutHeadRevision'](_0x480748) {
        if (_0x480748['getPath']()) {
            const _0x273c3d = async () => {
                const _0x547790 = await this['project']['repositoryForDirectory'](new Directory(_0x480748['getDirectoryPath']()));
                if (_0x547790)
                    _0x547790['checkoutHeadForEditor'](_0x480748);
            };
            this['config']['get']('editor.confirmCheckoutHeadRevision') ? this['applicationDelegate']['confirm']({
                'message': 'Confirm\x20Checkout\x20HEAD\x20Revision',
                'detail': 'Are\x20you\x20sure\x20you\x20want\x20to\x20discard\x20all\x20changes\x20to\x20\x22' + _0x480748['getFileName']() + '\x22\x20since\x20the\x20last\x20Git\x20commit?',
                'buttons': [
                    'OK',
                    'Cancel'
                ]
            }, _0x3a5781 => {
                if (_0x3a5781 === 0xf76 + 0x1875 + -0x3a1 * 0xb)
                    _0x273c3d();
            }) : _0x273c3d();
        }
    }
};
