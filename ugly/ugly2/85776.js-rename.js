var SafeRange=require("./SafeRange");var CountAllMatching=function(e,n,a,f,r){if(f===undefined){f=0}if(r===undefined){r=e.length}var i=0;if(SafeRange(e,f,r)){for(var t=f;t<r;t++){var u=e[t];if(u[n]===a){i++}}}return i};module.exports=CountAllMatching;