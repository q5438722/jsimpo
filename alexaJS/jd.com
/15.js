
function imgLoadTime(){
  jmfe.profilerInit({
      flag: 197,
      autoReport: true,
      performanceReportTime:8000,
      profilingRate: 1
  });
  var reportList = [];
  var imgList = $(".seckill-list .slider_list a>div>img");
  var imgMap = {};
  for(var ind = 0;ind<imgList.length;ind++){
      var src = imgList.eq(ind).attr("src");
      imgMap[src] = 1;
  }
  var focusImgFirst = $(".focus__main .slider_item>a>img:first").eq(0).attr("src");
  var imgTime1 = performance.getEntriesByType('resource');
  var imgTime = [];
  for(var i=0;i<imgTime1.length;i++){
      var item = imgTime1[i];
      var itemRealName = item.name.substring(item.name.indexOf("//"),item.name.length);
      if( (item.initiatorType === 'img' && item.duration > 0 && imgMap[itemRealName] == 1) && /\.(avif)/i.test(item.name) ){
          imgTime.push(item);
          reportList.push( {"number": 3,"key": "secKillAVIFImage","time": item.duration,"desc": 'secKillAVIFImageLoadTime'} );
      }else if( (item.initiatorType === 'img' && item.duration > 0 && imgMap[itemRealName] == 1) && /\.(webp)/i.test(item.name) ){
        imgTime.push(item);
        reportList.push( {"number": 2,"key": "secKillWEBPImage","time": item.duration,"desc": 'secKillWEBPImageLoadTime'} );
      }else if( (item.initiatorType === 'img' && item.duration > 0 && imgMap[itemRealName] == 1) && /\.(jpe?g|png)/i.test(item.name) ){
        imgTime.push(item);
        reportList.push( {"number": 1,"key": "secKillJPGImage","time": item.duration,"desc": 'secKillJPGImageLoadTime'} );
      }
      if( (item.initiatorType === 'img' && item.duration > 0 && itemRealName == focusImgFirst) && /\.(avif)/i.test(item.name) ){
          imgTime.push(item);
          reportList.push( {"number": 6,"key": "carouselAvifImage","time": item.duration,"desc": 'carouselAvifImage'} );
      }else if( (item.initiatorType === 'img' && item.duration > 0 && itemRealName == focusImgFirst) && /\.(webp)/i.test(item.name) ){
        imgTime.push(item);
        reportList.push( {"number": 5,"key": "carouselWebpImage","time": item.duration,"desc": 'carouselWebpImage'} );
      }else if( (item.initiatorType === 'img' && item.duration > 0 && itemRealName == focusImgFirst) && /\.(jpe?g|png)/i.test(item.name) ){
        imgTime.push(item);
        reportList.push( {"number": 4,"key": "carouselOrignalImage","time": item.duration,"desc": 'carouselOrignalImage'} );
      }
  }
  jmfe.profilerModuleReport(reportList);
}
setTimeout(function(){ imgLoadTime(); },3000);
