const playwright=require('playwright');const path=require('path');(async()=>{var _0x1c7a4a={'kLsPg':'electron-app.js','ntzYX':function(_0x2acd4b,_0x1baa34){return _0x2acd4b!==_0x1baa34;}};const _0x411818=await playwright['_electron']['launch']({'args':[path['join'](__dirname,_0x1c7a4a['kLsPg'])]});const _0x3fc917=await _0x411818['evaluate'](async({app})=>app['getAppPath']());await _0x411818['close']();if(_0x1c7a4a['ntzYX'](_0x3fc917,__dirname))throw new Error('Malformed\x20app\x20path:\x20got\x20\x22'+_0x3fc917+'", expected "'+__dirname+'\x22');console['log']('playwright._electron SUCCESS');})()['catch'](_0x539436=>{console['error'](_0x539436);process['exit'](0x1);});