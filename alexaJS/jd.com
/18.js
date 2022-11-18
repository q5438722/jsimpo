
function footerRender (){
  function getClstagPrefix(){
      var $clstagEles = $('[clstag]');
      $clstagEles.each(function(){
          var fullpoi = $(this).attr('clstag')
          $(this).attr('clstag', pageConfig.clstagPrefix+fullpoi)
      });
  }

  function getCopyrightTxt(){
    var $copyrightEles = $('.copyright_txt');
    $copyrightEles.html("Copyright&nbsp;©&nbsp;2004&nbsp;-&nbsp;"+ new Date().getFullYear() + "&nbsp;&nbsp;京东JD.com&nbsp;版权所有")
  }

  getClstagPrefix()
  getCopyrightTxt()
}

footerRender()
