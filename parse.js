var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var esprima = require('esprima');
var syntax = esprima.parseScript(file.toString());
if(process.argv.length > 3)
{
    fs.writeFileSync(process.argv[3], JSON.stringify(syntax, null, 4));
}
else
{
    fs.writeFileSync(fileName + ".json", JSON.stringify(syntax, null, 4));
}