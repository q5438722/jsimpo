const fs=require('fs');const path=require('path');const color=require('ansicolors');const {promisify}=require('util');const glob=promisify(require('glob'));const readFile=promisify(fs['readFile']);const BaseCommand=require('./base-command.js');class HelpSearch extends BaseCommand{static get['description'](){var _0x1a297c={'cFHKl':'Search npm help documentation'};return _0x1a297c['cFHKl'];}static get['name'](){var _0x488675={'nRoxT':'help-search'};return _0x488675['nRoxT'];}static get['usage'](){var _0x2af2e8={'ISCgv':'<text>'};return[_0x2af2e8['ISCgv']];}static get['params'](){var _0xdb21c1={'iqXQq':'long'};return[_0xdb21c1['iqXQq']];}['exec'](_0x305c75,_0x50ef97){this['helpSearch'](_0x305c75)['then'](()=>_0x50ef97())['catch'](_0x50ef97);}async['helpSearch'](_0x117d26){var _0xb11bea={'dWBee':'docs/content','kiWMC':function(_0x4b0adb,_0x6cb87f){return _0x4b0adb(_0x6cb87f);}};if(!_0x117d26['length'])return this['npm']['output'](this['usage']);const _0x49c78f=path['resolve'](__dirname,'..',_0xb11bea['dWBee']);const _0x3d5ca4=await _0xb11bea['kiWMC'](glob,_0x49c78f+'/*/*.md');const _0xdb11c0=await this['readFiles'](_0x3d5ca4);const _0x40dc1c=await this['searchFiles'](_0x117d26,_0xdb11c0,_0x3d5ca4);const _0x4bfe2c=this['formatResults'](_0x117d26,_0x40dc1c);if(!_0x4bfe2c['trim']())this['npm']['output']('No matches in help for: '+_0x117d26['join']('\x20')+'\x0a');else this['npm']['output'](_0x4bfe2c);}async['readFiles'](_0x325966){var _0x433b5e={'cktbl':function(_0x41255b,_0x1a4847,_0x267105){return _0x41255b(_0x1a4847,_0x267105);},'FgiRq':'utf8'};const _0x35eaa8={};await Promise['all'](_0x325966['map'](async _0x335417=>{_0x35eaa8[_0x335417]=(await _0x433b5e['cktbl'](readFile,_0x335417,_0x433b5e['FgiRq']))['replace'](/^---\n(.*\n)*?---\n/,'')['trim']();}));return _0x35eaa8;}async['searchFiles'](_0x3fa90d,_0x1082e9,_0xd870bc){var _0x2b066d={'TGzYb':function(_0x17882d,_0x30bd41){return _0x17882d-_0x30bd41;},'jnrCj':function(_0x23ea5d,_0x39b586){return _0x23ea5d||_0x39b586;},'yyGlJ':function(_0x1f48f6,_0xde7db0){return _0x1f48f6>_0xde7db0;},'nFAFM':function(_0x24ccc8,_0x211c33){return _0x24ccc8+_0x211c33;},'ncMvx':function(_0x21197e,_0x4743a6){return _0x21197e===_0x4743a6;},'rpgHV':function(_0x5c040f,_0x3f8593){return _0x5c040f+_0x3f8593;},'OrbWC':function(_0x183fe2,_0x20406e){return _0x183fe2+_0x20406e;},'JObnx':function(_0x39f158,_0x92b160){return _0x39f158+_0x92b160;},'kRmVK':function(_0xbff80c,_0x5cdcfa){return _0xbff80c===_0x5cdcfa;},'JgQAy':'SZSKy','MQfQx':'dqYOI','VJLfz':function(_0x277b11,_0xc8390d){return _0x277b11+_0xc8390d;},'spJyL':function(_0x11a121,_0xc5721c){return _0x11a121+_0xc5721c;},'coEkO':'JWlSf','HWetl':function(_0x2363d3,_0x1c29b5){return _0x2363d3-_0x1c29b5;},'wTisW':function(_0xfd2ecc,_0x347191){return _0xfd2ecc===_0x347191;},'mgjuC':'PzgvK','hzWoQ':function(_0x1e3080,_0x21d422){return _0x1e3080>_0x21d422;},'jMQsj':'tZPRa','PHFfP':function(_0x17676a,_0xba412e){return _0x17676a+_0xba412e;},'JfoCm':function(_0x1226c4,_0x271495){return _0x1226c4+_0x271495;},'SuspH':'npm\x20help\x20'};const _0x4e1059=[];for(const [_0x1292c1,_0x332894]of Object['entries'](_0x1082e9)){const _0x787da6=_0x332894['toLowerCase']();if(!_0x3fa90d['some'](_0x3cba0e=>_0x787da6['includes'](_0x3cba0e['toLowerCase']())))continue;const _0x62b454=_0x332894['split'](/\n+/);for(let _0x4f9acd=0x0;_0x4f9acd<_0x62b454['length'];_0x4f9acd++){const _0x8d09e8=_0x62b454[_0x4f9acd];const _0x1224bd=_0x62b454[_0x2b066d['spJyL'](_0x4f9acd,0x1)];let _0x5665b7=![];if(_0x1224bd){if('JWlSf'===_0x2b066d['coEkO']){_0x5665b7=_0x3fa90d['some'](_0x56ab8b=>_0x1224bd['toLowerCase']()['includes'](_0x56ab8b['toLowerCase']()));if(_0x5665b7){_0x4f9acd+=0x2;continue;}}else{for(const _0x2bd6f7 of _0x3fa90d){const _0xb4bdb3=_0x2b066d['TGzYb'](_0x2b066d['jnrCj'](_0x8d09e8,'')['toLowerCase']()['split'](_0x2bd6f7['toLowerCase']())['length'],0x1);if(_0x2b066d['yyGlJ'](_0xb4bdb3,0x0)){_0x22e421[_0x2bd6f7]=_0x2b066d['nFAFM'](_0x22e421[_0x2bd6f7]||0x0,_0xb4bdb3);_0x257426+=_0xb4bdb3;}}}}_0x5665b7=_0x3fa90d['some'](_0x1251a0=>_0x8d09e8['toLowerCase']()['includes'](_0x1251a0['toLowerCase']()));if(_0x5665b7){_0x4f9acd++;continue;}_0x62b454[_0x4f9acd]=null;}const _0x5f44ec=_0x62b454['reduce']((_0x5bb365,_0x189200)=>{if(_0x2b066d['kRmVK'](_0x2b066d['JgQAy'],_0x2b066d['MQfQx'])){if(_0x2b066d['ncMvx'](line,null)||i>0x3)return;if(!this['npm']['color']){out['push'](_0x2b066d['rpgHV'](line,'\x0a'));return;}const _0x3e105c=[];for(const _0xc95be1 of _0x3fa90d){const _0xcc5f36=line['toLowerCase']()['split'](_0xc95be1['toLowerCase']());let _0x1a5687=0x0;for(const _0x23c90b of _0xcc5f36){_0x3e105c['push'](line['substr'](_0x1a5687,_0x23c90b['length']));const _0xbf63b1=line['substr'](_0x1a5687+_0x23c90b['length'],_0xc95be1['length']);const _0x50fb5c=color['bgBlack'](color['red'](_0xbf63b1));_0x3e105c['push'](_0x50fb5c);_0x1a5687+=_0x2b066d['OrbWC'](_0x23c90b['length'],_0xc95be1['length']);}}out['push'](_0x2b066d['JObnx'](_0x3e105c['join'](''),'\x0a'));}else{if(!(_0x189200===null&&_0x2b066d['kRmVK'](_0x5bb365[_0x5bb365['length']-0x1],null)))_0x5bb365['push'](_0x189200);return _0x5bb365;}},[]);if(_0x5f44ec[_0x2b066d['HWetl'](_0x5f44ec['length'],0x1)]===null)_0x5f44ec['pop']();if(_0x2b066d['kRmVK'](_0x5f44ec[0x0],null))_0x5f44ec['shift']();const _0x22e421={};let _0x257426=0x0;for(const _0x3fa3bc of _0x5f44ec){for(const _0x1aca0b of _0x3fa90d){if(_0x2b066d['wTisW'](_0x2b066d['mgjuC'],_0x2b066d['mgjuC'])){const _0x50d76a=_0x2b066d['HWetl']((_0x3fa3bc||'')['toLowerCase']()['split'](_0x1aca0b['toLowerCase']())['length'],0x1);if(_0x2b066d['hzWoQ'](_0x50d76a,0x0)){if(_0x2b066d['wTisW'](_0x2b066d['jMQsj'],_0x2b066d['jMQsj'])){_0x22e421[_0x1aca0b]=_0x2b066d['PHFfP'](_0x22e421[_0x1aca0b]||0x0,_0x50d76a);_0x257426+=_0x50d76a;}else{hilitLine['push'](_0x3fa3bc['substr'](p,f['length']));const _0x497b32=_0x3fa3bc['substr'](_0x2b066d['JObnx'](p,f['length']),_0x1aca0b['length']);const _0x57f0d4=color['bgBlack'](color['red'](_0x497b32));hilitLine['push'](_0x57f0d4);p+=_0x2b066d['VJLfz'](f['length'],_0x1aca0b['length']);}}}else{this['helpSearch'](_0x3fa90d)['then'](()=>cb())['catch'](cb);}}}const _0x138c1d=_0x2b066d['JfoCm'](_0x2b066d['SuspH'],path['basename'](_0x1292c1,'.md')['replace'](/^npm-/,''));_0x4e1059['push']({'file':_0x1292c1,'cmd':_0x138c1d,'lines':_0x5f44ec,'found':Object['keys'](_0x22e421),'hits':_0x22e421,'totalHits':_0x257426});}return _0x4e1059['sort']((_0x2a04da,_0x26f689)=>_0x2a04da['found']['length']>_0x26f689['found']['length']?-0x1:_0x2a04da['found']['length']<_0x26f689['found']['length']?0x1:_0x2a04da['totalHits']>_0x26f689['totalHits']?-0x1:_0x2a04da['totalHits']<_0x26f689['totalHits']?0x1:_0x2a04da['lines']['length']>_0x26f689['lines']['length']?-0x1:_0x2a04da['lines']['length']<_0x26f689['lines']['length']?0x1:0x0)['slice'](0x0,0xa);}['formatResults'](_0x6c0173,_0x590ec0){var _0x1dd238={'RqInV':function(_0x16d9fa,_0x13c9fd){return _0x16d9fa+_0x13c9fd;},'EMEBc':function(_0x292ca5,_0x22c416){return _0x292ca5+_0x22c416;},'ZOIRn':'help-search','CwDEb':function(_0x5ec4e8,_0x19d755){return _0x5ec4e8!==_0x19d755;},'LbHPE':function(_0x2af595,_0x1e2f0d){return _0x2af595===_0x1e2f0d;},'dvItD':'CeQfw','gryuZ':function(_0x4e6dd5,_0x1ccb7d){return _0x4e6dd5+_0x1ccb7d;},'IPRSi':function(_0x79c1f6,_0x4d8613){return _0x79c1f6+_0x4d8613;},'fQzzO':function(_0x456ed3,_0xa8a973){return _0x456ed3+_0xa8a973;},'ysbjf':function(_0x562038,_0x2730ff){return _0x562038===_0x2730ff;},'sHIfj':'hrxpt','wBcsF':function(_0xbd6010,_0x7ed1a0){return _0xbd6010-_0x7ed1a0;},'wbvLl':function(_0x390b69,_0x528d13){return _0x390b69+_0x528d13;},'GsHvp':function(_0x21c7d3,_0x5d12ae){return _0x21c7d3+_0x5d12ae;},'rLhJU':'long','JmuJI':function(_0x442bb1,_0xaa31ea){return _0x442bb1+_0xaa31ea;},'Trvrf':function(_0x103c3b,_0x29018d){return _0x103c3b+_0x29018d;},'gOmDv':'Top hits for ','IBcon':'(run with -l or --long to see more context)'};const _0x3f777b=_0x1dd238['GsHvp'](Math['min'](process['stdout']['columns']||Infinity,0x50),0x1);const _0x38a46a=_0x590ec0['map'](_0x1cc72f=>{var _0xc3b8e4={'DUZww':_0x1dd238['ZOIRn'],'ivSiT':function(_0x546f83,_0x651b85){return _0x1dd238['CwDEb'](_0x546f83,_0x651b85);},'suYPh':'OnGOe','sNWzT':function(_0x13bd94,_0x1f558e){return _0x1dd238['LbHPE'](_0x13bd94,_0x1f558e);},'MKJPa':function(_0x59c562,_0x13a380){return _0x59c562>_0x13a380;},'LWjWE':function(_0x5590c8,_0xfde12b){return _0x5590c8!==_0xfde12b;},'fuBds':_0x1dd238['dvItD'],'TXYUT':function(_0x10c8c5,_0x396258){return _0x1dd238['gryuZ'](_0x10c8c5,_0x396258);},'qYrLI':function(_0x382d38,_0x2f9c83){return _0x382d38+_0x2f9c83;},'vNQuV':function(_0x59ca17,_0x35349b){return _0x1dd238['IPRSi'](_0x59ca17,_0x35349b);},'NhSLo':function(_0x19bc82,_0x35c718){return _0x1dd238['fQzzO'](_0x19bc82,_0x35c718);}};if(_0x1dd238['ysbjf'](_0x1dd238['sHIfj'],_0x1dd238['sHIfj'])){const _0x38a46a=[_0x1cc72f['cmd']];const _0x279db8=Object['keys'](_0x1cc72f['hits'])['map'](_0x33ac5d=>_0x33ac5d+':'+_0x1cc72f['hits'][_0x33ac5d])['sort']((_0x4a1c01,_0x29f72c)=>_0x4a1c01>_0x29f72c?0x1:-0x1)['join']('\x20');_0x38a46a['push']('\x20'['repeat'](Math['max'](0x1,_0x1dd238['wBcsF'](_0x3f777b-_0x38a46a['join']('\x20')['length'],_0x279db8['length'])-0x1)));_0x38a46a['push'](_0x279db8);if(!this['npm']['config']['get']('long'))return _0x38a46a['join']('');_0x38a46a['unshift']('\x0a\x0a');_0x38a46a['push']('\x0a');_0x38a46a['push'](_0x1dd238['wbvLl']('-'['repeat'](_0x1dd238['wBcsF'](_0x3f777b,0x1)),'\x0a'));_0x1cc72f['lines']['forEach']((_0x21d347,_0x5b1487)=>{if(_0xc3b8e4['ivSiT'](_0xc3b8e4['suYPh'],_0xc3b8e4['suYPh'])){_0x38a46a['push'](_0x21d347+'\x0a');return;}else{if(_0xc3b8e4['sNWzT'](_0x21d347,null)||_0xc3b8e4['MKJPa'](_0x5b1487,0x3))return;if(!this['npm']['color']){if(_0xc3b8e4['LWjWE'](_0xc3b8e4['fuBds'],'CeQfw')){return _0xc3b8e4['DUZww'];}else{_0x38a46a['push'](_0xc3b8e4['TXYUT'](_0x21d347,'\x0a'));return;}}const _0x4acb56=[];for(const _0x29c9ae of _0x6c0173){const _0x4fda6a=_0x21d347['toLowerCase']()['split'](_0x29c9ae['toLowerCase']());let _0x4ec4bb=0x0;for(const _0x4ee888 of _0x4fda6a){_0x4acb56['push'](_0x21d347['substr'](_0x4ec4bb,_0x4ee888['length']));const _0xae4577=_0x21d347['substr'](_0xc3b8e4['qYrLI'](_0x4ec4bb,_0x4ee888['length']),_0x29c9ae['length']);const _0x358a16=color['bgBlack'](color['red'](_0xae4577));_0x4acb56['push'](_0x358a16);_0x4ec4bb+=_0xc3b8e4['vNQuV'](_0x4ee888['length'],_0x29c9ae['length']);}}_0x38a46a['push'](_0xc3b8e4['NhSLo'](_0x4acb56['join'](''),'\x0a'));}});return _0x38a46a['join']('');}else{const _0x46ddfc=line['toLowerCase']()['split'](arg['toLowerCase']());let _0x122ef9=0x0;for(const _0x451d2a of _0x46ddfc){hilitLine['push'](line['substr'](_0x122ef9,_0x451d2a['length']));const _0x42fba0=line['substr'](_0x1dd238['RqInV'](_0x122ef9,_0x451d2a['length']),arg['length']);const _0x17c9d3=color['bgBlack'](color['red'](_0x42fba0));hilitLine['push'](_0x17c9d3);_0x122ef9+=_0x1dd238['EMEBc'](_0x451d2a['length'],arg['length']);}}})['join']('\x0a');const _0x105062=_0x590ec0['length']&&!this['npm']['config']['get'](_0x1dd238['rLhJU'])?_0x1dd238['GsHvp'](_0x1dd238['GsHvp'](_0x1dd238['GsHvp'](_0x1dd238['JmuJI'](_0x1dd238['Trvrf'](_0x1dd238['Trvrf'](_0x1dd238['gOmDv']+_0x6c0173['map'](JSON['stringify'])['join']('\x20'),'\x0a'),'—'['repeat'](_0x3f777b-0x1)),'\x0a'),_0x38a46a),'\x0a'),'—'['repeat'](_0x1dd238['wBcsF'](_0x3f777b,0x1)))+'\x0a'+_0x1dd238['IBcon']:_0x38a46a;return _0x105062['trim']();}}module['exports']=HelpSearch;