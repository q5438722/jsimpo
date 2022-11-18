
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
  		var slotId = '635895';
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

      var trgB = document.getElementById("trg-b-111463403-345092392");
      var trgYa = document.getElementById("yandex_ad_R-443849-116_345092392");

      if (trgYa) {
        trgYa.style.display = 'none';
      }

      if (trgB) {
        if (trgB.getAttribute("data-hide-345092392") === "hide-banner") {
          trgB.removeAttribute("data-hide-345092392");
        }
  			trgB.style.display = "block";
  			var container = document.querySelectorAll('#trg-b-111463403-345092392 .trg-v-banner');
        if (container.length) { container = container[0] || null; }
        if (container && container.playVideoCheck && typeof container.playVideoCheck === 'function') {
            container.playVideoCheck();
        }
        new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00mBz13qEAAAA_kv0kKVixdVmQft87-xxSABztdKTagd_NVLoWmEZWkLHcuc7MDKiuhYgG51uJq-1s6DIuNCboLGpS7Y8AlAn_fgWsM-2KZMm8UUB_Q2D-8BjUnVoBk4nVJAGcSgiQmSkjjsaceFAUq6gH757LP4WP-Jr1K3pF3_ZFAj9uJvJA_M58hdgxBvbjwjBIpS5cPg2.gif";
        RB.I({
            el: trgB,
            pixels:  ['https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00t6Daw6EAAAA6aPyKtms9MrpF64nlRAQ7Dj5rt70WPR8PW9-ynzQAc6B1124NjMc_gysl-12UVz6XAMjcZLlLSX5qVBg4P6ALw_MIk1JdK4ZUrSAOTvE4m2CDUsfh44_BvKaIcTMiBBp0MfjcNJQ6Io7wPiA7PjQV0YRgLcVQC0EhX3NIN837j6QyiS3e4WW66g50e8dqznQ.gif']
        });

        if (type === fallbackType.TIMEOUT) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00mNbbEaEAAAAlwLdKBA830-aXqmYQFSvMxjcfcNYjJmhxsa06qjDiYokIC3gTvH9Ycsj2RfEpa0k_m8mGapO7Q02bhFTSaIfNt7Z3ktGTUmuuen000zWR5ZKvodiuQq9KwcW4p_erRfaeq26ct_74Ls1Ewxd7qiiD2aK5B44De0t_0cJinLwMIAAM_XkNu6YJZSWReo8IBqn.gif";
        } else if (type === fallbackType.ERROR) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00iNwSXiEAAAAgcP0RjV1bA0AAm2jPpwp5CzVaUOoQfRvKXH1GEO8C7Ckk2_WqvHEhX1iLS_B6TWYyCmwe6yt3EHtAdNKNNEUiWFOtxjdSAdxMZkg6Vu-OWFtc1x8dlR42ldx3ILx3OGCukvSKn6Pn1DzuTwdBqi89A0sZUTnfrQSGfTqYSO_2Vz4IJMzZCfaJGdEkdYZ4wuO.gif";
        } else if (type === fallbackType.EMPTY) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00vneliGEAAAAqnQ88Hf8VQ0ahlylLeOpcO7p_-LaywWf4yXbw74TojGsLHiRke3pCyIP8fJKVXyq0gIyAvaOEhOBX_xBHzXty6eXkZwOGYR98-Lzj-Fsdp3w7dQv56xLa8h7KesCKCbp17FL6eTBXFODHkK2CbwbnAnBc3F77_Xq8G7O4kF9kmuKDtKHAapor2ejGct7gJNy.gif";
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
				blockId: "R-443849-116",
				pageNumber: "345092392",
				renderTo: "yandex_ad_R-443849-116_345092392",
				statId: "42800036",
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
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00oB4NgCEAAAAEKXej5raX8iiICgZ6pvCBxMLJkAADU9rr9OMpcI9ubWselFWYnxB1uaYuvcrp4OHeDPS7HjqYWKinhjy63Brg3DWhp1ZvrNtwCDCI7YycMQYNL8yF5M0Mz9k0Va7gQh7lkQlCIrafz-pp6ilU6fwN150wtk4nJpaGaF2XSsLbsbbi2Uj9jW2vXlKbMKEpKh7.gif";
            
            logYandexState('refresh');
          } else {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00i3DWWiEAAAAn9nkajcmZjoLaWond03sWOAB1zJI34guM0N__mON61K0YMjzzZJYwamq65dTSGPBUD6ahWqjVHrGmScU7GVG3gehuaag3xIQ2dlJa0iV7ar86H--GEMon_xndDRmNX5AYka0egNJxXf-aFDbM0YlrTck_rRW6UpMPS4LMie85TQ9895aqNU_eOK6kiKgk3i_.gif";
            if (firstDirectRender) {
              firstDirectRender = false;
              RB.I({
                el: document.getElementById("yandex_ad_R-443849-116_345092392"),
                pixels: ['https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00ppDKTqEAAAAqZW69SR3f2-Dtj04UyO7LEI9I-ezJFg0aTSvs8FQ4EaZ8sckTdBSkJwqaLBaIFD4Z3tzvvlLMqV21h6GfV7RhIIVgBEF002WxNiCDR-lEqaX1MVNRvfZ8_APLZFNMahyQnP38CUn7QGspqyEzRZVswl40-d0j57n0VZrcSvEz0zx_1LkzxXGfgRr8jRWPsXP.gif']
              });

              logRender();
              
              try {
                var yaNode = document.getElementById("yandex_ad_R-443849-116_345092392");
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
          if (getAreaRatio(document.getElementById("yandex_ad_R-443849-116_345092392"), 'img') > 0.3) {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00m9LSUqEAAAA5pm7ZEavyOAeXhm2xJJFgdVIGTwTo-5sDDQdhCL-VGuSHXPhhhpnMtv5U6ZBWoj46y6CkAP0rldk-7LZa9Me4nA6_18FxXXNUNuSnerZtDAHgyVg0GdMJiRb5B2DK8D8gew2LB-_f4yCVy_gJcus-RjS-rVI70wr0KFioFmQccQrlMDB4f_AQU4B1HdgtcZs.gif";
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
