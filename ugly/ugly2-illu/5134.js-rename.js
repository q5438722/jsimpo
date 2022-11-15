const assert = require("assert");

const path = require(".");

const isWindows = process.platform === "win32";
const f = __dirname + "/simple/test-path.js";
assert.equal(path.basename(f), "test-path.js");assert.equal(path.basename(f, ".js"), "test-path");assert.equal(path.basename(""), "");assert.equal(path.basename("/dir/basename.ext"), "basename.ext");assert.equal(path.basename("/basename.ext"), "basename.ext");assert.equal(path.basename("basename.ext"), "basename.ext");assert.equal(path.basename("basename.ext/"), "basename.ext");assert.equal(path.basename("basename.ext//"), "basename.ext");if (isWindows) {
  assert.equal(path.basename("\\dir\\basename.ext"), "basename.ext");assert.equal(path.basename("\\basename.ext"), "basename.ext");assert.equal(path.basename("basename.ext"), "basename.ext");assert.equal(path.basename("basename.ext\\"), "basename.ext");assert.equal(path.basename("basename.ext\\\\"), "basename.ext");
} else {
  assert.equal(path.basename("\\dir\\basename.ext"), "\\dir\\basename.ext");assert.equal(path.basename("\\basename.ext"), "\\basename.ext");assert.equal(path.basename("basename.ext"), "basename.ext");assert.equal(path.basename("basename.ext\\"), "basename.ext\\");assert.equal(path.basename("basename.ext\\\\"), "basename.ext\\\\");
}if (!isWindows) {
  const controlCharFilename = "Icon\r";
  assert.equal(path.basename("/a/b/Icon\r"), controlCharFilename);
}assert.equal(path.extname(f), ".js");assert.equal(path.dirname(f).substr(-11), isWindows ? "test\\simple" : "test/simple");assert.equal(path.dirname("/a/b/"), "/a");assert.equal(path.dirname("/a/b"), "/a");assert.equal(path.dirname("/a"), "/");assert.equal(path.dirname(""), ".");assert.equal(path.dirname("/"), "/");assert.equal(path.dirname("////"), "/");if (isWindows) {
  assert.equal(path.dirname("c:\\"), "c:\\");assert.equal(path.dirname("c:\\foo"), "c:\\");assert.equal(path.dirname("c:\\foo\\"), "c:\\");assert.equal(path.dirname("c:\\foo\\bar"), "c:\\foo");assert.equal(path.dirname("c:\\foo\\bar\\"), "c:\\foo");assert.equal(path.dirname("c:\\foo\\bar\\baz"), "c:\\foo\\bar");assert.equal(path.dirname("\\"), "\\");assert.equal(path.dirname("\\foo"), "\\");assert.equal(path.dirname("\\foo\\"), "\\");assert.equal(path.dirname("\\foo\\bar"), "\\foo");assert.equal(path.dirname("\\foo\\bar\\"), "\\foo");assert.equal(path.dirname("\\foo\\bar\\baz"), "\\foo\\bar");assert.equal(path.dirname("c:"), "c:");assert.equal(path.dirname("c:foo"), "c:");assert.equal(path.dirname("c:foo\\"), "c:");assert.equal(path.dirname("c:foo\\bar"), "c:foo");assert.equal(path.dirname("c:foo\\bar\\"), "c:foo");assert.equal(path.dirname("c:foo\\bar\\baz"), "c:foo\\bar");assert.equal(path.dirname("\\\\unc\\share"), "\\\\unc\\share");assert.equal(path.dirname("\\\\unc\\share\\foo"), "\\\\unc\\share\\");assert.equal(path.dirname("\\\\unc\\share\\foo\\"), "\\\\unc\\share\\");assert.equal(path.dirname("\\\\unc\\share\\foo\\bar"), "\\\\unc\\share\\foo");assert.equal(path.dirname("\\\\unc\\share\\foo\\bar\\"), "\\\\unc\\share\\foo");assert.equal(path.dirname("\\\\unc\\share\\foo\\bar\\baz"), "\\\\unc\\share\\foo\\bar");
}assert.equal(path.extname(""), "");assert.equal(path.extname("/path/to/file"), "");assert.equal(path.extname("/path/to/file.ext"), ".ext");assert.equal(path.extname("/path.to/file.ext"), ".ext");assert.equal(path.extname("/path.to/file"), "");assert.equal(path.extname("/path.to/.file"), "");assert.equal(path.extname("/path.to/.file.ext"), ".ext");assert.equal(path.extname("/path/to/f.ext"), ".ext");assert.equal(path.extname("/path/to/..ext"), ".ext");assert.equal(path.extname("file"), "");assert.equal(path.extname("file.ext"), ".ext");assert.equal(path.extname(".file"), "");assert.equal(path.extname(".file.ext"), ".ext");assert.equal(path.extname("/file"), "");assert.equal(path.extname("/file.ext"), ".ext");assert.equal(path.extname("/.file"), "");assert.equal(path.extname("/.file.ext"), ".ext");assert.equal(path.extname(".path/file.ext"), ".ext");assert.equal(path.extname("file.ext.ext"), ".ext");assert.equal(path.extname("file."), ".");assert.equal(path.extname("."), "");assert.equal(path.extname("./"), "");assert.equal(path.extname(".file.ext"), ".ext");assert.equal(path.extname(".file"), "");assert.equal(path.extname(".file."), ".");assert.equal(path.extname(".file.."), ".");assert.equal(path.extname(".."), "");assert.equal(path.extname("../"), "");assert.equal(path.extname("..file.ext"), ".ext");assert.equal(path.extname("..file"), ".file");assert.equal(path.extname("..file."), ".");assert.equal(path.extname("..file.."), ".");assert.equal(path.extname("..."), ".");assert.equal(path.extname("...ext"), ".ext");assert.equal(path.extname("...."), ".");assert.equal(path.extname("file.ext/"), ".ext");assert.equal(path.extname("file.ext//"), ".ext");assert.equal(path.extname("file/"), "");assert.equal(path.extname("file//"), "");assert.equal(path.extname("file./"), ".");assert.equal(path.extname("file.//"), ".");if (isWindows) {
  assert.equal(path.extname(".\\"), "");assert.equal(path.extname("..\\"), "");assert.equal(path.extname("file.ext\\"), ".ext");assert.equal(path.extname("file.ext\\\\"), ".ext");assert.equal(path.extname("file\\"), "");assert.equal(path.extname("file\\\\"), "");assert.equal(path.extname("file.\\"), ".");assert.equal(path.extname("file.\\\\"), ".");
} else {
  assert.equal(path.extname(".\\"), "");assert.equal(path.extname("..\\"), ".\\");assert.equal(path.extname("file.ext\\"), ".ext\\");assert.equal(path.extname("file.ext\\\\"), ".ext\\\\");assert.equal(path.extname("file\\"), "");assert.equal(path.extname("file\\\\"), "");assert.equal(path.extname("file.\\"), ".\\");assert.equal(path.extname("file.\\\\"), ".\\\\");
}const failures = [];
var joinTests = [[[".", "x/b", "..", "/b/c.js"], "x/b/c.js"], [["/.", "x/b", "..", "/b/c.js"], "/x/b/c.js"], [["/foo", "../../../bar"], "/bar"], [["foo", "../../../bar"], "../../bar"], [["foo/", "../../../bar"], "../../bar"], [["foo/x", "../../../bar"], "../bar"], [["foo/x", "./bar"], "foo/x/bar"], [["foo/x/", "./bar"], "foo/x/bar"], [["foo/x/", ".", "bar"], "foo/x/bar"], [["./"], "./"], [[".", "./"], "./"], [[".", ".", "."], "."], [[".", "./", "."], "."], [[".", "/./", "."], "."], [[".", "/////./", "."], "."], [["."], "."], [["", "."], "."], [["", "foo"], "foo"], [["foo", "/bar"], "foo/bar"], [["", "/foo"], "/foo"], [["", "", "/foo"], "/foo"], [["", "", "foo"], "foo"], [["foo", ""], "foo"], [["foo/", ""], "foo/"], [["foo", "", "/bar"], "foo/bar"], [["./", "..", "/foo"], "../foo"], [["./", "..", "..", "/foo"], "../../foo"], [[".", "..", "..", "/foo"], "../../foo"], [["", "..", "..", "/foo"], "../../foo"], [["/"], "/"], [["/", "."], "/"], [["/", ".."], "/"], [["/", "..", ".."], "/"], [[""], "."], [["", ""], "."], [[" /foo"], " /foo"], [[" ", "foo"], " /foo"], [[" ", "."], " "], [[" ", "/"], " /"], [[" ", ""], " "], [["/", "foo"], "/foo"], [["/", "/foo"], "/foo"], [["/", "//foo"], "/foo"], [["/", "", "/foo"], "/foo"], [["", "/", "foo"], "/foo"], [["", "/", "/foo"], "/foo"]];
if (isWindows) {
  joinTests = joinTests.concat([[["//foo/bar"], "//foo/bar/"], [["\\/foo/bar"], "//foo/bar/"], [["\\\\foo/bar"], "//foo/bar/"], [["//foo", "bar"], "//foo/bar/"], [["//foo/", "bar"], "//foo/bar/"], [["//foo", "/bar"], "//foo/bar/"], [["//foo", "", "bar"], "//foo/bar/"], [["//foo/", "", "bar"], "//foo/bar/"], [["//foo/", "", "/bar"], "//foo/bar/"], [["", "//foo", "bar"], "//foo/bar/"], [["", "//foo/", "bar"], "//foo/bar/"], [["", "//foo/", "/bar"], "//foo/bar/"], [["\\", "foo/bar"], "/foo/bar"], [["\\", "/foo/bar"], "/foo/bar"], [["", "/", "/foo/bar"], "/foo/bar"], [["//", "foo/bar"], "/foo/bar"], [["//", "/foo/bar"], "/foo/bar"], [["\\\\", "/", "/foo/bar"], "/foo/bar"], [["//"], "/"], [["//foo"], "/foo"], [["//foo/"], "/foo/"], [["//foo", "/"], "/foo/"], [["//foo", "", "/"], "/foo/"], [["///foo/bar"], "/foo/bar"], [["////foo", "bar"], "/foo/bar"], [["\\\\\\/foo/bar"], "/foo/bar"], [["c:"], "c:."], [["c:."], "c:."], [["c:", ""], "c:."], [["", "c:"], "c:."], [["c:.", "/"], "c:./"], [["c:.", "file"], "c:file"], [["c:", "/"], "c:/"], [["c:", "file"], "c:/file"]]);
}joinTests.forEach(function (a) {
  const e = path.join.apply(path, a[0]);
  const s = isWindows ? a[1].replace(/\//g, "\\") : a[1];
  const t = "path.join(" + a[0].map(JSON.stringify).join(",") + ")\n  expect=" + JSON.stringify(s) + "\n  actual=" + JSON.stringify(e);
  if (e !== s) failures.push("\n" + t);
});assert.equal(failures.length, 0, "");const joinThrowTests = [true, false, 7, null, {}, undefined, [], NaN];
joinThrowTests.forEach(function (a) {
  assert.throws(function () {
    path.join(a);
  }, TypeError);assert.throws(function () {
    path.resolve(a);
  }, TypeError);
});if (isWindows) {
  assert.equal(path.normalize("./fixtures///b/../b/c.js"), "fixtures\\b\\c.js");assert.equal(path.normalize("/foo/../../../bar"), "\\bar");assert.equal(path.normalize("a//b//../b"), "a\\b");assert.equal(path.normalize("a//b//./c"), "a\\b\\c");assert.equal(path.normalize("a//b//."), "a\\b");assert.equal(path.normalize("//server/share/dir/file.ext"), "\\\\server\\share\\dir\\file.ext");
} else {
  assert.equal(path.normalize("./fixtures///b/../b/c.js"), "fixtures/b/c.js");assert.equal(path.normalize("/foo/../../../bar"), "/bar");assert.equal(path.normalize("a//b//../b"), "a/b");assert.equal(path.normalize("a//b//./c"), "a/b/c");assert.equal(path.normalize("a//b//."), "a/b");
}if (isWindows) {
  const resolveTests = [[["c:/blah\\blah", "d:/games", "c:../a"], "c:\\blah\\a"], [["c:/ignore", "d:\\a/b\\c/d", "\\e.exe"], "d:\\e.exe"], [["c:/ignore", "c:/some/file"], "c:\\some\\file"], [["d:/ignore", "d:some/dir//"], "d:\\ignore\\some\\dir"], [["."], process.cwd()], [["//server/share", "..", "relative\\"], "\\\\server\\share\\relative"], [["c:/", "//"], "c:\\"], [["c:/", "//dir"], "c:\\dir"], [["c:/", "//server/share"], "\\\\server\\share\\"], [["c:/", "//server//share"], "\\\\server\\share\\"], [["c:/", "///some//dir"], "c:\\some\\dir"]];
} else {
  const resolveTests = [[["/var/lib", "../", "file/"], "/var/file"], [["/var/lib", "/../", "file/"], "/file"], [["a/b/c/", "../../.."], process.cwd()], [["."], process.cwd()], [["/some/dir", ".", "/absolute/"], "/absolute"]];
}const failures = [];
resolveTests.forEach(function (a) {
  const e = path.resolve.apply(path, a[0]);
  const s = a[1];
  const t = "path.resolve(" + a[0].map(JSON.stringify).join(",") + ")\n  expect=" + JSON.stringify(s) + "\n  actual=" + JSON.stringify(e);
  if (e !== s) failures.push("\n" + t);
});assert.equal(failures.length, 0, "");if (isWindows) {
  assert.equal(path.isAbsolute("//server/file"), true);assert.equal(path.isAbsolute("\\\\server\\file"), true);assert.equal(path.isAbsolute("C:/Users/"), true);assert.equal(path.isAbsolute("C:\\Users\\"), true);assert.equal(path.isAbsolute("C:cwd/another"), false);assert.equal(path.isAbsolute("C:cwd\\another"), false);assert.equal(path.isAbsolute("directory/directory"), false);assert.equal(path.isAbsolute("directory\\directory"), false);
} else {
  assert.equal(path.isAbsolute("/home/foo"), true);assert.equal(path.isAbsolute("/home/foo/.."), true);assert.equal(path.isAbsolute("bar/"), false);assert.equal(path.isAbsolute("./baz"), false);
}if (isWindows) {
  const relativeTests = [["c:/blah\\blah", "d:/games", "d:\\games"], ["c:/aaaa/bbbb", "c:/aaaa", ".."], ["c:/aaaa/bbbb", "c:/cccc", "..\\..\\cccc"], ["c:/aaaa/bbbb", "c:/aaaa/bbbb", ""], ["c:/aaaa/bbbb", "c:/aaaa/cccc", "..\\cccc"], ["c:/aaaa/", "c:/aaaa/cccc", "cccc"], ["c:/", "c:\\aaaa\\bbbb", "aaaa\\bbbb"], ["c:/aaaa/bbbb", "d:\\", "d:\\"]];
} else {
  const relativeTests = [["/var/lib", "/var", ".."], ["/var/lib", "/bin", "../../bin"], ["/var/lib", "/var/lib", ""], ["/var/lib", "/var/apache", "../apache"], ["/var/", "/var/lib", "lib"], ["/", "/var/lib", "var/lib"]];
}const failures = [];
relativeTests.forEach(function (a) {
  const e = path.relative(a[0], a[1]);
  const s = a[2];
  const t = "path.relative(" + a.slice(0, 2).map(JSON.stringify).join(",") + ")\n  expect=" + JSON.stringify(s) + "\n  actual=" + JSON.stringify(e);
  if (e !== s) failures.push("\n" + t);
});assert.equal(failures.length, 0, "");if (isWindows) {
  assert.equal(path.sep, "\\");
} else {
  assert.equal(path.sep, "/");
}if (isWindows) {
  assert.equal(path.delimiter, ";");
} else {
  assert.equal(path.delimiter, ":");
}
