
    (function(){
    	//i18n check dot2
    	var ckI18nSupport = function(){
    		try{
    			if( typeof(goldlog) !== 'undefined' && typeof(goldlog.record) === 'function' ){
		        	var params = {
		        		gmkey:'EXP',
		        		gokey:''
		        	};
		            var cid = '/sc.sc_header_footer.c_i18n',
		            	appName = 'aisn',
		            	ckComStr = 'Intellectual Property Protection',
		            	ckStr = 'Intellectual Property Protection',
		                code = 'GET';
		            if( ckStr === ''){
		            	var i18nErrFlag = '';
		            	if( ckComStr === ''){
		            		i18nErrFlag = 'comFail';
		            	}else{
		            		i18nErrFlag = 'comRun';
		            	}
		            	params.gokey = 'pos=' + appName + '&val=' +  i18nErrFlag + ':'+ window.location.host;
		            	goldlog.record(cid, params.gmkey, params.gokey, code);
		            }
		        }
    		}catch(e){}
	    };
    	/**
    		t     	 */
    	var useScript=function(){var d={},f=[],h=function(a){var e=[];d[a]=!0;f.forEach(function(c,d){c.jsSrc===a?"function"===typeof c.callback&&c.callback():e.push(c)});f=e};return function(a,e,c){var g=document,k=g.getElementsByTagName("body")[0]||g.getElementsByTagName("head")[0],b=g.createElement("script");""!==a&&(!0===d[a]?e():(f.push({jsSrc:a,callback:e}),1!==d[a]&&(d[a]=1,b.setAttribute("defer",!0),a.indexOf("alicdn.com")>=0&&b.setAttribute("crossorigin","anonymous"),!0===c&&b.setAttribute("async",!0),b.onload=b.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(h(a),b.onload=b.onreadystatechange=null)},k.appendChild(b),b.src=a)))}}(),J=window.SCHD_COMS&&window.SCHD_COMS.J||window.SCHeader&&window.SCHeader.J;
    	var jsSrc = '//i.alicdn.com/??sc-global-components/20190619152737/entrances/big-brother/big-brother.js';
    	if(typeof(J) !== 'undefined'){
    		J(document).ready(function(){
    			useScript(jsSrc);
    			ckI18nSupport();
    		});
    	}else{
    		useScript(jsSrc);
    	}
            window.$footerUseScript = useScript;
            setTimeout(function(){
        useScript('//s.alicdn.com/@g/sc/footer/0.0.4/sc-footer/dist/footer-sync.js');
      }, 3000);
    })();
