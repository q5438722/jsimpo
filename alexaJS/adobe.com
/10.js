
            if (window.location.search && window.location.search.indexOf("mboxDisable=1")>0) {
                var atBodyStyle = document.getElementById('at-body-style');
                if (atBodyStyle && atBodyStyle.parentNode) {
                    atBodyStyle.parentNode.removeChild(atBodyStyle);
                }
            }
        