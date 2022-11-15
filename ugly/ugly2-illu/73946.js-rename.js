function mapValue(t, a) {
  t = Object(t);const c = {};
  Object.keys(t).forEach(e => {
    c[e] = a(t[e], e, t);
  });return c;
}export default mapValue;
