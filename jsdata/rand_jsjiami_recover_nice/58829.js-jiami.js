'use strict';
let getCount = 0;
new Intl["ListFormat"](["en-US"], {
  get "localeMatcher"() {
    assertEquals(0, getCount++);
  },
  get "type"() {
    assertEquals(1, getCount++);
  },
  get "style"() {
    assertEquals(2, getCount++);
  }
});
assertEquals(3, getCount);
