'use strict';var $timeoutMinErr=minErr('$timeout');function $TimeoutProvider(){this.$get=['$rootScope','$browser','$q','$$q','$exceptionHandler',function($rootScope,$browser,$q,$$q,$exceptionHandler){var deferreds={};function timeout(fn,delay,invokeApply){if(!isFunction(fn)){invokeApply=delay;delay=fn;fn=noop}var args=sliceArgs(arguments,3),skipApply=(isDefined(invokeApply)&&!invokeApply),deferred=(skipApply?$$q:$q).defer(),promise=deferred.promise,timeoutId;timeoutId=$browser.defer(function(){try{deferred.resolve(fn.apply(null,args))}catch(e){deferred.reject(e);$exceptionHandler(e)}finally{delete deferreds[promise.$$timeoutId]}if(!skipApply)$rootScope.$apply()},delay,'$timeout');promise.$$timeoutId=timeoutId;deferreds[timeoutId]=deferred;return promise}timeout.cancel=function(promise){if(!promise)return false;if(!promise.hasOwnProperty('$$timeoutId')){throw $timeoutMinErr('badprom','`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.')}if(!deferreds.hasOwnProperty(promise.$$timeoutId))return false;var id=promise.$$timeoutId;var deferred=deferreds[id];markQExceptionHandled(deferred.promise);deferred.reject('canceled');delete deferreds[id];return $browser.defer.cancel(id)};return timeout}]}