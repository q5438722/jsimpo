'use strict';
const {ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf} = primordials, {
        codes: {ERR_ILLEGAL_CONSTRUCTOR}
    } = require('internal/errors'), {EventTarget} = require('internal/event_target'), {now} = require('internal/perf/utils'), {mark, measure, clearMarkTimings} = require('internal/perf/usertiming'), {clearEntriesFromBuffer, filterBufferMapByNameAndType} = require('internal/perf/observe'), eventLoopUtilization = require('internal/perf/event_loop_utilization'), nodeTiming = require('internal/perf/nodetiming'), timerify = require('internal/perf/timerify'), {customInspectSymbol: kInspect} = require('internal/util'), {inspect} = require('util'), {getTimeOriginTimestamp} = internalBinding('performance');
class Performance extends EventTarget {
    constructor() {
        throw new ERR_ILLEGAL_CONSTRUCTOR();
    }
    [kInspect](_0x3c71cb, _0x1a634f) {
        const _0x1398f0 = {
            'Ozlee': function (_0x5210c0, _0x44de57) {
                return _0x5210c0 < _0x44de57;
            },
            'sDNgY': function (_0x24f9a8, _0x284d79) {
                return _0x24f9a8 == _0x284d79;
            },
            'cnQzn': function (_0x9e7795, _0x283638) {
                return _0x9e7795 - _0x283638;
            },
            'XtbZi': function (_0x84bbe, _0x22e393, _0x2e6385) {
                return _0x84bbe(_0x22e393, _0x2e6385);
            }
        };
        if (_0x1398f0['Ozlee'](_0x3c71cb, 0x0))
            return this;
        const _0x42799b = {
            ..._0x1a634f,
            'depth': _0x1398f0['sDNgY'](_0x1a634f['depth'], null) ? null : _0x1398f0['cnQzn'](_0x1a634f['depth'], 0x1)
        };
        return 'Performance\x20' + _0x1398f0['XtbZi'](inspect, {
            'nodeTiming': this['nodeTiming'],
            'timeOrigin': this['timeOrigin']
        }, _0x42799b);
    }
}
function toJSON() {
    return {
        'nodeTiming': this['nodeTiming'],
        'timeOrigin': this['timeOrigin'],
        'eventLoopUtilization': this['eventLoopUtilization']()
    };
}
function clearMarks(_0x5f027a) {
    const _0x39ff20 = {
        'IpYWH': function (_0x574984, _0x285375) {
            return _0x574984 !== _0x285375;
        },
        'BdWOu': function (_0x1feebf, _0x409654) {
            return _0x1feebf(_0x409654);
        },
        'EeZqW': function (_0x42534d, _0x125993, _0x340fd4) {
            return _0x42534d(_0x125993, _0x340fd4);
        },
        'lDkHc': 'mark'
    };
    _0x39ff20['IpYWH'](_0x5f027a, undefined) && (_0x5f027a = '' + _0x5f027a), _0x39ff20['BdWOu'](clearMarkTimings, _0x5f027a), _0x39ff20['EeZqW'](clearEntriesFromBuffer, _0x39ff20['lDkHc'], _0x5f027a);
}
function clearMeasures(_0x39a924) {
    const _0x37ec9a = {
        'maIOi': function (_0x5b7430, _0x2d78f9) {
            return _0x5b7430 !== _0x2d78f9;
        },
        'DCgUZ': function (_0x2a1f83, _0x5b2ab2, _0x175895) {
            return _0x2a1f83(_0x5b2ab2, _0x175895);
        },
        'eRzFC': 'measure'
    };
    _0x37ec9a['maIOi'](_0x39a924, undefined) && (_0x39a924 = '' + _0x39a924), _0x37ec9a['DCgUZ'](clearEntriesFromBuffer, _0x37ec9a['eRzFC'], _0x39a924);
}
function getEntries() {
    const _0x598c0d = {
        'lOzkI': function (_0x45ae7f) {
            return _0x45ae7f();
        }
    };
    return _0x598c0d['lOzkI'](filterBufferMapByNameAndType);
}
function getEntriesByName(_0x2abead) {
    const _0x217365 = {
        'ualem': function (_0x50be7e, _0x38b1e6) {
            return _0x50be7e !== _0x38b1e6;
        },
        'QXTsA': function (_0x5838d8, _0x28c0b5, _0x438309) {
            return _0x5838d8(_0x28c0b5, _0x438309);
        }
    };
    return _0x217365['ualem'](_0x2abead, undefined) && (_0x2abead = '' + _0x2abead), _0x217365['QXTsA'](filterBufferMapByNameAndType, _0x2abead, undefined);
}
function getEntriesByType(_0x5b432f) {
    const _0x56fb05 = {
        'YlLPS': function (_0x2cfd3e, _0x424ce5) {
            return _0x2cfd3e !== _0x424ce5;
        },
        'qLxUR': function (_0x5e796d, _0x52a3ce, _0x46856e) {
            return _0x5e796d(_0x52a3ce, _0x46856e);
        }
    };
    return _0x56fb05['YlLPS'](_0x5b432f, undefined) && (_0x5b432f = '' + _0x5b432f), _0x56fb05['qLxUR'](filterBufferMapByNameAndType, undefined, _0x5b432f);
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
    const _0x27e88a = {
        'PnxkT': function (_0x20d60e, _0x49ed50, _0x47bd3e, _0xdaf9d6) {
            return _0x20d60e(_0x49ed50, _0x47bd3e, _0xdaf9d6);
        },
        'cmUGd': 'timeOrigin',
        'JlaRM': function (_0x37d931) {
            return _0x37d931();
        }
    };
    _0x27e88a['PnxkT'](ObjectDefineProperty, Performance['prototype'], _0x27e88a['cmUGd'], {
        'configurable': !![],
        'enumerable': !![],
        'value': _0x27e88a['JlaRM'](getTimeOriginTimestamp)
    });
}
module['exports'] = {
    'InternalPerformance': InternalPerformance,
    'refreshTimeOrigin': refreshTimeOrigin
};
