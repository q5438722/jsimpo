'use strict';
const _0xf765 = [
    'internal/perf/usertiming',
    'internal/perf/observe',
    'internal/perf/event_loop_utilization',
    'internal/perf/nodetiming',
    'internal/perf/timerify',
    'util',
    'depth',
    'Performance\x20',
    'nodeTiming',
    'eventLoopUtilization',
    'mark',
    'constructor',
    'prototype',
    'timeOrigin',
    '10emzVID',
    '13999LNUHhx',
    '259927PpMBvQ',
    '2qWSSsj',
    '174748iRwrOw',
    '8313PlljFi',
    '36owsyhT',
    '19LgRHWg',
    '11413uGDAtK',
    '2954KiQqIw',
    '808453TAXJRs',
    'internal/errors',
    'internal/event_target',
    'internal/perf/utils'
];
const _0x419eaf = _0x3c29;
(function (_0x2e1055, _0x58a68b) {
    const _0x2962e9 = _0x3c29;
    while (!![]) {
        try {
            const _0x2393e9 = -parseInt(_0x2962e9(0x12d)) * parseInt(_0x2962e9(0x12e)) + -parseInt(_0x2962e9(0x12f)) + parseInt(_0x2962e9(0x130)) * parseInt(_0x2962e9(0x131)) + parseInt(_0x2962e9(0x132)) * -parseInt(_0x2962e9(0x133)) + -parseInt(_0x2962e9(0x134)) * parseInt(_0x2962e9(0x135)) + parseInt(_0x2962e9(0x136)) + parseInt(_0x2962e9(0x137));
            if (_0x2393e9 === _0x58a68b)
                break;
            else
                _0x2e1055['push'](_0x2e1055['shift']());
        } catch (_0x4006d6) {
            _0x2e1055['push'](_0x2e1055['shift']());
        }
    }
}(_0xf765, 0x3bc87));
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require(_0x419eaf(0x138)), {EventTarget} = require(_0x419eaf(0x139)), {now} = require(_0x419eaf(0x13a)), {mark, measure, clearMarkTimings} = require(_0x419eaf(0x13b)), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require(_0x419eaf(0x13c)), eventLoopUtilization = require(_0x419eaf(0x13d)), nodeTiming = require(_0x419eaf(0x13e)), timerify = require(_0x419eaf(0x13f)), {customInspectSymbol: kInspect} = require('internal/util'), {inspect} = require(_0x419eaf(0x140)), {getTimeOriginTimestamp} = internalBinding('performance');
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x336e6d, _0x52fde1) {
        const _0x1477d4 = _0x419eaf;
        if (_0x336e6d < 0x0)
            return this;
        const _0xa3fe47 = {
            ..._0x52fde1,
            'depth': _0x52fde1[_0x1477d4(0x141)] == null ? null : _0x52fde1[_0x1477d4(0x141)] - 0x1
        };
        return _0x1477d4(0x142) + inspect({
            'nodeTiming': this['nodeTiming'],
            'timeOrigin': this['timeOrigin']
        }, _0xa3fe47);
    }
}
function toJSON() {
    const _0x1cb998 = _0x419eaf;
    return {
        'nodeTiming': this[_0x1cb998(0x143)],
        'timeOrigin': this['timeOrigin'],
        'eventLoopUtilization': this[_0x1cb998(0x144)]()
    };
}
function clearMarks(_0x5c6f7c) {
    const _0x4a7ec7 = _0x419eaf;
    _0x5c6f7c !== undefined && (_0x5c6f7c = '' + _0x5c6f7c), clearMarkTimings(_0x5c6f7c), clearEntriesFromBuffer(_0x4a7ec7(0x145), _0x5c6f7c);
}
function clearMeasures(_0x44f459) {
    _0x44f459 !== undefined && (_0x44f459 = '' + _0x44f459), clearEntriesFromBuffer('measure', _0x44f459);
}
function getEntries() {
    return filterBufferMapByNameAndType();
}
function getEntriesByName(_0x5d3985) {
    return _0x5d3985 !== undefined && (_0x5d3985 = '' + _0x5d3985), filterBufferMapByNameAndType(_0x5d3985, undefined);
}
function getEntriesByType(_0x873347) {
    return _0x873347 !== undefined && (_0x873347 = '' + _0x873347), filterBufferMapByNameAndType(undefined, _0x873347);
}
class InternalPerformance extends EventTarget {
}
function _0x3c29(_0x1e3428, _0x9bf855) {
    return _0x3c29 = function (_0xf7653c, _0x3c2978) {
        _0xf7653c = _0xf7653c - 0x12d;
        let _0x1aaf9f = _0xf765[_0xf7653c];
        return _0x1aaf9f;
    }, _0x3c29(_0x1e3428, _0x9bf855);
}
InternalPerformance['prototype'][_0x419eaf(0x146)] = Performance[_0x419eaf(0x147)][_0x419eaf(0x146)], ObjectSetPrototypeOf(InternalPerformance['prototype'], Performance['prototype']), ObjectDefineProperties(Performance[_0x419eaf(0x147)], {
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
    const _0x1f8426 = _0x419eaf;
    ObjectDefineProperty(Performance[_0x1f8426(0x147)], _0x1f8426(0x148), {
        'configurable': !![],
        'enumerable': !![],
        'value': getTimeOriginTimestamp()
    });
}
module['exports'] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
