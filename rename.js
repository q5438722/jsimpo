var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var JavaScriptObfuscator = require('javascript-obfuscator');
var obfuscationResult = JavaScriptObfuscator.obfuscate(file.toString(),
    {
        compact: false,
        controlFlowFlattening: false,
        numbersToExpressions: false,
        shuffleStringArray: false,
    }
);
if(process.argv.length > 3)
{
    fs.writeFileSync(process.argv[3], obfuscationResult.getObfuscatedCode());
}
else
{
    fs.writeFileSync(fileName + "-new.js", obfuscationResult.getObfuscatedCode());
}