const path=require('path');const http=require('http');const server=http['createServer'](async(_0x14dd36,_0x30c7a1)=>{var _0x190732={'TtRey':function(_0x2cf2f2,_0x397e01){return _0x2cf2f2(_0x397e01);},'qEJlB':'.next/serverless/pages/','oMSQX':'internal error','rWgma':'/[[...slug]].js','zPjQz':'Internal\x20Error'};const _0x55e688=async _0x251e38=>{const _0x5177a8=_0x190732['TtRey'](require,'./'+path['join'](_0x190732['qEJlB'],_0x251e38));try{return await(_0x5177a8['render']||_0x5177a8['default']||_0x5177a8)(_0x14dd36,_0x30c7a1);}catch(_0x38c128){_0x30c7a1['statusCode']=0x1f4;return _0x30c7a1['end'](_0x190732['oMSQX']);}};try{await _0x190732['TtRey'](_0x55e688,_0x190732['rWgma']);}catch(_0x90b293){console['error']('failed\x20to\x20render',_0x90b293);_0x30c7a1['statusCode']=0x1f4;_0x30c7a1['end'](_0x190732['zPjQz']);}});const port=process['env']['PORT']||0xbb8;server['listen'](port,()=>{var _0x29bd4a={'ckWGe':'ready on'};console['log'](_0x29bd4a['ckWGe'],port);});