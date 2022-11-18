
    var sinaAD_slide01_prev = document.getElementById('sinaAD_slide01_prev');
    var sinaAD_slide01_next = document.getElementById('sinaAD_slide01_next');
    var sinaAD_slide01_items_one = document.getElementById('sinaAD_slide01_items_one');
    var sinaAD_slide01_items_two = document.getElementById('sinaAD_slide01_items_two');

    sinaadToolkit.event.on(sinaAD_slide01_prev, 'mouseover', function(){
        sinaAD_slide01_items_one.style.display = 'block';
        sinaAD_slide01_items_two.style.display = 'none';
        sinaAD_slide01_prev.style.backgroundColor = '#ff8400';
        sinaAD_slide01_next.style.backgroundColor = '#e4e4e4';
    });
    sinaadToolkit.event.on(sinaAD_slide01_next, 'mouseover', function(){
        sinaAD_slide01_items_two.style.display = 'block';
        sinaAD_slide01_items_one.style.display = 'none';
        sinaAD_slide01_prev.style.backgroundColor = '#e4e4e4';
        sinaAD_slide01_next.style.backgroundColor = '#ff8400';
    });
    var slide = (function(){
        if (sinaadToolkit.storage.get("cnt")) {
            sinaadToolkit.storage.set("cnt", Number(sinaadToolkit.storage.get("cnt")) + 1, 30*24*60*60*1000);
        } else {
            sinaadToolkit.storage.set("cnt", 0, 30*24*60*60*1000);
        }
        return sinaadToolkit.storage.get("cnt");
    })();

    if ( slide % 2 == 0) {
        sinaAD_slide01_items_one.style.display = 'block';
        sinaAD_slide01_items_two.style.display = 'none';
        sinaAD_slide01_prev.style.backgroundColor = '#ff8400';
    } else {
        sinaAD_slide01_items_two.style.display = 'block';
        sinaAD_slide01_items_one.style.display = 'none';
        sinaAD_slide01_next.style.backgroundColor = '#ff8400';
    }
