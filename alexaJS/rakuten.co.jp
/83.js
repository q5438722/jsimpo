
if( issetRz() ){
    document.write('<img src="//pzd.rakuten.co.jp/?menu=RgCookie" style="display: none;">');
}



function issetRz(){
    var cookie_name = 'Rz';
    var cookieData = document.cookie + ";";
    var startPoint1 = cookieData.indexOf(cookie_name);
    var startPoint2 = cookieData.indexOf("=",startPoint1);
    var endPoint = cookieData.indexOf(";",startPoint1);
    if( startPoint1 <= -1 || startPoint2 == endPoint ){
        return false;
    }
    return true;
}
