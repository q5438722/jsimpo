module.exports = new Promise(e => {
  const r = require("./async");

  e(r + 3);
});
