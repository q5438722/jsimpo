var convert = require(_0x3aa3df(380)), combine = require('..'), foo = {
        'version': 3,
        'file': _0x3aa3df(381),
        'sourceRoot': '',
        'sources': [_0x3aa3df(382)],
        'names': [],
        'mappings': _0x3aa3df(383),
        'sourcesContent': [_0x3aa3df(384)]
    }, bar = {
        'version': 3,
        'file': 'bar.js',
        'sourceRoot': '',
        'sources': [_0x3aa3df(385)],
        'names': [],
        'mappings': _0x3aa3df(383),
        'sourcesContent': [_0x3aa3df(386)]
    }, fooComment = convert[_0x3aa3df(387)](foo)[_0x3aa3df(388)](), barComment = convert[_0x3aa3df(387)](bar)[_0x3aa3df(388)](), fooFile = {
        'source': _0x3aa3df(389) + '\n' + fooComment,
        'sourceFile': _0x3aa3df(381)
    }, barFile = {
        'source': '(function() {\n\n  console.log(alert(\'alerts suck\'));\n\n}).call(this);\n' + '\n' + barComment,
        'sourceFile': 'bar.js'
    }, offset = { 'line': 2 }, base64 = combine[_0x3aa3df(390)](_0x3aa3df(391))['addFile'](fooFile, offset)[_0x3aa3df(392)](barFile, { 'line': offset[_0x3aa3df(393)] + 8 })[_0x3aa3df(394)](), sm = convert[_0x3aa3df(395)](base64)['toObject']();
console[_0x3aa3df(396)]('Combined source maps:\n', sm), console[_0x3aa3df(396)](_0x3aa3df(397), sm[_0x3aa3df(398)]);