'use strict';
const peq = new Uint32Array(65536);
const myers_32 = (format, r) => {
  const callHeight = format.length;
  const measureH = r.length;
  const i = 1 << callHeight - 1;
  let a = -1;
  let mod = 0;
  let f = callHeight;
  let h = callHeight;
  for (; h--;) {
    peq[format.charCodeAt(h)] |= 1 << h;
  }
  h = 0;
  for (; h < measureH; h++) {
    let b = peq[r.charCodeAt(h)];
    const ctrl = b | mod;
    b = b | (b & a) + a ^ a;
    mod = mod | ~(b | a);
    a = a & b;
    if (mod & i) {
      f++;
    }
    if (a & i) {
      f--;
    }
    mod = mod << 1 | 1;
    a = a << 1 | ~(ctrl | mod);
    mod = mod & ctrl;
  }
  h = callHeight;
  for (; h--;) {
    peq[format.charCodeAt(h)] = 0;
  }
  return f;
};
const myers_x = (s, octetStream) => {
  const timeLength = s.length;
  const l = octetStream.length;
  const limbs = [];
  const conf_shortcuts_target = [];
  const rows_new = Math.ceil(timeLength / 32);
  const length = Math.ceil(l / 32);
  let out = l;
  for (let i = 0; i < rows_new; i++) {
    conf_shortcuts_target[i] = -1;
    limbs[i] = 0;
  }
  let f = 0;
  for (; f < length - 1; f++) {
    let andTmp = 0;
    let other_bool = -1;
    const d = f * 32;
    const pixCount = Math.min(32, l) + d;
    for (let i = d; i < pixCount; i++) {
      peq[octetStream.charCodeAt(i)] |= 1 << i;
    }
    out = l;
    for (let t = 0; t < timeLength; t++) {
      const NODE_REAGGREGATE_BIT = peq[s.charCodeAt(t)];
      const right = conf_shortcuts_target[t / 32 | 0] >>> t & 1;
      const data = limbs[t / 32 | 0] >>> t & 1;
      const tmpb = NODE_REAGGREGATE_BIT | andTmp;
      const this_bool = ((NODE_REAGGREGATE_BIT | data) & other_bool) + other_bool ^ other_bool | NODE_REAGGREGATE_BIT | data;
      let left = andTmp | ~(this_bool | other_bool);
      let pixdata = other_bool & this_bool;
      if (left >>> 31 ^ right) {
        conf_shortcuts_target[t / 32 | 0] ^= 1 << t;
      }
      if (pixdata >>> 31 ^ data) {
        limbs[t / 32 | 0] ^= 1 << t;
      }
      left = left << 1 | right;
      pixdata = pixdata << 1 | data;
      other_bool = pixdata | ~(tmpb | left);
      andTmp = left & tmpb;
    }
    for (let i = d; i < pixCount; i++) {
      peq[octetStream.charCodeAt(i)] = 0;
    }
  }
  let andTmp = 0;
  let other_bool = -1;
  const x2 = f * 32;
  const pixCount = Math.min(32, l - x2) + x2;
  for (let i = x2; i < pixCount; i++) {
    peq[octetStream.charCodeAt(i)] |= 1 << i;
  }
  out = l;
  for (let t = 0; t < timeLength; t++) {
    const NODE_REAGGREGATE_BIT = peq[s.charCodeAt(t)];
    const right = conf_shortcuts_target[t / 32 | 0] >>> t & 1;
    const data = limbs[t / 32 | 0] >>> t & 1;
    const tmpb = NODE_REAGGREGATE_BIT | andTmp;
    const this_bool = ((NODE_REAGGREGATE_BIT | data) & other_bool) + other_bool ^ other_bool | NODE_REAGGREGATE_BIT | data;
    let left = andTmp | ~(this_bool | other_bool);
    let pixdata = other_bool & this_bool;
    out = out + (left >>> l - 1 & 1);
    out = out - (pixdata >>> l - 1 & 1);
    if (left >>> 31 ^ right) {
      conf_shortcuts_target[t / 32 | 0] ^= 1 << t;
    }
    if (pixdata >>> 31 ^ data) {
      limbs[t / 32 | 0] ^= 1 << t;
    }
    left = left << 1 | right;
    pixdata = pixdata << 1 | data;
    other_bool = pixdata | ~(tmpb | left);
    andTmp = left & tmpb;
  }
  for (let i = x2; i < pixCount; i++) {
    peq[octetStream.charCodeAt(i)] = 0;
  }
  return out;
};
const distance = (p, c) => {
  if (p.length > c.length) {
    const pendingViews = c;
    c = p;
    p = pendingViews;
  }
  if (p.length === 0) {
    return c.length;
  }
  if (p.length <= 32) {
    return myers_32(p, c);
  }
  return myers_x(p, c);
};
const closest = (start, nodes) => {
  let best_part_step_diff = Infinity;
  let firstPos = 0;
  for (let i = 0; i < nodes.length; i++) {
    const tmp_step_diff = distance(start, nodes[i]);
    if (tmp_step_diff < best_part_step_diff) {
      best_part_step_diff = tmp_step_diff;
      firstPos = i;
    }
  }
  return nodes[firstPos];
};
module.exports = {
  closest : closest,
  distance : distance
};

