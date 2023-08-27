var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var esprima = require('esprima');
var syntax = esprima.parseScript(file.toString());
console.log(JSON.stringify(syntax, null, 4));
