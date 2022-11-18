
      try {
        if(window.navmet===undefined)window.navmet=[]; window.$Nav && $Nav.when('$').run('defineIsArray', function(jQuery) { if(jQuery.isArray===undefined) { jQuery.isArray=function(param) { if(param.length===undefined) { return false; } return true; }; } }); window.$Nav && window.$Nav.when("$","subnav.initFlyouts","constants","nav.inline").build("subnav.builder",function(a,t,e){var n=a("#navbar");return function(s){var r=a("#nav-subnav");if(0===r.length&&(r=a("<div id='nav-subnav'></div>").appendTo("#navbar")),r.html(""),n.removeClass("nav-subnav"),s.categoryKey&&s.digest){r.attr("data-category",s.categoryKey).attr("data-digest",s.digest).attr("class",s.category.data.categoryStyle),s.style?r.attr("style",s.style):r.attr("style")&&r.removeAttr("style");var i=function(t){if(t&&t.href){var n="nav-a",s=t.text,i=t.dataKey;if(!s&&!t.image){if(!i||0!==i.indexOf(e.ADVANCED_PREFIX))return;s="",n+=" nav-aText"}var d=t.image?"<img src='"+t.image+"'class='nav-categ-image' ></a>":s,l=a("<a href='"+t.href+"' class='"+n+"'></a>"),v=a("<span class='nav-a-content'>"+d+"</span>");if("image"===t.type&&(v.html(""),l.addClass("nav-hasImage"),t.rightText=""),t.bold&&!t.image&&l.addClass("nav-b"),t.floatRight&&l.addClass("nav-right"),t.flyoutFullWidth&&"0"!==t.flyoutFullWidth&&l.attr("data-nav-flyout-full-width","1"),t.src){var g=["nav-image"];t["absolute-right"]&&g.push("nav-image-abs-right"),t["absolute-right"]&&g.push("nav-image-abs-right"),a("<img src='"+t.src+"' class='"+g.join(" ")+"' alt='"+(t.alt||"")+"' />").appendTo(v)}t.rightText&&v.append(t.rightText),v.appendTo(l),i&&(a("<span class='nav-arrow'></span>").appendTo(l),l.attr("data-nav-key",i).addClass("nav-hasArrow")),l.appendTo(r),r.append(document.createTextNode(" "))}};if(s.category&&s.category.data&&(s.category.data.bold=!0,i(s.category.data)),s.subnav&&"linkSequence"===s.subnav.type)for(var d=0;d<s.subnav.data.length;d++)i(s.subnav.data[d]);n.addClass("nav-subnav"),t()}}});
      } catch ( err ) {
        if ( window.$Nav ) {
          window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
            metrics.increment('NavJS:AboveNavInjection:error');
            log(err.toString(), {
              'attribution': 'rcx-nav',
              'logLevel': 'FATAL'
            });
          });
        }
      }
    