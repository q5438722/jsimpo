  var raccoon; // assert
  var hamster; // path
  var chinchilla; // isWindows
  var ibex; // f
  var boar; // failures
  var llama; // joinTests
  var capybara; // joinThrowTests
  var mink; // resolveTests
  var prairie_dog; // relativeTests
  
  raccoon = require("assert");
  hamster = require(".");
  chinchilla = process.platform === "win32";
  ibex = __dirname + "/simple/test-path.js";
  raccoon.equal(hamster.basename(ibex), "test-path.js");
  raccoon.equal(hamster.basename(ibex, ".js"), "test-path");
  raccoon.equal(hamster.basename(""), "");
  raccoon.equal(hamster.basename("/dir/basename.ext"), "basename.ext");
  raccoon.equal(hamster.basename("/basename.ext"), "basename.ext");
  raccoon.equal(hamster.basename("basename.ext"), "basename.ext");
  raccoon.equal(hamster.basename("basename.ext/"), "basename.ext");
  raccoon.equal(hamster.basename("basename.ext//"), "basename.ext");
  if (chinchilla)
  {
    raccoon.equal(hamster.basename("\\dir\\basename.ext"), "basename.ext");
    raccoon.equal(hamster.basename("\\basename.ext"), "basename.ext");
    raccoon.equal(hamster.basename("basename.ext"), "basename.ext");
    raccoon.equal(hamster.basename("basename.ext\\"), "basename.ext");
    raccoon.equal(hamster.basename("basename.ext\\\\"), "basename.ext");
  }
  else
  {
    raccoon.equal(hamster.basename("\\dir\\basename.ext"), "\\dir\\basename.ext");
    raccoon.equal(hamster.basename("\\basename.ext"), "\\basename.ext");
    raccoon.equal(hamster.basename("basename.ext"), "basename.ext");
    raccoon.equal(hamster.basename("basename.ext\\"), "basename.ext\\");
    raccoon.equal(hamster.basename("basename.ext\\\\"), "basename.ext\\\\");
  }
  if (! chinchilla)
  {
    raccoon.equal(hamster.basename('/a/b/Icon\r'), 'Icon\r');
  }
  raccoon.equal(hamster.extname(ibex), ".js");
  raccoon.equal(hamster.dirname(ibex).substr(-11), chinchilla ? "test\\simple" : "test/simple");
  raccoon.equal(hamster.dirname("/a/b/"), "/a");
  raccoon.equal(hamster.dirname("/a/b"), "/a");
  raccoon.equal(hamster.dirname("/a"), "/");
  raccoon.equal(hamster.dirname(""), ".");
  raccoon.equal(hamster.dirname("/"), "/");
  raccoon.equal(hamster.dirname("////"), "/");
  if (chinchilla)
  {
    raccoon.equal(hamster.dirname("c:\\"), "c:\\");
    raccoon.equal(hamster.dirname("c:\\foo"), "c:\\");
    raccoon.equal(hamster.dirname("c:\\foo\\"), "c:\\");
    raccoon.equal(hamster.dirname("c:\\foo\\bar"), "c:\\foo");
    raccoon.equal(hamster.dirname("c:\\foo\\bar\\"), "c:\\foo");
    raccoon.equal(hamster.dirname("c:\\foo\\bar\\baz"), "c:\\foo\\bar");
    raccoon.equal(hamster.dirname("\\"), "\\");
    raccoon.equal(hamster.dirname("\\foo"), "\\");
    raccoon.equal(hamster.dirname("\\foo\\"), "\\");
    raccoon.equal(hamster.dirname("\\foo\\bar"), "\\foo");
    raccoon.equal(hamster.dirname("\\foo\\bar\\"), "\\foo");
    raccoon.equal(hamster.dirname("\\foo\\bar\\baz"), "\\foo\\bar");
    raccoon.equal(hamster.dirname("c:"), "c:");
    raccoon.equal(hamster.dirname("c:foo"), "c:");
    raccoon.equal(hamster.dirname("c:foo\\"), "c:");
    raccoon.equal(hamster.dirname("c:foo\\bar"), "c:foo");
    raccoon.equal(hamster.dirname("c:foo\\bar\\"), "c:foo");
    raccoon.equal(hamster.dirname("c:foo\\bar\\baz"), "c:foo\\bar");
    raccoon.equal(hamster.dirname("\\\\unc\\share"), "\\\\unc\\share");
    raccoon.equal(hamster.dirname("\\\\unc\\share\\foo"), "\\\\unc\\share\\");
    raccoon.equal(hamster.dirname("\\\\unc\\share\\foo\\"), "\\\\unc\\share\\");
    raccoon.equal(hamster.dirname("\\\\unc\\share\\foo\\bar"), "\\\\unc\\share\\foo");
    raccoon.equal(hamster.dirname("\\\\unc\\share\\foo\\bar\\"), "\\\\unc\\share\\foo");
    raccoon.equal(hamster.dirname("\\\\unc\\share\\foo\\bar\\baz"), "\\\\unc\\share\\foo\\bar");
  }
  raccoon.equal(hamster.extname(""), "");
  raccoon.equal(hamster.extname("/path/to/file"), "");
  raccoon.equal(hamster.extname("/path/to/file.ext"), ".ext");
  raccoon.equal(hamster.extname("/path.to/file.ext"), ".ext");
  raccoon.equal(hamster.extname("/path.to/file"), "");
  raccoon.equal(hamster.extname("/path.to/.file"), "");
  raccoon.equal(hamster.extname("/path.to/.file.ext"), ".ext");
  raccoon.equal(hamster.extname("/path/to/f.ext"), ".ext");
  raccoon.equal(hamster.extname("/path/to/..ext"), ".ext");
  raccoon.equal(hamster.extname("file"), "");
  raccoon.equal(hamster.extname("file.ext"), ".ext");
  raccoon.equal(hamster.extname(".file"), "");
  raccoon.equal(hamster.extname(".file.ext"), ".ext");
  raccoon.equal(hamster.extname("/file"), "");
  raccoon.equal(hamster.extname("/file.ext"), ".ext");
  raccoon.equal(hamster.extname("/.file"), "");
  raccoon.equal(hamster.extname("/.file.ext"), ".ext");
  raccoon.equal(hamster.extname(".path/file.ext"), ".ext");
  raccoon.equal(hamster.extname("file.ext.ext"), ".ext");
  raccoon.equal(hamster.extname("file."), ".");
  raccoon.equal(hamster.extname("."), "");
  raccoon.equal(hamster.extname("./"), "");
  raccoon.equal(hamster.extname(".file.ext"), ".ext");
  raccoon.equal(hamster.extname(".file"), "");
  raccoon.equal(hamster.extname(".file."), ".");
  raccoon.equal(hamster.extname(".file.."), ".");
  raccoon.equal(hamster.extname(".."), "");
  raccoon.equal(hamster.extname("../"), "");
  raccoon.equal(hamster.extname("..file.ext"), ".ext");
  raccoon.equal(hamster.extname("..file"), ".file");
  raccoon.equal(hamster.extname("..file."), ".");
  raccoon.equal(hamster.extname("..file.."), ".");
  raccoon.equal(hamster.extname("..."), ".");
  raccoon.equal(hamster.extname("...ext"), ".ext");
  raccoon.equal(hamster.extname("...."), ".");
  raccoon.equal(hamster.extname("file.ext/"), ".ext");
  raccoon.equal(hamster.extname("file.ext//"), ".ext");
  raccoon.equal(hamster.extname("file/"), "");
  raccoon.equal(hamster.extname("file//"), "");
  raccoon.equal(hamster.extname("file./"), ".");
  raccoon.equal(hamster.extname("file.//"), ".");
  if (chinchilla)
  {
    raccoon.equal(hamster.extname(".\\"), "");
    raccoon.equal(hamster.extname("..\\"), "");
    raccoon.equal(hamster.extname("file.ext\\"), ".ext");
    raccoon.equal(hamster.extname("file.ext\\\\"), ".ext");
    raccoon.equal(hamster.extname("file\\"), "");
    raccoon.equal(hamster.extname("file\\\\"), "");
    raccoon.equal(hamster.extname("file.\\"), ".");
    raccoon.equal(hamster.extname("file.\\\\"), ".");
  }
  else
  {
    raccoon.equal(hamster.extname(".\\"), "");
    raccoon.equal(hamster.extname("..\\"), ".\\");
    raccoon.equal(hamster.extname("file.ext\\"), ".ext\\");
    raccoon.equal(hamster.extname("file.ext\\\\"), ".ext\\\\");
    raccoon.equal(hamster.extname("file\\"), "");
    raccoon.equal(hamster.extname("file\\\\"), "");
    raccoon.equal(hamster.extname("file.\\"), ".\\");
    raccoon.equal(hamster.extname("file.\\\\"), ".\\\\");
  }
  boar = [];
  llama = [[[".", "x/b", "..", "/b/c.js", ], "x/b/c.js", ], [["/.", "x/b", "..", "/b/c.js", ], "/x/b/c.js", ], [["/foo", "../../../bar", ], "/bar", ], [["foo", "../../../bar", ], "../../bar", ], [["foo/", "../../../bar", ], "../../bar", ], [["foo/x", "../../../bar", ], "../bar", ], [["foo/x", "./bar", ], "foo/x/bar", ], [["foo/x/", "./bar", ], "foo/x/bar", ], [["foo/x/", ".", "bar", ], "foo/x/bar", ], [["./", ], "./", ], [[".", "./", ], "./", ], [[".", ".", ".", ], ".", ], [[".", "./", ".", ], ".", ], [[".", "/./", ".", ], ".", ], [[".", "/////./", ".", ], ".", ], [[".", ], ".", ], [["", ".", ], ".", ], [["", "foo", ], "foo", ], [["foo", "/bar", ], "foo/bar", ], [["", "/foo", ], "/foo", ], [["", "", "/foo", ], "/foo", ], [["", "", "foo", ], "foo", ], [["foo", "", ], "foo", ], [["foo/", "", ], "foo/", ], [["foo", "", "/bar", ], "foo/bar", ], [["./", "..", "/foo", ], "../foo", ], [["./", "..", "..", "/foo", ], "../../foo", ], [[".", "..", "..", "/foo", ], "../../foo", ], [["", "..", "..", "/foo", ], "../../foo", ], [["/", ], "/", ], [["/", ".", ], "/", ], [["/", "..", ], "/", ], [["/", "..", "..", ], "/", ], [["", ], ".", ], [["", "", ], ".", ], [[" /foo", ], " /foo", ], [[" ", "foo", ], " /foo", ], [[" ", ".", ], " ", ], [[" ", "/", ], " /", ], [[" ", "", ], " ", ], [["/", "foo", ], "/foo", ], [["/", "/foo", ], "/foo", ], [["/", "//foo", ], "/foo", ], [["/", "", "/foo", ], "/foo", ], [["", "/", "foo", ], "/foo", ], [["", "/", "/foo", ], "/foo", ], ];
  if (chinchilla)
  {
    llama = llama.concat([[["//foo/bar", ], "//foo/bar/", ], [["\\/foo/bar", ], "//foo/bar/", ], [["\\\\foo/bar", ], "//foo/bar/", ], [["//foo", "bar", ], "//foo/bar/", ], [["//foo/", "bar", ], "//foo/bar/", ], [["//foo", "/bar", ], "//foo/bar/", ], [["//foo", "", "bar", ], "//foo/bar/", ], [["//foo/", "", "bar", ], "//foo/bar/", ], [["//foo/", "", "/bar", ], "//foo/bar/", ], [["", "//foo", "bar", ], "//foo/bar/", ], [["", "//foo/", "bar", ], "//foo/bar/", ], [["", "//foo/", "/bar", ], "//foo/bar/", ], [["\\", "foo/bar", ], "/foo/bar", ], [["\\", "/foo/bar", ], "/foo/bar", ], [["", "/", "/foo/bar", ], "/foo/bar", ], [["//", "foo/bar", ], "/foo/bar", ], [["//", "/foo/bar", ], "/foo/bar", ], [["\\\\", "/", "/foo/bar", ], "/foo/bar", ], [["//", ], "/", ], [["//foo", ], "/foo", ], [["//foo/", ], "/foo/", ], [["//foo", "/", ], "/foo/", ], [["//foo", "", "/", ], "/foo/", ], [["///foo/bar", ], "/foo/bar", ], [["////foo", "bar", ], "/foo/bar", ], [["\\\\\\/foo/bar", ], "/foo/bar", ], [["c:", ], "c:.", ], [["c:.", ], "c:.", ], [["c:", "", ], "c:.", ], [["", "c:", ], "c:.", ], [["c:.", "/", ], "c:./", ], [["c:.", "file", ], "c:file", ], [["c:", "/", ], "c:/", ], [["c:", "file", ], "c:/file", ], ]);
  }
  llama.forEach(function (mantis) {
    var dogfish; // e
    var snail; // s
    var dunlin; // t
    
      dogfish = hamster.join.apply(hamster, mantis[0]);
    snail = chinchilla ? mantis[1].replace(new RegExp("\\/", "g"), "\\") : mantis[1];
    dunlin = "path.join(" + mantis[0].map(JSON.stringify).join(",") + ")" + "\n  expect=" + JSON.stringify(snail) + "\n  actual=" + JSON.stringify(dogfish);
    if (dogfish !== snail)
      boar.push("\n" + dunlin);
  });
  raccoon.equal(boar.length, 0, boar.join(""));
  capybara = [true, false, 7, null, {
    
  }, undefined, [], NaN, ];
  capybara.forEach(function (termite) {
    raccoon.throws(function () {
      hamster.join(termite);
    }, TypeError);
    raccoon.throws(function () {
      hamster.resolve(termite);
    }, 
    TypeError);
  });
  if (chinchilla)
  {
    raccoon.equal(hamster.normalize("./fixtures///b/../b/c.js"), "fixtures\\b\\c.js");
    raccoon.equal(hamster.normalize("/foo/../../../bar"), "\\bar");
    raccoon.equal(hamster.normalize("a//b//../b"), "a\\b");
    raccoon.equal(hamster.normalize("a//b//./c"), "a\\b\\c");
    raccoon.equal(hamster.normalize("a//b//."), "a\\b");
    raccoon.equal(hamster.normalize("//server/share/dir/file.ext"), "\\\\server\\share\\dir\\file.ext");
  }
  else
  {
    raccoon.equal(hamster.normalize("./fixtures///b/../b/c.js"), "fixtures/b/c.js");
    raccoon.equal(hamster.normalize("/foo/../../../bar"), "/bar");
    raccoon.equal(hamster.normalize("a//b//../b"), "a/b");
    raccoon.equal(hamster.normalize("a//b//./c"), "a/b/c");
    raccoon.equal(hamster.normalize("a//b//."), "a/b");
  }
  if (chinchilla)
  {
    mink = [[["c:/blah\\blah", "d:/games", "c:../a", ], "c:\\blah\\a", ], [["c:/ignore", "d:\\a/b\\c/d", "\\e.exe", ], "d:\\e.exe", ], [["c:/ignore", "c:/some/file", ], "c:\\some\\file", ], [["d:/ignore", "d:some/dir//", ], "d:\\ignore\\some\\dir", ], [[".", ], process.cwd(), ], [["//server/share", "..", "relative\\", ], "\\\\server\\share\\relative", ], [["c:/", "//", ], "c:\\", ], [["c:/", "//dir", ], "c:\\dir", ], [["c:/", "//server/share", ], "\\\\server\\share\\", ], [["c:/", "//server//share", ], "\\\\server\\share\\", ], [["c:/", "///some//dir", ], "c:\\some\\dir", ], ];
  }
  else
  {
    mink = [[["/var/lib", "../", "file/", ], "/var/file", ], [["/var/lib", "/../", "file/", ], "/file", ], [["a/b/c/", "../../..", ], process.cwd(), ], [[".", ], process.cwd(), ], [["/some/dir", ".", "/absolute/", ], "/absolute", ], ];
  }
  boar = [];
  mink.forEach(function (squid) {
    var rook; // e
    var woodcock; // s
    var antelope; // t
    
      rook = hamster.resolve.apply(hamster, squid[0]);
    woodcock = squid[1];
    antelope = "path.resolve(" + squid[0].map(JSON.stringify).join(",") + ")" + "\n  expect=" + JSON.stringify(woodcock) + "\n  actual=" + JSON.stringify(rook);
    if (rook !== woodcock)
      boar.push("\n" + antelope);
  });
  raccoon.equal(boar.length, 0, boar.join(""));
  if (chinchilla)
  {
    raccoon.equal(hamster.isAbsolute("//server/file"), true);
    raccoon.equal(hamster.isAbsolute("\\\\server\\file"), true);
    raccoon.equal(hamster.isAbsolute("C:/Users/"), true);
    raccoon.equal(hamster.isAbsolute("C:\\Users\\"), true);
    raccoon.equal(hamster.isAbsolute("C:cwd/another"), false);
    raccoon.equal(hamster.isAbsolute("C:cwd\\another"), false);
    raccoon.equal(hamster.isAbsolute("directory/directory"), false);
    raccoon.equal(hamster.isAbsolute("directory\\directory"), false);
  }
  else
  {
    raccoon.equal(hamster.isAbsolute("/home/foo"), true);
    raccoon.equal(hamster.isAbsolute("/home/foo/.."), true);
    raccoon.equal(hamster.isAbsolute("bar/"), false);
    raccoon.equal(hamster.isAbsolute("./baz"), false);
  }
  if (chinchilla)
  {
    prairie_dog = [["c:/blah\\blah", "d:/games", "d:\\games", ], ["c:/aaaa/bbbb", "c:/aaaa", "..", ], ["c:/aaaa/bbbb", "c:/cccc", "..\\..\\cccc", ], ["c:/aaaa/bbbb", "c:/aaaa/bbbb", "", ], ["c:/aaaa/bbbb", "c:/aaaa/cccc", "..\\cccc", ], ["c:/aaaa/", "c:/aaaa/cccc", "cccc", ], ["c:/", "c:\\aaaa\\bbbb", "aaaa\\bbbb", ], ["c:/aaaa/bbbb", "d:\\", "d:\\", ], ];
  }
  else
  {
    prairie_dog = [["/var/lib", "/var", "..", ], ["/var/lib", "/bin", "../../bin", ], ["/var/lib", "/var/lib", "", ], ["/var/lib", "/var/apache", "../apache", ], ["/var/", "/var/lib", "lib", ], ["/", "/var/lib", "var/lib", ], ];
  }
  boar = [];
  prairie_dog.forEach(function (goose) {
    var baboon; // e
    var bat; // s
    var bison; // t
    
      baboon = hamster.relative(goose[0], goose[1]);
    bat = goose[2];
    bison = "path.relative(" + goose.slice(0, 2).map(JSON.stringify).join(",") + ")" + "\n  expect=" + JSON.stringify(bat) + "\n  actual=" + JSON.stringify(baboon);
    if (baboon !== bat)
      boar.push("\n" + bison);
  });
  raccoon.equal(boar.length, 0, boar.join(""));
  if (chinchilla)
  {
    raccoon.equal(hamster.sep, "\\");
  }
  else
  {
    raccoon.equal(hamster.sep, "/");
  }
  if (chinchilla)
  {
    raccoon.equal(hamster.delimiter, ";");
  }
  else
  {
    raccoon.equal(hamster.delimiter, ":");
  }
  