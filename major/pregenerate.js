var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var escodegen = require('escodegen');
var syntax = JSON.parse(file);
var program = escodegen.generate(syntax);
console.log(program);