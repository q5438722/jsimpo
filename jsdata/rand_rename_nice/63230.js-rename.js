'use strict';
var i;
var s = "";
i = 0;
for (; i < 1024; i++) {
  s = s + (i + (i + 1));
  s = s.substring(1);
}
assertEquals(57, s.charCodeAt(0));

