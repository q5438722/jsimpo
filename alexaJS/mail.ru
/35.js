
	(function(w, d, n, s, t) {
	  var timeStart = +new Date();

	  var firstDirectRender = true;
	  var fallbackInvoked = false;
	  var fallbackTimeout = null;

	  var fallbackType = {
		  FORCE: 'force',
		  UNSUPPORT: 'unsupport',
		  TIMEOUT: 'timeout',
		  ERROR: 'error',
		  EMPTY: 'empty'
	  };

		if (!w.Map || (w.attachEvent && !w.addEventListener)) { // "bad" IE
		  setTimeout(function() {
		    fallback(fallbackType.UNSUPPORT);
		  }, 0);
		  return;
		}

		var fallbackDelay = 2500;

	  if (fallbackDelay) {
  	  fallbackTimeout = setTimeout(function() {
  	    fallback(fallbackType.TIMEOUT);
  	  }, fallbackDelay);
	  } else {
		  setTimeout(function() {
		    fallback(fallbackType.FORCE);
		  }, 0);
	    return;
	  }

  	function getBrowserLabel() {
  		var browser = 'unk';
  		var ua = navigator.userAgent;

  		if (ua.indexOf('Opera') !== -1 || ua.indexOf('OPR') !== -1) {
  			browser = 'opr';
  		} else if (ua.indexOf('Edge') !== -1) {
  			browser = 'edg';
  		} else if (ua.indexOf('Chrome') !== -1) {
  			browser = 'chr';
  		} else if (ua.indexOf('Safari') !== -1) {
  			browser = 'sfr';
  		} else if (ua.indexOf('Firefox') !== -1) {
  			browser = 'ff';
  		} else if ((ua.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) {
  			browser = 'ie';
  		}

  		return browser;
  	}

  	function logRender(fallbackType) {
  		var timeEnd = +new Date();
  		var duration = timeEnd - timeStart;
  		var browser = getBrowserLabel();
  		var slotId = '917709';
  		var iprefix = 'b-' + browser + '_s-' + slotId;

  		var idata = {};

  		idata[iprefix + '_render'] = duration;

  		if (fallbackType) {
  			idata[iprefix + '_' + fallbackType] = duration;
  			
  			if ('') {
  			  idata[iprefix + '_mrk'] = duration;
  			  idata[iprefix + '_' + fallbackType + '_mrk'] = duration;
  			} else {
  			  idata[iprefix + '_trg'] = duration;
  			  idata[iprefix + '_' + fallbackType + '_trg'] = duration;
  			  
    			if ('') {
    			  idata[iprefix + '_trg_hi'] = duration;
    			  idata[iprefix + '_' + fallbackType + '_trg_hi'] = duration;
    			} else {
    			  idata[iprefix + '_trg_lo'] = duration;
    			  idata[iprefix + '_' + fallbackType + '_trg_lo'] = duration;
    			}
  			}
  		} else {
  			idata[iprefix + '_direct'] = duration;
  			
  			if ('') {
  			  idata[iprefix + '_direct_hi'] = duration;
  			} else {
  			  idata[iprefix + '_direct_lo'] = duration;
  			}
  		}

  		if (w.xray) {
  			try {
  			  if (xray.sendImmediately) {
    				xray.sendImmediately('adman-time', {
    					i: idata
    				});
  			  } else {
    				xray.send('adman-time', {
    					i: idata
    				});
  			  }
  			} catch (e) {}
  		}
  	}

	  function fallback(type) {
		  if (fallbackInvoked) return;
		  clearTimeout(fallbackTimeout);
		  fallbackInvoked = true;

      var trgB = document.getElementById("trg-b-110542821-226290686");
      var trgYa = document.getElementById("yandex_ad_R-443824-77_226290686");

      if (trgYa) {
        trgYa.style.display = 'none';
      }

      if (trgB) {
        if (trgB.getAttribute("data-hide-226290686") === "hide-banner") {
          trgB.removeAttribute("data-hide-226290686");
        }
  			trgB.style.display = "block";
  			var container = document.querySelectorAll('#trg-b-110542821-226290686 .trg-v-banner');
        if (container.length) { container = container[0] || null; }
        if (container && container.playVideoCheck && typeof container.playVideoCheck === 'function') {
            container.playVideoCheck();
        }
        new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH6xamPBCNAAAA3lsXHuXvfh6g-hrjmTY8P5Iy2dD1yyRBWvM-HXMtQsX0wPX3gsmbiw2q4WdPOz6SisfobnP0y3zdQV-j4sFmbfc57ySFrzIYNCX53_fsbmmrqJ8VT50iTVx5wpQq8RQkIn6V5_gpCAMqyqsdIBVAcOkfvU9Z69DOn2sZL2qD4zrOxgpvX_Wwei6QuuKY7OW5.gif";
        RB.I({
            el: trgB,
            pixels:  ['https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH6-HGc26NAAAAwijJiQgBY80OS0DAT5dJoIeuJstDswZFNJaeXFZ7jlKGMSwNae9ir7s21-NG3kTo6evinYz4QRXQp-3esuIQ5xvk3QWxNXoLyCKZ6uKDoAxSBNXiVoxBeEHxEL-Ex_no2UgpUCIcfMWYPmoK-gOftl7ZUX0gxjXCD3QMxL42VW-c4pgaOwTPMh6RrMOIJUkB.gif']
        });

        if (type === fallbackType.TIMEOUT) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH6ywQe16NAAAAFu-NuOBNLlu_liWWWbdnIX4gbfWkfPB5gJqM1UUbFZ7NM4dXnNpWJThgIfLIp9a1vQijWlyy82F1FbN0YWmdoEpaCSINUiKXhZQebyga13FzAMF5nWPhL6eOGt8ajVWQrC6zHJw_zQdbxPD_ASremEI3AxJmho2-Om-YpPWIUI_Bx6JLHE0TnD5rY27k9kjV.gif";
        } else if (type === fallbackType.ERROR) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH6_2Y80uNAAAAQiEkw23qm8xIEOdM3qPDjyNE_rbS1cSUl2mEeZKyfuyPwpTogiQtHd_MccnTBn5Kl80h5HoJBxy4VjXFgFMBSONycaD9FOs0xD8Wdz5lnWi6w3hL6hSwhmStHsZ4NBKvFjBzlJxpLKDFgca6hIg-6geBsjN6XLkDzYn-h1Cw_LSa71Ym2RLkrR9y_k7wn__j.gif";
        } else if (type === fallbackType.EMPTY) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH69BLVAWNAAAArAcS8qreWuA-NZQoOHuZHH6YbHpyLO0ptdGKbMZAAFx0UXWQ8DnrO0ncphZj9Baa_KJKkp1mhtqayn3deY81Cc4lbkHvdPx5Il9TYInun0ap2TqAE4GEP-DxcsHuStG9IE2uful6m25AgQpZNDz1ROJFDutiVcp2o0UXuV7_N148gJU5mIHQpI0ItBm9FvG7.gif";
        }

        logRender(type);
      }
		}

		// Stat utils
    function getAreaRatio(container, selector) {
        var elems = container.querySelectorAll(selector);
        var totalArea = 0;

        for (var i = 0, l = elems.length; i < l; i++) {
            var el = elems[i];
            var w = (el.clientWidth === 0) ? 0 : (el.width || el.clientWidth);
            var h = (el.clientHeight === 0) ? 0 : (el.height || el.clientHeight);
            totalArea += w * h;
        }

        if (totalArea === 0) {
            return totalArea;
        }

        var containerArea = container.clientWidth * container.clientHeight;
        return totalArea / containerArea;
    }

		function onContextReady() {
			Ya.Context.AdvManager.render({
				blockId: "R-443824-77",
				renderTo: "yandex_ad_R-443824-77_226290686",
				statId: "428",
				async: true,
				disableHighlight: true,
				onRender: function (data) {
				  if (fallbackInvoked) return;
				  clearTimeout(fallbackTimeout);
				  
				  function logYandexState(metric, rlog_message) {
				    var src = '//mail.radar.imgsmail.ru/update?p=octavius&t=adman-ya&v=1&i=' + metric + ':1&rnd=' + Math.random();
				    
				    if (0 && rlog_message) {
      				try {
      						src += '&rlog_message=' + encodeURIComponent(JSON.stringify(rlog_message));
      						src += '&rlog=adman-ya_' + metric;
      				} catch (e) {
      				}
				    }
				    
				    new Image().src = src;
				  }
				  
				  if (data && data.refresh) {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH6xrkkBaNAAAAvnP32_3Ow_48mHGX8pBJtfADNqR9epUfHJgE2o0Y9tMYlLBbVtVT9v8oBwTHY2nTrUhjZJXL0a8QuROYER_IcV-oiHawYaol-RC7HBy63ThVjsanaHhyDonnwbTx2jQGiCZJpygHSOri3hhAhVRm-myzGDG1w1eFGiFTBIQK8DDsKxHMUmHdINqhqgcdfXg8.gif";
            
            logYandexState('refresh');
          } else {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH66AmkRONAAAA3SXe5YhN44snqjPvrlzJl_N6pN9MW0QBygm4rOWCyeRIjD0guZhnFChFLdZ1ThOGYFQA5iTA6zm3xEifTZofHt10KAfCZccy9S-HRXnp2CPWVxlIaTj0gXgFBf96yGWEg3cU8l0Zwj5JdN1lyiZmQr2o-_fzhuvCaR4gFJpSWLWoyzOIr44lG-QKkdMy3H9c.gif";
            if (firstDirectRender) {
              firstDirectRender = false;
              RB.I({
                el: document.getElementById("yandex_ad_R-443824-77_226290686"),
                pixels: ['https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH655S8BCNAAAAGQa8SXByynMmbVJtputcZWpBXI2u0DndLqbkAhdgYih66Ag-CASfyb7Sr0KutPH1EfzQOrxK_WVlEchNIB1MD0XUgwiJoWTG7d6f3pxQNbyVmVnXsF31OXrZpEcmk_jzkJFCG49VGOWCRuzKDzW-yx939Mv5JDntItoS6oWefzrLn7kmCtjKHf0wnYKIRAcZ.gif']
              });

              logRender();
              
              try {
                var yaNode = document.getElementById("yandex_ad_R-443824-77_226290686");
                if (yaNode) {
                  if (yaNode.innerHTML) {
                    logYandexState('not_empty_after_render');
                  } else {
                    fallback(fallbackType.EMPTY);
                    logYandexState('empty_after_render', data);
                  }
                }
              } catch (e) {}
            }
          }
          if (getAreaRatio(document.getElementById("yandex_ad_R-443824-77_226290686"), 'img') > 0.3) {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AGbKvubQc07DjJa0UgrVg_dA3Nsw7fPy_WKYBOIjto14IQwbDMIxynln7QcQzH8-ooeYC4PQ6Px7rjmR6fcLZlVblwqJdkIqOuVWiVAVRiX0J2VEOwDT3j-2pk9mobRP6tSVq8LV6xGZzuq6CdHkOmHV29SJyieMx-z2p9rPVZH60kbzxuNAAAA-iUCpubnu_ALXKx_I_RVOCJOStfyIbE2iSBFvVWQDwIgUug2Ncpe6UqtCwEI_dFH4xQD5_-eX8J8W_b__q2QUkSBJrb2QxQslWzIyA_FNAg0yjWjWv9p-yp3Q7EpKqjHNc2Xm04aPqktCOkfIZ1E4LNsrMZf-qNrdWGfv9skmF2eu6rxK9wLE6pTj6mZBxrV.gif";
          }
				}
			}, function () {
			  if (firstDirectRender) {
			    fallback(fallbackType.EMPTY);
			  }
			});
		}
    
    w.YA_MAILRU_OK = true;
    
  	if (w.Ya && Ya.Context && Ya.Context.AdvManager && Ya.Context.AdvManager.render) {
  		onContextReady();
  	} else {
  		w[n] = w[n] || [];
  		w[n].push(onContextReady);
  
  		t = d.getElementsByTagName("script")[0];
  		s = d.createElement("script");
  		s.type = "text/javascript";
  		s.src = "//yandex.ru/ads/system/context.js";
  		s.async = true;
  		s.onerror = function () {
        fallback(fallbackType.ERROR);
      };
  		t.parentNode.insertBefore(s, t);
  	}
	})(this, this.document, "yandexContextAsyncCallbacks");
