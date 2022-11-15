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
'use strict';const common=require('../common');if(!common['hasCrypto'])common['skip']('missing crypto');const assert=require('assert');const crypto=require('crypto');const domain=require('domain');const test=_0x2756a7=>{var _0x279bb8={'DqfQH':'BAM','MJuCR':'error'};const _0x14a0c7=new Error(_0x279bb8['DqfQH']);const _0x2ff973=domain['create']();_0x2ff973['on'](_0x279bb8['MJuCR'],common['mustCall'](function(_0x4a4f00){assert['strictEqual'](_0x4a4f00,_0x14a0c7);}));const _0x248354=common['mustCall'](function(){throw _0x14a0c7;});_0x2ff973['run'](_0x248354);};test(function(_0x1f5d51){var _0x1fa8a5={'YTRBe':'salt'};crypto['pbkdf2']('password',_0x1fa8a5['YTRBe'],0x1,0x8,_0x1f5d51);});test(function(_0x3b9c3c){crypto['randomBytes'](0x20,_0x3b9c3c);});