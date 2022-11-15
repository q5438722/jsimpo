'use strict';
const _0x20ca = [
    'internal/errors',
    'internal/event_target',
    'internal/perf/usertiming',
    'internal/perf/observe',
    'internal/perf/event_loop_utilization',
    'internal/perf/nodetiming',
    'internal/perf/timerify',
    'internal/util',
    'performance',
    'Tafza',
    'depth',
    'AVbhC',
    'nodeTiming',
    'timeOrigin',
    'eventLoopUtilization',
    'mark',
    'zFoxW',
    'measure',
    'iNZpP',
    'jufGy',
    'oBmEC',
    'nChQL',
    'Ttkoo',
    'prototype',
    'constructor',
    'IQEyI',
    'exports',
    '350602IBXFmm',
    '23bNQift',
    '33715JCGjii',
    '1151396zneZSo',
    '760911aRdDDv',
    '334762TrKecz',
    '1hlGGJJ',
    '1161737pDoBVX',
    '616166PkUuyw'
];
const _0x101ca4 = _0x7d16;
(function (_0x439fbb, _0x4b96d9) {
    const _0xe9e23 = _0x7d16;
    while (!![]) {
        try {
            const _0x5209ee = parseInt(_0xe9e23(0xf9)) + parseInt(_0xe9e23(0xfa)) * parseInt(_0xe9e23(0xfb)) + -parseInt(_0xe9e23(0xfc)) + -parseInt(_0xe9e23(0xfd)) + -parseInt(_0xe9e23(0xfe)) * parseInt(_0xe9e23(0xff)) + parseInt(_0xe9e23(0x100)) + parseInt(_0xe9e23(0x101));
            if (_0x5209ee === _0x4b96d9)
                break;
            else
                _0x439fbb['push'](_0x439fbb['shift']());
        } catch (_0x4c6c87) {
            _0x439fbb['push'](_0x439fbb['shift']());
        }
    }
}(_0x20ca, 0x2b * -0x257d + 0x5c439 + 0xa8db7));
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require(_0x101ca4(0x102)), {EventTarget} = require(_0x101ca4(0x103)), {now} = require('internal/perf/utils'), {mark, measure, clearMarkTimings} = require(_0x101ca4(0x104)), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require(_0x101ca4(0x105)), eventLoopUtilization = require(_0x101ca4(0x106)), nodeTiming = require(_0x101ca4(0x107)), timerify = require(_0x101ca4(0x108)), {customInspectSymbol: kInspect} = require(_0x101ca4(0x109)), {inspect} = require('util'), {getTimeOriginTimestamp} = internalBinding(_0x101ca4(0x10a));
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x2153ff, _0x3173be) {
        const _0x490bde = _0x101ca4, _0x415b93 = {
                'Tafza': function (_0xde1f66, _0x230acb) {
                    return _0xde1f66 == _0x230acb;
                },
                'AVbhC': function (_0x36b3d7, _0x1dfb8c, _0x79a02d) {
                    return _0x36b3d7(_0x1dfb8c, _0x79a02d);
                }
            };
        if (_0x2153ff < 0x2d7 * 0x1 + 0x24b9 + -0x2790)
            return this;
        const _0x5b8013 = {
            ..._0x3173be,
            'depth': _0x415b93[_0x490bde(0x10b)](_0x3173be[_0x490bde(0x10c)], null) ? null : _0x3173be[_0x490bde(0x10c)] - (0x1 * -0x23bd + 0x733 + 0x1 * 0x1c8b)
        };
        return 'Performance\x20' + _0x415b93[_0x490bde(0x10d)](inspect, {
            'nodeTiming': this[_0x490bde(0x10e)],
            'timeOrigin': this[_0x490bde(0x10f)]
        }, _0x5b8013);
    }
}
function _0x7d16(_0x222914, _0x1e75f2) {
    return _0x7d16 = function (_0x27c9b7, _0x19b084) {
        _0x27c9b7 = _0x27c9b7 - (0x1dea + -0xdea + -0xf07);
        let _0x7ef156 = _0x20ca[_0x27c9b7];
        return _0x7ef156;
    }, _0x7d16(_0x222914, _0x1e75f2);
}
function toJSON() {
    const _0x45af56 = _0x101ca4;
    return {
        'nodeTiming': this[_0x45af56(0x10e)],
        'timeOrigin': this[_0x45af56(0x10f)],
        'eventLoopUtilization': this[_0x45af56(0x110)]()
    };
}
function clearMarks(_0x47b627) {
    const _0x2ad602 = _0x101ca4, _0x82ec4a = { 'zFoxW': _0x2ad602(0x111) };
    _0x47b627 !== undefined && (_0x47b627 = '' + _0x47b627), clearMarkTimings(_0x47b627), clearEntriesFromBuffer(_0x82ec4a[_0x2ad602(0x112)], _0x47b627);
}
function clearMeasures(_0x1ee2cc) {
    const _0x8e7dd5 = _0x101ca4, _0x190717 = {
            'iNZpP': function (_0x39a271, _0x1b4946) {
                return _0x39a271 !== _0x1b4946;
            },
            'BOBqv': function (_0x34958e, _0x6d4a40, _0x505d15) {
                return _0x34958e(_0x6d4a40, _0x505d15);
            },
            'jufGy': _0x8e7dd5(0x113)
        };
    _0x190717[_0x8e7dd5(0x114)](_0x1ee2cc, undefined) && (_0x1ee2cc = '' + _0x1ee2cc), _0x190717['BOBqv'](clearEntriesFromBuffer, _0x190717[_0x8e7dd5(0x115)], _0x1ee2cc);
}
function getEntries() {
    return filterBufferMapByNameAndType();
}
function getEntriesByName(_0x3f58ae) {
    const _0x4d7385 = _0x101ca4, _0x4113df = {
            'oBmEC': function (_0x801575, _0x5c9843) {
                return _0x801575 !== _0x5c9843;
            },
            'kLSVo': function (_0x1e0802, _0x1b92ef, _0x38a30b) {
                return _0x1e0802(_0x1b92ef, _0x38a30b);
            }
        };
    return _0x4113df[_0x4d7385(0x116)](_0x3f58ae, undefined) && (_0x3f58ae = '' + _0x3f58ae), _0x4113df['kLSVo'](filterBufferMapByNameAndType, _0x3f58ae, undefined);
}
function getEntriesByType(_0x506e47) {
    const _0x15eb06 = _0x101ca4, _0x4befdd = {
            'nChQL': function (_0x767c98, _0x244b09) {
                return _0x767c98 !== _0x244b09;
            },
            'Ttkoo': function (_0x5b64b8, _0x330988, _0x2c42b2) {
                return _0x5b64b8(_0x330988, _0x2c42b2);
            }
        };
    return _0x4befdd[_0x15eb06(0x117)](_0x506e47, undefined) && (_0x506e47 = '' + _0x506e47), _0x4befdd[_0x15eb06(0x118)](filterBufferMapByNameAndType, undefined, _0x506e47);
}
class InternalPerformance extends EventTarget {
}
InternalPerformance[_0x101ca4(0x119)][_0x101ca4(0x11a)] = Performance[_0x101ca4(0x119)][_0x101ca4(0x11a)], ObjectSetPrototypeOf(InternalPerformance[_0x101ca4(0x119)], Performance['prototype']), ObjectDefineProperties(Performance[_0x101ca4(0x119)], {
    'clearMarks': {
        'configurable': !![],
        'enumerable': ![],
        'value': clearMarks
    },
    'clearMeasures': {
        'configurable': !![],
        'enumerable': ![],
        'value': clearMeasures
    },
    'eventLoopUtilization': {
        'configurable': !![],
        'enumerable': ![],
        'value': eventLoopUtilization
    },
    'getEntries': {
        'configurable': !![],
        'enumerable': ![],
        'value': getEntries
    },
    'getEntriesByName': {
        'configurable': !![],
        'enumerable': ![],
        'value': getEntriesByName
    },
    'getEntriesByType': {
        'configurable': !![],
        'enumerable': ![],
        'value': getEntriesByType
    },
    'mark': {
        'configurable': !![],
        'enumerable': ![],
        'value': mark
    },
    'measure': {
        'configurable': !![],
        'enumerable': ![],
        'value': measure
    },
    'nodeTiming': {
        'configurable': !![],
        'enumerable': ![],
        'value': nodeTiming
    },
    'now': {
        'configurable': !![],
        'enumerable': ![],
        'value': now
    },
    'timerify': {
        'configurable': !![],
        'enumerable': ![],
        'value': timerify
    },
    'timeOrigin': {
        'configurable': !![],
        'enumerable': !![],
        'value': getTimeOriginTimestamp()
    },
    'toJSON': {
        'configurable': !![],
        'enumerable': !![],
        'value': toJSON
    }
});
function refreshTimeOrigin() {
    const _0x27f142 = _0x101ca4, _0xc4daae = {
            'IQEyI': function (_0x4b621a, _0x260ada, _0x514673, _0x419683) {
                return _0x4b621a(_0x260ada, _0x514673, _0x419683);
            },
            'dcjWK': function (_0x382a2f) {
                return _0x382a2f();
            }
        };
    _0xc4daae[_0x27f142(0x11b)](ObjectDefineProperty, Performance[_0x27f142(0x119)], _0x27f142(0x10f), {
        'configurable': !![],
        'enumerable': !![],
        'value': _0xc4daae['dcjWK'](getTimeOriginTimestamp)
    });
}
module[_0x101ca4(0x11c)] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
