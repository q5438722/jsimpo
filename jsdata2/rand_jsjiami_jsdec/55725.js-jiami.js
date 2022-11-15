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
'use strict';const common=require('../common');const assert=require('assert');const cluster=require('cluster');const fork=require('child_process')['fork'];const net=require('net');if(cluster['isPrimary']&&process['argv']['length']!==0x3){const tmpdir=require('../common/tmpdir');tmpdir['refresh']();const PIPE_NAME=common['PIPE'];const worker=cluster['fork']({'PIPE_NAME':PIPE_NAME});cluster['on']('fork',common['mustCall']());worker['on']('online',common['mustCall']());worker['on']('message',common['mustCall'](function(_0x5d3085){var _0x580981={'gFyYi':'EADDRINUSE'};worker['disconnect']();assert['strictEqual'](_0x5d3085['code'],_0x580981['gFyYi']);}));}else if(process['argv']['length']!==0x3){const PIPE_NAME=process['env']['PIPE_NAME'];const cp=fork(__filename,[PIPE_NAME],{'stdio':'inherit'});cp['on']('message',common['mustCall'](function(){var _0x44dc5d={'JMlMH':'EADDRINUSE','hkcWb':function(_0x4c2a24,_0x1f92f4){return _0x4c2a24!==_0x1f92f4;},'ataCf':'end','bXxCq':'PIPE should have been in use.','aUgqu':function(_0x5d6aa8,_0x4c31c7){return _0x5d6aa8!==_0x4c31c7;},'wtzRp':'error'};const _0x4bddcb=net['createServer']()['listen'](PIPE_NAME,function(){var _0x4ff465={'MngQq':_0x44dc5d['JMlMH']};if(_0x44dc5d['hkcWb']('JDzFb','JDzFb')){worker['disconnect']();assert['strictEqual'](err['code'],_0x4ff465['MngQq']);}else{cp['send'](_0x44dc5d['ataCf']);process['send']('PIPE should have been in use.');}});_0x4bddcb['on'](_0x44dc5d['wtzRp'],function(_0x24d0bf){if(_0x44dc5d['aUgqu']('oPnrV','oPnrV')){cp['send'](_0x44dc5d['ataCf']);process['send'](_0x44dc5d['bXxCq']);}else{cp['send'](_0x44dc5d['ataCf']);process['send'](_0x24d0bf);}});}));}else if(process['argv']['length']===0x3){const PIPE_NAME=process['argv'][0x2];const server=net['createServer']()['listen'](PIPE_NAME,common['mustCall'](()=>{process['send']('listening');}));process['once']('message',common['mustCall'](()=>server['close']()));}else{assert['fail']('Impossible state');}