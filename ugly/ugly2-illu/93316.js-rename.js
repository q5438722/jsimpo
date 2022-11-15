function nQueensBitwiseRecursive(e, n = 0, i = 0, t = 0, s = 0) {
  var u = s;
  const r = 2 ** e - 1;
  if (i === r) {
    return u + 1;
  }var c = ~(n | t | i);
  while (c & r) {
    const o = c & -c;
    c -= o;u += nQueensBitwiseRecursive(e, (n | o) >> 1, i | o, (t | o) << 1, s);
  }return u;
}export default function nQueensBitwise(e) {
  return nQueensBitwiseRecursive(e);
}
