import _0x2b1f1a from'path';import{EOL}from'os';import{expect}from'chai';import _0x6ddcc8 from'jscodeshift';import _0x293a78 from'./theme-spacing-api';import _0x208c9d from'../util/readFile';function trim(str){return str['replace'](/^\s+|\s+$/,'')['replace'](/\r*\n/g,EOL);}function read(fileName){var ySiFcU={'ZOjtu':function(callee,param1){return callee(param1);}};return ySiFcU['ZOjtu'](_0x208c9d,_0x2b1f1a['join'](__dirname,fileName));}describe('@material-ui/codemod',()=>{var RVHusf={'zBYOu':function(callee,param1,param2){return callee(param1,param2);},'DAHWJ':function(callee,param1){return callee(param1);},'CVEml':'./theme-spacing-api.test/expected.js','Jhoew':'The transformed version should be correct','rvEHG':'./theme-spacing-api.test/actual_destructured.js','PaAsR':'./theme-spacing-api.test/expected_destructured.js','NgtfO':'update theme spacing API for destructured','WRXvG':function(x,y){return x===y;},'gZotJ':function(callee,param1,param2){return callee(param1,param2);},'RgBGR':'./theme-spacing-api.test/actual.js','BwkaS':function(callee,param1){return callee(param1);},'dJCPl':function(callee,param1){return callee(param1);},'SBBwS':'theme-spacing','arJHa':'v4.0.0'};RVHusf['gZotJ'](describe,RVHusf['arJHa'],()=>{var cyjwKS={'uJnaK':function(callee,param1,param2){return RVHusf['zBYOu'](callee,param1,param2);},'CKyWO':function(callee,param1){return RVHusf['DAHWJ'](callee,param1);},'RaYnk':RVHusf['CVEml'],'jdtZM':RVHusf['Jhoew'],'MyrzH':RVHusf['rvEHG'],'MYUEH':RVHusf['PaAsR'],'qEdNW':RVHusf['NgtfO'],'KHLjp':function(x,y){return RVHusf['WRXvG'](x,y);},'wGhxc':'wYtRO','GhoHj':function(callee,param1,param2){return RVHusf['gZotJ'](callee,param1,param2);},'bPPnV':RVHusf['RgBGR'],'jMMtW':function(callee,param1){return RVHusf['DAHWJ'](callee,param1);},'fnwij':function(callee,param1){return RVHusf['BwkaS'](callee,param1);},'aapqz':function(callee,param1){return RVHusf['dJCPl'](callee,param1);},'FbQVS':'update theme spacing API'};RVHusf['gZotJ'](describe,RVHusf['SBBwS'],()=>{it(cyjwKS['FbQVS'],()=>{var yCZBjW={'RyADy':function(callee,param1,param2){return cyjwKS['uJnaK'](callee,param1,param2);},'iiuJP':function(callee,param1){return cyjwKS['CKyWO'](callee,param1);},'lQAia':'./theme-spacing-api.test/actual.js','ZtaPT':function(callee,param1){return callee(param1);},'tbTjR':cyjwKS['RaYnk'],'VommO':cyjwKS['jdtZM'],'BMIiL':function(callee,param1,param2){return callee(param1,param2);},'rMSOE':cyjwKS['MyrzH'],'AVpRU':function(callee,param1){return callee(param1);},'BYrdU':cyjwKS['MYUEH'],'ZlCFA':function(callee,param1){return cyjwKS['CKyWO'](callee,param1);},'ppKVN':function(callee,param1,param2){return cyjwKS['uJnaK'](callee,param1,param2);},'JuZBt':cyjwKS['qEdNW']};if(cyjwKS['KHLjp'](cyjwKS['wGhxc'],'wYtRO')){const actual=cyjwKS['GhoHj'](_0x293a78,{'source':cyjwKS['CKyWO'](read,cyjwKS['bPPnV'])},{'jscodeshift':_0x6ddcc8});const expected=cyjwKS['jMMtW'](read,'./theme-spacing-api.test/expected.js');cyjwKS['jMMtW'](expect,trim(actual))['to']['equal'](cyjwKS['jMMtW'](trim,expected),'The transformed version should be correct');}else{yCZBjW['BMIiL'](it,'update theme spacing API',()=>{const _0xf7eec3=yCZBjW['RyADy'](_0x293a78,{'source':yCZBjW['iiuJP'](read,yCZBjW['lQAia'])},{'jscodeshift':_0x6ddcc8});const _0x310cd4=yCZBjW['ZtaPT'](read,yCZBjW['tbTjR']);expect(yCZBjW['ZtaPT'](trim,_0xf7eec3))['to']['equal'](yCZBjW['ZtaPT'](trim,_0x310cd4),yCZBjW['VommO']);});yCZBjW['ppKVN'](it,yCZBjW['JuZBt'],()=>{const _0x356231=yCZBjW['BMIiL'](_0x293a78,{'source':yCZBjW['ZtaPT'](read,yCZBjW['rMSOE'])},{'jscodeshift':_0x6ddcc8});const _0x106b33=yCZBjW['AVpRU'](read,yCZBjW['BYrdU']);yCZBjW['ZlCFA'](expect,trim(_0x356231))['to']['equal'](yCZBjW['ZlCFA'](trim,_0x106b33),yCZBjW['VommO']);});}});cyjwKS['GhoHj'](it,cyjwKS['qEdNW'],()=>{const actual=cyjwKS['GhoHj'](_0x293a78,{'source':cyjwKS['fnwij'](read,cyjwKS['MyrzH'])},{'jscodeshift':_0x6ddcc8});const expected=cyjwKS['fnwij'](read,'./theme-spacing-api.test/expected_destructured.js');cyjwKS['aapqz'](expect,cyjwKS['aapqz'](trim,actual))['to']['equal'](cyjwKS['aapqz'](trim,expected),cyjwKS['jdtZM']);});});});});