
 try{
    
    (function() {
    'use strict';
        if(window.__performace__trace__ucm){
            return ;
        }
        window.__performace__trace__ucm = true;
        var pageConfigs={};
                                            
        pageConfigs["a2700.8293689"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-ja_JP"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-ko_KR"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-es_ES"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-de_DE"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-pt_PT"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-fr_FR"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-it_IT"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-ru_RU"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-th_TH"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-tr_TR"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-vi_VN"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-nl_NL"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                                    
        pageConfigs["a2700.8293689-in_ID"] = {"heSelector":".first-banner-content .banner-image","minCount":"1","maxCount":"1","minEvalTime":"20","retCodeIndex":"1","openBB":true}
        
                                    
var i=0;var perf={};function trace(type,action){var __WPO=window.__WPO;if(!__WPO||typeof __WPO.speed!=="function"||typeof __WPO.custom!=="function"){i++;if(i<30){setTimeout(function(){trace(type,action)},500)}}else{setTimeout(function(){switch(type){case"count":__WPO.custom('count',action);break;case"speed":__WPO.speed(action[0]-0,action[1]-0);break}},100)}}if(!window.requestAnimationFrame){trace("count","cancel_no_rAF");return false}if(!window.performance){trace("count","cancel_no_performance")}requestAnimationFrame(function startMeasureFMP(){var metaNodes=Array.prototype.filter.call(document.getElementsByName("data-spm"),function(node){return node&&node.tagName==="META"});if(!metaNodes.length){return false}var spmId_a=metaNodes[0].content;var spmId_b=document.body.getAttribute("data-spm");if(!spmId_a||!spmId_a){return false}var spmid=[spmId_a,spmId_b.replace(/\/\w+/,"")].join(".");var config=pageConfigs[spmid];if(!config){trace("count","cancel_nonconfig");return false}if(config.openBB){if(!window.__BB){window.__BB={mode:-1}}}var _tmp=document.createElement("i");_tmp.innerHTML=config.heSelector;var selector=_tmp.innerText;measureFMP(selector,config)});function measureFMP(selector,config){var rAF;var evalime=config.minEvalTime||20;rAFMeasure(0,document.querySelectorAll(selector).length?new Date():null);addVisibilityChange(cancelrFAMeasure);function cancelrFAMeasure(e){var hes=document.querySelectorAll(selector);if(hes.length>0){var type=e?e.type:"visiblilty";trace("count","cancel_"+e.type);cancelAnimationFrame(rAF);removeVisibliltyChange(cancelrFAMeasure)}}function measureDone(time){if(isNaN(time)){trace("count","cancel_no_time");return}if(!time){trace("count","cancel_time_zero");return}if(!isNaN(parseInt(config.retCodeIndex))&&config.retCodeIndex!=-1){trace("speed",[config.retCodeIndex,time-performance.timing.navigationStart])}if(config.openBB&&window.__BB&&parseInt(window.__BB.mode)==-1){window.__BB.exposed=new Date(time)}if(!window.__bl){window.__bl={}}if(!window.__bl.pipe){perf['cfpt']=new Date(time)-performance.timing.navigationStart;__bl.pipe=['performance',perf]}removeVisibliltyChange(cancelrFAMeasure)}function rAFMeasure(i,cpt){if(rAF){cancelAnimationFrame(rAF)}rAF=requestAnimationFrame(rFACallBack);function rFACallBack(){var hes=document.querySelectorAll(selector);if(hes.length>=config.minCount){var runTime=performance.now();var ttfb=performance.timing.responseStart-performance.timing.navigationStart;var he=hes[0];var fmp=cpt||new Date();if(cpt&&performance.getEntriesByType){var pPTs=performance.getEntriesByType("paint");if(pPTs.length){fmp=new Date(performance.timing.navigationStart+pPTs[pPTs.length-1].startTime)}else if(i<2){rAFMeasure(++i,cpt);return}}perf['t5']=fmp-performance.timing.navigationStart;var bgimgurl="";if(he.style&&he.style.backgroundImage){var match=he.style.backgroundImage.match(/\url\("(.*)"\)/);if(match&&match[1]){bgimgurl=match[1]}}if(he.tagName==="IMG"||bgimgurl){var minlen=Math.min(config.maxCount||1,hes.length);var counter=0;var maxHit=new Date();perf['t6']=maxHit-performance.timing.navigationStart;for(var j=0;j<minlen;j++){he=hes[j];if(bgimgurl){(function(bgimgurl){var bgi=0;counter++;var measureBgImgUrl=setInterval(function(){bgi++;var pRTs=performance.getEntriesByName(bgimgurl);if(pRTs.length){counter--;var pRT=pRTs[0];perf['t7']=pRT.responseEnd;maxHit=Math.max(maxHit,new Date(performance.timing.navigationStart+pRT.responseEnd));clearInterval(measureBgImgUrl);if(counter===0){measureDone(maxHit)}}if(bgi>evalime){clearInterval(measureBgImgUrl);trace("count","cancel_img_overtime")}},1000)})(bgimgurl)}else if(he.complete){perf['t8']=fmp-performance.timing.navigationStart;measureDone(fmp)}else{(function addImgLoadEvent(element){counter++;var src=element.src;element.addEventListener("load",function onImgLoad(){try{var pRTs=performance.getEntriesByName(src);var pRT=pRTs[0];maxHit=Math.max(maxHit,new Date(performance.timing.navigationStart+pRT.responseEnd));perf['t9']=maxHit-performance.timing.navigationStart}catch(e){maxHit=Math.max(maxHit,new Date());perf['t10']=maxHit-performance.timing.navigationStart}counter--;if(counter===0){measureDone(maxHit)}},false)})(he)}}}else{measureDone(fmp)}}else{if(i<(evalime*60)){rAFMeasure(++i)}else{trace("count","cancel_overtime")}}}}function getVisibliltyAttr(){var hidden,visibilityChange;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange"}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange"}return{hidden:hidden,visibilityChange:visibilityChange}}function addVisibilityChange(handleVisibilityChange){var attr=getVisibliltyAttr();if(typeof document[attr.hidden]==="undefined"){window.addEventListener("focus",handleVisibilityChange,false)}else{document.addEventListener(attr.visibilityChange,handleVisibilityChange,false)}}function removeVisibliltyChange(handleVisibilityChange){var attr=getVisibliltyAttr();if(typeof document[attr.hidden]==="undefined"){window.removeEventListener("focus",handleVisibilityChange)}else{document.removeEventListener(attr.visibilityChange,handleVisibilityChange)}}}
    })();
}catch(e){
    console.log(e)
}
