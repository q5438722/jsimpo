
var mPulse = mPulse || {};
(function(window, document){
	'use strict';
	mPulse.ichibalogin = '0';
	mPulse.ichibatop = "Normal";
	if(isLogged()){
		mPulse.ichibalogin = '1';
	}

	var $Beta = document.getElementById("sc_betaInfo");	
	if($Beta != null){
		mPulse.ichibatop = $Beta.value;
	}

	function isLogged() {
		var cookiesList, i, j, c, key;
		if(!document.cookie) {
			return false;
		}
		cookiesList = document.cookie.split(';');
		for (i = cookiesList.length - 1; i >= 0; i--) {
			c = cookiesList[i];
			j = c.indexOf('=');
			if(j === -1) {
				continue;
			}
			key = window.decodeURIComponent(c.substr(0, j)).replace(/^\s+/g, '');
			if(key === 'Rz') {
				return true;
			}
		}
		return false;
	}
})(this, this.document);
