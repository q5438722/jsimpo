
Echo.init({
	offset: 0,		//离可视区域多少像素的图片可以被加载
	throttle:10 	//图片延时多少毫秒加载
});
function get_cntv_whereis(cntv_whereis){
	var chunwan_areaInfo = eval('(' + cntv_whereis.replace(/(^\s*)|(\s*$)/g, "") + ')');
	country_code = chunwan_areaInfo.country_code;
	//video_player_box();
	setCookie_tvzhibo("country_code",country_code);
}
function setCookie_tvzhibo(name, value) {
	var Days = 0.25;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}
