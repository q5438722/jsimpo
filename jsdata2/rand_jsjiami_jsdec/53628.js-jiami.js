/* eslint-disable quotes */
'use strict';require('../common');const {Duplex}=require('stream');const {inspect}=require('util');const {strictEqual}=require('assert');const {REPLServer}=require('repl');let output='';const inout=new Duplex({'decodeStrings':![]});inout['_read']=function(){var _0x1c5789={'htrDd':'util.inspect("string")\n'};this['push'](_0x1c5789['htrDd']);this['push'](null);};inout['_write']=function(_0x15c01e,_0x3751d7,_0x5cf226){var _0x562247={'qixIx':function(_0x49cdef){return _0x49cdef();}};output+=_0x15c01e;_0x562247['qixIx'](_0x5cf226);};const repl=new REPLServer({'input':inout,'output':inout,'useColors':!![]});inout['isTTY']=!![];const repl2=new REPLServer({'input':inout,'output':inout});process['on']('exit',function(){var _0x207668={'hNzhz':'1|4|2|0|3','ABfpK':function(_0x302301,_0x3e39f7,_0x28fe5c){return _0x302301(_0x3e39f7,_0x28fe5c);},'PIvPj':function(_0x227ad1,_0x7fc021,_0x45ac81){return _0x227ad1(_0x7fc021,_0x45ac81);},'XFSZJ':function(_0x28d237,_0xb5b61f,_0x13f4ed){return _0x28d237(_0xb5b61f,_0x13f4ed);}};var _0xd8f0ca=_0x207668['hNzhz']['split']('|'),_0x854d35=0x0;while(!![]){switch(_0xd8f0ca[_0x854d35++]){case'0':_0x207668['ABfpK'](strictEqual,repl['writer']['options']['colors'],!![]);continue;case'1':_0x207668['PIvPj'](strictEqual,output['includes']('"\'string\'"'),!![]);continue;case'2':strictEqual(inspect['defaultOptions']['colors'],![]);continue;case'3':_0x207668['XFSZJ'](strictEqual,repl2['writer']['options']['colors'],!![]);continue;case'4':_0x207668['XFSZJ'](strictEqual,output['includes']('\'[32m\\'string\\'[39m\''),![]);continue;}break;}});