
    window.isNewUserCallback = function(rst) {
        var isNewUser = false;
        if (rst && rst.data && rst.data.type) {
            isNewUser = rst.data.type;
        }
        window.HEADER_HD_DATA = window.HEADER_HD_DATA || {};
        window.HEADER_HD_DATA.isNewUser = isNewUser;
        var promotionSrc = '//marketing.alibaba.com/queryNicheMaterial.do?nicheCode=ICBU_PC_HEADER_PROMOTION_ATMOSPHERE&callback=headerPromotionCallback';
        getScript(promotionSrc);
    }
    window.headerPromotionCallback = function(rst) {
        window.HEADER_PROMOTION_DATA = rst;

        function addLinkConfig(newConfig) {
            var baseConfig = window.HEADER_DATA['sc-header-config']['links-config'];
            var newConfigList = [];
            var customIdx = baseConfig.length - 3;
            baseConfig.forEach((config, i)=>{
              if (newConfig && newConfig.matchStr && config.href.indexOf(newConfig.matchStr) > -1) {
                newConfigList.push(newConfig);
                newConfig = null;
              } else {
                if (newConfig && i === customIdx) {
                    newConfigList.push(newConfig);
                    newConfig = null;
                }
                newConfigList.push(config);
              }
            });
            window.HEADER_DATA['sc-header-config']['links-config'] = newConfigList;
         }

        function doPromotionTask(task) {
            if (task.subNicheCode === "ICBU_PC_HEADER_PROMOTION_ATMOSPHERE_LOGO") {
                task.materialVoList.forEach(function(item, index){
                    if (location.pathname === '/') {
                        var material = item.universalMaterialMap;
                        var logo = material.logo;
                        var logoNodeList = document.body.querySelectorAll('a.sc-hd-i-logo-new');
                        if (logoNodeList && logoNodeList.length > 0) {
                            for (var i = 0; i < logoNodeList.length; ++i) {
                                logoNodeList[i].style.backgroundImage = 'url(' + logo + ')';
                                logoNodeList[i].className = logoNodeList[i].className.replace('sc-hd-i-logo-new', 'sc-hd-i-logo-promotion');
                                logoNodeList[i].href = material.href || '//www.alibaba.com';
                            }
                        }
                    }
                });
            } else if(task.subNicheCode.indexOf("ICBU_PC_HEADER_MENU_CONFIG") > -1){
                var isNewUser = window.HEADER_HD_DATA.isNewUser;
                task.materialVoList.forEach(function(item, index){
                    var material = item.universalMaterialMap;
                    var url = material.url;
                    if (material.type && material.other_url && isNewUser === 'OLD') {
                        url = material.other_url
                    }
                    var newConfig = {
                        href: url,
                        isServices: false,
                        isShowInSample: false,
                        matchStr: material.str,
                        appendTag: material.tag_pic,
                        prependTag: material.tag_pic_prepend,
                        list: [],
                        text: material.displayName,
                    };
                    addLinkConfig(newConfig);
                });
                if (window.SCHeader && window.SCHeader.Links && window.SCHeader.Links.updateLink) {
                    window.SCHeader.Links.updateLink();
                    
                }
            }
        }
        if (rst && rst.data && rst.data.nicheCode === "ICBU_PC_HEADER_PROMOTION_ATMOSPHERE") {
            var taskList = rst.data.subNicheVoList;
            if (taskList && taskList instanceof Array) {
                taskList.forEach(doPromotionTask);
            }
        }
    };
    
    function getScript(src) {
        (function(window) {
            var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = src;
              script.async = 'async';
            var body = document.getElementsByTagName('body');
            if (body && body[0]) {
                body[0].appendChild(script);
            }
        })(window);
    }
    var fetchUrl = '//insights.alibaba.com/openservice/gatewayService?modelId=835&appName=asinHomePage&callback=isNewUserCallback'
    getScript(fetchUrl);
    
