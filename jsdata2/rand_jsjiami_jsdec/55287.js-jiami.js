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
'use strict';const common=require('../common');const assert=require('assert');const {inspect}=require('util');const N=0x2;function cb(){throw new Error();}for(let i=0x0;i<N;++i){process['nextTick'](common['mustCall'](cb));}process['on']('uncaughtException',common['mustCall'](N));process['on']('exit',function(){var _0x48ac94={'bAoFQ':'uncaughtException'};process['removeAllListeners'](_0x48ac94['bAoFQ']);});[null,0x1,'test',{},[],Infinity,!![]]['forEach'](_0x376591=>{var _0x32d8a0={'wwqmX':'ERR_INVALID_CALLBACK','NYjoH':function(_0x1070eb,_0x4a38b5){return _0x1070eb(_0x4a38b5);}};assert['throws'](()=>process['nextTick'](_0x376591),{'code':_0x32d8a0['wwqmX'],'name':'TypeError','message':'Callback must be a function. Received '+_0x32d8a0['NYjoH'](inspect,_0x376591)});});