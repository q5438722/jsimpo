const _ = require(_0x43015e(122)), url = require(_0x43015e(123)), path = require('path'), {Emitter, Disposable, CompositeDisposable} = require(_0x43015e(124)), fs = require(_0x43015e(125)), {Directory} = require('pathwatcher'), Grim = require(_0x43015e(126)), DefaultDirectorySearcher = require(_0x43015e(127)), RipgrepDirectorySearcher = require(_0x43015e(128)), Dock = require('./dock'), Model = require(_0x43015e(129)), StateStore = require(_0x43015e(130)), TextEditor = require(_0x43015e(131)), Panel = require(_0x43015e(132)), PanelContainer = require(_0x43015e(133)), Task = require(_0x43015e(134)), WorkspaceCenter = require(_0x43015e(135)), {createWorkspaceElement} = require('./workspace-element'), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = 100, ALL_LOCATIONS = [
        'center',
        _0x43015e(136),
        _0x43015e(137),
        'bottom'
    ];
module[_0x43015e(138)] = class Workspace extends Model {
    constructor(_0x51bc76) {
        const _0x401b70 = _0x43015e;
        super(...arguments), this[_0x401b70(139)] = this[_0x401b70(139)][_0x401b70(140)](this), this[_0x401b70(141)] = this[_0x401b70(141)][_0x401b70(140)](this), this[_0x401b70(142)] = this[_0x401b70(142)]['bind'](this), this[_0x401b70(143)] = this['didChangeActivePaneOnPaneContainer'][_0x401b70(140)](this), this[_0x401b70(144)] = this[_0x401b70(144)][_0x401b70(140)](this), this[_0x401b70(145)] = this[_0x401b70(145)][_0x401b70(140)](this), this[_0x401b70(146)] = _0x51bc76[_0x401b70(146)], this[_0x401b70(147)] = _0x51bc76[_0x401b70(147)], this[_0x401b70(148)] = _0x51bc76[_0x401b70(148)], this[_0x401b70(149)] = _0x51bc76[_0x401b70(149)], this['notificationManager'] = _0x51bc76[_0x401b70(150)], this[_0x401b70(151)] = _0x51bc76[_0x401b70(151)], this['grammarRegistry'] = _0x51bc76['grammarRegistry'], this[_0x401b70(152)] = _0x51bc76['applicationDelegate'], this[_0x401b70(153)] = _0x51bc76[_0x401b70(153)], this[_0x401b70(154)] = _0x51bc76[_0x401b70(154)], this[_0x401b70(155)] = _0x51bc76[_0x401b70(155)], this['styleManager'] = _0x51bc76[_0x401b70(156)], this[_0x401b70(157)] = ![], this[_0x401b70(158)] = new StateStore(_0x401b70(159), 1), this[_0x401b70(160)] = new Emitter(), this[_0x401b70(161)] = [], this[_0x401b70(162)] = [], this['stoppedChangingActivePaneItemTimeout'] = null, this[_0x401b70(163)] = new DefaultDirectorySearcher(), this[_0x401b70(164)] = new RipgrepDirectorySearcher(), this[_0x401b70(165)](this['packageManager']), this[_0x401b70(166)] = {
            'center': this[_0x401b70(167)](),
            'left': this[_0x401b70(168)]('left'),
            'right': this[_0x401b70(168)](_0x401b70(137)),
            'bottom': this[_0x401b70(168)](_0x401b70(169))
        }, this[_0x401b70(170)] = this['paneContainers'][_0x401b70(171)], this['hasActiveTextEditor'] = ![], this['panelContainers'] = {
            'top': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': 'top'
            }),
            'left': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': 'left',
                'dock': this[_0x401b70(166)][_0x401b70(136)]
            }),
            'right': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': 'right',
                'dock': this[_0x401b70(166)][_0x401b70(137)]
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': _0x401b70(169),
                'dock': this[_0x401b70(166)][_0x401b70(169)]
            }),
            'header': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': 'header'
            }),
            'footer': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': _0x401b70(172)
            }),
            'modal': new PanelContainer({
                'viewRegistry': this[_0x401b70(151)],
                'location': 'modal'
            })
        }, this[_0x401b70(173)] = new Map();
    }
    get ['paneContainer']() {
        const _0x2984c7 = _0x43015e;
        return Grim['deprecate']('`atom.workspace.paneContainer` has always been private, but it is now gone. Please use `atom.workspace.getCenter()` instead and consult the workspace API docs for public methods.'), this['paneContainers'][_0x2984c7(171)][_0x2984c7(174)];
    }
    [_0x43015e(175)]() {
        const _0x5eb845 = _0x43015e;
        return !this[_0x5eb845(176)] && (this[_0x5eb845(176)] = createWorkspaceElement()['initialize'](this, {
            'config': this[_0x5eb845(148)],
            'project': this['project'],
            'viewRegistry': this[_0x5eb845(151)],
            'styleManager': this[_0x5eb845(156)]
        })), this[_0x5eb845(176)];
    }
    [_0x43015e(167)]() {
        const _0x19c934 = _0x43015e;
        return new WorkspaceCenter({
            'config': this[_0x19c934(148)],
            'applicationDelegate': this['applicationDelegate'],
            'notificationManager': this['notificationManager'],
            'deserializerManager': this[_0x19c934(154)],
            'viewRegistry': this[_0x19c934(151)],
            'didActivate': this[_0x19c934(145)],
            'didChangeActivePane': this[_0x19c934(143)],
            'didChangeActivePaneItem': this[_0x19c934(144)],
            'didDestroyPaneItem': this[_0x19c934(142)]
        });
    }
    [_0x43015e(168)](_0x59904a) {
        const _0x4a9582 = _0x43015e;
        return new Dock({
            'location': _0x59904a,
            'config': this[_0x4a9582(148)],
            'applicationDelegate': this['applicationDelegate'],
            'deserializerManager': this[_0x4a9582(154)],
            'notificationManager': this[_0x4a9582(150)],
            'viewRegistry': this[_0x4a9582(151)],
            'didActivate': this[_0x4a9582(145)],
            'didChangeActivePane': this[_0x4a9582(143)],
            'didChangeActivePaneItem': this[_0x4a9582(144)],
            'didDestroyPaneItem': this[_0x4a9582(142)]
        });
    }
    ['reset'](_0x4e0c8e) {
        const _0x8f335c = _0x43015e;
        this['packageManager'] = _0x4e0c8e, this['emitter'][_0x8f335c(177)](), this[_0x8f335c(160)] = new Emitter(), this[_0x8f335c(166)][_0x8f335c(171)]['destroy'](), this[_0x8f335c(166)][_0x8f335c(136)][_0x8f335c(178)](), this[_0x8f335c(166)][_0x8f335c(137)][_0x8f335c(178)](), this[_0x8f335c(166)][_0x8f335c(169)][_0x8f335c(178)](), _[_0x8f335c(179)](this[_0x8f335c(180)])[_0x8f335c(181)](_0x4d4b81 => {
            _0x4d4b81['destroy']();
        }), this[_0x8f335c(166)] = {
            'center': this[_0x8f335c(167)](),
            'left': this[_0x8f335c(168)]('left'),
            'right': this[_0x8f335c(168)](_0x8f335c(137)),
            'bottom': this[_0x8f335c(168)](_0x8f335c(169))
        }, this[_0x8f335c(170)] = this[_0x8f335c(166)][_0x8f335c(171)], this[_0x8f335c(182)] = ![], this['panelContainers'] = {
            'top': new PanelContainer({
                'viewRegistry': this[_0x8f335c(151)],
                'location': _0x8f335c(183)
            }),
            'left': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x8f335c(136),
                'dock': this[_0x8f335c(166)][_0x8f335c(136)]
            }),
            'right': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': 'right',
                'dock': this[_0x8f335c(166)]['right']
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this[_0x8f335c(151)],
                'location': _0x8f335c(169),
                'dock': this[_0x8f335c(166)][_0x8f335c(169)]
            }),
            'header': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x8f335c(184)
            }),
            'footer': new PanelContainer({
                'viewRegistry': this[_0x8f335c(151)],
                'location': _0x8f335c(172)
            }),
            'modal': new PanelContainer({
                'viewRegistry': this[_0x8f335c(151)],
                'location': _0x8f335c(185)
            })
        }, this[_0x8f335c(161)] = [], this[_0x8f335c(162)] = [], this['element'] && (this[_0x8f335c(176)][_0x8f335c(178)](), this['element'] = null), this[_0x8f335c(165)](this['packageManager']);
    }
    [_0x43015e(186)]() {
        const _0x29df11 = _0x43015e;
        this[_0x29df11(187)] = this[_0x29df11(148)][_0x29df11(188)](_0x29df11(189)), this['project'][_0x29df11(190)](this[_0x29df11(139)]), this[_0x29df11(191)](), this[_0x29df11(192)](), this['subscribeToDockToggling']();
    }
    [_0x43015e(165)]({serviceHub: _0x356aac}) {
        const _0x234da0 = _0x43015e;
        this[_0x234da0(193)] = [], _0x356aac[_0x234da0(194)](_0x234da0(195), _0x234da0(196), _0x1af43f => this[_0x234da0(193)]['unshift'](_0x1af43f));
    }
    ['serialize']() {
        const _0x3a0c8f = _0x43015e;
        return {
            'deserializer': _0x3a0c8f(197),
            'packagesWithActiveGrammars': this[_0x3a0c8f(198)](),
            'destroyedItemURIs': this['destroyedItemURIs'][_0x3a0c8f(199)](),
            'paneContainer': { 'version': 2 },
            'paneContainers': {
                'center': this[_0x3a0c8f(166)]['center']['serialize'](),
                'left': this[_0x3a0c8f(166)]['left'][_0x3a0c8f(200)](),
                'right': this['paneContainers'][_0x3a0c8f(137)]['serialize'](),
                'bottom': this[_0x3a0c8f(166)]['bottom']['serialize']()
            }
        };
    }
    [_0x43015e(201)](_0x3950f7, _0x258e2e) {
        const _0x271336 = _0x43015e, _0x127af6 = _0x3950f7[_0x271336(202)] != null ? _0x3950f7[_0x271336(202)] : [];
        for (let _0x37fb7b of _0x127af6) {
            const _0x2be9e5 = this[_0x271336(147)][_0x271336(203)](_0x37fb7b);
            _0x2be9e5 != null && _0x2be9e5[_0x271336(204)]();
        }
        _0x3950f7['destroyedItemURIs'] != null && (this[_0x271336(162)] = _0x3950f7[_0x271336(162)]);
        if (_0x3950f7['paneContainers'])
            this['paneContainers'][_0x271336(171)][_0x271336(201)](_0x3950f7['paneContainers'][_0x271336(171)], _0x258e2e), this[_0x271336(166)][_0x271336(136)][_0x271336(201)](_0x3950f7['paneContainers'][_0x271336(136)], _0x258e2e), this[_0x271336(166)][_0x271336(137)][_0x271336(201)](_0x3950f7[_0x271336(166)][_0x271336(137)], _0x258e2e), this[_0x271336(166)][_0x271336(169)][_0x271336(201)](_0x3950f7[_0x271336(166)][_0x271336(169)], _0x258e2e);
        else
            _0x3950f7[_0x271336(174)] && this[_0x271336(166)]['center'][_0x271336(201)](_0x3950f7[_0x271336(174)], _0x258e2e);
        this[_0x271336(182)] = this[_0x271336(205)]() != null, this[_0x271336(139)]();
    }
    ['getPackageNamesWithActiveGrammars']() {
        const _0x5f0487 = _0x43015e, _0x34828f = [], _0x4c4f38 = ({
                includedGrammarScopes: _0x59b61c,
                packageName: _0x2a002b
            } = {}) => {
                const _0x53377e = _0x28a1;
                if (!_0x2a002b)
                    return;
                if (_0x34828f['indexOf'](_0x2a002b) !== -1)
                    return;
                _0x34828f[_0x53377e(206)](_0x2a002b);
                for (let _0x198ffd of _0x59b61c != null ? _0x59b61c : []) {
                    _0x4c4f38(this[_0x53377e(207)]['grammarForScopeName'](_0x198ffd));
                }
            }, _0x128695 = this[_0x5f0487(208)]();
        for (let _0x21f4ca of _0x128695) {
            _0x4c4f38(_0x21f4ca[_0x5f0487(209)]());
        }
        if (_0x128695[_0x5f0487(210)] > 0)
            for (let _0x13d674 of this[_0x5f0487(207)]['getGrammars']()) {
                _0x13d674[_0x5f0487(211)] && _0x4c4f38(_0x13d674);
            }
        return _[_0x5f0487(212)](_0x34828f);
    }
    [_0x43015e(145)](_0x1a5668) {
        const _0x2bce24 = _0x43015e;
        _0x1a5668 !== this[_0x2bce24(213)]() && (this[_0x2bce24(170)] = _0x1a5668, this[_0x2bce24(214)](this[_0x2bce24(170)][_0x2bce24(215)]()), this[_0x2bce24(160)][_0x2bce24(216)](_0x2bce24(217), this[_0x2bce24(170)]), this['emitter'][_0x2bce24(216)](_0x2bce24(218), this['activePaneContainer'][_0x2bce24(219)]()), this[_0x2bce24(160)][_0x2bce24(216)]('did-change-active-pane-item', this[_0x2bce24(170)][_0x2bce24(215)]()));
    }
    [_0x43015e(143)](_0x241e6e, _0x40b6a6) {
        const _0x475467 = _0x43015e;
        _0x241e6e === this['getActivePaneContainer']() && this['emitter'][_0x475467(216)](_0x475467(218), _0x40b6a6);
    }
    [_0x43015e(144)](_0x2d03df, _0xbb53de) {
        const _0x2fcd28 = _0x43015e;
        _0x2d03df === this['getActivePaneContainer']() && (this[_0x2fcd28(214)](_0xbb53de), this[_0x2fcd28(160)][_0x2fcd28(216)](_0x2fcd28(220), _0xbb53de));
        if (_0x2d03df === this[_0x2fcd28(221)]()) {
            const _0x2541b9 = this[_0x2fcd28(182)];
            this[_0x2fcd28(182)] = _0xbb53de instanceof TextEditor;
            if (this['hasActiveTextEditor'] || _0x2541b9) {
                const _0x2d9fb4 = this[_0x2fcd28(182)] ? _0xbb53de : undefined;
                this[_0x2fcd28(160)]['emit'](_0x2fcd28(222), _0x2d9fb4);
            }
        }
    }
    [_0x43015e(214)](_0x2cc82e) {
        const _0x2cf7eb = _0x43015e;
        this[_0x2cf7eb(139)](), this[_0x2cf7eb(141)]();
        if (this['activeItemSubscriptions'])
            this['activeItemSubscriptions'][_0x2cf7eb(177)]();
        this[_0x2cf7eb(223)] = new CompositeDisposable();
        let _0x19a8fe, _0x284b5f;
        if (_0x2cc82e != null && typeof _0x2cc82e[_0x2cf7eb(224)] === 'function')
            _0x284b5f = _0x2cc82e[_0x2cf7eb(224)](this[_0x2cf7eb(139)]);
        else
            _0x2cc82e != null && typeof _0x2cc82e['on'] === _0x2cf7eb(225) && (_0x284b5f = _0x2cc82e['on'](_0x2cf7eb(226), this[_0x2cf7eb(139)]), (_0x284b5f == null || typeof _0x284b5f[_0x2cf7eb(177)] !== _0x2cf7eb(225)) && (_0x284b5f = new Disposable(() => {
                const _0x55d02c = _0x2cf7eb;
                _0x2cc82e[_0x55d02c(227)](_0x55d02c(226), this[_0x55d02c(139)]);
            })));
        if (_0x2cc82e != null && typeof _0x2cc82e[_0x2cf7eb(228)] === _0x2cf7eb(225))
            _0x19a8fe = _0x2cc82e['onDidChangeModified'](this['updateDocumentEdited']);
        else
            _0x2cc82e != null && typeof _0x2cc82e['on'] === _0x2cf7eb(225) && (_0x19a8fe = _0x2cc82e['on']('modified-status-changed', this[_0x2cf7eb(141)]), (_0x19a8fe == null || typeof _0x19a8fe['dispose'] !== 'function') && (_0x19a8fe = new Disposable(() => {
                const _0x2821db = _0x2cf7eb;
                _0x2cc82e['off'](_0x2821db(229), this[_0x2821db(141)]);
            })));
        _0x284b5f != null && this[_0x2cf7eb(223)]['add'](_0x284b5f), _0x19a8fe != null && this[_0x2cf7eb(223)][_0x2cf7eb(230)](_0x19a8fe), this[_0x2cf7eb(231)](), this[_0x2cf7eb(232)] = setTimeout(() => {
            const _0x55c275 = _0x2cf7eb;
            this['stoppedChangingActivePaneItemTimeout'] = null, this[_0x55c275(160)][_0x55c275(216)](_0x55c275(233), _0x2cc82e);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    [_0x43015e(231)]() {
        const _0x5023f1 = _0x43015e;
        this['stoppedChangingActivePaneItemTimeout'] != null && clearTimeout(this[_0x5023f1(232)]);
    }
    [_0x43015e(234)](_0x331f99) {
        const _0x5790cc = _0x43015e;
        _['values'](this['paneContainers'])[_0x5790cc(181)](_0x30e9b2 => {
            const _0x1d13f5 = _0x5790cc;
            _0x30e9b2[_0x1d13f5(234)](_0x331f99);
        });
    }
    [_0x43015e(191)]() {
        const _0x1e0b0a = _0x43015e;
        this[_0x1e0b0a(235)](({
            item: _0x503194,
            pane: _0x55a379,
            index: _0x4ef583
        }) => {
            const _0xb12c4d = _0x1e0b0a;
            if (_0x503194 instanceof TextEditor) {
                const _0x3592af = new CompositeDisposable(this[_0xb12c4d(155)][_0xb12c4d(230)](_0x503194), this[_0xb12c4d(155)]['maintainConfig'](_0x503194));
                !this['project'][_0xb12c4d(236)](_0x503194[_0xb12c4d(237)]['id']) && this[_0xb12c4d(149)][_0xb12c4d(238)](_0x503194[_0xb12c4d(237)]), _0x503194[_0xb12c4d(239)](() => {
                    _0x3592af['dispose']();
                }), this[_0xb12c4d(160)][_0xb12c4d(216)](_0xb12c4d(240), {
                    'textEditor': _0x503194,
                    'pane': _0x55a379,
                    'index': _0x4ef583
                }), !_0x503194[_0xb12c4d(241)]() && _0x3592af[_0xb12c4d(230)](_0x503194['observeGrammar'](this[_0xb12c4d(242)][_0xb12c4d(140)](this)));
            }
        });
    }
    [_0x43015e(243)]() {
        const _0x4c780b = _0x43015e, _0x25431a = [
                this[_0x4c780b(244)](),
                this['getRightDock'](),
                this[_0x4c780b(245)]()
            ];
        _0x25431a['forEach'](_0x52e248 => {
            _0x52e248['onDidChangeVisible'](_0x3db7e2 => {
                const _0x31723e = _0x28a1;
                if (_0x3db7e2)
                    return;
                const {activeElement: _0x11f49d} = document, _0x43eba8 = _0x52e248[_0x31723e(175)]();
                (_0x43eba8 === _0x11f49d || _0x43eba8['contains'](_0x11f49d)) && this[_0x31723e(221)]()[_0x31723e(246)]();
            });
        });
    }
    [_0x43015e(192)]() {
        const _0x5384b3 = _0x43015e;
        for (const _0x4d5785 of this[_0x5384b3(247)]()) {
            _0x4d5785[_0x5384b3(248)](_0x175527 => {
                const _0x3a51fa = _0x5384b3;
                _0x175527[_0x3a51fa(249)](({item: _0x108177}) => {
                    const _0x4cca52 = _0x3a51fa;
                    if (typeof _0x108177['getURI'] === _0x4cca52(225) && this[_0x4cca52(146)]) {
                        const _0x45dad7 = _0x108177['getURI']();
                        if (_0x45dad7) {
                            const _0xf1a927 = _0x4d5785[_0x4cca52(250)]();
                            let _0x15ee9b;
                            typeof _0x108177['getDefaultLocation'] === _0x4cca52(225) && (_0x15ee9b = _0x108177['getDefaultLocation']()), _0x15ee9b = _0x15ee9b || 'center', _0xf1a927 === _0x15ee9b ? this[_0x4cca52(158)]['delete'](_0x108177[_0x4cca52(251)]()) : this[_0x4cca52(158)][_0x4cca52(252)](_0x108177[_0x4cca52(251)](), _0xf1a927);
                        }
                    }
                });
            });
        }
    }
    [_0x43015e(139)]() {
        const _0x1536b0 = _0x43015e;
        let _0x4560e9, _0x5efe6f, _0x1a2430, _0x3151ee;
        const _0x27e5bc = atom['getAppName'](), _0x5832c8 = this[_0x1536b0(149)][_0x1536b0(253)](), _0x3f1590 = _0x5832c8 != null ? _0x5832c8 : [], _0x3eed13 = this[_0x1536b0(215)]();
        if (_0x3eed13) {
            _0x4560e9 = typeof _0x3eed13[_0x1536b0(254)] === _0x1536b0(225) ? _0x3eed13['getPath']() : undefined;
            const _0x11fbaf = typeof _0x3eed13[_0x1536b0(255)] === 'function' ? _0x3eed13['getLongTitle']() : undefined;
            _0x5efe6f = _0x11fbaf == null ? typeof _0x3eed13[_0x1536b0(256)] === _0x1536b0(225) ? _0x3eed13[_0x1536b0(256)]() : undefined : _0x11fbaf, _0x1a2430 = _[_0x1536b0(257)](_0x3f1590, _0x110269 => _0x4560e9 === _0x110269 || (_0x4560e9 != null ? _0x4560e9[_0x1536b0(258)](_0x110269 + path[_0x1536b0(259)]) : undefined));
        }
        _0x5efe6f == null && (_0x5efe6f = _0x1536b0(260));
        _0x1a2430 == null && (_0x1a2430 = _0x4560e9 ? path[_0x1536b0(261)](_0x4560e9) : _0x3f1590[0]);
        _0x1a2430 != null && (_0x1a2430 = fs['tildify'](_0x1a2430));
        const _0x140897 = [];
        if (_0x3eed13 != null && _0x1a2430 != null)
            _0x140897['push'](_0x5efe6f, _0x1a2430), _0x3151ee = _0x4560e9 != null ? _0x4560e9 : _0x1a2430;
        else
            _0x1a2430 != null ? (_0x140897[_0x1536b0(206)](_0x1a2430), _0x3151ee = _0x1a2430) : (_0x140897[_0x1536b0(206)](_0x5efe6f), _0x3151ee = '');
        process[_0x1536b0(262)] !== 'darwin' && _0x140897[_0x1536b0(206)](_0x27e5bc), document[_0x1536b0(263)] = _0x140897[_0x1536b0(264)](_0x1536b0(265)), this['applicationDelegate'][_0x1536b0(266)](_0x3151ee), this[_0x1536b0(160)]['emit'](_0x1536b0(267));
    }
    [_0x43015e(141)]() {
        const _0x2aca97 = _0x43015e, _0x24cb1b = this[_0x2aca97(215)](), _0x59f48a = _0x24cb1b != null && typeof _0x24cb1b[_0x2aca97(268)] === _0x2aca97(225) ? _0x24cb1b[_0x2aca97(268)]() || ![] : ![];
        this['applicationDelegate'][_0x2aca97(269)](_0x59f48a);
    }
    ['onDidChangeActivePaneContainer'](_0x51845d) {
        const _0x3de4d0 = _0x43015e;
        return this['emitter']['on'](_0x3de4d0(217), _0x51845d);
    }
    [_0x43015e(270)](_0x55ea99) {
        const _0xc21d26 = _0x43015e;
        for (let _0x5e7eed of this[_0xc21d26(208)]()) {
            _0x55ea99(_0x5e7eed);
        }
        return this[_0xc21d26(271)](({textEditor: _0x83befc}) => _0x55ea99(_0x83befc));
    }
    [_0x43015e(272)](_0xea0527) {
        const _0x7e1d9c = _0x43015e;
        return new CompositeDisposable(...this[_0x7e1d9c(247)]()['map'](_0x345ae6 => _0x345ae6[_0x7e1d9c(272)](_0xea0527)));
    }
    [_0x43015e(273)](_0x4b7132) {
        const _0x40d645 = _0x43015e;
        return this[_0x40d645(160)]['on'](_0x40d645(220), _0x4b7132);
    }
    ['onDidStopChangingActivePaneItem'](_0x1a3bf3) {
        const _0x334cbe = _0x43015e;
        return this[_0x334cbe(160)]['on']('did-stop-changing-active-pane-item', _0x1a3bf3);
    }
    [_0x43015e(274)](_0x3e373f) {
        const _0x2e1307 = _0x43015e;
        return this['emitter']['on'](_0x2e1307(222), _0x3e373f);
    }
    ['observeActivePaneItem'](_0x337bde) {
        const _0x59424d = _0x43015e;
        return _0x337bde(this[_0x59424d(215)]()), this['onDidChangeActivePaneItem'](_0x337bde);
    }
    [_0x43015e(275)](_0x5bdcd0) {
        const _0x258de6 = _0x43015e;
        return _0x5bdcd0(this[_0x258de6(205)]()), this[_0x258de6(274)](_0x5bdcd0);
    }
    [_0x43015e(276)](_0x3e9050) {
        const _0x592b6c = _0x43015e;
        return this[_0x592b6c(160)]['on'](_0x592b6c(277), _0x3e9050);
    }
    [_0x43015e(278)](_0x46ea27) {
        const _0x4256df = _0x43015e;
        return new CompositeDisposable(...this[_0x4256df(247)]()[_0x4256df(279)](_0x5003d9 => _0x5003d9['onDidAddPane'](_0x46ea27)));
    }
    [_0x43015e(280)](_0x1e8074) {
        const _0x2a2fb2 = _0x43015e;
        return new CompositeDisposable(...this[_0x2a2fb2(247)]()[_0x2a2fb2(279)](_0x64a62e => _0x64a62e[_0x2a2fb2(280)](_0x1e8074)));
    }
    [_0x43015e(281)](_0x5c184c) {
        const _0x588341 = _0x43015e;
        return new CompositeDisposable(...this[_0x588341(247)]()['map'](_0x1c502e => _0x1c502e[_0x588341(281)](_0x5c184c)));
    }
    ['observePanes'](_0x207423) {
        const _0x14f8de = _0x43015e;
        return new CompositeDisposable(...this['getPaneContainers']()[_0x14f8de(279)](_0x26c459 => _0x26c459[_0x14f8de(248)](_0x207423)));
    }
    ['onDidChangeActivePane'](_0x9b5f7d) {
        const _0x515642 = _0x43015e;
        return this['emitter']['on'](_0x515642(218), _0x9b5f7d);
    }
    [_0x43015e(282)](_0x4e28d1) {
        const _0x14c9c5 = _0x43015e;
        return _0x4e28d1(this['getActivePane']()), this[_0x14c9c5(283)](_0x4e28d1);
    }
    [_0x43015e(235)](_0x54a7da) {
        const _0x9b788d = _0x43015e;
        return new CompositeDisposable(...this['getPaneContainers']()[_0x9b788d(279)](_0x1091a0 => _0x1091a0[_0x9b788d(235)](_0x54a7da)));
    }
    ['onWillDestroyPaneItem'](_0x3469d9) {
        const _0x5d27a6 = _0x43015e;
        return new CompositeDisposable(...this['getPaneContainers']()[_0x5d27a6(279)](_0x35e9cf => _0x35e9cf[_0x5d27a6(284)](_0x3469d9)));
    }
    [_0x43015e(285)](_0x5af4cd) {
        const _0x38d9f5 = _0x43015e;
        return new CompositeDisposable(...this[_0x38d9f5(247)]()['map'](_0x936aaa => _0x936aaa[_0x38d9f5(285)](_0x5af4cd)));
    }
    ['onDidAddTextEditor'](_0x2355b2) {
        const _0x50370f = _0x43015e;
        return this[_0x50370f(160)]['on'](_0x50370f(240), _0x2355b2);
    }
    [_0x43015e(286)](_0x42879c) {
        const _0x48c4f2 = _0x43015e;
        return this[_0x48c4f2(160)]['on']('did-change-window-title', _0x42879c);
    }
    async _0x43015e(287)(_0x50defa, _0x53c795 = {}) {
        const _0x41e9ba = _0x43015e;
        let _0x330ff1, _0x4d8474;
        if (typeof _0x50defa === 'string')
            _0x330ff1 = this[_0x41e9ba(149)]['resolvePath'](_0x50defa);
        else {
            if (_0x50defa) {
                _0x4d8474 = _0x50defa;
                if (typeof _0x4d8474[_0x41e9ba(251)] === _0x41e9ba(225))
                    _0x330ff1 = _0x4d8474['getURI']();
            }
        }
        let _0x264e17 = () => {
        };
        if (_0x330ff1) {
            const _0x3b9a69 = this['incoming'][_0x41e9ba(188)](_0x330ff1);
            !_0x3b9a69 ? this['incoming'][_0x41e9ba(288)](_0x330ff1, new Promise(_0x5f0cef => {
                _0x264e17 = _0x5f0cef;
            })) : await _0x3b9a69;
        }
        try {
            !atom['config'][_0x41e9ba(188)](_0x41e9ba(289)) && (_0x53c795['pending'] = ![]);
            _0x330ff1 && (!url['parse'](_0x330ff1)[_0x41e9ba(290)] || process[_0x41e9ba(262)] === _0x41e9ba(291)) && this[_0x41e9ba(152)]['addRecentDocument'](_0x330ff1);
            let _0x58fd6e, _0x320459;
            if (_0x4d8474 || _0x330ff1) {
                if (_0x53c795[_0x41e9ba(292)])
                    _0x58fd6e = _0x53c795[_0x41e9ba(292)];
                else {
                    if (_0x53c795[_0x41e9ba(293)])
                        _0x58fd6e = _0x4d8474 ? this[_0x41e9ba(294)](_0x4d8474) : this[_0x41e9ba(295)](_0x330ff1);
                    else {
                        let _0x4d4186;
                        if (_0x330ff1)
                            _0x4d4186 = this[_0x41e9ba(296)](_0x330ff1);
                        if (!_0x4d4186)
                            _0x4d4186 = this[_0x41e9ba(213)]();
                        _0x58fd6e = _0x4d4186[_0x41e9ba(219)]();
                        switch (_0x53c795[_0x41e9ba(297)]) {
                        case _0x41e9ba(136):
                            _0x58fd6e = _0x58fd6e[_0x41e9ba(298)]();
                            break;
                        case _0x41e9ba(137):
                            _0x58fd6e = _0x58fd6e[_0x41e9ba(299)]();
                            break;
                        case 'up':
                            _0x58fd6e = _0x58fd6e['findTopmostSibling']();
                            break;
                        case _0x41e9ba(300):
                            _0x58fd6e = _0x58fd6e['findBottommostSibling']();
                            break;
                        }
                    }
                }
                _0x58fd6e && (_0x4d8474 ? _0x320459 = _0x58fd6e['getItems']()['includes'](_0x4d8474) : (_0x4d8474 = _0x58fd6e[_0x41e9ba(301)](_0x330ff1), _0x320459 = _0x4d8474 != null));
            }
            if (_0x4d8474)
                await Promise[_0x41e9ba(302)]();
            if (!_0x320459) {
                _0x4d8474 = _0x4d8474 || await this[_0x41e9ba(303)](_0x330ff1, _0x53c795);
                if (!_0x4d8474)
                    return;
                if (_0x53c795[_0x41e9ba(292)])
                    _0x58fd6e = _0x53c795[_0x41e9ba(292)];
                else {
                    let _0x562375 = _0x53c795[_0x41e9ba(304)];
                    !_0x562375 && !_0x53c795[_0x41e9ba(297)] && _0x330ff1 && this[_0x41e9ba(146)] && (_0x562375 = await this['itemLocationStore']['load'](_0x330ff1));
                    !_0x562375 && typeof _0x4d8474[_0x41e9ba(305)] === 'function' && (_0x562375 = _0x4d8474[_0x41e9ba(305)]());
                    const _0x3c1107 = typeof _0x4d8474[_0x41e9ba(306)] === 'function' ? _0x4d8474['getAllowedLocations']() : ALL_LOCATIONS;
                    _0x562375 = _0x3c1107[_0x41e9ba(307)](_0x562375) ? _0x562375 : _0x3c1107[0];
                    const _0x305bf3 = this[_0x41e9ba(166)][_0x562375] || this['getCenter']();
                    _0x58fd6e = _0x305bf3['getActivePane']();
                    switch (_0x53c795[_0x41e9ba(297)]) {
                    case 'left':
                        _0x58fd6e = _0x58fd6e[_0x41e9ba(298)]();
                        break;
                    case _0x41e9ba(137):
                        _0x58fd6e = _0x58fd6e[_0x41e9ba(308)]();
                        break;
                    case 'up':
                        _0x58fd6e = _0x58fd6e[_0x41e9ba(309)]();
                        break;
                    case _0x41e9ba(300):
                        _0x58fd6e = _0x58fd6e[_0x41e9ba(310)]();
                        break;
                    }
                }
            }
            !_0x53c795[_0x41e9ba(311)] && _0x58fd6e[_0x41e9ba(312)]() === _0x4d8474 && _0x58fd6e[_0x41e9ba(313)]();
            this[_0x41e9ba(314)](_0x4d8474);
            _0x53c795['activateItem'] === ![] ? _0x58fd6e['addItem'](_0x4d8474, { 'pending': _0x53c795[_0x41e9ba(311)] }) : _0x58fd6e[_0x41e9ba(315)](_0x4d8474, { 'pending': _0x53c795[_0x41e9ba(311)] });
            _0x53c795['activatePane'] !== ![] && _0x58fd6e[_0x41e9ba(246)]();
            let _0x40c93a = 0, _0x42cc2e = 0;
            !Number['isNaN'](_0x53c795[_0x41e9ba(316)]) && (_0x42cc2e = _0x53c795[_0x41e9ba(316)]);
            !Number['isNaN'](_0x53c795[_0x41e9ba(317)]) && (_0x40c93a = _0x53c795[_0x41e9ba(317)]);
            (_0x42cc2e >= 0 || _0x40c93a >= 0) && (typeof _0x4d8474[_0x41e9ba(318)] === _0x41e9ba(225) && _0x4d8474[_0x41e9ba(318)]([
                _0x42cc2e,
                _0x40c93a
            ]), typeof _0x4d8474[_0x41e9ba(319)] === _0x41e9ba(225) && _0x4d8474['unfoldBufferRow'](_0x42cc2e), typeof _0x4d8474[_0x41e9ba(320)] === _0x41e9ba(225) && _0x4d8474[_0x41e9ba(320)]([
                _0x42cc2e,
                _0x40c93a
            ], { 'center': !![] }));
            const _0x1cfcfd = _0x58fd6e[_0x41e9ba(321)]();
            this['emitter'][_0x41e9ba(216)](_0x41e9ba(277), {
                'uri': _0x330ff1,
                'pane': _0x58fd6e,
                'item': _0x4d8474,
                'index': _0x1cfcfd
            }), _0x330ff1 && this[_0x41e9ba(173)][_0x41e9ba(322)](_0x330ff1);
        } finally {
            _0x264e17();
        }
        return _0x4d8474;
    }
    [_0x43015e(323)](_0xd283df) {
        const _0x3dd83f = _0x43015e;
        let _0x172856 = ![];
        for (const _0xc4c928 of this[_0x3dd83f(247)]()) {
            const _0x3d4888 = _0xc4c928 === this['getCenter']();
            if (_0x3d4888 || _0xc4c928[_0x3dd83f(324)]())
                for (const _0x270a70 of _0xc4c928[_0x3dd83f(325)]()) {
                    const _0x1ac9e9 = _0x270a70['getActiveItem'](), _0xbe09c6 = _0x1ac9e9 != null && (_0x1ac9e9 === _0xd283df || typeof _0x1ac9e9[_0x3dd83f(251)] === _0x3dd83f(225) && _0x1ac9e9[_0x3dd83f(251)]() === _0xd283df);
                    _0xbe09c6 && (_0x172856 = !![], _0x3d4888 ? _0x270a70[_0x3dd83f(326)](_0x1ac9e9) : _0xc4c928['hide']());
                }
        }
        return _0x172856;
    }
    [_0x43015e(327)](_0x3622fc) {
        const _0x2be4b2 = _0x43015e;
        return this[_0x2be4b2(323)](_0x3622fc) ? Promise[_0x2be4b2(302)]() : this[_0x2be4b2(287)](_0x3622fc, { 'searchAllPanes': !![] });
    }
    [_0x43015e(328)]() {
        const _0x1eba37 = _0x43015e;
        return this[_0x1eba37(287)](path[_0x1eba37(264)](process[_0x1eba37(329)], 'LICENSE.md'));
    }
    [_0x43015e(330)](_0x410878 = '', _0x1f7844 = {}) {
        const _0x2d0b93 = _0x43015e, {
                initialLine: _0x5c5085,
                initialColumn: _0x4fea61
            } = _0x1f7844, _0x303219 = _0x1f7844[_0x2d0b93(331)] != null ? _0x1f7844[_0x2d0b93(331)] : !![], _0x5533b1 = _0x1f7844[_0x2d0b93(315)] != null ? _0x1f7844[_0x2d0b93(315)] : !![], _0x4a5691 = this[_0x2d0b93(149)]['resolvePath'](_0x410878);
        let _0x21bbb7 = this[_0x2d0b93(219)]()[_0x2d0b93(301)](_0x4a5691);
        if (_0x4a5691 && _0x21bbb7 == null)
            for (const _0x2c83ed of this[_0x2d0b93(332)]()) {
                _0x21bbb7 = _0x2c83ed(_0x4a5691, _0x1f7844);
                if (_0x21bbb7)
                    break;
            }
        return _0x21bbb7 == null && (_0x21bbb7 = this[_0x2d0b93(149)][_0x2d0b93(330)](_0x4a5691, {
            'initialLine': _0x5c5085,
            'initialColumn': _0x4fea61
        })), _0x5533b1 && this[_0x2d0b93(219)]()[_0x2d0b93(315)](_0x21bbb7), this[_0x2d0b93(314)](_0x21bbb7), _0x303219 && this[_0x2d0b93(219)]()['activate'](), _0x21bbb7;
    }
    [_0x43015e(333)](_0x464d75, _0x2e7565) {
        const _0x22fd17 = _0x43015e;
        return this[_0x22fd17(287)](_0x464d75, { 'pane': _0x2e7565 });
    }
    async _0x43015e(303)(_0x3e33c8, _0x385316) {
        const _0x2f2d11 = _0x43015e;
        if (_0x3e33c8 != null)
            for (const _0x10a869 of this['getOpeners']()) {
                const _0x46d52e = _0x10a869(_0x3e33c8, _0x385316);
                if (_0x46d52e != null)
                    return _0x46d52e;
            }
        try {
            const _0x536570 = await this[_0x2f2d11(334)](_0x3e33c8, _0x385316);
            return _0x536570;
        } catch (_0x26fd65) {
            switch (_0x26fd65[_0x2f2d11(335)]) {
            case 'CANCELLED':
                return Promise[_0x2f2d11(302)]();
            case 'EACCES':
                this[_0x2f2d11(150)][_0x2f2d11(336)](_0x2f2d11(337) + _0x26fd65[_0x2f2d11(338)] + '\'');
                return Promise[_0x2f2d11(302)]();
            case _0x2f2d11(339):
            case _0x2f2d11(340):
            case _0x2f2d11(341):
            case _0x2f2d11(342):
            case _0x2f2d11(343):
            case _0x2f2d11(344):
            case 'ECONNRESET':
            case 'EINVAL':
            case _0x2f2d11(345):
            case _0x2f2d11(346):
            case 'EAGAIN':
                this[_0x2f2d11(150)][_0x2f2d11(336)](_0x2f2d11(347) + (_0x26fd65[_0x2f2d11(338)] != null ? _0x26fd65['path'] : _0x3e33c8) + '\'', { 'detail': _0x26fd65['message'] });
                return Promise[_0x2f2d11(302)]();
            default:
                throw _0x26fd65;
            }
        }
    }
    async _0x43015e(334)(_0x1b7eaf, _0xe00f9f) {
        const _0x33b457 = _0x43015e, _0x25832b = this[_0x33b457(149)][_0x33b457(348)](_0x1b7eaf);
        if (_0x25832b != null)
            try {
                fs[_0x33b457(349)](fs['openSync'](_0x25832b, 'r'));
            } catch (_0x124634) {
                if (_0x124634['code'] !== _0x33b457(350))
                    throw _0x124634;
            }
        const _0x44185c = fs[_0x33b457(351)](_0x25832b);
        _0x44185c >= this[_0x33b457(148)]['get'](_0x33b457(352)) * 1048576 && await new Promise((_0x43e7e8, _0x33d54d) => {
            const _0x11c3e6 = _0x33b457;
            this[_0x11c3e6(152)][_0x11c3e6(353)]({
                'message': _0x11c3e6(354),
                'detail': 'Do you still want to load this file?',
                'buttons': [
                    _0x11c3e6(355),
                    'Cancel'
                ]
            }, _0x445244 => {
                const _0x920ada = _0x11c3e6;
                if (_0x445244 === 1) {
                    const _0x38a122 = new Error();
                    _0x38a122[_0x920ada(335)] = _0x920ada(356), _0x33d54d(_0x38a122);
                } else
                    _0x43e7e8();
            });
        });
        const _0x46ab06 = await this['project'][_0x33b457(357)](_0x25832b, _0xe00f9f);
        return this[_0x33b457(155)][_0x33b457(358)](Object[_0x33b457(359)]({
            'buffer': _0x46ab06,
            'autoHeight': ![]
        }, _0xe00f9f));
    }
    [_0x43015e(242)](_0x3a05c3) {
        const _0x4c2650 = _0x43015e;
        if (_0x3a05c3 == null)
            return;
        this[_0x4c2650(147)][_0x4c2650(360)](_0x3a05c3['scopeName'] + _0x4c2650(361)), this[_0x4c2650(147)][_0x4c2650(360)](_0x3a05c3[_0x4c2650(362)] + _0x4c2650(363));
    }
    [_0x43015e(364)](_0x4d45b2) {
        return _0x4d45b2 instanceof TextEditor;
    }
    [_0x43015e(365)](_0x47ac91) {
        const _0x31f950 = _0x43015e, _0x1b2db5 = this[_0x31f950(155)][_0x31f950(358)](_0x47ac91), _0x2c3cb7 = this[_0x31f950(155)][_0x31f950(366)](_0x1b2db5);
        return _0x1b2db5[_0x31f950(239)](() => _0x2c3cb7[_0x31f950(177)]()), _0x1b2db5;
    }
    [_0x43015e(367)]() {
        const _0x40938e = _0x43015e, _0x5cf790 = this['destroyedItemURIs'][_0x40938e(368)]();
        return _0x5cf790 ? this['open'](_0x5cf790) : Promise[_0x40938e(302)]();
    }
    [_0x43015e(369)](_0x11385d) {
        const _0x2151b8 = _0x43015e;
        return this[_0x2151b8(161)][_0x2151b8(206)](_0x11385d), new Disposable(() => {
            const _0x1cfa27 = _0x2151b8;
            _[_0x1cfa27(370)](this[_0x1cfa27(161)], _0x11385d);
        });
    }
    [_0x43015e(332)]() {
        const _0x26cc80 = _0x43015e;
        return this[_0x26cc80(161)];
    }
    [_0x43015e(371)]() {
        const _0x43be68 = _0x43015e;
        return _[_0x43be68(372)](this[_0x43be68(247)]()[_0x43be68(279)](_0x239ef1 => _0x239ef1[_0x43be68(371)]()));
    }
    [_0x43015e(215)]() {
        const _0x19aa64 = _0x43015e;
        return this[_0x19aa64(213)]()[_0x19aa64(215)]();
    }
    [_0x43015e(208)]() {
        const _0x2c7d61 = _0x43015e;
        return this[_0x2c7d61(371)]()[_0x2c7d61(373)](_0x15b80f => _0x15b80f instanceof TextEditor);
    }
    [_0x43015e(205)]() {
        const _0x4bc73a = _0x43015e, _0x105de9 = this[_0x4bc73a(221)]()[_0x4bc73a(215)]();
        if (_0x105de9 instanceof TextEditor)
            return _0x105de9;
    }
    ['saveAll']() {
        const _0x583d44 = _0x43015e;
        this[_0x583d44(247)]()[_0x583d44(181)](_0x473b82 => {
            const _0x3033c2 = _0x583d44;
            _0x473b82[_0x3033c2(374)]();
        });
    }
    ['confirmClose'](_0x5ef53a) {
        const _0x3b9d5a = _0x43015e;
        return Promise['all'](this[_0x3b9d5a(247)]()[_0x3b9d5a(279)](_0x32c0a2 => _0x32c0a2[_0x3b9d5a(375)](_0x5ef53a)))['then'](_0x506f8a => !_0x506f8a[_0x3b9d5a(307)](![]));
    }
    ['saveActivePaneItem']() {
        const _0x40af90 = _0x43015e;
        return this[_0x40af90(221)]()['getActivePane']()[_0x40af90(376)]();
    }
    [_0x43015e(377)]() {
        const _0x8db074 = _0x43015e;
        this[_0x8db074(221)]()['getActivePane']()[_0x8db074(378)]();
    }
    [_0x43015e(379)]() {
        const _0x3bb15e = _0x43015e;
        return this[_0x3bb15e(219)]()['destroyActiveItem']();
    }
    ['getActivePaneContainer']() {
        return this['activePaneContainer'];
    }
    [_0x43015e(325)]() {
        const _0x9f71f4 = _0x43015e;
        return _[_0x9f71f4(372)](this[_0x9f71f4(247)]()[_0x9f71f4(279)](_0x2e0668 => _0x2e0668[_0x9f71f4(325)]()));
    }
    [_0x43015e(380)]() {
        const _0x11e4a6 = _0x43015e;
        return _[_0x11e4a6(372)](this[_0x11e4a6(381)]()[_0x11e4a6(279)](_0x292c2e => _0x292c2e[_0x11e4a6(325)]()));
    }
    [_0x43015e(219)]() {
        const _0x4beab2 = _0x43015e;
        return this[_0x4beab2(213)]()['getActivePane']();
    }
    ['activateNextPane']() {
        const _0x270a32 = _0x43015e;
        return this[_0x270a32(213)]()[_0x270a32(382)]();
    }
    [_0x43015e(383)]() {
        const _0x514bdd = _0x43015e;
        return this[_0x514bdd(213)]()[_0x514bdd(383)]();
    }
    [_0x43015e(296)](_0x3b99e7) {
        const _0x5cfa3f = _0x43015e;
        return this[_0x5cfa3f(247)]()[_0x5cfa3f(257)](_0x117ab9 => _0x117ab9[_0x5cfa3f(295)](_0x3b99e7));
    }
    ['paneContainerForItem'](_0x17b6dd) {
        const _0x574fb2 = _0x43015e;
        return this['getPaneContainers']()[_0x574fb2(257)](_0xe341f5 => _0xe341f5[_0x574fb2(294)](_0x17b6dd));
    }
    [_0x43015e(295)](_0x2922f0) {
        const _0x19ff64 = _0x43015e;
        for (let _0x991bd8 of this['getPaneContainers']()) {
            const _0x2adc93 = _0x991bd8[_0x19ff64(295)](_0x2922f0);
            if (_0x2adc93 != null)
                return _0x2adc93;
        }
    }
    ['paneForItem'](_0x462497) {
        const _0x18674a = _0x43015e;
        for (let _0x1c30f9 of this[_0x18674a(247)]()) {
            const _0x19b9ff = _0x1c30f9[_0x18674a(294)](_0x462497);
            if (_0x19b9ff != null)
                return _0x19b9ff;
        }
    }
    [_0x43015e(384)]() {
        const _0x1fd7ee = _0x43015e, _0x4ddd83 = this[_0x1fd7ee(219)]();
        _0x4ddd83 != null && _0x4ddd83['destroy']();
    }
    ['closeActivePaneItemOrEmptyPaneOrWindow']() {
        const _0x5005de = _0x43015e;
        if (this[_0x5005de(221)]()[_0x5005de(215)]() != null)
            this[_0x5005de(221)]()[_0x5005de(219)]()[_0x5005de(385)]();
        else {
            if (this[_0x5005de(221)]()[_0x5005de(325)]()[_0x5005de(210)] > 1)
                this[_0x5005de(221)]()[_0x5005de(384)]();
            else
                this[_0x5005de(148)]['get'](_0x5005de(386)) && atom['close']();
        }
    }
    [_0x43015e(387)]() {
        const _0x5f41b3 = _0x43015e;
        this[_0x5f41b3(148)][_0x5f41b3(288)](_0x5f41b3(388), this[_0x5f41b3(148)]['get']('editor.fontSize') + 1);
    }
    [_0x43015e(389)]() {
        const _0x2a13f6 = _0x43015e, _0x24d8d1 = this[_0x2a13f6(148)][_0x2a13f6(188)](_0x2a13f6(388));
        _0x24d8d1 > 1 && this[_0x2a13f6(148)][_0x2a13f6(288)](_0x2a13f6(388), _0x24d8d1 - 1);
    }
    [_0x43015e(390)]() {
        const _0x470bb3 = _0x43015e;
        this[_0x470bb3(148)][_0x470bb3(288)]('editor.fontSize', this[_0x470bb3(148)][_0x470bb3(188)](_0x470bb3(391)));
    }
    ['itemOpened'](_0x70364c) {
        const _0x45e8b6 = _0x43015e;
        let _0x1d2ec5;
        if (typeof _0x70364c['getURI'] === 'function')
            _0x1d2ec5 = _0x70364c[_0x45e8b6(251)]();
        else
            typeof _0x70364c[_0x45e8b6(392)] === _0x45e8b6(225) && (_0x1d2ec5 = _0x70364c[_0x45e8b6(392)]());
        _0x1d2ec5 != null && _[_0x45e8b6(370)](this[_0x45e8b6(162)], _0x1d2ec5);
    }
    [_0x43015e(142)]({item: _0x3ef46e}) {
        const _0x37d258 = _0x43015e;
        let _0x212e55;
        if (typeof _0x3ef46e[_0x37d258(251)] === 'function')
            _0x212e55 = _0x3ef46e[_0x37d258(251)]();
        else
            typeof _0x3ef46e['getUri'] === _0x37d258(225) && (_0x212e55 = _0x3ef46e[_0x37d258(392)]());
        _0x212e55 != null && this[_0x37d258(162)][_0x37d258(206)](_0x212e55);
    }
    ['destroyed']() {
        const _0x32699e = _0x43015e;
        this[_0x32699e(166)][_0x32699e(171)][_0x32699e(178)](), this[_0x32699e(166)][_0x32699e(136)][_0x32699e(178)](), this[_0x32699e(166)]['right'][_0x32699e(178)](), this[_0x32699e(166)]['bottom']['destroy'](), this['cancelStoppedChangingActivePaneItemTimeout']();
        this[_0x32699e(223)] != null && this[_0x32699e(223)]['dispose']();
        if (this[_0x32699e(176)])
            this[_0x32699e(176)]['destroy']();
    }
    [_0x43015e(221)]() {
        return this['paneContainers']['center'];
    }
    [_0x43015e(244)]() {
        const _0x1e7c94 = _0x43015e;
        return this[_0x1e7c94(166)][_0x1e7c94(136)];
    }
    ['getRightDock']() {
        const _0x552339 = _0x43015e;
        return this[_0x552339(166)][_0x552339(137)];
    }
    [_0x43015e(245)]() {
        const _0x29db31 = _0x43015e;
        return this[_0x29db31(166)][_0x29db31(169)];
    }
    [_0x43015e(247)]() {
        const _0x36ba48 = _0x43015e;
        return [
            this['paneContainers'][_0x36ba48(171)],
            this[_0x36ba48(166)][_0x36ba48(136)],
            this[_0x36ba48(166)][_0x36ba48(137)],
            this['paneContainers'][_0x36ba48(169)]
        ];
    }
    [_0x43015e(381)]() {
        const _0x258029 = _0x43015e, _0x384e74 = this[_0x258029(221)]();
        return atom[_0x258029(393)]['getPaneContainers']()[_0x258029(373)](_0x39438f => _0x39438f === _0x384e74 || _0x39438f['isVisible']());
    }
    [_0x43015e(394)]() {
        const _0x5af8cf = _0x43015e;
        return this[_0x5af8cf(395)](_0x5af8cf(169));
    }
    [_0x43015e(396)](_0x3302a1) {
        return this['addPanel']('bottom', _0x3302a1);
    }
    ['getLeftPanels']() {
        const _0x488752 = _0x43015e;
        return this[_0x488752(395)]('left');
    }
    [_0x43015e(397)](_0x5396db) {
        const _0x4c9058 = _0x43015e;
        return this['addPanel'](_0x4c9058(136), _0x5396db);
    }
    ['getRightPanels']() {
        const _0x4d474b = _0x43015e;
        return this[_0x4d474b(395)](_0x4d474b(137));
    }
    [_0x43015e(398)](_0x40850f) {
        const _0x52a8be = _0x43015e;
        return this[_0x52a8be(399)]('right', _0x40850f);
    }
    [_0x43015e(400)]() {
        const _0x2750c8 = _0x43015e;
        return this[_0x2750c8(395)](_0x2750c8(183));
    }
    [_0x43015e(401)](_0x48c406) {
        const _0x315b41 = _0x43015e;
        return this[_0x315b41(399)](_0x315b41(183), _0x48c406);
    }
    ['getHeaderPanels']() {
        const _0x1aad9e = _0x43015e;
        return this[_0x1aad9e(395)](_0x1aad9e(184));
    }
    [_0x43015e(402)](_0x1b70ab) {
        const _0x5e705a = _0x43015e;
        return this[_0x5e705a(399)](_0x5e705a(184), _0x1b70ab);
    }
    [_0x43015e(403)]() {
        const _0x496029 = _0x43015e;
        return this[_0x496029(395)](_0x496029(172));
    }
    [_0x43015e(404)](_0x370d32) {
        const _0x2365bb = _0x43015e;
        return this[_0x2365bb(399)]('footer', _0x370d32);
    }
    [_0x43015e(405)]() {
        const _0x318b2e = _0x43015e;
        return this['getPanels'](_0x318b2e(185));
    }
    ['addModalPanel'](_0x4625a7 = {}) {
        const _0x282884 = _0x43015e;
        return this[_0x282884(399)](_0x282884(185), _0x4625a7);
    }
    [_0x43015e(406)](_0x351856) {
        const _0xf30fab = _0x43015e;
        for (let _0x409604 in this[_0xf30fab(180)]) {
            const _0x421dca = this[_0xf30fab(180)][_0x409604], _0x2c9ee7 = _0x421dca[_0xf30fab(406)](_0x351856);
            if (_0x2c9ee7 != null)
                return _0x2c9ee7;
        }
        return null;
    }
    ['getPanels'](_0xddcc99) {
        const _0xad9f3f = _0x43015e;
        return this[_0xad9f3f(180)][_0xddcc99]['getPanels']();
    }
    [_0x43015e(399)](_0x3c01c6, _0x4c9b3b) {
        const _0x10324b = _0x43015e;
        return _0x4c9b3b == null && (_0x4c9b3b = {}), this[_0x10324b(180)][_0x3c01c6][_0x10324b(399)](new Panel(_0x4c9b3b, this[_0x10324b(151)]));
    }
    [_0x43015e(407)](_0x3b792a, _0x47a009 = {}, _0x6b3825) {
        const _0x4619d5 = _0x43015e;
        _[_0x4619d5(408)](_0x47a009) && (_0x6b3825 = _0x47a009, _0x47a009 = {});
        const _0x18d7d4 = new Map();
        for (const _0x131cb4 of this[_0x4619d5(149)]['getDirectories']()) {
            let _0x423c2c = _0x47a009['ripgrep'] ? this['ripgrepDirectorySearcher'] : this[_0x4619d5(163)];
            for (const _0xfff15 of this['directorySearchers']) {
                if (_0xfff15[_0x4619d5(409)](_0x131cb4)) {
                    _0x423c2c = _0xfff15;
                    break;
                }
            }
            let _0x33390c = _0x18d7d4[_0x4619d5(188)](_0x423c2c);
            !_0x33390c && (_0x33390c = [], _0x18d7d4[_0x4619d5(288)](_0x423c2c, _0x33390c)), _0x33390c[_0x4619d5(206)](_0x131cb4);
        }
        let _0x39f269;
        if (_['isFunction'](_0x47a009[_0x4619d5(410)])) {
            const _0x241fbe = _0x47a009[_0x4619d5(410)];
            let _0x56b31a = 0;
            const _0x8567e = new Map();
            _0x39f269 = function (_0x10b15e, _0x51ffac) {
                const _0x84e644 = _0x4619d5, _0x4a4285 = _0x8567e[_0x84e644(188)](_0x10b15e);
                return _0x4a4285 && (_0x56b31a -= _0x4a4285), _0x8567e[_0x84e644(288)](_0x10b15e, _0x51ffac), _0x56b31a += _0x51ffac, _0x241fbe(_0x56b31a);
            };
        } else
            _0x39f269 = function () {
            };
        const _0x58b5f4 = [];
        _0x18d7d4[_0x4619d5(181)]((_0x2ed315, _0x2093d1) => {
            const _0x4edbd7 = _0x4619d5, _0x188499 = {
                    'inclusions': _0x47a009[_0x4edbd7(411)] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this[_0x4edbd7(148)]['get'](_0x4edbd7(412)),
                    'exclusions': this[_0x4edbd7(148)][_0x4edbd7(188)]('core.ignoredNames'),
                    'follow': this[_0x4edbd7(148)]['get']('core.followSymlinks'),
                    'leadingContextLineCount': _0x47a009[_0x4edbd7(413)] || 0,
                    'trailingContextLineCount': _0x47a009['trailingContextLineCount'] || 0,
                    'PCRE2': _0x47a009[_0x4edbd7(414)],
                    'didMatch': _0x16c522 => {
                        const _0x141652 = _0x4edbd7;
                        if (!this[_0x141652(149)][_0x141652(415)](_0x16c522['filePath']))
                            return _0x6b3825(_0x16c522);
                    },
                    'didError'(_0x4fc086) {
                        return _0x6b3825(null, _0x4fc086);
                    },
                    'didSearchPaths'(_0x21b218) {
                        return _0x39f269(_0x2093d1, _0x21b218);
                    }
                }, _0x4968a8 = _0x2093d1['search'](_0x2ed315, _0x3b792a, _0x188499);
            _0x58b5f4[_0x4edbd7(206)](_0x4968a8);
        });
        const _0x325a36 = Promise[_0x4619d5(416)](_0x58b5f4);
        for (let _0x2c01a2 of this[_0x4619d5(149)][_0x4619d5(417)]()) {
            if (_0x2c01a2[_0x4619d5(268)]()) {
                const _0x2059b5 = _0x2c01a2[_0x4619d5(254)]();
                if (!this[_0x4619d5(149)]['contains'](_0x2059b5))
                    continue;
                var _0x3f2cfc = [];
                _0x2c01a2['scan'](_0x3b792a, _0x362897 => _0x3f2cfc[_0x4619d5(206)](_0x362897)), _0x3f2cfc[_0x4619d5(210)] > 0 && _0x6b3825({
                    'filePath': _0x2059b5,
                    'matches': _0x3f2cfc
                });
            }
        }
        let _0x17af21 = ![];
        const _0xcaeefc = new Promise((_0x1fc8ec, _0x26c898) => {
            const _0x4fbe9b = _0x4619d5, _0x211cc6 = function () {
                    const _0x2cf151 = _0x28a1;
                    _0x17af21 ? _0x1fc8ec(_0x2cf151(418)) : _0x1fc8ec(null);
                }, _0x510a22 = function (_0x5730fe) {
                    const _0x2ac01f = _0x28a1;
                    for (let _0x4daa6c of _0x58b5f4) {
                        _0x4daa6c[_0x2ac01f(419)]();
                    }
                    _0x26c898(_0x5730fe);
                };
            _0x325a36[_0x4fbe9b(420)](_0x211cc6, _0x510a22);
        });
        return _0xcaeefc['cancel'] = () => {
            _0x17af21 = !![], _0x58b5f4['map'](_0x3cc4ed => _0x3cc4ed['cancel']());
        }, _0xcaeefc;
    }
    [_0x43015e(421)](_0x4bbb13, _0x5219d5, _0x6f628f, _0x408fde) {
        return new Promise((_0x4fbd0f, _0x3ce9fd) => {
            const _0x368451 = _0x28a1;
            let _0x6928d1;
            const _0x376fa1 = this['project'][_0x368451(417)]()['map'](_0x707f0d => _0x707f0d[_0x368451(254)]()), _0x5e224d = _[_0x368451(422)](_0x6f628f, _0x376fa1);
            let _0x573b8e = !_0x376fa1['length'], _0x23cb3e = !_0x5e224d[_0x368451(210)];
            const _0x2c7f8b = () => {
                _0x23cb3e && _0x573b8e && _0x4fbd0f();
            };
            if (!_0x23cb3e[_0x368451(210)]) {
                let _0x4a086 = 'g';
                _0x4bbb13['multiline'] && (_0x4a086 += 'm');
                _0x4bbb13['ignoreCase'] && (_0x4a086 += 'i');
                const _0x27facc = Task[_0x368451(423)](require[_0x368451(302)](_0x368451(424)), _0x5e224d, _0x4bbb13[_0x368451(425)], _0x4a086, _0x5219d5, () => {
                    _0x23cb3e = !![], _0x2c7f8b();
                });
                _0x27facc['on']('replace:path-replaced', _0x408fde), _0x27facc['on']('replace:file-error', _0x5b021b => {
                    _0x408fde(null, _0x5b021b);
                });
            }
            for (_0x6928d1 of this[_0x368451(149)][_0x368451(417)]()) {
                if (!_0x6f628f['includes'](_0x6928d1[_0x368451(254)]()))
                    continue;
                const _0x22630d = _0x6928d1[_0x368451(421)](_0x4bbb13, _0x5219d5, _0x408fde);
                _0x22630d && _0x408fde({
                    'filePath': _0x6928d1[_0x368451(254)](),
                    'replacements': _0x22630d
                });
            }
            _0x573b8e = !![], _0x2c7f8b();
        });
    }
    [_0x43015e(426)](_0x2ed328) {
        const _0x1cf0b4 = _0x43015e;
        if (_0x2ed328[_0x1cf0b4(254)]()) {
            const _0x37aba9 = async () => {
                const _0x3eb2ff = _0x1cf0b4, _0x8a66d5 = await this[_0x3eb2ff(149)][_0x3eb2ff(427)](new Directory(_0x2ed328[_0x3eb2ff(428)]()));
                if (_0x8a66d5)
                    _0x8a66d5[_0x3eb2ff(429)](_0x2ed328);
            };
            this['config'][_0x1cf0b4(188)](_0x1cf0b4(430)) ? this[_0x1cf0b4(152)][_0x1cf0b4(353)]({
                'message': _0x1cf0b4(431),
                'detail': 'Are you sure you want to discard all changes to "' + _0x2ed328[_0x1cf0b4(432)]() + '" since the last Git commit?',
                'buttons': [
                    'OK',
                    _0x1cf0b4(433)
                ]
            }, _0x31aece => {
                if (_0x31aece === 0)
                    _0x37aba9();
            }) : _0x37aba9();
        }
    }
};