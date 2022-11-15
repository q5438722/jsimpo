const X_DIM = 'x', Y_DIM = 'y', Z_DIM = 'z', InitialOperationField = {
        'transformTranslate': [
            0,
            0,
            0
        ],
        'transformScale': [
            1,
            1,
            1
        ]
    }, InterpolateMatrix = {
        'transformScale': function (_0x20c839, _0x3652b4, _0x1b5d20, _0x2a453b) {
            _0x20c839[0] = _0x20c839[0] * _0x3652b4, _0x20c839[1] = _0x20c839[1] * _0x3652b4, _0x20c839[2] = _0x20c839[2] * _0x3652b4, _0x20c839[3] = _0x20c839[3] * _0x3652b4, _0x20c839[4] = _0x20c839[4] * _0x1b5d20, _0x20c839[5] = _0x20c839[5] * _0x1b5d20, _0x20c839[6] = _0x20c839[6] * _0x1b5d20, _0x20c839[7] = _0x20c839[7] * _0x1b5d20, _0x20c839[8] = _0x20c839[8] * _0x2a453b, _0x20c839[9] = _0x20c839[9] * _0x2a453b, _0x20c839[10] = _0x20c839[10] * _0x2a453b, _0x20c839[11] = _0x20c839[11] * _0x2a453b;
        },
        'transformTranslate': function (_0x2344ed, _0x922527, _0x444494, _0x24cd18) {
            _0x2344ed[12] = _0x2344ed[0] * _0x922527 + _0x2344ed[4] * _0x444494 + _0x2344ed[8] * _0x24cd18 + _0x2344ed[12], _0x2344ed[13] = _0x2344ed[1] * _0x922527 + _0x2344ed[5] * _0x444494 + _0x2344ed[9] * _0x24cd18 + _0x2344ed[13], _0x2344ed[14] = _0x2344ed[2] * _0x922527 + _0x2344ed[6] * _0x444494 + _0x2344ed[10] * _0x24cd18 + _0x2344ed[14], _0x2344ed[15] = _0x2344ed[3] * _0x922527 + _0x2344ed[7] * _0x444494 + _0x2344ed[11] * _0x24cd18 + _0x2344ed[15];
        }
    }, computeNextValLinear = function (_0x5e4537, _0x5dcf48, _0x2e5acb, _0x2c6f3d) {
        const _0x282fe4 = _0x5313, _0x4f8bd0 = _0x282fe4(358) in _0x5e4537, _0x4997b3 = _0x5e4537['round'];
        let _0x3fce3e = (_0x2c6f3d - _0x5e4537[_0x282fe4(359)]) / (_0x5e4537[_0x282fe4(360)] - _0x5e4537['min']);
        !_0x5e4537['extrapolate'] && (_0x3fce3e = _0x3fce3e > 1 ? 1 : _0x3fce3e < 0 ? 0 : _0x3fce3e);
        let _0x2ab425 = _0x5dcf48 * (1 - _0x3fce3e) + _0x2e5acb * _0x3fce3e;
        return _0x4f8bd0 && (_0x2ab425 = Math['round'](_0x4997b3 * _0x2ab425) / _0x4997b3), !isFinite(_0x2ab425) && (_0x2ab425 = null), _0x2ab425;
    }, computeNextValLinearScalar = function (_0x4e018f, _0x4037b6) {
        const _0x20572c = _0x5313;
        return computeNextValLinear(_0x4e018f, _0x4e018f[_0x20572c(361)], _0x4e018f['to'], _0x4037b6);
    }, setNextValAndDetectChange = function (_0x12b5f1, _0x42267f, _0x4c6aef, _0x25c512) {
        if (!_0x25c512) {
            const _0x2d2cbf = _0x12b5f1[_0x42267f];
            _0x12b5f1[_0x42267f] = _0x4c6aef, _0x25c512 = _0x25c512 || _0x4c6aef !== _0x2d2cbf;
        } else
            _0x12b5f1[_0x42267f] = _0x4c6aef;
        return _0x25c512;
    }, initIdentity = function (_0xc07aa4) {
        _0xc07aa4[0] = 1, _0xc07aa4[1] = 0, _0xc07aa4[2] = 0, _0xc07aa4[3] = 0, _0xc07aa4[4] = 0, _0xc07aa4[5] = 1, _0xc07aa4[6] = 0, _0xc07aa4[7] = 0, _0xc07aa4[8] = 0, _0xc07aa4[9] = 0, _0xc07aa4[10] = 1, _0xc07aa4[11] = 0, _0xc07aa4[12] = 0, _0xc07aa4[13] = 0, _0xc07aa4[14] = 0, _0xc07aa4[15] = 1;
    }, computeNextMatrixOperationField = function (_0x5c3ccd, _0x466645, _0x47cd37, _0x233f24, _0x4d86df) {
        const _0x117b6b = _0x5313;
        return _0x5c3ccd[_0x117b6b(361)][_0x47cd37] !== undefined && _0x5c3ccd['to'][_0x47cd37] !== undefined ? computeNextValLinear(_0x5c3ccd, _0x5c3ccd[_0x117b6b(361)][_0x47cd37], _0x5c3ccd['to'][_0x47cd37], _0x4d86df) : InitialOperationField[_0x466645][_0x233f24];
    }, computeTransform = function (_0x598291, _0x516012, _0x57c3a2, _0x475461, _0x5718f9, _0x554c6b) {
        const _0x36523d = _0x5313, _0x3895d6 = _0x475461['transform'] !== undefined ? _0x475461['transform'] : _0x475461[_0x36523d(362)] = [{ 'matrix': [] }], _0x2c3e18 = _0x3895d6[0][_0x36523d(363)], _0x54d9ef = _0x2c3e18[0], _0x1f1ee8 = _0x2c3e18[1], _0x4d1666 = _0x2c3e18[2], _0x454ffa = _0x2c3e18[3], _0x1408e3 = _0x2c3e18[4], _0x5b19e6 = _0x2c3e18[5], _0x287518 = _0x2c3e18[6], _0x97c42e = _0x2c3e18[7], _0x57484a = _0x2c3e18[8], _0x168f3d = _0x2c3e18[9], _0x9d239d = _0x2c3e18[10], _0x44b7c6 = _0x2c3e18[11], _0x67b0a2 = _0x2c3e18[12], _0x476f98 = _0x2c3e18[13], _0xf86e79 = _0x2c3e18[14], _0x1eca1d = _0x2c3e18[15];
        !_0x554c6b && initIdentity(_0x2c3e18);
        const _0x3a17fd = computeNextMatrixOperationField(_0x598291, _0x516012, X_DIM, 0, _0x57c3a2), _0xe89b47 = computeNextMatrixOperationField(_0x598291, _0x516012, Y_DIM, 1, _0x57c3a2), _0x3c5d08 = computeNextMatrixOperationField(_0x598291, _0x516012, Z_DIM, 2, _0x57c3a2);
        return InterpolateMatrix[_0x516012](_0x2c3e18, _0x3a17fd, _0xe89b47, _0x3c5d08), !_0x5718f9 && (_0x5718f9 = _0x54d9ef !== _0x2c3e18[0] || _0x1f1ee8 !== _0x2c3e18[1] || _0x4d1666 !== _0x2c3e18[2] || _0x454ffa !== _0x2c3e18[3] || _0x1408e3 !== _0x2c3e18[4] || _0x5b19e6 !== _0x2c3e18[5] || _0x287518 !== _0x2c3e18[6] || _0x97c42e !== _0x2c3e18[7] || _0x57484a !== _0x2c3e18[8] || _0x168f3d !== _0x2c3e18[9] || _0x9d239d !== _0x2c3e18[10] || _0x44b7c6 !== _0x2c3e18[11] || _0x67b0a2 !== _0x2c3e18[12] || _0x476f98 !== _0x2c3e18[13] || _0xf86e79 !== _0x2c3e18[14] || _0x1eca1d !== _0x2c3e18[15]), _0x5718f9;
    }, buildStyleInterpolator = function (_0x1c24a3) {
        function _0x142cca(_0x2ad122, _0x539309) {
            const _0x2f51a7 = _0x5313;
            let _0x457930 = ![], _0x3af404 = ![];
            for (const _0x12b20d in _0x1c24a3) {
                const _0x5254bb = _0x1c24a3[_0x12b20d];
                if (_0x5254bb['type'] === _0x2f51a7(364)) {
                    if (_0x12b20d in InterpolateMatrix)
                        _0x457930 = computeTransform(_0x5254bb, _0x12b20d, _0x539309, _0x2ad122, _0x457930, _0x3af404), _0x3af404 = !![];
                    else {
                        const _0x561244 = computeNextValLinearScalar(_0x5254bb, _0x539309);
                        _0x457930 = setNextValAndDetectChange(_0x2ad122, _0x12b20d, _0x561244, _0x457930);
                    }
                } else {
                    if (_0x5254bb[_0x2f51a7(365)] === _0x2f51a7(366)) {
                        const _0x262484 = _0x5254bb[_0x2f51a7(367)];
                        _0x457930 = setNextValAndDetectChange(_0x2ad122, _0x12b20d, _0x262484, _0x457930);
                    } else {
                        if (_0x5254bb[_0x2f51a7(365)] === 'step') {
                            const _0x18fff7 = _0x539309 >= _0x5254bb[_0x2f51a7(368)] ? _0x5254bb['to'] : _0x5254bb['from'];
                            _0x457930 = setNextValAndDetectChange(_0x2ad122, _0x12b20d, _0x18fff7, _0x457930);
                        } else {
                            if (_0x5254bb[_0x2f51a7(365)] === _0x2f51a7(369)) {
                                const _0x2b1940 = _0x539309;
                                _0x457930 = setNextValAndDetectChange(_0x2ad122, _0x12b20d, _0x2b1940, _0x457930);
                            }
                        }
                    }
                }
            }
            return _0x457930;
        }
        return _0x142cca;
    };
module['exports'] = buildStyleInterpolator;