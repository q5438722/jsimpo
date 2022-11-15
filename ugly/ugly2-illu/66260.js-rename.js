module.exports = { read: read, readSSHPrivate: readSSHPrivate, write: write };
const assert = require("assert-plus");

const asn1 = require("asn1");

const Buffer = require("safer-buffer").Buffer;

const algs = require("../algs");

const utils = require("../utils");

const crypto = require("crypto");

const Key = require("../key");

const PrivateKey = require("../private-key");

const pem = require("./pem");

const rfc4253 = require("./rfc4253");

const SSHBuffer = require("../ssh-buffer");

const errors = require("../errors");

var bcrypt;
function read(r, e) {
  return pem.read(r, e);
}const MAGIC = "openssh-key-v1";
function readSSHPrivate(r, e, t) {
  e = new SSHBuffer({ buffer: e });const a = e.readCString();
  assert.strictEqual(a, MAGIC, "bad magic string");const i = e.readString();
  const n = e.readString();
  const f = e.readBuffer();
  const s = e.readInt();
  if (s !== 1) {
    throw new Error("OpenSSH-format key file contains multiple keys: this is unsupported.");
  }const o = e.readBuffer();
  if (r === "public") {
    assert.ok(e.atEnd(), "excess bytes left after key");return rfc4253.read(o);
  }var u = e.readBuffer();
  assert.ok(e.atEnd(), "excess bytes left after key");const p = new SSHBuffer({ buffer: f });
  switch (n) {case "none":
      if (i !== "none") {
        throw new Error("OpenSSH-format key uses KDF \"none\" but specifies a cipher other than \"none\"");
      }break;case "bcrypt":
      const c = p.readBuffer();
      const v = p.readInt();
      const d = utils.opensshCipherInfo(i);
      if (bcrypt === undefined) {
        bcrypt = require("bcrypt-pbkdf");
      }if (typeof t.passphrase === "string") {
        t.passphrase = Buffer.from(t.passphrase, "utf-8");
      }if (!Buffer.isBuffer(t.passphrase)) {
        throw new errors.KeyEncryptedError(t.filename, "OpenSSH");
      }const l = new Uint8Array(t.passphrase);
      const y = new Uint8Array(c);
      var w = new Uint8Array(d.keySize + d.blockSize);
      const S = bcrypt.pbkdf(l, l.length, y, y.length, w, w.length, v);
      if (S !== 0) {
        throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
      }w = Buffer.from(w);const h = w.slice(0, d.keySize);
      const b = w.slice(d.keySize, d.keySize + d.blockSize);
      const k = crypto.createDecipheriv(d.opensslName, h, b);
      k.setAutoPadding(false);var B;
      const g = [];
      k.once("error", function (r) {
        if (r.toString().indexOf("bad decrypt") !== -1) {
          throw new Error("Incorrect passphrase supplied, could not decrypt key");
        }throw r;
      });k.write(u);k.end();while ((B = k.read()) !== null) g.push(B);u = Buffer.concat(g);break;default:
      throw new Error("OpenSSH-format key uses unknown KDF \"" + n + "\"");}e = new SSHBuffer({ buffer: u });const m = e.readInt();
  const E = e.readInt();
  if (m !== E) {
    throw new Error("Incorrect passphrase supplied, could not decrypt key");
  }const I = {};
  const P = rfc4253.readInternal(I, "private", e.remainder());
  e.skip(I.consumed);const H = e.readString();
  P.comment = H;return P;
}function write(r, e) {
  var t;
  if (PrivateKey.isPrivateKey(r)) t = r.toPublic();else t = r;var a = "none";
  var i = "none";
  var n = Buffer.alloc(0);
  var f = { blockSize: 8 };
  var s;
  if (e !== undefined) {
    s = e.passphrase;if (typeof s === "string") s = Buffer.from(s, "utf-8");if (s !== undefined) {
      assert.buffer(s, "options.passphrase");assert.optionalString(e.cipher, "options.cipher");a = e.cipher;if (a === undefined) a = "aes128-ctr";f = utils.opensshCipherInfo(a);i = "bcrypt";
    }
  }var o;
  if (PrivateKey.isPrivateKey(r)) {
    o = new SSHBuffer({});const u = crypto.randomBytes(4).readUInt32BE(0);
    o.writeInt(u);o.writeInt(u);o.write(r.toBuffer("rfc4253"));o.writeString(r.comment || "");var p = 1;
    while (o._offset % f.blockSize !== 0) o.writeChar(p++);o = o.toBuffer();
  }switch (i) {case "none":
      break;case "bcrypt":
      const c = crypto.randomBytes(16);
      const v = 16;
      const d = new SSHBuffer({});
      d.writeBuffer(c);d.writeInt(v);n = d.toBuffer();if (bcrypt === undefined) {
        bcrypt = require("bcrypt-pbkdf");
      }const l = new Uint8Array(s);
      const y = new Uint8Array(c);
      var w = new Uint8Array(f.keySize + f.blockSize);
      const S = bcrypt.pbkdf(l, l.length, y, y.length, w, w.length, v);
      if (S !== 0) {
        throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
      }w = Buffer.from(w);const h = w.slice(0, f.keySize);
      const b = w.slice(f.keySize, f.keySize + f.blockSize);
      const k = crypto.createCipheriv(f.opensslName, h, b);
      k.setAutoPadding(false);var B;
      const g = [];
      k.once("error", function (r) {
        throw r;
      });k.write(o);k.end();while ((B = k.read()) !== null) g.push(B);o = Buffer.concat(g);break;default:
      throw new Error("Unsupported kdf " + i);}var m = new SSHBuffer({});
  m.writeCString(MAGIC);m.writeString(a);m.writeString(i);m.writeBuffer(n);m.writeInt(1);m.writeBuffer(t.toBuffer("rfc4253"));if (o) m.writeBuffer(o);m = m.toBuffer();var E;
  if (PrivateKey.isPrivateKey(r)) E = "OPENSSH PRIVATE KEY";else E = "OPENSSH PUBLIC KEY";const I = m.toString("base64");
  const P = I.length + I.length / 70 + 80;
  m = Buffer.alloc(P);var H = 0;
  H += m.write("-----BEGIN OPENSSH PUBLIC KEY-----\n", H);for (var q = 0; q < I.length;) {
    var z = q + 70;
    if (z > I.length) z = I.length;H += m.write(I.slice(q, z), H);m[H++] = 10;q = z;
  }H += m.write("-----END OPENSSH PUBLIC KEY-----\n", H);return m.slice(0, H);
}
