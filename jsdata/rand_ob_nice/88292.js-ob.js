'use strict';
const path = ["toJSONValue", "addType", "TEaAr", "name", "dob", "address", "Person", "fromJSONValue", "content", "STkmd", "800933SbvZlA", "1043895YSUMZO", "214523jIEsCb", "1932775TTSiRA", "1rXYVRE", "1561540DDgagI", "715352cwEUlj", "7256869MmMwJq", "1BPMKnS", "city", "state", "typeName", "Address", "YSjob"];
const getRefreshTokenKey = m;
(function(params, val) {
  const toMonths = m;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(248)) + -parseInt(toMonths(249)) + -parseInt(toMonths(250)) + -parseInt(toMonths(251)) * parseInt(toMonths(252)) + -parseInt(toMonths(253)) + -parseInt(toMonths(254)) + parseInt(toMonths(255)) * parseInt(toMonths(256));
      if (nodeval === val) {
        break;
      } else {
        params["push"](params["shift"]());
      }
    } catch (_0x1192f7) {
      params["push"](params["shift"]());
    }
  }
})(path, 1412201 + -42335 * -12 + 3 * -310790);
import{
  EJSON as EJSON
}from "./ejson";
class Address {
  constructor(versionByteNum, hashBuf) {
    const ChromosomeInfo = m;
    this[ChromosomeInfo(257)] = versionByteNum;
    this[ChromosomeInfo(258)] = hashBuf;
  }
  [getRefreshTokenKey(259)]() {
    const now = getRefreshTokenKey;
    const rpm_traffic = {
      "YSjob" : now(260)
    };
    return rpm_traffic[now(261)];
  }
  [getRefreshTokenKey(262)]() {
    const updateDevicesAfterDelay = getRefreshTokenKey;
    return {
      "city" : this[updateDevicesAfterDelay(257)],
      "state" : this["state"]
    };
  }
}
EJSON[getRefreshTokenKey(263)](getRefreshTokenKey(260), (data) => {
  return new Address(data[getRefreshTokenKey(257)], data["state"]);
});
class Person {
  constructor(name, value, address) {
    this["name"] = name;
    this["dob"] = value;
    this["address"] = address;
  }
  ["typeName"]() {
    const now = getRefreshTokenKey;
    const rpm_traffic = {
      "TEaAr" : "Person"
    };
    return rpm_traffic[now(264)];
  }
  [getRefreshTokenKey(262)]() {
    const updateDevicesAfterDelay = getRefreshTokenKey;
    return {
      "name" : this[updateDevicesAfterDelay(265)],
      "dob" : EJSON["toJSONValue"](this[updateDevicesAfterDelay(266)]),
      "address" : EJSON[updateDevicesAfterDelay(262)](this[updateDevicesAfterDelay(267)])
    };
  }
}
EJSON[getRefreshTokenKey(263)](getRefreshTokenKey(268), (data) => {
  return new Person(data[getRefreshTokenKey(265)], EJSON[getRefreshTokenKey(269)](data[getRefreshTokenKey(266)]), EJSON[getRefreshTokenKey(269)](data[getRefreshTokenKey(267)]));
});
class Manifest {
  constructor(options) {
    const ChromosomeInfo = getRefreshTokenKey;
    this[ChromosomeInfo(270)] = options;
  }
  ["typeName"]() {
    const now = getRefreshTokenKey;
    const rpm_traffic = {
      "STkmd" : "Holder"
    };
    return rpm_traffic[now(271)];
  }
  [getRefreshTokenKey(262)]() {
    return this["content"];
  }
}
EJSON["addType"]("Holder", (manifestContent) => {
  return new Manifest(manifestContent);
});
function m(i, s) {
  return m = function(i, keys) {
    i = i - (-433 * 4 + 8340 + 424 * -15);
    let d = path[i];
    return d;
  }, m(i, s);
}
const LeanKitClient = {
  "Address" : Address,
  "Person" : Person,
  "Holder" : Manifest
};
export default LeanKitClient;

