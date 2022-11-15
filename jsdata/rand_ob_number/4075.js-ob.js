define([
    './core',
    './var/strundefined',
    './var/rnotwhite',
    './var/hasOwn',
    './var/slice',
    './event/support',
    './data/var/data_priv',
    './core/init',
    './data/accepts',
    './selector'
], function (_0x2f30fe, _0x4e30e3, _0x2cd4f0, _0x576df7, _0x214eac, _0x27a39f, _0x1d986d) {
    var _0x22361e = /^key/, _0x5e5530 = /^(?:mouse|pointer|contextmenu)|click/, _0x18938b = /^(?:focusinfocus|focusoutblur)$/, _0x48fc1e = /^([^.]*)(?:\.(.+)|)$/;
    function _0x2bb1a6() {
        return !![];
    }
    function _0xca626e() {
        return ![];
    }
    function _0x5c8b30() {
        try {
            return document['activeElement'];
        } catch (_0x10549e) {
        }
    }
    return _0x2f30fe['event'] = {
        'global': {},
        'add': function (_0x2109e4, _0x483048, _0x38f12d, _0x45b2cc, _0x446dbf) {
            var _0x2e55bd, _0x5413d7, _0x2c9574, _0x316725, _0x881afc, _0xf34c41, _0x31a2ed, _0x2b4506, _0x10aff6, _0x8d20ad, _0x35ef94, _0x878d8e = _0x1d986d['get'](_0x2109e4);
            if (!_0x878d8e)
                return;
            _0x38f12d['handler'] && (_0x2e55bd = _0x38f12d, _0x38f12d = _0x2e55bd['handler'], _0x446dbf = _0x2e55bd['selector']);
            !_0x38f12d['guid'] && (_0x38f12d['guid'] = _0x2f30fe['guid']++);
            !(_0x316725 = _0x878d8e['events']) && (_0x316725 = _0x878d8e['events'] = {});
            !(_0x5413d7 = _0x878d8e['handle']) && (_0x5413d7 = _0x878d8e['handle'] = function (_0x47fb4d) {
                return typeof _0x2f30fe !== _0x4e30e3 && _0x2f30fe['event']['triggered'] !== _0x47fb4d['type'] ? _0x2f30fe['event']['dispatch']['apply'](_0x2109e4, arguments) : undefined;
            });
            _0x483048 = (_0x483048 || '')['match'](_0x2cd4f0) || [''], _0x881afc = _0x483048['length'];
            while (_0x881afc--) {
                _0x2c9574 = _0x48fc1e['exec'](_0x483048[_0x881afc]) || [], _0x10aff6 = _0x35ef94 = _0x2c9574[-0x1c4f + -0x5bc + 0x220c], _0x8d20ad = (_0x2c9574[0x189c + -0x932 + 0x88 * -0x1d] || '')['split']('.')['sort']();
                if (!_0x10aff6)
                    continue;
                _0x31a2ed = _0x2f30fe['event']['special'][_0x10aff6] || {}, _0x10aff6 = (_0x446dbf ? _0x31a2ed['delegateType'] : _0x31a2ed['bindType']) || _0x10aff6, _0x31a2ed = _0x2f30fe['event']['special'][_0x10aff6] || {}, _0xf34c41 = _0x2f30fe['extend']({
                    'type': _0x10aff6,
                    'origType': _0x35ef94,
                    'data': _0x45b2cc,
                    'handler': _0x38f12d,
                    'guid': _0x38f12d['guid'],
                    'selector': _0x446dbf,
                    'needsContext': _0x446dbf && _0x2f30fe['expr']['match']['needsContext']['test'](_0x446dbf),
                    'namespace': _0x8d20ad['join']('.')
                }, _0x2e55bd), !(_0x2b4506 = _0x316725[_0x10aff6]) && (_0x2b4506 = _0x316725[_0x10aff6] = [], _0x2b4506['delegateCount'] = -0x33f * 0xb + 0x3 * 0x74b + 0x14 * 0xb1, (!_0x31a2ed['setup'] || _0x31a2ed['setup']['call'](_0x2109e4, _0x45b2cc, _0x8d20ad, _0x5413d7) === ![]) && (_0x2109e4['addEventListener'] && _0x2109e4['addEventListener'](_0x10aff6, _0x5413d7, ![]))), _0x31a2ed['add'] && (_0x31a2ed['add']['call'](_0x2109e4, _0xf34c41), !_0xf34c41['handler']['guid'] && (_0xf34c41['handler']['guid'] = _0x38f12d['guid'])), _0x446dbf ? _0x2b4506['splice'](_0x2b4506['delegateCount']++, 0x20e1 + -0x1b72 * -0x1 + -0x3c53, _0xf34c41) : _0x2b4506['push'](_0xf34c41), _0x2f30fe['event']['global'][_0x10aff6] = !![];
            }
        },
        'remove': function (_0x4c004b, _0x3b2ce6, _0x509844, _0x113bc5, _0x14d24e) {
            var _0x503be1, _0x3118a0, _0x3fdc4c, _0xd4fdd4, _0x2df3f6, _0x50f613, _0x30deb6, _0x5196c1, _0x47982d, _0x4397f2, _0x145f71, _0x448619 = _0x1d986d['hasData'](_0x4c004b) && _0x1d986d['get'](_0x4c004b);
            if (!_0x448619 || !(_0xd4fdd4 = _0x448619['events']))
                return;
            _0x3b2ce6 = (_0x3b2ce6 || '')['match'](_0x2cd4f0) || [''], _0x2df3f6 = _0x3b2ce6['length'];
            while (_0x2df3f6--) {
                _0x3fdc4c = _0x48fc1e['exec'](_0x3b2ce6[_0x2df3f6]) || [], _0x47982d = _0x145f71 = _0x3fdc4c[0x1645 + 0x3 * -0x96b + 0x5fd], _0x4397f2 = (_0x3fdc4c[0x4f7 * -0x1 + -0x1b9b * 0x1 + 0xc * 0x2b7] || '')['split']('.')['sort']();
                if (!_0x47982d) {
                    for (_0x47982d in _0xd4fdd4) {
                        _0x2f30fe['event']['remove'](_0x4c004b, _0x47982d + _0x3b2ce6[_0x2df3f6], _0x509844, _0x113bc5, !![]);
                    }
                    continue;
                }
                _0x30deb6 = _0x2f30fe['event']['special'][_0x47982d] || {}, _0x47982d = (_0x113bc5 ? _0x30deb6['delegateType'] : _0x30deb6['bindType']) || _0x47982d, _0x5196c1 = _0xd4fdd4[_0x47982d] || [], _0x3fdc4c = _0x3fdc4c[-0xd * 0xf1 + 0x1 * -0x11d4 + 0x1e13] && new RegExp('(^|\x5c.)' + _0x4397f2['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)'), _0x3118a0 = _0x503be1 = _0x5196c1['length'];
                while (_0x503be1--) {
                    _0x50f613 = _0x5196c1[_0x503be1], (_0x14d24e || _0x145f71 === _0x50f613['origType']) && (!_0x509844 || _0x509844['guid'] === _0x50f613['guid']) && (!_0x3fdc4c || _0x3fdc4c['test'](_0x50f613['namespace'])) && (!_0x113bc5 || _0x113bc5 === _0x50f613['selector'] || _0x113bc5 === '**' && _0x50f613['selector']) && (_0x5196c1['splice'](_0x503be1, -0x6 * -0x64e + 0x221e + -0x47f1), _0x50f613['selector'] && _0x5196c1['delegateCount']--, _0x30deb6['remove'] && _0x30deb6['remove']['call'](_0x4c004b, _0x50f613));
                }
                _0x3118a0 && !_0x5196c1['length'] && ((!_0x30deb6['teardown'] || _0x30deb6['teardown']['call'](_0x4c004b, _0x4397f2, _0x448619['handle']) === ![]) && _0x2f30fe['removeEvent'](_0x4c004b, _0x47982d, _0x448619['handle']), delete _0xd4fdd4[_0x47982d]);
            }
            _0x2f30fe['isEmptyObject'](_0xd4fdd4) && (delete _0x448619['handle'], _0x1d986d['remove'](_0x4c004b, 'events'));
        },
        'trigger': function (_0x44c7de, _0x4c09ad, _0x1ecdb0, _0x1dca74) {
            var _0x4909c7, _0x5b21a3, _0x466f32, _0xf2e5bc, _0x3f30fd, _0x46af3d, _0x1ef74d, _0x29b52c = [_0x1ecdb0 || document], _0x42acfe = _0x576df7['call'](_0x44c7de, 'type') ? _0x44c7de['type'] : _0x44c7de, _0x459131 = _0x576df7['call'](_0x44c7de, 'namespace') ? _0x44c7de['namespace']['split']('.') : [];
            _0x5b21a3 = _0x466f32 = _0x1ecdb0 = _0x1ecdb0 || document;
            if (_0x1ecdb0['nodeType'] === -0x2270 + 0x3 * 0x841 + 0x26c * 0x4 || _0x1ecdb0['nodeType'] === 0x1 * -0xe7f + -0xea7 + 0x1d2e)
                return;
            if (_0x18938b['test'](_0x42acfe + _0x2f30fe['event']['triggered']))
                return;
            _0x42acfe['indexOf']('.') >= 0x1206 + 0x4a * -0x7e + 0x13a * 0xf && (_0x459131 = _0x42acfe['split']('.'), _0x42acfe = _0x459131['shift'](), _0x459131['sort']());
            _0x3f30fd = _0x42acfe['indexOf'](':') < 0x13b1 * -0x1 + -0x1ee2 + 0xb * 0x499 && 'on' + _0x42acfe, _0x44c7de = _0x44c7de[_0x2f30fe['expando']] ? _0x44c7de : new _0x2f30fe['Event'](_0x42acfe, typeof _0x44c7de === 'object' && _0x44c7de), _0x44c7de['isTrigger'] = _0x1dca74 ? 0xf8b + 0x172b * 0x1 + -0x26b4 : -0x2371 + -0x13 * 0x8b + 0x2dc5, _0x44c7de['namespace'] = _0x459131['join']('.'), _0x44c7de['namespace_re'] = _0x44c7de['namespace'] ? new RegExp('(^|\x5c.)' + _0x459131['join']('\x5c.(?:.*\x5c.|)') + '(\x5c.|$)') : null, _0x44c7de['result'] = undefined;
            !_0x44c7de['target'] && (_0x44c7de['target'] = _0x1ecdb0);
            _0x4c09ad = _0x4c09ad == null ? [_0x44c7de] : _0x2f30fe['makeArray'](_0x4c09ad, [_0x44c7de]), _0x1ef74d = _0x2f30fe['event']['special'][_0x42acfe] || {};
            if (!_0x1dca74 && _0x1ef74d['trigger'] && _0x1ef74d['trigger']['apply'](_0x1ecdb0, _0x4c09ad) === ![])
                return;
            if (!_0x1dca74 && !_0x1ef74d['noBubble'] && !_0x2f30fe['isWindow'](_0x1ecdb0)) {
                _0xf2e5bc = _0x1ef74d['delegateType'] || _0x42acfe;
                !_0x18938b['test'](_0xf2e5bc + _0x42acfe) && (_0x5b21a3 = _0x5b21a3['parentNode']);
                for (; _0x5b21a3; _0x5b21a3 = _0x5b21a3['parentNode']) {
                    _0x29b52c['push'](_0x5b21a3), _0x466f32 = _0x5b21a3;
                }
                _0x466f32 === (_0x1ecdb0['ownerDocument'] || document) && _0x29b52c['push'](_0x466f32['defaultView'] || _0x466f32['parentWindow'] || window);
            }
            _0x4909c7 = 0xf4c + -0x104d + 0x101;
            while ((_0x5b21a3 = _0x29b52c[_0x4909c7++]) && !_0x44c7de['isPropagationStopped']()) {
                _0x44c7de['type'] = _0x4909c7 > -0xe6b + 0x2230 * -0x1 + 0x309c ? _0xf2e5bc : _0x1ef74d['bindType'] || _0x42acfe, _0x46af3d = (_0x1d986d['get'](_0x5b21a3, 'events') || {})[_0x44c7de['type']] && _0x1d986d['get'](_0x5b21a3, 'handle'), _0x46af3d && _0x46af3d['apply'](_0x5b21a3, _0x4c09ad), _0x46af3d = _0x3f30fd && _0x5b21a3[_0x3f30fd], _0x46af3d && _0x46af3d['apply'] && _0x2f30fe['acceptData'](_0x5b21a3) && (_0x44c7de['result'] = _0x46af3d['apply'](_0x5b21a3, _0x4c09ad), _0x44c7de['result'] === ![] && _0x44c7de['preventDefault']());
            }
            return _0x44c7de['type'] = _0x42acfe, !_0x1dca74 && !_0x44c7de['isDefaultPrevented']() && ((!_0x1ef74d['_default'] || _0x1ef74d['_default']['apply'](_0x29b52c['pop'](), _0x4c09ad) === ![]) && _0x2f30fe['acceptData'](_0x1ecdb0) && (_0x3f30fd && _0x2f30fe['isFunction'](_0x1ecdb0[_0x42acfe]) && !_0x2f30fe['isWindow'](_0x1ecdb0) && (_0x466f32 = _0x1ecdb0[_0x3f30fd], _0x466f32 && (_0x1ecdb0[_0x3f30fd] = null), _0x2f30fe['event']['triggered'] = _0x42acfe, _0x1ecdb0[_0x42acfe](), _0x2f30fe['event']['triggered'] = undefined, _0x466f32 && (_0x1ecdb0[_0x3f30fd] = _0x466f32)))), _0x44c7de['result'];
        },
        'dispatch': function (_0x40dee9) {
            _0x40dee9 = _0x2f30fe['event']['fix'](_0x40dee9);
            var _0x39a4ee, _0x222350, _0x5d3ac5, _0x92184f, _0x58fc21, _0x26e9e3 = [], _0x1ede8b = _0x214eac['call'](arguments), _0x2e5771 = (_0x1d986d['get'](this, 'events') || {})[_0x40dee9['type']] || [], _0x219fb7 = _0x2f30fe['event']['special'][_0x40dee9['type']] || {};
            _0x1ede8b[0x5f4 + -0x1df5 + -0x4cd * -0x5] = _0x40dee9, _0x40dee9['delegateTarget'] = this;
            if (_0x219fb7['preDispatch'] && _0x219fb7['preDispatch']['call'](this, _0x40dee9) === ![])
                return;
            _0x26e9e3 = _0x2f30fe['event']['handlers']['call'](this, _0x40dee9, _0x2e5771), _0x39a4ee = 0x141 * 0xa + -0x23b5 + 0x172b * 0x1;
            while ((_0x92184f = _0x26e9e3[_0x39a4ee++]) && !_0x40dee9['isPropagationStopped']()) {
                _0x40dee9['currentTarget'] = _0x92184f['elem'], _0x222350 = 0xc5d + 0x1 * -0xd87 + 0x12a;
                while ((_0x58fc21 = _0x92184f['handlers'][_0x222350++]) && !_0x40dee9['isImmediatePropagationStopped']()) {
                    (!_0x40dee9['namespace_re'] || _0x40dee9['namespace_re']['test'](_0x58fc21['namespace'])) && (_0x40dee9['handleObj'] = _0x58fc21, _0x40dee9['data'] = _0x58fc21['data'], _0x5d3ac5 = ((_0x2f30fe['event']['special'][_0x58fc21['origType']] || {})['handle'] || _0x58fc21['handler'])['apply'](_0x92184f['elem'], _0x1ede8b), _0x5d3ac5 !== undefined && ((_0x40dee9['result'] = _0x5d3ac5) === ![] && (_0x40dee9['preventDefault'](), _0x40dee9['stopPropagation']())));
                }
            }
            return _0x219fb7['postDispatch'] && _0x219fb7['postDispatch']['call'](this, _0x40dee9), _0x40dee9['result'];
        },
        'handlers': function (_0xd5704d, _0x3a4fd2) {
            var _0x4a546e, _0x5bfbb3, _0x5c316d, _0x25e78c, _0x1a90a0 = [], _0x23b219 = _0x3a4fd2['delegateCount'], _0x14f939 = _0xd5704d['target'];
            if (_0x23b219 && _0x14f939['nodeType'] && (!_0xd5704d['button'] || _0xd5704d['type'] !== 'click'))
                for (; _0x14f939 !== this; _0x14f939 = _0x14f939['parentNode'] || this) {
                    if (_0x14f939['disabled'] !== !![] || _0xd5704d['type'] !== 'click') {
                        _0x5bfbb3 = [];
                        for (_0x4a546e = -0x1fd7 * -0x1 + 0x21b * -0x4 + -0x176b; _0x4a546e < _0x23b219; _0x4a546e++) {
                            _0x25e78c = _0x3a4fd2[_0x4a546e], _0x5c316d = _0x25e78c['selector'] + '\x20', _0x5bfbb3[_0x5c316d] === undefined && (_0x5bfbb3[_0x5c316d] = _0x25e78c['needsContext'] ? _0x2f30fe(_0x5c316d, this)['index'](_0x14f939) >= -0x261d * 0x1 + -0xd19 + 0x3336 : _0x2f30fe['find'](_0x5c316d, this, null, [_0x14f939])['length']), _0x5bfbb3[_0x5c316d] && _0x5bfbb3['push'](_0x25e78c);
                        }
                        _0x5bfbb3['length'] && _0x1a90a0['push']({
                            'elem': _0x14f939,
                            'handlers': _0x5bfbb3
                        });
                    }
                }
            return _0x23b219 < _0x3a4fd2['length'] && _0x1a90a0['push']({
                'elem': this,
                'handlers': _0x3a4fd2['slice'](_0x23b219)
            }), _0x1a90a0;
        },
        'props': 'altKey\x20bubbles\x20cancelable\x20ctrlKey\x20currentTarget\x20eventPhase\x20metaKey\x20relatedTarget\x20shiftKey\x20target\x20timeStamp\x20view\x20which'['split']('\x20'),
        'fixHooks': {},
        'keyHooks': {
            'props': 'char\x20charCode\x20key\x20keyCode'['split']('\x20'),
            'filter': function (_0x23f428, _0x25fa88) {
                return _0x23f428['which'] == null && (_0x23f428['which'] = _0x25fa88['charCode'] != null ? _0x25fa88['charCode'] : _0x25fa88['keyCode']), _0x23f428;
            }
        },
        'mouseHooks': {
            'props': 'button\x20buttons\x20clientX\x20clientY\x20offsetX\x20offsetY\x20pageX\x20pageY\x20screenX\x20screenY\x20toElement'['split']('\x20'),
            'filter': function (_0x407874, _0x2aa8af) {
                var _0xbdbdcc, _0xe39fb0, _0x2c6bbc, _0x14c411 = _0x2aa8af['button'];
                return _0x407874['pageX'] == null && _0x2aa8af['clientX'] != null && (_0xbdbdcc = _0x407874['target']['ownerDocument'] || document, _0xe39fb0 = _0xbdbdcc['documentElement'], _0x2c6bbc = _0xbdbdcc['body'], _0x407874['pageX'] = _0x2aa8af['clientX'] + (_0xe39fb0 && _0xe39fb0['scrollLeft'] || _0x2c6bbc && _0x2c6bbc['scrollLeft'] || -0x824 + 0x1 * -0x23d4 + -0x1c * -0x192) - (_0xe39fb0 && _0xe39fb0['clientLeft'] || _0x2c6bbc && _0x2c6bbc['clientLeft'] || -0x7ab + -0x171b + -0x3 * -0xa42), _0x407874['pageY'] = _0x2aa8af['clientY'] + (_0xe39fb0 && _0xe39fb0['scrollTop'] || _0x2c6bbc && _0x2c6bbc['scrollTop'] || 0x113 * 0x2 + -0x9 * 0x6a + 0x194) - (_0xe39fb0 && _0xe39fb0['clientTop'] || _0x2c6bbc && _0x2c6bbc['clientTop'] || 0x1 * 0xb27 + 0x13b2 * 0x1 + -0x1ed9)), !_0x407874['which'] && _0x14c411 !== undefined && (_0x407874['which'] = _0x14c411 & -0x12bd + 0x1db7 + -0x35 * 0x35 ? 0xd * -0x7f + 0x11de + -0x1 * 0xb6a : _0x14c411 & 0xc46 + -0x1 * 0x1c1 + 0x75 * -0x17 ? 0x3a * -0x35 + 0xbe * -0x22 + 0x363 * 0xb : _0x14c411 & -0xc7d + -0x140 + 0x7 * 0x1f7 ? -0x617 * 0x2 + 0xa6e + 0x5 * 0x5a : -0x13ab + 0x1bf8 + -0x84d), _0x407874;
            }
        },
        'fix': function (_0x4a1d86) {
            if (_0x4a1d86[_0x2f30fe['expando']])
                return _0x4a1d86;
            var _0x433283, _0x46735d, _0x6ba851, _0x5df07c = _0x4a1d86['type'], _0x4aefdb = _0x4a1d86, _0x53778c = this['fixHooks'][_0x5df07c];
            !_0x53778c && (this['fixHooks'][_0x5df07c] = _0x53778c = _0x5e5530['test'](_0x5df07c) ? this['mouseHooks'] : _0x22361e['test'](_0x5df07c) ? this['keyHooks'] : {});
            _0x6ba851 = _0x53778c['props'] ? this['props']['concat'](_0x53778c['props']) : this['props'], _0x4a1d86 = new _0x2f30fe['Event'](_0x4aefdb), _0x433283 = _0x6ba851['length'];
            while (_0x433283--) {
                _0x46735d = _0x6ba851[_0x433283], _0x4a1d86[_0x46735d] = _0x4aefdb[_0x46735d];
            }
            return !_0x4a1d86['target'] && (_0x4a1d86['target'] = document), _0x4a1d86['target']['nodeType'] === 0x2518 + -0x7e3 + 0x1 * -0x1d32 && (_0x4a1d86['target'] = _0x4a1d86['target']['parentNode']), _0x53778c['filter'] ? _0x53778c['filter'](_0x4a1d86, _0x4aefdb) : _0x4a1d86;
        },
        'special': {
            'load': { 'noBubble': !![] },
            'focus': {
                'trigger': function () {
                    if (this !== _0x5c8b30() && this['focus'])
                        return this['focus'](), ![];
                },
                'delegateType': 'focusin'
            },
            'blur': {
                'trigger': function () {
                    if (this === _0x5c8b30() && this['blur'])
                        return this['blur'](), ![];
                },
                'delegateType': 'focusout'
            },
            'click': {
                'trigger': function () {
                    if (this['type'] === 'checkbox' && this['click'] && _0x2f30fe['nodeName'](this, 'input'))
                        return this['click'](), ![];
                },
                '_default': function (_0x13dbd2) {
                    return _0x2f30fe['nodeName'](_0x13dbd2['target'], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function (_0x43c817) {
                    _0x43c817['result'] !== undefined && _0x43c817['originalEvent'] && (_0x43c817['originalEvent']['returnValue'] = _0x43c817['result']);
                }
            }
        },
        'simulate': function (_0x235b87, _0x2e2785, _0x51dc0d, _0x450969) {
            var _0x5d6558 = _0x2f30fe['extend'](new _0x2f30fe['Event'](), _0x51dc0d, {
                'type': _0x235b87,
                'isSimulated': !![],
                'originalEvent': {}
            });
            _0x450969 ? _0x2f30fe['event']['trigger'](_0x5d6558, null, _0x2e2785) : _0x2f30fe['event']['dispatch']['call'](_0x2e2785, _0x5d6558), _0x5d6558['isDefaultPrevented']() && _0x51dc0d['preventDefault']();
        }
    }, _0x2f30fe['removeEvent'] = function (_0x509d2f, _0xdd069b, _0x188c19) {
        _0x509d2f['removeEventListener'] && _0x509d2f['removeEventListener'](_0xdd069b, _0x188c19, ![]);
    }, _0x2f30fe['Event'] = function (_0x570555, _0x4c0bfd) {
        if (!(this instanceof _0x2f30fe['Event']))
            return new _0x2f30fe['Event'](_0x570555, _0x4c0bfd);
        _0x570555 && _0x570555['type'] ? (this['originalEvent'] = _0x570555, this['type'] = _0x570555['type'], this['isDefaultPrevented'] = _0x570555['defaultPrevented'] || _0x570555['defaultPrevented'] === undefined && _0x570555['returnValue'] === ![] ? _0x2bb1a6 : _0xca626e) : this['type'] = _0x570555, _0x4c0bfd && _0x2f30fe['extend'](this, _0x4c0bfd), this['timeStamp'] = _0x570555 && _0x570555['timeStamp'] || _0x2f30fe['now'](), this[_0x2f30fe['expando']] = !![];
    }, _0x2f30fe['Event']['prototype'] = {
        'isDefaultPrevented': _0xca626e,
        'isPropagationStopped': _0xca626e,
        'isImmediatePropagationStopped': _0xca626e,
        'preventDefault': function () {
            var _0x5c005b = this['originalEvent'];
            this['isDefaultPrevented'] = _0x2bb1a6, _0x5c005b && _0x5c005b['preventDefault'] && _0x5c005b['preventDefault']();
        },
        'stopPropagation': function () {
            var _0x5347e6 = this['originalEvent'];
            this['isPropagationStopped'] = _0x2bb1a6, _0x5347e6 && _0x5347e6['stopPropagation'] && _0x5347e6['stopPropagation']();
        },
        'stopImmediatePropagation': function () {
            var _0x2736ac = this['originalEvent'];
            this['isImmediatePropagationStopped'] = _0x2bb1a6, _0x2736ac && _0x2736ac['stopImmediatePropagation'] && _0x2736ac['stopImmediatePropagation'](), this['stopPropagation']();
        }
    }, _0x2f30fe['each']({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': 'pointerover',
        'pointerleave': 'pointerout'
    }, function (_0x39b88e, _0x1f6b2a) {
        _0x2f30fe['event']['special'][_0x39b88e] = {
            'delegateType': _0x1f6b2a,
            'bindType': _0x1f6b2a,
            'handle': function (_0x391508) {
                var _0x20df92, _0x495ed4 = this, _0x3d3717 = _0x391508['relatedTarget'], _0x1bea72 = _0x391508['handleObj'];
                return (!_0x3d3717 || _0x3d3717 !== _0x495ed4 && !_0x2f30fe['contains'](_0x495ed4, _0x3d3717)) && (_0x391508['type'] = _0x1bea72['origType'], _0x20df92 = _0x1bea72['handler']['apply'](this, arguments), _0x391508['type'] = _0x1f6b2a), _0x20df92;
            }
        };
    }), !_0x27a39f['focusinBubbles'] && _0x2f30fe['each']({
        'focus': 'focusin',
        'blur': 'focusout'
    }, function (_0x41dd45, _0xaa6d94) {
        var _0x1d56e7 = function (_0x18ebd4) {
            _0x2f30fe['event']['simulate'](_0xaa6d94, _0x18ebd4['target'], _0x2f30fe['event']['fix'](_0x18ebd4), !![]);
        };
        _0x2f30fe['event']['special'][_0xaa6d94] = {
            'setup': function () {
                var _0x5e3292 = this['ownerDocument'] || this, _0x20de7c = _0x1d986d['access'](_0x5e3292, _0xaa6d94);
                !_0x20de7c && _0x5e3292['addEventListener'](_0x41dd45, _0x1d56e7, !![]), _0x1d986d['access'](_0x5e3292, _0xaa6d94, (_0x20de7c || -0x13b6 + 0x4 * 0x27e + 0x9be * 0x1) + (-0xc9d * 0x1 + 0xd84 + -0xe6));
            },
            'teardown': function () {
                var _0x24bb1c = this['ownerDocument'] || this, _0x3cc2aa = _0x1d986d['access'](_0x24bb1c, _0xaa6d94) - (0x253 + 0x12d * 0x1a + -0x20e4);
                !_0x3cc2aa ? (_0x24bb1c['removeEventListener'](_0x41dd45, _0x1d56e7, !![]), _0x1d986d['remove'](_0x24bb1c, _0xaa6d94)) : _0x1d986d['access'](_0x24bb1c, _0xaa6d94, _0x3cc2aa);
            }
        };
    }), _0x2f30fe['fn']['extend']({
        'on': function (_0x59da2d, _0x6d638d, _0x1bbf5e, _0x55d8af, _0x116dbb) {
            var _0x215752, _0x239e35;
            if (typeof _0x59da2d === 'object') {
                typeof _0x6d638d !== 'string' && (_0x1bbf5e = _0x1bbf5e || _0x6d638d, _0x6d638d = undefined);
                for (_0x239e35 in _0x59da2d) {
                    this['on'](_0x239e35, _0x6d638d, _0x1bbf5e, _0x59da2d[_0x239e35], _0x116dbb);
                }
                return this;
            }
            if (_0x1bbf5e == null && _0x55d8af == null)
                _0x55d8af = _0x6d638d, _0x1bbf5e = _0x6d638d = undefined;
            else
                _0x55d8af == null && (typeof _0x6d638d === 'string' ? (_0x55d8af = _0x1bbf5e, _0x1bbf5e = undefined) : (_0x55d8af = _0x1bbf5e, _0x1bbf5e = _0x6d638d, _0x6d638d = undefined));
            if (_0x55d8af === ![])
                _0x55d8af = _0xca626e;
            else {
                if (!_0x55d8af)
                    return this;
            }
            return _0x116dbb === 0x4b5 + -0x177b + 0x1b5 * 0xb && (_0x215752 = _0x55d8af, _0x55d8af = function (_0x35a1d1) {
                return _0x2f30fe()['off'](_0x35a1d1), _0x215752['apply'](this, arguments);
            }, _0x55d8af['guid'] = _0x215752['guid'] || (_0x215752['guid'] = _0x2f30fe['guid']++)), this['each'](function () {
                _0x2f30fe['event']['add'](this, _0x59da2d, _0x55d8af, _0x1bbf5e, _0x6d638d);
            });
        },
        'one': function (_0x15b45d, _0x98fe76, _0x445337, _0x12ca82) {
            return this['on'](_0x15b45d, _0x98fe76, _0x445337, _0x12ca82, 0x528 + -0x2 * 0x109 + -0x315);
        },
        'off': function (_0xa7d2a, _0x36ffee, _0x1cc99d) {
            var _0x51a793, _0x17f750;
            if (_0xa7d2a && _0xa7d2a['preventDefault'] && _0xa7d2a['handleObj'])
                return _0x51a793 = _0xa7d2a['handleObj'], _0x2f30fe(_0xa7d2a['delegateTarget'])['off'](_0x51a793['namespace'] ? _0x51a793['origType'] + '.' + _0x51a793['namespace'] : _0x51a793['origType'], _0x51a793['selector'], _0x51a793['handler']), this;
            if (typeof _0xa7d2a === 'object') {
                for (_0x17f750 in _0xa7d2a) {
                    this['off'](_0x17f750, _0x36ffee, _0xa7d2a[_0x17f750]);
                }
                return this;
            }
            return (_0x36ffee === ![] || typeof _0x36ffee === 'function') && (_0x1cc99d = _0x36ffee, _0x36ffee = undefined), _0x1cc99d === ![] && (_0x1cc99d = _0xca626e), this['each'](function () {
                _0x2f30fe['event']['remove'](this, _0xa7d2a, _0x1cc99d, _0x36ffee);
            });
        },
        'trigger': function (_0x3ff5ee, _0x2d9d32) {
            return this['each'](function () {
                _0x2f30fe['event']['trigger'](_0x3ff5ee, _0x2d9d32, this);
            });
        },
        'triggerHandler': function (_0x366400, _0x1a9716) {
            var _0x4eee6a = this[-0x1 * -0x2a0 + 0x20cc + 0x236c * -0x1];
            if (_0x4eee6a)
                return _0x2f30fe['event']['trigger'](_0x366400, _0x1a9716, _0x4eee6a, !![]);
        }
    }), _0x2f30fe;
});
