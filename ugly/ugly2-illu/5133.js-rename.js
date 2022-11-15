const generatePrime = require("./lib/generatePrime");

const primes = require("./lib/primes.json");

const DH = require("./lib/dh");

function getDiffieHellman(e) {
  const r = new Buffer(primes[e].prime, "hex");
  const f = new Buffer(primes[e].gen, "hex");
  return new DH(r, f);
}const ENCODINGS = { binary: true, hex: true, base64: true };
function createDiffieHellman(e, r, f, i) {
  if (Buffer.isBuffer(r) || ENCODINGS[r] === undefined) {
    return createDiffieHellman(e, "binary", r, f);
  }r = r || "binary";i = i || "binary";f = f || new Buffer([2]);if (!Buffer.isBuffer(f)) {
    f = new Buffer(f, i);
  }if (typeof e === "number") {
    return new DH(generatePrime(e, f), f, true);
  }if (!Buffer.isBuffer(e)) {
    e = new Buffer(e, r);
  }return new DH(e, f, true);
}exports.DiffieHellmanGroup = exports.createDiffieHellmanGroup = exports.getDiffieHellman = getDiffieHellman;exports.createDiffieHellman = exports.DiffieHellman = createDiffieHellman;
