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
'use strict';const common=require('../common');const assert=require('assert');const child_process=require('child_process');function test(_0x33e3d5,_0x18ce42,_0x37870e='number'){var _0x39a927={'FKbir':function(_0x2050d5,_0x45ab10){return _0x2050d5(_0x45ab10);},'mXgXD':'does-not-exist'};const _0x245d3e=_0x33e3d5('does-not-exist',common['mustCall'](function(_0x40ed84){assert['strictEqual'](_0x40ed84['code'],_0x18ce42);_0x39a927['FKbir'](assert,_0x40ed84['cmd']['includes'](_0x39a927['mXgXD']));}));assert['strictEqual'](typeof _0x245d3e['pid'],_0x37870e);}if(common['isWindows']){test(child_process['exec'],0x1,'number');}else{test(child_process['exec'],0x7f,'number');}test(child_process['execFile'],'ENOENT','undefined');