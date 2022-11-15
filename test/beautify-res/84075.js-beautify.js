var isArray=Array.isArray;var str=Object.prototype.toString;module.exports=isArray||function(val){return!!val&&'[object Array]'==str.call(val)};
