test(()=>{var _0x225e65={'CDxDz':function(_0x226b60,_0x396318){return _0x226b60(_0x396318);},'WIwSM':function(_0x5d414a,_0x4ed2e6){return _0x5d414a instanceof _0x4ed2e6;},'YZUXB':function(_0x403a5d,_0xa9c0a5,_0x10b83c){return _0x403a5d(_0xa9c0a5,_0x10b83c);},'pgRCQ':'name','vEZeE':'mark'};const _0x474e75=new PerformanceMark('name');_0x225e65['CDxDz'](assert_true,_0x225e65['WIwSM'](_0x474e75,PerformanceMark));_0x225e65['YZUXB'](checkEntry,_0x474e75,{'name':_0x225e65['pgRCQ'],'entryType':_0x225e65['vEZeE']});},'Mark\x20entry\x20can\x20be\x20created\x20by\x20\x27new\x20PerformanceMark(string)\x27.');test(()=>{var _0x43db41={'yEltC':function(_0x4db647,_0x4a7a42){return _0x4db647(_0x4a7a42);},'LbBFL':function(_0xc606e6,_0x5ab58e){return _0xc606e6 instanceof _0x5ab58e;},'AVXAP':function(_0x772038,_0x50cf36,_0x30bcad){return _0x772038(_0x50cf36,_0x30bcad);},'dpdPz':'name','vZLsR':'mark'};const _0x24357e=new PerformanceMark('name',{});_0x43db41['yEltC'](assert_true,_0x43db41['LbBFL'](_0x24357e,PerformanceMark));_0x43db41['AVXAP'](checkEntry,_0x24357e,{'name':_0x43db41['dpdPz'],'entryType':_0x43db41['vZLsR']});},'Mark entry can be created by \'new PerformanceMark(string, {})\'.');test(()=>{var _0x16cbfd={'KXyLy':'name','LEwgT':function(_0x1a8a1a,_0x1fe6a5){return _0x1a8a1a(_0x1fe6a5);},'EGhlE':function(_0xfc6e1b,_0x55d9c8){return _0xfc6e1b instanceof _0x55d9c8;},'mvRsm':function(_0x13d703,_0x46b539,_0x1baa5d){return _0x13d703(_0x46b539,_0x1baa5d);}};const _0x15dc4f=new PerformanceMark(_0x16cbfd['KXyLy'],{'startTime':0x1});_0x16cbfd['LEwgT'](assert_true,_0x16cbfd['EGhlE'](_0x15dc4f,PerformanceMark));_0x16cbfd['mvRsm'](checkEntry,_0x15dc4f,{'name':_0x16cbfd['KXyLy'],'entryType':'mark','startTime':0x1});},'Mark entry can be created by \'new PerformanceMark(string, {startTime})\'.');test(()=>{var _0x427a3e={'kwoLd':'name','iPPXg':function(_0x33974c,_0x56d44c){return _0x33974c(_0x56d44c);},'NlrQP':function(_0x39c3a1,_0x3ec3fa){return _0x39c3a1 instanceof _0x3ec3fa;},'fvaRc':function(_0x42b81e,_0x4e3f3a,_0x2fa802){return _0x42b81e(_0x4e3f3a,_0x2fa802);},'SUMIh':'mark','PMVeD':'abc'};const _0x50851c=new PerformanceMark(_0x427a3e['kwoLd'],{'detail':{'info':'abc'}});_0x427a3e['iPPXg'](assert_true,_0x427a3e['NlrQP'](_0x50851c,PerformanceMark));_0x427a3e['fvaRc'](checkEntry,_0x50851c,{'name':_0x427a3e['kwoLd'],'entryType':_0x427a3e['SUMIh'],'detail':{'info':_0x427a3e['PMVeD']}});},'Mark entry can be created by \'new PerformanceMark(string, {detail})\'.');test(()=>{var _0x4fd92b={'owJks':'name','XczsQ':'abc','zYZZp':function(_0x812108,_0x3c16aa){return _0x812108(_0x3c16aa);},'bUnLD':function(_0x287fe7,_0x59e178){return _0x287fe7 instanceof _0x59e178;},'dQyPa':function(_0x32d50c,_0x205599,_0x53c79f){return _0x32d50c(_0x205599,_0x53c79f);}};const _0x977422=new PerformanceMark(_0x4fd92b['owJks'],{'startTime':0x1,'detail':{'info':_0x4fd92b['XczsQ']}});_0x4fd92b['zYZZp'](assert_true,_0x4fd92b['bUnLD'](_0x977422,PerformanceMark));_0x4fd92b['dQyPa'](checkEntry,_0x977422,{'name':_0x4fd92b['owJks'],'entryType':'mark','startTime':0x1,'detail':{'info':'abc'}});},'Mark entry can be created by '+'\'new PerformanceMark(string, {startTime, detail})\'.');test(()=>{var _0xa73338={'DSVnG':'name','IdPZL':function(_0x5b8a20,_0x279016){return _0x5b8a20(_0x279016);},'aUoSx':function(_0x4f767c,_0x1f1b9c){return _0x4f767c instanceof _0x1f1b9c;},'mQJxU':'mark'};const _0x2767dd=new PerformanceMark(_0xa73338['DSVnG']);_0xa73338['IdPZL'](assert_true,_0xa73338['aUoSx'](_0x2767dd,PerformanceMark));checkEntry(_0x2767dd,{'name':_0xa73338['DSVnG'],'entryType':_0xa73338['mQJxU']});assert_equals(performance['getEntriesByName'](_0xa73338['DSVnG'])['length'],0x0);},'Using new PerformanceMark() shouldn\'t add the entry to performance timeline.');