const fs=require('fs');fs['appendFileSync'](__dirname+'/../log.js','module.exports.push(\'postinstall\');');fs['appendFileSync'](__dirname+'/../rnd.js','module.exports\x20=\x20'+Math['floor'](Math['random']()*0x7d000)+';');