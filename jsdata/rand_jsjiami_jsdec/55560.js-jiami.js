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
'use strict';const common=require('../common');if(!common['hasCrypto'])common['skip']('missing crypto');const assert=require('assert');const tls=require('tls');const fixtures=require('../common/fixtures');const options={'key':fixtures['readKey']('agent2-key.pem'),'cert':fixtures['readKey']('agent2-cert.pem')};const messageUtf8='x√ab c';const messageAscii='xbab\x20c';const server=tls['Server'](options,common['mustCall'](function(_0x97d1a9){console['log']('server: on secureConnection',_0x97d1a9['getProtocol']());_0x97d1a9['end'](messageUtf8);}));server['listen'](0x0,function(){var _0x4a57e1={'nPVhV':'0|4|2|1|3','cDxky':'client:\x20on\x20close','USiWJ':'closed','fuiAG':function(_0x21b192,_0x27fb20){return _0x21b192===_0x27fb20;},'aZDrZ':'OPhFE','VLqJF':'client: on data','eCXrj':function(_0x582378,_0x4b1de1){return _0x582378===_0x4b1de1;},'xenMy':'string','KXquk':'client: on secureConnect','dcQrp':function(_0x1159c7,_0x95e5bc){return _0x1159c7!==_0x95e5bc;},'zWQmP':'vTGtV','qFFxt':'ascii','PadLP':'data','HtmXU':'close'};const _0x75aa1=tls['connect']({'port':this['address']()['port'],'rejectUnauthorized':![]});let _0x31c3de='';_0x75aa1['setEncoding'](_0x4a57e1['qFFxt']);_0x75aa1['on'](_0x4a57e1['PadLP'],function(_0x1ca5b0){if(_0x4a57e1['fuiAG'](_0x4a57e1['aZDrZ'],'OPhFE')){console['log'](_0x4a57e1['VLqJF'],_0x1ca5b0);assert['ok'](_0x4a57e1['eCXrj'](typeof _0x1ca5b0,_0x4a57e1['xenMy']));_0x31c3de+=_0x1ca5b0;}else{var _0x193294=_0x4a57e1['nPVhV']['split']('|'),_0x41ab6d=0x0;while(!![]){switch(_0x193294[_0x41ab6d++]){case'0':console['log'](_0x4a57e1['cDxky']);continue;case'1':assert['strictEqual'](messageAscii,_0x31c3de);continue;case'2':assert['notStrictEqual'](messageUtf8,_0x31c3de);continue;case'3':server['close']();continue;case'4':assert['strictEqual'](_0x75aa1['readyState'],_0x4a57e1['USiWJ']);continue;}break;}}});_0x75aa1['on']('secureConnect',common['mustCall'](()=>{console['log'](_0x4a57e1['KXquk']);}));_0x75aa1['on'](_0x4a57e1['HtmXU'],common['mustCall'](function(){if(_0x4a57e1['dcQrp'](_0x4a57e1['zWQmP'],_0x4a57e1['zWQmP'])){console['log'](_0x4a57e1['VLqJF'],d);assert['ok'](typeof d==='string');_0x31c3de+=d;}else{console['log'](_0x4a57e1['cDxky']);assert['strictEqual'](_0x75aa1['readyState'],'closed');assert['notStrictEqual'](messageUtf8,_0x31c3de);assert['strictEqual'](messageAscii,_0x31c3de);server['close']();}}));});