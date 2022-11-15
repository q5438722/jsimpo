define([
    _0x3d6dd7(503),
    _0x3d6dd7(504),
    _0x3d6dd7(505),
    _0x3d6dd7(506),
    _0x3d6dd7(507),
    './event/support',
    _0x3d6dd7(508),
    _0x3d6dd7(509),
    _0x3d6dd7(510),
    _0x3d6dd7(511)
], function (_0x355a8c, _0x2aaef6, _0x4ec1b3, _0x1456d6, _0x96bdbf, _0x2755e5, _0x11f457) {
    var _0xee6261 = _0x3d6dd7, _0x1f3385 = /^key/, _0x66c44e = /^(?:mouse|pointer|contextmenu)|click/, _0x3a6e51 = /^(?:focusinfocus|focusoutblur)$/, _0x13a938 = /^([^.]*)(?:\.(.+)|)$/;
    function _0x529438() {
        return !![];
    }
    function _0x4f4d84() {
        return ![];
    }
    function _0x2ec00a() {
        try {
            return document['activeElement'];
        } catch (_0x163149) {
        }
    }
    return _0x355a8c[_0xee6261(512)] = {
        'global': {},
        'add': function (_0x2d629e, _0x33f50e, _0x50dcaa, _0x20d914, _0x25b63a) {
            var _0x17d21b = _0xee6261, _0x98a9a, _0x3ebc8e, _0x4b5e00, _0x46e4e1, _0x49c301, _0x1eb574, _0x556288, _0x10f91a, _0x19b104, _0x28f7bf, _0x348f0d, _0x12bd6f = _0x11f457[_0x17d21b(513)](_0x2d629e);
            if (!_0x12bd6f)
                return;
            _0x50dcaa['handler'] && (_0x98a9a = _0x50dcaa, _0x50dcaa = _0x98a9a[_0x17d21b(514)], _0x25b63a = _0x98a9a[_0x17d21b(515)]);
            !_0x50dcaa[_0x17d21b(516)] && (_0x50dcaa[_0x17d21b(516)] = _0x355a8c[_0x17d21b(516)]++);
            !(_0x46e4e1 = _0x12bd6f[_0x17d21b(517)]) && (_0x46e4e1 = _0x12bd6f[_0x17d21b(517)] = {});
            !(_0x3ebc8e = _0x12bd6f[_0x17d21b(518)]) && (_0x3ebc8e = _0x12bd6f[_0x17d21b(518)] = function (_0x38363a) {
                var _0x27aa10 = _0x17d21b;
                return typeof _0x355a8c !== _0x2aaef6 && _0x355a8c[_0x27aa10(512)]['triggered'] !== _0x38363a[_0x27aa10(519)] ? _0x355a8c[_0x27aa10(512)][_0x27aa10(520)]['apply'](_0x2d629e, arguments) : undefined;
            });
            _0x33f50e = (_0x33f50e || '')[_0x17d21b(521)](_0x4ec1b3) || [''], _0x49c301 = _0x33f50e[_0x17d21b(522)];
            while (_0x49c301--) {
                _0x4b5e00 = _0x13a938['exec'](_0x33f50e[_0x49c301]) || [], _0x19b104 = _0x348f0d = _0x4b5e00[1], _0x28f7bf = (_0x4b5e00[2] || '')[_0x17d21b(523)]('.')[_0x17d21b(524)]();
                if (!_0x19b104)
                    continue;
                _0x556288 = _0x355a8c[_0x17d21b(512)][_0x17d21b(525)][_0x19b104] || {}, _0x19b104 = (_0x25b63a ? _0x556288[_0x17d21b(526)] : _0x556288[_0x17d21b(527)]) || _0x19b104, _0x556288 = _0x355a8c['event'][_0x17d21b(525)][_0x19b104] || {}, _0x1eb574 = _0x355a8c['extend']({
                    'type': _0x19b104,
                    'origType': _0x348f0d,
                    'data': _0x20d914,
                    'handler': _0x50dcaa,
                    'guid': _0x50dcaa[_0x17d21b(516)],
                    'selector': _0x25b63a,
                    'needsContext': _0x25b63a && _0x355a8c[_0x17d21b(528)][_0x17d21b(521)]['needsContext'][_0x17d21b(529)](_0x25b63a),
                    'namespace': _0x28f7bf['join']('.')
                }, _0x98a9a), !(_0x10f91a = _0x46e4e1[_0x19b104]) && (_0x10f91a = _0x46e4e1[_0x19b104] = [], _0x10f91a[_0x17d21b(530)] = 0, (!_0x556288[_0x17d21b(531)] || _0x556288[_0x17d21b(531)]['call'](_0x2d629e, _0x20d914, _0x28f7bf, _0x3ebc8e) === ![]) && (_0x2d629e[_0x17d21b(532)] && _0x2d629e[_0x17d21b(532)](_0x19b104, _0x3ebc8e, ![]))), _0x556288[_0x17d21b(533)] && (_0x556288[_0x17d21b(533)][_0x17d21b(534)](_0x2d629e, _0x1eb574), !_0x1eb574[_0x17d21b(514)][_0x17d21b(516)] && (_0x1eb574[_0x17d21b(514)]['guid'] = _0x50dcaa[_0x17d21b(516)])), _0x25b63a ? _0x10f91a[_0x17d21b(535)](_0x10f91a[_0x17d21b(530)]++, 0, _0x1eb574) : _0x10f91a['push'](_0x1eb574), _0x355a8c[_0x17d21b(512)][_0x17d21b(536)][_0x19b104] = !![];
            }
        },
        'remove': function (_0x1b6708, _0x5ee6a1, _0xa7f0ae, _0x1787b3, _0x3ea17a) {
            var _0x17d1cc = _0xee6261, _0x4ac07b, _0x139364, _0x1b814a, _0x457fa5, _0x535237, _0x23ca22, _0x21fde6, _0x3a768e, _0x3955b8, _0x2c8edc, _0x52b2bf, _0x109082 = _0x11f457['hasData'](_0x1b6708) && _0x11f457[_0x17d1cc(513)](_0x1b6708);
            if (!_0x109082 || !(_0x457fa5 = _0x109082[_0x17d1cc(517)]))
                return;
            _0x5ee6a1 = (_0x5ee6a1 || '')[_0x17d1cc(521)](_0x4ec1b3) || [''], _0x535237 = _0x5ee6a1[_0x17d1cc(522)];
            while (_0x535237--) {
                _0x1b814a = _0x13a938['exec'](_0x5ee6a1[_0x535237]) || [], _0x3955b8 = _0x52b2bf = _0x1b814a[1], _0x2c8edc = (_0x1b814a[2] || '')['split']('.')['sort']();
                if (!_0x3955b8) {
                    for (_0x3955b8 in _0x457fa5) {
                        _0x355a8c['event'][_0x17d1cc(537)](_0x1b6708, _0x3955b8 + _0x5ee6a1[_0x535237], _0xa7f0ae, _0x1787b3, !![]);
                    }
                    continue;
                }
                _0x21fde6 = _0x355a8c[_0x17d1cc(512)][_0x17d1cc(525)][_0x3955b8] || {}, _0x3955b8 = (_0x1787b3 ? _0x21fde6['delegateType'] : _0x21fde6[_0x17d1cc(527)]) || _0x3955b8, _0x3a768e = _0x457fa5[_0x3955b8] || [], _0x1b814a = _0x1b814a[2] && new RegExp(_0x17d1cc(538) + _0x2c8edc[_0x17d1cc(539)](_0x17d1cc(540)) + _0x17d1cc(541)), _0x139364 = _0x4ac07b = _0x3a768e[_0x17d1cc(522)];
                while (_0x4ac07b--) {
                    _0x23ca22 = _0x3a768e[_0x4ac07b], (_0x3ea17a || _0x52b2bf === _0x23ca22[_0x17d1cc(542)]) && (!_0xa7f0ae || _0xa7f0ae['guid'] === _0x23ca22['guid']) && (!_0x1b814a || _0x1b814a['test'](_0x23ca22[_0x17d1cc(543)])) && (!_0x1787b3 || _0x1787b3 === _0x23ca22[_0x17d1cc(515)] || _0x1787b3 === '**' && _0x23ca22[_0x17d1cc(515)]) && (_0x3a768e['splice'](_0x4ac07b, 1), _0x23ca22[_0x17d1cc(515)] && _0x3a768e['delegateCount']--, _0x21fde6[_0x17d1cc(537)] && _0x21fde6['remove']['call'](_0x1b6708, _0x23ca22));
                }
                _0x139364 && !_0x3a768e[_0x17d1cc(522)] && ((!_0x21fde6[_0x17d1cc(544)] || _0x21fde6[_0x17d1cc(544)]['call'](_0x1b6708, _0x2c8edc, _0x109082[_0x17d1cc(518)]) === ![]) && _0x355a8c[_0x17d1cc(545)](_0x1b6708, _0x3955b8, _0x109082[_0x17d1cc(518)]), delete _0x457fa5[_0x3955b8]);
            }
            _0x355a8c[_0x17d1cc(546)](_0x457fa5) && (delete _0x109082[_0x17d1cc(518)], _0x11f457[_0x17d1cc(537)](_0x1b6708, _0x17d1cc(517)));
        },
        'trigger': function (_0x203e5c, _0x5f53ea, _0x5ab423, _0xde761d) {
            var _0xef6b91 = _0xee6261, _0x139225, _0x242bc3, _0x2976c7, _0x2885de, _0x380892, _0x4501b0, _0xe5ea2d, _0x43e087 = [_0x5ab423 || document], _0x12edb1 = _0x1456d6['call'](_0x203e5c, 'type') ? _0x203e5c[_0xef6b91(519)] : _0x203e5c, _0x486620 = _0x1456d6[_0xef6b91(534)](_0x203e5c, _0xef6b91(543)) ? _0x203e5c[_0xef6b91(543)][_0xef6b91(523)]('.') : [];
            _0x242bc3 = _0x2976c7 = _0x5ab423 = _0x5ab423 || document;
            if (_0x5ab423[_0xef6b91(547)] === 3 || _0x5ab423[_0xef6b91(547)] === 8)
                return;
            if (_0x3a6e51[_0xef6b91(529)](_0x12edb1 + _0x355a8c[_0xef6b91(512)][_0xef6b91(548)]))
                return;
            _0x12edb1[_0xef6b91(549)]('.') >= 0 && (_0x486620 = _0x12edb1[_0xef6b91(523)]('.'), _0x12edb1 = _0x486620[_0xef6b91(550)](), _0x486620[_0xef6b91(524)]());
            _0x380892 = _0x12edb1[_0xef6b91(549)](':') < 0 && 'on' + _0x12edb1, _0x203e5c = _0x203e5c[_0x355a8c[_0xef6b91(551)]] ? _0x203e5c : new _0x355a8c['Event'](_0x12edb1, typeof _0x203e5c === 'object' && _0x203e5c), _0x203e5c[_0xef6b91(552)] = _0xde761d ? 2 : 3, _0x203e5c[_0xef6b91(543)] = _0x486620['join']('.'), _0x203e5c['namespace_re'] = _0x203e5c[_0xef6b91(543)] ? new RegExp(_0xef6b91(538) + _0x486620[_0xef6b91(539)](_0xef6b91(540)) + _0xef6b91(541)) : null, _0x203e5c['result'] = undefined;
            !_0x203e5c['target'] && (_0x203e5c['target'] = _0x5ab423);
            _0x5f53ea = _0x5f53ea == null ? [_0x203e5c] : _0x355a8c[_0xef6b91(553)](_0x5f53ea, [_0x203e5c]), _0xe5ea2d = _0x355a8c[_0xef6b91(512)][_0xef6b91(525)][_0x12edb1] || {};
            if (!_0xde761d && _0xe5ea2d[_0xef6b91(554)] && _0xe5ea2d[_0xef6b91(554)][_0xef6b91(555)](_0x5ab423, _0x5f53ea) === ![])
                return;
            if (!_0xde761d && !_0xe5ea2d['noBubble'] && !_0x355a8c[_0xef6b91(556)](_0x5ab423)) {
                _0x2885de = _0xe5ea2d[_0xef6b91(526)] || _0x12edb1;
                !_0x3a6e51['test'](_0x2885de + _0x12edb1) && (_0x242bc3 = _0x242bc3[_0xef6b91(557)]);
                for (; _0x242bc3; _0x242bc3 = _0x242bc3['parentNode']) {
                    _0x43e087[_0xef6b91(558)](_0x242bc3), _0x2976c7 = _0x242bc3;
                }
                _0x2976c7 === (_0x5ab423[_0xef6b91(559)] || document) && _0x43e087[_0xef6b91(558)](_0x2976c7['defaultView'] || _0x2976c7['parentWindow'] || window);
            }
            _0x139225 = 0;
            while ((_0x242bc3 = _0x43e087[_0x139225++]) && !_0x203e5c[_0xef6b91(560)]()) {
                _0x203e5c[_0xef6b91(519)] = _0x139225 > 1 ? _0x2885de : _0xe5ea2d['bindType'] || _0x12edb1, _0x4501b0 = (_0x11f457['get'](_0x242bc3, 'events') || {})[_0x203e5c[_0xef6b91(519)]] && _0x11f457[_0xef6b91(513)](_0x242bc3, _0xef6b91(518)), _0x4501b0 && _0x4501b0[_0xef6b91(555)](_0x242bc3, _0x5f53ea), _0x4501b0 = _0x380892 && _0x242bc3[_0x380892], _0x4501b0 && _0x4501b0[_0xef6b91(555)] && _0x355a8c['acceptData'](_0x242bc3) && (_0x203e5c[_0xef6b91(561)] = _0x4501b0['apply'](_0x242bc3, _0x5f53ea), _0x203e5c['result'] === ![] && _0x203e5c['preventDefault']());
            }
            return _0x203e5c[_0xef6b91(519)] = _0x12edb1, !_0xde761d && !_0x203e5c[_0xef6b91(562)]() && ((!_0xe5ea2d[_0xef6b91(563)] || _0xe5ea2d[_0xef6b91(563)][_0xef6b91(555)](_0x43e087[_0xef6b91(564)](), _0x5f53ea) === ![]) && _0x355a8c[_0xef6b91(565)](_0x5ab423) && (_0x380892 && _0x355a8c[_0xef6b91(566)](_0x5ab423[_0x12edb1]) && !_0x355a8c[_0xef6b91(556)](_0x5ab423) && (_0x2976c7 = _0x5ab423[_0x380892], _0x2976c7 && (_0x5ab423[_0x380892] = null), _0x355a8c['event']['triggered'] = _0x12edb1, _0x5ab423[_0x12edb1](), _0x355a8c[_0xef6b91(512)][_0xef6b91(548)] = undefined, _0x2976c7 && (_0x5ab423[_0x380892] = _0x2976c7)))), _0x203e5c[_0xef6b91(561)];
        },
        'dispatch': function (_0x5e0a04) {
            var _0x2784b8 = _0xee6261;
            _0x5e0a04 = _0x355a8c[_0x2784b8(512)][_0x2784b8(567)](_0x5e0a04);
            var _0x4981f8, _0x2481bc, _0x417b91, _0xfd392, _0x1f7488, _0xb59d75 = [], _0x209449 = _0x96bdbf[_0x2784b8(534)](arguments), _0x8f14d9 = (_0x11f457[_0x2784b8(513)](this, _0x2784b8(517)) || {})[_0x5e0a04[_0x2784b8(519)]] || [], _0x154b9d = _0x355a8c[_0x2784b8(512)][_0x2784b8(525)][_0x5e0a04[_0x2784b8(519)]] || {};
            _0x209449[0] = _0x5e0a04, _0x5e0a04[_0x2784b8(568)] = this;
            if (_0x154b9d['preDispatch'] && _0x154b9d[_0x2784b8(569)][_0x2784b8(534)](this, _0x5e0a04) === ![])
                return;
            _0xb59d75 = _0x355a8c['event']['handlers'][_0x2784b8(534)](this, _0x5e0a04, _0x8f14d9), _0x4981f8 = 0;
            while ((_0xfd392 = _0xb59d75[_0x4981f8++]) && !_0x5e0a04['isPropagationStopped']()) {
                _0x5e0a04[_0x2784b8(570)] = _0xfd392[_0x2784b8(571)], _0x2481bc = 0;
                while ((_0x1f7488 = _0xfd392[_0x2784b8(572)][_0x2481bc++]) && !_0x5e0a04[_0x2784b8(573)]()) {
                    (!_0x5e0a04[_0x2784b8(574)] || _0x5e0a04[_0x2784b8(574)][_0x2784b8(529)](_0x1f7488[_0x2784b8(543)])) && (_0x5e0a04['handleObj'] = _0x1f7488, _0x5e0a04['data'] = _0x1f7488[_0x2784b8(575)], _0x417b91 = ((_0x355a8c[_0x2784b8(512)][_0x2784b8(525)][_0x1f7488['origType']] || {})[_0x2784b8(518)] || _0x1f7488['handler'])[_0x2784b8(555)](_0xfd392[_0x2784b8(571)], _0x209449), _0x417b91 !== undefined && ((_0x5e0a04[_0x2784b8(561)] = _0x417b91) === ![] && (_0x5e0a04[_0x2784b8(576)](), _0x5e0a04[_0x2784b8(577)]())));
                }
            }
            return _0x154b9d[_0x2784b8(578)] && _0x154b9d[_0x2784b8(578)][_0x2784b8(534)](this, _0x5e0a04), _0x5e0a04['result'];
        },
        'handlers': function (_0x256ec7, _0x4dae83) {
            var _0x25685b = _0xee6261, _0x316eb3, _0x57ee2c, _0x456f3a, _0x3039b5, _0x4f2a24 = [], _0x584110 = _0x4dae83[_0x25685b(530)], _0x59839c = _0x256ec7[_0x25685b(579)];
            if (_0x584110 && _0x59839c[_0x25685b(547)] && (!_0x256ec7[_0x25685b(580)] || _0x256ec7['type'] !== _0x25685b(581)))
                for (; _0x59839c !== this; _0x59839c = _0x59839c[_0x25685b(557)] || this) {
                    if (_0x59839c[_0x25685b(582)] !== !![] || _0x256ec7[_0x25685b(519)] !== 'click') {
                        _0x57ee2c = [];
                        for (_0x316eb3 = 0; _0x316eb3 < _0x584110; _0x316eb3++) {
                            _0x3039b5 = _0x4dae83[_0x316eb3], _0x456f3a = _0x3039b5[_0x25685b(515)] + ' ', _0x57ee2c[_0x456f3a] === undefined && (_0x57ee2c[_0x456f3a] = _0x3039b5[_0x25685b(583)] ? _0x355a8c(_0x456f3a, this)[_0x25685b(584)](_0x59839c) >= 0 : _0x355a8c[_0x25685b(585)](_0x456f3a, this, null, [_0x59839c])[_0x25685b(522)]), _0x57ee2c[_0x456f3a] && _0x57ee2c[_0x25685b(558)](_0x3039b5);
                        }
                        _0x57ee2c[_0x25685b(522)] && _0x4f2a24[_0x25685b(558)]({
                            'elem': _0x59839c,
                            'handlers': _0x57ee2c
                        });
                    }
                }
            return _0x584110 < _0x4dae83[_0x25685b(522)] && _0x4f2a24['push']({
                'elem': this,
                'handlers': _0x4dae83[_0x25685b(586)](_0x584110)
            }), _0x4f2a24;
        },
        'props': 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'[_0xee6261(523)](' '),
        'fixHooks': {},
        'keyHooks': {
            'props': 'char charCode key keyCode'[_0xee6261(523)](' '),
            'filter': function (_0x24aba3, _0x1d2344) {
                var _0x15d487 = _0xee6261;
                return _0x24aba3[_0x15d487(587)] == null && (_0x24aba3[_0x15d487(587)] = _0x1d2344[_0x15d487(588)] != null ? _0x1d2344[_0x15d487(588)] : _0x1d2344[_0x15d487(589)]), _0x24aba3;
            }
        },
        'mouseHooks': {
            'props': _0xee6261(590)[_0xee6261(523)](' '),
            'filter': function (_0x452c8b, _0x3af3c7) {
                var _0x48abbe = _0xee6261, _0x125b08, _0x44aca9, _0xba3989, _0xd1fc83 = _0x3af3c7[_0x48abbe(580)];
                return _0x452c8b[_0x48abbe(591)] == null && _0x3af3c7[_0x48abbe(592)] != null && (_0x125b08 = _0x452c8b[_0x48abbe(579)][_0x48abbe(559)] || document, _0x44aca9 = _0x125b08[_0x48abbe(593)], _0xba3989 = _0x125b08[_0x48abbe(594)], _0x452c8b['pageX'] = _0x3af3c7['clientX'] + (_0x44aca9 && _0x44aca9[_0x48abbe(595)] || _0xba3989 && _0xba3989[_0x48abbe(595)] || 0) - (_0x44aca9 && _0x44aca9[_0x48abbe(596)] || _0xba3989 && _0xba3989[_0x48abbe(596)] || 0), _0x452c8b['pageY'] = _0x3af3c7[_0x48abbe(597)] + (_0x44aca9 && _0x44aca9['scrollTop'] || _0xba3989 && _0xba3989[_0x48abbe(598)] || 0) - (_0x44aca9 && _0x44aca9[_0x48abbe(599)] || _0xba3989 && _0xba3989[_0x48abbe(599)] || 0)), !_0x452c8b[_0x48abbe(587)] && _0xd1fc83 !== undefined && (_0x452c8b[_0x48abbe(587)] = _0xd1fc83 & 1 ? 1 : _0xd1fc83 & 2 ? 3 : _0xd1fc83 & 4 ? 2 : 0), _0x452c8b;
            }
        },
        'fix': function (_0x233579) {
            var _0x3d194f = _0xee6261;
            if (_0x233579[_0x355a8c[_0x3d194f(551)]])
                return _0x233579;
            var _0x42e8f7, _0x2391a0, _0x907f75, _0x56d0ab = _0x233579[_0x3d194f(519)], _0x3f7eaa = _0x233579, _0x6dc87c = this['fixHooks'][_0x56d0ab];
            !_0x6dc87c && (this[_0x3d194f(600)][_0x56d0ab] = _0x6dc87c = _0x66c44e[_0x3d194f(529)](_0x56d0ab) ? this[_0x3d194f(601)] : _0x1f3385[_0x3d194f(529)](_0x56d0ab) ? this['keyHooks'] : {});
            _0x907f75 = _0x6dc87c[_0x3d194f(602)] ? this[_0x3d194f(602)]['concat'](_0x6dc87c['props']) : this['props'], _0x233579 = new _0x355a8c[(_0x3d194f(603))](_0x3f7eaa), _0x42e8f7 = _0x907f75[_0x3d194f(522)];
            while (_0x42e8f7--) {
                _0x2391a0 = _0x907f75[_0x42e8f7], _0x233579[_0x2391a0] = _0x3f7eaa[_0x2391a0];
            }
            return !_0x233579['target'] && (_0x233579[_0x3d194f(579)] = document), _0x233579[_0x3d194f(579)]['nodeType'] === 3 && (_0x233579[_0x3d194f(579)] = _0x233579[_0x3d194f(579)][_0x3d194f(557)]), _0x6dc87c[_0x3d194f(604)] ? _0x6dc87c[_0x3d194f(604)](_0x233579, _0x3f7eaa) : _0x233579;
        },
        'special': {
            'load': { 'noBubble': !![] },
            'focus': {
                'trigger': function () {
                    if (this !== _0x2ec00a() && this['focus'])
                        return this['focus'](), ![];
                },
                'delegateType': _0xee6261(605)
            },
            'blur': {
                'trigger': function () {
                    var _0x220219 = _0xee6261;
                    if (this === _0x2ec00a() && this['blur'])
                        return this[_0x220219(606)](), ![];
                },
                'delegateType': _0xee6261(607)
            },
            'click': {
                'trigger': function () {
                    var _0xa10bbc = _0xee6261;
                    if (this[_0xa10bbc(519)] === _0xa10bbc(608) && this[_0xa10bbc(581)] && _0x355a8c['nodeName'](this, _0xa10bbc(609)))
                        return this[_0xa10bbc(581)](), ![];
                },
                '_default': function (_0x5715dc) {
                    var _0x586ba2 = _0xee6261;
                    return _0x355a8c[_0x586ba2(610)](_0x5715dc[_0x586ba2(579)], 'a');
                }
            },
            'beforeunload': {
                'postDispatch': function (_0x333f0c) {
                    var _0x4648f0 = _0xee6261;
                    _0x333f0c[_0x4648f0(561)] !== undefined && _0x333f0c[_0x4648f0(611)] && (_0x333f0c[_0x4648f0(611)][_0x4648f0(612)] = _0x333f0c[_0x4648f0(561)]);
                }
            }
        },
        'simulate': function (_0x554175, _0x1e5361, _0x59fae7, _0x4711c2) {
            var _0x2b05af = _0xee6261, _0x200c0d = _0x355a8c['extend'](new _0x355a8c[(_0x2b05af(603))](), _0x59fae7, {
                    'type': _0x554175,
                    'isSimulated': !![],
                    'originalEvent': {}
                });
            _0x4711c2 ? _0x355a8c[_0x2b05af(512)][_0x2b05af(554)](_0x200c0d, null, _0x1e5361) : _0x355a8c[_0x2b05af(512)][_0x2b05af(520)][_0x2b05af(534)](_0x1e5361, _0x200c0d), _0x200c0d[_0x2b05af(562)]() && _0x59fae7[_0x2b05af(576)]();
        }
    }, _0x355a8c[_0xee6261(545)] = function (_0x3a029f, _0x5a167c, _0x3cfd7b) {
        _0x3a029f['removeEventListener'] && _0x3a029f['removeEventListener'](_0x5a167c, _0x3cfd7b, ![]);
    }, _0x355a8c[_0xee6261(603)] = function (_0x4f25da, _0x43933e) {
        var _0x17218c = _0xee6261;
        if (!(this instanceof _0x355a8c['Event']))
            return new _0x355a8c[(_0x17218c(603))](_0x4f25da, _0x43933e);
        _0x4f25da && _0x4f25da['type'] ? (this[_0x17218c(611)] = _0x4f25da, this['type'] = _0x4f25da[_0x17218c(519)], this[_0x17218c(562)] = _0x4f25da[_0x17218c(613)] || _0x4f25da[_0x17218c(613)] === undefined && _0x4f25da[_0x17218c(612)] === ![] ? _0x529438 : _0x4f4d84) : this[_0x17218c(519)] = _0x4f25da, _0x43933e && _0x355a8c[_0x17218c(614)](this, _0x43933e), this[_0x17218c(615)] = _0x4f25da && _0x4f25da[_0x17218c(615)] || _0x355a8c[_0x17218c(616)](), this[_0x355a8c[_0x17218c(551)]] = !![];
    }, _0x355a8c[_0xee6261(603)][_0xee6261(617)] = {
        'isDefaultPrevented': _0x4f4d84,
        'isPropagationStopped': _0x4f4d84,
        'isImmediatePropagationStopped': _0x4f4d84,
        'preventDefault': function () {
            var _0xbb583a = _0xee6261, _0x51454d = this[_0xbb583a(611)];
            this[_0xbb583a(562)] = _0x529438, _0x51454d && _0x51454d[_0xbb583a(576)] && _0x51454d['preventDefault']();
        },
        'stopPropagation': function () {
            var _0x37895d = _0xee6261, _0x6148bf = this[_0x37895d(611)];
            this[_0x37895d(560)] = _0x529438, _0x6148bf && _0x6148bf[_0x37895d(577)] && _0x6148bf[_0x37895d(577)]();
        },
        'stopImmediatePropagation': function () {
            var _0x3f9d87 = _0xee6261, _0x54ea0b = this[_0x3f9d87(611)];
            this[_0x3f9d87(573)] = _0x529438, _0x54ea0b && _0x54ea0b[_0x3f9d87(618)] && _0x54ea0b[_0x3f9d87(618)](), this[_0x3f9d87(577)]();
        }
    }, _0x355a8c[_0xee6261(619)]({
        'mouseenter': 'mouseover',
        'mouseleave': 'mouseout',
        'pointerenter': _0xee6261(620),
        'pointerleave': _0xee6261(621)
    }, function (_0x2b3b9e, _0x16a14f) {
        var _0x7b34fd = _0xee6261;
        _0x355a8c[_0x7b34fd(512)][_0x7b34fd(525)][_0x2b3b9e] = {
            'delegateType': _0x16a14f,
            'bindType': _0x16a14f,
            'handle': function (_0x287adb) {
                var _0x24745b = _0x7b34fd, _0x3cf176, _0x451a47 = this, _0x2bc613 = _0x287adb['relatedTarget'], _0x212f6f = _0x287adb[_0x24745b(622)];
                return (!_0x2bc613 || _0x2bc613 !== _0x451a47 && !_0x355a8c[_0x24745b(623)](_0x451a47, _0x2bc613)) && (_0x287adb[_0x24745b(519)] = _0x212f6f[_0x24745b(542)], _0x3cf176 = _0x212f6f[_0x24745b(514)][_0x24745b(555)](this, arguments), _0x287adb[_0x24745b(519)] = _0x16a14f), _0x3cf176;
            }
        };
    }), !_0x2755e5[_0xee6261(624)] && _0x355a8c[_0xee6261(619)]({
        'focus': _0xee6261(605),
        'blur': 'focusout'
    }, function (_0x18baf3, _0x18b658) {
        var _0x3f5594 = _0xee6261, _0x4574ee = function (_0x105ea0) {
                var _0x3e25c9 = _0x3bc2;
                _0x355a8c['event'][_0x3e25c9(625)](_0x18b658, _0x105ea0[_0x3e25c9(579)], _0x355a8c[_0x3e25c9(512)][_0x3e25c9(567)](_0x105ea0), !![]);
            };
        _0x355a8c[_0x3f5594(512)][_0x3f5594(525)][_0x18b658] = {
            'setup': function () {
                var _0x593f47 = _0x3f5594, _0x113820 = this[_0x593f47(559)] || this, _0x46c189 = _0x11f457[_0x593f47(626)](_0x113820, _0x18b658);
                !_0x46c189 && _0x113820['addEventListener'](_0x18baf3, _0x4574ee, !![]), _0x11f457[_0x593f47(626)](_0x113820, _0x18b658, (_0x46c189 || 0) + 1);
            },
            'teardown': function () {
                var _0x1cc6a1 = _0x3f5594, _0x5abd99 = this[_0x1cc6a1(559)] || this, _0xf2742f = _0x11f457[_0x1cc6a1(626)](_0x5abd99, _0x18b658) - 1;
                !_0xf2742f ? (_0x5abd99[_0x1cc6a1(627)](_0x18baf3, _0x4574ee, !![]), _0x11f457['remove'](_0x5abd99, _0x18b658)) : _0x11f457[_0x1cc6a1(626)](_0x5abd99, _0x18b658, _0xf2742f);
            }
        };
    }), _0x355a8c['fn']['extend']({
        'on': function (_0x21aa7f, _0x3181c3, _0x1e1921, _0x2e51ad, _0x3dc6fe) {
            var _0x3bdbda = _0xee6261, _0x513b86, _0x444edd;
            if (typeof _0x21aa7f === _0x3bdbda(628)) {
                typeof _0x3181c3 !== 'string' && (_0x1e1921 = _0x1e1921 || _0x3181c3, _0x3181c3 = undefined);
                for (_0x444edd in _0x21aa7f) {
                    this['on'](_0x444edd, _0x3181c3, _0x1e1921, _0x21aa7f[_0x444edd], _0x3dc6fe);
                }
                return this;
            }
            if (_0x1e1921 == null && _0x2e51ad == null)
                _0x2e51ad = _0x3181c3, _0x1e1921 = _0x3181c3 = undefined;
            else
                _0x2e51ad == null && (typeof _0x3181c3 === 'string' ? (_0x2e51ad = _0x1e1921, _0x1e1921 = undefined) : (_0x2e51ad = _0x1e1921, _0x1e1921 = _0x3181c3, _0x3181c3 = undefined));
            if (_0x2e51ad === ![])
                _0x2e51ad = _0x4f4d84;
            else {
                if (!_0x2e51ad)
                    return this;
            }
            return _0x3dc6fe === 1 && (_0x513b86 = _0x2e51ad, _0x2e51ad = function (_0x534515) {
                var _0x4c0d57 = _0x3bdbda;
                return _0x355a8c()[_0x4c0d57(629)](_0x534515), _0x513b86[_0x4c0d57(555)](this, arguments);
            }, _0x2e51ad[_0x3bdbda(516)] = _0x513b86['guid'] || (_0x513b86[_0x3bdbda(516)] = _0x355a8c[_0x3bdbda(516)]++)), this[_0x3bdbda(619)](function () {
                var _0x231618 = _0x3bdbda;
                _0x355a8c['event'][_0x231618(533)](this, _0x21aa7f, _0x2e51ad, _0x1e1921, _0x3181c3);
            });
        },
        'one': function (_0x217dc2, _0x479e5f, _0x591de1, _0xbffc32) {
            return this['on'](_0x217dc2, _0x479e5f, _0x591de1, _0xbffc32, 1);
        },
        'off': function (_0x68f4f7, _0x106fa9, _0x1852cd) {
            var _0x37a195 = _0xee6261, _0x4b4e07, _0x16a860;
            if (_0x68f4f7 && _0x68f4f7[_0x37a195(576)] && _0x68f4f7[_0x37a195(622)])
                return _0x4b4e07 = _0x68f4f7['handleObj'], _0x355a8c(_0x68f4f7[_0x37a195(568)])[_0x37a195(629)](_0x4b4e07[_0x37a195(543)] ? _0x4b4e07['origType'] + '.' + _0x4b4e07[_0x37a195(543)] : _0x4b4e07[_0x37a195(542)], _0x4b4e07[_0x37a195(515)], _0x4b4e07[_0x37a195(514)]), this;
            if (typeof _0x68f4f7 === 'object') {
                for (_0x16a860 in _0x68f4f7) {
                    this[_0x37a195(629)](_0x16a860, _0x106fa9, _0x68f4f7[_0x16a860]);
                }
                return this;
            }
            return (_0x106fa9 === ![] || typeof _0x106fa9 === _0x37a195(630)) && (_0x1852cd = _0x106fa9, _0x106fa9 = undefined), _0x1852cd === ![] && (_0x1852cd = _0x4f4d84), this[_0x37a195(619)](function () {
                var _0x126b1f = _0x37a195;
                _0x355a8c[_0x126b1f(512)][_0x126b1f(537)](this, _0x68f4f7, _0x1852cd, _0x106fa9);
            });
        },
        'trigger': function (_0x57409f, _0x42c4fe) {
            var _0x46b160 = _0xee6261;
            return this[_0x46b160(619)](function () {
                var _0xe98d34 = _0x46b160;
                _0x355a8c[_0xe98d34(512)][_0xe98d34(554)](_0x57409f, _0x42c4fe, this);
            });
        },
        'triggerHandler': function (_0x2d2461, _0x3bb433) {
            var _0x3ad67e = _0xee6261, _0x56f4c1 = this[0];
            if (_0x56f4c1)
                return _0x355a8c[_0x3ad67e(512)][_0x3ad67e(554)](_0x2d2461, _0x3bb433, _0x56f4c1, !![]);
        }
    }), _0x355a8c;
});