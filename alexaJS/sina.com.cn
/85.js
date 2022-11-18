
									$('#SI_Order_T .order-menu span').eq(1).on('mouseenter', function() {
										if ($(this).attr('loaded') != 1) {
											getHotSearch();
											getTravel('hot_scenic');
											getTravel('hot_hotel');
											$(this).attr('loaded', 1);
										}
									});
									function getHotSearch() {
										$.ajax({
										    type: "GET",
										    url: '//a.sina.cn/s/api/hotTopic/search?from=pc&plat=travel&sort=hot',
										    dataType: "json",
										    success: function (data, status, xhr) {
										        if(data.code==1000){
										            var data = data.data.list;
										            var html='';
										            for (var i = 0; i < data.length; i++) {
										                if (i >= 4) {
										                    break;
										                }
										                html += '<li>'+
													                '<a href="'+data[i].wap_url+'?c=spr_auto_trackid_83b56bedfaeadd1e" target="_blank">'+data[i].title+'</a>'+
													            '</li>'
										            }
										            $('#travelhot_resou').html(html);
										        }
										    }
										})
									}
									var params_scenic = {
									    type: 1,//1日榜单 3月榜单
									    date: '',
									    list_type: 'scenic',//scenic景点 hotel酒店
									    city: '全国',
									    limit: 3
									}
									var params_hotel = {
									    type: 1,//1日榜单 3月榜单
									    date: '',
									    list_type: 'hotel',//scenic景点 hotel酒店
									    city: '全国',
									    limit: 3
									}
									function getTravel(type) {
									    var url='//car.weibo.com/interface/travel/chaowurank';
									    $.ajax({
									        type: "GET",
									        url: url,
									        data: type.indexOf('scenic')>=0 ? params_scenic : params_hotel,
									        dataType: "json",
									        success: function (json, status, xhr) {
									            if (json.code == 100000 && json.data) {
									                if (json.data.list && json.data.list.length) {
									                    var html = '';
									                    var temp;
									                    for (var i = 0; i < json.data.list.length; i++) {
									                        if (i >=3) {
									                            break;
									                        }
									                        temp = json.data.list[i];
									                        html += '<a href="https://s.weibo.com/weibo?q='+encodeURIComponent(temp.name)+'" class="travel-li" target="_blank">'+
									                                    '<div class="img">'+
									                                        '<img src="'+(temp.image||'https://n.sinaimg.cn/photo/5b5e52aa/20161115/topic_page_2x.png')+'">'+
									                                    '</div>'+
									                                    '<div class="txt">'+
									                                        '<div class="t1">'+temp.name+'</div>'+
									                                        '<div class="t2"><span class="city">'+temp.city+'</span><span class="hotnum">热度 '+resetNum(temp.hot_num)+'</span></div>'+
									                                    '</div>'+
									                                '</a>';
									                    }
									                    $('#'+type+' .travel-ul').html(html)
									                }
									            }
									        }
									    });
									}
									function resetNum(num){
									    if(parseInt(num) > 10000){
									        return (parseInt(num)/10000).toFixed(2)+'w'
									    } else {
									        return num
									    }
									}
									