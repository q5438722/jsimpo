  test(function () {
    var raccoon; // a
    
      raccoon = new URLSearchParams("a=b&c=d");
    raccoon.set("a", "B");
    assert_equals(raccoon + "", "a=B&c=d");
    raccoon = new URLSearchParams("a=b&c=d&a=e");
    raccoon.set("a", "B");
    assert_equals(raccoon + "", "a=B&c=d");
    raccoon.set("e", "f");
    assert_equals(raccoon + "", "a=B&c=d&e=f");
  }, 
  "Set basics");
  test(function () {
    var hamster; // a
    
      hamster = new URLSearchParams("a=1&a=2&a=3");
    assert_true(hamster.has("a"), 'Search params object has name "a"');
    assert_equals(hamster.get("a"), "1", 'Search params object has name "a" with value "1"');
    hamster.set("first", 4);
    assert_true(hamster.has("a"), 'Search params object has name "a"');
    assert_equals(hamster.get("a"), "1", 'Search params object has name "a" with value "1"');
    hamster.set("a", 4);
    assert_true(hamster.has("a"), 'Search params object has name "a"');
    assert_equals(hamster.get("a"), "4", 'Search params object has name "a" with value "4"');
  }, 
  "URLSearchParams.set");
  