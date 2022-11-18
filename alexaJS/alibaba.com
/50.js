
    var domContainer = document.querySelector('.J-virus-container')
    var domClose = document.querySelector(".J-virus-close")
    var localKey = '__virus__faq__occur'
    
    // 记录用户是否点击过关闭按钮
    if(localStorage.getItem(localKey) ==="true" ? true : false) {
       domContainer.style.display = 'none'
    }else{
        domClose.addEventListener('click', function() {
            domContainer.style.display = 'none'
            localStorage.setItem(localKey, "true")
        })
    }
