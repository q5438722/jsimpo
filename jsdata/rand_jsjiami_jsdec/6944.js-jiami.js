const BLOCKED=['ForStatement','WhileStatement'];export default(_0x51185d,_0x50c6c5)=>{var _0x56876d={'CAsjz':function(_0x1d824a,_0xe5df2a){return _0x1d824a!==_0xe5df2a;},'CCFuu':'cWfwj','QQFeW':function(_0x2fa277,_0x5b4a2f){return _0x2fa277===_0x5b4a2f;},'cCxOG':'dcarQ','aasCe':'leyXs','iVVDF':'EjwUb','erOuT':function(_0xc83ae1,_0x4161f5){return _0xc83ae1===_0x4161f5;},'cGTGV':'UnaryExpression','eGexP':'void','ZzBmE':function(_0x5f3f33,_0x4d22e3){return _0x5f3f33==_0x4d22e3;},'nUTKl':'OdVln','FWpCi':function(_0x2191f3,_0x4ba4b1){return _0x2191f3===_0x4ba4b1;},'TRNrL':function(_0x2eabe0,_0x26a779){return _0x2eabe0===_0x26a779;},'kougR':'undefined','humme':function(_0x26466a,_0xbc5eed){return _0x26466a(_0xbc5eed);},'RInrg':'single'};let {jscodeshift}=_0x50c6c5,_0x53763b=0x0;let _0x39747f=_0x56876d['humme'](jscodeshift,_0x51185d['source'])['find'](jscodeshift['VariableDeclaration'])['forEach'](_0x47a6f5);function _0x47a6f5(_0x56fa9f){var _0xb961c2={'WRNxP':function(_0x45c05c,_0x3c346d){return _0x56876d['CAsjz'](_0x45c05c,_0x3c346d);},'gDJPy':_0x56876d['CCFuu'],'BGsYh':function(_0x271857,_0x7e3b2c){return _0x271857===_0x7e3b2c;}};let _0x488499=_0x56fa9f,_0x1428ca=!![];while(_0x488499=_0x488499['parentPath']){if(_0x56876d['QQFeW'](_0x56876d['cCxOG'],_0x56876d['aasCe'])){return!![];}else{if(~BLOCKED['indexOf'](_0x488499['value']['type'])){_0x1428ca=![];break;}}}_0x56fa9f['value']['declarations']['filter'](_0x441984)['forEach'](_0x50b664=>{if(_0xb961c2['WRNxP']('wfXsp',_0xb961c2['gDJPy'])){if(_0xb961c2['BGsYh'](_0x1428ca,![])){console['log']('> Skipping removal of undefined init for "'+_0x50b664['id']['name']+'": within '+_0x488499['value']['type']);}else{_0x2b1bac(_0x50b664);}}else{console['log']('>\x20Skipping\x20removal\x20of\x20undefined\x20init\x20for\x20\x22'+_0x50b664['id']['name']+'": within '+_0x488499['value']['type']);}});}function _0x2b1bac(_0xaf83d9){if(_0x56876d['CAsjz']('EjwUb',_0x56876d['iVVDF'])){return!![];}else{_0xaf83d9['init']=null;_0x53763b++;}}function _0x441984(_0xc465c7){let {init}=_0xc465c7;if(init){if(_0x56876d['erOuT'](init['type'],_0x56876d['cGTGV'])&&_0x56876d['erOuT'](init['operator'],_0x56876d['eGexP'])&&_0x56876d['ZzBmE'](init['argument']['value'],0x0)){if(_0x56876d['nUTKl']!=='FJtRf'){return!![];}else{_0xc465c7['init']=null;_0x53763b++;}}if(_0x56876d['FWpCi'](init['type'],'Identifier')&&_0x56876d['TRNrL'](init['name'],_0x56876d['kougR'])){return!![];}}return![];}return _0x53763b?_0x39747f['toSource']({'quote':_0x56876d['RInrg']}):null;};