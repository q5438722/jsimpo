MongoInternals['RemoteCollectionDriver']=function(_0x209726,_0x599faf){var _0xb63144=this;_0xb63144['mongo']=new MongoConnection(_0x209726,_0x599faf);};_['extend'](MongoInternals['RemoteCollectionDriver']['prototype'],{'open':function(_0x3ab4e6){var _0x31c9ce={'QsPph':'find','iGsck':'update','PXnVr':'upsert','lcSZI':'remove','HkFYQ':'_ensureIndex','QZVwT':'_createCappedCollection','UsJZX':'dropCollection','fzlZD':'rawCollection'};var _0x2822a3=this;var _0x26b365={};_['each']([_0x31c9ce['QsPph'],'findOne','insert',_0x31c9ce['iGsck'],_0x31c9ce['PXnVr'],_0x31c9ce['lcSZI'],_0x31c9ce['HkFYQ'],'_dropIndex',_0x31c9ce['QZVwT'],_0x31c9ce['UsJZX'],_0x31c9ce['fzlZD']],function(_0xadf092){_0x26b365[_0xadf092]=_['bind'](_0x2822a3['mongo'][_0xadf092],_0x2822a3['mongo'],_0x3ab4e6);});return _0x26b365;}});MongoInternals['defaultRemoteCollectionDriver']=_['once'](function(){var _0x2a7f30={'roXdy':'1|2|3|0|4','meexY':'MONGO_URL must be set in environment'};var _0x5943d2=_0x2a7f30['roXdy']['split']('|'),_0x3ba700=0x0;while(!![]){switch(_0x5943d2[_0x3ba700++]){case'0':if(!_0x49582d)throw new Error(_0x2a7f30['meexY']);continue;case'1':var _0xb2ced5={};continue;case'2':var _0x49582d=process['env']['MONGO_URL'];continue;case'3':if(process['env']['MONGO_OPLOG_URL']){_0xb2ced5['oplogUrl']=process['env']['MONGO_OPLOG_URL'];}continue;case'4':return new MongoInternals['RemoteCollectionDriver'](_0x49582d,_0xb2ced5);}break;}});