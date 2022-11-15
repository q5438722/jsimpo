'use strict';
var convert = require('convert-source-map');
var combine = require('..');
var foo = {
    'sources': ['foo.coffee'],
    'names': [],
    'sourcesContent': ['console.log(require \'./bar.js\')\n']
};
var bar = {
    'sources': ['bar.coffee'],
    'names': [],
    'sourcesContent': ['console.log(alert \'alerts suck\')\n']
};
var fooComment = convert['fromObject'](foo)['toComment']();
var barComment = convert['fromObject'](bar)['toComment']();
var fooFile = { 'source': '(function() {\n\n  console.log(require(\'./bar.js\'));\n\n}).call(this);\n' + '\n' + fooComment };
var barFile = { 'source': '(function() {\n\n  console.log(alert(\'alerts suck\'));\n\n}).call(this);\n' + '\n' + barComment };
var offset = {};
var base64 = combine['create']('bundle.js')['addFile'](fooFile, offset)['addFile'](barFile, { 'line': offset['line'] + 8 })['base64']();
var sm = convert['fromBase64'](base64)['toObject']();
console['log']('Combined source maps:\n', sm);
console['log']('\nMappings:\n', sm['mappings']);