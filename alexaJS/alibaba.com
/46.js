
        (function(){
            var addScript = function(src, callback){
                var body = document.body || document.getElementsByTagName('body')[0],
                script = document.createElement("script");
                script.setAttribute('src', src)
                script.setAttribute('defer', true );
        		script.setAttribute('async', true );
        		script.setAttribute('crossorigin', 'anonymous');
        		script.onload = function(){typeof callback === 'function' && callback();};
        		body.appendChild(script);
            };
            var loadScript = function(){
                var body = document.body || document.getElementsByTagName('body')[0],
                    link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', '//s.alicdn.com/@g/sc/header-footer/0.0.77/sc-header-footer/header/entrances/global-header-new/async.css');
        			body.appendChild(link);
        			addScript('//s.alicdn.com/@g/sc/header-footer/0.0.77/sc-header-footer/header/entrances/global-header-new/header.js', function() {
        			   seajs.iuse('sc-header-footer/header/entrances/global-header-new/header.js')(function (Header) {
                            var scHeaderConfig = (window.HEADER_DATA && window.HEADER_DATA['sc-header-config']) || {};
                            var initHeader =function(){
                                if( scHeaderConfig && scHeaderConfig.newInstance){
                                    Header.withNewInstance().init(window.HEADER_DATA);
                                }else{
                                    Header.init(window.HEADER_DATA);
                                }
                            };
                            if(scHeaderConfig.deferredInit === true){
                                Header.J(document).ready(function(){
                                    initHeader();
                                });
                            }else{
                                initHeader();
                            }
                        }); 
        			});
            };
            if(document.readyState === 'complete' || document.readyState === 'interactive') {
                loadScript();
            }else {
                window.addEventListener("DOMContentLoaded", function(event) {
                    loadScript();
                });   
            }
        })();
    