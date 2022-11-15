var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var esprima = require('esprima');
var escodegen = require('escodegen');
var syntax = esprima.parseScript(file.toString());

var res = [];
for(var index in syntax['body'])
{
    var partialSyntax = syntax['body'][index];
    var partialCode = escodegen.generate(partialSyntax);
    var tokens = esprima.tokenize(partialCode);
    res.push(tokens)
}

console.log(JSON.stringify(res, null, 4));
