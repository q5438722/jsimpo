import _0x36bbd0 from'./reduce';import _0x59398e from'./internal/wrapAsync';import{promiseCallback,PROMISE_SYMBOL}from'./internal/promiseCallback';export default function seq(...functions){var mOgHYg={'FLswp':function(callee,param1,param2){return callee(param1,param2);},'fgdWP':function(x,y){return x-y;},'BaWNh':function(callee){return callee();}};var _functions=functions['map'](_0x59398e);return function(...args){var that=this;var cb=args[mOgHYg['fgdWP'](args['length'],0x1)];if(typeof cb=='function'){args['pop']();}else{cb=mOgHYg['BaWNh'](promiseCallback);}_0x36bbd0(_functions,args,(newargs,fn,iterCb)=>{var rMLGYD={'suCvL':function(callee,param1,param2){return mOgHYg['FLswp'](callee,param1,param2);}};fn['apply'](that,newargs['concat']((err,...nextargs)=>{rMLGYD['suCvL'](iterCb,err,nextargs);}));},(err,results)=>cb(err,...results));return cb[PROMISE_SYMBOL];};}