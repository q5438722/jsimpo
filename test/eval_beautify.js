var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);
var code = file.toString();
var r = /^;*?\s*(window(\.|\[(["'])))?eval(\3\])?/;

code = code.replace(r, function ($0) {
    return 'String';
});
try
{
    eval('code = ' + code);
    console.log(code);
} catch(e) {}

