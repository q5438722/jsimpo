'use strict';
const common = require("../common.js");
const crypto = require("crypto");
const bench = common.createBenchmark(main, {
  writes : [500],
  algo : ["sha256", "md5"],
  type : ["asc", "utf", "buf"],
  out : ["hex", "binary", "buffer"],
  len : [2, 1024, 102400, 1024 * 1024],
  api : ["legacy", "stream"]
});
function main({
  api : api,
  type : collection,
  len : i,
  out : fields,
  writes : group,
  algo : parentDocumentId
}) {
  if (api === "stream" && /^v0\.[0-8]\./.test(process.version)) {
    console.error("Crypto streams not available until v0.10");
    api = "legacy";
  }
  let code;
  let encoding;
  switch(collection) {
    case "asc":
      code = "a".repeat(i);
      encoding = "ascii";
      break;
    case "utf":
      code = "\u00fc".repeat(i / 2);
      encoding = "utf8";
      break;
    case "buf":
      code = Buffer.alloc(i, "b");
      break;
    default:
      throw new Error(`unknown message type: ${collection}`);
  }
  const callback = api === "stream" ? streamWrite : legacyWrite;
  bench.start();
  callback(parentDocumentId, code, encoding, group, i, fields);
}
function legacyWrite(algo, message, encoding, writes, len, outEnc) {
  const s = writes * len;
  const o = s * 8;
  const n = o / (1024 * 1024 * 1024);
  for (; writes-- > 0;) {
    const h = crypto.createHash(algo);
    h.update(message, encoding);
    let data = h.digest(outEnc);
    if (outEnc === "buffer" && typeof data === "string") {
      data = Buffer.from(data, "binary");
    }
  }
  bench.end(n);
}
function streamWrite(algo, message, id, len, chunk, encoding) {
  const s = len * chunk;
  const o = s * 8;
  const n = o / (1024 * 1024 * 1024);
  for (; len-- > 0;) {
    const socket = crypto.createHash(algo);
    if (encoding !== "buffer") {
      socket.setEncoding(encoding);
    }
    socket.write(message, id);
    socket.end();
    socket.read();
  }
  bench.end(n);
}
;
