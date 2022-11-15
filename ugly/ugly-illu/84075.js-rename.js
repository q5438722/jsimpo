const isArray = Array.isArray;
const str = Object.prototype.toString;
module.exports = isArray || function (r) {
  return !!r && "[object Array]" == str.call(r);
};
