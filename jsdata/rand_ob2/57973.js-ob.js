'use strict';
const _0x28f8 = [
    '1666894pkMbKd',
    'internal/errors',
    'internal/perf/utils',
    'internal/perf/usertiming',
    'internal/perf/observe',
    'internal/perf/nodetiming',
    'internal/perf/timerify',
    'internal/util',
    'util',
    'performance',
    'depth',
    'Performance\x20',
    'nodeTiming',
    'timeOrigin',
    'mark',
    'measure',
    'prototype',
    'constructor',
    '7475jDvLIq',
    '118tGRsRy',
    '531179pgDanB',
    '2JFeojz',
    '65942yKUwcu',
    '21enXqSJ',
    '48826NiDInw',
    '16EfnWld',
    '4310aKAcCj',
    '435927sVhxjn'
];
const _0x1a43c4 = _0x3440;
(function (_0x457e69, _0x26c35f) {
    const _0x5b52ae = _0x3440;
    while (!![]) {
        try {
            const _0x402915 = -parseInt(_0x5b52ae(0x71)) * -parseInt(_0x5b52ae(0x72)) + -parseInt(_0x5b52ae(0x73)) + -parseInt(_0x5b52ae(0x74)) * -parseInt(_0x5b52ae(0x75)) + -parseInt(_0x5b52ae(0x76)) * parseInt(_0x5b52ae(0x77)) + parseInt(_0x5b52ae(0x78)) * -parseInt(_0x5b52ae(0x79)) + -parseInt(_0x5b52ae(0x7a)) + parseInt(_0x5b52ae(0x7b));
            if (_0x402915 === _0x26c35f)
                break;
            else
                _0x457e69['push'](_0x457e69['shift']());
        } catch (_0x3e63b4) {
            _0x457e69['push'](_0x457e69['shift']());
        }
    }
}(_0x28f8, 0x97398));
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require(_0x1a43c4(0x7c)), {EventTarget} = require('internal/event_target'), {now} = require(_0x1a43c4(0x7d)), {mark, measure, clearMarkTimings} = require(_0x1a43c4(0x7e)), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require(_0x1a43c4(0x7f)), eventLoopUtilization = require('internal/perf/event_loop_utilization'), nodeTiming = require(_0x1a43c4(0x80)), timerify = require(_0x1a43c4(0x81)), {customInspectSymbol: kInspect} = require(_0x1a43c4(0x82)), {inspect} = require(_0x1a43c4(0x83)), {getTimeOriginTimestamp} = internalBinding(_0x1a43c4(0x84));
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x4545fe, _0x59cdf0) {
        const _0x238605 = _0x1a43c4;
        if (_0x4545fe < 0x0)
            return this;
        const _0x238a33 = {
            ..._0x59cdf0,
            'depth': _0x59cdf0[_0x238605(0x85)] == null ? null : _0x59cdf0[_0x238605(0x85)] - 0x1
        };
        return _0x238605(0x86) + inspect({
            'nodeTiming': this[_0x238605(0x87)],
            'timeOrigin': this[_0x238605(0x88)]
        }, _0x238a33);
    }
}
function toJSON() {
    const _0x358fa4 = _0x1a43c4;
    return {
        'nodeTiming': this[_0x358fa4(0x87)],
        'timeOrigin': this[_0x358fa4(0x88)],
        'eventLoopUtilization': this['eventLoopUtilization']()
    };
}
function clearMarks(_0x10e454) {
    const _0x3b154d = _0x1a43c4;
    _0x10e454 !== undefined && (_0x10e454 = '' + _0x10e454), clearMarkTimings(_0x10e454), clearEntriesFromBuffer(_0x3b154d(0x89), _0x10e454);
}
function clearMeasures(_0x544b7e) {
    const _0x862f38 = _0x1a43c4;
    _0x544b7e !== undefined && (_0x544b7e = '' + _0x544b7e), clearEntriesFromBuffer(_0x862f38(0x8a), _0x544b7e);
}
function getEntries() {
    return filterBufferMapByNameAndType();
}
function getEntriesByName(_0x2d6cf5) {
    return _0x2d6cf5 !== undefined && (_0x2d6cf5 = '' + _0x2d6cf5), filterBufferMapByNameAndType(_0x2d6cf5, undefined);
}
function getEntriesByType(_0x419972) {
    return _0x419972 !== undefined && (_0x419972 = '' + _0x419972), filterBufferMapByNameAndType(undefined, _0x419972);
}
class InternalPerformance extends EventTarget {
}
InternalPerformance[_0x1a43c4(0x8b)][_0x1a43c4(0x8c)] = Performance[_0x1a43c4(0x8b)]['constructor'], ObjectSetPrototypeOf(InternalPerformance[_0x1a43c4(0x8b)], Performance[_0x1a43c4(0x8b)]), ObjectDefineProperties(Performance[_0x1a43c4(0x8b)], {
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
    const _0x3651d2 = _0x1a43c4;
    ObjectDefineProperty(Performance[_0x3651d2(0x8b)], _0x3651d2(0x88), {
        'configurable': !![],
        'enumerable': !![],
        'value': getTimeOriginTimestamp()
    });
}
function _0x3440(_0x54cb88, _0x4fe035) {
    return _0x3440 = function (_0x28f80b, _0x34406e) {
        _0x28f80b = _0x28f80b - 0x71;
        let _0x375135 = _0x28f8[_0x28f80b];
        return _0x375135;
    }, _0x3440(_0x54cb88, _0x4fe035);
}
module['exports'] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
