
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
  		var slotId = '635894';
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

      var trgB = document.getElementById("trg-b-111463398-319930708");
      var trgYa = document.getElementById("yandex_ad_R-443849-118_319930708");

      if (trgYa) {
        trgYa.style.display = 'none';
      }

      if (trgB) {
        if (trgB.getAttribute("data-hide-319930708") === "hide-banner") {
          trgB.removeAttribute("data-hide-319930708");
        }
  			trgB.style.display = "block";
  			var container = document.querySelectorAll('#trg-b-111463398-319930708 .trg-v-banner');
        if (container.length) { container = container[0] || null; }
        if (container && container.playVideoCheck && typeof container.playVideoCheck === 'function') {
            container.playVideoCheck();
        }
        new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00tkCkTiEAAAAH31hoY45myovKET3rIunGwJNjS3ctlB8XbdeK7muFJ3K8bOXshtdxBqoZ5odHt3-eBjqeefVgxvgt8s9Twwj1ybGKyfn6bXEwXf_kUVBRDFlBLP3FkwNBvryCPlCyn_kROyxfh79-Ufynup9OB7hnM9EKwWgHrkCEz2iDTQNSif8oDGpqFPku0rYeXUKTIti.gif";
        RB.I({
            el: trgB,
            pixels:  ['https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00k7rdQKEAAAAI9EcXoEVDG1YrwsR_gEhTKJUBsQPitIC3sOFj-I-C8lYbd3ZiKGQSLYejDowgeCUPHg-uPHU_88_2eRdxrJMdXqWFVu_Z_qF5ywxb3kxir6SXwvMOWogbEbSRonIcw5-8BojLoT9nDb46qgVXw30X9MB-1IDJjyAta6dcu-f_uCKpzGf91LjZ6Deg5xEG1p0.gif']
        });

        if (type === fallbackType.TIMEOUT) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00sNXWTGEAAAAOtGfF-oiFw9ZoznvSwxp2yUSBqlOFN8bl0nF8TbR1sC8NctyG8pZ8qiW4OLFuuWsGpZXlipVr1K0emAmk37pGqU_cVsIhmezOVJhOEQxcAl5cC8z2xp15mwLGZKMx_0IFolMji4D62-AUYe-m5LVKhplweZchv_Rg5jsajEgJNvdvGFfmKOYbduvw9mwVefF.gif";
        } else if (type === fallbackType.ERROR) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00s_Q_WeEAAAAx0f--B8Kw2bFV6edZONmAXQ2qaSuhLqGdyGRgX_dv55K35RPGk3lDRCE0TH7cm49ZYV3eNAhmEKT9nRWoLxdgAuW2n8HXDzfnP79vtY8M9OZNJyObq1pwT9KbuaFlLzUXb9FV7Bvxn5GwuVzZnqtsV9OTXuNlKxmMlwd1jQGSxZegjUruJ8OquVP5rmyf7Y-.gif";
        } else if (type === fallbackType.EMPTY) {
          new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00gzHLxmEAAAAgUM7DWBz5Tb9l9-gFZCW89P39DYr2RZPDhrQSmG-Nt2XaipEInvEJ3pMZgqGEOfGEYOP61j8VtaCR62CYQL1wbpg2Xq5gaRQmx9yg3ggmGCjk4Pj1DmB6PZmqF8O8UXGOeL0us0fkaA7QkXAt14YqQe9r9Z00-kvdv8cWAq70VDJoX_1zAX1H7F_6bNu4xtS.gif";
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
				blockId: "R-443849-118",
				pageNumber: "319930708",
				renderTo: "yandex_ad_R-443849-118_319930708",
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
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00qPpdjeEAAAAp7MtT_uIY5z-tfEzIzGgnfJ-lKsbYW8OjcEv7Bf5ktCal6ubWIIBXbDFt49uqQ8vpaZot6QDaHVFOS8nsCbhrERwk0QoPj46TzDMvt-PzHJMmo4ozbChGcKDBR0TBDdtaMs115_O-bUnpnhLrbmyl0X-_2ZTOP_TWsvQNRxXCGy0GUiVOiXyYf6XuVE3djZe.gif";
            
            logYandexState('refresh');
          } else {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00o_uDDyEAAAAYVJntmLzh9O7Pt3BSdo6V1Pq2tAkG9oRynhLyHvsxmF2VJK44eEjsHhIRFSwkKL6PGP-nEX1c9QkdC8R-F15TnLOPn62WO9DMjJWF0Fqikfw_WZZdBF3BHiK1gYAVBfwTf_RXnUBBQGhQ4k8-z1WhfCyCHHkFdWrdyXpnPRpWIhE9ww07f7GWQ08wAue0b-N.gif";
            if (firstDirectRender) {
              firstDirectRender = false;
              RB.I({
                el: document.getElementById("yandex_ad_R-443849-118_319930708"),
                pixels: ['https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00ke8XnSEAAAAPUowO7VsaHLXrhBls7KJx5UcY0WMGAxKXA2azNU1w8z3Gr4vKDvMFbVDNfvNmgl48U2hzv8JPQ2RTVTYyEx9wD1Z0j7Iu7vm4-LH4VB_J7rNrNNtdyjF5aBxDok4KeJgcjLhlSAoZWmyAw-PiyHh5C7cDSbExTr40Y8mFTLBUZtYpRiY5FwF8kHTuORN4qGm.gif']
              });

              logRender();
              
              try {
                var yaNode = document.getElementById("yandex_ad_R-443849-118_319930708");
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
          if (getAreaRatio(document.getElementById("yandex_ad_R-443849-118_319930708"), 'img') > 0.3) {
            new Image().src = "https://rs.mail.ru/pixel/AADT9AF4_TURwkZCkjK4Abo3gSMidRzs3nfecGcpxz-5Zv0qZZTTRjYP2NF2mJDjY5KZ0evmULMIcedcQ5r7yNse8XYymvAVEL1VMsQxNWGZmxj7CrK2kXM7_W3h_1WjCg3JbIuNhVlYymBSggvQlhtjyqGKtXIX0nhUFnXrPF7SQBk00tx6QDWEAAAAAkqgLhyHVEQ7_Qs1XfEc3GQo2llWg6SpMzMsAykIwnMq2q7PKdrDgyBvoz8Ai8Ka86SO8dXBuUJO-46okPU6UHuNuYOqjuG1hVJBgEK6qv9v6IePs9Qk-CT9mvYgnObLJzccKl9ZAQmyQQ6t7dz6hpy0sX2Voado6WGKpYAk_RweJvLaZkqlmrTdsgVMpvzU.gif";
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
