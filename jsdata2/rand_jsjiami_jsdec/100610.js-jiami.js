const KEYWORDS=new Set(['and','break','continue','do','downto','else','elseif','end','endfor','endfunc','endif','endwhile','eq','exit','for','foreach','func','ge','gt','if','in','infinity','le','lt','nan','ne','not','null','or','return','step','then','this','throw','upto','var','while']);const TOKEN={'and':0x0,'divide':0x1,'dot':0x2,'dotDot':0x3,'dotHash':0x4,'dotStar':0x5,'eq':0x6,'ge':0x7,'gt':0x8,'le':0x9,'leftBracket':0xa,'leftParen':0xb,'lt':0xc,'minus':0xd,'ne':0xe,'not':0xf,'null':0x10,'number':0x11,'or':0x12,'plus':0x13,'rightBracket':0x14,'rightParen':0x15,'string':0x16,'this':0x17,'times':0x18,'identifier':0x19,'break':0x1a,'continue':0x1b,'do':0x1c,'for':0x1d,'foreach':0x1e,'func':0x1f,'if':0x20,'var':0x21,'while':0x22,'assign':0x23,'comma':0x24,'downto':0x25,'else':0x26,'elseif':0x27,'end':0x28,'endif':0x29,'endfor':0x2a,'endfunc':0x2b,'endwhile':0x2c,'eof':0x2d,'exit':0x2e,'in':0x2f,'infinity':0x30,'nan':0x31,'return':0x32,'step':0x33,'then':0x34,'throw':0x35,'upto':0x36};const hexPattern=/^[uU]([0-9a-fA-F]{4,8})/;const numberPattern=/^[0-9]*(?:\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?/;const dotNumberPattern=/^[0-9]*(?:[Ee][+-]?[0-9]+)?/;const eolPattern=/[\r\n]+/;const identifierPattern=new RegExp('^[\p{L}_$!][\p{L}\p{N}_$]*','u');class Token{constructor(_0x46d58e,_0x310b2c=null){this['id']=_0x46d58e;this['value']=_0x310b2c;}}const Singletons=function(){var _0x504d51={'oqcga':'identifier','Qvlig':'string','YivzA':'number','PTcpU':'nan','YJNQj':'infinity','BoGvS':function(_0x1cb275,_0x3e2a92){return _0x1cb275===_0x3e2a92;},'CIefd':'EKlUu'};const _0x5eeb0c=Object['create'](null);const _0x1fa6d0=new Set([_0x504d51['oqcga'],_0x504d51['Qvlig'],_0x504d51['YivzA'],_0x504d51['PTcpU'],_0x504d51['YJNQj']]);for(const [_0x1104c9,_0x10e3df]of Object['entries'](TOKEN)){if(_0x504d51['BoGvS'](_0x504d51['CIefd'],'cDuZI')){this['pos']++;return Singletons['dotStar'];}else{if(!_0x1fa6d0['has'](_0x1104c9)){_0x5eeb0c[_0x1104c9]=new Token(_0x10e3df);}}}_0x5eeb0c['nan']=new Token(TOKEN['number'],NaN);_0x5eeb0c['infinity']=new Token(TOKEN['number'],Infinity);return _0x5eeb0c;}();class Lexer{constructor(_0x1c673e){this['data']=_0x1c673e;this['pos']=0x0;this['len']=_0x1c673e['length'];this['strBuf']=[];}['skipUntilEOL'](){var _0xea453e={'FYEVi':function(_0x11b43,_0x54a8fc){return _0x11b43+_0x54a8fc;}};const _0x4bcf3d=this['data']['slice'](this['pos'])['match'](eolPattern);if(_0x4bcf3d){this['pos']+=_0xea453e['FYEVi'](_0x4bcf3d['index'],_0x4bcf3d[0x0]['length']);}else{this['pos']=this['len'];}}['getIdentifier'](){var _0x53f01b={'wQooL':function(_0x5c3d5c,_0x5156c5){return _0x5c3d5c-_0x5156c5;},'LRfTR':function(_0x768309,_0x363a5b){return _0x768309(_0x363a5b);},'hZSdF':function(_0x338801,_0x4fb5aa){return _0x338801+_0x4fb5aa;},'aSDMH':function(_0x438532,_0x197ad0){return _0x438532===_0x197ad0;},'TylNb':'Bqxhb'};this['pos']--;const _0x85a84c=this['data']['slice'](this['pos'])['match'](identifierPattern);if(!_0x85a84c){throw new Error('Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20'+this['pos']+'.');}const _0x2c9842=this['data']['slice'](this['pos'],_0x53f01b['hZSdF'](this['pos'],_0x85a84c[0x0]['length']));this['pos']+=_0x85a84c[0x0]['length'];const _0x55a102=_0x2c9842['toLowerCase']();if(!KEYWORDS['has'](_0x55a102)){if(_0x53f01b['aSDMH'](_0x53f01b['TylNb'],_0x53f01b['TylNb'])){return new Token(TOKEN['identifier'],_0x2c9842);}else{this['pos']++;const _0x17631e=this['data']['substring'](this['pos'])['match'](dotNumberPattern);if(!_0x17631e){return new Token(TOKEN['number'],_0x53f01b['wQooL'](char,0x30)/0xa);}const _0x3189c8=this['pos']+_0x17631e[0x0]['length'];const _0x29e2de=_0x53f01b['LRfTR'](parseFloat,this['data']['substring'](_0x53f01b['wQooL'](this['pos'],0x2),_0x3189c8));this['pos']=_0x3189c8;return new Token(TOKEN['number'],_0x29e2de);}}return Singletons[_0x55a102];}['getString'](){var _0x4ef7dd={'QzwLD':function(_0x47bd,_0x4bf4ba){return _0x47bd<_0x4bf4ba;},'AMgNy':function(_0x2fd35e,_0x4b8c1c){return _0x2fd35e===_0x4b8c1c;},'xOAwY':function(_0x1befcc,_0x5b279b){return _0x1befcc-_0x5b279b;},'UwGii':function(_0x5bad8b,_0x20f425,_0x120f35){return _0x5bad8b(_0x20f425,_0x120f35);},'DcwJa':function(_0x1f87cb,_0x5c8241){return _0x1f87cb-_0x5c8241;},'AiYhz':function(_0x9b2a36,_0x4f3b7d){return _0x9b2a36===_0x4f3b7d;},'XBtst':function(_0x9b2f4a,_0x1d6371){return _0x9b2f4a!==_0x1d6371;},'yJlzg':'VjlpT','gSOuv':'IOJCd'};const _0xbb9230=this['strBuf'];const _0x4b2dbb=this['data'];let _0x4b496f=this['pos'];while(_0x4ef7dd['QzwLD'](this['pos'],this['len'])){const _0x221fbb=_0x4b2dbb['charCodeAt'](this['pos']++);if(_0x4ef7dd['AMgNy'](_0x221fbb,0x22)){if(_0x4b2dbb['charCodeAt'](this['pos'])===0x22){_0xbb9230['push'](_0x4b2dbb['slice'](_0x4b496f,this['pos']++));_0x4b496f=this['pos'];continue;}break;}if(_0x221fbb===0x5c){const _0x494d24=_0x4b2dbb['substring'](this['pos'],this['pos']+0xa)['match'](hexPattern);if(!_0x494d24){continue;}_0xbb9230['push'](_0x4b2dbb['slice'](_0x4b496f,_0x4ef7dd['xOAwY'](this['pos'],0x1)));const _0x13424b=_0x494d24[0x1];if(_0x13424b['length']===0x4){_0xbb9230['push'](String['fromCharCode'](_0x4ef7dd['UwGii'](parseInt,_0x13424b,0x10)));_0x4b496f=this['pos']+=0x5;}else if(_0x13424b['length']!==0x8){_0xbb9230['push'](String['fromCharCode'](parseInt(_0x13424b['slice'](0x0,0x4),0x10)));_0x4b496f=this['pos']+=0x5;}else{_0xbb9230['push'](String['fromCharCode'](_0x4ef7dd['UwGii'](parseInt,_0x13424b,0x10)));_0x4b496f=this['pos']+=0x9;}}}const _0x379ee7=_0x4b2dbb['slice'](_0x4b496f,_0x4ef7dd['DcwJa'](this['pos'],0x1));if(_0x4ef7dd['AiYhz'](_0xbb9230['length'],0x0)){if(_0x4ef7dd['XBtst'](_0x4ef7dd['yJlzg'],_0x4ef7dd['gSOuv'])){return new Token(TOKEN['string'],_0x379ee7);}else{this['id']=id;this['value']=value;}}_0xbb9230['push'](_0x379ee7);const _0x310811=_0xbb9230['join']('');_0xbb9230['length']=0x0;return new Token(TOKEN['string'],_0x310811);}['getNumber'](_0xc8d65b){var _0xa5782={'PrUtp':function(_0x20b4a9,_0x2a1c3b){return _0x20b4a9===_0x2a1c3b;},'MwSKU':function(_0x3e9740,_0x131de4){return _0x3e9740===_0x131de4;},'JIhzR':'zfkci','nFtxk':'ToOEr','cHMKe':function(_0x5c76c6,_0x434ca9){return _0x5c76c6-_0x434ca9;},'xdfVO':function(_0x41b7d8,_0x18d045){return _0x41b7d8-_0x18d045;},'cBEDJ':function(_0x375964,_0x2d840e){return _0x375964+_0x2d840e;}};const _0x572d33=this['data']['substring'](this['pos'])['match'](numberPattern);if(!_0x572d33){if(_0xa5782['JIhzR']===_0xa5782['nFtxk']){const _0xae8483=this['data']['charCodeAt'](this['pos']);if(_0xa5782['PrUtp'](_0xae8483,0x3d)){this['pos']++;return Singletons['le'];}if(_0xa5782['MwSKU'](_0xae8483,0x3e)){this['pos']++;return Singletons['ne'];}return Singletons['lt'];}else{return _0xa5782['cHMKe'](_0xc8d65b,0x30);}}const _0x253631=parseFloat(this['data']['substring'](_0xa5782['xdfVO'](this['pos'],0x1),_0xa5782['cBEDJ'](this['pos'],_0x572d33[0x0]['length'])));this['pos']+=_0x572d33[0x0]['length'];return new Token(TOKEN['number'],_0x253631);}['getCompOperator'](_0x379370,_0x4ddc49){if(this['data']['charCodeAt'](this['pos'])===0x3d){this['pos']++;return _0x379370;}return _0x4ddc49;}['getLower'](){var _0x4a84ab={'EFXcV':function(_0x1b9036,_0x2e47ae){return _0x1b9036===_0x2e47ae;},'PafFd':function(_0x566a48,_0x471a92){return _0x566a48!==_0x471a92;},'AVSRF':'aSUYj'};const _0x535a30=this['data']['charCodeAt'](this['pos']);if(_0x4a84ab['EFXcV'](_0x535a30,0x3d)){this['pos']++;return Singletons['le'];}if(_0x4a84ab['EFXcV'](_0x535a30,0x3e)){if(_0x4a84ab['PafFd'](_0x4a84ab['AVSRF'],_0x4a84ab['AVSRF'])){this['skipUntilEOL']();return![];}else{this['pos']++;return Singletons['ne'];}}return Singletons['lt'];}['getSlash'](){var _0x2e41a5={'RqHof':function(_0x2f3ddb,_0x445041){return _0x2f3ddb-_0x445041;},'AMZCY':function(_0x3f24f9,_0x5b4790){return _0x3f24f9(_0x5b4790);},'cYRsm':function(_0x59057f,_0x30b958){return _0x59057f+_0x30b958;},'FFFnG':function(_0x51b394,_0x103509){return _0x51b394===_0x103509;},'dpcdJ':'ClXzJ'};if(_0x2e41a5['FFFnG'](this['data']['charCodeAt'](this['pos']),0x2f)){if(_0x2e41a5['dpcdJ']===_0x2e41a5['dpcdJ']){this['skipUntilEOL']();return![];}else{const _0x21bc72=this['data']['substring'](this['pos'])['match'](numberPattern);if(!_0x21bc72){return _0x2e41a5['RqHof'](first,0x30);}const _0x466917=_0x2e41a5['AMZCY'](parseFloat,this['data']['substring'](_0x2e41a5['RqHof'](this['pos'],0x1),_0x2e41a5['cYRsm'](this['pos'],_0x21bc72[0x0]['length'])));this['pos']+=_0x21bc72[0x0]['length'];return new Token(TOKEN['number'],_0x466917);}}return!![];}['getDot'](){var _0x5c4f94={'mJNBn':function(_0x1faab7,_0x27c133){return _0x1faab7===_0x27c133;},'OeEQB':function(_0x10c4c5,_0x200b68){return _0x10c4c5/_0x200b68;},'vLjCQ':function(_0x1daa1d,_0x109b80){return _0x1daa1d-_0x109b80;},'FLGWo':function(_0x1cddb9,_0x2c675f){return _0x1cddb9(_0x2c675f);},'oWvvP':function(_0x33a6f4,_0x28b33d){return _0x33a6f4-_0x28b33d;}};const _0x285d40=this['data']['charCodeAt'](this['pos']);if(_0x5c4f94['mJNBn'](_0x285d40,0x2e)){this['pos']++;return Singletons['dotDot'];}if(_0x5c4f94['mJNBn'](_0x285d40,0x2a)){this['pos']++;return Singletons['dotStar'];}if(_0x5c4f94['mJNBn'](_0x285d40,0x23)){this['pos']++;return Singletons['dotHash'];}if(0x30<=_0x285d40&&_0x285d40<=0x39){this['pos']++;const _0x4fb343=this['data']['substring'](this['pos'])['match'](dotNumberPattern);if(!_0x4fb343){return new Token(TOKEN['number'],_0x5c4f94['OeEQB'](_0x5c4f94['vLjCQ'](_0x285d40,0x30),0xa));}const _0x155f42=this['pos']+_0x4fb343[0x0]['length'];const _0xfc6695=_0x5c4f94['FLGWo'](parseFloat,this['data']['substring'](_0x5c4f94['oWvvP'](this['pos'],0x2),_0x155f42));this['pos']=_0x155f42;return new Token(TOKEN['number'],_0xfc6695);}return Singletons['dot'];}['next'](){var _0x5ecd1c={'ewXth':function(_0x14f6d7,_0x396804,_0x4ea322){return _0x14f6d7(_0x396804,_0x4ea322);},'KQQZd':function(_0xa26053,_0x1136a8){return _0xa26053<_0x1136a8;},'rsVDd':function(_0x1b012c,_0x2973ed){return _0x1b012c!==_0x2973ed;},'HFLYA':'gRNDb','GzGef':function(_0x3a2c1a,_0x1443c9){return _0x3a2c1a===_0x1443c9;},'BssXZ':'YPeOm','xjWYK':'LIOUX'};while(_0x5ecd1c['KQQZd'](this['pos'],this['len'])){if(_0x5ecd1c['rsVDd'](_0x5ecd1c['HFLYA'],'oNclm')){const _0x84bfc4=this['data']['charCodeAt'](this['pos']++);switch(_0x84bfc4){case 0x9:case 0xa:case 0xb:case 0xc:case 0xd:case 0x20:break;case 0x22:return this['getString']();case 0x26:return Singletons['and'];case 0x28:return Singletons['leftParen'];case 0x29:return Singletons['rightParen'];case 0x2a:return Singletons['times'];case 0x2b:return Singletons['plus'];case 0x2c:return Singletons['comma'];case 0x2d:return Singletons['minus'];case 0x2e:return this['getDot']();case 0x2f:if(this['getSlash']()){if(_0x5ecd1c['GzGef'](_0x5ecd1c['BssXZ'],_0x5ecd1c['xjWYK'])){str['push'](String['fromCharCode'](_0x5ecd1c['ewXth'](parseInt,code['slice'](0x0,0x4),0x10)));start=this['pos']+=0x5;}else{return Singletons['divide'];}}break;case 0x30:case 0x31:case 0x32:case 0x33:case 0x34:case 0x35:case 0x36:case 0x37:case 0x38:case 0x39:return this['getNumber'](_0x84bfc4);case 0x3b:this['skipUntilEOL']();break;case 0x3c:return this['getLower']();case 0x3d:return this['getCompOperator'](Singletons['eq'],Singletons['assign']);case 0x3e:return this['getCompOperator'](Singletons['ge'],Singletons['gt']);case 0x5b:return Singletons['leftBracket'];case 0x5d:return Singletons['rightBracket'];case 0x7c:return Singletons['or'];default:return this['getIdentifier']();}}else{obj[name]=new Token(id);}}return Singletons['eof'];}}export{Lexer,Token,TOKEN};