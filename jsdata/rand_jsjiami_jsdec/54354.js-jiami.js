'use strict';// Flags: --expose-internals
require('../common');const stream=require('stream');const REPL=require('internal/repl');const assert=require('assert');const inspect=require('util')['inspect'];const {REPL_MODE_SLOPPY,REPL_MODE_STRICT}=require('repl');const tests=[{'env':{},'expected':{'terminal':!![],'useColors':!![]}},{'env':{'NODE_DISABLE_COLORS':'1'},'expected':{'terminal':!![],'useColors':![]}},{'env':{'NODE_NO_READLINE':'1'},'expected':{'terminal':![],'useColors':![]}},{'env':{'TERM':'dumb'},'expected':{'terminal':!![],'useColors':![]}},{'env':{'NODE_NO_READLINE':'1','NODE_DISABLE_COLORS':'1'},'expected':{'terminal':![],'useColors':![]}},{'env':{'NODE_NO_READLINE':'0'},'expected':{'terminal':!![],'useColors':!![]}},{'env':{'NODE_REPL_MODE':'sloppy'},'expected':{'terminal':!![],'useColors':!![],'replMode':REPL_MODE_SLOPPY}},{'env':{'NODE_REPL_MODE':'strict'},'expected':{'terminal':!![],'useColors':!![],'replMode':REPL_MODE_STRICT}}];function run(_0x15ce54){var _0x234175={'WPdcQ':function(_0x1874ea,_0x38aed5){return _0x1874ea(_0x38aed5);},'ZQNYS':function(_0x338f19,_0x2f52d7){return _0x338f19(_0x2f52d7);},'spDZk':function(_0x1335e2,_0xba4b3f){return _0x1335e2(_0xba4b3f);},'KkWpx':function(_0x5a88a5,_0xd65fde){return _0x5a88a5(_0xd65fde);}};const _0x2f5d06=_0x15ce54['env'];const _0x12de1a=_0x15ce54['expected'];const _0x26e207={'terminal':!![],'input':new stream['Readable']({'read'(){}}),'output':new stream[('Writable')]({'write'(){}})};Object['assign'](process['env'],_0x2f5d06);REPL['createInternalRepl'](process['env'],_0x26e207,function(_0x38bf73,_0x2b6c6a){assert['ifError'](_0x38bf73);assert['strictEqual'](_0x2b6c6a['terminal'],_0x12de1a['terminal'],'Expected\x20'+_0x234175['WPdcQ'](inspect,_0x12de1a)+' with '+_0x234175['WPdcQ'](inspect,_0x2f5d06));assert['strictEqual'](_0x2b6c6a['useColors'],_0x12de1a['useColors'],'Expected\x20'+_0x234175['WPdcQ'](inspect,_0x12de1a)+' with '+_0x234175['ZQNYS'](inspect,_0x2f5d06));assert['strictEqual'](_0x2b6c6a['replMode'],_0x12de1a['replMode']||REPL_MODE_SLOPPY,'Expected '+_0x234175['spDZk'](inspect,_0x12de1a)+' with '+_0x234175['KkWpx'](inspect,_0x2f5d06));for(const _0x7f2319 of Object['keys'](_0x2f5d06)){delete process['env'][_0x7f2319];}_0x2b6c6a['close']();});}tests['forEach'](run);