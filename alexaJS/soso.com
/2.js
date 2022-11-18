
var href = location.href;
var pid = gq(href, 'pid')==""?gq(href, 'hdq'):gq(href, 'pid');
document.getElementById('pid').value=pid;

var pvimg = new Image();
var uigsimg = new Image();
function m_s() {
    var w = document.sf.query;
    w.focus();
    if (new RegExp("kw=([^&]+)").test(location.search)) {
        if (w.value.length == 0)
            w.value = decodeURIComponent(RegExp.$1)
    }
    var c = Math.round((new Date().getTime() + Math.random()) * 1000);
    with (document) {
        if (cookie.indexOf("SUV=") < 0) {
            cookie = "SUV=" + c + ";path=/;expires=Sun, 29 July 2026 00:00:00 UTC;domain=sogou.com"
        }
        uigsimg.src = "//pb.sogou.com/pv.gif?uigs_productid=web&uigs_t=" + c + "&uigs_refer=" + referrer;
    }
}

function gq(l, str){
    var rs = new RegExp("(^|)"+str+"=([^\&]*)(\&|$)","gi").exec(l), tmp;
    if(tmp=rs){
        return tmp[2];
    }
    return "";
}

function s(l, txt) {
	if (!txt)
		return;
	if (l.tagName.toUpperCase() != "A")
		return;
	var idx = l.href.indexOf(txt);
	if (idx < 0)
		return;
	idx = idx + txt.length;
	var ele = document.getElementById("sf");
	if (!ele || !ele.query)
		return;
	var q = encodeURIComponent(ele.query.value);
	if(txt=="web2ww"||txt=="web2bk"){
		if(q.length>0){
			l.href = l.href+q;
		}else{
			l.href = "//"+l.hostname+"?cid="+txt;
		}
	}else{
		l.href = l.href.substr(0, idx) + q;
	}
}
var SugPara = {"enableSug": true,"sugType": "web","domain": "w.sugg.sogou.com","productId": "web","sugFormName": "sf","inputid": "query","submitId": "stb","nofixwidth":1};
