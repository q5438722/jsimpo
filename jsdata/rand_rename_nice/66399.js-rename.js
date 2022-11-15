'use strict';
var bytesToUuid = require("./bytesToUuid");
function uuidToBytes(uuid) {
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function(char) {
    bytes.push(parseInt(char, 16));
  });
  return bytes;
}
function stringToBytes(s) {
  s = unescape(encodeURIComponent(s));
  var bytes = new Array(s.length);
  var i = 0;
  for (; i < s.length; i++) {
    bytes[i] = s.charCodeAt(i);
  }
  return bytes;
}
module.exports = function(index, time, colors) {
  var generate = function(name, namespace, buf, offset) {
    var i = buf && offset || 0;
    if (typeof name == "string") {
      name = stringToBytes(name);
    }
    if (typeof namespace == "string") {
      namespace = uuidToBytes(namespace);
    }
    if (!Array.isArray(name)) {
      throw TypeError("value must be an array of bytes");
    }
    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError("namespace must be uuid string or an Array of 16 byte values");
    }
    var rnds = colors(namespace.concat(name));
    rnds[6] = rnds[6] & 15 | time;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      var ii = 0;
      for (; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }
    return buf || bytesToUuid(rnds);
  };
  try {
    generate.name = index;
  } catch (r) {
  }
  generate.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  generate.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  return generate;
};

