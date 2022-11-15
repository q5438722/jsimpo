test(function () {
  var a = new URLSearchParams("a=b&c=d");
  a.set("a", "B");assert_equals(a + "", "a=B&c=d");a = new URLSearchParams("a=b&c=d&a=e");a.set("a", "B");assert_equals(a + "", "a=B&c=d");a.set("e", "f");assert_equals(a + "", "a=B&c=d&e=f");
}, "Set basics");test(function () {
  const a = new URLSearchParams("a=1&a=2&a=3");
  assert_true(a.has("a"), "Search params object has name \"a\"");assert_equals(a.get("a"), "1", "Search params object has name \"a\" with value \"1\"");a.set("first", 4);assert_true(a.has("a"), "Search params object has name \"a\"");assert_equals(a.get("a"), "1", "Search params object has name \"a\" with value \"1\"");a.set("a", 4);assert_true(a.has("a"), "Search params object has name \"a\"");assert_equals(a.get("a"), "4", "Search params object has name \"a\" with value \"4\"");
}, "URLSearchParams.set");
