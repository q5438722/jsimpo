bds.util.domain=function(){var list=$.extend({},s_domain.ssllist);$.each(list,function(i,e){if(list[i].indexOf("https://")<0){list[i]="https://"+list[i]}});var get=function(url){if(s_domain.protocol=="http:"){return url}var reg=/^(http[s]?:\/\/)?([^\/]+)(.*)/,matches=url.match(reg);url=list.hasOwnProperty(matches[2])&&list[matches[2]]+matches[3]||url;return url},set=function(kdomain,vdomain){list[kdomain]=vdomain};return{get:get,set:set}}();bds.comm.sugHost=bds.util.domain.get(
"http://suggestion.baidu.com/su");