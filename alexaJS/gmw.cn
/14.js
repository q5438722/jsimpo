
		//谷歌统计 2018
		//判断是否是微信中的浏览器
		var ua = navigator.userAgent.toLowerCase();
		var homeIsM = /AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ZTE/.test(navigator.userAgent)) || ua.match(/MicroMessenger/i) == "micromessenger";
		if(!homeIsM){
			window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
			ga('create', 'UA-20947729-1', 'auto');
			ga('send', 'pageview');
			document.write("<script async src=\'https://www.google-analytics.com/analytics.js\'><\/script>");
		};
		/*
		// 定时设置专区显示
		function isDuringDate(beginDateStr, endDateStr) {
			var curDate = new Date(),
				beginDate = new Date(beginDateStr),
				endDate = new Date(endDateStr);
			if (curDate >= beginDate && curDate <= endDate) {
				return true;
			};
			return false;
		};
		var _flag = isDuringDate('2020/10/30 00:00:00', '2020/12/15 23:59:59');
		$(function(){
			if(_flag){
				$("#yw4").hide();
				$("#zhuanQu").show();
			}
		});*/
	