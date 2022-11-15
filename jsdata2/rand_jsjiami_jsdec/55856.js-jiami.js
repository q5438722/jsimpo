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
'use strict';const common=require('../common');const assert=require('assert');const http=require('http');const bufferSize=0x5*0x400*0x400;let measuredSize=0x0;const buffer=Buffer['allocUnsafe'](bufferSize);for(let i=0x0;i<buffer['length'];i++){buffer[i]=i%0x100;}const server=http['Server'](function(_0x1b7d10,_0x502c12){var _0x21b931={'BTxvg':'POST','PkDhH':'thanks','vQkcS':'utf8','dSVnk':function(_0x26de3f,_0x9d86f2){return _0x26de3f===_0x9d86f2;},'ZkUDX':'SNVzb','miXju':'end'};server['close']();let _0x909bd3=0x0;_0x1b7d10['on']('data',_0x46e85a=>{var _0x372043={'laqOw':_0x21b931['PkDhH'],'TqixG':_0x21b931['vQkcS'],'BGmKb':'data','nKOVe':'end'};measuredSize+=_0x46e85a['length'];for(let _0x5c4849=0x0;_0x5c4849<_0x46e85a['length'];_0x5c4849++){if(_0x21b931['dSVnk']('SNVzb',_0x21b931['ZkUDX'])){assert['strictEqual'](_0x46e85a[_0x5c4849],buffer[_0x909bd3]);_0x909bd3++;}else{const _0xd8f8dd=http['request']({'port':server['address']()['port'],'method':_0x21b931['BTxvg'],'path':'/','headers':{'content-length':buffer['length']}},common['mustCall'](_0xf5c79e=>{var _0x288ca2={'kRysr':_0x372043['laqOw']};_0xf5c79e['setEncoding'](_0x372043['TqixG']);let _0x1e89c2='';_0xf5c79e['on'](_0x372043['BGmKb'],_0x34ac36=>_0x1e89c2+=_0x34ac36);_0xf5c79e['on'](_0x372043['nKOVe'],common['mustCall'](()=>{assert['strictEqual'](_0x1e89c2,_0x288ca2['kRysr']);}));}));_0xd8f8dd['end'](buffer);}}});_0x1b7d10['on'](_0x21b931['miXju'],common['mustCall'](()=>{assert['strictEqual'](measuredSize,bufferSize);_0x502c12['writeHead'](0xc8);_0x502c12['write'](_0x21b931['PkDhH']);_0x502c12['end']();}));});server['listen'](0x0,common['mustCall'](()=>{var _0x26aab4={'YbOAY':'thanks','LCInt':'utf8','VoYyI':'data','agRWI':'end'};const _0xa7d10c=http['request']({'port':server['address']()['port'],'method':'POST','path':'/','headers':{'content-length':buffer['length']}},common['mustCall'](_0x384d5b=>{_0x384d5b['setEncoding'](_0x26aab4['LCInt']);let _0x46af0a='';_0x384d5b['on'](_0x26aab4['VoYyI'],_0x1a8bb7=>_0x46af0a+=_0x1a8bb7);_0x384d5b['on'](_0x26aab4['agRWI'],common['mustCall'](()=>{assert['strictEqual'](_0x46af0a,_0x26aab4['YbOAY']);}));}));_0xa7d10c['end'](buffer);}));