'use strict';
const {isCI} = require('ci-info'), runPrettier = require('../runPrettier.js');
describe('format\x20correctly\x20if\x20stdin\x20content\x20compatible\x20with\x20stdin-filepath', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'abc.css'
    ], { 'input': '.name\x20{\x20display:\x20none;\x20}' })['test']({ 'status': 0x0 });
}), describe('throw\x20error\x20if\x20stdin\x20content\x20incompatible\x20with\x20stdin-filepath', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'abc.js'
    ], { 'input': '.name\x20{\x20display:\x20none;\x20}' })['test']({ 'status': 'non-zero' });
}), describe('gracefully\x20handle\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'definitely/nonexistent/path.css'
    ], { 'input': '.name\x20{\x20display:\x20none;\x20}' })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20file', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'config/editorconfig/nonexistent.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'config/editorconfig/nonexistent/one/two/three.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'['repeat'](-0x47 * -0x2b + -0x1 * -0x1f33 + -0x89a * 0x5) + 'three.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
});
isCI && describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20in\x20root', () => {
    const _0x336d1e = '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']();
    runPrettier('cli', [
        '--stdin-filepath',
        '/foo.js'
    ], { 'input': _0x336d1e })['test']({
        'status': 0x0,
        'stdout': _0x336d1e + '\x0a',
        'stderr': '',
        'write': []
    });
});
describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'['repeat'](-0x26f3 + -0x1e89 + 0x459a) + 'three.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('don’t\x20apply\x20editorconfig\x20outside\x20project\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    runPrettier('cli', [
        '--stdin-filepath',
        'config/editorconfig/repo-root/nonexistent/one/two/three.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x202\x20spaces\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('output\x20file\x20as-is\x20if\x20stdin-filepath\x20matched\x20patterns\x20in\x20ignore-path', () => {
    runPrettier('cli/stdin-ignore', [
        '--stdin-filepath',
        'ignore/example.js'
    ], { 'input': 'hello_world(\x20);' })['test']({
        'stdout': 'hello_world(\x20);',
        'status': 0x0
    });
});
