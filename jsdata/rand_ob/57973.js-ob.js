'use strict';
const _0x3418 = [
    '93894knYkkr',
    '16CbGiSz',
    '2TdNDhP',
    '689083FbQGKC',
    '522378DdOzCe',
    '39791fGDqUZ',
    '37rKIahQ',
    '817935xwJXRT',
    '1BcMKPk',
    '1182600VyTgIg',
    '15829uEBFml',
    '90hjqkal',
    'internal/errors',
    'internal/perf/utils',
    'internal/perf/usertiming',
    'internal/perf/event_loop_utilization',
    'internal/perf/nodetiming',
    'util',
    'performance',
    'depth',
    'Performance\x20',
    'DJBjW',
    'nodeTiming',
    'timeOrigin',
    'eventLoopUtilization',
    'mark',
    'HCTHl',
    'XQGwT',
    'HmVmL',
    'measure',
    'cywNk',
    'XUwea',
    'beuOq',
    'kgdsc',
    'prototype',
    'constructor',
    'bJthE',
    'exports'
];
const _0x2d640b = _0x3019;
function _0x3019(_0xee2c93, _0x398b7e) {
    return _0x3019 = function (_0x1e984f, _0x2450dc) {
        _0x1e984f = _0x1e984f - (0x1 * 0x2033 + -0x5 * -0x57 + -0x1 * 0x213b);
        let _0x4a00c6 = _0x3418[_0x1e984f];
        return _0x4a00c6;
    }, _0x3019(_0xee2c93, _0x398b7e);
}
(function (_0x1625c0, _0x1c60ec) {
    const _0x167874 = _0x3019;
    while (!![]) {
        try {
            const _0x3b70c2 = -parseInt(_0x167874(0xab)) * parseInt(_0x167874(0xac)) + -parseInt(_0x167874(0xad)) * -parseInt(_0x167874(0xae)) + parseInt(_0x167874(0xaf)) + -parseInt(_0x167874(0xb0)) * -parseInt(_0x167874(0xb1)) + parseInt(_0x167874(0xb2)) * -parseInt(_0x167874(0xb3)) + parseInt(_0x167874(0xb4)) + -parseInt(_0x167874(0xb5)) * parseInt(_0x167874(0xb6));
            if (_0x3b70c2 === _0x1c60ec)
                break;
            else
                _0x1625c0['push'](_0x1625c0['shift']());
        } catch (_0xf7a4c6) {
            _0x1625c0['push'](_0x1625c0['shift']());
        }
    }
}(_0x3418, -0x19403 * -0x1 + -0xf7c1d + 0x1a465c));
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require(_0x2d640b(0xb7)), {EventTarget} = require('internal/event_target'), {now} = require(_0x2d640b(0xb8)), {mark, measure, clearMarkTimings} = require(_0x2d640b(0xb9)), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require('internal/perf/observe'), eventLoopUtilization = require(_0x2d640b(0xba)), nodeTiming = require(_0x2d640b(0xbb)), timerify = require('internal/perf/timerify'), {customInspectSymbol: kInspect} = require('internal/util'), {inspect} = require(_0x2d640b(0xbc)), {getTimeOriginTimestamp} = internalBinding(_0x2d640b(0xbd));
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x9b1a90, _0x39a402) {
        const _0x1cc1bb = _0x2d640b, _0x283ded = {
                'GROCa': function (_0x704513, _0x3d1c48) {
                    return _0x704513 < _0x3d1c48;
                },
                'lnelA': function (_0x3b9916, _0x2b8541) {
                    return _0x3b9916 - _0x2b8541;
                },
                'DJBjW': function (_0x2c9521, _0x57617d, _0x42e65e) {
                    return _0x2c9521(_0x57617d, _0x42e65e);
                }
            };
        if (_0x283ded['GROCa'](_0x9b1a90, -0x1e7f + -0x17 * -0x65 + 0x156c))
            return this;
        const _0x1f1cfc = {
            ..._0x39a402,
            'depth': _0x39a402[_0x1cc1bb(0xbe)] == null ? null : _0x283ded['lnelA'](_0x39a402[_0x1cc1bb(0xbe)], -0x2030 + -0x11f7 + 0x3228)
        };
        return _0x1cc1bb(0xbf) + _0x283ded[_0x1cc1bb(0xc0)](inspect, {
            'nodeTiming': this[_0x1cc1bb(0xc1)],
            'timeOrigin': this[_0x1cc1bb(0xc2)]
        }, _0x1f1cfc);
    }
}
function toJSON() {
    const _0x43331c = _0x2d640b;
    return {
        'nodeTiming': this[_0x43331c(0xc1)],
        'timeOrigin': this[_0x43331c(0xc2)],
        'eventLoopUtilization': this[_0x43331c(0xc3)]()
    };
}
function clearMarks(_0x5240e5) {
    const _0x34f841 = _0x2d640b, _0x5f00f3 = {
            'HCTHl': function (_0x31bca0, _0x5e3cb5) {
                return _0x31bca0 !== _0x5e3cb5;
            },
            'RFYJj': function (_0x4d78c8, _0x4f1f7b) {
                return _0x4d78c8(_0x4f1f7b);
            },
            'XQGwT': function (_0x48adf8, _0x171aae, _0x999c1a) {
                return _0x48adf8(_0x171aae, _0x999c1a);
            },
            'HmVmL': _0x34f841(0xc4)
        };
    _0x5f00f3[_0x34f841(0xc5)](_0x5240e5, undefined) && (_0x5240e5 = '' + _0x5240e5), _0x5f00f3['RFYJj'](clearMarkTimings, _0x5240e5), _0x5f00f3[_0x34f841(0xc6)](clearEntriesFromBuffer, _0x5f00f3[_0x34f841(0xc7)], _0x5240e5);
}
function clearMeasures(_0x471d56) {
    const _0x5e1939 = _0x2d640b, _0x5af6c8 = {
            'aSoqt': function (_0x51c0f8, _0x1aa318) {
                return _0x51c0f8 !== _0x1aa318;
            },
            'CQmil': function (_0x3b3e94, _0x50e6db, _0x193e22) {
                return _0x3b3e94(_0x50e6db, _0x193e22);
            },
            'cywNk': _0x5e1939(0xc8)
        };
    _0x5af6c8['aSoqt'](_0x471d56, undefined) && (_0x471d56 = '' + _0x471d56), _0x5af6c8['CQmil'](clearEntriesFromBuffer, _0x5af6c8[_0x5e1939(0xc9)], _0x471d56);
}
function getEntries() {
    const _0x5a0a45 = _0x2d640b, _0x49d005 = {
            'XUwea': function (_0x23445d) {
                return _0x23445d();
            }
        };
    return _0x49d005[_0x5a0a45(0xca)](filterBufferMapByNameAndType);
}
function getEntriesByName(_0x5557ec) {
    return _0x5557ec !== undefined && (_0x5557ec = '' + _0x5557ec), filterBufferMapByNameAndType(_0x5557ec, undefined);
}
function getEntriesByType(_0x11ffc3) {
    const _0x1b373e = _0x2d640b, _0x501b07 = {
            'beuOq': function (_0x1eec41, _0x3813a1) {
                return _0x1eec41 !== _0x3813a1;
            },
            'kgdsc': function (_0x4825aa, _0x57603a, _0x497471) {
                return _0x4825aa(_0x57603a, _0x497471);
            }
        };
    return _0x501b07[_0x1b373e(0xcb)](_0x11ffc3, undefined) && (_0x11ffc3 = '' + _0x11ffc3), _0x501b07[_0x1b373e(0xcc)](filterBufferMapByNameAndType, undefined, _0x11ffc3);
}
class InternalPerformance extends EventTarget {
}
InternalPerformance[_0x2d640b(0xcd)][_0x2d640b(0xce)] = Performance[_0x2d640b(0xcd)][_0x2d640b(0xce)], ObjectSetPrototypeOf(InternalPerformance[_0x2d640b(0xcd)], Performance[_0x2d640b(0xcd)]), ObjectDefineProperties(Performance[_0x2d640b(0xcd)], {
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
    const _0x22f4f2 = _0x2d640b, _0x203079 = {
            'XFPAR': function (_0x4450d3, _0x42014c, _0x13da4a, _0x2c3749) {
                return _0x4450d3(_0x42014c, _0x13da4a, _0x2c3749);
            },
            'bJthE': function (_0x483bd7) {
                return _0x483bd7();
            }
        };
    _0x203079['XFPAR'](ObjectDefineProperty, Performance['prototype'], _0x22f4f2(0xc2), {
        'configurable': !![],
        'enumerable': !![],
        'value': _0x203079[_0x22f4f2(0xcf)](getTimeOriginTimestamp)
    });
}
module[_0x2d640b(0xd0)] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
