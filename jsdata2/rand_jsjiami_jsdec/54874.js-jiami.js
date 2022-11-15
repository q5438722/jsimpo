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
'use strict';const common=require('../common');const assert=require('assert');const net=require('net');let connections=0x0;let dataEvents=0x0;let conn;const server=net['createServer'](function(_0x5405d2){var _0x1da6cc={'kPhXf':function(_0x2bd051,_0xd39429){return _0x2bd051===_0xd39429;}};connections++;_0x5405d2['end']('This was the year he fell to pieces.');if(_0x1da6cc['kPhXf'](connections,0x5))server['close']();});server['listen'](0x0,function(){var _0x42aa65={'wYhAg':function(_0x547128,_0x4df6a2){return _0x547128===_0x4df6a2;},'OcUak':'kjWwE','kDrYH':'This was the year he fell to pieces.','AtVmY':function(_0x4c8d4b,_0x312729){return _0x4c8d4b===_0x312729;},'oTsqT':'SwqgV','dYYTm':'iOAKo','gKnhT':function(_0x4bebb2,_0x2707a9,_0x2dc78c){return _0x4bebb2(_0x2707a9,_0x2dc78c);},'AMMtl':'localhost','sWnWh':'data','JQMjb':function(_0xb5bd81,_0x452ee6){return _0xb5bd81(_0x452ee6);}};conn=net['createConnection'](this['address']()['port'],_0x42aa65['AMMtl']);conn['resume']();conn['on'](_0x42aa65['sWnWh'],_0xc0d942);conn=net['createConnection'](this['address']()['port'],_0x42aa65['AMMtl']);conn['pause']();conn['resume']();conn['on'](_0x42aa65['sWnWh'],_0xc0d942);conn=net['createConnection'](this['address']()['port'],_0x42aa65['AMMtl']);conn['pause']();conn['on'](_0x42aa65['sWnWh'],common['mustNotCall']());_0x42aa65['JQMjb'](_0x1dfe70,conn);conn=net['createConnection'](this['address']()['port'],_0x42aa65['AMMtl']);conn['resume']();conn['pause']();conn['resume']();conn['on'](_0x42aa65['sWnWh'],_0xc0d942);conn=net['createConnection'](this['address']()['port'],_0x42aa65['AMMtl']);conn['resume']();conn['resume']();conn['pause']();conn['on'](_0x42aa65['sWnWh'],common['mustNotCall']());_0x42aa65['JQMjb'](_0x1dfe70,conn);function _0xc0d942(){dataEvents++;}function _0x1dfe70(_0x41bf9a){var _0x8eef26={'vXBAX':_0x42aa65['kDrYH'],'BQzYo':function(_0x11f356,_0xacca91){return _0x42aa65['AtVmY'](_0x11f356,_0xacca91);}};if(_0x42aa65['oTsqT']!==_0x42aa65['dYYTm']){_0x42aa65['gKnhT'](setTimeout,function(){if(_0x42aa65['wYhAg']('teJjF',_0x42aa65['OcUak'])){dataEvents++;}else{_0x41bf9a['removeAllListeners']('data');_0x41bf9a['resume']();}},0x64);}else{connections++;_0x41bf9a['end'](_0x8eef26['vXBAX']);if(_0x8eef26['BQzYo'](connections,0x5))server['close']();}}});process['on']('exit',function(){assert['strictEqual'](connections,0x5);assert['strictEqual'](dataEvents,0x3);});