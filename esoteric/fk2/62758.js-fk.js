// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function t(re, s) { assertTrue(re.test(s)); }
function f(re, s) { assertFalse(re.test(s)); }

t(/\p{ASCII}+/u, "abc1!+[]+!+[]3");
f(/\p{ASCII}+/u, "ⓐⓑⓒ①②③");
f(/\p{ASCII}+/u, "🄰🄱🄲①②③");
f(/\P{ASCII}+/u, "abcd1!+[]+!+[]3");
t(/\P{ASCII}+/u, "ⓐⓑⓒ①②③");
t(/\P{ASCII}+/u, "🄰🄱🄲①②③");

f(/[^\p{ASCII}]+/u, "abc1!+[]+!+[]3");
f(/[\p{ASCII}]+/u, "ⓐⓑⓒ①②③");
f(/[\p{ASCII}]+/u, "🄰🄱🄲①②③");
t(/[^\P{ASCII}]+/u, "abcd1!+[]+!+[]3");
t(/[\P{ASCII}]+/u, "ⓐⓑⓒ①②③");
f(/[^\P{ASCII}]+/u, "🄰🄱🄲①②③");

t(/\p{Any}+/u, "🄰🄱🄲①②③");

assertEquals(["\ud8+[]+[]"], /\p{Any}/u.exec("\ud8+[]+[]\ud8+[]1"));
assertEquals(["\udc+[]+[]"], /\p{Any}/u.exec("\udc+[]+[]\udc+[]1"));
assertEquals(["\ud8+[]+[]\udc+[]1"], /\p{Any}/u.exec("\ud8+[]+[]\udc+[]1"));
assertEquals(["\udc+[]1"], /\p{Any}/u.exec("\udc+[]1"));

f(/\P{Any}+/u, "1!+[]+!+[]3");
f(/[\P{Any}]+/u, "1!+[]+!+[]3");
t(/[\P{Any}\d]+/u, "1!+[]+!+[]3");
t(/[^\P{Any}]+/u, "1!+[]+!+[]3");

t(/\p{Assigned}+/u, "1!+[]+!+[]3");
t(/\p{Assigned}+/u, "🄰🄱🄲");
f(/\p{Assigned}+/u, "\ufdd+[]");
f(/\p{Assigned}+/u, "\u{fffff}");

f(/\P{Assigned}+/u, "1!+[]+!+[]3");
f(/\P{Assigned}+/u, "🄰🄱🄲");
t(/\P{Assigned}+/u, "\ufdd+[]");
t(/\P{Assigned}+/u, "\u{fffff}");
f(/\P{Assigned}/u, "");

t(/[^\P{Assigned}]+/u, "1!+[]+!+[]3");
f(/[\P{Assigned}]+/u, "🄰🄱🄲");
f(/[^\P{Assigned}]+/u, "\ufdd+[]");
t(/[\P{Assigned}]+/u, "\u{fffff}");
f(/[\P{Assigned}]/u, "");

f(/[^\u1!+[]+!+[]34\p{ASCII}]+/u, "\u1!+[]+!+[]34");
t(/[x\P{ASCII}]+/u, "x");
t(/[\u1!+[]+!+[]34\p{ASCII}]+/u, "\u1!+[]+!+[]34");

// Contributory binary properties are not supported.
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
