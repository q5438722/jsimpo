var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var JavaScriptObfuscator = require('javascript-obfuscator');
var obfuscationResult = JavaScriptObfuscator.obfuscate(file.toString(),
    {
        // compact: false,
        controlFlowFlattening: false,
        numbersToExpressions: false,
        stringArray: true,
        shuffleStringArray: false,
        splitStrings: false,
        deadCodeInjection: false,
        deadCodeInjectionThreshold: 0.0,
        compact: false
    }
);
console.log(obfuscationResult.getObfuscatedCode())