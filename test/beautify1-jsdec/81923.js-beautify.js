const _=require('lodash');const utils=require('../../index');const mapper=require('./utils/mapper');const _private={};_private.settingsFilter=(settings,filter)=>{let filteredGroups=filter?filter.split(','):false;return _.filter(settings,(setting)=>{if(filteredGroups){return _.includes(filteredGroups,setting.group)}return true})};module.exports={browse(models,apiConfig,frame){let filteredSettings;if(utils.isContentAPI(frame)){filteredSettings=models}else{filteredSettings=_.values(_private.settingsFilter(models,frame.options.group))}frame.response={settings:mapper.mapSettings(filteredSettings,frame),meta:{}};if(frame.options.type||frame.options.group){frame.response.meta.filters={};if(frame.options.type){frame.response.meta.filters.type=frame.options.type}if(frame.options.group){frame.response.meta.filters.group=frame.options.group}}},read(){this.browse(...arguments)},edit(models,apiConfig,frame){const settingsKeyedJSON=_.keyBy(_.invokeMap(models,'toJSON'),'key');this.browse(settingsKeyedJSON,apiConfig,frame)},download(bytes,apiConfig,frame){frame.response=bytes}};