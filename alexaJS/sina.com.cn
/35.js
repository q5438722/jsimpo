(sinaads = window.sinaads || []).push({
element : document.getElementById("sina_ad_tab02"),
params:{
sinaads_success_handler: function () {
var TabADContent = arguments[1];
var TabADPV = TabADContent.content[0].pv;
var IndexNum = 2;
if(IndexNum == 0){
EduAdSpan1 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;
}
else if(IndexNum == 1){
EduAdSpan0 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;
}
else if(IndexNum == 2){
EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan3 = 0;
}
else{
EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan2 = 0;
}
EduAdSpan2++;
SinaHomeTabNavSpan[2].onmouseover = function(){
if(IndexNum == 0){
EduAdSpan1 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;
}
else if(IndexNum == 1){
EduAdSpan0 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;
}
else if(IndexNum == 2){
EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan3 = 0;
}
else{
EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan2 = 0;
}
if(EduAdSpan2 >= 1){
return;
}
else{
for(var p = 0,l = TabADPV.length;p < l;p++){
var PageViewLink = TabADPV[p];
sinaadToolkit.sio.log(PageViewLink);
EduAdSpan2++;
}
}
}
}
}
});
