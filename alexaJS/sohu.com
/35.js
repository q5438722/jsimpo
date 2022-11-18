
    //获取dom列表
    var dom = document.querySelectorAll('.titleStyle');
    for (var i = 0; i < dom.length; i++) {
        var style = dom[i].attributes["data-style"].value;
        var styleArr = style.split(',');
        //遍历样式属性
        for (var j = 0; j < styleArr.length; j++) {
            var name = styleArr[j].split(':')[0];
            var value = styleArr[j].split(':')[1];
            if (name) {
                name = name.replace(" ", "");
            }
            if (value) {
                value = value.replace(" ", "");
            }
            dom[i].style[name] = value;
        }
    }
