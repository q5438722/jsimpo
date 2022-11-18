
  (function(prefix){
    try{
      
      function getAdsContainers() {
  			var ADS_CLASS = prefix + '-visibility-check',
  				ADS_COUNTER_CLASS = ADS_CLASS + '-counter',
  				ADS_CALLBACK_CLASS = ADS_CLASS + '-callback',
  				COUNTER_ATTR = 'data-counter',
  				COUNTER_ATTR_UNDETERMINED = COUNTER_ATTR + '-un',
  				COUNTER_ATTR_NONVIEWABLE = COUNTER_ATTR + '-nv',
  				CALLBACK_ATTR = 'data-callback',
  				OBSERVER_ATTR = 'data-observer',
  				containers = [],
  				countables = [],
  				i, k, counters, _counter, _observer;
   
  			containers = getByClass(document, ADS_CLASS);
  			for (i = containers.length - 1; i >= 0; i--) {
  				var counters = getByClass(containers[i], ADS_COUNTER_CLASS, 'span');
  				_counter = containers[i].getAttribute(COUNTER_ATTR);
  				_observer = containers[i].hasAttribute(OBSERVER_ATTR);
  				countables[i] = {
  					el: containers[i],
  					pixels: [],
  					pixels_undetermined: [],
  					pixels_nonviewable: [],
  					observer: _observer
  				};
  				if (_counter) countables[i].pixels.push(_counter);
  				for (k = counters.length - 1; k >= 0; k--) {
  					if (counters[k].parentNode === countables[i].el) {
              _counter = counters[k].getAttribute(COUNTER_ATTR);
              if (_counter) {
                countables[i].pixels.push(_counter);
              }
              _counter = counters[k].getAttribute(COUNTER_ATTR_UNDETERMINED);
              if (_counter) {
                countables[i].pixels_undetermined.push(_counter);
              }
              _counter = counters[k].getAttribute(COUNTER_ATTR_NONVIEWABLE);
              if (_counter) {
                countables[i].pixels_nonviewable.push(_counter);
              }
            }
  				}
  				var callback = getByClass(containers[i], ADS_CALLBACK_CLASS, 'span');
  				if (callback[0]) {
  				  var _callback = callback[0].getAttribute(CALLBACK_ATTR);
  				  if (_callback && window.RB_CALLBACKS && window.RB_CALLBACKS[_callback]) {
  				    countables[i].callback = window.RB_CALLBACKS[_callback];
  				  }
  				}
  				if (!countables[i].pixels.length) countables.splice(i, 1);
  			}
   
  			return countables;
  		}
   
  		function getByClass(parent, childClassName, tagName) {
  			if (parent.getElementsByClassName) {
  				return parent.getElementsByClassName(childClassName);
  			} else if (parent.querySelectorAll) {
   
  				return parent.querySelectorAll('.' + childClassName);
  			} else {
  				var els = [];
  				var tmp = parent.getElementsByTagName(tagName ? tagName : "*");
  				var regex = new RegExp("(^|\s)" + childClassName + "(\s|$)");
  				for (var i = 0; i < tmp.length; i++) {
  					if (regex.test(tmp[i].className)) {
  						els.push(tmp[i]);
  					}
  				}
  				return els;
  			}
  		}
   
  		RB.I(getAdsContainers());
      
    }catch(e){}
  }('mailru'))
