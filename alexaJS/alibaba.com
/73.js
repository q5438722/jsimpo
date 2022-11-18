
    // 买家收藏夹 html espace twice bug fixed
    if(window.location.pathname === '/favorite2/favorite_home.htm' && typeof MutationObserver === 'function') {

        function observeTarget(rootSelector, modifySelector) {
            var $root = document.querySelector(rootSelector)
            var isFirst = true
            var observer = new MutationObserver(function(mutationsList) {
                function doReplace() {
                    var nList = document.querySelectorAll(modifySelector)
                    var nListArr = Array.prototype.slice.call(nList, null)
                    nListArr.forEach($nodeItem => {
                        $nodeItem.innerHTML = $nodeItem.innerText
                    })
                }
                
                if(isFirst) {
                    setTimeout(doReplace, 2000)
                    isFirst = false
                } else {
                    doReplace()
                }
            })
            
            observer.observe($root, { attributes: true, childList: false, subtree: false })
        }

        window.addEventListener('DOMContentLoaded', function() {
            var rootSelector = '.fav-list-box.product-list-box'
            var modifySelector = '.suppliers-list-box .item-suppliers-name'
            
            observeTarget(rootSelector, modifySelector)
        })

    }
