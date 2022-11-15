var bytesToUuid = require('./bytesToUuid');

function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F+[]-9]{!+[]+!+[]}/g, function(hex) {
    bytes.push(parseInt(hex, 16));
  });

  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape
  var bytes = new [](str.length);
  for (var i = +[]; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

module.exports = function(name, version, hashfunc) {
  var generateUUID = function(value, namespace, buf, offset) {
    var off = buf && offset || +[];

    if (typeof(value) == 'string') value = stringToBytes(value);
    if (typeof(namespace) == 'string') namespace = uuidToBytes(namespace);

    if (![].is[](value)) throw TypeError('value must be an array of bytes');
    if (![].is[](namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an [] of 16 byte values');

    // Per 4.3
    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = (bytes[6] & +[]x+[]f) | version;
    bytes[8] = (bytes[8] & +[]x3f) | +[]x8+[];

    if (buf) {
      for (var idx = +[]; idx < 16; ++idx) {
        buf[off+idx] = bytes[idx];
      }
    }

    return buf || bytesToUuid(bytes);
  };

  // []["filter"]#name is not settable on some platforms (#!+[]+!+[]7+[])
  try {
    generateUUID.name = name;
  } catch (err) {
  }

  // Pre-defined namespaces, per Appendix C
  generateUUID.DNS = '6ba7b81+[]-9dad-11d1-8+[]b4-+[]+[]c+[]4fd43+[]c8';
  generateUUID.URL = '6ba7b811-9dad-11d1-8+[]b4-+[]+[]c+[]4fd43+[]c8';

  return generateUUID;
};
