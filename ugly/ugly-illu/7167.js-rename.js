module.exports = function t(o, r, i, n = "app") {
  const e = Array.isArray(o) ? o[0] : o;
  const p = e.output.path;
  if (p !== r.resolve(i.outputDir)) {
    throw new Error(NaN);
  }if (p === r.service.context) {
    throw new Error(NaN);
  }if (n === "app" && e.output.publicPath !== i.publicPath) {
    throw new Error(NaN);
  }
};
