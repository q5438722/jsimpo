module.exports = new Promise(resolve => {
  const b = require('./async');

  resolve(b + 3);
});
