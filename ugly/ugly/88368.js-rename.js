if(Meteor.isServer)var Future=Npm.require("fibers/future");if(typeof __meteor_runtime_config__==="object"&&__meteor_runtime_config__.meteorRelease){Meteor.release=__meteor_runtime_config__.meteorRelease}Meteor._get=function(e){for(var r=1;r<arguments.length;r++){if(!(arguments[r]in e))return undefined;e=e[arguments[r]]}return e};Meteor._ensure=function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];if(!(t in e))e[t]={};e=e[t]}return e};Meteor._delete=function(e){var r=[e];var t=true;for(var n=1;n<arguments.length-1;n++){var o=arguments[n];if(!(o in e)){t=false;break}e=e[o];if(typeof e!=="object")break;r.push(e)}for(var n=r.length-1;n>=0;n--){var o=arguments[n+1];if(t)t=false;else for(var a in r[n][o])return;delete r[n][o]}};Meteor.wrapAsync=function(u,c){return function(){var e=c||this;var r=Array.prototype.slice.call(arguments);var t;for(var n=r.length-1;n>=0;--n){var o=r[n];var a=typeof o;if(a!=="undefined"){if(a==="function"){t=o}break}}if(!t){if(Meteor.isClient){t=logErr}else{var i=new Future;t=i.resolver()}++n}r[n]=Meteor.bindEnvironment(t);var f=u.apply(e,r);return i?i.wait():f}};var hasOwn=Object.prototype.hasOwnProperty;Meteor._inherits=function(e,r){for(var t in r){if(hasOwn.call(r,t)){e[t]=r[t]}}var n=function(){this.constructor=e};n.prototype=r.prototype;e.prototype=new n;e.__super__=r.prototype;return e};var warnedAboutWrapAsync=false;Meteor._wrapAsync=function(e,r){if(!warnedAboutWrapAsync){Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");warnedAboutWrapAsync=true}return Meteor.wrapAsync.apply(Meteor,arguments)};function logErr(e){if(e){return Meteor._debug("Exception in callback of async function",e)}}