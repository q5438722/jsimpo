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
'use strict';const common=require('../common');const assert=require('assert');const dgram=require('dgram');const message_to_send='A message to send';const server=dgram['createSocket']('udp4');server['on']('message',common['mustCall']((_0x8275d5,_0x52f622)=>{assert['strictEqual'](_0x52f622['address'],common['localhostIPv4']);assert['strictEqual'](_0x8275d5['toString'](),message_to_send['toString']());server['send'](_0x8275d5,0x0,_0x8275d5['length'],_0x52f622['port'],_0x52f622['address']);}));server['on']('listening',common['mustCall'](()=>{var _0x1799c5={'agUFR':'udp4','QVZws':'close'};const _0x587dfa=dgram['createSocket'](_0x1799c5['agUFR']);const _0x355831=server['address']()['port'];_0x587dfa['on']('message',common['mustCall']((_0x22509d,_0x31b774)=>{assert['strictEqual'](_0x31b774['address'],common['localhostIPv4']);assert['strictEqual'](_0x31b774['port'],_0x355831);assert['strictEqual'](_0x22509d['toString'](),message_to_send['toString']());_0x587dfa['close']();server['close']();}));_0x587dfa['send'](message_to_send,0x0,message_to_send['length'],_0x355831,'localhost');_0x587dfa['on'](_0x1799c5['QVZws'],common['mustCall']());}));server['on']('close',common['mustCall']());server['bind'](0x0);