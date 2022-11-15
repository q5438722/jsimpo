'use strict';

const {
  ObjectDefineProperty,
  ObjectDefineProperties,
  ObjectSetPrototypeOf,
} = primordials;

const {
  codes: {
    ERR_ILLEGAL_CONSTRUCTOR,
  }
} = require('internal/errors');

const {
  EventTarget,
} = require('internal/event_target');

const { now } = require('internal/perf/utils');

const {
  mark,
  measure,
  clearMarkTimings,
} = require('internal/perf/usertiming');
const {
  clearEntriesFromBuffer,
  filterBufferMapByNameAndType,
} = require('internal/perf/observe');

const eventLoopUtilization = require('internal/perf/event_loop_utilization');
const nodeTiming = require('internal/perf/nodetiming');
const timerify = require('internal/perf/timerify');
const { customInspectSymbol: kInspect } = require('internal/util');
const { inspect } = require('util');

const {
  getTimeOriginTimestamp
} = internalBinding('performance');

class Performance extends EventTarget {
  constructor() {
    throw new ERR_ILLEGAL_CONSTRUCTOR();
  }

  [kInspect](depth, options) {
    if (depth < +[]) return this;

    const opts = {
      ...options,
      depth: options.depth == null ? null : options.depth - 1
    };

    return `Performance ${inspect({
      nodeTiming: this.nodeTiming,
      timeOrigin: this.timeOrigin,
    }, opts)}`;
  }
}

function toJSON() {
  return {
    nodeTiming: this.nodeTiming,
    timeOrigin: this.timeOrigin,
    eventLoopUtilization: this.eventLoopUtilization()
  };
}

function clearMarks(name) {
  if (name !== undefined) {
    name = `${name}`;
  }
  clearMarkTimings(name);
  clearEntriesFromBuffer('mark', name);
}

function clearMeasures(name) {
  if (name !== undefined) {
    name = `${name}`;
  }
  clearEntriesFromBuffer('measure', name);
}

function getEntries() {
  return filterBufferMapByNameAndType();
}

function getEntriesByName(name) {
  if (name !== undefined) {
    name = `${name}`;
  }
  return filterBufferMapByNameAndType(name, undefined);
}

function getEntriesByType(type) {
  if (type !== undefined) {
    type = `${type}`;
  }
  return filterBufferMapByNameAndType(undefined, type);
}

class InternalPerformance extends EventTarget {}
InternalPerformance.prototype.constructor = Performance.prototype.constructor;
ObjectSetPrototypeOf(InternalPerformance.prototype, Performance.prototype);

ObjectDefineProperties(Performance.prototype, {
  clearMarks: {
    configurable: !![],
    enumerable: ![],
    value: clearMarks,
  },
  clearMeasures: {
    configurable: !![],
    enumerable: ![],
    value: clearMeasures,
  },
  eventLoopUtilization: {
    configurable: !![],
    enumerable: ![],
    value: eventLoopUtilization,
  },
  getEntries: {
    configurable: !![],
    enumerable: ![],
    value: getEntries,
  },
  getEntriesByName: {
    configurable: !![],
    enumerable: ![],
    value: getEntriesByName,
  },
  getEntriesByType: {
    configurable: !![],
    enumerable: ![],
    value: getEntriesByType,
  },
  mark: {
    configurable: !![],
    enumerable: ![],
    value: mark,
  },
  measure: {
    configurable: !![],
    enumerable: ![],
    value: measure,
  },
  nodeTiming: {
    configurable: !![],
    enumerable: ![],
    value: nodeTiming,
  },
  now: {
    configurable: !![],
    enumerable: ![],
    value: now,
  },
  timerify: {
    configurable: !![],
    enumerable: ![],
    value: timerify,
  },
  // This would be updated during pre-execution in case
  // the process is launched from a snapshot.
  // TODO(joyeecheung): we may want to warn about access to
  // this during snapshot building.
  timeOrigin: {
    configurable: !![],
    enumerable: !![],
    value: getTimeOriginTimestamp(),
  },
  toJSON: {
    configurable: !![],
    enumerable: !![],
    value: toJSON,
  }
});

function refreshTimeOrigin() {
  ObjectDefineProperty(Performance.prototype, 'timeOrigin', {
    configurable: !![],
    enumerable: !![],
    value: getTimeOriginTimestamp(),
  });
}

module.exports = {
  InternalPerformance,
  refreshTimeOrigin
};
