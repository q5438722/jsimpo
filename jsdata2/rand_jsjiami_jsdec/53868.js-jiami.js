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
'use strict';require('../common');const assert=require('assert');const http=require('http');let serverSocket=null;const server=http['createServer'](function(_0x5ecb4f,_0x1ead76){if(serverSocket){assert['strictEqual'](_0x5ecb4f['socket'],serverSocket);}else{serverSocket=_0x5ecb4f['socket'];}_0x1ead76['end'](_0x5ecb4f['url']);});server['listen'](0x0,function(){var _0x47472f={'CKxNC':function(_0x4c6e51,_0x665500){return _0x4c6e51(_0x665500);}};_0x47472f['CKxNC'](makeRequest,expectRequests);});const agent=http['Agent']({'keepAlive':!![]});let clientSocket=null;const expectRequests=0xa;let actualRequests=0x0;function makeRequest(_0x3ed99c){var _0x179bd7={'UqThJ':function(_0xa8826c,_0xecb100){return _0xa8826c===_0xecb100;},'NBbjP':function(_0x1a78eb,_0x37f9d3){return _0x1a78eb(_0x37f9d3);},'rWPMw':function(_0x1f65c4,_0x3fed87,_0x557cdb){return _0x1f65c4(_0x3fed87,_0x557cdb);},'DeFhX':function(_0x593402,_0x14daa1){return _0x593402!==_0x14daa1;},'GARcA':'JUzcu','DvcMM':'DrLZl','LjuTs':function(_0x2f43a2,_0x39847d){return _0x2f43a2-_0x39847d;},'qraVg':'utf8','CYGCr':'data','hEipS':'end','chWmM':function(_0x5cb714,_0x466387){return _0x5cb714===_0x466387;},'wkfJs':'socket'};if(_0x179bd7['chWmM'](_0x3ed99c,0x0)){server['close']();agent['destroy']();return;}const _0x24ca6d=http['request']({'port':server['address']()['port'],'agent':agent,'path':'/'+_0x3ed99c});_0x24ca6d['end']();_0x24ca6d['on'](_0x179bd7['wkfJs'],function(_0x36bb36){if(clientSocket){if(_0x179bd7['UqThJ']('Enzcs','Enzcs')){assert['strictEqual'](_0x36bb36,clientSocket);}else{clientSocket=_0x36bb36;}}else{clientSocket=_0x36bb36;}});_0x24ca6d['on']('response',function(_0x1fc575){var _0x41e510={'hvacV':function(_0x46e7b5,_0x5c61d8){return _0x46e7b5!==_0x5c61d8;},'koCxo':_0x179bd7['DvcMM'],'pwJEF':function(_0x31a981,_0x13dfc1){return _0x179bd7['LjuTs'](_0x31a981,_0x13dfc1);}};let _0x1061d2='';_0x1fc575['setEncoding'](_0x179bd7['qraVg']);_0x1fc575['on'](_0x179bd7['CYGCr'],function(_0x57863c){var _0x37935d={'QcdKD':function(_0x3173bf,_0xcb0ebd){return _0x179bd7['NBbjP'](_0x3173bf,_0xcb0ebd);},'bGIMa':function(_0x746f21,_0xd34ccc,_0x42bc29){return _0x179bd7['rWPMw'](_0x746f21,_0xd34ccc,_0x42bc29);}};if(_0x179bd7['DeFhX']('izxax',_0x179bd7['GARcA'])){_0x1061d2+=_0x57863c;}else{var _0x49c7c1={'mBlzE':function(_0x5005f9,_0x11b7e2){return _0x37935d['QcdKD'](_0x5005f9,_0x11b7e2);}};assert['strictEqual'](_0x1061d2,'/'+_0x3ed99c);_0x37935d['bGIMa'](setTimeout,function(){actualRequests++;_0x49c7c1['mBlzE'](makeRequest,_0x3ed99c-0x1);},0x1);}});_0x1fc575['on'](_0x179bd7['hEipS'],function(){assert['strictEqual'](_0x1061d2,'/'+_0x3ed99c);setTimeout(function(){if(_0x41e510['hvacV'](_0x41e510['koCxo'],_0x41e510['koCxo'])){server['close']();agent['destroy']();return;}else{actualRequests++;makeRequest(_0x41e510['pwJEF'](_0x3ed99c,0x1));}},0x1);});});}process['on']('exit',function(){assert['strictEqual'](actualRequests,expectRequests);console['log']('ok');});