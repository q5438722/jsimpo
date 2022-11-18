
        (function(){
        var hashMatch=document.location.href.match(/#+(.*wd=(.+))/);
        if(hashMatch&&hashMatch[0]&&hashMatch[1]){
            // 隐藏页面内容
                var css='body {display: none}',
                    head=document.head||document.getElementsByTagName('head')[0],
                    style=document.createElement('style');

                if(style.styleSheet){
                    style.styleSheet.cssText = css;
                }else{
                    style.appendChild(document.createTextNode(css));
                }

                head.appendChild(style);
                if(hashMatch[2]){
                    var encodeQuery=hashMatch[2].replace(/&/g, '%26').replace(/\+/g, '%2B');
                    hashMatch[1]=hashMatch[1].split('wd=')[0]+'wd='+encodeQuery;
                }

            location.href="//"+location.host+"/s?"+hashMatch[1];
        }
        })();
        
    