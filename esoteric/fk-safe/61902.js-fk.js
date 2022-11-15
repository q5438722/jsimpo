  var raccoon; // re
  
  raccoon = new RegExp("a", "g");
  raccoon.test("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  raccoon.lastIndex = + [];
  raccoon.test("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  raccoon.lastIndex = + [];
  raccoon.test("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  raccoon = new RegExp("a", "g");
  raccoon.exec("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  raccoon.lastIndex = + [];
  raccoon.exec("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  raccoon.lastIndex = + [];
  raccoon.exec("bbbbabbbbabbbb");
  assertEquals(5, raccoon.lastIndex);
  