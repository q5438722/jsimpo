const errors=require("@tryghost/errors");const tpl=require("@tryghost/tpl");const messages={missingContext:"missing context"};module.exports=function(r){r.Model=r.Model.extend({getActor(e={context:{}}){if(e.context&&e.context.integration){return{id:e.context.integration.id,type:"integration"}}if(e.context&&e.context.user){return{id:e.context.user,type:"user"}}return null},contextUser:function e(t){t=t||{};t.context=t.context||{};if(t.context.user||r.Model.isExternalUser(t.context.user)){return t.context.user}else if(t.context.integration){return r.Model.internalUser}else if(t.context.internal){return r.Model.internalUser}else if(this.get("id")){return this.get("id")}else if(t.context.external){return r.Model.externalUser}else{throw new errors.NotFoundError({message:tpl(messages.missingContext),level:"critical"})}}},{internalUser:1,externalUser:0,isInternalUser:function e(t){return t===r.Model.internalUser||t===r.Model.internalUser.toString()},isExternalUser:function e(t){return t===r.Model.externalUser||t===r.Model.externalUser.toString()}})};