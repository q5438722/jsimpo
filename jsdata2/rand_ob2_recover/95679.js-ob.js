(function (_0x1956d3) {
    var _0x548e36 = _0x48de;
    function _0xdb3aa9(_0x4d218c) {
        return function () {
            var _0x16fba6 = _0x48de, _0x56071a = this['element'][_0x16fba6(338)]();
            _0x4d218c[_0x16fba6(339)](this, arguments), this['_refresh'](), _0x56071a !== this[_0x16fba6(340)]['val']() && this['_trigger'](_0x16fba6(341));
        };
    }
    _0x1956d3[_0x548e36(342)](_0x548e36(343), {
        'version': _0x548e36(344),
        'defaultElement': '<input>',
        'widgetEventPrefix': _0x548e36(345),
        'options': {
            'culture': null,
            'incremental': !![],
            'max': null,
            'min': null,
            'numberFormat': null,
            'page': 10,
            'step': 1,
            'change': null,
            'spin': null,
            'start': null,
            'stop': null
        },
        '_create': function () {
            var _0x502635 = _0x548e36;
            this[_0x502635(346)](_0x502635(347), this[_0x502635(348)][_0x502635(347)]), this[_0x502635(346)](_0x502635(349), this[_0x502635(348)][_0x502635(349)]), this[_0x502635(346)](_0x502635(350), this[_0x502635(348)][_0x502635(350)]), this[_0x502635(351)](this['element'][_0x502635(338)](), !![]), this[_0x502635(352)](), this[_0x502635(353)](this[_0x502635(354)]), this[_0x502635(355)](), this[_0x502635(353)](this[_0x502635(356)], {
                'beforeunload': function () {
                    var _0x1be58d = _0x502635;
                    this['element'][_0x1be58d(357)]('autocomplete');
                }
            });
        },
        '_getCreateOptions': function () {
            var _0x5959da = _0x548e36, _0x2b7e6e = {}, _0x5c8e61 = this[_0x5959da(340)];
            return _0x1956d3['each']([
                _0x5959da(349),
                'max',
                'step'
            ], function (_0x1af038, _0x4c1e8c) {
                var _0x463d94 = _0x5959da, _0x75019 = _0x5c8e61[_0x463d94(358)](_0x4c1e8c);
                _0x75019 !== undefined && _0x75019[_0x463d94(359)] && (_0x2b7e6e[_0x4c1e8c] = _0x75019);
            }), _0x2b7e6e;
        },
        '_events': {
            'keydown': function (_0x5c206b) {
                var _0x279a82 = _0x548e36;
                this[_0x279a82(360)](_0x5c206b) && this[_0x279a82(361)](_0x5c206b) && _0x5c206b[_0x279a82(362)]();
            },
            'keyup': _0x548e36(363),
            'focus': function () {
                var _0x3e0229 = _0x548e36;
                this['uiSpinner']['addClass'](_0x3e0229(364)), this[_0x3e0229(365)] = this[_0x3e0229(340)][_0x3e0229(338)]();
            },
            'blur': function (_0x2a078c) {
                var _0xd7a7eb = _0x548e36;
                if (this[_0xd7a7eb(366)]) {
                    delete this[_0xd7a7eb(366)];
                    return;
                }
                this[_0xd7a7eb(355)](), this[_0xd7a7eb(367)][_0xd7a7eb(368)](_0xd7a7eb(364)), this[_0xd7a7eb(365)] !== this['element'][_0xd7a7eb(338)]() && this[_0xd7a7eb(369)](_0xd7a7eb(341), _0x2a078c);
            },
            'mousewheel': function (_0x925d26, _0x3b2dc7) {
                var _0x1f753a = _0x548e36;
                if (!_0x3b2dc7)
                    return;
                if (!this[_0x1f753a(370)] && !this[_0x1f753a(360)](_0x925d26))
                    return ![];
                this[_0x1f753a(371)]((_0x3b2dc7 > 0 ? 1 : -1) * this[_0x1f753a(348)][_0x1f753a(350)], _0x925d26), clearTimeout(this[_0x1f753a(372)]), this[_0x1f753a(372)] = this[_0x1f753a(373)](function () {
                    var _0x309077 = _0x1f753a;
                    this[_0x309077(370)] && this[_0x309077(363)](_0x925d26);
                }, 100), _0x925d26[_0x1f753a(362)]();
            },
            'mousedown .ui-spinner-button': function (_0x392b4a) {
                var _0x1ae3c3 = _0x548e36, _0x11770b;
                _0x11770b = this[_0x1ae3c3(340)][0] === this['document'][0][_0x1ae3c3(374)] ? this[_0x1ae3c3(365)] : this[_0x1ae3c3(340)][_0x1ae3c3(338)]();
                function _0x34a49d() {
                    var _0x24d776 = _0x1ae3c3, _0xef0ae6 = this[_0x24d776(340)][0] === this[_0x24d776(375)][0]['activeElement'];
                    !_0xef0ae6 && (this[_0x24d776(340)]['focus'](), this[_0x24d776(365)] = _0x11770b, this[_0x24d776(373)](function () {
                        this['previous'] = _0x11770b;
                    }));
                }
                _0x392b4a[_0x1ae3c3(362)](), _0x34a49d['call'](this), this[_0x1ae3c3(366)] = !![], this[_0x1ae3c3(373)](function () {
                    var _0x23476a = _0x1ae3c3;
                    delete this[_0x23476a(366)], _0x34a49d[_0x23476a(376)](this);
                });
                if (this['_start'](_0x392b4a) === ![])
                    return;
                this['_repeat'](null, _0x1956d3(_0x392b4a[_0x1ae3c3(377)])[_0x1ae3c3(378)](_0x1ae3c3(379)) ? 1 : -1, _0x392b4a);
            },
            'mouseup .ui-spinner-button': _0x548e36(363),
            'mouseenter .ui-spinner-button': function (_0x1bfd10) {
                var _0x1f041c = _0x548e36;
                if (!_0x1956d3(_0x1bfd10[_0x1f041c(377)])[_0x1f041c(378)](_0x1f041c(364)))
                    return;
                if (this['_start'](_0x1bfd10) === ![])
                    return ![];
                this[_0x1f041c(380)](null, _0x1956d3(_0x1bfd10[_0x1f041c(377)])[_0x1f041c(378)](_0x1f041c(379)) ? 1 : -1, _0x1bfd10);
            },
            'mouseleave .ui-spinner-button': '_stop'
        },
        '_draw': function () {
            var _0x5c03d3 = _0x548e36, _0x2748ec = this[_0x5c03d3(367)] = this[_0x5c03d3(340)][_0x5c03d3(381)](_0x5c03d3(382))[_0x5c03d3(358)](_0x5c03d3(383), _0x5c03d3(384))[_0x5c03d3(385)](this[_0x5c03d3(386)]())[_0x5c03d3(387)]()[_0x5c03d3(388)](this[_0x5c03d3(389)]());
            this[_0x5c03d3(390)](_0x2748ec), this[_0x5c03d3(340)][_0x5c03d3(358)](_0x5c03d3(391), _0x5c03d3(392)), this['buttons'] = _0x2748ec[_0x5c03d3(393)]('.ui-spinner-button')[_0x5c03d3(358)]('tabIndex', -1)[_0x5c03d3(394)]()[_0x5c03d3(368)](_0x5c03d3(395)), this[_0x5c03d3(396)][_0x5c03d3(397)]() > Math[_0x5c03d3(398)](_0x2748ec['height']() * 0.5) && _0x2748ec['height']() > 0 && _0x2748ec[_0x5c03d3(397)](_0x2748ec['height']()), this[_0x5c03d3(348)][_0x5c03d3(399)] && this[_0x5c03d3(400)]();
        },
        '_keydown': function (_0x3ff3c4) {
            var _0x5b5adc = _0x548e36, _0x52d935 = this['options'], _0x5050fc = _0x1956d3['ui'][_0x5b5adc(401)];
            switch (_0x3ff3c4[_0x5b5adc(401)]) {
            case _0x5050fc['UP']:
                this['_repeat'](null, 1, _0x3ff3c4);
                return !![];
            case _0x5050fc[_0x5b5adc(402)]:
                this[_0x5b5adc(380)](null, -1, _0x3ff3c4);
                return !![];
            case _0x5050fc[_0x5b5adc(403)]:
                this['_repeat'](null, _0x52d935['page'], _0x3ff3c4);
                return !![];
            case _0x5050fc[_0x5b5adc(404)]:
                this['_repeat'](null, -_0x52d935['page'], _0x3ff3c4);
                return !![];
            }
            return ![];
        },
        '_uiSpinnerHtml': function () {
            var _0x31e2c5 = _0x548e36;
            return _0x31e2c5(405);
        },
        '_buttonHtml': function () {
            var _0x1a12bc = _0x548e36;
            return '' + _0x1a12bc(406) + _0x1a12bc(407) + _0x1a12bc(408) + _0x1a12bc(409) + _0x1a12bc(410) + '</a>';
        },
        '_start': function (_0x57fe23) {
            var _0x1c425c = _0x548e36;
            if (!this[_0x1c425c(370)] && this[_0x1c425c(369)]('start', _0x57fe23) === ![])
                return ![];
            return !this[_0x1c425c(411)] && (this[_0x1c425c(411)] = 1), this['spinning'] = !![], !![];
        },
        '_repeat': function (_0x451788, _0x1f8a34, _0x16494d) {
            var _0x56246b = _0x548e36;
            _0x451788 = _0x451788 || 500, clearTimeout(this['timer']), this[_0x56246b(412)] = this[_0x56246b(373)](function () {
                var _0x10f8b1 = _0x56246b;
                this[_0x10f8b1(380)](40, _0x1f8a34, _0x16494d);
            }, _0x451788), this[_0x56246b(371)](_0x1f8a34 * this[_0x56246b(348)]['step'], _0x16494d);
        },
        '_spin': function (_0x2637f4, _0x45f59d) {
            var _0x34a225 = _0x548e36, _0xa93c68 = this[_0x34a225(413)]() || 0;
            !this[_0x34a225(411)] && (this[_0x34a225(411)] = 1), _0xa93c68 = this[_0x34a225(414)](_0xa93c68 + _0x2637f4 * this[_0x34a225(415)](this[_0x34a225(411)])), (!this[_0x34a225(370)] || this['_trigger'](_0x34a225(345), _0x45f59d, { 'value': _0xa93c68 }) !== ![]) && (this[_0x34a225(351)](_0xa93c68), this['counter']++);
        },
        '_increment': function (_0x2bc609) {
            var _0x482549 = _0x548e36, _0x38812d = this['options']['incremental'];
            if (_0x38812d)
                return _0x1956d3[_0x482549(416)](_0x38812d) ? _0x38812d(_0x2bc609) : Math[_0x482549(417)](_0x2bc609 * _0x2bc609 * _0x2bc609 / 50000 - _0x2bc609 * _0x2bc609 / 500 + 17 * _0x2bc609 / 200 + 1);
            return 1;
        },
        '_precision': function () {
            var _0x449745 = _0x548e36, _0x109955 = this[_0x449745(418)](this[_0x449745(348)][_0x449745(350)]);
            return this[_0x449745(348)][_0x449745(349)] !== null && (_0x109955 = Math[_0x449745(347)](_0x109955, this[_0x449745(418)](this[_0x449745(348)][_0x449745(349)]))), _0x109955;
        },
        '_precisionOf': function (_0x1a3f35) {
            var _0x894c46 = _0x548e36, _0x47753b = _0x1a3f35[_0x894c46(419)](), _0x2db35e = _0x47753b[_0x894c46(420)]('.');
            return _0x2db35e === -1 ? 0 : _0x47753b['length'] - _0x2db35e - 1;
        },
        '_adjustValue': function (_0x197b8e) {
            var _0x1ca597 = _0x548e36, _0x405366, _0x553030, _0x11689e = this['options'];
            _0x405366 = _0x11689e[_0x1ca597(349)] !== null ? _0x11689e['min'] : 0, _0x553030 = _0x197b8e - _0x405366, _0x553030 = Math['round'](_0x553030 / _0x11689e[_0x1ca597(350)]) * _0x11689e[_0x1ca597(350)], _0x197b8e = _0x405366 + _0x553030, _0x197b8e = parseFloat(_0x197b8e['toFixed'](this[_0x1ca597(421)]()));
            if (_0x11689e['max'] !== null && _0x197b8e > _0x11689e[_0x1ca597(347)])
                return _0x11689e[_0x1ca597(347)];
            if (_0x11689e[_0x1ca597(349)] !== null && _0x197b8e < _0x11689e['min'])
                return _0x11689e['min'];
            return _0x197b8e;
        },
        '_stop': function (_0x3cebd6) {
            var _0x1d59cf = _0x548e36;
            if (!this[_0x1d59cf(370)])
                return;
            clearTimeout(this[_0x1d59cf(412)]), clearTimeout(this[_0x1d59cf(372)]), this[_0x1d59cf(411)] = 0, this[_0x1d59cf(370)] = ![], this[_0x1d59cf(369)](_0x1d59cf(422), _0x3cebd6);
        },
        '_setOption': function (_0xfd30ab, _0x17d9a1) {
            var _0x1d6f00 = _0x548e36;
            if (_0xfd30ab === 'culture' || _0xfd30ab === 'numberFormat') {
                var _0x1e9d12 = this[_0x1d6f00(423)](this[_0x1d6f00(340)]['val']());
                this[_0x1d6f00(348)][_0xfd30ab] = _0x17d9a1, this[_0x1d6f00(340)][_0x1d6f00(338)](this[_0x1d6f00(424)](_0x1e9d12));
                return;
            }
            (_0xfd30ab === _0x1d6f00(347) || _0xfd30ab === _0x1d6f00(349) || _0xfd30ab === _0x1d6f00(350)) && (typeof _0x17d9a1 === 'string' && (_0x17d9a1 = this[_0x1d6f00(423)](_0x17d9a1))), this['_super'](_0xfd30ab, _0x17d9a1), _0xfd30ab === _0x1d6f00(399) && (_0x17d9a1 ? (this['element'][_0x1d6f00(425)](_0x1d6f00(399), !![]), this[_0x1d6f00(396)]['button']('disable')) : (this['element']['prop'](_0x1d6f00(399), ![]), this[_0x1d6f00(396)]['button'](_0x1d6f00(426))));
        },
        '_setOptions': _0xdb3aa9(function (_0x3736af) {
            var _0x284b61 = _0x548e36;
            this[_0x284b61(427)](_0x3736af), this[_0x284b61(351)](this['element']['val']());
        }),
        '_parse': function (_0x42be61) {
            var _0x3b2c19 = _0x548e36;
            return typeof _0x42be61 === _0x3b2c19(428) && _0x42be61 !== '' && (_0x42be61 = window[_0x3b2c19(429)] && this[_0x3b2c19(348)][_0x3b2c19(430)] ? Globalize['parseFloat'](_0x42be61, 10, this[_0x3b2c19(348)][_0x3b2c19(431)]) : +_0x42be61), _0x42be61 === '' || isNaN(_0x42be61) ? null : _0x42be61;
        },
        '_format': function (_0x99fe21) {
            var _0x446fed = _0x548e36;
            if (_0x99fe21 === '')
                return '';
            return window[_0x446fed(429)] && this[_0x446fed(348)][_0x446fed(430)] ? Globalize[_0x446fed(432)](_0x99fe21, this[_0x446fed(348)][_0x446fed(430)], this[_0x446fed(348)][_0x446fed(431)]) : _0x99fe21;
        },
        '_refresh': function () {
            var _0x17bf8c = _0x548e36;
            this['element']['attr']({
                'aria-valuemin': this[_0x17bf8c(348)][_0x17bf8c(349)],
                'aria-valuemax': this['options'][_0x17bf8c(347)],
                'aria-valuenow': this[_0x17bf8c(423)](this[_0x17bf8c(340)][_0x17bf8c(338)]())
            });
        },
        '_value': function (_0x932220, _0x303441) {
            var _0x3d802e = _0x548e36, _0x61e3b7;
            _0x932220 !== '' && (_0x61e3b7 = this[_0x3d802e(423)](_0x932220), _0x61e3b7 !== null && (!_0x303441 && (_0x61e3b7 = this[_0x3d802e(414)](_0x61e3b7)), _0x932220 = this[_0x3d802e(424)](_0x61e3b7))), this[_0x3d802e(340)][_0x3d802e(338)](_0x932220), this[_0x3d802e(355)]();
        },
        '_destroy': function () {
            var _0x52122d = _0x548e36;
            this[_0x52122d(340)][_0x52122d(368)](_0x52122d(382))['prop']('disabled', ![])['removeAttr'](_0x52122d(383))[_0x52122d(357)]('role')[_0x52122d(357)](_0x52122d(433))[_0x52122d(357)](_0x52122d(434))['removeAttr'](_0x52122d(435)), this['uiSpinner']['replaceWith'](this[_0x52122d(340)]);
        },
        'stepUp': _0xdb3aa9(function (_0x497d04) {
            var _0x24107e = _0x548e36;
            this[_0x24107e(436)](_0x497d04);
        }),
        '_stepUp': function (_0x3b07c5) {
            var _0x14fcdd = _0x548e36;
            this[_0x14fcdd(371)]((_0x3b07c5 || 1) * this[_0x14fcdd(348)][_0x14fcdd(350)]);
        },
        'stepDown': _0xdb3aa9(function (_0x461d04) {
            this['_stepDown'](_0x461d04);
        }),
        '_stepDown': function (_0x54bd6e) {
            var _0x3cfe37 = _0x548e36;
            this[_0x3cfe37(371)]((_0x54bd6e || 1) * -this[_0x3cfe37(348)][_0x3cfe37(350)]);
        },
        'pageUp': _0xdb3aa9(function (_0x1579aa) {
            var _0x2a2a7a = _0x548e36;
            this[_0x2a2a7a(436)]((_0x1579aa || 1) * this[_0x2a2a7a(348)][_0x2a2a7a(437)]);
        }),
        'pageDown': _0xdb3aa9(function (_0x4554ab) {
            var _0x359795 = _0x548e36;
            this['_stepDown']((_0x4554ab || 1) * this[_0x359795(348)][_0x359795(437)]);
        }),
        'value': function (_0x1a2181) {
            var _0x55125e = _0x548e36;
            if (!arguments[_0x55125e(359)])
                return this['_parse'](this[_0x55125e(340)]['val']());
            _0xdb3aa9(this[_0x55125e(351)])[_0x55125e(376)](this, _0x1a2181);
        },
        'widget': function () {
            var _0x517c19 = _0x548e36;
            return this[_0x517c19(367)];
        }
    });
}(jQuery));