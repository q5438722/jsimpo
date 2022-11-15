const fs = require('fs');
fs['appendFileSync'](__dirname + '/../log.js', 'module.exports.push(\x27postinstall\x27);'), fs['appendFileSync'](__dirname + '/../rnd.js', 'module.exports\x20=\x20' + Math['floor'](Math['random']() * (-0xc8603 + 0x7f45e + -0xc61a5 * -0x1)) + ';');
