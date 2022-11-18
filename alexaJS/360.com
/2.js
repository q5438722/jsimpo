
		var DEFAULT_VERSION = 8.0;
		var ua = navigator.userAgent.toLowerCase();
		var isIE = ua.indexOf("msie") > -1;
		var version;
		if (isIE) {
			version = ua.match(/msie ([\d.]+)/)[1];
			// 8
			if (version == DEFAULT_VERSION) {
				window.location.href = 'http://www.360.com/ie.html'
			}
			// 6 7 或者 8 的兼容模式
			else if (version < DEFAULT_VERSION) {
				if (document.documentMode) window.location.href = 'http://www.360.com/ie.html'
				else window.location.href = 'http://www.360.cn'
			}
		}
	