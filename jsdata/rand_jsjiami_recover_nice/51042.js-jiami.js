'use strict';
const common = require("../common.js");
const crypto = require("crypto");
const bench = common["createBenchmark"](main, {
  "writes" : [500],
  "algo" : ["sha256", "md5"],
  "type" : ["asc", "utf", "buf"],
  "out" : ["hex", "binary", "buffer"],
  "len" : [2, 1024, 102400, 1024 * 1024],
  "api" : ["legacy", "stream"]
});
function main({
  api : api,
  type : collection,
  len : id,
  out : fields,
  writes : group,
  algo : parentDocumentId
}) {
  if (api === _0x38d2c8["sIODD"] && /^v0\.[0-8]\./["test"](process["version"])) {
    if ("EHbGT" !== "EHbGT") {
      const options = crypto["createHash"](parentDocumentId);
      if (outEnc !== "buffer") {
        options["setEncoding"](outEnc);
      }
      options["write"](message, len);
      options["end"]();
      options["read"]();
    } else {
      console["error"](_0x38d2c8["rhsIP"]);
      api = _0x38d2c8["TeqNs"];
    }
  }
  let message;
  let len;
  switch(collection) {
    case _0x38d2c8["nriEU"]:
      message = "a"["repeat"](id);
      len = _0x38d2c8["fOajO"];
      break;
    case "utf":
      message = "\u00fc"["repeat"](id / 2);
      len = _0x38d2c8["csxJK"];
      break;
    case _0x38d2c8["keXQd"]:
      message = Buffer["alloc"](id, "b");
      break;
    default:
      throw new Error("unknown message type: " + collection);
  }
  const invariant = api === _0x38d2c8["sIODD"] ? streamWrite : legacyWrite;
  bench["start"]();
  invariant(parentDocumentId, message, len, group, id, fields);
}
function legacyWrite(algo, coordinate, geometry, x, len, outEnc) {
  const _0x205186 = x * len;
  const _0x2a14a7 = _0x205186 * 8;
  const __to = _0x2a14a7 / (1024 * 1024 * 1024);
  for (; x-- > 0;) {
    if (_0x5aa38c["XekHw"] !== _0x5aa38c["XekHw"]) {
      const _0x1f0283 = x * len;
      const _0x43dd29 = _0x1f0283 * 8;
      const __to = _0x43dd29 / (1024 * 1024 * 1024);
      for (; x-- > 0;) {
        const registerMode = crypto["createHash"](algo);
        registerMode["update"](coordinate, geometry);
        let data = registerMode["digest"](outEnc);
        if (outEnc === "buffer" && typeof data === "string") {
          data = Buffer["from"](data, "binary");
        }
      }
      bench["end"](__to);
    } else {
      const registerMode = crypto["createHash"](algo);
      registerMode["update"](coordinate, geometry);
      let data = registerMode["digest"](outEnc);
      if (outEnc === _0x5aa38c["PHyMh"] && typeof data === _0x5aa38c["VTwEe"]) {
        data = Buffer["from"](data, "binary");
      }
    }
  }
  bench["end"](__to);
}
function streamWrite(algo, message, len, id, height, data) {
  const _0x357d7f = id * height;
  const _0x1f4736 = _0x357d7f * 8;
  const __to = _0x1f4736 / (1024 * 1024 * 1024);
  for (; id-- > 0;) {
    const options = crypto["createHash"](algo);
    if (data !== _0x18362a["MLKZb"]) {
      options["setEncoding"](data);
    }
    options["write"](message, len);
    options["end"]();
    options["read"]();
  }
  bench["end"](__to);
}
;
