const should=require('should');const sinon=require('sinon');const routing=require('../../../core/frontend/services/routing');const getRssUrl=require('../../../core/frontend/meta/rss-url');describe('getRssUrl',function(){var _0x130566={'zfpsM':'getRssUrl','vrvSS':'/rss/','mgGOi':function(_0x7fc887,_0x5bea54){return _0x7fc887(_0x5bea54);},'lJUOh':function(_0x2489ce,_0x50e1b8,_0x420998){return _0x2489ce(_0x50e1b8,_0x420998);},'RTCPy':'should return rss url','NjbCv':function(_0x3b89f0,_0x24acf5,_0x6d58aa){return _0x3b89f0(_0x24acf5,_0x6d58aa);}};beforeEach(function(){sinon['stub'](routing['registry'],_0x130566['zfpsM'])['returns'](_0x130566['vrvSS']);});_0x130566['mgGOi'](afterEach,function(){sinon['restore']();});_0x130566['lJUOh'](it,_0x130566['RTCPy'],function(){const _0x466136=getRssUrl({'secure':![]});should['equal'](_0x466136,'/rss/');});_0x130566['NjbCv'](it,'forwards absolute/secure flags',function(){const _0x42807e=getRssUrl({'secure':![]},!![]);routing['registry']['getRssUrl']['calledWith']({'secure':![],'absolute':!![]})['should']['be']['true']();});});