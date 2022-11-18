
					jsLoader({
						name : 'shm',
						callback : function() {
							var focusScroll_Auto = new ScrollPic();
							focusScroll_Auto.scrollContId = "SI_Scroll_Wrap_Auto"; //内容容器ID
							focusScroll_Auto.frameWidth = 378;//显示框宽度
							focusScroll_Auto.pageWidth = 378; //翻页宽度
							focusScroll_Auto.upright = false; //垂直滚动
							focusScroll_Auto.speed = 10; //移动速度(单位毫秒，越小越快)
							focusScroll_Auto.space = 40; //每次移动像素(单位px，越大越快)
							focusScroll_Auto.autoPlay = false; //自动播放
							focusScroll_Auto.autoPlayTime = 15; //自动播放间隔时间(秒)
							focusScroll_Auto.circularly = true;
							focusScroll_Auto.initialize(); //初始化

							function $(id){
								return document.getElementById(id) || null;
							}

							$('SI_Scroll_Arr_L_Auto').onmousedown = function(){
								focusScroll_Auto.pre();
								return false;
							}
							$('SI_Scroll_Arr_R_Auto').onmousedown = function(){
								focusScroll_Auto.next();
								return false;
							}
						}
					});
					