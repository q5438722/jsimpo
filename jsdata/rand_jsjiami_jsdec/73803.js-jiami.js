import _0x254b69 from'assert';import _0x3a7f23 from'lodash';import{args,toArgs}from'./utils.js';import _0x4d01e0 from'../pick.js';describe('pick',function(){var xVcLAO={'KovqM':function(callee,param1,param2,param3){return callee(param1,param2,param3);},'YtiIz':function(callee,param1,param2){return callee(param1,param2);},'SsGRB':'a.b','TDLTy':function(x,y){return x===y;},'tQHZj':'ihchy','iHzWW':function(x,y){return x!==y;},'EJYTM':'mnITa','FfmYa':'valueOf','LASnx':'slice','fvjkA':'xDZYy','LqTqM':'biqtD','PYtev':function(callee,param1){return callee(param1);},'sBUZo':function(callee,param1,param2){return callee(param1,param2);},'KGeot':'should\x20coerce\x20`paths`\x20to\x20strings','gfYvC':'should return an empty object when `object` is nullish','HOQye':function(callee,param1,param2){return callee(param1,param2);},'ATwch':'should work with a primitive `object`'};var args=xVcLAO['PYtev'](toArgs,['a','c']),object={'a':0x1,'b':0x2,'c':0x3,'d':0x4},nested={'a':0x1,'b':{'c':0x2,'d':0x3}};xVcLAO['YtiIz'](it,'should flatten `paths`',function(){_0x254b69['deepStrictEqual'](_0x4d01e0(object,'a','c'),{'a':0x1,'c':0x3});_0x254b69['deepStrictEqual'](xVcLAO['KovqM'](_0x4d01e0,object,['a','d'],'c'),{'a':0x1,'c':0x3,'d':0x4});});xVcLAO['sBUZo'](it,'should support deep paths',function(){_0x254b69['deepStrictEqual'](_0x4d01e0(nested,'b.c'),{'b':{'c':0x2}});});it('should\x20support\x20path\x20arrays',function(){var object={'a.b':0x1,'a':{'b':0x2}},actual=xVcLAO['YtiIz'](_0x4d01e0,object,[[xVcLAO['SsGRB']]]);_0x254b69['deepStrictEqual'](actual,{'a.b':0x1});});xVcLAO['sBUZo'](it,'should pick a key over a path',function(){var object={'a.b':0x1,'a':{'b':0x2}};_0x3a7f23['each']([xVcLAO['SsGRB'],[xVcLAO['SsGRB']]],function(path){_0x254b69['deepStrictEqual'](_0x4d01e0(object,path),{'a.b':0x1});});});it(xVcLAO['KGeot'],function(){var jzpldB={'hpxWP':function(callee,param1,param2){return callee(param1,param2);}};if(xVcLAO['TDLTy'](xVcLAO['tQHZj'],xVcLAO['tQHZj'])){_0x254b69['deepStrictEqual'](xVcLAO['YtiIz'](_0x4d01e0,{'0':'a','1':'b'},0x0),{'0':'a'});}else{_0x254b69['deepStrictEqual'](jzpldB['hpxWP'](_0x4d01e0,nested,'b.c'),{'b':{'c':0x2}});}});xVcLAO['sBUZo'](it,xVcLAO['gfYvC'],function(){_0x3a7f23['each']([null,undefined],function(value){var yLWAIO={'TeFMy':function(callee,param1,param2){return callee(param1,param2);}};if(xVcLAO['iHzWW'](xVcLAO['EJYTM'],'mnITa')){var _0x2afd1b={'a.b':0x1,'a':{'b':0x2}},_0x4133fa=yLWAIO['TeFMy'](_0x4d01e0,_0x2afd1b,[['a.b']]);_0x254b69['deepStrictEqual'](_0x4133fa,{'a.b':0x1});}else{_0x254b69['deepStrictEqual'](_0x4d01e0(value,xVcLAO['FfmYa']),{});}});});xVcLAO['HOQye'](it,xVcLAO['ATwch'],function(){_0x254b69['deepStrictEqual'](_0x4d01e0('',xVcLAO['LASnx']),{'slice':''['slice']});});it('should work with `arguments` object `paths`',function(){var OFdKJp={'FIBOH':function(callee,param1,param2){return callee(param1,param2);},'Octqe':xVcLAO['FfmYa']};if(xVcLAO['fvjkA']===xVcLAO['LqTqM']){_0x3a7f23['each']([null,undefined],function(_0xa86cdf){_0x254b69['deepStrictEqual'](OFdKJp['FIBOH'](_0x4d01e0,_0xa86cdf,OFdKJp['Octqe']),{});});}else{_0x254b69['deepStrictEqual'](_0x4d01e0(object,args),{'a':0x1,'c':0x3});}});});