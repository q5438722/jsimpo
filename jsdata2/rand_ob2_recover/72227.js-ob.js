const {compareRuntime} = require('./runtime'), createCachedParameterizedComparator = _0x3dd8bf => {
        const _0x39f41b = new WeakMap();
        return _0x40ac72 => {
            const _0x3f630b = _0x4063, _0x1b31ae = _0x39f41b[_0x3f630b(280)](_0x40ac72);
            if (_0x1b31ae !== undefined)
                return _0x1b31ae;
            const _0x39d1c0 = _0x3dd8bf[_0x3f630b(281)](null, _0x40ac72);
            return _0x39f41b[_0x3f630b(282)](_0x40ac72, _0x39d1c0), _0x39d1c0;
        };
    };
exports[_0x2f17ca(283)] = (_0x5aae5a, _0x30a75c) => {
    return compareIds(_0x5aae5a['id'], _0x30a75c['id']);
}, exports[_0x2f17ca(284)] = (_0x577f73, _0x3bdbd1) => {
    const _0x2f7aba = _0x2f17ca;
    return compareIds(_0x577f73[_0x2f7aba(285)](), _0x3bdbd1[_0x2f7aba(285)]());
};
const compareModulesById = (_0x2fa2f3, _0x140b47, _0x4c5d02) => {
    const _0x2d501d = _0x2f17ca;
    return compareIds(_0x2fa2f3[_0x2d501d(286)](_0x140b47), _0x2fa2f3[_0x2d501d(286)](_0x4c5d02));
};
exports['compareModulesById'] = createCachedParameterizedComparator(compareModulesById);
const compareNumbers = (_0x5dc559, _0x5a24a9) => {
    if (typeof _0x5dc559 !== typeof _0x5a24a9)
        return typeof _0x5dc559 < typeof _0x5a24a9 ? -1 : 1;
    if (_0x5dc559 < _0x5a24a9)
        return -1;
    if (_0x5dc559 > _0x5a24a9)
        return 1;
    return 0;
};
exports[_0x2f17ca(287)] = compareNumbers;
const compareStringsNumeric = (_0x9c35bb, _0x52441d) => {
    const _0x3823c2 = _0x2f17ca, _0x542484 = _0x9c35bb['split'](/(\d+)/), _0x553182 = _0x52441d[_0x3823c2(288)](/(\d+)/), _0x3562ac = Math[_0x3823c2(289)](_0x542484[_0x3823c2(290)], _0x553182[_0x3823c2(290)]);
    for (let _0xa899a9 = 0; _0xa899a9 < _0x3562ac; _0xa899a9++) {
        const _0x52a746 = _0x542484[_0xa899a9], _0x1ffabb = _0x553182[_0xa899a9];
        if (_0xa899a9 % 2 === 0) {
            if (_0x52a746['length'] > _0x1ffabb[_0x3823c2(290)]) {
                if (_0x52a746['slice'](0, _0x1ffabb[_0x3823c2(290)]) > _0x1ffabb)
                    return 1;
                return -1;
            } else {
                if (_0x1ffabb[_0x3823c2(290)] > _0x52a746[_0x3823c2(290)]) {
                    if (_0x1ffabb[_0x3823c2(291)](0, _0x52a746[_0x3823c2(290)]) > _0x52a746)
                        return -1;
                    return 1;
                } else {
                    if (_0x52a746 < _0x1ffabb)
                        return -1;
                    if (_0x52a746 > _0x1ffabb)
                        return 1;
                }
            }
        } else {
            const _0xd9859b = +_0x52a746, _0x5d573b = +_0x1ffabb;
            if (_0xd9859b < _0x5d573b)
                return -1;
            if (_0xd9859b > _0x5d573b)
                return 1;
        }
    }
    if (_0x553182[_0x3823c2(290)] < _0x542484[_0x3823c2(290)])
        return 1;
    if (_0x553182['length'] > _0x542484['length'])
        return -1;
    return 0;
};
exports[_0x2f17ca(292)] = compareStringsNumeric;
const compareModulesByPostOrderIndexOrIdentifier = (_0x3fca1b, _0x158af0, _0xb90325) => {
    const _0x158d57 = _0x2f17ca, _0x4fb514 = compareNumbers(_0x3fca1b[_0x158d57(293)](_0x158af0), _0x3fca1b['getPostOrderIndex'](_0xb90325));
    if (_0x4fb514 !== 0)
        return _0x4fb514;
    return compareIds(_0x158af0[_0x158d57(285)](), _0xb90325['identifier']());
};
exports[_0x2f17ca(294)] = createCachedParameterizedComparator(compareModulesByPostOrderIndexOrIdentifier);
const compareModulesByPreOrderIndexOrIdentifier = (_0x3d46f5, _0x5462fd, _0x3fa04f) => {
    const _0x19ee43 = _0x2f17ca, _0x1ddeeb = compareNumbers(_0x3d46f5[_0x19ee43(295)](_0x5462fd), _0x3d46f5[_0x19ee43(295)](_0x3fa04f));
    if (_0x1ddeeb !== 0)
        return _0x1ddeeb;
    return compareIds(_0x5462fd[_0x19ee43(285)](), _0x3fa04f[_0x19ee43(285)]());
};
exports[_0x2f17ca(296)] = createCachedParameterizedComparator(compareModulesByPreOrderIndexOrIdentifier);
const compareModulesByIdOrIdentifier = (_0xa7e9ab, _0x22d95d, _0x1c1a03) => {
    const _0x3cbf9 = _0x2f17ca, _0x10fb7d = compareIds(_0xa7e9ab[_0x3cbf9(286)](_0x22d95d), _0xa7e9ab[_0x3cbf9(286)](_0x1c1a03));
    if (_0x10fb7d !== 0)
        return _0x10fb7d;
    return compareIds(_0x22d95d['identifier'](), _0x1c1a03[_0x3cbf9(285)]());
};
exports[_0x2f17ca(297)] = createCachedParameterizedComparator(compareModulesByIdOrIdentifier);
const compareChunks = (_0x15fd21, _0x535ac6, _0x5e7443) => {
    const _0x461b41 = _0x2f17ca;
    return _0x15fd21[_0x461b41(298)](_0x535ac6, _0x5e7443);
};
exports[_0x2f17ca(298)] = createCachedParameterizedComparator(compareChunks);
const compareIds = (_0x451eb2, _0x57be3d) => {
    if (typeof _0x451eb2 !== typeof _0x57be3d)
        return typeof _0x451eb2 < typeof _0x57be3d ? -1 : 1;
    if (_0x451eb2 < _0x57be3d)
        return -1;
    if (_0x451eb2 > _0x57be3d)
        return 1;
    return 0;
};
exports[_0x2f17ca(299)] = compareIds;
const compareStrings = (_0x144827, _0x154d3e) => {
    if (_0x144827 < _0x154d3e)
        return -1;
    if (_0x144827 > _0x154d3e)
        return 1;
    return 0;
};
exports[_0x2f17ca(300)] = compareStrings;
const compareChunkGroupsByIndex = (_0x5353d6, _0x2e755b) => {
    const _0x3f374c = _0x2f17ca;
    return _0x5353d6[_0x3f374c(301)] < _0x2e755b['index'] ? -1 : 1;
};
exports['compareChunkGroupsByIndex'] = compareChunkGroupsByIndex;
function _0x4063(_0x59a5f4, _0x2e9f9b) {
    return _0x4063 = function (_0x530ed4, _0x406388) {
        _0x530ed4 = _0x530ed4 - 270;
        let _0x14fd83 = _0x530e[_0x530ed4];
        return _0x14fd83;
    }, _0x4063(_0x59a5f4, _0x2e9f9b);
}
class TwoKeyWeakMap {
    constructor() {
        const _0x3d36da = _0x2f17ca;
        this[_0x3d36da(302)] = new WeakMap();
    }
    ['get'](_0x154a84, _0x4019ea) {
        const _0x5082f2 = _0x2f17ca, _0x86ca13 = this[_0x5082f2(302)]['get'](_0x154a84);
        if (_0x86ca13 === undefined)
            return undefined;
        return _0x86ca13[_0x5082f2(280)](_0x4019ea);
    }
    [_0x2f17ca(282)](_0x403a91, _0x374ec0, _0x5d4313) {
        const _0x18906a = _0x2f17ca;
        let _0x4e1ae0 = this[_0x18906a(302)]['get'](_0x403a91);
        _0x4e1ae0 === undefined && (_0x4e1ae0 = new WeakMap(), this[_0x18906a(302)]['set'](_0x403a91, _0x4e1ae0)), _0x4e1ae0[_0x18906a(282)](_0x374ec0, _0x5d4313);
    }
}
const concatComparatorsCache = new TwoKeyWeakMap(), concatComparators = (_0x13544e, _0x1d57f6, ..._0x3b7cd6) => {
        const _0x15e539 = _0x2f17ca;
        if (_0x3b7cd6[_0x15e539(290)] > 0) {
            const [_0x322a3e, ..._0x5ca1c6] = _0x3b7cd6;
            return concatComparators(_0x13544e, concatComparators(_0x1d57f6, _0x322a3e, ..._0x5ca1c6));
        }
        const _0x453a92 = concatComparatorsCache[_0x15e539(280)](_0x13544e, _0x1d57f6);
        if (_0x453a92 !== undefined)
            return _0x453a92;
        const _0x4fe8aa = (_0x4b98c2, _0x16d01f) => {
            const _0xa0a2d3 = _0x13544e(_0x4b98c2, _0x16d01f);
            if (_0xa0a2d3 !== 0)
                return _0xa0a2d3;
            return _0x1d57f6(_0x4b98c2, _0x16d01f);
        };
        return concatComparatorsCache[_0x15e539(282)](_0x13544e, _0x1d57f6, _0x4fe8aa), _0x4fe8aa;
    };
