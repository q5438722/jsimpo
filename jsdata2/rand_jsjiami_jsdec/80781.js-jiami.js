var express=require('../'),request=require('supertest'),cookie=require('cookie'),cookieParser=require('cookie-parser');var merge=require('utils-merge');describe('res',function(){var _0xb52bb4={'ZhfWm':'user','gvKvz':'tobi','wNLaz':'Set-Cookie','XJcyI':function(_0x88d3e2,_0x5e1f87){return _0x88d3e2===_0x5e1f87;},'QUtUB':'pGdGO','uvQbH':'RTwxr','UwXGw':function(_0x5076d7,_0xa6b8de,_0x102bbe){return _0x5076d7(_0xa6b8de,_0x102bbe);},'ScgZX':'name','zXoeK':function(_0x34e892,_0x40c140){return _0x34e892(_0x40c140);},'EsDEZ':'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ;\x20Path=/','KQqoE':function(_0x15b943,_0x20f413){return _0x15b943!==_0x20f413;},'TdloF':'knjTL','cpyfD':function(_0xdf0da0){return _0xdf0da0();},'UDGXp':'name=tobi;\x20Path=/','YvawF':'age','EtVgo':'gender=%3F; Path=/','bTTEq':'KPVkV','AiaKi':'VwleW','zGlLn':'APeIU','DmEUn':'set-cookie','srKeA':function(_0x267677){return _0x267677();},'lRuIn':function(_0x233e52,_0x4cdf6d){return _0x233e52(_0x4cdf6d);},'lhZoE':function(_0x5783a4,_0x3e0b4e,_0x33d4ab){return _0x5783a4(_0x3e0b4e,_0x33d4ab);},'NFuuA':'should set a cookie','mYlWJ':'should allow multiple calls','WSnLR':function(_0x498a63){return _0x498a63();},'AxEEV':'Ibnzt','xKNky':'3|0|2|1|5|4','lKYyo':'bzbPX','orAMd':'should set relative expires','oKjSn':function(_0x25174f,_0x2d9049,_0x56b247){return _0x25174f(_0x2d9049,_0x56b247);},'bvGmf':'should set max-age','GoWsd':function(_0x1dd680,_0x3e3710,_0x3398ff){return _0x1dd680(_0x3e3710,_0x3398ff);},'PZvef':'should not mutate the options object','hBdSZ':'olSvP','hTEcW':function(_0x48249d,_0x19abd9){return _0x48249d===_0x19abd9;},'fxnjS':'nQXTv','VVURJ':function(_0x1c0536,_0xaf5b1,_0x57d001){return _0x1c0536(_0xaf5b1,_0x57d001);},'aNZzZ':'should generate a signed JSON cookie','LYrff':'oOliK','dYEVJ':function(_0x2dbc07){return _0x2dbc07();},'Eazfd':'should generate a JSON cookie','lSjpt':'QZJcA','PmkYY':'gHWea','UHqbK':'s:j:{\x22name\x22:\x22tobi\x22}','XWOQm':function(_0x5c8de8){return _0x5c8de8();},'lUasl':function(_0x596e80,_0x5de5a6){return _0x596e80(_0x5de5a6);},'NEKxc':function(_0x4b0f49,_0x14829f){return _0x4b0f49(_0x14829f);},'Oyfdx':function(_0x4e27b3,_0x4449c8){return _0x4e27b3(_0x4449c8);},'bCLcn':function(_0x324b72,_0x22e855,_0x83a06b){return _0x324b72(_0x22e855,_0x83a06b);},'MqeJm':'should\x20set\x20a\x20signed\x20cookie','hukAm':function(_0x2ba688,_0xf9ec3){return _0x2ba688(_0xf9ec3);},'ZGNmt':'olJmz','mDiEB':'uvJRm','QaGvd':function(_0x30411c,_0x5b2f9b,_0x202c68){return _0x30411c(_0x5b2f9b,_0x202c68);},'WWaOh':function(_0x2047be,_0x340c8b,_0x42a1dc){return _0x2047be(_0x340c8b,_0x42a1dc);},'IqGTr':'signed','TeUdn':function(_0x30abfe,_0x37470d,_0x1585e3){return _0x30abfe(_0x37470d,_0x1585e3);},'VeZQH':'.cookie(name,\x20object)','UwFCS':'.cookie(name, string)','JtGgb':function(_0x2b7a8b,_0x325b0e,_0x427c62){return _0x2b7a8b(_0x325b0e,_0x427c62);}};_0xb52bb4['TeUdn'](describe,_0xb52bb4['VeZQH'],function(){var _0x40269b={'eHMWe':_0xb52bb4['ZhfWm'],'FOquE':_0xb52bb4['gvKvz'],'WIQDX':function(_0x2c67cd,_0x47970a){return _0x2c67cd(_0x47970a);},'VqaFD':_0xb52bb4['wNLaz'],'Yhzwq':function(_0x406261){return _0x406261();}};if(_0xb52bb4['XJcyI'](_0xb52bb4['QUtUB'],_0xb52bb4['uvQbH'])){var _0x138b8d=express();_0x138b8d['use'](function(_0x532cf3,_0x4d8e59){_0x4d8e59['cookie'](_0x40269b['eHMWe'],{'name':_0x40269b['FOquE']})['end']();});_0x40269b['WIQDX'](request,_0x138b8d)['get']('/')['expect'](_0x40269b['VqaFD'],'user=j%3A%7B%22name%22%3A%22tobi%22%7D; Path=/')['expect'](0xc8,done);}else{_0xb52bb4['UwXGw'](it,'should generate a JSON cookie',function(_0x2ad89c){var _0x1530fb={'NZWxj':'tobi'};var _0x159f92=_0x40269b['Yhzwq'](express);_0x159f92['use'](function(_0x51b499,_0x361fc1){_0x361fc1['cookie']('user',{'name':_0x1530fb['NZWxj']})['end']();});request(_0x159f92)['get']('/')['expect'](_0x40269b['VqaFD'],'user=j%3A%7B%22name%22%3A%22tobi%22%7D;\x20Path=/')['expect'](0xc8,_0x2ad89c);});}});describe(_0xb52bb4['UwFCS'],function(){var _0x132c0a={'LgoKv':'name','hvENe':'tobi'};_0xb52bb4['lhZoE'](it,_0xb52bb4['NFuuA'],function(_0x4f1b06){var _0x55fd73={'aCdbB':_0xb52bb4['ScgZX'],'Hbuqv':'tobi','sukpU':function(_0x1a50ef,_0x1e7ab6){return _0xb52bb4['zXoeK'](_0x1a50ef,_0x1e7ab6);},'FwSYG':'foo bar baz','SxptW':_0xb52bb4['wNLaz'],'umnqo':_0xb52bb4['EsDEZ']};if(_0xb52bb4['KQqoE']('knjTL',_0xb52bb4['TdloF'])){var _0x5b76aa={'bKipi':_0x55fd73['aCdbB'],'QvFhC':_0x55fd73['Hbuqv']};var _0x107cfd=express();_0x107cfd['use'](_0x55fd73['sukpU'](cookieParser,_0x55fd73['FwSYG']));_0x107cfd['use'](function(_0x3491c2,_0x226899){_0x226899['cookie'](_0x5b76aa['bKipi'],_0x5b76aa['QvFhC'],{'signed':!![]})['end']();});request(_0x107cfd)['get']('/')['expect'](_0x55fd73['SxptW'],_0x55fd73['umnqo'])['expect'](0xc8,_0x4f1b06);}else{var _0x247bc0=_0xb52bb4['cpyfD'](express);_0x247bc0['use'](function(_0x1d74c6,_0x1b81a7){_0x1b81a7['cookie'](_0x132c0a['LgoKv'],_0x132c0a['hvENe'])['end']();});request(_0x247bc0)['get']('/')['expect']('Set-Cookie',_0xb52bb4['UDGXp'])['expect'](0xc8,_0x4f1b06);}});_0xb52bb4['lhZoE'](it,_0xb52bb4['mYlWJ'],function(_0x3f9bf1){var _0x46da54={'mLlKN':_0xb52bb4['ScgZX'],'rHSvr':_0xb52bb4['YvawF'],'wtnRo':_0xb52bb4['EtVgo'],'AaMJF':function(_0x5162ac,_0x465a0a){return _0x5162ac(_0x465a0a);},'yvxOv':function(_0xada4cb,_0x20f5b9){return _0xb52bb4['XJcyI'](_0xada4cb,_0x20f5b9);},'RViKr':_0xb52bb4['bTTEq'],'tvndJ':_0xb52bb4['gvKvz'],'ZVEbq':'gender','upngU':_0xb52bb4['AiaKi'],'idzmE':_0xb52bb4['zGlLn'],'SgWqq':'age=1;\x20Path=/','jtSuv':_0xb52bb4['DmEUn'],'pzYOY':function(_0xe3caf6){return _0xb52bb4['cpyfD'](_0xe3caf6);}};var _0x176d3c=_0xb52bb4['srKeA'](express);_0x176d3c['use'](function(_0x4f9c04,_0x36d9db){if(_0x46da54['yvxOv'](_0x46da54['RViKr'],_0x46da54['RViKr'])){_0x36d9db['cookie'](_0x46da54['mLlKN'],_0x46da54['tvndJ']);_0x36d9db['cookie'](_0x46da54['rHSvr'],0x1);_0x36d9db['cookie'](_0x46da54['ZVEbq'],'?');_0x36d9db['end']();}else{var _0x212054={'Coiss':_0x46da54['mLlKN'],'sPxuA':'tobi','NpjnD':_0x46da54['rHSvr'],'LGmYL':'age=1;\x20Path=/','QyImA':_0x46da54['wtnRo'],'bxqvP':'set-cookie'};var _0x1e7469=express();_0x1e7469['use'](function(_0x1babb6,_0x6282a2){_0x6282a2['cookie'](_0x212054['Coiss'],_0x212054['sPxuA']);_0x6282a2['cookie'](_0x212054['NpjnD'],0x1);_0x6282a2['cookie']('gender','?');_0x6282a2['end']();});_0x46da54['AaMJF'](request,_0x1e7469)['get']('/')['end'](function(_0x1fa831,_0x1d2997){var _0x50670e=['name=tobi; Path=/',_0x212054['LGmYL'],_0x212054['QyImA']];_0x1d2997['headers'][_0x212054['bxqvP']]['should']['eql'](_0x50670e);_0x3f9bf1();});}});_0xb52bb4['lRuIn'](request,_0x176d3c)['get']('/')['end'](function(_0xfc660b,_0x15f27f){if(_0x46da54['upngU']!==_0x46da54['idzmE']){var _0xef01b7=['name=tobi; Path=/',_0x46da54['SgWqq'],'gender=%3F; Path=/'];_0x15f27f['headers'][_0x46da54['jtSuv']]['should']['eql'](_0xef01b7);_0x46da54['pzYOY'](_0x3f9bf1);}else{_0x15f27f['cookie']('user',{'name':_0x46da54['tvndJ']})['end']();}});});});_0xb52bb4['JtGgb'](describe,'.cookie(name,\x20string,\x20options)',function(){var _0x48c541={'rjVKi':function(_0x40ebff){return _0xb52bb4['dYEVJ'](_0x40ebff);},'rpVcr':_0xb52bb4['Eazfd'],'ORdrZ':function(_0xadc844,_0x51007d){return _0xadc844===_0x51007d;},'LfWWk':_0xb52bb4['lSjpt'],'bPYvt':_0xb52bb4['PmkYY'],'mBPtf':function(_0x2e7c71){return _0x2e7c71();},'YFFDY':function(_0x142593,_0x2595fb){return _0xb52bb4['lRuIn'](_0x142593,_0x2595fb);},'oWJwv':_0xb52bb4['UHqbK'],'EhgHi':function(_0xe10687){return _0xb52bb4['XWOQm'](_0xe10687);},'bfJou':function(_0x78b043,_0x4983ee){return _0xb52bb4['lUasl'](_0x78b043,_0x4983ee);},'ODabJ':'foo bar baz','FdOZg':function(_0x407fac,_0x1163bc){return _0xb52bb4['NEKxc'](_0x407fac,_0x1163bc);},'trfED':function(_0x4ba1ea,_0x18b823){return _0xb52bb4['Oyfdx'](_0x4ba1ea,_0x18b823);},'gNIZE':'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ; Path=/','YbyyB':function(_0x38a8f9,_0x300c8e,_0x317de6){return _0xb52bb4['bCLcn'](_0x38a8f9,_0x300c8e,_0x317de6);},'IBEFO':_0xb52bb4['MqeJm'],'dGwqR':'4|1|3|0|2','xegqu':'name','CVTJn':_0xb52bb4['gvKvz'],'srDbb':'Set-Cookie','vculk':function(_0x33c477,_0x3c3837){return _0xb52bb4['hukAm'](_0x33c477,_0x3c3837);},'HInNn':function(_0x18017b,_0x20322a){return _0x18017b!==_0x20322a;},'EdJuh':_0xb52bb4['ZGNmt'],'cZdmY':_0xb52bb4['mDiEB'],'EfYOj':function(_0xb18bf1,_0x3d6556,_0x9a5fc1){return _0xb52bb4['QaGvd'](_0xb18bf1,_0x3d6556,_0x9a5fc1);}};_0xb52bb4['WWaOh'](it,'should set params',function(_0x4e76ba){var _0x2f75ab={'LjTPb':_0xb52bb4['ScgZX'],'TpPuN':'tobi'};var _0x4763d9=express();_0x4763d9['use'](function(_0x28f085,_0x54c8d3){_0x54c8d3['cookie'](_0x2f75ab['LjTPb'],_0x2f75ab['TpPuN'],{'httpOnly':!![],'secure':!![]});_0x54c8d3['end']();});_0xb52bb4['lRuIn'](request,_0x4763d9)['get']('/')['expect']('Set-Cookie','name=tobi; Path=/; HttpOnly; Secure')['expect'](0xc8,_0x4e76ba);});describe('maxAge',function(){var _0x18f1d4={'qHgMO':function(_0x1d563a){return _0x1d563a();},'zGNHu':_0xb52bb4['ScgZX'],'enhnG':function(_0xae6e8f){return _0xb52bb4['WSnLR'](_0xae6e8f);},'QnOer':'Set-Cookie','wiAjy':_0xb52bb4['ZhfWm'],'akDCq':_0xb52bb4['gvKvz'],'qtkWu':'user=j%3A%7B%22name%22%3A%22tobi%22%7D; Path=/','QpPHg':_0xb52bb4['AxEEV'],'rfIOL':_0xb52bb4['xKNky'],'szUvV':function(_0x6afe76,_0x5840e0){return _0xb52bb4['lRuIn'](_0x6afe76,_0x5840e0);}};if(_0xb52bb4['lKYyo']===_0xb52bb4['lKYyo']){it(_0xb52bb4['orAMd'],function(_0x3551af){var _0x179da2=_0x48c541['rjVKi'](express);_0x179da2['use'](function(_0x398863,_0x5c6f5c){_0x5c6f5c['cookie']('name','tobi',{'maxAge':0x3e8});_0x5c6f5c['end']();});request(_0x179da2)['get']('/')['end'](function(_0x52be77,_0x1b06d4){_0x1b06d4['headers']['set-cookie'][0x0]['should']['not']['containEql']('Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT');_0x18f1d4['qHgMO'](_0x3551af);});});_0xb52bb4['oKjSn'](it,_0xb52bb4['bvGmf'],function(_0x3af530){var _0x680e7c=_0x18f1d4['enhnG'](express);_0x680e7c['use'](function(_0x39c0d0,_0xa8fb05){_0xa8fb05['cookie'](_0x18f1d4['zGNHu'],'tobi',{'maxAge':0x3e8});_0xa8fb05['end']();});request(_0x680e7c)['get']('/')['expect'](_0x18f1d4['QnOer'],/Max-Age=1/,_0x3af530);});_0xb52bb4['GoWsd'](it,_0xb52bb4['PZvef'],function(_0x311c31){var _0x384c4c={'EdqPq':function(_0x274375,_0x47e87d,_0x7b610f){return _0x274375(_0x47e87d,_0x7b610f);},'OTIzN':_0x48c541['rpVcr']};if(_0x48c541['ORdrZ'](_0x48c541['LfWWk'],_0x48c541['bPYvt'])){res['cookie'](_0x18f1d4['wiAjy'],{'name':_0x18f1d4['akDCq']},{'signed':!![]})['end']();}else{var _0x5ba5a1=_0x48c541['mBPtf'](express);var _0xfa6d4e={'maxAge':0x3e8};var _0x6632=merge({},_0xfa6d4e);_0x5ba5a1['use'](function(_0x1ca51e,_0x42d68b){var _0x1697aa={'DRuFw':_0x18f1d4['wiAjy'],'QXPxK':_0x18f1d4['akDCq'],'JXoXF':function(_0x15fc0b){return _0x18f1d4['enhnG'](_0x15fc0b);},'vDQwF':'Set-Cookie','GxxEP':_0x18f1d4['qtkWu']};if(_0x18f1d4['QpPHg']===_0x18f1d4['QpPHg']){_0x42d68b['cookie'](_0x18f1d4['zGNHu'],_0x18f1d4['akDCq'],_0xfa6d4e);_0x42d68b['json'](_0xfa6d4e);}else{_0x384c4c['EdqPq'](it,_0x384c4c['OTIzN'],function(_0x1cb370){var ebKgBk={'SrHZP':_0x1697aa['DRuFw'],'mMYjg':_0x1697aa['QXPxK']};var _0x44c927=_0x1697aa['JXoXF'](express);_0x44c927['use'](function(_0x5ee2b3,_0x52eb68){_0x52eb68['cookie'](ebKgBk['SrHZP'],{'name':ebKgBk['mMYjg']})['end']();});request(_0x44c927)['get']('/')['expect'](_0x1697aa['vDQwF'],_0x1697aa['GxxEP'])['expect'](0xc8,_0x1cb370);});}});_0x48c541['YFFDY'](request,_0x5ba5a1)['get']('/')['expect'](0xc8,_0x6632,_0x311c31);}});}else{var _0x51b3bc=_0x18f1d4['rfIOL']['split']('|'),_0x3f4501=0x0;while(!![]){switch(_0x51b3bc[_0x3f4501++]){case'0':var _0x3edcc4=express();continue;case'1':var _0x33636c=merge({},_0x355409);continue;case'2':var _0x355409={'maxAge':0x3e8};continue;case'3':var _0x3cbd01={'ecJxs':_0x18f1d4['akDCq']};continue;case'4':_0x18f1d4['szUvV'](request,_0x3edcc4)['get']('/')['expect'](0xc8,_0x33636c,done);continue;case'5':_0x3edcc4['use'](function(_0x4fae4e,_0x3452a5){_0x3452a5['cookie']('name',_0x3cbd01['ecJxs'],_0x355409);_0x3452a5['json'](_0x355409);});continue;}break;}}});_0xb52bb4['WWaOh'](describe,_0xb52bb4['IqGTr'],function(){var _0x363bc4={'IYdAy':_0xb52bb4['hBdSZ'],'ekAxu':'user'};if(_0xb52bb4['hTEcW'](_0xb52bb4['fxnjS'],_0xb52bb4['fxnjS'])){_0xb52bb4['VVURJ'](it,_0xb52bb4['aNZzZ'],function(_0x436695){var _0x17a11f={'YrwDi':'set-cookie','MedyW':'Thu, 01 Jan 1970 00:00:01 GMT','YRZdQ':function(_0x389f13,_0x5ac6ba){return _0x389f13!==_0x5ac6ba;},'ANFwA':'HJloO','RZWMz':_0x48c541['oWJwv']};var _0x23ce4c=_0x48c541['EhgHi'](express);_0x23ce4c['use'](_0x48c541['bfJou'](cookieParser,_0x48c541['ODabJ']));_0x23ce4c['use'](function(_0x44cf5b,_0x156b29){if('ZWaUJ'===_0x363bc4['IYdAy']){_0x156b29['headers'][_0x17a11f['YrwDi']][0x0]['should']['not']['containEql'](_0x17a11f['MedyW']);_0x436695();}else{_0x156b29['cookie'](_0x363bc4['ekAxu'],{'name':'tobi'},{'signed':!![]})['end']();}});_0x48c541['FdOZg'](request,_0x23ce4c)['get']('/')['end'](function(_0x3d56a2,_0x868cbf){var _0x4d80bd={'ZVaSv':'name','YziRb':'age'};if(_0x17a11f['YRZdQ'](_0x17a11f['ANFwA'],_0x17a11f['ANFwA'])){_0x868cbf['cookie'](_0x4d80bd['ZVaSv'],'tobi');_0x868cbf['cookie'](_0x4d80bd['YziRb'],0x1);_0x868cbf['cookie']('gender','?');_0x868cbf['end']();}else{var _0x51a2fe=_0x868cbf['headers'][_0x17a11f['YrwDi']][0x0];_0x51a2fe=cookie['parse'](_0x51a2fe['split']('.')[0x0]);_0x51a2fe['user']['should']['equal'](_0x17a11f['RZWMz']);_0x436695();}});});}else{res['cookie']('name','tobi',{'signed':!![]})['end']();}});_0xb52bb4['WWaOh'](describe,'signed without secret',function(){if(_0xb52bb4['LYrff']!=='oOliK'){var _0x37d313={'oOyTx':'name','ePOkP':function(_0x2f017d){return _0x48c541['EhgHi'](_0x2f017d);},'oCkHv':function(_0xbb36d0,_0x434687){return _0x48c541['trfED'](_0xbb36d0,_0x434687);},'MZwmu':'foo bar baz','TDEzB':_0x48c541['gNIZE']};_0x48c541['YbyyB'](it,_0x48c541['IBEFO'],function(_0x1abb1a){var _0x2e70b3=_0x37d313['ePOkP'](express);_0x2e70b3['use'](_0x37d313['oCkHv'](cookieParser,_0x37d313['MZwmu']));_0x2e70b3['use'](function(_0x3ab5b0,_0x2252df){_0x2252df['cookie'](_0x37d313['oOyTx'],'tobi',{'signed':!![]})['end']();});_0x37d313['oCkHv'](request,_0x2e70b3)['get']('/')['expect']('Set-Cookie',_0x37d313['TDEzB'])['expect'](0xc8,_0x1abb1a);});}else{it('should throw an error',function(_0x1b48d8){var _0x5e4b0b=_0x48c541['dGwqR']['split']('|'),_0x532918=0x0;while(!![]){switch(_0x5e4b0b[_0x532918++]){case'0':_0x18069b['use'](function(_0x5808f9,_0x4dbad1){_0x4dbad1['cookie'](_0x10a8fc['BJpNs'],_0x10a8fc['rMXsG'],{'signed':!![]})['end']();});continue;case'1':var _0x18069b=_0x48c541['EhgHi'](express);continue;case'2':request(_0x18069b)['get']('/')['expect'](0x1f4,/secret\S+ required for signed cookies/,_0x1b48d8);continue;case'3':_0x18069b['use'](_0x48c541['EhgHi'](cookieParser));continue;case'4':var _0x10a8fc={'BJpNs':_0x48c541['xegqu'],'rMXsG':_0x48c541['CVTJn']};continue;}break;}});}});_0xb52bb4['TeUdn'](describe,'.signedCookie(name, string)',function(){var _0x4474d6={'BRToS':function(_0x391359){return _0x391359();}};if(_0x48c541['HInNn'](_0x48c541['EdJuh'],_0x48c541['cZdmY'])){_0x48c541['EfYOj'](it,_0x48c541['IBEFO'],function(_0x57a681){var _0x2f7f8f='2|0|4|3|1'['split']('|'),_0x207281=0x0;while(!![]){switch(_0x2f7f8f[_0x207281++]){case'0':var _0x4c4a78=express();continue;case'1':request(_0x4c4a78)['get']('/')['expect'](_0x48c541['srDbb'],_0x48c541['gNIZE'])['expect'](0xc8,_0x57a681);continue;case'2':var _0x5de7f9={'xVHJE':_0x48c541['xegqu'],'omjPK':'tobi'};continue;case'3':_0x4c4a78['use'](function(_0x534e2c,_0x2fd515){_0x2fd515['cookie'](_0x5de7f9['xVHJE'],_0x5de7f9['omjPK'],{'signed':!![]})['end']();});continue;case'4':_0x4c4a78['use'](_0x48c541['vculk'](cookieParser,'foo bar baz'));continue;}break;}});}else{var _0xc76ab0={'nBpKk':'name','jByRi':_0x48c541['CVTJn']};var _0x163d36=express();_0x163d36['use'](function(_0x7b82c3,_0x40742d){_0x40742d['cookie'](_0xc76ab0['nBpKk'],_0xc76ab0['jByRi'],{'maxAge':0x3e8});_0x40742d['end']();});request(_0x163d36)['get']('/')['end'](function(_0x1af7ad,_0x198889){_0x198889['headers']['set-cookie'][0x0]['should']['not']['containEql']('Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT');_0x4474d6['BRToS'](done);});}});});});