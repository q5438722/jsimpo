(function(t,r){if(typeof exports==="object"&&typeof require==="function"){module.exports=r(require("backbone"))}else if(typeof define==="function"&&define.amd){define(["backbone"],function(e){return r(e||t.Backbone)})}else{r(Backbone)}})(this,function(s){function e(){return((1+Math.random())*65536|0).toString(16).substring(1)}function t(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function i(e){return e===Object(e)}function r(e,t){var r=e.length;while(r--)if(e[r]===t)return true;return false}function o(e,t){for(var r in t)e[r]=t[r];return e}function c(e,t){if(e==null)return void 0;var r=e[t];return typeof r==="function"?e[t]():r}s.LocalStorage=window.Store=function(e,t){if(!this.localStorage){throw"Backbone.localStorage: Environment does not support localStorage."}this.name=e;this.serializer=t||{serialize:function(e){return i(e)?JSON.stringify(e):e},deserialize:function(e){return e&&JSON.parse(e)}};var r=this.localStorage().getItem(this.name);this.records=r&&r.split(",")||[]};o(s.LocalStorage.prototype,{save:function(){this.localStorage().setItem(this.name,this.records.join(","))},create:function(e){if(!e.id&&e.id!==0){e.id=t();e.set(e.idAttribute,e.id)}this.localStorage().setItem(this._itemName(e.id),this.serializer.serialize(e));this.records.push(e.id.toString());this.save();return this.find(e)},update:function(e){this.localStorage().setItem(this._itemName(e.id),this.serializer.serialize(e));var t=e.id.toString();if(!r(this.records,t)){this.records.push(t);this.save()}return this.find(e)},find:function(e){return this.serializer.deserialize(this.localStorage().getItem(this._itemName(e.id)))},findAll:function(){var e=[];for(var t=0,r,i;t<this.records.length;t++){r=this.records[t];i=this.serializer.deserialize(this.localStorage().getItem(this._itemName(r)));if(i!=null)e.push(i)}return e},destroy:function(e){this.localStorage().removeItem(this._itemName(e.id));var t=e.id.toString();for(var r=0,i;r<this.records.length;r++){if(this.records[r]===t){this.records.splice(r,1)}}this.save();return e},localStorage:function(){return localStorage},_clear:function(){var e=this.localStorage(),t=new RegExp("^"+this.name+"-");e.removeItem(this.name);for(var r in e){if(t.test(r)){e.removeItem(r)}}this.records.length=0},_storageSize:function(){return this.localStorage().length},_itemName:function(e){return this.name+"-"+e}});s.LocalStorage.sync=window.Store.sync=s.localSync=function(e,t,r){var i=c(t,"localStorage")||c(t.collection,"localStorage");var o,n;var a=s.$?s.$.Deferred&&s.$.Deferred():s.Deferred&&s.Deferred();try{switch(e){case"read":o=t.id!=undefined?i.find(t):i.findAll();break;case"create":o=i.create(t);break;case"update":o=i.update(t);break;case"delete":o=i.destroy(t);break}}catch(e){if(e.code===22&&i._storageSize()===0)n="Private browsing is unsupported";else n=e.message}if(o){if(r&&r.success){if(s.VERSION==="0.9.10"){r.success(t,o,r)}else{r.success(o)}}if(a){a.resolve(o)}}else{n=n?n:"Record Not Found";if(r&&r.error)if(s.VERSION==="0.9.10"){r.error(t,n,r)}else{r.error(n)}if(a)a.reject(n)}if(r&&r.complete)r.complete(o);return a&&a.promise()};s.ajaxSync=s.sync;s.getSyncMethod=function(e,t){var r=t&&t.ajaxSync;if(!r&&(c(e,"localStorage")||c(e.collection,"localStorage"))){return s.localSync}return s.ajaxSync};s.sync=function(e,t,r){return s.getSyncMethod(t,r).apply(this,[e,t,r])};return s.LocalStorage});