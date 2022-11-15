'use strict';
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require('internal/errors'), {EventTarget} = require('internal/event_target'), {now} = require('internal/perf/utils'), {mark, measure, clearMarkTimings} = require('internal/perf/usertiming'), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require('internal/perf/observe'), eventLoopUtilization = require('internal/perf/event_loop_utilization'), nodeTiming = require('internal/perf/nodetiming'), timerify = require('internal/perf/timerify'), {customInspectSymbol: kInspect} = require('internal/util'), {inspect} = require('util'), {getTimeOriginTimestamp} = internalBinding('performance');
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x614d0b, _0x50eb9a) {
        if (_0x614d0b < -0x19 * 0x31 + -0x9b7 * -0x4 + -0xb * 0x319)
            return this;
        const _0x5787b9 = {
            ..._0x50eb9a,
            'depth': _0x50eb9a['depth'] == null ? null : _0x50eb9a['depth'] - (0x2243 + -0x5e6 + -0x4ba * 0x6)
        };
        return 'Performance\x20' + inspect({
            'nodeTiming': this['nodeTiming'],
            'timeOrigin': this['timeOrigin']
        }, _0x5787b9);
    }
}
function toJSON() {
    return {
        'nodeTiming': this['nodeTiming'],
        'timeOrigin': this['timeOrigin'],
        'eventLoopUtilization': this['eventLoopUtilization']()
    };
}
function clearMarks(_0x7d344d) {
    _0x7d344d !== undefined && (_0x7d344d = '' + _0x7d344d), clearMarkTimings(_0x7d344d), clearEntriesFromBuffer('mark', _0x7d344d);
}
function clearMeasures(_0x329733) {
    _0x329733 !== undefined && (_0x329733 = '' + _0x329733), clearEntriesFromBuffer('measure', _0x329733);
}
function getEntries() {
    return filterBufferMapByNameAndType();
}
function getEntriesByName(_0x129c42) {
    return _0x129c42 !== undefined && (_0x129c42 = '' + _0x129c42), filterBufferMapByNameAndType(_0x129c42, undefined);
}
function getEntriesByType(_0x7ee0fa) {
    return _0x7ee0fa !== undefined && (_0x7ee0fa = '' + _0x7ee0fa), filterBufferMapByNameAndType(undefined, _0x7ee0fa);
}
class InternalPerformance extends EventTarget {
}
InternalPerformance['prototype']['constructor'] = Performance['prototype']['constructor'], ObjectSetPrototypeOf(InternalPerformance['prototype'], Performance['prototype']), ObjectDefineProperties(Performance['prototype'], {
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
    ObjectDefineProperty(Performance['prototype'], 'timeOrigin', {
        'configurable': !![],
        'enumerable': !![],
        'value': getTimeOriginTimestamp()
    });
}
module['exports'] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
