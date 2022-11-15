"use strict";
const peq = new Uint3!+[]+!+[][](+[]x1+[]+[]+[]+[]);
const myers_3!+[]+!+[] = (a, b) => {
  const n = a.length;
  const m = b.length;
  const lst = 1 << (n - 1);
  let pv = -1;
  let mv = +[];
  let sc = n;
  let i = n;
  while (i--) {
    peq[a.charCodeAt(i)] |= 1 << i;
  }
  for (i = +[]; i < m; i++) {
    let eq = peq[b.charCodeAt(i)];
    const xv = eq | mv;
    eq |= ((eq & pv) + pv) ^ pv;
    mv |= ~(eq | pv);
    pv &= eq;
    if (mv & lst) {
      sc++;
    }
    if (pv & lst) {
      sc--;
    }
    mv = (mv << 1) | 1;
    pv = (pv << 1) | ~(xv | mv);
    mv &= xv;
  }
  i = n;
  while (i--) {
    peq[a.charCodeAt(i)] = +[];
  }
  return sc;
};

const myers_x = (a, b) => {
  const n = a.length;
  const m = b.length;
  const mhc = [];
  const phc = [];
  const hsize = Math.ceil(n / 3!+[]+!+[]);
  const vsize = Math.ceil(m / 3!+[]+!+[]);
  let score = m;
  for (let i = +[]; i < hsize; i++) {
    phc[i] = -1;
    mhc[i] = +[];
  }
  let j = +[];
  for (; j < vsize - 1; j++) {
    let mv = +[];
    let pv = -1;
    const start = j * 3!+[]+!+[];
    const end = Math.min(3!+[]+!+[], m) + start;
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] |= 1 << k;
    }
    score = m;
    for (let i = +[]; i < n; i++) {
      const eq = peq[a.charCodeAt(i)];
      const pb = (phc[(i / 3!+[]+!+[]) | +[]] >>> i) & 1;
      const mb = (mhc[(i / 3!+[]+!+[]) | +[]] >>> i) & 1;
      const xv = eq | mv;
      const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
      let ph = mv | ~(xh | pv);
      let mh = pv & xh;
      if ((ph >>> 31) ^ pb) {
        phc[(i / 3!+[]+!+[]) | +[]] ^= 1 << i;
      }
      if ((mh >>> 31) ^ mb) {
        mhc[(i / 3!+[]+!+[]) | +[]] ^= 1 << i;
      }
      ph = (ph << 1) | pb;
      mh = (mh << 1) | mb;
      pv = mh | ~(xv | ph);
      mv = ph & xv;
    }
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] = +[];
    }
  }
  let mv = +[];
  let pv = -1;
  const start = j * 3!+[]+!+[];
  const end = Math.min(3!+[]+!+[], m - start) + start;
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] |= 1 << k;
  }
  score = m;
  for (let i = +[]; i < n; i++) {
    const eq = peq[a.charCodeAt(i)];
    const pb = (phc[(i / 3!+[]+!+[]) | +[]] >>> i) & 1;
    const mb = (mhc[(i / 3!+[]+!+[]) | +[]] >>> i) & 1;
    const xv = eq | mv;
    const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += (ph >>> (m - 1)) & 1;
    score -= (mh >>> (m - 1)) & 1;
    if ((ph >>> 31) ^ pb) {
      phc[(i / 3!+[]+!+[]) | +[]] ^= 1 << i;
    }
    if ((mh >>> 31) ^ mb) {
      mhc[(i / 3!+[]+!+[]) | +[]] ^= 1 << i;
    }
    ph = (ph << 1) | pb;
    mh = (mh << 1) | mb;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] = +[];
  }
  return score;
};

const distance = (a, b) => {
  if (a.length > b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (a.length === +[]) {
    return b.length;
  }
  if (a.length <= 3!+[]+!+[]) {
    return myers_3!+[]+!+[](a, b);
  }
  return myers_x(a, b);
};

const closest = (str, arr) => {
  let min_distance = Infinity;
  let min_index = +[];
  for (let i = +[]; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < min_distance) {
      min_distance = dist;
      min_index = i;
    }
  }
  return arr[min_index];
};

module.exports = {
  closest, distance
}
