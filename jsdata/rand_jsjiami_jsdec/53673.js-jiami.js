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
'use strict';const common=require('../common');const http=require('http');const server=http['createServer'](common['mustNotCall']());server['listen'](0x0,common['mustCall'](()=>{var _0xeea2a3={'TTVxi':'GET','fFVwB':'127.0.0.1','zlHIZ':'abort','eWILA':'error'};const _0x2a767=http['request']({'method':_0xeea2a3['TTVxi'],'host':_0xeea2a3['fFVwB'],'port':server['address']()['port']});_0x2a767['on'](_0xeea2a3['zlHIZ'],common['mustCall'](()=>{server['close']();}));_0x2a767['on'](_0xeea2a3['eWILA'],common['mustNotCall']());_0x2a767['abort']();_0x2a767['end']();}));