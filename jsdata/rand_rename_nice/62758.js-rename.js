'use strict';
function t(s, value) {
  assertTrue(s.test(value));
}
function f(s, str) {
  assertFalse(s.test(str));
}
t(/p{ASCII}+/u, "abc123");
f(/p{ASCII}+/u, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
f(/p{ASCII}+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
f(/P{ASCII}+/u, "abcd123");
t(/P{ASCII}+/u, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
t(/P{ASCII}+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
f(/[^p{ASCII}]+/u, "abc123");
f(/[p{ASCII}]+/u, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
f(/[p{ASCII}]+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
t(/[^P{ASCII}]+/u, "abcd123");
t(/[P{ASCII}]+/u, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
f(/[^P{ASCII}]+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
t(/p{Any}+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
assertEquals(["\ud800"], /p{Any}/u.exec("\ud800\ud801"));
assertEquals(["\udc00"], /p{Any}/u.exec("\udc00\udc01"));
assertEquals(["\ud800\udc01"], /p{Any}/u.exec("\ud800\udc01"));
assertEquals(["\udc01"], /p{Any}/u.exec("\udc01"));
f(/P{Any}+/u, "123");
f(/[P{Any}]+/u, "123");
t(/[P{Any}\d]+/u, "123");
t(/[^P{Any}]+/u, "123");
t(/p{Assigned}+/u, "123");
t(/p{Assigned}+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32");
f(/p{Assigned}+/u, "\ufdd0");
f(/p{Assigned}+/u, "\udbbf\udfff");
f(/P{Assigned}+/u, "123");
f(/P{Assigned}+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32");
t(/P{Assigned}+/u, "\ufdd0");
t(/P{Assigned}+/u, "\udbbf\udfff");
f(/P{Assigned}/u, "");
t(/[^P{Assigned}]+/u, "123");
f(/[P{Assigned}]+/u, "\ud83c\udd30\ud83c\udd31\ud83c\udd32");
f(/[^P{Assigned}]+/u, "\ufdd0");
t(/[P{Assigned}]+/u, "\udbbf\udfff");
f(/[P{Assigned}]/u, "");
f(/[^\u1234p{ASCII}]+/u, "\u1234");
t(/[xP{ASCII}]+/u, "x");
t(/[\u1234p{ASCII}]+/u, "\u1234");
assertThrows("/\\p{Other_Alphabetic}/u");
assertThrows("/\\P{OAlpha}/u");
assertThrows("/\\p{Other_Default_Ignorable_Code_Point}/u");
assertThrows("/\\P{ODI}/u");
assertThrows("/\\p{Other_Grapheme_Extend}/u");
assertThrows("/\\P{OGr_Ext}/u");
assertThrows("/\\p{Other_ID_Continue}/u");
assertThrows("/\\P{OIDC}/u");
assertThrows("/\\p{Other_ID_Start}/u");
assertThrows("/\\P{OIDS}/u");
assertThrows("/\\p{Other_Lowercase}/u");
assertThrows("/\\P{OLower}/u");
assertThrows("/\\p{Other_Math}/u");
assertThrows("/\\P{OMath}/u");
assertThrows("/\\p{Other_Uppercase}/u");
assertThrows("/\\P{OUpper}/u");
