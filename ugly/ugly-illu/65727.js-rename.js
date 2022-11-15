"use strict";
const peq = new Uint32Array(65536);

const myers_32 = (t, e) => {
  const n = t.length;
  const o = e.length;
  const c = 1 << n - 1;
  var s = -1;
  var l = 0;
  var r = n;
  var h = n;
  while (h--) {
    peq[t.charCodeAt(h)] |= 1 << h;
  }for (h = 0; h < o; h++) {
    var t = peq[e.charCodeAt(h)];
    const i = t | l;
    t |= (t & s) + s ^ s;l |= ~(t | s);s &= t;if (l & c) {
      r++;
    }if (s & c) {
      r--;
    }l = l << 1 | 1;s = s << 1 | ~(i | l);l &= i;
  }h = n;while (h--) {
    peq[t.charCodeAt(h)] = 0;
  }return r;
};

const myers_x = (s, e) => {
  const t = s.length;
  const l = e.length;
  const r = [];
  const h = [];
  const n = Math.ceil(t / 32);
  const o = Math.ceil(l / 32);
  var i = l;
  // Unevaluable loop test expression
  for (let t = 0; t < n; t++) {
    h[t] = -1;r[t] = 0;
  }var f = 0;
  for (; f < o - 1; f++) {
    var o = 0;
    var c = -1;
    const d = f * 32;
    const p = Math.min(32, l) + d;
    // Unknown loop control variable
    for (let t = d; t < p; t++) {
      peq[e.charCodeAt(t)] |= 1 << t;
    }i = l;for (let n = 0; n < t; n++) {
      const g = peq[s.charCodeAt(n)];
      const q = h[n / 32 | 0] >>> n & 1;
      const A = r[n / 32 | 0] >>> n & 1;
      const C = g | o;
      const u = ((g | A) & c) + c ^ c | g | A;
      var t = o | ~(u | c);
      var e = c & u;
      if (t >>> 31 ^ q) {
        h[n / 32 | 0] ^= 1 << n;
      }if (e >>> 31 ^ A) {
        r[n / 32 | 0] ^= 1 << n;
      }t = t << 1 | q;e = e << 1 | A;c = e | ~(C | t);o = t & C;
    } // Unknown loop control variable
    for (let t = d; t < p; t++) {
      peq[e.charCodeAt(t)] = 0;
    }
  }var c = 0;
  var a = -1;
  const d = f * 32;
  const p = Math.min(32, l - d) + d;
  // Unknown loop control variable
  for (let t = d; t < p; t++) {
    peq[e.charCodeAt(t)] |= 1 << t;
  }i = l;for (let n = 0; n < t; n++) {
    const g = peq[s.charCodeAt(n)];
    const q = h[n / 32 | 0] >>> n & 1;
    const A = r[n / 32 | 0] >>> n & 1;
    const C = g | c;
    const u = ((g | A) & a) + a ^ a | g | A;
    var t = c | ~(u | a);
    var e = a & u;
    i += t >>> l - 1 & 1;i -= e >>> l - 1 & 1;if (t >>> 31 ^ q) {
      h[n / 32 | 0] ^= 1 << n;
    }if (e >>> 31 ^ A) {
      r[n / 32 | 0] ^= 1 << n;
    }t = t << 1 | q;e = e << 1 | A;a = e | ~(C | t);c = t & C;
  } // Unknown loop control variable
  for (let t = d; t < p; t++) {
    peq[e.charCodeAt(t)] = 0;
  }return i;
};

const distance = (t, e) => {
  if (t.length > e.length) {
    const n = e;
    e = t;t = n;
  }if (t.length === 0) {
    return e.length;
  }if (t.length <= 32) {
    return myers_32(t, e);
  }return myers_x(t, e);
};

const closest = (e, n) => {
  var o = Infinity;
  var c = 0;
  for (let t = 0; t < n.length; t++) {
    const s = distance(e, n[t]);
    if (s < o) {
      o = s;c = t;
    }
  }return n[c];
};

module.exports = { closest: closest, distance: distance };
