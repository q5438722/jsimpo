import _0x19f18e from'../moment';function plural(_0x5ada41,_0x163332){var _0x37b8ca={'OMXTQ':function(_0x567144,_0x31e024){return _0x567144===_0x31e024;},'SzGSg':function(_0x57d649,_0x4b4272){return _0x57d649%_0x4b4272;},'OVEpy':function(_0x127453,_0x1f9c55){return _0x127453!==_0x1f9c55;},'kkZLV':function(_0x41b701,_0x5c3ef2){return _0x41b701%_0x5c3ef2;},'eKzNO':function(_0x588116,_0x394261){return _0x588116>=_0x394261;},'OOqwN':function(_0x2501df,_0x2e13e5){return _0x2501df%_0x2e13e5;},'ZQPLG':function(_0x1ad6c3,_0x2fdae9){return _0x1ad6c3>=_0x2fdae9;},'LkqxX':function(_0x2b0214,_0x48331a){return _0x2b0214%_0x48331a;}};var _0xd01bdc=_0x5ada41['split']('_');return _0x37b8ca['OMXTQ'](_0x37b8ca['SzGSg'](_0x163332,0xa),0x1)&&_0x37b8ca['OVEpy'](_0x37b8ca['kkZLV'](_0x163332,0x64),0xb)?_0xd01bdc[0x0]:_0x37b8ca['eKzNO'](_0x37b8ca['kkZLV'](_0x163332,0xa),0x2)&&_0x163332%0xa<=0x4&&(_0x37b8ca['OOqwN'](_0x163332,0x64)<0xa||_0x37b8ca['ZQPLG'](_0x37b8ca['LkqxX'](_0x163332,0x64),0x14))?_0xd01bdc[0x1]:_0xd01bdc[0x2];}function relativeTimeWithPlural(_0x100406,_0x111bf0,_0x39398e){var _0x40c281={'xsGcJ':function(_0x1a75bf,_0x64caaf){return _0x1a75bf===_0x64caaf;},'wgdyF':function(_0x1f5359,_0x4b261f){return _0x1f5359%_0x4b261f;},'nDqYD':function(_0x2df392,_0x576d22){return _0x2df392!==_0x576d22;},'PiGsy':function(_0x4b90a7,_0x40c9a3){return _0x4b90a7%_0x40c9a3;},'kNDcG':function(_0x5d4b50,_0x27588a){return _0x5d4b50>=_0x27588a;},'xkBrl':function(_0x55a0bc,_0x109711){return _0x55a0bc<=_0x109711;},'UmZCy':function(_0x10e880,_0xb6c45){return _0x10e880%_0xb6c45;},'QtzKh':'секунду_секунды_секунд','TfdMf':'хвіліна_хвіліны_хвілін','gwlkk':'хвіліну_хвіліны_хвілін','mFuVY':'гадзіна_гадзіны_гадзін','NpMoD':'гадзіну_гадзіны_гадзін','Ifdxy':'месяц_месяцы_месяцаў','nmKko':'год_гады_гадоў','gQenm':function(_0x42deaf,_0x2d1d70){return _0x42deaf===_0x2d1d70;},'iKpKU':'хвіліну','JtcMw':'гадзіна','DSOHN':'гадзіну','gALyp':function(_0x4e9fee,_0x3b2e16){return _0x4e9fee+_0x3b2e16;},'UKfqk':function(_0x558c4a,_0x4d82a1){return _0x558c4a+_0x4d82a1;},'MwcUa':function(_0x40a448,_0x37a38d,_0x34d380){return _0x40a448(_0x37a38d,_0x34d380);}};var _0x3aead0={'ss':_0x111bf0?'секунда_секунды_секунд':_0x40c281['QtzKh'],'mm':_0x111bf0?_0x40c281['TfdMf']:_0x40c281['gwlkk'],'hh':_0x111bf0?_0x40c281['mFuVY']:_0x40c281['NpMoD'],'dd':'дзень_дні_дзён','MM':_0x40c281['Ifdxy'],'yy':_0x40c281['nmKko']};if(_0x40c281['gQenm'](_0x39398e,'m')){return _0x111bf0?'хвіліна':_0x40c281['iKpKU'];}else if(_0x40c281['gQenm'](_0x39398e,'h')){if(_0x40c281['gQenm']('ilyGZ','ilyGZ')){return _0x111bf0?_0x40c281['JtcMw']:_0x40c281['DSOHN'];}else{var _0x17f2bb=word['split']('_');return _0x40c281['xsGcJ'](_0x40c281['wgdyF'](num,0xa),0x1)&&_0x40c281['nDqYD'](_0x40c281['PiGsy'](num,0x64),0xb)?_0x17f2bb[0x0]:_0x40c281['kNDcG'](num%0xa,0x2)&&_0x40c281['xkBrl'](num%0xa,0x4)&&(_0x40c281['UmZCy'](num,0x64)<0xa||num%0x64>=0x14)?_0x17f2bb[0x1]:_0x17f2bb[0x2];}}else{return _0x40c281['gALyp'](_0x40c281['UKfqk'](_0x100406,'\x20'),_0x40c281['MwcUa'](plural,_0x3aead0[_0x39398e],+_0x100406));}}export default _0x19f18e['defineLocale']('be',{'months':{'format':'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'['split']('_'),'standalone':'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'['split']('_')},'monthsShort':'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'['split']('_'),'weekdays':{'format':'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'['split']('_'),'standalone':'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'['split']('_'),'isFormat':/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},'weekdaysShort':'нд_пн_ат_ср_чц_пт_сб'['split']('_'),'weekdaysMin':'нд_пн_ат_ср_чц_пт_сб'['split']('_'),'longDateFormat':{'LT':'HH:mm','LTS':'HH:mm:ss','L':'DD.MM.YYYY','LL':'D MMMM YYYY г.','LLL':'D MMMM YYYY г., HH:mm','LLLL':'dddd, D MMMM YYYY г., HH:mm'},'calendar':{'sameDay':'[Сёння ў] LT','nextDay':'[Заўтра ў] LT','lastDay':'[Учора\x20ў]\x20LT','nextWeek':function(){return '[У] dddd [ў] LT';},'lastWeek':function(){var _0x25b76f={'ghPiW':'[У мінулую] dddd [ў] LT','nhYug':'[У мінулы] dddd [ў] LT'};switch(this['day']()){case 0x0:case 0x3:case 0x5:case 0x6:return _0x25b76f['ghPiW'];case 0x1:case 0x2:case 0x4:return _0x25b76f['nhYug'];}},'sameElse':'L'},'relativeTime':{'future':'праз %s','past':'%s таму','s':'некалькі\x20секунд','m':relativeTimeWithPlural,'mm':relativeTimeWithPlural,'h':relativeTimeWithPlural,'hh':relativeTimeWithPlural,'d':'дзень','dd':relativeTimeWithPlural,'M':'месяц','MM':relativeTimeWithPlural,'y':'год','yy':relativeTimeWithPlural},'meridiemParse':/ночы|раніцы|дня|вечара/,'isPM':function(_0x21fdba){return/^(дня|вечара)$/['test'](_0x21fdba);},'meridiem':function(_0x2457f9,_0xdc9939,_0x21c94d){var _0x17bf94={'NrgSt':function(_0x59fca5,_0x5e8b72){return _0x59fca5+_0x5e8b72;},'HyTQx':function(_0x1f08a0,_0x1578b6,_0x5c7585){return _0x1f08a0(_0x1578b6,_0x5c7585);},'CWRzt':'[У\x20мінулую]\x20dddd\x20[ў]\x20LT','UtQBq':'[У\x20мінулы]\x20dddd\x20[ў]\x20LT','qQvdm':'DDD','OZLlX':function(_0x2d5f6d,_0x5c688e){return _0x2d5f6d%_0x5c688e;},'ABQWj':function(_0x2fca8e,_0x362012){return _0x2fca8e===_0x362012;},'VkLWY':function(_0x15a8ce,_0x5899d3){return _0x15a8ce%_0x5899d3;},'mETyI':function(_0xd631ec,_0x38d766){return _0xd631ec!==_0x38d766;},'Xrklj':function(_0x10d549,_0x10bb15){return _0x10d549%_0x10bb15;},'nSBLp':function(_0x3d53bc,_0x3f49db){return _0x3d53bc+_0x3f49db;},'lgWkr':'kMVdT','Hafqe':'aKhUM','iqrMG':'ночы','HBXrH':function(_0x2ebc4e,_0x6e1004){return _0x2ebc4e!==_0x6e1004;},'Fgwcf':'cxgBW','cocOu':function(_0x1d97c4,_0x6fb48c){return _0x1d97c4<_0x6fb48c;},'QtxbQ':'дня','bmsOC':'ZmCKC','KiIlB':'вечара'};if(_0x2457f9<0x4){if(_0x17bf94['lgWkr']===_0x17bf94['Hafqe']){return _0x17bf94['NrgSt'](_0x17bf94['NrgSt'](number,'\x20'),_0x17bf94['HyTQx'](plural,format[key],+number));}else{return _0x17bf94['iqrMG'];}}else if(_0x2457f9<0xc){if(_0x17bf94['HBXrH'](_0x17bf94['Fgwcf'],'cxgBW')){switch(this['day']()){case 0x0:case 0x3:case 0x5:case 0x6:return _0x17bf94['CWRzt'];case 0x1:case 0x2:case 0x4:return _0x17bf94['UtQBq'];}}else{return 'раніцы';}}else if(_0x17bf94['cocOu'](_0x2457f9,0x11)){return _0x17bf94['QtxbQ'];}else{if(_0x17bf94['HBXrH'](_0x17bf94['bmsOC'],_0x17bf94['bmsOC'])){switch(period){case'M':case'd':case _0x17bf94['qQvdm']:case'w':case'W':return(_0x17bf94['OZLlX'](number,0xa)===0x2||_0x17bf94['ABQWj'](_0x17bf94['VkLWY'](number,0xa),0x3))&&_0x17bf94['mETyI'](number%0x64,0xc)&&_0x17bf94['Xrklj'](number,0x64)!==0xd?number+'-і':_0x17bf94['NrgSt'](number,'-ы');case'D':return _0x17bf94['nSBLp'](number,'-га');default:return number;}}else{return _0x17bf94['KiIlB'];}}},'dayOfMonthOrdinalParse':/\d{1,2}-(і|ы|га)/,'ordinal':function(_0x29f38a,_0x594fed){var _0x55be25={'unGXP':function(_0xeb77a4,_0x3f7998){return _0xeb77a4%_0x3f7998;},'SBujm':function(_0x3afe74,_0x338ff8){return _0x3afe74===_0x338ff8;},'VWBUn':function(_0x541aac,_0x36e382){return _0x541aac!==_0x36e382;},'yOUID':function(_0x3d2a05,_0x45fdb7){return _0x3d2a05%_0x45fdb7;},'YIWEN':function(_0x14012c,_0x587d94){return _0x14012c+_0x587d94;},'kmYHy':function(_0x44d553,_0x67cd77){return _0x44d553+_0x67cd77;}};switch(_0x594fed){case'M':case'd':case 'DDD':case'w':case'W':return(_0x55be25['unGXP'](_0x29f38a,0xa)===0x2||_0x55be25['SBujm'](_0x29f38a%0xa,0x3))&&_0x55be25['VWBUn'](_0x55be25['yOUID'](_0x29f38a,0x64),0xc)&&_0x55be25['VWBUn'](_0x29f38a%0x64,0xd)?_0x55be25['YIWEN'](_0x29f38a,'-і'):_0x29f38a+'-ы';case'D':return _0x55be25['kmYHy'](_0x29f38a,'-га');default:return _0x29f38a;}},'week':{'dow':0x1,'doy':0x7}});