exports[_0x2f17ca(303)] = concatComparators;
const compareSelectCache = new TwoKeyWeakMap(), compareSelect = (_0x4a6bac, _0x9dda62) => {
        const _0x41d2bd = _0x2f17ca, _0x4e1b0 = compareSelectCache['get'](_0x4a6bac, _0x9dda62);
        if (_0x4e1b0 !== undefined)
            return _0x4e1b0;
        const _0x4197a0 = (_0xe71bd5, _0x473b5b) => {
            const _0x4b24e6 = _0x4a6bac(_0xe71bd5), _0xf94832 = _0x4a6bac(_0x473b5b);
            if (_0x4b24e6 !== undefined && _0x4b24e6 !== null) {
                if (_0xf94832 !== undefined && _0xf94832 !== null)
                    return _0x9dda62(_0x4b24e6, _0xf94832);
                return -1;
            } else {
                if (_0xf94832 !== undefined && _0xf94832 !== null)
                    return 1;
                return 0;
            }
        };
        return compareSelectCache[_0x41d2bd(282)](_0x4a6bac, _0x9dda62, _0x4197a0), _0x4197a0;
    };
exports[_0x2f17ca(304)] = compareSelect;
const compareIteratorsCache = new WeakMap(), compareIterables = _0x1e1915 => {
        const _0x326e81 = compareIteratorsCache['get'](_0x1e1915);
        if (_0x326e81 !== undefined)
            return _0x326e81;
        const _0x4a2abe = (_0x146b5a, _0x229d30) => {
            const _0x94997c = _0x4063, _0x4ed8ca = _0x146b5a[Symbol[_0x94997c(305)]](), _0x3bb4b6 = _0x229d30[Symbol[_0x94997c(305)]]();
            while (!![]) {
                const _0x594443 = _0x4ed8ca[_0x94997c(306)](), _0x2fb3e8 = _0x3bb4b6['next']();
                if (_0x594443[_0x94997c(307)])
                    return _0x2fb3e8[_0x94997c(307)] ? 0 : -1;
                else {
                    if (_0x2fb3e8['done'])
                        return 1;
                }
                const _0x53eaf4 = _0x1e1915(_0x594443[_0x94997c(308)], _0x2fb3e8[_0x94997c(308)]);
                if (_0x53eaf4 !== 0)
                    return _0x53eaf4;
            }
        };
        return compareIteratorsCache['set'](_0x1e1915, _0x4a2abe), _0x4a2abe;
    };
