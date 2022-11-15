// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';const common=require('../common');const assert=require('assert');if(process['argv'][0x2]!=='child'){const spawn=require('child_process')['spawn'];const child=spawn(process['execPath'],[__filename,'child'],{'stdio':'pipe'});const timer=setTimeout(function(){var _0x411490={'Yxjlq':'child is hung'};throw new Error(_0x411490['Yxjlq']);},common['platformTimeout'](0xbb8));child['on']('exit',common['mustCall'](function(_0x3c8504){assert['strictEqual'](_0x3c8504,0x0);clearTimeout(timer);}));}else{const domain=require('domain');const d=domain['create']();d['on']('error',function(){var _0x120037={'xVYwE':'3|2|5|0|4|1'};var _0x49f723=_0x120037['xVYwE']['split']('|'),_0x3fbde0=0x0;while(!![]){switch(_0x49f723[_0x3fbde0++]){case'0':console['log']('d');continue;case'1':f();continue;case'2':console['log']('b');continue;case'3':console['log']('a');continue;case'4':console['log']('e');continue;case'5':console['log']('c');continue;}break;}});function f(){var _0x18a613={'jzbcQ':function(_0x1b29fc,_0xa8400c){return _0x1b29fc!==_0xa8400c;},'wOBAJ':function(_0xde20ea,_0x1b0105){return _0xde20ea===_0x1b0105;},'kpbom':'SfhOV'};process['nextTick'](function(){if(_0x18a613['wOBAJ'](_0x18a613['kpbom'],_0x18a613['kpbom'])){d['run'](function(){if(_0x18a613['jzbcQ']('CPgww','JVoxn')){throw new Error('x');}else{process['nextTick'](function(){d['run'](function(){throw new Error('x');});});}});}else{throw new Error('x');}});}f();setImmediate(function(){var _0x291c3c={'xOLAF':'broke in!'};console['error'](_0x291c3c['xOLAF']);process['exit'](0x0);});}