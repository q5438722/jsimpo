
	//每年的12-13国家公祭日时，首页全灰
	(function(){
		var D = new Date();
		if(D.getMonth() == 11 && D.getDate() == 13){
			$('html,body').css({
				"-webkit-filter":"grayscale(100%)",
				"-moz-filter":"grayscale(100%)",
				"-ms-filter":"grayscale(100%)",
				"-o-filter":"grayscale(100%)",
				"filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
				"_filter":"none"
			});
		}
	})();
	
	//临时添加 热点推荐旁的广告位时间 勿删
	var date = {
		isDuringDate: function (beginDateStr, endDateStr) {
			var curDate = new Date(),
				beginDate = new Date(beginDateStr),
				endDate = new Date(endDateStr);
			if (curDate >= beginDate && curDate <= endDate) {
				return true;
			}
			return false;
		}
	}; 
	var _flag=date.isDuringDate('2022/10/01 00:00:00', '2023/05/31 23:59:59');
	$(document).ready(function(){
		if(_flag){
			$(".m-adWrap").show();
		}
	});
