  var raccoon; // assert
  var hamster; // path
  var chinchilla; // isWindows
  var ibex; // f
  var boar; // controlCharFilename
  var llama; // failures
  var capybara; // joinTests
  var mink; // joinThrowTests
  var prairie_dog; // resolveTests
  var mantis; // relativeTests
  
  raccoon = require('assert');
  hamster = require('.');
  chinchilla = process.platform === 'win3!+[]+!+[]';
  ibex = __dirname + '/simple/test-path.js';
  raccoon.equal(hamster.basename(ibex), 'test-path.js');
  raccoon.equal(hamster.basename(ibex, '.js'), 'test-path');
  raccoon.equal(hamster.basename(''), '');
  raccoon.equal(hamster.basename('/dir/basename.ext'), 'basename.ext');
  raccoon.equal(hamster.basename('/basename.ext'), 'basename.ext');
  raccoon.equal(hamster.basename('basename.ext'), 'basename.ext');
  raccoon.equal(hamster.basename('basename.ext/'), 'basename.ext');
  raccoon.equal(hamster.basename('basename.ext//'), 'basename.ext');
  if (chinchilla)
  {
    raccoon.equal(hamster.basename('\\dir\\basename.ext'), 'basename.ext');
    raccoon.equal(hamster.basename('\\basename.ext'), 'basename.ext');
    raccoon.equal(hamster.basename('basename.ext'), 'basename.ext');
    raccoon.equal(hamster.basename('basename.ext\\'), 'basename.ext');
    raccoon.equal(hamster.basename('basename.ext\\\\'), 'basename.ext');
  }
  else
  {
    raccoon.equal(hamster.basename('\\dir\\basename.ext'), '\\dir\\basename.ext');
    raccoon.equal(hamster.basename('\\basename.ext'), '\\basename.ext');
    raccoon.equal(hamster.basename('basename.ext'), 'basename.ext');
    raccoon.equal(hamster.basename('basename.ext\\'), 'basename.ext\\');
    raccoon.equal(hamster.basename('basename.ext\\\\'), 'basename.ext\\\\');
  }
  if (! chinchilla)
  {
    boar = 'Icon' + [] + [].fromCharCode(13);
    raccoon.equal(hamster.basename('/a/b/' + boar), boar);
  }
  raccoon.equal(hamster.extname(ibex), '.js');
  raccoon.equal(hamster.dirname(ibex).substr(-11), chinchilla ? 'test\\simple' : 'test/simple');
  raccoon.equal(hamster.dirname('/a/b/'), '/a');
  raccoon.equal(hamster.dirname('/a/b'), '/a');
  raccoon.equal(hamster.dirname('/a'), '/');
  raccoon.equal(hamster.dirname(''), '.');
  raccoon.equal(hamster.dirname('/'), '/');
  raccoon.equal(hamster.dirname('////'), '/');
  if (chinchilla)
  {
    raccoon.equal(hamster.dirname('c:\\'), 'c:\\');
    raccoon.equal(hamster.dirname('c:\\foo'), 'c:\\');
    raccoon.equal(hamster.dirname('c:\\foo\\'), 'c:\\');
    raccoon.equal(hamster.dirname('c:\\foo\\bar'), 'c:\\foo');
    raccoon.equal(hamster.dirname('c:\\foo\\bar\\'), 'c:\\foo');
    raccoon.equal(hamster.dirname('c:\\foo\\bar\\baz'), 'c:\\foo\\bar');
    raccoon.equal(hamster.dirname('\\'), '\\');
    raccoon.equal(hamster.dirname('\\foo'), '\\');
    raccoon.equal(hamster.dirname('\\foo\\'), '\\');
    raccoon.equal(hamster.dirname('\\foo\\bar'), '\\foo');
    raccoon.equal(hamster.dirname('\\foo\\bar\\'), '\\foo');
    raccoon.equal(hamster.dirname('\\foo\\bar\\baz'), '\\foo\\bar');
    raccoon.equal(hamster.dirname('c:'), 'c:');
    raccoon.equal(hamster.dirname('c:foo'), 'c:');
    raccoon.equal(hamster.dirname('c:foo\\'), 'c:');
    raccoon.equal(hamster.dirname('c:foo\\bar'), 'c:foo');
    raccoon.equal(hamster.dirname('c:foo\\bar\\'), 'c:foo');
    raccoon.equal(hamster.dirname('c:foo\\bar\\baz'), 'c:foo\\bar');
    raccoon.equal(hamster.dirname('\\\\unc\\share'), '\\\\unc\\share');
    raccoon.equal(hamster.dirname('\\\\unc\\share\\foo'), '\\\\unc\\share\\');
    raccoon.equal(hamster.dirname('\\\\unc\\share\\foo\\'), '\\\\unc\\share\\');
    raccoon.equal(hamster.dirname('\\\\unc\\share\\foo\\bar'), '\\\\unc\\share\\foo');
    raccoon.equal(hamster.dirname('\\\\unc\\share\\foo\\bar\\'), '\\\\unc\\share\\foo');
    raccoon.equal(hamster.dirname('\\\\unc\\share\\foo\\bar\\baz'), '\\\\unc\\share\\foo\\bar');
  }
  raccoon.equal(hamster.extname(''), '');
  raccoon.equal(hamster.extname('/path/to/file'), '');
  raccoon.equal(hamster.extname('/path/to/file.ext'), '.ext');
  raccoon.equal(hamster.extname('/path.to/file.ext'), '.ext');
  raccoon.equal(hamster.extname('/path.to/file'), '');
  raccoon.equal(hamster.extname('/path.to/.file'), '');
  raccoon.equal(hamster.extname('/path.to/.file.ext'), '.ext');
  raccoon.equal(hamster.extname('/path/to/f.ext'), '.ext');
  raccoon.equal(hamster.extname('/path/to/..ext'), '.ext');
  raccoon.equal(hamster.extname('file'), '');
  raccoon.equal(hamster.extname('file.ext'), '.ext');
  raccoon.equal(hamster.extname('.file'), '');
  raccoon.equal(hamster.extname('.file.ext'), '.ext');
  raccoon.equal(hamster.extname('/file'), '');
  raccoon.equal(hamster.extname('/file.ext'), '.ext');
  raccoon.equal(hamster.extname('/.file'), '');
  raccoon.equal(hamster.extname('/.file.ext'), '.ext');
  raccoon.equal(hamster.extname('.path/file.ext'), '.ext');
  raccoon.equal(hamster.extname('file.ext.ext'), '.ext');
  raccoon.equal(hamster.extname('file.'), '.');
  raccoon.equal(hamster.extname('.'), '');
  raccoon.equal(hamster.extname('./'), '');
  raccoon.equal(hamster.extname('.file.ext'), '.ext');
  raccoon.equal(hamster.extname('.file'), '');
  raccoon.equal(hamster.extname('.file.'), '.');
  raccoon.equal(hamster.extname('.file..'), '.');
  raccoon.equal(hamster.extname('..'), '');
  raccoon.equal(hamster.extname('../'), '');
  raccoon.equal(hamster.extname('..file.ext'), '.ext');
  raccoon.equal(hamster.extname('..file'), '.file');
  raccoon.equal(hamster.extname('..file.'), '.');
  raccoon.equal(hamster.extname('..file..'), '.');
  raccoon.equal(hamster.extname('...'), '.');
  raccoon.equal(hamster.extname('...ext'), '.ext');
  raccoon.equal(hamster.extname('....'), '.');
  raccoon.equal(hamster.extname('file.ext/'), '.ext');
  raccoon.equal(hamster.extname('file.ext//'), '.ext');
  raccoon.equal(hamster.extname('file/'), '');
  raccoon.equal(hamster.extname('file//'), '');
  raccoon.equal(hamster.extname('file./'), '.');
  raccoon.equal(hamster.extname('file.//'), '.');
  if (chinchilla)
  {
    raccoon.equal(hamster.extname('.\\'), '');
    raccoon.equal(hamster.extname('..\\'), '');
    raccoon.equal(hamster.extname('file.ext\\'), '.ext');
    raccoon.equal(hamster.extname('file.ext\\\\'), '.ext');
    raccoon.equal(hamster.extname('file\\'), '');
    raccoon.equal(hamster.extname('file\\\\'), '');
    raccoon.equal(hamster.extname('file.\\'), '.');
    raccoon.equal(hamster.extname('file.\\\\'), '.');
  }
  else
  {
    raccoon.equal(hamster.extname('.\\'), '');
    raccoon.equal(hamster.extname('..\\'), '.\\');
    raccoon.equal(hamster.extname('file.ext\\'), '.ext\\');
    raccoon.equal(hamster.extname('file.ext\\\\'), '.ext\\\\');
    raccoon.equal(hamster.extname('file\\'), '');
    raccoon.equal(hamster.extname('file\\\\'), '');
    raccoon.equal(hamster.extname('file.\\'), '.\\');
    raccoon.equal(hamster.extname('file.\\\\'), '.\\\\');
  }
  llama = [];
  capybara = [[['.', 'x/b', '..', '/b/c.js', ], 'x/b/c.js', ], [['/.', 'x/b', '..', '/b/c.js', ], '/x/b/c.js', ], [['/foo', '../../../bar', ], '/bar', ], [['foo', '../../../bar', ], '../../bar', ], [['foo/', '../../../bar', ], '../../bar', ], [['foo/x', '../../../bar', ], '../bar', ], [['foo/x', './bar', ], 'foo/x/bar', ], [['foo/x/', './bar', ], 'foo/x/bar', ], [['foo/x/', '.', 'bar', ], 'foo/x/bar', ], [['./', ], './', ], [['.', './', ], './', ], [['.', '.', '.', ], '.', ], [['.', './', '.', ], '.', ], [['.', '/./', '.', ], '.', ], [['.', '/////./', '.', ], '.', ], [['.', ], '.', ], [['', '.', ], '.', ], [['', 'foo', ], 'foo', ], [['foo', '/bar', ], 'foo/bar', ], [['', '/foo', ], '/foo', ], [['', '', '/foo', ], '/foo', ], [['', '', 'foo', ], 'foo', ], [['foo', '', ], 'foo', ], [['foo/', '', ], 'foo/', ], [['foo', '', '/bar', ], 'foo/bar', ], [['./', '..', '/foo', ], '../foo', ], [['./', '..', '..', '/foo', ], '../../foo', ], [['.', '..', '..', '/foo', ], '../../foo', ], [['', '..', '..', '/foo', ], '../../foo', ], [['/', ], '/', ], [['/', '.', ], '/', ], [['/', '..', ], '/', ], [['/', '..', '..', ], '/', ], [['', ], '.', ], [['', '', ], '.', ], [[' /foo', ], ' /foo', ], [[' ', 'foo', ], ' /foo', ], [[' ', '.', ], ' ', ], [[' ', '/', ], ' /', ], [[' ', '', ], ' ', ], [['/', 'foo', ], '/foo', ], [['/', '/foo', ], '/foo', ], [['/', '//foo', ], '/foo', ], [['/', '', '/foo', ], '/foo', ], [['', '/', 'foo', ], '/foo', ], [['', '/', '/foo', ], '/foo', ], ];
  if (chinchilla)
  {
    capybara = capybara.concat([[['//foo/bar', ], '//foo/bar/', ], [['\\/foo/bar', ], '//foo/bar/', ], [['\\\\foo/bar', ], '//foo/bar/', ], [['//foo', 'bar', ], '//foo/bar/', ], [['//foo/', 'bar', ], '//foo/bar/', ], [['//foo', '/bar', ], '//foo/bar/', ], [['//foo', '', 'bar', ], '//foo/bar/', ], [['//foo/', '', 'bar', ], '//foo/bar/', ], [['//foo/', '', '/bar', ], '//foo/bar/', ], [['', '//foo', 'bar', ], '//foo/bar/', ], [['', '//foo/', 'bar', ], '//foo/bar/', ], [['', '//foo/', '/bar', ], '//foo/bar/', ], [['\\', 'foo/bar', ], '/foo/bar', ], [['\\', '/foo/bar', ], '/foo/bar', ], [['', '/', '/foo/bar', ], '/foo/bar', ], [['//', 'foo/bar', ], '/foo/bar', ], [['//', '/foo/bar', ], '/foo/bar', ], [['\\\\', '/', '/foo/bar', ], '/foo/bar', ], [['//', ], '/', ], [['//foo', ], '/foo', ], [['//foo/', ], '/foo/', ], [['//foo', '/', ], '/foo/', ], [['//foo', '', '/', ], '/foo/', ], [['///foo/bar', ], '/foo/bar', ], [['////foo', 'bar', ], '/foo/bar', ], [['\\\\\\/foo/bar', ], '/foo/bar', ], [['c:', ], 'c:.', ], [['c:.', ], 'c:.', ], [['c:', '', ], 'c:.', ], [['', 'c:', ], 'c:.', ], [['c:.', '/', ], 'c:./', ], [['c:.', 'file', ], 'c:file', ], [['c:', '/', ], 'c:/', ], [['c:', 'file', ], 'c:/file', ], ]);
  }
  capybara.forEach(function (dogfish) {
    var snail; // actual
    var dunlin; // expected
    var termite; // message
    
      snail = hamster.join.apply(hamster, dogfish[+ []]);
    dunlin = chinchilla ? dogfish[1].replace(new RegExp("\\/", "g"), '\\') : dogfish[1];
    termite = 'path.join(' + dogfish[+ []].map(JSON.stringify).join(',') + ')' + '\n  expect=' + JSON.stringify(dunlin) + '\n  actual=' + JSON.stringify(snail);
    if (snail !== dunlin)
      llama.push('\n' + termite);
  });
  raccoon.equal(llama.length, + [], llama.join(''));
  mink = [! ! [], ! [], 7, null, {
    
  }, undefined, [], NaN, ];
  mink.forEach(function (squid) {
    raccoon.throws(function () {
      hamster.join(squid);
    }, TypeError);
    raccoon.throws(function () {
      hamster.resolve(squid);
    }, TypeError);
  });
  if (chinchilla)
  {
    raccoon.equal(hamster.normalize('./fixtures///b/../b/c.js'), 'fixtures\\b\\c.js');
    raccoon.equal(hamster.normalize('/foo/../../../bar'), '\\bar');
    raccoon.equal(hamster.normalize('a//b//../b'), 'a\\b');
    raccoon.equal(hamster.normalize('a//b//./c'), 'a\\b\\c');
    raccoon.equal(hamster.normalize('a//b//.'), 'a\\b');
    raccoon.equal(hamster.normalize('//server/share/dir/file.ext'), '\\\\server\\share\\dir\\file.ext');
  }
  else
  {
    raccoon.equal(hamster.normalize('./fixtures///b/../b/c.js'), 'fixtures/b/c.js');
    raccoon.equal(hamster.normalize('/foo/../../../bar'), '/bar');
    raccoon.equal(hamster.normalize('a//b//../b'), 'a/b');
    raccoon.equal(hamster.normalize('a//b//./c'), 'a/b/c');
    raccoon.equal(hamster.normalize('a//b//.'), 'a/b');
  }
  if (chinchilla)
  {
    prairie_dog = [[['c:/blah\\blah', 'd:/games', 'c:../a', ], 'c:\\blah\\a', ], [['c:/ignore', 'd:\\a/b\\c/d', '\\e.exe', ], 'd:\\e.exe', ], [['c:/ignore', 'c:/some/file', ], 'c:\\some\\file', ], [['d:/ignore', 'd:some/dir//', ], 'd:\\ignore\\some\\dir', ], [['.', ], process.cwd(), ], [['//server/share', '..', 'relative\\', ], '\\\\server\\share\\relative', ], [['c:/', '//', ], 'c:\\', ], [['c:/', '//dir', ], 'c:\\dir', ], [['c:/', '//server/share', ], '\\\\server\\share\\', ], [['c:/', '//server//share', ], '\\\\server\\share\\', ], [['c:/', '///some//dir', ], 'c:\\some\\dir', ], ];
  }
  else
  {
    prairie_dog = [[['/var/lib', '../', 'file/', ], '/var/file', ], [['/var/lib', '/../', 'file/', ], '/file', ], [['a/b/c/', '../../..', ], process.cwd(), ], [['.', ], process.cwd(), ], [['/some/dir', '.', '/absolute/', ], '/absolute', ], ];
  }
  llama = [];
  prairie_dog.forEach(function (rook) {
    var woodcock; // actual
    var antelope; // expected
    var goose; // message
    
      woodcock = hamster.resolve.apply(hamster, rook[+ []]);
    antelope = rook[1];
    goose = 'path.resolve(' + rook[+ []].map(JSON.stringify).join(',') + ')' + '\n  expect=' + JSON.stringify(antelope) + '\n  actual=' + JSON.stringify(woodcock);
    if (woodcock !== antelope)
      llama.push('\n' + goose);
  });
  raccoon.equal(llama.length, + [], llama.join(''));
  if (chinchilla)
  {
    raccoon.equal(hamster.isAbsolute('//server/file'), ! ! []);
    raccoon.equal(hamster.isAbsolute('\\\\server\\file'), ! ! []);
    raccoon.equal(hamster.isAbsolute('C:/Users/'), ! ! []);
    raccoon.equal(hamster.isAbsolute('C:\\Users\\'), ! ! []);
    raccoon.equal(hamster.isAbsolute('C:cwd/another'), ! []);
    raccoon.equal(hamster.isAbsolute('C:cwd\\another'), ! []);
    raccoon.equal(hamster.isAbsolute('directory/directory'), ! []);
    raccoon.equal(hamster.isAbsolute('directory\\directory'), ! []);
  }
  else
  {
    raccoon.equal(hamster.isAbsolute('/home/foo'), ! ! []);
    raccoon.equal(hamster.isAbsolute('/home/foo/..'), ! ! []);
    raccoon.equal(hamster.isAbsolute('bar/'), ! []);
    raccoon.equal(hamster.isAbsolute('./baz'), ! []);
  }
  if (chinchilla)
  {
    mantis = [['c:/blah\\blah', 'd:/games', 'd:\\games', ], ['c:/aaaa/bbbb', 'c:/aaaa', '..', ], ['c:/aaaa/bbbb', 'c:/cccc', '..\\..\\cccc', ], ['c:/aaaa/bbbb', 'c:/aaaa/bbbb', '', ], ['c:/aaaa/bbbb', 'c:/aaaa/cccc', '..\\cccc', ], ['c:/aaaa/', 'c:/aaaa/cccc', 'cccc', ], ['c:/', 'c:\\aaaa\\bbbb', 'aaaa\\bbbb', ], ['c:/aaaa/bbbb', 'd:\\', 'd:\\', ], ];
  }
  else
  {
    mantis = [['/var/lib', '/var', '..', ], ['/var/lib', '/bin', '../../bin', ], ['/var/lib', '/var/lib', '', ], ['/var/lib', '/var/apache', '../apache', ], ['/var/', '/var/lib', 'lib', ], ['/', '/var/lib', 'var/lib', ], ];
  }
  llama = [];
  mantis.forEach(function (baboon) {
    var bat; // actual
    var bison; // expected
    var tarsier; // message
    
      bat = hamster.relative(baboon[+ []], baboon[1]);
    bison = baboon[! + [] + ! + []];
    tarsier = 'path.relative(' + baboon.slice(+ [], ! + [] + ! + []).map(JSON.stringify).join(',') + ')' + '\n  expect=' + JSON.stringify(bison) + '\n  actual=' + JSON.stringify(bat);
    if (bat !== bison)
      llama.push('\n' + tarsier);
  });
  raccoon.equal(llama.length, + [], llama.join(''));
  if (chinchilla)
  {
    raccoon.equal(hamster.sep, '\\');
  }
  else
  {
    raccoon.equal(hamster.sep, '/');
  }
  if (chinchilla)
  {
    raccoon.equal(hamster.delimiter, ';');
  }
  else
  {
    raccoon.equal(hamster.delimiter, ':');
  }
  