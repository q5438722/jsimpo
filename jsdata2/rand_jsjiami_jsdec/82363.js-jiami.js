const should=require('should');const sinon=require('sinon');const urlUtils=require('../../../core/shared/url-utils');const urlService=require('../../../core/frontend/services/url');const getUrl=require('../../../core/frontend/meta/url');const testUtils=require('../../utils');describe('getUrl',function(){var _0x141354={'rRZkg':'getUrlByResourceId','IJXmc':'About\x20Me','ReqcZ':function(_0x628bf7,_0x37ad88,_0x4c8fce){return _0x628bf7(_0x37ad88,_0x4c8fce);},'ygtTj':function(_0x2fa5d9,_0x2987dc){return _0x2fa5d9===_0x2987dc;},'nFazc':'swMtw','CwJum':'glZgH','bWLMx':'post\x20url','UxWZk':'draft','DeTjn':'/404/','zwJER':function(_0x1619b9,_0x59449c){return _0x1619b9+_0x59449c;},'LHfbb':'/p/','ppaLW':'relative','xMzHr':function(_0x180eca,_0x1a3124){return _0x180eca(_0x1a3124);},'rgyIx':function(_0x8f4546,_0x6ea063){return _0x8f4546+_0x6ea063;},'bVcvA':'absolute','tTCvy':function(_0xc5ec6f,_0x18c449,_0x5eb5e1){return _0xc5ec6f(_0x18c449,_0x5eb5e1);},'ZFkHs':function(_0x5de2ff,_0x2256f1){return _0x5de2ff+_0x2256f1;},'hooYI':function(_0x16cc36,_0x23fed3){return _0x16cc36+_0x23fed3;},'XoZFi':function(_0x265167,_0xb2f249){return _0x265167+_0xb2f249;},'vbFIb':function(_0x3c8e16,_0x2e796e){return _0x3c8e16+_0x2e796e;},'ciSJI':function(_0x5ad9cc,_0x1e5768,_0x14ac8b){return _0x5ad9cc(_0x1e5768,_0x14ac8b);},'XKBqC':'absolute secure','DIPtA':function(_0x4f5df6,_0x8cabe5,_0x21b374){return _0x4f5df6(_0x8cabe5,_0x21b374);},'gOkxa':function(_0x208ccb,_0x497ac1){return _0x208ccb+_0x497ac1;},'wJJNq':function(_0xd860d9,_0x358abe){return _0xd860d9!==_0x358abe;},'VKDNI':'gUDkY','hdKeO':'not absolute, not secure','XPQri':'absolute, not secure','KEHkS':'absolute, secure','dyFkC':'absolute/*/amp/','LzclV':function(_0x4b0b99,_0x2df9a3,_0x15c243){return _0x4b0b99(_0x2df9a3,_0x15c243);},'UKoPW':'absolute/*/','JzmAA':'tOHgz','aHkGC':'absolute post url','SKbsy':'/*/amp/','ZKsYP':'secure tag url','cxfWe':function(_0x5542a9,_0x4b1c23){return _0x5542a9(_0x4b1c23);},'olRmu':'YbtnN','lyOme':'absolute secure author url','bHQAJ':'/about-me/','gVGEH':'about-me','hiSZj':'nav','KvMzp':'nav url','CTWVb':function(_0x5e3412,_0x5b7379){return _0x5e3412(_0x5b7379);},'BFnaW':'absolute\x20nav\x20url','hfUqn':function(_0x37761b,_0x2e11ba){return _0x37761b(_0x2e11ba);},'rTTlk':function(_0x53f6bd,_0x52f375){return _0x53f6bd(_0x52f375);},'aeWgh':'should return url for a post','FjIKt':'preview url: drafts/scheduled posts','RWovZ':'should return absolute url for a post','gueAO':function(_0x1d7720,_0x25841a,_0x35cbc3){return _0x1d7720(_0x25841a,_0x35cbc3);},'iqgyD':'should return url for a tag','hFRmp':'should\x20return\x20secure\x20url\x20for\x20a\x20tag','PJZai':'should return url for a author','CXjlp':function(_0x4af2a3,_0x2a8498,_0xa46fa7){return _0x4af2a3(_0x2a8498,_0xa46fa7);},'ryKkC':'should return secure absolute url for a author','DLxiH':'should return url for a nav','OIBZH':function(_0x10f551,_0x71e021,_0x29e96b){return _0x10f551(_0x71e021,_0x29e96b);},'yFeTH':'should return absolute url for a nav','Xmeac':'should return `relativeUrl` and remove /amp/ in url'};_0x141354['hfUqn'](beforeEach,function(){sinon['stub'](urlService,_0x141354['rRZkg']);sinon['stub'](urlUtils,'urlFor');});_0x141354['rTTlk'](afterEach,function(){var _0x47cd8a={'DAMsz':_0x141354['IJXmc'],'PctRY':'/about-me/','EgfnM':function(_0x4d4901,_0x120bf1,_0x1ecbf3){return _0x141354['ReqcZ'](_0x4d4901,_0x120bf1,_0x1ecbf3);}};if(_0x141354['ygtTj'](_0x141354['nFazc'],_0x141354['CwJum'])){const _0x5c1a5e={'label':_0x47cd8a['DAMsz'],'url':_0x47cd8a['PctRY'],'slug':'about-me','current':!![]};urlUtils['urlFor']['withArgs']('nav',{'nav':_0x5c1a5e,'secure':_0x5c1a5e['secure']},!![])['returns']('absolute nav url');_0x47cd8a['EgfnM'](getUrl,_0x5c1a5e,!![])['should']['equal']('absolute\x20nav\x20url');}else{sinon['restore']();}});it(_0x141354['aeWgh'],function(){const _0x2a503c=testUtils['DataGenerator']['forKnex']['createPost']();urlService['getUrlByResourceId']['withArgs'](_0x2a503c['id'],{'absolute':undefined,'secure':undefined,'withSubdirectory':!![]})['returns'](_0x141354['bWLMx']);getUrl(_0x2a503c)['should']['eql'](_0x141354['bWLMx']);});describe(_0x141354['FjIKt'],function(){var _0x4627e5={'ziMAf':'/404/','OiPPB':_0x141354['LHfbb'],'LaqPx':_0x141354['XKBqC'],'LpKsr':function(_0x4f932e,_0x55f52b,_0x45a741){return _0x141354['DIPtA'](_0x4f932e,_0x55f52b,_0x45a741);},'xnDFO':function(_0x59ccdc,_0x53ab2e){return _0x141354['gOkxa'](_0x59ccdc,_0x53ab2e);}};if(_0x141354['wJJNq'](_0x141354['VKDNI'],'nSdbX')){_0x141354['DIPtA'](it,_0x141354['hdKeO'],function(){const _0x4129db=testUtils['DataGenerator']['forKnex']['createPost']({'status':_0x141354['UxWZk']});urlService['getUrlByResourceId']['withArgs'](_0x4129db['id'])['returns'](_0x141354['DeTjn']);urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['zwJER'](_0x141354['zwJER'](_0x141354['LHfbb'],_0x4129db['uuid']),'/'),'secure':undefined},null,undefined)['returns'](_0x141354['ppaLW']);let _0x578371=_0x141354['xMzHr'](getUrl,_0x4129db);urlService['getUrlByResourceId']['calledOnce']['should']['be']['true']();urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['rgyIx'](_0x141354['LHfbb'],_0x4129db['uuid'])+'/','secure':undefined},null,undefined)['calledOnce']['should']['be']['true']();_0x578371['should']['eql']('relative');});_0x141354['DIPtA'](it,_0x141354['XPQri'],function(){const _0x18f876=testUtils['DataGenerator']['forKnex']['createPost']({'status':_0x141354['UxWZk']});urlService['getUrlByResourceId']['withArgs'](_0x18f876['id'])['returns'](_0x141354['DeTjn']);urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['rgyIx'](_0x141354['rgyIx'](_0x141354['LHfbb'],_0x18f876['uuid']),'/'),'secure':undefined},null,!![])['returns'](_0x141354['bVcvA']);let _0x39fe22=_0x141354['tTCvy'](getUrl,_0x18f876,!![]);urlService['getUrlByResourceId']['calledOnce']['should']['be']['true']();urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['ZFkHs'](_0x141354['hooYI'](_0x141354['LHfbb'],_0x18f876['uuid']),'/'),'secure':undefined},null,!![])['calledOnce']['should']['be']['true']();_0x39fe22['should']['eql'](_0x141354['bVcvA']);});_0x141354['DIPtA'](it,_0x141354['KEHkS'],function(){const _0x4a0b80=testUtils['DataGenerator']['forKnex']['createPost']({'status':'draft'});_0x4a0b80['secure']=!![];urlService['getUrlByResourceId']['withArgs'](_0x4a0b80['id'])['returns'](_0x4627e5['ziMAf']);urlUtils['urlFor']['withArgs']({'relativeUrl':_0x4627e5['OiPPB']+_0x4a0b80['uuid']+'/','secure':!![]},null,!![])['returns'](_0x4627e5['LaqPx']);let _0x309fe6=_0x4627e5['LpKsr'](getUrl,_0x4a0b80,!![]);urlService['getUrlByResourceId']['calledOnce']['should']['be']['true']();urlUtils['urlFor']['withArgs']({'relativeUrl':_0x4627e5['xnDFO'](_0x4627e5['OiPPB'],_0x4a0b80['uuid'])+'/','secure':!![]},null,!![])['calledOnce']['should']['be']['true']();_0x309fe6['should']['eql']('absolute secure');});}else{const _0x50af91=testUtils['DataGenerator']['forKnex']['createPost']({'status':_0x141354['UxWZk']});urlService['getUrlByResourceId']['withArgs'](_0x50af91['id'])['returns'](_0x141354['DeTjn']);urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['XoZFi'](_0x141354['vbFIb'](_0x141354['LHfbb'],_0x50af91['uuid']),'/'),'secure':undefined},null,!![])['returns'](_0x141354['bVcvA']);let _0x1d5caa=_0x141354['ciSJI'](getUrl,_0x50af91,!![]);urlService['getUrlByResourceId']['calledOnce']['should']['be']['true']();urlUtils['urlFor']['withArgs']({'relativeUrl':_0x141354['LHfbb']+_0x50af91['uuid']+'/','secure':undefined},null,!![])['calledOnce']['should']['be']['true']();_0x1d5caa['should']['eql'](_0x141354['bVcvA']);}});it(_0x141354['RWovZ'],function(){var _0x38aa09={'dXxsX':'/*/amp/','XFWJt':_0x141354['dyFkC'],'gVNUz':function(_0x4bb20a,_0x5194b6,_0x3f3e49){return _0x141354['LzclV'](_0x4bb20a,_0x5194b6,_0x3f3e49);},'CGvmA':_0x141354['UKoPW']};if(_0x141354['JzmAA']!==_0x141354['JzmAA']){const _0x5d015b={'relativeUrl':_0x38aa09['dXxsX']};urlUtils['urlFor']['withArgs'](_0x5d015b,{},!![])['returns'](_0x38aa09['XFWJt']);_0x38aa09['gVNUz'](getUrl,_0x5d015b,!![])['should']['eql'](_0x38aa09['CGvmA']);urlService['getUrlByResourceId']['called']['should']['be']['false']();}else{const _0x14e578=testUtils['DataGenerator']['forKnex']['createPost']();urlService['getUrlByResourceId']['withArgs'](_0x14e578['id'],{'absolute':!![],'secure':undefined,'withSubdirectory':!![]})['returns'](_0x141354['aHkGC']);getUrl(_0x14e578,!![])['should']['eql'](_0x141354['aHkGC']);}});_0x141354['gueAO'](it,'should\x20return\x20absolute\x20url\x20for\x20a\x20post\x20and\x20remove\x20/amp/\x20in\x20url',function(){const _0x385c92={'relativeUrl':_0x141354['SKbsy']};urlUtils['urlFor']['withArgs'](_0x385c92,{},!![])['returns']('absolute/*/amp/');getUrl(_0x385c92,!![])['should']['eql']('absolute/*/');urlService['getUrlByResourceId']['called']['should']['be']['false']();});_0x141354['gueAO'](it,_0x141354['iqgyD'],function(){const _0x289155=testUtils['DataGenerator']['forKnex']['createTag']();_0x289155['parent']=null;urlService['getUrlByResourceId']['withArgs'](_0x289155['id'],{'absolute':undefined,'secure':undefined,'withSubdirectory':!![]})['returns']('tag url');_0x141354['xMzHr'](getUrl,_0x289155)['should']['eql']('tag url');});_0x141354['gueAO'](it,_0x141354['hFRmp'],function(){const _0x4dce92=testUtils['DataGenerator']['forKnex']['createTag']();_0x4dce92['parent']=null;_0x4dce92['secure']=!![];urlService['getUrlByResourceId']['withArgs'](_0x4dce92['id'],{'absolute':undefined,'secure':!![],'withSubdirectory':!![]})['returns']('secure\x20tag\x20url');_0x141354['xMzHr'](getUrl,_0x4dce92)['should']['eql'](_0x141354['ZKsYP']);});_0x141354['gueAO'](it,_0x141354['PJZai'],function(){const _0x120899=testUtils['DataGenerator']['forKnex']['createUser']();urlService['getUrlByResourceId']['withArgs'](_0x120899['id'],{'absolute':undefined,'secure':undefined,'withSubdirectory':!![]})['returns']('author\x20url');_0x141354['cxfWe'](getUrl,_0x120899)['should']['eql']('author url');});_0x141354['CXjlp'](it,_0x141354['ryKkC'],function(){var _0x5b1abf={'dFwkX':function(_0x168dca,_0x498b6e){return _0x141354['gOkxa'](_0x168dca,_0x498b6e);},'nIRLD':'absolute\x20secure','EiAUm':function(_0x2f1faa,_0x48e216,_0x4276e6){return _0x2f1faa(_0x48e216,_0x4276e6);},'RGBKV':_0x141354['LHfbb']};if(_0x141354['olRmu']===_0x141354['olRmu']){const _0x38f66c=testUtils['DataGenerator']['forKnex']['createUser']();_0x38f66c['secure']=!![];urlService['getUrlByResourceId']['withArgs'](_0x38f66c['id'],{'absolute':!![],'secure':!![],'withSubdirectory':!![]})['returns'](_0x141354['lyOme']);_0x141354['LzclV'](getUrl,_0x38f66c,!![])['should']['eql'](_0x141354['lyOme']);}else{const _0x531dc1=testUtils['DataGenerator']['forKnex']['createPost']({'status':'draft'});_0x531dc1['secure']=!![];urlService['getUrlByResourceId']['withArgs'](_0x531dc1['id'])['returns']('/404/');urlUtils['urlFor']['withArgs']({'relativeUrl':_0x5b1abf['dFwkX']('/p/'+_0x531dc1['uuid'],'/'),'secure':!![]},null,!![])['returns'](_0x5b1abf['nIRLD']);let _0x48db29=_0x5b1abf['EiAUm'](getUrl,_0x531dc1,!![]);urlService['getUrlByResourceId']['calledOnce']['should']['be']['true']();urlUtils['urlFor']['withArgs']({'relativeUrl':_0x5b1abf['dFwkX'](_0x5b1abf['RGBKV']+_0x531dc1['uuid'],'/'),'secure':!![]},null,!![])['calledOnce']['should']['be']['true']();_0x48db29['should']['eql'](_0x5b1abf['nIRLD']);}});it(_0x141354['DLxiH'],function(){const _0x84b2c0={'label':_0x141354['IJXmc'],'url':_0x141354['bHQAJ'],'slug':_0x141354['gVGEH'],'current':!![]};urlUtils['urlFor']['withArgs'](_0x141354['hiSZj'],{'nav':_0x84b2c0,'secure':_0x84b2c0['secure']},undefined)['returns'](_0x141354['KvMzp']);_0x141354['CTWVb'](getUrl,_0x84b2c0)['should']['equal'](_0x141354['KvMzp']);});_0x141354['OIBZH'](it,_0x141354['yFeTH'],function(){const _0x245445={'label':'About Me','url':_0x141354['bHQAJ'],'slug':_0x141354['gVGEH'],'current':!![]};urlUtils['urlFor']['withArgs']('nav',{'nav':_0x245445,'secure':_0x245445['secure']},!![])['returns'](_0x141354['BFnaW']);getUrl(_0x245445,!![])['should']['equal'](_0x141354['BFnaW']);});it(_0x141354['Xmeac'],function(){const _0x279424={'relativeUrl':_0x141354['SKbsy']};urlUtils['urlFor']['withArgs'](_0x279424,{},undefined)['returns'](_0x279424['relativeUrl']);getUrl(_0x279424)['should']['eql']('/*/');urlService['getUrlByResourceId']['called']['should']['be']['false']();});});