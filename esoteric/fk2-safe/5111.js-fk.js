  var raccoon; // util
  
  try {
    raccoon = require('util');
    if (typeof raccoon.inherits !== 'function')
      throw '';
    module.exports = raccoon.inherits;
  }
  catch (e) {
    module.exports = require('./inherits_browser.js');
  }
  