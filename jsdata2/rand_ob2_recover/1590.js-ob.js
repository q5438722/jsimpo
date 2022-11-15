const _ = require('underscore-plus'), url = require(_0x26d44d(233)), path = require(_0x26d44d(234)), {Emitter, Disposable, CompositeDisposable} = require(_0x26d44d(235)), fs = require(_0x26d44d(236)), {Directory} = require('pathwatcher'), Grim = require(_0x26d44d(237)), DefaultDirectorySearcher = require(_0x26d44d(238)), RipgrepDirectorySearcher = require(_0x26d44d(239)), Dock = require(_0x26d44d(240)), Model = require('./model'), StateStore = require(_0x26d44d(241)), TextEditor = require('./text-editor'), Panel = require(_0x26d44d(242)), PanelContainer = require(_0x26d44d(243)), Task = require('./task'), WorkspaceCenter = require(_0x26d44d(244)), {createWorkspaceElement} = require(_0x26d44d(245)), STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = 100, ALL_LOCATIONS = [
        'center',
        _0x26d44d(246),
        _0x26d44d(247),
        'bottom'
    ];
function _0x4039(_0x4e0471, _0x1ffdf4) {
    return _0x4039 = function (_0x1e8e28, _0x40391f) {
        _0x1e8e28 = _0x1e8e28 - 222;
        let _0x4e46b5 = _0x1e8e[_0x1e8e28];
        return _0x4e46b5;
    }, _0x4039(_0x4e0471, _0x1ffdf4);
}
module[_0x26d44d(248)] = class Workspace extends Model {
    constructor(_0x13717c) {
        const _0x2b6a7b = _0x26d44d;
        super(...arguments), this[_0x2b6a7b(249)] = this[_0x2b6a7b(249)][_0x2b6a7b(250)](this), this[_0x2b6a7b(251)] = this['updateDocumentEdited'][_0x2b6a7b(250)](this), this['didDestroyPaneItem'] = this[_0x2b6a7b(252)][_0x2b6a7b(250)](this), this[_0x2b6a7b(253)] = this['didChangeActivePaneOnPaneContainer'][_0x2b6a7b(250)](this), this[_0x2b6a7b(254)] = this[_0x2b6a7b(254)][_0x2b6a7b(250)](this), this[_0x2b6a7b(255)] = this[_0x2b6a7b(255)]['bind'](this), this[_0x2b6a7b(256)] = _0x13717c[_0x2b6a7b(256)], this['packageManager'] = _0x13717c['packageManager'], this[_0x2b6a7b(257)] = _0x13717c['config'], this[_0x2b6a7b(258)] = _0x13717c[_0x2b6a7b(258)], this['notificationManager'] = _0x13717c[_0x2b6a7b(259)], this['viewRegistry'] = _0x13717c['viewRegistry'], this[_0x2b6a7b(260)] = _0x13717c[_0x2b6a7b(260)], this[_0x2b6a7b(261)] = _0x13717c[_0x2b6a7b(261)], this[_0x2b6a7b(262)] = _0x13717c[_0x2b6a7b(262)], this['deserializerManager'] = _0x13717c[_0x2b6a7b(263)], this['textEditorRegistry'] = _0x13717c[_0x2b6a7b(264)], this[_0x2b6a7b(265)] = _0x13717c[_0x2b6a7b(265)], this[_0x2b6a7b(266)] = ![], this[_0x2b6a7b(267)] = new StateStore(_0x2b6a7b(268), 1), this['emitter'] = new Emitter(), this[_0x2b6a7b(269)] = [], this[_0x2b6a7b(270)] = [], this[_0x2b6a7b(271)] = null, this[_0x2b6a7b(272)] = new DefaultDirectorySearcher(), this[_0x2b6a7b(273)] = new RipgrepDirectorySearcher(), this[_0x2b6a7b(274)](this[_0x2b6a7b(275)]), this[_0x2b6a7b(276)] = {
            'center': this[_0x2b6a7b(277)](),
            'left': this[_0x2b6a7b(278)]('left'),
            'right': this[_0x2b6a7b(278)](_0x2b6a7b(247)),
            'bottom': this[_0x2b6a7b(278)]('bottom')
        }, this['activePaneContainer'] = this[_0x2b6a7b(276)][_0x2b6a7b(279)], this[_0x2b6a7b(280)] = ![], this[_0x2b6a7b(281)] = {
            'top': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': 'top'
            }),
            'left': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': 'left',
                'dock': this['paneContainers'][_0x2b6a7b(246)]
            }),
            'right': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': _0x2b6a7b(247),
                'dock': this[_0x2b6a7b(276)][_0x2b6a7b(247)]
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': 'bottom',
                'dock': this[_0x2b6a7b(276)][_0x2b6a7b(283)]
            }),
            'header': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': _0x2b6a7b(284)
            }),
            'footer': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': _0x2b6a7b(285)
            }),
            'modal': new PanelContainer({
                'viewRegistry': this[_0x2b6a7b(282)],
                'location': _0x2b6a7b(286)
            })
        }, this[_0x2b6a7b(287)] = new Map();
    }
    get ['paneContainer']() {
        const _0x59ad70 = _0x26d44d;
        return Grim[_0x59ad70(288)](_0x59ad70(289)), this[_0x59ad70(276)][_0x59ad70(279)]['paneContainer'];
    }
    [_0x26d44d(290)]() {
        const _0x1696e8 = _0x26d44d;
        return !this[_0x1696e8(291)] && (this[_0x1696e8(291)] = createWorkspaceElement()['initialize'](this, {
            'config': this[_0x1696e8(257)],
            'project': this[_0x1696e8(258)],
            'viewRegistry': this[_0x1696e8(282)],
            'styleManager': this[_0x1696e8(265)]
        })), this[_0x1696e8(291)];
    }
    ['createCenter']() {
        const _0x211a44 = _0x26d44d;
        return new WorkspaceCenter({
            'config': this[_0x211a44(257)],
            'applicationDelegate': this[_0x211a44(261)],
            'notificationManager': this[_0x211a44(259)],
            'deserializerManager': this['deserializerManager'],
            'viewRegistry': this[_0x211a44(282)],
            'didActivate': this[_0x211a44(255)],
            'didChangeActivePane': this['didChangeActivePaneOnPaneContainer'],
            'didChangeActivePaneItem': this[_0x211a44(254)],
            'didDestroyPaneItem': this[_0x211a44(252)]
        });
    }
    [_0x26d44d(278)](_0x23de98) {
        const _0x787957 = _0x26d44d;
        return new Dock({
            'location': _0x23de98,
            'config': this[_0x787957(257)],
            'applicationDelegate': this[_0x787957(261)],
            'deserializerManager': this[_0x787957(263)],
            'notificationManager': this[_0x787957(259)],
            'viewRegistry': this[_0x787957(282)],
            'didActivate': this['didActivatePaneContainer'],
            'didChangeActivePane': this[_0x787957(253)],
            'didChangeActivePaneItem': this[_0x787957(254)],
            'didDestroyPaneItem': this[_0x787957(252)]
        });
    }
    [_0x26d44d(292)](_0x354f7b) {
        const _0x5ec775 = _0x26d44d;
        this[_0x5ec775(275)] = _0x354f7b, this[_0x5ec775(293)][_0x5ec775(294)](), this[_0x5ec775(293)] = new Emitter(), this['paneContainers'][_0x5ec775(279)][_0x5ec775(295)](), this[_0x5ec775(276)][_0x5ec775(246)][_0x5ec775(295)](), this[_0x5ec775(276)][_0x5ec775(247)]['destroy'](), this['paneContainers']['bottom'][_0x5ec775(295)](), _[_0x5ec775(296)](this['panelContainers'])[_0x5ec775(297)](_0x368fda => {
            const _0x4492c0 = _0x5ec775;
            _0x368fda[_0x4492c0(295)]();
        }), this[_0x5ec775(276)] = {
            'center': this[_0x5ec775(277)](),
            'left': this[_0x5ec775(278)](_0x5ec775(246)),
            'right': this[_0x5ec775(278)](_0x5ec775(247)),
            'bottom': this[_0x5ec775(278)]('bottom')
        }, this['activePaneContainer'] = this[_0x5ec775(276)][_0x5ec775(279)], this['hasActiveTextEditor'] = ![], this[_0x5ec775(281)] = {
            'top': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(298)
            }),
            'left': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(246),
                'dock': this[_0x5ec775(276)][_0x5ec775(246)]
            }),
            'right': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(247),
                'dock': this[_0x5ec775(276)][_0x5ec775(247)]
            }),
            'bottom': new PanelContainer({
                'viewRegistry': this['viewRegistry'],
                'location': _0x5ec775(283),
                'dock': this[_0x5ec775(276)][_0x5ec775(283)]
            }),
            'header': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(284)
            }),
            'footer': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(285)
            }),
            'modal': new PanelContainer({
                'viewRegistry': this[_0x5ec775(282)],
                'location': _0x5ec775(286)
            })
        }, this['openers'] = [], this[_0x5ec775(270)] = [], this['element'] && (this[_0x5ec775(291)][_0x5ec775(295)](), this['element'] = null), this[_0x5ec775(274)](this[_0x5ec775(275)]);
    }
    [_0x26d44d(299)]() {
        const _0x1b9db1 = _0x26d44d;
        this[_0x1b9db1(300)] = this[_0x1b9db1(257)]['get'](_0x1b9db1(301)), this[_0x1b9db1(258)][_0x1b9db1(302)](this[_0x1b9db1(249)]), this[_0x1b9db1(303)](), this[_0x1b9db1(304)](), this[_0x1b9db1(305)]();
    }
    ['consumeServices']({serviceHub: _0xcd43f8}) {
        const _0x6f291f = _0x26d44d;
        this[_0x6f291f(306)] = [], _0xcd43f8[_0x6f291f(307)](_0x6f291f(308), _0x6f291f(309), _0x4ef6cf => this[_0x6f291f(306)][_0x6f291f(310)](_0x4ef6cf));
    }
    [_0x26d44d(311)]() {
        const _0x8e9184 = _0x26d44d;
        return {
            'deserializer': _0x8e9184(312),
            'packagesWithActiveGrammars': this[_0x8e9184(313)](),
            'destroyedItemURIs': this[_0x8e9184(270)][_0x8e9184(314)](),
            'paneContainer': { 'version': 2 },
            'paneContainers': {
                'center': this[_0x8e9184(276)]['center'][_0x8e9184(311)](),
                'left': this['paneContainers']['left'][_0x8e9184(311)](),
                'right': this[_0x8e9184(276)][_0x8e9184(247)][_0x8e9184(311)](),
                'bottom': this[_0x8e9184(276)][_0x8e9184(283)][_0x8e9184(311)]()
            }
        };
    }
    [_0x26d44d(315)](_0x155ad8, _0x1e5eed) {
        const _0x43ce0d = _0x26d44d, _0x161d9c = _0x155ad8[_0x43ce0d(316)] != null ? _0x155ad8[_0x43ce0d(316)] : [];
        for (let _0x1f9a19 of _0x161d9c) {
            const _0x1f6b6a = this[_0x43ce0d(275)][_0x43ce0d(317)](_0x1f9a19);
            _0x1f6b6a != null && _0x1f6b6a['loadGrammarsSync']();
        }
        _0x155ad8['destroyedItemURIs'] != null && (this[_0x43ce0d(270)] = _0x155ad8[_0x43ce0d(270)]);
        if (_0x155ad8['paneContainers'])
            this[_0x43ce0d(276)][_0x43ce0d(279)][_0x43ce0d(315)](_0x155ad8[_0x43ce0d(276)][_0x43ce0d(279)], _0x1e5eed), this[_0x43ce0d(276)]['left'][_0x43ce0d(315)](_0x155ad8[_0x43ce0d(276)][_0x43ce0d(246)], _0x1e5eed), this['paneContainers'][_0x43ce0d(247)][_0x43ce0d(315)](_0x155ad8[_0x43ce0d(276)][_0x43ce0d(247)], _0x1e5eed), this[_0x43ce0d(276)][_0x43ce0d(283)][_0x43ce0d(315)](_0x155ad8[_0x43ce0d(276)][_0x43ce0d(283)], _0x1e5eed);
        else
            _0x155ad8[_0x43ce0d(318)] && this['paneContainers'][_0x43ce0d(279)][_0x43ce0d(315)](_0x155ad8[_0x43ce0d(318)], _0x1e5eed);
        this[_0x43ce0d(280)] = this['getActiveTextEditor']() != null, this[_0x43ce0d(249)]();
    }
    [_0x26d44d(313)]() {
        const _0x47a22b = _0x26d44d, _0xd1dbc = [], _0x2a141a = ({
                includedGrammarScopes: _0x2e4bcc,
                packageName: _0x3f3f37
            } = {}) => {
                const _0x4315cd = _0x4039;
                if (!_0x3f3f37)
                    return;
                if (_0xd1dbc[_0x4315cd(319)](_0x3f3f37) !== -1)
                    return;
                _0xd1dbc[_0x4315cd(320)](_0x3f3f37);
                for (let _0x228b29 of _0x2e4bcc != null ? _0x2e4bcc : []) {
                    _0x2a141a(this[_0x4315cd(260)][_0x4315cd(321)](_0x228b29));
                }
            }, _0x27ffa8 = this[_0x47a22b(322)]();
        for (let _0x49b06b of _0x27ffa8) {
            _0x2a141a(_0x49b06b[_0x47a22b(323)]());
        }
        if (_0x27ffa8['length'] > 0)
            for (let _0x4d833c of this[_0x47a22b(260)][_0x47a22b(324)]()) {
                _0x4d833c[_0x47a22b(325)] && _0x2a141a(_0x4d833c);
            }
        return _['uniq'](_0xd1dbc);
    }
    [_0x26d44d(255)](_0x34ee9e) {
        const _0x30de96 = _0x26d44d;
        _0x34ee9e !== this[_0x30de96(326)]() && (this[_0x30de96(327)] = _0x34ee9e, this[_0x30de96(328)](this[_0x30de96(327)][_0x30de96(329)]()), this[_0x30de96(293)][_0x30de96(330)]('did-change-active-pane-container', this[_0x30de96(327)]), this[_0x30de96(293)][_0x30de96(330)](_0x30de96(331), this[_0x30de96(327)]['getActivePane']()), this[_0x30de96(293)][_0x30de96(330)]('did-change-active-pane-item', this[_0x30de96(327)][_0x30de96(329)]()));
    }
    ['didChangeActivePaneOnPaneContainer'](_0x5efe27, _0x469ffd) {
        const _0xc97bb5 = _0x26d44d;
        _0x5efe27 === this[_0xc97bb5(326)]() && this[_0xc97bb5(293)][_0xc97bb5(330)](_0xc97bb5(331), _0x469ffd);
    }
    [_0x26d44d(254)](_0x30fb58, _0x39b5fb) {
        const _0x5587d2 = _0x26d44d;
        _0x30fb58 === this[_0x5587d2(326)]() && (this[_0x5587d2(328)](_0x39b5fb), this[_0x5587d2(293)][_0x5587d2(330)](_0x5587d2(332), _0x39b5fb));
        if (_0x30fb58 === this[_0x5587d2(333)]()) {
            const _0x21dc5c = this[_0x5587d2(280)];
            this[_0x5587d2(280)] = _0x39b5fb instanceof TextEditor;
            if (this['hasActiveTextEditor'] || _0x21dc5c) {
                const _0x22a561 = this[_0x5587d2(280)] ? _0x39b5fb : undefined;
                this[_0x5587d2(293)]['emit'](_0x5587d2(334), _0x22a561);
            }
        }
    }
    [_0x26d44d(328)](_0x4192c4) {
        const _0x2c2b93 = _0x26d44d;
        this[_0x2c2b93(249)](), this[_0x2c2b93(251)]();
        if (this['activeItemSubscriptions'])
            this[_0x2c2b93(335)][_0x2c2b93(294)]();
        this[_0x2c2b93(335)] = new CompositeDisposable();
        let _0x13c493, _0x2aefda;
        if (_0x4192c4 != null && typeof _0x4192c4[_0x2c2b93(336)] === _0x2c2b93(337))
            _0x2aefda = _0x4192c4[_0x2c2b93(336)](this[_0x2c2b93(249)]);
        else
            _0x4192c4 != null && typeof _0x4192c4['on'] === 'function' && (_0x2aefda = _0x4192c4['on'](_0x2c2b93(338), this[_0x2c2b93(249)]), (_0x2aefda == null || typeof _0x2aefda[_0x2c2b93(294)] !== _0x2c2b93(337)) && (_0x2aefda = new Disposable(() => {
                const _0x679004 = _0x2c2b93;
                _0x4192c4[_0x679004(339)]('title-changed', this[_0x679004(249)]);
            })));
        if (_0x4192c4 != null && typeof _0x4192c4[_0x2c2b93(340)] === _0x2c2b93(337))
            _0x13c493 = _0x4192c4[_0x2c2b93(340)](this[_0x2c2b93(251)]);
        else
            _0x4192c4 != null && typeof _0x4192c4['on'] === _0x2c2b93(337) && (_0x13c493 = _0x4192c4['on'](_0x2c2b93(341), this[_0x2c2b93(251)]), (_0x13c493 == null || typeof _0x13c493[_0x2c2b93(294)] !== _0x2c2b93(337)) && (_0x13c493 = new Disposable(() => {
                const _0x30163f = _0x2c2b93;
                _0x4192c4[_0x30163f(339)](_0x30163f(341), this[_0x30163f(251)]);
            })));
        _0x2aefda != null && this['activeItemSubscriptions'][_0x2c2b93(342)](_0x2aefda), _0x13c493 != null && this[_0x2c2b93(335)][_0x2c2b93(342)](_0x13c493), this[_0x2c2b93(343)](), this[_0x2c2b93(271)] = setTimeout(() => {
            const _0x41d519 = _0x2c2b93;
            this[_0x41d519(271)] = null, this[_0x41d519(293)]['emit']('did-stop-changing-active-pane-item', _0x4192c4);
        }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
    }
    [_0x26d44d(343)]() {
        const _0x2ba0c0 = _0x26d44d;
        this[_0x2ba0c0(271)] != null && clearTimeout(this['stoppedChangingActivePaneItemTimeout']);
    }
    [_0x26d44d(344)](_0x52fcd4) {
        const _0x38c470 = _0x26d44d;
        _[_0x38c470(296)](this[_0x38c470(276)])[_0x38c470(297)](_0x325d44 => {
            const _0x11ecf3 = _0x38c470;
            _0x325d44[_0x11ecf3(344)](_0x52fcd4);
        });
    }
    [_0x26d44d(303)]() {
        const _0x331b2b = _0x26d44d;
        this[_0x331b2b(345)](({
            item: _0x57a392,
            pane: _0x544fef,
            index: _0x4374c5
        }) => {
            const _0xc55d41 = _0x331b2b;
            if (_0x57a392 instanceof TextEditor) {
                const _0x1ab9e7 = new CompositeDisposable(this[_0xc55d41(264)]['add'](_0x57a392), this[_0xc55d41(264)][_0xc55d41(346)](_0x57a392));
                !this[_0xc55d41(258)]['findBufferForId'](_0x57a392[_0xc55d41(347)]['id']) && this[_0xc55d41(258)][_0xc55d41(348)](_0x57a392['buffer']), _0x57a392['onDidDestroy'](() => {
                    const _0x316274 = _0xc55d41;
                    _0x1ab9e7[_0x316274(294)]();
                }), this[_0xc55d41(293)][_0xc55d41(330)](_0xc55d41(349), {
                    'textEditor': _0x57a392,
                    'pane': _0x544fef,
                    'index': _0x4374c5
                }), !_0x57a392['isDestroyed']() && _0x1ab9e7[_0xc55d41(342)](_0x57a392['observeGrammar'](this[_0xc55d41(350)][_0xc55d41(250)](this)));
            }
        });
    }
    [_0x26d44d(305)]() {
        const _0x3261a4 = _0x26d44d, _0x4d5fbe = [
                this[_0x3261a4(351)](),
                this['getRightDock'](),
                this[_0x3261a4(352)]()
            ];
        _0x4d5fbe[_0x3261a4(297)](_0x1a9e08 => {
            const _0x5cae2a = _0x3261a4;
            _0x1a9e08[_0x5cae2a(353)](_0x510e25 => {
                const _0x4a37aa = _0x5cae2a;
                if (_0x510e25)
                    return;
                const {activeElement: _0x491a65} = document, _0x404806 = _0x1a9e08[_0x4a37aa(290)]();
                (_0x404806 === _0x491a65 || _0x404806[_0x4a37aa(354)](_0x491a65)) && this[_0x4a37aa(333)]()[_0x4a37aa(355)]();
            });
        });
    }
    [_0x26d44d(304)]() {
        const _0x34e797 = _0x26d44d;
        for (const _0x25111a of this[_0x34e797(356)]()) {
            _0x25111a[_0x34e797(357)](_0x150fd5 => {
                _0x150fd5['onDidAddItem'](({item: _0x4bca70}) => {
                    const _0x4ca263 = _0x4039;
                    if (typeof _0x4bca70[_0x4ca263(358)] === _0x4ca263(337) && this[_0x4ca263(256)]) {
                        const _0x5a2ba8 = _0x4bca70[_0x4ca263(358)]();
                        if (_0x5a2ba8) {
                            const _0x42de5b = _0x25111a[_0x4ca263(359)]();
                            let _0x321e63;
                            typeof _0x4bca70[_0x4ca263(360)] === _0x4ca263(337) && (_0x321e63 = _0x4bca70[_0x4ca263(360)]()), _0x321e63 = _0x321e63 || 'center', _0x42de5b === _0x321e63 ? this[_0x4ca263(267)][_0x4ca263(361)](_0x4bca70[_0x4ca263(358)]()) : this[_0x4ca263(267)][_0x4ca263(362)](_0x4bca70['getURI'](), _0x42de5b);
                        }
                    }
                });
            });
        }
    }
    [_0x26d44d(249)]() {
        const _0x1c518c = _0x26d44d;
        let _0x15ca3c, _0x3db806, _0x5bc1bf, _0x332262;
        const _0x2a3919 = atom[_0x1c518c(363)](), _0x2dd40a = this[_0x1c518c(258)][_0x1c518c(364)](), _0x25624f = _0x2dd40a != null ? _0x2dd40a : [], _0x3491b5 = this[_0x1c518c(329)]();
        if (_0x3491b5) {
            _0x15ca3c = typeof _0x3491b5[_0x1c518c(365)] === _0x1c518c(337) ? _0x3491b5[_0x1c518c(365)]() : undefined;
            const _0x320047 = typeof _0x3491b5[_0x1c518c(366)] === _0x1c518c(337) ? _0x3491b5[_0x1c518c(366)]() : undefined;
            _0x3db806 = _0x320047 == null ? typeof _0x3491b5[_0x1c518c(367)] === _0x1c518c(337) ? _0x3491b5[_0x1c518c(367)]() : undefined : _0x320047, _0x5bc1bf = _[_0x1c518c(368)](_0x25624f, _0x20eb95 => _0x15ca3c === _0x20eb95 || (_0x15ca3c != null ? _0x15ca3c[_0x1c518c(369)](_0x20eb95 + path['sep']) : undefined));
        }
        _0x3db806 == null && (_0x3db806 = _0x1c518c(370));
        _0x5bc1bf == null && (_0x5bc1bf = _0x15ca3c ? path[_0x1c518c(371)](_0x15ca3c) : _0x25624f[0]);
        _0x5bc1bf != null && (_0x5bc1bf = fs[_0x1c518c(372)](_0x5bc1bf));
        const _0x5165bd = [];
        if (_0x3491b5 != null && _0x5bc1bf != null)
            _0x5165bd[_0x1c518c(320)](_0x3db806, _0x5bc1bf), _0x332262 = _0x15ca3c != null ? _0x15ca3c : _0x5bc1bf;
        else
            _0x5bc1bf != null ? (_0x5165bd[_0x1c518c(320)](_0x5bc1bf), _0x332262 = _0x5bc1bf) : (_0x5165bd[_0x1c518c(320)](_0x3db806), _0x332262 = '');
        process['platform'] !== _0x1c518c(373) && _0x5165bd[_0x1c518c(320)](_0x2a3919), document[_0x1c518c(374)] = _0x5165bd[_0x1c518c(375)](_0x1c518c(376)), this[_0x1c518c(261)][_0x1c518c(377)](_0x332262), this['emitter'][_0x1c518c(330)](_0x1c518c(378));
    }
    [_0x26d44d(251)]() {
        const _0x9b63d1 = _0x26d44d, _0x4bc15a = this[_0x9b63d1(329)](), _0x44b1ba = _0x4bc15a != null && typeof _0x4bc15a[_0x9b63d1(379)] === _0x9b63d1(337) ? _0x4bc15a[_0x9b63d1(379)]() || ![] : ![];
        this[_0x9b63d1(261)][_0x9b63d1(380)](_0x44b1ba);
    }
    [_0x26d44d(381)](_0x242fc1) {
        const _0x3cb4c6 = _0x26d44d;
        return this[_0x3cb4c6(293)]['on'](_0x3cb4c6(382), _0x242fc1);
    }
    [_0x26d44d(383)](_0x52aefe) {
        const _0x5d8aa1 = _0x26d44d;
        for (let _0x5c6e6c of this[_0x5d8aa1(322)]()) {
            _0x52aefe(_0x5c6e6c);
        }
        return this[_0x5d8aa1(384)](({textEditor: _0x25477a}) => _0x52aefe(_0x25477a));
    }
    [_0x26d44d(385)](_0x19361d) {
        const _0x5f0396 = _0x26d44d;
        return new CompositeDisposable(...this[_0x5f0396(356)]()[_0x5f0396(386)](_0x41463d => _0x41463d[_0x5f0396(385)](_0x19361d)));
    }
    [_0x26d44d(387)](_0x5996b8) {
        const _0x3bace7 = _0x26d44d;
        return this[_0x3bace7(293)]['on'](_0x3bace7(332), _0x5996b8);
    }
    [_0x26d44d(388)](_0x166c63) {
        const _0x32f178 = _0x26d44d;
        return this[_0x32f178(293)]['on'](_0x32f178(389), _0x166c63);
    }
    [_0x26d44d(390)](_0x2334cd) {
        const _0x4cbacb = _0x26d44d;
        return this['emitter']['on'](_0x4cbacb(334), _0x2334cd);
    }
    ['observeActivePaneItem'](_0x5bf96f) {
        return _0x5bf96f(this['getActivePaneItem']()), this['onDidChangeActivePaneItem'](_0x5bf96f);
    }
    [_0x26d44d(391)](_0x47f4d2) {
        const _0x4e6c7d = _0x26d44d;
        return _0x47f4d2(this[_0x4e6c7d(392)]()), this['onDidChangeActiveTextEditor'](_0x47f4d2);
    }
    [_0x26d44d(393)](_0x296509) {
        const _0x1a07f1 = _0x26d44d;
        return this[_0x1a07f1(293)]['on'](_0x1a07f1(394), _0x296509);
    }
    [_0x26d44d(395)](_0x59806a) {
        const _0x1502f4 = _0x26d44d;
        return new CompositeDisposable(...this[_0x1502f4(356)]()[_0x1502f4(386)](_0x543e71 => _0x543e71['onDidAddPane'](_0x59806a)));
    }
    [_0x26d44d(396)](_0x28e322) {
        const _0x1ce2e2 = _0x26d44d;
        return new CompositeDisposable(...this[_0x1ce2e2(356)]()[_0x1ce2e2(386)](_0x3af3aa => _0x3af3aa[_0x1ce2e2(396)](_0x28e322)));
    }
    [_0x26d44d(397)](_0x53ac59) {
        const _0x2173c8 = _0x26d44d;
        return new CompositeDisposable(...this[_0x2173c8(356)]()['map'](_0x1b0ba8 => _0x1b0ba8[_0x2173c8(397)](_0x53ac59)));
    }
    [_0x26d44d(357)](_0x2f1959) {
        const _0x1d79fa = _0x26d44d;
        return new CompositeDisposable(...this[_0x1d79fa(356)]()[_0x1d79fa(386)](_0x184e59 => _0x184e59[_0x1d79fa(357)](_0x2f1959)));
    }
    [_0x26d44d(398)](_0x146f8a) {
        const _0x24600f = _0x26d44d;
        return this[_0x24600f(293)]['on'](_0x24600f(331), _0x146f8a);
    }
    [_0x26d44d(399)](_0x1fa6e3) {
        const _0x3ce870 = _0x26d44d;
        return _0x1fa6e3(this[_0x3ce870(400)]()), this[_0x3ce870(398)](_0x1fa6e3);
    }
    [_0x26d44d(345)](_0x35f767) {
        const _0x566b35 = _0x26d44d;
        return new CompositeDisposable(...this[_0x566b35(356)]()[_0x566b35(386)](_0x1471ca => _0x1471ca[_0x566b35(345)](_0x35f767)));
    }
    [_0x26d44d(401)](_0x4ea5d5) {
        const _0x30698f = _0x26d44d;
        return new CompositeDisposable(...this[_0x30698f(356)]()[_0x30698f(386)](_0x4f11fe => _0x4f11fe['onWillDestroyPaneItem'](_0x4ea5d5)));
    }
    [_0x26d44d(402)](_0x19af16) {
        const _0x4a2d62 = _0x26d44d;
        return new CompositeDisposable(...this[_0x4a2d62(356)]()['map'](_0x3c268d => _0x3c268d[_0x4a2d62(402)](_0x19af16)));
    }
    [_0x26d44d(384)](_0x4a6277) {
        const _0x571014 = _0x26d44d;
        return this[_0x571014(293)]['on'](_0x571014(349), _0x4a6277);
    }
    [_0x26d44d(403)](_0x27c88b) {
        const _0x1df004 = _0x26d44d;
        return this[_0x1df004(293)]['on']('did-change-window-title', _0x27c88b);
    }
    async 'open'(_0x35d3ae, _0x2414df = {}) {
        const _0x4dcafb = _0x26d44d;
        let _0x42786a, _0x273481;
        if (typeof _0x35d3ae === _0x4dcafb(404))
            _0x42786a = this[_0x4dcafb(258)]['resolvePath'](_0x35d3ae);
        else {
            if (_0x35d3ae) {
                _0x273481 = _0x35d3ae;
                if (typeof _0x273481[_0x4dcafb(358)] === _0x4dcafb(337))
                    _0x42786a = _0x273481[_0x4dcafb(358)]();
            }
        }
        let _0x53a012 = () => {
        };
        if (_0x42786a) {
            const _0x329339 = this[_0x4dcafb(287)][_0x4dcafb(405)](_0x42786a);
            !_0x329339 ? this['incoming'][_0x4dcafb(406)](_0x42786a, new Promise(_0x1bb908 => {
                _0x53a012 = _0x1bb908;
            })) : await _0x329339;
        }
        try {
            !atom[_0x4dcafb(257)][_0x4dcafb(405)](_0x4dcafb(407)) && (_0x2414df[_0x4dcafb(408)] = ![]);
            _0x42786a && (!url[_0x4dcafb(409)](_0x42786a)[_0x4dcafb(410)] || process[_0x4dcafb(411)] === _0x4dcafb(412)) && this['applicationDelegate'][_0x4dcafb(413)](_0x42786a);
            let _0x3881ce, _0x40aa92;
            if (_0x273481 || _0x42786a) {
                if (_0x2414df[_0x4dcafb(414)])
                    _0x3881ce = _0x2414df['pane'];
                else {
                    if (_0x2414df[_0x4dcafb(415)])
                        _0x3881ce = _0x273481 ? this['paneForItem'](_0x273481) : this[_0x4dcafb(416)](_0x42786a);
                    else {
                        let _0x49c395;
                        if (_0x42786a)
                            _0x49c395 = this[_0x4dcafb(417)](_0x42786a);
                        if (!_0x49c395)
                            _0x49c395 = this['getActivePaneContainer']();
                        _0x3881ce = _0x49c395[_0x4dcafb(400)]();
                        switch (_0x2414df['split']) {
                        case 'left':
                            _0x3881ce = _0x3881ce['findLeftmostSibling']();
                            break;
                        case 'right':
                            _0x3881ce = _0x3881ce[_0x4dcafb(418)]();
                            break;
                        case 'up':
                            _0x3881ce = _0x3881ce['findTopmostSibling']();
                            break;
                        case _0x4dcafb(419):
                            _0x3881ce = _0x3881ce[_0x4dcafb(420)]();
                            break;
                        }
                    }
                }
                _0x3881ce && (_0x273481 ? _0x40aa92 = _0x3881ce[_0x4dcafb(421)]()[_0x4dcafb(422)](_0x273481) : (_0x273481 = _0x3881ce[_0x4dcafb(423)](_0x42786a), _0x40aa92 = _0x273481 != null));
            }
            if (_0x273481)
                await Promise[_0x4dcafb(424)]();
            if (!_0x40aa92) {
                _0x273481 = _0x273481 || await this[_0x4dcafb(425)](_0x42786a, _0x2414df);
                if (!_0x273481)
                    return;
                if (_0x2414df[_0x4dcafb(414)])
                    _0x3881ce = _0x2414df['pane'];
                else {
                    let _0x2cc8fc = _0x2414df[_0x4dcafb(426)];
                    !_0x2cc8fc && !_0x2414df[_0x4dcafb(427)] && _0x42786a && this[_0x4dcafb(256)] && (_0x2cc8fc = await this['itemLocationStore'][_0x4dcafb(428)](_0x42786a));
                    !_0x2cc8fc && typeof _0x273481[_0x4dcafb(360)] === _0x4dcafb(337) && (_0x2cc8fc = _0x273481[_0x4dcafb(360)]());
                    const _0x4627a7 = typeof _0x273481[_0x4dcafb(429)] === _0x4dcafb(337) ? _0x273481[_0x4dcafb(429)]() : ALL_LOCATIONS;
                    _0x2cc8fc = _0x4627a7[_0x4dcafb(422)](_0x2cc8fc) ? _0x2cc8fc : _0x4627a7[0];
                    const _0x307e51 = this['paneContainers'][_0x2cc8fc] || this[_0x4dcafb(333)]();
                    _0x3881ce = _0x307e51[_0x4dcafb(400)]();
                    switch (_0x2414df['split']) {
                    case 'left':
                        _0x3881ce = _0x3881ce[_0x4dcafb(430)]();
                        break;
                    case _0x4dcafb(247):
                        _0x3881ce = _0x3881ce[_0x4dcafb(431)]();
                        break;
                    case 'up':
                        _0x3881ce = _0x3881ce[_0x4dcafb(432)]();
                        break;
                    case _0x4dcafb(419):
                        _0x3881ce = _0x3881ce[_0x4dcafb(433)]();
                        break;
                    }
                }
            }
            !_0x2414df[_0x4dcafb(408)] && _0x3881ce['getPendingItem']() === _0x273481 && _0x3881ce['clearPendingItem']();
            this[_0x4dcafb(434)](_0x273481);
            _0x2414df['activateItem'] === ![] ? _0x3881ce[_0x4dcafb(435)](_0x273481, { 'pending': _0x2414df['pending'] }) : _0x3881ce[_0x4dcafb(436)](_0x273481, { 'pending': _0x2414df[_0x4dcafb(408)] });
            _0x2414df[_0x4dcafb(437)] !== ![] && _0x3881ce[_0x4dcafb(355)]();
            let _0x477bbe = 0, _0x3d82ce = 0;
            !Number[_0x4dcafb(438)](_0x2414df[_0x4dcafb(439)]) && (_0x3d82ce = _0x2414df[_0x4dcafb(439)]);
            !Number[_0x4dcafb(438)](_0x2414df[_0x4dcafb(440)]) && (_0x477bbe = _0x2414df[_0x4dcafb(440)]);
            (_0x3d82ce >= 0 || _0x477bbe >= 0) && (typeof _0x273481[_0x4dcafb(441)] === _0x4dcafb(337) && _0x273481[_0x4dcafb(441)]([
                _0x3d82ce,
                _0x477bbe
            ]), typeof _0x273481[_0x4dcafb(442)] === _0x4dcafb(337) && _0x273481[_0x4dcafb(442)](_0x3d82ce), typeof _0x273481[_0x4dcafb(443)] === 'function' && _0x273481['scrollToBufferPosition']([
                _0x3d82ce,
                _0x477bbe
            ], { 'center': !![] }));
            const _0x24f894 = _0x3881ce['getActiveItemIndex']();
            this[_0x4dcafb(293)][_0x4dcafb(330)](_0x4dcafb(394), {
                'uri': _0x42786a,
                'pane': _0x3881ce,
                'item': _0x273481,
                'index': _0x24f894
            }), _0x42786a && this[_0x4dcafb(287)][_0x4dcafb(361)](_0x42786a);
        } finally {
            _0x53a012();
        }
        return _0x273481;
    }
    [_0x26d44d(444)](_0x12d285) {
        const _0x3732c3 = _0x26d44d;
        let _0x5b2c15 = ![];
        for (const _0x2f7e91 of this[_0x3732c3(356)]()) {
            const _0x3bc5ee = _0x2f7e91 === this[_0x3732c3(333)]();
            if (_0x3bc5ee || _0x2f7e91[_0x3732c3(445)]())
                for (const _0x337920 of _0x2f7e91['getPanes']()) {
                    const _0x263f02 = _0x337920['getActiveItem'](), _0x318d38 = _0x263f02 != null && (_0x263f02 === _0x12d285 || typeof _0x263f02['getURI'] === 'function' && _0x263f02[_0x3732c3(358)]() === _0x12d285);
                    _0x318d38 && (_0x5b2c15 = !![], _0x3bc5ee ? _0x337920[_0x3732c3(446)](_0x263f02) : _0x2f7e91[_0x3732c3(444)]());
                }
        }
        return _0x5b2c15;
    }
    [_0x26d44d(447)](_0x39260e) {
        const _0xd668e3 = _0x26d44d;
        return this[_0xd668e3(444)](_0x39260e) ? Promise['resolve']() : this['open'](_0x39260e, { 'searchAllPanes': !![] });
    }
    [_0x26d44d(448)]() {
        const _0xd83ecf = _0x26d44d;
        return this[_0xd83ecf(449)](path[_0xd83ecf(375)](process['resourcesPath'], _0xd83ecf(450)));
    }
    ['openSync'](_0x373083 = '', _0x2e7236 = {}) {
        const _0x558e6f = _0x26d44d, {
                initialLine: _0xd8fd5,
                initialColumn: _0x1d0ccc
            } = _0x2e7236, _0x4509ea = _0x2e7236[_0x558e6f(437)] != null ? _0x2e7236[_0x558e6f(437)] : !![], _0xbd5c1c = _0x2e7236[_0x558e6f(436)] != null ? _0x2e7236[_0x558e6f(436)] : !![], _0x5d6102 = this[_0x558e6f(258)][_0x558e6f(451)](_0x373083);
        let _0x59d480 = this[_0x558e6f(400)]()[_0x558e6f(423)](_0x5d6102);
        if (_0x5d6102 && _0x59d480 == null)
            for (const _0x57bd29 of this[_0x558e6f(452)]()) {
                _0x59d480 = _0x57bd29(_0x5d6102, _0x2e7236);
                if (_0x59d480)
                    break;
            }
        return _0x59d480 == null && (_0x59d480 = this[_0x558e6f(258)][_0x558e6f(453)](_0x5d6102, {
            'initialLine': _0xd8fd5,
            'initialColumn': _0x1d0ccc
        })), _0xbd5c1c && this['getActivePane']()[_0x558e6f(436)](_0x59d480), this[_0x558e6f(434)](_0x59d480), _0x4509ea && this['getActivePane']()[_0x558e6f(355)](), _0x59d480;
    }
    [_0x26d44d(454)](_0x50a368, _0x2b5015) {
        const _0x3dcb94 = _0x26d44d;
        return this[_0x3dcb94(449)](_0x50a368, { 'pane': _0x2b5015 });
    }
    async _0x26d44d(425)(_0x14e042, _0x2027ff) {
        const _0xe75b74 = _0x26d44d;
        if (_0x14e042 != null)
            for (const _0x1955b7 of this[_0xe75b74(452)]()) {
                const _0x39a755 = _0x1955b7(_0x14e042, _0x2027ff);
                if (_0x39a755 != null)
                    return _0x39a755;
            }
        try {
            const _0x35b37f = await this[_0xe75b74(455)](_0x14e042, _0x2027ff);
            return _0x35b37f;
        } catch (_0x4a6937) {
            switch (_0x4a6937['code']) {
            case _0xe75b74(456):
                return Promise[_0xe75b74(424)]();
            case 'EACCES':
                this[_0xe75b74(259)]['addWarning'](_0xe75b74(457) + _0x4a6937[_0xe75b74(234)] + '\'');
                return Promise['resolve']();
            case _0xe75b74(458):
            case _0xe75b74(459):
            case 'ENXIO':
            case _0xe75b74(460):
            case _0xe75b74(461):
            case _0xe75b74(462):
            case _0xe75b74(463):
            case _0xe75b74(464):
            case _0xe75b74(465):
            case _0xe75b74(466):
            case _0xe75b74(467):
                this[_0xe75b74(259)][_0xe75b74(468)](_0xe75b74(469) + (_0x4a6937[_0xe75b74(234)] != null ? _0x4a6937[_0xe75b74(234)] : _0x14e042) + '\'', { 'detail': _0x4a6937[_0xe75b74(470)] });
                return Promise[_0xe75b74(424)]();
            default:
                throw _0x4a6937;
            }
        }
    }
    async _0x26d44d(455)(_0x5bfa43, _0x4fd028) {
        const _0x5312f7 = _0x26d44d, _0x463319 = this[_0x5312f7(258)]['resolvePath'](_0x5bfa43);
        if (_0x463319 != null)
            try {
                fs[_0x5312f7(471)](fs[_0x5312f7(453)](_0x463319, 'r'));
            } catch (_0x3c6a21) {
                if (_0x3c6a21[_0x5312f7(472)] !== _0x5312f7(473))
                    throw _0x3c6a21;
            }
        const _0x437cad = fs[_0x5312f7(474)](_0x463319);
        _0x437cad >= this['config'][_0x5312f7(405)](_0x5312f7(475)) * 1048576 && await new Promise((_0x613b3, _0x29fac5) => {
            const _0x2ea36b = _0x5312f7;
            this[_0x2ea36b(261)][_0x2ea36b(476)]({
                'message': _0x2ea36b(477),
                'detail': 'Do you still want to load this file?',
                'buttons': [
                    _0x2ea36b(478),
                    'Cancel'
                ]
            }, _0x1cab4b => {
                if (_0x1cab4b === 1) {
                    const _0xca926a = new Error();
                    _0xca926a['code'] = 'CANCELLED', _0x29fac5(_0xca926a);
                } else
                    _0x613b3();
            });
        });
        const _0x35519b = await this[_0x5312f7(258)][_0x5312f7(479)](_0x463319, _0x4fd028);
        return this[_0x5312f7(264)][_0x5312f7(480)](Object['assign']({
            'buffer': _0x35519b,
            'autoHeight': ![]
        }, _0x4fd028));
    }
    ['handleGrammarUsed'](_0x207b7a) {
        const _0x5ddc23 = _0x26d44d;
        if (_0x207b7a == null)
            return;
        this[_0x5ddc23(275)][_0x5ddc23(481)](_0x207b7a[_0x5ddc23(482)] + _0x5ddc23(483)), this['packageManager'][_0x5ddc23(481)](_0x207b7a[_0x5ddc23(484)] + ':grammar-used');
    }
    [_0x26d44d(485)](_0x51015e) {
        return _0x51015e instanceof TextEditor;
    }
    [_0x26d44d(486)](_0x4cbe02) {
        const _0x2d647a = _0x26d44d, _0x547b57 = this[_0x2d647a(264)]['build'](_0x4cbe02), _0x1dc628 = this[_0x2d647a(264)][_0x2d647a(346)](_0x547b57);
        return _0x547b57[_0x2d647a(487)](() => _0x1dc628['dispose']()), _0x547b57;
    }
    [_0x26d44d(488)]() {
        const _0x130ac9 = _0x26d44d, _0x3b1854 = this[_0x130ac9(270)][_0x130ac9(489)]();
        return _0x3b1854 ? this[_0x130ac9(449)](_0x3b1854) : Promise[_0x130ac9(424)]();
    }
    [_0x26d44d(490)](_0x23b2ab) {
        const _0x5c5f5f = _0x26d44d;
        return this[_0x5c5f5f(269)][_0x5c5f5f(320)](_0x23b2ab), new Disposable(() => {
            const _0x4bf27b = _0x5c5f5f;
            _[_0x4bf27b(491)](this['openers'], _0x23b2ab);
        });
    }
    ['getOpeners']() {
        const _0x22098c = _0x26d44d;
        return this[_0x22098c(269)];
    }
    [_0x26d44d(492)]() {
        const _0x1436a8 = _0x26d44d;
        return _['flatten'](this[_0x1436a8(356)]()[_0x1436a8(386)](_0x3bea0c => _0x3bea0c['getPaneItems']()));
    }
    ['getActivePaneItem']() {
        const _0x448f6f = _0x26d44d;
        return this[_0x448f6f(326)]()['getActivePaneItem']();
    }
    [_0x26d44d(322)]() {
        const _0x1df2b2 = _0x26d44d;
        return this['getPaneItems']()[_0x1df2b2(493)](_0x16b576 => _0x16b576 instanceof TextEditor);
    }
    [_0x26d44d(392)]() {
        const _0xf2aab9 = this['getCenter']()['getActivePaneItem']();
        if (_0xf2aab9 instanceof TextEditor)
            return _0xf2aab9;
    }
    [_0x26d44d(494)]() {
        this['getPaneContainers']()['forEach'](_0x5b99a0 => {
            const _0x3ab404 = _0x4039;
            _0x5b99a0[_0x3ab404(494)]();
        });
    }
    [_0x26d44d(495)](_0x841f01) {
        const _0x2ff066 = _0x26d44d;
        return Promise[_0x2ff066(496)](this[_0x2ff066(356)]()[_0x2ff066(386)](_0x230708 => _0x230708[_0x2ff066(495)](_0x841f01)))[_0x2ff066(497)](_0x4c5cfc => !_0x4c5cfc[_0x2ff066(422)](![]));
    }
    [_0x26d44d(498)]() {
        const _0x3de678 = _0x26d44d;
        return this[_0x3de678(333)]()[_0x3de678(400)]()['saveActiveItem']();
    }
    [_0x26d44d(499)]() {
        const _0x527379 = _0x26d44d;
        this[_0x527379(333)]()[_0x527379(400)]()[_0x527379(500)]();
    }
    ['destroyActivePaneItem']() {
        const _0x55d464 = _0x26d44d;
        return this[_0x55d464(400)]()[_0x55d464(501)]();
    }
    [_0x26d44d(326)]() {
        const _0x3a2af6 = _0x26d44d;
        return this[_0x3a2af6(327)];
    }
    [_0x26d44d(502)]() {
        const _0x4cab33 = _0x26d44d;
        return _['flatten'](this[_0x4cab33(356)]()['map'](_0x326e50 => _0x326e50[_0x4cab33(502)]()));
    }
    [_0x26d44d(503)]() {
        const _0x31f665 = _0x26d44d;
        return _['flatten'](this[_0x31f665(504)]()[_0x31f665(386)](_0x300b3d => _0x300b3d['getPanes']()));
    }
    ['getActivePane']() {
        const _0x2aabb3 = _0x26d44d;
        return this[_0x2aabb3(326)]()[_0x2aabb3(400)]();
    }
    [_0x26d44d(505)]() {
        const _0x5373e5 = _0x26d44d;
        return this[_0x5373e5(326)]()[_0x5373e5(505)]();
    }
    [_0x26d44d(506)]() {
        const _0x26da92 = _0x26d44d;
        return this[_0x26da92(326)]()[_0x26da92(506)]();
    }
    [_0x26d44d(417)](_0x501ac6) {
        return this['getPaneContainers']()['find'](_0x14c043 => _0x14c043['paneForURI'](_0x501ac6));
    }
    [_0x26d44d(507)](_0x3a8415) {
        const _0x283361 = _0x26d44d;
        return this[_0x283361(356)]()[_0x283361(368)](_0x42e318 => _0x42e318[_0x283361(508)](_0x3a8415));
    }
    [_0x26d44d(416)](_0x37c2d0) {
        const _0xa98cdf = _0x26d44d;
        for (let _0x9b9361 of this[_0xa98cdf(356)]()) {
            const _0x5cda43 = _0x9b9361[_0xa98cdf(416)](_0x37c2d0);
            if (_0x5cda43 != null)
                return _0x5cda43;
        }
    }
    [_0x26d44d(508)](_0x48a3da) {
        const _0x37956d = _0x26d44d;
        for (let _0x592e8a of this['getPaneContainers']()) {
            const _0x29063b = _0x592e8a[_0x37956d(508)](_0x48a3da);
            if (_0x29063b != null)
                return _0x29063b;
        }
    }
    ['destroyActivePane']() {
        const _0x53c3a3 = _0x26d44d, _0x476836 = this[_0x53c3a3(400)]();
        _0x476836 != null && _0x476836[_0x53c3a3(295)]();
    }
    [_0x26d44d(509)]() {
        const _0x5637b4 = _0x26d44d;
        if (this[_0x5637b4(333)]()['getActivePaneItem']() != null)
            this[_0x5637b4(333)]()['getActivePane']()[_0x5637b4(501)]();
        else {
            if (this['getCenter']()[_0x5637b4(502)]()['length'] > 1)
                this[_0x5637b4(333)]()['destroyActivePane']();
            else
                this[_0x5637b4(257)]['get'](_0x5637b4(510)) && atom[_0x5637b4(511)]();
        }
    }
    ['increaseFontSize']() {
        const _0x5ca4fd = _0x26d44d;
        this[_0x5ca4fd(257)][_0x5ca4fd(406)]('editor.fontSize', this['config'][_0x5ca4fd(405)](_0x5ca4fd(512)) + 1);
    }
    [_0x26d44d(513)]() {
        const _0x43e8d7 = _0x26d44d, _0x4e2ae3 = this['config'][_0x43e8d7(405)](_0x43e8d7(512));
        _0x4e2ae3 > 1 && this[_0x43e8d7(257)][_0x43e8d7(406)](_0x43e8d7(512), _0x4e2ae3 - 1);
    }
    [_0x26d44d(514)]() {
        const _0x33a004 = _0x26d44d;
        this[_0x33a004(257)][_0x33a004(406)](_0x33a004(512), this['config']['get'](_0x33a004(515)));
    }
    [_0x26d44d(434)](_0x204d3e) {
        const _0x37b66c = _0x26d44d;
        let _0x43c29f;
        if (typeof _0x204d3e[_0x37b66c(358)] === _0x37b66c(337))
            _0x43c29f = _0x204d3e[_0x37b66c(358)]();
        else
            typeof _0x204d3e[_0x37b66c(516)] === _0x37b66c(337) && (_0x43c29f = _0x204d3e[_0x37b66c(516)]());
        _0x43c29f != null && _[_0x37b66c(491)](this[_0x37b66c(270)], _0x43c29f);
    }
    [_0x26d44d(252)]({item: _0x64af13}) {
        const _0x527b49 = _0x26d44d;
        let _0x2ea062;
        if (typeof _0x64af13['getURI'] === _0x527b49(337))
            _0x2ea062 = _0x64af13[_0x527b49(358)]();
        else
            typeof _0x64af13[_0x527b49(516)] === _0x527b49(337) && (_0x2ea062 = _0x64af13['getUri']());
        _0x2ea062 != null && this[_0x527b49(270)][_0x527b49(320)](_0x2ea062);
    }
    [_0x26d44d(517)]() {
        const _0x16c234 = _0x26d44d;
        this[_0x16c234(276)][_0x16c234(279)][_0x16c234(295)](), this[_0x16c234(276)][_0x16c234(246)][_0x16c234(295)](), this[_0x16c234(276)][_0x16c234(247)][_0x16c234(295)](), this[_0x16c234(276)]['bottom'][_0x16c234(295)](), this[_0x16c234(343)]();
        this[_0x16c234(335)] != null && this['activeItemSubscriptions']['dispose']();
        if (this[_0x16c234(291)])
            this[_0x16c234(291)][_0x16c234(295)]();
    }
    ['getCenter']() {
        const _0x3c6fcb = _0x26d44d;
        return this[_0x3c6fcb(276)]['center'];
    }
    [_0x26d44d(351)]() {
        const _0x28d5fa = _0x26d44d;
        return this[_0x28d5fa(276)][_0x28d5fa(246)];
    }
    [_0x26d44d(518)]() {
        const _0x5177a6 = _0x26d44d;
        return this[_0x5177a6(276)][_0x5177a6(247)];
    }
    [_0x26d44d(352)]() {
        const _0x357ff0 = _0x26d44d;
        return this[_0x357ff0(276)][_0x357ff0(283)];
    }
    ['getPaneContainers']() {
        const _0x3aa390 = _0x26d44d;
        return [
            this[_0x3aa390(276)][_0x3aa390(279)],
            this['paneContainers']['left'],
            this[_0x3aa390(276)]['right'],
            this['paneContainers'][_0x3aa390(283)]
        ];
    }
    [_0x26d44d(504)]() {
        const _0x2bdf2a = _0x26d44d, _0x37e2c1 = this[_0x2bdf2a(333)]();
        return atom['workspace']['getPaneContainers']()[_0x2bdf2a(493)](_0x14f26c => _0x14f26c === _0x37e2c1 || _0x14f26c[_0x2bdf2a(445)]());
    }
    [_0x26d44d(519)]() {
        const _0x22b45b = _0x26d44d;
        return this[_0x22b45b(520)](_0x22b45b(283));
    }
    [_0x26d44d(521)](_0x591cc8) {
        const _0xf5215 = _0x26d44d;
        return this[_0xf5215(522)](_0xf5215(283), _0x591cc8);
    }
    [_0x26d44d(523)]() {
        const _0x589a2f = _0x26d44d;
        return this['getPanels'](_0x589a2f(246));
    }
    [_0x26d44d(524)](_0x2b2ce8) {
        const _0x44fc76 = _0x26d44d;
        return this[_0x44fc76(522)](_0x44fc76(246), _0x2b2ce8);
    }
    [_0x26d44d(525)]() {
        const _0x188b4c = _0x26d44d;
        return this[_0x188b4c(520)](_0x188b4c(247));
    }
    ['addRightPanel'](_0x21cc54) {
        const _0x3f65a8 = _0x26d44d;
        return this[_0x3f65a8(522)](_0x3f65a8(247), _0x21cc54);
    }
    ['getTopPanels']() {
        const _0x1e0f0c = _0x26d44d;
        return this[_0x1e0f0c(520)]('top');
    }
    [_0x26d44d(526)](_0x4e5359) {
        const _0x17298c = _0x26d44d;
        return this[_0x17298c(522)]('top', _0x4e5359);
    }
    ['getHeaderPanels']() {
        const _0x4bfafb = _0x26d44d;
        return this[_0x4bfafb(520)](_0x4bfafb(284));
    }
    [_0x26d44d(527)](_0x4526f9) {
        const _0x17e2c5 = _0x26d44d;
        return this[_0x17e2c5(522)]('header', _0x4526f9);
    }
    [_0x26d44d(528)]() {
        const _0x4451fb = _0x26d44d;
        return this[_0x4451fb(520)]('footer');
    }
    [_0x26d44d(529)](_0x20cac9) {
        const _0x460da1 = _0x26d44d;
        return this[_0x460da1(522)](_0x460da1(285), _0x20cac9);
    }
    ['getModalPanels']() {
        const _0x461534 = _0x26d44d;
        return this['getPanels'](_0x461534(286));
    }
    [_0x26d44d(530)](_0x12c37c = {}) {
        const _0x3dc280 = _0x26d44d;
        return this[_0x3dc280(522)]('modal', _0x12c37c);
    }
    [_0x26d44d(531)](_0x4beb6f) {
        const _0x19c7bf = _0x26d44d;
        for (let _0x5da2e9 in this['panelContainers']) {
            const _0x147aba = this[_0x19c7bf(281)][_0x5da2e9], _0xb818fb = _0x147aba[_0x19c7bf(531)](_0x4beb6f);
            if (_0xb818fb != null)
                return _0xb818fb;
        }
        return null;
    }
    [_0x26d44d(520)](_0x304258) {
        const _0x4c6e43 = _0x26d44d;
        return this[_0x4c6e43(281)][_0x304258][_0x4c6e43(520)]();
    }
    [_0x26d44d(522)](_0x1b8a97, _0x2e3ffe) {
        const _0xb627c6 = _0x26d44d;
        return _0x2e3ffe == null && (_0x2e3ffe = {}), this[_0xb627c6(281)][_0x1b8a97][_0xb627c6(522)](new Panel(_0x2e3ffe, this[_0xb627c6(282)]));
    }
    [_0x26d44d(532)](_0x539aca, _0x170630 = {}, _0x706a8e) {
        const _0x2d55a7 = _0x26d44d;
        _['isFunction'](_0x170630) && (_0x706a8e = _0x170630, _0x170630 = {});
        const _0xb74881 = new Map();
        for (const _0x532362 of this[_0x2d55a7(258)][_0x2d55a7(533)]()) {
            let _0x216d1f = _0x170630['ripgrep'] ? this['ripgrepDirectorySearcher'] : this['scandalDirectorySearcher'];
            for (const _0xa8b221 of this[_0x2d55a7(306)]) {
                if (_0xa8b221[_0x2d55a7(534)](_0x532362)) {
                    _0x216d1f = _0xa8b221;
                    break;
                }
            }
            let _0x5c393d = _0xb74881[_0x2d55a7(405)](_0x216d1f);
            !_0x5c393d && (_0x5c393d = [], _0xb74881[_0x2d55a7(406)](_0x216d1f, _0x5c393d)), _0x5c393d[_0x2d55a7(320)](_0x532362);
        }
        let _0x1a92c1;
        if (_[_0x2d55a7(535)](_0x170630[_0x2d55a7(536)])) {
            const _0x12bf67 = _0x170630[_0x2d55a7(536)];
            let _0xe3397a = 0;
            const _0xd709a5 = new Map();
            _0x1a92c1 = function (_0x182c9e, _0x2d9cc1) {
                const _0x323b8b = _0x2d55a7, _0x183e46 = _0xd709a5[_0x323b8b(405)](_0x182c9e);
                return _0x183e46 && (_0xe3397a -= _0x183e46), _0xd709a5[_0x323b8b(406)](_0x182c9e, _0x2d9cc1), _0xe3397a += _0x2d9cc1, _0x12bf67(_0xe3397a);
            };
        } else
            _0x1a92c1 = function () {
            };
        const _0x53345b = [];
        _0xb74881[_0x2d55a7(297)]((_0x309a76, _0x8828a6) => {
            const _0x8aed3a = _0x2d55a7, _0x2dc0c0 = {
                    'inclusions': _0x170630[_0x8aed3a(537)] || [],
                    'includeHidden': !![],
                    'excludeVcsIgnores': this[_0x8aed3a(257)][_0x8aed3a(405)](_0x8aed3a(538)),
                    'exclusions': this[_0x8aed3a(257)][_0x8aed3a(405)](_0x8aed3a(539)),
                    'follow': this[_0x8aed3a(257)]['get']('core.followSymlinks'),
                    'leadingContextLineCount': _0x170630['leadingContextLineCount'] || 0,
                    'trailingContextLineCount': _0x170630[_0x8aed3a(540)] || 0,
                    'PCRE2': _0x170630['PCRE2'],
                    'didMatch': _0x5b2db0 => {
                        const _0x57da7f = _0x8aed3a;
                        if (!this[_0x57da7f(258)][_0x57da7f(541)](_0x5b2db0[_0x57da7f(542)]))
                            return _0x706a8e(_0x5b2db0);
                    },
                    'didError'(_0x4735c5) {
                        return _0x706a8e(null, _0x4735c5);
                    },
                    'didSearchPaths'(_0x48085c) {
                        return _0x1a92c1(_0x8828a6, _0x48085c);
                    }
                }, _0x3015b = _0x8828a6[_0x8aed3a(543)](_0x309a76, _0x539aca, _0x2dc0c0);
            _0x53345b[_0x8aed3a(320)](_0x3015b);
        });
        const _0xd5cceb = Promise[_0x2d55a7(496)](_0x53345b);
        for (let _0x167d5d of this['project'][_0x2d55a7(544)]()) {
            if (_0x167d5d[_0x2d55a7(379)]()) {
                const _0x5df12b = _0x167d5d[_0x2d55a7(365)]();
                if (!this[_0x2d55a7(258)][_0x2d55a7(354)](_0x5df12b))
                    continue;
                var _0x5210ca = [];
                _0x167d5d[_0x2d55a7(532)](_0x539aca, _0x89c420 => _0x5210ca['push'](_0x89c420)), _0x5210ca[_0x2d55a7(545)] > 0 && _0x706a8e({
                    'filePath': _0x5df12b,
                    'matches': _0x5210ca
                });
            }
        }
        let _0x3840b8 = ![];
        const _0x3da6ae = new Promise((_0x46ac42, _0x42dba2) => {
            const _0x245190 = _0x2d55a7, _0x32cf06 = function () {
                    const _0x463fd6 = _0x4039;
                    _0x3840b8 ? _0x46ac42(_0x463fd6(546)) : _0x46ac42(null);
                }, _0x2e4bbf = function (_0x63e777) {
                    const _0x5b8368 = _0x4039;
                    for (let _0x4790f9 of _0x53345b) {
                        _0x4790f9[_0x5b8368(547)]();
                    }
                    _0x42dba2(_0x63e777);
                };
            _0xd5cceb[_0x245190(497)](_0x32cf06, _0x2e4bbf);
        });
        return _0x3da6ae[_0x2d55a7(547)] = () => {
            const _0x25a944 = _0x2d55a7;
            _0x3840b8 = !![], _0x53345b[_0x25a944(386)](_0x38f467 => _0x38f467[_0x25a944(547)]());
        }, _0x3da6ae;
    }
    [_0x26d44d(548)](_0x33ea14, _0x372764, _0x17da56, _0x1dcc51) {
        return new Promise((_0x5c0612, _0x272650) => {
            const _0x44a917 = _0x4039;
            let _0x21e0d8;
            const _0x251532 = this[_0x44a917(258)][_0x44a917(544)]()[_0x44a917(386)](_0x302aa9 => _0x302aa9[_0x44a917(365)]()), _0xf2b9d2 = _[_0x44a917(549)](_0x17da56, _0x251532);
            let _0x1cc97f = !_0x251532['length'], _0x4390ab = !_0xf2b9d2[_0x44a917(545)];
            const _0x5a549c = () => {
                _0x4390ab && _0x1cc97f && _0x5c0612();
            };
            if (!_0x4390ab['length']) {
                let _0x50ca06 = 'g';
                _0x33ea14[_0x44a917(550)] && (_0x50ca06 += 'm');
                _0x33ea14['ignoreCase'] && (_0x50ca06 += 'i');
                const _0x3faef9 = Task[_0x44a917(551)](require[_0x44a917(424)](_0x44a917(552)), _0xf2b9d2, _0x33ea14['source'], _0x50ca06, _0x372764, () => {
                    _0x4390ab = !![], _0x5a549c();
                });
                _0x3faef9['on'](_0x44a917(553), _0x1dcc51), _0x3faef9['on'](_0x44a917(554), _0x4dca75 => {
                    _0x1dcc51(null, _0x4dca75);
                });
            }
            for (_0x21e0d8 of this['project'][_0x44a917(544)]()) {
                if (!_0x17da56['includes'](_0x21e0d8[_0x44a917(365)]()))
                    continue;
                const _0xeed95 = _0x21e0d8[_0x44a917(548)](_0x33ea14, _0x372764, _0x1dcc51);
                _0xeed95 && _0x1dcc51({
                    'filePath': _0x21e0d8[_0x44a917(365)](),
                    'replacements': _0xeed95
                });
            }
            _0x1cc97f = !![], _0x5a549c();
        });
    }
    [_0x26d44d(555)](_0x1dff9a) {
        const _0x1b9d54 = _0x26d44d;
        if (_0x1dff9a[_0x1b9d54(365)]()) {
            const _0x75d513 = async () => {
                const _0x5d0e4a = _0x1b9d54, _0x5d4766 = await this[_0x5d0e4a(258)][_0x5d0e4a(556)](new Directory(_0x1dff9a['getDirectoryPath']()));
                if (_0x5d4766)
                    _0x5d4766[_0x5d0e4a(557)](_0x1dff9a);
            };
            this[_0x1b9d54(257)][_0x1b9d54(405)]('editor.confirmCheckoutHeadRevision') ? this['applicationDelegate'][_0x1b9d54(476)]({
                'message': _0x1b9d54(558),
                'detail': 'Are you sure you want to discard all changes to "' + _0x1dff9a[_0x1b9d54(559)]() + _0x1b9d54(560),
                'buttons': [
                    'OK',
                    _0x1b9d54(561)
                ]
            }, _0x178b73 => {
                if (_0x178b73 === 0)
                    _0x75d513();
            }) : _0x75d513();
        }
    }
};