exports[_0x2f17ca(309)] = compareIterables, exports[_0x2f17ca(310)] = _0x57ce5e => {
    const _0x3c17be = _0x2f17ca, _0x36e235 = new Map();
    let _0x21813b = 0;
    for (const _0x2fec47 of _0x57ce5e) {
        _0x36e235[_0x3c17be(282)](_0x2fec47, _0x21813b++);
    }
    return (_0x3ad07a, _0x102afa) => compareNumbers(_0x36e235[_0x3c17be(280)](_0x3ad07a), _0x36e235[_0x3c17be(280)](_0x102afa));
}, exports['compareChunksNatural'] = _0x295616 => {
    const _0xea2b35 = _0x2f17ca, _0x8a4935 = exports[_0xea2b35(311)](_0x295616), _0x38cca7 = compareIterables(_0x8a4935);
    return concatComparators(compareSelect(_0x50fe7d => _0x50fe7d[_0xea2b35(312)], compareIds), compareSelect(_0x23b323 => _0x23b323[_0xea2b35(313)], compareRuntime), compareSelect(_0x14f35a => _0x295616[_0xea2b35(314)](_0x14f35a, _0x8a4935), _0x38cca7));
}, exports['compareLocations'] = (_0x543461, _0x239e6b) => {
    const _0x3ef018 = _0x2f17ca;
    let _0x41bfdd = typeof _0x543461 === 'object' && _0x543461 !== null, _0x23ee09 = typeof _0x239e6b === _0x3ef018(315) && _0x239e6b !== null;
    if (!_0x41bfdd || !_0x23ee09) {
        if (_0x41bfdd)
            return 1;
        if (_0x23ee09)
            return -1;
        return 0;
    }
    if (_0x3ef018(316) in _0x543461) {
        if (_0x3ef018(316) in _0x239e6b) {
            const _0x383118 = _0x543461['start'], _0x2a2328 = _0x239e6b[_0x3ef018(316)];
            if (_0x383118[_0x3ef018(317)] < _0x2a2328[_0x3ef018(317)])
                return -1;
            if (_0x383118[_0x3ef018(317)] > _0x2a2328[_0x3ef018(317)])
                return 1;
            if (_0x383118[_0x3ef018(318)] < _0x2a2328['column'])
                return -1;
            if (_0x383118[_0x3ef018(318)] > _0x2a2328[_0x3ef018(318)])
                return 1;
        } else
            return -1;
    } else {
        if ('start' in _0x239e6b)
            return 1;
    }
    if (_0x3ef018(312) in _0x543461) {
        if (_0x3ef018(312) in _0x239e6b) {
            if (_0x543461[_0x3ef018(312)] < _0x239e6b['name'])
                return -1;
            if (_0x543461[_0x3ef018(312)] > _0x239e6b[_0x3ef018(312)])
                return 1;
        } else
            return -1;
    } else {
        if (_0x3ef018(312) in _0x239e6b)
            return 1;
    }
    if (_0x3ef018(301) in _0x543461) {
        if ('index' in _0x239e6b) {
            if (_0x543461[_0x3ef018(301)] < _0x239e6b[_0x3ef018(301)])
                return -1;
            if (_0x543461[_0x3ef018(301)] > _0x239e6b[_0x3ef018(301)])
                return 1;
        } else
            return -1;
    } else {
        if (_0x3ef018(301) in _0x239e6b)
            return 1;
    }
    return 0;
};