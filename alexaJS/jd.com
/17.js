
  function clickReport(){
    $("body").delegate("[poi]", "click", function(e){
        let $current = $(e.target)
        let tagName = $current.prop("tagName")

        if(tagName === 'A' || tagName === 'a'){
          let fullpoi = $current.attr('poi') ? $current.attr('poi') : $current.parents('[poi]').attr('poi')
          let url = $current.attr('href')
          let text = $.trim($current.text())

          window.footerGetOnClick && window.footerGetOnClick(fullpoi, url, text)
        }
    })
  }
  clickReport()
