"use strict";const common=require("../common");const assert=require("assert");const exec=require("child_process").exec;const fixtures=require("../common/fixtures");function errExec(r,t){const s=`"${process.argv[0]}" "${fixtures.path(r)}"`;return exec(s,(r,s,e)=>{assert.ok(r);assert.ok(e.split("\n").length);t(r,s,e)})}const syntaxErrorMessage=/\bSyntaxError\b/;errExec("throws_error.js",common.mustCall((r,s,e)=>{assert.ok(/blah/.test(e))}));errExec("throws_error2.js",common.mustCall((r,s,e)=>{assert.ok(syntaxErrorMessage.test(e))}));errExec("throws_error3.js",common.mustCall((r,s,e)=>{assert.ok(syntaxErrorMessage.test(e))}));errExec("throws_error4.js",common.mustCall((r,s,e)=>{assert.ok(syntaxErrorMessage.test(e))}));errExec("throws_error5.js",common.mustCall((r,s,e)=>{assert.ok(syntaxErrorMessage.test(e))}));errExec("throws_error6.js",common.mustCall((r,s,e)=>{assert.ok(syntaxErrorMessage.test(e))}));errExec("throws_error7.js",common.mustCall((r,s,e)=>{assert.ok(/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/.test(e))}));