var i;
var s = "";
// Unknown loop control variable
for (i = 0; i < 1024; i++) {
  s = s + (i + (i + 1));s = s.substring(1);
}assertEquals(57, s.charCodeAt(0));
