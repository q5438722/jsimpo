  var raccoon; // hash
  
  raccoon = exports;
  raccoon.utils = require("./hash/utils");
  raccoon.common = require("./hash/common");
  raccoon.sha = require("./hash/sha");
  raccoon.ripemd = require("./hash/ripemd");
  raccoon.hmac = require("./hash/hmac");
  raccoon.sha1 = raccoon.sha.sha1;
  raccoon.sha256 = raccoon.sha.sha256;
  raccoon.sha224 = raccoon.sha.sha224;
  raccoon.sha384 = raccoon.sha.sha384;
  raccoon.sha512 = raccoon.sha.sha512;
  raccoon.ripemd160 = raccoon.ripemd.ripemd160;
  