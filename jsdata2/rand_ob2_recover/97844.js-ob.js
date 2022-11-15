function _0x67a2(_0x404be7, _0x17bacd) {
    return _0x67a2 = function (_0x1a5607, _0x67a2a9) {
        _0x1a5607 = _0x1a5607 - 465;
        let _0x130f59 = _0x1a56[_0x1a5607];
        return _0x130f59;
    }, _0x67a2(_0x404be7, _0x17bacd);
}
function expectHookNamesToEqual(_0x2ea35d, _0x49fb73) {
    const _0x5da594 = _0x67a2;
    expect(Array[_0x5da594(474)](_0x2ea35d[_0x5da594(475)]()))[_0x5da594(476)](_0x49fb73);
}
function requireText(_0x1c3475, _0x53ccd4) {
    const _0x2b2627 = _0x67a2, {
            existsSync: _0x5867ed,
            readFileSync: _0x3538ed
        } = require('fs');
    return _0x5867ed(_0x1c3475) ? Promise[_0x2b2627(477)](_0x3538ed(_0x1c3475, _0x53ccd4)) : Promise['reject'](_0x2b2627(478) + _0x1c3475 + '"');
}
describe(_0x3ec279(479), () => {
    const _0x29f6a5 = _0x3ec279;
    let _0x3495f8, _0x5630f5, _0x4c8f40;
    beforeEach(() => {
        const _0xc28a1e = _0x67a2;
        jest[_0xc28a1e(480)](), jest[_0xc28a1e(481)](_0xc28a1e(482), () => {
            const _0x851712 = _0xc28a1e;
            console[_0x851712(483)](_0x851712(482));
        }), _0x3495f8 = require(_0xc28a1e(484)), _0x3495f8[_0xc28a1e(485)](), _0x5630f5 = require(_0xc28a1e(486))['inspectHooks'], _0x4c8f40 = require(_0xc28a1e(487))['parseHookNames'], Error[_0xc28a1e(488)] = (_0x536fef, _0x5f2717) => {
            const _0x2fe657 = _0xc28a1e;
            return _0x536fef[_0x2fe657(489)];
        }, _0x3495f8['mockIf'](/.+$/, _0x5e1647 => {
            const _0x5730fb = _0xc28a1e, _0x1a33dc = _0x5e1647[_0x5730fb(490)], _0x4cdcc4 = /external\/.*\.map/[_0x5730fb(491)](_0x1a33dc);
            if (_0x4cdcc4) {
                expect(_0x1a33dc[_0x5730fb(492)](_0x5730fb(493)))[_0x5730fb(494)](!![]);
                const _0x1fd1d8 = _0x1a33dc['split']('?')[0];
                return requireText(_0x1fd1d8, _0x5730fb(495));
            }
            return requireText(_0x1a33dc, 'utf8');
        });
    }), afterEach(() => {
        fetch['resetMocks']();
    });
    async function _0x3573db(_0x40bf39, _0x2c8ce0 = {}) {
        const _0x25a121 = _0x5630f5(_0x40bf39, _0x2c8ce0, undefined, !![]), _0x1a598c = await _0x4c8f40(_0x25a121);
        return _0x1a598c;
    }
    it(_0x29f6a5(496), async () => {
        const _0x41f051 = _0x29f6a5, _0xf53f30 = require(_0x41f051(497))[_0x41f051(498)], _0x5dad52 = await _0x3573db(_0xf53f30);
        expectHookNamesToEqual(_0x5dad52, [
            _0x41f051(499),
            _0x41f051(500),
            _0x41f051(501),
            null
        ]);
    }), it(_0x29f6a5(502), async () => {
        const _0x4ce910 = _0x29f6a5, _0x1c7465 = require(_0x4ce910(503))[_0x4ce910(498)], _0x1acaa2 = await _0x3573db(_0x1c7465);
        expectHookNamesToEqual(_0x1acaa2, [
            'foo',
            _0x4ce910(500),
            _0x4ce910(501)
        ]);
    }), it(_0x29f6a5(504), async () => {
        const _0x96cf20 = _0x29f6a5, _0x144d9a = require(_0x96cf20(505))[_0x96cf20(498)];
        _0x3495f8[_0x96cf20(506)](/.+$/, _0x656614 => {
            const _0x196951 = _0x96cf20;
            throw Error('Unexpected file request for "' + _0x656614[_0x196951(490)] + '"');
        });
        const _0x44205 = await _0x3573db(_0x144d9a);
        expectHookNamesToEqual(_0x44205, []);
    }), it('should skip loading source files for unnamed hooks like useEffect (alternate)', async () => {
        const _0x100a29 = _0x29f6a5, _0x22c488 = require(_0x100a29(507))[_0x100a29(498)];
        _0x3495f8['mockIf'](/.+$/, _0x1b9599 => {
            const _0x2d67e1 = _0x100a29;
            if (_0x1b9599[_0x2d67e1(490)][_0x2d67e1(508)](_0x2d67e1(509)))
                throw Error(_0x2d67e1(510) + _0x1b9599[_0x2d67e1(490)] + '"');
            return requireText(_0x1b9599['url'], 'utf8');
        });
        const _0x1dd6f2 = await _0x3573db(_0x22c488);
        expectHookNamesToEqual(_0x1dd6f2, [
            _0x100a29(511),
            null
        ]);
    }), it(_0x29f6a5(512), async () => {
        const _0x581852 = _0x29f6a5, _0x4ae3df = require(_0x581852(513))[_0x581852(498)], _0x2b9383 = await _0x3573db(_0x4ae3df);
        expectHookNamesToEqual(_0x2b9383, [
            _0x581852(499),
            null,
            _0x581852(501)
        ]);
    }), it('should parse names for code using hooks indirectly', async () => {
        const _0x293f28 = _0x29f6a5, _0x53e717 = require('./__source__/__untransformed__/ComponentUsingHooksIndirectly')[_0x293f28(498)], _0x38aba8 = await _0x3573db(_0x53e717);
        expectHookNamesToEqual(_0x38aba8, [
            _0x293f28(511),
            _0x293f28(514),
            _0x293f28(515)
        ]);
    }), it(_0x29f6a5(516), async () => {
        const _0x14a324 = _0x29f6a5, _0x2a74bc = require('./__source__/__untransformed__/ComponentWithNestedHooks')[_0x14a324(498)];
        let _0x5adabc;
        const _0x5340ff = await _0x3573db(_0x2a74bc, {
                'callback': _0x5dcd0e => {
                    _0x5adabc = _0x5dcd0e;
                }
            }), _0x5db060 = await _0x3573db(_0x5adabc);
        expectHookNamesToEqual(_0x5340ff, [_0x14a324(517)]), expectHookNamesToEqual(_0x5db060, [_0x14a324(518)]);
    }), it(_0x29f6a5(519), async () => {
        const _0x187d3c = _0x29f6a5, _0x40349c = require(_0x187d3c(520))['Component'], _0x2776c0 = await _0x3573db(_0x40349c);
        expectHookNamesToEqual(_0x2776c0, [
            null,
            null,
            null
        ]);
    }), describe('inline, external and bundle source maps', () => {
        const _0x13830b = _0x29f6a5;
        it('should work for simple components', async () => {
            const _0x38c92d = _0x67a2;
            async function _0xd548db(_0x3b54e2, _0x33c3d0 = _0x38c92d(498)) {
                const _0x12af06 = _0x38c92d, _0x26f7b4 = require(_0x3b54e2)[_0x33c3d0], _0x5449c9 = await _0x3573db(_0x26f7b4);
                expectHookNamesToEqual(_0x5449c9, [_0x12af06(511)]);
            }
            await _0xd548db(_0x38c92d(521)), await _0xd548db('./__source__/__compiled__/inline/Example'), await _0xd548db(_0x38c92d(522)), await _0xd548db(_0x38c92d(523)), await _0xd548db('./__source__/__compiled__/external/index-map/Example'), await _0xd548db(_0x38c92d(524), _0x38c92d(525)), await _0xd548db('./__source__/__compiled__/no-columns/Example');
        }), it(_0x13830b(526), async () => {
            const _0x22574f = _0x13830b;
            async function _0x311576(_0x2c2b28, _0x174bef = undefined) {
                const _0x2ed578 = _0x67a2, _0x46c5e2 = _0x174bef != null ? require(_0x2c2b28)[_0x174bef] : require(_0x2c2b28);
                let _0x2ada8a = await _0x3573db(_0x46c5e2[_0x2ed578(527)]);
                expectHookNamesToEqual(_0x2ada8a, [
                    'newItemText',
                    _0x2ed578(528),
                    _0x2ed578(529),
                    _0x2ed578(530),
                    _0x2ed578(531),
                    _0x2ed578(532),
                    'removeItem',
                    'toggleItem'
                ]), _0x2ada8a = await _0x3573db(_0x46c5e2[_0x2ed578(533)], { 'item': {} }), expectHookNamesToEqual(_0x2ada8a, [
                    _0x2ed578(534),
                    'handleToggle'
                ]);
            }
            await _0x311576('./__source__/ToDoList'), await _0x311576('./__source__/__compiled__/inline/ToDoList'), await _0x311576('./__source__/__compiled__/external/ToDoList'), await _0x311576(_0x22574f(535)), await _0x311576(_0x22574f(536)), await _0x311576(_0x22574f(537), _0x22574f(538)), await _0x311576(_0x22574f(539));
        }), it(_0x13830b(540), async () => {
            const _0x5b600f = _0x13830b;
            async function _0x2e3790(_0x926b36, _0x491b37 = _0x5b600f(498)) {
                const _0x458a8e = _0x5b600f, _0x3b1477 = require(_0x926b36)[_0x491b37], _0x5d477e = await _0x3573db(_0x3b1477);
                expectHookNamesToEqual(_0x5d477e, [
                    _0x458a8e(511),
                    _0x458a8e(515),
                    'isDarkMode',
                    null
                ]);
            }
            await _0x2e3790(_0x5b600f(541)), await _0x2e3790('./__source__/__compiled__/inline/ComponentWithCustomHook'), await _0x2e3790(_0x5b600f(542)), await _0x2e3790(_0x5b600f(543)), await _0x2e3790(_0x5b600f(544)), await _0x2e3790(_0x5b600f(537), _0x5b600f(545)), await _0x2e3790(_0x5b600f(546));
        }), it(_0x13830b(547), async () => {
            const _0x8d17e3 = _0x13830b;
            async function _0x2f08c3(_0x3e1114, _0x2a6924 = _0x8d17e3(498)) {
                const _0x2951d6 = _0x8d17e3, _0x164de1 = require(_0x3e1114)[_0x2a6924], _0x21d807 = await _0x3573db(_0x164de1);
                expectHookNamesToEqual(_0x21d807, [
                    _0x2951d6(511),
                    _0x2951d6(514),
                    _0x2951d6(515)
                ]);
            }
            await _0x2f08c3(_0x8d17e3(548)), await _0x2f08c3(_0x8d17e3(549)), await _0x2f08c3('./__source__/__compiled__/inline/index-map/ComponentUsingHooksIndirectly'), await _0x2f08c3(_0x8d17e3(550)), await _0x2f08c3(_0x8d17e3(537), _0x8d17e3(551)), await _0x2f08c3(_0x8d17e3(552));
        }), it(_0x13830b(553), async () => {
            const _0x5ed887 = _0x13830b;
            async function _0x84abea(_0xc596d9, _0x309d9d = _0x5ed887(498)) {
                const _0x2ca02f = _0x5ed887, _0xb61d7d = require(_0xc596d9)[_0x309d9d];
                let _0x579d98;
                const _0x563203 = await _0x3573db(_0xb61d7d, {
                        'callback': _0x1e803b => {
                            _0x579d98 = _0x1e803b;
                        }
                    }), _0x1e485e = await _0x3573db(_0x579d98);
                expectHookNamesToEqual(_0x563203, [_0x2ca02f(517)]), expectHookNamesToEqual(_0x1e485e, [_0x2ca02f(518)]);
            }
            await _0x84abea('./__source__/__compiled__/inline/ComponentWithNestedHooks'), await _0x84abea(_0x5ed887(554)), await _0x84abea('./__source__/__compiled__/inline/index-map/ComponentWithNestedHooks'), await _0x84abea(_0x5ed887(555)), await _0x84abea(_0x5ed887(537), _0x5ed887(556)), await _0x84abea(_0x5ed887(557));
        }), it(_0x13830b(558), async () => {
            const _0x3458ba = _0x13830b;
            async function _0x1d238b(_0x47f852, _0x5c1132 = _0x3458ba(498)) {
                const _0x317821 = _0x3458ba, _0x20f704 = require(_0x47f852)[_0x5c1132], _0x342290 = await _0x3573db(_0x20f704);
                expectHookNamesToEqual(_0x342290, [
                    _0x317821(559),
                    _0x317821(559)
                ]);
            }
            await _0x1d238b(_0x3458ba(560)), await _0x1d238b(_0x3458ba(561)), await _0x1d238b('./__source__/__compiled__/inline/index-map/ComponentWithExternalCustomHooks'), await _0x1d238b(_0x3458ba(562)), await _0x1d238b(_0x3458ba(537), _0x3458ba(563)), await _0x1d238b(_0x3458ba(564));
        }), it('should work when multiple hooks are on a line', async () => {
            const _0x3750be = _0x13830b;
            async function _0x1f02e5(_0x569839, _0x30430b = _0x3750be(498)) {
                const _0x513a2b = require(_0x569839)[_0x30430b], _0x3e3321 = await _0x3573db(_0x513a2b);
                expectHookNamesToEqual(_0x3e3321, [
                    'a',
                    'b',
                    'c',
                    'd'
                ]);
            }
            await _0x1f02e5(_0x3750be(565)), await _0x1f02e5(_0x3750be(566)), await _0x1f02e5('./__source__/__compiled__/inline/index-map/ComponentWithMultipleHooksPerLine'), await _0x1f02e5(_0x3750be(567)), await _0x1f02e5(_0x3750be(537), 'ComponentWithMultipleHooksPerLine');
            async function _0xb0e6e7(_0x4954df, _0x44fd8c = _0x3750be(498)) {
                const _0x4b8656 = require(_0x4954df)[_0x44fd8c], _0x5f3dcb = await _0x3573db(_0x4b8656);
                expectHookNamesToEqual(_0x5f3dcb, [
                    'a',
                    'b',
                    null,
                    null
                ]);
            }
            await _0xb0e6e7(_0x3750be(568));
        }), xit(_0x13830b(569), async () => {
            const _0x529c1e = _0x13830b;
            async function _0x7e36c6(_0x5ee598, _0x36d48a = _0x529c1e(498)) {
                const _0x3283d4 = _0x529c1e, _0x3ff608 = require(_0x5ee598)[_0x36d48a], _0x3e1868 = await _0x3573db(_0x3ff608);
                expectHookNamesToEqual(_0x3e1868, [_0x3283d4(511)]);
            }
            await _0x7e36c6(_0x529c1e(570)), await _0x7e36c6(_0x529c1e(571)), await _0x7e36c6(_0x529c1e(572)), await _0x7e36c6(_0x529c1e(573)), await _0x7e36c6(_0x529c1e(574)), await _0x7e36c6(_0x529c1e(537), _0x529c1e(575)), await _0x7e36c6(_0x529c1e(576));
        }), it(_0x13830b(577), async () => {
            const _0x172aeb = _0x13830b;
            async function _0x46878(_0x193144, _0x2934f3 = _0x172aeb(498)) {
                const _0x297750 = _0x172aeb, _0x4ece36 = require(_0x193144)[_0x2934f3], _0x947bc9 = await _0x3573db(_0x4ece36);
                expectHookNamesToEqual(_0x947bc9, [_0x297750(511)]);
            }
            console['warn'] = () => {
            }, await _0x46878(_0x172aeb(578)), await _0x46878('./__source__/__compiled__/inline/ContainingStringSourceMappingURL'), await _0x46878('./__source__/__compiled__/external/ContainingStringSourceMappingURL'), await _0x46878(_0x172aeb(579)), await _0x46878(_0x172aeb(580)), await _0x46878(_0x172aeb(537), _0x172aeb(581)), await _0x46878(_0x172aeb(582));
        });
    }), describe('extended source maps', () => {
        const _0x4f1a99 = _0x29f6a5;
        beforeEach(() => {
            const _0x52f087 = _0x67a2, _0xeb12c3 = require(_0x52f087(583)), _0x3c8cc8 = require(_0x52f087(584));
            jest[_0x52f087(585)](_0xeb12c3, _0x52f087(586)), jest[_0x52f087(585)](_0x3c8cc8, _0x52f087(587));
        }), it(_0x4f1a99(588), async () => {
            const _0x54f013 = _0x4f1a99;
            async function _0x86932a(_0x115c53, _0x4cc321 = _0x54f013(498)) {
                const _0x273275 = _0x54f013, _0x4eb174 = require(_0x115c53)[_0x4cc321], _0x37ce7e = await _0x3573db(_0x4eb174);
                expectHookNamesToEqual(_0x37ce7e, ['count']), expect(require(_0x273275(583))[_0x273275(586)])[_0x273275(589)](0), expect(require(_0x273275(584))[_0x273275(587)])[_0x273275(590)]();
            }
            await _0x86932a(_0x54f013(591)), await _0x86932a('./__source__/__compiled__/external/fb-sources-extended/Example'), await _0x86932a('./__source__/__compiled__/inline/react-sources-extended/Example'), await _0x86932a('./__source__/__compiled__/external/react-sources-extended/Example'), await _0x86932a(_0x54f013(592)), await _0x86932a(_0x54f013(593)), await _0x86932a('./__source__/__compiled__/inline/react-sources-extended/index-map/Example'), await _0x86932a(_0x54f013(594));
        }), it('should work with more complex files and components', async () => {
            const _0x1a861a = _0x4f1a99;
            async function _0x361c0b(_0x5f16fc, _0x3e20e3 = undefined) {
                const _0x55c2fa = _0x67a2, _0x4b9cb2 = _0x3e20e3 != null ? require(_0x5f16fc)[_0x3e20e3] : require(_0x5f16fc);
                let _0x433602 = await _0x3573db(_0x4b9cb2[_0x55c2fa(527)]);
                expectHookNamesToEqual(_0x433602, [
                    'newItemText',
                    _0x55c2fa(528),
                    _0x55c2fa(529),
                    _0x55c2fa(530),
                    _0x55c2fa(531),
                    _0x55c2fa(532),
                    _0x55c2fa(595),
                    'toggleItem'
                ]), _0x433602 = await _0x3573db(_0x4b9cb2[_0x55c2fa(533)], { 'item': {} }), expectHookNamesToEqual(_0x433602, [
                    _0x55c2fa(534),
                    _0x55c2fa(596)
                ]), expect(require(_0x55c2fa(583))[_0x55c2fa(586)])[_0x55c2fa(589)](0), expect(require(_0x55c2fa(584))['decodeHookMap'])[_0x55c2fa(590)]();
            }
            await _0x361c0b(_0x1a861a(597)), await _0x361c0b(_0x1a861a(598)), await _0x361c0b(_0x1a861a(599)), await _0x361c0b('./__source__/__compiled__/external/react-sources-extended/ToDoList'), await _0x361c0b(_0x1a861a(600)), await _0x361c0b('./__source__/__compiled__/external/fb-sources-extended/index-map/ToDoList'), await _0x361c0b(_0x1a861a(601)), await _0x361c0b(_0x1a861a(602));
        }), it(_0x4f1a99(540), async () => {
            const _0x4acc53 = _0x4f1a99;
            async function _0x4ab640(_0x1c0073, _0x508332 = _0x4acc53(498)) {
                const _0x2c3bf9 = _0x4acc53, _0x30b6b3 = require(_0x1c0073)[_0x508332], _0x237b05 = await _0x3573db(_0x30b6b3);
                expectHookNamesToEqual(_0x237b05, [
                    _0x2c3bf9(511),
                    'isDarkMode',
                    _0x2c3bf9(515),
                    null
                ]), expect(require(_0x2c3bf9(583))[_0x2c3bf9(586)])[_0x2c3bf9(589)](0), expect(require('../generateHookMap')['decodeHookMap'])[_0x2c3bf9(590)]();
            }
            await _0x4ab640(_0x4acc53(603)), await _0x4ab640(_0x4acc53(604)), await _0x4ab640(_0x4acc53(605)), await _0x4ab640(_0x4acc53(606)), await _0x4ab640(_0x4acc53(607)), await _0x4ab640(_0x4acc53(608)), await _0x4ab640(_0x4acc53(609)), await _0x4ab640('./__source__/__compiled__/external/react-sources-extended/index-map/ComponentWithCustomHook');
        }), it(_0x4f1a99(547), async () => {
            const _0x4d3207 = _0x4f1a99;
            async function _0x3bd4b5(_0x487377, _0x2afb7f = _0x4d3207(498)) {
                const _0x15f611 = _0x4d3207, _0x419029 = require(_0x487377)[_0x2afb7f], _0x6e0d38 = await _0x3573db(_0x419029);
                expectHookNamesToEqual(_0x6e0d38, [
                    _0x15f611(511),
                    _0x15f611(514),
                    _0x15f611(515)
                ]), expect(require(_0x15f611(583))[_0x15f611(586)])[_0x15f611(589)](0), expect(require(_0x15f611(584))[_0x15f611(587)])[_0x15f611(590)]();
            }
            await _0x3bd4b5(_0x4d3207(610)), await _0x3bd4b5(_0x4d3207(611)), await _0x3bd4b5(_0x4d3207(612)), await _0x3bd4b5('./__source__/__compiled__/external/react-sources-extended/ComponentUsingHooksIndirectly'), await _0x3bd4b5(_0x4d3207(613)), await _0x3bd4b5(_0x4d3207(614)), await _0x3bd4b5(_0x4d3207(615)), await _0x3bd4b5('./__source__/__compiled__/external/react-sources-extended/index-map/ComponentUsingHooksIndirectly');
        }), it('should work when code is using nested hooks', async () => {
            const _0x48b830 = _0x4f1a99;
            async function _0x4c2c8a(_0x1ede54, _0x3ee3fe = _0x48b830(498)) {
                const _0x5e63a1 = _0x48b830, _0x577588 = require(_0x1ede54)[_0x3ee3fe];
                let _0xe3baeb;
                const _0x3be308 = await _0x3573db(_0x577588, {
                        'callback': _0xca4256 => {
                            _0xe3baeb = _0xca4256;
                        }
                    }), _0x17a00d = await _0x3573db(_0xe3baeb);
                expectHookNamesToEqual(_0x3be308, [_0x5e63a1(517)]), expectHookNamesToEqual(_0x17a00d, [_0x5e63a1(518)]), expect(require(_0x5e63a1(583))['parse'])['toHaveBeenCalledTimes'](0), expect(require(_0x5e63a1(584))[_0x5e63a1(587)])[_0x5e63a1(590)]();
            }
            await _0x4c2c8a('./__source__/__compiled__/inline/fb-sources-extended/ComponentWithNestedHooks'), await _0x4c2c8a(_0x48b830(616)), await _0x4c2c8a(_0x48b830(617)), await _0x4c2c8a(_0x48b830(618)), await _0x4c2c8a(_0x48b830(619)), await _0x4c2c8a(_0x48b830(620)), await _0x4c2c8a(_0x48b830(621)), await _0x4c2c8a(_0x48b830(622));
        }), it(_0x4f1a99(558), async () => {
            const _0x4919da = _0x4f1a99;
            async function _0x468e93(_0x37ca02, _0x439642 = _0x4919da(498)) {
                const _0x8373c4 = _0x4919da, _0x1c51af = require(_0x37ca02)[_0x439642], _0x49dd54 = await _0x3573db(_0x1c51af);
                expectHookNamesToEqual(_0x49dd54, [
                    'theme',
                    _0x8373c4(559)
                ]), expect(require('@babel/parser')[_0x8373c4(586)])[_0x8373c4(589)](0), expect(require(_0x8373c4(584))[_0x8373c4(587)])['toHaveBeenCalled']();
            }
            await _0x468e93(_0x4919da(623)), await _0x468e93(_0x4919da(624)), await _0x468e93(_0x4919da(625)), await _0x468e93(_0x4919da(626)), await _0x468e93('./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentWithExternalCustomHooks'), await _0x468e93(_0x4919da(627)), await _0x468e93('./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentWithExternalCustomHooks'), await _0x468e93(_0x4919da(628));
        }), it(_0x4f1a99(629), async () => {
            const _0x1b376b = _0x4f1a99;
            async function _0x144a54(_0x222ca4, _0x22087d = _0x1b376b(498)) {
                const _0x2e84e2 = _0x1b376b, _0x5850a4 = require(_0x222ca4)[_0x22087d], _0x3bc0a8 = await _0x3573db(_0x5850a4);
                expectHookNamesToEqual(_0x3bc0a8, [
                    'a',
                    'b',
                    'c',
                    'd'
                ]), expect(require('@babel/parser')[_0x2e84e2(586)])[_0x2e84e2(589)](0), expect(require(_0x2e84e2(584))[_0x2e84e2(587)])[_0x2e84e2(590)]();
            }
            await _0x144a54(_0x1b376b(630)), await _0x144a54(_0x1b376b(631)), await _0x144a54(_0x1b376b(632)), await _0x144a54(_0x1b376b(633)), await _0x144a54(_0x1b376b(634)), await _0x144a54(_0x1b376b(635)), await _0x144a54(_0x1b376b(636)), await _0x144a54(_0x1b376b(637));
        }), xit('should work for inline requires', async () => {
            const _0x287481 = _0x4f1a99;
            async function _0x5be036(_0x1a7ac5, _0x50aa23 = _0x287481(498)) {
                const _0x37bf30 = _0x287481, _0xff6c7d = require(_0x1a7ac5)[_0x50aa23], _0x4a03cd = await _0x3573db(_0xff6c7d);
                expectHookNamesToEqual(_0x4a03cd, ['count']), expect(require(_0x37bf30(583))[_0x37bf30(586)])[_0x37bf30(589)](0), expect(require(_0x37bf30(584))[_0x37bf30(587)])[_0x37bf30(590)]();
            }
            await _0x5be036(_0x287481(638)), await _0x5be036(_0x287481(639)), await _0x5be036(_0x287481(640)), await _0x5be036(_0x287481(641)), await _0x5be036('./__source__/__compiled__/inline/fb-sources-extended/index-map/InlineRequire'), await _0x5be036(_0x287481(642)), await _0x5be036(_0x287481(643)), await _0x5be036(_0x287481(644));
        }), it(_0x4f1a99(577), async () => {
            const _0x2eb77f = _0x4f1a99;
            async function _0x4c29c6(_0x80b61a, _0x36f23b = 'Component') {
                const _0x3b8ee6 = _0x67a2, _0x559077 = require(_0x80b61a)[_0x36f23b], _0x351e7f = await _0x3573db(_0x559077);
                expectHookNamesToEqual(_0x351e7f, [_0x3b8ee6(511)]), expect(require(_0x3b8ee6(583))['parse'])[_0x3b8ee6(589)](0), expect(require('../generateHookMap')[_0x3b8ee6(587)])['toHaveBeenCalled']();
            }
            console['warn'] = () => {
            }, await _0x4c29c6(_0x2eb77f(645)), await _0x4c29c6('./__source__/__compiled__/external/fb-sources-extended/ContainingStringSourceMappingURL'), await _0x4c29c6(_0x2eb77f(646)), await _0x4c29c6(_0x2eb77f(647)), await _0x4c29c6(_0x2eb77f(648)), await _0x4c29c6(_0x2eb77f(649)), await _0x4c29c6('./__source__/__compiled__/inline/react-sources-extended/index-map/ContainingStringSourceMappingURL'), await _0x4c29c6(_0x2eb77f(650));
        });
    });
}), describe(_0x3ec279(651), () => {
    const _0x4c8822 = _0x3ec279;
    let _0x4c2bd9, _0x4fe0d0, _0x209177;
    beforeEach(() => {
        const _0x3bb8c8 = _0x67a2;
        window[_0x3bb8c8(652)] = undefined, _0x209177 = jest['fn'](), jest[_0x3bb8c8(481)](_0x3bb8c8(653), () => {
            return {
                '__esModule': !![],
                'default': () => ({ 'parseHookNames': _0x209177 })
            };
        }), _0x4c2bd9 = require(_0x3bb8c8(486))['inspectHooks'], _0x4fe0d0 = require(_0x3bb8c8(654))[_0x3bb8c8(479)];
    });
    async function _0xd8c490(_0x67565f, _0x380819 = {}) {
        const _0x2a5059 = _0x4c2bd9(_0x67565f, _0x380819, undefined, !![]), _0x56ee9a = await _0x4fe0d0(_0x2a5059);
        return _0x56ee9a;
    }
    it(_0x4c8822(655), async () => {
        const _0x17c90d = _0x4c8822, _0x38a027 = require(_0x17c90d(497))['Component'];
        window['Worker'] = !![], jest[_0x17c90d(480)](), _0x4fe0d0 = require(_0x17c90d(654))['parseHookNames'], await _0xd8c490(_0x38a027), expect(_0x209177)[_0x17c90d(589)](1);
    });
});