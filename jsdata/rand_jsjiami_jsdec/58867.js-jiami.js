let nf=new Intl[('NumberFormat')]();assertEquals('standard',nf['resolvedOptions']()['notation']);nf=new Intl[('NumberFormat')]('en');assertEquals('standard',nf['resolvedOptions']()['notation']);nf=new Intl['NumberFormat']('en',{'style':'percent'});assertEquals('standard',nf['resolvedOptions']()['notation']);const testData=[['standard',undefined,'987,654,321'],['scientific',undefined,'9.877E8'],['engineering',undefined,'987.654E6'],['compact',undefined,'988M'],['compact','short','988M'],['compact','long','988 million']];for(const [notation,compactDisplay,expect1]of testData){nf=new Intl[('NumberFormat')]('en',{'notation':notation,'compactDisplay':compactDisplay});assertEquals(notation,nf['resolvedOptions']()['notation']);if(notation!='compact'){assertEquals(undefined,nf['resolvedOptions']()['compactDisplay']);}else if(compactDisplay=='long'){assertEquals('long',nf['resolvedOptions']()['compactDisplay']);}else{assertEquals('short',nf['resolvedOptions']()['compactDisplay']);}assertEquals(expect1,nf['format'](0x3ade68b1));}let notation='compact';nf=new Intl['NumberFormat']('de',{'notation':notation,'compactDisplay':'short'});assertEquals('988\u00a0Mio.',nf['format'](0x3ade68b1));assertEquals('99\u00a0Mio.',nf['format'](0x5e30a78));assertEquals('98.765',nf['format'](0x181cd));assertEquals('9876',nf['format'](0x2694));nf=new Intl['NumberFormat']('de',{'notation':notation,'compactDisplay':'long'});assertEquals('988\x20Millionen',nf['format'](0x3ade68b1));assertEquals('99\x20Millionen',nf['format'](0x5e30a78));assertEquals('99 Tausend',nf['format'](0x181cd));assertEquals('9,9 Tausend',nf['format'](0x2694));nf=new Intl[('NumberFormat')]('zh-TW',{'notation':notation,'compactDisplay':'short'});assertEquals('9.9億',nf['format'](0x3ade68b1));assertEquals('9877萬',nf['format'](0x5e30a78));assertEquals('9.9萬',nf['format'](0x181cd));assertEquals('9876',nf['format'](0x2694));nf=new Intl[('NumberFormat')]('zh-TW',{'notation':notation,'compactDisplay':'long'});assertEquals('9.9億',nf['format'](0x3ade68b1));assertEquals('9877萬',nf['format'](0x5e30a78));assertEquals('9.9萬',nf['format'](0x181cd));assertEquals('9876',nf['format'](0x2694));nf=new Intl['NumberFormat']('ja',{'notation':notation,'compactDisplay':'short'});assertEquals('9.9億',nf['format'](0x3ade68b1));assertEquals('9877万',nf['format'](0x5e30a78));assertEquals('9.9万',nf['format'](0x181cd));assertEquals('9876',nf['format'](0x2694));nf=new Intl[('NumberFormat')]('ja',{'notation':notation,'compactDisplay':'long'});assertEquals('9.9億',nf['format'](0x3ade68b1));assertEquals('9877万',nf['format'](0x5e30a78));assertEquals('9.9万',nf['format'](0x181cd));assertEquals('9876',nf['format'](0x2694));nf=new Intl['NumberFormat']('ko',{'notation':notation,'compactDisplay':'short'});assertEquals('9.9억',nf['format'](0x3ade68b1));assertEquals('9877만',nf['format'](0x5e30a78));assertEquals('9.9만',nf['format'](0x181cd));assertEquals('9.9천',nf['format'](0x2694));assertEquals('987',nf['format'](0x3db));nf=new Intl[('NumberFormat')]('ko',{'notation':notation,'compactDisplay':'long'});assertEquals('9.9억',nf['format'](0x3ade68b1));assertEquals('9877만',nf['format'](0x5e30a78));assertEquals('9.9만',nf['format'](0x181cd));assertEquals('9.9천',nf['format'](0x2694));assertEquals('987',nf['format'](0x3db));