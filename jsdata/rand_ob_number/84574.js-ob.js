(function (_0x474b95, _0x459091) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module['exports'] = _0x459091(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('./dom/selector-engine.js'), require('./base-component.js')) : typeof define === 'function' && define['amd'] ? define([
        './dom/data',
        './dom/event-handler',
        './dom/manipulator',
        './dom/selector-engine',
        './base-component'
    ], _0x459091) : (_0x474b95 = typeof globalThis !== 'undefined' ? globalThis : _0x474b95 || self, _0x474b95['Collapse'] = _0x459091(_0x474b95['Data'], _0x474b95['EventHandler'], _0x474b95['Manipulator'], _0x474b95['SelectorEngine'], _0x474b95['Base']));
}(this, function (_0x251eb3, _0x11d3ce, _0x3c603f, _0x1dfb25, _0x3751ad) {
    'use strict';
    function _0x1200a7(_0x15f2b9) {
        return _0x15f2b9 && typeof _0x15f2b9 === 'object' && 'default' in _0x15f2b9 ? _0x15f2b9 : { 'default': _0x15f2b9 };
    }
    var _0x1c648b = _0x1200a7(_0x251eb3), _0x348f05 = _0x1200a7(_0x11d3ce), _0x22fbb4 = _0x1200a7(_0x3c603f), _0xf2580c = _0x1200a7(_0x1dfb25), _0x3596bb = _0x1200a7(_0x3751ad);
    const _0x6ad3ee = _0x2fb452 => {
            if (_0x2fb452 === null || _0x2fb452 === undefined)
                return '' + _0x2fb452;
            return {}['toString']['call'](_0x2fb452)['match'](/\s([a-z]+)/i)[0x2248 + -0x2311 + 0xca]['toLowerCase']();
        }, _0x4a117d = _0x462b7f => {
            let _0x5e949e = _0x462b7f['getAttribute']('data-bs-target');
            if (!_0x5e949e || _0x5e949e === '#') {
                let _0x29afa0 = _0x462b7f['getAttribute']('href');
                if (!_0x29afa0 || !_0x29afa0['includes']('#') && !_0x29afa0['startsWith']('.'))
                    return null;
                _0x29afa0['includes']('#') && !_0x29afa0['startsWith']('#') && (_0x29afa0 = '#' + _0x29afa0['split']('#')[0x25ea + -0x203a + -0x5af]), _0x5e949e = _0x29afa0 && _0x29afa0 !== '#' ? _0x29afa0['trim']() : null;
            }
            return _0x5e949e;
        }, _0x3f229c = _0x4e3bdc => {
            const _0x3bdd18 = _0x4a117d(_0x4e3bdc);
            if (_0x3bdd18)
                return document['querySelector'](_0x3bdd18) ? _0x3bdd18 : null;
            return null;
        }, _0x2790ed = _0x53a3ae => {
            const _0x23ca65 = _0x4a117d(_0x53a3ae);
            return _0x23ca65 ? document['querySelector'](_0x23ca65) : null;
        }, _0x445741 = _0x5cfa48 => {
            if (!_0x5cfa48 || typeof _0x5cfa48 !== 'object')
                return ![];
            return typeof _0x5cfa48['jquery'] !== 'undefined' && (_0x5cfa48 = _0x5cfa48[0x949 * -0x2 + -0x1f7f + -0x7 * -0x727]), typeof _0x5cfa48['nodeType'] !== 'undefined';
        }, _0x3f7b68 = _0x40a3fa => {
            if (_0x445741(_0x40a3fa))
                return _0x40a3fa['jquery'] ? _0x40a3fa[0x26f8 + -0x1059 + -0x169f] : _0x40a3fa;
            if (typeof _0x40a3fa === 'string' && _0x40a3fa['length'] > -0xd43 + -0x8e5 + 0x1628)
                return document['querySelector'](_0x40a3fa);
            return null;
        }, _0x3b3f9f = (_0x3a2ea9, _0x299e1f, _0x288355) => {
            Object['keys'](_0x288355)['forEach'](_0x2378cc => {
                const _0x3f8a7d = _0x288355[_0x2378cc], _0x39d41d = _0x299e1f[_0x2378cc], _0x41ab88 = _0x39d41d && _0x445741(_0x39d41d) ? 'element' : _0x6ad3ee(_0x39d41d);
                if (!new RegExp(_0x3f8a7d)['test'](_0x41ab88))
                    throw new TypeError(_0x3a2ea9['toUpperCase']() + ':\x20Option\x20\x22' + _0x2378cc + '\x22\x20provided\x20type\x20\x22' + _0x41ab88 + '\x22\x20but\x20expected\x20type\x20\x22' + _0x3f8a7d + '\x22.');
            });
        }, _0x54e897 = _0x44ec94 => {
            _0x44ec94['offsetHeight'];
        }, _0x58469e = () => {
            const {jQuery: _0x20f325} = window;
            if (_0x20f325 && !document['body']['hasAttribute']('data-bs-no-jquery'))
                return _0x20f325;
            return null;
        }, _0x5e3840 = [], _0x4bc572 = _0x9af7b1 => {
            document['readyState'] === 'loading' ? (!_0x5e3840['length'] && document['addEventListener']('DOMContentLoaded', () => {
                _0x5e3840['forEach'](_0x5761e3 => _0x5761e3());
            }), _0x5e3840['push'](_0x9af7b1)) : _0x9af7b1();
        }, _0x420add = _0x51ae9d => {
            _0x4bc572(() => {
                const _0x34eb85 = _0x58469e();
                if (_0x34eb85) {
                    const _0x1e5476 = _0x51ae9d['NAME'], _0x59181f = _0x34eb85['fn'][_0x1e5476];
                    _0x34eb85['fn'][_0x1e5476] = _0x51ae9d['jQueryInterface'], _0x34eb85['fn'][_0x1e5476]['Constructor'] = _0x51ae9d, _0x34eb85['fn'][_0x1e5476]['noConflict'] = () => {
                        return _0x34eb85['fn'][_0x1e5476] = _0x59181f, _0x51ae9d['jQueryInterface'];
                    };
                }
            });
        }, _0x1b5a37 = 'collapse', _0x616230 = 'bs.collapse', _0x5b0879 = '.' + _0x616230, _0x452932 = '.data-api', _0x2e518b = {
            'toggle': !![],
            'parent': null
        }, _0x14cbdb = {
            'toggle': 'boolean',
            'parent': '(null|element)'
        }, _0xee76aa = 'show' + _0x5b0879, _0x40882 = 'shown' + _0x5b0879, _0x517a0b = 'hide' + _0x5b0879, _0x30a054 = 'hidden' + _0x5b0879, _0xdaee74 = 'click' + _0x5b0879 + _0x452932, _0x2390ed = 'show', _0x1c39ec = 'collapse', _0x2e961d = 'collapsing', _0x57d81f = 'collapsed', _0x1488bd = 'collapse-horizontal', _0x322618 = 'width', _0x3c6f27 = 'height', _0x1fcc64 = '.show,\x20.collapsing', _0x282fa5 = '[data-bs-toggle=\x22collapse\x22]';
    class _0x4c590f extends _0x3596bb['default'] {
        constructor(_0x26bc53, _0x52ced0) {
            super(_0x26bc53), this['_isTransitioning'] = ![], this['_config'] = this['_getConfig'](_0x52ced0), this['_triggerArray'] = [];
            const _0xa6128b = _0xf2580c['default']['find'](_0x282fa5);
            for (let _0x3247a1 = 0x1871 * -0x1 + -0xeb1 + 0x2722 * 0x1, _0x121de4 = _0xa6128b['length']; _0x3247a1 < _0x121de4; _0x3247a1++) {
                const _0x5ab628 = _0xa6128b[_0x3247a1], _0x18058d = _0x3f229c(_0x5ab628), _0x3771d0 = _0xf2580c['default']['find'](_0x18058d)['filter'](_0x5cca5b => _0x5cca5b === this['_element']);
                _0x18058d !== null && _0x3771d0['length'] && (this['_selector'] = _0x18058d, this['_triggerArray']['push'](_0x5ab628));
            }
            this['_initializeChildren'](), !this['_config']['parent'] && this['_addAriaAndCollapsedClass'](this['_triggerArray'], this['_isShown']()), this['_config']['toggle'] && this['toggle']();
        }
        static get ['Default']() {
            return _0x2e518b;
        }
        static get ['NAME']() {
            return _0x1b5a37;
        }
        ['toggle']() {
            this['_isShown']() ? this['hide']() : this['show']();
        }
        ['show']() {
            if (this['_isTransitioning'] || this['_isShown']())
                return;
            let _0x28f4cb = [], _0x577dcb;
            if (this['_config']['parent']) {
                const _0x1c088b = _0xf2580c['default']['find']('.' + _0x1c39ec + '\x20.' + _0x1c39ec, this['_config']['parent']);
                _0x28f4cb = _0xf2580c['default']['find'](_0x1fcc64, this['_config']['parent'])['filter'](_0x3c86d3 => !_0x1c088b['includes'](_0x3c86d3));
            }
            const _0x1a4a51 = _0xf2580c['default']['findOne'](this['_selector']);
            if (_0x28f4cb['length']) {
                const _0x33634f = _0x28f4cb['find'](_0x1524a9 => _0x1a4a51 !== _0x1524a9);
                _0x577dcb = _0x33634f ? _0x4c590f['getInstance'](_0x33634f) : null;
                if (_0x577dcb && _0x577dcb['_isTransitioning'])
                    return;
            }
            const _0x44af49 = _0x348f05['default']['trigger'](this['_element'], _0xee76aa);
            if (_0x44af49['defaultPrevented'])
                return;
            _0x28f4cb['forEach'](_0x343369 => {
                _0x1a4a51 !== _0x343369 && _0x4c590f['getOrCreateInstance'](_0x343369, { 'toggle': ![] })['hide'](), !_0x577dcb && _0x1c648b['default']['set'](_0x343369, _0x616230, null);
            });
            const _0x1483c3 = this['_getDimension']();
            this['_element']['classList']['remove'](_0x1c39ec), this['_element']['classList']['add'](_0x2e961d), this['_element']['style'][_0x1483c3] = -0x1e95 + 0x1cf * 0x7 + 0x11ec, this['_addAriaAndCollapsedClass'](this['_triggerArray'], !![]), this['_isTransitioning'] = !![];
            const _0x417940 = () => {
                    this['_isTransitioning'] = ![], this['_element']['classList']['remove'](_0x2e961d), this['_element']['classList']['add'](_0x1c39ec, _0x2390ed), this['_element']['style'][_0x1483c3] = '', _0x348f05['default']['trigger'](this['_element'], _0x40882);
                }, _0x2510ba = _0x1483c3[-0x3d * -0x5b + -0x32 * 0x5f + -0x321]['toUpperCase']() + _0x1483c3['slice'](0x20d + 0x3 * -0x14 + -0x1d0), _0x445e2d = 'scroll' + _0x2510ba;
            this['_queueCallback'](_0x417940, this['_element'], !![]), this['_element']['style'][_0x1483c3] = this['_element'][_0x445e2d] + 'px';
        }
        ['hide']() {
            if (this['_isTransitioning'] || !this['_isShown']())
                return;
            const _0x100d1d = _0x348f05['default']['trigger'](this['_element'], _0x517a0b);
            if (_0x100d1d['defaultPrevented'])
                return;
            const _0x416934 = this['_getDimension']();
            this['_element']['style'][_0x416934] = this['_element']['getBoundingClientRect']()[_0x416934] + 'px', _0x54e897(this['_element']), this['_element']['classList']['add'](_0x2e961d), this['_element']['classList']['remove'](_0x1c39ec, _0x2390ed);
            const _0x106425 = this['_triggerArray']['length'];
            for (let _0x2ef9d6 = 0x1 * -0x1dab + 0x10ed + -0x2 * -0x65f; _0x2ef9d6 < _0x106425; _0x2ef9d6++) {
                const _0x1c9c72 = this['_triggerArray'][_0x2ef9d6], _0x274b8a = _0x2790ed(_0x1c9c72);
                _0x274b8a && !this['_isShown'](_0x274b8a) && this['_addAriaAndCollapsedClass']([_0x1c9c72], ![]);
            }
            this['_isTransitioning'] = !![];
            const _0x583ce8 = () => {
                this['_isTransitioning'] = ![], this['_element']['classList']['remove'](_0x2e961d), this['_element']['classList']['add'](_0x1c39ec), _0x348f05['default']['trigger'](this['_element'], _0x30a054);
            };
            this['_element']['style'][_0x416934] = '', this['_queueCallback'](_0x583ce8, this['_element'], !![]);
        }
        ['_isShown'](_0x3d9066 = this['_element']) {
            return _0x3d9066['classList']['contains'](_0x2390ed);
        }
        ['_getConfig'](_0x621447) {
            return _0x621447 = {
                ..._0x2e518b,
                ..._0x22fbb4['default']['getDataAttributes'](this['_element']),
                ..._0x621447
            }, _0x621447['toggle'] = Boolean(_0x621447['toggle']), _0x621447['parent'] = _0x3f7b68(_0x621447['parent']), _0x3b3f9f(_0x1b5a37, _0x621447, _0x14cbdb), _0x621447;
        }
        ['_getDimension']() {
            return this['_element']['classList']['contains'](_0x1488bd) ? _0x322618 : _0x3c6f27;
        }
        ['_initializeChildren']() {
            if (!this['_config']['parent'])
                return;
            const _0xe15325 = _0xf2580c['default']['find']('.' + _0x1c39ec + '\x20.' + _0x1c39ec, this['_config']['parent']);
            _0xf2580c['default']['find'](_0x282fa5, this['_config']['parent'])['filter'](_0x5f1eeb => !_0xe15325['includes'](_0x5f1eeb))['forEach'](_0x5780c4 => {
                const _0x13144a = _0x2790ed(_0x5780c4);
                _0x13144a && this['_addAriaAndCollapsedClass']([_0x5780c4], this['_isShown'](_0x13144a));
            });
        }
        ['_addAriaAndCollapsedClass'](_0x45e47c, _0x303829) {
            if (!_0x45e47c['length'])
                return;
            _0x45e47c['forEach'](_0xeea898 => {
                _0x303829 ? _0xeea898['classList']['remove'](_0x57d81f) : _0xeea898['classList']['add'](_0x57d81f), _0xeea898['setAttribute']('aria-expanded', _0x303829);
            });
        }
        static ['jQueryInterface'](_0x78acd0) {
            return this['each'](function () {
                const _0xc101b2 = {};
                typeof _0x78acd0 === 'string' && /show|hide/['test'](_0x78acd0) && (_0xc101b2['toggle'] = ![]);
                const _0x44b816 = _0x4c590f['getOrCreateInstance'](this, _0xc101b2);
                if (typeof _0x78acd0 === 'string') {
                    if (typeof _0x44b816[_0x78acd0] === 'undefined')
                        throw new TypeError('No\x20method\x20named\x20\x22' + _0x78acd0 + '\x22');
                    _0x44b816[_0x78acd0]();
                }
            });
        }
    }
    return _0x348f05['default']['on'](document, _0xdaee74, _0x282fa5, function (_0x2eaf8e) {
        (_0x2eaf8e['target']['tagName'] === 'A' || _0x2eaf8e['delegateTarget'] && _0x2eaf8e['delegateTarget']['tagName'] === 'A') && _0x2eaf8e['preventDefault']();
        const _0x21445d = _0x3f229c(this), _0x641755 = _0xf2580c['default']['find'](_0x21445d);
        _0x641755['forEach'](_0x2831c7 => {
            _0x4c590f['getOrCreateInstance'](_0x2831c7, { 'toggle': ![] })['toggle']();
        });
    }), _0x420add(_0x4c590f), _0x4c590f;
}));
