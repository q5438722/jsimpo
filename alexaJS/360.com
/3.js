
		(function (d) {
			var config = {
				families: ['wf1'],
				hashes: ['ec4c5fb' /*方正兰亭粗黑*/],
				selectors: ['.wf1'],
				scriptTimeout: 3000,
				async: true
			},
				h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive' },
					config.scriptTimeout), tk = d.createElement('script'), s = d.getElementsByTagName("script")[0], I = 'interactive', r = f = false, a;
			d.onreadystatechange = function () { if (d.readyState === I) r = true }; h.className += ' wf-loading';
			tk.src = 'https://s.ssl.qhres2.com/pkg/qiziku/fontLoader.js'; tk.async = config.async; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != 'complete' && a != 'loaded') return; f = true; clearTimeout(t); if (r) { try { new FontLoader(config) } catch (e) { } } else { d.onreadystatechange = function () { if (d.readyState == I) { try { new FontLoader(config) } catch (e) { } } } } }; s.parentNode.insertBefore(tk, s)
		})(document)
	