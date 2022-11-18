
										function creat_autocategory(nindex, ntype) {
											if ($('.cartype-cont').children('div').eq(nindex).attr('loaded') == 1) {
												return;
											}
											$.ajax({
									            type:"GET",
									            dataType:'json',
									            url:'//db.auto.sina.cn/inter/operations/sina/auto/category/result/?type='+ntype,
									            success:function(data){
									            	if (data.code == 0 && data.data) {
									            		var auto_html = '';
									            		var auto_data;
									            		var arr_filter = [];
                                                        for (var auto_i = 0; auto_i < data.data.length; auto_i++) {
                                                            auto_data = data.data[auto_i];
                                                            auto_html += '<li>'+
                                                                            '<a href="'+auto_data.conditionUrl+'" target="_blank" class="ftb">'+auto_data.conditionName+'</a>'+
                                                                            '<div class="scroll-pic-frame-autotype">'+
                                                                                '<div class="scroll-pic-box">'+
                                                                                	'<div class="scroll-pic-wrap">';
                                                            for (var auto_j = 0; auto_j < auto_data.serialList.length; auto_j++) {
                                                                if (arr_filter.indexOf(auto_data.serialList[auto_j].serialId) < 0) {
                                                                    auto_html +=    '<a href="'+auto_data.serialList[auto_j].pcUrl+'" target="_blank">'+auto_data.serialList[auto_j].serialName+'</a>';
                                                                    arr_filter.push(auto_data.serialList[auto_j].serialId);
                                                                }
                                                            }
                                                            auto_html +=        	'</div>'+
                                                                                '</div>'+
                                                                                '<div class="scroll-arr-l-cartype"></div>'+
                                                                                '<div class="scroll-arr-r-cartype"></div>'+
                                                                            '</div>'+
                                                                        '</li>';
                                                        }
                                                        $('.cartype-cont').children('div').eq(nindex).attr('loaded',1).children('ul').html(auto_html);
									            	}
									            }
									        });
										}
										$('.cartype-title .type span[tab-type=tab-nav]').on('mouseenter', function() {
											creat_autocategory($(this).index(), $(this).attr('data-type'));
											var $curdiv = $('.cartype-cont').children('div').eq($('.cartype-cont').attr('index'));
											$curdiv.find('.scroll-pic-box').css('left', '0px');
											$curdiv.find('.scroll-arr-l-cartype').hide();
											$curdiv.find('.scroll-arr-r-cartype').removeClass('end');
											$('.cartype-cont').attr('index', $(this).index());
										});
										$('.mod-10 .order-menu span').eq(1).on('mouseenter', function() {
											var nindex = $('.cartype-title .type .selected').index();
											creat_autocategory(nindex, $('.cartype-title .type .selected').attr('data-type'));
											$('.cartype-cont').attr('index', nindex);
										});
										$('.mod-10').delegate('.scroll-arr-r-cartype', 'click', function() {
										    var $box = $(this).siblings('.scroll-pic-box');
											if ($(this).attr('scrollwidth-init') != 1) {
												$box.width($box.find('.scroll-pic-wrap').width()+1);
												$(this).attr('scrollwidth-init', 1);
											}
										    $(this).siblings('.scroll-arr-l-cartype').show();
											if ($box.position().left == 256-$box.width()) {
												window.open($(this).parents('.scroll-pic-frame-autotype').siblings('.ftb').attr('href'))
											} else if (Math.abs($box.position().left)+256*2>$box.width() || $box.position().left==2*256-$box.width()) {
												$(this).addClass('end');
											    $box.animate({left: (256-$box.width())+'px'});
											} else {
											    $box.animate({left:'-=256px'});
											}
										});     
										$('.mod-10').delegate('.scroll-arr-l-cartype', 'click', function() {
										    var $box = $(this).siblings('.scroll-pic-box');
											$(this).siblings('.scroll-arr-r-cartype').removeClass('end');
											if (Math.abs($box.position().left)<256) {
											    $box.animate({left: '0px'});
										    	$(this).hide();
											} else {
											    $box.animate({left:'+=256px'});
											}
										}); 
				